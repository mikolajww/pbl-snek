export class User {
  id:number;
  username:string;
  email:string;
  reputation:number;
  avatar:any;

  constructor(username: string, email: string, id:number, reputation?: number, avatar?: any) {
    this.username = username;
    this.email = email;
    this.reputation = reputation || 0;
    this.avatar = avatar || null;
    this.id = id;
  }
}
