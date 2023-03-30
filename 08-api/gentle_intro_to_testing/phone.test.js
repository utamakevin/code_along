const Phone = require('./phone.js')

describe('Phone Number', () => {
  describe('Cleanup user-entered phone numbers', () => {
    test('cleans the number', () => {

      expect(new Phone('(223) 456-7890').number).toEqual('2234567890');
    });

    test('cleans numbers with dots', () => {
      expect(new Phone('223.456.7890').number).toEqual('2234567890');
    });

    test('cleans numbers with multiple spaces', () => {
      expect(new Phone('223 456   7890   ').number).toEqual('2234567890');
    });

    test('invalid when 9 digits', () => {
      expect(() => new Phone('123456789')).toThrow(
        new Error('Incorrect number of digits')
      );
    });

    test('invalid when 11 digits does not start with a 1', () => {
      expect(() => new Phone('22234567890')).toThrow(
        new Error('11 digits must start with 1')
      );
    });

    test('valid when 11 digits and starting with 1', () => {
      expect(new Phone('12234567890').number).toEqual('2234567890');
    });

    test('valid when 11 digits and starting with 1 even with punctuation', () => {
      expect(new Phone('+1 (223) 456-7890').number).toEqual('2234567890');
    });

    test('invalid when more than 11 digits', () => {
      expect(() => new Phone('321234567890')).toThrow(
        new Error('More than 11 digits')
      );
    });

    test('invalid with letters', () => {
      expect(() => new Phone('123-abc-7890')).toThrow(
        new Error('Letters not permitted')
      );
    });

    test('invalid with punctuations', () => {
      expect(() => new Phone('123-@:!-7890')).toThrow(
        new Error('Punctuations not permitted')
      );
    });

    test('invalid if area code starts with 0', () => {
      expect(() => new Phone('(023) 456-7890')).toThrow(
        new Error('Area code cannot start with zero')
      );
    });

    test('invalid if area code starts with 1', () => {
      expect(() => new Phone('(123) 456-7890')).toThrow(
        new Error('Area code cannot start with one')
      );
    });

    test('invalid if exchange code starts with 0', () => {
      expect(() => new Phone('(223) 056-7890')).toThrow(
        new Error('Exchange code cannot start with zero')
      );
    });

    test('invalid if exchange code starts with 1', () => {
      expect(() => new Phone('(223) 156-7890')).toThrow(
        new Error('Exchange code cannot start with one')
      );
    });

    test('invalid if area code starts with 0 on valid 11-digit number', () => {
      expect(() => new Phone('1 (023) 456-7890')).toThrow(
        new Error('Area code cannot start with zero')
      );
    });

    test('invalid if area code starts with 1 on valid 11-digit number', () => {
      expect(() => new Phone('1 (123) 456-7890')).toThrow(
        new Error('Area code cannot start with one')
      );
    });

    test('invalid if exchange code starts with 0 on valid 11-digit number', () => {
      expect(() => new Phone('1 (223) 056-7890')).toThrow(
        new Error('Exchange code cannot start with zero')
      );
    });

    test('invalid if exchange code starts with 1 on valid 11-digit number', () => {
      expect(() => new Phone('1 (223) 156-7890')).toThrow(
        new Error('Exchange code cannot start with one')
      );
    });
  });
});