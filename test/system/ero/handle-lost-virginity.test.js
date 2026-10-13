import { createRequire } from 'node:module';

import { beforeEach, describe, expect, it } from 'vitest';

import { base_emotion_juel } from '#/data/ero/juel-const.js';
import handle_lost_virginity from '#/system/ero/sub-calc-ero/handle-lost-virginity.js';

import era from '../../helpers/era.js';

// The juel module keeps a private `tmp` buffer; the implementation under test
// resolves it through Node's require, so we must grab the same instance.
const require = createRequire(import.meta.url);
const {
  clean_juels,
  init_juels,
  update_juels,
} = require('#/system/ero/sys-calc-juel.js');

const jewelkeys = Array.from({ length: 16 }, (_, i) => i);

describe('handle_lost_virginity', () => {
  beforeEach(() => {
    era.reset();
    clean_juels();
  });

  it('adds pain scaled by a fitting size', () => {
    era.seed({ jewelkeys, 'cflag:1:阴茎尺寸': 3, 'cflag:2:身高': 160 });
    init_juels(2);
    handle_lost_virginity(1, 2);
    update_juels(false, 2);
    expect(era.get('gotjewel:2:11')).toBeCloseTo(base_emotion_juel * 1.6);
  });

  it('adds more pain when the size is oversized', () => {
    era.seed({ jewelkeys, 'cflag:1:阴茎尺寸': 5, 'cflag:2:身高': 160 });
    init_juels(2);
    handle_lost_virginity(1, 2);
    update_juels(false, 2);
    expect(era.get('gotjewel:2:11')).toBeCloseTo(base_emotion_juel * 2.4);
  });
});
