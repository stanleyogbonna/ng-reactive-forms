import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'login-editor',
  templateUrl: './login.component.html',
  styles: [`
  em {
    float: right; color: green; padding-left: 10px;
  }
  `]
})

export class LoginComponent {
  nameMessage: string;
  loginForm: FormGroup;

  private validationMessages = {
    required: 'Name is required',
    minlength: 'Name must atleast 5 characters'
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]]
    });
    const nameControl = this.loginForm.get('name');
    nameControl.valueChanges.pipe(
      debounceTime(1000)
      ).subscribe(value => {
      this.setMessage(nameControl);
      console.log(value)
    });
  }
  setMessage(c: AbstractControl): void {
    this.nameMessage = '';
    if((c.touched || c.dirty) && c.errors) {
      this.nameMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }
}
