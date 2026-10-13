import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { buff_colors } from '#/data/color-const.js';

import era from '../../helpers/era.js';

let sys_check_titles_after_race;

beforeAll(async () => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
  sys_check_titles_after_race = (
    await import('#/system/race/sys-check-titles-after-race.js')
  ).default;
});

function make_uma(overrides = {}) {
  return {
    index_chara: 1,
    ero: { orgasm: 0 },
    race: { conditionParams: { item: 1 } },
    rank: { curr: 5 },
    ...overrides,
  };
}

describe('sys_check_titles_after_race', () => {
  beforeEach(() => era.reset());

  it('adds a pregnancy title and counts the late stage', () => {
    era.seed({ 'cflag:1:妊娠阶段': 16 });
    const { hentai_count, new_title_dict } = sys_check_titles_after_race(
      [make_uma()],
      0,
      2,
      1,
    );
    expect(hentai_count).toBe(1);
    expect(new_title_dict[1]).toContainEqual({
      n: 's_with_baby',
      c: buff_colors[2],
    });
    expect(era.get('flag:变态行为')).toBe(1);
  });

  it('flags a dirty character when every fluid flag is set', () => {
    era.seed({
      'cflag:1:腹中精液': 1,
      'cflag:1:子宫内精液': 1,
      'cflag:1:肠道内精液': 1,
    });
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma()],
      0,
      2,
      1,
    );
    expect(new_title_dict[1]).toContainEqual({
      n: 's_dirty',
      c: buff_colors[2],
    });
  });

  it('marks the father of the player embryo', () => {
    era.seed({
      'cflag:0:妊娠阶段': 4,
      'cflag:0:妊娠回合计时': 0,
      'cflag:0:57': { sperm: 1 },
    });
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma()],
      0,
      2,
      1,
    );
    expect(new_title_dict[1]).toContainEqual({
      n: 's_be_father',
      c: buff_colors[2],
    });
  });

  it('stacks the hentai titles for a high-orgasm, item-free character', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0);
    const { hentai_count, new_title_dict } = sys_check_titles_after_race(
      [
        make_uma({
          ero: { orgasm: 6 },
          race: { conditionParams: { item: 0 } },
        }),
      ],
      0,
      2,
      1,
    );
    spy.mockRestore();
    expect(hentai_count).toBe(1);
    expect(new_title_dict[1]).toEqual([
      { n: 's_unlucky_1', c: buff_colors[2] },
      { n: 's_hentai', c: buff_colors[2] },
      { n: 's_unlucky_2', c: buff_colors[2] },
    ]);
  });

  it('suppresses the unlucky titles when an item is held', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0);
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma({ ero: { orgasm: 6 } })],
      0,
      2,
      1,
    );
    spy.mockRestore();
    expect(new_title_dict[1]).toEqual([{ n: 's_hentai', c: buff_colors[2] }]);
  });

  it('adds nothing and leaves the flag alone for a clean character', () => {
    const { hentai_count, new_title_dict } = sys_check_titles_after_race(
      [make_uma()],
      0,
      2,
      1,
    );
    expect(hentai_count).toBe(0);
    expect(new_title_dict[1]).toEqual([]);
    expect(era.get('flag:变态行为')).toBe(0);
  });
});
