import React from 'react';
import AddFishForm from './AddFishForm';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { database } from 'firebase';
import rebase from '../base';
// import { oAuthSignIn } from '../base';

class Inventory extends React.Component {

  // const app = firebase.initializeApp({
  //   apiKey: "AIzaSyBa0XbTBB8V3u84iY4fSw48-zIPP_TWDuY",
  //   authDomain: "catch-of-the-day-paco.firebaseapp.com",
  //   databaseURL: "https://catch-of-the-day-paco.firebaseio.com",
  //   projectId: "catch-of-the-day-paco",
  //   storageBucket: "catch-of-the-day-paco.appspot.com",
  //   messagingSenderId: "1021902196353"
  // });

  // const base = Rebase.createClass(app.database());

  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      uid: null,
      owner: null
    }
  }

  // const app = rebase.app;
  // const base = rebase.base;

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);

    rebase.app.auth().signInWithPopup(provider).then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log('token = ' + token + ', user = ' + user);
      const authData = {
        token: token,
        user: user
      }
      this.authHandler(authData);
    });

  }

  authHandler(authData) {
    console.log('authData = ', authData);
    if(!authData || typeof authData === "undefined") {
      console.log('did not receive authData for this signup session');
      return;
    }

    // grab the store info
    const storeRef = database(rebase.app).ref(this.props.storeID);

    // query the firebase once for the store data
    storeRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      // claim it as our own if there is no owner already

      if(!data.owner) {
        storeRef.set({
          owner: authData.user.uid
        });
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid
      })
    });
  }

  renderLogin() {
    const fbprovider = new firebase.auth.FacebookAuthProvider();
    const twprovider = new firebase.auth.TwitterAuthProvider();
    const ghprovider = new firebase.auth.GithubAuthProvider();

    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate(ghprovider)}>Log In with Github</button>
        <button className="facebook" onClick={() => this.authenticate(fbprovider)}>Log In with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate(twprovider)}>Log In with Twitter</button>
      </nav>
    )
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    // take a copy of that fish and update it with the new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div key={key} className="fish-edit">
        <input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
        <input type="text" name="price" value={fish.price} placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)} />
        <select type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.handleChange(e, key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)} ></textarea>
        <input type="text" name="image"  value={fish.image}placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)} />
        <button onClick={ () => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    const logout = <button>Log Out!</button>;
    // check if they are not logged in at all
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you aren't the owner of the store!</p>
          {logout}
        </div>
      )
    }
    return(
      <div>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  updateFish: PropTypes.func,
  removeFish: PropTypes.func,
  addFish: PropTypes.func.isRequired,
  loadSamples: PropTypes.func.isRequired,
  storeID: PropTypes.string.isRequired
};

export default Inventory;
