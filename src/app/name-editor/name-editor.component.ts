import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  heroForm: FormGroup;

  constructor() { }

  name = new FormControl('');
  updateName() {
    this.name.setValue('Nancy');
  }

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
      ]),
      'alterEgo': new FormControl('', [
        Validators.required,
      ]),
      'power': new FormControl('')
    },
      {validators: identityRevealedValidator}
    )
  }

  get heroName() {
    return this.heroForm.get('name');
  }
  get heroAlterEgo() {
    return this.heroForm.get('alterEgo');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.heroForm.value);
  }
}
