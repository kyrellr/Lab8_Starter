// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test cases for isPhoneNumber function
test ('checks whether entry is a valid phone number', () => {
    expect(functions.isPhoneNumber('(619)788-2903')).toBe(true);
});
test ('checks whether entry is a valid phone number', () => {
    expect(functions.isPhoneNumber('(858)134-1234')).toBe(true);
});
test ('checks whether entry is a valid phone number', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});
test ('checks whether entry is a valid phone number', () => {
    expect(functions.isPhoneNumber('2')).toBe(false);
});


// Test cases for isEmail function
test ('checks whether entry is a valid email', () => {
    expect(functions.isEmail('abcd@gmail.com')).toBe(true);
});
test ('checks whether entry is a valid email', () => {
    expect(functions.isEmail('kringpis@ucsd.edu')).toBe(true);
});
test ('checks whether entry is a valid email', () => {
    expect(functions.isEmail('notan@email,huh')).toBe(false);
});
test ('checks whether entry is a valid email', () => {
    expect(functions.isEmail('91')).toBe(false);
});


// Test cases for isStrongPassword function
test ('checks whether entry is a strong password', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});
test ('checks whether entry is a strong password', () => {
    expect(functions.isStrongPassword('P455_w0rd')).toBe(true);
});
test ('checks whether entry is a strong password', () => {
    expect(functions.isStrongPassword('A23')).toBe(false);
});
test ('checks whether entry is a strong password', () => {
    expect(functions.isStrongPassword('notAStrongPassword')).toBe(false);
});

// Test cases for isDate function
test ('checks whether entry is a date', () => {
    expect(functions.isDate('11/20/2022')).toBe(true);
});
test ('checks whether entry is a date', () => {
    expect(functions.isDate('12/10/1997')).toBe(true);
});
test ('checks whether entry is a date', () => {
    expect(functions.isDate('12/134/03')).toBe(false);
});
test ('checks whether entry is a date', () => {
    expect(functions.isDate('12345678')).toBe(false);
});


// Test cases for isHexColor function
test ('checks whether entry is a hex color', () => {
    expect(functions.isHexColor('#000')).toBe(true);
});
test ('checks whether entry is a hex color', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test ('checks whether entry is a hex color', () => {
    expect(functions.isHexColor('0A')).toBe(false);
});
test ('checks whether entry is a hex color', () => {
    expect(functions.isHexColor('red')).toBe(false);
});