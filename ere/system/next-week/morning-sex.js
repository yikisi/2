const {
  get,
  input,
  printAndWait,
  printButton,
  set,
} = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const { get_custom_check } = require('#/event/check/check-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { location_enum } = require('#/data/locations');

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function naked_apron(chara, me) {
  await print_event_name('隔日清晨之裸体围裙', chara);
  await printAndWait([
    '早上醒来时，发现 ',
    chara.get_colored_name(),
    ' 已经不在床上了。',
  ]);
  await printAndWait([
    '起床梳洗后在厨房发现了',
    chara.sex,
    '的身影，对方似乎在准备早餐的样子，然而……',
  ]);
  await printAndWait([
    '浑身上下赤裸，只穿着围裙认真地准备早餐的 ',
    chara.get_colored_name(),
    ' 一边扭着可爱的屁股一边做菜的模样实在是——',
  ]);
  printButton('可恶，忍不了了！', 1);
  printButton('数质数冷静下来吧……', 2);
  if ((await input()) === 1) {
    const my_cache = { s: get('base:0:体力'), t: get('base:0:精力') },
      chara_cache = {
        s: get(`base:${chara.id}:体力`),
        t: get(`base:${chara.id}:精力`),
      };
    begin_and_init_ero(0, chara.id);
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result(true);
    set('base:0:体力', my_cache.s);
    set('base:0:精力', my_cache.t);
    set(`base:${chara.id}:体力`, chara_cache.s);
    set(`base:${chara.id}:精力`, chara_cache.t);
  } else {
    await printAndWait([
      me.get_colored_name(),
      ' 抑制住了冲动，用理性向 ',
      chara.get_colored_name(),
      ' 打招呼。',
    ]);
  }
}

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function blowjob(chara, me) {
  await print_event_name('隔日清晨之早安口交', chara);
  await printAndWait([
    '早上醒来时，',
    me.get_colored_name(),
    ' 自下身感受到一股异样的感觉。',
  ]);
  await printAndWait([
    '睁开眼睛后出现在眼前的是 ',
    chara.get_colored_name(),
    ' 光着身子用嘴巴吸吮着 ',
    me.get_colored_name(),
    ' 的',
    me.sex_code === 0 ? '阴蒂' : '阴茎',
    '的淫靡景象。',
  ]);
  const skill = get(`abl:${chara.id}:口交技巧`);
  await printAndWait([
    chara.get_colored_name(),
    ' ',
    get(`talent:${chara.id}:饮精成瘾`) || get(`talent:${chara.id}:淫口`)
      ? '贪婪'
      : skill > 2
        ? '熟练'
        : '生涩',
    '地',
    me.sex_code === 0 ? '舔舐着阴蒂' : '吞吐着阴茎',
    '（玩家名）也不禁以手按住（角色名）的脑袋渴求更多的快感。',
  ]);
  const my_cache = { s: get('base:0:体力'), t: get('base:0:精力') },
    chara_cache = {
      s: get(`base:${chara.id}:体力`),
      t: get(`base:${chara.id}:精力`),
    };
  begin_and_init_ero(0, chara.id);
  printButton('可恶，忍不了了！', 1);
  printButton('要去了……！', 2);
  if ((await input()) === 1) {
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.mouth),
      new EroParticipant(
        0,
        me.sex_code === 0 ? part_enum.clitoris : part_enum.penis,
      ),
      false,
    );
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result(true);
  } else {
    await printAndWait([
      '在 ',
      chara.get_colored_name(),
      ' 的早安口交下，',
      me.get_colored_name(),
      ' 很快就达到了高潮，',
      me.sex_code === 0 ? '爱液' : '精液',
      '尽数射进了 ',
      chara.get_colored_name(),
      ' 的樱桃小嘴当中。',
    ]);
    await chara.say_and_wait([
      '满嘴都是……',
      sys_get_callname(chara.id, 0),
      ' 的味道呢……',
    ]);
    await printAndWait('欲望得以发泄之后，新的一天开始了……');
    set_palam_to_max(chara.id, part_enum.mouth);
    set_palam_to_max(
      0,
      me.sex_code === 0 ? part_enum.clitoris : part_enum.penis,
    );
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.mouth),
      new EroParticipant(
        0,
        me.sex_code === 0 ? part_enum.clitoris : part_enum.penis,
      ),
      false,
    );
    await end_ero_and_train();
  }
  set('base:0:体力', my_cache.s);
  set('base:0:精力', my_cache.t);
  set(`base:${chara.id}:体力`, chara_cache.s);
  set(`base:${chara.id}:精力`, chara_cache.t);
}

async function morning_sex() {
  const chara_id = get('flag:床伴');
  if (
    chara_id &&
    get('flag:当前位置') !== location_enum.basement &&
    (get(`love:${chara_id}`) >= 75 || get(`mark:${chara_id}:欢愉`) >= 1) &&
    get(`mark:${chara_id}:反抗`) === 0 &&
    get(`mark:${chara_id}:羞耻`) === 0
  ) {
    const buffer = [];
    if (get_custom_check(chara_id).is_want_make_love()) {
      buffer.push(blowjob);
    }
    if (Math.random() < 0.5) {
      buffer.push(naked_apron);
    }
    const handler = get_random_entry(buffer);
    if (handler) {
      await handler(get_chara_talk(chara_id), get_chara_talk(0));
    }
  }
}

module.exports = morning_sex;
