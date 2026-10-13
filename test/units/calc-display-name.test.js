import { describe, expect, it } from 'vitest';

import get_display_name from '#/utils/calc-display-name.js';

describe('get_display_name', () => {
  it('falls back to the original name when no translation exists', () => {
    // The selector stub returns the provided default, so a missing entry
    // must resolve back to the raw name.
    expect(get_display_name('Special Week')).toBe('Special Week');
  });
});
