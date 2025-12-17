const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  if (!edu_marks.lets_slp && Math.random() < 0.3) {
    edu_marks.lets_slp = 1;
    await print_event_name('来睡觉吧！', urara);
    await era.printAndWait([
      '刚进到训练员室内，',
      me.get_colored_name(),
      ' 就看见了睡姿有点过于舒适了的 ',
      urara.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      '是因为训练员室里太舒服了，或者说小担当已经把这里当成「家」一样的地方了？',
    );
    await era.printAndWait([
      '将脱下的衣服随意在旁边搭成一堆，此时的',
      urara.sex,
      '全身上下只穿着紧致的粉色运动内衣。',
    ]);
    await era.printAndWait([
      '樱色的发丝与尾巴自然的散开在身下，小巧可爱的耳朵也放松地摆动着。',
    ]);
    await era.printAndWait([
      '可爱的娃娃脸上带着安心的神情，在沉睡中自然伸展身体的小',
      urara.get_uma_sex_title(),
      '，肌肤在灯光反射着健康的光泽。',
    ]);
    await era.printAndWait([
      '紧身的内衣微微勒进',
      urara.get_teen_sex_title(),
      '柔软的身体中，娇嫩的肉感与成长的曲线也在这幅似乎含苞待放的身体上达成了微妙平衡。',
    ]);
    if (era.get('talent:52:乳房尺寸') > 0) {
      await era.printAndWait([
        '因为某些原因过度丰满的乳房更是将上身仅剩的布料塞得满满当当，在小',
        urara.get_uma_sex_title(),
        '身上自由的挺起着。',
      ]);
    }
    await era.printAndWait([
      '躺在训练员室的沙发床上，',
      urara.get_colored_name(),
      ' 就这样毫无防备的展示着自己可人的身体。',
    ]);
    await era.printAndWait([
      '面对如此没有戒心的可爱生物，与小',
      urara.get_uma_sex_title(),
      '初次相遇并同床共枕时类似的想法浮现在了 ',
      me.get_colored_name(),
      ' 的脑中。',
    ]);
    await era.printAndWait([
      '这样柔软的小动物，如果不是会打扰到',
      urara.sex,
      '，真想过去摸摸看，而且担当这个样子，的确也让别人感觉到睡意了。',
    ]);
    await era.printAndWait([
      '如果不是还有工作的话，陪 ',
      urara.get_colored_name(),
      ' 躺一会儿或许也不错吧？',
    ]);
    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 早已经是大人了，就算 ',
      urara.get_colored_name(),
      ' ',
      urara.sex,
      '真的允许，大概也不能去做这般任性的事……',
    ]);
    await era.printAndWait('不过这无遮无拦的睡姿，万一凉着肚子的话就不好了。');
    await era.printAndWait([
      '这么想着，',
      me.get_colored_name(),
      ' 拿起了一旁的毯子，为了不吵到 ',
      urara.get_colored_name(),
      ' 打算悄悄地靠了过去。',
    ]);
    await urara.say_and_wait(['嗯？', callname, '……？']);
    await era.printAndWait([
      '摇晃着敏感的小耳朵，捕捉到声音的无防备',
      urara.get_teen_sex_title(),
      '浅浅的睁开眼睛，用朦胧的目光辨认着准备帮',
      urara.sex,
      '盖毯子的 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '睡得迷迷糊糊的小手在摸索一番后攀上了 ',
      me.get_colored_name(),
      ' 的手腕。',
    ]);
    await era.printAndWait([
      '在小',
      urara.get_uma_sex_title(),
      '不收力量的拉扯下，',
      me.get_colored_name(),
      ' 连带着毯子一起被担当拉倒在了床上。',
    ]);
    await era.printAndWait([
      '腰部在躺下的瞬间就被紧紧地环住，此时的 ',
      urara.get_colored_name(),
      ' 将自己的 ',
      callname,
      ' 当成了安眠的抱枕。',
    ]);
    era.println();
    if (era.get('relation:52:0') > 150 && edu_marks.loop < 2) {
      await urara.say_and_wait(['诶嘿嘿～是 ', callname, ' 的感觉……']);
      await era.printAndWait([
        '完全是在睡梦之中的反应，',
        urara.get_colored_name(),
        ' 满足地蹭着 ',
        me.get_colored_name(),
        ' 的身体。',
      ]);
      await era.printAndWait([
        '随着微弱的呼吸的趋于平缓，紧紧抱住 ',
        me.get_colored_name(),
        ' 的',
        urara.get_teen_sex_title(),
        '安心地陷入了深层睡眠。',
      ]);
    } else {
      await urara.say_and_wait('唔……？好像不够软诶……');
      await era.printAndWait([
        '似乎是因为抱枕不够柔软，',
        urara.get_colored_name(),
        ' 在睡梦中有点不满地撅起了小嘴。',
      ]);
      await era.printAndWait([
        '只是明明在对 ',
        me.get_colored_name(),
        ' 的不够体贴小声抱怨着，',
        urara.get_colored_name(),
        ' 却并没有放手的意思。',
      ]);
    }
    era.println();
    await era.printAndWait([
      '埋在脖颈之间的发丝散发着清香，小',
      urara.get_uma_sex_title(),
      '仿佛拥有宁神功能的芬芳顺着肌肤相亲调皮地钻进了 ',
      me.get_colored_name(),
      ' 的鼻腔。',
    ]);
    await era.printAndWait(
      '视线随着精神的放松逐渐变得模糊，双手甚至连还没来得盖上的毯子都要抓不住了。',
    );
    await era.printAndWait([
      '别说还有工作要做，一躺下睡意便完全抵挡不住了。不过和 ',
      urara.get_colored_name(),
      ' 一起睡也不算什么坏事，就这样先睡一觉也不迟。',
    ]);
    await era.printAndWait(
      '再次醒来时工作一定会堆得和山一样高吧，不过磨刀也不费砍柴功吧……',
    );
    await era.printAndWait([
      '努力说服着自己，',
      me.get_colored_name(),
      ' 在睡着前拉起毯子盖在两人身上，随后便陪 ',
      urara.get_colored_name(),
      ' 一起跳进了难得的休息时光。',
    ]);
    era.drawLine();
    await get_chara_talk(52, chara_colors[52][1]).say_as_unknown_and_wait(
      '真是不知羞耻得让人嫉妒……没有，真的没有想加入……',
    );
    hook.override = true;
    era.println();
    get_attr_and_print_in_event(52, undefined, undefined, [0, 300], true) &&
      (await era.waitAnyKey());
    sys_like_chara(52, 0, 10, true, 5) && (await era.waitAnyKey());
  } else {
    const talk_arr = [
      async () => {
        await urara.say_and_wait([
          callname,
          '！帮我拿一下柜子上的点心可以吗？嗯！谢谢 ',
          callname,
          '！我会节制的！',
        ]);
        await era.printAndWait([
          '在接受了 ',
          me.get_colored_name(),
          '「要节制」的提醒后，',
          urara.get_colored_name(),
          ' 也高兴地从 ',
          me.get_colored_name(),
          ' 手中接过了点心盒。',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '呼诶～好累啊……啊！谢谢 ',
          callname,
          '！嘿嘿～是冰镇的啊！',
        ]);
        await era.printAndWait([
          '将毛巾搭在头顶，刚结束锻炼的 ',
          urara.get_colored_name(),
          ' 接过了 ',
          me.get_colored_name(),
          ' 递来的运动饮料。',
        ]);
      },
      async () => {
        await urara.say_and_wait('今天的心情～也是『乌拉拉』～');
        await era.printAndWait([
          '哼着原创的歌，',
          urara.get_colored_name(),
          ' 开心地在室内的白板上用油性笔涂抹着什么。',
        ]);
      },
    ];
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait('嗯啊～对不起……呜……乌拉拉、会小声一点的……');
        await era.printAndWait([
          '明明只是在做按摩腿脚，',
          urara.get_colored_name(),
          ' 却在不停地发出令人脸红心跳的声音……',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '是想要看大家的比赛录像吗？嗯！那我也和 ',
          callname,
          ' 一起看吧！',
        ]);
        await era.printAndWait([
          '坐进 ',
          me.get_colored_name(),
          ' 的怀中，',
          urara.get_colored_name(),
          ' 乖巧地替 ',
          me.get_colored_name(),
          ' 打开了训练员室的电视。',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '嘿嘿……',
          callname,
          '，要一直、一直记得彼此哦……',
        ]);
        await era.printAndWait([
          '因喘不过气而醒来，',
          me.get_colored_name(),
          ' 发现 ',
          urara.get_colored_name(),
          ' 正紧压在 ',
          me.get_colored_name(),
          ' 的身上低声耳语着什么……',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }
};
