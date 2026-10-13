import { describe, expect, it } from 'vitest';

import chara_info_type from '#/data/chara-info-type.js';

describe('chara_info_type', () => {
  it('assigns info types in declaration order', () => {
    expect(chara_info_type).toEqual({
      info: 0,
      out: 1,
      school: 2,
      train: 3,
    });
  });
});
