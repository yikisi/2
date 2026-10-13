import { beforeEach, describe, expect, it } from 'vitest';

import recruit_flags from '#/data/event/recruit-flags.js';
import sys_check_team_limit from '#/system/chara/sys-check-team-limit.js';

import era from '../../helpers/era.js';

describe('sys_check_team_limit', () => {
  beforeEach(() => era.reset());

  it('reports the negative headroom for an empty team', () => {
    expect(sys_check_team_limit()).toBe(-1);
  });

  it('counts only recruited, still-training members', () => {
    era.seed({
      __added: [1, 2, 3],
      'cflag:1:招募状态': recruit_flags.yes,
      'cflag:2:招募状态': recruit_flags.yes,
      'cflag:3:招募状态': recruit_flags.no,
      'cflag:1:育成回合计时': 0,
      'cflag:2:育成回合计时': 0,
    });
    expect(sys_check_team_limit()).toBe(1);
  });

  it('does not count finished members', () => {
    era.seed({
      __added: [1],
      'cflag:1:招募状态': recruit_flags.yes,
      'cflag:1:育成回合计时': 144,
    });
    expect(sys_check_team_limit()).toBe(-1);
  });

  it('raises the limit with trainer fame and Ryoka affection', () => {
    era.seed({
      __added: [1, 2],
      'cflag:1:招募状态': recruit_flags.yes,
      'cflag:2:招募状态': recruit_flags.yes,
      'flag:15': 5000,
    });
    expect(sys_check_team_limit()).toBe(-8);

    era.seed({ 'flag:15': 0, 'relation:302:0': 400 });
    expect(sys_check_team_limit()).toBe(0);
  });
});
