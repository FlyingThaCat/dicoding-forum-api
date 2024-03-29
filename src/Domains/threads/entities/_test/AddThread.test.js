const AddThread = require('../AddThread');

describe('a AddThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      title: 'TEST THREAD',
      owner: 'user-123',
    };

    // Action and Assert
    expect(() => new AddThread(payload))
        .toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      title: 'TEST THREAD',
      body: 'Hello World Thread',
      owner: 123,
    };

    // Action and Assert
    expect(() => new AddThread(payload))
        .toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when payload did not contain owner property', () => {
    // Arrange
    const payload = {
      title: 'TEST THREAD',
      body: 'Hello World Thread',
      owner: undefined,
    };

    // Action and Assert
    expect(() => new AddThread(payload))
        .toThrowError('ADD_THREAD.NOT_MEET_AUTHENTICATION_DATA');
  });

  it('should create AddThread object correctly', () => {
    // Arrange
    const payload = {
      title: 'TEST THREAD',
      body: 'Hello World Thread',
      owner: 'user-doe1234',
    };

    // Action
    const addThread = new AddThread(payload);

    // Assert
    expect(addThread).toBeInstanceOf(AddThread);
    expect(addThread.title).toEqual(payload.title);
    expect(addThread.body).toEqual(payload.body);
    expect(addThread.owner).toEqual(payload.owner);
  });
});
