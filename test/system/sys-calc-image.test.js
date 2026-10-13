import { beforeEach, describe, expect, it } from 'vitest';

import { location_enum } from '#/data/locations.js';
import { class_enum } from '#/data/race/model/race-info.js';
import { race_enum, race_infos } from '#/data/race/race-const.js';
import { get_image, switch_image } from '#/system/sys-calc-image.js';

import era from '../helpers/era.js';

const BASE = 'IMG';

describe('get_image', () => {
  beforeEach(() => era.reset());

  it('falls back to default for an unknown character', () => {
    expect(get_image(undefined)).toEqual(['default']);
  });

  it('appends the season and default for a plain location', () => {
    era.seed({ 'cstr:5:头像': BASE });
    expect(get_image(5)).toEqual([`${BASE}_冬`, BASE, 'default']);
  });

  it('adds the private portrait once training is over', () => {
    era.seed({ 'cstr:5:头像': BASE, 'cflag:5:育成回合计时': 144 });
    expect(get_image(5)).toEqual([`${BASE}_私`, `${BASE}_冬`, BASE, 'default']);
  });

  it('handles the training and beach locations', () => {
    era.seed({
      'cstr:5:头像': BASE,
      'flag:当前位置': location_enum.beach_train,
    });
    expect(get_image(5)).toEqual([`${BASE}_运`, BASE, 'default']);

    era.seed({
      'cflag:5:位置': location_enum.beach,
      'flag:当前位置': location_enum.beach,
    });
    expect(get_image(5)).toEqual([
      `${BASE}_泳`,
      `${BASE}_夏私`,
      `${BASE}_夏`,
      BASE,
      'default',
    ]);
  });

  it('handles the holiday portraits', () => {
    era.seed({ 'cstr:5:头像': BASE, 'flag:当前回合数': 6 });
    expect(get_image(5)).toEqual([`${BASE}_婚`, `${BASE}_冬`, BASE, 'default']);

    era.seed({
      'cflag:5:殿堂': 1,
      'cstr:5:决胜服': '',
      'flag:当前回合数': 9,
    });
    expect(get_image(5)).toEqual([BASE, 'default']);
  });

  it('uses race clothes for a recruited character at the track', () => {
    era.seed({
      'cflag:5:招募状态': 1,
      'cstr:5:头像': BASE,
      'cstr:5:决胜服': -1,
      'flag:当前位置': location_enum.race,
    });
    expect(get_image(5)).toEqual([`${BASE}_运`, BASE, 'default']);
  });

  it('uses the running portrait for a non-recruited character at the track', () => {
    era.seed({
      'cstr:5:头像': BASE,
      'flag:当前位置': location_enum.race,
      'flag:当前赛事': race_enum.begin_race,
    });
    const expected =
      race_infos[race_enum.begin_race].race_class === class_enum.G1
        ? [BASE, 'default']
        : [`${BASE}_运`, BASE, 'default'];
    expect(get_image(5)).toEqual(expected);
  });
});

describe('switch_image', () => {
  beforeEach(() => era.reset());

  it('cycles the portrait type modulo 3', () => {
    switch_image();
    expect(era.get('flag:立绘类型')).toBe(1);
    era.seed({ 'flag:立绘类型': 2 });
    switch_image();
    expect(era.get('flag:立绘类型')).toBe(0);
  });
});
