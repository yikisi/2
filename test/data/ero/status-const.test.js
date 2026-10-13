import { describe, expect, it } from 'vitest';

import {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
  vp_status_enum,
} from '#/data/ero/status-const.js';

describe('vp_status_enum', () => {
  it('keeps the negative trainer-perspective values', () => {
    expect(vp_status_enum).toEqual({
      i_think: -2,
      dont_know: -1,
      no: 0,
      virgin: 1,
      reborn: 2,
    });
  });
});

describe('pregnant_stage_enum', () => {
  it('assigns stages in declaration order', () => {
    expect(pregnant_stage_enum).toEqual({
      resume: 0,
      no: 1,
      embryo: 2,
      fetal: 3,
      late: 4,
      pre_birth: 5,
    });
  });
});

describe('unexpected_pregnant_enum', () => {
  it('uses explicit signed values', () => {
    expect(unexpected_pregnant_enum).toEqual({
      father_sleep: -1,
      mother_sleep: 1,
      no: 0,
    });
  });
});
