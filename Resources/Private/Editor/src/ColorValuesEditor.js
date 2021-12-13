import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@neos-project/react-ui-components';
import style from './ColorValuesEditor.css';

export default class Editor extends PureComponent {
  static propTypes = {
    value: PropTypes.string || PropTypes.number,
    commit: PropTypes.func.isRequired,
    i18nRegistry: PropTypes.object.isRequired,
    options: PropTypes.shape({
      allowEmpty: PropTypes.bool,
      placeholder: PropTypes.string,
      resetLabel: PropTypes.string,
      disabled: PropTypes.bool,
      values: PropTypes.objectOf(
        PropTypes.shape({
          label: PropTypes.string,
          color: PropTypes.string,
          disabled: PropTypes.bool,
        })
      ),
    }).isRequired,
  };

  onReset = () => {
    this.props.commit('');
  };

  static defaultOptions = {
    allowEmpty: true,
    disabled: false,
    placeholder: null,
    resetLabel: 'Reset',
  };

  getFeedbackClass = (value, placeholder) => {
    const hasValue =
      value &&
      Object.prototype.hasOwnProperty.call(this.props.options.values, value);

    const styleClasses = [style.feedback];

    if (value == 'transparent' || (!hasValue && placeholder == 'transparent')) {
      styleClasses.push(style.transparent);
    }

    if (!hasValue && !placeholder) {
      styleClasses.push(style.checkboard);
    }

    return styleClasses.filter((item) => !!item).join(' ');
  };

  getBackgroundColor = (value, placeholder) => {
    const values = this.props.options.values;
    if (value && Object.prototype.hasOwnProperty.call(values, value)) {
      return { backgroundColor: values[value].color };
    }
    if (placeholder) {
      return { backgroundColor: placeholder };
    }
    return {};
  };

  render() {
    const { commit, value } = this.props;
    const options = Object.assign(
      {},
      this.constructor.defaultOptions,
      this.props.options
    );
    const allowEmpty =
      options.allowEmpty ||
      Object.prototype.hasOwnProperty.call(options.values, '');
    const values = options.values;
    const valueArray = [];

    for (const key in values) {
      const item = values[key];
      valueArray.push({
        label: item.label,
        color: item.color,
        disabled: item.disabled,
        key,
      });
    }

    return (
      <div className={options.disabled && style.disabled}>
        <div className={style.wrapper}>
          <div
            className={this.getFeedbackClass(value, options.placeholder)}
            style={this.getBackgroundColor(value, options.placeholder)}
          ></div>
          {allowEmpty && (
            <div className={style.reset}>
              <IconButton
                style="lighter"
                icon="times"
                title={options.resetLabel}
                onClick={this.onReset}
              />
            </div>
          )}
        </div>
        <div className={style.list}>
          {valueArray.map((item) => (
            <button
              className={[
                style.item,
                item.color == 'transparent' && style.transparent,
              ].join(' ')}
              disabled={item.disabled}
              style={{ backgroundColor: item.color }}
              title={item.label}
              onClick={() => commit(item.key)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
