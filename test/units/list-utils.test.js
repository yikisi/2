import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  distinct_list,
  flat_join_list,
  gacha,
  get_extremum_entry,
  get_random_entry,
  get_random_entry_with_weight,
  join_list,
  join_to_string,
  median,
  sort_list,
} from '#/utils/list-utils.js';

describe('distinct_list', () => {
  it('keeps the last entry for each key ordered by last occurrence', () => {
    const list = [
      { id: 'a', v: 1 },
      { id: 'b', v: 2 },
      { id: 'a', v: 3 },
      { id: 'c', v: 4 },
    ];
    expect(distinct_list(list, (e) => e.id)).toEqual([
      { id: 'b', v: 2 },
      { id: 'a', v: 3 },
      { id: 'c', v: 4 },
    ]);
  });

  it('returns an empty array for empty input', () => {
    expect(distinct_list([], (e) => e)).toEqual([]);
  });
});

describe('flat_join_list', () => {
  it('filters falsy entries and interleaves the separator', () => {
    expect(flat_join_list([[1, 2], null, [3], undefined], ',')).toEqual([
      1,
      2,
      ',',
      3,
    ]);
  });

  it('returns empty array when nothing remains', () => {
    expect(flat_join_list([null, undefined], ',')).toEqual([]);
  });

  it('handles a single entry without separator', () => {
    expect(flat_join_list([[1, 2, 3]], ',')).toEqual([1, 2, 3]);
  });
});

describe('join_list', () => {
  it('interleaves the separator between entries', () => {
    expect(join_list([1, 2, 3], ',')).toEqual([1, ',', 2, ',', 3]);
  });

  it('returns empty array for empty input', () => {
    expect(join_list([], ',')).toEqual([]);
  });

  it('returns a single entry unchanged', () => {
    expect(join_list([1], ',')).toEqual([1]);
  });
});

describe('join_to_string', () => {
  it('filters falsy values and joins', () => {
    expect(join_to_string(['a', '', null, 'b', undefined, 'c'], '-')).toBe(
      'a-b-c',
    );
  });

  it('returns empty string when all values are falsy', () => {
    expect(join_to_string([null, undefined, ''], '-')).toBe('');
  });
});

describe('sort_list', () => {
  it('returns the original list when order_by is not a function', () => {
    const list = [3, 1, 2];
    expect(sort_list(list, null)).toBe(list);
  });

  it('sorts descending by default', () => {
    expect(sort_list([1, 3, 2], (e) => e)).toEqual([3, 2, 1]);
  });

  it('sorts ascending when is_asc is true', () => {
    expect(sort_list([1, 3, 2], (e) => e, true)).toEqual([1, 2, 3]);
  });

  it('passes the index to order_by', () => {
    const list = ['a', 'b', 'c'];
    expect(sort_list(list, (_, i) => i, true)).toEqual(['a', 'b', 'c']);
  });

  it('is a stable ascending sort for equal keys', () => {
    const list = [
      { k: 1, v: 'a' },
      { k: 1, v: 'b' },
      { k: 0, v: 'c' },
    ];
    expect(sort_list(list, (e) => e.k, true).map((e) => e.v)).toEqual([
      'c',
      'a',
      'b',
    ]);
  });
});

describe('median', () => {
  it('returns undefined for empty input', () => {
    expect(median([])).toBeUndefined();
  });

  it('returns the middle value for odd length', () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  it('returns the average of the two middle values for even length', () => {
    expect(median([4, 1, 3, 2])).toBe(2.5);
  });
});

describe('get_extremum_entry', () => {
  it('returns the same entry for length <= 1', () => {
    expect(get_extremum_entry([{ v: 1 }], (e) => e.v)).toEqual({
      max: { v: 1 },
      min: { v: 1 },
    });
    expect(get_extremum_entry([], (e) => e.v)).toEqual({
      max: undefined,
      min: undefined,
    });
  });

  it('finds max and min by the order function', () => {
    const list = [{ v: 1 }, { v: 5 }, { v: 3 }];
    expect(get_extremum_entry(list, (e) => e.v)).toEqual({
      max: { v: 5 },
      min: { v: 1 },
    });
  });
});

describe('get_random_entry', () => {
  afterEach(() => vi.restoreAllMocks());

  it('returns undefined for empty list', () => {
    expect(get_random_entry([])).toBeUndefined();
  });

  it('returns the only entry for singleton list', () => {
    expect(get_random_entry(['only'])).toBe('only');
  });

  it('selects entries across the whole list', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(get_random_entry(['a', 'b', 'c'])).toBe('a');
    vi.spyOn(Math, 'random').mockReturnValue(0.99);
    expect(get_random_entry(['a', 'b', 'c'])).toBe('c');
  });
});

describe('get_random_entry_with_weight', () => {
  afterEach(() => vi.restoreAllMocks());

  it('returns the only entry for singleton list', () => {
    expect(get_random_entry_with_weight(['only'], () => 1)).toBe('only');
  });

  it('always picks the only weighted entry', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    const list = [
      { w: 0, v: 'zero' },
      { w: 1, v: 'one' },
    ];
    const picked = get_random_entry_with_weight(list, (e) => e.w);
    expect(picked.v).toBe('one');
  });

  it('falls back to the first entry when dice exceeds all weights', () => {
    vi.spyOn(Math, 'random').mockReturnValue(1);
    expect(get_random_entry_with_weight([0, 0], () => 0)).toBe(0);
  });
});

describe('gacha', () => {
  afterEach(() => vi.restoreAllMocks());

  it('returns empty array for max <= 0', () => {
    expect(gacha([1, 2, 3], 0)).toEqual([]);
    expect(gacha([1, 2, 3], -1)).toEqual([]);
  });

  it('returns the whole list when list length <= max', () => {
    const list = [1, 2, 3];
    expect(gacha(list, 3)).toBe(list);
    expect(gacha(list, 5)).toBe(list);
  });

  it('returns a single entry for max === 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(gacha([1, 2, 3, 4], 1)).toEqual([1]);
  });

  it('returns max distinct entries preserving input order', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);
    const ret = gacha([1, 2, 3, 4, 5], 3);
    expect(ret).toHaveLength(3);
    expect(new Set(ret).size).toBe(3);
    expect([...ret].sort((a, b) => a - b)).toEqual(ret);
  });
});
