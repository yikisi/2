const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');
const { ero_actions, ero_action_tags } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.pet_ear] = '抚摸耳朵';
  ero_tagged_hooks[ero_actions.pet_ear] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
    ],
    [ero_action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_breast] = '爱抚胸部';
  ero_tagged_hooks[ero_actions.pet_breast] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.breast),
    ],
    [ero_action_tags.breast],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_nipple] = '爱抚乳头';
  ero_tagged_hooks[ero_actions.pet_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.breast),
    ],
    [ero_action_tags.touched_nipple],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_clitoris] = '爱抚阴核';
  ero_tagged_hooks[ero_actions.pet_clitoris] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.clitoris),
    ],
    [ero_action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.finger_fuck] = '手指插入';
  ero_tagged_hooks[ero_actions.finger_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.virgin),
    ],
    [ero_action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.prepare_virgin] = '张开阴唇';
  ero_tagged_hooks[ero_actions.prepare_virgin] =
    ero_tagged_hooks[ero_actions.finger_fuck];

  ero_action_names[ero_actions.pet_anal] = '爱抚菊花';
  ero_tagged_hooks[ero_actions.pet_anal] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.anal),
    ],
    [ero_action_tags.anal],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.prepare_anal] = '张开菊门';
  ero_tagged_hooks[ero_actions.prepare_anal] =
    ero_tagged_hooks[ero_actions.pet_anal];

  ero_action_names[ero_actions.pet_leg] = '爱抚大腿';
  ero_tagged_hooks[ero_actions.pet_leg] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
    ],
    [ero_action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_tail] = '爱抚尾巴';
  ero_tagged_hooks[ero_actions.pet_tail] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
    ],
    [ero_action_tags.body, ero_action_tags.race],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.cunnilingus] = '舐阴';
  ero_tagged_hooks[ero_actions.cunnilingus] = new EroHookTag(
    [ero_action_tags.mouth, ero_action_tags.pet],
    [ero_action_tags.clitoris],
  );

  ero_action_names[ero_actions.ask_cunnilingus] = '请求舐阴';
  ero_tagged_hooks[ero_actions.ask_cunnilingus] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.mouth),
    ],
    [ero_action_tags.awake, ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_cunnilingus] = '强制舐阴';
  ero_tagged_hooks[ero_actions.force_cunnilingus] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.clitoris, ero_action_tags.pet],
    [ero_action_tags.awake, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.suck_virgin] = '舌交';
  ero_tagged_hooks[ero_actions.suck_virgin] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.virgin),
    ],
    [ero_action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_suck_virgin] = '请求舌交';
  ero_tagged_hooks[ero_actions.ask_suck_virgin] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.virgin,
      EroHookTag.generate_touch_check(part_enum.virgin, part_enum.mouth),
    ],
    [ero_action_tags.awake, ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_suck_virgin] = '强制舌交';
  ero_tagged_hooks[ero_actions.force_suck_virgin] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.pet, ero_action_tags.virgin],
    [ero_action_tags.awake, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.ask_blow_job] = '请求口交';
  ero_tagged_hooks[ero_actions.ask_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [ero_action_tags.awake, ero_action_tags.tongue],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_blow_job] = '强制口交';
  ero_tagged_hooks[ero_actions.force_blow_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.tongue],
  );

  ero_action_names[ero_actions.blow_job] = '口交';
  ero_tagged_hooks[ero_actions.blow_job] = new EroHookTag(
    [ero_action_tags.pet, ero_action_tags.tongue],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_hand_job] = '请求手交';
  ero_tagged_hooks[ero_actions.ask_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.hand),
    ],
    [ero_action_tags.awake, ero_action_tags.hand],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_hand_job] = '强制手交';
  ero_tagged_hooks[ero_actions.force_hand_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.hand],
  );

  ero_action_names[ero_actions.hand_job] = '手交';
  ero_tagged_hooks[ero_actions.hand_job] = new EroHookTag(
    [ero_action_tags.hand, ero_action_tags.pet],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_tit_job] = '请求乳交';
  ero_tagged_hooks[ero_actions.ask_tit_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.breast),
    ],
    [ero_action_tags.awake, ero_action_tags.breast],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.fuck_tit] = '抽插乳间';
  ero_tagged_hooks[ero_actions.fuck_tit] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet],
    [ero_action_tags.breast],
  );

  ero_action_names[ero_actions.tit_job] = '乳交';
  ero_tagged_hooks[ero_actions.tit_job] = new EroHookTag(
    [ero_action_tags.breast, ero_action_tags.pet],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.suck_anal] = '舔肛侍奉';
  ero_tagged_hooks[ero_actions.suck_anal] = new EroHookTag(
    [ero_action_tags.pet],
    [ero_action_tags.anal, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.suck_nipple] = '吮吸乳头';
  ero_tagged_hooks[ero_actions.suck_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.breast),
    ],
    [ero_action_tags.touched_nipple],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_milk_and_hand_job] = '请求授乳手交';
  ero_tagged_hooks[ero_actions.ask_milk_and_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.breast),
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.hand),
    ],
    [ero_action_tags.awake, ero_action_tags.hand, ero_action_tags.nipple],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.milk] = '喂奶';
  ero_tagged_hooks[ero_actions.milk] = new EroHookTag(
    [ero_action_tags.nipple, ero_action_tags.pet],
    [ero_action_tags.awake, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.milk_and_hand_job] = '授乳手交';
  ero_tagged_hooks[ero_actions.milk_and_hand_job] = new EroHookTag(
    [ero_action_tags.hand, ero_action_tags.nipple, ero_action_tags.pet],
    [ero_action_tags.awake, ero_action_tags.mouth, ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_non_penetrative] = '请求素股';
  ero_tagged_hooks[ero_actions.ask_non_penetrative] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (chara_id, other_id) => {
        const touch = era.get(`tcvar:${chara_id}:阴茎接触部位`),
          other_clitoris_touch = era.get(`tcvar:${other_id}:外阴接触部位`);
        return (
          era.get('tflag:主导权') === chara_id ||
          (other_clitoris_touch === -1 &&
            (touch === -1 ||
              (touch.owner === other_id && touch.part === part_enum.body)))
        );
      },
    ],
    [ero_action_tags.awake, ero_action_tags.body, ero_action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.non_penetrative] = '素股';
  ero_tagged_hooks[ero_actions.non_penetrative] = new EroHookTag(
    [ero_action_tags.body, ero_action_tags.clitoris, ero_action_tags.pet],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.sixty_nine] = '六九式';
  ero_tagged_hooks[ero_actions.sixty_nine] = new EroHookTag(
    [ero_action_tags.mouth, ero_action_tags.pet, ero_action_tags.sex_check],
    [ero_action_tags.mouth, ero_action_tags.awake, ero_action_tags.sex_check],
  );

  ero_action_names[ero_actions.ask_hair_fuck] = '请求发交';
  ero_tagged_hooks[ero_actions.ask_hair_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (chara_id, other_id) => {
        const touch = era.get(`tcvar:${chara_id}:阴茎接触部位`);
        return (
          touch === -1 ||
          (touch.owner === other_id && touch.part === part_enum.body)
        );
      },
    ],
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      (chara_id) => era.get(`cflag:${chara_id}:头发长度`) > 0,
    ],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_hair_fuck] = '强制发交';
  ero_tagged_hooks[ero_actions.force_hair_fuck] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [
      ero_action_tags.body,
      (chara_id) => era.get(`cflag:${chara_id}:头发长度`) > 0,
    ],
  );

  ero_action_names[ero_actions.hair_fuck] = '发交';
  ero_tagged_hooks[ero_actions.hair_fuck] = new EroHookTag(
    [
      ero_action_tags.body,
      ero_action_tags.pet,
      (chara_id) => era.get(`cflag:${chara_id}:头发长度`) > 0,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_armpit_intercourse] = '请求腋交';
  ero_tagged_hooks[ero_actions.ask_armpit_intercourse] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (chara_id, other_id) => {
        const touch = era.get(`tcvar:${chara_id}:阴茎接触部位`);
        return (
          touch === -1 ||
          (touch.owner === other_id && touch.part === part_enum.body)
        );
      },
    ],
    [ero_action_tags.awake, ero_action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_armpit_intercourse] = '强制腋交';
  ero_tagged_hooks[ero_actions.force_armpit_intercourse] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.body],
  );

  ero_action_names[ero_actions.armpit_intercourse] = '腋交';
  ero_tagged_hooks[ero_actions.armpit_intercourse] = new EroHookTag(
    [ero_action_tags.body, ero_action_tags.pet],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_foot_job] = '请求足交';
  ero_tagged_hooks[ero_actions.ask_foot_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.foot),
    ],
    [ero_action_tags.awake, ero_action_tags.foot],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_foot_job] = '强制足交';
  ero_tagged_hooks[ero_actions.force_foot_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.foot],
  );

  ero_action_names[ero_actions.foot_job] = '足交';
  ero_tagged_hooks[ero_actions.foot_job] = new EroHookTag(
    [ero_action_tags.foot, ero_action_tags.pet],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_tail_job] = '请求尾交';
  ero_tagged_hooks[ero_actions.ask_tail_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (chara_id, other_id) => {
        const touch = era.get(`tcvar:${chara_id}:阴茎接触部位`);
        return (
          touch === -1 ||
          (touch.owner === other_id && touch.part === part_enum.body)
        );
      },
    ],
    [ero_action_tags.awake, ero_action_tags.body, ero_action_tags.race],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_tail_job] = '强制尾交';
  ero_tagged_hooks[ero_actions.force_tail_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet],
    [ero_action_tags.body, ero_action_tags.race],
  );

  ero_action_names[ero_actions.tail_job] = '尾交';
  ero_tagged_hooks[ero_actions.tail_job] = new EroHookTag(
    [ero_action_tags.body, ero_action_tags.pet, ero_action_tags.race],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.tribbing] = '女阴摩擦';
  ero_tagged_hooks[ero_actions.tribbing] = new EroHookTag(
    [ero_action_tags.clitoris],
    [ero_action_tags.clitoris],
  );

  ero_action_names[ero_actions.self_pet_nipple] = '胸部自慰';
  ero_tagged_hooks[ero_actions.self_pet_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.nipple,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.breast),
      EroHookTag.generate_self_touch_check(part_enum.breast),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_hand_job] = '打飞机';
  ero_tagged_hooks[ero_actions.self_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.penis),
      EroHookTag.generate_self_touch_check(part_enum.penis),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_pet_clitoris] = '阴核自慰';
  ero_tagged_hooks[ero_actions.self_pet_clitoris] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.clitoris),
      EroHookTag.generate_self_touch_check(part_enum.clitoris),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_finger_fuck] = '小穴自慰';
  ero_tagged_hooks[ero_actions.self_finger_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.virgin,
      EroHookTag.generate_self_talent_check(part_enum.virgin),
      EroHookTag.generate_self_touch_check(part_enum.virgin),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_pet_anal] = '后穴自慰';
  ero_tagged_hooks[ero_actions.self_pet_anal] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.anal),
      EroHookTag.generate_self_touch_check(part_enum.anal),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  // 爱抚派生系
  ero_action_names[ero_actions.pull_ear] = '拉扯耳朵';
  ero_tagged_hooks[ero_actions.pull_ear] = new EroHookTag(
    [ero_action_tags.pet, ero_action_tags.sadism],
    [
      ero_action_tags.body,
      (chara_id) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === ero_actions.pet_ear ||
            last_action === ero_actions.pull_ear) &&
          era.get(`tflag:前回对手`) === chara_id
        );
      },
    ],
  );
  ero_derive_check[ero_actions.pull_ear] = true;

  ero_action_names[ero_actions.pull_tail] = '拽尾巴';
  ero_tagged_hooks[ero_actions.pull_tail] = new EroHookTag(
    [ero_action_tags.pet, ero_action_tags.sadism],
    [
      ero_action_tags.body,
      ero_action_tags.race,
      (chara_id) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === ero_actions.pet_tail ||
            last_action === ero_actions.pull_tail) &&
          era.get(`tflag:前回对手`) === chara_id
        );
      },
    ],
  );
  ero_derive_check[ero_actions.pull_tail] = true;

  ero_action_names[ero_actions.stimulate_g_spot_by_finger] = '玩弄G点';
  ero_tagged_hooks[ero_actions.stimulate_g_spot_by_finger] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.pet],
    [
      ero_action_tags.virgin,
      (chara_id, other_id) => {
        const touch = era.get(`tcvar:${chara_id}:阴道接触部位`);
        const virgin = era.get(`talent:${chara_id}:处女`);
        return (
          touch.owner === other_id &&
          touch.part === part_enum.hand &&
          (!virgin || !(virgin + 1))
        );
      },
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_g_spot_by_finger] = true;

  ero_action_names[ero_actions.ask_deep_blow_job] = '请求深喉';
  ero_tagged_hooks[ero_actions.ask_deep_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [ero_action_tags.awake, ero_action_tags.tongue, EroHookTag.blow_job_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_deep_blow_job] = true;

  ero_action_names[ero_actions.force_deep_blow_job] = '强制深喉';
  ero_tagged_hooks[ero_actions.force_deep_blow_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.tongue, EroHookTag.blow_job_check],
  );
  ero_derive_check[ero_actions.force_deep_blow_job] = true;

  ero_action_names[ero_actions.deep_blow_job] = '主动深喉';
  ero_tagged_hooks[ero_actions.deep_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.tongue,
      EroHookTag.blow_job_check,
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.deep_blow_job] = true;

  ero_action_names[ero_actions.ask_hand_and_blow_job] = '请求手搓口交';
  ero_tagged_hooks[ero_actions.ask_hand_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [
      ero_action_tags.awake,
      ero_action_tags.hand,
      ero_action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_hand_and_blow_job] = true;

  ero_action_names[ero_actions.force_hand_and_blow_job] = '强制手搓口交';
  ero_tagged_hooks[ero_actions.force_hand_and_blow_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [
      ero_action_tags.hand,
      ero_action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
  );
  ero_derive_check[ero_actions.force_hand_and_blow_job] = true;

  ero_action_names[ero_actions.hand_and_blow_job] = '手搓口交';
  ero_tagged_hooks[ero_actions.hand_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.hand,
      ero_action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.hand_and_blow_job] = true;

  ero_action_names[ero_actions.ask_tit_and_blow_job] = '请求乳夹口交';
  ero_tagged_hooks[ero_actions.ask_tit_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.hand,
      EroHookTag.tit_and_blow_job_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_tit_and_blow_job] = true;

  ero_action_names[ero_actions.fuck_tit_and_month] = '抽插乳夹口交';
  ero_tagged_hooks[ero_actions.fuck_tit_and_month] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet],
    [
      ero_action_tags.breast,
      ero_action_tags.hand,
      EroHookTag.tit_and_blow_job_check,
    ],
  );
  ero_derive_check[ero_actions.fuck_tit_and_month] = true;

  ero_action_names[ero_actions.tit_and_blow_job] = '乳夹口交';
  ero_tagged_hooks[ero_actions.tit_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.hand,
      ero_action_tags.pet,
      EroHookTag.tit_and_blow_job_check,
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.tit_and_blow_job] = true;

  ero_action_names[ero_actions.bite_nipple] = '狠咬乳头';
  ero_tagged_hooks[ero_actions.bite_nipple] = new EroHookTag(
    [ero_action_tags.mouth, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.touched_nipple, EroHookTag.bite_nipple_check],
  );
  ero_derive_check[ero_actions.bite_nipple] = true;

  ero_action_names[ero_actions.ask_bite_nipple] = '请求咬乳头';
  ero_tagged_hooks[ero_actions.ask_bite_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.m_hit,
      ero_action_tags.touched_nipple,
      EroHookTag.bite_nipple_check,
    ],
    [ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_bite_nipple] = true;
};
