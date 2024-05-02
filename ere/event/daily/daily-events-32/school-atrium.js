const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.arg = 0;
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  if (edu_marks.plan_b && era.get('cflag:32:育成回合计时') <= 47 + 44) {
    buffer.push(
      () =>
        era.printAndWait([
          me.get_colored_name(),
          ' 带着 ',
          tachyon.get_colored_name(),
          ' 来到枯树洞前，',
          tachyon.sex,
          '自觉的趴在了枯树洞边上。',
        ]),
      async () => {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 靠在枯树洞的边上，彷彿想对着里面喊些什么，最后犹豫了许久还是放弃了',
        ]);
        await era.printAndWait([
          '看着',
          tachyon.sex,
          '的模样，',
          me.get_colored_name(),
          ' 不知为何感到了悲伤和一丝的安心',
        ]);
      },
    );
  } else {
    buffer.push(async () => {
      await tachyon.say_and_wait('把苦恼对着树洞喊出来？这样又能改变什么。');
      await tachyon.say_and_wait('……无聊，比起抱怨，还不如努力改变现状。');
      await tachyon.say_and_wait(
        '『喊出来内心的压力会轻松很多』？都跟在我身边了，你怎么还会有压力？等等，那个苦笑是什么意思。',
      );
    });
    !edu_marks.evil &&
      buffer.push(async () => {
        edu_marks.evil = 1;
        await me.say_and_wait('速子———？');
        era.println();
        await era.printAndWait([
          '今天不知道为什么一早就没看到 ',
          tachyon.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '总是沉浸研究的',
          tachyon.sex,
          '今天却不知道去了哪里。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 在校园里左找右找，最后从路过学生的口中听说',
          tachyon.sex,
          '在枯树洞旁。',
        ]);
        await era.printAndWait([
          '枯树洞……',
          tachyon.sex,
          '也有什么想要倾诉的烦恼吗？',
        ]);
        await era.printAndWait('身为训练员没看出情绪不对这可是失职啊。');
        era.drawLine();
        await era.printAndWait([
          me.get_colored_name(),
          ' 来到了中庭，毕竟是上课时间，因此这里没什么人，只有少数趁着没人前来发泄情绪的',
          tachyon.get_uma_sex_title(),
          '。',
        ]);
        await era.printAndWait([
          '也因为人烟稀少，于是 ',
          me.get_colored_name(),
          ' 亲眼看到了「那个」。',
        ]);
        await era.printAndWait([
          '朝着',
          tachyon.get_uma_sex_title(),
          '靠近，针对',
          tachyon.sex,
          '们内心弱小处的黑影。',
        ]);
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}A`,
          '呜啊啊啊！我好弱啊……为什么，怎么都赢不了……！',
        );
        await tachyon.say_as_unknown_and_wait('你想……获得力量吗？');
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}A`,
          '……力量？',
        );
        await tachyon.say_as_unknown_and_wait(
          '能够变得比谁都强，胜过所有人的力量……',
        );
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}A`,
          '……真，真的可以吗？代价是什么？',
        );
        await tachyon.say_as_unknown_and_wait(
          '呵呵呵……想知道的话，就到旧理科实验室来吧……',
        );
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}B`,
          '为什么……就是无法提起勇气告白……那个木头……为什么都做到这种程度了还不明白……！',
        );
        await tachyon.say_as_unknown_and_wait(
          '想要诚实表达自己的心意吗？想要即便不说出口也能让他明白自己的心思吗？',
        );
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}B`,
          '你，你是……！',
        );
        await tachyon.say_as_unknown_and_wait(
          '到旧理科实验室吧，你就能获得你想要的一切了……',
        );
        await me.say_and_wait('……那家伙在干嘛', true);
        await era.printAndWait([
          '在枯树洞旁仿佛蛊惑人心的恶魔一般不停念叨着的无疑是 ',
          me.get_colored_name(),
          ' 的负责',
          tachyon.get_uma_sex_title(),
          ' ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '不断在那些因烦恼而在枯树洞前倾诉的人们面前出现，讲着诱人堕落的话语，仿佛神话里的魔鬼一般',
        ]);
        await era.printAndWait([
          '此时的',
          tachyon.sex,
          '也注意到了 ',
          me.get_colored_name(),
        ]);
        await tachyon.say_and_wait([
          callname,
          '，你来的正好，准备回去迎接客人了',
        ]);
        await me.say_and_wait('客人？');
        await tachyon.say_and_wait([
          '当然是那些困扰的',
          tachyon.get_uma_sex_title(),
          '们啦。',
        ]);
        await tachyon.say_and_wait(
          '哎呀，我以前真的是太失礼了，居然觉得枯树洞是没有必要存在的地方。',
        );
        await tachyon.say_and_wait([
          '现在想想这不是为我量身打造会主动筛选出心灵意志弱小的',
          tachyon.get_uma_sex_title(),
          '们的场所吗。',
        ]);
        await era.printAndWait('因为意志不坚所以才需要外力引导发泄情绪。');
        await era.printAndWait([
          '因为意志不坚所以也容易为了达成目的将灵魂出卖给恶（速）魔（子）。',
        ]);
        await era.printAndWait([
          '某种意义上来讲，对某些图谋不轨的人来说，来到这里的',
          tachyon.get_uma_sex_title(),
          '确实是最容易被坏人盯上的无辜孩子。',
        ]);
        await era.printAndWait([
          '不过，',
          tachyon.get_colored_name(),
          ' 的话应该不会伤害',
          tachyon.sex,
          '们……吗？',
        ]);
        await tachyon.say_and_wait(['不说这个，', callname, '，快走吧。']);
        await era.printAndWait('怎么这么突然……肯定不是良心发现之类的吧？');
        await tachyon.say_and_wait(
          '连你都发现了，学生会那些家伙应该很快也要过来了，在被抓去训话前快点，走了！',
        );
        await era.printAndWait([
          '…………偶尔让',
          tachyon.sex,
          '被抓去训话一次感觉其实也不错吧',
        ]);
      });
    if (love > 80) {
      tachyon.sex_code - 1 &&
        me.sex_code > 0 &&
        buffer.push(async () => {
          await era.printAndWait([
            me.get_colored_name(),
            ' 带着 ',
            tachyon.get_colored_name(),
            ' 来到枯树洞前，',
            tachyon.sex,
            '自觉的趴在了枯树洞边上。',
          ]);
          await era.printAndWait([
            '但今天要玩的不是这个，',
            me.get_colored_name(),
            ' 摇了摇头，靠上了 ',
            tachyon.get_colored_name(),
            ' 的肩膀。',
          ]);
          await me.say_and_wait(
            '既然是用来发泄牢骚和压力的，那么你也喊些不甘心的事吧。',
          );
          await era.printAndWait([
            '说完后 ',
            me.get_colored_name(),
            ' 拍了拍',
            tachyon.sex,
            '的屁股，暗示 ',
            me.get_colored_name(),
            ' 想听的是什么。',
          ]);
          await era.printAndWait([
            '脑筋动的很快的天才',
            tachyon.get_uma_sex_title(),
            '瞬间便明白了 ',
            me.get_colored_name(),
            ' 的意思。',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '责怪的看了 ',
            me.get_colored_name(),
            ' 一眼，然后对着枯树洞开始喊出『不甘』。',
          ]);
          await tachyon.say_and_wait([
            '每次乳头被 ',
            callname,
            ' 捏一下就会高潮好不甘心❤',
          ]);
          await tachyon.say_and_wait([
            '小穴杂鱼到 ',
            callname,
            ' 随便摸一下就出水好不甘心❤',
          ]);
          await tachyon.say_and_wait([
            '只要闻到 ',
            callname,
            ' 的味道脑袋里就会变成只剩做爱的痴女好不甘心❤',
          ]);
          await tachyon.say_and_wait([
            '只要含住肉棒就会想要变成 ',
            callname,
            ' 一辈子的飞机杯好不甘心❤',
          ]);
          await tachyon.say_and_wait([
            '明明被命令了忍住但每次 ',
            callname,
            ' 射精时总是忍不住吞下去导致被惩罚好不甘心❤',
          ]);
          await tachyon.say_and_wait(
            '每次做爱都要靠药，结果还是战胜不了肉棒大人好不甘心❤',
          );
          await tachyon.say_and_wait(
            '每次都没有让肉棒大人满足自己就先去了好不甘心❤',
          );
          await era.printAndWait([
            '每次喊完 ',
            me.get_colored_name(),
            ' 就会拍',
            tachyon.sex,
            '的屁股一下作为奖励，打完屁股之后',
            tachyon.sex,
            '便会摇晃的更起劲，喊出更加劲爆的『不甘』话语来。',
          ]);
          await era.printAndWait([
            '最后，在周围',
            tachyon.get_uma_sex_title(),
            '羞红的眼神中，',
            me.get_colored_name(),
            ' 牵着双腿颤抖已经走不动路的 ',
            tachyon.get_colored_name(),
            ' 回到了实验室。',
          ]);
        });
      buffer.push(async () => {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 趴在枯树洞上无聊的望着枯树洞的里面。',
        ]);
        await era.printAndWait([
          '看着',
          tachyon.sex,
          '在外面翘着的臀部，',
          me.get_colored_name(),
          ' 有些按耐不住自己的情欲了。',
        ]);
        await tachyon.say_and_wait([callname, '……咿❤']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 拍上了',
          tachyon.sex,
          '俏稚的臀部，隔着布料的弹性触感将 ',
          me.get_colored_name(),
          ' 拍下去的力道反弹回 ',
          me.get_colored_name(),
          ' 的手掌。',
        ]);
        await tachyon.say_and_wait([
          '……',
          callname,
          '，这里回音……很大的❤……回去，回去再做，好吗❤',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 没有理会',
          tachyon.sex,
          '的求饶，用力拍了一下。',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '连忙按住自己的嘴，却还是有声音忍不住发了出来。',
        ]);
        await tachyon.say_and_wait('呜咿咿❤❤❤');
        await tachyon.say_and_wait('唔……❤');
        await tachyon.say_and_wait('呜呜……❤');
        await tachyon.say_and_wait('等，不能戳进去喔喔喔喔❤❤❤');
        await era.printAndWait([
          '最后，',
          me.get_colored_name(),
          ' 将瘫软在枯树洞上，脸色潮红的 ',
          tachyon.get_colored_name(),
          ' 抱在怀中，带回训练员室。',
        ]);
        await era.printAndWait([
          '路上的学生都不由得对 ',
          me.get_colored_name(),
          ' 们行注目礼。',
        ]);
        await era.printAndWait([
          '对 ',
          me.get_colored_name(),
          ' 而言，这种视线早就习惯了。',
        ]);
        await era.printAndWait([
          '至于怀中的 ',
          tachyon.get_colored_name(),
          '……不顾旁人眼光正用瘫软的双手不断索求拥抱的',
          tachyon.sex,
          '，',
        ]);
        await era.printAndWait([
          '在满足',
          tachyon.sex,
          '之前，大概都无瑕去顾虑这些事了吧。',
        ]);
      });
    }
    if (love > 75) {
      buffer.push(async () => {
        await tachyon.say_and_wait([
          '唔……',
          callname,
          ' ❤……在人家用来发泄情绪的树洞前做这种事……要是被人听到怎么办❤',
        ]);
        await tachyon.say_and_wait('发泄性欲也是发泄？');
        await tachyon.say_and_wait('真是❤……要是被人发现我可不管❤');
      });
    }
  }
  await get_random_entry(buffer)();
};
