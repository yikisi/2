import { beforeEach, describe, expect, it } from 'vitest';

import EroParticipant from '#/data/ero/ero-participant.js';
import { part_enum, part_touch } from '#/data/ero/part-const.js';
import {
  change_part,
  clean_all_parts,
  clean_all_parts_without_item,
  clean_part,
  clean_part_without_item,
  reset_parts,
} from '#/system/ero/sys-calc-ero-part.js';

import era from '../../helpers/era.js';

const HAND = `tcvar:1:${part_touch[part_enum.hand]}接触部位`;
const MOUTH = `tcvar:1:${part_touch[part_enum.mouth]}接触部位`;

describe('change_part', () => {
  beforeEach(() => era.reset());

  it('links both participants to each other', () => {
    change_part(
      new EroParticipant(1, part_enum.hand),
      new EroParticipant(2, part_enum.hand),
    );
    expect(era.get(HAND)).toEqual({ item: undefined, owner: 2, part: 2 });
    expect(era.get(`tcvar:2:${part_touch[part_enum.hand]}接触部位`)).toEqual({
      item: undefined,
      owner: 1,
      part: 2,
    });
  });

  it('carries the used item along', () => {
    change_part(
      new EroParticipant(1, part_enum.hand),
      new EroParticipant(2, part_enum.hand),
      42,
    );
    expect(era.get(HAND).item).toBe(42);
  });
});

describe('clean_part', () => {
  beforeEach(() => era.reset());

  it('clears the contact record', () => {
    era.seed({ [HAND]: { owner: 2, part: 2 } });
    clean_part(new EroParticipant(1, part_enum.hand));
    expect(era.get(HAND)).toBe(-1);
  });

  it('clears the reciprocal record too', () => {
    era.seed({
      [HAND]: { owner: 2, part: part_enum.hand },
      'tcvar:2:手部接触部位': { owner: 1, part: part_enum.hand },
    });
    clean_part(new EroParticipant(1, part_enum.hand));
    expect(era.get(HAND)).toBe(-1);
    expect(era.get('tcvar:2:手部接触部位')).toBe(-1);
  });
});

describe('clean_part_without_item', () => {
  beforeEach(() => era.reset());

  it('keeps an item contact but clears a body contact', () => {
    era.seed({
      [HAND]: { owner: 5, part: part_enum.item },
      [MOUTH]: { owner: 5, part: part_enum.hand },
    });
    clean_part_without_item(new EroParticipant(1, part_enum.hand));
    clean_part_without_item(new EroParticipant(1, part_enum.mouth));
    expect(era.get(HAND)).toEqual({ owner: 5, part: part_enum.item });
    expect(era.get(MOUTH)).toBe(-1);
  });
});

describe('reset_parts', () => {
  beforeEach(() => era.reset());

  it('resets every touch slot for the character', () => {
    era.seed({ [HAND]: 5, [MOUTH]: 5 });
    reset_parts(1);
    expect(era.get(HAND)).toBe(-1);
    expect(era.get(MOUTH)).toBe(-1);
  });
});

describe('clean_all_parts', () => {
  beforeEach(() => era.reset());

  it('clears every touch slot', () => {
    era.seed({ [HAND]: 5 });
    clean_all_parts(1);
    expect(era.get(HAND)).toBe(-1);
  });
});

describe('clean_all_parts_without_item', () => {
  beforeEach(() => era.reset());

  it('skips slots used by an item', () => {
    era.seed({
      [HAND]: { owner: 5, part: part_enum.item },
      [MOUTH]: { owner: 5, part: part_enum.hand },
    });
    clean_all_parts_without_item(1);
    expect(era.get(HAND)).toEqual({ owner: 5, part: part_enum.item });
    expect(era.get(MOUTH)).toBe(-1);
  });
});
