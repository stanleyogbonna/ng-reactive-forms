import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/coward/i)
      ]],
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
  }
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
  get name() {
    return this.profileForm.get('firstName')
  }


}
