import * as React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import {datePickerWidget} from "../../schemas/Widgets";
import {formatStandartDate} from "../../utils/DateHelper";
import UserSchema from "../../schemas/UserSchema";

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: null,
      employmentDate: null,
      firedDate: null,
      rentStartDate: null,
    };

    this.handleFiredDateChange = this.handleFiredDateChange.bind(this);
    this.handleEmploymentDateChange = this.handleEmploymentDateChange.bind(this);
    this.handleRentStartDateChange = this.handleRentStartDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log("User will be updated!")
  }


  handleSingleUserResponse(data) {
    const formValues = Object.assign(data, {
      email: !data.email ? '' : data.email,
      duties: !data.duties ? '' : data.duties,
    });
    this.setState({
      formValues,
      employmentDate: data.employmentDate,
      firedDate: data.firedDate,
      rentStartDate: data.rentStartDate,
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
      formValues, employmentDate, firedDate, rentStartDate
    } = this.state;

    const widgets = {
      employmentDatePicker: (props) => datePickerWidget(props, employmentDate, this.handleEmploymentDateChange),
      firedDatePicker: (props) => datePickerWidget(props, firedDate, this.handleFiredDateChange),
      rentStartDatePicker: (props) => datePickerWidget(props, rentStartDate, this.handleRentStartDateChange),
    };

    return (
      <Container>
        <h2 className="text-center">
          Redaguoti vartotoją
        </h2>
        <Form
          schema={UserSchema.initSchema()}
          formData={formValues}
          onSubmit={this.onSubmit}
          uiSchema={UserSchema.uiSchema}
          widgets={widgets}
        />
      </Container>
    );
  }
}

export default EditUser;
