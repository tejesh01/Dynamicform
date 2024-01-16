// Define interface for a single field validation
export interface FieldValidation {
    isRequired?: boolean;
    pattern?: string;
    // Add other validation properties as needed
  }
  
  // Define interface for a single field option
  export interface FieldOption {
    label: string;
    value: string;
  }
  
  // Define interface for a single form field
  export interface FormField {
    type: string;
    label: string;
    name: string;
    class?: string;
    placeholder?: string;
    options?: FieldOption[];
    validations?: FieldValidation;
    
    defaultValue?: any; // Add this line for the defaultValue property
  }
  
  // Define interface for a form section
  export interface FormSection {
    label: string;
    class?: string;
    fields: FormField[];
  }
  
  // Define interface for the complete form configuration
  export interface IForm {
    formTitle: string;
    saveBtnTitle: string;
    resetBtnTitle: string;
    formFields: FormSection[];
  }