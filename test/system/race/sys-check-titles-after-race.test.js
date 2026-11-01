import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { adaptability_colors, buff_colors } from '#/data/color-const.js';

import era from '../../helpers/era.js';

let global_achievement;
let race_enum;
let sys_check_titles_after_race;

beforeAll(async () => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
  sys_check_titles_after_race = (
    await import('#/system/race/sys-check-titles-after-race.js')
  ).default;
  global_achievement = (await import('#/system/global/sys-calc-achievement.js'))
    .default;

  ({ race_enum } = await import('#/data/race/race-const.js'));
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

function make_result(race, year = 1) {
  return { race, rank: 1, year };
}

function seed_history(cid, results) {
  era.seed({
    [`cflag:${cid}:53`]: Object.fromEntries(
      results.map((result, index) => [100 + index, result]),
    ),
  });
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

  it('unlocks the triple crown title and achievement', () => {
    seed_history(1, [
      make_result(race_enum.sats_sho),
      make_result(race_enum.toky_yus),
      make_result(race_enum.kiku_sho),
    ]);
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma({ rank: { curr: 1 } })],
      race_enum.kiku_sho,
      1,
      1,
    );
    expect(new_title_dict[1]).toContainEqual({
      n: 'r_3crown_c',
      c: adaptability_colors.at(-3),
    });
    expect(global_achievement.r_3crown_c).toBeGreaterThan(0);
  });

  it('unlocks the spring triple crown only when all wins are in the same year', () => {
    era.seed({ 'flag:当前年': 2 });
    seed_history(1, [
      make_result(race_enum.sank_hai, 2),
      make_result(race_enum.tenn_spr, 2),
      make_result(race_enum.takz_kin, 2),
    ]);
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma({ rank: { curr: 1 } })],
      race_enum.takz_kin,
      1,
      1,
    );
    expect(new_title_dict[1]).toContainEqual({
      n: 'r_3crown_sp',
      c: adaptability_colors.at(-4),
    });
    expect(global_achievement.r_3crown_sp).toBeGreaterThan(0);
  });

  it('does not unlock the spring triple crown across different years', () => {
    era.seed({ 'flag:当前年': 2 });
    seed_history(1, [
      make_result(race_enum.sank_hai, 1),
      make_result(race_enum.tenn_spr, 2),
      make_result(race_enum.takz_kin, 2),
    ]);
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma({ rank: { curr: 1 } })],
      race_enum.takz_kin,
      1,
      1,
    );
    expect(new_title_dict[1]).not.toContainEqual({
      n: 'r_3crown_sp',
      c: adaptability_colors.at(-4),
    });
    expect(global_achievement.r_3crown_sp).toBe(0);
  });

  it('unlocks the autumn triple crown title and achievement', () => {
    era.seed({ 'flag:当前年': 3 });
    seed_history(1, [
      make_result(race_enum.tenn_sho, 3),
      make_result(race_enum.japa_cup, 3),
      make_result(race_enum.arim_kin, 3),
    ]);
    const { new_title_dict } = sys_check_titles_after_race(
      [make_uma({ rank: { curr: 1 } })],
      race_enum.arim_kin,
      1,
      1,
    );
    expect(new_title_dict[1]).toContainEqual({
      n: 'r_3crown_au',
      c: adaptability_colors.at(-4),
    });
    expect(global_achievement.r_3crown_au).toBeGreaterThan(0);
  });

  it('unlocks the eight major races achievement across team members', () => {
    era.seed({ __added: [1, 2] });
    seed_history(1, [
      make_result(race_enum.sats_sho),
      make_result(race_enum.toky_yus),
      make_result(race_enum.kiku_sho),
      make_result(race_enum.oka_sho),
    ]);
    seed_history(2, [
      make_result(race_enum.yush_him),
      make_result(race_enum.tenn_spr),
      make_result(race_enum.tenn_sho),
      make_result(race_enum.arim_kin),
    ]);
    sys_check_titles_after_race(
      [make_uma({ rank: { curr: 1 } })],
      race_enum.arim_kin,
      1,
      1,
    );
    expect(global_achievement.eight_major).toBeGreaterThan(0);
  });

  it('does not unlock the eight major races achievement when one race is missing', () => {
    era.seed({ __added: [1, 2] });
    seed_history(1, [
      make_result(race_enum.sats_sho),
      make_result(race_enum.toky_yus),
      make_result(race_enum.kiku_sho),
      make_result(race_enum.oka_sho),
    ]);
    seed_history(2, [
      make_result(race_enum.yush_him),
      make_result(race_enum.tenn_spr),
      make_result(race_enum.tenn_sho),
    ]);
    sys_check_titles_after_race(
      [make_uma({ rank: { curr: 1 } })],
      race_enum.arim_kin,
      1,
      1,
    );
    expect(global_achievement.eight_major).toBe(0);
  });
});
