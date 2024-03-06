const era = require('#/era-electron');

const filter_chara = require('#/system/sys-filter-chara');

const { trainer_team_limit } = require('#/data/const.json');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');

function check_team_limit() {
  return (
    filter_chara('cflag', '招募状态', recruit_flags.yes).reduce((a, e) => {
      return a + (e && era.get(`cflag:${e}:育成回合计时`) < 3 * 48);
    }, 0) >= trainer_team_limit[get_trainer_title().substring(0, 2)]
  );
}

module.exports = check_team_limit;
