import { afterEach, describe, expect, it, vi } from 'vitest';

import { proxy_kojo_js } from '#/i18n/tools.js';

describe('proxy_kojo_js', () => {
  afterEach(() => vi.restoreAllMocks());

  it('passes through defined keys', () => {
    const proxy = proxy_kojo_js({ foo: (x) => x + 1 });
    expect(proxy.foo(1)).toBe(2);
  });

  it('returns a fallback function for missing keys', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const proxy = proxy_kojo_js({});
    expect(typeof proxy.bar).toBe('function');
    expect(proxy.bar()).toEqual(['文本构造器缺失']);
    expect(proxy.bar.toString()).toBe('文本缺失');
  });
});
