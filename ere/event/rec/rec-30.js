const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const check_before_rec = require('#/event/rec/snippets/check-before-rec');

const chara_color = require('#/data/chara-colors').chara_colors[30];
const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 米浴的招募事件，id=30
 *
 * @author 梦露
 */
module.exports = {
  override: true,
  /**
   * @param {number} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    const callname = era.get('cflag:0:性别') === 1 ? '哥哥' : '姐姐',
      chara_name = era.get('callname:30:-2'),
      chara_self_name = era.get('callname:30:30'),
      chara_sex = era.get('cflag:30:性别') === 1,
      your_name = era.get('callname:0:-2');

    switch (stage_id) {
      case event_hooks.out_station:
        if (!era.get('flag:当前互动角色')) {
          // 车站事件，只有独行才会显示
          era.print('在稍远的车站前购物，返回学园的路上遇到了一位马娘。');
          era.print('休息结束的她，忙着赶回去进行下一个训练任务。');
          era.print('「好端正的跑姿」');
          era.print(`看着她离去的背影，${your_name} 不禁感叹。`);
          await era.printAndWait('虽然身形娇小，但会被她四周环绕的霸气吸引。');
          era.println();
          era.print('结果频繁遇到红灯，回特雷森学园的时候，天已经完全黑了。');
          era.print(`${chara_name}「那个，对、对不起！」`, {
            color: chara_color,
          });
          era.print(`「嗯？跟我说的吗？」`);
          era.print(`${chara_name}「是、是的，那个，对不起！」`, {
            color: chara_color,
          });
          era.print(`「诶？」`);
          era.print(
            `${chara_name}「就因为今天 ${chara_self_name} 跑在您旁边，您才会回来得这么晚的。」`,
            {
              color: chara_color,
            },
          );
          era.print(`${chara_name}「真的真的，非常对不起！」`, {
            color: chara_color,
          });
          era.print(`「不是你的错。」`);
          era.print(
            `${chara_name}「不，就是 ${chara_self_name} 的错，因为 ${chara_self_name} 是会给别人带来不幸的坏孩子……」`,
            {
              color: chara_color,
            },
          );
          era.print('少女的大耳朵无力地低垂着。');
          era.print(
            `${chara_name}「对不起，但、但是只要 ${chara_self_name} 不在就没问题了！再见！」`,
            {
              color: chara_color,
            },
          );
          era.print('还没来得及叫住米浴，她就跑走了。如果放着不管也太可怜了。');

          era.printButton('去告诉她是她多虑了吧', 1);
          await era.input();
          era.print('正准备朝她搭话的时候');
          era.print(
            `${chara_name}「已经决定要在下次选拔赛出场了。好好地出场，踏踏实实地跑，这样一来……」`,
            {
              color: chara_color,
            },
          );
          era.print(
            `${chara_name}「好好出道，然后活跃一把，就能成为中用的 ${chara_self_name} 了！」`,
            {
              color: chara_color,
            },
          );
          era.print(
            '看到她干劲十足地准备开始训练，不忍心打搅她，最后还是没能打上招呼。',
          );
          await era.printAndWait(
            `${chara_name} ……真期待在下次选拔赛上看到她真正的实力。`,
          );
          new EventMarks(0)
            .sub(event_hooks.out_station)
            .add(event_hooks.recruit_start);
          add_event(event_hooks.recruit_start, event_object);
          return true;
        } else {
          add_event(event_hooks.out_station, event_object);
        }
        break;
      case event_hooks.recruit_start:
        era.print(`「今天似乎有 ${chara_name} 的选拔赛……」`);
        era.print(
          `？？？「${chara_name}！${chara_name} 同学 ${chara_name} 同学 ${chara_name} 同学！你在哪里呀 ${chara_name} 同学！」`,
        );
        era.print(`似乎到了 ${chara_name} 该出场的时候，然而她并没有出现。`);
        era.print(`呼唤 ${chara_name}的马娘很快被叫走了`);
        era.print(
          `？？？「${chara_name}，终于连选拔赛也开始拒绝出场了吗，明明是个这么有天赋的孩子。」`,
        );
        era.print('？？？「说到底，比起天赋，不愿意出场就已经是一大问题了。」');
        await era.printAndWait(
          `结果，${chara_name} 到最后也没有出现在那天的选拔会场上。`,
        );
        era.set('cflag:30:随机招募', 1);
        new EventMarks(0).sub(event_hooks.recruit_start);
        break;
      case event_hooks.recruit:
        if (!era.get('cflag:30:招募状态')) {
          era.print(
            `诶？那${
              chara_sex ? '小伙子' : '小姑娘'
            }的耳朵真大呢，远超平均水平了吧？`,
          );
          era.print(
            `照理说这个年纪的孩子，尤其是${
              chara_sex ? '马郎' : '马娘'
            }大多是活泼好动的。`,
          );
          era.print(
            `但黑发${
              chara_sex ? '少年' : '少女'
            }似乎有为了不撞到他人，而小心翼翼地注意着尾巴。`,
          );
          era.print(`而且在中央特雷森，这么弱气的孩子也是少见。`);
          era.print(
            `就如 ${your_name} 预料的一样，${
              chara_sex ? '他' : '她'
            }没有和朋友并跑，只身穿着运动服往校外跑去了。`,
          );
          await era.printAndWait('方向是……车站啊。');
          new EventMarks(0).add(event_hooks.out_station);
          add_event(
            event_hooks.out_station,
            new EventObject(30, cb_enum.recruit),
          );
          era.set('cflag:30:随机招募', 0);
          era.set('cflag:30:招募状态', -2);
        } else {
          if (await check_before_rec(30)) {
            return false;
          }
          // 招募事件
          era.print(`下一次见到 ${chara_name} 已经是选拔赛后的事了。`);
          era.print('树桩旁');
          era.print(
            `${chara_name}「笨蛋，笨蛋笨蛋，${chara_self_name} 大笨蛋！明明……明明都已经下定决心要努力了……」`,
            {
              color: chara_color,
            },
          );
          era.print(
            `${chara_name}「呜呜……为什么……为什么 ${chara_self_name} 这么没用？」`,
            {
              color: chara_color,
            },
          );
          era.print(
            `实在不忍心看 ${chara_name} 在一旁独自哀泣，回过神来已经走到了她身边。`,
          );
          era.print(`${chara_name}「您是……之前那位？」`, {
            color: chara_color,
          });
          era.print(`${chara_name}「对不起！那个，请不要再过来了……」`, {
            color: chara_color,
          });
          era.print(
            `${chara_name}「因为只要待在 ${chara_self_name} 身边就会变得不幸，${chara_self_name} 是个没用的孩子，又会给您添麻烦的。」`,
            {
              color: chara_color,
            },
          );
          await era.printAndWait(
            `${chara_name}「${chara_self_name} 也想变得中用，想努力在选拔赛出场，结果……」`,
            {
              color: chara_color,
            },
          );
          era.println();
          era.print(
            `看着眼前哭泣的 ${chara_name}，前几天的哪个身影又浮现在眼前——`,
          );
          era.print('虽然不清楚发生了什么，但她确实想要改变。');
          era.print('我也知道她为了迈出这一步，竭尽全力进行了训练。');
          era.print(
            `${chara_name}「呜呜……果然，果然像 ${chara_self_name} 这种……」`,
            {
              color: chara_color,
            },
          );

          era.printButton('不能就这样放着她不管！', 1);
          await era.input();
          era.print(`「${chara_name}，来我这里吧！」`);
          era.print(`${chara_name} “唰”地抬起了耳朵。`);
          era.print(`${chara_name}「诶？」`, {
            color: chara_color,
          });
          era.print(
            `${chara_name}「您是说……您来当 ${chara_self_name} 的训练员吗？」`,
            {
              color: chara_color,
            },
          );
          era.print(
            `${chara_name}「哇啊啊……${chara_self_name} 我，非常非常高兴，但是……！」`,
            {
              color: chara_color,
            },
          );
          era.print(
            `${chara_name}「但 ${chara_self_name}……真的很没用的。不仅会添很多麻烦，连比赛都出不了场。」`,
            {
              color: chara_color,
            },
          );
          era.print(`${chara_name}「即便如此，您也愿意做我的训练员吗？」`, {
            color: chara_color,
          });

          era.printButton('「即便如此我也想支持你」', 1);
          await era.input();
          era.print(`${chara_name}「好厉害……像 ${callname} 一样……」`, {
            color: chara_color,
          });
          era.print(`「${callname}？」`);
          era.print(`${chara_name}「哇！对、对不起，请当做没听见！」`, {
            color: chara_color,
          });
          era.print(`${chara_name}「那个……就请、请多指教，训练员！」`, {
            color: chara_color,
          });
          era.print(`${chara_name}「${chara_self_name}，会加油的！」`, {
            color: chara_color,
          });
          await era.printAndWait(
            '尽管表情还很僵硬，她也努力地挤出了一个笑容。',
          );
          era.set('cflag:30:招募状态', recruit_flags.yes);
          era.println();
          await era.printAndWait(`${chara_name} 加入了队伍！`);
          era.set('callname:30:0', `${callname}大人`);
          new RiceEduMarks().beginning++;
          add_event(event_hooks.week_end, new EventObject(30, cb_enum.edu));
        }
    }
    return false;
  },
};
