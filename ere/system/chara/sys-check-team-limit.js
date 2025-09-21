const { get } = require('#/era-electron');

const filter_chara = require('#/system/sys-filter-chara');

const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_level } = require('#/data/info-generator');

const trainer_team_limit = [1, 2, 3, 5, 7, 10];

function check_team_limit() {
  return (
    filter_chara('cflag', '招募状态', recruit_flags.yes).reduce((sum, cid) => {
      return sum + (cid > 0 && get(`cflag:${cid}:育成回合计时`) < 3 * 48);
    }, 0) -
    trainer_team_limit[
      Math.min(get_trainer_level() + (get('relation:302:0') > 375) + 1, 5)
    ]
  );
}

module.exports = check_team_limit;
