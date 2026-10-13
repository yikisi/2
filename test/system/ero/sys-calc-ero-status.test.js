import { beforeEach, describe, expect, it, vi } from 'vitest';

import { part_enum } from '#/data/ero/part-const.js';
import { stain_enum } from '#/data/ero/stain-const.js';
import {
  check_erect,
  check_lubrication,
  check_pregnant_unprotect,
  check_satisfied,
  check_virgin_enabled,
  change_ero_master,
  get_action_base_check,
  get_bust_delta,
  get_bust_size,
  get_expansion,
  get_hip_size,
  get_nipple_buff,
  get_penis_size,
  get_pregnant_ratio,
  get_sex_acceptable,
  get_waist_size,
  orgasm_check_list,
} from '#/system/ero/sys-calc-ero-status.js';

import era from '../../helpers/era.js';

describe('check_pregnant_unprotect', () => {
  beforeEach(() => era.reset());

  it('always protects a character without a vagina', () => {
    expect(check_pregnant_unprotect(1, 0)).toBe(true);
  });

  it('only protects a uma during labor and recovery', () => {
    era.seed({ 'cflag:1:种族': 1, 'cflag:1:妊娠阶段': 0 });
    expect(check_pregnant_unprotect(1, 1)).toBe(true);
    era.seed({ 'cflag:1:妊娠阶段': 1 });
    expect(check_pregnant_unprotect(1, 1)).toBe(false);
    era.seed({ 'cflag:1:妊娠阶段': 2 });
    expect(check_pregnant_unprotect(1, 1)).toBe(true);
  });

  it('protects a human only while carrying', () => {
    era.seed({ 'cflag:1:种族': 0, 'cflag:1:妊娠阶段': 0 });
    expect(check_pregnant_unprotect(1, 1)).toBe(true);
    era.seed({ 'cflag:1:妊娠回合计时': 5 });
    expect(check_pregnant_unprotect(1, 1)).toBe(false);
  });
});

describe('get_action_base_check', () => {
  beforeEach(() => era.reset());

  it('combines love, marks and the resistance talent', () => {
    era.seed({
      'love:1': 100,
      'mark:1:同心': 1,
      'mark:1:欢愉': 1,
      'mark:1:苦痛': 1,
      'mark:1:羞耻': 1,
      'mark:1:反抗': 1,
      'talent:1:反抗意愿': 1,
    });
    expect(get_action_base_check(1)).toBe(90);
  });
});

describe('get_penis_size', () => {
  beforeEach(() => era.reset());

  it('reads the base size by default', () => {
    era.seed({ 'cflag:1:阴茎尺寸': 3 });
    expect(get_penis_size(1)).toBe(3);
  });

  it('forces a large size under arousal drugs', () => {
    era.seed({ 'cflag:1:阴茎尺寸': 3, 'status:1:弗隆K': 1 });
    expect(get_penis_size(1)).toBe(4);
    era.seed({ 'cflag:1:阴茎尺寸': 5, 'status:1:弗隆K': 1 });
    expect(get_penis_size(1)).toBe(5);
  });

  it('bumps small sizes with the weapon talent', () => {
    era.seed({ 'cflag:1:阴茎尺寸': 3, 'talent:1:凶器': 1 });
    expect(get_penis_size(1)).toBe(4);
  });
});

describe('bust helpers', () => {
  beforeEach(() => era.reset());

  it('computes size and delta from the measurements', () => {
    era.seed({ 'cflag:1:胸围': 80, 'cflag:1:下胸围': 70 });
    expect(get_bust_size(1)).toBe(80);
    expect(get_bust_delta(1)).toBe(10);
  });

  it('adds the lewd-breast bonus', () => {
    era.seed({
      'cflag:1:胸围': 80,
      'cflag:1:下胸围': 70,
      'talent:1:淫乳': 2,
    });
    expect(get_bust_size(1)).toBe(85);
  });
});

