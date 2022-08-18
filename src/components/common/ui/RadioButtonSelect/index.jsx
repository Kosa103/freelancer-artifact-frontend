import React from 'react';
import * as classnames from 'classnames';
import RadioButton from '../RadioButton';
import './index.scss';

const RadioButtonSelect = props => {
  const {
    name,
    label,
    options = [],
    value,
    className,
    radioClassName,
    onChange=()=>{},
    error,
    ...rest
  } = props;

  return (
    <div
      className={classnames(
        'radio-button-select',
        className,
      )}
    >
      <div className={classnames('radio-button-select__label', !label && '-hidden')}>{label}</div>
      <div className={classnames('radio-button-select__error', !error && '-hidden')}>{error}</div>
      <div className={classnames('radio-button-select__button-container')}>
        {options.map((option, i) => (
          <RadioButton
            key={i}
            name={name}
            label={option.label}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            radioClassName={classnames(
              'radio-button-select__button',
              radioClassName && radioClassName
            )}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
};

export default RadioButtonSelect;
