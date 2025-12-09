const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

function sys_get_random_uma_god() {
  return get_random_entry(
    new Array(3)
      .fill(0)
      // 三女神ID：340-342
      .map((_, i) => 340 + i)
      .filter((e) => era.get(`cflag:${e}:招募状态`) === recruit_flags.no),
  );
}

module.exports = sys_get_random_uma_god;
