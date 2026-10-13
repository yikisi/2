import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  collapse_list,
  get_abbr_number,
  get_display_width,
  get_random_value,
  log_600m2,
  log_600m4,
  log_7,
  log_edu_weeks,
  log_max_wp,
  minutes_in_a_day,
  set_lan,
} from '#/utils/value-utils.js';

describe('get_display_width', () => {
  it('returns 0 for non-string input', () => {
    expect(get_display_width(undefined)).toBe(0);
    expect(get_display_width(null)).toBe(0);
    expect(get_display_width(123)).toBe(0);
    expect(get_display_width({})).toBe(0);
  });

  it('counts half-width and full-width characters', () => {
    expect(get_display_width('')).toBe(0);
    expect(get_display_width('a')).toBe(0.5);
    expect(get_display_width('ab')).toBe(1);
    expect(get_display_width('中')).toBe(1);
    expect(get_display_width('中文')).toBe(2);
    expect(get_display_width('a中')).toBe(1.5);
  });

  it('treats code point 0x80 as half-width and 0x81 as full-width', () => {
    expect(get_display_width('\u0080')).toBe(0.5);
    expect(get_display_width('\u0081')).toBe(1);
  });
});

describe('collapse_list', () => {
  const make = (n) =>
    Array.from({ length: n }, (_, i) => ({ content: 'aaa', title: `t${i}` }));

  it('returns the same list when collapse_limit <= 0', () => {
    const list = make(3);
    expect(collapse_list(list, 0)).toBe(list);
    expect(collapse_list(list, -1)).toBe(list);
  });

  it('returns the same list when it fits into the limit', () => {
    const list = make(3);
    expect(collapse_list(list, 100)).toBe(list);
  });

  it('collapses the tail and keeps a title list', () => {
    const list = make(10);
    const ret = collapse_list(list, 6);
    expect(ret).toHaveLength(3);
    expect(ret[0]).toEqual(list[0]);
    expect(ret[1]).toBe(' ');
    expect(ret[2]).toMatchObject({ content: '+9' });
    expect(ret[2].title).toBe(
      list
        .slice(1)
        .map((s) => s.title)
        .join('\n'),
    );
  });
});

describe('get_abbr_number', () => {
  beforeEach(() => set_lan('en-US'));
  afterEach(() => set_lan('zh-CN'));

  it('returns undefined for non-number input', () => {
    expect(get_abbr_number('123')).toBeUndefined();
    expect(get_abbr_number(undefined)).toBeUndefined();
  });

  it('formats numbers below 10000 plainly', () => {
    expect(get_abbr_number(0)).toEqual({ content: '0' });
    expect(get_abbr_number(999)).toEqual({ content: '999' });
    expect(get_abbr_number(1234)).toEqual({ content: '1,234' });
  });

  it('formalizes thousands with a K suffix and full title', () => {
    expect(get_abbr_number(12345)).toEqual({
      content: '12K',
      title: '12,345',
    });
  });

  it('formats millions with an M suffix', () => {
    expect(get_abbr_number(12345678)).toEqual({
      content: '12M',
      title: '12,345,678',
    });
  });

  it('formats billions with a B suffix', () => {
    expect(get_abbr_number(12345678901)).toEqual({
      content: '12B',
      title: '12,345,678,901',
    });
  });

  it('honors a custom round callback', () => {
    expect(get_abbr_number(19999, Math.ceil)).toMatchObject({ content: '20K' });
    expect(get_abbr_number(19999, Math.floor)).toMatchObject({
      content: '19K',
    });
  });
});

describe('get_random_value', () => {
  afterEach(() => vi.restoreAllMocks());

  it('returns min when min >= max', () => {
    expect(get_random_value(5, 5)).toBe(5);
    expect(get_random_value(7, 3)).toBe(7);
  });

  it('returns inclusive integer bounds with stubbed randomness', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(get_random_value(1, 10)).toBe(1);
    vi.spyOn(Math, 'random').mockReturnValue(0.999999);
    expect(get_random_value(1, 10)).toBe(10);
  });

  it('returns float values when is_float is true', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    expect(get_random_value(0, 10, true)).toBe(5);
    expect(get_random_value(2, 4, true)).toBe(3);
  });
});

describe('constants', () => {
  it('exposes mathematically derived constants', () => {
    expect(minutes_in_a_day).toBe(1440);
    expect(log_7).toBeCloseTo(Math.log(7));
    expect(log_600m2).toBeCloseTo(Math.log(601) * 2);
    expect(log_600m4).toBeCloseTo(Math.log(601) * 4);
    expect(log_edu_weeks).toBeCloseTo(Math.log(3 * 48 - 1));
    expect(log_max_wp).toBeCloseTo(Math.log(1200));
  });
});
