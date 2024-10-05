const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.japa_cup = async (tachyon, me, callname) => {
    await print_event_name('超越极限', tachyon);
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await say_by_passer_by_and_wait('解说', [
      coffee.get_colored_name(),
      '！打破了日本杯的纪录……不！打破了世界纪录！世界2400m的纪录，在几个月前才由 ',
      tachyon.get_colored_name(),
      ' 击破的纪录，被漆黑的幻影再次超越！',
    ]);
    era.println();
    await tachyon.print_and_wait('真的超越了');
    await tachyon.print_and_wait(['在 ', t_call_c, ' 跑过终点线的瞬间']);
    await tachyon.print_and_wait('自己与其他人同样兴奋');
    era.println();
    await tachyon.print_and_wait('这也是理所当然的');
    await tachyon.print_and_wait([
      '虽然有些自卖自夸，但',
      tachyon.sex,
      '可是自己看中最有可能超越极限的',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait('只是最接近与能够超越，还是有着极大的区别');
    await tachyon.print_and_wait(['但是……', tachyon.sex, '真的做到了！']);
    await tachyon.print_and_wait(
      '虽然看上去不知为何……跑的有种不明的违和感，但那也无所谓',
    );
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 是极限的',
      tachyon.get_uma_sex_title(),
      '，而 ',
      coffee.get_colored_name(),
      ' ',
      tachyon.sex,
      '现在，超越了极限',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '！',
      callname,
      '！',
      t_call_c,
      ' ',
      tachyon.sex,
      '……',
    ]);
    era.println();
    await tachyon.print_and_wait('想要兴奋的与身边的人分享喜悦');
    await tachyon.print_and_wait('万般的艰辛研究，现在终于得到了结果');
    await tachyon.print_and_wait('然而');
    era.println();
    await tachyon.say_and_wait(['……', callname, '？']);
    era.println();
    await tachyon.print_and_wait('没有应答');
    await tachyon.print_and_wait([
      '身边的',
      me.sex,
      '，看台上的观众，所有人的焦点',
    ]);
    await tachyon.print_and_wait(['全都聚焦在中央的', tachyon.sex, '身上']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 的呼唤，被震耳欲聋的欢呼及喝采盖过',
    ]);
  };

  handlers.ending = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    const c_call_m = sys_get_colored_callname(25, 0),
      c_call_t = sys_get_colored_callname(25, 32),
      coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    if (edu_marks.plan_b) {
      await print_event_name(
        [
          { color: 'white', content: '最强的' },
          {
            color: coffee.color,
            content: coffee.get_uma_sex_title(),
            fontWeight: 'bold',
          },
          { color: 'white', content: '，最快的' },
          { color: tachyon.color, content: '跑法', fontWeight: 'bold' },
        ],
        tachyon,
      );
      await tachyon.print_and_wait([
        '一开始，',
        tachyon.get_colored_name(),
        ' 只是在等待着',
      ]);
      await tachyon.print_and_wait([
        '等待比赛结束，等待 ',
        callname,
        ' 给出',
        me.sex,
        '的回答',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        '不能理解这场比赛到底有什么意义',
      ]);
      await tachyon.print_and_wait([
        '难道是为了让自己看清现在与 ',
        t_call_c,
        ' 的差距吗？',
      ]);
      await tachyon.print_and_wait(
        '是嫌现在的自己还不够可悲吗？甚至不由得产生这种自暴自弃的想法',
      );
      await tachyon.print_and_wait([
        '因此，',
        tachyon.sex,
        '并没有仔细关注着赛场',
      ]);
      await tachyon.print_and_wait('只是等待时间过去');
      era.println();
      await say_by_passer_by_and_wait('解说', [
        '比赛开始！所有',
        tachyon.get_uma_sex_title(),
        '稳定的出闸',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '最开始，是解说的声音勾起了',
        tachyon.sex,
        '的好奇心',
      ]);
      await tachyon.print_and_wait([
        '哪怕不能奔跑，',
        tachyon.get_colored_name(),
        ' 也还是对一切都具有着好奇',
      ]);
      await tachyon.print_and_wait([
        '尤其对方是理论上自己应该知根知底的 ',
        t_call_c,
      ]);
      era.println();
      await tachyon.print_and_wait('随后，是违和');
      await tachyon.print_and_wait('其实违和感并非是从现在才有的');
      await tachyon.print_and_wait(['从日本杯结束那时起就有这种感觉']);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' 的跑法……似乎和最初',
        tachyon.sex,
        '的跑法有些微小的不同点',
      ]);
      await tachyon.print_and_wait([
        '如果说，自己是一直盯着 ',
        t_call_c,
        ' 的话，或许根本发现不了这种不同，便是如此微小的不同',
      ]);
      await tachyon.print_and_wait([
        '但对日本杯后便再也没有认真看过 ',
        t_call_c,
        ' 奔跑的自己而言，哪怕只是一丝丝的改变，都是无比明显的',
      ]);
      await tachyon.print_and_wait('尤其……');
      await tachyon.print_and_wait([
        '那虽然依旧是 ',
        t_call_c,
        ' 自己的跑法，但是……',
      ]);
      await tachyon.print_and_wait('细节部分……出闸的姿势……换气的方式……');
      await tachyon.print_and_wait([
        '那些细节……是 ',
        tachyon.get_colored_name(),
        ' 自己都未曾注意过的，自己特有的习惯',
      ]);
      await tachyon.print_and_wait('那是……');

      era.printButton(
        `「这是……融合了我所知道，最快，最强的两名${tachyon.get_uma_sex_title()}的跑法」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        '令自己魂牵梦萦的那个人，不知何时已经站在了自己身旁',
      );
      await tachyon.print_and_wait([
        '眼中的光，依旧闪烁，依旧盯着在赛场上奔跑的那名',
        tachyon.get_uma_sex_title(),
      ]);
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.print_and_wait([me.sex, '眼中的光，究竟为谁而明']);
      await tachyon.print_and_wait([
        '是为了 ',
        tachyon.get_colored_name(),
        '，还是 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '以前的自己想当然尔认为，既然自己已经无法登上赛场，那么看着的必然就是 ',
        t_call_c,
      ]);
      await tachyon.print_and_wait('但是……');
      era.printButton(
        '「除此之外我也坚信，没有比这更绚烂，更灼目，更使人着迷的跑法了」',
        1,
      );
      await era.input();
      await say_by_passer_by_and_wait('解说', [
        coffee.get_colored_name(),
        '！超越了光速的漆黑幻影！称霸了年末的中山赛场的是 ',
        coffee.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '恍惚下，自己仿佛看见了，',
        tachyon.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 同时跨越终点线的瞬间',
      ]);
      era.drawLine();
      await era.printAndWait([
        '为了实现那名',
        tachyon.get_teen_sex_title(),
        '能够超越朋友的梦想',
      ]);
      await era.printAndWait('为了让使自己魂牵梦萦的身影能够继续在眼前奔跑');
      await era.printAndWait([
        '让最强的',
        tachyon.get_uma_sex_title(),
        '与最快的速度结合',
      ]);
      await era.printAndWait('脑袋里想了许多应该在此时说出的帅气话语');
      await era.printAndWait('但在开口的瞬间……又被堵了回去');
      await era.printAndWait('啾……咕……啾咕……');
      await tachyon.say_and_wait('如此多人的观众席上，如此大胆的吻');
      await era.printAndWait([
        '……如果不是周围的人都在关注赛场中央的 ',
        coffee.get_colored_name(),
        ' 的话，绝对会引起又一波的声讨风波吧',
      ]);
      await era.printAndWait([
        '某种意义上，也真不愧是',
        tachyon.sex,
        '会做出的行为',
      ]);
      era.println();
      await era.printAndWait([
        '持续了不知道多久，久到 ',
        me.get_colored_name(),
        ' 开始起自己的生命，以及静下心来的观众会发现 ',
        me.get_couple_title(),
        ' 二人的不对时，',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '才总算想起了无论对人类还是',
        tachyon.get_uma_sex_title(),
        '而言，最重要的氧气的存在',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 那不知是因缺氧，还是某些情绪上的原因而微红的脸庞，',
      ]);
      await era.printAndWait([
        '以及被 ',
        me.get_colored_name(),
        ' 爱着的，那闪烁着狂气光芒的暗红眼眸依然正对着 ',
        me.get_colored_name(),
        ' 的脸',
      ]);
      await era.printAndWait('而后……');
      await era.printAndWait([
        '这是 ',
        me.get_colored_name(),
        ' 第一次看见，世界上竟然还有比 ',
        tachyon.get_colored_name(),
        ' 的跑法更加闪耀的东西',
      ]);
      await era.printAndWait([
        '那就是，此时 ',
        tachyon.get_colored_name(),
        ' 脸上露出的笑容',
      ]);
      era.drawLine({ content: '回到特雷森学园后' });
      await coffee.say_and_wait('……今天赢下有马的，是我没错吧');
      await tachyon.say_and_wait(['那当然了，', t_call_c, '，比赛很精彩哦']);
      await coffee.say_and_wait([
        '那么……可以说明一下，为什么 ',
        c_call_t,
        ' 却一副得意洋洋的样子黏在 ',
        c_call_m,
        ' 身边吗？',
      ]);
      era.println();
      await era.printAndWait([
        '从赛场回来后，',
        tachyon.get_colored_name(),
        ' 便一直扒着自己不放',
      ]);
      await era.printAndWait([
        '现在也是，拉着 ',
        me.get_colored_name(),
        ' 坐在沙发上后便一直抱着自己的左手',
      ]);
      await era.printAndWait([
        '除此之外，还一直用一种都是自己的功劳的神情得意的看着 ',
        coffee.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('哼哼～～有什么不好嘛，有什么不好嘛');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          '听见 ',
          tachyon.get_colored_name(),
          ' 仿佛时代剧里的恶役一般口吻的话',
        ]);
        await era.printAndWait([coffee.get_colored_name(), ' 先是全身颤抖']);
        await era.printAndWait([
          '正当 ',
          me.get_colored_name(),
          ' 担心',
          tachyon.sex,
          '会不会冲动下做出什么事的时候',
        ]);
        await coffee.say_and_wait('————那我也要');
        era.println();
        await era.printAndWait([
          '仿佛赌气一般，',
          coffee.get_colored_name(),
          ' 瞬间挤上了沙发，坐在了 ',
          me.get_colored_name(),
          ' 的双腿中间',
        ]);
        era.println();
        await tachyon.say_and_wait(['喂——', t_call_c, '，这也太狡猾了！']);
        await coffee.say_and_wait(
          '……才不狡猾，再说……狡猾又有什么不对，今天的赢家明明是我……',
        );
        await tachyon.say_and_wait('可恶，我也要坐！');
        era.println();
        await era.printAndWait([
          '看着像小孩一般争吵的两人，',
          me.get_colored_name(),
          ' 不由得露出苦笑',
        ]);
        await era.printAndWait('—————不知道为什么，忽然想喝鸳鸯咖啡了');
        await coffee.say_and_wait([
          '……对了，',
          c_call_m,
          '……关于 ',
          c_call_t,
          ' 比赛前说的，昨天晚上出门的事情……可以请您之后好好说清楚吗？',
        ]);
        await era.printAndWait([
          '听见 ',
          coffee.get_colored_name(),
          ' 借着地理优势在 ',
          me.get_colored_name(),
          ' 耳边悄悄说出的话',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 的苦笑僵在了脸上']);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 露出了恶代官的笑容，放在 ',
          me.get_colored_name(),
          ' 身上的手还不安份的乱动着',
        ]);
        await era.printAndWait('然后……');
        era.println();
        await tachyon.say_and_wait('咕欸————');
        era.println();
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 仿佛被未知的无名力量击中脑袋一般，瞬间昏迷了过去',
        ]);
        await coffee.say_and_wait('……真是');
        await coffee.say_and_wait([
          '这样总算能安静些了……那么，',
          c_call_m,
          '，要来杯咖啡吗？',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 微微露出苦笑，对 ',
          coffee.get_colored_name(),
          ' 说了声「麻烦了」',
        ]);
        await era.printAndWait('不过，单纯的咖啡不知为何此刻忽然觉得有些太苦');
        await era.printAndWait('在冬阳照射的训练员室中，总觉得现在的此刻');
        await era.printAndWait('更适合加入一些其他的东西……');
        era.printButton('「……那个，要不要试试，鸳鸯咖啡？」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 看着 ',
          me.get_colored_name(),
          '，先是有些恼怒，随后仿佛想到了什么，露出了无奈的表情',
        ]);
        await coffee.say_and_wait([
          '……只有今天，而且一定要瞒着 ',
          c_call_t,
          '，不然',
          tachyon.sex,
          '一定又会开始吵',
        ]);
        await era.printAndWait('喝了一口与咖啡混合的红茶');
        await era.printAndWait(
          '咖啡的苦味和红茶的涩味淡了，但其香气却没有任何减少，反而更加突显出彼此的风味',
        );
        await era.printAndWait([
          '不知为何，',
          me.get_colored_name(),
          ' 感觉现在正是这个味道合适',
        ]);
      }
    } else {
      await print_event_name('庆功', tachyon);
      await era.printAndWait('有马后隔天');
      await era.printAndWait([
        '或许是目的达到使 ',
        me.get_colored_name(),
        ' 放下心来，这三年以来，',
        me.get_colored_name(),
        ' 第一次迟到了',
      ]);
      await era.printAndWait('不过，毕竟两人的目标已经实现');
      await era.printAndWait('接下来就轻松的迎接URA总决赛吧');
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait('你在搞什么？这么慢，实验都开始多久了');
        era.println();
        await era.printAndWait([
          '当 ',
          me.get_colored_name(),
          ' 来到 ',
          tachyon.get_colored_name(),
          ' 的实验室时，看见的却是一如既往专注于研究的 ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait(
          '昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！',
        );
        await tachyon.say_and_wait(
          '只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！',
        );
        await tachyon.say_and_wait('快点换好实验服过来帮忙！');
        await coffee.say_and_wait([c_call_t, '……，你好吵']);
        await tachyon.say_and_wait([
          '哦呀哦呀，这不是昨天有马纪念输给我的 ',
          t_call_c,
          ' 吗？',
        ]);
        await tachyon.say_and_wait(
          '有什么想说的我洗耳恭听，毕竟接受败者的狂吠也是身为胜利者的————',
        );
        await coffee.say_and_wait('啧……');
        await tachyon.say_and_wait('哇啊！我的实验资料————烧………没烧起来？');
        era.println();
        await era.printAndWait([
          '瞬间，',
          tachyon.get_colored_name(),
          ' 的实验资料燃烧了起来，但正当 ',
          tachyon.get_colored_name(),
          ' 急急忙忙冲上去想抢救资料时，火焰忽然消失了',
        ]);
        era.println();
        await coffee.say_and_wait([
          '……只有这次姑且承认……昨天 ',
          c_call_t,
          ' 确实，跑的不错……',
        ]);
        await coffee.say_and_wait(
          '虽然很不甘心……但……一不小心把你和『朋友』重叠了……',
        );
        await tachyon.say_and_wait([
          '朋友？哦？这个……很有意思啊！',
          t_call_c,
          '，希望你还请务必仔细说说！',
        ]);
        await tachyon.say_and_wait('吵死了……走开……');
        era.println();
        await era.printAndWait([
          '看着吵闹的两人，',
          me.get_colored_name(),
          ' 换上了实验服，苦笑着加入这今后也会继续下去的日常',
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          '然而，当 ',
          me.get_colored_name(),
          ' 到了实验室门前',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 听见了里面的对话声']);
        era.println();
        await tachyon.say_and_wait([
          t_call_c,
          '……怎么办……',
          callname,
          ' ',
          me.sex,
          '该不会，真的不来了吧……',
        ]);
        await coffee.say_and_wait('……关我什么事');
        await tachyon.say_and_wait([
          '昨天我说了目标已经达成……',
          me.sex,
          '会不会因为这样就不来了……',
        ]);
        await tachyon.say_and_wait([
          '说到底会不会其实什么三年以来累积的羁绊都是我自己的妄想，说不定',
          me.sex,
          '从头到尾都没有……都没有……',
        ]);
        await coffee.say_and_wait('……如果真的是那样的话，你要怎么办？');
        await tachyon.say_and_wait([
          '……果然，那就得用药让',
          me.sex,
          '离不开我了啊，仔细想想这不是很不公平吗？',
        ]);
        await tachyon.say_and_wait([
          '只有我离不开',
          me.sex,
          '，',
          me.sex,
          '离了我却一样能活的好好的，还是得尽快弄出点成瘾性高的药让',
          me.sex,
          '从此再也离不开我……',
        ]);
        await tachyon.say_and_wait(
          '或者像小说里面那种蛊毒……要是不定时服用我做的解药就会发作……',
        );
        await coffee.say_and_wait('……真重啊');
        const coffee_check =
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            '但警告你，不准对我的 ',
            c_call_m,
            ' 做那种事',
          ]);
        }
        era.println();
        await era.printAndWait([
          '听到这有些背脊发凉的 ',
          me.get_colored_name(),
          ' 连忙推了门进去',
        ]);

        era.printButton('「对不起！我睡过头了！」', 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          '！………你在搞什么？这么慢，实验都开始多久了！',
        ]);
        era.println();
        await era.printAndWait([
          '虽然板着脸装作严厉的样子，但 ',
          tachyon.get_colored_name(),
          ' 身后那疯狂摇摆的尾巴却完全按耐不住',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '似乎也注意到了般努力的压了几下，但还是压不住，于是转过头来，好似什么也没发生的继续念叨',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！',
        );
        await tachyon.say_and_wait(
          '只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！',
        );
        era.println();
        await tachyon.say_and_wait(
          '……所以说，快点换好实验服过来帮忙！……好吗？',
        );
        era.println();
        await era.printAndWait([
          '看着想要装作严厉的虚张声势却又不安的望着 ',
          me.get_colored_name(),
          ' 的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 忍不住上前，抱住了',
          tachyon.sex,
        ]);
        era.println();
        await tachyon.say_and_wait(['！', callname, '……！']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 与',
          tachyon.sex,
          '的实验动物，在三年后，还将迎来第二个，第三个三年，直到永久……',
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait(['……别得寸进尺了，把 ', c_call_m, ' 还我']);
          era.println();
          await era.printAndWait([
            '在两人的争夺下，',
            me.get_colored_name(),
            ' 苦笑着加入了吵吵闹闹的日常',
          ]);
        } else {
          await coffee.say_and_wait('……你们可以不要在我面前秀恩爱吗？');
          era.println();
          await era.printAndWait(
            '却忘记了，房间里另一位正在忍受狗粮袭击的同房者',
          );
        }
      }
    }
  };
};
