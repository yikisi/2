/**
 * @file 梦之旅 - 地下室
 *
 * @author 幽白書
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const callname = sys_get_callname(119, 0),
      dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait('我怎么会拦着您离开呢？');
    era.println();
    await era.printAndWait(['太好了，', dj.sex, '同意了。']);
    await era.printAndWait([
      '欣喜若狂的 ',
      me.get_colored_name(),
      ' 深怕',
      dj.sex,
      '反悔般的朝着出口离开。',
    ]);
    await era.printAndWait('然而……');
    era.println();
    await dj.say_and_wait(['啊，', callname, '，请稍等一下。']);
    era.println();
    await era.printAndWait('想要离开。');
    await era.printAndWait('想要快点看见外面的阳光。');
    await era.printAndWait('所有的愿望………却因忽然僵硬的双腿而化为空想。');
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      ' 走到身旁，为 ',
      me.get_colored_name(),
      ' 将衣领整好，将衣服上每一折自己弄皱的衣角理顺，为 ',
      me.get_colored_name(),
      ' 拍去这几天被困于室内沾染的尘埃。',
    ]);
    era.println();
    await dj.say_and_wait([
      '外面的虫子很多，',
      callname,
      ' 出去一定要当心……千万小心，不要再被虫子们缠上了。',
    ]);
    era.println();
    await era.printAndWait('「再」被缠上的后果，是什么？');
    await era.printAndWait([
      '看着',
      dj.sex,
      '淡笑的嘴角和毫无笑意的眼神，答案不言自明。',
    ]);
    era.println();
    await dj.say_and_wait(['整理好了，', callname, '……请继续吧。']);
    era.println();
    await era.printAndWait('在允许的话语说出口后，自己的身体又恢复了动弹。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 再度朝着出口离去……这次却变得不慌不忙。',
    ]);
    await era.printAndWait([
      '哪怕离开了地下室，',
      me.get_colored_name(),
      ' 的心也无法从 ',
      dj.get_colored_name(),
      ' 的掌控中逃出。',
    ]);
    await era.printAndWait([
      '彷佛这样的印痕，深深烙印在 ',
      me.get_colored_name(),
      ' 的心中。',
    ]);
  }

  async ask_release_reject() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait('我怎么会拦着您离开呢？');
    era.println();
    await era.printAndWait([
      '太好了，',
      me.get_colored_name(),
      ' 欣喜若狂的朝着出口奔去。',
    ]);
    await era.printAndWait(
      '然而，越是靠近门，平常总围绕在自己身旁的香气就越发淡薄，身体也越加难受。',
    );
    era.println();
    await dj.say_and_wait('哎呀，您怎么回来了？看来……还是我的身边更适合您吧？');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 已经离不开 ',
      dj.get_colored_name(),
      ' 了———仿佛只是为了证明这点，才放任 ',
      me.get_colored_name(),
      ' 离去。',
    ]);
    await era.printAndWait('地下室的支配者，露出了从容的笑容');
  }

  async ask_time() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait([
      '现在的 ',
      sys_get_callname(119, 0),
      '，身上的味道我很满意。',
    ]);
    await era.printAndWait([
      '答非所问的 ',
      dj.get_colored_name(),
      ' 嗅了嗅 ',
      me.get_colored_name(),
      ' 的手腕，那里挥发着最为浓郁的香味。',
    ]);
    await era.printAndWait(['——只属于 ', dj.get_colored_name(), ' 的香味。']);
  }

  back_basement() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0),
      life_marks = new LifeEventMarks(this.id);
    dj.say([callname, '，我回来了。']);
    if (life_marks.b_start) {
      dj.say(['……啊，', callname, ' 醒了吗？']);
      dj.say('总之，我回来了。嗯……啾……咕啾……');
      dj.say('我在做什么？只是回家时的仪式而已。');
      dj.say('地下室？不，家指的，当然是您了……我最亲爱的，肉体与灵魂的归属❤️');
    }
  }

  async battle_escape() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.drawLine();
    await era.printAndWait('解开了。');
    await era.printAndWait([
      '最后一层锁……看着熟悉的钥匙孔形状，',
      me.get_colored_name(),
      ' 回到晕倒在地的 ',
      dj.get_colored_name(),
      ' 身旁。',
    ]);
    await era.printAndWait([
      '那熟悉的形状，不正是 ',
      dj.get_colored_name(),
      ' 的耳饰吗？',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 将 ',
      dj.get_colored_name(),
      ' 的头饰在不惊醒对方的情况下轻柔取下，将最后一层机关打开。',
    ]);
    era.println();
    await era.printAndWait([
      '随着机关的打开，一捲被卷起的信纸落到了 ',
      me.get_colored_name(),
      ' 的手上。',
    ]);
    await era.printAndWait([
      '信纸中书写着对 ',
      me.get_colored_name(),
      ' 的爱意及歉意。',
    ]);
    era.println();
    await era.printAndWait('……这是真情流露写下的告白吗？');
    await era.printAndWait('又或者，是又一层的算计？');
    await era.printAndWait([
      '看着依旧躺在地上的 ',
      dj.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 犹豫了一会。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 回到 ',
      dj.get_colored_name(),
      ' 身边，将那瘫软的身体背起。',
    ]);
    await era.printAndWait([
      '最起码，这个地下室绝对不是适合',
      dj.sex,
      '待的地方……',
    ]);
    era.drawLine();
  }

  async battle_prison() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    era.drawLine();
    await era.printAndWait('前面的机关都解开了。');
    await era.printAndWait([
      '最后一层锁……看着熟悉的钥匙孔形状，',
      me.get_colored_name(),
      ' 却怎么也想不起，到底在哪里看过这样的东西。',
    ]);
    era.println();
    await era.printAndWait([
      '时间缓缓流逝，',
      me.get_colored_name(),
      ' 无助的用力拉扯门锁，却毫无帮助……',
    ]);
    era.println();
    await dj.say_and_wait(['打不开吗，', callname, '？']);
    era.println();
    await era.printAndWait('终于，身后的声音响起。');
    await era.printAndWait('徒劳的挣扎已经结束。');
    era.println();
    await dj.say_and_wait('……果然，还是无法取得您的信任啊，令人难过……');
    era.println();
    await era.printAndWait('明明说着难过，但却看不出有任何沮丧的表现。');
    era.println();
    await dj.say_and_wait([
      '不过……据我所知，信赖是可以培养的，我相信，只要 ',
      callname,
      ' 对我了解的更多，一定会更加信任我的吧？',
    ]);
    await dj.say_and_wait('所以请，更加了解我的身体，我的一切吧……');
    era.println();
    await era.printAndWait([
      '连抵抗的机会都没有，',
      me.get_colored_name(),
      ' 便被 ',
      dj.get_colored_name(),
      ' 按倒在地……',
    ]);
    await era.printAndWait([
      '只余 ',
      dj.get_colored_name(),
      ' 的头饰在地下室昏暗的灯光下闪烁着银色的光芒……',
    ]);
    era.drawLine();
  }

  async battle_success() {}

  find_escape(out_of_prison, s_level_up, is_back) {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    if (!out_of_prison) {
      era.drawLine();
      if (is_back) {
        dj.say('哎呀……');
        dj.say([callname, '……您尝试打开这个锁了吗？']);
        dj.say('打不开？……呵呵，那真是令人高兴的消息。');
        dj.say(
          '像您一样正直的人，是绝对打不开这样的锁的……这是，为了我这种心思扭曲之人而准备的锁……',
        );
        dj.say('所以，对于您无法将这锁打开这件事，我感到由衷的庆幸及欢喜。');
      } else {
        dj.say('无法解开吗？');
        era.println();
        era.print([
          '听见 ',
          dj.get_colored_name(),
          ' 的声音，',
          me.get_colored_name(),
          ' 下意识投降般地将手举起。',
        ]);
        era.print([
          dj.get_colored_name(),
          ' 不慌不忙的走到 ',
          me.get_colored_name(),
          ' 身旁，只用一根铁丝，快速两下，连 ',
          me.get_colored_name(),
          ' 都看不清对方到底做了什么。',
        ]);
        era.print([
          '困了 ',
          me.get_colored_name(),
          ' 许久的锁就在眼前轻而易举的被解开了。',
        ]);
        era.print('随后，锁又被关了回去。');
        era.println();
        dj.say(['呵呵……作为余兴表演，还满意吗？', callname, '？']);
        dj.say(
          '不必感到灰心……适才适所，由于父亲是金匠的关系，在这些机关上我也略有心得而已。',
        );
        dj.say([callname, '，不是也有自己更擅长的事吗？比如……床第之事❤️']);
      }
      era.println();
      era.print([
        me.get_colored_name(),
        ' 被 ',
        dj.get_colored_name(),
        ' 带回了床旁……',
      ]);
      era.drawLine();
    }
  }

  // eslint-disable-next-line no-unused-vars
  async flatter(supporter) {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      m_call_d = sys_get_colored_callname(0, this.id),
      d_call_m = sys_get_colored_callname(this.id, 0);
    era.println();
    if (Math.random() < 0.5) {
      await me.say_and_wait([
        '对不起，',
        m_call_d,
        '，一定是我做了什么惹 ',
        m_call_d,
        ' 不开心的事吧，我会改的……',
      ]);
      era.println();
      await era.printAndWait('总而言之，先道歉吧。');
      await era.printAndWait([
        dj.get_colored_name(),
        ' 听完之后靠近了 ',
        me.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '然后………用手指抵住了 ',
        me.get_colored_name(),
        ' 的嘴。',
      ]);
      era.println();
      await dj.say_and_wait('嘘……');
      await dj.say_and_wait('请不要用我最喜欢的那张嘴，吐出这样的谎言……');
      await dj.say_and_wait('其实，您根本不觉得自己有什么做错吧？');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 犹豫再三，还是点了点头。',
      ]);
      await era.printAndWait([
        dj.get_colored_name(),
        ' 露出责备的表情，将身体俯了过来。',
      ]);
      era.println();
      await dj.say_and_wait(
        '您的唇舌，不是为了谎言而存在的……不过没有关系，就让我来教育它，它的存在意义为何吧……啾……嗯……咕啾……',
      );
    } else {
      await me.say_and_wait([
        '对不起，',
        m_call_d,
        '，我仔细想了想，果然还是不知道……是我不小心在什么时候惹你不高兴了吗？才让你把我关在这里……',
      ]);
      era.println();
      await era.printAndWait([
        '不管三七二十一的道歉来取得 ',
        dj.get_colored_name(),
        ' 的原谅固然容易……',
      ]);
      await era.printAndWait([
        '但这样欺骗 ',
        dj.get_colored_name(),
        ' 果然还是不太好的吧……',
      ]);
      await era.printAndWait('最起码，要在知道错在哪里之后才道歉。');
      era.println();
      await dj.say_and_wait('……');
      await dj.say_and_wait([d_call_m, '……您的诚实，还是一如既往的令人欣喜……']);
      await dj.say_and_wait(
        '不过……没有，您没有做错任何事，只是，我的心因无法独占您的爱而感到焦虑而已……',
      );
      era.println();
      await me.say_and_wait('可是……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 想再说些什么，然而嘴唇却被堵住。',
      ]);
      era.println();
      await dj.say_and_wait([
        '……嗯，我改变想法了……',
        d_call_m,
        '，您确实错了……你的唇，太过聒噪了……请您好好的发挥它唯一的用途……用来倾诉对我的爱意❤️',
      ]);
    }
  }

  get_up() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0),
      life_marks = new LifeEventMarks(this.id);
    era.print([dj.get_colored_name(), ' 醒了过来……']);
    if (life_marks.b_start) {
      era.println();
      dj.say(['嗯……', callname, '，睡得还好吗？']);
      dj.say(
        '为什么会在这里……比起这个，抱起来的手感如何呢？这正符合某人兴趣的娇小身躯。',
      );
      dj.say('……很舒服……吗？呵呵，您的诚实还是一如既往的令人心喜。');
    }
  }

  out() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0);
    era.drawLine();
    era.print([dj.get_colored_name(), ' 还有其他的事要做，即将离开……']);
    era.println();
    dj.say(['对不起，', callname, '……我必须先离开了。']);
    dj.say(
      '如果有什么烦恼的话可以为我分忧……？明明我是将您监禁在这里的人，您却依然希望能够帮上我的忙吗？',
    );
    dj.say(
      '真是个烂好人呐……不过，不用了，因为您只需要待在这里，作为我唯一的『归处』，就已经是帮我最大的忙了。',
    );
    era.drawLine();
  }

  start_fixing() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0);
    era.drawLine();
    dj.say(['啊，', callname, '，可以帮我个忙吗？']);
    if (era.get('cflag:0:身高') > era.get('cflag:119:身高')) {
      dj.say(
        '是的，请扶我一下……这个梯子，稍微有点抖呢……真是惭愧，由于身高不够，让您看见了这样的丑态。',
      );
    }
    dj.say('呼……好了，谢谢您。');
    dj.say('在做什么？只是在给门上新的锁而已……感谢您的帮助。');
    era.println();
    era.print(['……早知道就不帮', dj.sex, '了……']);
    era.drawLine();
  }

  async strike_fail() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    await era.printAndWait('失败了……');
    await era.printAndWait([dj.get_colored_name(), ' 转过头来，要生气了吗？']);
    era.println();
    await dj.say_and_wait([callname, '……很努力了哦……']);
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      ' 轻轻地抱住了 ',
      me.get_colored_name(),
      '。',
    ]);
    era.println();
    await dj.say_and_wait(
      '努力学习了自己不擅长的技术……真的，要是稍微再用力一些，就能让我陷入短暂眩晕了……',
    );
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      ' 娇小的身躯，更紧地钻入怀中。',
    ]);
    era.println();
    await dj.say_and_wait(
      '但除此之外，人体也还是有着其他可以利用的弱点……比如……',
    );
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      ' 环抱的手，以不轻不重的力道敲中了腰上的某个地方。',
    ]);
    await era.printAndWait('瞬间，身体变得动弹不得……');
    era.println();
    await dj.say_and_wait('那么，请和我回去好好学习吧……关于人体的知识❤️');
    era.println();
    await era.printAndWait([me.get_colored_name(), ' 陷入了黑暗……']);
  }

  async strike_success() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait('到最后……我也还是无法获得您的信任吗？');
    era.println();
    if (!era.get('cflag:0:种族')) {
      await era.printAndWait([
        '虽然是人类的力气，但对 ',
        dj.get_colored_name(),
        ' 这样娇小的',
        dj.get_uma_sex_title(),
        '却也已经足够',
      ]);
    }
    await era.printAndWait([
      dj.get_colored_name(),
      ' 露出了悲伤的表情，缓缓倒地……',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 逃离了地下室……']);
  }

  welcome() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    era.drawLine();
    era.print([me.get_colored_name(), ' 悠悠醒转……']);
    era.println();
    dj.say(['睡得还舒服吗，', callname, '？']);
    dj.say('如果舒服的话那就太好了……神经大条？不，不是的。');
    dj.say(
      '这说明，哪怕只是浅意识，您也已经将这里视作能安心的地方……视作『家』了，不是吗？',
    );
    dj.say('不是啊……但，对我来说，就是这样的哦。');
    dj.say('只有有您在的地方，才是我的归处。');
    era.drawLine();
  }
};
