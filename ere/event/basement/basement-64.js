/**
 * @file 目白善信 - 地下室
 *
 * @author KUN
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedBase {
  async ask_time() {
    const me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await era.printAndWait([
      me.get_colored_name(),
      ' 试探性向 ',
      pama.get_colored_name(),
      ' 询问时间，却只得到了一个平淡的笑容。',
    ]);
    await pama.say_and_wait(['时间还有很多哦。']);
  }

  async ask_release_agree() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await pama.say_and_wait(['……是呢。']);
    await pama.say_and_wait([
      '果然，',
      callname,
      ' 也不喜欢一直待在这里，对吧。',
    ]);
    await pama.say_and_wait(['对不起，一直将 ', callname, ' 留在这里。']);
    await era.printAndWait([
      '一动不动站在 ',
      me.get_colored_name(),
      ' 的身前，低着头摇摇晃晃的，似乎下一刻就会倒地一样。',
    ]);
    await pama.say_and_wait(['但至少……至少现在再让我任性一下。']);
    await pama.say_and_wait(['只要一小会就好了，一小会。']);
    await era.printAndWait([
      '跌跌撞撞地向前走过来倒在了 ',
      me.get_colored_name(),
      ' 的胸口上，隔着衣服依稀能够感受到一丝热流。',
    ]);
    await era.printAndWait(['双手伸过腰间，紧紧拥抱着。']);
    await pama.say_and_wait(['这样就好……']);
    await pama.say_and_wait(['只要这样，再一小会就好……']);
    await era.printAndWait(['不知度过了多久，终于还是松开了抱紧的手。']);
    await era.printAndWait([
      '已经满脸通红的 ',
      pama.get_colored_name(),
      ' 撑起了笑容，抹去了脸上的水珠。',
    ]);
    await pama.say_and_wait(['那个啊，', callname, '。']);
    await pama.say_and_wait(['出去之后……我们还可以是搭档对吧。']);
    await era.printAndWait([
      '门锁被 ',
      pama.get_colored_name(),
      ' 打开，发出明亮的响声。',
    ]);
    await era.printAndWait([
      '背对着门，向着 ',
      me.get_colored_name(),
      ' 伸出手。',
    ]);
    await pama.say_and_wait(['我们走吧……', callname, '。']);
  }

  async ask_release_reject() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await pama.say_and_wait(['还不行哦。']);
    await era.printAndWait([
      '对着正在请求的 ',
      me.get_colored_name(),
      '，',
      pama.get_colored_name(),
      ' 只是淡淡地笑了起来，轻手抚摸着 ',
      me.get_colored_name(),
      ' 的脸。',
    ]);
    await pama.say_and_wait([callname, ' 不在这里的话。']);
    await pama.say_and_wait(['我会很寂寞的呐。']);
    await era.printAndWait([
      '起身靠在 ',
      me.get_colored_name(),
      ' 的耳边，缓缓地往耳廓上添上一口。',
    ]);
    await era.printAndWait([
      '感受到 ',
      me.get_colored_name(),
      ' 全身发毛的动态，',
      pama.get_colored_name(),
      ' 甜蜜地笑了起来。',
    ]);
    await pama.say_and_wait(['留在我身边就好哦……']);
    await pama.say_and_wait([callname, '……']);
  }

  back_basement() {
    const callname = sys_get_colored_callname(this.id, 0),
      life_marks = new LifeEventMarks(this.id),
      pama = get_chara_talk(this.id);
    if (life_marks.b_start) {
      if (era.get('base:0:体力') < 100) {
        era.print([
          '睁开疲劳的双眼，却对上了那双曾经无论何时都明亮的，动人的蓝色瞳孔。',
        ]);
        pama.say(['嗯哼～']);
      } else {
        pama.say(['哦，你醒了啊。']);
        pama.say([callname, ' 的睡颜我还没看够呢，真是的……']);
        pama.say([
          '不过只要在这里的话，无论多少次我都能看见 ',
          callname,
          ' 的笑容……对吧？',
        ]);
      }
    } else {
      pama.say(['我回来啦～']);
      pama.say(['哦，', callname, '～今天也是乖孩子呢～']);
      pama.say(['安心吧，我会一直陪在你身边的哦。']);
      pama.say(['毕竟这里可是……我逃跑的终点呢']);
    }
  }

  async battle_escape() {
    const me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await era.printAndWait(['短暂的吵闹声之后，小房间里又恢复了平静。']);
    await era.printAndWait([
      pama.get_colored_name(),
      ' 安静地躺倒在 ',
      me.get_colored_name(),
      ' 的面前，一动不动。',
    ]);
    await era.printAndWait(['接下来只要打开眼前的锁，就可以回去了。']);
    await me.say_and_wait(
      ['……这样真的好吗，就这样把 ', pama.get_colored_name(), ' 留在这里……'],
      true,
    );
    await era.printAndWait([
      '如此质问了自己之后，心里有些不忍地 ',
      me.get_colored_name(),
      ' 还是选择了回头。',
    ]);
    await era.printAndWait([
      '既然是一同选择了逃跑的搭档，那就应该一起走才是。',
    ]);
    await era.printAndWait([
      '强撑着力气直起身的 ',
      me.get_colored_name(),
      ' 抱起了昏迷中的 ',
      pama.get_colored_name(),
      '，拿起了早就翻出来的钥匙。',
    ]);
    await era.printAndWait(['该一起回去了。']);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await pama.say_and_wait(['这可不行呢，', callname, '。']);
    await era.printAndWait([
      '毫无压力地抓住了 ',
      me.get_colored_name(),
      ' 图谋不轨的手，反而将 ',
      me.get_colored_name(),
      ' 推倒了墙边。',
    ]);
    await era.printAndWait([
      pama.get_colored_name(),
      ' 居高临下地看着 ',
      me.get_colored_name(),
      ' 精彩的表情，浮出了一个暧昧的表情。',
    ]);
    await pama.say_and_wait([
      '我喜欢的 ',
      callname,
      ' 啊，可不会对我做这种事情呢。',
    ]);
    await pama.say_and_wait(['让我们回去再好～好地再聊聊吧。']);
    await era.printAndWait(['昏暗的灯光下，蓝色的瞳孔散着微微荧光。']);
  }

  async battle_prison() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await era.printAndWait(['冰冷的门锁发出清脆的声音。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 颤抖的双肩被身后有力的手轻轻握住了肩膀，传来了一丝令人意外的暖意。',
    ]);
    await pama.say_and_wait([callname, '～你在做什么呢～']);
    await pama.say_and_wait(['道歉的话，我可以装作什么都没看见哦～']);
    await era.printAndWait([
      '轻描淡写的几句话，但 ',
      me.get_colored_name(),
      ' 什么都说不出口，只是茫然的让 ',
      pama.get_colored_name(),
      ' 带回到了床边。',
    ]);
    await pama.say_and_wait([callname, ' 只要在这里，等着我就好了哦。']);
    await pama.say_and_wait(['其他的事情，并不重要呢。']);
  }

  get_basement_info(can_strike) {
    if (can_strike) {
      return super.get_basement_info(can_strike);
    }
    const me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    switch (new LifeEventMarks(this.id).b_s_level) {
      case 1:
        return [
          pama.get_colored_name(),
          ' 静静坐在 ',
          me.get_colored_name(),
          ' 的身边，却在不安地避开 ',
          me.get_colored_name(),
          ' 看向',
          pama.sex,
          '的眼神……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          ' 看着 ',
          me.get_colored_name(),
          ' 的脸有些不安，却依旧没有放开手的打算……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          ' 依旧在看着 ',
          me.get_colored_name(),
          '，暧昧地微笑着……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          ' 的脸上带着一点轻飘飘的笑容，没有半点想要移开眼神的打算……',
        ];
      case 5:
        return [
          '安静的等待，无时无刻的视线，以及……面对 ',
          pama.get_colored_name(),
          ' 那毫无恶意的微笑……',
        ];
    }
    return [];
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (!is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    era.print([
      '门锁在 ',
      me.get_colored_name(),
      ' 的努力下终于有了松动的迹象，正当 ',
      me.get_colored_name(),
      ' 准备加把劲的时候……',
    ]);
    pama.say(['啊，是专门在这里等着我回来吗？']);
    pama.say(['不愧是我的 ', callname, '！']);
    era.print([
      '微笑着接过了 ',
      me.get_colored_name(),
      ' 手上的工具，又转身关上了门。',
    ]);
    pama.say(['要欢迎的话，只要在这里就好了哦。']);
    pama.say(['如果 ', callname, ' 打开锁的话，我会很苦恼的呢。']);
    pama.say(['你明白的吧，', callname, '？']);
  }

  // eslint-disable-next-line no-unused-vars
  async flatter(supporter) {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(64),
      relation = era.get(`relation:${this.id}:0`);
    if (relation < 0) {
      await era.printAndWait([
        '自己的搭档是一个阳光的孩子，只要好好地言语交流，乖巧地请求的话……',
      ]);
      await pama.say_and_wait(['就算是我，也能听出 ', callname, ' 的谎言哦。']);
      await era.printAndWait([
        pama.get_colored_name(),
        ' 没有一点犹豫地打断了 ',
        me.get_colored_name(),
        ' 的声音，露出了一个平静的笑容。',
      ]);
      await pama.say_and_wait([
        '对于这样的 ',
        callname,
        '，或许需要一点小小的惩罚呢。',
      ]);
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 还想说什么之前，',
        pama.get_colored_name(),
        ' 就止住了嘴唇的动作。',
      ]);
      await era.printAndWait([
        '没有一点犹豫的将 ',
        me.get_colored_name(),
        ' 带回那张床上，平静地坐在 ',
        me.get_colored_name(),
        ' 的身边。',
      ]);
      await era.printAndWait(['安静得令人无法再发出言语。']);
    } else if (
      relation <
      era.get(`love:${this.id}`) * (era.get('flag:极端行为限制') || 1)
    ) {
      await era.printAndWait([
        '试图用言语来和 ',
        pama.get_colored_name(),
        ' 和解，却被嘴唇强行堵住了声音。',
      ]);
      await era.printAndWait([
        '直到 ',
        me.get_colored_name(),
        ' 的呼吸已经跟不上的时候，',
        pama.get_colored_name(),
        ' 才满意的松开了嘴唇，拉出一道长长的银丝。',
      ]);
      await pama.say_and_wait(['不行哦。']);
      await pama.say_and_wait([callname, ' 可不能说那些事情呢。']);
      await era.printAndWait([
        '已经无力的 ',
        me.get_colored_name(),
        ' 又一次被推倒在小床上，看着居高临下的 ',
        pama.get_colored_name(),
        '。',
      ]);
      await pama.say_and_wait(['我可不喜欢 ', callname, ' 你说这些呢。']);
      await pama.say_and_wait(['现在，全都是 ', callname, ' 的错哦。']);
      await pama.say_and_wait(['和我一起，一直在这里吧。']);
      await pama.say_and_wait([callname, '～']);
    } else {
      await era.printAndWait([
        '暗无天日的房间里，',
        me.get_colored_name(),
        ' 依旧在尝试以嘴上功夫突破什么。',
      ]);
      await era.printAndWait([
        '只是这一次，',
        pama.get_colored_name(),
        ' 仅仅是坐在 ',
        me.get_colored_name(),
        ' 的身旁安静的听着。',
      ]);
      await pama.say_and_wait(['……就算 ', callname, ' 你不说，我也很清楚的。']);
      await pama.say_and_wait(['我只是个胆小的家伙……对不起。']);
      await pama.say_and_wait([callname, ' 你其实，并没有什么错的。']);
      await era.printAndWait([
        '低垂着头，缓缓往 ',
        me.get_colored_name(),
        ' 的身边贴过去，靠在肩膀上。',
      ]);
      await era.printAndWait([
        '双手不安地往身旁伸去，轻轻抱住了 ',
        me.get_colored_name(),
        ' 垂下的手掌。',
      ]);
      await pama.say_and_wait(['至少……让我再任性一会。']);
      await era.printAndWait(['手指钻进掌心，十指相扣。']);
      await pama.say_and_wait(['再任性一小会，就好。']);
    }
  }

  start_fixing() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    era.print([
      '正在休息中的 ',
      me.get_colored_name(),
      ' 似乎听见了门口的方向传来了金属掉落在地上的声音。',
    ]);
    era.print([
      '察觉到了什么的 ',
      me.get_colored_name(),
      ' 正想着前来看看，却是正好与 ',
      pama.get_colored_name(),
      ' 碰了个正着。',
    ]);
    era.print(['大门依旧完好如初，甚至陷阱和门锁更加的完美。']);
    pama.say([callname, '？你来做什么呢？']);
    pama.say(['啊，是来找我的对吧？']);
    era.print([
      '明知故问一般，',
      pama.get_colored_name(),
      ' 半强迫地把 ',
      me.get_colored_name(),
      ' 又推回了房间里。',
    ]);
    era.print([
      '对着 ',
      me.get_colored_name(),
      ' 做出了一个安静的手势，笑了笑。',
    ]);
    pama.say(['抱歉呢，吵到你了。']);
    pama.say(['晚点我就回去找你啦，', callname, '。']);
  }

  async strike_success() {
    return this.battle_success();
  }

  welcome() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    if (Math.random() < 0.5) {
      era.print([
        me.get_colored_name(),
        ' 睡醒的时候，却发现自己处在一个冰冷的封闭空间里。',
      ]);
      era.print(['左右看着周围，结果看见了一个熟悉的笑脸。']);
      pama.say([callname, '～过得怎么样～']);
      pama.say('这可是为了你特别准备的哦，惊喜吧？');
    } else {
      era.print([
        '阴暗的小房间里，没有睡好的 ',
        me.get_colored_name(),
        ' 捂着头坐了起来。',
      ]);
      era.print([
        '空无一人的空间里，除了 ',
        me.get_colored_name(),
        ' 自己以外似乎再没有其他人。',
      ]);
      era.print([
        '正当 ',
        me.get_colored_name(),
        ' 准备下床走两步的时候，却听见了一个熟悉的声音。',
      ]);
      pama.say([callname, '～我回来啦～']);
      era.print([
        '从转角探出脸的 ',
        pama.get_colored_name(),
        '，微笑着看向 ',
        me.get_colored_name(),
        '。',
      ]);
    }
  }
};
