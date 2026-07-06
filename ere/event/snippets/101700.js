const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

const { i18n } = require('#/i18n/selector');

/**
 * @param {string} p1
 * @param {string} p2
 */
function flip_params(p1, p2) {
  const tmp = era.get(p1);
  era.set(p1, era.get(p2));
  era.set(p2, tmp);
}

function i_emperor() {
  return new LunaEduMarks().emperor > 0;
}

/** @param {LunaEduMarks} edu_marks */
function transform(edu_marks) {
  edu_marks.emperor = 1 - edu_marks.emperor;
  flip_params('cflag:17:干劲', 'cflag:9017:干劲');
  flip_params('status:17:自毁', 'status:9017:自毁');
  flip_params('status:17:迷恋', 'status:9017:迷恋');
  flip_params('status:17:皇帝', 'status:9017:皇帝');
  flip_params('status:17:心术', 'status:9017:心术');
  flip_params('status:17:神经衰弱', 'status:9017:神经衰弱');
  flip_params('love:17', 'love:9017');
  flip_params('callname:17:-1', 'callname:9017:-1');
  flip_params('callname:17:-2', 'callname:9017:-2');
  flip_params('callname:0:17', 'callname:0:9017');
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
      flip_params(`talent:17:${i + 40}`, `talent:9017:${i + 40}`),
    );
  new Array(18)
    .fill(0)
    .forEach((_, i) => flip_params(`talent:17:${i}`, `talent:9017:${i}`));
}

module.exports = {
  get_luna_talk_tools() {
    const { lid, eid } = i_emperor()
      ? { eid: 17, lid: 9017 }
      : { eid: 9017, lid: 17 };
    return { emperor: get_chara_talk(eid), luna: get_chara_talk(lid) };
  },
  /** @param {LunaEduMarks} edu_marks */
  good_end(edu_marks) {
    global_achievement.c_luna1 = 1;
    if (edu_marks.emperor > 0) {
      transform(edu_marks);
    }
    era.set('callname:17:-1', era.set('callname:17:-2', '101701'));
    era.set(
      'relation:17:0',
      Math.max(era.get('relation:17:0'), era.get('relation:9017:0')),
    );
    era.set('love:17', Math.max(era.get('love:17'), era.get('love:9017')));
    new Array(7).fill(0).forEach((_, i) => era.set(`status:17:${110 + i}`, 0));
    era.set('status:17:工口意愿', 0);
    era.set('status:17:抖S', 1);
  },
  /**
   * @param {LunaEduMarks} edu_marks
   * @param {number} luna
   * @param {number} [extra_punish]
   */
  async handle_debuff(edu_marks, luna, extra_punish = 1) {
    let debuff = era.set(
      'status:17:精神损伤',
      Math.min(era.get('status:17:精神损伤') + extra_punish, 10),
    );
    era.println();
    await era.printAndWait(
      i18n().kojo[17].notify_get_worse(get_chara_talk(luna)),
    );
    if (!edu_marks.wax_and_wane) {
      edu_marks.wax_and_wane = 1;
      add_event(
        event_hooks.week_end,
        new EventObject(17, cb_enum.edu).set_arg('wax_and_wane'),
      );
    }
    if (debuff >= 3 && !edu_marks.a_stones_throw) {
      edu_marks.a_stones_throw = 1;
    }
    if (debuff >= 6) {
      era.set(`status:${luna}:神经衰弱`, 1);
    }
  },
  i_emperor,
  /**
   * @param {LunaEduMarks} edu_marks
   * @param {boolean} luna_end
   */
  normal_end(edu_marks, luna_end) {
    if (edu_marks.emperor === Number(luna_end)) {
      transform(edu_marks);
    }
    era.set('callname:17:-1', '101701');
    era.set('status:17:领域', 0);
  },
  transform,
};
