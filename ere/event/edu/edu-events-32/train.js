const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonEduMarks} edu_marks
 */
async function incomplete_combustion(tachyon, me, callname, edu_marks) {
  await print_event_name('燃烧不完全', tachyon);
  era.println();
  await tachyon.say_and_wait('今天的目标……是……');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 忧心的看着 ',
    tachyon.get_colored_name(),
    ' 的模样',
  ]);
  await era.printAndWait([
    '今天的',
    tachyon.sex,
    '依然在尝试着为了突破极限而进行的实验，也可以称之为，训练',
  ]);
  await era.printAndWait([
    '倘若',
    tachyon.sex,
    '的体力充足，只是状态不好，那 ',
    me.get_colored_name(),
    ' 必然会狠下心来将其推向实验吧，因为有时严厉的举止也是必要的',
  ]);
  await era.printAndWait([
    '倘若',
    tachyon.sex,
    '的体力不足，但状态出奇良好，那 ',
    me.get_colored_name(),
    ' 在思考过后也会尝试让',
    tachyon.sex,
    '继续进行锻炼吧，',
  ]);
  await era.printAndWait([
    '毕竟就如前辈训练员们说过的，贴近',
    tachyon.uma_sex_title,
    '的心灵才是身为训练员最重要的工作',
  ]);
  await era.printAndWait('但是……');
  era.println();
  era.print([
    '对于体力明显不支，状态也心不在焉的',
    tachyon.sex,
    '，',
    me.get_colored_name(),
    ' 真的能够狠下心来吗？',
  ]);
  era.printButton('「……继续吧」（顺从因子+100）', 1);
  era.printButton('「……休息吧」（干劲上升）', 2);
  if ((await era.input()) === 1) {
    await era.printAndWait([
      '为了 ',
      tachyon.get_colored_name(),
      ' 的目标及梦想……以及，自己的一点点私心',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 看着 ',
      tachyon.get_colored_name(),
      ' 现在的模样',
    ]);
    await era.printAndWait([
      '从被汗水浸湿的运动服透出的雪白肌肤，与奔跑时沾在衣服上的泥点，形成了显著的对比，紧紧贴合的运动服更凸显了',
      tachyon.sex,
      '的姣好身材',
    ]);
    await era.printAndWait(
      '圆润的胸部及臀部，加上因疲惫而发出的喘息和泛红的脸颊，明明只是训练，却不住使人产生遐想',
    );
    await era.printAndWait(
      '要是能够将那不停弹跳的圆球当成自己的东西在手里尽情揉捏的话',
    );
    await era.printAndWait(
      '要是能用唇舌堵住那张平常总对自己爱搭不理的小嘴，使其只能发出娇嫩喘息的话',
    );
    await era.printAndWait(
      '这样的想法，以一名训练员，以一名成熟的大人来说，绝对是不应允许的行为吧',
    );
    await era.printAndWait([
      '但是，以身为男性的立场而言，内心的欲望却不允许 ',
      me.get_colored_name(),
      ' 提出反对',
    ]);
    await era.printAndWait([
      '虽然犹豫，虽然不舍，但 ',
      me.get_colored_name(),
      ' 还是装作没发现',
      tachyon.sex,
      '的不适，让',
      tachyon.sex,
      '继续训练',
    ]);
    await era.printAndWait([
      '……不知是不是发现了 ',
      me.get_colored_name(),
      ' 内心的龌龊，又或者只是对训练的继续感到不满，',
      tachyon.get_colored_name(),
      ' 没说什么，却瞪了 ',
      me.get_colored_name(),
      ' 一眼',
    ]);
    add_jewel_reward(32, 10, 100);
    sys_like_chara(32, 0, -10) && (await era.waitAnyKey());
  } else {
    await era.printAndWait('身为训练员，不合理的过度训练也是应该避免的');
    await era.printAndWait([
      me.get_colored_name(),
      ' 在 ',
      tachyon.get_colored_name(),
      ' 跑完一圈后，马上喊了停',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……结束？实验才刚开始不是吗，还有很多今天要完成的对比实……实验……啊……',
    );
    await era.printAndWait([
      tachyon.sex,
      '的强硬话语只说了一半便坚持不下去，忍不住发出了低吟',
    ]);
    await era.printAndWait(
      '谁能想得到呢，只是轻轻按压了下小腿内侧，往来如此强硬的小嘴竟然会发出如此诱人的声音',
    );
    await era.printAndWait([
      '当然，',
      me.get_colored_name(),
      ' 的按压并没有神奇到能让人立即发春，这一切的主因还是在 ',
      tachyon.get_colored_name(),
      ' 自己',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 扶着已经瘫软的 ',
      tachyon.get_colored_name(),
      '，轻轻按压',
      tachyon.sex,
      '已经有些发肿的小腿',
    ]);
    era.println();
    await tachyon.say_and_wait('……嗯……呀……这样……不行……住手……啊嗯……');
    era.println();
    await era.printAndWait([tachyon.sex, '的小嘴不住发出令人沉醉的娇吟']);
    await era.printAndWait([
      '雪白的肌肤已经有些红肿，每次按压着不同的地方，',
      tachyon.sex,
      '都会发出令人遐想的声音，彷佛 ',
      me.get_colored_name(),
      ' 在做的这些并非是健全的按摩，而是某些更邪恶，下流的行为',
    ]);
    await era.printAndWait([
      '在神圣的赛场上做这样的事情，当然不免会引起他人的关注，不知不觉间，一些还在锻炼的小',
      tachyon.uma_sex_title,
      '们也被 ',
      tachyon.get_colored_name(),
      ' 的娇吟吸引过来',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '等……',
      callname,
      '……咿……不可以……有人……啊啊～～♡',
    ]);
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 置若罔闻地按压着']);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的腿，比 ',
      me.get_colored_name(),
      ' 想象中的还要娇嫩纤细，轻轻握在手里的感觉使 ',
      me.get_colored_name(),
      ' 有了一种掌握了',
      tachyon.sex,
      '的生杀大权的错觉',
    ]);
    await era.printAndWait([
      '要是能在床上，看着',
      tachyon.sex,
      '不甘却还是忍不住发出呻吟的模样，抓着',
      tachyon.sex,
      '的双腿将其分开，那带来的征服感想必是胜过世间一切的吧',
    ]);
    era.println();
    await tachyon.say_and_wait('……！那边不可以！');
    era.println();
    await era.printAndWait([
      '不知不觉间，有些起劲的 ',
      me.get_colored_name(),
      ' 向上摸到了大腿',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 用力将双腿抽回时的力道唤醒了 ',
      me.get_colored_name(),
      ' 的理智，提醒 ',
      me.get_colored_name(),
      ' 眼前的',
      tachyon.teen_sex_title,
      '，实际上是力量大过于成年男性三倍的',
      tachyon.uma_sex_title,
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 连忙向',
      tachyon.sex,
      '道歉',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……我，我知道了……今天，就先到这里吧……我，我需要休息一下……',
    );
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 语速飞快的说完这些后便起身要回到实验室，但随即便被失力感导致瘫软在 ',
      me.get_colored_name(),
      ' 怀中',
    ]);
    await era.printAndWait([
      '此时你们二人看上去的模样哪里像是正常训练中的训练员及',
      tachyon.uma_sex_title,
      '，倒不如说是扑在男友怀中的撒娇女友，及温柔的将',
      tachyon.sex,
      '拥在怀中的男伴',
    ]);
    await era.printAndWait([
      '被他人所惧的疯狂科学家，此时却小鸟依人的靠在 ',
      me.get_colored_name(),
      ' 怀里',
    ]);
    await era.printAndWait([
      '对此 ',
      me.get_colored_name(),
      ' 忍不住产生了一种自豪及骄傲感',
    ]);
    era.println();
    await tachyon.say_and_wait('……带我回实验室，现在，马上');
    era.println();
    await era.printAndWait([
      '但随即，科学家的瞪视却使 ',
      me.get_colored_name(),
      ' 变回了听话的豚鼠',
    ]);
    await era.printAndWait([
      '于是，你们两人在周围',
      tachyon.uma_sex_title,
      '们的半是佩服半是羡慕的目光中，缓缓走回了实验室',
    ]);
    edu_marks.train_stop = 1;
    era.println();
    sys_change_motivation(32, 1) && (await era.waitAnyKey());
    return true;
  }
}

