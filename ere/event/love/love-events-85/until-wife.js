const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love85AfterGirlFriend = require('#/event/love/love-events-85/after-girl-friend');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love85AfterGirlFriend {
  async 89(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[89](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('佳偶', ruby);
    await era.printAndWait([
      '某一天，',
      ruby.get_colored_name(),
      ' 独自在 ',
      me.get_colored_name(),
      ' 的训练员室怨怨自艾。',
    ]);
    await ruby.say_and_wait('结果，我说不出口吗？');
    era.printButton('「你有什么想对我说的吗？」', 1);
    await era.input();
    await ruby.say_and_wait('！');
    await ruby.say_and_wait([
      ruby.get_colored_name(),
      ' 的表情彷佛在说：「糟了。」移开了视线。',
    ]);
    await ruby.say_and_wait([
      '沉默了一段时间后，',
      ruby.get_colored_name(),
      ' 下定决心似地叹了口气。',
    ]);
    await ruby.say_and_wait('是的。');
    era.printButton('那就让我听听吧。', 1);
    await era.input();
    await ruby.say_and_wait('非常抱歉，不能告诉你。');
    await era.printAndWait([ruby.get_colored_name(), ' 的脸颊被染成红色。']);
    await era.printAndWait('非常可爱，几乎能让正常男性的脑回路短路。');
    era.printButton(
      `「我是 ${m_call_r} 的专属训练员，不管对我说什么都可以。」`,
      1,
    );
    await era.input();
    await ruby.say_and_wait('不，那我也不能告诉你。');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('不管说什么，你都会接受吗？');
    era.printButton('「当然！不管你说什么，我都会接受的，我保证。」', 1);
    era.printButton(
      '「只要你能幸福，就是我最好的愿望，所以你无论做出什么决定，我都会支持你。」',
      2,
    );
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 沉思了一会儿，慢慢地深呼吸后，开口了。',
    ]);
    await ruby.say_and_wait('请不要忘记刚才的话。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 向 ',
      me.get_colored_name(),
      ' 在的沙发边走去，优雅地坐到了 ',
      me.get_colored_name(),
      ' 的侧边。',
    ]);
    await era.printAndWait([
      '冰冷的指尖爬到了 ',
      me.get_colored_name(),
      ' 的手臂上，与柔软触感一起传来的还有香甜的体香。',
    ]);
    await ruby.say_and_wait('耳朵，借我一下。');
    await era.printAndWait([me.get_colored_name(), ' 听从地低下头。']);
    await era.printAndWait([ruby.get_colored_name(), ' 轻轻地呼吸了一下。']);
    await ruby.say_and_wait('我想当妈妈……');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 看着 ',
      me.get_colored_name(),
      ' 的表情，微微一笑。',
    ]);
    await ruby.say_and_wait('我想要，和你的孩子。');
    await ruby.say_and_wait('呐，可以吧？');
    era.printButton('「那么，什么时候好呢？」（升级关系）', 1);
    era.printButton('「还不是时候」（暂缓升级）', 2);
    era.printButton(`（${m_call_r}，说不定会换个人结婚。）（不建议选择）`, 3);
    switch (await era.input()) {
      case 1:
        await ruby.say_and_wait('诶？');
        await me.say_and_wait('我们的孩子，我想快点见到。');
        await ruby.say_and_wait('诶……诶？');
        await era.printAndWait([
          me.get_colored_name(),
          ' 牵起 ',
          ruby.get_colored_name(),
          ' 的手，呼吸吐在彼此的脸颊上。',
        ]);
        await ruby.say_and_wait('等！管家还在……再怎么说这种时间不行！');
        era.printButton('「那么，哪种程度才行呢？」', 1);
        await era.input();
        await ruby.say_and_wait('哪种程度都不行！');
        era.printButton('「如果我无论如何都要做呢？」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('明白了。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 看起来不情不愿地站了起来。',
        ]);
        await era.printAndWait([
          '一瞬间，',
          me.get_colored_name(),
          ' 感到一股不好的预感。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 慌慌张张站起身的途中，被淘气地笑着的 ',
          ruby.get_colored_name(),
          ' 推倒在了沙发上。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 把嘴唇重叠在 ',
          me.get_colored_name(),
          ' 的嘴唇上，反复地多次啄食。',
        ]);
        await era.printAndWait('渐渐地，轻吻消失了，取而代之的是深沉的湿吻。');
        await era.printAndWait(
          '彼此的舌尖只一接触就纠缠在一起，麻木的快感在全身奔走。',
        );
        await era.printAndWait([
          me.get_colored_name(),
          ' 把手绕到 ',
          ruby.get_colored_name(),
          ' 的后背，让她紧贴在 ',
          me.get_colored_name(),
          ' 身上。',
        ]);
        await era.printAndWait([
          '爱马柔软的肢体和香甜的味道，让 ',
          me.get_colored_name(),
          ' 觉得脑子变得干巴巴的。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 也回抱住 ',
          me.get_colored_name(),
          ' 的头，贪图 ',
          me.get_colored_name(),
          ' 的触感。',
        ]);
        await era.printAndWait([
          '偶尔发出的淫荡换气声，让 ',
          me.get_colored_name(),
          ' 更加兴奋了。',
        ]);
        await era.printAndWait('不久，不知是哪边的唾液，先拉着丝分开了。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 一副依依不舍的样子，让 ',
          me.get_colored_name(),
          ' 几乎忍不住再次拥抱。',
        ]);
        await ruby.say_and_wait('差不多了吧……');
        era.printButton('「好的，非常感谢。」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 离开 ',
          me.get_colored_name(),
          ' 身边，开始整理略显凌乱的衣服。',
        ]);
        await era.printAndWait([
          '刚才妖艳的氛围荡然无存，你们回到了平日训练时的感觉。',
        ]);
        await sys_love_uma_in_event(85);
        begin_and_init_ero(0, 85);
        await quick_make_love(
          new EroParticipant(0, part_enum.mouth),
          new EroParticipant(85, part_enum.mouth),
          false,
        );
        end_ero_and_train();
        break;
      case 2:
        await ruby.say_and_wait('……好吧');
        await era.printAndWait([ruby.get_colored_name(), ' 默默地离开了……']);
        era.set('cflag:85:爱慕暂拒', 89);
        await punish_rejecting_love(85);
        break;
      case 3:
        era.set('flag:强制BE', 85);
    }
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} r_call_m
   */
  async kiss(ruby, me, r_call_m) {
    await print_event_name('训练员室接吻', ruby);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的爱马把浑浑噩噩的 ',
      me.get_colored_name(),
      ' 推倒在沙发上。',
    ]);
    await era.printAndWait([
      '摊开的奢华决胜服下，套着白丝裤袜的娇臀贴坐在 ',
      me.get_colored_name(),
      ' 的胯部。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 身子前倾，几缕棕黑色的卷发顺着侧颜滑过，如画中人偶般的小脸却泛起淡淡红晕。',
    ]);
    await ruby.say_and_wait([r_call_m, '，不用多想。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 刚撑着手肘想要起身，温软滑嫩的少女唇瓣便堵住了 ',
      me.get_colored_name(),
      ' 的嘴。',
    ]);
    await era.printAndWait([
      '一条软濡的嫩舌一下子撬开 ',
      me.get_colored_name(),
      ' 的唇齿探入口中。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 粗糙厚实的舌头被抓住、挑弄，继而与爱马的香舌纠缠于一起。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的津液带着如餐后水果般的甘甜，此刻不断地被送入 ',
      me.get_colored_name(),
      ' 口中。',
    ]);
    await era.printAndWait([
      '因为姿势的关系，',
      me.get_colored_name(),
      ' 被迫不停地吞咽爱马粘稠、清甜的唾液。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的体香渐渐充盈在四周，穿透 ',
      me.get_colored_name(),
      ' 的鼻腔，麻痹了大脑。',
    ]);
    await era.printAndWait([
      '国中女生在 ',
      me.get_colored_name(),
      ' 的口腔中搅动自己湿热的粉舌，和 ',
      me.get_colored_name(),
      ' 的粗舌贴卷在一起。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 开始互相交换、互相吞咽对方的口水，发出浓稠咸湿的声响。',
    ]);
    era.printButton('扶住爱马的细腰。', 1);
    era.printButton('玩弄爱马挺翘的美臀。', 2);
    await era.input();
    await ruby.say_and_wait('啾啾……滋，咕……嗽嗽噝噜……');
    await era.printAndWait([me.get_colored_name(), ' 沉溺在淫乱的舌吻中。']);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 被白丝裤袜紧裹的少女阴阜，因为幼穴流出的淫液而染成了深色。',
    ]);
    await era.printAndWait([
      '良久，还是 ',
      me.get_colored_name(),
      ' 因肺活量败下阵来，头晕目眩地喘息。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 心满意足地收回被 ',
      me.get_colored_name(),
      ' 含到略显红肿的嫩舌，不过气息非常平稳。',
    ]);
    await era.printAndWait([
      '爬坡、游泳……体能本就远超人类的赛马娘，即使放空意识和 ',
      me.get_colored_name(),
      ' 热吻，对于呼吸换气的本能掌握也十分优秀。',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async jade(ruby, me) {
    await print_event_name('玉石店', ruby);
    await era.printAndWait('一般饰品店更多的是卖女孩子的装饰物。');
    await era.printAndWait('两人走进一家店，里面的布置让人眼前一亮。');
    await era.printAndWait('玉石、宝石，店里不仅石头种类丰富，还有不少成品。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 没有被这些宝贝闪花眼，径直朝玉佩的方向走起。',
    ]);
    await era.printAndWait(
      '看起来美好的宝石，她已经看得太多，早就不感兴趣了。',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 晃头晃脑，似乎没找到自己中意的。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 叫来柜台边的人给介绍一下。',
    ]);
    await era.printAndWait([
      '听导购介绍了几对，',
      ruby.get_colored_name(),
      ' 不甚满意。',
    ]);
    await ruby.say_and_wait('没有其他更好的了吗？');
    await era.printAndWait(['不一会儿，老板人来了。他邀请你们上楼交谈。']);
    await era.printAndWait('一个盒子被端上来，打开以后见到的是一对翡翠坠子。');
    await era.printAndWait(
      '原来是一对鸳鸯戏水图，完全一样的造型，周围有莲叶缠绕，圆满丰腴。',
    );
    await era.printAndWait('分开只是单只，合拢就是一对交颈的亲密爱侣。');
    await era.printAndWait('老板「这本事我打算送给妻子的礼物，可惜……」');
    await era.printAndWait([
      me.get_colored_name(),
      ' 确实有些心动，这的确可以称得上极品。',
    ]);
    era.printButton('「您打算卖它吗？」', 1);
    era.printButton('「这实在太贵重了，我们看看其他的吧？」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait('老板点头，可惜价钱已经吓退了不少人。');
      await era.printAndWait(
        '一般人不敢轻易开口叫买，这已经不是可以随意讨人欢心的价格了。',
      );
      await ruby.say_and_wait('那你带一只，我带一只，很好。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 也很喜欢，越看越顺眼，巴不得现在就带上。',
      ]);
      await era.printAndWait(
        '老板却被吓了一跳，恐小女孩不懂这对翡翠的寓意，正要解释。',
      );
      era.printButton('「老板，我们看看下一副吧。」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 买到心爱的对玉，十分高兴。',
      ]);
      await era.printAndWait([
        '临出门口，老板还想和 ',
        ruby.get_colored_name(),
        ' 解释一下鸳鸯戏水。',
      ]);
      await ruby.say_and_wait('我是鸯，他是鸳，我知道的。');
      await era.printAndWait([
        '趁老板傻眼的时候，',
        me.get_colored_name(),
        ' 拉着 ',
        ruby.get_colored_name(),
        ' 又逛向了别处。',
      ]);
    } else {
      await era.printAndWait('一番畅谈……');
      await era.printAndWait([
        '这位老板倒是个真性情的人，表示会为你们留下首饰后，你们离开了玉石店。',
      ]);
    }
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async dance(ruby, me) {
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('舞蹈室', ruby);
    await era.printAndWait(
      '临近正午的日光明亮炙人，打在地上氤氲出烦闷的热气。',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 娇小的身上穿了一件纯雅的白色连裙芭蕾舞服，下连裹着白色连裤袜的细长美腿。',
    ]);
    await era.printAndWait('端正精致的五官在午后散发出青苹果般的甜香稚气。');
    await era.printAndWait([
      '阳光下，婆娑起舞的 ',
      ruby.get_colored_name(),
      ' 将身材柔然展开，优美曲线完美毕现。',
    ]);
    await era.printAndWait([
      '她娇嫩的侧颜望向 ',
      me.get_colored_name(),
      '，没有停下抬起的脚步。',
    ]);
    await era.printAndWait('胸前一对雪奶随着她身体前倾，摇出一阵阵涟漪乳漾。');
    await era.printAndWait([
      '一曲稍息，',
      me.get_colored_name(),
      ' 站在 ',
      ruby.get_colored_name(),
      ' 翘起的美臀后，抬起手拍了拍。',
    ]);
    await era.printAndWait([
      '沉浸在舞蹈里的 ',
      ruby.get_colored_name(),
      ' 小小地吓了一跳。',
    ]);
    await era.printAndWait([
      '她眼神低垂地转过娇小的身子，憋到 ',
      me.get_colored_name(),
      ' 身下那高高撑起的西裤裆部，粉脸带羞。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 伸出手，捧住 ',
      ruby.get_colored_name(),
      ' 的脸庞。',
    ]);
    await era.printAndWait([
      '下一秒，大嘴彻底堵住了 ',
      ruby.get_colored_name(),
      ' 的粉色唇瓣。',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 的神色像是在心里叹了口气。',
    ]);
    await era.printAndWait([
      '本想久违地练习一下芭蕾舞，此时此刻也只能无奈地享受和 ',
      me.get_colored_name(),
      ' 的舌吻。',
    ]);
    await era.printAndWait([
      '甜美的体香溢满了 ',
      me.get_colored_name(),
      ' 的鼻腔，像绝品香薰将神经迷醉。',
    ]);
    await era.printAndWait([
      '反客为主的 ',
      ruby.get_colored_name(),
      ' 贪婪地吮吸 ',
      me.get_colored_name(),
      ' 的唾液，双手轻柔地抚上 ',
      me.get_colored_name(),
      ' 的后背。',
    ]);
    await era.printAndWait([
      '男人粗重的呼吸和女孩情动的娇喘里，',
      me.get_colored_name(),
      ' 的大手揉捏把玩起白丝美臀。',
    ]);
    await era.printAndWait([
      '裤裆下的小训练员，也不自觉摩挲起 ',
      ruby.get_colored_name(),
      ' 柔软的娇躯。',
    ]);
    await era.printAndWait('淫乱的舌吻结束。');
    await era.printAndWait([
      '抱在 ',
      me.get_colored_name(),
      ' 身上的 ',
      ruby.get_colored_name(),
      ' 带着矜持的羞意，轻吞了一下口水。',
    ]);
    await era.printAndWait([
      '一只小手寻到 ',
      me.get_colored_name(),
      ' 高高翘起的裆部，纤嫩手指娴熟地解下西裤。',
    ]);
    await ruby.say_and_wait('最近和我独处的时候，是不是越来越容易变大了……');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 轻轻蹭了蹭让她又爱又怕的大家伙。',
    ]);
    await era.printAndWait([
      '雪白的精致小下巴搁在卵袋上，好让 ',
      me.get_colored_name(),
      ' 阴茎的龟头直抵少女雪白的额角。',
    ]);
    await ruby.say_and_wait('呵呵……和主人不一样，是很霸气的孩子呢。');
    await era.printAndWait([
      '浓郁的男性精臭一股脑涌入 ',
      ruby.get_colored_name(),
      ' 的鼻腔，她越来越抵抗不了这股在她看来带着浓稠爱意的气味。',
    ]);
    await era.printAndWait('刚刚结束舞蹈的爱马依稀带着运动后的微汗。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 双手合握 ',
      me.get_colored_name(),
      ' 兴奋抖动的下体，轻柔地前后撸动了一会儿。',
    ]);
    await era.printAndWait([
      '她吐出一小截湿润的粉软香舌，笑意盈盈地看着 ',
      me.get_colored_name(),
      '。',
    ]);
    era.printButton(`是 ${m_call_r} 太美了，我每次看到都忍不住硬到发疼。`, 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 闻言，卷弄了几下 ',
      me.get_colored_name(),
      ' 吐出先走汁的马眼，将龟头含进了小嘴慢慢嘬吸。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 的双手也没闲着，揉了揉爱马后翘的臀部，然后滑进了芭蕾短裙下的白丝臀沟里。',
    ]);
    await era.printAndWait(
      '轻轻扣弄了几下，手指上被渗透高级丝袜的爱液轻松裹满。',
    );
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} r_call_m
   */
  async take_shower(ruby, me, r_call_m) {
    await print_event_name('美人出浴', ruby);
    await era.printAndWait([
      '深夜回家，',
      me.get_colored_name(),
      ' 刚巧赶上 ',
      ruby.get_colored_name(),
      ' 洗完澡从浴室出来。',
    ]);
    await era.printAndWait('她全身冒着香喷喷的热气，长发纠结在一起。');
    era.printButton('抱住她爱抚。', 1);
    era.printButton('带到客厅调教。', 2);
    await era.input();
    await ruby.say_and_wait([r_call_m, '，不要……']);
    await era.printAndWait([me.get_colored_name(), ' 装出生气的样子。']);
    await era.printAndWait([ruby.get_colored_name(), ' 察觉到不对马上改口。']);
    await ruby.say_and_wait('亲爱的，不要这样，我刚洗漱完。');
    await era.printAndWait([me.get_colored_name(), ' 不容分说，将嘴唇印上。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 像只发情的公狗，四处闻着 ',
      ruby.get_colored_name(),
      ' 身上的香味。',
    ]);
    era.printButton('轻咬脖子。', 1);
    era.printButton('抚摸大腿内股。', 2);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 吃了一惊，双腿本能地夹紧。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 在 ',
      ruby.get_colored_name(),
      ' 抖动的耳朵上咬了一下，似乎起了作用，',
      ruby.get_colored_name(),
      ' 的大腿肌肉放松了不少。',
    ]);
    await era.printAndWait([me.get_colored_name(), ' 毫不做作，长驱直入。']);
    await era.printAndWait([
      '手指在 ',
      ruby.get_colored_name(),
      ' 洁白的内裤外游走，很快就摸出了她阴阜完美的形状。',
    ]);
    await era.printAndWait('从缝隙中钻入后，又在那块粉嫩的区域外来回抚弄。');
    await era.printAndWait([ruby.get_colored_name(), ' 俏脸通红，牙关紧咬。']);
    await me.say_and_wait('有感觉吗？');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 忍不住轻轻叫出了声，喘息开始加剧。',
    ]);
    await me.say_and_wait('咦？难道自己做过这种事？');
    await ruby.say_and_wait('请不要信口雌黄。');
    await era.printAndWait('她的语气听起来有点生气。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 一边亲她，一边爱抚，来了个双管齐下。',
    ]);
    await era.printAndWait('身体是诚实的，不久那紧闭的洞口便涌出涓涓细流。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 可爱的清秀面庞因潮红而发出微烫的温度，换上的睡衣也湿了大半。',
    ]);
    era.printButton('和她去洗第二次澡。', 1);
    era.printButton('高举手掌，展示上面的粘稠体液。', 2);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 忍不住伏在 ',
      me.get_colored_name(),
      ' 肩上抽泣起来。',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    set_palam_to_max(85, part_enum.clitoris);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    end_ero_and_train();
  }
};
