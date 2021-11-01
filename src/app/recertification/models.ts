interface SubordApp {
  Id: number;
  Name: string;
  enabled?: boolean;
}

interface Subord {
  Id: number;
  Name: string;
  Surname: string;
  Apps: SubordApp[];
}

class FormEntry {
  public value?: string;
  constructor(public subord: Subord, public app:SubordApp){}
  get key(): string {
    return `${this.subord.Id}-${this.app.Name}`
  }
  public options = {'enabled':true, 'disabled': false}
}
export {Subord, SubordApp, FormEntry};