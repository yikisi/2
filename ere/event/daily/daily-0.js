/**
 * @file 玩家 - 日常
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长（改编）
 */
const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');
const { gene_type_colors } = require('#/data/race/model/uma-gene');

module.exports = class extends CustomizedDaily {
  async office_cook() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 独自在训练员室里做饭，偶尔奖励自己一些油炸食品吧。',
    ]);
  }

  async office_game() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 独自在训练员室里打游戏，希望不会被领导发现。',
    ]);
  }

  async office_rest() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 独自在训练员室里休息，脑子放空着度过了一段时间。',
    ]);
  }

  async out_church() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 独自来到神社祈福。',
    ]);
    await era.printAndWait(
      Math.random() < 0.5
        ? '抽到了吉利的签文！此行不虚。'
        : '抽到了不吉的签文！这几天夹起尾巴做人吧……',
    );
  }

  async out_river(hook, extra_flag) {
    const me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 独自来到河边散步，无所事事地度过了一段时间。',
      ]);
    } else {
      const my_marks = new MyEduMarks();
      if (my_marks.fishing) {
        if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
          my_marks.fishing = 0;
        } else if (Math.random() < 0.2) {
          /** @author 幽白書 */
          my_marks.fishing = 0;
          const sky = get_chara_talk(20);
          await print_event_name('钓鱼的心得', sky);
          sky.name = '戴着斗笠的芦毛' + sky.uma_sex_title;
          await era.printAndWait([
            me.get_colored_name(),
            ' 带着钓竿在河边遇到了一名',
            sky.get_colored_name(),
            '。',
          ]);
          await era.printAndWait([
            sky.sex,
            '没有回过头，背对着 ',
            me.get_colored_name(),
            ' 说道。',
          ]);
          era.println();
          await sky.say_and_wait(
            '喵哈哈，真巧呢，相遇即是有缘，就自己选一个拿走吧～',
          );
          sky.name = undefined;
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 看了看，对方的身旁摆着一根破旧的钓竿以及一个假饵。',
          ]);
          era.printButton('选择钓竿（本次渔获翻倍）', 1);
          era.printButton('选择假饵（获得20白因子）', 1);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 选择了钓竿，接着仿佛有什么魔力一般，',
              me.get_colored_name(),
              ' 今天的手气好的吓人，钓到的鱼是平常的两倍还多！',
            ]);
            extra_flag.jpy = 5 + get_random_value(1, 5);
          } else {
            await era.printAndWait('嗯？这个假饵的流线型……');
            await era.printAndWait([
              '此时，',
              me.get_colored_name(),
              ' 忽然灵光一闪！',
            ]);
            era.println();
            era.add('juel:0:白', 20);
            await era.printAndWait([
              me.get_colored_name(),
              ' 获得了 ',
              {
                content: '白因子 × 20',
                color: gene_type_colors[2],
              },
              '！',
            ]);
            extra_flag.jpy = 1;
          }
          return;
        }
      }
      await era.printAndWait([
        me.get_colored_name(),
        ' 独自来到河边钓鱼，希望不要空军。',
      ]);
    }
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station();
    let talk;
    switch (hook.arg) {
      case 0:
        talk = '吃饭，最喜欢的那家店还是熟悉的味道。';
        break;
      case 2:
        talk = '逛商场，检查一下购物清单吧。';
    }
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ` 独自来到车站附近${talk}`,
    ]);
  }

  async out_shopping(hook) {
    const me = get_chara_talk(0),
      temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    let talk;
    switch (temp) {
      case 0:
        talk = '街机厅，玩些什么打发时间呢？';
        break;
      case 1:
        talk = '抽奖，来抽点好东西吧！';
        break;
      case 2:
        talk = '卡拉OK，为什么要做这么无聊的事呢……';
        break;
      case 3:
        talk = '看电影，在人群中格格不入的感觉挥之不去。';
        break;
      case 4:
        hook.arg = 2;
        talk = '，径直走向了那家不起眼的粉红的小店……';
    }
    await era.printAndWait([me.get_colored_name(), ` 独自来到商店街${talk}`]);
    const my_marks = new MyEduMarks();
    /** @author Mr.E. */
    if (my_marks.kamen_rider === 1 && Math.random() < 0.05) {
      my_marks.kamen_rider = 0;
      await print_event_name(['假面（？）骑士！'], me);
      await era.printAndWait(['路过商店街的时候，发现有个商家正在做活动：']);
      await era.printAndWait(['「扮演假面骑士送温暖～」']);
      await era.printAndWait([
        '店家解释道，这是为了给一些小朋友们送去温暖办的活动，只不过虽然衣服足够，人手却不够了。',
      ]);
      await era.printAndWait(['他们希望这样能让孩子们的生活更加丰富。']);
      await era.printAndWait(['如果参加的话，还能试穿合适的假面骑士套装。']);
      era.printButton('「还有时间，就来参加一下吧。」', 1);
      era.printButton('「算了算了，这种热闹的活动不适合我。」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '店家感谢了 ',
          me.get_colored_name(),
          ' 的付出，把 ',
          me.get_colored_name(),
          ' 领到换衣间，让 ',
          me.get_colored_name(),
          ' 自行选择一身衣服——',
        ]);
        era.printButton('「胡萝卜侠！」（声望+15）', 1);
        era.printButton('「魔法少女（蒙面怪人款）！」（马币+25）', 2);
        era.printButton(
          '「？？？一副有些奇怪的道具」（声望+20，部分担当干劲+1）',
          3,
          {
            disabled:
              new Array(14)
                .fill(0)
                .map((_, i) => 70 + i)
                .findIndex((e) => era.get(`item:${e}`) > 0) === -1,
          },
        );
        switch (await era.input()) {
          case 1:
            await era.printAndWait([
              '效果大受好评！似乎还看到一些眼熟的学生了？！',
            ]);
            sys_change_fame(15);
            break;
          case 2:
            await era.printAndWait(['效果大受好评！虽然这身衣服很难穿上去……']);
            sys_change_money(25);
            break;
          case 3:
            await era.printAndWait([
              '紧身衣和几片奇怪的布料在店员的帮助下穿了上去，那个看上去像是内裤一样的布料居然只是把面部盖住？！',
            ]);
            await era.printAndWait([
              '虽然作为店家的吉祥物效果很好，但是总感觉好像失去了点什么……',
            ]);
            sys_change_fame(20);
            sys_filter_chara('cflag', '招募状态', recruit_flags.yes).reduce(
              (p, c) => {
                if (
                  c > 0 &&
                  era.get(`cflag:${c}:种族`) > 0 &&
                  era.get(`love:${c}`) >= 50
                ) {
                  sys_change_lust(c, 1000);
                  return p || sys_change_motivation(c, 1);
                }
                return p;
              },
              false,
            ) && (await era.waitAnyKey());
        }
      }
    }
  }

  async school_atrium(hook) {
    hook.arg = false;
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 独自来到中庭，无所事事地度过了一段时间。',
    ]);
  }

  async school_rooftop() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      ' 独自来到天台，想着要不要无视「无烟校园」的警示牌来根烟。',
    ]);
  }
};
