import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash.isstring';
import result from 'lodash.result';
import cx from 'classnames';

export default class DatBoolean extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.object.isRequired,
    path: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    labelWidth: PropTypes.string.isRequired,
    _onUpdateValue: PropTypes.func.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    style: null,
    path: null,
    label: null,
    checked:null,
    onChange: () => null
  };

  constructor(props) {
    super(props);
  }


  handleChange = event => {
    const value = event.target.checked;
    const { _onUpdateValue, path, onChange } = this.props;

    _onUpdateValue(path, value, event);
    onChange(path, value, event);
  };

  render() {
    const { path, label, labelWidth, className, style, checked } = this.props;
    const labelText = isString(label) ? label : path;

    return (
      <li className={cx('cr', 'boolean', className)} style={style}>
        <label>
          <span className="label-text" style={{ width: labelWidth }}>
            {labelText}
          </span>
          <span
            className="checkbox-container"
            style={{ width: `calc(100% - ${labelWidth})` }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={this.handleChange}
            />
          </span>
        </label>
      </li>
    );
  }
}
