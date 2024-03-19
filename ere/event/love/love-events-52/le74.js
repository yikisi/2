const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @author 99
 *
 * @param {CharaTalk} me
 * @param {CharaTalk} urara
 * @param {CharaTalk} in_urara
 * @param {number} relation
 * @param {string} callname
 * @param {string} chara_self_name
 * @param {EventObject} event_object
 */
module.exports = async (
  me,
  urara,
  in_urara,
  relation,
  callname,
  chara_self_name,
  event_object,
) => {
  if (new UraraLifeMarks().active_74 === 0) {
    await print_event_name('躁动的爱意', urara);
    await in_urara.say_and_wait([
      '在床上翻了个身，今天的小',
      urara.get_uma_sex_title(),
      '似乎真的失眠了……',
    ]);
    await in_urara.say_and_wait([
      '怀春的',
      urara.get_teen_sex_title(),
      '，不管外表多么年幼，内在都会如此反复无常……',
    ]);
    era.drawLine();
    await urara.print_and_wait(
      '又来了，砰砰直跳的心脏怎么也静不下来，如果不去管的话明天又要起不来了。',
    );
    await urara.print_and_wait(
      '可是越是强迫自己去睡，脑海中浮现出的那张脸就会更加清晰。',
    );
    await urara.print_and_wait(
      '就算努力折起耳朵，用力将尾巴缠在腰间，它们也还是会不受控制地抖动起来。',
    );
    await urara.print_and_wait(
      '是因为它们很高兴吗？可是为什么总会变成这样？为什么每当闭上眼睛时，总能看到那个熟悉的人？',
    );
    await urara.print_and_wait([
      '那个第一次相遇时就在眼前倒下去的人；会因初识的',
      urara.get_uma_sex_title(),
      '简单两句就来应约的人；',
    ]);
    await urara.print_and_wait([
      '那个愿意为跑在最后的弱小',
      urara.get_uma_sex_title(),
      '应援的人；不管发生什么都与不成器的',
      urara.sex,
      '走到了现在的人……',
    ]);
    if (relation > 150) {
      await urara.print_and_wait([
        '回过头来的时候，已经想象不到没有 ',
        callname,
        ' 的 ',
        chara_self_name,
        ' 要怎么走到现在了。',
      ]);
      await urara.say_and_wait('这个样子，真的很幸运呢……');
      await urara.print_and_wait([
        '但有一天失去了 ',
        callname,
        ' 呢？就算是要为了大家奔跑，但离开了那个人，弱小的 ',
        chara_self_name,
        ' 还能继续下去吗……',
      ]);
      await urara.print_and_wait(
        '好不安，失去了那份幸运的未来好可怕，可就算是能够预见的未来，那又怎么办呢？',
      );
      await urara.print_and_wait(
        '因为担当与训练员的关系，总有一天会迎来改变——',
      );
    } else {
      await urara.print_and_wait([
        '就算两人平时表现出的关系并不算好，',
        chara_self_name,
        ' 也早已依赖上 ',
        callname,
        ' 了。',
      ]);
      await urara.say_and_wait(['而且在 ', callname, ' 身边的感觉也并不坏……']);
      await urara.print_and_wait([
        '不知不觉间，',
        callname,
        ' 在 ',
        chara_self_name,
        ' 心中所占的面积已经扩到连自己都感到惊讶的程度了。',
      ]);
      await urara.print_and_wait(
        '虽然还是有些不知所措，但是走在一起就会心跳加速，被鼓励也会开心地出乎意料。',
      );
      await urara.print_and_wait([
        '究竟是怎么了？',
        chara_self_name,
        ' 对 ',
        callname,
        ' 的感情，在不知道的地方迎来改变了吗？',
      ]);
    }
    urara.say(`那我（乌拉拉）对 ${me.sex} 的感情……`);
    era.printButton('「果然，是「恋爱」的感情吗？」（升级关系）', 1);
    era.printButton('「还、还是担当对训练员的好感吧？」（暂不升级）', 2);
    if ((await era.input()) === 1) {
      await urara.print_and_wait([
        '那……难道这就是恋爱？',
        chara_self_name,
        ' 对 ',
        callname,
        '？',
      ]);
      await urara.print_and_wait([
        '虽然不完全明白，但应该就是这样吧，可这么说来，',
        callname,
        ' 会喜欢 ',
        chara_self_name,
        ' 吗？',
      ]);
      await urara.print_and_wait([
        '一想到这个问题，心里就会变得酸涩，但是……想象不到 ',
        callname,
        ' 会主动告白的样子啊！',
      ]);
      await urara.print_and_wait([
        '再这样下去，什么都不明白的 ',
        chara_self_name,
        ' 只会永远被 ',
        callname,
        ' 当做小孩子吧……',
      ]);
      await urara.say_and_wait('可是不管会不会接受，都不能逃避本心呢！');
      await urara.say_and_wait([
        '就算很困难，但是不诚实的话，之后一定会后悔呢！这点 ',
        chara_self_name,
        ' 还是知道的！',
      ]);
      await urara.print_and_wait([
        '「',
        urara.name,
        '」从来都不是厉害的',
        urara.get_uma_sex_title(),
        '，',
        urara.sex,
        '的日常又笨又幼稚，和闪耀的大家根本没法相提并论……',
      ]);
      await urara.print_and_wait([
        '但这样 ',
        chara_self_name,
        ' 也更要和奔跑时一样，要竭尽全力的去向 ',
        callname,
        ' 表达真心。',
      ]);
      await urara.print_and_wait([
        '那样的话就算没能拿到一着、就算被 ',
        callname,
        ' 拒绝，也能够和往常一样甘心的接受——',
      ]);
      if (relation > 150) {
        await urara.print_and_wait([
          '因为 ',
          chara_self_name,
          ' 知道 ',
          callname,
          ' 其实是个优秀的人，也被大家爱着并不奇怪吧。',
        ]);
        await urara.say_and_wait('从明天开始，就大声地把喜欢说出来吧——');
      } else {
        await urara.print_and_wait([
          '哪怕 ',
          callname,
          ' 是个过分的人，',
          chara_self_name,
          ' 还是喜欢上了过分的 ',
          callname,
          '。',
        ]);
        await urara.say_and_wait([
          '不管发生什么，喜欢 ',
          callname,
          ' 的事实都是不会改变……',
        ]);
      }
      await urara.say_and_wait([
        '所以我也会拿出勇气来的，为了在未来的某一天，能够与 ',
        callname,
        ' 成为——',
      ]);
      if (
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
          (e) => e > 0 && era.get(`love:${e}`) >= 75,
        ).length > 0
      ) {
        await urara.say_and_wait(['即使 ', callname, '，已经有了其他女孩子？']);
        await urara.print_and_wait([
          '刚刚下定决心，来自不知何处的质问却紧随而至，但已做好准备的 ',
          chara_self_name,
          ' 只是在被单下咬紧了嘴唇。',
        ]);
        await urara.say_and_wait(
          '……我知道哦？那样做既不够资格，也一定是很恶劣的事，还会让大家伤心……',
        );
        await urara.say_and_wait('但是如果欺骗自己的话，就什么都改变不了啊。');
        await urara.say_and_wait([
          '虽然 ',
          chara_self_name,
          ' 很笨，还有很多事情都不明白，但 ',
          chara_self_name,
          ' 不是胆小鬼。',
        ]);
        await urara.say_and_wait([
          '我不会逃避，为了下次能继续抬头挺胸的与 ',
          callname,
          ' 在一起——！',
        ]);
      }
      add_event(event_hooks.week_start, event_object.set_arg(74));
    } else {
      await urara.say_and_wait([
        '嗯！果然还是一如既往吧，',
        chara_self_name,
        ' 与 ',
        callname,
        ' 还是普普通通的关系……大概？',
      ]);
      await urara.print_and_wait([
        '虽然总觉得忘记了什么，又或者是小',
        urara.get_uma_sex_title(),
        '还是没有完全理解自身的感受。',
      ]);
      await urara.print_and_wait([
        '在庞大的感情在普通的挤压已久之后，',
        chara_self_name,
        ' 最终还是来到了当机的极限值。',
      ]);
      await urara.print_and_wait([
        '晕晕乎乎的，',
        chara_self_name,
        ' 又将希望寄予了可靠的舍友，或许',
        urara.sex,
        '可以带来什么意见？',
      ]);
      await urara.say_and_wait([
        '不过旁边的 ',
        sys_get_colored_callname(52, 61),
        ' 已经睡着了啊，明明平常都是 ',
        chara_self_name,
        ' 会先睡着来着？',
      ]);
      await urara.say_and_wait([
        '嗯，不要再胡思乱想了 ',
        chara_self_name,
        '，还是赶快睡吧，要不然就又要没力气了。',
      ]);
      await urara.print_and_wait([
        '但是，身体还是好热，要不再来一次那个吧？把被子掀掉，睡衣也全脱掉……',
      ]);
      await urara.say_and_wait('嗯～哈啊……');
      await urara.print_and_wait([
        '颤抖地将手再次深入敏感的地方，小',
        urara.get_uma_sex_title(),
        '眼前又出现了那个人因渴求',
        urara.sex,
        '的身体而化身野兽的样子。',
      ]);
      await urara.print_and_wait([
        '随着身体不知道第几次地迎来高潮，脑袋再也无力思考的 ',
        chara_self_name,
        ' 在乱七八糟的床铺上沉沉地睡去……',
      ]);
      await urara.say_and_wait('……');
      await urara.print_and_wait([
        '在通过释放欲望的方式放弃思考后，小',
        urara.get_uma_sex_title(),
        '又暂时将这段思考驱逐出了脑海。',
      ]);
      await urara.print_and_wait([
        '但',
        urara.get_teen_sex_title(),
        '的心情也没法永远忽略下去，可能过不了多久，',
        urara.sex,
        '又会被这些问题所缠住吧。',
      ]);
      await urara.print_and_wait([
        '不过至少最近这段时间，不管是 ',
        me.get_colored_name(),
        ' 还是',
        urara.sex,
        '不用再担心有人突然失眠的问题了。',
      ]);
      await urara.print_and_wait([
        '只是这样一丝不挂的入睡，在第二天起床时肯定会把可怜的「室友妈妈」吓一跳吧。',
      ]);
      begin_and_init_ero(52);
      await masturbate(52);
      end_ero_and_train();
      era.set('status:52:熬夜', 1);
      era.set('cflag:52:爱慕暂拒', 74);
    }
  } else {
    await print_event_name(`致等待已久的${urara.sex}`, urara);
  }
};
