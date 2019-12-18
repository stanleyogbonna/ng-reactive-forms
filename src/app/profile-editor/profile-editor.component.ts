import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['2345']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Stanley',
      address:{
        state: 'Imo State'
      }
    })
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  ngOnInit() {
  }

}
