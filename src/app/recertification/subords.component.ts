import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { FormEntry, Subord } from './models';
import { SubordService } from './subord.service';

@Component({
  selector: 'subords-component',
  templateUrl: `./subords.component.html`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [SubordService]
})
export class SubordsComponent  {
  form!: FormGroup;
  payload = '';

  constructor(public subordService:SubordService) {}
  
  ngOnInit() {
    this.form = this.toFormGroup(this.subordService.getFormEntries());
  }
  onSubmit() {
    let confirmResult = confirm('please, confirm!');
    if (!confirmResult) return;
    this.payload = JSON.stringify(this.form.getRawValue())
    console.error(this.payload);
  }

  toFormGroup(entries:FormEntry[]): FormGroup {
    const group: any = {};
    entries.forEach(entry => {
      group[entry.key] = new FormControl(null, Validators.required);
    });
    return new FormGroup(group);
  }
  isValid(): boolean {
    return (this.form.valid && !this.payload);
  }

}
