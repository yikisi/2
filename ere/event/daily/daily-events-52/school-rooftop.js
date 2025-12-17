const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    urara = get_chara_talk(52);
  if (!edu_marks.rof_time && Math.random() < 0.3) {
    edu_marks.rof_time = 1;
    await print_event_name('朦胧的天台时间', urara);
    await era.printAndWait([
      '哪怕有所成长，现在的 ',
      urara.get_colored_name(),
      ' 还是没有完全改掉小孩子的生活习惯。',
    ]);
    await era.printAndWait([
      '是之前太累了？明明只是用餐时间稍微晚了一点，',
      urara.get_colored_name(),
      ' 就已经准备进入犯困模式了。',
    ]);
    await era.printAndWait([
      '望着担当在餐前变得昏昏欲睡的小脸，',
      me.get_colored_name(),
      ' 拿出两人的便当盒，并在天台的长椅上腾出一段空间。',
    ]);
    await era.printAndWait([
      '虽然小',
      urara.get_uma_sex_title(),
      '主观上想要快点成为大人，但距离真的长大还是需要一点时间。',
    ]);
    await era.printAndWait([
      '不过再怎么说饭还是要按时吃的，看着 ',
      urara.get_colored_name(),
      ' 困倦的小脸，',
      me.get_colored_name(),
      ' 简单思考了一下。',
    ]);
    await era.printAndWait('倒也不是没有办法，只是……');

    era.printButton('「乌拉拉，实在困了的话就放松一下，我来喂你吧。」', 1);
    await era.input();

    await era.printAndWait([
      '在听到 ',
      me.get_colored_name(),
      ' 的提案后，晕沉沉的 ',
      urara.get_colored_name(),
      ' 先是愣了一下，揉着眼睛对 ',
      me.get_colored_name(),
      ' 勉强露出了一个睡意朦胧的笑容。',
    ]);
    era.println();
    if (relation >= 150) {
      await era.printAndWait([
        '在长椅上乖巧地坐好，',
        urara.get_colored_name(),
        ' 就像等待喂食的雏鸟般羞涩地闭上眼睛，张开了小嘴。',
      ]);
      await era.printAndWait([
        '拿出筷子，轻轻夹起一块蛋卷，充当鸟妈妈的 ',
        me.get_colored_name(),
        ' 小心翼翼地将食物送到了小鸟嘴中。',
      ]);
      await era.printAndWait([
        '轻轻咬下一半，',
        urara.get_colored_name(),
        ' 闭着眼睛细细地品尝起 ',
        callname,
        ' 喂来的饭菜。',
      ]);
      await era.printAndWait([
        '而在安心地将饭菜咽下后，小',
        urara.get_uma_sex_title(),
        '心满意足的将筷子上的另一半也吃了下去。',
      ]);
    } else {
      await era.printAndWait([
        '小',
        urara.get_uma_sex_title(),
        '看上去有点不太情愿，但疲惫占了上风的',
        urara.sex,
        '还是离 ',
        me.get_colored_name(),
        ' 更近了一点。',
      ]);
      await era.printAndWait([
        '还是不确定 ',
        urara.get_colored_name(),
        ' 会不会吃，',
        me.get_colored_name(),
        ' 试探地用筷子夹起一块炸肉，也向担当那边靠了过去。',
      ]);
      await era.printAndWait([
        '即使有点犹豫，但在闻到炸物香味之后，',
        urara.get_colored_name(),
        ' 还是乖乖地张开小嘴咬住了肉块。',
      ]);
      await era.printAndWait([
        '随着小小的咀嚼与吞咽声，小',
        urara.get_uma_sex_title(),
        '还是在 ',
        me.get_colored_name(),
        ' 的投喂下逐渐地放下心来。',
      ]);
    }
    era.println();
    await era.printAndWait('这次的味道还不错真是太好了。');
    await era.printAndWait([
      '等待着担当的细嚼慢咽，',
      me.get_colored_name(),
      ' 用筷子夹起了另一道菜。',
    ]);
    await era.printAndWait([
      '不断细心地喂着 ',
      urara.get_colored_name(),
      '，一边拿出纸巾帮',
      urara.sex,
      '擦着嘴角，一种微妙的感觉逐渐包围着 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '本来就比同龄人更显年幼，现在又因失去活力而变得软软糯糯后，小',
      urara.get_uma_sex_title(),
      '就更像个真正的小孩子了。',
    ]);
    await era.printAndWait([
      '但还真可爱啊，要是 ',
      urara.get_colored_name(),
      ' 能一直维持像只离不开人的小宠物的样子，或许也不错？',
    ]);
    await era.printAndWait([
      '在胡思乱想的时间里，手中的便当盒也在 ',
      me.get_colored_name(),
      ' 对小动物的喂食中里逐渐清空了。',
    ]);
    await era.printAndWait(
      '只是，在这朦胧的用餐时间后……该说果然还是小孩子吗？',
    );
    await era.printAndWait([
      '在被满足地喂饱之后，本来就摇摇晃晃的 ',
      urara.get_colored_name(),
      ' 好像因为食困更加支撑不住了。',
    ]);
    await era.printAndWait('虽然会变成这样，大概依旧在担当训练员的意料之中。');

    era.printButton(
      '「现在先闭一会儿眼睛吧，有事的话我会提前叫乌拉拉的。」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '面对即将倒下的担当，',
      me.get_colored_name(),
      ' 带着三分无奈地拍了拍大腿。',
    ]);
    await era.printAndWait([
      '已经顾不上想法和态度什么的了，在得到 ',
      me.get_colored_name(),
      ' 的休息建议后，小',
      urara.get_uma_sex_title(),
      '立刻放松了强撑的身体。',
    ]);
    await era.printAndWait([
      '在迫不及待地伸了个懒腰后向 ',
      me.get_colored_name(),
      ' 倒去，枕着 ',
      me.get_colored_name(),
      ' 的大腿，蜷缩在天台长椅上，',
      urara.get_colored_name(),
      ' 很快就睡熟了。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 果然还是个孩子吧？不过也正因',
      urara.sex,
      '是这样的好孩子，今天的小',
      urara.get_uma_sex_title(),
      '治愈力也是一等一的。',
    ]);
    await era.printAndWait([
      '抚摸着在 ',
      me.get_colored_name(),
      ' 的膝盖上平稳地呼吸着的粉色小动物，',
      me.get_colored_name(),
      ' 也舒服地拿起了自己那份便当。',
    ]);
    await era.printAndWait('今天的天气真不错啊。');
    await era.printAndWait([
      '虽然 ',
      urara.get_colored_name(),
      ' 可能会拒绝，但两人的便当盒，今天都由',
      urara.sex,
      '的 ',
      callname,
      ' 来清理吧。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('唉，真好啊……不，才没有羡慕……');
    hook.override = true;
    era.println();
    get_attr_and_print_in_event(52, undefined, 0, [300], true) &&
      (await era.waitAnyKey());
    sys_like_chara(52, 0, 10, true, 5) && (await era.waitAnyKey());
  } else {
    let random_range = 2;
    if (love === 100) {
      random_range = 5;
    } else if (love >= 75) {
      random_range = 4;
    } else if (love >= 50) {
      random_range = 3;
    }
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          callname,
          ' 你看，今天的便当里加了很好吃的蔬菜！嗯！是 ',
          sys_get_colored_callname(52, 61),
          ' 给我做的！',
        ]);
        await era.printAndWait([
          '看着外表有些焦但意外还不错的饭菜，',
          me.get_colored_name(),
          ' 在心里向担当那妈妈般的舍友表达着感谢。',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 15),
          ' 经常会在这里练歌，但',
          urara.sex,
          '会怕打扰到别人，所以用餐时间不会来哦！',
        ]);
        await era.printAndWait([
          '正如 ',
          urara.get_colored_name(),
          ' 所说，大家也都是好孩子啊。',
        ]);
        break;
      case 2:
        await urara.say_and_wait(
          '便当很好吃！空气也很清新！但是……为什么要在天台吃便当来着？',
        );
        await era.printAndWait('对啊，说起来为什么要在天台上吃便当来着？');
        await era.printAndWait([
          '在突然获得了相同的疑问后，',
          me.get_colored_name(),
          ' 与 ',
          urara.get_colored_name(),
          ' 一同陷入了某些奇妙的思考。',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '听说 ',
          sys_get_colored_callname(52, 32),
          ' ',
          urara.sex,
          '会卖一些特别的调味剂……那到底会是什么味道的？',
        ]);
        await era.printAndWait([
          '小声说着特别的话题的 ',
          urara.get_colored_name(),
          '，不知为何面色也变得像是在遐想什么般恍惚起来。',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '嘿嘿~今天的便当是我亲手做的哦！一起来吃吧 ',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '幸福地笑着，',
          urara.get_colored_name(),
          ' 摆开双人份便当盒，将青涩但满含爱意的菜品铺在 ',
          me.get_colored_name(),
          ' 的面前。',
        ]);
        await era.printAndWait(
          '咽下由担当包着创可贴的手指夹来的饭菜，与担当笑容相仿的幸福感也涌上心头。',
        );
        break;
      case 5:
        await urara.say_and_wait([
          '听 ',
          sys_get_colored_callname(52, 47),
          ' 说，世界上有一种叫爱情灵药的药剂，说是能让两人永远相爱！',
        ]);
        await urara.say_and_wait([
          '那样的药……加在便当里会影响饭菜的味道吗？',
          callname,
          ' 愿意吃下去吗？',
        ]);
        await era.printAndWait([
          '明明在思考很危险的事情，小',
          urara.get_uma_sex_title(),
          '却依旧顾及着别人的意愿。',
        ]);
    }
  }
};
