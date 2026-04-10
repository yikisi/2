const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const EroParticipant = require('#/data/ero/ero-participant');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,number,number):Promise>} */
const handlers = {};

handlers[0] = async (
  urara,
  me,
  in_urara,
  callname,
  edu_marks,
  random_range,
  love,
) => {
  if (
    !edu_marks.spe_mach &&
    ((love >= 50 && Math.random() < 0.3) ||
      era.get('mark:52:欢愉') ||
      era.get('mark:52:淫纹'))
  ) {
    edu_marks.spe_mach = 1;
    await print_event_name('角落中的奇怪机器', urara);
    await in_urara.say_as_unknown_and_wait('……');
    era.drawLine();
    await era.printAndWait([
      '在某次的外出时，',
      me.get_colored_name(),
      ' 因一点肠胃问题短暂离开了，而独自留下的 ',
      urara.get_colored_name(),
      ' 则开始在好奇心的驱使下四处探索起来。',
    ]);
    await era.printAndWait([
      '当在奖品各异的娃娃机中穿梭时，',
      urara.get_colored_name(),
      ' 很快便被一台从未注意过的机台吸引了。',
    ]);
    await era.printAndWait(
      '那台不起眼的机器正如狩猎的蜘蛛般静坐在阴暗的角落里，朴素的外壳与暗粉色灯光也遮掩着其中神秘的奖品。',
    );
    await era.printAndWait(
      '机器的一角所标记的「目白城制造」证实着它不应出现于此，但就算能够发现这隐蔽的角落也已经太迟了。',
    );
    await era.printAndWait([
      '小',
      urara.uma_sex_title,
      '瞬间就被这台迷幻的机器勾住了灵魂，即使捂住差点因惊吓发声的小嘴，也早已被内含的「惊喜」夺取了视线。',
    ]);
    await era.printAndWait([
      '暗淡的粉光下，狰狞器具们极富冲击力的堆叠在 ',
      urara.get_colored_name(),
      ' 面前，隔着薄薄的玻璃向',
      urara.sex,
      '勾着诱惑的指尖。',
    ]);
    await era.printAndWait(
      '可明明知道要快点离开，平日里最听话的双腿此时却违背了主人的意愿，一点点向桃色陷阱的方向挪了过去。',
    );
    await era.printAndWait([
      '就像跃入洞前短暂犹豫的爱丽丝，',
      urara.teen_sex_title,
      '在未知的躁动中折起耳朵，颤颤巍巍地将手伸向了投币口。',
    ]);
    await era.printAndWait(
      '与其他缓慢松散的娃娃机不同的，这台诡异的机器一启动便开始直愣愣地执行起摇杆的命令。',
    );
    await era.printAndWait(
      '在有力的抓取与平稳的搬运后，大得过分的爪子轻易地将被捏得有点变形的礼品盒扔了出来。',
    );
    await era.printAndWait([
      '心惊胆战地摸出随便抓到的东西，',
      urara.get_colored_name(),
      ' 带着一点侥幸心理翻开了这正好能藏进书包里的小盒。',
    ]);
    await era.printAndWait([
      '隔着透明开窗，尽管比橱窗里更加的狰狞器具小了很多，',
      urara.get_colored_name(),
      ' 还是被眼前的「实物」震慑到了。',
    ]);
    await era.printAndWait([
      '这是',
      urara.sex,
      '在 ',
      sys_get_colored_callname(52, 30),
      ' 与 ',
      sys_get_colored_callname(52, 19),
      ' 偷藏的奇怪漫画里所见过的「玩具」，但又是不同的款式。',
    ]);
    await era.printAndWait([
      '带有尖头与椭圆身体的金属塞子在',
      urara.child_sex_title,
      '手中散发着寒气，由金属短杆连接的软质底座则下面又有着黑色的强力吸盘。',
    ]);
    await era.printAndWait([
      '在拿到手中后，小',
      urara.uma_sex_title,
      '才意识到它足有一颗瘦长的梨子那么大，这绝对不是「新手」使用的东西。',
    ]);
    await era.printAndWait([
      '像是迷失了心智，',
      urara.teen_sex_title,
      '的樱瞳被灯光映照成了魅惑的深粉色，',
      urara.sex,
      '就这样失神地在角落中撩起了自己裙摆与上衣……',
    ]);
    await urara.say_and_wait('没、没问题的……只是、只是尝试一下而已……');
    await era.printAndWait([
      '一边小声地说服自己，',
      urara.get_colored_name(),
      ' 按照包装上的指示，将吸盘固定在地板上。',
    ]);
    await era.printAndWait([
      urara.teen_sex_title,
      '在阴影中用一只手解开裙子、褪下安全裤与内裤扔到一边，另一只手则简单撩了下尾巴。',
    ]);
    await era.printAndWait([
      '学着漫画里受虐的女主的样子，下着赤裸的小',
      urara.uma_sex_title,
      '以四肢着地的姿势缓缓地俯下身子。',
    ]);
    await era.printAndWait([
      '暴露在冰冷空气中的后穴同小穴一样紧张地收放着，颤抖着对准了肛塞的金属尖端。',
    ]);
    era.println();
    if (era.get('exp:52:肛交次数') >= 10) {
      await era.printAndWait([
        '随着尖端冰凉的触感没入，',
        urara.teen_sex_title,
        '压抑着身体，想要耐心地吞下这枚稍显过分的长塞。',
      ]);
      await era.printAndWait([
        '但',
        urara.sex,
        '高估了自己的经验与性爱的耐性，也低估了这小小的',
        urara.sex_slave_title,
        '身体实际有多么的淫乱。',
      ]);
      await era.printAndWait(
        '随着双腿的脱力，菊穴在向下的重力中毫无准备地吞掉了整块的硕大金属……',
      );
    } else {
      await era.printAndWait([
        '尖端冰凉的触感令',
        urara.teen_sex_title,
        '刚要放松的菊穴一紧，也让',
        urara.sex,
        '找回了一丝理性的退意。',
      ]);
      await era.printAndWait(
        '但久经锻炼的双腿，却又敏感到在接触到身体的催情信号时就失去了力气。',
      );
      await era.printAndWait([
        urara.teen_sex_title,
        '以滑跪的姿势扑坐在地板上，硕大的肛塞在瞬间被整只吞入了后部……',
      ]);
    }
    era.println();
    await era.printAndWait([
      '连发出悲鸣的余地都没有的，小',
      urara.uma_sex_title,
      '便在突如其来的刺激中下身紧绷着向前摔去。',
    ]);
    await era.printAndWait([
      '底部吸盘在「噗」的一声中摆脱了地板的拉扯，',
      urara.get_colored_name(),
      ' 小小的身体重重地扑在了冰凉的地板上。',
    ]);
    await era.printAndWait([
      '天生淫乱的身体因异常性器的突入被连绵地推至顶点，大脑瞬间沦陷的小',
      urara.uma_sex_title,
      '喉咙中胡乱地挤着不成声的音节。',
    ]);
    await era.printAndWait(
      '以准备受孕的姿态无助的趴在地板上，大喘气的淫乱粉色着仿佛在低声的求饶，又像是淫荡的哀叫。',
    );
    await era.printAndWait(
      '就连支撑起身体的力量都消失了，手臂随着身体的摇摆无力地拖在地上；',
    );
    await era.printAndWait(
      '稚嫩的小脸就像是在经受凌辱般，被自己的身体按在地板上来回摩擦着；',
    );
    await era.printAndWait(
      '臀部与尾巴也如发情期中向肉棒俯首屈服的雌性般，在快感中不自觉地高高翘起着；',
    );
    await era.printAndWait(
      '天生淫乱的后穴此时更是像吮吸甜美的糖果般，贪婪地将硕大的球体不断向内吸紧。',
    );
    await era.printAndWait([
      '小',
      urara.sex_code - 1 ? '母马' : '公马',
      '发育过度的蜜臀虽没大到夸张，但厚实肥嫩的臀肉也在夹紧后将底座挤压变形，使其不留痕迹地包裹在了其中。',
    ]);
    await era.printAndWait(
      '混合着恐惧与快感的泪水、涎水与汗水，同双腿间无法抑制的爱液一同打湿了身下光滑的地砖。',
    );
    era.println();
    if (era.get('talent:52:乳房尺寸') > 0) {
      await era.printAndWait(
        '两团大白兔随着身体粗暴地颤抖着，发情的乳头如坏掉的水龙头般不受控制的挤出着白色的汁液。',
      );
      await era.printAndWait(
        '强烈的高潮接踵而至，白嫩的媚肉也榨出了多到令主人惊慌失措的奶水，就像是谁将半盒牛奶玩闹般地洒在了地上。',
      );
      await era.printAndWait(
        '如果没有提前撩起衣服、解开束胸的话，恐怕这对喷个不停地淫乳会从内部将布料浸透到不能见人的样子吧。',
      );
      era.println();
    }
    await era.printAndWait(
      '各种液体激烈且不间断地喷溅在墙角的瓷砖与地板上，最后在街机厅无人的角落里洇湿成一片。',
    );
    await era.printAndWait([
      '在几轮水声暂停后，拿回了一点力气和理智的小',
      urara.uma_sex_title,
      '终于想起了什么，开始努力地拖着淫秽的身体狼狈的爬行着……',
    ]);
    await era.printAndWait([
      '在一排排机器做支撑的搀扶行走下，',
      urara.get_colored_name(),
      ' 总算勉强适应了能在小腹按到硬物的身体。',
    ]);
    await era.printAndWait([
      '带着半遮半掩的淫荡模样，小',
      urara.uma_sex_title,
      '还是赶在 ',
      callname,
      ' 之前半爬着返回了约定等待的地方。',
    ]);
    await era.printAndWait([
      '而姗姗来迟的 ',
      me.get_colored_name(),
      ' 看着面色潮红还大喘着气的 ',
      urara.get_colored_name(),
      '，也惊讶地挑起了眉毛。',
    ]);

    era.printButton(
      '「怎么了？是有身体有些不舒服吗？难受的话就再休息一会吧……」',
      1,
    );
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      ' 当然已经多少猜出了什么，但为了 ',
      urara.get_colored_name(),
      ' 着想，现在也可能唯有装傻一途。',
    ]);
    await era.printAndWait([
      '面对装作毫不知情的 ',
      me.get_colored_name(),
      ' 的关心，已经无力思考的 ',
      urara.get_colored_name(),
      ' 也只是本能地按着颤抖地双腿。',
    ]);
    await era.printAndWait([
      '但挂起勉强笑容的',
      urara.sex,
      '，这次却意外坚决地说出了「没关系！」之类的话，并坚持要自己走回去。',
    ]);
    await era.printAndWait([
      '不过在一番拉扯后，实在没有自信经受住敏感的身体的小',
      urara.uma_sex_title,
      '还是勉强同意了 ',
      me.get_colored_name(),
      ' 的搀扶。',
    ]);
    await era.printAndWait([
      '本身就是装傻的 ',
      me.get_colored_name(),
      '，也在紧张地贴身帮扶担当时，尽量无视了',
      urara.sex,
      '所造成的其他异常：',
    ]);
    await era.printAndWait([
      '比如 ',
      urara.get_colored_name(),
      ' 起身的转椅上，留下了一滩圆形吸盘状的按压水渍；',
    ]);
    await era.printAndWait([
      '比如回家的路上，小',
      urara.uma_sex_title,
      '也总会因不自然的抽搐而慢下脚步；',
    ]);
    await era.printAndWait(
      '比如忘记拉上拉链的书包里，有着压痕的粉色盒子正随着颠簸一路若隐若现……',
    );

    await era.printAndWait([
      '直到 ',
      me.get_colored_name(),
      ' 带着跌跌撞撞的 ',
      urara.get_colored_name(),
      ' 回到宿舍时，还在颤抖的',
      urara.sex,
      '都没能对 ',
      me.get_colored_name(),
      ' 说出一句完整的话。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 也因为事情过于特殊，在发情的担当旁没有产生任何生理反应，虽然 ',
      me.get_colored_name(),
      ' 也庆幸外面时没做出节外生枝的举动。',
    ]);
    await era.printAndWait([
      '但是一低头，又看到了担当脚下还在不断拉出着银丝的 ',
      me.get_colored_name(),
      '，最终还是憋不住了……',
    ]);
    await era.printAndWait([
      '而看着 ',
      me.get_colored_name(),
      ' 落荒而逃的背影，还在滴答着淫水的 ',
      urara.get_colored_name(),
      ' 的脸上，却闪过了一丝……意犹未尽？',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '或许淫乱的小',
      urara.uma_sex_title,
      '，在某天会再次将手伸向角落里那台魔性的机器，也说不定……',
    ]);
    await in_urara.say_as_unknown_and_wait('呜……我不行了……');
    begin_and_init_ero(52);
    set_palam_to_max(52, part_enum.anal);
    await quick_make_love(
      new EroParticipant(52, part_enum.hand),
      new EroParticipant(52, part_enum.anal),
      false,
    );
    end_ero_and_train();
    sys_change_lust(0, get_random_value(lust_from_palam, 2 * lust_from_palam));
    sys_change_lust(52, get_random_value(lust_from_palam, 2 * lust_from_palam));
    era.add('exp:52:肛交次数', 1);
    switch (era.get('talent:52:淫臀')) {
      case -4:
        era.set('talent:52:淫臀', 0);
        break;
      case 0:
        era.set('talent:52:淫臀', 1);
    }
    era.set('talent:52:肠道敏感', 1);
  } else {
    switch (random_range) {
      case 0:
        await urara.say_and_wait('眼睛好花啊……为什么穿不过去啊，呜呃……');
        await era.printAndWait([
          '趴在Game Over的机台前，',
          urara.get_colored_name(),
          ' 的眼中的樱花此刻被转成了圈圈。',
        ]);
        await era.printAndWait([
          '经过几次勇敢的尝试后，不服输的 ',
          urara.get_colored_name(),
          ' 最终还是被高难STG眼花缭乱的弹幕击坠了。',
        ]);
        break;
      case 1:
        await urara.say_and_wait(
          '格斗游戏的机台总有很多人！不过我可以理解哦！因为大家的必杀技真的非常帅气！',
        );
        await era.printAndWait([
          '一边以可爱的样子模仿着格斗人物的动作，',
          urara.get_colored_name(),
          ' 一边带着 ',
          me.get_colored_name(),
          ' 坐到了游戏机台前。',
        ]);
        await era.printAndWait([
          '不过 ',
          urara.get_colored_name(),
          ' 似乎还是不擅长格斗游戏，得想想这次该怎么放点水了……',
        ]);
        break;
      case 2:
        await urara.say_and_wait([
          callname,
          '！这里也在卖游戏光盘呢！啊！这是 ',
          sys_get_colored_callname(52, 3),
          ' 和 ',
          sys_get_colored_callname(52, 24),
          ' 都最近喜欢的游戏！',
        ]);
        await era.printAndWait([
          '拿起一份最近很火热的游戏，',
          urara.get_colored_name(),
          ' 的笑容与恐怖的封面形成了鲜明的反差。',
        ]);
        await era.printAndWait([
          '不过 ',
          me.get_colored_name(),
          ' 也不觉得 ',
          get_chara_talk(3).get_colored_name(),
          ' 和 ',
          get_chara_talk(24).get_colored_name(),
          ' 会喜欢恐怖游戏，恐怕',
          urara.couple_title,
          '又是人云亦云的顺便入手了吧。',
        ]);
        break;
      case 3:
        await urara.say_and_wait(
          '那个样子确实很难移开视线啊……大家都喜欢那样的事吗？',
        );
        await urara.say_and_wait([
          callname,
          ' 会想看 ',
          urara.get_colored_name(),
          ' 穿成大人的样子、跳大人的舞吗？如果 ',
          callname,
          ' 想的话……',
        ]);
        await era.printAndWait([
          '目光被跳舞机待机画面上不断闪过的大尺度舞蹈动画所吸引，',
          urara.get_colored_name(),
          ' 拽着 ',
          me.get_colored_name(),
          ' 衣角的手力度又加重了几分。',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '不管玩什么游戏，果然跟 ',
          callname,
          ' 一起玩才会更开心啊！',
        ]);
        await era.printAndWait([
          '看着路过的学生与机台的彩灯，',
          urara.get_colored_name(),
          ' 与 ',
          me.get_colored_name(),
          ' 十指相合，幸福的靠在 ',
          me.get_colored_name(),
          ' 的身旁。',
        ]);
        break;
      case 5:
        await urara.say_and_wait('今天普通的夹娃娃吧！普通的夹娃娃就好了！');
        await era.printAndWait([
          urara.get_colored_name(),
          ' 脸颊微红的宣言道，在 ',
          me.get_colored_name(),
          ' 认真的夹娃娃时突然钻到了胸前，用小嘴轻轻偷袭了 ',
          me.get_colored_name(),
          ' 的颈根。',
        ]);
    }
  }
};

