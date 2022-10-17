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

  previewBoxAttributes = (value, placeholder) => {
    const values = this.props.options.values;
    const hasValue =
      value && Object.prototype.hasOwnProperty.call(values, value);

    const color = hasValue ? values[value].color : placeholder;
    const title = hasValue ? values[value].label : null;

    const classNames = [style.feedback];

    if (value == 'transparent' || (!hasValue && placeholder == 'transparent')) {
      classNames.push(style.transparent);
    }

    if (!hasValue && !placeholder) {
      classNames.push(style.checkboard);
    }

    return {
      className: classNames.filter((item) => !!item).join(' '),
      style: { backgroundColor: color },
      title,
    };
  };

  render() {
    const { commit, value } = this.props;
    const options = Object.assign(
      {},
      this.constructor.defaultOptions,
      this.props.options
    );
    const values = options.values;

    if (!values) {
      return (
        <div className={style.error}>
          No color values defined, please add them to your YAML configuration
        </div>
      );
    }

    const allowEmpty =
      options.allowEmpty || Object.prototype.hasOwnProperty.call(values, '');

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
          <div {...this.previewBoxAttributes(value, options.placeholder)}></div>
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
          {valueArray.map((item) => {
            return item.color ? (
            <button
              className={[
                style.item,
                  item.color == "transparent" && style.transparent,
                ].join(" ")}
              disabled={item.disabled}
              style={{ backgroundColor: item.color }}
              title={item.label}
              onClick={() => commit(item.key)}
            ></button>
            ) : (
              <div className={style.label}>{item.label}</div>
            );
          })}
        </div>
      </div>
    );
  }
}
