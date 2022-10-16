const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Deb','1234','deb@test.com');

    expect(employee.name).toBe('Deb');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('deb@test.com');

});

test("get employee's name",() => {
    const employee = new Employee('Deb','1234','deb@test.com');

    const actual = employee.getName();
    const expected = 'Deb';

    expect(actual).toBe(expected);

});

test("get employee's id",() => {
    const employee = new Employee('Deb','1234','deb@test.com');

    const actual = employee.getId();
    const expected = '1234';

    expect(actual).toBe(expected);

});

test("get employee's Email",() => {
    const employee = new Employee('Deb','1234','deb@test.com');

    const actual = employee.getEmail();
    const expected = 'deb@test.com';

    expect(actual).toBe(expected);

});


test("get employee's role",() => {
    const employee = new Employee('Deb','1234','deb@test.com');

    const actual = employee.getRole();
    const expected = 'Employee';

    expect(actual).toBe(expected);
})