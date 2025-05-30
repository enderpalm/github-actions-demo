const { dayOfTheWeek, monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Tuesday');
});

test('getDay returns the long-format day of the week', () => {
    const month = monthOfTheYear( new Date('3/11/2020') );
    expect( month ).toBe('March');
})