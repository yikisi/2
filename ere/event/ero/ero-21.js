/**
 * @file 玉藻十字 - 调教
 * @author 雞雞
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/ero/ero-21.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');

module.exports = class extends CustomizedEro {
  get #dict() {
    const o = {};
    o['你'] = get_chara_talk(0).name;
    const tama = get_chara_talk(this.id);
    o['她'] = tama.sex;
    o['玉藻色'] = tama.color;
    o['马娘'] = tama.uma_sex_title;
    return o;
  }

  async ero_start() {
    const edu_marks = new TamaEduMarks();
    if (
      !edu_marks.chained_heart &&
      era.get(`love:${this.id}`) >= 50 &&
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      era.get('tflag:强奸') !== 21
    ) {
      edu_marks.chained_heart = 1;
      await print_name_and_show_kojo(
        '紧缚的心',
        get_chara_talk(this.id),
        kojo,
        this.#dict,
      );
    }
  }

  async get_mark(level, type, _new) {
    const callname = sys_get_colored_callname(this.id, 0);
    const tama = get_chara_talk(this.id);
    let handler;
    switch (type) {
      case mark_enum.pleasure:
        switch (level) {
          case 1:
            handler = () =>
              tama.say_and_wait('等、等一下，身……身体好热……感觉好奇怪……');
            break;
          case 2:
            handler = () => tama.say_and_wait('……哈……那个……可以……再来一次吗？');
            break;
          case 3:
            handler = async () => {
              await tama.say_and_wait(
                '小不点们对不起呐，咱好像已经离不开这个人了……',
              );
              await era.printAndWait([
                tama.get_colored_name(),
                ' 的身体彻底的沦陷了。',
              ]);
            };
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            handler = async () => {
              await tama.say_and_wait('哈啊……哈啊……');
              await era.printAndWait([
                tama.get_colored_name(),
                ' 泛上红潮的脸贴近了过来、能感到背后有数股愉悦感在游走……',
              ]);
            };
            break;
          case 2:
            handler = async () => {
              await tama.say_and_wait([
                '如果能让 ',
                callname,
                ' 开心的话、咱也会很开心的……',
              ]);
              await era.printAndWait([
                tama.get_colored_name(),
                ' 以贫瘠的身体贴上来后慢慢地往下移动，',
              ]);
              await era.printAndWait(
                '胸前、侧腹、大腿、以及各种能让人感受到愉悦的的部位来回摩挲着。',
              );
              await tama.say_and_wait([
                '所以……',
                callname,
                ' 喜欢的部位，能再多告诉咱一些吗……？',
              ]);
            };
            break;
          case 3:
            handler = async () => {
              const me = get_chara_talk(0);
              await tama.say_and_wait('咱说，接下来要咱怎么做、做什么呢？');
              await era.printAndWait([
                tama.get_colored_name(),
                ' 柔软的腿，像生物一般缠上了 ',
                me.get_colored_name(),
                ' 的腰。',
              ]);
              await era.printAndWait([
                tama.sex,
                '的两腿以缓慢地、不慌不忙，但是猎物恰好无法逃走的力度不断摩擦着 ',
                me.get_colored_name(),
                ' 的下身……',
              ]);
              await tama.say_and_wait('现在的话，想对咱做什么都可以噢❤');
            };
        }
        break;
      case mark_enum.pain:
        switch (level) {
          case 1:
            handler = () =>
              tama.say_and_wait('没事的……咱会为了小不点忍下来的……');
            break;
          case 2:
            handler = () =>
              tama.say_and_wait(
                '对、对不起……咱什么都……都会做的……求……求求你……温柔一点点就好……',
              );
            break;
          case 3:
            handler = () => tama.say_and_wait('妈妈……！');
        }
        break;
      case mark_enum.shame:
        switch (level) {
          case 1:
            handler = () => tama.say_and_wait('不……不要看啦……！');
        }
        break;
      case mark_enum.hate:
        switch (level) {
          case 1:
            handler = () => tama.say_and_wait('干啥子呢！就算是咱也会生气哦！');
            break;
          case 2:
            handler = async () => {
              await tama.say_and_wait(
                '不要是以为用了钱就能把咱当玩具一样为所欲为哦！',
              );
              await era.printAndWait([
                '从 ',
                tama.get_colored_name(),
                ' 那冰冷的眼神里能感受到一丝背后的怒意。',
              ]);
            };
            break;
          case 3:
            handler = async () => {
              await tama.say_and_wait('人渣……');
              await era.printAndWait([
                tama.get_colored_name(),
                ' 冰冷的眼神中空无一物，',
                get_chara_talk(0).get_colored_name(),
                ' 的身影在 ',
                tama.get_colored_name(),
                ' 的眼中完全没有映现出来。',
              ]);
              await era.printAndWait(
                '已经彻底封闭的内心恐怕再也不会向任何人敞开了吧。',
              );
            };
        }
    }
    if (handler === undefined) {
      await super.get_mark(level, type, _new);
    } else {
      await handler();
    }
  }
};
