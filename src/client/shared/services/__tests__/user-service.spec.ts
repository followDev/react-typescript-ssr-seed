// internal
import { UserServiceEngine } from '../user';

// Mocks
const apolloClientMock = {};

describe('User Service', () => {
  it('can get all users', () => {
    const allUsers = UserServiceEngine.requestAllUsers({
      apolloClientMock,
      data: {}
    });
    expect(allUsers).toStrictEqual({});
  });
});
