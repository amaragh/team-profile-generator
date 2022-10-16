const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Deb', 1234, 'deb@test.com', 'RiceU');

    expect(intern.name).toBe('Deb');
    expect(intern.id).toBe(1234);
    expect(intern.email).toBe('deb@test.com');
    expect(intern.school).toBe('RiceU');

});

test("get intern's name", () => {
    const intern = new Intern('Deb', 1234, 'deb@test.com', 'RiceU');

    const actual = intern.getName();
    const expected = 'Deb';

    expect(actual).toBe(expected);

});

test("get intern's id", () => {
    const intern = new Intern('Deb', 1234, 'deb@test.com', 'RiceU');

    const actual = intern.getId();
    const expected = 1234;

    expect(actual).toBe(expected);

});

test("get intern's Email", () => {
    const intern = new Intern('Deb', 1234, 'deb@test.com', 'RiceU');

    const actual = intern.getEmail();
    const expected = 'deb@test.com';

    expect(actual).toBe(expected);

});


test("get intern's role", () => {
    const intern = new Intern('Deb', 1234, 'deb@test.com', 'RiceU');

    const actual = intern.getRole();
    const expected = 'Intern';

    expect(actual).toBe(expected);
});

test("get intern's school", () => {
    const intern = new Intern('Deb', 1234, 'deb@test.com', 'RiceU');

    const actual = intern.getSchool();
    const expected = 'RiceU';

    expect(actual).toBe(expected);
})
