const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 25] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    await print_event_name('A or B', tachyon);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '速子前辈要参加月桂杯的事情是真的吗！',
    );
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'B',
      '好期待……速子前辈的跑法真的好让人着迷……',
    );
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'C',
      '绝对，绝对会去看的！',
    );
    era.println();
    await era.printAndWait('如今学院中最处于话题中心的，那便是月桂杯了');
    await era.printAndWait('由学生会长组织，以对标URA总决赛为主的比赛，月桂杯');
    await era.printAndWait(
      '甚至无论年级无论本格化开始或者结束，只要有意愿的皆能参加',
    );
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 自然也不会放过如此好的数据收集机会',
    ]);
    await era.printAndWait([
      '最近这几周，更是拼足了全力在训练上，按',
      tachyon.sex,
      '的说法，要是自己不提升到相应的等级，那又怎么能够逼出对手的可能性来',
    ]);
    era.println();
    await era.printAndWait([
      '今天，',
      tachyon.sex,
      '也在训练场上努力锻炼着自己',
    ]);
    era.printButton('「速子！今天的训练成果也大幅超越过去记录了！」', 1);
    era.printButton('「太厉害了！速子！」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '……哈哈哈！哪怕已经习惯你这种夸张的说法了，但听到还是会忍不住讶异一下啊……',
    );
    await tachyon.say_and_wait('真的是，说认真的，你都不会害羞的吗');
    era.printButton('「我说的都是肺腑之言！」', 1);
    era.printButton('「为了帮助速子，我也会不遗余力拼上性命！」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '夸张……比起这种好听话，还不如实际帮助我的实验更有意义些',
    );
    era.println();
    await era.printAndWait([
      '说到这，',
      tachyon.get_colored_name(),
      ' 忽然从白大褂下掏出了几根试管',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '这么说来，正好……这是今天早上灵感来了做出的药……',
    );
    await tachyon.say_and_wait(
      '怎么样？要是你能现在喝下去，等我下一趟跑完回来跟我报告药物效果的话，成效大概会比你这些……？',
    );
    era.println();
    await era.printAndWait([
      '连话都没说完，',
      tachyon.get_colored_name(),
      ' 便陷入了呆滞',
    ]);
    await era.printAndWait([
      '在',
      tachyon.sex,
      '眼前，是已经喝下药水，拿着三管空试管的 ',
      me.get_colored_name(),
    ]);
    era.println();
    await tachyon.say_and_wait('你……');
    era.printButton('「这样，速子就能安心了吧？」', 1);
    era.printButton('「这样，就能帮到速子了吧？」', 2);
    await era.input();
    await tachyon.say_and_wait('……');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 不知为何，久久没有说出任何话来',
    ]);
    era.printButton('「速子？」', 1);
    await era.input();
    await tachyon.say_and_wait('……真是……你到底要把一切搅乱到什么地步啊……');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '扶着头，脸上带着无奈的表情，仿佛有什么话想要说出',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '，等一下，到我实验室来……有事要和 ',
      me.get_colored_name(),
      ' 商量',
    ]);

    era.drawLine();

    await tachyon.say_and_wait('那么……我要开始说了');
    era.println();
    await era.printAndWait([
      '实验室内 ',
      me.get_colored_name(),
      ' 正襟危坐，等待着 ',
      tachyon.get_colored_name(),
      ' 的讲述',
    ]);
    era.println();
    await tachyon.say_and_wait('我的腿……很可能，再也跑不动了');
    era.println();
    await era.printAndWait('如天崩一般的内容，却被轻描淡写的说出');
    await era.printAndWait([
      tachyon.sex,
      '为了给 ',
      me.get_colored_name(),
      ' 接受的时间，稍停一会后，才接着说道',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '我自己早就已经有心理准备了……我的腿，本来就比一般',
      tachyon.get_uma_sex_title(),
      '要脆弱，所以，没什么不能接受的',
    ]);
    await tachyon.say_and_wait('但是，这不代表我会放弃我的梦想');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的梦想……超越',
      tachyon.get_uma_sex_title(),
      '的极限，看见',
      tachyon.get_uma_sex_title(),
      '的可能性',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '就算不是我也没关系，就算只能看着也没关系……就算，只能做为垫脚石存在，也没关系',
    );
    await tachyon.say_and_wait([
      '无论是谁……只要能够证明这并不是',
      tachyon.get_uma_sex_title(),
      '的极限，只要能够证明，这只不过是 ',
      tachyon.get_colored_name(),
      ' 的极限……我就心满意足了',
    ]);
    await tachyon.say_and_wait(
      '我真的是发自内心这么想的，这次的月桂杯也是……为了让谁，不是我的某个人能够成功……',
    );
    await tachyon.say_and_wait(
      '收集最多的数据，构筑出最完美的计划……哪怕拼尽全力也要……',
    );
    await tachyon.say_and_wait('但是……让这样的我动摇了决心的……是你');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 用一种复杂的眼神看着 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait('悲伤？');
    await era.printAndWait('痛苦？');
    await era.printAndWait('希望？');
    await era.printAndWait('绝望？');
    await era.printAndWait([
      '仿佛参杂了许多种感情的视线望着 ',
      me.get_colored_name(),
    ]);
    era.println();
    await tachyon.say_and_wait('在我想放弃的时候，总用那种眼神看着我的你……');
    await tachyon.say_and_wait(
      '真的，说坦白话，对想要放弃的人而言，那副眼神到底有多令人厌恶你知道吗？',
    );
    await tachyon.say_and_wait('那种纯粹的，只有信赖的眼神……');
    era.println();
    await era.printAndWait([
      '明明说着讨厌，但 ',
      tachyon.get_colored_name(),
      ' 那五味杂陈的眼神中却唯独看不出厌恶的感情',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '因此，',
      callname,
      '，这样的你应当负起将一切搅乱的责任……选择道路的责任',
    ]);
    const t_call_c = sys_get_colored_callname(32, 25);
    await tachyon.say_and_wait([
      '……还记得我曾经问过吗？你对 ',
      t_call_c,
      ' 是怎么看的',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 点了点头，',
      tachyon.get_colored_name(),
      ' 对 ',
      get_chara_talk(25).get_colored_name(),
      ' 的关注可以说是大于其他',
      tachyon.get_uma_sex_title(),
      '许多的……',
      get_chara_talk(9).get_colored_name(),
      ' 除外',
    ]);
    await era.printAndWait('总之那种关心，绝对不只是对实验品的关注');
    await era.printAndWait('关于原因，自己也曾经思考过许多，但都百思不得其解');
    era.println();
    await tachyon.say_and_wait([
      '倘若我无法继续跑下去的Plan B……我打算将一切托付在 ',
      t_call_c,
      ' 的身上，让 ',
      t_call_c,
      ' 代替我，去看见可能性的世界',
    ]);
    await tachyon.say_and_wait([
      '在那之后，我会拒绝参加一切比赛……直到 ',
      t_call_c,
      ' 成长起来，直到',
      tachyon.sex,
      '能够突破极限，我会用尽剩下能够用尽全力的机会，成为',
      tachyon.sex,
      '的垫脚石',
    ]);
    await tachyon.say_and_wait(
      '牺牲一切来成就最有可能获得成功的选项，这就是研究者，即便必须被牺牲的是自己也一样',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '轻描淡写的说出将自身感情排除于思考之外的选项',
    ]);
    await era.printAndWait([
      '仿佛已经经过无数次的排练……或许，',
      tachyon.sex,
      '早就已经做好觉悟，总有一天要将这些话对自己说出了吧',
    ]);
    await era.printAndWait(['接着，', tachyon.sex, '的声音稍稍颤抖了一下']);
    era.println();
    await tachyon.say_and_wait('然后……是第二个选项，我一开始已经放弃的Plan A');
    await tachyon.say_and_wait([
      '继续下去，我会朝着 ',
      callname,
      ' 你说的目标三冠前进，朝着我的目标跨越极限前进…',
    ]);
    await tachyon.say_and_wait(
      '……如童话一般美好，也一样虚幻的选择，而你必须陪伴我，直到梦想实现，或是……一切凋零',
    );
    era.println();
    await tachyon.say_and_wait(
      '做出选择吧……我不否认，这是责任的转嫁，将一切的责任都推到你身上，但是……',
    );
    await tachyon.say_and_wait(
      '是你把希望带给我的，所以这也是你应该要负起的责任吧',
    );
    await tachyon.say_and_wait(['来吧，', callname, '，轮到你了，做出选择吧']);
    era.println();
    era.print([me.get_colored_name(), ' 决定……']);
    era.printButton('选择Plan A', 1);
    era.printButton('选择Plan B', 2, {
      disabled:
        era.get('cflag:25:育成回合计时') !== era.get('cflag:32:育成回合计时'),
    });
    era.print('【警告，该选择会锁定爱丽速子的训练及比赛】', {
      color: buff_colors[3],
      offset: 1,
      width: 23,
    });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '如果说，真的如 ',
        tachyon.get_colored_name(),
        ' 所说，为',
        tachyon.sex,
        '带来希望的人是自己的话',
      ]);
      await era.printAndWait([
        '那么，陪伴',
        tachyon.sex,
        '走在这条梦想的道路上，这也是自己的责任及义务吧',
      ]);
      await era.printAndWait([
        '如果按',
        tachyon.sex,
        '所说，这个故事是由自己所开启的，那么无论以什么形式结束，自己都理应站在台上直到一切的谢幕',
      ]);
      era.println();
      await era.printAndWait('所以……');
      era.printButton('「……不行」', 1);
      era.printButton('「不是这样的」', 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await era.printAndWait(['不是陪伴', tachyon.sex, '吧']);
      await era.printAndWait(['不是待在舞台上而已吧']);
      era.println();
      await era.printAndWait([
        '我是，',
        tachyon.get_colored_name(),
        ' 的训练员',
      ]);
      await era.printAndWait(['是与', tachyon.sex, '两人三脚一同前行的训练员']);
      await era.printAndWait(['是与', tachyon.sex, '并肩，而非跟在身后的人']);

      era.printButton('「……我选Plan A」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……是吗？那么，就为了我鞠躬尽瘁，好好看着我吧……无论燃烧，还是凋零',
      );
      era.println();
      await era.printAndWait('不对，不是的');
      await era.printAndWait([
        me.get_colored_name(),
        ' 摇了摇头，阻止了 ',
        tachyon.get_colored_name(),
        ' 的话',
      ]);
      era.println();
      await me.say_and_wait('不是看着');
      era.println();
      await tachyon.say_and_wait('……？');
      era.printButton('「我会与你『一起』，实现『我们』的梦想」', 1);
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 陷入了沉默']);
      await era.printAndWait([
        tachyon.sex,
        '的表情仿佛愤怒，又仿佛带有一丝喜悦',
      ]);
      await era.printAndWait('随后……');
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait('……身为豚鼠，却想获得与人类相等的地位吗？');
        era.println();
        await era.printAndWait([
          '一如既往的傲慢话语，将 ',
          me.get_colored_name(),
          ' 打落谷底',
        ]);
        await era.printAndWait('想要并肩而行的前提是对方愿意与自己同行');
        await era.printAndWait(
          '若是两人三脚的过程中，只有一方想要维持住中间的联系，那无论如何都是绝不可能向前行动的',
        );
        await era.printAndWait('这样的口气，想必…');
        era.println();
        await tachyon.say_and_wait(
          '那么，努力追上我的步伐吧，展露出我都无法无视的光彩……证明你的可能性吧！',
        );
      } else if (love < 75) {
        await tachyon.say_and_wait('……呵呵，哈哈哈哈！');
        era.println();
        await era.printAndWait([
          '突然，',
          tachyon.get_colored_name(),
          ' 露出了满意的笑容',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '是吗，是吗，并肩同行的伙伴，共同作战的战友……呵呵，这不是很有意思吗！',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '张开双臂，歪头看向身后的 ',
          me.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          '那么就跟上来吧，',
          callname,
          '！不在我之上，也不在我之下的同伴，若是你有把握能做到的话，那就来吧',
        ]);
      } else {
        await tachyon.say_and_wait([
          '也就是说……',
          callname,
          '，你是认真的吗？',
        ]);
        era.println();
        await era.printAndWait('认真……？');
        await era.printAndWait([
          '自己确实是认真想要与 ',
          tachyon.get_colored_name(),
          ' 同行的，是这个意思吗？',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 点了点头表示自己的决心',
        ]);
        era.println();
        await tachyon.say_and_wait('……然后同行，也就是，同居……唔……');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 用力摇了摇头']);
        await era.printAndWait('虽然不知道发生了什么，但似乎有什么不对劲……？');
        era.println();
        await tachyon.say_and_wait(
          '……咳咳，我明白了，那么，一起朝着我们的目标努力吧',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 似乎稍微冷静了一些说道',
        ]);
        await era.printAndWait(
          '虽然不知道发生了什么，但总之这应该是得到认可的证明了',
        );
        await era.printAndWait('今后也要继续努力才行！');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 放弃参加月桂杯的事情，传遍了整个学园',
      ]);
      await era.printAndWait([
        '身为训练员，',
        me.get_colored_name(),
        ' 也不免被人抨击',
      ]);
      await era.printAndWait([
        '不过……这也是与',
        tachyon.sex,
        '同行必须付出的代价吧',
      ]);
      await print_event_name('Advanced', tachyon);
      edu_marks.uma_limit = 0;
      sys_change_fame(-20);
    } else {
      await era.printAndWait('将梦想托付他人……虽然说是残酷的道路，但是');
      await era.printAndWait('以理智来看，这才是最有可能达成的希望吧');
      await era.printAndWait([
        '姑且不论',
        tachyon.sex,
        '所说的命运，',
        tachyon.sex,
        '的双腿……无论身为训练员，还是对 ',
        tachyon.get_colored_name(),
        ' 抱有憧憬的一名粉丝',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 都无法做到无视这过程中',
        tachyon.sex,
        '可能受到的伤痛',
      ]);
      await era.printAndWait('可能性太低');
      await era.printAndWait('眼前的道路也满是荆棘');
      await era.printAndWait([
        me.get_colored_name(),
        ' 做不到，被当成懦夫也无所谓',
      ]);
      await era.printAndWait([
        '只要 ',
        tachyon.get_colored_name(),
        ' 能够健康就好',
      ]);
      await era.printAndWait('除此之外……');
      era.println();
      const coffee = get_chara_talk(25);
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 想起了 ',
        me.get_colored_name(),
        ' 的另一名负责',
        tachyon.get_uma_sex_title(),
      ]);
      await era.printAndWait([
        '想起了',
        tachyon.sex,
        '同样使 ',
        me.get_colored_name(),
        ' 着迷的跑法及身姿',
      ]);
      await era.printAndWait('取代，是个傲慢且自私的话语');
      await era.printAndWait(
        '没有任何人能够取代其他人，也没有任何人是为了取代而生的',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          '但是，如果有谁能够「继承」',
          tachyon.get_colored_name(),
          ' 的梦想，那……',
        ]);
        era.println();
        await era.printAndWait(['必然是 ', coffee.get_colored_name(), ' 莫属']);
        era.println();
        await era.printAndWait([
          '看见一言不发的 ',
          me.get_colored_name(),
          '，',
          tachyon.get_colored_name(),
          ' 也猜到了 ',
          me.get_colored_name(),
          ' 心中的决断',
        ]);
        await era.printAndWait([
          '只是等待着 ',
          me.get_colored_name(),
          ' 主动开口而已',
        ]);
      } else {
        await era.printAndWait(['尤其是 ', coffee.get_colored_name()]);
        era.printButton(`「……茶座${coffee.sex}不是任何人的替代品」`, 1);
        await era.input();
        await tachyon.say_and_wait(['呵呵，这么维护', tachyon.sex, '啊……']);
        await tachyon.say_and_wait([
          '放心，我没有说',
          tachyon.sex,
          '是谁的替代……',
        ]);
        await tachyon.say_and_wait([
          '没错，就只是一名路过的好心',
          tachyon.get_uma_sex_title(),
          '，对 ',
          coffee.get_colored_name(),
          ' 与其训练员提出的帮助，仅此而已',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          ' 与 ',
          coffee.get_colored_name(),
          ' 的训练员」，说出这句话时，',
          tachyon.get_colored_name(),
          ' 脸上的表情展露出了绝对不会被人看漏的失落',
        ]);
        await era.printAndWait([
          '……是啊，做出这个选择后，自己就真的彻底，是 ',
          coffee.get_colored_name(),
          ' 的训练员了……但是，这个选择，一定也是对 ',
          tachyon.get_colored_name(),
          ' 而言最好的选择吧',
        ]);
      }
      era.printButton('「……我选PlanB」', 1);
      await era.input();
      await tachyon.say_and_wait('……这样啊');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 听见 ',
        me.get_colored_name(),
        ' 的选择后，没有多说什么，只是点了点头',
      ]);
      await era.printAndWait([
        '室内陷入了将人逼至窒息的沉默，正当 ',
        me.get_colored_name(),
        ' 受不了这沉默，想说些什么的时候',
      ]);
      era.println();
      await tachyon.say_and_wait('……哈哈哈哈！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 忽然发出笑声，把 ',
        me.get_colored_name(),
        ' 吓了一跳',
      ]);
      era.println();
      await tachyon.say_and_wait('很好很好！这不是能够做出正确的选择来吗！');
      era.println();
      await era.printAndWait('正确的选择……吗？');
      era.println();
      await tachyon.say_and_wait(
        '说实话，我还真有点怕你会选Plan A呢，果然对我这种人来说，比起训练比赛什么的，还是在幕后做研究更适合我啊，哈哈哈！',
      );
      era.println();
      await era.printAndWait([
        '……既然',
        tachyon.sex,
        '都这么说了，那这应该就是正确的，不是吗？',
      ]);
      await era.printAndWait([
        '这才是最适合',
        tachyon.sex,
        '的，最理智的选择，不是吗？',
      ]);
      await era.printAndWait('一定是的吧');
      await era.printAndWait('绝对是的吧');
      await era.printAndWait([
        '不然的话……不就说明，自己放弃了，背叛了自己的负责',
        tachyon.get_uma_sex_title(),
        '，自己的光（tachyon）了吗',
      ]);
      era.println();
      await tachyon.say_and_wait(['对了，', callname, '，明天记得要来试药哦']);
      await era.printAndWait('…………欸？这样还要试药吗？');
      await era.printAndWait([
        '或许是因为 ',
        me.get_colored_name(),
        ' 那呆愣的表情，',
        tachyon.get_colored_name(),
        ' 笑出了声',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '呵呵……当然了，不过明天开始试的药都是要用在 ',
        t_call_c,
        ' 身上的……',
      ]);
      await tachyon.say_and_wait(
        '所以做好觉悟吧，明天开始，要试的药会更多哦？',
      );
      await tachyon.say_and_wait([
        '为了让 ',
        t_call_c,
        ' 补足达到极限的基础，要做的事比以前可是多多了啊',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 哈哈一笑走出休息室，看来自己的选择似乎并没有对',
        tachyon.sex,
        '造成影响……吗？',
      ]);
      await era.printAndWait([
        '心中虽然还是有些担心，但 ',
        me.get_colored_name(),
        ' 很快便将这些担心甩出了心，不只是为了 ',
        coffee.get_colored_name(),
        '，也是为了 ',
        tachyon.get_colored_name(),
        '，自己必须更加努力了',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 参加了月桂杯']);
      await era.printAndWait([
        '无论是本格化已经完成的资深级对手，同期的强者，甚至梦之杯的前辈，都被',
        tachyon.sex,
        '平等的超越',
      ]);
      await era.printAndWait('依然是那种令人眩目的跑法');
      await era.printAndWait('依然是，如光一般的跑法');
      await era.printAndWait('如光一般，瞬间消逝的跑法');
      era.println();
      await era.printAndWait([
        '第二天，',
        tachyon.get_colored_name(),
        ' 宣布，半永久暂停闪耀系列赛的参与',
      ]);
      await era.printAndWait('此一发表，掀起了媒体的轩然大波');
      await era.printAndWait([
        '但这一切，都不会影响到 ',
        me.get_colored_name(),
        ' 与',
        tachyon.sex,
        '的同行',
      ]);
      edu_marks.plan_b = 1;
      edu_marks.glass_leg = 1;
      edu_marks.uma_limit = 0;
      await print_event_name('Betray', tachyon);
    }
  };

  handlers[47 + 29] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('媒体应对办法', tachyon);
    await era.printAndWait('夏日集训');
    await era.printAndWait([
      '对',
      tachyon.get_uma_sex_title(),
      '们而言，是兼具放松及提升实力的时间',
    ]);
    await era.printAndWait([
      '对记者们而言，则是平常除了比赛便不会轻易暴露于人前的',
      tachyon.get_uma_sex_title(),
      '们难得有机会能够采访到的日子',
    ]);
    await era.printAndWait('也因此，狗仔队们早早便聚集在了合宿点外');
    await say_by_passer_by_and_wait('记者A', '有看到吗？');
    await say_by_passer_by_and_wait('记者B', '别急，还没完全下来呢');
    await say_by_passer_by_and_wait(
      '记者C',
      '来了来了！就是那个，训练员正在发出光芒的！',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 一下车，就受到了记者们的团团包围',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 暗叫不好，连忙降低了身上的亮度，只可惜已经为时已晚',
    ]);
    await say_by_passer_by_and_wait('记者A', [
      '请问 ',
      tachyon.get_colored_name(),
      ' 拒绝参加月桂杯的原因是什么？',
    ]);
    await say_by_passer_by_and_wait('记者B', '是有什么苦衷吗？');
    await say_by_passer_by_and_wait('记者C', '是对学生会长的不信任吗？');
    await era.printAndWait(
      '呜哇，麻烦的问题好多，还有最后一个记者这思想很危险啊，想挑动对立吗？',
    );
    await era.printAndWait([
      '面对这么多记者，',
      me.get_colored_name(),
      ' 决定……',
    ]);
    era.printButton('耐心解释（爱丽速子干劲下降）', 1);
    era.printButton('驱赶（声望下降）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 耐心的与记者们解释了阵营目标是年底的菊花赏',
      ]);
      await era.printAndWait(
        '因此在此之前其他的事情都需要推移，另外并没有对现今会长的不满',
      );
      await era.printAndWait([
        '为了应付记者们耽误了许多时间，速子的情绪也因此不耐了起来',
      ]);
      await era.printAndWait([
        '见此 ',
        me.get_colored_name(),
        ' 匆忙找了个理由结束他们的采访便带着 ',
        tachyon.get_colored_name(),
        ' 进入合宿宿舍',
      ]);
      flags.wait_flag = sys_change_motivation(32, -1);
    } else {
      await era.printAndWait('啊，好吵啊');
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 交换了一下眼神',
      ]);
      await era.printAndWait([
        '在长时间的配合下，',
        tachyon.sex,
        '马上理解了 ',
        me.get_colored_name(),
        ' 要做什么，从包里掏出了墨镜',
      ]);
      await era.printAndWait('然后……');
      era.printButton('「认真发光！」', 1);
      era.printButton('「太阳拳！」', 2);
      await era.input();
      await say_by_passer_by_and_wait('记者A', '我的眼睛！');
      await say_by_passer_by_and_wait('记者B', '好亮！');
      era.println();
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 120%全力的发光照射下，连太阳都显得黯然失色',
      ]);
      await era.printAndWait([
        '趁着记者们揉着双眼的时候，',
        me.get_colored_name(),
        ' 带着 ',
        tachyon.get_colored_name(),
        ' 快步进入了合宿的宿舍',
      ]);
      sys_change_fame(-20);
    }
  };
};
