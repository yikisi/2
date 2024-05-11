const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const AgLifeMarks = require('#/data/event/life-event-marks/life-event-marks-19');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[49] = async (digital, me, callname) => {
    const tachyon = get_chara_talk(32);
    await print_event_name(
      ['经典湿身，不过是 ', me.get_colored_name()],
      digital,
    );
    await era.printAndWait(
      '作为训练员，除了平时指导训练的工作外，还是有一些其他的杂项工作的。',
    );
    await era.printAndWait([
      '虽然今天是',
      digital.get_uma_sex_title(),
      '的休息日，但是今天 ',
      me.get_colored_name(),
      ' 还是来到了教学楼，来提交',
      digital.get_uma_sex_title(),
      '预先参赛资料。',
    ]);
    await era.printAndWait([
      '当 ',
      me.get_colored_name(),
      ' 把事情办完，从办公室出去，却发现，窗外已经稀稀疏疏下起了雨。',
    ]);
    await era.printAndWait(['幸运的是，', me.get_colored_name(), ' 带了伞。']);
    await era.printAndWait([
      '正准备回去时，',
      me.get_colored_name(),
      ' 看到了一个站在走廊下的粉色身影。',
    ]);
    await era.printAndWait([
      '是 ',
      digital.get_colored_name(),
      '，马耳耷拉着，有点无精打采，看起来没带伞。感觉是在某些作品常会发生的一幕。',
    ]);
    await era.printAndWait([
      '但，让人疑惑的是，',
      me.get_colored_name(),
      ' 在不远处的雨中，看到了撑着伞的 ',
      tachyon.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait('不叫住速子吗？');
    await digital.say_and_wait(['……诶，你应该懂吧？', callname, '？']);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 打了几个手势示意后。',
    ]);
    await era.printAndWait([
      '相处了这么久，',
      me.get_colored_name(),
      ' 也逐渐了解了 ',
      digital.get_colored_name(),
      ' 的性格，看起来',
      digital.sex,
      '是不想干扰到 ',
      tachyon.get_colored_name(),
      '。',
    ]);
    await me.say_and_wait('好，懂力，那要不要和我撑一把伞回去。');
    await digital.say_and_wait('感谢！');
    await era.printAndWait([
      '所以，',
      me.get_colored_name(),
      ' 就撑着一把伞，伞下遮着 ',
      me.get_colored_name(),
      ' 和 ',
      digital.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      '雨有点变大了，最大的问题是，风也变大了，而且还不定向。',
    );
    await era.printAndWait([
      '这就导致雨像有生命力一般，硬是往 ',
      me.get_colored_name(),
      ' 伞偏向相反的方向入手。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 尽力不让雨淋到 ',
      digital.get_colored_name(),
      '，把伞往 ',
      digital.get_colored_name(),
      ' 方向偏。',
    ]);
    await digital.say_and_wait([
      callname,
      '，虽然我淋雨是不好了，但是我觉得你的身体再怎么说也会比',
      digital.get_uma_sex_title(),
      '弱一点吧？要是你感冒了那可不好！',
    ]);
    await era.printAndWait([
      '可以看得到 ',
      digital.get_colored_name(),
      ' 生气了，马耳都往后背了。',
    ]);
    await me.say_and_wait('这……感觉被伤到了。');
    await era.printAndWait([
      '缓和气氛，和 ',
      digital.get_colored_name(),
      ' 一路打着啊哈继续走。',
    ]);
    await era.printAndWait([
      '但是 ',
      me.get_colored_name(),
      ' 并没有退步，还是尽力遮着',
      digital.sex,
      '。',
    ]);
    await era.printAndWait([
      '很显然，嘴硬的结果就是，回到训练室 ',
      me.get_colored_name(),
      ' 衣服都湿了，幸好 ',
      digital.get_colored_name(),
      ' 没怎么被淋到。',
    ]);
    await digital.say_and_wait(['啊哈哈哈，', callname, ' 你给我先别动。']);
    await era.printAndWait([
      '不不不，这时 ',
      me.get_colored_name(),
      ' 意识到了，虽然担当',
      digital.get_uma_sex_title(),
      '湿身很不妙，但在担当',
      digital.get_uma_sex_title(),
      '前湿身，好像也不太妙。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 拿起毛巾擦去了 ',
      me.get_colored_name(),
      ' 头上的水珠。',
    ]);
    await era.printAndWait(
      '把衣服脱了后又擦了身子，再拿一件干毛巾盖住身子，只能算是权宜之计。',
    );
    await me.say_and_wait('非常感谢，下面就让我自己来吧。');
    await era.printAndWait([
      '被这样擦身体，',
      me.get_colored_name(),
      ' 或多或少都有点不好意思，',
    ]);
    await era.printAndWait([
      '毕竟 ',
      me.get_colored_name(),
      ' 都是一个成年人。',
      digital.get_colored_name(),
      ' 低下了头，',
      me.get_colored_name(),
      ' 看不到',
      digital.sex,
      '的表情，只能从马耳判断，',
      digital.sex,
      '应该不是不高兴……',
    ]);
    await era.printAndWait('还好吧？');
    era.drawLine();
    await digital.say_and_wait(
      '呼呀，淋了雨洗过澡之后再躺进被窝里，保持良好的睡眠，才可以让明日更有精力的推活啊！',
    );
    await digital.print_and_wait([
      '同舍的 ',
      sys_get_colored_callname(19, 32),
      ' 好像还在研究室，虽然平时也一样。',
    ]);
    await digital.print_and_wait('额，好像忘记写日记了来着……');
    await digital.print_and_wait(
      '算了，就躺进去，回忆一下今天的推活，为明天做准备吧！',
    );
    await digital.print_and_wait([
      '嗯嗯，早上先是进行了在',
      digital.get_uma_sex_title(),
      '酱跑过的草地里享福，中午在食堂摄入推活能量，下午……',
    ]);
    await digital.print_and_wait([
      '下午……是 ',
      callname,
      '……额是……白嫩嫩的肌肤，略有些许形状的腹肌，滴水的头发……',
    ]);
    await digital.print_and_wait('不是不是不是，数码，你在想什么啊！');
    await digital.print_and_wait([
      '感觉是很受',
      digital.get_uma_sex_title(),
      '欢迎的类型……',
    ]);
    await digital.print_and_wait(
      '不不不，数码碳，让我们先用现有知识解读一下，数码碳，你不是看了很多同人本吗，还画了不少呢。',
    );
    await digital.print_and_wait('来来来，在里面找一下答案吧！');
    await digital.print_and_wait([
      '是 ',
      callname,
      ' 招揽',
      digital.get_uma_sex_title(),
      '，然后发掘',
      digital.sex,
      '的才能的故事是吧！',
    ]);
    await digital.print_and_wait('然后，怎么样了来着？');
    await digital.print_and_wait([
      '是',
      digital.get_uma_sex_title(),
      '酱察觉……',
    ]);
    await digital.print_and_wait('然后自家发电……');
    await digital.say_and_wait('不不不！我为什么会联系到这个，再怎么说也……');
    await tachyon.say_and_wait([
      '哦呀哦呀，',
      sys_get_colored_callname(32, 19),
      '，你在说什么呢？',
    ]);
    await digital.say_and_wait('噫————！');
    await digital.print_and_wait([
      '看起来 ',
      sys_get_colored_callname(19, 32),
      ' 回来得不是时候。',
    ]);
    await sys_love_uma_in_event(19);
  };

  handlers[74] = async (digital, me, callname) => {
    const life_marks = new AgLifeMarks();
    if (life_marks.again_74) {
      await print_event_name(
        '一次不行，那就来第二次，这不是理所当然的吗！',
        digital,
      );
      await digital.print_and_wait(
        '数码呀数码，过了这么久了，我终于也从痛苦的深渊中挣扎出来了！',
      );
      await digital.print_and_wait(
        '不过，这么一想，果然！还是喜欢！还是喜欢得不得了！',
      );
      await digital.print_and_wait('所以，再来一次！这次数码你一定能成功的！');
      era.print(['再一次，', me.get_colored_name(), ' 的选择是：']);
      era.printButton('接受', 1);
      era.printButton('拒绝', 2);
      if ((await era.input()) === 1) {
        await digital.print_and_wait('呜啊啊啊啊啊！成了！');
        await digital.print_and_wait('为什么？');
        await digital.print_and_wait('这不重要，成了才重要！');
        await sys_love_uma_in_event(19);
      } else {
        await digital.print_and_wait('不是，这不对吧？');
        await digital.print_and_wait('唔啊啊啊啊，不行！');
        await digital.print_and_wait('就算是数码我，我也是有追求的！');
        await digital.print_and_wait('我一定要，拿下！');
        era.set('cflag:19:爱慕暂拒', 74);
        await punish_rejecting_love(19);
      }
    } else {
      life_marks.again_74 = 1;
      await print_event_name('记', digital);
      await digital.print_and_wait([
        '今天是让人期待无比初生牛犊的',
        digital.get_uma_sex_title(),
        '酱选拔赛噢！再次感叹女神们的无尽潜力！',
      ]);
      await digital.print_and_wait([
        '然后……遇到了个奇怪的人！该说是遇到还是奇怪呢……看起来',
        me.sex,
        '是同好呢。',
      ]);
      digital.print('……');
      await digital.print_and_wait(
        '\n就在今天，数码碳我，终于解决到底是该跑草地还是泥地的问题啦！值得待会小小庆祝一下，不过现在还是先记录吧。',
      );
      await digital.print_and_wait([
        '就是之前那个人，',
        me.sex,
        '居然给出了一个完美的方案！真的是一语惊醒梦中人啊。',
      ]);
      await digital.print_and_wait([
        '最后，我同意了',
        me.sex,
        '的邀请，成为了',
        me.sex,
        '的担当',
        digital.get_uma_sex_title(),
        '。',
      ]);
      digital.print('……');
      await digital.print_and_wait([
        { isBr: true },
        '真的很意外，没想到 ',
        callname,
        ' 居然会和我一起去参加应援活动诶！',
      ]);
      await digital.print_and_wait(
        '我之前从来都没想过，居然能有一个人能跟上我的步伐！',
      );
      await digital.print_and_wait('然后，去了好多地方啊，再回想起来的话……');
      await digital.print_and_wait([
        '现在想想果然，到最后 ',
        callname,
        ' 的脸色也不太好看，看起来要累坏了。',
      ]);
      await digital.print_and_wait([
        '不过即使如此，',
        callname,
        ' 也值得「同志」这一称号！',
      ]);
      digital.print('……');
      await digital.print_and_wait(
        '\n然后，去了好多地方啊，又来了又来了，是圣地巡礼噢！……',
      );
      await digital.print_and_wait(
        '就是去到推们所去过的地方，对推们也有重要意义的地方，模仿推们行为的活动噢！',
      );
      await digital.print_and_wait([
        '我的天呐，',
        callname,
        ' 居然，答应了我的邀请，愿意和我一起折腾。',
      ]);
      await digital.print_and_wait(
        '这简直如同多佛海峡般的共鸣，心脏受损般的共振！',
      );
      await digital.print_and_wait([
        '还有啊还有啊，',
        callname,
        ' 居然知道了很多东西诶！有我完全没知道的推们的知识！果然，还是DD失格了吗……',
      ]);
      await digital.print_and_wait([
        '到了最后，对 ',
        callname,
        ' 进行了界限发言！真的没想到，在宇宙中居然还能有这样一个人肯听我的界限发言啊，感动得都不能自已了……',
      ]);
      digital.print('……');
      await digital.print_and_wait([
        { isBr: true },
        '夏季合宿快要到了，到时候就可以看得到穿着泳衣的',
        digital.get_uma_sex_title(),
        '酱们！',
      ]);
      await digital.print_and_wait([
        '在阳光的照耀下，比阳光更闪耀的是——',
        digital.get_uma_sex_title(),
        '酱啊！',
      ]);
      await digital.print_and_wait('飞溅的西瓜，到底是哪位的手笔呢。');
      await digital.print_and_wait('极速的排球，到底会由哪位接住呢。');
      await digital.print_and_wait([
        '还有刨冰，海鲜，全都在为',
        digital.get_uma_sex_title(),
        '酱们增色啊！',
      ]);
      await digital.print_and_wait(['到时候邀请 ', callname, ' 一起去玩吧！']);
      await digital.print_and_wait('……啊');
      await digital.print_and_wait([
        '（坐在笔记本前的粉色',
        digital.get_teen_sex_title(),
        '，停下了笔）',
      ]);
      await digital.say_and_wait('我是不是，一直都考虑的是自己的……');
      digital.print('……');
      await digital.print_and_wait([
        { isBr: true },
        '如果说，要是把自私与',
        digital.get_uma_sex_title(),
        '放在天平上掂量，那么天平，肯定会倾向右边。',
      ]);
      await digital.print_and_wait([
        '如果，把',
        digital.get_uma_sex_title(),
        '与 ',
        callname,
        ' 放在天平上掂量呢？',
      ]);
      await digital.print_and_wait(
        '虽然难以承认，但是数码我啊，从目前的行为看来，这个心中的天平都是倾向左边啊。',
      );
      await digital.print_and_wait([
        '所以，至少明天，在夏季合宿，为 ',
        callname,
        ' 做',
        me.sex,
        '想做的事情。',
      ]);
      digital.print('……');
      await digital.print_and_wait('\n该怎么写呢……');
      await digital.print_and_wait('事实上现在回忆起来，还是很害羞……');
      await digital.print_and_wait(
        '真的，数码碳我还是第一次知道，有这么一个人这么推我，而且还是那个，我的训练员。',
      );
      digital.print('——');
      await digital.print_and_wait('事实上，感觉从那天开始就很奇怪了……');
      await digital.print_and_wait([
        '看到 ',
        callname,
        ' 已经开始觉得坐立不安，该如何为好。',
      ]);
      await digital.print_and_wait(
        '我懂的，我大概懂的所以啊，是感受心的跳动，还是忽略它的述说？',
      );
      digital.print('……');
      await digital.print_and_wait([
        '\n我不得不坦白，我对 ',
        callname,
        ' 有了想法，对的，就是那种，那种爱情的想法。',
      ]);
      await digital.print_and_wait(
        '事实上啊，这么仔细一想，是不是有点不对劲？',
      );
      await digital.print_and_wait([
        '数码碳你想想啊，和 ',
        callname,
        ' 一起去出门推活，',
      ]);
      await digital.print_and_wait(
        '一起出门，一起看电影，一起逛庙会，在海滩述说感情……',
      );
      await digital.print_and_wait('不对吧？');
      await digital.print_and_wait('这不就是约会吗？！');
      await digital.print_and_wait('（虽然约会不仅是那个意思啦。）');
      await digital.print_and_wait([
        '难道事实上我早就已经和 ',
        callname,
        ' 交往了，但其实只是忘了而已吗？！',
      ]);
      digital.print('……');
      await digital.print_and_wait(
        '\n遭了遭了，昨天没记，今天回想起来才觉得万事不妙啊！',
      );
      await digital.print_and_wait('接下来该如何是好……');
      digital.print('……');
      await digital.print_and_wait('\n今天，');
      await digital.print_and_wait([
        '又和 ',
        callname,
        ' 一起去巡礼了，虽然',
        digital.get_uma_sex_title(),
        '酱们还是依旧如此闪耀，',
      ]);
      await digital.print_and_wait([
        '但和 ',
        callname,
        ' 坐在一起，总会心神不宁地偷瞄 ',
        callname,
        '……',
      ]);
      await digital.print_and_wait([
        '现在回想起来，',
        me.sex,
        '还真是挺帅的啊，而且',
        me.sex,
        '那精神让我都为之敬佩！',
      ]);
      await digital.print_and_wait('……决定了。');
      digital.print('……');
      await digital.print_and_wait(
        '\n今天，与以往不同，我是在早上写下这篇日记的。',
      );
      await digital.print_and_wait(
        '数码，你能行的！额，不是，这样想起来，我没什么魅力啊？',
      );
      await digital.print_and_wait(
        '贫瘠的身体……可谓矮小的身体……就连平时行为，也像一个普普通通……',
      );
      await digital.print_and_wait('不是，更像一个变态啊！');
      await digital.print_and_wait([
        '说起',
        digital.get_uma_sex_title(),
        '就滔滔不绝的，一遇到熟悉的话题就语速不断加快的，这不就是变态吗？',
      ]);
      await digital.print_and_wait([
        '不是，除了 ',
        callname,
        ' 之外，我真的不可能和其他人交往了吧？',
      ]);
      await digital.print_and_wait([
        '诶，能遇到 ',
        callname,
        ' 真的是幸运至极，这就是说，如果过了这村就没这店了！再也找不到这么能理解善待我的人了！',
      ]);
      await digital.print_and_wait('数码啊数码，你这时候就应该立刻行动！');
      await digital.print_and_wait(
        '错过了可能就得下半辈子都捂着枕头用被子盖着脑袋在哭嚎了吧？',
      );
      await digital.print_and_wait([
        callname,
        ' 也是喜欢我的吧？不然的话也不会和我一起去应援的吧？',
      ]);
      await digital.print_and_wait('好好好，成功率可不小呀！');
      await digital.print_and_wait('去去去，不要再等了！');
      era.drawLine();
      await era.printAndWait([
        me.get_colored_name(),
        ' 看了一下手机，按理说现在是 ',
        digital.get_colored_name(),
        ' 早就开始训练的时候了，虽然还未到正式训练的时间……',
      ]);
      await era.printAndWait([
        '不禁回想了一下最近 ',
        digital.get_colored_name(),
        ' 的行为，自从上次海滩那次谈话过后，',
        digital.get_colored_name(),
        ' 好像逐渐开始更加关注 ',
        me.get_colored_name(),
        ' 了。',
      ]);
      await era.printAndWait([
        '看起来',
        digital.sex,
        '除了应援',
        digital.get_uma_sex_title(),
        '酱外，也有挺多心思啊。',
      ]);
      await era.printAndWait([
        '想着想着，',
        digital.get_colored_name(),
        ' 已经从远处跑过来了。',
      ]);
      await era.printAndWait('嗯？怎么脸看起来有点憋红？');
      await era.printAndWait(
        '该不会是受伤了所以才这样吧？今天也是比平时迟了一点。',
      );
      await me.say_and_wait('数码！快停下来！');
      await digital.say_and_wait('诶！');
      await era.printAndWait([
        '快步跑到因惊讶而停下的 ',
        digital.get_colored_name(),
        ' 跟前。',
      ]);
      await era.printAndWait([
        '蹲下仔细观察了 ',
        digital.get_colored_name(),
        ' 的腿部。',
      ]);
      await digital.say_and_wait(['那个……', callname, '？']);
      await era.printAndWait('嗯……至少看起来没有红肿……');
      await me.say_and_wait('是不是腿部受伤了？要不要去保健室？');
      await digital.say_and_wait('诶？');
      await era.printAndWait([
        '遭了，',
        digital.get_colored_name(),
        ' 好像还没意识到，看起来得先查看一下了。',
      ]);
      await era.printAndWait(
        '先检查一下膝盖，用左手扶住凸起外侧，用右手轻按里侧韧带，嗯，没有僵硬的感觉。',
      );
      await digital.say_and_wait('那个，我说……');
      await era.printAndWait(
        '然后是大腿，股二头肌和股直肌都处于很好的放松状态。',
      );
      await digital.say_and_wait('能不能先……停下？');
      await me.say_and_wait('这怎么能停！');
      await era.printAndWait('接着是小腿，小腿肌看起来状态完美。');
      await era.printAndWait(
        '最后是脚了，不过还得先脱鞋，这样直接脱的话如果有伤肯定会造成二次伤害……',
      );
      await digital.say_and_wait([callname, '！我没有问题啦！']);
      await me.say_and_wait('那为什么今天状态这么奇怪？');
      await era.printAndWait([
        '还处于半蹲的状态仰着头看着 ',
        digital.get_colored_name(),
        ' 的脸，看起来更发的红了。',
      ]);
      await digital.say_and_wait('那个啊……先！先去训练室再说明吧！');
      await me.say_and_wait('但是……');
      await digital.say_and_wait('……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 只是一言不发着盯着 ',
        me.get_colored_name(),
        '。',
      ]);
      era.drawLine();
      await me.say_and_wait('那，可以说明了吗？腿是没问题是吧？');
      await digital.say_and_wait('那个……先说明啊，腿是肯定没问题的。');
      await me.say_and_wait('……那是为什么……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 低着头，玩弄着手指，只能一个一个字吐出来。',
      ]);
      await digital.say_and_wait('事实上……我……自从……诶……');
      await era.printAndWait([
        '说到一半，',
        digital.get_colored_name(),
        ' 又叹起了气。',
      ]);
      await me.say_and_wait('要不我先聊下吧。');
      await me.say_and_wait('这里也不好聊，我们就一起出去吧。');
      await digital.say_and_wait('……啊。');
      await era.printAndWait(
        '起身，打开训练室的门，去到训练场，爬上训练场的看台。',
      );
      await era.printAndWait([
        '赛道，早上的朝阳恰好是给勤奋训练的',
        digital.get_uma_sex_title(),
        '最好的咖啡。',
      ]);
      await digital.say_and_wait(['那个，', callname, '？']);
      await me.say_and_wait('去下一个地方吧。');
      await digital.say_and_wait('啊？');
      await era.printAndWait([digital.get_colored_name(), ' 会跟上来的。']);
      await era.printAndWait('河边，正午照耀下的河流亮得晃眼。');
      await digital.say_and_wait([callname, '，你是不是想……']);
      await era.printAndWait('神社，下午斑驳树影恰好能遮住朝拜之地。');
      await digital.say_and_wait('……');
      await era.printAndWait('公园，趁太阳还没下班灯光就早早替班了。');
      await digital.say_and_wait('……');
      await era.printAndWait('海边，没有灯光的蓝色海岸只是由月光照明。');
      await digital.say_and_wait('……');
      await digital.say_and_wait('跟着走了一圈，感觉怎么着都无所谓了。');
      await me.say_and_wait('那就好。');
      await digital.say_and_wait([callname, '。']);
      await me.say_and_wait('嗯。');
      await digital.say_and_wait('我喜欢你。');
      era.print(['此刻，', me.get_colored_name(), ' 的选择：']);
      era.printButton('接受', 1);
      era.printButton('拒绝', 2);
      const ret = await era.input();
      await digital.print_and_wait([
        '真是狼狈啊，没想到表白都要由 ',
        callname,
        ' 来引导。',
      ]);
      if (ret === 1) {
        await digital.print_and_wait('不过，成功了。');
        await digital.print_and_wait('对，成功了。');
        await digital.print_and_wait(
          '本来应该是更欣喜才对的，不过现在的感觉更多的是……',
        );
        await digital.print_and_wait('一种洋溢的幸福感。');
        await sys_love_uma_in_event(19);
      } else {
        await digital.print_and_wait('哈哈哈哈，结果，还是失败了。');
        await digital.print_and_wait([
          '不过，我懂了，我和 ',
          callname,
          ' 的关系并不仅是男女关系。',
        ]);
        await digital.print_and_wait('这其中有着更为复杂的情感所在……');
        await digital.print_and_wait(
          '想了很多，想写的很多，但是下不了笔……笔记本都被弄湿了……',
        );
        await digital.print_and_wait('还是觉得不甘啊……');
        era.set('cflag:19:爱慕暂拒', 74);
        await punish_rejecting_love(19);
      }
    }
  };
};
