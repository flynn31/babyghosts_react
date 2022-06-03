import React from "react";
import { Collapse } from "react-collapse";

import { css } from "@emotion/css";

class DropdownItem extends React.Component {
    state = {
        isDropdownOpen: false,
        dropdownToggleIcon: "+"
    };

    onDropdownClicked = () => {
        this.setState(prevState => ({
            isDropdownOpen: !prevState.isDropdownOpen,
            dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "-" : "+"
        }));
    };

    render() {
        return (
            <div
                className={
                    this.props.theme === "dark"
                        ? accordionContainerDark
                        : accordionContainerLight
                }
                id={this.props.id}
            >
                <div
                    className={
                        this.props.theme === "dark" ? headerBarDark : headerBarLight
                    }
                >
                    <div>{this.props.title}</div>
                    <button
                        className={
                            this.props.theme === "dark"
                                ? openAccordionToggleDark
                                : openAccordionToggleLight
                        }
                        onClick={this.onDropdownClicked}
                    >
                        {this.state.dropdownToggleIcon}
                    </button>
                </div>
                <Collapse isOpened={this.state.isDropdownOpen}>
                    <div className={displayText}>{this.props.children}</div>
                </Collapse>
            </div>
        );
    }
}

export default DropdownItem;

//Light Theme
const headerBarLight = css`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid gray;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 20px;
`;

const openAccordionToggleLight = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const displayText = css`
  text-align: left;
`;

const accordionContainerLight = css`
  margin: 20px;
  color: gray;
`;

//Dark Theme
const headerBarDark = css`
  display: flex;
  justify-content: space-between;
  border-top: 2px solid white;
  margin-bottom: 12px;
  padding: 5px;
  font-size: 20px;
`;

const accordionContainerDark = css`
  margin: 20px;
  color: white;
`;

const openAccordionToggleDark = css`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;
`;
