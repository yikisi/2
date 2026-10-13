import { beforeEach, describe, expect, it } from 'vitest';

import {
  get_base_price,
  get_mark_price,
  get_skill_price,
  get_talent_price,
} from '#/system/ero/sys-get-juel-price.js';

import era from '../../helpers/era.js';

describe('get_base_price', () => {
  beforeEach(() => era.reset());

  it('is the base skill price with no modifiers', () => {
    expect(get_base_price(1)).toBe(660);
  });

  it('scales with the jewel-cost flag unless auto-updating', () => {
    era.seed({ 'flag:宝珠消耗量': 50 });
    expect(get_base_price(1)).toBe(990);
    expect(get_base_price(1, { is_auto_update: true })).toBe(660);
  });

  it('scales with the curiosity talent unless it is an emotion', () => {
    era.seed({ 'talent:1:工口好奇': 2 });
    expect(get_base_price(1)).toBe(792);
    expect(get_base_price(1, { is_emotion: true })).toBe(660);
  });

  it('accepts a custom base price', () => {
    expect(get_base_price(1, { base_price: 100 })).toBe(100);
  });
});

describe('get_mark_price', () => {
  beforeEach(() => era.reset());

  it('scales by aim, remaining marks and the cost flag', () => {
    expect(get_mark_price(1, 1, 1)).toBe(1000);
    expect(get_mark_price(1, 1, 0)).toBe(1250);
    era.seed({ 'flag:宝珠消耗量': 50 });
    expect(get_mark_price(1, 1, 1)).toBe(1500);
  });
});

describe('get_skill_price', () => {
  beforeEach(() => era.reset());

  it('splits the level cost across the jewel types', () => {
    expect(get_skill_price(1, 10, 1)).toEqual({ 0: 165, 7: 165 });
    expect(get_skill_price(1, 10, 2)).toEqual({ 0: 330, 7: 330 });
  });
});

describe('get_talent_price', () => {
  beforeEach(() => era.reset());

  it('charges four times the base per jewel type', () => {
    expect(get_talent_price(1, 41, 1)).toEqual({ 8: 1320 });
  });

  it('scales with the delta and the base modifiers', () => {
    expect(get_talent_price(1, 41, 2)).toEqual({ 8: 2640 });
    era.seed({ 'talent:1:工口好奇': 1 });
    expect(get_talent_price(1, 41, 1)).toEqual({ 8: 1452 });
  });
});
