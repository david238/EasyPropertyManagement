import { UserDAO } from './user.dao';
import { User } from './user.model';

export class UserService {

  constructor(
    private dao = new UserDAO()
  ) { }

  public listUsers(
    query: any = {},
    offset: number = 0,
    limit: number = 10
  ): Promise<User[]> {
    return this.dao.query(query, offset, limit);
  }

  public insertUser(
    newuser: User
  ): Promise<string> {
    return this.dao.insert(newuser);
  }

  public getUser(
    selectedUser: User
  ): Promise<string> {
    return this.dao.getUser(selectedUser);
  }

  public getUserToken(
    selectedUser: User
  ): Promise<string> {
    return this.dao.getUserToken(selectedUser);
  } 
  



}
