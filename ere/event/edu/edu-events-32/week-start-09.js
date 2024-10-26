const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 35] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.paris ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (era.get('cflag:25:位置') === location_enum.paris) {
      return false;
    }
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('法国（？）', tachyon);
    await tachyon.say_and_wait('这里……就是法国吗');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 望着窗外，天连一色的夜景',
    ]);
    await tachyon.print_and_wait('这里，就是法国啊……');
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      ' 魂牵梦萦的地方',
    ]);
    await tachyon.print_and_wait([
      '无数日本',
      tachyon.get_uma_sex_title(),
      '沉戟的地方',
    ]);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，在最后将要踏上顶点的地方',
    ]);
    era.println();
    await tachyon.print_and_wait('然而……');
    await tachyon.print_and_wait('仰望星空之人，总会忘记脚前的洼地');
    await tachyon.print_and_wait('好高骛远，更是凝聚了前人智慧的话语');
    era.drawLine();
    era.printButton('「……不，这里是迪拜」', 1);
    await era.input();
    await tachyon.say_and_wait('…………欸？');
    await era.printAndWait([
      '很明显，脑袋里已经被凯旋门赏占据的 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      '并没有听见 ',
      me.get_colored_name(),
      ' 在一周前就说过的中途要在迪拜转机一事',
    ]);
    era.printButton('「不过迪拜的比赛也是世界知名的，要是有机会……」', 1);
    await era.input();
    await era.printAndWait([
      '说到这，',
      me.get_colored_name(),
      ' 忽然安静了下来',
    ]);
    await era.printAndWait('迪拜的比赛确实是世界知名');
    await era.printAndWait(
      '知名的原因，主要在它的奖金，世界含「金」量最高的比赛无误',
    );
    await era.printAndWait('但是……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '，已经没有「机会」了',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '唔，有机会的话，可以看看迪拜的比赛吧，加入……之后 ',
      t_call_c,
      ' 的训练计划试试？',
    ]);
    era.println();
    await era.printAndWait(['然而，', tachyon.sex, '却好像完全没有注意到一般']);
    await era.printAndWait('轻描淡写的便主动提起了被躲开的话题');

    era.printButton(
      '「……等回去之后，速子还会继续帮茶座制定训练相关的计划吗？」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait('那还用说……');
    await tachyon.say_and_wait([
      '这场凯旋门赏，只是我个人的一次任性而已，真正的可能性，真正的希望还是放在 ',
      t_call_c,
      ' 身上的',
    ]);
    await tachyon.say_and_wait(['对了，这么说起来，', t_call_c, ' 怎么办？']);
    era.printButton(
      '「不用担心，我和茶座会通过平板联系，而且每个月都会飞回日本去处理日本的事情」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait('……每个月？');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 有些吃惊的看着 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([me.get_colored_name(), ' 点了点头作为回应']);
    await era.printAndWait('啊，难道说是担心钱的问题吗？');
    era.printButton(
      '「毕竟这算出差，机票钱什么的学园会出，这方面不用担心」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait('……抱歉');
    era.printButton('「没什么」', 1);
    era.printButton('「是我自己希望这么做的」', 2);
    await era.input();
    await era.printAndWait('这是实话，也是谎话');
    await era.printAndWait('……其实，无论海外还是海内，都是可以选择的');
    await era.printAndWait([
      '可以选择专心跟着 ',
      tachyon.get_colored_name(),
      ' 远征，也可以选择留在日本陪着 ',
      coffee.get_colored_name(),
    ]);
    await era.printAndWait(
      '特雷森学园再缺人也没有缺到需要让训练员这样分身乏术的地步',
    );
    await era.printAndWait('但是……');
    era.printButton('「因为我放心不下」', 1);
    era.printButton('「无论是速子还是茶座都一样」', 2);
    await era.input();
    await era.printAndWait([
      '不忍心看那名追逐朋友背影的',
      tachyon.get_teen_sex_title(),
      '孤单',
    ]);
    await era.printAndWait([
      '不忍心看独在异乡奔向绝路的',
      tachyon.get_teen_sex_title(),
      '寂寞',
    ]);
    await era.printAndWait('所以，只能做出这种委屈自己的，优柔寡断的选择');
    era.println();
    await tachyon.say_and_wait('……真是个烂好人啊');
    era.printButton('「但也不是没有好处」', 1);
    era.printButton('「这样就能同时看着你和茶座的跑法了」', 2);
    await era.input();
    await tachyon.say_and_wait('为了这种事坐十几个小时的飞机还是来回，疯了吧');
    era.println();
    await me.say_and_wait('谢谢夸奖');
    await era.printAndWait([
      me.get_colored_name(),
      ' 笑着回应了 ',
      tachyon.get_colored_name(),
      ' 的感叹',
    ]);
    await era.printAndWait('就当作是先前不小心破坏气氛的补偿了');
    era.println();
    await tachyon.say_and_wait('……那么，就看着我的跑法，直到最后吧');
    era.println();
    await era.printAndWait('在名为世界的舞台上');
    await era.printAndWait([
      tachyon.sex,
      '向 ',
      me.get_colored_name(),
      ' 伸出手',
    ]);
    await era.printAndWait([
      '邀请 ',
      me.get_colored_name(),
      ' 一同出演，',
      tachyon.get_colored_name(),
      ' 的最后一出舞',
    ]);
    flags.wait_flag = sys_like_chara(32, 0, 100, true, 10);
  };

  handlers[95 + 37] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.paris ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (era.get('cflag:25:位置') === location_enum.paris) {
      return false;
    }
    const c_call_m = sys_get_colored_callname(25, 0),
      c_call_t = sys_get_callname(25, 32),
      coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('极限的标准', tachyon);
    await era.printAndWait('在凯旋门赏的前一天');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 居住的酒店中，来了一名不速之客',
    ]);
    era.println();
    await tachyon.say_and_wait(['……', t_call_c, '？你怎么会……']);
    await coffee.say_and_wait(['…………', c_call_t]);
    era.println();
    await era.printAndWait(['本应留在日本的 ', coffee.get_colored_name()]);
    await era.printAndWait(['在凯旋门赏的前一天，抵达法国']);
    era.println();
    await coffee.say_and_wait(['……是我拜托 ', c_call_m, ' 带我来的']);
    await coffee.say_and_wait([c_call_m, ' 说，说……']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 静静的坐在床边，没有开口',
    ]);
    await era.printAndWait(['等待着 ', coffee.get_colored_name(), ' 将话说完']);
    era.println();
    await coffee.say_and_wait(['说，', c_call_t, '，你的腿……']);
    await tachyon.say_and_wait(
      '……嗯，已经在极限了，哪怕不是如此，我也会在明天的比赛中拼尽一切……不会留下任何余地',
    );
    await coffee.say_and_wait('……为什么');
    era.println();
    await era.printAndWait([
      '不知为何，比起当事人的 ',
      tachyon.get_colored_name(),
      '，',
      coffee.get_colored_name(),
      ' 反而更显得急迫',
    ]);
    await coffee.say_and_wait([
      '……如果又是跟宝冢前一样，觉得是为我好，为了我和朋友参赛什么的……',
    ]);
    await coffee.say_and_wait(
      '那我是绝对不会接受的，哪怕————要在这里阻止你参赛也一样',
    );
    era.println();
    await era.printAndWait([coffee.get_colored_name(), ' 的双瞳忽然瞪大']);
    await era.printAndWait([
      '瞬间，仿佛有无形的巨手控制住了 ',
      tachyon.get_colored_name(),
      ' 的行动一般',
    ]);
    await era.printAndWait([tachyon.sex, '被束缚在原地，动弹不得']);
    await era.printAndWait([
      '但即便如此，',
      tachyon.sex,
      '的目光却还是依然平静',
    ]);
    await era.printAndWait('而后……');
    era.println();
    await tachyon.say_and_wait('………呵呵');
    await coffee.say_and_wait([c_call_t, '……？']);
    await tachyon.say_and_wait('呵呵呵……哈哈哈！');
    era.println();
    await era.printAndWait([
      '仿佛精神失常一般，哪怕处在这样的情况下，',
      tachyon.get_colored_name(),
      ' 依然畅快的笑出了声来',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '我说啊，',
      t_call_c,
      '……你是不是，有点太自我意识过剩了',
    ]);
    await coffee.say_and_wait('！？');
    await tachyon.say_and_wait('什么为了你而跑……别想太多了');
    await tachyon.say_and_wait([
      '我的目的，至始至终就只有一个，那就是超越',
      tachyon.get_uma_sex_title(),
      '的极限……证明',
      tachyon.get_uma_sex_title(),
      '的可能性',
    ]);
    era.println();
    await era.printAndWait([
      '不知不觉，原本束缚着 ',
      tachyon.get_colored_name(),
      ' 的力量已经松开',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 好整以暇的站起身，拍了拍身上并不存在的尘土',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……为了达成这个目的，无论要牺牲什么我都愿意，哪怕是我自己也一样',
    );
    await tachyon.say_and_wait([
      '反倒是你，',
      t_call_c,
      '……你有这样的觉悟吗？现在的你，能够超越我吗？',
    ]);
    await coffee.say_and_wait('…………！');
    await tachyon.say_and_wait(
      '……其他的，等到比赛结束……我会在那时候全部说出口的',
    );
    era.println();
    await era.printAndWait([
      '没有等待应答，',
      tachyon.get_colored_name(),
      ' 便离开了房间',
    ]);
    await era.printAndWait([
      '迎面而来的是一直在房间外等待着两人结束谈话的 ',
      me.get_colored_name(),
    ]);
    era.println();
    await tachyon.say_and_wait(['……', callname, '，去你的房间坐坐']);
    era.println();
    await era.printAndWait('……欸？');
    era.println();
    await tachyon.say_and_wait('怎么？');
    era.printButton('「进异性的房间，果然还是不太好吧……」', 1);
    era.printButton('「速子这是在诱惑我吗？」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '蠢货！……刚刚才说完那种话耍完帅，现在马上回房间那不就破功了，所以让我去你房间待一下',
    );
    await tachyon.say_and_wait('顺便……你房间里有实验用的器具吧？');
    await tachyon.say_and_wait([
      '刚刚看见 ',
      t_call_c,
      ' 那副模样，不知道为什么忽然脑袋里又有灵感了……',
    ]);
    await tachyon.say_and_wait(
      '毕竟我明天要上场，今天也不能乱喝什么奇怪的东西，你会帮我喝的吧～～',
    );
    era.println();
    await era.printAndWait([
      '看着',
      tachyon.sex,
      '浮夸的表现，',
      me.get_colored_name(),
      ' 不由得笑了',
    ]);
    await era.printAndWait('无论明天如何，最起码，享受这今天的时光吧');
    flags.wait_flag = get_attr_and_print_in_event(32, [5, 5], 0);
  };

  handlers[95 + 39] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    if (edu_marks.plan_b) {
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25),
        c_call_t = sys_get_colored_callname(25, 32),
        c_call_m = sys_get_colored_callname(25, 0);
      await print_event_name('超越极限……？', tachyon);
      await era.printAndWait([
        '自从 ',
        tachyon.get_colored_name(),
        ' 退役以来，实验室里总是能听见',
        tachyon.sex,
        '欢快的声音',
      ]);
      await tachyon.say_and_wait([
        '哈哈哈！',
        t_call_c,
        '！',
        t_call_c,
        '！快来试试我的新药！',
      ]);
      await coffee.say_and_wait('……好烦');
      era.println();
      await era.printAndWait([
        '仿佛在退役的同时抛却了一切压力的',
        tachyon.sex,
        '，万般的精力都用在了制作新药上，',
      ]);
      await era.printAndWait([
        '首当其冲的被害者自然就是与',
        tachyon.sex,
        '最为亲密的 ',
        me.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 了',
      ]);
      await era.printAndWait([
        '对此，在退役后便担心',
        tachyon.sex,
        '会不会一蹶不振无法振作的 ',
        me.get_colored_name(),
        ' 也稍稍放下了心来',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '！你也别想跑！你的份在这里！']);
      era.printButton('二话不说接过药就喝下去', 1);
      era.printButton('「只要能让速子开心，喝什么都行！」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('哦呀哦呀，今天居然这么主动？');
        await coffee.say_and_wait([
          '……你又给 ',
          c_call_m,
          ' 灌什么药了，老实交代',
        ]);
        await tachyon.say_and_wait(
          '唔……昨天的话是提升营养吸收效率的，发的是蓝色的光，今天是……',
        );
        await coffee.say_and_wait([
          '骗人……一定是灌了什么迷魂药吧，不然 ',
          c_call_m,
          ' 怎么可能这么听话的喝下那种奇怪的东西',
        ]);
        await tachyon.say_and_wait('好过分的说法！');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait('什……笨蛋……为什么忽然说这么肉麻的话……');
        } else if (relation <= 225) {
          await tachyon.say_and_wait('……不是，为什么忽然说这么噁心的话……');
        } else if (relation >= 225) {
          await tachyon.say_and_wait('欸……不是，为什么忽然说这么肉麻的话');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 用一脸傻眼的表情看着 ',
            me.get_colored_name(),
          ]);
          await era.printAndWait('好过分啊');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '？',
            c_call_m,
            '？可以稍微说明一下这是什么关系吗？……我现在，可能不太冷静',
          ]);
        } else {
          await coffee.say_and_wait('……麻烦你们别在这里打情骂俏');
        }
      }
      era.drawLine();
      await coffee.say_and_wait(['……对了，', c_call_m, '，差不多……']);
      era.println();
      await era.printAndWait([
        '吵吵闹闹过后，也到 ',
        coffee.get_colored_name(),
        ' 训练的时间了',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 点了点头，准备和 ',
        coffee.get_colored_name(),
        ' 一起到训练场上',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '哦？又去训练吗？最近 ',
        t_call_c,
        ' 怎么感觉特别勤奋的样子',
      ]);
      await coffee.say_and_wait([
        '……我训练一直都很认真，请不要把我和 ',
        c_call_t,
        ' 混为一谈',
      ]);
      await coffee.say_and_wait('再说，年底快到了……一定要成功超越朋友');
      await coffee.say_and_wait('除此之外……');
      await coffee.say_and_wait('还有某人的挑战……');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 直直盯着 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 想起了 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 时 ',
        tachyon.get_colored_name(),
        ' 说过的话',
      ]);
      await coffee.say_and_wait(['我一定，会超越 ', c_call_t, ' 的']);
      await tachyon.say_and_wait('……哼哼，能做到，就尽管试试看吧');
      await tachyon.say_and_wait(['来超越极限吧！', t_call_c, '！']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的眼中依旧闪烁着狂热的光芒',
      ]);
      await era.printAndWait([
        '只是……不知是不是 ',
        me.get_colored_name(),
        ' 的错觉，那光芒似乎有些动摇的模样',
      ]);
    } else {
      await print_event_name('最终因素的寻求', tachyon);
      await era.printAndWait(
        '随着时间进入秋季，年尾最重要的比赛也映入大众眼帘',
      );
      era.println();
      await say_by_passer_by_and_wait('记者A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '，请问对今年底的有马纪念自己是第一人气有什么感想吗？',
      ]);
      await tachyon.say_and_wait([
        '第一人气？没什么……不，感谢各位的支持，有马纪念……',
      ]);
      await tachyon.say_and_wait('我会努力，以超越自己的极限为目标去跑');
      await say_by_passer_by_and_wait('记者B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '的目标是超越',
        tachyon.get_uma_sex_title(),
        '的极限，请问这是什么意思呢？',
      ]);
      await tachyon.say_and_wait([
        '呵呵呵……如果一切顺利的话，你们在有马纪念上就能看到了',
      ]);
      await say_by_passer_by_and_wait('记者C', [
        '请问目前对于有马纪念，',
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '有进行过哪些准备呢？',
      ]);
      await tachyon.say_and_wait(
        '场地及肉体的突破自不用说，但除此之外……事实上，我正在寻求精神上的突破啊',
      );
      era.println();
      await era.printAndWait('精神上的突破');
      await era.printAndWait('这一话题让现场的记者都有些困惑');
      await era.printAndWait('无论是从外表给人的形象，还是偶尔听见的传闻');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 都不像是会讲精神论的',
        tachyon.get_uma_sex_title(),
      ]);
      era.println();
      await say_by_passer_by_and_wait('记者A', [
        '精……精神上的突破？……毕竟下一场的对手是那个 ',
        get_chara_talk(25).get_colored_name(),
        '，所以想要寻求精神面的帮助吗？',
      ]);
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 25),
        '……对手……？',
      ]);
      await say_by_passer_by_and_wait('记者A', '难，难道不是吗？');
      await tachyon.say_and_wait('……不，是值得探讨的可能性啊，呵呵呵');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 留下了意味深长的话语，并没有做出解释',
      ]);
      if (love >= 50 && love < 75) {
        await say_by_passer_by_and_wait('记者A', [
          '对了……另外还有关于 ',
          tachyon.get_colored_name(),
          ' 与训练员的传闻',
        ]);
        await say_by_passer_by_and_wait('记者A', '想问两位……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 看了 ',
          me.get_colored_name(),
          ' 一眼，不知为何，',
          me.get_colored_name(),
          ' 心里有些毛毛的',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '你是想问，我和',
          me.sex,
          '之间……有没有恋爱方面的感情吗？',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 又看了 ',
          me.get_colored_name(),
          ' 一眼，这次 ',
          me.get_colored_name(),
          ' 明白了，',
          tachyon.sex,
          '的意思是「你希望我怎么回答？」',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 以不会被记者看到的角度，以最小限度摇了摇头，希望',
          tachyon.sex,
          '能看见',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……这么说吧，',
          me.sex,
          '……是我最重要的……',
        ]);
        await say_by_passer_by_and_wait('记者A', '最重要的……？');
        era.println();
        await era.printAndWait([
          '全场都集中了注意力在 ',
          tachyon.get_colored_name(),
          ' 的话语上',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 也不由得吞了口口水']);
        era.println();
        await tachyon.say_and_wait('最重要的……实验动物');
        era.println();
        await era.printAndWait('记者们听见回答全都泄了口气');
        await era.printAndWait([
          me.get_colored_name(),
          ' 也吐了口气，不过是安心的泄气',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '悄悄用嘴型对 ',
          me.get_colored_name(),
          ' 说了「欠我一次」',
        ]);
        await era.printAndWait([
          '但现在的 ',
          me.get_colored_name(),
          ' 也没有功夫去顾虑这些了',
        ]);
        era.println();
        await era.printAndWait('题外话，在那之后隔天的新闻头条……');
        await me.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          ' 对谣言做出回应！声称训练员为最重要的存在！',
        ]);
        await era.printAndWait('…………这不是什么也没回避到吗');
      }
    }
  };

  handlers[95 + 47] = async (tachyon, me, callname, flags, relation, love) => {
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('被超越的极限', tachyon);
    await tachyon.print_and_wait([
      '梦中的 ',
      tachyon.get_colored_name(),
      '，又回到了那一天',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '全场的欢呼声，以及',
      me.sex,
      '的目光全都聚集在跨越终点线，淡淡挥着手的那名',
      tachyon.get_uma_sex_title(),
      '身上',
    ]);
    await tachyon.print_and_wait([
      '这也是很正常的，毕竟今天的主角是 ',
      coffee.get_colored_name(),
    ]);
    await tachyon.print_and_wait([
      '主角不是自己，周围的人关注',
      tachyon.sex,
      '也是理所应当的',
    ]);
    await tachyon.print_and_wait('但是……');
    await tachyon.print_and_wait('为什么');
    era.println();
    await tachyon.say_and_wait('不是说好了吗？会一直看着我', true);
    era.println();
    await tachyon.print_and_wait([tachyon.get_colored_name(), ' 无法再奔跑了']);
    await tachyon.print_and_wait([
      '所以就将目光转移到 ',
      coffee.get_colored_name(),
      ' 身上吗？',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '周围的观众中，也不乏喊出「比起 ',
      tachyon.get_colored_name(),
      '，还是 ',
      coffee.get_colored_name(),
      ' 更强」的人',
    ]);
    await tachyon.print_and_wait([
      '但比起那些踩一捧一的言论，',
      me.sex,
      '的眼神更令自己感到受伤',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '曾几何时，那种原本只会在看着自己时露出的目光，却出现在了',
      me.sex,
      '看着 ',
      t_call_c,
      ' 时的双瞳中',
    ]);
    await tachyon.say_and_wait('那种目光，不是我专属的吗？');
    await tachyon.say_and_wait('被我灼伤的双眼已经愈合了吗？');
    await tachyon.say_and_wait('要留我，孤单一人了吗？');
    era.println();
    await tachyon.print_and_wait([
      '梦中的',
      me.sex,
      '，与 ',
      t_call_c,
      ' 越行越远',
    ]);
    await tachyon.print_and_wait('将自己抛弃在漆黑的空间中');
    era.println();
    await tachyon.say_and_wait('不要……等等，等等我……');
    era.println();
    await tachyon.print_and_wait('想要追上他们');
    await tachyon.print_and_wait('但是……双腿不听使唤');
    await tachyon.print_and_wait('低下头来才发现……啊啊');
    await tachyon.print_and_wait(
      '已经碎裂的双腿，又怎么追得上正在奔跑前行的人呢',
    );
    era.println();
    await tachyon.print_and_wait('仿佛听见了自己的声音，那个背影回过头来');
    await tachyon.print_and_wait('眼中的光，却已经消失不见');
    await tachyon.print_and_wait(
      '不，不是消失不见————而是转移到了另一个人身上',
    );
    era.println();
    await tachyon.print_and_wait('不要');
    await tachyon.print_and_wait('看着我');
    await tachyon.print_and_wait('像以前一样的看着我');
    await tachyon.print_and_wait('不要把我抛下，不要让我一个人');
    era.println();
    await tachyon.print_and_wait('但是');
    await tachyon.print_and_wait([
      '无法奔跑的 ',
      tachyon.get_colored_name(),
      '，又有什么资格去要求留住对方呢',
    ]);
    era.drawLine();
    await tachyon.print_and_wait([tachyon.get_colored_name(), ' 从梦中醒来']);
    await tachyon.print_and_wait('梦到了什么已经记不太清了');
    await tachyon.print_and_wait([
      '……但从身上不适的感觉来看，八成又是日本杯那时的事吧',
    ]);
    await tachyon.print_and_wait([t_call_c, ' 已经超越了极限']);
    await tachyon.print_and_wait(['超越了 ', tachyon.get_colored_name()]);
    await tachyon.print_and_wait([
      '所以……就算',
      me.sex,
      '被 ',
      t_call_c,
      ' 迷住了，也是很正常的吧',
    ]);
    await tachyon.print_and_wait([
      '毕竟，那可是超越了 ',
      tachyon.get_colored_name(),
      ' 的跑法啊',
    ]);
    era.println();
    await tachyon.say_and_wait('……不要');
    if (love <= 50) {
      await tachyon.print_and_wait('事到如今才发现，是不是有些太晚了？');
      await tachyon.print_and_wait(
        '明明都已经陪在自己身边如此之久，却一直当成理所当然',
      );
      await tachyon.print_and_wait([
        '直到要失去了才发现，自己已经离不开',
        me.sex,
        '了',
      ]);
    }
    era.println();
    await tachyon.print_and_wait([
      '如果是',
      me.sex,
      '的话，还会和往常一样照顾自己的吧',
    ]);
    await tachyon.print_and_wait([
      '还是会和以往一样，照料 ',
      tachyon.get_colored_name(),
      ' 的需求',
    ]);
    await tachyon.print_and_wait(['因为', me.sex, '就是如此温柔的一个人']);
    await tachyon.print_and_wait([
      '……但是，只是这样 ',
      tachyon.get_colored_name(),
      ' 是无法满足的',
    ]);
    await tachyon.print_and_wait(['是', me.sex, '的光，温暖了自己']);
    await tachyon.print_and_wait('让自己产生了希望，对比赛的渴望');
    await tachyon.print_and_wait('所以请不要……不要把属于自己的光夺走');
    era.println();
    await tachyon.print_and_wait(
      'Jingle bell Jingle bell Jingle all the way～～',
    );
    era.println();
    await tachyon.print_and_wait('忽然，窗外响起了圣诞歌的声音');
    await tachyon.print_and_wait([
      '圣诞将至，',
      tachyon.get_colored_name(),
      ' 的心中却仍是一片黑暗',
    ]);
    if (love < 75) {
      era.set('love:32', 75);
    }
  };
};
