const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {function[]} buffer
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonEduMarks} edu_marks
 */
function tachyon_default_talk(buffer, tachyon, me, callname, edu_marks) {
  buffer.push(
    async () => {
      await tachyon.say_and_wait([
        callname,
        '！今天的药你要选择右边这瓶绿色的，还是左边这瓶红色的呢',
      ]);
      await tachyon.say_and_wait(
        '都不要？我就知道，果然是第三选择的彩虹色对吧！',
      );
    },
    async () => {
      await tachyon.say_and_wait([callname, '……明天的便当']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 尝试告诉 ',
        tachyon.get_colored_name(),
        ' 明天是假日',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '欸……',
        callname,
        ' 啊，就算是休息日，人也不能不吃饭的哦',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '用一种担忧的眼神看着 ',
        me.get_colored_name(),
      ]);
      await me.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 忽然理解了，这个情况说什么都是没用的，只能答应了给',
        tachyon.sex,
        '做便当',
      ]);
    },
    async () => {
      await tachyon.say_and_wait([callname, '～～今天的衣服也拜托了']);
      await tachyon.say_and_wait('哈？自己洗？你以为我的时间是大风吹来的吗？');
      await tachyon.say_and_wait('再说，这不也是对你的福利吗～～');
      await tachyon.say_and_wait('这可是我穿过的贴身衣物啊～～');
      await tachyon.say_and_wait('好臭！？喂！也太失礼了！');
    },
    async () => {
      await tachyon.say_and_wait('哈？都不去上课成绩会不会有问题？');
      await tachyon.say_and_wait([
        callname,
        ' 啊，你要知道，应试教育是为了将庸人教育成才，这种东西对天生之才的我而言当然是没有必要的',
      ]);
      await tachyon.say_and_wait([
        '『所以考试不去也没关系吗？』？你在说什么呢，',
        callname,
        '，考试不是明天吗……今天！？',
      ]);
    },
    async () => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 忽然反常的一言不发将身体靠在你身上',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '，怎么了吗？']);
      era.println();
      await era.printAndWait('没什么');
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 回答之后，',
        tachyon.sex,
        '继续靠在 ',
        me.get_colored_name(),
        ' 身上',
      ]);
      await era.printAndWait('两人之间没有对话，就这样无言的度过了一段时间');
    },
    async () => {
      await tachyon.say_and_wait([
        callname,
        '？来的正好，快帮我把这些东西誊写到防燃的特殊纸上！',
      ]);
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 25),
        ' 那家伙！不过就是拿',
        tachyon.sex,
        '做了次实验，居然威胁要把我的实验资料全烧了！',
      ]);
      await tachyon.say_and_wait([
        '还好我好说歹说让',
        tachyon.sex,
        '留到下午三点再烧，再这之前得快点誊上去才行！',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 急急忙忙的被 ',
        tachyon.get_colored_name(),
        ' 赶上桌开始加入誊写作业',
      ]);
      await era.printAndWait([
        '但 ',
        me.get_colored_name(),
        ' 内心涌现一个疑惑，一般情况要烧真的会这样事先提醒吗……？',
      ]);
      era.println();
      await era.printAndWait(
        '果不其然，下午三点后，研究资料并没有燃烧起来，实验室一如既往的和平，',
      );
      await era.printAndWait([
        '受到伤害的只有花了半天时间誊写了一屋子研究资料的 ',
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的手',
      ]);
    },
    async () => {
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 9),
        ' 那孩子……不是挺可爱的吗？',
      ]);
      await tachyon.say_and_wait([
        '不知道为什么看到',
        tachyon.sex,
        '的时候总有种类似于父性一般的感情涌现',
      ]);
      if (tachyon.sex_code - 1) {
        era.println();
        await me.say_and_wait('难道不是母性吗？');
      }
      era.println();
      await tachyon.say_and_wait([
        '不是……这种感觉很难说明，等你变成',
        tachyon.get_uma_sex_title(),
        '大概就能懂了吧',
      ]);
      era.println();
      await me.say_and_wait([
        '不要说的好像我总有一天会变成',
        tachyon.get_uma_sex_title(),
        '一样啊！？',
      ]);
    },
    async () => {
      await tachyon.say_and_wait('sky君真是个好孩子啊……');
      era.println();
      await me.say_and_wait([
        '嗯？原来速子和 ',
        sys_get_colored_callname(0, 20),
        ' 认识吗',
      ]);
      era.println();
      await tachyon.say_and_wait('不……我说的和你说的大概不是同个sky君');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 歪着头看向 ',
        tachyon.get_colored_name(),
        '，学园里还有其他sky吗',
      ]);
      era.println();
      await tachyon.say_and_wait(['……不，算了，', callname, '，当我没说吧']);
    },
  );
  !edu_marks.drink &&
    buffer.push(async () => {
      edu_marks.drink = 1;
      await tachyon.say_and_wait([callname, '～～要喝什么饮料吗？']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 忽然带着满脸的坏笑问 ',
        me.get_colored_name(),
        ' 道',
      ]);
      await era.printAndWait('无事献殷勤，非奸即盗');
      await era.printAndWait([
        '话虽如此，直接拒绝一定会让',
        tachyon.sex,
        '恼羞成怒吧',
      ]);
      era.println();
      await tachyon.say_and_wait('怎么样，要喝什么？');
      era.println();
      era.print('该怎么办呢……');
      era.printButton('红茶', 1);
      era.printButton('咖啡', 2);
      era.printButton('沙士', 3);
      era.printButton('不喝', 4);
      switch (await era.input()) {
        case 1:
          await era.printAndWait('果然还是王道系的红茶吧');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 点了点头，彷佛在说就知道 ',
            me.get_colored_name(),
            ' 会选这个一样，从背后掏出已经加好料的红茶',
          ]);
          era.drawLine();
          await era.printAndWait([
            '…………',
            me.get_colored_name(),
            ' 看着药粉都没完全化开的红茶，满脸黑线',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '怎么了，',
            callname,
            '？这可是我亲手泡的茶，快喝吧',
          ]);
          era.println();
          await era.printAndWait([
            '……罢了，早在选红茶的时候 ',
            me.get_colored_name(),
            ' 就已经知道一定是这种发展了不是吗',
          ]);
          await era.printAndWait([me.get_colored_name(), ' 一口喝干了红茶']);
          await era.printAndWait('嗯，美味又爽口');
          break;
        case 2:
          if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
            await me.say_and_wait([
              '还是咖啡吧，最近经常喝 ',
              sys_get_colored_callname(0, 25),
              ' 泡的咖啡',
            ]);
          } else {
            await me.say_and_wait('还是咖啡吧，最近工作比较忙喝的比较多');
          }
          era.println();
          await tachyon.say_and_wait('怎么喝那种苦的要死跟泥水一样的饮料啊');
          era.println();
          await me.say_and_wait([
            '给我向 ',
            sys_get_colored_callname(0, 25),
            ' 道歉啊喂',
          ]);
          era.println();
          await tachyon.say_and_wait('算了，要喝就喝吧');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 无可奈何的从背后掏出已经准备好的饮料',
          ]);
          era.drawLine();
          await era.printAndWait([
            me.get_colored_name(),
            ' 看着眼前药粉都没化开的深红色液体，心里第一次感到槽点太多导致吐槽不出口的感受',
          ]);
          era.println();
          await me.say_and_wait('首先……咖啡？');
          await tachyon.say_and_wait('……咖啡因很多，就当是咖啡吧');
          await tachyon.say_and_wait('…………');
          await me.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            me.get_couple_title(),
            ' 两人相顾无言，',
            me.get_colored_name(),
            ' 认命的喝下了饮料',
          ]);
          break;
        case 3:
          await me.say_and_wait('沙士吧，虽然小众但确实好喝');
          era.println();
          await tachyon.say_and_wait('欸……你怎么喜欢那种奇怪口味的饮料');
          era.println();
          await me.say_and_wait('我就喜欢，不行吗？');
          era.println();
          await tachyon.say_and_wait(
            '………不是，那饮料闻起来喝起来就像药，那换句话说你直接喝我的药不就好了',
          );
          era.println();
          await me.say_and_wait('！？');
          await era.printAndWait(['看起来', tachyon.sex, '似乎完全不打算装了']);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 把加了药的红茶放到一旁后，直接从白大褂里掏出荧光色的药剂',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 象征性的抵抗了两下，随即便被迫一口干了',
          ]);
          await era.printAndWait(
            '话说，这药喝起来也不像药味啊，为什么是亲子丼的味道啊！？',
          );
          break;
        case 4:
          await era.printAndWait([
            me.get_colored_name(),
            ' 拒绝了，哪怕抵抗是徒劳的，',
            me.get_colored_name(),
            ' 也要做出自己的反抗',
          ]);
          era.println();
          await era.printAndWait(
            '这才是，这才是，人类的觉悟啊啊啊啊啊啊啊啊啊',
          );
          era.println();
          await tachyon.say_and_wait('吵死了');
          era.println();
          await era.printAndWait([
            '然而，觉悟并没有帮助 ',
            me.get_colored_name(),
            ' 爆发小宇宙，人类再怎么样也是胜不过',
            tachyon.get_uma_sex_title(),
            '的，五秒后 ',
            me.get_colored_name(),
            ' 便被按住了脸，强迫张开口被灌下液体',
          ]);
          era.println();
          await tachyon.say_and_wait('早知道这样还省事点');
      }
      await era.printAndWait('啪搭');
      await era.printAndWait([
        '这是 ',
        me.get_colored_name(),
        ' 不省人事摔在桌上的声音',
      ]);
    });
}

module.exports = tachyon_default_talk;
