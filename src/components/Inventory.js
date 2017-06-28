import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div key="key" className="fish-edit">
        <input type="text" name="name" placeholder="fish"/>
        <input type="text" name="price" placeholder="fish"/>
        <select type="text" name="status" placeholder="fish">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea type="text" name="desc" placeholder="fish"></textarea>
        <input type="text" name="image" placeholder="fish"/>
      </div>
    )
  }
  render() {
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
