import { cn } from '@design-system/utils/cn';

describe('cn', () => {
  it('concatena classes simples', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('remove valores falsy', () => {
    expect(cn('foo', false, 'bar', null, undefined, 'baz')).toBe('foo bar baz');
  });

  it('lida com objetos condicionais', () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('lida com arrays', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('lida com valores vazios', () => {
    expect(cn('', null, undefined, false)).toBe('');
  });

  it('lida com strings vazias', () => {
    expect(cn('foo', '', 'bar')).toBe('foo bar');
  });

  it('lida com combinação de tipos', () => {
    expect(cn('foo', { bar: true, baz: false }, ['qux'], 'quux')).toBe('foo bar qux quux');
  });

  it.each([
    { input: ['a'], expected: 'a' },
    { input: ['a', 'b'], expected: 'a b' },
    { input: ['a', false, 'b'], expected: 'a b' },
    { input: [{ a: true, b: false }], expected: 'a' },
    { input: ['a', null, 'b'], expected: 'a b' },
    { input: ['a', undefined, 'b'], expected: 'a b' },
  ])('testa edge cases com test.each: $input -> $expected', ({ input, expected }) => {
    expect(cn(...input)).toBe(expected);
  });
});
