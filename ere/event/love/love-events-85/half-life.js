const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string)>} handlers */
module.exports = (handlers) => {
  handlers[99] = async (ruby, me, r_call_m, m_call_r) => {
    await print_event_name('依存', ruby);
    await ruby.say_and_wait('好寂寞。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 坦率地对 ',
      me.get_colored_name(),
      ' 说道，见 ',
      me.get_colored_name(),
      ' 没有拒绝也不是无视，就默默地看着 ',
      me.get_colored_name(),
      '。',
    ]);
    era.printButton('张开胳膊。', 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 模仿 ',
      me.get_colored_name(),
      ' 的动作展开双臂，然后……',
    ]);
    await era.printAndWait([
      '像要把 ',
      me.get_colored_name(),
      ' 覆盖一样抱过来。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 慌张地接住爱马，随着椅子的摩擦声，少女的味道扑鼻而来。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 紧紧地抱住 ',
      ruby.get_colored_name(),
      '。',
    ]);
    await ruby.say_and_wait('好寂寞，难得休息的今天你也整天工作。');
    era.printButton('「对不起。」', 1);
    await era.input();
    await ruby.say_and_wait('比起道歉，是不是还有事情更该做？');
    await ruby.say_and_wait([
      ruby.get_colored_name(),
      ' 坐在 ',
      me.get_colored_name(),
      ' 的膝盖上，看着 ',
      me.get_colored_name(),
      ' 的脸。',
    ]);
    await era.printAndWait([
      '稍微往前突出一点，就在她的嘴唇上覆盖上了 ',
      me.get_colored_name(),
      ' 的东西。',
    ]);
    await era.printAndWait('咖啡味的吻，明明是黑咖啡，吻却很甜。');
    await ruby.say_and_wait('母亲大人说想早点看到孙子。');
    era.printButton('「那么，晚上很期待呢。」', 1);
    era.printButton(`抱住 ${m_call_r}。`, 2, {
      disabled: era.get('relation:85:0') <= 525,
    });
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('请努力工作。');
      await era.printAndWait([
        '无视 ',
        me.get_colored_name(),
        ' 悲痛的叫喊，',
        ruby.get_colored_name(),
        ' 无情地关上房门。',
      ]);
      await era.printAndWait([
        '选她的是 ',
        me.get_colored_name(),
        '，选 ',
        me.get_colored_name(),
        ' 的是她，这就是 ',
        me.get_couple_title(),
        ' 最幸福的形式吧。',
      ]);
      await quick_into_sex(85, true);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 突然觉得，怀里的 ',
        ruby.get_colored_name(),
        ' 变得无比妖媚了。',
      ]);
      await era.printAndWait(
        '不似少女的甜媚，那是一种女性的、为人妻后的熟媚。',
      );
      await ruby.say_and_wait('我脸上有什么吗？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 没有理会爱马，径直抓住了她那对柔嫩的美肉。',
      ]);
      await era.printAndWait([
        '毫无怜惜地抓揉 ',
        ruby.get_colored_name(),
        ' 的乳房，她也没有介意。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 纵容着 ',
        me.get_colored_name(),
        '，娇声地痴痴呻吟。',
      ]);
      await ruby.say_and_wait('嗯……喜欢……怎么揉都喜欢……');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 向 ',
        me.get_colored_name(),
        ' 看来，美眸中的目色已经染上了迷离。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着 ',
        ruby.get_colored_name(),
        ' 的痴态，放轻了力度。',
      ]);
      await era.printAndWait('但依旧痴迷爱马的小乳鸽，又揉又搓。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 吐出香舌，舔了 ',
        me.get_colored_name(),
        ' 的嘴角一下。',
      ]);
      await ruby.say_and_wait('没关系，粗暴点也可以……为什么不伸进去摸？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 回吻一口爱马的樱唇，将她的上衣掀起，实实在在地摸到了爱马的美乳。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的乳头已经硬了，连四周的可爱乳晕都站起了细小的颗粒。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 深切感受到了爱马的变化，刚开始还不至于紧靠爱抚就如此动情。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的翘臀往后顶耸，摩擦起 ',
        me.get_colored_name(),
        ' 勃起的肉棒。',
      ]);
      await era.printAndWait([
        '她又用小舌头蹭了蹭 ',
        me.get_colored_name(),
        ' 的下巴，眼神痴魅。',
      ]);
      await ruby.say_and_wait('要在这里让我怀孕吗？');
      await era.printAndWait([
        '校服的裙子不算长，被 ',
        me.get_colored_name(),
        ' 揉弄乳房的时候，裙摆就缩上去了。',
      ]);
      await era.printAndWait([
        '包在 ',
        ruby.get_colored_name(),
        ' 屁股上的，竟是性感的丁字裤。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 把她的小内裤拨开，让 ',
        me.get_colored_name(),
        ' 的肉棒塞进她的臀沟里。',
      ]);
      await era.printAndWait([
        '她娇嫩的臀肉把 ',
        me.get_colored_name(),
        ' 磨得心猿意马。',
      ]);
      await ruby.say_and_wait('肉穴……还是说，屁眼？');
      await ruby.say_and_wait('都可以的……');
      era.printButton('「我干死你。」', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 在 ',
        me.get_colored_name(),
        ' 的怀抱里，娇躯扭动得更急了。',
      ]);
      await ruby.say_and_wait('亲爱的大鸡巴，操死我……');
      era.printButton(`「${m_call_r}，我永远爱你。」`, 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 在爱马耳边呢喃后，她心满意足地痛吻了上来。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 热烈地亲吻 ',
        me.get_colored_name(),
        '，把 ',
        me.get_colored_name(),
        ' 的舌头吸入檀口，吮下 ',
        me.get_colored_name(),
        ' 舌尖的口水。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 的双手还抱着她的乳房揉搓，肉棒顶着 ',
        ruby.get_colored_name(),
        ' 的小穴。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 翻身压住了 ',
        ruby.get_colored_name(),
        ' 可爱的娇躯。',
      ]);
      await era.printAndWait('身下的担当媚眼如丝，吐息炽热。');
      await ruby.say_and_wait(
        '亲爱的，干我，用你的鸡巴插死我，把我操死。我要你，我永远是你的……',
      );
      await era.printAndWait([
        '深情的告白让 ',
        me.get_colored_name(),
        ' 忘记 ',
        ruby.get_colored_name(),
        ' 平时端庄的模样。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 将她的两条美腿掰成了M型，挺着鸡巴。',
      ]);
      await era.printAndWait('噗呲。');
      await era.printAndWait([
        '肉棒刺入了 ',
        ruby.get_colored_name(),
        ' 湿滑的腔道。',
      ]);
      await era.printAndWait(
        '一声惊呼从她的嘴里放出，艳丽的容颜上挂着痴迷满足的笑容。',
      );
      begin_and_init_ero(0, 85);
      era.set(
        'palam:85:阴道快感',
        Math.ceil(era.get('tcvar:85:阴道快感上限') * 0.4 + 1),
      );
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      era.set(
        'palam:0:阴茎快感',
        Math.ceil(era.get('tcvar:0:阴茎快感上限') * 0.4 + 1),
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      await print_ero_page(85);
      await end_ero_and_show_result();
      era.drawLine();
      await era.printAndWait([
        '这一天，',
        me.get_colored_name(),
        ' 把爱马操的高潮迭起，直到她将要昏过去才一泄如注。',
      ]);
      await era.printAndWait([
        '恢复过来的 ',
        ruby.get_colored_name(),
        ' 把 ',
        me.get_colored_name(),
        ' 按倒在床上，用樱唇吻遍了 ',
        me.get_colored_name(),
        ' 的全身。',
      ]);
      await era.printAndWait([
        '深夜，',
        me.get_couple_title(),
        ' 结束了亲昵，却没有去洗浴。',
      ]);
      await era.printAndWait([
        '不在乎满床的湿腻淫水，',
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 拥在一起，昏沉地睡了。',
      ]);
    }
    await sys_love_uma_in_event(85);
  };

  handlers.clinic = async (ruby, me, r_call_m) => {
    await print_event_name('保健室', ruby);
    await ruby.say_and_wait([
      r_call_m,
      '……露比这里不舒服啊……要不要给露比检查一下身体啊……',
    ]);
    await ruby.say_and_wait([
      '哈……',
      r_call_m,
      '……怎么可以这样……我们还在学校里……会被看到的……啊……不可以啊……丝袜给扯坏了啊……',
    ]);
    await ruby.say_and_wait('不行的……一会儿校医会来检查身体……哈……什么……');
    await ruby.say_and_wait('露比就是病人……唔……停一下……哈……啊……');
    await ruby.say_and_wait('露比不是骚货……才不是……那是正常的身体反应……');
    await ruby.say_and_wait('什么淫水……露比不知道……');
    await ruby.say_and_wait([
      '放开露比好不好……露比今天……哈……怎么被 ',
      r_call_m,
      ' 按在诊疗室了……',
    ]);
    await ruby.say_and_wait(
      '唔……好大……好烫……好粗……啊……这是什么……不行……太大了……',
    );
    await ruby.say_and_wait([r_call_m, '……不要脱衣服……呜呜呜……露比错了……']);
    await ruby.say_and_wait('不要打露比屁股……哈……停一下……不行的……');
    await ruby.say_and_wait('啊……被打得好奇怪……');
    await ruby.say_and_wait(
      '才没有……怎么可能被打得淫水飞溅……那不是……露比只是今天水喝多了而已……',
    );
    await ruby.say_and_wait(
      '真的……啊啊啊……又打露比的屁股……露比的屁股都红了……不行了……那里好痒……唔……',
    );
    await ruby.say_and_wait(
      '怎么可以……哈……不可以接吻的……唔……好像身子发虚了……哈……有点想要了……',
    );
    await ruby.say_and_wait(
      '不可以……露比不是这样的人……啊……进去了……疼……好疼啊……慢一点……太大了……会被肏坏了……',
    );
    await ruby.say_and_wait('呜呜呜……被大龟头肏进去就好舒服了……');
    await ruby.say_and_wait([
      '要是把露比肏舒服了……露比是不是就是会变成大肉棒 ',
      r_call_m,
      ' 的性奴……',
    ]);
    await ruby.say_and_wait(
      '哈……什么……不可能的……露比怎么会有那样奇怪的癖好……崇拜大肉棒……不可能的……',
    );
    await ruby.say_and_wait('哈……好大……好涨啊……慢慢再肏进去……好满足啊……哈……');
    await ruby.say_and_wait(
      '一点点肏进去……这感觉好奇怪啊……好像是身心在被征服……',
    );
    await ruby.say_and_wait(
      '唔……进去了……又进去了……怎么还可以进去……那里……好像是从没被肏弄过的嫩肉……',
    );
    await ruby.say_and_wait(
      '哈……好敏感啊……被蹭得要高潮了……怎么会这么奇妙……哈……明明自慰的时候很少到高潮的……',
    );
    await ruby.say_and_wait(
      '啊……果然……只要是大肉棒……露比就会受不了……大肉棒肏进来……露比……不行了啊……',
    );
    await ruby.say_and_wait([
      r_call_m,
      '……露比就被 ',
      r_call_m,
      ' 的大肉棒……直接肏弄成了母狗……',
    ]);
    await ruby.say_and_wait([
      '哈……什么……',
      r_call_m,
      ' 早就知道了……露比一直欲求不满……',
    ]);
    await ruby.say_and_wait('露比真的不配做比赛选手……');
    await ruby.say_and_wait([
      '哈……什么……',
      r_call_m,
      ' 也是喜欢……喜欢这么骚浪贱的露比……',
    ]);
    await ruby.say_and_wait([
      '啊……被喜欢的感觉真好啊……不行了啊……',
      r_call_m,
      '……',
    ]);
    await ruby.say_and_wait(
      '唔……露比坏掉了啊……哈……让露比缓一缓……啊……慢一点……肏进去了……',
    );
    await ruby.say_and_wait('啊……小骚穴好像开始不行了……淫水好多啊……呜呜呜……');
    await ruby.say_and_wait(['直接被 ', r_call_m, ' 肏到高潮了……啊……好喜欢……']);
    await ruby.say_and_wait('被大肉棒……肏到高潮才是真正的高潮……');
    await ruby.say_and_wait([
      '就这样……露比……变成了 ',
      r_call_m,
      ' 的性奴了啊……',
    ]);
    await ruby.say_and_wait([
      '哈……专属的性奴……以后作为护士长的露比……会把手下的护士都送给 ',
      r_call_m,
      ' 肏啊……两个这样的快乐……大肉棒带来的高潮的快乐……哈……又高潮了啊……',
    ]);
    await ruby.say_and_wait([
      '只要在 ',
      r_call_m,
      ' 面前……稍微放纵一下……就会坏掉了……',
    ]);
    await ruby.say_and_wait(
      '啊……这就是大肉棒的快乐……难以克制……高潮真的太舒服了……',
    );
    await ruby.say_and_wait(['做母狗真好啊……做 ', r_call_m, ' 的母狗……']);
    await ruby.say_and_wait(
      '体验这样的高潮……这样一波波坏掉的快感……真的是太多了啊……',
    );
    await ruby.say_and_wait([
      '好想一辈子都被 ',
      r_call_m,
      ' 的大肉棒肏弄着……一直放在骚货露比的小骚逼里……',
    ]);
    await ruby.say_and_wait(
      '真的是太舒服了……高潮……连续不断的高潮……高潮的快感啊……让人完全沉浸其中……',
    );
    await ruby.say_and_wait('坏掉了……又坏掉了啊……呜呜呜……露比不行了……');
    await ruby.say_and_wait('脑子一片空白……五颜六色的……');
    await ruby.say_and_wait([
      '啊……骚货露比……母狗露比……好迷恋 ',
      me.get_colored_actual_name(),
      ' 主人啊',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.virgin),
      false,
    );
    end_ero_and_train();
    return true;
  };

  handlers.loli_wife = async (ruby, me) => {
    await print_event_name('萝莉幼妻', ruby);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 看 ',
      me.get_colored_name(),
      ' 很累的样子，好心帮 ',
      me.get_colored_name(),
      ' 放了洗澡水。',
    ]);
    await era.printAndWait([
      '脱了衣服，',
      me.get_colored_name(),
      ' 突然叫她陪 ',
      me.get_colored_name(),
      ' 一起。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 已经洗过了，但还是乖乖地脱了衣服进入浴室。',
    ]);
    await era.printAndWait([
      '在浴室里，',
      ruby.get_colored_name(),
      ' 害羞地不敢正视 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 牵着她的手指，让她了解男性的身体。',
    ]);
    await era.printAndWait([
      '不让 ',
      ruby.get_colored_name(),
      ' 动手，',
      me.get_colored_name(),
      ' 主动把肥皂涂在少女幼嫩的肌肤上。',
    ]);
    await era.printAndWait([
      '然后 ',
      me.get_colored_name(),
      ' 将双手停留在乳房前。她的胸部犹如精心煎制的荷包蛋，蛋清包裹住蛋黄，水嫩摇曳，让 ',
      me.get_colored_name(),
      ' 忍不住想咬上一口。',
    ]);
    await era.printAndWait([
      '小小的隆起，在 ',
      me.get_colored_name(),
      ' 急躁的揉搓下总会脱手而出，每每这时 ',
      ruby.get_colored_name(),
      ' 都会忍不住笑出来。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 帮 ',
      ruby.get_colored_name(),
      ' 冲洗干净后，便让 ',
      ruby.get_colored_name(),
      ' 给 ',
      me.get_colored_name(),
      ' 擦洗身体。',
    ]);
    await era.printAndWait('她细心打理每一寸肉体，唯独漏了最重要的部分。');
    era.printButton('出声提醒', 1);
    era.printButton('抓着她的手强迫她', 2);
    await era.input();
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    await print_ero_page(85);
    await end_ero_and_show_result();
  };

  handlers.milking = async (ruby, me, r_call_m, m_call_r) => {
    await print_event_name('授乳', ruby);
    await ruby.say_and_wait('因为今天错穿了以前的胸罩，被勒紧得很辛苦。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 这样说着，把双手背过去摇摇晃晃地移动着。',
    ]);
    await era.printAndWait('伴随着金属零件脱落的声音，她的乳房跳了出来。');
    await ruby.say_and_wait([
      r_call_m,
      '，我的乳房，不吸吗？你把脸贴在膨胀的花蕾上。',
    ]);
    await ruby.say_and_wait('呵呵，来吧。向妈妈的乳房撒娇，变得幸福吧。');
    await era.printAndWait('既然已经露骨地邀请到这地步，那就没法拒绝了。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 的头上传来 ',
      ruby.get_colored_name(),
      ' 抚摸的触感。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 向着眼前少女那魔性的乳房前进，用嘴巴包裹了前端的膨胀。',
    ]);
    await ruby.say_and_wait('不用考虑困难的事情，吸着妈妈的乳头变得幸福吧。');
    await era.printAndWait([
      '在抚摸后脑勺的 ',
      ruby.get_colored_name(),
      ' 的手催促下，',
      me.get_colored_name(),
      ' 试着吸了一下她的乳头。',
    ]);
    era.printButton('（啊！太幸福了，脑子里空空如也……）', 1);
    await era.input();
    await era.printAndWait('温暖的胸膛近在眼前产生了幸福满足的心情。');
    await era.printAndWait([
      '好端端的大人向比自己小得多的女孩子撒娇，这种羞耻，',
      me.get_colored_name(),
      ' 只能通过嘴唇感受肥大的乳头来缓解。',
    ]);
    await ruby.say_and_wait('像孩子一样，像婴儿一样……吸着乳房变得幸福吧～');
    await ruby.say_and_wait([
      '好了，',
      r_call_m,
      '。不要发呆，请多吸点我的奶吧。',
    ]);
    await era.printAndWait('……啾……啾。');
    await ruby.say_and_wait([
      '做的非常棒，',
      r_call_m,
      '。能很好地吸乳房真是太了不起了。',
    ]);
    await ruby.say_and_wait('好孩子，好孩子……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 只是按照 ',
      ruby.get_colored_name(),
      ' 说的吸了吸胸部，',
      ruby.get_colored_name(),
      ' 就一直抚摸 ',
      me.get_colored_name(),
      '，表扬 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 觉得有些不对，但被无条件肯定的感觉让头脑都松弛下来。',
    ]);
    await era.printAndWait('想被更多地表扬，想被更多地抚摸。');
    await era.printAndWait(['沉迷于 ', ruby.get_colored_name(), ' 的胸膛。']);
    await era.printAndWait('咕啾，咕啾……啾……');
    await ruby.say_and_wait('成为吸着乳房的成年婴儿吧。');
    await era.printAndWait([
      '沉浸在幸福感中的 ',
      me.get_colored_name(),
      '，头脑产生了不协调感。',
    ]);
    await me.say_and_wait(`赢不了，我连 ${m_call_r} 的乳房都赢不了`, true);
    await ruby.say_and_wait([r_call_m, '，已经忘记自己的梦想了吗？']);
    await era.printAndWait([me.get_colored_name(), ' 用吸奶的方式回应。']);
    await ruby.say_and_wait('呵呵，完全堕落了呢。作为奖励……');
    await ruby.say_and_wait('一边吸着奶，一边尿出来吧。');
    await ruby.say_and_wait([
      '啊！',
      r_call_m,
      ' 的小鸡鸡的真的很大呢，欺负了我好几次。',
    ]);
    await ruby.say_and_wait([
      '不能用牙齿咬哦 ',
      r_call_m,
      '。',
      r_call_m,
      ' 是 ',
      m_call_r,
      ' 的乖宝宝。',
    ]);
    await era.printAndWait('动作加快。');
    await ruby.say_and_wait('稍微快一点就连吸奶的余裕都没有了吗？');
    await ruby.say_and_wait('好吧，如果嘴巴放开了就请叫我妈妈。');
    await ruby.say_and_wait(
      '对比小自己很多的女孩子像婴儿一样撒娇，舍弃大人的尊严，让自己更舒服吧。',
    );
    await ruby.say_and_wait(['很棒，', r_call_m, '。就是这个样子。']);
    await ruby.say_and_wait('身为大人却被小孩玩弄，叫着妈妈变舒服。');
    await ruby.say_and_wait('明明有很棒的小鸡鸡，可吸了奶就变成这样，真是……');
    await ruby.say_and_wait(
      '差不多要射了？请等一下，我去准备纸巾。不能把房间弄脏。',
    );
    await ruby.say_and_wait('好了，把叠好的纸巾放在小鸡鸡尖端部分。');
    await ruby.say_and_wait('什么时候射精都可以哦？');
    await ruby.say_and_wait(['对不起，', r_call_m, '。']);
    await ruby.say_and_wait(
      '本来打算让你舒服地射精的，但这个坏东西总是欺负我。',
    );
    await ruby.say_and_wait('所以临时替换成坏心眼射精，还有妈妈我也不当了。');
    await ruby.say_and_wait('咦？明明都说不当妈妈了，为什么还要喊我妈妈呢？');
    await ruby.say_and_wait([
      '我不是 ',
      r_call_m,
      ' 的妈妈，被叫妈妈很恶心，请停止。',
    ]);
    await ruby.say_and_wait('差不多该射了吧，看手感就知道了。');
    await ruby.say_and_wait('啊！表情很可爱。');
    await ruby.say_and_wait('好孩子，好孩子……最后吸着乳房射吧，biu～biubiu……');
    begin_and_init_ero(0, 85);
    set_palam_to_max(85, part_enum.breast);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  };
};
