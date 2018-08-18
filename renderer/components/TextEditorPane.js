import React, { PureComponent } from "react";
import TextEditor from "./TextEditor";
import TabContainer from "./TabContainer";
import PropTypes from "prop-types";
import { has, isEmpty, isEqual } from "lodash";

// const TextEditorPane = ({ appState, addEditorInstance, setActiveTab, closeTab }) => {
//   const { openTabs, activeTab } = appState;
//   const editorArr = openTabs.map(tab => {
//     return (
//       <TextEditor
//         key={tab.id}
//         id={tab.id}
//         tab={tab}
//         activeTab={activeTab}
//         addEditorInstance={addEditorInstance}
//       />
//     );
//   });

//   return (
//     <ride-pane>
//       <TabContainer appState={appState} setActiveTab={setActiveTab} closeTab={closeTab} />
//       {editorArr}
//     </ride-pane>
//   );
// };

class TextEditorPane extends PureComponent {
  state = {
    openTabs: []
  };

  static getDerivedStateFromProps(nextProps) {
    let nextState = {};
    if (has(nextProps, "appState.openTabs") && !isEmpty(nextProps.appState.openTabs)) {
      nextState = { ...nextState, openTabs: nextProps.appState.openTabs };
    }
    return nextState;
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(this.props.appState.openTabs, prevProps.appState.openTabs)) {
      this.setState({ openTabs: this.props.appState.openTabs });
    }
  }

  render() {
    const { openTabs } = this.state;
    const {
      addEditorInstance,
      setActiveTab,
      closeTab,
      appState,
      appState: { activeTab }
    } = this.props;
    const editorArr = openTabs.map(tab => {
      return (
        <TextEditor
          key={tab.id}
          id={tab.id}
          tab={tab}
          activeTab={activeTab}
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
  }
}

TextEditorPane.propTypes = {
  appState: PropTypes.object.isRequired,
  addEditorInstance: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired
};

export default TextEditorPane;
