const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {number} relation
 * @param {number} love
 */
module.exports = async (tachyon, me, callname, relation, love) => {
  await print_event_name('临夜的圣诞老人', tachyon);
  era.println();
  await era.printAndWait('寒冬的夜里');
  await era.printAndWait(['明天，就是有马纪念了']);
  await era.printAndWait([
    '必须维持良好的作息，好去支援 ',
    tachyon.get_colored_name(),
    ' 才行',
  ]);
  await era.printAndWait('所以，必须要早睡');
  await era.printAndWait('所以……');
  era.println();
  await era.printAndWait('到底是谁，这个时候还在外面嘎吱嘎吱吵人睡觉！');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 愤怒的推开窗一看，看见窗外是拿着试管的 ',
    tachyon.get_colored_name(),
  ]);
  era.println();
  await tachyon.say_and_wait(
    '哦呀，居然醒来了吗，可惜没机会尝试最新调的试剂了……',
  );
  era.printButton('「……那是什么」', 1);
  era.printButton('「……你为什么会在窗外」', 2);
  if ((await era.input()) === 1) {
    await tachyon.say_and_wait(
      '唔……某种能够无声无味将玻璃腐蚀的药，只对玻璃有效，所以可以防止像之前一样不小心滴穿地板的事，不过副作用嘛……',
    );
    await tachyon.say_and_wait(
      '它在溶解完之后会自动进入缝隙中，很难清理，所以被腐蚀掉的地方基本上除非全部拆掉否则应该都再也装不了玻璃了',
    );
    era.println();
    await era.printAndWait('好恐怖！？');
  } else {
    await tachyon.say_and_wait(
      '哼哼，惊喜哦……比起这个，不先放我进去吗？外面有点冷啊',
    );
    era.println();
    await era.printAndWait('所以说为什么要爬窗啊！！');
  }
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), ' 径直进了房间']);
  await era.printAndWait([me.get_colored_name(), ' 有些戒备的看着对方']);
  era.println();
  await era.printAndWait([
    '这也不是 ',
    tachyon.get_colored_name(),
    ' 第一次闯入私宅了，每次都是以无法忍耐到早上才做实验为由来给自己下药',
  ]);
  await era.printAndWait([
    '平常也就算了，有马前一天的重要时光说什么也不能再让',
    tachyon.sex,
    '为所欲为了',
  ]);
  era.printButton('「明天就是有马纪念了」', 1);
  era.printButton('「快回去休息吧」', 2);
  await era.input();
  await tachyon.say_and_wait(['……嗯哼，明天就是有马纪念了，那么……今天呢？']);
  era.printButton('「今天？」', 1);
  era.printButton('「……有马纪念前一天？」', 2);
  await era.input();
  await era.printAndWait('…………');
  await era.printAndWait('现场忽然陷入沉默');
  await era.printAndWait([
    '仿佛连 ',
    tachyon.get_colored_name(),
    ' 都无语了一般',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '……',
    callname,
    '，不知道你今天有没有注意到，街上的面包坊最近忽然开始卖起木头蛋糕了',
  ]);
  era.printButton('「是因为最近流行吗？」', 1);
  await era.input();
  await tachyon.say_and_wait('…………肯O基开始推出炸鸡套餐了？');
  era.printButton('「O德基除了炸鸡还有啥能当套餐的吗？」', 1);
  await era.input();
  await tachyon.say_and_wait('……………学生会长穿的布偶服？');
  era.printButton(
    '「肯定又是什么冷笑话的梗吧，我才不会上当，装成圣诞树什么…………欸？」',
    1,
  );
  await era.input();
  await era.printAndWait('…………');
  await era.printAndWait('房间内又陷入一阵沉默');
  era.printButton('「难道说……今天……是，圣诞节？」', 1);
  await era.input();
  await era.printAndWait('哈哈哈');
  await era.printAndWait(['室内响起了', tachyon.sex, '银铃般的笑声']);
  await era.printAndWait(
    '如果是以这声音作为铃铛的话，或许自己真的会相信圣诞老人的到来吧',
  );
  era.println();
  await tachyon.say_and_wait([
    '没错，',
    callname,
    '！今天就是圣诞节！那么……有没有什么想要的圣诞礼物呢？今天，就让本圣诞老人大方的为你实现吧！',
  ]);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    ' 掏出了先前不知道藏在哪里的圣诞帽，斜斜戴在耳朵上',
  ]);
  await era.printAndWait(
    '张开双臂，摆出了往常的姿势，然而口中说出的却不是「开始实验吧」，而是「Merry Christmas」',
  );
  era.printButton('「Merry Christmas」', 1);
  era.printButton('「圣诞快乐」', 2);
  await era.input();
  await tachyon.say_and_wait('好啦好啦，总之快说，想要什么圣诞礼物！');
  era.printButton('「速子的吻」', 1);
  era.printButton('「有马胜利」', 2);
  if ((await era.input()) === 1) {
    era.println();
    await era.printAndWait('可能是因为圣诞节的气氛吧');
    await era.printAndWait([
      '一不小心，对 ',
      tachyon.get_colored_name(),
      ' 做出了明显越过师生关系的发言',
    ]);
    era.println();
    if (love >= 75) {
      await tachyon.say_and_wait('欸………');
      era.println();
      await era.printAndWait('果……果然很奇怪吧');
      await era.printAndWait('还是换个');
      era.println();
      await tachyon.say_and_wait(
        '不……只是，平常都在做的事，拿来当圣诞愿望什么的，也太掉价了',
      );
      await tachyon.say_and_wait(
        '这可是难得的圣诞节啊……不换个特殊点的愿望吗？',
      );
      await tachyon.say_and_wait('比如……');
      era.println();
      await era.printAndWait('慢慢掀开的校服裙，底下是深紫的蕾丝');
      await era.printAndWait('暗示性的眼神，充满了情欲和渴望');
      await era.printAndWait('但是……');
      era.printButton('「明天……有马……」', 1);
      await era.input();
      await era.printAndWait('只能说出关键词来的原因');
      await era.printAndWait('是因为理智也只能支撑自己说出这些单词来了');
      await era.printAndWait('心里半是害怕半是期待');
      await era.printAndWait([
        '害怕 ',
        tachyon.get_colored_name(),
        ' 不听劝告',
      ]);
      await era.printAndWait([
        '期待 ',
        tachyon.get_colored_name(),
        ' 不听劝告',
      ]);
      era.println();
      await tachyon.say_and_wait('……算了');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 停下了手上的动作']);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的心中半是庆幸半是遗憾',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '毕竟仔细想想，等到明天，做为实验成功的庆祝方式，不也挺不错的吗',
      );
      era.println();
      await era.printAndWait('明天……');
      await era.printAndWait('看来，需要期待的事又多一件了啊');
    } else if (love >= 50) {
      await tachyon.say_and_wait('可以哦');
      era.println();
      await era.printAndWait('欸……？');
      await era.printAndWait([
        '没等 ',
        me.get_colored_name(),
        ' 反应过来，',
        tachyon.get_colored_name(),
        ' 便主动靠上前',
      ]);
      await era.printAndWait('等等，什么情况');
      era.println();
      await tachyon.say_and_wait('咕啾……啾……啾噜……');
      era.println();
      await era.printAndWait('长达数分钟的长吻');
      await era.printAndWait(
        '短暂而又漫长的时间里，寂静的圣诞夜中只有唾液交换的声音响起',
      );
      if (!era.get('exp:0:接吻次数')) {
        await era.printAndWait('初吻就是法式深吻');
        await era.printAndWait('这种奇幻的梦境，或许也只有圣诞之夜会发生吧');
      }
      era.println();
      await tachyon.say_and_wait('这个圣诞礼物，喜欢吗？');
      era.println();
      await era.printAndWait([
        '月下的',
        tachyon.sex,
        '，眼神带着妖豔且危险的色彩',
      ]);
      era.println();
      await tachyon.say_and_wait('放心吧……我还是知道轻重缓急的');
      era.println();
      await era.printAndWait([
        '再怎么说，明天是有马纪念的情况下还做那种事绝对是对对手和自己的最大不敬',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '所以……只是稍微，做个记号，等到有马结束之后，呵呵……仔细想想，到时候要怎么回应我吧',
      ]);
      begin_and_init_ero(0, 32);
      await quick_make_love(
        new EroParticipant(32, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      end_ero_and_train();
    } else if (relation > 225) {
      await tachyon.say_and_wait('嗯？真是奇怪的要求啊……只有这样吗？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 很正常的在 ',
        me.get_colored_name(),
        ' 的脸颊上亲了一下',
      ]);
      era.println();
      await era.printAndWait('……好像，没什么感觉？');
      era.println();
      await tachyon.say_and_wait(
        '真是的，难得的圣诞愿望，浪费在这种事情上，真不理解你……',
      );
      era.println();
      await era.printAndWait(
        '虽然感觉还好，但被这么一说也有种自己似乎亏了的感觉',
      );
      await era.printAndWait('这样的话……');
      era.println();
      await tachyon.say_and_wait(['！……喂，喂喂，', callname, '……你在做什么']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 反过来，搂住了 ',
        tachyon.get_colored_name(),
        ' 的腰',
      ]);
      await era.printAndWait('来而不往，非礼也……是这么说的吗？随便吧');
      await era.printAndWait(
        '难得的圣诞节，由自己掌握主导权，不也是一次有趣的经历吗？',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 轻轻的，在 ',
        tachyon.get_colored_name(),
        ' 的额头上啄吻了一下',
      ]);
      era.printButton('「圣诞快乐」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…………看在今天圣诞节的份上，就不跟你计较了……之后给我记住',
      );
      era.printButton('「虽然这么说，但速子的脸却很红……」', 1);
      await era.input();
      await tachyon.say_and_wait('闭嘴！');
    } else if (relation > 0) {
      await tachyon.say_and_wait('哦？真的想要吗？');
      era.println();
      await era.printAndWait('————欸？');
      era.println();
      await tachyon.say_and_wait('听说，似乎是有这么种东西，叫什么誓约之吻的');
      era.println();
      await era.printAndWait('欸欸———！？');
      era.println();
      await tachyon.say_and_wait('这样的话，来吧');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 说完后，忽然靠近了 ',
        me.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('就当成，节日的大放送……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '轻轻的，贴近 ',
        me.get_colored_name(),
        ' 的身体',
      ]);
      await era.printAndWait('温柔的———在手背，轻啄了一下');
      era.println();
      await tachyon.say_and_wait('好了');
      era.println();
      await era.printAndWait('…………欸？');
      era.println();
      await tachyon.say_and_wait([
        '顺带一提，誓约的内容是从今以后你必须永远作为我的 ',
        callname,
        ' 接受实验哦？',
      ]);
      era.println();
      await era.printAndWait('等一下！？');
      await era.printAndWait(
        '一个手背的社交吻换一辈子是不是两边的价值差有点大了！？',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 没有回应 ',
        me.get_colored_name(),
        ' 的抱怨，只是咯咯笑着',
      ]);
      await era.printAndWait('也不知道到底是认真的还是说着玩的');
    } else {
      await tachyon.say_and_wait('喂喂，哪怕是圣诞节，这种玩笑也开的过头了吧');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 用危险的眼神警告 ',
        me.get_colored_name(),
      ]);
      await era.printAndWait([
        '然而这种熟悉的冷漠回复反而让 ',
        me.get_colored_name(),
        ' 安心了下来',
      ]);
    }
  } else {
    await era.printAndWait(['大概是因为明天就是有马纪念']);
    await era.printAndWait([
      '导致 ',
      me.get_colored_name(),
      ' 脑子一热，不由得将可以被称之为KY（搞不懂气氛）的话说了出口',
    ]);
    era.printButton('「有马……」', 1);
    await era.input();
    await tachyon.say_and_wait('嘘');
    era.println();
    await era.printAndWait([
      '话说到一半便被 ',
      tachyon.get_colored_name(),
      ' 的食指按住',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '今天是奇迹及魔幻的夜晚，那些现实的话，等到明天再说，好吗？',
    );
    era.println();
    await era.printAndWait(['月下的', tachyon.sex, '，如同真正的天使一般']);
    era.printButton('「没想到速子也有这么浪漫的一面啊」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '哦？哈哈哈！这么说来，不是有句话吗？『科学家才是世界上最大的浪漫主义者』啊',
    );
    era.println();
    await era.printAndWait('如果不是相信那些浪漫的，感性的东西');
    await era.printAndWait('是不会将自己的人生都投入在枯燥重复的研究中的吧');
    await era.printAndWait([
      '相信着',
      tachyon.uma_sex_title,
      '的可能性的',
      tachyon.sex,
      '，相信着 ',
      tachyon.get_colored_name(),
      ' 的可能性的 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait('不就是最天真的两名梦想家吗？');
    era.println();
    await tachyon.say_and_wait('那么，还有什么想要的其他圣诞礼物吗？');
    era.printButton('「不用了」', 1);
    await era.input();
    await era.printAndWait('这场梦，就是最棒的礼物了');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 好似理解了 ',
      me.get_colored_name(),
      ' 的意思般，点了点头仿佛在认同 ',
      me.get_colored_name(),
      ' 的想法',
    ]);
    era.drawLine();
    await tachyon.say_and_wait('那么……你想要的礼物送完了');
    era.println();
    await era.printAndWait('嗯……？');
    await era.printAndWait([
      '在「礼物」环节结束后，',
      tachyon.get_colored_name(),
      ' 却好像还没玩够一般，又接着开口说道',
    ]);
    era.println();
    await tachyon.say_and_wait('接下来，该轮到圣诞老人想送的礼物了');
    era.println();
    await era.printAndWait([
      '听见这句话，',
      me.get_colored_name(),
      ' 立马绷紧了神经',
    ]);
    await era.printAndWait('果然……还是逃不掉吗？');
    era.println();
    await tachyon.say_and_wait([callname, '，这几天，你也应该累了吧']);
    era.println();
    await era.printAndWait([
      '伴随着为 ',
      me.get_colored_name(),
      ' 着想的起手式，',
      tachyon.get_colored_name(),
      ' 一步一步靠近了床边的 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([
      '渐渐的，将 ',
      me.get_colored_name(),
      ' 逼退到床角',
    ]);
    await era.printAndWait('这次的会是什么呢？发光？变色？变形？');
    era.println();
    await era.printAndWait('与恐惧一同爬上床边的红眼阴影不断迫近');
    await era.printAndWait([
      '最后，在距离接近于零时，',
      tachyon.sex,
      '展露出了',
      tachyon.sex,
      '的真实目的',
    ]);
    era.println();
    await tachyon.say_and_wait('————好乖，好乖');
    era.println();
    await era.printAndWait('垫在后脑勺下的是丝质的触感');
    await era.printAndWait(['眼前是', tachyon.sex, '豔丽的脸庞']);
    if (tachyon.sex_code - 1) {
      await era.printAndWait('——原本想这么说，但却被两座山脉给挡住了视线');
    }
    await era.printAndWait('这是……膝枕？');
    era.println();
    await tachyon.say_and_wait(
      '真是的，你以为会是什么？不是都说了吗？今天晚上的我，只是名普通的圣诞老人而已，不在此之上，也不在此之下',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 愣愣的听着，',
      tachyon.sex,
      '轻柔的仿佛在唱童谣一般的话语',
    ]);
    era.println();
    await tachyon.say_and_wait('辛苦了———还有，谢谢你');
    era.println();
    await era.printAndWait([
      '今天晚上之前，一直都在配合着负责',
      tachyon.uma_sex_title,
      '的胡闹',
    ]);
    await era.printAndWait(
      '明天早上之后，还要继续面对有马纪念以及在那之后的URA总决赛',
    );
    await era.printAndWait('所以至少现在，这个夜晚');
    await era.printAndWait('祝，一夜好梦');
  }
};
