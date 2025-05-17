/**
 * @file 日常地文
 * @author 雞雞
 * @author KUN
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const common_celebration = require('#/event/daily/common-lines/common-celebration');
const common_out_shopping = require('#/event/daily/common-lines/out-shopping');
const kojo = require('#/event/daily/daily-common.kojo');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, money_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_name } = require('#/data/locations');

const money_list = [0, 1500, 5000, 10000];

class CustomizedDaily {
  constructor(chara_id) {
    this.id = chara_id;
  }

  get #dict() {
    const dict = {};
    dict['角色名'] = era.get(`callname:${this.id}:-2`);
    dict['代表色'] = get_chara_color(this.id);
    dict['玩家名'] = era.get('callname:0:-2');
    dict.id = this.id;
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['马娘'] = '马郎';
      dict['她'] = '他';
    } else {
      dict['马娘'] = '马娘';
      dict['她'] = '她';
    }
    return dict;
  }

  get_this() {
    return this;
  }

  /** @author 雞雞 */
  async basement_end() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait('在特雷森，一个任何探测器都检测不到的地下室中……', {
      offset: 6,
      width: 12,
    });
    await era.printAndWait(
      [
        me.get_colored_name(),
        ' 拼命地想要挣脱绑住手脚的绳子，却只勒得自己生疼。',
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      [
        chara.get_colored_name(),
        ' 坐到床边对 ',
        me.get_colored_name(),
        ' 露出嫣然一笑，并且温柔地呵护着 ',
        me.get_colored_name(),
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      ['但 ', me.get_colored_name(), ' 的心中唯有对未知未来的深邃恐惧……'],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      [
        '被 ',
        chara.get_colored_name(),
        ' 的爱意所囚禁，',
        me.get_colored_name(),
        ' 迎来了结局……',
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await print_event_name(
      [{ content: '情爱囹圄', color: buff_colors[3] }],
      chara,
      undefined,
      6,
    );
  }

  /** @author 无名黑奴 */
  async borrow_money() {
    const billing = sys_get_billings()[0];
    era.printInColRows(
      { columns: [{ content: '要借多少钱？', type: 'text' }] },
      {
        columns: ['算了', '1500 马币', '5000 马币', '10000 马币'].map(
          (e, i) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 6 },
              content: e,
              type: 'button',
            };
          },
        ),
      },
    );
    let amount = await era.input();
    amount = money_list[amount];
    if (amount) {
      era.printInColRows(
        { columns: [{ content: '要借多久？', type: 'text' }] },
        {
          columns: ['算了', '1 个月', '3 个月', '6 个月'].map((e, i) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 6 },
              content: e,
              type: 'button',
            };
          }),
        },
      );
      let time = await era.input();
      time = (time - 1) * 12 + (time === 1) * 4;
      if (time > 0) {
        let love_buff = era.get(`love:${this.id}`);
        if (love_buff > 75) {
          love_buff = (love_buff - 75) / 25;
        } else {
          love_buff = 0;
        }
        const repay = Math.ceil(
          (amount * (1 + 0.0125 * (1 - love_buff) * time)) / time,
        );
        if (
          await select_yes_or_no(
            [
              '借款 ',
              { content: amount.toLocaleString(), color: money_color },
              ' 马币，此后 ',
              { content: time.toLocaleString(), color: buff_colors[3] },
              ' 周内每周还款 ',
              { content: repay.toLocaleString(), color: money_color },
              ' 马币，共 ',
              {
                content: (repay * time).toLocaleString(),
                color: money_color,
              },
              ' 马币，接受吗？',
            ],
            '好吧',
            '算了',
          )
        ) {
          sys_change_money(amount);
          billing.creditor = this.id;
          billing.repay = -repay;
          billing.timer = time;
          await era.printAndWait([
            get_chara_talk(0).get_colored_name(),
            ' 向 ',
            get_chara_talk(this.id).get_colored_name(),
            ' 借了 ',
            { content: amount.toLocaleString(), color: money_color },
            ' 马币……',
          ]);
        }
      }
    }
  }

  async celebration() {
    return await common_celebration.call(this);
  }

  async end_talk() {}

  /** @author 雞雞 */
  good_morning() {
    const dict = this.#dict;
    dict['骏川'] = era.get('callname:301:-2');
    kojo['回合开始'](dict);
  }

  /**
   * @author 雞雞
   * @author 无名黑奴
   * @param {HookArg} hook
   */
  async good_night(hook) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0),
      awake = 2 * sys_check_awake(this.id) + sys_check_awake(0);
    if (awake === 3) {
      const check = get_custom_check(this.id).is_want_make_love();
      if (check) {
        if (
          await select_yes_or_no(
            [
              '繁忙的一天结束，',
              me.get_colored_name(),
              ' 把 ',
              chara.get_colored_name(),
              ' 送到学生宿舍门口，',
              chara.get_colored_name(),
              ' 扭扭捏捏地提出了一起睡觉的邀请……',
            ],
            '答应',
            '拒绝',
          )
        ) {
          hook.arg = 1;
          await era.printAndWait([
            '在其他人温暖的目光中，脸色绯红的 ',
            chara.get_colored_name(),
            ' 挽着 ',
            me.get_colored_name(),
            ` 的手向${location_name[era.get('flag:当前位置')]}走去……`,
          ]);
        } else if (check === 2) {
          await era.printAndWait([
            '哗，那 ',
            chara.get_colored_name(),
            ' 脸色一变，挟着 ',
            me.get_colored_name(),
            ` 强行向外走，定是要迫${chara.sex}的 `,
            sys_get_colored_callname(this.id, 0),
            ' 跪地做星努力呀！',
          ]);
          hook.arg = 2;
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 失落地转身向学生宿舍走去……',
          ]);
          hook.arg = 0;
        }
      } else {
        era.print([
          '繁忙的一天结束，',
          get_chara_talk(0).get_colored_name(),
          ' 把 ',
          chara.get_colored_name(),
          ' 送到学生宿舍门口互道晚安后便各自回去了。',
        ]);
      }
    } else if (awake === 1) {
      era.print([
        '看着睡得正香的 ',
        chara.get_colored_name(),
        '，',
        get_chara_talk(0).get_colored_name(),
        ' 无论如何也做不出把人叫醒的行为，只好亲自送到学生宿舍，才揉着酸痛的肩膀回到训练员公寓。',
      ]);
    } else {
      era.print([
        get_chara_talk(0).get_colored_name(),
        ' 睡得人事不知，只在朦胧中似乎听到了 ',
        chara.get_colored_name(),
        ' 道别的声音。',
      ]);
    }
  }

  /** @param {0|1|2} stage */
  // eslint-disable-next-line no-unused-vars
  async growth(stage) {}

  async load_talk() {}

  /** @author 雞雞 */
  async office_cook() {
    const me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      ' 与 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 在训练员室里一起做饭，',
      me.get_couple_title(),
      ' 决定今天来点健康有机的胡萝卜。',
    ]);
  }

  /** @author 雞雞 */
  async office_game() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 与 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 在训练员室里一起打游戏机，二人度过了一段快乐的时光。',
    ]);
  }

  /** @author 雞雞 */
  async office_gift() {
    await era.printAndWait([
      get_chara_talk(this.id).get_colored_name(),
      ' 收到了 ',
      get_chara_talk(0).get_colored_name(),
      ' 的礼物，感到十分的高兴。',
    ]);
  }

  /** @author 雞雞 */
  async office_prepare() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 与 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 在训练员室里赛前准备，为了迎战接下来的比赛，必须打起十二分精神。',
    ]);
  }

  /** @author 雞雞 */
  async office_rest() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 与 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 在训练员室里一起休息，二人脑子放空着度过了一段时间。',
    ]);
  }

  /** @author 雞雞 */
  async office_study() {
    const chara = get_chara_talk(this.id);
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 在训练员室里指导 ',
      chara.get_colored_name(),
      ' 学习，成功指导',
      chara.sex,
      '解开了不会的题目。',
    ]);
  }

  /** @author 雞雞 */
  async out_church() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到神社祈福。',
    ]);
    const dice = Math.random();
    if (dice < 0.5) {
      await era.printAndWait([
        '抽到了',
        dice < 0.05 ? '大吉' : '吉利',
        '的签文！此行让 ',
        me.get_couple_title(),
        ' 感觉很高兴。',
      ]);
      /** @author Mr.E. */
      if (dice < 0.0001 && era.get('flag:强奸抵抗') === 1) {
        await era.printAndWait([
          '署名是未知的',
          chara.get_uma_sex_title(),
          '文本施法素材！',
        ]);
        era.set('flag:强奸抵抗', '');
      } else if (dice < 0.01) {
        await era.printAndWait([
          '眼前突然幻视到一扇彩色的闸门，心情突然好了起来',
        ]);
        const item = get_random_entry([0, 1, 2, 3, 12]);
        era.add(`item:${item}`, 1);
        await era.printAndWait([
          '获得了 [',
          era.get(`itemname:${item}`),
          ']！',
        ]);
      } else if (dice < 0.02) {
        await era.printAndWait([
          '一阵风吹过，被吹倒在 ',
          chara.get_colored_name(),
          ' 的身上了？！',
        ]);
        era.println();
        sys_like_chara(this.id, 0, 20) && (await era.waitAnyKey());
      } else if (dice < 0.03 && chara.sex_code !== 1) {
        await era.printAndWait([
          '一阵风吹过，旁边 ',
          chara.get_colored_name(),
          ' 的裙子居然被吹了起来？！',
        ]);
        sys_change_lust(this.id, 1500);
      } else if (dice < 0.05) {
        await era.printAndWait(['一阵风吹过，居然是马币？！']);
        await era.printAndWait([
          '获得了 ',
          { color: money_color, content: '150' },
          ' 马币！',
        ]);
        era.add('flag:当前马币', 150);
      }
    } else {
      await era.printAndWait([
        '抽到了不吉的签文！此行让 ',
        me.get_couple_title(),
        ' 处处提防天降厄运。',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @author KUN
   * @param {HookArg} hook
   * @param {{[jpy]:number}} extra_flag
   * @returns {Promise}
   */
  async out_river(hook, extra_flag) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      if (
        era.get(`love:${this.id}`) >= 50 &&
        (era.get(`talent:${this.id}:自信程度`) === 1 ||
          era.get(`talent:${this.id}:情感活动`) === 1 ||
          era.get(`talent:${this.id}:羞耻忍耐`) === 1 ||
          era.get(`talent:${this.id}:恐惧感受`) === 1 ||
          era.get(`talent:${this.id}:未来期望`) === 1) &&
        Math.random() < era.get(`love:${this.id}`) / 2000
      ) {
        hook.override = true;
        /** @author KUN */
        await print_event_name('河堤漫步时光', chara);
        await era.printAndWait([
          '在河堤边上休闲的度过了一段时间之后，',
          me.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 踏上了返程。',
        ]);
        await era.printAndWait('温柔的风吹过了两个人的脸，很是惬意。');
        era.printButton('「该回去了呢，」', 1);
        era.printButton('「时间有点晚了。」', 2);
        await era.input();
        await era.printAndWait([
          '在 ',
          me.get_colored_name(),
          ' 说话的同时，身旁的 ',
          chara.get_colored_name(),
          ' 偷偷把视线转了过来，默默把肩膀靠在一起。',
        ]);
        era.println();
        await era.printAndWait('一同慢悠悠的走在路上，一路上都看不见多少人。');
        await chara.say_and_wait('很安静呢……');
        await era.printAndWait([
          '似乎察觉到了什么的 ',
          chara.get_colored_name(),
          '，放缓了脚步。',
        ]);
        era.println();
        await era.printAndWait([
          '发现身旁的 ',
          chara.get_colored_name(),
          ' 停下了脚步时，',
          me.get_colored_name(),
          ' 也停住脚步回头看过去。',
        ]);
        era.printButton('「怎么了？」', 1);
        await era.input();
        await chara.say_and_wait('可以，稍微合上眼睛一会吗？');
        await era.printAndWait([
          '听着摸不着头脑的要求，',
          me.get_colored_name(),
          ' 稍微愣了一下，但还是合上了眼睛。',
        ]);
        era.println();
        await era.printAndWait('风声在耳边吹过，清凉中却夹杂了一丝热风。');
        await era.printAndWait([
          '即使不睁眼，',
          me.get_colored_name(),
          ' 也能猜到发生了什么。',
        ]);
        await era.printAndWait('双臂环过身体，脸上感受到了一点温热的湿润感。');
        era.println();
        await chara.say_and_wait('……好啦，我们回去吧。');
        await era.printAndWait([
          '再次睁开眼的时候，',
          chara.get_colored_name(),
          ' 已经安静地站在 ',
          me.get_colored_name(),
          ' 的面前了。',
        ]);
        await era.printAndWait(
          '虽然脸上还带着一点微红色，但却是微笑着后退了两步。',
        );
        era.printButton('「回去吧。」（好感+10）', 1);
        era.printButton('「或许……可以晚点再回去……」（爱慕+1）', 2);
        if ((await era.input()) === 1) {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 抓住了 ',
            me.get_colored_name(),
            ' 温暖的手，安心的走在路上。',
          ]);
          await me.say_and_wait('刚才的触感，到底是什么呢……', true);
          era.println();
          sys_like_chara(this.id, 0, 10) && (await era.waitAnyKey());
        } else {
          await chara.say_and_wait('晚点……');
          await chara.say_and_wait('也就是……');
          await era.printAndWait([
            '面对眼前红着脸的 ',
            chara.get_colored_name(),
            '，',
            me.get_colored_name(),
            ' 只是笑了笑。',
          ]);
          await era.printAndWait([
            '今天，就带着 ',
            chara.get_colored_name(),
            ' 再玩一会吧。',
          ]);
          era.println();
          sys_love_uma(this.id, 1) && (await era.waitAnyKey());
        }
        return;
      }
      /** @author 雞雞 */
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起来到河边散步，今天也是好心情呢。',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起来到河边钓鱼，希望能钓到大丰收。',
      ]);
      extra_flag.jpy = get_random_value(0, 5);
    }
  }

  /**
   * @author 雞雞
   * @param {HookArg} hook
   */
  async out_shopping(hook) {
    await common_out_shopping.call(
      this,
      get_chara_talk(this.id),
      get_chara_talk(0),
      hook,
    );
  }

  /**
   * @author 雞雞
   * @param {HookArg} hook
   */
  async out_station(hook) {
    hook.arg = await select_action_in_station(this.id);
    let talk;
    switch (hook.arg) {
      case 0:
        talk = '吃饭，要吃中华、日料，还是西餐呢？';
        break;
      case 1:
        talk = '约会，两人手牵手的景象吸引了不少眼红群众。';
        break;
      case 2:
        talk = '逛商场，买一点小心意吧。';
    }
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 与 ',
      get_chara_talk(this.id).get_colored_name(),
      ' 一起来到车站附近',
      talk,
    ]);
  }

  /**
   * @author 雞雞
   * @param {HookArg} hook
   */
  async school_atrium(hook) {
    const me = get_chara_talk(0),
      chara = get_chara_talk(this.id);
    hook.arg = (await select_action_in_atrium()) === 0;
    await era.printAndWait(
      hook.arg
        ? [
            me.get_colored_name(),
            ' 与 ',
            chara.get_colored_name(),
            ` 一起来到中庭枯树洞，看着${chara.sex}朝枯树洞里咆哮的样子，`,
            me.get_colored_name(),
            ' 也坚定了要帮助 ',
            chara.get_colored_name(),
            ' 成为最强的决心。',
          ]
        : [
            me.get_colored_name(),
            ' 与 ',
            chara.get_colored_name(),
            ' 一起来到中庭约会，',
            me.get_couple_title(),
            ' 的组合让周围的学生忍不住议论纷纷。',
          ],
    );
  }

  /** @param {HookArg} hook */
  async school_rooftop(hook) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (
      (era.get(`talent:${this.id}:情感活动`) === 1 ||
        era.get(`talent:${this.id}:自信程度`) === 1) &&
      era.get(`love:${this.id}`) >= 75 &&
      Math.random() < 0.05 + era.get(`base:${this.id}:性欲`) / 20000
    ) {
      hook.override = true;
      /** @author KUN */
      await print_event_name('奇怪的午饭', chara);
      await era.printAndWait([
        '到了午餐时间，',
        me.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 不约而同的来到了天台。',
      ]);
      await era.printAndWait([
        '不知为何，今天 ',
        chara.get_colored_name(),
        ' 带来的饭盒格外的丰盛',
      ]);
      era.println();
      await chara.say_and_wait([
        sys_get_colored_callname(this.id, 0),
        '，来试试看味道怎么样吧。',
      ]);
      await chara.say_and_wait('这可是得意之作哦～');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 把眼前的饭盒接过来，毫无顾虑的拿起了餐具。',
      ]);
      await era.printAndWait(['美美的享受了几口之后，身体却逐渐温热了起来……']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 有点奇怪的转头看向身边的 ',
        chara.get_colored_name(),
        '，才发现也同样面对潮红。',
      ]);
      await era.printAndWait([
        '正当 ',
        me.get_colored_name(),
        ' 想要问什么的时候，却被强行吻住嘴唇打断了话语。',
      ]);
      era.println();
      await era.printAndWait(['直到松开的时候，嘴边还拉出了一道长长的银丝。']);
      era.printButton('「这下不得不做了……」', 1);
      era.printButton('「我可是正人君子！鋼の意志发动！」', 2);
      era.set('status:0:马跳Z', 1);
      era.set(`status:${this.id}:马跳Z`, 1);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '明明是在天台，',
          me.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 却在不断的渴求着对方。',
        ]);
        await era.printAndWait([
          '但一想到这还是午休时间，',
          me.get_colored_name(),
          ' 便没有继续想其他的事情，伸手抓住了 ',
          chara.get_colored_name(),
          ' 的肩膀……',
        ]);
        await quick_into_sex(this.id);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          ' 猛的摇摇头唤回了坚定的意志，立刻收起了手上的饭盒。',
        ]);
        await era.printAndWait([
          '当着 ',
          chara.get_colored_name(),
          ' 的面站起身，如同逃跑似的离开了天台……',
        ]);
        sys_change_lust(this.id, 1500);
      }
      return;
    }
    /** @author 雞雞 */
    await era.printAndWait([
      me.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到天台吃便当，',
      me.get_couple_title(),
      ' 互相交换了便当盒里的美食。',
    ]);
  }

  /** @author 雞雞 */
  select() {
    const chara = get_chara_talk(this.id);
    if (sys_check_awake(this.id)) {
      era.print(
        get_random_entry([
          [
            chara.get_colored_name(),
            ' 向 ',
            get_chara_talk(0).get_colored_name(),
            ' 打了个招呼。',
          ],
          [
            chara.get_colored_name(),
            ' 向 ',
            get_chara_talk(0).get_colored_name(),
            ' 点了点头，表示已经随时候命了。',
          ],
        ]),
      );
    } else {
      era.print([chara.get_colored_name(), ' 正沉睡着。']);
    }
  }

  /** @author 雞雞 */
  async slave_end() {
    const me = get_chara_talk(0);
    await era.printAndWait(
      [
        '被金钱腐朽的 ',
        me.get_colored_name(),
        ' 踏上了不能选择的道路——抛弃自尊与自己的学生借钱……',
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait('然而所有命运的馈赠，都在背地里标好了价码。', {
      offset: 6,
      width: 12,
    });
    await era.printAndWait(
      [
        me.get_colored_name(),
        ' 的借款，在如雪球一般的利滚利下终于超越了 ',
        me.get_colored_name(),
        ' 所能承受之重。',
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      ['接下来便是 ', me.get_colored_name(), ' 偿还代价的时候了……'],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      ['因被金钱关系所囚，', me.get_colored_name(), ' 迎来了结局……'],
      {
        offset: 6,
        width: 12,
      },
    );
    await print_event_name(
      [{ content: '金钱奴隶', color: buff_colors[3] }],
      get_chara_talk(this.id),
      undefined,
      6,
    );
  }

  /**
   * @author 雞雞
   * @author 无名黑奴
   */
  async talk() {
    const chara = get_chara_talk(this.id);
    let buffer;
    if (!sys_check_awake(this.id)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 发出轻微的鼾声，睡得正香。',
      ]);
    } else {
      if (
        era.get(`base:${this.id}:体力`) <
        0.45 * era.get(`maxbase:${this.id}:体力`)
      ) {
        buffer = [
          [
            chara.get_colored_name(),
            ' 看起来没精打采的，需要让 ',
            chara.get_colored_name(),
            ' 休息了。',
          ],
          [
            chara.get_colored_name(),
            ' 用热切的眼神看向 ',
            get_chara_talk(0).get_colored_name(),
            '，希望得到休息的许可。',
          ],
        ];
      } else if (era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48) {
        buffer = [
          [
            chara.get_colored_name(),
            ' 印堂发黑，全身上下的毛发蓬乱毛躁，看起来干劲极差。',
          ],
          [
            chara.get_colored_name(),
            ' 脸色阴沉，热身运动也做得不太顺利，看起来干劲不足。',
          ],
          [
            chara.get_colored_name(),
            ' 脸部表情相当僵硬，似乎有点紧张，看起来干劲一般。',
          ],
          [
            chara.get_colored_name(),
            ' 愉快地在赛道上进行着热身运动，看起来干劲不错。',
          ],
          [
            chara.get_colored_name(),
            ' 兴高采烈地在赛道上蹦蹦跳跳的，看起来干劲满满。',
          ],
        ];
        buffer = [buffer[era.get(`cflag:${this.id}:干劲`) + 2]];
      } else {
        buffer = [[chara.get_colored_name(), ' 一直保持着轻松的表情。']];
      }
      await era.printAndWait(get_random_entry(buffer));
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  // eslint-disable-next-line no-unused-vars
  async week_start(hook, extra_flag, event_object) {}

  /** @param {HookArg} hook */
  // eslint-disable-next-line no-unused-vars
  async birthday(hook) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (sys_check_remote(this.id)) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 远程向 ',
        chara.get_colored_name(),
        ' 送上了生日祝福',
      ]);
      await era.printAndWait([chara.get_colored_name(), ' 显得很高兴。']);
    } else {
      await kojo['生日'](this.#dict);
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(hook, extra_flag, event_object) {
    if (this[event_hooks.keys[hook.hook]] !== undefined) {
      return await this[event_hooks.keys[hook.hook]].call(
        this,
        hook,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedDaily;
