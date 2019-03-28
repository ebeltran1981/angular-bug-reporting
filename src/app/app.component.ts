import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Sample for Bug Reporting';

  formGroup = new FormGroup({
    multiselectId: new FormControl('', Validators.required),
    dropdownId: new FormControl('', Validators.required),
  });

  dataSource = [
    {
      id: 1,
      text: 'Option 1'
    },
    {
      id: 2,
      text: 'Option 2'
    }
  ];

  fieldMapping = {
    value: 'id',
    text: 'text'
  };

  onSubmit() {
    if (this.formGroup.valid) {
      alert('form submitted');
    } else {
      alert('form is invalid');
    }
  }
}
