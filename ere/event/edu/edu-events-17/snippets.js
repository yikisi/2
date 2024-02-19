const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');

const CharaTalk = require('#/utils/chara-talk');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

/**
 * @param {string} p1
 * @param {string} p2
 */
function flip_params(p1, p2) {
  const tmp = era.get(p1);
  era.set(p1, era.get(p2));
  era.set(p2, tmp);
}

/** @param {LunaEduMarks} event_marks */
function transform(event_marks) {
  event_marks.emperor = 1 - event_marks.emperor;

  flip_params('cflag:17:干劲', 'cflag:9017:干劲');
  flip_params('status:17:自毁', 'status:9017:自毁');
  flip_params('status:17:迷恋', 'status:9017:迷恋');
  flip_params('status:17:皇帝', 'status:9017:皇帝');
  flip_params('status:17:心术', 'status:9017:心术');
  flip_params('status:17:神经衰弱', 'status:9017:神经衰弱');
  flip_params('love:17', 'love:9017');
  flip_params('callname:17:-1', 'callname:9017:-1');
  flip_params('callname:17:-2', 'callname:9017:-2');
  /** @type {Record<string,number>} */
  const relation_entries = era.get('relation:17');
  Object.keys(relation_entries).forEach((chara_id) => {
    flip_params(`callname:17:${chara_id}`, `callname:9017:${chara_id}`);
    flip_params(`relation:17:${chara_id}`, `relation:9017:${chara_id}`);
    flip_params(`callname:${chara_id}:17`, `callname:${chara_id}:9017`);
    flip_params(`relation:${chara_id}:17`, `relation:${chara_id}:9017`);
  });

  new Array(8)
    .fill(0)
    .forEach((_, i) =>
      flip_params(`talent:17:${i + 1050}`, `talent:9017:${i + 1050}`),
    );
  new Array(18)
    .fill(0)
    .forEach((_, i) =>
      flip_params(`talent:17:${i + 1070}`, `talent:9017:${i + 1070}`),
    );
}

module.exports = {
  /** @param {LunaEduMarks} event_marks */
  good_end(event_marks) {
    if (event_marks.emperor) {
      transform(event_marks);
    }
    era.set('callname:17:-1', era.set('callname:17:-2', '鲁铎象征'));
    era.set(
      'relation:17:0',
      Math.max(era.get('relation:17:0'), era.get('relation:9017:0')),
    );
    era.set('love:17', Math.max(era.get('love:17'), era.get('love:9017')));
    new Array(7).fill(0).forEach((_, i) => era.set(`status:17:${1700 + i}`, 0));
    era.set('status:17:工口意愿', 0);
    era.set('status:17:抖S', 1);
    sys_like_chara(17, 0, 800, true, 10);
  },
  /**
   * @param {LunaEduMarks} event_marks
   * @param {number} luna
   * @param {number} [extra_punish]
   */
  async handle_debuff(event_marks, luna, extra_punish) {
    let debuff = era.set(
      'status:17:精神损伤',
      Math.min(era.get('status:17:精神损伤') + (extra_punish || 1), 10),
    );
    era.println();
    await era.printAndWait([
      new CharaTalk(luna, color_17[0]).get_colored_name(),
      ' 的精神状态变得更糟了……',
    ]);
    if (!event_marks.wax_and_wane) {
      event_marks.wax_and_wane++;
      add_event(event_hooks.week_end, new EventObject(17, cb_enum.edu));
    }
    if (debuff >= 3 && !event_marks.a_stones_throw) {
      event_marks.a_stones_throw++;
    }
    if (debuff >= 6) {
      era.set(`status:${luna}:神经衰弱`, 1);
    }
  },
  /**
   * @param {LunaEduMarks} event_marks
   * @param {boolean} luna_end
   */
  normal_end(event_marks, luna_end) {
    if (event_marks.emperor === Number(luna_end)) {
      transform(event_marks);
    }
    era.set('callname:17:-1', era.set('callname:17:-2', '鲁铎象征'));
    era.set('status:17:领域', 0);
  },
  transform,
};
