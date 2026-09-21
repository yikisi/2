/**
 * @file 日常地文
 * @author 雞雞
 * @author 幽白書
 * @author Mr.E.
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} minoru
   */
  good_morning(chara, you, minoru) {
    const buffer = [
      /** @author 雞雞 */
      {
        h() {
          era.print([chara.get_colored_name(), ' 竖起了大拇指。']);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' 看起来吃撑了，肚子变得圆鼓鼓的。',
          ]);
        },
      },
      {
        h() {
          era.print([chara.get_colored_name(), ' 正在专心地阅读着什么。']);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => era.get(`cflag:${chara.id}:65`) < 5,
        h() {
          era.print([chara.get_colored_name(), ' 正在与同学们愉快地聊天。']);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => chara.id !== 301 && !(era.get('cflag:301:48') < 3 * 48),
        h() {
          era.print([
            chara.get_colored_name(),
            ' 正在接待处向 ',
            minoru.get_colored_name(),
            ' 查询着什么。',
          ]);
        },
      },
      /** @author 幽白書 */
      {
        // TALENTNAME:0 = 情感活动
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 兴奋地和 ',
            you.get_colored_name(),
            ' 说着周末从电视上看到的笑话，说到一半自己却先忍不住笑了出来。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 说着周末看的电视剧剧情，说着说着又忍不住哭了起来。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 看到 ',
            chara.get_colored_name(),
            ' 正和几名',
            chara.uma_sex_title,
            '围在一起，似乎在说恐怖故事的样子，不一会 ',
            chara.get_colored_name(),
            ' 就被吓的脸色发白。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 看到 ',
            chara.get_colored_name(),
            ' 的头发里插着一根小树枝，直到 ',
            you.get_colored_name(),
            ' 拿下来 ',
            chara.get_colored_name(),
            ' 才发觉自己头上有异物。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 数落着 ',
            chara.get_colored_name(),
            ' 直接在训练室里换衣服的行为，却得到了对方不解自己为何不能这么做的神情作为回复。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 似乎在和其他',
            chara.uma_sex_title,
            '谈论恋爱八卦，',
            you.get_colored_name(),
            ' 看见 ',
            chara.get_colored_name(),
            ' 不停的追问正在恋爱的',
            chara.uma_sex_title,
            '问题，直到对方面红耳赤逃跑才罢休。',
          ]);
        },
      },
      {
        // TALENTNAME:1 = 自信程度
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            '在走进训练室的时候，',
            you.get_colored_name(),
            ' 听到 ',
            chara.get_colored_name(),
            ' 日常说出了贬低自己的发言。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 打招呼的时候，莫名其妙的被 ',
            chara.get_colored_name(),
            ' 安慰了。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 摸了摸 ',
            chara.get_colored_name(),
            ' 的头，不知为何 ',
            chara.get_colored_name(),
            ' 却误会成了 ',
            you.get_colored_name(),
            ' 要责罚 ',
            chara.get_colored_name(),
            '，战战兢兢的闭上了眼睛。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 站在训练场的正中央，高傲的态度仿佛自己是世界之王一般。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 站在看台上，对训练场上其他',
            chara.uma_sex_title,
            '的跑法指指点点，做出带着个人看法的评价。',
          ]);
        },
      },
      {
        c: () =>
          // CFLAGNAME:1 = 种族
          era.get(`cflag:${chara.id}:1`) > 0 &&
          era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 发出叹息，感叹学园中没有能与其一较高下的对手。',
          ]);
        },
      },
      {
        // TALENTNAME:2 = 痛苦感受
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 摔了一跤，抬起头时 ',
            you.get_colored_name(),
            ` 看见${chara.sex}眼眶中含着泪水。`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 在和朋友玩耍，惩罚游戏是弹额头一下，',
            you.get_colored_name(),
            ' 看到输了的 ',
            chara.get_colored_name(),
            ' 露出了害怕的神情。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 在和朋友们聊电影，听见电影中血腥的剧情，',
            chara.get_colored_name(),
            ' 的双耳不由得盖了下来。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 重重摔了一跤，正当 ',
            you.get_colored_name(),
            ' 在担心 ',
            chara.get_colored_name(),
            ' 时，',
            chara.get_colored_name(),
            ' 好像什么也没发生一样，拍了拍身子就爬起来了。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 跌倒了，',
            you.get_colored_name(),
            ' 帮 ',
            chara.get_colored_name(),
            ' 处理着伤口，处理好抬头一看，',
            chara.get_colored_name(),
            ' 竟然不知不觉睡着了。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 在分享着忍耐疼痛的诀窍……虽然是让人感到意义不明的主题，但似乎有蛮多人正认真的倾听并做着笔记。',
          ]);
        },
      },
      {
        // TALENTNAME:3 = 恐惧感受
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 躲在操场的角落，似乎不想与周围那些太过阳光的人有所接触。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 独自蜷缩在训练场阴影处，用树枝在地面画着重复的螺旋图案。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 发现 ',
            chara.get_colored_name(),
            ' 正对着自动贩卖机的反光玻璃低声自言自语。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 发现 ',
            chara.get_colored_name(),
            ' 偷偷把蒲公英种子吹向天空，转头露出恶作剧成功的灿烂笑容。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 把训练用轮胎滚成巨大圆环，哼着走调的Live曲在草坪上推着轮胎奔跑。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 抱着运动饮料边走边跳，头髮随风飞舞飘动。',
          ]);
        },
      },
      {
        // TALENTNAME:4 = 羞耻忍耐
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 躲在训练员室窗帘后翻阅图书，听到脚步声立即将书合拢抱在胸前。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 反复调整自动贩卖机投币口的角度，确保硬币垂直落入时不会发出声响。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            '训练员室的柜子后面微微晃动，',
            chara.get_colored_name(),
            ' 正躲在后面换衣服，被 ',
            you.get_colored_name(),
            ' 发现后满脸通红。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 被 ',
            chara.get_colored_name(),
            ' 突然背起冲向训练场，说要让 ',
            you.get_colored_name(),
            ' 体验风速的快感。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 将跳马拼在一起，召集训练场上的',
            chara.uma_sex_title,
            '们比赛谁能一次跳过最多的跳马。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 坐在训练场的入口，让所有路过的',
            chara.uma_sex_title,
            '都要说一个冷笑话才准过。',
          ]);
        },
      },
      {
        // TALENTNAME:5 = 反感获取
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 瞪着路过的',
            chara.uma_sex_title,
            `，被${chara.sex}瞪到的孩子都发出了害怕的悲鸣。`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 用喷漆在障碍栏涂鸦，发现 ',
            you.get_colored_name(),
            ' 后挑衅地把沾到指尖的颜料涂在墙上。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            '更衣室传来刺啦声响，',
            chara.get_colored_name(),
            ' 正将制服袖口剪的坑坑洞洞，线头散落满地。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            '器材室透出暖黄灯光，',
            chara.get_colored_name(),
            ' 正用绷带给老旧杠铃片缠绕防撞缓冲带。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 拿着许多瓶运动饮料站在训练场旁，看到训练得满头大汗的',
            chara.uma_sex_title,
            '就会向前递上。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 清理着训练场上的碎石，以免有人跌倒时被尖锐的石头二次伤害。',
          ]);
        },
      },
      {
        // TALENTNAME:6 = 反抗意愿
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 的日程表被 ',
            chara.get_colored_name(),
            ' 用马克笔划掉，改成了 ',
            chara.get_colored_name(),
            ' 安排的事情。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 的训练员室中被塞满了 ',
            chara.get_colored_name(),
            ' 不由分说摆放在房间里的各式东西。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            '明明没有事先说好，',
            chara.get_colored_name(),
            ' 却一副理所当然的让 ',
            you.get_colored_name(),
            ' 今天放学后陪 ',
            chara.get_colored_name(),
            ' 去买东西。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' 发现 ',
            chara.get_colored_name(),
            ' 站在训练员室门前反复抬手，却始终不敢敲响训练员室的门。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' 被突然启动的洒水器吓得跌坐在地，满脸错愕。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            '训练员室里的储物柜轻微晃动着，',
            chara.get_colored_name(),
            ' 正蜷缩在里面躲避突如其来的并跑邀请。',
          ]);
        },
      },
    ];
    get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  select(chara, you, is_sleep) {
    if (is_sleep) {
      era.print([chara.get_colored_name(), ' 正沉睡着。']);
    } else {
      const buffer = [
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' 向 ',
              you.get_colored_name(),
              ' 打了个招呼。',
            ]);
          },
        },
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' 向 ',
              you.get_colored_name(),
              ' 点了点头，表示已经随时候命了。',
            ]);
          },
        },
      ];
      get_random_entry(buffer).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_gn_sex_message: (chara, you) => [
    '繁忙的一天结束，',
    you.get_colored_name(),
    ' 把 ',
    chara.get_colored_name(),
    ' 送到学生宿舍门口，',
    chara.get_colored_name(),
    ' 扭扭捏捏地提出了一起睡觉的邀请……',
  ],
  gn_sex_yes: '答应',
  gn_sex_no: '拒绝',
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async gn_sex_accept(chara, you) {
    await era.printAndWait([
      '在其他人温暖的目光中，脸色绯红的 ',
      chara.get_colored_name(),
      ' 挽着 ',
      you.get_colored_name(),
      ' 的手慢慢离开……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async gn_sex_force(chara, you, callname) {
    await era.printAndWait([
      '哗，那 ',
      chara.get_colored_name(),
      ' 脸色一变，挟着 ',
      you.get_colored_name(),
      ` 强行向外走，定是要迫${chara.sex}的 `,
      callname,
      ' 跪地做星努力呀！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  async gn_sex_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 失落地转身向学生宿舍走去……',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} c_awake
   * @param {boolean} y_awake
   */
  good_night_normal(chara, you, c_awake, y_awake) {
    if (c_awake && y_awake) {
      era.print([
        '繁忙的一天结束，',
        you.get_colored_name(),
        ' 把 ',
        chara.get_colored_name(),
        ' 送到学生宿舍门口互道晚安后便各自回去了。',
      ]);
    } else if (y_awake) {
      era.print([
        '看着睡得正香的 ',
        chara.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 无论如何也做不出把人叫醒的行为，只好亲自送到学生宿舍，才揉着酸痛的肩膀回到训练员公寓。',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' 睡得人事不知，只在朦胧中似乎听到了 ',
        chara.get_colored_name(),
        ' 道别的声音。',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 在训练员室里指导 ',
      chara.get_colored_name(),
      ` 学习，成功指导${chara.sex}解开了不会的题目。`,
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_prepare(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 在训练员室里赛前准备，为了迎战接下来的比赛，必须打起十二分精神。',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  async talk(chara, you, is_sleep) {
    if (is_sleep) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 发出轻微的鼾声，睡得正香。',
      ]);
    } else {
      // BASENAME:0 = 体力
      const low_stamina =
        era.get(`base:${chara.id}:0`) < 0.45 * era.get(`maxbase:${chara.id}:0`);
      // CFLAGNAME:48 = 育成回合计时
      const in_edu = era.get(`cflag:${chara.id}:48`) < 3 * 48;
      const buffer = [
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 看起来没精打采的，需要让 ',
              chara.get_colored_name(),
              ' 休息了。',
            ]);
          },
        },
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 用热切的眼神看向 ',
              you.get_colored_name(),
              '，希望得到休息的许可。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 印堂发黑，全身上下的毛发蓬乱毛躁，看起来干劲极差。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 脸色阴沉，热身运动也做得不太顺利，看起来干劲不足。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 0,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 脸部表情相当僵硬，似乎有点紧张，看起来干劲一般。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 愉快地在赛道上进行着热身运动，看起来干劲不错。',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 兴高采烈地在赛道上蹦蹦跳跳的，看起来干劲满满。',
            ]);
          },
        },
        {
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 一直保持着轻松的表情。',
            ]);
          },
        },
      ];
      await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_gift(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 收到了 ',
      you.get_colored_name(),
      ' 的礼物，感到十分的高兴。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_cook(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 在训练员室里一起做饭，你们决定今天来点健康有机的胡萝卜。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_rest(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 在训练员室里一起休息，二人脑子放空着度过了一段时间。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_game(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 在训练员室里一起打游戏机，二人度过了一段快乐的时光。',
    ]);
  },
  bm_money_message: '要借多少钱？',
  bm_time_message: '要借多久？',
  get_bm_confirm_message: (amount, time, repay) => [
    '借款 ',
    { ...get_abbr_number(amount), color: money_color },
    ' 马币，此后 ',
    { content: time.toLocaleString(), color: buff_colors[3] },
    ' 周内每周还款 ',
    { ...get_abbr_number(repay), color: money_color },
    ' 马币，共 ',
    {
      ...get_abbr_number(repay * time),
      color: money_color,
    },
    ' 马币，接受吗？',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} amount
   */
  async bm_confirm(chara, you, amount) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 向 ',
      chara.get_colored_name(),
      ' 借了 ',
      { content: amount.toLocaleString(), color: money_color },
      ' 马币……',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到中庭枯树洞。',
    ]);
    await era.printAndWait([
      `看着${chara.sex}朝枯树洞里咆哮的样子，`,
      you.get_colored_name(),
      ' 也坚定了要帮助 ',
      chara.get_colored_name(),
      ' 成为最强的决心。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到中庭约会，你们的组合让周围的学生忍不住议论纷纷。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_r_lunch(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到天台吃便当，你们互相交换了便当盒里的美食。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_fishing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到河边钓鱼，希望能钓到大丰收。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_walking(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到河边散步，今天也是好心情呢。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_arcade(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到商店街街机厅，祈祷夹娃娃机不要松开爪子。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_drawing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到商店街抽奖，会抽到好东西吗？',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_ktv(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到商店街卡拉OK，山顶的朋友嗨起来！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_movie(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到商店街看电影，最近有什么好电影吗？',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(chara, you, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到神社祈福。',
    ]);
    if (dice < 0.5) {
      await era.printAndWait([
        '抽到了',
        dice < 0.05 ? '大吉' : '吉利',
        '的签文！此行让你们感觉很高兴。',
      ]);
    } else {
      await era.printAndWait([
        '抽到了不吉的签文！此行让你们处处提防天降厄运。',
      ]);
    }
  },
  /**
   * @author Mr.E.
   * @param {CharaTalk} chara
   * @param {number} dice 祈祷掷骰结果，0-0.05 之间的小数，这里根据数值计算大成功的类型
   */
  async oc_great_luck(chara, dice) {
    // FLAGNAME:122 = 强奸抵抗
    if (dice < 0.0001 && era.get('flag:122') === 1) {
      await era.printAndWait('署名是未知的施法素材！');
    } else if (dice < 0.01) {
      await era.printAndWait([
        '眼前突然幻视到一扇彩色的闸门，心情突然好了起来',
      ]);
    } else if (dice < 0.02) {
      await era.printAndWait([
        '一阵风吹过，被吹倒在 ',
        chara.get_colored_name(),
        ' 的身上了？！',
      ]);
    } else if (dice < 0.03 && chara.sex_code !== 1) {
      await era.printAndWait([
        '一阵风吹过，旁边 ',
        chara.get_colored_name(),
        ' 的裙子居然被吹了起来？！',
      ]);
    } else {
      await era.printAndWait(['一阵风吹过，居然是 150 马币？！']);
    }
  },
  /** @param {CharaTalk} chara */
  oc_remove_train_debuff(chara) {
    era.print(['【', chara.get_colored_name(), ' 的训练似乎更加顺利了】']);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_restaurant(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到车站附近吃饭，要吃中华、日料，还是西餐呢？',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到车站附近约会，两人手牵手的景象吸引了不少眼红群众。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_shopping(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 与 ',
      chara.get_colored_name(),
      ' 一起来到车站附近逛商场，买一点小心意吧。',
    ]);
  },
  cl_new_year: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '迎接新的一年，',
        you.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 在训练员室里一起好好庆祝了一番。',
      ]);
    };
    f.title = '新年';
    return f;
  })(),
  cl_valentine: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '今天是情人节，',
        you.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 在训练员室里互相赠送了礼物。',
      ]);
      await era.printAndWait([
        '看到对方高兴的模样，',
        you.get_colored_name(),
        ' 也觉得很开心。',
      ]);
    };
    f.title = '情人节';
    return f;
  })(),
  cl_palace: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '殿堂周，是对于志在奔跑的',
        chara.uma_sex_title,
        '们来说最重要的节日之一。',
      ]);
      // CFLAGNAME:47 = 殿堂
      switch (era.get(`cflag:${chara.id}:47`)) {
        case 2:
          await era.printAndWait([
            '由于 ',
            you.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 的优越成绩，你们理所当然作为主角被邀请到来。',
          ]);
          // CFLAGNAME:48 = 育成回合计时
          if (era.get(`cflag:${chara.id}:48`) === 143 + 9) {
            await era.printAndWait([
              '时候到了，',
              chara.get_colored_name(),
              ' 带着掩饰不住的喜悦与骄傲，向舞台中心走去。',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' 看着',
            chara.sex,
            '一步步走上台前，开始讲述你们的奋斗过往，分享经验与在座观众。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 的眼神有些模糊，不由得回想起你们之间的点点滴滴……',
          ]);
          break;
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 一齐向特雷森学园的大礼堂走去参加活动。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 的担当耳朵和尾巴无意识地略微耷拉下去，似乎不是很精神。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 看着 ',
            chara.get_colored_name(),
            '，叹了口气，小心地伸出一只手搭在',
            chara.sex,
            '的肩上，扶着',
            chara.sex,
            '前进。这一举动似乎也让',
            chara.sex,
            '振作了几分。',
          ]);
          await era.printAndWait([
            '尽管 ',
            you.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 也努力过了，但是成绩仍不足以进入殿堂，不过人生总是会有些遗憾。',
          ]);
          await era.printAndWait([
            '虽然没能成为最后的赢家，但你们还是被节日气氛所感染，舒缓了几分精神。',
          ]);
          break;
        default:
          // CFLAGNAME:65 = 成长阶段
          if (era.get(`cflag:${chara.id}:65`) === 5) {
            await era.printAndWait([
              `殿堂周，不仅是对于在役${chara.uma_sex_title}们重要的日子，对于 `,
              you.get_colored_name(),
              ' 这样的工作相关者，也是注定忙碌且紧张的一天。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 和 ',
              chara.get_colored_name(),
              ' 一同走进活动场地，认真记录着这次典礼的各项内容……时不时地抬头互望一眼，接着又沉心收集着自己所需的信息。',
            ]);
          } else {
            await era.printAndWait([
              '每到这个时候，特雷森学园都会举行活动，其中之一就是邀请数位殿堂',
              chara.uma_sex_title,
              '前来进行连续几天的演讲，向其他',
              chara.uma_sex_title,
              '/训练员们传授经验。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 和 ',
              chara.get_colored_name(),
              ' 好不容易从慕名而来的人们中间抢到了个位置坐下。',
            ]);
            // CFLAGNAME:1 = 种族
            if (era.get(`cflag:${chara.id}:1`) > 0) {
              await era.printAndWait([
                '随着台上',
                chara.uma_sex_title,
                '沉静又不乏激情的声音响起，',
                you.get_colored_name(),
                ' 注意到 ',
                chara.get_colored_name(),
                ' 坐的笔直，眼中似乎露出了憧憬的神情……',
              ]);
            }
          }
      }
    };
    f.title = '殿堂周';
    return f;
  })(),
  cl_fans: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '四月的粉丝感谢祭上，',
        you.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起给粉丝表演了才艺。',
      ]);
    };
    f.title = '粉丝感谢祭';
    return f;
  })(),
  cl_temple_fair: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '庙会期间，',
        you.get_colored_name(),
        ' 决定邀请 ',
        chara.get_colored_name(),
        ' 一起去夏合宿场地旁边的市集游玩。',
      ]);
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            '很快同意了，你们暂时卸下成年社畜的担子，好好痛快地玩了一天……',
          ]);
        } else {
          await chara.say_and_wait('是约会吗？');
          await era.printAndWait([
            you.get_colored_name(),
            ' 看着屏幕上的消息提示，不由得笑了一下，正要打算回复时，一条新的信息跃入眼帘。',
          ]);
          await chara.say_and_wait('那就这么定了。');
          await era.printAndWait([
            '文字下方，是身穿浴衣，略作妆点的',
            chara.sex,
            '的自拍。',
            you.get_colored_name(),
            ' 不由得屏住呼吸……',
          ]);
          await era.printAndWait('不消说，这会成为你们的一次美好回忆。');
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          '很快同意了，你们把所有事务抛诸脑后，好好痛快地玩了一天……',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          '迅速给 ',
          you.get_colored_name(),
          ' 发了回信。',
          you.get_colored_name(),
          ' 特意提前于入口处等候时，抬眼猛然发现了身着崭新浴衣，精心打扮的',
          chara.sex,
          '。',
        ]);
        await era.printAndWait([
          '还未等 ',
          you.get_colored_name(),
          ' 反应，她便微微一笑，把上 ',
          you.get_colored_name(),
          ' 的胳膊，拉着 ',
          you.get_colored_name(),
          ' 一起走了……',
        ]);
        await era.printAndWait('你们度过了愉快的一天。');
      }
    };
    f.title = '庙会';
    return f;
  })(),
  cl_halloween: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        await era.printAndWait(['特雷森的节日活动，往往与别处不同。']);
        await era.printAndWait([
          '比如今天……',
          you.get_colored_name(),
          ' 看着身边打扮得有些滑稽和诡异的',
          chara.sex,
          '，不禁在心底叹了口气。',
        ]);
        await era.printAndWait(
          '本来是孩子们费心打扮玩闹，大人只需在家等着给糖就好了的节日。校内高层却出于「与学生打成一片」等理由，鼓励教职工也装扮起来，出门去发糖，为此还特地放了半天假。',
        );
        await era.printAndWait('或许……也只是某些成年人贪玩找借口而已。');
        await era.printAndWait([
          you.get_colored_name(),
          ' 这么想着，突然感觉有一道带着杀气的目光从身侧凝视过来，赶忙晃了晃脑袋，紧跟 ',
          chara.get_colored_name(),
          ' 的步伐。',
        ]);
        await era.printAndWait('这一夜虽然累人，不过，倒也有趣。');
      } else {
        await era.printAndWait([
          '正在 ',
          you.get_colored_name(),
          ' 享受休闲时光的时候，房门突然传来了不徐不急却猛烈的敲门声。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 大概知道是谁搞的鬼，拉开房门，装作被奇异打扮的 ',
          chara.get_colored_name(),
          ' 吓一跳的样子，陪',
          chara.sex,
          '一同出去要糖了……',
        ]);
        await era.printAndWait('一路上，似乎见到了不少奇怪的东西。');
      }
    };
    f.title = '万圣节';
    return f;
  })(),
  cl_christmas: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '圣诞节到了，',
        you.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起装扮成圣诞老人庆祝，你们嬉闹到了晚上才消耗完过剩的精力。',
      ]);
    };
    f.title = '圣诞节';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async birthday_remote(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 远程向 ',
      chara.get_colored_name(),
      ' 送上了生日祝福',
    ]);
    await era.printAndWait([chara.get_colored_name(), ' 显得很高兴。']);
  },
  /**
   * @author 阿格尼斯数码公司
   * @param chara
   * @param you
   */
  async birthday_normal(chara, you) {
    await era.printAndWait([
      '为 ',
      chara.get_colored_name(),
      ' 筹备了一场盛大的生日派对！',
    ]);
    const buffer = [
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 作为生日的主角，非常高兴的样子',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 在摇曳的烛光中闭上眼睛，许下了今年的生日愿望',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 被大家的快乐所感染，脸上一直带着笑容',
          ]);
        },
      },
      {
        c: () =>
          // TALENTNAME:11 = 社交态度
          era.get(`talent:${chara.id.id}:11`) === -1 &&
          // EXPNAME:20 = 过生日次数
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            '经常客串各种各样聚会场景的 ',
            chara.get_colored_name(),
            '，完全没有意料到',
            you.get_colored_name(),
            `会为${chara.sex}策划一个生日派对，只是在惊喜中和你们度过了欢快的一天`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '话虽如此，',
            chara.get_colored_name(),
            ' 在得知',
            you.get_colored_name(),
            '的热情后，成功把',
            you.get_colored_name(),
            `为${chara.sex}筹划的生日派对变成了从未预料过的全校性生日庆典……！`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '话虽如此，',
            chara.get_colored_name(),
            ' 似乎自己为自己筹办了另外一半的生日派对，两场生日派对融合在一起，产生了巨大的规模拓展……！',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 似乎未曾预料会有这样一个派对，看到派对上出现的众人显得有些战战兢兢',
          ]);
          if (era.get(`cflag:${chara.id}:1`) > 0) {
            await era.printAndWait('不过，尾巴摇得很快的样子');
          } else {
            await era.printAndWait('不过，很高兴的样子');
          }
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '这次 ',
            chara.get_colored_name(),
            ' 意料之外地在每一个环节都没有生怯，一起和大家唱着生日歌',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 依然显得有些怯生生的，但在收到礼物时，还是非常高兴的样子',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 默默吃着生日蛋糕，',
            era.get(`cflag:${chara.id}:1`) > 0 ? '抖动着耳朵' : '微笑着',
            `，听着身边他人谈论有关${chara.sex}的种种往事`,
          ]);
        },
      },
      {
        // TALENTNAME:7 = 坦率程度
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 显然没意料到会有这样一个活动，但还是用「早就注意到」之类的说辞搪塞了问及是否惊喜的问题',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ` 一边抱怨着生日派对让${chara.sex}不满意的地方，`,
            era.get(`cflag:${chara.id}:1`) > 0 ? '一边摇着尾巴' : '一边大口',
            '吃着生日蛋糕',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 之前所总结一百个 ',
            you.get_colored_name(),
            ' 办事不力的说辞此刻终于派上了用场',
          ]);
          await era.printAndWait('不过，意料之外地称赞了这次生日活动办得很好');
        },
      },
    ];
    await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async load_talk(chara, you) {
    // CFLAGNAME:81 = 妊娠阶段
    // CFLAGNAME:57 = 扩展变量
    // EXPNAME:117 = 生产次数
    if (
      era.get(`cflag:${chara.id}:81`) > 2 &&
      !era.get(`cflag:${chara.id}:57`)?.report
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 抚着肚子，绝望地看着 ',
        you.get_colored_name(),
        ' 远去。',
      ]);
    }
    if (
      era.get(`cflag:${chara.id}:81`) <= 2 &&
      !era.get(`exp:${chara.id}:117`) > 0
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 拿着一只奶瓶，绝望地看着 ',
        you.get_colored_name(),
        ' 远去。',
      ]);
    }
  },
};
