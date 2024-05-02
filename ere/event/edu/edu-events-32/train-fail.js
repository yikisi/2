const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_fail_info_in_train = require('#/event/edu/snippets/print-fail-info-in-train');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {boolean} [plan_b]
 */
async function train_fail_common(tachyon, me, plan_b) {
  era.drawLine();
  await tachyon.say_and_wait('啊……要摔倒了啊', true);
  era.println();
  if (plan_b) {
    await tachyon.say_and_wait('果然，还是放弃比较好吧', true);
    await tachyon.say_and_wait(
      ['反正，', sys_get_colored_callname(32, 25), ' 也已经成长起来了不是吗？'],
      true,
    );
    await tachyon.say_and_wait('虽然很遗憾，但……', true);
  } else {
    await tachyon.say_and_wait('果然，这样的话，还是放弃吧', true);
    await tachyon.say_and_wait('没关系的，因为有备用计划……', true);
    await tachyon.say_and_wait('虽然不甘心，但……', true);
  }
  era.println();
  await me.say_and_wait('速子！没事吧！');
  era.println();
}

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function train_fail_common2(tachyon, me) {
  await tachyon.print_and_wait('……为什么这么着急呢');
  await tachyon.print_and_wait('如果，真的没有相信我的梦想的人那也罢了');
  await tachyon.print_and_wait([
    '但是……只有',
    me.sex,
    '，',
    me.sex,
    '的期待……',
  ]);
  await tachyon.print_and_wait(
    '算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止',
  );
}

/**
 * @param {HookArg} hook
 * @param {boolean} fumble
 * @param {number} train
 */
