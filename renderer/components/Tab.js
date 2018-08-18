import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { has, isEmpty } from "lodash";

// const Tab = ({ name, setActiveTab, id, closeTab }) => {
//   return (
//     <li className="texteditor tab" onClick={setActiveTab.bind(null, id)}>
//       <div className="title">{name}</div>
//       <div className="close-icon" onClick={closeTab.bind(null, id)} />
//     </li>
//   );
// };

class Tab extends PureComponent {
  state = {
    name: "",
    id: -1
  };
  static getDerivedStateFromProps(nextProps) {
    let nextState = {};

    if (has(nextProps, "name") && !isEmpty(nextProps.name)) {
      nextState = { ...nextState, name: nextProps.name };
    }

    if (has(nextProps, "id") && nextProps.id > -1) {
      nextState = { ...nextState, id: nextProps.id };
    }
    
    return nextState;
  }

  _handleSetActiveTab = event => {
    const { id } = this.state;
    this.props.setActiveTab(id, event);
  };

  _handleCloseTab = event => {
    const { id } = this.state;
    this.props.closeTab(id, event);
  };

  render() {
    const { name } = this.state;
    return (
      <li className="texteditor tab" onClick={this._handleSetActiveTab}>
        <div className="title">{name}</div>
        <div className="close-icon" onClick={this._handleCloseTab} />
      </li>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  closeTab: PropTypes.func.isRequired
};

export default Tab;
