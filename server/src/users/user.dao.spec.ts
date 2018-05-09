import 'jasmine';

import { UserDAO } from './user.dao';
import { User } from './user.model';

describe('User Module', () => {

  const dao = new UserDAO();

  beforeEach(() => {
    dao.clearAll();
  });

  it('should insert and query users', async () => {


    const emerald = {
      firstname: 'Bertrand',
      lastname: 'Bertrand',
      email: 'Bertrand@sasd.com',
      password: 'asdasd'
    };

    await dao.insert(emerald);

    let props = await dao.query({ firstname: emerald.firstname}, 0, 10);
    let new_id = props[0]._id;

    expect(props.length).toBe(1);


    const emerald2 = {
      _id: new_id,
      firstname: 'Bertrand',
      lastname: 'Bertrand',
      email: 'Bertrand@sasd.com',
      password: 'asdasd'
    };

    let user = await dao.getUser(emerald2);

    expect(user).toBe('good');
  });

});
