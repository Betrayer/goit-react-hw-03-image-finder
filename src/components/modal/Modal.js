import React, { Component } from "react";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.toggleModal();
    }
  };

  handleModalClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleModalClick}>
        <div className="Modal">
          <img src={this.props.modalUrl} alt="large img" />
        </div>
      </div>
    );
  }
}

export default Modal;
