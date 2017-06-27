import React from 'react'; // always need this in every module, along with everything else you need to import
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // second we're going to transition from / to /store/:storeID
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  // ReactDom.render()
  render() {
    // 1st way of rendering HTML onto DOM: w/o JSX:
    -->// return React.createElement('p', {classname: 'Testing'}, 'I  love you')
    // 2nd way of rendering HTML onto DOM: one-liner w/ JSX:
    -->// return <p>Hello</p>
    // 3rd way of rendering HTML onto DOM: multi-line w/ JSX:
    //-->
    return (
      // Comment like this here
      // <form className="store-selector" onSubmit={(this.goToStore.bind(this)}>
      // The above vunction syntax is more verbose, but ties the above call to the constructor
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
      {/* The above function syntax is easy but will be fired by any 'goToStore' */}
        {/* But omment like this over here! */}
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store -></button>
      </form>
      // <p></p> --> cannot do this, you must always only return one parent element.  Otherwise you get this error: 'Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag'
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
