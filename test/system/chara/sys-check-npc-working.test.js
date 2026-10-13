import { beforeEach, describe, expect, it } from 'vitest';

import sys_check_npc_working from '#/system/chara/sys-check-npc-working.js';

import era from '../../helpers/era.js';

describe('sys_check_npc_working', () => {
  beforeEach(() => era.reset());

  it('is false while still training', () => {
    expect(sys_check_npc_working(1)).toBe(false);
  });

  it('is true once training is over', () => {
    era.seed({ 'cflag:1:育成回合计时': 144 });
    expect(sys_check_npc_working(1)).toBe(true);
  });

  it('is false while asleep', () => {
    era.seed({ 'cflag:1:育成回合计时': 144, 'status:1:10': 1 });
    expect(sys_check_npc_working(1)).toBe(false);
  });

  it('is false during maternity leave', () => {
    era.seed({ 'cflag:1:育成回合计时': 144, 'cflag:1:妊娠阶段': 1 });
    expect(sys_check_npc_working(1)).toBe(false);
    era.seed({ 'cflag:1:妊娠阶段': 32 });
    expect(sys_check_npc_working(1)).toBe(false);
    era.seed({ 'cflag:1:妊娠阶段': 2 });
    expect(sys_check_npc_working(1)).toBe(true);
  });
});
