import { beforeEach, describe, expect, it } from 'vitest';

import get_jewel_result from '#/system/ero/sub-begin-and-end/get-jewel-result.js';

import era from '../../helpers/era.js';

describe('get_jewel_result', () => {
  beforeEach(() => era.reset());

  it('shows a "no change" line when nothing happened', () => {
    const buffer = get_jewel_result(0, [], {}, []);
    expect(buffer).toHaveLength(2);
    expect(buffer[0].type).toBe('divider');
    expect(buffer[1].type).toBe('text');
  });

  it('emits one row group per changed jewel plus the mark section', () => {
    const buffer = get_jewel_result(1, [0], { 0: 50 }, []);
    // divider + 5 jewel rows + mark divider + "no change" mark line
    expect(buffer).toHaveLength(8);
    expect(buffer[0].type).toBe('divider');
  });

  it('adds the player special jewels', () => {
    const buffer = get_jewel_result(0, [], { 20: 10 }, []);
    // divider + 4 rows for the changed special jewel
    expect(buffer).toHaveLength(5);
  });
});
