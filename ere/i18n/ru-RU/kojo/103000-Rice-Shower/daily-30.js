/**
 * @file 米浴 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} rice 米浴 */
  good_morning(rice) {
    const buffer = [];
    if (era.get('cflag:30:节日事件标记') === 1) {
      buffer.push(
        () => rice.say('好像快要有活动了……不知道是要做什么样的事情呢？'),
        () =>
          rice.say(
            '好像正在办活动……米浴会努力不制造麻烦的……可以去偷偷看一下吗……？',
          ),
      );
    } else {
      buffer.push(
        () => rice.say('请一定……要好好看着米浴。'),
        () => rice.say('米浴……也一定可以很耀眼的……'),
      );
      if (!era.get('status:30:熬夜')) {
        buffer.push(
          () => {
            rice.say('昨晚做了一个很棒的梦……！');
            rice.say('和哥哥大人一起，在绚烂星空下的草原上。');
            rice.say('本来打算一起做训练来着……');
            rice.say('因为星星实在是太漂亮了，所以中途决定一起去看星星了。');
            rice.say('所以，就想着得早早起床，要好好地进行训练才行！');
          },
          () => {
            rice.say('米浴，去了花店哦。');
            rice.say('在凉爽的店里，被鲜花包围着，心情非常的平静。');
            rice.say('呼呼～所以说今天的训练，米浴会好好努力的！');
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {CharaTalk} you 玩家
   * @param {boolean} awake 米浴是否醒着
   */
  select(rice, you, awake) {
    if (!awake) {
      era.print([rice.get_colored_name(), ' 带着比绘本还要精致的笑颜熟睡着。']);
    } else {
      const buffer = [];
      if (era.get('cflag:30:节日事件标记') === 1) {
        buffer.push(
          () => rice.say('好像快要有活动了……不知道是要做什么样的事情呢？'),
          () =>
            rice.say(
              '好像正在办活动……米浴会努力不制造麻烦的……可以去偷偷看一下吗……？',
            ),
        );
      } else {
        buffer.push(
          () =>
            era.print([
              rice.get_colored_name(),
              ' 被静电吓了一跳，抚弄了下耳朵后静等 ',
              you.get_colored_name(),
              ' 的指令。',
            ]),
          () =>
            era.print([
              rice.get_colored_name(),
              ' 把刘海捋到一旁，让神采奕奕的双眸对上 ',
              you.get_colored_name(),
              ' 的视线。',
            ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async office_study(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '这是米浴精挑细选的绘本，还请 ',
          callname,
          ' 垂阅。',
        ]),
      () => rice.say_and_wait([callname, '，和比赛有关的事情都好擅长……']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async talk(rice, callname) {
    const buffer = [];
    if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
      buffer.push(
        () => rice.say_and_wait('呼……好像，有点累……的感觉……'),
        () => rice.say_and_wait('米浴没关系的！没有、感觉到累……'),
      );
    } else if (era.get('cflag:30:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:30:干劲')) {
        case -2: //干劲极差
          buffer.push(
            () =>
              rice.say_and_wait([
                '啊呜！明明不想给 ',
                callname,
                ' 添麻烦的……对不起。',
              ]),
            () => rice.say_and_wait('米浴……又要变回没用的孩子了吗…'),
          );
          break;
        case -1: //干劲较差
          buffer.push(
            () => rice.say_and_wait('唔唔……加油米浴……加油…'),
            () => rice.say_and_wait('有没有什么是米浴能帮上忙的呢……'),
          );
          break;
        case 0: //干劲普通
          buffer.push(
            () => rice.say_and_wait('我们要做什么训练呢？'),
            () => rice.say_and_wait('米浴会努力不让人失望的。'),
          );
          break;
        case 1: //干劲良好
          buffer.push(
            () => rice.say_and_wait('要加油——喔！今天也请麻烦您多多指教了。'),
            () =>
              rice.say_and_wait([
                callname,
                '，我们开始训练吧？现在的米浴感觉可以完成很多项目哦。',
              ]),
          );
          break;
        case 2: //干劲极佳
          buffer.push(
            async () => {
              await rice.say_and_wait('米浴现在觉得可以非常、非常地努力哦！');
              await rice.say_and_wait(['相信米浴吧，', callname, '。']);
            },
            async () => {
              await rice.say_and_wait('那个，米浴已经做好热身运动了。');
              await rice.say_and_wait('所以现在开始做什么都没问题哦。');
            },
          );
      }
    } else {
      buffer.push(
        () =>
          rice.say_and_wait(
            '每天，虽然只是一点点、但好像离理想中的自己越来越近了……的样子？',
          ),
        () =>
          rice.say_and_wait([
            callname,
            '……那个，跟你说哦……米浴每天都会努力的……你要相信米浴一定可以改变的。',
          ]),
        () => rice.say_and_wait('现在呀……米浴也已经不会，那么讨厌自己了哦。'),
        () =>
          rice.say_and_wait([
            '……呃，',
            callname,
            '……今天也愿意继续照、照顾米浴吗……？',
          ]),
        () =>
          rice.say_and_wait([
            '其……其实米浴做了巧克力……米浴做的巧克力你愿意吃吗……？你愿意收下的话，米浴会很高兴的。',
          ]),
        () =>
          rice.say_and_wait(
            '星星可以实现大家的愿望，让大家都变得幸福，真的好厉害。米浴……也要努力才行。',
          ),
        () =>
          rice.say_and_wait([
            '自从遇到 ',
            callname,
            ' 之后，每天时间都过得好快……',
            '米浴会努力的！',
          ]),
        () => rice.say_and_wait('米浴穿制服好看吗？'),
        () => rice.say_and_wait('一直被盯着看的话……感觉有点害羞。'),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice 米浴 */
  async office_cook(rice) {
    const buffer = [
      () => rice.say_and_wait('诶嘿嘿，简直就像新婚夫妇呢。'),
      () =>
        rice.say_and_wait('意外，吗？米浴因为胃口不小，所以有请母亲指导过。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async office_rest(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          '，那个……膝枕……哇啊啊，是米浴想给 ',
          callname,
          ' 做啦……',
        ]),
      () => rice.say_and_wait('真的不需要把外套给米浴当毯子的……好好闻……'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async office_game(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '《',
          rice.uma_sex_title,
          '小顽皮爱洗澡》，嘻嘻，',
          callname,
          ' 也很喜欢哦。',
        ]),
      () =>
        rice.say_and_wait([
          callname,
          '，明明一副好学生的样子，游戏水平也好厉害！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async s_a_tree_hollow(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '不能……哭，和 ',
          callname,
          ' 约好了，米浴要成为坚强的孩子。',
        ]),
      () => rice.say_and_wait('三女神，米浴，打算开始相信自己了。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice 米浴 */
  async s_a_dating(rice) {
    const buffer = [
      () => rice.say_and_wait('椅子上的大家，好大胆……有点羡慕。'),
      () => rice.say_and_wait('明明是特雷森，却有这么适合约会的地方呢。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice 米浴 */
  async s_r_lunch(rice) {
    await rice.say_and_wait('米浴虽然是早餐面包派，但对便当，还是有点自信的！');
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   * @param {number} jpy 钓鱼卖出的马币，0表示没钓到鱼
   */
  async o_r_fishing(rice, callname, jpy) {
    if (jpy > 0) {
      await rice.say_and_wait('呜啊啊啊！禁渔区钓上来这么多鱼，真的对不起！');
    } else {
      await rice.say_and_wait([callname, '，现在是禁渔期哦？']);
      await rice.say_and_wait('欸……一人一杆一线一钩？改善生态环境？欸欸欸？');
    }
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_r_walking(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '以前一个人锻炼，可能会感到孤独。但是和 ',
          callname,
          ' 一起，就感觉像是心灵得到了慰藉一样！',
        ]),
      () =>
        rice.say_and_wait([
          '米浴最享受的，或者说最接近自己的时光，就是和 ',
          callname,
          ' 悠哉悠哉地走在一起的这段路程哦。',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_arcade(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          '为什么街机厅要用代币不直接用硬币呢？工作人员不会麻烦吗……',
        ),
      () =>
        rice.say_and_wait([
          callname,
          '，这台机器可能有故障哦。因为，这么慢的弹幕，',
          callname,
          ' 怎么可能躲不过去啊？',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_drawing(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          '米浴，一直只能抽到纸巾呢……享受过程？那，米浴再去试试看。',
        ),
      () =>
        rice.say_and_wait([
          '那个，钱请让米浴来出，',
          callname,
          ' 就请贡献自己的好运吧！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_ktv(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(['献给 ', callname, ' 的歌曲，要米浴唱多少都行。']),
      () => rice.say_and_wait(['米浴小小的祈愿，有传达给 ', callname, ' 吗？']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_movie(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([callname, '。为什么爱一个人，却会不喜欢对方呢？']),
      () =>
        rice.say_and_wait('《火〇忍者剧场版》，有很像米浴的帅气角色？好期待！'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_restaurant(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '要要要、要吃米浴什么的……啊，',
          callname,
          ' 是米饭派啊。',
        ]),
      () => rice.say_and_wait('果然还是AA吧？米浴也知道自己的食量比较大。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_dating(rice, callname) {
    const buffer = [
      () => rice.say_and_wait('嘿嘿，米浴感觉自己就像绘本里的女主角一样。'),
      () => rice.say_and_wait([callname, '，喜欢那种类型的雌性啊……']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice 米浴
   * @param {PrintedSpan} callname 米浴对玩家的称呼
   */
  async o_s_shopping(rice, callname) {
    const buffer = [
      () => rice.say_and_wait('绘本区，一起逛逛吧？'),
      () =>
        rice.say_and_wait([
          '情侣限定……可是，',
          callname,
          ' 就是 ',
          callname,
          ' 啊。',
        ]),
    ];
    await get_random_entry(buffer)();
  },
};
