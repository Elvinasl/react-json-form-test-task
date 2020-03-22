export function handleEmploymentDateChange(value) {
  const { formValues } = this.state;
  const employmentDate = formatStandartDate(value);
  this.setState({
    formValues: { ...formValues, employmentDate },
    employmentDate
  });
}

export function handleFiredDateChange(value) {
  const { formValues } = this.state;
  const firedDate = formatStandartDate(value);
  this.setState({
    formValues: { ...formValues, firedDate },
    firedDate
  });
}

export function handleRentStartDateChange(value) {
  const { formValues } = this.state;
  const rentStartDate = formatStandartDate(value);
  this.setState({
    formValues: { ...formValues, rentStartDate },
    rentStartDate
  });
}
