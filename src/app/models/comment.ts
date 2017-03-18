export class Comment{
  constructor(
    public id: number,
    public text: String,
    public date: Date,
    public user: number,
    public announcement: number
  ) {}
}
