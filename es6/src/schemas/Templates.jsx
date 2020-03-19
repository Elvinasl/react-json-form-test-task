import React from 'react';
import './DatePickerTemplate.css';

export default function getDatePickerTemplate(props) {
  const {
    id, classNames, label, help, required, description, errors, children,
  } = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>
        {label}
        {required ? '*' : null}
      </label>
      <br />
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
}
