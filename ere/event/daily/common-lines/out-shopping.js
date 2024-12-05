const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 * @param {HookArg} hook
 */

module.exports = async function (chara, me, hook) {
  const temp = await select_action_in_shopping_street();
  if (
    temp === 3 &&
    chara.id > 0 &&
    era.get(`love:${this.id}`) >= 70 &&
    (era.get(`talent:${this.id}:社交态度`) === 1 ||
      era.get(`talent:${this.id}:捉摸不透`) ||
      era.get(`talent:${this.id}:坦率程度`) === -1 ||
      era.get(`talent:${this.id}:反抗意愿`) === -1 ||
      era.get(`talent:${this.id}:羞耻忍耐`) === 1 ||
      era.get(`talent:${this.id}:恐惧感受`) === 1 ||
      era.get(`talent:${this.id}:自信程度`) === 1) &&
    Math.random() < era.get(`love:${this.id}`) / 2000
  ) {
    hook.override = true;
    await print_event_name('这电影对吗？', chara);
    await era.printAndWait([
      '原本想要和 ',
      chara.get_colored_name(),
      ' 一起去商店街随意的闲逛几下，但却发现了一个意外的宣传。',
    ]);
    era.println();
    await say_by_passer_by_and_wait('宣传', [
      '完美展现了赛',
      chara.get_uma_sex_title(),
      '成长之路的全新作！',
    ]);
    era.println();
    await era.printAndWait([
      '虽然并没有听说，但 ',
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 本着好奇心还是买票进场了。',
    ]);
    await era.printAndWait('坐进了影院，有些期待的等着灯光熄灭，故事开始。');
    await era.printAndWait(
      '屏幕上的电影画面确实是符合全新作的制作水平，但成长之路却有些令人意外。',
    );
    era.println();
    await say_by_passer_by_and_wait('演员', '训练员，多亏了你……');
    await say_by_passer_by_and_wait('演员', '都是因为训练员，我现在才……');
    era.println();
    await era.printAndWait([
      '屏幕上的画面有点夸张，让 ',
      me.get_colored_name(),
      ' 觉得这稍微有些不对劲。',
    ]);
    await era.printAndWait('这真的是成长的过程吗？');
    era.println();
    await era.printAndWait([
      '察觉到了有些不对劲的 ',
      me.get_colored_name(),
      '，正准备转身去和 ',
      chara.get_colored_name(),
      ' 说说剩下的部分就不看了。',
    ]);
    era.println();
    await chara.say_and_wait('……');
    era.println();
    await era.printAndWait('手臂的上方传来了一阵暖和的感觉。');
    await era.printAndWait([
      '坐在身旁的 ',
      chara.get_colored_name(),
      ' 轻轻地握住 ',
      me.get_colored_name(),
      ' 的手。',
    ]);
    era.println();
    await chara.say_and_wait('……要走了吗？');
    era.println();
    await era.printAndWait([
      '影院黑暗的环境里，唯有 ',
      chara.get_colored_name(),
      ' 的脸格外明显。',
    ]);
    await era.printAndWait([
      '双手重叠在 ',
      me.get_colored_name(),
      ' 的手臂上，轻轻靠在肩膀上。',
    ]);
    era.println();
    await era.printAndWait(
      '画面在两个人的心里已经不再重要，视线已经被紧紧锁死了。',
    );
    await era.printAndWait('屏幕的微光照在彼此的脸上，折射出眼中的光线。');
    era.println();
    await chara.say_and_wait([sys_get_colored_callname(this.id, 0), '……']);
    await chara.say_and_wait('我……');
    await say_by_passer_by_and_wait('演员', '我喜欢你！');
    era.println();
    await era.printAndWait('影片来到高潮的时刻，打断了两个人原有的动作。');
    await era.printAndWait([
      '声音覆盖在 ',
      me.get_colored_name(),
      ' 和 ',
      chara.get_colored_name(),
      ' 之间，视线中夹杂着一点尴尬。',
    ]);
    era.printButton('「还是……冷静点吧」（干劲上升，好感+10）', 1);
    era.printButton('「我们……一起出去吧」（干劲大幅上升，爱慕+1）', 2);
    let wait_flag;
    if ((await era.input()) === 1) {
      await era.printAndWait('电影逐渐走向尾声，照明灯也适时点亮了。');
      await era.printAndWait([
        '明亮的光线照在 ',
        me.get_colored_name(),
        ' 尴尬的脸上，',
        me.get_colored_name(),
        ' 也轻咳了一声。',
      ]);
      era.println();
      await chara.say_and_wait('……嗯。');
      era.println();
      await era.printAndWait([
        '仍然贴在一起的手转而抓住了 ',
        me.get_colored_name(),
        '，跟着一起站起身来。',
      ]);
      await era.printAndWait([
        '即使是带着一点遗憾，但也乖巧的站了起来，跟在 ',
        me.get_colored_name(),
        ' 的身后。',
      ]);
      era.println();
      wait_flag = sys_change_motivation(this.id, 1);
      wait_flag = sys_like_chara(this.id, 0, 20) || wait_flag;
    } else {
      await era.printAndWait([
        '即使是在电影的高潮节点里，',
        me.get_colored_name(),
        ' 还是从中间找到了一丝声音。',
      ]);
      await era.printAndWait([
        '跟着气氛喊出来的 ',
        chara.get_colored_name(),
        ' 愣了一下，立刻自顾自的向后缩去。',
      ]);
      await era.printAndWait([
        '相对的，',
        me.get_colored_name(),
        ' 脸上的表情软化了，缓缓往前探去。',
      ]);
      await era.printAndWait([
        '嘴唇贴在一起，将 ',
        chara.get_colored_name(),
        ' 的惊讶和羞涩全部压回了心里，享受着幸福感。',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 牵住 ',
        chara.get_colored_name(),
        ' 的手，悄悄的离开了影院。',
      ]);
      await era.printAndWait([
        '带着满脸都是绯红色的 ',
        chara.get_colored_name(),
        '，看着面前的旅馆，缓慢的挽住了',
        chara.sex,
        '的肩膀走进去……',
      ]);
      era.println();
      era.set('flag:当前位置', location_enum.love_hotel);
      await quick_into_sex(this.id);
      wait_flag = sys_change_motivation(this.id, 2);
      wait_flag = sys_love_uma(this.id, 1) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
  } else {
    hook.arg = temp <= 1;
    let talk;
    switch (temp) {
      case 0:
        talk = '街机厅，祈祷夹娃娃机不要松开爪子。';
        break;
      case 1:
        talk = '抽奖，会抽到好东西吗？';
        break;
      case 2:
        talk = '卡拉OK，山顶的朋友嗨起来！';
        break;
      case 3:
        talk = '看电影，最近有什么好电影吗？';
    }
    await era.printAndWait([
      me.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到商店街',
      talk,
    ]);
  }
};
