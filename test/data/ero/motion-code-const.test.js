import { describe, expect, it } from 'vitest';

import motion_codes from '#/data/ero/motion-code-const.js';
import { get_motion_code } from '#/data/ero/motion-const.js';
import { motion_enum, towards_enum, up_enum } from '#/data/ero/part-const.js';

const { sit, lie, stand, rev } = motion_enum;
const { right, left } = towards_enum;
const { up, down } = up_enum;

describe('motion-code-const', () => {
  it('exposes all expected pose keys', () => {
    expect(Object.keys(motion_codes).sort()).toEqual(
      [
        'ask_cowgirl',
        'ask_fuck',
        'cowgirl',
        'doggy',
        'hug_sit',
        'hug_stand',
        'hug_suspended_congress',
        'missionary',
        'sixty_nine',
        'stand',
        'sit',
        'suspended_congress',
      ].sort(),
    );
  });

  it('contains only numeric motion codes', () => {
    for (const list of Object.values(motion_codes)) {
      expect(list.length).toBeGreaterThan(0);
      list.forEach((code) => expect(typeof code).toBe('number'));
    }
  });

  it('computes the sit and hug_sit variations', () => {
    expect(motion_codes.sit).toEqual([
      get_motion_code(sit, sit, left, right, up),
      get_motion_code(sit, sit, right, left, down),
    ]);
    expect(motion_codes.hug_sit).toEqual([
      get_motion_code(sit, sit, left, left, up),
      get_motion_code(sit, sit, right, right, down),
    ]);
  });

  it('reuses the sit variations inside cowgirl and ask_cowgirl', () => {
    for (const key of ['cowgirl', 'ask_cowgirl']) {
      for (const code of [...motion_codes.sit, ...motion_codes.hug_sit]) {
        expect(motion_codes[key]).toContain(code);
      }
    }
  });

  it('computes the missionary set explicitly', () => {
    expect(motion_codes.missionary).toEqual([
      get_motion_code(lie, lie, left, right, up),
      get_motion_code(sit, lie, left, right, up),
      get_motion_code(sit, rev, right, left, up),
      get_motion_code(rev, rev, right, left, up),
    ]);
  });

  it('computes the standing sets', () => {
    expect(motion_codes.stand).toEqual([
      get_motion_code(stand, stand, left, right, up),
      get_motion_code(stand, stand, right, left, down),
    ]);
    expect(motion_codes.hug_stand).toEqual([
      get_motion_code(stand, stand, left, left, up),
      get_motion_code(stand, stand, right, right, down),
    ]);
  });
});
