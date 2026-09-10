const { drawLine, get, set } = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero } = require('#/event/ero/ero-factory');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { get_trainer_title } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function blowjob(chara, me) {
  begin_and_init_ero(0, chara.id);
  const my_part = me.sex_code === 0 ? part_enum.clitoris : part_enum.penis;
  if (
    (
      await print_title_with_kojo(
        i18n().timon.random_events,
        'mr_blowjob',
        chara,
        me,
        sys_get_colored_callname(chara.id, 0),
      )
    )[0] === 1
  ) {
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.mouth),
      new EroParticipant(0, my_part),
      false,
    );
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result(true);
  } else {
    set_palam_to_max(chara.id, part_enum.mouth);
    set_palam_to_max(0, my_part);
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.mouth),
      new EroParticipant(0, my_part),
      false,
    );
    await end_ero_and_show_result();
  }
}

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function naked_apron(chara, me) {
  if (
    (
      await print_title_with_kojo(
        i18n().timon.random_events,
        'mr_naked_apron',
        chara,
        me,
      )
    )[0] === 1
  ) {
    begin_and_init_ero(0, chara.id);
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result();
  }
}

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function duty(chara, me) {
  if (chara.sex_code === 0) {
    set(`status:${chara.id}:弗隆${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
  }
  begin_and_init_ero(0, chara.id);
  set('tflag:主导权', chara.id);
  if (
    (
      await print_title_with_kojo(
        i18n().timon.pregnant_slave,
        'morning_duty',
        chara,
        me,
        get_trainer_title().full(),
        di18n.feature.n_penis[get_penis_size(chara.id)],
      )
    )[0] === 1
  ) {
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.penis),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(chara.id, part_enum.penis),
      false,
    );
  } else {
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.hit),
      new EroParticipant(0, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.hit),
      new EroParticipant(0, part_enum.mouth, -0.5),
      false,
    );
    set('tflag:强奸', chara.id);
  }
  await print_ero_page(chara.id, true);
  await end_ero_and_show_result();
}

async function morning_sex() {
  const cid = get('flag:床伴');
  if (
    cid > 0 &&
    !sys_check_remote(cid) &&
    get('flag:当前位置') !== location_enum.basement &&
    get(`mark:${cid}:反抗`) === 0 &&
    get(`mark:${cid}:羞耻`) === 0
  ) {
    const buffer = [];
    const love = get(`love:${cid}`);
    if (get('flag:惩戒力度') >= 2) {
      buffer.push(duty);
    } else if (love >= 75 || get(`mark:${cid}:欢愉`) >= 1) {
      if (get_custom_check(cid).is_want_make_love()) {
        buffer.push(blowjob);
      }
      if (Math.random() < 0.5) {
        buffer.push(naked_apron);
      }
    }
    get_custom_ero(cid).cus_morning_sex(buffer, quick_into_sex);
    const handler = get_random_entry(buffer);
    if (handler) {
      const my_cache = { s: get('base:0:体力'), t: get('base:0:精力') };
      const chara_cache = {
        s: get(`base:${cid}:体力`),
        t: get(`base:${cid}:精力`),
      };
      drawLine();
      await handler(get_chara_talk(cid), get_chara_talk(0));
      set(`status:0:沉睡`, 0);
      set('base:0:体力', my_cache.s);
      set('base:0:精力', my_cache.t);
      set(`status:${cid}:沉睡`, 0);
      set(`base:${cid}:体力`, chara_cache.s);
      set(`base:${cid}:精力`, chara_cache.t);
    }
  }
}

module.exports = morning_sex;
