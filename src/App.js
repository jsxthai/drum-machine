import PadBank from "./components/PadBank";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "click drum ..."
    };
  }
  displayName = (name) =>{
    this.setState({
      display: name
    })
  }

  render() {
    return (
      <div className="App">
        <p id="display">{this.state.display}</p>

        <PadBank updateDisplay={this.displayName}/>
      </div>
    );
  }
}

export default App;
