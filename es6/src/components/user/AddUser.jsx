import * as React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import UserSchema from "../../schemas/UserSchema";
import {formatStandartDate} from "../../utils/DateHelper";
import {datePickerWidget} from "../../schemas/Widgets";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: null,
      employmentDate: null,
      firedDate: null,
      rentStartDate: null,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFiredDateChange = this.handleFiredDateChange.bind(this);
    this.handleEmploymentDateChange = this.handleEmploymentDateChange.bind(this);
    this.handleRentStartDateChange = this.handleRentStartDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log("Submiting my form!")
  }

  handleFormChange(e) {
    this.setState({
      formValues: e.formData,
    });
  }

  handleEmploymentDateChange(value) {
    const { formValues } = this.state;
    const employmentDate = formatStandartDate(value);
    this.setState({
      formValues: { ...formValues, employmentDate },
      employmentDate,
    });
  }

  handleFiredDateChange(value) {
    const { formValues } = this.state;
    const firedDate = formatStandartDate(value);
    this.setState({
      formValues: { ...formValues, firedDate },
      firedDate,
    });
  }

  handleRentStartDateChange(value) {
    const { formValues } = this.state;
    const rentStartDate = formatStandartDate(value);
    this.setState({
      formValues: { ...formValues, rentStartDate },
      rentStartDate,
    });
  }


  render() {
    const {
      formValues, employmentDate, firedDate, rentStartDate,
    } = this.state;

    const widgets = {
      employmentDatePicker: (props) => datePickerWidget(props, employmentDate, this.handleEmploymentDateChange),
      firedDatePicker: (props) => datePickerWidget(props, firedDate, this.handleFiredDateChange),
      rentStartDatePicker: (props) => datePickerWidget(props, rentStartDate, this.handleRentStartDateChange),
    };

    return (
      <Container>
        <h2 className="text-center">Pridėti vartotoją</h2>
          <Form
            schema={UserSchema.initSchema()}
            formData={formValues}
            onChange={this.handleFormChange}
            onSubmit={this.onSubmit}
            uiSchema={UserSchema.uiSchema}
            widgets={widgets}
          />
      </Container>
    );
  }
}

export default AddUser;
