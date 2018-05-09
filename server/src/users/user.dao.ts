import { Collection, Database, Datastore } from '../datastore/datastore';
import { User } from './user.model';
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class UserDAO {

  constructor(
    private db: Database = Datastore.getDB()
  ) { }

  public async insert(user_param: User): Promise<string> {
    user_param.password = bcrypt.hashSync(user_param.password,10);
    const result = await this.propertyCollection().insert(user_param);
    return result._id;
  }

  public async query(query: any, offset: number, limit: number): Promise<User[]> {
    const properties = await this.propertyCollection().find(query)
    return properties.slice(offset, offset + limit);
  }

  public async getUser(user_param: User): Promise<string> {
    const userfound = await this.propertyCollection().findById(user_param._id);
    if (!bcrypt.compareSync(user_param.password, userfound.password)) {
        return 'error';
    }
    var token = jwt.sign({user: userfound}, 'secret', {expiresIn:7200});
    return token;
  }

  public clearAll() {
    return this.propertyCollection().destroy();
  }

  private propertyCollection(): Collection<User> {
    return this.db.collection('users');
  }

}
