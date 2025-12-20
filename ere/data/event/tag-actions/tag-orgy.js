const { action_tags, actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/** @param {EroHookTag[]} ero_tagged_hooks */
module.exports = (ero_tagged_hooks) => {
  ero_tagged_hooks[actions.ask_supporter_prepare_virgin] = new EroHookTag(
    [(cid) => !cid],
    [action_tags.virgin, action_tags.supporter_awake],
  );

  ero_tagged_hooks[actions.ask_double_suck_nipple] = new EroHookTag(
    [action_tags.nipple],
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
  );

  ero_tagged_hooks[actions.double_suck_nipple] = new EroHookTag(
    [
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
    [action_tags.nipple],
  );

  ero_tagged_hooks[actions.ask_double_blow_job] = new EroHookTag(
    [action_tags.penis, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
  );

  ero_tagged_hooks[actions.double_blow_job] = new EroHookTag(
    [
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
      (cid) => cid,
    ],
    [action_tags.penis],
  );

  ero_tagged_hooks[actions.ask_double_cunnilingus] = new EroHookTag(
    [action_tags.clitoris, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
  );

  ero_tagged_hooks[actions.double_cunnilingus] = new EroHookTag(
    [
      (cid) => cid,
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
    [action_tags.clitoris],
  );

  ero_tagged_hooks[actions.ask_double_suck_virgin] = new EroHookTag(
    [action_tags.virgin, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
  );

  ero_tagged_hooks[actions.double_suck_virgin] = new EroHookTag(
    [
      action_tags.mouth,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
    [action_tags.virgin],
  );

  ero_tagged_hooks[actions.ask_double_tit_job] = new EroHookTag(
    [action_tags.penis, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.breast,
      action_tags.supporter_awake,
      action_tags.supporter_breast,
    ],
  );

  ero_tagged_hooks[actions.double_tit_job] = new EroHookTag(
    [
      action_tags.breast,
      action_tags.supporter_awake,
      action_tags.supporter_breast,
      (cid) => cid,
    ],
    [action_tags.penis],
  );

  ero_tagged_hooks[actions.ask_double_cowgirl] = new EroHookTag(
    [action_tags.awake, action_tags.insert, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.virgin,
      action_tags.supporter_awake,
      action_tags.supporter_virgin,
    ],
  );

  ero_tagged_hooks[actions.ask_double_fuck] = new EroHookTag(
    [action_tags.virgin, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
    ],
  );

  ero_tagged_hooks[actions.ask_double_penetration] = new EroHookTag(
    [action_tags.anal, action_tags.virgin, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
    ],
  );

  ero_tagged_hooks[actions.ask_spit_roast] = new EroHookTag(
    [action_tags.virgin, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
    ],
  );

  ero_tagged_hooks[actions.ask_spit_roast_anal_sex] = new EroHookTag(
    [action_tags.anal, (cid) => !cid],
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
    ],
  );

  ero_tagged_hooks[actions.ask_cunnilingus_with_fucking] = new EroHookTag(
    [action_tags.insert],
    [
      action_tags.clitoris,
      action_tags.virgin,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
    ],
  );

  ero_tagged_hooks[actions.fuck_69] = new EroHookTag(
    [action_tags.insert],
    [
      action_tags.awake,
      action_tags.mouth,
      action_tags.sex_check,
      action_tags.supporter_awake,
      action_tags.supporter_mouth,
      action_tags.supporter_sex_check,
    ],
  );

  ero_tagged_hooks[actions.double_cowgirl] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.virgin,
      action_tags.supporter_awake,
      action_tags.supporter_virgin,
      (cid) => cid > 0,
    ],
    [action_tags.insert],
  );

  ero_tagged_hooks[actions.double_fuck] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
      (cid) => cid,
    ],
    [action_tags.virgin],
  );

  ero_tagged_hooks[actions.double_penetration] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
      (cid) => cid,
    ],
    [action_tags.anal, action_tags.virgin],
  );

  ero_tagged_hooks[actions.spit_roast] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
      (cid) => cid,
    ],
    [action_tags.virgin],
  );

  ero_tagged_hooks[actions.spit_roast_anal_sex] = new EroHookTag(
    [
      action_tags.awake,
      action_tags.insert,
      action_tags.supporter_awake,
      action_tags.supporter_insert,
      (cid) => cid,
    ],
    [action_tags.mouth],
  );
};
