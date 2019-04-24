import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  formGroup = new FormGroup({
    multiselectId: new FormControl('', Validators.required),
    dropdownId: new FormControl('', Validators.required)
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
