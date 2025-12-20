const era = require('#/era-electron');

const {
  part_head,
  sys_check_distance,
  sys_check_mh_dis,
} = require('#/system/ero/sys-calc-distance');

const { part_enum } = require('#/data/ero/part-const');
const { action_tags, actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_tagged_hooks, ero_derive_check) => {
  ero_tagged_hooks[actions.pet_ear] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
      (cid, oid) =>
        // TFLAGNAME:7 = 主导权
        era.get('tflag:7') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_head }),
    ],
    [action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.pet_breast] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.breast),
    ],
    [action_tags.breast],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.pet_nipple] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.breast),
    ],
    [action_tags.touched_nipple],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.pet_clitoris] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.clitoris),
    ],
    [action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.finger_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.virgin),
    ],
    [action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.prepare_virgin] =
    ero_tagged_hooks[actions.finger_fuck];

  ero_tagged_hooks[actions.pet_anal] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.anal),
    ],
    [action_tags.anal],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.prepare_anal] = ero_tagged_hooks[actions.pet_anal];

  ero_tagged_hooks[actions.pet_leg] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_enum.foot }),
    ],
    [action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.pet_tail] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_enum.anal }),
    ],
    [action_tags.body, action_tags.race],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.cunnilingus] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.clitoris),
    ],
    [action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_cunnilingus] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.clitoris,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.mouth),
    ],
    [action_tags.awake, action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.force_cunnilingus] = new EroHookTag(
    [action_tags.awake, action_tags.clitoris, action_tags.pet],
    [action_tags.awake, action_tags.mouth],
  );

  ero_tagged_hooks[actions.suck_virgin] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.virgin),
    ],
    [action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_suck_virgin] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      action_tags.virgin,
      EroHookTag.generate_touch_check(part_enum.virgin, part_enum.mouth),
    ],
    [action_tags.awake, action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.force_suck_virgin] = new EroHookTag(
    [action_tags.awake, action_tags.pet, action_tags.virgin],
    [action_tags.awake, action_tags.mouth],
  );

  ero_tagged_hooks[actions.ask_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [action_tags.awake, action_tags.tongue],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.force_blow_job] = new EroHookTag(
    [action_tags.insert, action_tags.pet, action_tags.sadism],
    [action_tags.tongue],
  );

  ero_tagged_hooks[actions.blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      action_tags.tongue,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.penis),
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_hand_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.hand),
    ],
    [action_tags.awake, action_tags.hand],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.force_hand_job] = new EroHookTag(
    [action_tags.insert, action_tags.pet, action_tags.sadism],
    [action_tags.hand],
  );

  ero_tagged_hooks[actions.hand_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.hand,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.penis),
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_tit_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.breast),
    ],
    [action_tags.awake, action_tags.breast],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.fuck_tit] = new EroHookTag(
    [action_tags.insert, action_tags.pet],
    [action_tags.breast],
  );

  ero_tagged_hooks[actions.tit_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.breast,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.penis),
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.suck_anal] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.anal),
    ],
    [action_tags.anal],
  );

  ero_tagged_hooks[actions.suck_nipple] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.breast),
    ],
    [action_tags.touched_nipple],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_milk_and_hand_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.breast),
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.hand),
      (cid, oid) => sys_check_mh_dis(oid, cid),
    ],
    [action_tags.awake, action_tags.hand, action_tags.nipple],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.milk] = new EroHookTag(
    [action_tags.awake, action_tags.nipple, action_tags.pet],
    [action_tags.awake, action_tags.mouth],
  );

  ero_tagged_hooks[actions.milk_and_hand_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.hand,
      action_tags.nipple,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.mouth),
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.penis),
      (cid, oid) => sys_check_mh_dis(cid, oid),
    ],
    [action_tags.awake, action_tags.mouth, action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_non_penetrative] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:阴茎接触部位`);
        const otouch = era.get(`tcvar:${oid}:外阴接触部位`);
        return (
          era.get('tflag:主导权') === cid ||
          (touch === -1 &&
            otouch === -1 &&
            sys_check_distance(cid, oid, {
              a: part_enum.penis,
              d: part_enum.clitoris,
            })) ||
          (touch.owner === oid && touch.part === part_enum.clitoris)
        );
      },
    ],
    [action_tags.awake, action_tags.body, action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.non_penetrative] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.body,
      action_tags.clitoris,
      action_tags.pet,
    ],
    [action_tags.penis],
  );

  ero_tagged_hooks[actions.sixty_nine] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.pet,
      action_tags.sex_check,
    ],
    [action_tags.mouth, action_tags.awake, action_tags.sex_check],
  );

  ero_tagged_hooks[actions.ask_hair_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:阴茎接触部位`);
        return (
          touch === -1 || (touch.owner === oid && touch.part === part_enum.body)
        );
      },
    ],
    [
      action_tags.awake,
      action_tags.body,
      (cid) => era.get(`cflag:${cid}:头发长度`) > 0,
    ],
  );

  ero_tagged_hooks[actions.force_hair_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.pet,
      action_tags.sadism,
    ],
    [action_tags.body, (cid) => era.get(`cflag:${cid}:头发长度`) > 0],
  );

  ero_tagged_hooks[actions.hair_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.body,
      action_tags.pet,
      (cid) => era.get(`cflag:${cid}:头发长度`) > 0,
    ],
    [action_tags.penis],
  );

  ero_tagged_hooks[actions.ask_armpit_intercourse] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:阴茎接触部位`);
        return (
          touch === -1 || (touch.owner === oid && touch.part === part_enum.body)
        );
      },
    ],
    [action_tags.awake, action_tags.body],
  );

  ero_tagged_hooks[actions.force_armpit_intercourse] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.pet,
      action_tags.sadism,
    ],
    [action_tags.body],
  );

  ero_tagged_hooks[actions.armpit_intercourse] = new EroHookTag(
    [action_tags.awake, action_tags.body, action_tags.pet],
    [action_tags.penis],
  );

  ero_tagged_hooks[actions.ask_foot_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.foot),
    ],
    [action_tags.awake, action_tags.foot],
  );

  ero_tagged_hooks[actions.force_foot_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.pet,
      action_tags.sadism,
    ],
    [action_tags.foot],
  );

  ero_tagged_hooks[actions.foot_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.foot,
      action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.foot, part_enum.penis),
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.ask_tail_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:阴茎接触部位`);
        return (
          touch === -1 || (touch.owner === oid && touch.part === part_enum.body)
        );
      },
    ],
    [action_tags.awake, action_tags.body, action_tags.race],
  );

  ero_tagged_hooks[actions.force_tail_job] = new EroHookTag(
    [action_tags.awake, action_tags.insert, action_tags.pet],
    [action_tags.body, action_tags.race],
  );

  ero_tagged_hooks[actions.tail_job] = new EroHookTag(
    [action_tags.awake, action_tags.body, action_tags.pet, action_tags.race],
    [action_tags.penis],
  );

  ero_tagged_hooks[actions.tribbing] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.clitoris,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.clitoris),
    ],
    [action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.self_pet_nipple] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.nipple,
      action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.breast),
      EroHookTag.generate_self_touch_check(part_enum.breast),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.self_hand_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.penis),
      EroHookTag.generate_self_touch_check(part_enum.penis),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.self_pet_clitoris] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.clitoris,
      action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.clitoris),
      EroHookTag.generate_self_touch_check(part_enum.clitoris),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.self_finger_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      action_tags.virgin,
      EroHookTag.generate_self_talent_check(part_enum.virgin),
      EroHookTag.generate_self_touch_check(part_enum.virgin),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_tagged_hooks[actions.self_pet_anal] = new EroHookTag(
    [
      action_tags.anal,
      action_tags.awake,
      action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.anal),
      EroHookTag.generate_self_touch_check(part_enum.anal),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  // 爱抚派生系
  ero_tagged_hooks[actions.pull_ear] = new EroHookTag(
    [
      action_tags.pet,
      action_tags.sadism,
      (cid, oid) =>
        // TFLAGNAME:7 = 主导权
        era.get('tflag:7') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_head }),
    ],
    [
      action_tags.body,
      (cid) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === actions.pet_ear ||
            last_action === actions.pull_ear) &&
          era.get(`tflag:前回对手`) === cid
        );
      },
    ],
  );
  ero_derive_check[actions.pull_ear] = true;

  ero_tagged_hooks[actions.pull_tail] = new EroHookTag(
    [
      action_tags.pet,
      action_tags.sadism,
      (cid, oid) =>
        era.get('tflag:主导权') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_enum.anal }),
    ],
    [
      action_tags.body,
      action_tags.race,
      (cid) => {
        const last_action = era.get('tflag:前回行动');
        return (
          (last_action === actions.pet_tail ||
            last_action === actions.pull_tail) &&
          era.get(`tflag:前回对手`) === cid
        );
      },
    ],
  );
  ero_derive_check[actions.pull_tail] = true;

  ero_tagged_hooks[actions.stimulate_g_spot_by_finger] = new EroHookTag(
    [action_tags.awake, action_tags.pet],
    [
      action_tags.virgin,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:阴道接触部位`);
        const virgin = era.get(`talent:${cid}:处女`);
        return (
          touch.owner === oid &&
          touch.part === part_enum.hand &&
          (!virgin || !(virgin + 1))
        );
      },
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.stimulate_g_spot_by_finger] = true;

  ero_tagged_hooks[actions.ask_deep_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [action_tags.awake, action_tags.tongue, EroHookTag.blow_job_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_deep_blow_job] = true;

  ero_tagged_hooks[actions.force_deep_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.pet,
      action_tags.sadism,
    ],
    [action_tags.tongue, EroHookTag.blow_job_check],
  );
  ero_derive_check[actions.force_deep_blow_job] = true;

  ero_tagged_hooks[actions.deep_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      action_tags.tongue,
      EroHookTag.blow_job_check,
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.deep_blow_job] = true;

  ero_tagged_hooks[actions.ask_hand_and_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [
      action_tags.awake,
      action_tags.hand,
      action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_hand_and_blow_job] = true;

  ero_tagged_hooks[actions.force_hand_and_blow_job] = new EroHookTag(
    [action_tags.insert, action_tags.pet, action_tags.sadism],
    [action_tags.hand, action_tags.tongue, EroHookTag.hand_and_blow_job_check],
  );
  ero_derive_check[actions.force_hand_and_blow_job] = true;

  ero_tagged_hooks[actions.hand_and_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      action_tags.hand,
      action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.hand_and_blow_job] = true;

  ero_tagged_hooks[actions.ask_tit_and_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.penis,
      action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [
      action_tags.awake,
      action_tags.breast,
      action_tags.hand,
      EroHookTag.tit_and_blow_job_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_tit_and_blow_job] = true;

  ero_tagged_hooks[actions.fuck_tit_and_mouth] = new EroHookTag(
    [action_tags.insert, action_tags.pet],
    [action_tags.breast, action_tags.hand, EroHookTag.tit_and_blow_job_check],
  );
  ero_derive_check[actions.fuck_tit_and_mouth] = true;

  ero_tagged_hooks[actions.tit_and_blow_job] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.breast,
      action_tags.hand,
      action_tags.pet,
      EroHookTag.tit_and_blow_job_check,
    ],
    [action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.tit_and_blow_job] = true;

  ero_tagged_hooks[actions.bite_nipple] = new EroHookTag(
    [action_tags.awake, action_tags.mouth, action_tags.pet, action_tags.sadism],
    [action_tags.touched_nipple, EroHookTag.bite_nipple_check],
  );
  ero_derive_check[actions.bite_nipple] = true;

  ero_tagged_hooks[actions.ask_bite_nipple] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.pet,
      action_tags.m_hit,
      action_tags.touched_nipple,
      EroHookTag.bite_nipple_check,
    ],
    [action_tags.mouth],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[actions.ask_bite_nipple] = true;
};
