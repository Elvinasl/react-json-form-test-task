import DatePicker from 'react-datepicker';
import lt from 'date-fns/locale/lt';
import * as React from 'react';

export function datePickerWidget(props, value, onChange) {
  return (
    <DatePicker
      onChange={(date) => onChange(date)}
      dateFormat="yyyy-MM-dd"
      value={value}
      required={props.required}
      locale={lt}
    />
  );
}
