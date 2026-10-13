import { beforeAll, describe, expect, it, vi } from 'vitest';

import { get_timer_record } from '#/system/race/snippets.js';

beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

describe('get_timer_record', () => {
  it('formats sub-minute times as seconds', () => {
    expect(get_timer_record(0)).toBe('0.0"');
    expect(get_timer_record(5.5)).toBe('5.5"');
  });

  it('pads seconds below ten', () => {
    expect(get_timer_record(65)).toBe('1\'05.0"');
    expect(get_timer_record(60)).toBe('1\'00.0"');
  });

  it('handles multi-minute times', () => {
    expect(get_timer_record(600)).toBe('10\'00.0"');
  });
});
