/**
 * @file 系列事件 - 个人隐私安全
 * @author Mr.E.
 */
const {
  get,
  getAddedCharacters,
  input,
  printAndWait,
  printButton,
  set,
  waitAnyKey,
} = require('#/era-electron');

const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const print_ero_page = require('#/page/page-ero');

const CustomizedEdu = require('#/event/edu/edu-common');
const { run_custom_ero } = require('#/event/ero/ero-factory');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { money_color } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedEdu {
  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_1(me, _me, _call, hook, _extra, event_object) {
    const chara_id = get_random_entry(
      getAddedCharacters().filter(
        (e) =>
          e > 0 &&
          get(`cflag:${e}:招募状态`) === recruit_flags.yes &&
          get(`love:${e}`) >= 70 &&
          get(`cflag:${e}:种族`) &&
          !sys_check_remote(e),
      ),
    );
    if (
      !chara_id ||
      get('flag:当前位置') !== location_enum.office ||
      get('item:鲜榨人奶') + get('item:鲜榨马奶') === 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    new MyEduMarks().milk_buyer = chara_id;
    await print_event_name('个人隐私安全（其一？）', me);
    await printAndWait([
      '今天起床后，',
      me.get_colored_name(),
      ' 看到私人账户收到信息，对方表示希望买断以后的所有货。',
    ]);
    printButton('（可能就是有人有怪癖吧……反正能拿到钱就好）', 1);
    printButton('（居然还需要寄到指定地点……好可疑，还是算了）', 2);
    if ((await input()) === 1) {
      await printAndWait([me.get_colored_name(), ' 收到了一笔汇款。']);
      await printAndWait(
        '对方表示下次还是这个收货地址，并希望有货的时候优先联系TA。',
      );
      const money = sys_change_money(
        (get('item:鲜榨人奶') * get('itemprice:鲜榨人奶') +
          get('item:鲜榨马奶') * get('itemprice:鲜榨马奶')) *
          1.2,
      );
      if (money > 0) {
        await printAndWait([
          '获得了 ',
          {
            color: money_color,
            content: money.toLocaleString(),
            fontWeight: 'bold',
          },
          ' 马币的货款……',
        ]);
      }
      set('item:鲜榨马奶', 0);
      set('item:鲜榨人奶', 0);
      add_event(hook.hook, event_object.set_arg('privacy_2_1'));
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 认为对方的言语中颇有可疑之处，而且收货地址距离特雷森学院并不太远。',
      ]);
      await printAndWait([
        me.get_colored_name(),
        ' 婉拒了对方，只不过对方似乎没有死心，说如果有货可疑联系TA，会以更高的价格收购。',
      ]);
      add_event(hook.hook, event_object.set_arg('privacy_2_2'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_2_1(me, _me, _call, hook, _extra, event_object) {
    const chara_id = new MyEduMarks().milk_buyer;
    if (
      sys_check_remote(chara_id) ||
      get('flag:当前位置') !== location_enum.office
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('个人隐私安全（其二？！）', me);
    const chara = get_chara_talk(chara_id);
    await printAndWait([
      '训练室内，',
      chara.get_colored_name(),
      ' 正在玩手机，见到 ',
      me.get_colored_name(),
      ' 立马收了起来，好像在躲着 ',
      me.get_colored_name(),
      ' 的样子。',
    ]);
    await printAndWait([
      me.get_colored_name(),
      ' 的手机也震动了一下，提示收到了一条消息。',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' 动了动鼻子，说 ',
      me.get_colored_name(),
      ' 身上好像有些陌生的味道。',
    ]);
    await printAndWait([
      me.get_colored_name(),
      ' 并没有在意，毕竟',
      chara.get_uma_sex_title(),
      '很敏感。',
    ]);
    await printAndWait('……');
    await printAndWait([
      '自然也没有发现 ',
      chara.get_colored_name(),
      ' 在 ',
      me.get_colored_name(),
      ' 注意不到的地方眼神奇怪了起来。',
    ]);
    add_event(event_hooks.week_end, event_object.set_arg('privacy_3'));
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_2_2(me, _me, _call, hook, _extra, event_object) {
    const chara_id = new MyEduMarks().milk_buyer;
    if (
      sys_check_remote(chara_id) ||
      get('flag:当前位置') !== location_enum.office ||
      get('item:鲜榨人奶') + get('item:鲜榨马奶') === 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('个人隐私安全（其二！？）', me);
    await printAndWait([
      '对方又一次发来讯息，希望 ',
      me.get_colored_name(),
      ' 能够给TA货物。',
    ]);
    await printAndWait(
      'TA似乎是这一类商品的爱好者，显得非常急切，就像是要用它们来干什么一样。',
    );
    printButton('（最近手头有点紧……果然还是做吧？）', 1);
    printButton('（……好可疑，还是算了）', 2);
    if ((await input()) === 1) {
      await printAndWait([
        '正所谓没有钱是万万不能的，事到如今也没人能够苛责 ',
        me.get_colored_name(),
        ' 了吧。',
      ]);
      await printAndWait([
        '抱着遮掩的心思，',
        me.get_colored_name(),
        ' 决定还是同意对方。',
      ]);
      const money = sys_change_money(
        (get('item:鲜榨人奶') * get('itemprice:鲜榨人奶') +
          get('item:鲜榨马奶') * get('itemprice:鲜榨马奶')) *
          1.2,
      );
      if (money > 0) {
        await printAndWait([
          '获得了 ',
          {
            color: money_color,
            content: money.toLocaleString(),
            fontWeight: 'bold',
          },
          ' 马币的货款……',
        ]);
      }
      set('item:鲜榨马奶', 0);
      set('item:鲜榨人奶', 0);
      add_event(hook.hook, event_object.set_arg('privacy_2_1'));
    } else {
      await printAndWait(
        '这么近的收货地址，加上这种急迫的语气，果然是可疑人员吧，不要理会了。',
      );
      await printAndWait([
        '这么想着，',
        me.get_colored_name(),
        ' 把对方拉入了黑名单。',
      ]);
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_3(me, _me, _call, hook, _extra, event_object) {
    const my_marks = new MyEduMarks(),
      chara_id = my_marks.milk_buyer;
    if (
      sys_check_remote(chara_id) ||
      get('cflag:0:位置') !== 0 ||
      get('flag:当前位置') === location_enum.basement ||
      !sys_check_awake(0) ||
      !sys_check_awake(chara_id) ||
      get('flag:床伴') > 0 ||
      !check_pregnant_unprotect(0) ||
      !check_pregnant_unprotect(chara_id)
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const chara = get_chara_talk(chara_id);
    await print_event_name('个人隐私安全（其三？）', me);
    await printAndWait([
      '训练结束后，',
      chara.get_colored_name(),
      ' 问 ',
      me.get_colored_name(),
      ' 是否有空，想和 ',
      me.get_colored_name(),
      ' 去一个地方。',
    ]);
    printButton('「正好没什么安排，一起去吧。」', 1);
    printButton('「还是算了，太晚了」', 2);
    if ((await input()) === 1) {
      await printAndWait([
        chara.get_colored_name(),
        ' 的步伐逐渐轻快，只不过 ',
        me.get_colored_name(),
        ' 越看越觉得熟悉。',
      ]);
      await printAndWait('这分明是之前那个买家的收货地址！');
      await chara.say_and_wait([
        sys_get_colored_callname(chara.id, 0),
        ' 真是不注意个人隐私，明明什么都没透露，偏偏ip是在校园内呢～',
      ]);
      await chara.say_and_wait([
        '不过没关系，我已经帮 ',
        sys_get_colored_callname(chara.id, 0),
        ' 处理好了，之前好像是这里的人想要对 ',
        sys_get_colored_callname(chara.id, 0),
        ' 做一些不好的事呢。',
      ]);
      await chara.say_and_wait([
        '但是为了让 ',
        sys_get_colored_callname(chara.id, 0),
        ' 学到教训，一定要让你用身体好好记住——',
      ]);
      await chara.say_and_wait('——我们是一心同体的。');
      await printAndWait('……');
      printButton(`好好拥抱${chara.sex}，表示自己的谢意。（好感+25）`, 1);
      printButton(`带着${chara.sex}回去好好感谢。`, 2);
      if ((await input()) === 1) {
        sys_like_chara(chara.id, 0, 25) && (await waitAnyKey());
      } else {
        set('flag:床伴', chara.id);
      }
    } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
      await printAndWait('手腕上传来一股温柔却不容抗拒的力量。');
      await printAndWait([
        me.get_colored_name(),
        ' 被 ',
        chara.get_colored_name(),
        ' 反身拉在还没上锁的训练员室，然后反手锁上了门。',
      ]);
      if (get('flag:惩戒力度') === 3) {
        await chara.say_and_wait([
          '明明已经是',
          chara.get_uma_sex_title(),
          '的所有物了。',
        ]);
        await chara.say_and_wait('居然还以为自己对这副身体有处置权吗？');
        await chara.say_and_wait('看来有必要对你明确一下你的地位了。');
        await chara.say_and_wait('还看着我做什么？衣服难道不会自己脱下来吗！');
        await printAndWait([
          '在意味不明的注视下，',
          me.get_colored_name(),
          ' 一点一点地脱去自己的衣服。',
        ]);
        await printAndWait(
          '先是代表训练员身份的徽章，最后是代表个人隐私的内衣裤。',
        );
        await chara.say_and_wait('就这样？犯了这种错误……');
        await printAndWait([
          chara.get_colored_name(),
          ' 还没说完，作为孕袋的身体就明白了。',
        ]);
        await printAndWait([
          me.get_colored_name(),
          ' 把衣服甩在一边，用最规范的土下座，将私处一览无余地展露给对方。',
        ]);
        await printAndWait(['浑身发热呢……']);
        await printAndWait([
          '是因为被',
          chara.get_uma_sex_title(),
          '大人呵斥……',
        ]);
        await printAndWait('还是，本来就期待被这样对待才会做出这样的事呢？');
        await printAndWait('脑子和身体都烧了起来，无法思考了。');
        await printAndWait('事到如今只知道用行动表示歉意了。');
        await printAndWait('就连被强加的马耳也匍匐在地上。');
        begin_and_init_ero(0, chara_id);
        set('tflag:强奸', set('tflag:主导权', chara_id));
        set(`tcvar:${chara_id}:孕袋卖奶`, 1);
        await print_ero_page(chara_id, true);
        await end_ero_and_show_result(true);
      } else {
        await chara.say_and_wait([
          sys_get_colored_callname(chara_id, 0),
          ' 每天也会被身体困扰对吧，我明白的哦～',
        ]);
        await chara.say_and_wait('真是的，明明只要说出来，我就会帮忙的。');
        await printAndWait([
          me.get_colored_name(),
          ' 感到 ',
          chara.get_colored_name(),
          ' 已经开始着急地剥去自己的衣服。',
        ]);
        await chara.say_and_wait(
          '每次都要自己处理，很麻烦的吧……没关系，那种的事情已经结束了。今天，不，还有以后……',
        );
        await chara.say_and_wait('我都会帮你好好处理的。');
        await chara.say_and_wait(
          '不注重上网隐私，这么光明正大地挂着售卖乳液的链接。',
        );
        await chara.say_and_wait('这不就是暗示训练员欲求不满吗？');
        await chara.say_and_wait('可以放松身体了哦？');
        await printAndWait([
          '虽然 ',
          me.get_colored_name(),
          ' 还想辩解什么，但是发情了的',
          chara.get_uma_sex_title(),
          '显然不会听 ',
          me.get_colored_name(),
          ' 再说什么。',
        ]);
        begin_and_init_ero(0, chara_id);
        set('tflag:强奸', set('tflag:主导权', chara_id));
        if (get('talent:0:乳头类型') === 2) {
          set('tcvar:0:乳突', 1);
        }
        await run_custom_ero(chara_id, ero_hooks.use_item, {
          item: item_enum.milk_pump,
          part: part_enum.breast,
        });
        await print_ero_page(chara_id, true);
        await end_ero_and_show_result(true);
      }
    } else if (get('flag:惩戒力度') < 3) {
      await printAndWait([
        me.get_colored_name(),
        ' 被 ',
        chara.get_colored_name(),
        ' 拉到训练员宿舍。',
      ]);
      await chara.say_and_wait([
        sys_get_colored_callname(chara_id, 0),
        ' 很辛苦吧，还要开展副业才能生活。',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' 耳朵垂了下来，似乎对 ',
        me.get_colored_name(),
        ' 的「私生活」有一些了解。',
      ]);
      await chara.say_and_wait(
        '如果有困难，一定要告诉我哦，我一定会站在你那边的！',
      );
      await chara.say_and_wait([
        '之前 ',
        sys_get_colored_callname(chara_id, 0),
        ' 在网络上的时候被人追踪了，好像有人要找麻烦的样子。',
      ]);
      await chara.say_and_wait('不过放心吧，已经被我解决啦～');
      await chara.say_and_wait('如果有困难的话一定要告诉我哦！');
      await printAndWait([
        chara.get_colored_name(),
        ' 给了 ',
        me.get_colored_name(),
        ' 一个拥抱。',
      ]);
      if (get('cflag:0:身高') - get(`cflag:${chara_id}:身高`) > 20) {
        await printAndWait([
          '舌头也趁机舔了 ',
          me.get_colored_name(),
          ' 的脖子，弄得 ',
          me.get_colored_name(),
          ' 也痒痒的。',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          ' 在 ',
          me.get_colored_name(),
          ' 的脖颈间深深吸了一口气，好像这就是',
          chara.sex,
          '为 ',
          me.get_colored_name(),
          ' 解决这件事的报酬。',
        ]);
      }
      await chara.say_and_wait([
        sys_get_colored_callname(chara_id, 0),
        '，下周见，好好休息吧！',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' 就这样把 ',
        me.get_colored_name(),
        ' 送到宿舍门口，和 ',
        me.get_colored_name(),
        ' 道别。',
      ]);
      sys_change_lust(chara_id, get_random_value(400, 800));
    }
    my_marks.milk_buyer = 0;
  }
};
