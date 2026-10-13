import { beforeEach, describe, expect, it } from 'vitest';

import sys_add_titles from '#/system/chara/sys-add-titles.js';

import era from '../../helpers/era.js';

describe('sys_add_titles', () => {
  beforeEach(() => era.reset());

  it('adds new titles and reports success', () => {
    expect(sys_add_titles(1, { n: 'a', c: '#111111' })).toBe(true);
    expect(era.get('cstr:1:11')).toEqual([{ n: 'a', c: '#111111' }]);
  });

  it('deduplicates titles by name', () => {
    sys_add_titles(1, { n: 'a', c: '#111111' });
    expect(sys_add_titles(1, { n: 'a', c: '#222222' })).toBe(false);
    expect(era.get('cstr:1:11')).toEqual([{ n: 'a', c: '#222222' }]);
  });

  it('reports failure when every title already exists', () => {
    sys_add_titles(1, { n: 'a', c: '#111111' }, { n: 'b', c: '#222222' });
    expect(sys_add_titles(1, { n: 'a', c: '#111111' })).toBe(false);
  });
});
