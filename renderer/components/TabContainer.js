import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const TabContainer = ({ appState, setActiveTab, closeTab }) => {
  const { openTabs } = appState;
  const tabs = openTabs.map((tab, index) => {
    return (
      <Tab
        key={index}
        name={tab.name}
        setActiveTab={setActiveTab}
        id={tab.id}
        closeTab={closeTab}
      />
    );
  });
  return <ul className="list-inline tab-bar inset-panel tab-container">{tabs}</ul>;
};

TabContainer.propTypes = {
  appState: PropTypes.object.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  closeTab: PropTypes.func.isRequired
};

export default TabContainer;
