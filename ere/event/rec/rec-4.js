/**
 * @file 丸善斯基 - 招募
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const chara = get_chara_talk(4),
      me = get_chara_talk(0);
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        // 否则表示是在训练场直接招募的场合，招募会失败
        await era.printAndWait(`${me.name} 试着和 ${chara.name} 搭话。`);
        era.println();
        me.say(
          `${chara.name} 你的话一定可以成为无败的三冠马娘的，请加入我的队伍吧。`,
        );
        await chara.say_and_wait(
          '啊啦，虽然我也觉得能成为三冠马娘是件好事呢，不过呢，训练员君是不是太高估我了呢……虽然很对不起，不过我不能与你签约……不过这么自信的训练员君，一定能找到合适的担当呢。',
        );
        await me.say_and_wait(`被 ${chara.name} 拒绝了啊`, true);
        era.set('cflag:4:招募状态', recruit_flags.success_on_leave);
        break;
      case event_hooks.recruit_end:
        // extra_flag是success的时候，表示是在训练场直接离开的场合，会被丸善斯基搭话，招募成功
        await era.printAndWait(
          `${me.name} 想离开训练场时，${chara.name} 却向${me.name}搭话了。`,
        );
        era.println();
        chara.say(
          '请问这边的这位训练员君，能占用你一点时间吗？是不是也是来找合适的担当的呢。',
        );
        era.print(
          `${me.name} 为了物色合适的马娘来到了特雷森的赛场里观看选拔赛，名为${chara.name}的马娘，在这场选拔赛里一骑绝尘，远远的将其他马娘甩在了后面。比赛时她看上去像是一辆开足了马力的红色跑车。不过最吸引你的还是她在奔跑时所露出的满足神情。`,
        );
        chara.say(
          '嗯……所以训练员君也是来找能夺得三冠，甚至是以海外为舞台，夺得凯旋门赏的马娘吗？',
        );
        era.print(
          `${me.name} 摇了摇头，那道因享受着风与自由而露出满足神情的红色身影不知为何深深刻在了你的脑海里。`,
        );
        chara.say('啊啦，真是个奇怪的训练员呢……');
        era.print(`${chara.name}露出了烦恼的神情，不过很快恢复的之前的姿态`);
        chara.say('不好意思，请问训练员君在寻找什么样的马娘呢？');
        era.print(
          `${me.name} 坦率地向 ${chara.name} 说出了自己看着她奔跑时的满足姿态入迷的事情。`,
        );
        await chara.say_and_wait(
          '……这样吗，你的确是个奇怪的训练员呢。那么，之后也请多多看我奔跑时的姿态吧。',
        );
        // 把招募事件注册在天台的随机事件队列里，不然去天台不会触发事件
        add_event(
          event_hooks.school_rooftop,
          new EventObject(4, cb_enum.recruit),
        );
        new EventMarks(0).add(event_hooks.school_rooftop);
        // 把姥爷从随机招募列表里去掉，不然以后再来训练场还能看见她
        era.set('cflag:4:随机招募', 0);
        // 设置变量，以禁止玩家进入其他招募事件链
        era.set('flag:物色对象', 4);
        // 本身已经是离开训练场的时候触发的事件，所以就跳过后续的离开训练场事件
        return true;
      case event_hooks.school_rooftop:
        // 这里是从天台的随机事件进来的
        if (era.get('flag:当前互动角色')) {
          // 如果身边带着其他马娘，不触发
          // 把事件再塞回去，不然下次不触发了
          add_event(event_hooks.school_rooftop, event_object);
          return false;
        }
        // 触发事件并招募成功
        await era.printAndWait(
          `${me.name} 前往天台时，又遇到了 ${chara.name}。`,
        );
        await chara.say_and_wait(
          '……嗯嗯，后辈们都很可爱呢♪如果还有什么问题的话随时欢迎问姐姐我呦♪」',
        );
        era.print(
          `${chara.name} 放下手机，眺望着操场上练习的后辈马娘们，尾巴随着哼出的小曲有节奏的摆动着。`,
        );
        await chara.say_and_wait('果然还是在晴朗的天气里吃便当最愉快了♪');
        era.print(
          `${chara.name} 打开便当盒的同时视线无意识地向前方扫去，然后注意到了 ${me.name} 的存在`,
        );
        await chara.say_and_wait(
          `有什么问题……啊啦♪这不是上次在训练场遇到的训练员${me.get_adult_sex_title()}吗，你也打算在天台上吃便当吗？真是有品位呢♪`,
        );
        era.print(
          `于是两个人坐在一起一边看着操场上努力的马娘们一边吃着便当，和煦的春风卷起了 ${chara.name} 的裙摆，她的耳朵伴随着音乐的节奏抖动着。`,
        );
        era.print(
          `两人默默无言。直到便当全部吃完后，丸善斯基放下手中的筷子，然后站起身看向了 ${chara.name}`,
        );
        await chara.say_and_wait(
          '那么，这位训练员，也是在寻找合适的担当吗，目标是什么？',
        );
        await chara.say_and_wait(
          '不败三冠，超越皇帝，还是说打算向着世界的大舞台与担当一起努力呢',
        );
        await chara.say_and_wait('不管是什么都可以和姐姐我商量哦♪');
        era.print(`${chara.name} 微笑着打量 ${me.name}`);
        era.print(
          `${me.name} 的脑海中回忆了自己看到的那一道红色的身影，以及在奔跑的时候所露出的满足笑容`,
        );
        era.printButton('想要看着担当在奔跑时能尽情享受跑步的快乐', 1);
        await era.input();
        await chara.say_and_wait('!');
        era.print(
          `${chara.name} 的耳朵明显地颤抖了一下，尾巴随着 ${chara.name} 打量着 ${me.name} 而有节奏地摆动着`,
        );
        await chara.say_and_wait('……这样吧，不如你来做我的训练员吧');

        era.print(
          `${me.name} 看着她认真的模样，虽然有些意外，不过最后还是向她伸出了手`,
        );
        await chara.say_and_wait(
          `那么，接下来请多指教了，训练员${me.get_adult_sex_title()}♪`,
        );
        new EventMarks(0).sub(event_hooks.school_rooftop);
        new EduEventMarks(4).add('after_recruit');
        // 设置招募状态为成功，同时也是在队伍里的标记
        era.set('cflag:4:招募状态', recruit_flags.yes);
        // 结束招募事件链
        new EduEventMarks(4).add('beginning');
        add_event(event_hooks.week_end, new EventObject(4, cb_enum.edu));
        era.set('flag:物色对象', 0);
        await this.recruit_end();
        // 返回true，表示跳过后面的天台事件流程
        return true;
    }
    return false;
  }
};
