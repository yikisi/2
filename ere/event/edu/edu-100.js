/**
 * @file 奇锐骏 - 育成
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const kojo = require('#/event/edu/edu-100.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} */
const w_s_handlers = {};

[
  require('#/event/edu/edu-events-100/week-start-1'),
  require('#/event/edu/edu-events-100/week-start-2'),
  require('#/event/edu/edu-events-100/week-start-3'),
  require('#/event/edu/edu-events-100/week-start-4'),
  require('#/event/edu/edu-events-100/week-start-5'),
].forEach((f) => f(w_s_handlers));

module.exports = class extends CustomizedEdu {
  get #dict() {
    return generate_dictionary(this.id, { title: !0, uma: !0 });
  }

  async race_end(acute, me, callname, hook, extra_flag) {
    if (
      extra_flag.race !== race_enum.begin_race ||
      era.get('cflag:100:育成回合计时') >= 48
    ) {
      return await super.race_end(acute, me, callname, hook, extra_flag);
    }
    if (extra_flag.rank === 1) {
      await era.printAndWait('天边的玄鸟环绕在赛场之上，');
      await era.printAndWait('它们述说、传递、叙述、表达，');
      await era.printAndWait('传述着凛然的身姿，得到了凯旋的回应——');
      await era.printAndWait('小型的赛场、不足百人的观众，');
      await era.printAndWait('喝彩之声或许没有那般的鼎沸。');
      await era.printAndWait(
        '但昂扬凛然的身姿，足以在一人的心中留下难以忘怀的印记。',
      );
      await era.printAndWait([
        '赛场之上，',
        acute.get_colored_name(),
        ' 屹立在当之无愧的中心。',
      ]);
      await era.printAndWait('那凛然的身姿上，是一如既往的温和的笑颜。');
      await era.printAndWait([
        '金色的光辉之下，',
        acute.sex,
        '高高举起了自己的拳头。',
      ]);
      await era.printAndWait('——那是何等的光辉。');
      await era.printAndWait([
        '在直视着神圣的一瞬，',
        me.get_colored_name(),
        ' 于恍惚间失了神。',
      ]);
      await era.printAndWait([
        '而在恍惚之间，',
        acute.sex,
        '已结束了胜利的仪式，',
      ]);
      await era.printAndWait([
        '垫着脚尖，',
        acute.get_colored_name(),
        ' 就这样走了过来——',
      ]);
      era.printButton('「——」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 张开口，想要称贺',
        acute.sex,
        '的胜利。',
      ]);
      era.printButton('「……啊、啊——」', 1);
      await era.input();
      await era.printAndWait('可真当自己张开口，却不由得为之哑然。');
      await era.printAndWait([
        '而正当 ',
        me.get_colored_name(),
        ' 自责于，自己竟然如此失态的同时，',
      ]);
      await era.printAndWait(['却是', acute.sex, '先开了口。']);
      await acute.say_and_wait(['姆呼呼……真是辛苦你啦，', callname]);
      await era.printAndWait(['——', acute.sex, '开口了，']);
      await era.printAndWait([acute.sex, '开口说的第一句话是，']);
      await era.printAndWait(['向失败的 ', me.get_colored_name(), ' 致谢。']);
      era.printButton('「————」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 哑然在了原地，四周瞬间凄清，唯有那使 ',
        me.get_colored_name(),
        ' 感情热浪涌上了心尖。',
      ]);
      await era.printAndWait('手指止不住的颤抖——');
      await acute.say_and_wait(['……', callname, '？怎么了？突然不舒服了吗？']);
      era.printButton('「不，没有——我很好。」', 1);
      await era.input();
      await era.printAndWait([
        '强忍着心中喷涌出的情、按压住指与眉中渗出的水，',
        me.get_colored_name(),
        ' 尽力整理着自己的狼狈。',
      ]);
      era.printButton(`「什么事，都没有——放心吧，${acute.name}。」`, 1);
      await era.input();
      await era.printAndWait([
        '这是那一天，',
        me.get_colored_name(),
        ' 对 ',
        acute.get_colored_name(),
        ' 所说的最后一句话。',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait([era.get('flag:当前年'), ' 年。']);
      await era.printAndWait([
        '这是一度失败的训练者，被担当的',
        acute.get_uma_sex_title(),
        '捡回家的第一年。',
      ]);
      await era.printAndWait(
        '而在这一年的六月，一场普通的出道战后，一度失败的训练者，下定了一个决心。',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 决定，让自己的担当',
        acute.get_uma_sex_title(),
      ]);
      await era.printAndWait('步入真正的殿堂——');
    } else {
      await era.printAndWait('围棋圈内有一个成语，叫做「棋差一着」，');
      await era.printAndWait('这句成语的下一句话，叫做「满盘皆输」。');
      await era.printAndWait('用来形容当下所发生的事情，或许是再适合不过了。');
      await era.printAndWait(
        '凛然的身躯即便丰盈而美丽，棋差一着却也是不可违逆的事实。',
      );
      await era.printAndWait(
        '计分板所彰显的事实之下，一切对失败的辩解都显得像是在抵赖。',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' 缓缓得离开了赛场，而掌声与喝彩此刻并不属于 ',
        me.get_colored_name(),
        ' 和 ',
        acute.get_colored_name(),
        '。',
      ]);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        '看着 ',
        acute.get_colored_name(),
        ' 略带沮丧的身影，',
        me.get_colored_name(),
        ' 总想要说些什么——',
      ]);
      await acute.say_and_wait(['没事的哦，', callname]);
      await era.printAndWait('……');
      await era.printAndWait('尚未开口，反倒是听到了来自对方的安慰。');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 实不知道此时该做什么，',
      ]);
      await era.printAndWait('只觉得一种冰凉，从头顶冷到了脚尖。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 呆愣在原地，不知所措、静静地看着 ',
        acute.get_colored_name(),
        ' 走远。',
      ]);
      await era.printAndWait('…………………');
      await era.printAndWait('……………');
      await era.printAndWait('………');
      await era.printAndWait('瞬间不足以成为训练的喜悦，');
      await era.printAndWait('世人只相信胜负的那一瞬间——');
    }
  }

  async race_start(acute, me, callname, hook, extra_flag) {
    if (
      extra_flag.race !== race_enum.begin_race ||
      era.get('cflag:100:育成回合计时') >= 48
    ) {
      return await super.race_start(acute, me, callname, hook, extra_flag);
    }
    await print_event_name('不安', acute);
    await era.printAndWait(['六月，', acute.get_colored_name(), ' 的出道战。']);
    await era.printAndWait([
      '赛场是在札幌附近的一所小型会场，作为参赛方，',
      me.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 提前一天就抵达了赛场。',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('不安。');
    await era.printAndWait('极度的不安。');
    await era.printAndWait(
      '如果要用比喻的话，那大概就是如同登月的阿波罗17号返回地球舱室中发现地面上凭空出现了一根螺丝程度的不安。',
    );
    await era.printAndWait(
      '夜里难以入睡，即便只是靠在床上，也能时不时听到自己躁动不安的心跳。',
    );
    await era.printAndWait('……所实话，真的能成功吗？');
    await era.printAndWait([
      '自己担当的 ',
      acute.get_colored_name(),
      '，真的能在这场比赛中成功胜出吗？',
    ]);
    await era.printAndWait('紧紧握着的手心，下意识得流着汗……');
    await acute.say_and_wait('……');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '回过身，',
      acute.get_colored_name(),
      ' 就站在自己的身后。',
    ]);
    await era.printAndWait(
      '下意识得将满是手汗的双臂背过身，样子像极了做了坏事的小孩子。',
    );
    await acute.say_and_wait(['没关系的哦，', callname, '。']);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('那是如同太阳般温暖的微笑，');
    await era.printAndWait(
      '可看到这一幕的自己，却不知为何心生着不知名的罪恶。',
    );
    await acute.say_and_wait(['你已经很努力了哦，', callname, '。']);
    await acute.say_and_wait('剩下的，交给我就好。');
    await era.printAndWait([
      '拍了拍 ',
      me.get_colored_name(),
      ' 的肩膀，',
      acute.get_colored_name(),
      ' 没有回头，凛然的背影，朝向通道的出口走去——',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('那是何等凛然的背影。');
    await era.printAndWait('遥望着巍峨的背影，心中不由得浮现出惭愧之情——');
  }

  async train_success(acute, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_success(acute, me, callname, hook, extra);
    }
    era.print([acute.get_colored_name(), ' 的训练顺利结束了！']);
    era.println();
    if (
      !era.get('status:100:摸鱼') &&
      Math.random() < extra.stamina_ratio * 0.2
    ) {
      await era.waitAnyKey();
      await print_event_name('热血的追加训练', acute);
      await acute.say_and_wait('呼呼呼……只是这种程度的话——');
      await era.printAndWait([
        '训练刚刚结束，身着体操服的 ',
        acute.get_colored_name(),
        ' 却依旧一副意犹未尽的摸样。',
      ]);
      await acute.say_and_wait('只是这种程度的话，还远远谈不上『满足』呢……');
      await acute.say_and_wait(['呐呐，', callname]);
      await era.printAndWait([
        '拉扯着自己的衣服、一举一息间都散发着蒸腾气味的气味的 ',
        acute.get_colored_name(),
        '；闪烁着明亮的眼眸——',
      ]);
      await acute.say_and_wait('还可以继续吗？我啊，还能继续下去呢——');
      era.print('…………不知为何，总感觉是一句意味深长的话。');
      era.printButton('许可', 1);
      era.printButton('搁置', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '点了点头，同意了 ',
          acute.get_colored_name(),
          ' 的请求。',
        ]);
        await era.printAndWait('毕竟，身为训练员，怎么能说自己不行？');
        await era.printAndWait([
          '夕阳之下，',
          me.get_colored_name(),
          ' 与奇锐骏的身姿，在操场上继续奔腾——',
        ]);
        hook.arg = true;
      } else {
        await era.printAndWait([
          '……总感觉 ',
          acute.get_colored_name(),
          ' 是在刻意挑衅自己，让自己同意；',
        ]);
        await era.printAndWait([
          '强行拒绝了 ',
          acute.get_colored_name(),
          ' 的提议后，吩咐 ',
          acute.get_colored_name(),
          ' 早些洗澡、休息。',
        ]);
        hook.arg = false;
      }
    }
    if (era.get('item:斗魂注入鞭（S用）') > 0) {
      extra.attr = 2;
      extra.stamina = -2 - (2 - era.get('cflag:100:干劲')) * 2;
    }
  }

  async week_start(acute, me, callname, hook, extra_flag, event_object) {
    if (w_s_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await w_s_handlers[event_object.arg].call(
        this,
        acute,
        me,
        callname,
        flags,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async crazy_fan_end() {
    const name = '粉丝袭击';
    const dict = this.#dict;
    await kojo[name](dict);
    await print_event_name(
      [{ color: buff_colors[3], content: name }],
      get_chara_talk(this.id),
    );
  }
};
