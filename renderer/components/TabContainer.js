import React, { PureComponent } from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import { has, isEqual, isEmpty } from "lodash";

class TabContainer extends PureComponent {
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
    const { setActiveTab, closeTab } = this.props;
    const tabs = openTabs.map((tabs, index) => {
      return (
        <Tab
          key={index}
          name={tabs.name}
          setActiveTab={setActiveTab}
          id={tabs.id}
          closeTab={closeTab}
        />
      );
    });
    return <ul className="list-inline tab-bar inset-panel tab-container">{tabs}</ul>;
  }
}

TabContainer.propTypes = {
  appState: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired
};

export default TabContainer;
