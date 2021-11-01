import { Injectable } from '@angular/core';
import { FormEntry, Subord } from './models';

@Injectable()
export class SubordService {
  private subords: Subord[] = Array.of(
    {
      Id: 1,
      Name: 'Misha',
      Surname: 'K.',
      Apps: Array.of({ Id: 1, Name: 'Salesforce' }, { Id: 2, Name: 'Github' }),
    },
    {
      Id: 2,
      Name: 'Grisha',
      Surname: 'F.',
      Apps: [{ Id: 1, Name: 'Salesforce' }],
    }
  );
  constructor() {}

  getSubords(): Subord[] {
    return this.subords;
  }
  getFormEntries(subord?:Subord): FormEntry[] {
    let result: FormEntry[] = new Array<FormEntry>();
    let subords = this.getSubords();
    if (!!subord) subords = subords.filter(s => s == subord);
    subords.forEach((subord) => {
      subord.Apps.forEach((app) => {
        result.push(new FormEntry(subord, app));
      });
    });
    return result;
  }
}
