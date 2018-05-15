export class User{
  username:string;
  email:string;
  reputation:number;
  avatar:any;

  constructor(username: string, email: string, reputation?: number, avatar?: any) {
    this.username = username;
    this.email = email;
    this.reputation = reputation || 0;
    this.avatar = avatar || null;
  }
}