describe('get_sex_acceptable', () => {
  beforeEach(() => era.reset());

  it('baseline is -60', () => {
    expect(get_sex_acceptable(1)).toBe(-60);
  });

  it('scales with love, lust and punishment', () => {
    era.seed({ 'love:1': 100 });
    expect(get_sex_acceptable(1)).toBe(40);
    era.seed({ 'base:1:性欲': 7000 });
    expect(get_sex_acceptable(1)).toBe(50);
    era.seed({ 'flag:惩戒力度': 2 });
    expect(get_sex_acceptable(1)).toBe(100);
  });
});

describe('check_erect', () => {
  beforeEach(() => era.reset());

  it('is false by default', () => {
    expect(check_erect(1)).toBe(false);
  });

  it('erects past the border scaled by arousal', () => {
    era.seed({
      'cflag:1:阴茎尺寸': 1,
      'tcvar:1:阴茎快感上限': 100,
    });
    expect(check_erect(1, 50)).toBe(true);
    expect(check_erect(1, 30)).toBe(false);
  });

  it('clears the refractory period when checking live state', () => {
    era.seed({
      'cflag:1:阴茎尺寸': 1,
      'tcvar:1:阴茎快感上限': 100,
      'palam:1:阴茎快感': 50,
      'tcvar:1:不应期': 3,
    });
    expect(check_erect(1)).toBe(true);
    expect(era.get('tcvar:1:不应期')).toBe(0);
  });
});

describe('check_satisfied', () => {
  beforeEach(() => era.reset());

  it('returns 2 when unable to act', () => {
    era.seed({ 'tcvar:1:脱力': 1 });
    expect(check_satisfied(1)).toBe(2);
  });

  it('returns 0 when resisting or in pain', () => {
    era.seed({ 'mark:1:反抗': 3 });
    expect(check_satisfied(1)).toBe(0);
    era.seed({ 'mark:1:反抗': 0, 'mark:1:苦痛': 2 });
    expect(check_satisfied(1)).toBe(0);
  });

  it('returns 0 when not yet satisfied', () => {
    expect(check_satisfied(1)).toBe(0);
  });

  it('rolls against the arousal border', () => {
    era.seed({ 'tcvar:1:高潮满足': 1, 'base:1:性欲': 1000 });
    vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(check_satisfied(1)).toBe(1);
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
    expect(check_satisfied(1)).toBe(2);
    vi.restoreAllMocks();
  });
});

describe('check_virgin_enabled', () => {
  beforeEach(() => era.reset());

  it('requires a vagina', () => {
    expect(check_virgin_enabled(1)).toBe(false);
    era.seed({ 'cflag:1:阴道尺寸': 1, 'cflag:1:种族': 1 });
    expect(check_virgin_enabled(1)).toBe(true);
  });

  it('blocks a human on her period', () => {
    era.seed({
      'cflag:1:阴道尺寸': 1,
      'cflag:1:种族': 0,
      'status:1:经期': 1,
    });
    expect(check_virgin_enabled(1)).toBe(false);
  });
});

describe('size helpers', () => {
  beforeEach(() => era.reset());

  it('computes hip size', () => {
    era.seed({ 'cflag:1:臀围': 90 });
    expect(get_hip_size(1)).toBe(90);
    era.seed({ 'talent:1:淫臀': 2 });
    expect(get_hip_size(1)).toBe(95);
  });

  it('computes waist size with the life-event buff', () => {
    era.seed({ 'cflag:1:腰围': 60 });
    expect(get_waist_size(1)).toBe(60);
    era.seed({ 'cflag:1:57': { waist_buff: 2 } });
    expect(get_waist_size(1)).toBe(62);
  });

  it('computes the nipple buff', () => {
    expect(get_nipple_buff(1)).toBeCloseTo(0.2);
    era.seed({ 'cflag:1:性别': 1 });
    expect(get_nipple_buff(1)).toBeCloseTo(0.3);
    era.seed({
      'cflag:1:性别': 0,
      'talent:1:乳头类型': 2,
      'tcvar:1:乳突': 1,
    });
    expect(get_nipple_buff(1)).toBeCloseTo(0.4);
  });
});

