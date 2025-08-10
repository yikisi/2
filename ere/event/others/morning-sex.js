/**
 * @file H事件 - 隔日清晨系列
 * @author 雞雞
 * @author 无名黑奴
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  set,
} = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const { get_custom_check } = require('#/event/check/check-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { penis_desc } = require('#/data/ero/status-const');
const { get_trainer_title } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

/**
 * @author 雞雞
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
    '，',
    me.get_colored_name(),
    ' 也不禁以手按住 ',
    chara.get_colored_name(),
    ' 的脑袋渴求更多的快感。',
  ]);
  begin_and_init_ero(0, chara.id);
  printButton('（可恶，忍不了了！）', 1);
  printButton('（要去了……！）', 2);
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
    await end_ero_and_show_result();
  }
}

/**
 * @author 无名黑奴
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function duty(chara, me) {
  await print_event_name('隔日清晨之义务履行', chara);
  await printAndWait([me.get_colored_name(), ' 被击打脸颊的温热唤醒。']);
  if (chara.sex_code === 0) {
    set(`status:${chara.id}:弗隆${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
    await printAndWait([
      '折磨了 ',
      me.get_colored_name(),
      ' 一整晚的 ',
      chara.get_colored_name(),
      ' 又一次饮用了药物，屈尊用',
      chara.sex,
      '那高贵而',
      penis_desc[get_penis_size(chara.id)],
      '的肉棒作为闹钟。',
    ]);
  } else {
    await printAndWait([
      '折磨了 ',
      me.get_colored_name(),
      ' 一整晚的 ',
      chara.get_colored_name(),
      ' 又一次屈尊用',
      chara.sex,
      '那高贵',
      penis_desc[get_penis_size(chara.id)],
      '的肉棒作为闹钟。',
    ]);
  }
  await printAndWait([
    '——提醒着 ',
    me.get_colored_name(),
    '，',
    me.sex,
    '还有未尽的义务。从早到晚，周而复始。',
  ]);
  printButton('顺从地含住', 1);
  printButton('厌恶地扭过脸去', 2);
  begin_and_init_ero(0, chara.id);
  set('tflag:主导权', chara.id);
  if ((await input()) === 1) {
    await printAndWait([
      '其实不劳费心，',
      me.get_colored_name(),
      ' 刚刚张开一点嘴唇，那根肉棒就迫不及待地捅了进来。',
    ]);
    await printAndWait([
      me.get_colored_name(),
      ' 刚刚张开一点嘴唇，那根肉棒就迫不及待地捅了进来。',
    ]);
    await printAndWait([
      '在 ',
      chara.get_colored_name(),
      ' 肆意地使用之下，',
      me.get_colored_name(),
      ' 温顺地用唇舌服侍着。',
    ]);
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
    await printAndWait([
      get_trainer_title(),
      ' ',
      me.get_colored_actual_name(),
      '，今天也牢记着自己的职责……',
    ]);
  } else {
    await printAndWait([
      '即使沦落到这步田地，',
      me.get_colored_name(),
      ' 也是有尊严、至少是脾气的——',
    ]);
    await printAndWait([
      me.get_colored_name(),
      ' 只是微微扭开了脸、正打算如此主张时，早已失去耐心的 ',
      chara.get_colored_name(),
      ' 主人甩了 ',
      me.get_colored_name(),
      ' 一个耳光，提醒着 ',
      me.get_colored_name(),
      ' 现在到底是何等处境。',
    ]);
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
    await printAndWait([
      '随后，',
      chara.get_colored_name(),
      ' 不再希冀 ',
      me.get_colored_name(),
      ' 的配合，就开始自行取用这顿自助的早餐。',
    ]);
    await printAndWait([
      get_trainer_title(),
      ' ',
      me.get_colored_actual_name(),
      '，今天也被灌输着、自己的职责……',
    ]);
    set('tflag:强奸', chara.id);
  }
  await print_ero_page(chara.id, true);
  await end_ero_and_show_result();
}

/**
 * @author 雞雞
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
  printButton('（可恶，忍不了了！）', 1);
  printButton('（数质数冷静下来吧……）', 2);
  if ((await input()) === 1) {
    begin_and_init_ero(0, chara.id);
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result();
  } else {
    await printAndWait([
      me.get_colored_name(),
      ' 抑制住了冲动，用理性向 ',
      chara.get_colored_name(),
      ' 打招呼。',
    ]);
  }
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
    const buffer = [],
      love = get(`love:${cid}`);
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
    const handler = get_random_entry(buffer);
    if (handler) {
      const my_cache = { s: get('base:0:体力'), t: get('base:0:精力') },
        chara_cache = {
          s: get(`base:${cid}:体力`),
          t: get(`base:${cid}:精力`),
        };
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
