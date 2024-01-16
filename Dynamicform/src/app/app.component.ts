import { Component } from '@angular/core';
import { registerFormConfig } from './constants/register_form.contnt';
import { IForm } from './interface/form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dynamicform';
  regitsterForm= registerFormConfig as IForm;
}