module.exports = async (hook, { fumble, train }) => {
  if (train === attr_enum.intelligence) {
    await print_fail_info_in_train(32, train, fumble);
    return;
  }
  const args = fumble ? fumble_result.fumble : fumble_result.fail,
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    me = get_chara_talk(0),
    love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32);
  await print_event_name('重整&再出发', tachyon);
  await era.printAndWait([
    me.get_colored_name(),
    ' 看着在场上训练的 ',
    tachyon.get_colored_name(),
  ]);
  await era.printAndWait([
    '不知为何，',
    me.get_colored_name(),
    ' 一直有些忐忑不安',
  ]);
  await era.printAndWait([
    '明明 ',
    tachyon.get_colored_name(),
    ' 的跑法看起来没什么问题，但就是有些担心',
  ]);
  await era.printAndWait([
    '不要出意外就好了，',
    me.get_colored_name(),
    ' 祈祷着',
  ]);
  era.println();
  await era.printAndWait('然而，不出意外的，这种时候意外发生了');
  await era.printAndWait([
    '在 ',
    me.get_colored_name(),
    ' 的眼前，',
    tachyon.get_colored_name(),
    ' 脚步忽然有些踉跄',
  ]);
  era.print('眼看有可能就要跌倒————');
  era.printButton('「速子！快停下！」（接受失败）', 1);
  era.printButton('—————！（尝试挽回）', 2);
  if ((await era.input()) === 1) {
    const buffer = [];
    if (love >= 50) {
      edu_marks.train_fail = Math.min(edu_marks.train_fail + 1, 4);
      switch (edu_marks.train_fail) {
        case 1:
          await tachyon.say_and_wait([
            '好痛……',
            callname,
            '，可以稍微帮我按一下吗？',
          ]);
          era.println();
          await era.printAndWait([
            '连忙跑到跌倒的 ',
            tachyon.get_colored_name(),
            ' 身旁的 ',
            me.get_colored_name(),
            '，动作利索的帮',
            tachyon.sex,
            '脱下了鞋袜',
          ]);
          era.println();
          await tachyon.say_and_wait('没错……脚背……脚底……');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 轻轻为',
            tachyon.sex,
            '按压着脚上的穴道',
          ]);
          await era.printAndWait('这明明，应该是很正常的行为才对');
          await era.printAndWait(
            '然而……由于刚跑完步，被袜子包覆闷热的脚掌自然沾满了汗水',
          );
          await era.printAndWait([
            '随着 ',
            me.get_colored_name(),
            ' 的按摩，黏腻的汗液也沾满了 ',
            me.get_colored_name(),
            ' 的双手',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 不停说服自己，这只是很正常的人体分泌物而已',
          ]);
          await era.printAndWait('但手上的动作还是不由得变得轻柔起来');
          era.println();
          await tachyon.say_and_wait('嗯……唔……');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 时不时发出的低吟更使 ',
            me.get_colored_name(),
            ' 感到了兴奋',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 按压了足底足背后，理论上应该停下手上的动作了，但看来手却仍有自己的想法',
          ]);
          era.println();
          await tachyon.say_and_wait('等等……脚趾的话……');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 的手慢慢捏上',
            tachyon.sex,
            '的脚趾',
          ]);
          await era.printAndWait('一般情况指压按摩的话应该是要抹上油来进行的');
          await era.printAndWait([
            '但 ',
            tachyon.get_colored_name(),
            ' 淋漓的汗水取代了油脂的润滑作用',
          ]);
          era.println();
          await tachyon.say_and_wait(['等等……', callname, '……痛！']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 的呼唤声把 ',
            me.get_colored_name(),
            ' 的理智唤了回来',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 抬头看向',
            tachyon.sex,
            '的脸，',
            tachyon.sex,
            '面色潮红，似乎也被打开了开关一般',
          ]);
          era.println();
          await tachyon.say_and_wait('……后面的，等回到室内再做，好吗？');
          break;
        case 2:
          await tachyon.say_and_wait('好痛～～♡');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 今天训练时又「不小心」跌倒了',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 看着一碰到草地就迫不及待脱下鞋袜的',
            tachyon.sex,
            '，心中半是情欲半是无奈',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '～～快来帮我按摩……♡♡']);
          era.println();
          await era.printAndWait([
            '看 ',
            me.get_colored_name(),
            ' 没有动作，',
            tachyon.sex,
            '撒娇般的将赤足踩在草地上，吸引 ',
            me.get_colored_name(),
            ' 的注意',
          ]);
          await era.printAndWait(
            '白纤易碎，如艺术品一般的裸足，沾染上飞溅的尘土反而更衬托出了它的白净',
          );
          era.println();
          await tachyon.say_and_wait('快点快点，帮我揉揉～～');
          era.println();
          await me.say_and_wait('这样的歪风可不能再继续下去啊……', true);
          await era.printAndWait([
            me.get_colored_name(),
            ' 轻柔的帮',
            tachyon.sex,
            '按起了脚',
          ]);
          era.println();
          await tachyon.say_and_wait('嗯嗯♡～～就是这样……啊♡嘶♡哈♡');
          era.println();
          await era.printAndWait('还是一样，妩媚的声音');
          await era.printAndWait([
            '每次 ',
            tachyon.get_colored_name(),
            ' 张口发出的，都是不断撩拨着 ',
            me.get_colored_name(),
            ' 的情欲的娇吟',
          ]);
          await era.printAndWait(['不能让', tachyon.sex, '这样下去了']);
          await era.printAndWait([
            me.get_colored_name(),
            ' 更换了手上按压的方式',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……咿———']);
          era.println();
          await era.printAndWait('从原本，轻柔爱抚的力道');
          await era.printAndWait('瞬间，化作了仿佛要将脚碾碎一般的凶猛压力');
          era.println();
          await tachyon.say_and_wait([
            '好痛！等，',
            callname,
            '！不要！住手！要断了啊啊啊啊啊！',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 没有听',
            tachyon.sex,
            '的话，只是继续凶狠的按压着',
          ]);
          await era.printAndWait([
            '对于给',
            tachyon.get_uma_sex_title(),
            '的按摩，以及按摩的力道，可以说天底下没有比训练员更了解这些的人了',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 努力控制着力道，在不会伤到骨头，却又能使 ',
            tachyon.get_colored_name(),
            ' 感到疼痛的范围内尽情的按压着',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '等，是我不好！求！救救！不！放手！不要！嘶………！',
          );
          await tachyon.say_and_wait('嘶……哈……哈啊……哈……');
          era.println();
          await era.printAndWait([
            '没过多久，',
            tachyon.get_colored_name(),
            ' 便发不出声，只能发出疼痛的嘶哈声了',
          ]);
          await era.printAndWait([
            '但这样还不够，必须让',
            tachyon.sex,
            '彻底学到教训才行',
          ]);
          era.println();
          await tachyon.say_and_wait('嗯……嘶……哈啊……嗯♡');
          await tachyon.say_and_wait('唔♡嗯……哈啊♡');
          era.println();
          await era.printAndWait('……是错觉吗');
          await era.printAndWait([
            '怎么感觉 ',
            tachyon.get_colored_name(),
            ' 的声音似乎有些变味',
          ]);
          await era.printAndWait([
            '懂得见好就收的道理的 ',
            me.get_colored_name(),
            ' 看',
            tachyon.sex,
            '大概已经学到教训，便放松了手上的力道',
          ]);
          era.println();
          await tachyon.say_and_wait('呜～～～～～');
          await tachyon.say_and_wait('刚刚那么痛，现在忽然这么温柔…………');
          await tachyon.say_and_wait('不行……等……要……要不行了……♡');
          era.println();
          await era.printAndWait('……自己，应该只是在按摩而已吧');
          await era.printAndWait('没过多久，按摩结束');
          await era.printAndWait([
            me.get_colored_name(),
            ' 带着不知为何全身脱力的 ',
            tachyon.get_colored_name(),
            ' 回到了宿舍',
          ]);
          await era.printAndWait(['这样，', tachyon.sex, '应该就知道教训了吧']);
          era.println();
          await era.printAndWait('…………应该，知道了吧？');
          break;
        case 3:
          await tachyon.say_and_wait([
            '嗯～～',
            callname,
            '，来帮我按摩一下～～',
          ]);
          await tachyon.say_and_wait('要……那种按摩哦♡');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 抚摸着自己的双腿，暗示性的对 ',
            me.get_colored_name(),
            ' 说道',
          ]);
          await era.printAndWait('这家伙……果然没学乖啊');
          await era.printAndWait([
            '这次，必须真的让',
            tachyon.sex,
            '学到教训才行',
          ]);
          await era.printAndWait([
            '…………但是，自己的「教训」，会不会是对',
            tachyon.sex,
            '来说某种方面的奖励呢？',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 慌忙把脑内的想法收了回去',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 应该还不至于变成那样吧',
          ]);
          await era.printAndWait('…………应该吧？');
          break;
        case 4:
          await tachyon.say_and_wait(['好痛……', callname]);
          await tachyon.say_and_wait('不，脚应该没事……');
          await tachyon.say_and_wait('但是，某人的下半身有没有事就不知道了');
          await tachyon.say_and_wait('为什么在看到我脱袜子时，忽然弯下腰了呢♡');
          await tachyon.say_and_wait('要是有伤就不好了……让我看看吧♡');
          era.println();
          await era.printAndWait([
            '听见 ',
            tachyon.get_colored_name(),
            ' 的话，',
            me.get_colored_name(),
            ' 僵在原地',
          ]);
          await era.printAndWait([
            '想上前去帮 ',
            tachyon.get_colored_name(),
            ' 检查，又怕',
            tachyon.sex,
            '真的做出什么来',
          ]);
          era.println();
          await tachyon.say_and_wait('唔……不过来吗？真是可惜～～');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 拍了拍身上的灰尘，自己站了起来',
          ]);
          await era.printAndWait('这家伙……果然是装的啊');
      }
    } else if (relation > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(['起不来了……', callname, '，背我～～']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 一听见 ',
            me.get_colored_name(),
            ' 的喊声，马上一屁股坐在了草地上',
          ]);
          await era.printAndWait([
            '泪眼汪汪的朝 ',
            me.get_colored_name(),
            ' 喊道',
          ]);
          await era.printAndWait([
            '原本的',
            tachyon.sex,
            '是这么爱撒娇的吗……？',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 有些无奈，但无论如何，今天确实不适合继续训练了',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('真是的……明明可以继续跑下去的……');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 帮 ',
            tachyon.get_colored_name(),
            ' 检查双腿时，',
            tachyon.get_colored_name(),
            ' 鼓起了脸颊说道',
          ]);
          era.println();
          await me.say_and_wait(
            '但我不能让速子冒这样的险……速子（的腿）对我来说，比什么都还要重要',
          );
          await tachyon.say_and_wait('！…………既然，你这么说的话');
          era.println();
          await era.printAndWait([
            '不知道为什么，',
            tachyon.get_colored_name(),
            ' 忽然脸红了起来',
          ]);
          await era.printAndWait('不过愿意配合检查真是太好了');
        },
        async () => {
          await tachyon.say_and_wait([
            '哼哼，区区一次实验失败而已，你不会以为这样就能把我击倒了吧，',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 担心的检查着 ',
            tachyon.get_colored_name(),
            ' 的双腿',
          ]);
          await era.printAndWait('结果，直到这时关心的还是实验吗？');
          await era.printAndWait([
            me.get_colored_name(),
            ' 不禁心里有些无奈和恼火',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '再说……我相信 ',
            callname,
            '，你是绝对不会让我出事的，对吧？',
          ]);
          era.println();
          await me.say_and_wait('…………');
          await era.printAndWait([
            '仔细想想，如果不是',
            tachyon.sex,
            '是这样专注于梦想，如此纯粹的',
            tachyon.get_uma_sex_title(),
          ]);
          await era.printAndWait([
            '自己也不会这样跟着',
            tachyon.sex,
            '胡来了吧',
          ]);
          await era.printAndWait([
            '在这个眼中只有梦想的狂想者乱来的时候，帮',
            tachyon.sex,
            '注意脚下的浅坑',
          ]);
          await era.printAndWait('这就是自己身为豚鼠的职责吧');
          era.println();
          await tachyon.say_and_wait(
            '所以……回去检讨检讨，然后明天再继续实验吧！',
          );
          await me.say_and_wait('不，至少三天后');
          era.println();
          await era.printAndWait(
            '那些梦想、远方的话暂且不提，最起码必须多观察两天才行',
          );
        },
      );
      await get_random_entry(buffer)();
    } else if (relation > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([callname, '……好痛……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 眼中含泪的坐在草地上，朝着 ',
            me.get_colored_name(),
            ' 讨要安慰',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 连忙观察',
            tachyon.sex,
            '的伤势，确认没有大碍后才放下心来',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(
            '……没有关系，只是一时失败而已……重头再来实验……',
          );
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), ' 喃喃说着']);
          await era.printAndWait('……直到这时还在想实验的事吗');
          await era.printAndWait([
            me.get_colored_name(),
            ' 有些无奈的帮',
            tachyon.sex,
            '检查双腿有无大碍',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(['咕嘶……', callname, '……我，我没事']);
          await era.printAndWait('只要，休息一下……哈啊');
          era.println();
          await me.say_and_wait('不行');
          await tachyon.say_and_wait('！？');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 用最方便的姿势，将 ',
            tachyon.get_colored_name(),
            ' 的颈部和膝盖内侧抬起，抱在怀中',
          ]);
          await era.printAndWait([
            '现在不是让',
            tachyon.sex,
            '任性的时候了，必须马上去保健室检查才行',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '等！',
            callname,
            '！我知道了！我会去的，所以放我下来！',
          ]);
          await me.say_and_wait('但是这样比较有效率不是吗？');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 不顾 ',
            tachyon.get_colored_name(),
            ' 的阻止，在众人的注目下将 ',
            tachyon.get_colored_name(),
            ' 抱到了保健室',
          ]);
        },
      );
      await get_random_entry(buffer)();
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('咕……还是太勉强了吗？');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 听话的停了下来，',
            me.get_colored_name(),
            ' 慌忙上前检查',
            tachyon.sex,
            '的腿',
          ]);
          await era.printAndWait('……今天的训练只能到此结束了');
        },
        async () => {
          await tachyon.say_and_wait('腿……无法动弹');
          await tachyon.say_and_wait('实验失败了啊……');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 踉跄的走了几步才停下',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 慌忙上前检查 ',
            tachyon.get_colored_name(),
            ' 的状态',
          ]);
          await era.printAndWait('还好……只是稍微有点拐到，应该不会成为大问题');
          await era.printAndWait('只是必须先去保健室休息了……');
        },
        async () => {
          await tachyon.say_and_wait('我的极限……就只有这样了吗');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 冲了上去，在 ',
            tachyon.get_colored_name(),
            ' 踉跄的同时上去扶住了',
            tachyon.sex,
          ]);
          await era.printAndWait([
            '虽然是冲动下的行为，甚至可能会反过来被 ',
            tachyon.get_colored_name(),
            ' 指责，但 ',
            me.get_colored_name(),
            ' 依然毫无犹豫的上前了',
          ]);
          await era.printAndWait([
            '也多亏于此，',
            me.get_colored_name(),
            ' 听见了 ',
            tachyon.get_colored_name(),
            ' 口中的话',
          ]);
          era.println();
          await me.say_and_wait('一定还能变强……速子的极限，绝对不只如此');
          await tachyon.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 没有作声，也不知道有没有将 ',
            me.get_colored_name(),
            ' 的话听进去',
          ]);
          await era.printAndWait([
            '但',
            tachyon.sex,
            '开始慢慢的迈出了步伐，',
            me.get_colored_name(),
            ' 在身旁扶着',
            tachyon.sex,
            '走到保健室去进行检查',
          ]);
        },
      );
      await get_random_entry(buffer)();
    }
    hook.arg = 0;
  } else if (Math.random() < args.ratio.fail_again) {
    const edu_weeks = era.get('cflag:32:育成回合计时');
    if (edu_marks.plan_b && edu_weeks > 95) {
      await train_fail_common(tachyon, me, true);
      await train_fail_common2(tachyon, me);
    } else if (edu_weeks > 47 + race_infos[race_enum.toky_yus].date) {
      await train_fail_common(tachyon, me);
      await tachyon.print_and_wait('……不能啊');
      await tachyon.print_and_wait('已经不能回头了');
      await tachyon.print_and_wait([me.sex, ' 的支持，让我走到了这一步']);
      await tachyon.print_and_wait('要是自己现在抽身，那可真是天大的笑话了');
      await tachyon.print_and_wait('为了相信我的人……再坚持下去吧');
    } else if (sys_reg_race(32).curr.race === race_enum.toky_yus) {
      await train_fail_common(tachyon, me);
      await train_fail_common2(tachyon, me);
    } else {
      await tachyon.say_and_wait('好痛');
      await tachyon.say_and_wait('好可怕');
      await tachyon.say_and_wait('果然……我的极限就是……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 这时才回过神来，朝着 ',
        tachyon.get_colored_name(),
        ' 奔去',
      ]);
      await era.printAndWait([
        '但',
        tachyon.sex,
        '口中只是不断的喃喃自语，仿佛没有看见自己',
      ]);
      await era.printAndWait([
        '过了好一会才回过神来，在 ',
        me.get_colored_name(),
        ' 的搀扶下到保健室去接受治疗',
      ]);
      await era.printAndWait('…………真的没问题吗？无论是身体还是心灵');
      await era.printAndWait([me.get_colored_name(), ' 想问出口']);
      await era.printAndWait([
        '但……当时没能喊出口阻止',
        tachyon.sex,
        '的自己，或许也没有在此时出言的资格吧',
      ]);
    }
    hook.arg = -1;
  } else {
    await era.printAndWait('来不及');
    await era.printAndWait('还来不及出声');
    await era.printAndWait([tachyon.get_colored_name(), ' 便已经踏稳了步伐']);
    await era.printAndWait('仿佛要将自己内心一直以来的不安消除一般');
    await era.printAndWait('朝着前方踏出了下一个步伐');
    await era.printAndWait('就这么继续，直到训练结束');
    hook.arg = 1;
  }
};
