import { describe, expect, it } from 'vitest';

import {
  action_type_enum,
  basement_status_enum,
  escape_enum,
} from '#/data/basement-const.js';

describe('basement enums', () => {
  it('assigns action types in declaration order', () => {
    expect(action_type_enum).toEqual({
      action_end: 0,
      back_basement: 1,
      digestive_end: 2,
      fix_end: 3,
      get_up: 4,
      rescue: 5,
      stop_sex: 6,
    });
  });

  it('assigns basement statuses in declaration order', () => {
    expect(basement_status_enum).toEqual({
      action: 0,
      escape: 1,
      fix: 2,
      idle: 3,
      just_back: 4,
      just_stop_sex: 5,
      outside: 6,
      sex: 7,
    });
  });

  it('uses explicit escape values', () => {
    expect(escape_enum).toEqual({ sneak: 1, beat: 2, strike: 3 });
  });
});
