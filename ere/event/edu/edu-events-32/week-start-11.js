const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const HookArg = require('#/data/event/hook-arg');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.palace = async () => {
    const edu_marks = new TachyonEduMarks(),
      temp = [era.get('love:32'), era.get('relation:32:0')];
    if (era.get('item:用途不明的眼镜')) {
      era.set('love:32', 0);
      era.set('relation:32:0', 0);
    }
    await require('#/event/edu/edu-common')(
      32,
      new HookArg(event_hooks.week_start),
    );
    if (era.get('item:用途不明的眼镜')) {
      era.set('love:32', temp[0]);
      era.set('relation:32:0', temp[1]);
      const callname = sys_get_callname(32, 0),
        coffee = get_chara_talk(25),
        me = get_chara_talk(0),
        tachyon = get_chara_talk(32);
      if (!edu_marks.plan_b) {
        await print_event_name('极限的彼方', tachyon);
        await era.printAndWait([
          '与 ',
          tachyon.get_colored_name(),
          ' 的三年结束了',
        ]);
        era.println();
        await era.printAndWait([
          '在毕业典礼后，',
          me.get_colored_name(),
          ' 也曾问过',
          tachyon.sex,
          '未来的打算',
        ]);
        await tachyon.say_and_wait('身为学生，最重要的本份不就是学习吗？');
        await era.printAndWait([
          tachyon.sex,
          '只笑着说了这么一句与',
          tachyon.sex,
          '的风格完全不符的话语',
        ]);
        era.println();
        await era.printAndWait('然而，这次似乎是真的');
        await era.printAndWait([
          me.get_colored_name(),
          ' 在当年的大学统一考试考生名单里看见了',
          tachyon.sex,
          '的名字',
        ]);
        await era.printAndWait([
          '虽然令人难以置信，但',
          tachyon.sex,
          '似乎选择了继续升学',
        ]);
        era.println();
        await era.printAndWait('今天，是各大学的开学典礼');
        await era.printAndWait([
          me.get_colored_name(),
          ' 回想起几个月前，发榜的那天',
        ]);
        await era.printAndWait([
          '听说',
          tachyon.sex,
          '上榜的 ',
          me.get_colored_name(),
          '，内心的心情不知该如何表达',
        ]);
        await era.printAndWait([
          '充满了可能性的',
          tachyon.sex,
          '，最终也还是要走上平凡人的道路',
        ]);
        await era.printAndWait(
          '如普通人一般升学，如普通人一般毕业，如普通人一般的就业',
        );
        await era.printAndWait([
          '然后，迟早有一天，',
          tachyon.sex,
          '……也会变成像自己一样无聊的大人吗？',
        ]);
        await era.printAndWait([
          '在那场只有两人的庆祝会上，',
          me.get_colored_name(),
          ' 对',
          tachyon.sex,
          '说了什么，',
          tachyon.sex,
          '对 ',
          me.get_colored_name(),
          ' 说了什么都已经忘得一干二净了',
        ]);
        era.println();
        await era.printAndWait([
          '与',
          tachyon.sex,
          '告别了的自己，也要回到原来的生活，迎来下一名负责',
          tachyon.get_uma_sex_title(),
          '，支持',
          tachyon.sex,
          '的梦想',
        ]);
        await era.printAndWait([
          '但像',
          tachyon.sex,
          '那样，能够将 ',
          me.get_colored_name(),
          ' 的目光灼烧的，如光一般的',
          tachyon.get_uma_sex_title(),
          '……恐怕也再见不到了吧',
        ]);
        await era.printAndWait([
          '不知不觉，',
          me.get_colored_name(),
          ' 竟下意识的走到了曾是旧理科准备室，后来变成实验室，如今想当然又要变回理科准备室的空教室',
        ]);
        era.println();
        await me.say_and_wait('来都来了，顺便整理一下吧');
        await era.printAndWait([
          me.get_colored_name(),
          ' 将门打开，看见的是一如既往做着实验的 ',
          tachyon.get_colored_name(),
          ' 和在自己的角落喝着咖啡的 ',
          coffee.get_colored_name(),
          '……这种妄想，当然是不存在的',
        ]);
        await era.printAndWait([
          '在毕业典礼结束后就没有人进入过的这间教室，还维持着 ',
          me.get_couple_title(),
          ' 最后一次使用时的样貌',
        ]);
        await era.printAndWait([
          '放置在实验桌上的空试管、里面液体已经干枯的烧瓶，以及桌上的红茶污渍，岁月的痕迹勾起了 ',
          me.get_colored_name(),
          ' 三年里的种种回忆',
        ]);
        era.println();
        await tachyon.say_and_wait(['……啊，', callname]);
        era.println();
        await era.printAndWait([
          '身后传来了熟悉的呼喊声，',
          me.get_colored_name(),
          ' 转过头来',
        ]);
        await era.printAndWait([
          '是 ',
          me.get_colored_name(),
          ' 朝朝暮暮心心念念的',
          tachyon.sex,
        ]);
        era.println();
        await tachyon.say_and_wait('既然来了，就快来帮我搬东西吧');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '……不，',
          tachyon.get_colored_name(),
          ' 在看见 ',
          me.get_colored_name(),
          ' 的刹那，露出了一如往常的笑容，笑容明媚到 ',
          me.get_colored_name(),
          ' 产生了一种错觉，仿佛 ',
          me.get_couple_title(),
          ' 之间什么也没改变',
        ]);
        await era.printAndWait(
          '也是啊，既然已经毕业，那么这里的实验器具等，当然也必须搬走了',
        );
        await era.printAndWait([
          me.get_colored_name(),
          ' 不发一语，默默的跟在 ',
          tachyon.get_colored_name(),
          ' 的身后',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 原本以为，',
          tachyon.sex,
          '大概是想把东西搬到自己家，或者现在的学校，又或者……回收处理？',
        ]);
        await era.printAndWait([
          '却没想到，',
          tachyon.sex,
          '将所有的器具都搬到了隔壁的理科准备室',
        ]);
        era.println();
        await tachyon.say_and_wait('好了，这样就完成了……');
        era.println();
        await era.printAndWait([
          '最后的',
          tachyon.sex,
          '，站在恐怕再也不会回来的教室门前，露出了寂寞的笑容',
        ]);
        await era.printAndWait(['随后，回头看向了 ', me.get_colored_name()]);
        era.println();
        await tachyon.say_and_wait([callname, '，让我们开始今天的实验吧！']);
        era.println();
        await era.printAndWait([tachyon.sex, '的眼中，依然闪耀着疯狂的光芒']);
        await era.printAndWait([
          '如三年间的每一天，',
          tachyon.sex,
          '每次见面时的招呼语一般',
        ]);
        await era.printAndWait([
          '不知不觉间，',
          me.get_colored_name(),
          ' 也露出了笑容来，越笑越开心，越笑越大声，甚至笑出了眼泪来',
        ]);
        await era.printAndWait('或许这三年间，真的有些东西是永远不会改变的吧');
        await era.printAndWait([
          '比如 ',
          me.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 的关系，比如',
          tachyon.sex,
          '的求知欲，比如 ',
          me.get_colored_name(),
          ' 对',
          tachyon.sex,
          '及',
          tachyon.sex,
          '对 ',
          me.get_colored_name(),
          ' 的感情',
        ]);
        await era.printAndWait([
          '风沙沙吹过走廊，仿佛在附和着 ',
          me.get_colored_name(),
          ' 的话语',
        ]);
        await era.printAndWait('窗外落叶飘落，秋日已至');
        era.drawLine({ content: '三天后' });
        era.printButton('「……等一下！？那天原来不是来道别的吗！？」', 1);
        await era.input();
        await tachyon.say_and_wait([
          '…………',
          callname,
          '？我说这都过去三天了你才反应过来，是不是有点慢了',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的实验室……隔壁的新实验室',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 在「就陪着',
          tachyon.sex,
          '最后闹一次吧」的想法下配合了',
          tachyon.sex,
          '的「最后一场」实验',
        ]);
        await era.printAndWait('却没想到这最后一场一做就是三天');

        era.printButton('「不是说要上大学吗！？」', 1);
        await era.input();
        await tachyon.say_and_wait('是啊，我上的是特雷森大学部啊');
        era.println();
        await me.say_and_wait('特雷森哪来的大学部！？我怎么没听说过！？');
        era.println();
        await tachyon.say_and_wait(
          '虽然剧情里没有提过，但官方设定里特雷森学园确实是有大学部的哦',
        );
        era.printButton('「官方设定是什么鬼啊！？」', 1);
        era.printButton(
          '「退一万步，就算真的有好了，你都不用去上课的吗！？」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait([
          '……',
          callname,
          '，我都开始怀疑你有没有上过大学了，大学哪有人乖乖去上课的啊',
        ]);
        era.println();
        await era.printAndWait(
          '虽然很想反驳，但想到面前是连高中课业都爱去不去几乎全部翘掉的人，忽然就没什么反驳的余力了',
        );
        era.printButton('「那为什么要忽然换教室啊！？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '不……这个让我说也有点那个，但那间教室因为我们这几年的使用……',
        );
        await tachyon.say_and_wait('稍微出现了一些安全上的问题……');
        await tachyon.say_and_wait(
          '因此需要检查跟维修管理……大概一周的时间就能换回去了',
        );
        era.printButton('「只是一周的时间就别搞的好像多感伤的样子啊！？」', 1);
        await era.input();
        await tachyon.say_and_wait([
          '啊，',
          callname,
          ' 你好过分，那间教室好歹也是承载了我们三年的虐……使用，感谢一下也不过分吧？',
        ]);
        era.println();
        await era.printAndWait('无话可说');
        await era.printAndWait([
          '现在看来仿佛一切确实都如',
          tachyon.sex,
          '说的那样',
        ]);
        await era.printAndWait('搞了半天，原来只有自己在自顾自的感伤吗？');
        era.println();
        await tachyon.say_and_wait(
          '明明发榜那天就跟你说过入学的学校跟之后实验要继续拜托你的事了……',
        );
        await tachyon.say_and_wait(
          '结果却全都被忘光了……果然，那天在饮料里下的药有点太重了吗？',
        );
        era.println();
        await era.printAndWait(
          '原来不记得那天的事情不是艺术美化而是真的喝到断片了吗！？',
        );
        era.println();
        await tachyon.say_and_wait([
          '好了好了，不说这些闲话了，',
          callname,
          '，快点走吧，今天的药如果没有意外的话……',
        ]);
        await tachyon.say_and_wait([
          '…或许能够颠覆整个',
          tachyon.get_uma_sex_title(),
          '世界也说不定啊',
        ]);
        era.println();
        await era.printAndWait('颠覆……世界……？');
        era.drawLine();
        await era.printAndWait([
          '在左思右想，想出了第一百二十四种 ',
          tachyon.get_colored_name(),
          ' 的发明造成世界毁灭的可能性后，',
          me.get_colored_name(),
          ' 跟着',
          tachyon.sex,
          '来到了操场',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '拿出了一瓶一如往常却又从未见过的药水',
        ]);
        await era.printAndWait('一如往常，是一如往常的发光药水');
        await era.printAndWait(
          '从未见过，却是药水的光芒，并非平常常见的任何颜色',
        );
        await era.printAndWait(
          '硬要说的话……是蓝白相间的光芒，却又并非是纯粹的蓝白光混合',
        );
        await era.printAndWait('或许，这瓶药真的有办法颠覆整个世界');
        await era.printAndWait([
          '不知为何，',
          me.get_colored_name(),
          ' 忽然产生了这种想法',
        ]);
        await era.printAndWait([
          '但是，这种颠覆到底是好是坏，',
          me.get_colored_name(),
          ' 还无法辨明',
        ]);
        era.println();
        await tachyon.say_and_wait('那么，我要喝了');
        era.println();
        await era.printAndWait([
          '没来得及说出什么，',
          tachyon.get_colored_name(),
          ' 便飞快的打开了药水瓶，灌了下去',
        ]);
        era.println();
        await tachyon.say_and_wait('然后……');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '忽然开始跑了起来，一切发生的太过突然，导致 ',
          me.get_colored_name(),
          ' 完全无法做出任何举动',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '跑完了正常的训练量后，脸不红气不喘的回到了 ',
          me.get_colored_name(),
          ' 的身旁',
        ]);
        await era.printAndWait([
          '这种程度的锻炼，对现在的',
          tachyon.sex,
          '而言早就不算什么了，',
        ]);
        await era.printAndWait([
          '或者说，以 ',
          me.get_couple_title(),
          ' 当初的测量，现在的',
          tachyon.sex,
          '应该早就已经抵达',
          tachyon.get_uma_sex_title(),
          '的极限了才对……',
        ]);
        era.println();
        await era.printAndWait([
          '想到这，',
          me.get_colored_name(),
          ' 忽然有了个想法',
        ]);
        await era.printAndWait([
          '虽然疯狂，但如果是这样的话……那么',
          tachyon.sex,
          '的举动，这一切都有办法解释了',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 用颤抖的手翻找着口袋，寻找曾经，',
          tachyon.sex,
          '给 ',
          me.get_colored_name(),
          ' 的那副眼镜',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '怎么样，',
          callname,
          '？你现在看到的我，『是多少』？',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 眼中的',
          tachyon.sex,
          '，头上的数字和符号，并非是代表极限的『SS+ 1200』，而是……',
        ]);
        await era.printAndWait('『UG 1205』');
        era.drawLine();
        await tachyon.print_and_wait([
          '看到 ',
          me.get_colored_actual_name(),
          ' 的表情，',
          tachyon.get_colored_name(),
          ' 笑了',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '不需要器具的观测也能知道自己的变化，毕竟有谁能够比',
          tachyon.sex,
          '更了解自己的身体呢？',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '想要的，其实就是眼前 ',
          me.get_colored_actual_name(),
          ' 的这副表情',
        ]);
        era.println();
        await tachyon.print_and_wait('与他一同走过的三年');
        await tachyon.print_and_wait('为了梦想拼尽全力的那些时光');
        await tachyon.print_and_wait('两人的努力，流尽了汗水泪水才突破的');
        era.println();
        await tachyon.print_and_wait('名为极限的障壁');
        era.println();
        await tachyon.print_and_wait('惊讶吧？喜悦吧？震惊吧？');
        await tachyon.print_and_wait([
          '渐渐的，',
          tachyon.get_colored_name(),
          ' 控制不住自己脸上的表情了',
        ]);
        await tachyon.print_and_wait(
          '啊啊，明明这句话是想更云淡风轻一些说出的',
        );
        await tachyon.print_and_wait('但是嘴角，忍耐不住的上扬');
        await tachyon.print_and_wait('但是眼角，无法控制的流泪');
        await tachyon.print_and_wait('这就是喜极而泣吗？');
        await tachyon.print_and_wait('不行，忍耐不住了');
        era.println();
        await tachyon.say_and_wait([
          '来吧，',
          callname,
          '，让我们一同探索，极限之后的世界吧！',
        ]);
        era.println();
        await tachyon.print_and_wait('不行，现在的自己脸上的表情一定很蠢吧');
        await tachyon.print_and_wait(
          '真是的，露出这种表情去谈判，怎么能让人信赖呢',
        );
        await tachyon.print_and_wait(
          '要是有谁会信任露出这种愚蠢表情的人的话……',
        );
        era.println();
        await me.say_and_wait('呵呵，那必然是，疯子或者狂人吧');
        await tachyon.print_and_wait([
          '比如，眼前露出了同样愚蠢的表情，眼睛中依然闪烁着令人疯狂的光芒的 ',
          me.get_colored_actual_name(),
          ' 一样',
        ]);
        era.println();
        await era.printAndWait(
          '疯狂的科学家，与狂信的豚鼠，迎来了最适合两人的结局',
          { color: buff_colors[1] },
        );
      } else {
        await print_event_name('Plan B的未来', tachyon);
        await era.printAndWait([
          '与 ',
          tachyon.get_colored_name(),
          ' 的三年结束了',
        ]);
        era.println();
        await era.printAndWait([
          '在毕业典礼后，',
          me.get_colored_name(),
          ' 也曾问过',
          tachyon.sex,
          '未来的打算',
        ]);
        await era.printAndWait([
          '「会再见的，',
          callname,
          '」',
          tachyon.sex,
          '只说了这么一句',
        ]);
        era.println();
        await era.printAndWait([
          '然后，',
          tachyon.get_colored_name(),
          ' 离开了',
        ]);
        await era.printAndWait('离开特雷森学园，离开这个国家');
        await era.printAndWait('仿佛，消失在人间一般');
        await era.printAndWait(['现在的', tachyon.sex, '究竟在哪里呢？']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 也曾经有过这样的疑问',
        ]);
        await era.printAndWait('有没有好好吃饭');
        await era.printAndWait('有没有好好睡觉');
        await era.printAndWait([
          '独自一人的',
          tachyon.sex,
          '，真的有办法照顾好自己吗',
        ]);
        era.println();
        await era.printAndWait('明明对方已经成年，还是忍不住如此担心');
        await era.printAndWait('但是……其实自己心里也知道');
        await era.printAndWait('这种担心是多余的');
        await era.printAndWait([tachyon.get_colored_name(), '，是天才']);
        await era.printAndWait('是当之无愧，生而知之的天才');
        await era.printAndWait([
          '这样的',
          tachyon.sex,
          '，无论在何处都必然能够绽放出光芒吧',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 怀着对不知道身在何处的 ',
          tachyon.get_colored_name(),
          ' 的期许，打开了家中的大门',
        ]);
        era.println();
        await tachyon.say_and_wait(['哦呀，', callname, '，今天回来的挺早啊']);
        era.println();
        await era.printAndWait([
          '无视了躺在沙发上翘着脚的某名废柴',
          tachyon.get_uma_sex_title(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          '对了，晚餐晚餐……',
          callname,
          '，今天轮到你做了吧～～',
        ]);
        era.println();
        await era.printAndWait([
          '自己心目中，天才的',
          tachyon.get_uma_sex_title(),
          '，超光速的粒子，',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '一定还在世界的某个角落，进行着与',
          tachyon.get_uma_sex_title(),
          '的未来息息相关的研究',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '对了对了，今天有新的邮件……训练员研讨会……长达三天！？删掉删掉，这种东西参加了有什么意义',
        );
        era.println();
        await era.printAndWait(
          '绝对，不是那个，毕业之后还赖在学校的废弃教室里不走',
        );
        await era.printAndWait(
          '住处则是毕业当天就带着行李自说自话搬进自己家中',
        );
        await era.printAndWait('现在已经完全将自己的家当成地盘');
        await era.printAndWait([
          '现在还在随意侵犯自己隐私的这名咸鱼',
          tachyon.get_uma_sex_title(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '？',
          callname,
          '～～～～理我一下嘛～～～～',
        ]);
        await me.say_and_wait('所以到底为什么速子要赖在我家里啊！');
        era.println();
        await era.printAndWait('终于，还是无法无视对方');
        await era.printAndWait(
          '忍不住喊出了从第一天就憋在心里，却因为对方的理所当然而一时说不出口的疑惑',
        );
        era.println();
        await tachyon.say_and_wait('欸———有什么关系吗？');
        await tachyon.say_and_wait(
          '再说，我又不是完全不做家事，扫地拖地什么的，不是还有帮忙分担做晚饭嘛～～',
        );
        era.println();
        await era.printAndWait([
          '确实，要说现在的 ',
          tachyon.get_colored_name(),
          ' 比起过去有什么进展的话',
        ]);
        await era.printAndWait('大概就是生活技能的成长吧');
        await era.printAndWait([
          '与以前什么事都要自己代劳的 ',
          tachyon.get_colored_name(),
          ' 不同',
        ]);
        await era.printAndWait([
          '现在的 ',
          tachyon.get_colored_name(),
          '，确实在进步着',
        ]);
        await era.printAndWait('从吃完饭后洗碗盘，到生活中会帮忙扫地拖地');
        await era.printAndWait('虽然只是极微小的差距，但确实在进步着……');
        await era.printAndWait(
          '但是，为什么有种淡淡的，像是老父亲看着开始做家事的女儿而感到欣慰的心情呢',
        );
        await era.printAndWait(
          '不对，差点被绕过去了……重点不是为什么要住在我这里吗！',
        );
        era.println();
        await tachyon.say_and_wait('这种小事就别在意了，没事没事');
        await tachyon.say_and_wait('哦呀，还是说是那个，钱的问题吗？');
        await tachyon.say_and_wait(
          '确实，生活上的分担不仅仅只有家事……包括生活开销也是应该分担的',
        );
        await tachyon.say_and_wait('那么，先从这个月的生活费开始分担吧，');
        await tachyon.say_and_wait(
          '幸好，哪怕不谈奖金，过去我申请过的专利什么……专利费大概还是够的吧',
        );
        era.println();
        await era.printAndWait('重点不是钱……不，钱很重要，但现在的重点不在钱');
        await era.printAndWait([
          '说到底……',
          tachyon.get_colored_name(),
          ' 不选择继续升学吗？甚至，出国留学之类……？',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '我说，',
          callname,
          '，你觉得按部就班的升学，对我真的有任何帮助吗？',
        ]);
        await tachyon.say_and_wait(
          '这种团体教育，方便的是没决定好自己路的庸人，对我这种天才而言，自己的决定就是最好的选择',
        );
        era.println();
        await era.printAndWait('正如之前不想承认的那样');
        await era.printAndWait([tachyon.get_colored_name(), ' 确实是一名天才']);
        await era.printAndWait([
          '或许自己确实没有办法对',
          tachyon.sex,
          '的选择做出质疑',
        ]);
        await era.printAndWait(
          '但是，除此之外应该还有更多问题吧，比如……家人之类的……？',
        );
        era.println();
        await tachyon.say_and_wait([
          '我说，',
          callname,
          '……我已经成年了哦？法律上来讲是完全行为能力人了，我有自主选择住处的权利吧？',
        ]);
        await me.say_and_wait(
          '我相信法律绝对不会保障把别人家当成自己住处的行为',
        );
        await tachyon.say_and_wait(
          '嘛，反正空间不是挺大的吗，让我挤挤也不会怎么样吧',
        );
        await tachyon.say_and_wait('……再说，你舍得让我离开吗？');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 用玩味的眼神盯着 ',
          me.get_colored_name(),
        ]);
        await era.printAndWait('每一次都是如此');
        await era.printAndWait('仿佛被蛇盯上的豚鼠一般');
        await era.printAndWait('仿佛将一切吸入的深渊一般');
        await era.printAndWait([
          '每次只要被 ',
          tachyon.get_colored_name(),
          ' 用那样的眼眸注视，就再说不出任何反驳的话',
        ]);
        era.println();
        await tachyon.say_and_wait('如此爱着我的你，真的忍心让我离开吗？');
        await tachyon.say_and_wait('被我如此爱着的你，真的打算拒绝我的爱吗？');
        era.println();
        await era.printAndWait('口舌干燥');
        await era.printAndWait([
          '不知不觉，',
          tachyon.get_colored_name(),
          ' 已经逼近了自己身前',
        ]);
        await era.printAndWait(['就如菊花赏那时的', tachyon.sex, '一样']);
        await era.printAndWait('但与那时不同的，这次真的有着某种预感');
        await era.printAndWait('「要被吃掉了」的实感');
        era.println();
        await era.printAndWait('啊啊');
        await era.printAndWait('说到底，这也是自己选择的道路吧');
        await era.printAndWait([
          me.get_colored_name(),
          ' 想起了温泉旅行时与 ',
          tachyon.get_colored_name(),
          ' 的对话',
        ]);
        era.println();
        await era.printAndWait([
          '当初自己已经决定，无论',
          tachyon.sex,
          '最后选择的会是什么可能性，都必然会跟随到最后',
        ]);
        await era.printAndWait('注视深渊者，必将被深渊所噬');
        await era.printAndWait([
          me.get_colored_actual_name(),
          ' 恐怕，一生也逃不出',
          tachyon.sex,
          '眼中的深渊了吧',
        ]);
      }
    }
  };
};
