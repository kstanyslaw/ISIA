export class Settings {
  constructor(
    public theme: boolean,
    public appLanguage: string,
    public multilanguage: boolean,
    public translateLanguage: string,
    public sports: [{
      sport: string,
      level: string
    }]
  ) { }
}

export interface SportItem {
  sport: string;
  level: string;
}
