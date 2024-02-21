/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

const SwitchButton =  ({ customContainer,  outerClass, switchButtonID, inputClass, helperClass, onChange, title, disabled, ...rest }) => (
    customContainer  ?  customContainer
    : ( <span className={outerClass}>
        <input id={switchButtonID} className={inputClass} type="checkbox" {...rest} onChange={(e) => onChange(e)} disabled={disabled} />
        <label htmlFor={switchButtonID} className={helperClass} title={title} ></label>
      </span> )
  )

SwitchButton.propTypes = {
  outerClass: PropTypes.string,
  switchButtonID: PropTypes.any,
  inputClass: PropTypes.string,
  helperClass: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.any,
  disabled: PropTypes.bool,
  customContainer : PropTypes.any
} 

SwitchButton.defaultProps = {
  outerClass: "padding-bt-5 padding-tp-5 padding-lt-10 pull-left",
  switchButtonID: "reactSwitchButtonID",
  inputClass: "ts-input",
  helperClass: "ts-helper",
  onChange: () => {},
  title: "",
  disabled: false
};

export default SwitchButton;