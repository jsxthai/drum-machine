import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeButton = this.handleChangeButton.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleClick = (e) => {
    this.props.updateDisplay(e.target.id);
    this.playSound();
    var id = e.target.id;
    this.handleChangeButton(id);
  };

  handleChangeButton(id) {
    document.getElementById(id).classList.add("clicked");
    setTimeout(
      () => document.getElementById(id).classList.remove("clicked"),
      100
    );
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    console.log(sound.parentElement.id);
    let idDiv = sound.parentElement.id;
    this.handleChangeButton(idDiv);
    this.props.updateDisplay(idDiv);

  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <audio src={this.props.url} id={this.props.keyTrigger}></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
