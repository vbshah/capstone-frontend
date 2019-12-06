import React, { Component } from "react";

class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentState :'csvUpload'
    }

    this.selectState = this.selectState.bind(this);

  }

  selectState(currentState) {
    this.setState({currentState})
  }

  render() {
    return (
      <div
        style={{
          width: "15vw",
          height: "110vh",
          // backgroundColor: "#0078FF",
          borderRight: "1px solid black",
          float: "left",
          paddingTop: "10px",
          color: "white",
        }}
      >
        <div
          style={{
            backgroundColor: this.state.currentState === 'csvUpload' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",

            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("csvUpload");
            this.selectState("csvUpload");
          }}
        >
          Upload CSV File
        </div>
        <div
          style={{
            backgroundColor: this.state.currentState === 'displayContent' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("displayContent");
            this.selectState("displayContent");
          }}
        >
          Display Data
        </div>
        <div
          style={{
            backgroundColor: this.state.currentState === 'preProcessing' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("preProcessing");
            this.selectState("preProcessing");

          }}
        >
          Preprocessing Data
        </div>
        <div
          style={{
            backgroundColor: this.state.currentState === 'visualization' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("visualization");
            this.selectState("visualization");

        }}
        >
          Data Visualization
        </div>
        <div
          style={{
            backgroundColor: this.state.currentState === 'transformation' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("transformation");
            this.selectState("transformation");

          }}
        >
          Data Tranformation
        </div>
        <div
          style={{
            backgroundColor: this.state.currentState === 'mining' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("mining");
            this.selectState("mining");

        }}
        >
          Data Mining
        </div>
        <div
          style={{
            backgroundColor: this.state.currentState === 'codebox' ? "#17a2b8" : "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => {
            this.props.changeDisplay("codebox");
            this.selectState("codebox");
        }}
        >
          Your Code Box
        </div>
      </div>
    );
  }
}

export default Items;
