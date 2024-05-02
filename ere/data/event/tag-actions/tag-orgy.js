const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 */
module.exports = (ero_action_names, ero_tagged_hooks) => {
  ero_action_names[ero_actions.ask_double_suck_nipple] = '请求双人吮乳';
  ero_tagged_hooks[ero_actions.ask_double_suck_nipple] = new EroHookTag(
    [ero_action_tags.nipple],
    [ero_action_tags.awake, ero_action_tags.supporter_awake],
  );

  ero_action_names[ero_actions.double_suck_nipple] = '双人吮乳';
  ero_tagged_hooks[ero_actions.double_suck_nipple] = new EroHookTag(
    [ero_action_tags.supporter_awake],
    [ero_action_tags.nipple],
  );

  ero_action_names[ero_actions.ask_double_blow_job] = '请求双人口交';
  ero_tagged_hooks[ero_actions.ask_double_blow_job] = new EroHookTag(
    [ero_action_tags.penis, (chara_id) => !chara_id],
    [ero_action_tags.awake, ero_action_tags.supporter_awake],
  );

  ero_action_names[ero_actions.double_blow_job] = '双人口交';
  ero_tagged_hooks[ero_actions.double_blow_job] = new EroHookTag(
    [ero_action_tags.supporter_awake, (chara_id) => chara_id],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_double_cunnilingus] = '请求双人舐阴';
  ero_tagged_hooks[ero_actions.ask_double_cunnilingus] = new EroHookTag(
    [ero_action_tags.clitoris, (chara_id) => !chara_id],
    [ero_action_tags.awake, ero_action_tags.supporter_awake],
  );

  ero_action_names[ero_actions.double_cunnilingus] = '双人舐阴';
  ero_tagged_hooks[ero_actions.double_cunnilingus] = new EroHookTag(
    [ero_action_tags.supporter_awake, (chara_id) => chara_id],
    [ero_action_tags.clitoris],
  );

  ero_action_names[ero_actions.ask_double_suck_virgin] = '请求双人舌交';
  ero_tagged_hooks[ero_actions.ask_double_suck_virgin] = new EroHookTag(
    [ero_action_tags.virgin, (chara_id) => !chara_id],
    [ero_action_tags.awake, ero_action_tags.supporter_awake],
  );

  ero_action_names[ero_actions.double_suck_virgin] = '双人舌交';
  ero_tagged_hooks[ero_actions.double_suck_virgin] = new EroHookTag(
    [ero_action_tags.supporter_awake],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.ask_double_tit_job] = '请求双人乳交';
  ero_tagged_hooks[ero_actions.ask_double_tit_job] = new EroHookTag(
    [ero_action_tags.penis, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_breast,
    ],
  );

  ero_action_names[ero_actions.double_tit_job] = '双人乳交';
  ero_tagged_hooks[ero_actions.double_tit_job] = new EroHookTag(
    [
      ero_action_tags.breast,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_breast,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_double_fuck] = '请求轮奸';
  ero_tagged_hooks[ero_actions.ask_double_fuck] = new EroHookTag(
    [ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_double_penetration] = '请求前后轮奸';
  ero_tagged_hooks[ero_actions.ask_double_penetration] = new EroHookTag(
    [ero_action_tags.anal, ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_spit_roast] = '请求上下轮奸';
  ero_tagged_hooks[ero_actions.ask_spit_roast] = new EroHookTag(
    [ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_spit_roast_anal_sex] = '请求口菊轮奸';
  ero_tagged_hooks[ero_actions.ask_spit_roast_anal_sex] = new EroHookTag(
    [ero_action_tags.anal, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.fuck_69] = '双人六九插入';
  ero_tagged_hooks[ero_actions.fuck_69] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.awake,
      ero_action_tags.sex_check,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_sex_check,
    ],
  );

  ero_action_names[ero_actions.double_fuck] = '轮奸';
  ero_tagged_hooks[ero_actions.double_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.double_penetration] = '前后轮奸';
  ero_tagged_hooks[ero_actions.double_penetration] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.anal, ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.spit_roast] = '上下轮奸';
  ero_tagged_hooks[ero_actions.spit_roast] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.spit_roast_anal_sex] = '口菊轮奸';
  ero_tagged_hooks[ero_actions.spit_roast_anal_sex] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.mouth],
  );
};
