const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/** 梦之旅 - 地下室 */
module.exports = class extends CustomizedBase {
  /** @author 幽白書 */
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

  /** @author 幽白書 */
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

  /** @author 幽白書 */
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

  /** @author 幽白書 */
  out() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0);
    era.print([dj.get_colored_name(), ' 还有其他的事要做，即将离开……']);
    era.println();
    dj.say(['对不起，', callname, '……我必须先离开了。']);
    dj.say(
      '如果有什么烦恼的话可以为我分忧……？明明我是将您监禁在这里的人，您却依然希望能够帮上我的忙吗？',
    );
    dj.say(
      '真是个烂好人呐……不过，不用了，因为您只需要待在这里，作为我唯一的『归处』，就已经是帮我最大的忙了。',
    );
  }

  /** @author 幽白書 */
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

  /** @author 幽白書 */
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

  /** @author 幽白書 */
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

  /** @author 幽白書 */
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
};
