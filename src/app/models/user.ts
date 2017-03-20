export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public role: string,
    public enabled: number,
    public telephone: string,
    public email: string,
    public registered: number
  ) {  }
}
