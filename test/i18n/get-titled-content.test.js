import { describe, expect, it } from 'vitest';

import get_titled_content from '#/i18n/get-titled-content.js';

describe('get_titled_content', () => {
  it('returns an empty object when the dict or key is missing', () => {
    expect(get_titled_content(undefined, 'a', {}, (k) => k)).toEqual({});
    expect(get_titled_content(null, 'a', {}, (k) => k)).toEqual({});
    expect(get_titled_content({}, 'a', {}, (k) => k)).toEqual({});
  });

  it('builds a content/title pair from the provided dicts', () => {
    const dict = { a: 'A' };
    const desc = { da: 'desc A' };
    expect(get_titled_content(dict, 'a', desc, (k) => `d${k}`)).toEqual({
      content: 'A',
      title: 'desc A',
    });
  });

  it('leaves the title undefined when no description matches', () => {
    expect(get_titled_content({ a: 'A' }, 'a', {}, (k) => `d${k}`)).toEqual({
      content: 'A',
      title: undefined,
    });
  });

  it('invokes function-valued content with the extra arguments', () => {
    const dict = { a: (x, y) => `A${x}${y}` };
    expect(get_titled_content(dict, 'a', {}, (k) => k, 1, 2)).toEqual({
      content: 'A12',
      title: undefined,
    });
  });

  it('invokes function-valued titles with the extra arguments', () => {
    const desc = { da: (x) => `D${x}` };
    expect(
      get_titled_content({ a: 'A' }, 'a', desc, (k) => `d${k}`, 9),
    ).toEqual({ content: 'A', title: 'D9' });
  });
});
