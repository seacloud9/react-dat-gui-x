import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class DatFolder extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    closed: PropTypes.bool,
    children: PropTypes.element.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    style: null,
    title: 'Folder',
    closed: true,
    onChange: () => null
  };

  constructor(props) {
    super(props);
    this.state = { closed: props.closed };
  }

  handleClick = () =>
    this.setState(prevState => ({ closed: !prevState.closed }));

  renderChildren() {
    // Disable this rule to take title out of the props so nested folders can have unique titles.
    // eslint-disable-next-line no-unused-vars
    const { children, title, ...rest } = this.props;

    return (children)
  }

  render() {
    const { closed } = this.state;
    const { title, className, style } = this.props;

    return (
      <li className={cx('folder', { closed }, className)} style={style}>
        <div className="dg">
          <div
            className="title"
            onClick={this.handleClick}
            onKeyPress={this.handleClick}
            role="button"
            tabIndex={0}
          >
            {title}
          </div>
          <ul>{this.renderChildren()}</ul>
        </div>
      </li>
    );
  }
}
