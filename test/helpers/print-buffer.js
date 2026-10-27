import { expect } from 'vitest';

const INVALID_TEXT = /\b(?:undefined|NaN|Infinity)\b/;

/**
 * Recursively reject values that would render as broken output.
 * Functions are treated as opaque because the i18n stubs return proxies.
 *
 * @param {*} value
 * @param {string} path
 */
export function expect_printable(value, path = 'value') {
  expect(value, `${path} should not be undefined`).not.toBeUndefined();
  expect(value, `${path} should not be null`).not.toBeNull();

  if (typeof value === 'number') {
    expect(Number.isFinite(value), `${path} should be finite`).toBe(true);
    return;
  }
  if (typeof value === 'string') {
    expect(value, `${path} should not contain invalid text`).not.toMatch(
      INVALID_TEXT,
    );
    return;
  }
  if (typeof value === 'function' || typeof value === 'boolean') {
    return;
  }
  if (Array.isArray(value)) {
    expect(value.length, `${path} should not be empty`).toBeGreaterThan(0);
    value.forEach((entry, i) => expect_printable(entry, `${path}[${i}]`));
    return;
  }
  if (typeof value === 'object') {
    Object.entries(value).forEach(([key, entry]) =>
      expect_printable(entry, `${path}.${key}`),
    );
    return;
  }
  throw new Error(`${path} has unsupported type: ${typeof value}`);
}

/**
 * Assert that a value can be passed to `era.printMultiColumns` and that none of
 * its rendered fields contains undefined / NaN / Infinity.
 *
 * @param {{type: string, config?: object, content?: *}[]} buffer
 */
export function expect_print_buffer(buffer) {
  expect(Array.isArray(buffer)).toBe(true);
  expect(buffer.length).toBeGreaterThan(0);

  buffer.forEach((item, i) => {
    const path = `buffer[${i}]`;
    expect(item, `${path} should be an object`).toBeTypeOf('object');
    expect(item.type, `${path}.type should be a string`).toBeTypeOf('string');

    if (item.config !== undefined) {
      expect_printable(item.config, `${path}.config`);
    }
    if (item.type === 'divider') {
      expect(
        item.config?.content,
        `${path} should have divider content`,
      ).toBeDefined();
      return;
    }

    expect(item.content, `${path} should have content`).toBeDefined();
    expect_printable(item.content, `${path}.content`);
    return;
  });
}