describe('get_expansion', () => {
  beforeEach(() => era.reset());

  it('matches the height table', () => {
    era.seed({ 'cflag:1:身高': 160 });
    expect(get_expansion(3, 1, part_enum.virgin)).toBe(0);
    expect(get_expansion(5, 1, part_enum.virgin)).toBe(2);
  });

  it('subtracts the tolerance and lubrication', () => {
    era.seed({ 'cflag:1:身高': 160, 'abl:1:阴道耐性': 1 });
    expect(get_expansion(5, 1, part_enum.virgin)).toBe(1);
  });

  it('returns 0 for an unknown height or part', () => {
    expect(get_expansion(5, 1, part_enum.virgin)).toBe(0);
    era.seed({ 'cflag:1:身高': 160 });
    expect(get_expansion(5, 1, part_enum.mouth)).toBe(0);
  });
});

describe('get_pregnant_ratio', () => {
  beforeEach(() => era.reset());

  it('is zero before maturation', () => {
    expect(get_pregnant_ratio(1)).toBe(0);
  });

  it('is 5% at baseline and grows with ovulation', () => {
    era.seed({ 'cflag:1:成长阶段': 2 });
    expect(get_pregnant_ratio(1)).toBeCloseTo(0.05);
    era.seed({ 'status:1:排卵期': 1 });
    expect(get_pregnant_ratio(1)).toBeCloseTo(0.2);
  });

  it('is reduced by contraception and disabled after the birth cap', () => {
    era.seed({ 'cflag:1:成长阶段': 2, 'status:1:短效避孕药': 1 });
    expect(get_pregnant_ratio(1)).toBeCloseTo(0.001);
    era.seed({ 'flag:怀孕计数': 500 });
    expect(get_pregnant_ratio(1)).toBe(0);
  });
});

describe('change_ero_master', () => {
  beforeEach(() => era.reset());

  it('resets the pose of both participants and transfers control', () => {
    change_ero_master(2);
    expect(era.get('tcvar:2:体位')).toBe(0);
    expect(era.get('tcvar:0:体位')).toBe(0);
    expect(era.get('tcvar:2:朝向')).toBe(1);
    expect(era.get('tcvar:0:朝向')).toBe(0);
    expect(era.get('tcvar:2:上下')).toBe(1);
    expect(era.get('tcvar:0:上下')).toBe(0);
    expect(era.get('tflag:主导权')).toBe(2);
    expect(era.get('tflag:前回行动')).toBe(-1);
    expect(era.get('tflag:对手行动')).toBe(-1);
    expect(era.get('tflag:当前助手')).toBe(0);
    expect(era.get('tcvar:2:高潮满足')).toBe(0);
  });
});

describe('orgasm_check_list', () => {
  it('follows the documented resolution order', () => {
    expect(orgasm_check_list).toEqual([
      part_enum.mouth,
      part_enum.body,
      part_enum.sadism,
      part_enum.masochism,
      part_enum.clitoris,
      part_enum.breast,
      part_enum.anal,
      part_enum.penis,
      part_enum.virgin,
    ]);
  });
});

describe('check_lubrication via stains', () => {
  beforeEach(() => era.reset());

  it('is true when a lubricating stain is present', () => {
    era.seed({ 'stain:1:': 1 << stain_enum.lubricant });
    expect(check_lubrication(1, part_enum.breast)).toBe(true);
  });

  it('ignores stains that do not lubricate', () => {
    era.seed({ 'stain:1:': 1 << stain_enum.dirt });
    expect(check_lubrication(1, part_enum.breast)).toBe(false);
  });
});
