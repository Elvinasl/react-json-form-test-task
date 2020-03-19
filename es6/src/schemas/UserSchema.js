import React from 'react';
import getDatePickerTemplate from './Templates';

class UserSchema {
  constructor() {
    this.uiSchema = {
      'ui:ObjectFieldTemplate': (props) => this.getObjectTemplate(props),
      email: {
        'ui:emptyValue': '',
      },
      employmentDate: {
        'ui:widget': 'employmentDatePicker',
        classNames: 'datepicker-wrapper',
        'ui:FieldTemplate': (props) => getDatePickerTemplate(props),
      },
      firedDate: {
        'ui:widget': 'firedDatePicker',
        classNames: 'datepicker-wrapper',
        'ui:FieldTemplate': (props) => getDatePickerTemplate(props),
      },
      rentStartDate: {
        'ui:widget': 'rentStartDatePicker',
        classNames: 'datepicker-wrapper',
        'ui:FieldTemplate': (props) => getDatePickerTemplate(props),
      },
    };
  }

  initSchema() {
    return {
      type: 'object',
      required: ['name', 'surname', 'salary', 'rent', 'role', 'phone', 'duties', 'employmentDate', 'firedDate', 'rentStartDate'],
      properties: {
        name: { type: 'string', title: 'Vardas' },
        surname: { type: 'string', title: 'Pavardė' },
        email: { type: 'string', title: 'El. paštas', default: '' },
        salary: { type: 'number', title: 'Atlyginimas' },
        rent: { type: 'number', title: 'Nuoma' },
        phone: { type: 'string', title: 'Tel nr.' },
        employmentDate: {
          type: 'string', title: 'Įdarbinimo data',
        },
        firedDate: {
          type: 'string', title: 'Atleidimo data',
        },
        rentStartDate: {
          type: 'string', title: 'Nuomos pradžia',
        },
      },
    };
  }

  getObjectTemplate(props) {
    const smallerCols = ['employmentDate', 'firedDate', 'rentStartDate'];
    return (
      <div key={props.idSchema.$id} className="col-md-12">
        <div className="row">
          {props.description}
          {props.properties.map((element) => (
            <div
              key={element.content.props.idSchema.$id}
              className={smallerCols.includes(element.name) ? 'col-md-2' : 'col-md-6'}
            >
              {element.content}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default (new UserSchema());
