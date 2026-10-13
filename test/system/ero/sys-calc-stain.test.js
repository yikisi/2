import { beforeEach, describe, expect, it } from 'vitest';

import EroParticipant from '#/data/ero/ero-participant.js';
import { item_enum } from '#/data/ero/item-const.js';
import { part_enum } from '#/data/ero/part-const.js';
import { stain_enum } from '#/data/ero/stain-const.js';
import stain from '#/system/ero/sys-calc-stain.js';

import era from '../../helpers/era.js';

const VIRGIN = 'stain:1:阴道';
const ANAL = 'stain:2:肛门';
const PENIS = 'stain:1:阴茎';

describe('set_stain / check_stain', () => {
  beforeEach(() => era.reset());

  it('ors the requested stain bits together', () => {
    stain.set_stain(1, part_enum.virgin, stain_enum.semen, stain_enum.wound);
    expect(era.get(VIRGIN)).toBe((1 << 4) | (1 << 6));
  });

  it('checks a single stain bit', () => {
    era.seed({ [VIRGIN]: 1 << stain_enum.semen });
    expect(stain.check_stain(1, part_enum.virgin, stain_enum.semen)).toBe(true);
    expect(stain.check_stain(1, part_enum.virgin, stain_enum.wound)).toBe(
      false,
    );
  });
});

describe('clean_part_stain', () => {
  beforeEach(() => era.reset());

  it('keeps the whitelisted stains and reports how many were removed', () => {
    era.seed({ [VIRGIN]: (1 << stain_enum.semen) | (1 << stain_enum.anal) });
    const removed = stain.clean_part_stain(
      1,
      part_enum.virgin,
      stain_enum.semen,
    );
    expect(removed).toBe(1);
    expect(era.get(VIRGIN)).toBe(1 << stain_enum.semen);
  });
});

describe('clean_stain', () => {
  beforeEach(() => era.reset());

  it('wipes the listed parts and counts every removed stain', () => {
    era.seed({
      [VIRGIN]: (1 << stain_enum.semen) | (1 << stain_enum.anal),
      'stain:1:胸部': 1 << stain_enum.milk,
    });
    expect(stain.clean_stain(1, part_enum.virgin, part_enum.breast)).toBe(3);
    expect(era.get(VIRGIN)).toBe(0);
    expect(era.get('stain:1:胸部')).toBe(0);
  });
});

describe('cache / rollback penis stain', () => {
  beforeEach(() => era.reset());

  it('temporarily replaces the stain with lubricant', () => {
    era.seed({ [PENIS]: 5 });
    stain.cache_penis_stain(1);
    expect(era.get(PENIS)).toBe(1 << stain_enum.lubricant);
    stain.rollback_penis_stain(1);
    expect(era.get(PENIS)).toBe(5);
  });
});

describe('merge_stain', () => {
  beforeEach(() => era.reset());

  it('unions the stains of two contacting parts', () => {
    era.seed({
      [VIRGIN]: 1 << stain_enum.semen,
      [ANAL]: 1 << stain_enum.wound,
    });
    stain.merge_stain(
      new EroParticipant(1, part_enum.virgin),
      new EroParticipant(2, part_enum.anal),
    );
    const merged = (1 << stain_enum.semen) | (1 << stain_enum.wound);
    expect(era.get(VIRGIN)).toBe(merged);
    expect(era.get(ANAL)).toBe(merged);
  });

  it('applies lubricant when a lubricating item is used', () => {
    stain.merge_stain(
      new EroParticipant(1, part_enum.item),
      new EroParticipant(2, part_enum.virgin),
      item_enum.dildo,
    );
    expect(era.get('stain:2:阴道')).toBe(1 << stain_enum.lubricant);
  });
});
