import { describe, expect, it } from 'vitest';

import get_gradient_color from '#/utils/gradient-color.js';

describe('get_gradient_color', () => {
  it('returns the start color at ratio <= 0', () => {
    expect(get_gradient_color('#000000', '#ffffff', 0)).toBe('#000000');
    expect(get_gradient_color('#000000', '#ffffff', -1)).toBe('#000000');
  });

  it('returns the end color at ratio >= 1', () => {
    expect(get_gradient_color('#000000', '#ffffff', 1)).toBe('#ffffff');
    expect(get_gradient_color('#000000', '#ffffff', 2)).toBe('#ffffff');
  });

  it('falls back to white for missing colors', () => {
    expect(get_gradient_color(undefined, undefined, 0)).toBe('#ffffff');
    expect(get_gradient_color(undefined, undefined, 1)).toBe('#ffffff');
  });

  it('interpolates rgb at the midpoint', () => {
    expect(get_gradient_color('#000000', '#ffffff', 0.5)).toBe(
      'rgb(127,127,127)',
    );
  });

  it('interpolates each channel independently', () => {
    expect(get_gradient_color('#ff0000', '#00ff00', 0.5)).toBe(
      'rgb(127,127,0)',
    );
  });

  it('interpolates arbitrary ratios', () => {
    expect(get_gradient_color('#000000', '#ffffff', 0.25)).toBe(
      'rgb(63,63,63)',
    );
  });
});
