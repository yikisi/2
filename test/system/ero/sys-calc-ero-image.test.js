import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  check_chara_ero_image,
  set_chara_ero_image,
  sys_get_ero_image,
} from '#/system/ero/sys-calc-ero-image.js';

import era from '../../helpers/era.js';

beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

describe('check_chara_ero_image', () => {
  beforeEach(() => era.reset());

  it('is undefined until the image set is scanned', () => {
    expect(check_chara_ero_image(99)).toBeUndefined();
  });

  it('marks characters whose nude image is available', () => {
    era.seed({
      chara: [5, 6],
      'staticcstr:5:头像': 'A',
      'staticcstr:6:头像': 'B',
    });
    set_chara_ero_image();
    expect(check_chara_ero_image(5)).toBe(true);
    expect(check_chara_ero_image(6)).toBe(true);
  });
});

describe('sys_get_ero_image', () => {
  beforeEach(() => era.reset());

  it('builds the self-home portrait stack', () => {
    era.seed({
      chara: [5],
      'staticcstr:5:头像': 'A',
      'cstr:5:头像': 'BASE',
    });
    set_chara_ero_image();
    const ret = sys_get_ero_image(5, 'IMG', false);
    expect(ret[0]).toEqual({ borderRadius: 20, names: '位置_自宅' });
    expect(ret[1]).toBe('IMG_裸\tBASE_裸');
    expect(ret[2]).toBe('IMG_头\tBASE_头');
  });
});
