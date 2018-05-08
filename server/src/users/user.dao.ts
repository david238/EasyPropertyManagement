import { Collection, Database, Datastore } from '../datastore/datastore';
import { User } from './user.model';

export class UserDAO {

  constructor(
    private db: Database = Datastore.getDB()
  ) { }

  public async insert(property: User): Promise<string> {
    const result = await this.propertyCollection().insert(property);
    return result._id;
  }

  public async query(query: any, offset: number, limit: number): Promise<User[]> {
    const properties = await this.propertyCollection().find(query)
    return properties.slice(offset, offset + limit);
  }

  public getProperty(id: string): Promise<User> {
    return this.propertyCollection().findById(id)
  }

  public clearAll() {
    return this.propertyCollection().destroy();
  }

  private propertyCollection(): Collection<User> {
    return this.db.collection('users');
  }

}
