const Manager = require('../lib/Manager');


test('creates a Manager object', () => {
    const manager = new Manager('Deb', 1234, 'deb@test.com', 15);

    expect(manager.name).toBe('Deb');
    expect(manager.id).toBe(1234);
    expect(manager.email).toBe('deb@test.com');
    expect(manager.officeNumber).toBe(15);

});

test("get managers's name", () => {
    const manager = new Manager('Deb', 1234, 'deb@test.com');

    const actual = manager.getName();
    const expected = 'Deb';

    expect(actual).toBe(expected);

});

test("get manager's id", () => {
    const manager = new Manager('Deb', 1234, 'deb@test.com',15);

    const actual = manager.getId();
    const expected = 1234;

    expect(actual).toBe(expected);

});

test("get manager's Email", () => {
    const manager = new Manager('Deb', 1234, 'deb@test.com',15);

    const actual = manager.getEmail();
    const expected = 'deb@test.com';

    expect(actual).toBe(expected);

});

test("get managers's role",() => {
    const manager = new Manager('Deb', 1234, 'deb@test.com',15);

    const actual = manager.getRole();
    const expected = 'Manager';

    expect(actual).toBe(expected);
})