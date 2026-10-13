import { describe, expect, it } from 'vitest';

import PseudoUma from '#/data/race/model/pseudo-uma.js';

function make_uma(overrides = {}) {
  const uma = new PseudoUma(
    1,
    'Test',
    '#123456',
    2,
    [100, 200, 300, 400, 500],
    0,
    [1, 1, 1, 1],
    [8, 8, 8, 8],
    [7, 7, 7, 7],
    [{ id: 11 }, { id: 22 }],
  );
  Object.assign(uma, overrides);
  return uma;
}

describe('PseudoUma constructor', () => {
  it('stores the identity fields', () => {
    const uma = make_uma();
    expect(uma.index_chara).toBe(1);
    expect(uma.name).toBe('Test');
    expect(uma.color).toBe('#123456');
    expect(uma.motivation).toBe(2);
    expect(uma.style).toBe(0);
    expect(uma.legend).toBe(false);
    expect(uma.score_rank).toBe('G');
    expect(uma.pop).toEqual(new Array(4));
  });

  it('copies attr and adaptability arrays instead of aliasing', () => {
    const uma = make_uma();
    uma.attrs[0] = 999;
    uma.adapt_distance_list[0] = 999;
    uma.adapt_ground_list[0] = 999;
    expect(uma.o_attrs[0]).toBe(100);
    expect(uma.o_a_dis_list[0]).toBe(8);
    expect(uma.o_a_ground_list[0]).toBe(7);
  });

  it('wraps skills into RaceSkill instances', () => {
    const uma = make_uma();
    expect(uma.list_skill).toHaveLength(2);
    expect(uma.list_skill[0]).toBeInstanceOf(PseudoUma.RaceSkill);
    expect(uma.list_skill[0].data).toEqual({ id: 11 });
    expect(uma.list_skill[0].ability_time).toEqual([0, 0]);
    expect(uma.list_skill[1].aims).toEqual([[], []]);
  });
});

describe('PseudoUma.calc_attrs', () => {
  it('applies percent buffs before flat buffs', () => {
    const uma = make_uma();
    uma.attr_buffs[0] = [['100%'], ['10']];
    uma.attr_buffs[1] = [['20%'], ['30%']];
    uma.calc_attrs(0, 0);
    expect(uma.attrs[0]).toBe(210);
    expect(uma.attrs[1]).toBe(300);
    expect(uma.attrs[2]).toBe(300);
    expect(uma.attrs[3]).toBe(400);
    expect(uma.attrs[4]).toBe(500);
  });

  it('keeps the original attributes untouched', () => {
    const uma = make_uma();
    uma.attr_buffs[4] = [['50%']];
    uma.calc_attrs(0, 0);
    expect(uma.attrs[4]).toBe(750);
    expect(uma.o_attrs[4]).toBe(500);
  });

  it('rebuilds adaptability from the original plus ground/distance buffs', () => {
    const uma = make_uma({
      ground_buffs: [['2'], ['3']],
      dis_buffs: [['5']],
    });
    uma.calc_attrs(1, 2);
    expect(uma.adapt_ground_list[1]).toBe(12);
    expect(uma.adapt_distance_list[2]).toBe(13);
    expect(uma.adapt_ground_list[0]).toBe(7);
    expect(uma.adapt_distance_list[0]).toBe(8);
    expect(uma.o_a_ground_list[1]).toBe(7);
    expect(uma.o_a_dis_list[2]).toBe(8);
  });

  it('sorts and returns buffs without throwing on empty lists', () => {
    const uma = make_uma();
    expect(() => uma.calc_attrs(0, 0)).not.toThrow();
    expect(uma.attr_buffs).toEqual([[], [], [], [], []]);
  });
});

describe('PseudoUma.set_legend', () => {
  it('does nothing when the level is close enough to the aim', () => {
    const uma = make_uma();
    const before = [...uma.attrs];
    uma.set_legend(95, 100);
    expect(uma.attrs).toEqual(before);
    expect(uma.legend).toBe(true);
  });

  it('recomputes attributes upward when underleveled', () => {
    const uma = make_uma();
    const before = [...uma.o_attrs];
    uma.set_legend(0, 100);
    expect(uma.legend).toBe(true);
    uma.attrs.forEach((v, i) => expect(v).toBeGreaterThanOrEqual(before[i]));
    expect(uma.attrs.some((v, i) => v > before[i])).toBe(true);
    expect(uma.attrs).toEqual(uma.o_attrs);
  });

  it('honors a custom legend marker', () => {
    const uma = make_uma();
    uma.set_legend(0, 100, false);
    expect(uma.legend).toBe(false);
    uma.set_legend(0, 100, 2);
    expect(uma.legend).toBe(2);
  });
});

describe('PseudoUma misc', () => {
  it('returns a colored name object', () => {
    expect(make_uma().get_colored_name()).toEqual({
      color: '#123456',
      content: 'Test',
      fontWeight: 'bold',
    });
  });

  it('set_image chains and stores the image', () => {
    const uma = make_uma();
    expect(uma.set_image('x.png')).toBe(uma);
    expect(uma.image).toBe('x.png');
  });
});
