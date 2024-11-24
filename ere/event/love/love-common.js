/**
 * @file 爱慕地文
 *
 * @author 雞雞
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');

class CustomizedLove {
  /** @param {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  // eslint-disable-next-line no-unused-vars
  async 49(chara, me, callname, stage, extra_flag, event_object) {
    await print_event_name('爱欲', chara);
    await chara.print_and_wait([
      '某个晚上，',
      chara.get_colored_name(),
      ' 在激烈的自慰中边叫着 ',
      me.get_colored_name(),
      ' 的名字达到了高潮。',
    ]);
    await sys_love_uma_in_event(this.id);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 74(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('恋心', chara);
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 逐渐察觉到了自己对 ',
        me.get_colored_name(),
        ' 有点超乎关系的暧昧。',
      ]);
      await chara.print_and_wait(
        '但那到底是年少无知的情窦初开，抑或是日常相伴下产生的情感错觉？',
      );
      era.printButton('「我也许是认真的……」（升级关系）', 1);
      era.printButton('「不，我也许只是想多了……」（暂停升级）', 2);
      if ((await era.input()) === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' 逐渐察觉到了自己对 ',
          me.get_colored_name(),
          ' 的爱意。',
        ]);
        await chara.print_and_wait([
          ' 一定要向 ',
          me.get_colored_name(),
          ' 传达心意……',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' 有了这样的觉悟。',
        ]);
        add_event(event_hooks.back_school, event_object);
      } else {
        await chara.say_and_wait('错觉吧……', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ' 摇了摇头，翻过身，渐渐进入了梦乡……',
        ]);
        era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      }
    } else if (stage === event_hooks.back_school) {
      const cur_chara = era.get('flag:当前互动角色');
      if (cur_chara && cur_chara !== this.id) {
        add_event(event_hooks.back_school, event_object);
        return;
      }
      await print_event_name('冲动', chara);
      if (cur_chara > 0) {
        await era.printAndWait([
          '回到训练室时，',
          chara.get_colored_name(),
          ' 神色紧张地向 ',
          me.get_colored_name(),
          ' 提出了交往的请求。',
        ]);
      } else {
        await era.printAndWait([
          '回到训练室时，',
          chara.get_colored_name(),
          ' 神色紧张地找到了 ',
          me.get_colored_name(),
          ' 并且提出了交往的请求。',
        ]);
      }
      era.print([
        '要怎么办呢？是要接受 ',
        chara.get_colored_name(),
        ' 成为恋人，还是无情地拒绝？',
      ]);
      era.printButton('答应。（升级关系）', 1);
      era.printButton('拒绝。（暂停升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '听到 ',
          me.get_colored_name(),
          ' 肯定的答复，',
          chara.get_colored_name(),
          ' 绷紧的脸庞也随之舒缓下来，转而露出兴奋的神情',
          ...(era.get('cflag:0:身高') > era.get(`cflag:${this.id}:身高`)
            ? ['扑进 ', me.get_colored_name(), ' 的怀里。']
            : ['把 ', me.get_colored_name(), ' 拉进怀里。']),
        ]);
        await era.printAndWait([
          '从今以后，',
          me.get_couple_title(),
          ' 多了一层关系，一双恋人。',
        ]);
        await sys_love_uma_in_event(this.id);
      } else {
        await era.printAndWait([
          '纵有万般思绪在心头，但 ',
          me.get_colored_name(),
          ' 始终认为 ',
          me.get_couple_title(),
          ' 注定不可能走在一起。',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' 轻咬朱唇，浑身颤抖着强忍泪水。',
        ]);
        await era.printAndWait([
          '出于礼节，',
          me.get_colored_name(),
          ` 好好安慰着${chara.sex}，直到一切伤心的骤雨平静下来。`,
        ]);
        era.set(`cflag:${this.id}:爱慕暂拒`, 74);
        await punish_rejecting_love(this.id);
      }
      era.set('flag:当前互动角色', this.id);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 89(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('相伴', chara);
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 一想到自己与 ',
        me.get_colored_name(),
        ' 的恩爱场景便不由得感到一阵幸福。',
      ]);
      await chara.print_and_wait([
        '让关系更进一步吧……',
        chara.get_colored_name(),
        ' 有了这样的想法。',
      ]);
      add_event(event_hooks.week_start, event_object);
    } else if (stage === event_hooks.week_start) {
      if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
        return;
      }
      await print_event_name('誓言', chara);
      await era.printAndWait([
        '某日，',
        chara.get_colored_name(),
        ' 把 ',
        me.get_colored_name(),
        ' 带到了外面约会。',
      ]);
      era.print([
        '在一天的浪漫与温存依偎后，',
        chara.get_colored_name(),
        ' 露出充满觉悟的眼神，并向 ',
        me.get_colored_name(),
        ' 递出了结婚钻戒。',
      ]);
      era.printButton('答应。（升级关系）', 1);
      era.printButton('拒绝。（暂停升级）', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 伸手接过钻戒。',
          me.get_couple_title(),
          ' 在经历过那么多之后也确实是时候结为连理了。',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' 兴奋地向 ',
          me.get_colored_name(),
          ' 献上热情的深深一吻，从今以后你们二人将在人生的路上一起扶持彼此，无论贫富、无论病痛健康，至死不渝……',
        ]);
        await sys_love_uma_in_event(this.id);
      } else {
        await era.printAndWait([me.get_colored_name(), ' 没有接过钻戒……']);
        await era.printAndWait([
          {
            content: '尽管在经历过那么多之后，',
          },
          me.get_colored_name(),
          ' 仍然不确定这是不是一个正确的抉择。',
        ]);
        await era.printAndWait(
          '道德伦理、人际关系、社会责任……你们需要考虑、或是将要束缚你们的事情实在太多了。',
        );
        era.print([
          '只是，看着 ',
          chara.get_colored_name(),
          ' 失落的神情，',
          me.get_colored_name(),
          ' 也不由得心想：真的有必要考虑那么多吗……',
        ]);
        era.set(`cflag:${this.id}:爱慕暂拒`, 89);
        await punish_rejecting_love(this.id);
      }
      era.set('flag:当前互动角色', this.id);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 99(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('噩梦', chara);
      await chara.print_and_wait([
        '某个晚上，',
        chara.get_colored_name(),
        ' 在床上辗转反侧始终无法入眠。',
      ]);
      await chara.print_and_wait([
        '在 ',
        chara.get_colored_name(),
        ' 的脑中始终充斥着 ',
        me.get_colored_name(),
        ' 出于各种原因离',
        chara.sex,
        '而去的场景，一想到这种事就不禁使得 ',
        chara.get_colored_name(),
        ' 悲从中来……',
      ]);
      add_event(event_hooks.week_start, event_object);
      await sys_love_uma_in_event(this.id);
    } else if (stage === event_hooks.week_start) {
      if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
        return;
      }
      await print_event_name('依存', chara);
      await era.printAndWait([
        chara.get_colored_name(),
        ' 先所有人一步到达了训练室，紧抱着 ',
        me.get_colored_name(),
        ' 不撒手。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 不明所以，连声安慰，这才平复了 ',
        chara.get_colored_name(),
        ' 的心情。',
      ]);
      era.set('flag:当前互动角色', this.id);
      era.println();
      await add_juel_out_of_train(this.id, '顺从', 300);
      await era.waitAnyKey();
    }
  }

  async common_result() {
    if (!era.get('flag:回合爱慕惩罚')) {
      const love = era.get(`love:${this.id}`);
      if (love >= 74) {
        era.printButton('升级关系', 1);
        era.printButton('暂不升级', 2);
        if ((await era.input()) === 2) {
          era.set(`cflag:${this.id}:爱慕暂拒`, love);
          await punish_rejecting_love(this.id);
          return;
        }
      }
      await sys_love_uma_in_event(this.id);
    }
  }

  /**
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(stage, extra_flag, event_object) {
    let handler = this[event_object.arg];
    if (event_object.arg instanceof Array) {
      handler = this[event_object.arg[0]];
    }
    if (handler !== undefined) {
      return await handler.call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        stage,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedLove;
