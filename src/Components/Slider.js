import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value })
  }
  onChange = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.setState({value: event.target.value});
    if (this.props.onChange) { this.props.onChange(event) };
  }
  render = () => {
    return (
      <div key={this.props.key} className="slider-container">
      {this.state.value}
        <input
        type='range'
        min={this.props.min}
        max={this.props.max}
        className={`slider${this.props.cssClass ? ('' + this.props.cssClass) :'' }`}
        id={this.props.id ? this.props.id : 'slider-no-id'}
        value={this.state.value}
        onChange={this.onChange}
        />
      </div>
    );
  }
}

Slider.propTypes = {
    min: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    cssClass: PropTypes.string,
    id: PropTypes.string,
    key: PropTypes.string,
    onChange: PropTypes.func
}