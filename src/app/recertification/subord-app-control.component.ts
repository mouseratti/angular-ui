import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormEntry, SubordApp, Subord } from './models';

@Component({
  selector: 'subord-app-control',
  templateUrl: './subord-app-control.component.html'
})
export class SubordAppControlComponent {
  @Input() entry!: FormEntry;
  @Input() form!: FormGroup;
  
  get isValid(): boolean { 
    return this.form.controls[this.entry.key].valid; 
  }
}