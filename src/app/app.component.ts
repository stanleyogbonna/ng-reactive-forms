import { Component } from '@angular/core';


export type EditorType = 'validation' | 'group';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-reactive-forms';

  editor: EditorType = 'validation';
  toggleEditor(type: EditorType) {
    this.editor = type
  }

  get showValidation() {
    return this.editor === 'validation';
  }
  get showGroup() {
    return this.editor === 'group';
  }

}
