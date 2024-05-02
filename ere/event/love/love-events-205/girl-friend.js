const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} vp
 * @param {CharaTalk} me
 */
module.exports = async (vp, me) => {
  await print_event_name('Un heureux événement（一件幸福的事情）', vp);
  if (vp.sex_code - 1 && me.sex_code && check_pregnant_unprotect(205)) {
    begin_and_init_ero(0, 205);
    await vp.print_and_wait(
      `那天放学后，${sys_get_callname(
        205,
        0,
      )} 把我拉上车，带我到国道边的情人旅馆。`,
    );
    await vp.print_and_wait('这种地方，我从来没进去过。');
    await vp.print_and_wait('外表朴实无华，大厅和走廊融为一体，有点狭小。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 按着安装在柜台上的触摸屏选取房间。`,
    );
    await vp.print_and_wait('没想到会是半自助的，接待员都没有。');
    await vp.print_and_wait(
      `和这个人一起站在电梯前，从现在开始的几个小时里，我会被当做人偶对待，给${me.sex}处理性欲。`,
    );
    await vp.print_and_wait(`按照之前的经验，让${me.sex}射出来就能结束了。`);
    await vp.print_and_wait(
      `一进屋，${sys_get_callname(205, 0)} 就指示我坐在床上脱衣服。`,
    );
    await vp.say_and_wait('我想你的知道的……');
    await me.say_and_wait('啊，我会遵守约定，戴上避孕套。');
    await vp.print_and_wait('脱下衣服，不管怎么说被这样看到还是会感到羞耻。');
    await me.say_and_wait('好厉害，完全没有下垂的感觉。');
    await vp.print_and_wait(
      `让 ${sys_get_callname(205, 0)} 高兴的乳房，张力也是一级品，是被 ${
        me.sex
      } 一揉就会吸到手上的理想乳房。`,
    );
    await vp.print_and_wait(
      `我不想让 ${sys_get_callname(205, 0)} 以外的人碰。`,
    );
    await me.say_and_wait('表情有点僵硬啊……肩膀再放松一点。');
    await vp.print_and_wait(
      '要做的话我希望能赶紧做。不管是手、嘴还是阴道都会被使用。',
    );
    await vp.print_and_wait(`我偶尔会觉得自己只是${me.sex}的自慰人偶而已。`);
    await me.say_and_wait('先躺在床上，对，仰面。');
    await vp.print_and_wait('啊？不知道什么意思，想种付位吧。');
    await vp.print_and_wait(
      `按照${me.sex}指示的那样仰面躺着，${sys_get_callname(
        205,
        0,
      )} 用弹钢琴一样的手势开始在我身上滑动手指。`,
    );
    await vp.print_and_wait(
      '脖子、腋下、锁骨、侧腹，用触摸都算不上的轻微力量，时不时地按上去。',
    );
    await vp.print_and_wait('我开始以为会讨厌的，但是完全没有。');
    await vp.print_and_wait('取而代之的是，像孩子们玩闹的那种令人着急的感觉。');
    await vp.print_and_wait('话说，我不理解为什么要做这样的事。');
    await vp.print_and_wait('一边避开乳头和阴埠，一边灵巧地将手指滑动。');
    await vp.print_and_wait('被抚摸的地方有点紧绷。');
    await vp.print_and_wait(
      `听 ${sys_get_callname(205, 0)} 说女人的身体是座金库。`,
    );
    await vp.print_and_wait('按顺序解锁，会以最好的状态打开。');
    await vp.print_and_wait('手指终于进入阴道内了，一边问候入口一遍往里走。');
    await vp.print_and_wait('可能已经湿了，手指顺利地进入。');
    await vp.print_and_wait('把意识集中在天花板上，努力忘记其他东西。');
    await vp.print_and_wait(
      '是LED灯啊，间接照明的那种，我开始数起天花板上的纹路。',
    );
    await me.say_and_wait('大概是这种感觉吧。');
    await vp.say_and_wait('嗯？喔喔啊！啊…啊？');
    await vp.print_and_wait('去了，我……就高潮了？');
    await vp.print_and_wait('诶？啊？');
    era.set('palam:205:阴道快感', era.get('tcvar:205:阴道快感上限'));
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.virgin),
      false,
    );
    await me.say_and_wait('哈哈，都翻白眼了，吓了一跳吗？');
    await vp.print_and_wait('我被打了奇怪的药——这么想着环顾四周。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 右手的手指插进阴道内，左手抚摸着侧腹附近。`,
    );
    await vp.print_and_wait('没有注射器之类的奇怪工具。');
    await vp.print_and_wait('异常的只有我的小穴。');
    await vp.print_and_wait(
      `连腰都跟着痉挛了，大口大口地吃下 ${sys_get_callname(
        205,
        0,
      )} 的手指，滴下爱液，完全是谄媚的姿态。`,
    );
    await vp.say_and_wait('你对我的身体做了什么？');
    await me.say_and_wait(
      `脖子、腋下、肚子、侧腹，${sys_get_callname(
        0,
        205,
      )} 真的全身满是弱点啊。`,
    );
    await vp.print_and_wait(
      `每当${me.sex}微微移动手指时，我感觉被几十倍的力量给举起。`,
    );
    await vp.print_and_wait(
      `不对，是我的身体像鱼一样跳跃着。被 ${sys_get_callname(
        205,
        0,
      )} 抠一下，就跳得乱七八糟。`,
    );
    await vp.say_and_wait('不要！停下！住手！Arrêtez！');
    await me.say_and_wait(`果然，${sys_get_callname(0, 205)} 的表情很丰富。`);
    await vp.print_and_wait(
      `槽糕……完蛋了，太小看 ${sys_get_callname(205, 0)} 了。`,
    );
    await vp.print_and_wait(
      `这个家伙，能只用指尖就把女孩子搞得神魂颠倒，变成${me.sex}的可怜母狗。`,
    );
    await vp.print_and_wait('只是欺负了下入口，我的小穴就投降了。');
    await vp.print_and_wait('肚子的深处，子宫像干渴了一样躁动着。');
    await vp.print_and_wait(`你有多熟练？你让多少女孩子哭泣了？`);
    await vp.print_and_wait('我还是中学生啊…在这个年纪被你这样做了的话……');
    await vp.say_and_wait('等一下，请停一下……');
    await me.say_and_wait('好吧？小穴就到此为止。');
    await vp.print_and_wait('这次我的乳头被滑过了。');
    await vp.print_and_wait(
      '在阴道内的余韵中，被毫不留情的指尖刺激了僵硬的乳头。',
    );
    await vp.print_and_wait('我的乳头勃起得太过，热到连乳晕都发烫了。');
    await vp.say_and_wait('啊！嗯噢噢噢！乳头也！');
    await vp.print_and_wait(`任何女人都会哭喊着叫停的。`);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.breast),
      false,
    );
    await vp.say_and_wait('哼姆呜呜！');
    await me.say_and_wait('那么，小穴也…');
    await vp.say_and_wait('哼唔唔唔唔……');
    await vp.print_and_wait('避雷针就是这样的感觉，我的那里打雷了。');
    await vp.print_and_wait('只有下半身被切开，好似变成了别的生物。');
    await vp.print_and_wait('喉咙里只能发出像坏掉的警笛一样的声音。');
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.virgin),
      false,
    );
    await vp.print_and_wait(
      '如果不把身体里即将爆炸的什么尖叫出来的呀，我就受不了了。',
    );
    await vp.print_and_wait(
      `我的身体，被 ${sys_get_callname(205, 0)} 肆意地弄坏了。`,
    );
    await vp.print_and_wait('脖子向后仰着，腰随意地向前突出。');
    await vp.print_and_wait(
      `${sys_get_callname(
        205,
        0,
      )} 的手指毫不留情地在阴道内挖掘，绷直的脚指向天空。`,
    );
    await vp.print_and_wait(
      '一直忍耐的“尿意”到达极限，让濒临决口的快感变强数百倍不止。',
    );
    await vp.say_and_wait('喔啊啊啊出来了……出来了！不要，不要这样……');
    await me.say_and_wait('那不是尿尿，可以出来的。');
    await vp.print_and_wait(
      `${sys_get_callname(
        205,
        0,
      )} 一按阴蒂，腰就跳起来，洒出水汪汪的透明液体。`,
    );
    era.set('palam:205:阴道快感', era.get('tcvar:205:阴道快感上限'));
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.virgin),
      false,
    );
    await vp.print_and_wait(
      '虽然拼命地用力想要关闭尿道，但是身体完全不听使唤。',
    );
    await vp.print_and_wait('床单上有斑点，连屁股都能感觉到水的凉意。');
    await me.say_and_wait(
      `这是第一次潮吹吗？${sys_get_callname(0, 205)} 真的很容易有感觉。`,
    );
    await vp.say_and_wait(
      '啊……啊……哈啊……不要，停下，请停下吧，请饶了我的小穴……',
    );
    await vp.print_and_wait('即使错开腰也逃不掉，一直被欺负弱点，被抓住责备。');
    await vp.print_and_wait(
      `滴着爱液祈求 ${sys_get_callname(205, 0)} 原谅的我，一定，表情很糟糕。`,
    );
    await vp.print_and_wait(
      '眼泪和口水溅得到处都是，一定是世界上最幸福的雌性的脸。',
    );
    await vp.print_and_wait(
      `在 ${sys_get_callname(205, 0)} 的手拔出来之前，我被弄潮吹了好几次。`,
    );
    await vp.print_and_wait('全身痉挛，连改变姿势都做不到。');
    await vp.print_and_wait(
      '感觉就像是神经全部被抽出来，把快乐直接注入脑浆一样。',
    );
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 慢慢地抚摸着我的肚子、我的头发…`,
    );
    await vp.print_and_wait(
      '为了疼爱露出肚子的宠物狗，温柔地揉捏着跳跃的子宫。',
    );
    await me.say_and_wait('慢慢记住吧，最后我会让你的子宫也变舒服的。');
    await vp.say_and_wait('啊啊啊啊……');
    await vp.print_and_wait(
      `不行……雌性的本能……想向强壮的雄性屈服，被${me.sex}支配……`,
    );
    await vp.print_and_wait(
      '师傅没教过我这样的事啊，全部被夺走了，我的自尊心、自信……',
    );
    await vp.print_and_wait(
      `至今为止积累的一切全部被涂上了${me.sex}的颜色，救命……`,
    );
    await me.say_and_wait('那我差不多也想拜托你了。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 脱下了内裤，展示屹立的阴茎。`,
    );
    await vp.print_and_wait(
      '无论怎么看都和骗人的一样，粗细、长度，血管都绷出来了，和电影里看到的完全不同。',
    );
    await vp.print_and_wait(
      '像热气一样升腾起来，呛人的雄性气味烧坏了我的大脑。',
    );
    await vp.print_and_wait('在那之前，身体已经完全屈服，准备留下子孙。');
    await vp.print_and_wait('收紧的肚子里隐隐作痛，肌肉肆意地把子宫拉下。');
    await vp.print_and_wait('只有强壮的雄性才被允许的特权。');
    await vp.print_and_wait(
      `被 ${sys_get_callname(205, 0)} 的种子蹂躏是我卵子的义务。`,
    );
    await vp.print_and_wait('请给我，给我这个，我想要你。');
    await vp.print_and_wait(
      '子宫因为饥饿谄媚而刺痛，抵抗的意识淡薄了，没注意到垂涎的阴道口。',
    );
    await me.say_and_wait('盯着看？有那么喜欢吗。');
    await vp.print_and_wait('煽动我的，发自内心的提问声。');
    await vp.print_and_wait(
      `差劲，差劲死了，你一定就这样把好几个女人都变成了雌性吧。`,
    );
    await vp.say_and_wait('咕……不是挺有型的吗，总之先戴上避孕套……');
    await me.say_and_wait(
      `在那之前，口交，${sys_get_callname(0, 205)} 做得到吧？`,
    );
    await vp.print_and_wait('只能顺从了，这也是没办法的事吧？');
    await vp.print_and_wait(
      '含在嘴里的瞬间，被鼻子里的雄臭烧昏头，又吹出了潮水。',
    );
    await vp.print_and_wait(
      '已经只懂得谄媚的笨蛋小穴，期待今后被贯穿，把淫水流的厉害。',
    );
    await vp.print_and_wait('太大了，只能含进去一半多。');
    await vp.print_and_wait('为了不让牙齿蹭到，拉下下巴，收紧嘴。');
    await vp.print_and_wait('无法正常呼吸，鼻息也急促起来。');
    await me.say_and_wait('你的脸，真让人意外。');
    await vp.say_and_wait('哼哦哦哦，咕，嘶，呜呜，哈啊…哈啊，啊姆。');
    await me.say_and_wait(`${sys_get_callname(0, 205)} 努力的样子很可爱呢。`);
    await quick_make_love(
      new EroParticipant(205, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await vp.print_and_wait('抚摸着头，玩弄耳朵。');
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.body),
      false,
    );
    await vp.print_and_wait('不知什么时候又躺下来了，尾巴卷出了爱心的形状。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 拔出的阴茎，覆盖在我身上。`,
    );
    await vp.print_and_wait('逃不掉，不可避免，无法抗拒。');
    await vp.print_and_wait('我从现在开始，一定会被欺负到脑子都不正常。');
    await vp.print_and_wait('记住这个生殖器，变成无法战胜雄性的杂鱼雌性。');
    await vp.print_and_wait('糟透了……快点啊…');
    await vp.say_and_wait('哇哦哦哦噢噢噢噢！');
    await vp.print_and_wait('一下子就被打倒了。');
    await vp.print_and_wait('小穴，变得很奇怪。');
    await me.say_and_wait('这是你第一次被这样操吧，我尽量快点结束。');
    await vp.say_and_wait('停下吧，脑子会变奇怪的！这种事，我不知道啊…');
    await vp.print_and_wait('就像要把G点顶出来一样，对着最深处活塞。');
    await vp.print_and_wait('即使半狂乱地哭喊，不留情面的“啪啪”声也不会停下。');
    await vp.print_and_wait(
      '意识不知道飞去了哪里，也不知道高潮了多少次，被强硬地拉回来灌注快乐。',
    );
    await vp.print_and_wait(
      `抽插了十几分钟，${sys_get_callname(205, 0)} 终于射精了。`,
    );
    era.set('tcvar:0:避孕套', 1);
    era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
    era.set('palam:205:阴道快感', era.get('tcvar:205:阴道快感上限'));
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(205, part_enum.virgin),
      false,
    );
    await vp.print_and_wait('热的不像有隔了层橡胶，像被注入岩浆一样的一击。');
    era.drawLine();
    await vp.print_and_wait(
      '恢复意识的时候已经过了几个小时了，周围是纸巾盒避孕套的包装。',
    );
    await vp.print_and_wait(
      '垃圾箱里还有几个系好的避孕套，已经不知道换了几次了。',
    );
    await vp.print_and_wait(
      `记得是某次后入位的时候，${sys_get_callname(
        205,
        0,
      )} 拔出阴茎，更换避孕套时，我昏倒了。`,
    );
    era.add('exp:205:阴道高潮次数', 5);
    era.add('exp:0:阴茎高潮次数', 5);
    era.add('exp:0:射精量', 20);
    await vp.print_and_wait(
      `被 ${sys_get_callname(205, 0)} 抱在怀里，一直玩弄身体。`,
    );
    await vp.print_and_wait('虽然想跳开，但我现在连靠自己站起来都做不到。');
    await me.say_and_wait(
      `早上好，${sys_get_callname(0, 205)}。我们身体很投缘，很舒服吧？`,
    );
    await vp.say_and_wait('哈啊……哈啊……已经结束的话，先放开我。');
    await me.say_and_wait(
      `因为 ${sys_get_callname(0, 205)} 尾巴缠着我所以做不到呢。`,
    );
    await vp.print_and_wait('诶？');
    await me.say_and_wait('不服输对运动员来说可能很好。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 说着又把手靠近我的阴蒂。`,
    );
    await vp.print_and_wait('由于条件反射的身体反应，呼吸一滞。');
    await vp.say_and_wait('等等！不要……对不起！真的很舒服。');
    await vp.print_and_wait(
      `${sys_get_callname(205, 0)} 满意地用鼻子笑出声，就把手放回了我的乳房。`,
    );
    await vp.print_and_wait(
      '和小孩子玩橡皮泥一样杂乱的揉搓方式，我的身体对那个也起了反应而发抖。',
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(205, part_enum.breast),
      false,
    );
    await vp.print_and_wait(
      '可恶……被抱着心情很好，无法违抗。连法国的大家都没见过这样的我。',
    );
    await vp.print_and_wait('不知道的各种快乐被灌输在脑海里，从心底感到喜悦。');
    era.drawLine();
    await vp.print_and_wait(
      `早上，被 ${sys_get_callname(205, 0)} 送到宿舍前，开门后摇摇晃晃地走路。`,
    );
    await vp.print_and_wait('脚像灌了铅一样重，头和被烟霾弥漫一样模糊。');
    await vp.print_and_wait('打开手机，未接来电和留言堆积如山。');
    await vp.print_and_wait(
      '在大家担心我的时候，我因为阴道被抚摸把爱液吹得到处都是。',
    );
    await vp.print_and_wait('在大家担心我的时候，子宫被一个劲地欺负得很开心。');
    await vp.print_and_wait(
      '在大家担心我的时候，我品尝到了作为雌性最好的幸福。',
    );
    await vp.print_and_wait('我背叛了很多人…');
    await vp.say_and_wait('啊……啊啊，嗯。');
    await vp.print_and_wait('注意到的时候，内裤湿透了。');
    await vp.print_and_wait('右手无意识地伸下胯下，划过裂缝，用阴蒂自慰。');
    await vp.print_and_wait(
      '——一点也不舒服，不像那时那样。为什么？明明是同一个地方。',
    );
    await vp.print_and_wait(
      '趴在桌子上，左手从胸罩下面把手伸进去，捏着僵硬的乳头。',
    );
    await vp.print_and_wait('从笔筒里抽出一支较粗的圆珠笔，是师傅送我的礼物。');
    await vp.print_and_wait('浅……够不到啊！完全不够。');
    await vp.print_and_wait('沉迷于手淫，吐槽各种各样的事，连椅子都湿透了。');
    await vp.print_and_wait('但是去不了，我知道，因为我品尝过“真家伙”了。');
    await vp.print_and_wait('连呼吸都能堵住，剜着喉咙那根巨物从脑海中闪过。');
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      ' 收到了 ',
      vp.get_colored_name(),
      ' 的信息：',
    ]);
    await vp.say_and_wait('下一次是什么时候？');
    era.println();
    end_ero_and_train();
  }
  await sys_love_uma_in_event(205);
};
