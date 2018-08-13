import React from "react";
import TextEditor from "./TextEditor";
import TabContainer from "./TabContainer";
import PropTypes from "prop-types";

const TextEditorPane = ({ appState, addEditorInstance, setActiveTab, closeTab }) => {
  const { openTabs } = appState;
  const editorArr = openTabs.map(tab => {
    return (
      <TextEditor
        key={tab.id}
        id={tab.id}
        tab={tab}
        activeTab={tab.activeTab}
        addEditorInstance={addEditorInstance}
      />
    );
  });
  
  return (
    <ride-pane>
      <TabContainer appState={appState} setActiveTab={setActiveTab} closeTab={closeTab} />
      {editorArr}
    </ride-pane>
  );
};

TextEditorPane.propTypes = {
  appState: PropTypes.object.isRequired,
  addEditorInstance: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired
};

export default TextEditorPane;
