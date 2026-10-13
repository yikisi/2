import { beforeAll, describe, expect, it, vi } from 'vitest';

import { location_enum } from '#/data/locations.js';
import RaceInfo from '#/data/race/model/race-info.js';

const { track_enum } = RaceInfo;

let foreign_race_list;
let location2language;
let track2location;
let race_infos;

beforeAll(async () => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
  ({ foreign_race_list, location2language, track2location } =
    await import('#/data/race/race-location.js'));
  ({ race_infos } = await import('#/data/race/race-const.js'));
});

describe('track2location', () => {
  it('maps each overseas track to its location and language', () => {
    expect(track2location[track_enum.meydan]).toEqual({
      con: 'c_arab',
      lan: 6,
      loc: location_enum.dubai,
    });
    expect(track2location[track_enum.shatin].loc).toBe(location_enum.hongkong);
    expect(track2location[track_enum.bashang].loc).toBe(
      location_enum.guangzhou,
    );
  });

  it('groups the American and French venues together', () => {
    for (const track of [
      track_enum.kentucky,
      track_enum.baltimore,
      track_enum.new_york,
      track_enum.santa_anita,
      track_enum.del_mar,
    ]) {
      expect(track2location[track]).toMatchObject({
        con: 'c_america',
        loc: location_enum.new_york,
      });
    }
    for (const track of [
      track_enum.longchamp,
      track_enum.chantilly,
      track_enum.st_cloud,
    ]) {
      expect(track2location[track]).toMatchObject({
        con: 'c_france',
        loc: location_enum.paris,
      });
    }
  });
});

describe('location2language', () => {
  it('assigns the language level per overseas location', () => {
    expect(location2language).toEqual({
      [location_enum.guangzhou]: 5,
      [location_enum.hongkong]: 5,
      [location_enum.dubai]: 6,
      [location_enum.new_york]: 6,
      [location_enum.paris]: 7,
    });
  });
});

describe('foreign_race_list', () => {
  it('only contains races held at overseas venues', () => {
    expect(foreign_race_list).toHaveLength(26);
    for (const race of foreign_race_list) {
      const location = track2location[race_infos[race].track];
      expect(location).toBeDefined();
      expect(location2language[location.loc]).toBe(location.lan);
    }
  });
});
