const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (
      Array.isArray(get('cflag:306:招募状态')) &&
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class <= class_enum.G3
    ) {
      get('cflag:306:招募状态')[1]++;
    }
  }
};
