const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Deb',1234,'deb@test.com','debTheKreb');

    expect(engineer.name).toBe('Deb');
    expect(engineer.id).toBe(1234);
    expect(engineer.email).toBe('deb@test.com');
    expect(engineer.github).toBe('debTheKreb');

});

test("get engineer's name",() => {
    const engineer = new Engineer('Deb',1234,'deb@test.com','debTheKreb');

    const actual = engineer.getName();
    const expected = 'Deb';

    expect(actual).toBe(expected);

});

test("get engineer's id",() => {
    const engineer = new Engineer('Deb',1234,'deb@test.com','debTheKreb');

    const actual = engineer.getId();
    const expected = 1234;

    expect(actual).toBe(expected);

});

test("get engineer's Email",() => {
    const engineer = new Engineer('Deb',1234,'deb@test.com','debTheKreb');

    const actual = engineer.getEmail();
    const expected = 'deb@test.com';

    expect(actual).toBe(expected);

});


test("get engineer's role",() => {
    const engineer = new Engineer('Deb',1234,'deb@test.com','debTheKreb');

    const actual = engineer.getRole();
    const expected = 'Engineer';

    expect(actual).toBe(expected);
});

test("get engineer's github",() => {
    const engineer = new Engineer('Deb',1234,'deb@test.com','debTheKreb');

    const actual = engineer.getGithub();
    const expected = 'https://github.com/debTheKreb';

    expect(actual).toBe(expected);
})