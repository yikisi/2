import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} from '#/system/sys-calc-chara-others.js';

import era from '../helpers/era.js';

describe('sys_get_callname', () => {
  beforeEach(() => era.reset());

  it('returns the stored call name', () => {
    era.seed({ 'callname:1:0': 'master' });
    expect(sys_get_callname(1, 0)).toBe('master');
  });

  it('falls back to the template call name for "-"', () => {
    era.seed({ 'callname:1:0': '-', 'static:0:callname': 'Fallback' });
    expect(sys_get_callname(1, 0)).toBe('Fallback');
  });

  it('picks randomly from a call-name list', () => {
    era.seed({ 'callname:1:0': ['a', 'b'] });
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0);
    expect(sys_get_callname(1, 0)).toBe('a');
    spy.mockRestore();
  });
});

describe('sys_get_colored_callname', () => {
  beforeEach(() => era.reset());

  it('wraps the call name with the speaker color', () => {
    era.seed({ 'callname:1:0': 'master' });
    expect(sys_get_colored_callname(1, 0)).toEqual({
      color: '#000000',
      content: 'master',
      fontWeight: 'bold',
    });
  });
});

describe('sys_like_chara', () => {
  beforeEach(() => era.reset());

  it('ignores the player as a target', () => {
    expect(sys_like_chara(0, 0, 100, false)).toBe(false);
  });

  it('raises and lowers the relation', () => {
    sys_like_chara(1, 0, 100, false);
    expect(era.get('relation:1:0')).toBe(100);

    era.seed({ 'relation:1:0': 0 });
    sys_like_chara(1, 0, -50, false);
    expect(era.get('relation:1:0')).toBe(-50);
  });

  it('caps the relation at 600', () => {
    era.seed({ 'relation:1:0': 550 });
    sys_like_chara(1, 0, 100, false);
    expect(era.get('relation:1:0')).toBe(600);
  });
});

describe('sys_love_uma', () => {
  beforeEach(() => era.reset());

  it('ignores the player and blocked characters', () => {
    expect(sys_love_uma(0, 10, false)).toBe(false);
    expect(sys_love_uma(1, 10, false)).toBe(false);
    expect(era.get('love:1')).toBe(0);
  });

  it('adds love capped at 6', () => {
    era.seed({ 'cflag:1:父方角色': -1 });
    sys_love_uma(1, 10, false);
    expect(era.get('love:1')).toBe(6);
  });

  it('stops one point below the border', () => {
    era.seed({ 'cflag:1:父方角色': -1, 'love:1': 45 });
    sys_love_uma(1, 10, false);
    expect(era.get('love:1')).toBe(48);
  });

  it('is blocked by the hate drug', () => {
    era.seed({ 'cflag:1:父方角色': -1, 'status:1:讨厌药': 1 });
    sys_love_uma(1, 10, false);
    expect(era.get('love:1')).toBe(0);
  });
});
