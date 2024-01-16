import { IForm } from "../interface/form.interface";

export const registerFormConfig :IForm={
    formTitle: 'Employee data',
    saveBtnTitle: 'Confirm Registration',
    resetBtnTitle: 'Reset',
    formFields:[
        {
          "label": "Personal Information",
          "fields": [
            {
              "type": "text",
              "label": "First Name",
              "name": "first_name",
              "class": "col-md-6",
              "placeholder": "Enter your first name",
              "validations": {
                "isRequired": true,
                "pattern": "^[A-Za-z'-]+$"
              }
            },
            {
              "type": "text",
              "label": "Last Name",
              "name": "last_name",
              "class": "col-md-6",
              "placeholder": "Enter your last name",
              "validations": {
                "isRequired": true,
                "pattern": "^[A-Za-z'-]+$"
              }
            },
            {
              "type": "date",
              "label": "Date of Birth",
              "class": "col-md-6",
              "name": "dob",
              "validations": {
                "isRequired": true
              }
            },
            {
              "type": "radio",
              "class": "col-md-6",
              "label": "Gender",
              "name": "gender",
              "options": [
                { "label": "Male", "value": "male" },
                { "label": "Female", "value": "female" },
                { "label": "Other", "value": "other" }
              ],
              "validations": {
                "isRequired": true
              }
            }
          ]
        },
        {
          "label": "General Information",
          "class": "col-md-6",
          "fields": [
            {
              "type": "checkbox",
              "label": "Interests",
              "name": "interests",
              "options": [
                { "label": "Reading", "value": "reading" },
                { "label": "Sports", "value": "sports" },
                { "label": "Cooking", "value": "cooking" }
              ]
            },
            {
              "type": "select",
              "label": "State",
              "name": "state",
              "options": [
                { "label": "Karnataka", "value": "karnataka" },
                { "label": "Maharashtra", "value": "maharashtra" },
                { "label": "Kerala", "value": "kerala" }
              ],
              "validations": {
                "isRequired": false
              }
            }
          ]
        },
        {
          "label": "Company Information",
          "class": "col-md-6",
          "fields": [
            {
              "type": "select",
              "label": "Skills",
              "name": "skill",
              "options": [
                { "label": "Angular", "value": "angular" },
                { "label": "Nodejs", "value": "nodejs" },
                { "label": "Flutter", "value": "flutter" }
              ],
              "validations": {
                "isRequired": true
              }
            },
            {
              "type": "date",
              
              "label": "Date of Joining",
              "name": "doj",
              "validations": {
                "isRequired": true
              }
            }
          ]
        }      
    ]
}