module.exports = async () => {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    motivation = era.get('cflag:32:干劲'),
    relation = era.get('relation:32:0'),
    stamina_ratio = era.get('base:32:体力') / era.get('maxbase:32:体力'),
    tachyon = get_chara_talk(32);
  if (love >= 90 && relation > 75 && stamina_ratio > 0.45) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '走吧走吧，',
          callname,
          '～～快点开始我们今天的实验吧',
        ]);
        await tachyon.say_and_wait('……还是说，要我喊你，亲爱的❤');
      },
      async () => {
        await tachyon.say_and_wait([
          '状态很好？呵呵，只要和 ',
          callname,
          ' 在一起，无论哪一天我的状态都是一样好哦',
        ]);
        await tachyon.say_and_wait('……当然，其他方面的状态也是❤');
      },
    );
    if (tachyon.sex_code - 1 && me.sex_code > 0) {
      buffer.push(async () => {
        await tachyon.say_and_wait([callname, '～～今天的训练可不能马虎哦']);
        await tachyon.say_and_wait('为什么？真是……连最基础的生物常识都不懂吗');
        await tachyon.say_and_wait('母体的锻炼不足，可是会影响到后代的健康的❤');
        await tachyon.say_and_wait('为了备孕，可千万不能手下留情哦，孩子他爸❤');
      });
    }
  } else if (
    love >= 75 &&
    relation > 75 &&
    (motivation >= 0 || stamina_ratio > 0.45)
  ) {
    if (stamina_ratio > 0.45) {
      if (motivation >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([callname, '……我在思考一件事']);
            await tachyon.say_and_wait([
              '最近训练的时候，只要一想到 ',
              callname,
              ' 你在看着我，就觉得特别有动力',
            ]);
            await tachyon.say_and_wait(
              '嗯……爱情的影响吗，是个不错的研究课题，下次来试试不同爱情表现的变量下会导致的训练结果差别吧',
            );
          },
          async () => {
            await tachyon.say_and_wait([
              callname,
              '，今天我这么难得的有干劲想训练，对这样的爱马，你不觉得应该有些什么奖励才对呢',
            ]);
            await tachyon.say_and_wait('……训练结束？我说，我可等不了那么久啊');
            await tachyon.say_and_wait('唔……咕啾……啾噜……啾啵……啾……啾咕');
            await tachyon.say_and_wait(
              '呼……姑且算你及格了，剩下的，训练结束之后再继续吧❤',
            );
            begin_and_init_ero(0, 32);
            await quick_make_love(
              new EroParticipant(32, part_enum.mouth),
              new EroParticipant(0, part_enum.mouth),
              false,
            );
            end_ero_and_train();
          },
          async () => {
            await tachyon.say_and_wait([
              '有种说法，训练员就是将',
              tachyon.uma_sex_title,
              '『驯服』的存在，因此驯服的驯才是马字旁，也因此驯和训的读音如此相近',
            ]);
            await tachyon.say_and_wait([
              '如果是这样的话，那么把这样的我给驯服了的训练员君，今天希望我做些什么呢❤',
            ]);
          },
        );
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              '欸欸～～居然要强迫状态不好的爱人利用身体来取悦自己吗？',
            );
            await tachyon.say_and_wait([
              '……',
              callname,
              '，真没想到你居然是这种人呢……哭哭……',
            ]);
            await tachyon.say_and_wait(
              '啧啧，只是玩笑而已，何必认真呢……不过要是你想玩过分一点的玩法，我也不介意哦❤',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '训练？不如好好做实验……今天的实验都没做完呢，急什么',
            );
            await tachyon.say_and_wait(
              '嗯？不客气了？呵呵，有什么办法就用上来吧，我拭目以待',
            );
            await tachyon.say_and_wait('等……公主抱什么的……这也太让人害羞了……');
          },
          async () => {
            await tachyon.say_and_wait('训练？嗯……喝了今天的药再说吧');
            await tachyon.say_and_wait(
              '全身发热？意识模糊？没事没事，这是正常现象',
            );
            await tachyon.say_and_wait('嗯哼……时间应该差不多了，');
            await tachyon.say_and_wait(
              '那么，今天的药是引动雌性激素雄性激素皮质醇生长激素加压素达到平均以上水平的药物，或者通俗一点来讲的话，就是媚药哦❤',
            );
            await tachyon.say_and_wait('训练什么的，等结束之后再说吧❤');
            let temp = 1;
            if (era.get('talent:0:钢之意志')) {
              era.printButton('这里就听从老二的……', 1);
              era.printButton('「别闹了，快点去训练！」', 1);
              temp = await era.input();
            }
            if (temp === 1) {
              await era.printAndWait([
                '在 ',
                tachyon.get_colored_name(),
                ' 的诱惑下，',
                me.get_colored_name(),
                ' 将',
                tachyon.sex,
                '扑倒在实验室里的小床里……',
              ]);
              await quick_into_sex(32);
              return true;
            } else {
              await era.printAndWait([
                me.get_colored_name(),
                ' 靠着学习到的钢之意志撑住了诱惑',
              ]);
              await tachyon.say_and_wait('这也可以的吗！？');
              await era.printAndWait([
                me.get_colored_name(),
                ' 不顾吐槽的 ',
                tachyon.get_colored_name(),
                '，把',
                tachyon.sex,
                '硬抱到了训练场上。',
              ]);
            }
          },
        );
      }
    } else if (motivation >= 0) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '呼……偶尔认真的流流汗也不错啊，休息？现在状态这么好，休息也太可惜了。',
          );
          await tachyon.say_and_wait([
            '等，',
            callname,
            '，你在做什么……不要闻啊……现在很臭的……',
          ]);
          await tachyon.say_and_wait('我，我知道了……我回去休息，所以别闻了……');
          await tachyon.say_and_wait([
            '什么叫可以继续啊！？',
            callname,
            '，你……真的是变态啊',
          ]);
          await tachyon.say_and_wait(
            '真是，不过会因此而感到兴奋的我，绝对也是变态无误了❤',
          );
        },
        async () => {
          await tachyon.say_and_wait('体力不支，需要休息？');
          await tachyon.say_and_wait(
            '……那还不是因为某人前几天……我的腰到现在都还在痛……',
          );
          await tachyon.say_and_wait(
            '喂！……真是，腰还在痛只是比喻啦……大惊小怪的……就那么担心我吗❤',
          );
        },
        async () => {
          await tachyon.say_and_wait('哈啊……哈啊……');
          await tachyon.say_and_wait('没什么，耐力用尽什么的，还早得很呢！');
          await tachyon.say_and_wait([
            '不过……要是真的受不了了，就麻烦你帮我补充『精』力了，',
            callname,
            '❤',
          ]);
        },
      );
    }
  } else if (relation > 225 && (motivation >= 0 || stamina_ratio > 0.45)) {
    if (motivation >= 0) {
      if (stamina_ratio > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '快快快！时间不等人的！今天的实验数据起码可以水五篇论文！接下来两个月的研究经费都可以不用愁了！',
            ),
          async () => {
            await tachyon.say_and_wait([
              '训练？没问题，但是有个条件，',
              callname,
              '，今天你也来一起并跑吧？',
            ]);
            await tachyon.say_and_wait([
              '没问题没问题，现在你的身体素质如果短时间爆发已经能够跑出不输给',
              tachyon.uma_sex_title,
              '的速度了……',
            ]);
            await tachyon.say_and_wait(
              '没问题没问题，嗯，短时间的话，大概……五秒内？',
            );
          },
        );
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([
              '训练？又是跑操场啊……我说，',
              callname,
              '，能不能来点更有趣的训练啊？',
            ]);
            await tachyon.say_and_wait(
              '比如……药剂俄罗斯轮盘赛？先各喝五管随机效果的药然后开始比赛？',
            );
            await tachyon.say_and_wait([
              '先找到能够配合的',
              tachyon.uma_sex_title,
              '？',
              sys_get_colored_callname(32, 25),
              '……欸，不行吗？',
            ]);
          },
          async () => {
            await tachyon.say_and_wait([
              '我说啊 ',
              callname,
              '，我们冷静分析，这样每天锻炼的效率真的会比研究高吗？',
            ]);
            await tachyon.say_and_wait(
              '什么？我的特殊事件触发一次也就+5，哪来的自信跟锻炼比的？',
            );
            await tachyon.say_and_wait([
              '不是，等等，',
              callname,
              ' 你在说什么……我怎么听不懂……',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              '欸……训练好麻烦，要跑你自己上去跑不就好了',
            );
            await tachyon.say_and_wait([
              '乖孩子什么的……我说 ',
              callname,
              '，你不会是把我当成小孩子了吧？',
            ]);
            await tachyon.say_and_wait(
              '不过嘛……偶尔去跑一下也不是什么坏事，大概。',
            );
          },
        );
        !edu_marks.help_tyr &&
          buffer.push(async () => {
            edu_marks.help_tyr = 1;
            await print_event_name('助纣为虐（？）', tachyon);
            await tachyon.say_and_wait([
              callname,
              '，你为什么会觉得自己能够胜过',
              tachyon.uma_sex_title,
              '的力量呢？',
            ]);

            await era.printAndWait([
              { isBr: true },
              '实验室内，',
              tachyon.get_colored_name(),
              ' 饶有兴趣的说道',
            ]);
            await era.printAndWait('口气听起来十分悠然，表现出了绝对的自信');
            await era.printAndWait('种族上的差距，天赋上的差异赋予的自信');
            era.println();
            await tachyon.say_and_wait(
              '你已经明白了吧，这就是我们之间的差距，所以如果可以的话，还希望你……',
            );
            era.println();
            await era.printAndWait([
              '即便怎么用力都纹丝不动的身躯，明明是如此娇小的身体，这就是',
              tachyon.uma_sex_title,
              '这种生物的神奇之处',
            ]);
            !era.get('cflag:0:种族') &&
              (await era.printAndWait(
                '但……身为人类，也还是有著自己的尊严在的',
              ));
            era.println();
            await tachyon.say_and_wait(
              '哦？居然还有多余的力气吗？呵呵，我姑且肯定你的毅力吧，但，值得表扬的也就只有这点了',
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '嘲笑著 ',
              me.get_colored_name(),
              ' 的徒劳无功，但对于容易厌倦事物的',
              tachyon.sex,
              '而言，',
              me.get_colored_name(),
              ' 重复徒劳无功的尝试于',
              tachyon.sex,
              '而言也已经渐渐有些无趣了',
            ]);
            era.println();
            await tachyon.say_and_wait([
              callname,
              '……停下你的挣扎吧，你明明知道不是吗？这一切的挣扎，不过是白费力气而已，没错……',
            ]);
            era.println();
            await era.printAndWait([
              '啊啊，',
              tachyon.sex,
              '发出了，足以将一切训练员打入深渊的宣言',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '无论你怎么拉，我都绝对不会跟你去训练的',
            );
            era.println();
            await era.printAndWait('换句话说，也就是这么回事');
            await era.printAndWait([
              '不愿意去训练的 ',
              tachyon.get_colored_name(),
              '，及坚持今天一定要训练的 ',
              me.get_colored_name(),
            ]);
            await era.printAndWait([
              '拼命撑著椅子不被 ',
              me.get_colored_name(),
              ' 抓起，和拼命拔著',
              tachyon.sex,
              '的腰要将',
              tachyon.sex,
              '拉离实验桌的 ',
              me.get_colored_name(),
            ]);
            await era.printAndWait([
              '没错，就是两人之间，无趣至极的一场拉扯战',
            ]);
            era.println();
            await tachyon.say_and_wait([
              callname,
              '，还是放弃吧，人类怎么可能……好痛！？',
            ]);
            era.println();
            await era.printAndWait([
              '得意忘形的',
              tachyon.sex,
              '，似乎忘记了拜',
              tachyon.sex,
              '的改造所赐，',
              me.get_colored_name(),
              ' 早就已经拥有虽说不能与',
              tachyon.uma_sex_title,
              '相等，但也相当于七八成的力量',
            ]);
            await era.printAndWait([
              '凭著这股怪力，加上 ',
              tachyon.get_colored_name(),
              ' 的傲慢及得意忘形，',
              me.get_colored_name(),
              ' 很快便将 ',
              tachyon.get_colored_name(),
              ' 的下半身连根抱起，只残余',
              tachyon.sex,
              '的双手正努力的攀住实验台',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '没……没想到我还是小瞧了你啊，',
              callname,
              '……但是，这种粗心不会再发生第二次了，即便只有两只手抓著实验台，我爱丽速子依旧无敌于这实验室内！库呵呵……库哈哈哈哈哈哈！……呜啊！？',
            ]);
            era.println();
            await era.printAndWait([
              '正当你们两人都觉得这场无聊的战争大概还得持续个十几二十分钟时，神奇的事情发生了',
            ]);
            await era.printAndWait([
              '彷彿被什么未知的力量所附身一般，于 ',
              tachyon.get_colored_name(),
              ' 而言，整个实验台忽然如岩浆一般灼热，迫使',
              tachyon.sex,
              '不得不松开了手',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 与 ',
              me.get_colored_name(),
              ' 双双跌倒在地，',
              tachyon.get_colored_name(),
              ' 爬起来后连忙看了看自己的手，却连一点焦痕也没有，彷彿只是自己的错觉一般',
            ]);
            era.println();
            const coffee = get_chara_talk(25);
            await coffee.say_and_wait([
              '……请快点把 ',
              sys_get_colored_callname(25, 32),
              ' 带出去吧……',
              tachyon.sex,
              '好烦……',
            ]);
            era.println();
            await era.printAndWait([
              '开口的，是与 ',
              tachyon.get_colored_name(),
              ' 共用同间空教室的灵异系黑鹿毛',
              tachyon.uma_sex_title,
              '，',
              coffee.get_colored_name(),
            ]);
            era.println();
            await era.printAndWait([
              '虽然不知道对方到底是用了什么方法才使 ',
              tachyon.get_colored_name(),
              ' 脱手，但为了避免',
              tachyon.sex,
              '再次找到机会赖在实验室里不出门，',
              me.get_colored_name(),
              ' 顾不上道谢抓著 ',
              tachyon.get_colored_name(),
              ' 就连忙赶到了训练场上',
            ]);
          });
      }
    } else if (stamina_ratio > 0.45) {
      buffer.push(
        () =>
          tachyon.say_and_wait([
            callname,
            '……我看见光了……再努力，再努力一定能追上……就在前面……',
          ]),
        async () => {
          await tachyon.say_and_wait([
            callname,
            '……给我……药……快点……我快撑不住了……',
          ]);
          await tachyon.say_and_wait(
            '啊，没错没错，就是这个就是这个，没有这个我怎么活啊……',
          );
          await tachyon.say_and_wait(
            '嗯？说话方式很奇怪？不就是普通的营养剂而已吗？有什么奇怪的？像嗑多了？只有脑袋里都塞了那种东西的人才会想歪啦',
          );
        },
      );
    }
  } else if (relation > 75) {
    if (stamina_ratio > 0.45) {
      if (motivation >= 0) {
        buffer.push(
          () => tachyon.say_and_wait([callname, '！开始我们的研究吧！']),
          () =>
            tachyon.say_and_wait(
              '状态绝佳！今天绝对能跑出堪比普朗克时间的纪录出来！',
            ),
          () => tachyon.say_and_wait('直到超越光速！直到抵达可能性的彼方！'),
        );
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait('……无趣啊');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 喃喃自语道。',
            ]);
          },
          async () => {
            await tachyon.say_and_wait([
              callname,
              '……我认为实验的灵感是很重要的，成功虽说是99%的努力加上1%的灵感，但没有1%的灵感无论努力了99%还是99.99%都是一样毫无用处，你明白我的意思吗？',
            ]);
            await tachyon.say_and_wait(
              '不，我不是为了翘掉训练才这么说的，这只是在陈述一件事实，',
            );
            await tachyon.say_and_wait(
              '但既然你提到了这个话题，那我们也可以顺带代入进去来看，所以今天的训练……',
            );
            await era.printAndWait([me.get_colored_name(), ' 摇了摇头']);
            await tachyon.say_and_wait('切');
            await era.printAndWait([tachyon.get_colored_name(), ' 啧了一声']);
          },
          async () => {
            await tachyon.say_and_wait(
              '训练？今天的实验都还没做完不是吗？唉……罢了，等我做完实验之后就去',
            );
            await era.printAndWait([
              '最后，在 ',
              tachyon.get_colored_name(),
              ' 来训练前 ',
              me.get_colored_name(),
              ' 等了足足三个小时，直到太阳下山',
              tachyon.sex,
              '才出现在训练场上',
            ]);
          },
        );
      }
    } else if (motivation < 0 && me.sex_code === 1 && tachyon.sex_code - 1) {
      buffer.push(() =>
        incomplete_combustion(tachyon, me, callname, edu_marks),
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '哈啊哈啊……体力？没问题，今天一定能够突破……哈啊，哈啊……',
          ),
        () =>
          tachyon.say_and_wait('直到极限……在体力的极限才能见到真正的突破！'),
        () =>
          tachyon.say_and_wait(
            '理性在告诉我自己需要休息了，但感性却怎么也不想停下来……真是幸福的烦恼啊，哈哈哈！',
          ),
      );
    }
  } else if (stamina_ratio > 0.45) {
    if (motivation >= 0) {
      buffer.push(
        () => tachyon.say_and_wait('那么，开始实验吧。'),
        () => tachyon.say_and_wait('快点，去准备纪录实验数据，不要分心了。'),
        async () => {
          await tachyon.say_and_wait('哼……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 没有说话，但 ',
            me.get_colored_name(),
            ' 看得出',
            tachyon.sex,
            '身上满溢的干劲。',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '你在慢什么，还不快去准备纪录实验数据，敢出什么差错我剥了你的皮。',
          ),
        () =>
          tachyon.say_and_wait(
            '方向发生错误了吗……为什么……明明体力充沛，却完全没有能够超越极限的自信……',
          ),
        async () => {
          await tachyon.say_and_wait('……最近你提出的实验，越来越无趣了啊');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 用危险的眼神看着 ',
            me.get_colored_name(),
            '。',
          ]);
        },
      );
    }
  } else if (motivation < 0 && me.sex_code === 1 && tachyon.sex_code - 1) {
    buffer.push(() => incomplete_combustion(tachyon, me, callname, edu_marks));
  } else {
    buffer.push(
      async () => {
        await tachyon.say_and_wait('……开始实验吧。');
        await tachyon.say_and_wait(
          '累？没这回事，我有预感，这一次，这一次一定能够突破瓶颈……',
        );
      },
      () => tachyon.say_and_wait('必须更快……咕……身体无法……动弹……'),
      async () => {
        await tachyon.say_and_wait(
          '开什么玩笑……突破极限的首要条件就是抵达极限。',
        );
        await tachyon.say_and_wait(
          '还要更快，要是连极限都无法抵达……那还谈什么超越极限……！',
        );
      },
    );
  }
  return await get_random_entry(buffer)();
};
