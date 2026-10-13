import { beforeEach, describe, expect, it } from 'vitest';

import { sys_change_fame, sys_change_money } from '#/system/sys-calc-flag.js';

import era from '../helpers/era.js';

describe('sys_change_fame', () => {
  beforeEach(() => era.reset());

  it('ignores zero deltas', () => {
    expect(sys_change_fame(0)).toBe(0);
    expect(era.get('flag:当前声望')).toBe(0);
  });

  it('adds positive fame, rounded down', () => {
    expect(sys_change_fame(100.9)).toBe(100);
    expect(era.get('flag:当前声望')).toBe(100);
  });

  it('applies the global fame bonus', () => {
    era.seed({ 'global:声望加成': 50 });
    expect(sys_change_fame(100)).toBe(150);
  });

  it('blocks negative fame at max punishment', () => {
    era.seed({ 'flag:惩戒力度': 3 });
    expect(sys_change_fame(-100)).toBe(0);
    expect(era.get('flag:当前声望')).toBe(0);
  });

  it('reduces negative fame', () => {
    era.seed({ 'flag:当前声望': 500 });
    expect(sys_change_fame(-100)).toBe(-100);
    expect(era.get('flag:当前声望')).toBe(400);
  });

  it('boosts gains and softens losses when Etsuko is recruited', () => {
    era.seed({ 'cflag:303:招募状态': 1, 'cflag:303:57': { buff: 1 } });
    expect(sys_change_fame(100)).toBe(120);

    era.seed({ 'flag:当前声望': 0 });
    expect(sys_change_fame(-100)).toBe(-80);
  });
});

describe('sys_change_money', () => {
  beforeEach(() => era.reset());

  it('ignores zero amounts', () => {
    expect(sys_change_money(0)).toBe(0);
    expect(era.get('flag:当前马币')).toBe(0);
  });

  it('adds positive money and applies the global bonus', () => {
    expect(sys_change_money(100)).toBe(100);
    era.seed({ 'flag:当前马币': 0, 'global:金钱加成': 50 });
    expect(sys_change_money(100)).toBe(150);
  });

  it('subtracts money with no spending debuff', () => {
    expect(sys_change_money(-100)).toBe(-100);
    expect(era.get('flag:当前马币')).toBe(-100);
  });

  it('scales the loss by the character spending trait', () => {
    era.seed({ 'talent:5:消费观念': 2 });
    expect(sys_change_money(-100, 5)).toBe(-110);
  });

  it('ignores the spending trait for the player when cid is -1', () => {
    era.seed({ 'talent:0:消费观念': 5 });
    expect(sys_change_money(-100, -1)).toBe(-100);
  });
});
