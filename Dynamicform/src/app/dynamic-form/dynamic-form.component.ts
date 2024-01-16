// Import necessary modules from Angular core
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Import interfaces
import { IForm, FormSection, FormField, FieldValidation } from '../interface/form.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  // Input property to receive the dynamic form configuration
  @Input() form!: IForm;

  // Inject FormBuilder for dynamic form creation
  fb = inject(FormBuilder);

  // Initialize dynamic form group
  dynamicFormGroup: FormGroup = this.fb.group({});

  // Function to get validators based on control's validation property
  getValidators(validations: any): any[] {
    const validators = [];

    if (validations && validations.required) {
      validators.push(Validators.required);
    }

    if (validations && validations.pattern) {
      validators.push(Validators.pattern(validations.pattern));
    }

    return validators;
  }

  // Function called when the form is submitted
  onSubmit(): void {
    // Mark all fields as touched when the form is submitted
    this.markAllFieldsAsTouched();

    if (this.dynamicFormGroup.valid) {
      // Perform actions when the form is valid
      console.log('Form submitted:', this.dynamicFormGroup.value);
      // Add any additional logic you need for form submission
    } else {
      // Handle invalid form submission
      console.log('Form is invalid. Please check the fields.');
    }
  }

  // Function to mark all form fields as touched
  private markAllFieldsAsTouched(): void {
    Object.keys(this.dynamicFormGroup.controls).forEach((controlName) => {
      const control = this.dynamicFormGroup.get(controlName);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  // Function called when the form reset button is clicked
  onReset(): void {
    // Reset the form by reinitializing it
    this.ngOnInit();
  }

  // Lifecycle hook called when the component is initialized
  ngOnInit(): void {
    // Check if the form and its form fields are available
    if (this.form?.formFields) {
      const formGroup: any = {};

      // Loop through form sections and fields to create the dynamic form group
      this.form.formFields.forEach((section: FormSection) => {
        section.fields.forEach((control: FormField) => {
          const controlValidators: any = [];
          const validations: FieldValidation | undefined = control.validations;

          if (validations) {
            if (validations.isRequired) controlValidators.push(Validators.required);
            if (validations.pattern) controlValidators.push(Validators.pattern(validations.pattern));
            // Add other validation checks as needed
          }

          formGroup[control.name] = [control.defaultValue !== undefined ? control.defaultValue : '', controlValidators];
        });
      });

      // Initialize the dynamic form group with the created formGroup object
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }
}
