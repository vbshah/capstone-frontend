import React, { Component } from "react";

class Items extends Component {
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
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",

            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("csvUpload")}
        >
          Upload CSV File
        </div>
        <div
          style={{
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("displayContent")}
        >
          Display Data
        </div>
        <div
          style={{
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("preProcessing")}
        >
          Preprocessing Data
        </div>
        <div
          style={{
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("visualization")}
        >
          Data Visualization
        </div>
        <div
          style={{
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("transformation")}
        >
          Data Tranformation
        </div>
        <div
          style={{
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("mining")}
        >
          Data Mining
        </div>
        <div
          style={{
            backgroundColor: "#3b5998",
            width: "100%",
            marginBottom: "20px",
            cursor: "pointer",
            textAlign: "center",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "5px"
          }}
          onClick={e => this.props.changeDisplay("codebox")}
        >
          Your Code Box
        </div>
      </div>
    );
  }
}

export default Items;
