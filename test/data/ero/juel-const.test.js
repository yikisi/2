import { describe, expect, it } from 'vitest';

import juel_const from '#/data/ero/juel-const.js';
import { palam2juel } from '#/data/ero/orgasm-const.js';

const {
  base_emotion_juel,
  base_juel_reward,
  base_skill_limit,
  base_skill_price,
  mark_prices,
  shop_result_type_enum,
  skill2jewel,
  talent2jewel,
  talent_button_names_and_check_dict,
} = juel_const;

describe('juel-const', () => {
  it('derives the base rewards from palam2juel', () => {
    expect(base_emotion_juel).toBe(80 * palam2juel);
    expect(base_juel_reward).toBe(100 * palam2juel);
  });

  it('assigns shop result types one-based', () => {
    expect(shop_result_type_enum).toEqual({
      hate: 1,
      pleasure: 2,
      slave: 3,
      lover: 4,
    });
  });

  it('exposes ascending mark prices and skill limits', () => {
    expect(mark_prices).toEqual([0, 1000, 2000, 3500]);
    expect(base_skill_limit).toBe(5);
    expect(base_skill_price).toBe(660);
  });

  it('maps skills and talents to non-negative jewel lists', () => {
    for (const dict of [skill2jewel, talent2jewel]) {
      for (const list of Object.values(dict)) {
        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBeGreaterThan(0);
        list.forEach((j) => {
          expect(Number.isInteger(j)).toBe(true);
          expect(j).toBeGreaterThanOrEqual(0);
        });
      }
    }
  });

  it('keeps the talent button ranges consistent', () => {
    for (const def of Object.values(talent_button_names_and_check_dict)) {
      expect(def.min).toBeLessThanOrEqual(def.max);
      for (const from of Object.keys(def.up_delta)) {
        const next = Number(from) + def.up_delta[from];
        expect(next).toBeGreaterThanOrEqual(def.min);
        expect(next).toBeLessThanOrEqual(def.max);
      }
    }
  });
});
