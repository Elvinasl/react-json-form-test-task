import * as React from "react";
import DatePicker from "react-datepicker";
import lt from "date-fns/locale/lt";
import "react-datepicker/dist/react-datepicker.css";

export function datePickerWidget(props, value, onChange) {
  return (
    <DatePicker
      onChange={date => onChange(date)}
      dateFormat="yyyy-MM-dd"
      value={value}
      required={props.required}
      locale={lt}
    />
  );
}
