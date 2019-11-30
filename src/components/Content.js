import React, { Component } from "react";
import renderIf from "render-if";
import Upload from "./upload";
import Display from "./display";
import PreProcessing from "./display/PreProcessing";
import Visualization from "./visualization";
import Tranformation from "./tranformation";
import Mining from "./mining";
import CodeBox from "./codebox";

class Content extends Component {
  state = {
    uploadRef: null
  };
  triggerDataUpdate = () => {
    const data = {
      file: {}
    };

    const { uploadRef: ref } = this.state;
    ref.getFileFromToken();
  };

  render() {
    const { display } = this.props;
    console.log("dis", display);
    const renderCsvUpload = renderIf(display === "csvUpload");
    const renderDisplay = renderIf(display === "displayContent");
    const renderPreProcessing = renderIf(display === "preProcessing");
    const renderVisualization = renderIf(display === "visualization");
    const renderTranformation = renderIf(display === "transformation");
    const renderMining = renderIf(display === "mining");
    const renderCodeBox = renderIf(display === "codebox");

    return (
      <React.Fragment>
        {renderCsvUpload(
          <Upload
            changeDisplay={this.props.changeDisplay}
            updateStateRef={e => this.setState({ uploadRef: e })}
          />
        )}
        {renderDisplay(
          <Display
            ref={e => (this.displayRef = e)}
            updateData={() => this.triggerDataUpdate()}
          />
        )}
        {renderPreProcessing(<PreProcessing />)}
        {renderVisualization(<Visualization />)}
        {renderTranformation(<Tranformation />)}
        {renderMining(<Mining />)}
        {renderCodeBox(<CodeBox />)}
      </React.Fragment>
    );
  }
}

export default Content;
