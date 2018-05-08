import 'jasmine';

import { UserService } from './user.service';

describe('PropertyService', () => {

  let mockDao: any;

  beforeEach(() => {
    mockDao = {
      query: jasmine.createSpy('query')
    }
  });

  it('should call query on DAO when listProperties from service is called', async () => {
    const service = new UserService(mockDao);

    const query = { name: 'test property' };

    service.listUsers(query, 0, 15);

    expect(mockDao.query).toHaveBeenCalledWith(query, 0, 15);
  });

});
