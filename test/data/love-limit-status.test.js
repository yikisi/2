import { beforeEach, describe, expect, it } from 'vitest';

import LoveLimitStatus from '#/data/love-limit-status.js';

import era from '../helpers/era.js';

describe('LoveLimitStatus', () => {
  beforeEach(() => era.reset());

  it('is empty by default', () => {
    const status = LoveLimitStatus.get(1);
    expect(status.is_empty()).toBe(true);
    expect(status.cache).toBe(0);
    expect(status.limit).toBe(0);
  });

  it('stores and clears the limit', () => {
    const status = LoveLimitStatus.get(1);
    status.set(50, 100);
    expect(status.cache).toBe(50);
    expect(status.limit).toBe(100);
    expect(status.is_empty()).toBe(false);

    status.clear();
    expect(status.is_empty()).toBe(true);
  });
});
