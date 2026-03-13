const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,FukukitaruEduMarks,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.aoba_sho] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    await print_event_name('影中的福', kitaru);
    await era.printAndWait([
      '开始，',
      kitaru.get_colored_name(),
      ' 的走位和步态控制都很优秀，尽管平日里的',
      kitaru.sex,
      '是一个脱线的性格，但 ',
      me.get_colored_name(),
      ' 的教导，',
      kitaru.sex,
      '还是有铭记于心的。',
    ]);
    await era.printAndWait([
      '比赛进入了末盘，',
      kitaru.get_colored_name(),
      ' 也开始加速了，和几位领放选手的距离在迅速缩短。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 展现出的末脚能力颇为优秀，几马身的差距转瞬即逝。',
    ]);
    await era.printAndWait('直到……');
    if (extra_flag.rank !== 1) {
      await era.printAndWait([
        '解说:「是失速了吗？',
        kitaru.get_colored_name(),
        ' 的速度突然下降了」',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 听见广播里如此解说。']);
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 以一种几近踉跄的跑姿冲过终点线之后，',
        me.get_colored_name(),
        ' 几乎是一步没停的冲向了赛场，在和周围待命的医生确认没有问题之后，直接抱着',
        kitaru.sex,
        '来到了休息室。',
      ]);
    } else {
      await era.printAndWait([
        '解说:「发生什么了吗？',
        kitaru.get_colored_name(),
        ' 跑姿出现了明显的变形。」',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 听见广播里如此解说。']);
      await era.printAndWait([
        '确实如此……',
        kitaru.get_colored_name(),
        ' 在逼近那位领放选手之后，跑姿变得越来越不稳，而脸上的表情也变得越发的狰狞起来。',
      ]);
      await era.printAndWait([
        '尽管凭着硬实力，',
        kitaru.get_colored_name(),
        ' 还是第一名冲线，不过末脚的时机，步伐，抢位意识，完全没有，似乎方才 ',
        kitaru.get_colored_name(),
        ' 只是凭着作为赛',
        kitaru.uma_sex_title,
        '的本能在奔跑一样。',
      ]);
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 以一种几近踉跄的跑姿冲过终点线之后，',
        me.get_colored_name(),
        ' 几乎是一步没停的冲向了赛场，在和周围待命的医生确认没有问题之后，直接抱着',
        kitaru.sex,
        '来到了休息室。',
      ]);
    }

    era.drawLine({ content: '东京赛马场 休息室内' });
    await kitaru.say_and_wait('欸嘿嘿！都说没事的了！');
    await era.printAndWait([
      '赛后，坐在休息室里的 ',
      kitaru.get_colored_name(),
      '，正双脚赤裸的坐在椅子上。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 不放心，还是让',
      kitaru.sex,
      '脱下鞋袜仔细检查，也就是进行触诊。',
    ]);
    await era.printAndWait(
      '裸露在外的白润由于比赛之后微微泛着红，而脚掌的弧线顺滑而流畅，足趾则因突然暴露在空气中而微微颤抖着。',
    );
    await era.printAndWait([
      '不过 ',
      me.get_colored_name(),
      ' 并没有多少心思去欣赏 ',
      kitaru.get_colored_name(),
      ' 的双足，只是再三确认刚才的情况并非骨折或者是扭伤。',
    ]);
    await era.printAndWait('但是，如果不是肉体上的问题话……');
    era.printButton('回忆', 1);
    await era.input();
    await era.printAndWait([
      '似曾相识，开始选拔赛的时候也有类似的情况，只不过，',
      me.get_colored_name(),
      ' 当时只当成是 ',
      kitaru.get_colored_name(),
      ' 对冲刺时机的掌握并不熟练。',
    ]);
    era.printButton('「发生了什么？」', 1);
    await era.input();
    await kitaru.say_and_wait('啊……');
    era.printButton('「就是刚才末盘时。」', 1);
    await era.input();
    await era.printAndWait([
      '原本还算是欢快的',
      kitaru.sex,
      '再次陷入了沉默。',
    ]);
    await kitaru.say_and_wait('唔……');
    await kitaru.say_and_wait('不要……');
    await era.printAndWait([kitaru.sex, '双唇紧抿，几乎要咬出血来。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 鲜少在这位赛',
      kitaru.uma_sex_title,
      '口中听到过拒绝。',
    ]);
    era.printButton('停止追问，并就现有的情报分析', 1);
    era.printButton('尝试以更为柔和的口吻继续追问', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        '对了，和出道战不同，选拔赛和这次的青叶赏有一个共通点。',
      );
      await era.printAndWait([
        '以逃跑为跑法的',
        kitaru.uma_sex_title,
        '数量与强度均高于平均线，而 ',
        kitaru.get_colored_name(),
        ' 都是在终盘和逃马的对抗中出现此状。',
      ]);
      await era.printAndWait([
        '结合 ',
        kitaru.get_colored_name(),
        ' 平日里的一些表现。',
      ]);
      await era.printAndWait('非常不妙……');
      await era.printAndWait('触景生情，以及选择性遗忘，典型的PTSD症状。');
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 尝试以更为柔和的口吻，继续追问，直到……',
      ]);
      await kitaru.say_and_wait('不！不！不是我的错！');
      await kitaru.say_and_wait('求你了！');
      await era.printAndWait(
        '马耳向后背的几乎是要插入自己的脑袋中，原本明亮的双眼染上了浑浊。',
      );
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          '「',
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: '啊啊啊啊啊！！！！！',
          },
          '」',
        ],
        {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait('砰！', {
        align: 'center',
        color: 'red',
        fontSize: '2.25rem',
        fontWeight: 'bold',
      });
      await era.printAndWait([
        '结结实实的一下，陷入应激状态的 ',
        kitaru.get_colored_name(),
        ' 给了 ',
        me.get_colored_name(),
        ' 一拳。',
      ]);
      await era.printAndWait([
        '幸好，在看到 ',
        me.get_colored_name(),
        ' 倒在地上的同时，',
        kitaru.uma_sex_title,
        '原本浑浊的双眼总算恢复了清明。',
      ]);
      await kitaru.say_and_wait('啊啊啊！非常抱歉！');
      await kitaru.say_and_wait([callname, '！没事吧！我现在就去叫医生！']);
      await era.printAndWait([
        '并无大碍？',
        me.get_colored_name(),
        ' 也的确得到了自己想要知道的东西。',
      ]);
      await era.printAndWait(
        '惊跳反应增强，伴随着攻击性行为的出现，典型的PTSD症状。',
      );
    }

    await era.printAndWait([
      me.get_colored_name(),
      ' 陷入了沉思，精神上的缺陷远比肉体上的问题更加棘手。',
    ]);

    era.set('status:56:PTSD', 1);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 发现对赛跑患有了PTSD。',
    ]);

    era.set('status:56:凶', 1);
    era.set('cflag:56:干劲', -2);
    era.set('status:56:大吉', 0);
    era.set('status:56:小吉', 0);
    era.set('status:56:中吉', 0);
  };

  handlers[race_enum.toky_yus] = async (kitaru, me, callname) => {
    await print_event_name('曙光初现', kitaru);
    await kitaru.print_and_wait(
      '进入了终盘，大家开始冲刺了，位于前方的逃马也开始了加速！',
    );
    await kitaru.print_and_wait('头好疼……');
    await kitaru.say_and_wait('不……不要！');
    await kitaru.print_and_wait([
      '那一天，我看见留着橙色长发的赛',
      kitaru.uma_sex_title,
      '开始了冲刺。',
    ]);
    await kitaru.say_and_wait('不要！');
    await kitaru.print_and_wait('砰！！！');
    await kitaru.print_and_wait(
      '裸露在外的骨头，歪斜的栏杆，还有被染成了红色的草地。',
    );
    await kitaru.say_and_wait('不要啊！');
    await kitaru.print_and_wait('如落海底，如坠冰窟，双脚陷入了泥潭之中。');
    await say_by_passer_by_and_wait('解说', [
      kitaru.get_colored_name(),
      '，',
      kitaru.get_colored_name(),
      ' 又要失速了吗？',
    ]);
    await kitaru.say_and_wait([callname, '……可能要让你失望了。']);
    await kitaru.print_and_wait([
      '直到我看见靠在栏杆上的赛',
      kitaru.uma_sex_title,
      '张开了嘴。',
    ]);
    await kitaru.say_as_unknown_and_wait('阿福……');
    await kitaru.say_as_unknown_and_wait('让我们做个约定吧。');
    await kitaru.say_as_unknown_and_wait('将来要看到阿福在菊花赏上奔跑哦！');
    await kitaru.say_and_wait([kitaru.get_bigger_sibling_sex_title(), '？']);
    await kitaru.say_and_wait('唔……约定。');
    await kitaru.say_and_wait(['对，约定……我答应过 ', callname, ' 的！']);
    await kitaru.say_and_wait('平安归来！');
    await kitaru.say_and_wait('现在，是向神明献上奔跑的时候了！');
    await say_by_passer_by_and_wait('解说', [
      '不，好快！好快啊！',
      kitaru.sex,
      '开始冲刺了！',
    ]);
    await kitaru.say_and_wait(['有 ', callname, ' 在身边的我，可是大吉啊！']);
    era.drawLine({ content: '东京赛马场 休息室内' });
    await kitaru.say_and_wait(['呼……', callname, '，我冲出来了！']);
    await kitaru.say_and_wait('呃！我还活着了！总之现在，超幸福！超满足的啦！');
    await kitaru.say_and_wait('福气满满！');
    era.printButton('「辛苦了，谢谢你！」', 1);
    await era.input();
    await kitaru.say_and_wait('欸，也不用这么说啦！');
    await kitaru.say_and_wait('我只是做了自己能做的事情而已！');
    await kitaru.say_and_wait('我从影子中逃出来了哦！');
    era.printButton('「那么下一场是菊花赏？」', 1);
    await era.input();
    await kitaru.say_and_wait('要跑菊花赏！');
    await kitaru.say_and_wait('是的！菊花赏！');
    await kitaru.say_and_wait('虽然可能有些困难啦……');
    await kitaru.say_and_wait(['但是相信我和 ', callname, ' 一定没问题的！']);

    era.set('status:56:PTSD', 0);
    await era.printAndWait([kitaru.get_colored_name(), '  的PTSD暂时失去了。']);

    era.set('status:56:凶', 0);
    era.set('status:56:大吉', 1);
    era.set('cflag:56:干劲', 2);
  };

  handlers[race_enum.kobe_hai] = async (kitaru, me, callname) => {
    await print_event_name('绑定', kitaru);
    await say_by_passer_by_and_wait('解说', [
      kitaru.get_colored_name(),
      ' 能追赶上吗？',
    ]);
    await say_by_passer_by_and_wait('解说', '好快！好快！太快了！');
    await say_by_passer_by_and_wait('解说', '五马身！三马身！一马身！');
    await say_by_passer_by_and_wait('解说', '超越了！');
    await say_by_passer_by_and_wait('解说', [
      '获胜者是 ',
      kitaru.get_colored_name(),
      '！',
    ]);
    await kitaru.print_and_wait(
      '没有恐惧，没有犹豫，而是将自己平日里的训练，积攒下来的努力，在终盘的时候全部都释放出来。',
    );
    await kitaru.print_and_wait('非常好，不是吗？');
    era.drawLine({ content: '阪神赛马场 休息室内' });
    await kitaru.say_and_wait('呼！！！');
    era.printButton('「幸苦了！」', 1);
    await era.input();
    await kitaru.say_and_wait('嗯！');
    await kitaru.say_and_wait('终于，我现在也算是完全脱敏了吧！？');
    await kitaru.say_and_wait('那么，之后就是菊花赏了吧！');
    if (era.get('love:56') >= 50) {
      await era.printAndWait([
        '没等 ',
        me.get_colored_name(),
        ' 回答，',
        kitaru.get_colored_name(),
        ' 就已经跳到了 ',
        me.get_colored_name(),
        ' 的身上。',
      ]);
      await era.printAndWait([
        '坐在了 ',
        me.get_colored_name(),
        ' 的腿上，等着 ',
        me.get_colored_name(),
        ' 用毛巾开始擦拭起',
        kitaru.sex,
        '汗津津的头发。',
      ]);
      await era.printAndWait([
        '终于，在察觉到怀中',
        kitaru.uma_sex_title,
        '的臀部开始不安分的磨蹭起来的时候，',
        me.get_colored_name(),
        ' 拍了一下 ',
        kitaru.get_colored_name(),
        ' 的头，示意',
        kitaru.sex,
        '安静下来。',
      ]);
      await kitaru.say_and_wait('哎呀！');
    }
    await era.printAndWait([
      '绕过 ',
      kitaru.get_colored_name(),
      ' 的毛茸茸尾巴，伸手从一旁的公文包中取出了为 ',
      kitaru.get_colored_name(),
      ' 设计的菊花赏训练计划。',
    ]);
    await kitaru.say_and_wait(['哦！果然，', callname, ' 早就有准备了吧！']);
    era.printButton('「害怕了吗？」', 1);
    era.printButton('「可别到时候掉链子呀！」', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('当然！');
    } else {
      await kitaru.say_and_wait('怎么会！');
    }
    await kitaru.say_and_wait([
      '属于',
      kitaru.get_bigger_sibling_sex_title(),
      '的参拜道路，我会替',
      kitaru.sex,
      '走完的！',
    ]);
  };

  handlers[race_enum.kiku_sho] = async (kitaru, me, callname) => {
    await print_event_name('命运的半途', kitaru);
    await era.printAndWait('马群进入了第四弯道，比赛也将进入终局。');
    await era.printAndWait([
      '然而 ',
      kitaru.get_colored_name(),
      ' 的踪迹仍匿于马群间，',
      me.get_colored_name(),
      ' 只能从那抹若隐若现的亮橙色推测出 ',
      kitaru.get_colored_name(),
      ' 的大概位置。',
    ]);
    await era.printAndWait([
      '能发挥出 ',
      kitaru.get_colored_name(),
      ' 优秀爆发力的差行跑法本就对时机把握苛刻，胜利与败北往往只差一线之隔。',
    ]);
    await era.printAndWait([
      '这场比赛，对于 ',
      kitaru.get_colored_name(),
      ' 而言，会是大凶吗？',
    ]);
    await say_by_passer_by_and_wait(
      '解说',
      '第四弯道过后，接下来就是最后的直线……',
    );
    await era.printAndWait(['被堵住了吗？然而终点已近在咫尺。']);
    await era.printAndWait([
      '观察，调整，决定，与行动，现在这个循环唯有身处漩涡中心的 ',
      kitaru.get_colored_name(),
      ' 本人才能完成，观众席上的 ',
      me.get_colored_name(),
      ' 帮不上忙。',
    ]);
    await era.printAndWait(['想要祈祷，这个念头不知怎么的冒了出来。']);
    await era.printAndWait([
      '或许，',
      me.get_colored_name(),
      ' 此刻的无力感，一如',
      kitaru.get_bigger_sibling_sex_title(),
      '夭折那一天时的 ',
      kitaru.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait('不……现在还有身为训练员能帮的上忙的事情。', true);
    era.printButton('「阿福！！！」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), ' 声嘶力竭的嘶吼起来。']);
    await era.printAndWait([
      '不知高速奔跑中的 ',
      kitaru.get_colored_name(),
      ' 能否听到 ',
      me.get_colored_name(),
      ' 的呼喊，但胜利的天平，确确实实的向',
      kitaru.sex,
      '那边倾斜了。',
    ]);
    await era.printAndWait([
      '仿佛圣人开海一般，又或者说像阿拉伯的少年以咒语打开门扉一般，那道橙色的闪电劈开了马群。',
    ]);
    await say_by_passer_by_and_wait('解说', [
      '——是待兼！',
      kitaru.get_colored_name(),
      '！福气仍将继续到来吗？！！',
    ]);
    await say_by_passer_by_and_wait(
      '解说',
      check_aim_race(RaceHistory.get(56).get(), race_enum.kobe_hai, 1, 1)
        ? '冲线了！自神户之后！！！福气也来到了菊花的舞台！！！'
        : '冲线了！',
    );
    era.drawLine({ content: '京都竞马场 菊花赏结束后' });
    await kitaru.say_and_wait([callname, '！！']);
    await kitaru.say_and_wait('我……我赢了！赢了哦……！');
    await era.printAndWait([
      '训练室内，幸福不已的 ',
      kitaru.get_colored_name(),
      ' 扑到了 ',
      me.get_colored_name(),
      ' 的怀里，与 ',
      me.get_colored_name(),
      ' 紧紧相拥。',
    ]);
    await era.printAndWait([
      '赛',
      kitaru.uma_sex_title,
      '长距离赛跑后的炽热体温，还有胸前的弹软触感，隔着汗湿的水手服，通过拥抱传给了 ',
      me.get_colored_name(),
      '。',
    ]);
    if (era.get('love:56') >= 50) {
      await kitaru.say_and_wait('这可都是多亏了命定之人呢！');
      await era.printAndWait([
        '如此说着，',
        kitaru.sex,
        '抬起头，用那如琥珀一般的眸子看着 ',
        me.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait('对了！');
      await kitaru.say_and_wait('也要给命定之人点奖励才行呢！');
      await era.printAndWait([
        '而后，在 ',
        me.get_colored_name(),
        ' 骤惊的眼瞳中，',
        kitaru.sex,
        '略掂脚尖，二人的嘴唇交叠在了一起。',
      ]);
      await era.printAndWait([
        '不可思议系',
        kitaru.teen_sex_title,
        '的清冷体香混着散在空气中的微腥汗气充斥着 ',
        me.get_colored_name(),
        ' 的嗅觉。',
      ]);
      await era.printAndWait('舌尖互抵，而又再次相触。');
      await era.printAndWait([
        '唇分之后，',
        me.get_colored_name(),
        ' 看见',
        kitaru.teen_sex_title,
        '的小舌头在唇边舔了舔，吸入几丝唾液。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 还是第一次见 ',
        kitaru.get_colored_name(),
        ' 如此主动。',
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      end_ero_and_train();
    }
    await era.printAndWait([
      '在菊花赏上获胜了，名叫 ',
      kitaru.get_colored_name(),
      ' 的',
      kitaru.teen_sex_title,
      '，实现了自己的执念，在追寻自己幸福的命运之路上踏出了一大步。',
    ]);
    await era.printAndWait(['但', kitaru.sex, '下一步，又该往何处去呢？']);
  };
};