handlers[1] = async (urara, me, in_urara, callname, edu_marks) => {
  await era.printAndWait([
    '为了补充训练员室冰箱内缺少的食材，',
    me.get_colored_name(),
    ' 与 ',
    urara.get_colored_name(),
    ' 一同来到商店街进行采购。',
  ]);
  await era.printAndWait([
    '本来只是来采购食品的，但不知为何准备回去时却被聚集的人们吸住了视线。',
  ]);
  await era.printAndWait(
    '或许也被气氛所感染了，逐渐变得相似的担当与训练员也默契的钻进了人群。',
  );
  await era.printAndWait(
    '跟随着摇杆转动的多边形盒子在清脆的响声中停止，又有位伤心人多了包纸巾……',
  );
  await me.say_and_wait(
    '但是商店街抽奖，记得没错的话是需要抽奖券的吧，那么我们还是……？',
  );
  await era.printAndWait([
    '结果刚回过头，',
    me.get_colored_name(),
    ' 就看到了 ',
    urara.get_colored_name(),
    ' 在口袋中找寻一番后，变魔术般地摸出了一张抽奖券。',
  ]);
  await era.printAndWait([
    '……嗯，如果是商店街的小偶像 ',
    urara.get_colored_name(),
    ' 的话，倒也是件非常合理的事。',
  ]);
  await era.printAndWait([
    '看着眼神闪闪发光跃跃欲试的 ',
    urara.get_colored_name(),
    '，',
    me.get_colored_name(),
    ' 也不动声色地对',
    urara.sex,
    '比了个大拇指。',
  ]);
  await urara.say_and_wait([callname, '！要一起转了哦！一二——！']);
  await era.printAndWait([
    '在兴高采烈的 ',
    urara.get_colored_name(),
    ' 的邀请下，',
    me.get_colored_name(),
    ' 上前与担当一同摇下摇杆。',
  ]);
  await era.printAndWait([
    '在小',
    urara.uma_sex_title,
    '充满期待的注视中，盒子在旋转中不断发出着不同的脆响，随后——',
  ]);
  switch (get_random_value(1 - !edu_marks.ticket, 4 + !edu_marks.spe_item)) {
    case 0:
      edu_marks.ticket = 1;
      await say_by_passer_by_and_wait(
        '工作人员A',
        '恭喜啊小乌拉拉！抽到特等奖『温泉旅游券』了！！',
      );
      await era.printAndWait([
        '在主持抽奖的工作人员的祝贺声中，一张温泉旅馆的旅行券被递到了 ',
        urara.get_colored_name(),
        ' 手中。',
      ]);
      await era.printAndWait([
        '不过券上的温泉旅馆倒也眼熟，似乎是一直与中央特雷森有着合作的店家。',
      ]);
      await urara.say_and_wait('温泉？是说我能去泡温泉了吗？太好了！');
      await urara.say_and_wait([
        callname,
        '！我们要哪天去？明天？后天？还是大后天？还是说……',
      ]);

      era.printButton('「先留着当作比赛后的奖励怎么样？」', 1);
      await era.input();

      await era.printAndWait([
        '考虑到现在时机太早，又考虑到要让 ',
        urara.get_colored_name(),
        ' 有继续努力的兴致，',
        me.get_colored_name(),
        ' 如此建议道。',
      ]);
      await urara.say_and_wait([
        '嗯！就这样决定好了！那券就由 ',
        callname,
        ' 收着吧！',
      ]);
      await urara.say_and_wait([
        '我也会努力拿到奖励的！到时候要一起开心地去温泉吧！',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 点点头，将温泉券笑着交到了 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      await urara.say_and_wait('哼哼～真期待哦，以后收到奖励的那天！');
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着 ',
        urara.get_colored_name(),
        ' 对未来充满期待的开心笑颜，手中券的分量仿佛也变重了。',
      ]);
      await era.printAndWait([
        '为了能够那合适的时机能够早日到来，要和 ',
        urara.get_colored_name(),
        ' 一起加油了。',
      ]);
      break;
    case 1:
      await say_by_passer_by_and_wait(
        '工作人员A',
        '恭喜抽到一等奖！奖品是『上等胡萝卜汉堡排』！',
      );
      await era.printAndWait(
        '随后，一盘还冒着热气的胡萝卜汉堡排便端到了两人面前。',
      );
      await urara.say_and_wait([
        '哦！',
        callname,
        '，这个看着就很好吃呢！我可以现在就尝尝它吗？',
      ]);
      await era.printAndWait(
        '嗯？的确看上去就很上等，甚至在视觉上闪着光啊，不过……',
      );

      era.printButton('「这里不太方便，总之还是带回学园里吃吧！」', 1);
      await era.input();

      await urara.say_and_wait(['说的也是哦！那一起回去吧 ', callname, '！']);
      await era.printAndWait([
        '在回到学园后，',
        urara.get_colored_name(),
        ' 与 ',
        me.get_colored_name(),
        ' 一同分享了这份看上去就很厉害的汉堡排。',
      ]);
      await era.printAndWait(
        '不过不管几次都觉得很神奇啊，明明是早就准备好的成品，竟然还能有这种味道。',
      );
      await era.printAndWait(
        '如果在训练员室里就能直接做出相同的味道的话就好了……有那种办法吗？',
      );
      break;
    case 2:
      await say_by_passer_by_and_wait(
        '工作人员A',
        '恭喜！二等奖，奖品是『一筐胡萝卜』！',
      );
      await era.printAndWait([
        '虽然是二等奖，但对 ',
        urara.get_colored_name(),
        ' 来说这个才是最值得开心的吧。',
      ]);
      await era.printAndWait([
        '正如 ',
        me.get_colored_name(),
        ' 所想的那样，',
        urara.get_colored_name(),
        ' 一边感谢一边接过了萝卜，随后高兴地转向了 ',
        me.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！回去之后我们一起把胡萝卜分给大家吧！',
      ]);
      await urara.say_and_wait(
        '要分的人很多呢！不过首先要一起把这些胡萝卜抱回去才行呢！',
      );

      era.printButton('「嗯，这些都让我来拿吧！」', 1);
      await era.input();

      await era.printAndWait([
        '从 ',
        urara.get_colored_name(),
        ' 那里接过了那一大筐胡萝卜后，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 一起踏上了回去的路。',
      ]);
      await era.printAndWait([
        '但在回去的路上，你们又受到了商店街的大叔和阿姨们热烈的祝福与关照。',
      ]);
      await era.printAndWait([
        '不过现在这个分量，就算发也很难发完吧？',
        urara.get_colored_name(),
        ' 还真是受欢迎的好孩子啊……',
      ]);
      await era.printAndWait([
        '抱着不知不觉中变多了不少的胡萝卜，',
        me.get_colored_name(),
        ' 冒出了点『幸福的烦恼』。',
      ]);
      break;
    case 3:
      await say_by_passer_by_and_wait(
        '工作人员A',
        '三等奖！奖品是『一根胡萝卜』！」',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' 一边向工作人员道谢，一边高兴地接过了胡萝卜。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 知道一根胡萝卜 ',
        urara.get_colored_name(),
        ' 也会开心，可总觉得如果不做点什么的话，心就静不下来。',
      ]);
      await era.printAndWait([
        '但就在 ',
        me.get_colored_name(),
        ' 还犹豫着该说些什么时，',
        urara.get_colored_name(),
        ' 却率先行动起来。',
      ]);
      await era.printAndWait([
        '『啪』的一声脆响，',
        urara.get_colored_name(),
        ' 将胡萝卜从中间掰成两半，开心的把更粗的那半递向了 ',
        me.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        '没关系的，就算只有一根胡萝卜也是胡萝卜！',
        callname,
        '！这块更大的给你吃哦！',
      ]);

      era.printButton('「……谢谢。」', 1);
      await era.input();

      await era.printAndWait([
        '又一次被 ',
        urara.get_colored_name(),
        ' 触动的 ',
        me.get_colored_name(),
        ' 原本想好了很多话，可当下能说出的却只剩一句简单的感谢。',
      ]);
      await urara.say_and_wait(['嘿嘿～不客气哦 ', callname, '！']);
      await era.printAndWait([
        '但 ',
        urara.get_colored_name(),
        ' 并不介意，带着一如既往的笑容，小',
        urara.uma_sex_title,
        '将对半分的萝卜塞到了 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      await era.printAndWait([
        '在周围人同样带有善意与被治愈的目光中，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 分享了那根似乎有了特别意义的胡萝卜。',
      ]);
      await era.printAndWait([
        '不管以后外表变成什么样，',
        urara.get_colored_name(),
        ' 也一直会是善良的好孩子吧。',
      ]);
      await era.printAndWait([
        '望着回去时的天空，',
        me.get_colored_name(),
        ' 如此相信着。',
      ]);
      break;
    case 4:
      await urara.say_and_wait('哎呀，是纸巾啊……！');
      await era.printAndWait([
        '在接过纸巾后，看起来有点失落的 ',
        urara.get_colored_name(),
        ' 却反过来开始安慰起 ',
        me.get_colored_name(),
        ' 来。',
      ]);
      await urara.say_and_wait([
        callname,
        '！不要失落哦，抽奖很意思，纸巾也很不错哦！',
      ]);
      await era.printAndWait([
        '虽然 ',
        urara.get_colored_name(),
        ' 在很用力地安慰',
        urara.sex,
        '的训练员，但那副样子还是更像在安慰自己。',
      ]);

      era.printButton(`「嗯，没关系的，${callname} 不会伤心的。」`, 1);
      await era.input();

      await era.printAndWait([
        '听到 ',
        me.get_colored_name(),
        ' 的回应，',
        urara.get_colored_name(),
        ' 开心地笑了起来，但在维持了一会儿后还是变得勉强起来。',
      ]);
      await urara.say_and_wait('不过，果然还是想吃胡萝卜啊……');
      await era.printAndWait([
        '虽然在努力隐藏着失落，',
        urara.get_colored_name(),
        ' 的耳朵还是垂了下来。',
      ]);
      await era.printAndWait([
        '结果还是变得有点没精神了啊。在回去的路上，',
        me.get_colored_name(),
        ' 安慰地摸着 ',
        urara.get_colored_name(),
        ' 的头。',
      ]);
      break;
    case 5:
      edu_marks.spe_item++;
      await say_by_passer_by_and_wait(
        '工作人员A',
        '哦！是特殊奖啊，稍等一下啊！',
      );
      await era.printAndWait(
        '主持抽奖的工作人员转身在桌子下面翻找一番后，拿出了一支盒装的圆头电动按摩棒。',
      );
      await era.printAndWait([
        '而 ',
        urara.get_colored_name(),
        ' 在接过盒子端详了一会儿后，像是突然想起了什么般抬起头。',
      ]);
      await urara.say_and_wait([
        '啊，我知道这个哦！',
        sys_get_colored_callname(52, 61),
        ' 也有一个！大家还会互相借着用——',
      ]);
      await era.printAndWait(
        '按摩棒竟然还会互相借着用，关系真好啊，不过为什么不自己买一个呢？',
      );
      await era.printAndWait([
        '不过就算 ',
        me.get_colored_name(),
        ' 的问题没说出口，',
        urara.get_colored_name(),
        ' 也紧接着在',
        urara.sex,
        '的下半句给出了答案。',
      ]);
      await urara.say_and_wait([
        '嗯！大家晚上的时候会用它来顶在腿之间呢！那个时候大家还会发出那种、那种……',
      ]);
      await era.printAndWait([
        '随着小',
        urara.uma_sex_title,
        '想起了什么的停顿，一抹羞红也顺着脸颊悄悄爬上了 ',
        urara.get_colored_name(),
        ' 的头顶。',
      ]);
      await urara.say_and_wait([
        '大家都不怎么穿衣服，还会发出很、很像大人的声音，那种……',
      ]);

      era.printButton('「……？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' 继续支支吾吾地说完后，',
        me.get_colored_name(),
        ' 与工作人员甚至周围的人的动作全都停住了动作。',
      ]);
      await era.printAndWait([
        '而怀疑着自己是不是说错了什么，',
        urara.get_colored_name(),
        ' 也在一愣之后，紧张地环顾起突然安静得可怕的人群。',
      ]);
      await urara.say_and_wait([
        '诶？不是这样的吗？可 ',
        sys_get_colored_callname(52, 61),
        ' 确实会那样用这个，',
        sys_get_colored_callname(52, 1),
        ' 和 ',
        sys_get_colored_callname(52, 14),
        ' 也……',
      ]);
      await urara.say_and_wait([
        '不、不过用完大家都会露出很舒服的表情哦！还会出很多汗！那、那个……',
      ]);
      await era.printAndWait([
        '伴随着周围逐渐密集的窃窃私语，',
        urara.get_colored_name(),
        ' 还在表情无辜又羞涩的说着什么。',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await era.printAndWait('不行，再这样下去就要出现范围性社会死亡了！');
      await era.printAndWait([
        '意识到情况不妙，',
        me.get_colored_name(),
        ' 马上与也反应过来的工作人员交换了一个眼神。',
      ]);
      await era.printAndWait([
        '随后在工作人员用来转移注意力的吆喝声中，',
        me.get_colored_name(),
        ' 拉起还想说什么的担当逃离了现场。',
      ]);
      await era.printAndWait([
        '在一路快跑回到特雷森，并将 ',
        urara.get_colored_name(),
        ' 放到宿舍门口后，',
        me.get_colored_name(),
        ' 终于松了口气。',
      ]);
      await era.printAndWait([
        '不过在离开前，',
        urara.get_colored_name(),
        ' 突然开始支支吾吾但又异常坚决地向 ',
        me.get_colored_name(),
        ' 索要起那根按摩棒。',
      ]);
      await era.printAndWait([
        '而被小',
        urara.uma_sex_title,
        '扯住衣服，走不了也拗不过的 ',
        me.get_colored_name(),
        '，还是无奈地将按摩棒交给了 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '虽然在担当撒手的瞬间 ',
        me.get_colored_name(),
        ' 就后悔了，可现在去追跳进宿舍的',
        urara.sex,
        '也已是不可能的事了。',
      ]);
      await era.printAndWait(
        '正处于好奇心的年龄什么都想尝试倒也无可厚非，但果然这个还是……',
      );
      await era.printAndWait([
        '之后的话，还是找个机会和 ',
        get_chara_talk(61).get_colored_name(),
        ' 说点什么吧。',
      ]);
      era.drawLine();
      await in_urara.say_as_unknown_and_wait(
        '……不过，应该不用担心，这或许都是年轻时犯下的错误吧？',
      );
      await print_event_name('特殊奖品', urara);
      era.set('talent:52:工口好奇', -1);
  }
};

require('#/event/daily/daily-events-52/out-shopping-sub-events')(handlers);

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const love = era.get('love:52'),
    temp = await select_action_in_shopping_street();
  let random_range = 2;
  if (love === 100) {
    random_range = 5;
  } else if (love >= 75) {
    random_range = 4;
  } else if (love >= 50) {
    random_range = 3;
  }
  hook.arg = temp <= 1;
  await handlers[temp](
    get_chara_talk(52),
    get_chara_talk(0),
    get_chara_talk(52, chara_colors[52][1]),
    sys_get_callname(52, 0),
    new UraraEduMarks(),
    random_range,
    love,
  );
};
