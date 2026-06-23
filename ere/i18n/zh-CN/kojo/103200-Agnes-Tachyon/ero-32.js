/**
 * @file 爱丽速子 - 调教
 * @author 幽白書
 */
const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} y_call_t 玩家对爱丽速子的称呼
   */
  async kiss(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, ' 柔润的唇瓣印在了自己的双唇上。']);
    await tachyon.say_and_wait('咕啾……啾啪……啾……');
    await you.print_and_wait('一开始只是轻啄的接触，逐渐变成舌头交缠……');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async lure_by_tachyon(tachyon, you, y_call_t) {
    await you.print_and_wait([y_call_t, ' 娇媚的目光，勾引地望着自己。']);
    if (tachyon.sex_code > 0 && era.get('tcvar:32:发情') > 0) {
      await you.print_and_wait(
        '开合的双唇无论上下都淌着汁水，等待被填满的幸福……',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_success 调情是否成功
   */
  async lure(tachyon, you, callname, y_call_t, is_success) {
    await you.print_and_wait(['伸手抚摸 ', y_call_t, ' 的屁股……']);
    if (is_success || era.get('tcvar:32:发情') > 0) {
      era.println();
      await tachyon.say_and_wait(['嗯……', callname, '❤️']);
      era.println();
      await you.print_and_wait([
        '为了更容易被摸到，',
        y_call_t,
        ' 主动挺起了屁股。',
      ]);
      await you.print_and_wait('整个手掌充分感受到了臀肉的触感……');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async pet_breast(tachyon, you) {
    await tachyon.say_and_wait('就这么喜欢胸部吗……❤️');
    era.println();
    await you.print_and_wait('眼前熟透的果实，随着双手的动作来回摇晃着。');
    await you.print_and_wait('软嫩的乳肉在灵巧的双手下变换出各种模样。');
    era.println();
    await tachyon.say_and_wait('啊……不要那样把头……');
    era.println();
    await you.print_and_wait('将头埋进胸间的山谷，深吸口气。');
    await you.print_and_wait('少女的芳香，以及马娘的发情臭混合在一起……');
    await you.print_and_wait('已经熟成的果实，可以准备开始品尝了。');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async finger_fuck(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait(
        '手指插入的瞬间，爱液便仿佛找到了宣泄口一般从穴口涓涓流出。',
      );
      era.println();
      await you.say_and_wait([y_call_t, ' 真是好色啊。']);
      await you.say_and_wait('这里都这么湿了。');
      era.println();
      await tachyon.say_and_wait([callname, '……那种事，不说出来也可以的吧……']);
    } else {
      await tachyon.say_and_wait('嗯……❤️');
      era.println();
      await you.print_and_wait(
        '手指仿佛放入了一片泥沼之中，湿润的沃土正等待开发。',
      );
      era.println();
      await tachyon.say_and_wait(['快点……快来嘛，', callname, '❤️']);
      era.println();
      await you.print_and_wait('晶莹的爱液不断从密缝中滴落。');
      await you.print_and_wait([
        '屁股也不停的摇晃着，诱惑着 ',
        you.get_colored_name(),
        ' 对自己出手。',
      ]);
      await you.print_and_wait('看来已经完全做好交尾的准备了。');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async prepare_virgin(tachyon, you, callname, y_call_t) {
    if (era.get('mark:32:同心') <= 1) {
      await tachyon.say_and_wait('……过分……');
      era.println();
      await you.print_and_wait([
        '虽然羞红着脸，但没有拒绝就能看出 ',
        y_call_t,
        ' 的口是心非了吧？',
      ]);
      await you.print_and_wait('但是，只是这样也不太好玩……');
      await you.print_and_wait('要不，说些恳求的话吧？');
      era.println();
      await tachyon.say_and_wait('真是恶趣味的玩法啊……');
      await tachyon.say_and_wait([
        '请……为了让 ',
        callname,
        ' 专属的淫穴，能够为 ',
        callname,
        ' 服务……',
      ]);
      await tachyon.say_and_wait('尽情玩弄……我的骚穴吧❤️');
      era.println();
      await you.print_and_wait('明明是因为自己的要求才说出口……');
      await you.print_and_wait([
        '但看 ',
        y_call_t,
        ' 的反应，似乎也因为这样的淫语而兴奋起来了……',
      ]);
    } else {
      await tachyon.say_and_wait([callname, '❤️']);
      era.println();
      await you.print_and_wait('挂满了此时还在不断滴落的淫液。');
      await you.print_and_wait([y_call_t, ' 张开了自己下体娇嫩的小嘴。']);
      await you.print_and_wait('等待着期待已久的某物进入……');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async pet_anal(tachyon, you, callname, y_call_t) {
    await you.print_and_wait([
      '抹了抹 ',
      y_call_t,
      ' 发情的穴汁作为润滑后，将手按在了 ',
      y_call_t,
      ' 的屁穴前。',
    ]);
    if (era.get('abl:32:肛门耐性') >= 3) {
      await you.print_and_wait(
        '明明应该是出口的地方，却因按压自然的微微张开。',
      );
      await you.print_and_wait('屁股也不自觉的跟着按压的节奏摇晃起来。');
      era.println();
      await tachyon.say_and_wait([callname, '❤️那里不行❤️']);
      era.println();
      await you.print_and_wait(
        '明明是拒绝的话，但声音里传达出的却完全是继续的含义。',
      );
      await you.print_and_wait(
        '但不再更进一步，只是吊胃口般的继续轻轻按压着……',
      );
    } else {
      era.println();
      await tachyon.say_and_wait('等等！那个地方！');
      era.println();
      await you.print_and_wait([
        '装作没听到的轻轻用手指按压着 ',
        y_call_t,
        ' 的屁穴。',
      ]);
      await you.print_and_wait('紧闭的入口不适应的发着抖。');
      await you.print_and_wait('不过这样的青涩感，调教起来才更有价值不是吗？');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async prepare_anal(tachyon, you, callname, y_call_t) {
    if (era.get('abl:32:肛门耐性') >= 3) {
      await tachyon.say_and_wait('快点……快点惩罚这个下流发骚的淫荡屁穴吧❤️');
      era.println();
      await you.print_and_wait([
        '卖力将菊穴掰开的 ',
        y_call_t,
        '，渴望的喊出淫荡的话语，迫不及待的恳求着肉棒的插入',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '被 ',
        callname,
        ' 开发的……随 ',
        callname,
        ' 喜好随意使用的屁穴……快点，快点插进来❤️',
      ]);
      await tachyon.say_and_wait(['用 ', callname, ' 的大肉棒狠狠的……抽插❤️']);
      await tachyon.say_and_wait([
        '让我变成……只用屁穴就能不断高潮的淫乱',
        tachyon.uma_sex_title,
        '❤️',
      ]);
      era.println();
      await you.print_and_wait([
        '好整以暇地看着 ',
        y_call_t,
        ' 发狂般不断渴求的模样，那颤抖的菊穴皱折，时不时还吹口气来看看 ',
        y_call_t,
        ' 全身颤抖的反应。',
      ]);
      await you.print_and_wait([
        '一向强势的 ',
        y_call_t,
        ' 像这样恳求自己，那可是难得一见的事。',
      ]);
      await you.print_and_wait(
        '尤其恳求的还是这种只为了取乐，没有任何生育意义的行为。',
      );
      await you.print_and_wait([
        '不过，要小心别让 ',
        y_call_t,
        ' 真的发怒了……但果然还是再稍微享受一下吧……',
      ]);
    } else {
      await tachyon.say_and_wait(['……真的要这样吗，', callname, '……']);
      await tachyon.say_and_wait('这个地方……插不进去的吧……绝对……');
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' 听话的用手按住臀瓣，将屁穴完全张开。',
      ]);
      await you.print_and_wait('但脸上依旧可以看见恐惧的神情。');
      await you.print_and_wait(
        '也是，要是有人忽然说要将自己的排泄口当成性器官来用，那不管是谁肯定都会感到恐惧的吧。',
      );
      await you.print_and_wait('但是……');
      era.println();
      await you.print_and_wait('会很舒服的，放心吧。');
      await you.print_and_wait(['拍了拍 ', y_call_t, ' 的屁股做保证。']);
      await you.print_and_wait(
        '菊穴的皱折颤抖了一下，仿佛在回应自己的话语一般。',
      );
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async ask_blow_job(tachyon) {
    await tachyon.say_and_wait('真是……拿你没办法啊……');
    await tachyon.say_and_wait('来吧……就像，要在我的嘴里留下你的印记一样……');
    await tachyon.say_and_wait(
      '尽情的，让我的食道，胃囊，全部都被你的因子所沾满❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ask_deep_blow_job(tachyon, you, callname) {
    await tachyon.print_and_wait([
      '看着自己认可的 ',
      you.phy_sex_title,
      '，散发出了令自己发狂的气味。',
    ]);
    await tachyon.print_and_wait('提出了令自己发狂的请求。');
    era.println();
    await tachyon.say_and_wait('嗯……啊❤️');
    era.println();
    await tachyon.print_and_wait(
      '仿佛要将「只有我才能让你这么舒服」这一观念烙印在对方的脑海中一般……',
    );
    await tachyon.print_and_wait('不时含住唾液，发出淫糜的水声，卖力的吸吮。');
    await tachyon.print_and_wait(
      '不时深深吞入喉咙，享受着对方充满雄性气息的毛发搔弄自己鼻腔的感觉，享受生死大权被对方掌握的感觉。',
    );
    await tachyon.print_and_wait([
      '对 ',
      callname,
      ' 的渴求，以及想要做出如此下贱行为的冲动————除此之外，自己那聪明的小脑袋再也塞不进其他任何东西了……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async force_blow_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait(['怎么？', callname, '，不进来吗？']);
    await tachyon.say_and_wait('难道说，是害怕时间太短会被嘲笑？');
    await tachyon.say_and_wait(
      '没事，这种属于个体差异的问题我也能理……呜……嗯噗……噗啾……',
    );
    era.println();
    await you.print_and_wait(['受不了 ', y_call_t, ' 的挑衅。']);
    await you.print_and_wait([
      '瞄准了 ',
      y_call_t,
      ' 聒噪的口穴，强行将肉棒塞入。',
    ]);
    await you.print_and_wait('粗暴的在湿润柔滑的口腔里不停前后戳插。');
    await you.print_and_wait('这张嘴……用来说话果然还是太可惜了啊……');
    await you.print_and_wait('还是肉穴更符合其价值。');
    if (
      era.get('talent:32:喜欢责骂') > 0 ||
      era.get('talent:32:喜欢痛苦') > 0
    ) {
      era.println();
      await you.print_and_wait('嗯？');
      await you.print_and_wait('不知不觉，除了自己任意抽插口穴的感受外。');
      await you.print_and_wait([
        y_call_t,
        ' 的嘴也开始配合动作，主动吸吮着给予快感。',
      ]);
      era.println();
      await tachyon.say_and_wait('再来……再多侵犯……我下贱的嘴穴……', true);
      era.println();
      await you.print_and_wait([y_call_t, ' 露出了恍惚的神情……']);
    }
  },
  /**
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async force_deep_blow_job(you, y_call_t) {
    await you.print_and_wait([
      '明明是强硬的行为，',
      y_call_t,
      ' 却也主动配合的吸吮着。',
    ]);
    await you.print_and_wait('用舌头缠住了肉棒将其引导至喉咙深处。');
    await you.print_and_wait('脸上恍惚的表情一再刺激着施虐的欲望……');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await you.print_and_wait('肉棒噗嚕一下弹起。');
      await you.print_and_wait([
        '从马眼里渗出的精臭味刺激着 ',
        y_call_t,
        ' 的鼻腔。',
      ]);
      era.println();
      await tachyon.say_and_wait('呵呵，弹了一下呢');
      await tachyon.say_and_wait([callname, '……就这么期待我的嘴穴吗？']);
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' 仰视着 ',
        you.get_colored_name(),
        ' 的脸庞，表情妩媚地说道。',
      ]);
      await you.print_and_wait(
        '那百叶窗一般的狂气双眼，如今散发着魅惑的色气。',
      );
    } else if (
      Array.isArray(era.get('tcvar:0:接近高潮')) &&
      era.get('tcvar:0:接近高潮').includes(part_enum.penis)
    ) {
      await you.print_and_wait('凭借着舌头上的触感，感受到加快摆腰的速度。');
      await you.print_and_wait([
        y_call_t,
        ' 加快了速度，脸庞反覆吞吐着肉杆，被肉棒顶起的脸颊给予龟头尖端更深一层的快感。',
      ]);
      await you.print_and_wait('抽插与吸吮的双重快感使自己陷入极乐……');
      era.println();
      await tachyon.say_and_wait('嗯……嗯啾……嗯啵……');
      await tachyon.say_and_wait([callname, ' 的……通通……']);
    } else {
      await you.print_and_wait(
        '娇小的口穴中，湿润柔滑的舌头不停在龟头上流转，给予集中的刺激快感。',
      );
      await you.print_and_wait([
        '不停摆动着腰，让肉棒能够更深入感受到 ',
        y_call_t,
        ' 给予的无上快感。',
      ]);
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async ask_hand_job(tachyon) {
    await tachyon.say_and_wait('真是……');
    await tachyon.say_and_wait('反正肯定是想射在我的脸上吧❤️');
    await tachyon.say_and_wait('可以哦……让我的脸，被豚鼠君臭臭的精液覆盖……');
    await tachyon.say_and_wait('好浓的味道❤️');
    await tachyon.say_and_wait('尽情的，射在我的身上吧❤️');
    if (era.get('tcvar:32:喜欢责骂') || era.get('tcvar:32:喜欢痛苦')) {
      await tachyon.say_and_wait('把我当成抹布一样，随意的擦拭也没关系❤️');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async ask_tit_job(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait('真搞不懂，这种脂肪块到底有什么好……');
    await tachyon.say_and_wait('可以哦，来吧❤️');
    era.println();
    await you.print_and_wait([
      '被乳肉包裹住的肉棒，在 ',
      y_call_t,
      ' 揉弄乳肉造成的摩擦下，逐渐变得更为硬挺。',
    ]);
    await you.print_and_wait('但只是这样……还不够……');
    era.println();
    await you.print_and_wait([
      '用双手抓住了 ',
      y_call_t,
      ' 的乳房，用双手推挤着乳肉来夹紧肉茎。',
    ]);
    await you.print_and_wait([
      '彻底的将眼前的负责',
      tachyon.uma_sex_title,
      '当成了性处理用具来使用……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait('啊，等……');
      era.println();
      await you.say_and_wait([
        '没理会 ',
        y_call_t,
        ' 的请求，对着 ',
        y_call_t,
        ' 挺拔的乳肉开始了猛烈的抽插。',
      ]);
      await you.print_and_wait([
        '过程中 ',
        y_call_t,
        ' 仿佛完全化为了自己的性欲宣泄口一般，顺从地服从着。',
      ]);
      await you.print_and_wait([
        '将自己的负责',
        tachyon.uma_sex_title,
        '当成工具使用的感觉使自己兴奋的不住颤抖……',
      ]);
    } else {
      await tachyon.say_and_wait('唔嗯……❤️');
      era.println();
      await you.print_and_wait(
        '先是把整个乳房托起摩擦挤压，然后噗呦一声让其恢复自然位置。',
      );
      await you.print_and_wait('接着是不管不顾，堪称暴力的抽插……');
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_you_erect 玩家是否勃起
   */
  async tit_job(tachyon, you, callname, y_call_t, is_you_erect) {
    if (is_you_erect) {
      await you.print_and_wait([
        '用 ',
        y_call_t,
        ' 的乳肉将硬到生疼的肉棒包裹。',
      ]);
    }
    await you.print_and_wait([y_call_t, ' 用手捧住自己的双乳。']);
    await you.print_and_wait('乳穴大幅度的包裹搅弄着肉棒的茎身。');
    await you.print_and_wait('溢出的先走汁润滑了乳穴的动作。');
    era.println();
    await tachyon.say_and_wait([callname, '……舒服吗？❤️']);
    era.println();
    await you.print_and_wait('有什么回答的必要吗？');
    await you.print_and_wait('不如说，还有比这更舒服的事吗？');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async tit_and_blow_job(tachyon, callname) {
    await tachyon.print_and_wait([
      callname,
      ' 稍稍向上顶出，原本只是露出了个头的肉棒尖端瞬间抵在了自己的脖子。',
    ]);
    await tachyon.print_and_wait(
      '从铃口滴落的先走汁，在肉棒不断的戳弄下沾满了自己的下巴到颈部，顺着滑落到胸前的乳穴，增添了几分润滑。',
    );
    await tachyon.print_and_wait(
      '肉棒与乳房的淫荡摩擦声，混合着乳肉被击打的声响。',
    );
    await tachyon.print_and_wait('渐渐室内的精臭也变得浓郁起来。');
    era.println();
    await tachyon.say_and_wait('啾……啾啾……');
    era.println();
    await tachyon.print_and_wait('口干……舌燥……');
    await tachyon.print_and_wait('这么多的汁液，要是流下去的话……也太浪费了……');
    await tachyon.print_and_wait('所以，亲吻含住也是理所当然的吧……');
    await tachyon.print_and_wait(
      '随着龟头被唾液浸润，乳房动作也变得更加顺滑……',
    );
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async ask_non_penetrative(tachyon) {
    await tachyon.say_and_wait('呵呵，像猴子一样……');
    await tachyon.say_and_wait(
      '不，像这样只会不停扭腰的……不如说像小狗一样吧❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_lubrication 爱丽速子阴道是否润滑
   */
  async self_finger_fuck(tachyon, you, callname, y_call_t, is_lubrication) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait(['看吧……', callname, '……']);
      await tachyon.say_and_wait('我的小穴看起来怎么样❤️');
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' 灵巧的手指来回玩弄着自己的小穴，为自己带来快感。',
      ]);
      await you.print_and_wait(
        '双腿向两旁岔开，手指仿佛在勾引一般朝着穴内越进越深。',
      );
      await you.print_and_wait([
        tachyon.sex,
        '的指尖在光线下泛起光泽，从小穴内牵出一条淫媚的丝线。',
      ]);
      if (is_lubrication) {
        era.println();
        await tachyon.say_and_wait('已经准备好了……不插进来吗❤️');
        era.println();
        await you.print_and_wait(
          '被爱液彻底浸透的下体，已经随时处于能够做爱的状态了……',
        );
      }
    } else {
      await tachyon.say_and_wait([callname, '……❤️']);
      await tachyon.say_and_wait('快点……插进来❤️');
      era.println();
      await you.print_and_wait([y_call_t, ' 主动掰开了臀瓣。']);
      await you.print_and_wait(
        '已经湿透的小穴和微微张吐着的屁穴被身前的雌性以近似臣服的姿态送上。',
      );
      if (is_lubrication) {
        era.println();
        await you.print_and_wait('咕啵……');
        await you.print_and_wait(
          '小穴发出濡湿的声音，被两根手指不断的撑开闭合。',
        );
        await you.print_and_wait('色情的汁液从被张开的穴肉中缓缓流出……');
      }
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait(['哇啊，', callname, ' 等……❤️']);
      era.println();
      await you.print_and_wait(['忍耐不住，将 ', y_call_t, ' 扑倒在地。']);
      await you.print_and_wait([
        tachyon.sex,
        '的屁股和大腿随着插入开始不住痉挛……',
      ]);
    } else {
      await you.print_and_wait(
        '插入前就已经十分敏感的小穴被袭击后不断的重复小幅的高潮。',
      );
      await you.print_and_wait([
        '每次抽插都让 ',
        y_call_t,
        ' 不受控制的颤抖，却还是紧紧咬着肉棒不放……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      await tachyon.say_and_wait('这个姿势的话，是最能完整接受雄性的体位。');
      await tachyon.say_and_wait('从人体工学的角度来看……唔！');
      era.println();
      await you.print_and_wait([
        '在 ',
        y_call_t,
        ' 喋喋不休的时候，看准时机插入',
        tachyon.sex,
        '坦露的蜜穴。',
      ]);
      era.println();
      await you.say_and_wait('怎么不继续了？');
      await you.print_and_wait(['故意问 ', y_call_t, '。']);
      await you.print_and_wait([
        y_call_t,
        ' 羞红着脸，沉浸在被完全填满的喜悦当中。',
      ]);
    } else {
      await tachyon.say_and_wait('好深❤️一下就填满了……❤️');
      era.println();
      await tachyon.print_and_wait(
        '肉棒猛力深入穴口，贯穿了自己早已城门失守的蜜穴。',
      );
      await tachyon.print_and_wait('紧窄的雌穴欣喜的收缩着，吸附着肉棒……');
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async hug_standing(tachyon) {
    await tachyon.say_and_wait('好喜欢❤️');
    await tachyon.say_and_wait('像实验动物一样，纯粹性交的快乐❤️');
    await tachyon.say_and_wait(
      '快点，快点，像野兽一样，把我的性处理骚穴灌满❤️',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async stimulate_g_spot(tachyon, callname) {
    await tachyon.say_and_wait('啊❤️');
    await tachyon.say_and_wait(
      '不行❤️脑袋要坏掉了❤️好舒服❤️高潮了❤️要高潮了❤️要连脑浆一起排出来了❤️',
    );
    era.println();
    await tachyon.print_and_wait('每次深入戳到G点，脑海都会化为一片空白。');
    await tachyon.print_and_wait([
      '脑袋里所能思考的，所能感受到的只剩与 ',
      callname,
      ' 的交尾，被 ',
      callname,
      ' 用力侵犯的快感……',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async ask_stimulate_glans_by_virgin(tachyon, you) {
    await tachyon.say_and_wait('好过分……');
    era.println();
    await you.print_and_wait(
      '虽然喊着过分，但诚实的蜜穴还是忍不住啾的缩的更紧，好让正在进行不合作运动的肉棒先生能够好好享受自己的全方位肉穴服侍……',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hit_anal(tachyon, you, callname, y_call_t, is_first) {
    if (is_first) {
      if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
        await you.print_and_wait([
          '用力拍了 ',
          y_call_t,
          ' 的屁股，响起了动听的回声。',
        ]);
        await you.print_and_wait('白嫩的两瓣屁股上留下了淡淡的巴掌印。');
        era.println();
        await tachyon.say_and_wait(['好痛！？……', callname, '……？']);
        era.println();
        await you.print_and_wait([
          y_call_t,
          ' 可怜兮兮的呜咽了一声，但仍将臀部翘高，似乎一点反抗的念头都没有。',
        ]);
      } else if (era.get('talent:32:喜欢痛苦') > 0) {
        await you.print_and_wait('真是骚货啊……');
        await you.print_and_wait([
          '用力拍了 ',
          y_call_t,
          ' 的屁股，响起了动听的回声。',
        ]);
        await you.print_and_wait('一瓣屁股上留下了淡淡的巴掌印。');
        era.println();
        await tachyon.say_and_wait('用力……请更用力一点……❤️');
        era.println();
        await you.print_and_wait([y_call_t, ' 发出了淫荡的娇声。']);
        await you.print_and_wait(
          '红润的屁股轻轻地扭着，左右摇晃，期待更进一步的蹂躏。',
        );
        await you.print_and_wait('忍不住用手揉捏了一阵，随后……');
        era.println();
        await you.print_and_wait('啪！');
        era.println();
        await tachyon.say_and_wait('啊～～❤️');
        era.println();
        await you.print_and_wait('多汁的臀浪掀起，娇嗔随之而来。');
        await you.print_and_wait('现在两瓣屁股都如水蜜桃一般鲜嫩欲滴了。');
      } else {
        await you.print_and_wait([
          '用力拍了 ',
          y_call_t,
          ' 的屁股，响起了动听的回声。',
        ]);
        await you.print_and_wait('白嫩的两瓣屁股上留下了淡淡的巴掌印。');
        era.println();
        await tachyon.say_and_wait(['好痛！？……', callname, '……？']);
        era.println();
        await you.print_and_wait([y_call_t, ' 不由得吃痛的喊了出声。']);
        await you.print_and_wait(
          '虽然有些可怜，但那挺翘的屁股……要是不拍一下才会觉得暴殄天物吧？',
        );
      }
    } else {
      await you.print_and_wait(
        '不停拍打着速子浑翘的雪白肉臀，响起了动听的回声。',
      );
      await you.print_and_wait('现在上面满是鲜红的巴掌印。');
      await you.print_and_wait([
        '每次拍打，',
        y_call_t,
        ' 双腿间的夹缝都会忍不住喷出爱液，不知不觉也染湿了自己的双手……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async hit_face(tachyon, you, callname, y_call_t) {
    await you.print_and_wait(['甩了 ', y_call_t, ' 一个耳光。']);
    if (era.get('mark:32:同心') > era.get('mark:32:反抗')) {
      await you.print_and_wait([
        y_call_t,
        ' 的脸颊绯红，带着服从的眼神以低姿态望着自己。',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……不，主人还想打的话……']);
      era.println();
      await you.print_and_wait([
        y_call_t,
        ' 双手捧着',
        you.get_colored_name(),
        '的手，贴上了',
        tachyon.sex,
        '另一边的脸颊……',
      ]);
    } else if (era.get('talent:32:喜欢痛苦') > 0) {
      await you.print_and_wait([
        y_call_t,
        ' 的脸颊绯红，用双手捧住 ',
        you.get_colored_name(),
        ' 的手，轻轻舔着手指献上服从。',
      ]);
      era.println();
      await tachyon.say_and_wait('主人……请给母猪更多的赏赐吧……❤️');
      era.println();
      await you.print_and_wait(['又甩了', tachyon.sex, '一个耳光。']);
      await you.print_and_wait([
        '粉色的巴掌印瞬间在',
        tachyon.sex,
        '的脸庞上绽放。',
      ]);
    } else {
      await you.print_and_wait('被不可置信地盯着。');
      era.println();
      await tachyon.say_and_wait([callname, '……为什么……']);
      era.println();
      await you.print_and_wait(['摸着自己有些发红的脸颊的 ', y_call_t, '。']);
      await you.print_and_wait([
        '虽然很抱歉……但，看见',
        tachyon.sex,
        '露出如此令人疼惜的表情还是让人忍不住兴奋啊……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async use_love_eggs_in_anal(tachyon, you, y_call_t) {
    await tachyon.say_and_wait('喔喔喔❤️屁穴❤️不可以❤️');
    era.println();
    await you.print_and_wait([
      '塞入跳蛋的瞬间，带给肠内的震动就让 ',
      y_call_t,
      ' 不住仰起头来。',
    ]);
    era.println();
    await tachyon.say_and_wait('不可以❤️身体❤️要变得奇怪了❤️');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_t 玩家对爱丽速子的称呼
   */
  async ask_fuck(tachyon, you, callname, y_call_t) {
    await tachyon.say_and_wait([callname, '……快点，快点❤️']);
    await tachyon.say_and_wait('用力……填满我的雌穴❤️');
    era.println();
    await you.print_and_wait([y_call_t, ' 翘起屁股，腰身不断晃动。']);
    await you.print_and_wait('肥硕的屁股淫乱的舞蹈着，煽动着情欲……');
  },
  betrayed1: (() => {
    /**
     * 机制上属于曼城茶座的调教结束事件
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname, callname_25) => {
      await tachyon.say_and_wait(['哈啊……哈啊……']);
      era.println();

      await tachyon.print_and_wait(['手脚好热。']);
      await tachyon.print_and_wait(['脑袋好热。']);
      era.println();

      await tachyon.say_and_wait(['嘶……哈啊……哈啊……']);
      era.println();

      await tachyon.print_and_wait(['胸部发热。']);
      await tachyon.print_and_wait(['私处灼热。']);
      era.println();

      await tachyon.say_and_wait([callname, '……', callname, '……']);
      era.println();

      await tachyon.print_and_wait(['喉咙好热。']);
      await tachyon.print_and_wait(['舌尖好热。']);
      await tachyon.print_and_wait(['所以，不由自主的呼喊了。']);
      await tachyon.print_and_wait(['让自己，让全身发热的根源。']);
      era.println();

      await tachyon.say_and_wait([callname, '……给我……求求你……']);
      era.println();

      await tachyon.print_and_wait(['朦胧中，', you.sex, '的身影出现在眼前。']);
      await tachyon.print_and_wait([
        you.sex,
        '的手，',
        you.sex,
        '的眼睛，',
        you.sex,
        '的嘴，',
        you.sex,
        '的肌肤。',
      ]);
      await tachyon.print_and_wait([you.sex, '的一切都令自己着迷。']);
      await tachyon.print_and_wait([
        '所以，渴望',
        you.sex,
        '，想要',
        you.sex,
        '。',
      ]);
      await tachyon.print_and_wait([
        '想要被',
        you.sex,
        '玩弄，想要被',
        you.sex,
        '玩坏。',
      ]);
      await tachyon.print_and_wait(['反正……已经是无法再奔跑的身体了。']);
      await tachyon.print_and_wait([
        '将一切抛弃，沉溺沉醉于情色，又有什么关系呢。',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '……摸我……抱我……亲我……爱我……']);
      era.println();

      await tachyon.print_and_wait(['啊啊，带有侵略性的抚摸。']);
      await tachyon.print_and_wait(['虽然是由自己那纤细软弱的手指代劳。']);
      await tachyon.print_and_wait([
        '如果现在抚摸着自己的，是',
        you.sex,
        '的手指。',
      ]);
      await tachyon.print_and_wait(['如果，能用', you.sex, '的舌头舔舐自己。']);
      await tachyon.print_and_wait(['如果，能用', you.sex, '的接吻安慰自己。']);
      await tachyon.print_and_wait([
        '如果，能够从里到外的被',
        you.sex,
        '填满，被',
        you.sex,
        '疼爱。',
      ]);
      era.println();

      await tachyon.print_and_wait(['幻觉中的', you.sex, '，将身体压近。']);
      era.println();

      await tachyon.print_and_wait(['没错。']);
      await tachyon.print_and_wait(['给我，快给我。']);
      await tachyon.print_and_wait(['已经没有奔跑的价值的我。']);
      await tachyon.print_and_wait(['剩下的也就只剩作为女人的价值了不是吗。']);
      await tachyon.print_and_wait(['把我填满。']);
      await tachyon.print_and_wait(['把我灌满。']);
      await tachyon.print_and_wait([
        '我内心的空虚，用你的爱来，把它彻底充满，满至溢出。',
      ]);
      await tachyon.print_and_wait(['让我，变成只属于你的女人。']);
      await tachyon.print_and_wait(['然后也请变成，只属于我的……']);
      era.println();

      await coffee.say_and_wait(['嗯……啊……', callname_25, '……请……']);
      era.println();

      await tachyon.print_and_wait(['心中的妄想，被隔壁实验室的娇吟声打断。']);

      era.drawLine();

      await tachyon.print_and_wait(['眼前的幻想，型态发生改变。']);
      await tachyon.print_and_wait([
        '被',
        you.sex,
        '压在身下的人，瞬间转换了模样。',
      ]);
      await tachyon.print_and_wait(['黑发金瞳，不变的却是眼中充满的爱意。']);
      era.println();

      await coffee.say_and_wait([callname_25, '……请将我……填满。']);
      era.println();

      await tachyon.print_and_wait([
        '仿佛错觉一般，幻想中的',
        you.sex,
        '甚至比先前面对自己时还要兴奋。',
      ]);
      await tachyon.print_and_wait([
        '想要将这一切否定，但这一切就是发生在隔壁的现实。',
      ]);
      await tachyon.print_and_wait([
        '……是可悲的',
        tachyon.uma_sex_title,
        '，用来脑补，将自己代入其中的现实。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        '不要……',
        callname,
        '……求求你……看我……抱我……爱我……',
      ]);
      era.println();

      await tachyon.print_and_wait([
        '甚至不自觉吐出的恳求，都下意识的压低了声音。',
      ]);
      await tachyon.print_and_wait(['害怕隔壁恩爱的两人会听见。']);
      await tachyon.print_and_wait([
        '会发现 ',
        tachyon.get_colored_name(),
        ' 是一名多么可悲的',
        tachyon.uma_sex_title,
        '。',
      ]);
      era.println();

      await tachyon.print_and_wait([you.couple_title, '才是般配的。']);
      await tachyon.print_and_wait([you.couple_title, '才是最适合的。']);
      await tachyon.print_and_wait([
        '温柔的训练员和与其孕育出爱情，为其实现梦想的',
        tachyon.uma_sex_title,
        '。',
      ]);
      await tachyon.print_and_wait(['比起来，自己的存在反而更像第三者。']);
      era.println();

      await tachyon.print_and_wait(['幻觉中的那两人，看起来如此舒服。']);
      await tachyon.print_and_wait([
        '也想要……变得，和',
        you.couple_title,
        '一样舒服。',
      ]);
      era.println();

      await tachyon.print_and_wait(['下意识的，手不由自主伸向了下体。']);
      await tachyon.print_and_wait(['不可以……']);
      await tachyon.print_and_wait(['不行……']);
      await tachyon.print_and_wait([
        '心中有种预感，要是现在摸了那边的话，就再也回不去了。',
      ]);
      await tachyon.print_and_wait([
        '要是以心爱之人与其',
        you.sex,
        '女人的恩爱画面作为妄想素材的话。',
      ]);
      await tachyon.print_and_wait(['就再也回不去了……']);
      await tachyon.print_and_wait(['所以……']);
      await tachyon.print_and_wait(['所以住手……']);
      era.println();

      await coffee.say_and_wait([callname_25, '……用力……请更用力的……爱我。']);
      era.println();

      await tachyon.print_and_wait(['啊啊……']);
      await tachyon.print_and_wait(['不行了。']);
      await tachyon.print_and_wait([
        '在隔壁间的娇吟声透过墙壁传导到自己耳中的瞬间。',
      ]);
      await tachyon.print_and_wait(['下体也喷发出了混浊的液体。']);
      await tachyon.print_and_wait(['明明……没有去碰。']);
      await tachyon.print_and_wait(['明明要是忍住的话……']);
      era.println();

      await tachyon.print_and_wait(['已经回不去了。']);
      await tachyon.print_and_wait(['仿佛要将刚刚忍耐的份一次补齐一般。']);
      await tachyon.print_and_wait(['狠心的，以被称为蹂躏也不为过的力道。']);
      await tachyon.print_and_wait(['扣，挖，揉，插。']);
      await tachyon.print_and_wait(['用各种方式，给予刺激，疼痛，快感。']);
      await tachyon.print_and_wait(['让自己陷于情欲。']);
      await tachyon.print_and_wait(['让欲火包围己身。']);
      era.println();

      await tachyon.say_and_wait(['好舒服……好舒服……']);
      era.println();

      await tachyon.print_and_wait([
        '脑中的',
        you.couple_title,
        '依然在恩爱着。',
      ]);
      await tachyon.print_and_wait([
        '脑中的自己，看着',
        you.couple_title,
        '恩爱的模样，吃吃地咬着手指。',
      ]);
      await tachyon.print_and_wait(['下体又一次喷出了潮水。']);
    };
    f.title = 'Aromatic Hydrocarbon Addiction（芳香烃成瘾）';
    return f;
  })(),
  betrayed2: (() => {
    /**
     * 机制上属于曼城茶座的调教结束事件
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {string} y_call_t 玩家对爱丽速子的称呼
     * @param {PrintedSpan} item 「嫁衣」道具
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      t_call_c,
      callname_25,
      c_call_t,
      y_call_t,
      item,
    ) => {
      const ret = [];
      await tachyon.print_and_wait(['好舒服，好享受。']);
      await tachyon.print_and_wait([
        '今天的我，依旧在以 ',
        callname,
        ' 和 ',
        t_call_c,
        ' 欢爱的声音为配菜。',
      ]);
      await tachyon.print_and_wait([
        '就这样，沉迷在情爱之中，或许也不是什么坏事……',
      ]);
      era.println();

      await tachyon.print_and_wait(['忽然，欢爱的声音停下了。']);
      await tachyon.print_and_wait(['仿佛在高潮前被寸止一般，我陷入焦急。']);
      await tachyon.print_and_wait(['为什么不继续。']);
      await tachyon.print_and_wait(['为什么停下来了。']);
      await tachyon.print_and_wait([
        '随着欢爱的声音停下，房间内瞬间安静了下来。',
      ]);
      era.println();

      await tachyon.print_and_wait(['哒。']);
      await tachyon.print_and_wait(['哒。']);
      await tachyon.print_and_wait(['哒。']);
      await tachyon.print_and_wait(['因此……门外传来的脚步声显得格外清晰。']);
      await tachyon.print_and_wait(['脚步声在门前停了下来。']);
      await tachyon.print_and_wait(['门外的人要做什么。']);
      await tachyon.print_and_wait(['要开门吗？']);
      await tachyon.print_and_wait([
        '要是开门的话，自己这副模样，这幅卑微的模样。',
      ]);
      await tachyon.print_and_wait(['要被……要被看见了。']);
      await tachyon.print_and_wait([
        '要躲起来，不能这样，必须要找个地方躲着。',
      ]);
      await tachyon.print_and_wait(['所以……所以为什么手又擅自的动起来了……']);
      era.println();

      await tachyon.print_and_wait(['咔啦。']);
      await tachyon.print_and_wait(['啊啊……打开了。']);
      await tachyon.print_and_wait(['看见门外出现的，黑发金瞳的身影时。']);
      await tachyon.print_and_wait([
        '绝顶达到了极致，迎来了至今为止最兴奋的一次高潮。',
      ]);
      era.println();

      await coffee.say_and_wait(['……真是可悲啊，', c_call_t, '。']);
      await tachyon.say_and_wait([t_call_c, '，为什么……']);
      await coffee.say_and_wait([
        '喊的那么大声……也就只有不是',
        tachyon.uma_sex_title,
        '的 ',
        callname_25,
        ' 会没发现吧。',
      ]);
      era.println();

      await tachyon.print_and_wait(['失算了。']);
      await tachyon.print_and_wait(['被发现了。']);
      await tachyon.print_and_wait(['怎么办，该怎么做才好。']);
      await tachyon.print_and_wait(['可悲的是，现在的自己心中想的最重要的。']);
      await tachyon.print_and_wait([
        '却是……该怎么恳求 ',
        t_call_c,
        '，允许自己听着',
        you.couple_title,
        '做爱的声音来安慰自己。',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, ' ', you.sex, '……']);
      await coffee.say_and_wait([
        '不用担心……我和 ',
        callname_25,
        ' 说了，我是出来拿东西的。',
      ]);
      await coffee.say_and_wait([
        c_call_t,
        '……腰上的药管……可以麻烦给我一支吗？',
      ]);
      await coffee.say_and_wait(['你应该知道……我想要的是哪一种吧。']);
      era.println();

      await tachyon.print_and_wait(['愣愣的望着对方。']);
      await tachyon.print_and_wait(['自己腰上的……', t_call_c, ' 会想要的……']);
      await tachyon.print_and_wait(['自己调配出来的，排卵促进剂吗？']);
      await tachyon.print_and_wait([
        '不由自主的，从腰间抽出了……原本应该是只为了自己和 ',
        callname,
        ' 调配的药剂。',
      ]);
      era.println();

      await coffee.say_and_wait([c_call_t, '，可以，给我吗？']);
      era.println();

      await tachyon.print_and_wait(['她知道她在说什么吗？']);
      await tachyon.print_and_wait([
        '想要自己，将能够百分之百促进怀孕的药剂。',
      ]);
      await tachyon.print_and_wait(['亲手献上，亲手交给她。']);
      await tachyon.print_and_wait([
        '让她去和自己喜爱的人恩爱，让她怀上本应属于自己的孩子。',
      ]);
      await tachyon.print_and_wait([
        '可以说是相当于把自己踩在脚底下，极尽羞辱的事情了。',
      ]);
      await tachyon.print_and_wait(['但是为什么……手却伸了出去。']);
      await tachyon.print_and_wait(['为什么身体却如此灼热。']);
      era.println();

      await coffee.say_and_wait([c_call_t, '……你离那么远，我不是没法拿吗？']);
      await coffee.say_and_wait(['过来，递给我吧。']);
      era.println();

      await tachyon.print_and_wait(['不要。']);
      await tachyon.print_and_wait(['不要听她的。']);
      await tachyon.print_and_wait(['把药摔了。']);
      await tachyon.print_and_wait(['或者自己喝了也好。']);
      await tachyon.print_and_wait([
        '反正 ',
        callname,
        ' 就在隔壁……喝下去之后，把该属于自己的讨回来。',
      ]);
      await tachyon.print_and_wait(['没错，就是这样。']);
      await tachyon.print_and_wait([
        '现在朝着门口走去，不是为了把药交给她，是为了……为了自己……',
      ]);
      await tachyon.print_and_wait(['欸……手，为什么……']);
      era.println();

      await coffee.say_and_wait(['……没想到你真的会做到这种地步啊。']);
      await coffee.say_and_wait(['真的，让人恶心。']);
      await coffee.say_and_wait(['不过我也不是那种狠心的人……']);
      await coffee.say_and_wait(['只能听，应该挺难受的吧？']);
      era.println();

      await tachyon.print_and_wait([
        '仿佛在交出药的瞬间，将自己的灵魂也一起交了出去一般。',
      ]);
      await tachyon.print_and_wait([
        '只能失魂落魄的跟着眼前的身影，走进原本应该有一半的归属权在自己手上的实验室。',
      ]);
      await tachyon.print_and_wait([
        '但……即便做出了这种事来，在看见 ',
        callname,
        ' 的时候，还是不由自主的恢复了神智。',
      ]);
      era.println();

      await tachyon.say_and_wait([t_call_c, '……']);
      await coffee.say_and_wait([
        '放心吧……朋友已经帮忙盖住了 ',
        callname_25,
        ' 的眼睛和耳朵……现在的',
        you.sex,
        '看不见，也听不见我们。',
      ]);
      await tachyon.say_and_wait(['你是说……']);
      await coffee.say_and_wait([
        '选择权就交给 ',
        c_call_t,
        ' 自己了……要加入，还是自己一个人看着？',
      ]);
      await tachyon.say_and_wait(['……']);
      era.println();

      await tachyon.print_and_wait(['最后一次机会。']);
      await tachyon.print_and_wait(['最后……如果现在答应的话，还能两人一起。']);
      await tachyon.print_and_wait([
        '如果不回答的话，那就再也不会有第二次了。',
      ]);
      await tachyon.print_and_wait(['自己有着这种预感。']);
      era.println();

      await tachyon.print_and_wait(['所以……']);
      era.printButton('开口答应', 1, { color: tachyon.color });
      era.printButton('沉默不语', 2, { color: tachyon.color });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await tachyon.print_and_wait(['比自己更般配的应该是 ', t_call_c, '。']);
        await tachyon.print_and_wait([
          '比自己更适合',
          you.sex,
          '的也应该是 ',
          t_call_c,
          '。',
        ]);
        await tachyon.print_and_wait([
          '如果是为了',
          you.sex,
          '好，那么自己应该选择放弃才对……吗？',
        ]);
        era.println();

        await tachyon.print_and_wait(['不理解，不能明白。']);
        await tachyon.print_and_wait(['喜欢上一个人原来是这么难懂的事吗。']);
        await tachyon.print_and_wait([
          '如果出于合理，这里应该要心甘情愿的祝福',
          you.couple_title,
          '。',
        ]);
        await tachyon.print_and_wait(['而不是，而不是……']);
        era.println();

        await tachyon.print_and_wait(['不知不觉。']);
        await tachyon.print_and_wait([
          '自己又将目光投向了床上的',
          you.sex,
          '。',
        ]);
        await tachyon.print_and_wait([
          '……总是包容着任性的自己的',
          you.sex,
          '。',
        ]);
        await tachyon.print_and_wait([
          '只有这次……请再一次原谅，自己的任性吧。',
        ]);
        era.println();

        await tachyon.print_and_wait(['朝着 ', t_call_c, ' 伸出手的瞬间。']);
        await tachyon.print_and_wait([
          '看见床上的',
          you.sex,
          '，忽然露出惊讶的表情的瞬间。',
        ]);
        await tachyon.print_and_wait([
          '再也按耐不住自己内心的情绪，朝着床上的爱人扑去。',
        ]);

        era.printButton(`「哇啊，${y_call_t}，什么时候！？」`, 1);
        await era.input();

        await tachyon.print_and_wait([
          you.sex,
          '的表情有惊讶，有错愕，甚至还有些心虚。',
        ]);
        await tachyon.print_and_wait(['但最重要的是……', you.sex, '的身体。']);
        await tachyon.print_and_wait(['好温暖，好令人安心。']);
        await tachyon.print_and_wait([
          '直到现在，才仿佛从一场做了好久，好久的恶梦中惊醒一般。',
        ]);
        await tachyon.print_and_wait(['刚才的自己到底在想什么。']);
        await tachyon.print_and_wait([
          '为什么会想主动放弃这种温暖，甚至还想看着别人去享受这种温暖。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '后知后觉的恐怖和害怕此时才追上了 ',
          tachyon.get_colored_name(),
          ' 的心灵。',
        ]);
        await tachyon.print_and_wait([
          '要是刚刚自己真的什么也不说，要是自己真的放弃了 ',
          callname,
          ' 的话……',
        ]);
        era.println();

        await tachyon.say_and_wait([callname, '……对不起……对不起！']);
        await tachyon.say_and_wait(['我不要……不要再把你让给任何人了！']);
        await tachyon.say_and_wait([
          '讨厌……讨厌！是我的 ',
          callname,
          '……一辈子都是我的……！',
        ]);
        era.println();

        await tachyon.print_and_wait(['像个孩子一样嚎啕大哭。']);
        await tachyon.print_and_wait(['好羞耻，但是……']);
        await tachyon.print_and_wait([
          '被虽然困惑，却还是温柔的安慰着自己的',
          you.sex,
          '抱住，真的……好舒服。',
        ]);

        era.drawLine();

        await era.printAndWait([
          '困惑地看着依旧抱着自己不断哭泣的 ',
          tachyon.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 感到有些困惑。']);
        await era.printAndWait([
          '从 ',
          tachyon.get_colored_name(),
          ' 不知道怎么忽然凭空出现在实验室中，到现在的放声大哭，一切的一切都令 ',
          you.get_colored_name(),
          ' 感到懵然。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 不由自主地看向感觉唯一知道发生了什么的 ',
          coffee.get_colored_name(),
          '，但……',
        ]);
        era.println();

        await coffee.say_and_wait([
          '今天……就先让给她吧……',
          callname_25,
          '，请好好安慰她直到她满足吧。',
        ]);
        await coffee.say_and_wait([
          '相对的……今天拿到了很有用的药呢……',
          callname_25,
          '，明天请要给予我，同等的爱哦。',
        ]);
        await era.printAndWait([
          '说完后，',
          coffee.get_colored_name(),
          ' 就推开门走了出去。',
        ]);
        await era.printAndWait(['……所以到底发生了什么。']);
        era.println();

        await tachyon.say_and_wait([callname, '……', callname, '……']);
        era.println();

        await era.printAndWait([
          '不知不觉间，刚刚还在哭泣的 ',
          tachyon.get_colored_name(),
          ' 用更紧的力道抱住了 ',
          you.get_colored_name(),
          '。',
        ]);
        era.println();

        await tachyon.say_and_wait(['对不起……但是……可以更深的……爱着我吗……']);
        await tachyon.say_and_wait([
          '我现在需要……更加温暖的，炙热的东西，来让身体从里到外的暖和起来。',
        ]);
        await tachyon.say_and_wait([callname, '……求求你……可以，可以给我吗。']);
        era.println();

        await era.printAndWait(['看着她混杂着恳求、恐惧和情欲的眼神。']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 翻过身，将她压在身下。',
        ]);
        era.drawLine();
        await era.printAndWait(['获得了道具', item, '……']);
      } else {
        await coffee.say_and_wait(['……如果这就是你的选择的话。']);
        await coffee.say_and_wait([
          '我没什么关系就是……毕竟我也不想，把 ',
          callname_25,
          ' 让给其他人。',
        ]);
        await coffee.say_and_wait(['只是……真是，可悲。']);
        era.println();

        await tachyon.print_and_wait(['回不去了。']);
        await tachyon.print_and_wait(['再也，回不去了。']);
        await tachyon.print_and_wait(['一切都结束了……但为什么。']);
        await tachyon.print_and_wait(['现在的心情，却意外的……好轻松。']);
        await tachyon.print_and_wait(['确实，自己确实是个可悲的女人。']);
        await tachyon.print_and_wait([
          '因为……看着自己的爱人，与其',
          you.sex,
          '的女人缠绵的模样。',
        ]);
        await tachyon.print_and_wait(['自己竟然……露出了笑容。']);
        era.println();

        await coffee.say_and_wait(['抱歉……', callname_25, '，让您久等了。']);
        await coffee.say_and_wait([
          '嗯？没什么……只是，想起之前委托 ',
          c_call_t,
          ' 做的药没拿……',
        ]);
        await coffee.say_and_wait([
          '……怎么提到 ',
          c_call_t,
          ' 就露出这种表情了呢？抱歉？但是……虽然这么说，下面不还是变得这么硬了吗？',
        ]);
        await coffee.say_and_wait([
          '咕啾……啾噜……噗哈……',
          callname_25,
          '……请在……嘴里出来吧，这样正好能够……和药一起……',
        ]);
        await coffee.say_and_wait([
          '什么药？……是能够让我们的爱情化为结晶的药哦，请放心……',
          c_call_t,
          ' 已经同意了。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '说到这，',
          t_call_c,
          ' 往蹲在床边的自己看了一眼。',
        ]);
        await tachyon.print_and_wait(['此时的自己，脸上是什么样的表情？']);
        await tachyon.print_and_wait(['悲伤？痛苦？仇视？心死？']);
        await tachyon.print_and_wait(['啊啊……']);
        await tachyon.print_and_wait([
          '从 ',
          t_call_c,
          ' 鄙视的眼神就能知道。',
        ]);
        await tachyon.print_and_wait(['绝对，不会是其中的任何一个吧。']);
        era.println();

        await coffee.say_and_wait([callname_25, '……', callname_25, '……']);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          ' 骑上了',
          you.sex,
          '的身体。',
        ]);
        await tachyon.print_and_wait([
          '随后，发出了最低贱的妓女都自愧不如的浪叫。',
        ]);
        await tachyon.print_and_wait(['……不，这只是自己的有色眼光而已。']);
        await tachyon.print_and_wait([
          '实际上，应该是很幸福，很喜悦的娇喘声才对吧。',
        ]);
        await tachyon.print_and_wait(['但，无妨。']);
        await tachyon.print_and_wait([
          '倒不如说，想像成前者那样，才会让自己更加兴奋。',
        ]);
        await tachyon.print_and_wait(['自己的爱人。']);
        await tachyon.print_and_wait(['自己的 ', callname, '。']);
        await tachyon.print_and_wait(['被妓女都不如的存在按在身下骑的模样。']);
        era.println();

        await coffee.say_and_wait(['呐……', callname_25, '……不，训练员君……']);
        era.println();

        await tachyon.print_and_wait([
          '忽然，',
          t_call_c,
          ' 的声音变得无比妩媚。',
        ]);
        await tachyon.print_and_wait([
          '说话的方式也跟着改变，变成了……陌生，而又熟悉的语气。',
        ]);
        era.println();

        await coffee.say_and_wait([
          '哦呀，',
          callname_25,
          '……怎么，忽然变得这么用力呢？',
        ]);
        await coffee.say_and_wait(['难道……是透过我，看见了什么人吗？']);
        era.println();

        await tachyon.print_and_wait(['不……']);
        await tachyon.print_and_wait(['不要。']);
        await tachyon.print_and_wait(['等等，', t_call_c, '，不要。']);
        await tachyon.print_and_wait(['忍不住了。']);
        await tachyon.print_and_wait(['还是开口，喊出声了。']);
        await tachyon.print_and_wait(['但是……']);
        era.println();

        await coffee.say_and_wait([you.sex, '是看不见，也听不见你的。'], true);
        era.println();

        await tachyon.print_and_wait(['仿佛有什么声音，在身后对自己诉说着。']);
        await tachyon.print_and_wait(['是……', t_call_c, ' 的『朋友』吗？']);
        await tachyon.print_and_wait(['不对，这种事不重要。']);
        await tachyon.print_and_wait([t_call_c, '，你——————。']);
        era.println();

        await coffee.say_and_wait(['很过分吧，', callname_25, '。']);
        era.println();

        await tachyon.print_and_wait(['忽然，', t_call_c, ' 的声音恢复原状。']);
        era.println();

        await coffee.say_and_wait([
          '明明，您是爱着她的……但是，她却这样将您的心意踩在脚下，不是吗？',
        ]);
        era.println();

        await tachyon.print_and_wait(['什。']);
        await tachyon.print_and_wait([t_call_c, '……你在说什么。']);
        await tachyon.print_and_wait(['不对……你在……说谁……？']);
        era.println();

        await coffee.say_and_wait([
          '明明，',
          callname_25,
          ' 对 ',
          c_call_t,
          ' 奉献了那么多。',
        ]);
        await coffee.say_and_wait([
          '明明，都已经完全超越了训练员和',
          tachyon.uma_sex_title,
          '的界限。',
        ]);
        await coffee.say_and_wait([
          '但是……她还是在我提出，『这个药是要和 ',
          callname_25,
          ' 一起用的』时……干脆地把药交出来了哦。',
        ]);
        era.println();

        await tachyon.print_and_wait([callname, '……喜欢……的人……']);
        await tachyon.print_and_wait([
          '不对，',
          you.sex,
          '跟 ',
          t_call_c,
          '，才是更般配的，不是吗。',
        ]);
        await tachyon.print_and_wait(['我才是，第三者……']);
        era.println();

        await coffee.say_and_wait(['唔……忽然……忽然这么用力……❤️。']);
        await coffee.say_and_wait(['呐……', callname_25, '……里面……在里面……']);
        await coffee.say_and_wait([
          c_call_t,
          ' 不愿意的，我都会让您做……',
          c_call_t,
          ' 拒绝了您，但我，会比她更加倍的满足您。',
        ]);
        era.println();

        await tachyon.print_and_wait(['不是。']);
        await tachyon.print_and_wait(['我没有。']);
        await tachyon.print_and_wait(['我……']);
        era.println();

        await tachyon.print_and_wait(['啊。']);
        await tachyon.print_and_wait(['不对啊。']);
        await tachyon.print_and_wait(['我拒绝了啊。']);
        era.println();

        await tachyon.print_and_wait(['最后的一次机会。']);
        await tachyon.print_and_wait(['已经被自己抛弃了。']);
        await tachyon.print_and_wait(['这次，真的没有机会了。']);
        era.println();

        await tachyon.print_and_wait(['但是，为什么……']);
        await tachyon.print_and_wait(['为什么身体却不住颤抖……']);
        await tachyon.print_and_wait(['明明是自己的爱人。']);
        await tachyon.print_and_wait(['明明是爱着自己的人。']);
        await tachyon.print_and_wait(['明明，她才是第三者。']);
        era.println();

        await tachyon.print_and_wait([
          callname,
          ' 和 ',
          t_call_c,
          ' 的立场忽然反转。',
        ]);
        await tachyon.print_and_wait([
          callname,
          ' 将 ',
          t_call_c,
          ' 用后背位按在床上。',
        ]);
        await tachyon.print_and_wait([
          '不停的，仿佛要将一切全部发泄出来一般的活塞运动。',
        ]);
        await tachyon.print_and_wait([
          t_call_c,
          ' 都已经翻起白眼，甚至吐出舌头。',
        ]);
        await tachyon.print_and_wait(['然而……', you.sex, '的嘴型。']);
        await tachyon.print_and_wait([
          callname,
          ' 的嘴型，一直在喃喃的念着某个词。',
        ]);
        await tachyon.print_and_wait(['那是……', y_call_t, '。']);
        era.println();

        era.println();

        await tachyon.print_and_wait(['……如果，是现在的话。']);
        await tachyon.print_and_wait([t_call_c, ' 已经晕过去的现在。']);
        await tachyon.print_and_wait(['做什么，应该也不会被发现吧。']);
        await tachyon.print_and_wait([
          '如果真的按她所说的，『朋友』会掩盖掉一切痕迹。',
        ]);
        await tachyon.print_and_wait(['那么……就算我……']);
        era.println();

        await coffee.say_and_wait(['啾……啾……']);
        era.println();

        await tachyon.print_and_wait(['不是肉杆。']);
        await tachyon.print_and_wait(['不是玉袋。']);
        await tachyon.print_and_wait([
          '抛弃了',
          you.sex,
          '的我，没有资格对',
          you.sex,
          '做出这种逾矩之事。',
        ]);
        await tachyon.print_and_wait(['只是，从两人的交合处，溢出的液体。']);
        await tachyon.print_and_wait(['将自己当成，清扫工具一样的物品。']);

        era.printButton('「！？」', 1);
        await era.input();

        await tachyon.print_and_wait(['明明只是，在舔舐着而已。']);
        await tachyon.print_and_wait([you.sex, '却忽然回过头来。']);
        await tachyon.print_and_wait(['等等。']);
        await tachyon.print_and_wait(['不要看。']);
        await tachyon.print_and_wait(['不要看我这么低贱的模样。']);
        await tachyon.print_and_wait(['求求你，求求……']);

        era.printButton('「你……是谁？」', 1);
        await era.input();

        await tachyon.print_and_wait(['……欸？']);
        await tachyon.print_and_wait([
          callname,
          ' 露出了迷茫，羞耻，困惑的表情。',
        ]);
        await tachyon.print_and_wait([
          '无论是哪一个，都不应该是在看到「我」之后该露出的表情。',
        ]);
        era.println();

        await coffee.say_and_wait([
          '她是……一名同样，憧憬着 ',
          callname_25,
          ' 的孩子。',
        ]);
        await coffee.say_and_wait([
          '只是……这孩子比较害羞，所以我请朋友帮忙，隐藏了她的面貌……',
        ]);
        await coffee.say_and_wait([
          '还是说……',
          callname_25,
          ' 想看看她的模样吗？',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '原本稍微放下的心，在 ',
          t_call_c,
          ' 说出最后一句话的瞬间又绷了起来。',
        ]);
        era.println();

        await you.say_and_wait('不……如果不想要被看到的话……还是不要勉强吧。');
        await coffee.say_and_wait([callname_25, '……真温柔呢……']);
        era.println();

        await tachyon.print_and_wait(['是啊……']);
        await tachyon.print_and_wait(['真的，太过温柔了。']);
        await tachyon.print_and_wait(['不知为何，脑海里开始浮现。']);
        await tachyon.print_and_wait([
          '万一',
          you.sex,
          '知道了 ',
          tachyon.get_colored_name(),
          ' 是这样的',
          tachyon.uma_sex_title,
          '。',
        ]);
        await tachyon.print_and_wait([
          '万一',
          you.sex,
          '看见了自己此时下贱的模样。',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          '会用……如何鄙视的眼神看着自己呢？',
        ]);
        await tachyon.print_and_wait(['会用如何冷酷的话语来辱骂自己。']);
        await tachyon.print_and_wait(['或者……']);
        await tachyon.print_and_wait(['万一，', you.sex, '原谅了自己。']);
        await tachyon.print_and_wait(['原谅了已经如此无药可救的自己……']);
        await tachyon.print_and_wait([
          '那么，如果再一次被自己出卖给 ',
          t_call_c,
          '，到时候的',
          you.sex,
          '又会露出如何让人兴奋的表情呢。',
        ]);
        era.println();

        await coffee.say_and_wait([
          '不过……这孩子真的很喜欢 ',
          callname_25,
          ' 呢。',
        ]);
        await coffee.say_and_wait([
          '所以，',
          callname_25,
          ' 不介意的话……可以让这孩子，在旁边看着吗？',
        ]);
        await coffee.say_and_wait([
          '放心吧，只是看着……我保证，这孩子绝对不会再擅自行动了……对吧？',
        ]);
        era.println();

        await tachyon.print_and_wait([
          t_call_c,
          ' 坐在床边，用脚将我的下巴勾起。',
        ]);
        await tachyon.print_and_wait(['像在教育不听话的小狗一般。']);
        await tachyon.print_and_wait([
          '明明，是自己的情敌，明明，是自己的对手。',
        ]);
        await tachyon.print_and_wait(['但是……']);
        await tachyon.print_and_wait([
          '看着从 ',
          t_call_c,
          ' 的胯下缓缓流下，沿着小腿肚向下流泄。',
        ]);
        await tachyon.print_and_wait(['甚至，足背，足尖。']);
        await tachyon.print_and_wait([
          '那欢爱的痕迹，混合了两人爱液精液的白浆。',
        ]);
        await tachyon.print_and_wait(['我……']);
        await tachyon.print_and_wait([
          '鬼使神差下，我舔了舔 ',
          t_call_c,
          ' 的足。',
        ]);
        await tachyon.print_and_wait(['甜蜜的，苦涩的，羞辱的，兴奋的。']);
        await tachyon.print_and_wait(['各式各样的味道在口中爆发。']);
        await tachyon.print_and_wait(['不知不觉，整只脚都已经被舔吮干净。']);
        await tachyon.print_and_wait(['没有了……']);
        await tachyon.print_and_wait(['还想要更多，更多那样的味道……']);
        await tachyon.print_and_wait(['无论，付出什么代价……']);
        era.println();

        await tachyon.print_and_wait(['我躺在地上，露出了臣服的姿势。']);
        await tachyon.print_and_wait([
          '将 ',
          t_call_c,
          ' 的脚，小心翼翼的放在自己的腹部上。',
        ]);
        await tachyon.print_and_wait(['就算如何践踏自己的尊严也无所谓。']);
        await tachyon.print_and_wait(['只要能够再次，获得赏赐。']);
        era.println();

        await coffee.say_and_wait(['哎呀……真是好孩子。']);
        await coffee.say_and_wait(['真是……不错的表现啊。']);
        await coffee.say_and_wait([
          '要是能够继续做出这样的表演……偶尔，给你一些奖励，倒也不是不行……',
        ]);
        era.println();

        await tachyon.print_and_wait([
          '忽然，',
          t_call_c,
          ' 将嘴凑近到耳旁，用只有',
          tachyon.uma_sex_title,
          '才能听见的音量小声说道。',
        ]);
        era.println();

        await coffee.say_and_wait(['尽情的取悦我吧，', c_call_t, ' ❤️。']);
        era.println();

        await tachyon.print_and_wait(['于是，', t_call_c, ' 回到床上。']);
        await tachyon.print_and_wait(['接着，床上再度传来震动。']);
        await tachyon.print_and_wait([
          '床下的 ',
          tachyon.get_colored_name(),
          '，只能吐着舌头。',
        ]);
        await tachyon.print_and_wait([
          '在专属的特等席上，如青蛙一般悲惨的抖动身躯。',
        ]);
        await tachyon.print_and_wait([
          '拼命安慰自己的同时，也取悦床上的情敌。',
        ]);
        await tachyon.print_and_wait([
          '祈求，对方能够可怜卑微的自己，给予一点点的，一点点的赏赐。',
        ]);
      }
      return ret;
    };
    f.title = 'Aromatic Hydrocarbon Poisoning（芳香烃中毒）';
    return f;
  })(),
  ero_start_reward1: (() => {
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('总算结束了……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 伸了个懒腰，忍不住感慨',
      ]);
      await era.printAndWait([
        '最近 ',
        tachyon.get_colored_name(),
        ' 的实验越来越多，也越来越复杂及麻烦。',
      ]);
      await era.printAndWait([
        '虽说危险度没那么高，但加上训练员的本职工作后忙碌程度甚至让 ',
        you.get_colored_name(),
        ' 有些怀念那些危险的实验了',
      ]);
      era.println();
      await tachyon.say_and_wait(['辛苦了，', callname, '……']);
      await tachyon.say_and_wait('放心吧，之后会好好给你奖励的');
      await era.printAndWait('\n奖励……？');
      await era.printAndWait([
        '虽然不知道具体是什么，但奖励这个词还是激励了疲累的 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait('\n在收拾完实验器材后');
      era.println();
      await tachyon.say_and_wait('那么……作为奖励，就让我来帮你处理一下吧');
      await tachyon.say_and_wait('几天下来，积累的东西❤');
      era.println();
      await era.printAndWait('……欸？');
      era.println();
      await tachyon.say_and_wait('这种反应……难道，要拒绝吗？');
      await tachyon.say_and_wait('明明，都是恋人了不是吗？');
      era.println();
      await era.printAndWait('送到眼前的肉，哪有不吃的道理！');
      await era.printAndWait(
        '再说……这几天由于实验的关系，确实也都没怎么发泄欲望……',
      );
      await era.printAndWait(
        '这样的话，让自己的恋人来帮忙……应该也不是什么过分的事吧',
      );
      era.println();
      await era.printAndWait([
        '鬼使神差下，',
        you.get_colored_name(),
        ' 脱下了裤子',
      ]);
      era.println();
      await tachyon.say_and_wait('嘶……');
      era.println();
      await era.printAndWait([
        '虽然没有动画里甚至冒出蒸气那么夸张，但闷了一天的肉棒，依然散发出了足以挑逗起任何',
        tachyon.uma_sex_title,
        '性欲的气味来',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 紧紧盯着眼前的肉棒，移不开视线',
      ]);
      era.println();
      await tachyon.say_and_wait('不行……忍不住了……❤');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 差点都忘记了，这几天由于实验导致欲望积累的，可不只 ',
        you.get_colored_name(),
        ' 一人而已',
      ]);
      await era.printAndWait([
        '一直在身旁做着实验的 ',
        tachyon.get_colored_name(),
        ' 想必也是如此',
      ]);
      await era.printAndWait('这么说来……比起奖励，果然只是找理由……');
      era.println();
      await era.printAndWait([
        '想到这，',
        you.get_colored_name(),
        ' 的心中忍不住起了坏心眼',
      ]);
      await era.printAndWait([
        '看见 ',
        you.get_colored_name(),
        ' 掏出肉棒后就不再动作的模样，',
        tachyon.get_colored_name(),
        ' 心急的看着 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……再等什么呢，快点，进来']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 撅起双唇，唇间的粉舌前后移动着，尝试勾起 ',
        you.get_colored_name(),
        ' 的情欲',
      ]);
      await era.printAndWait([
        '但 ',
        you.get_colored_name(),
        ' 依然没有做出反应，明白了 ',
        you.get_colored_name(),
        ' 的意图的 ',
        tachyon.get_colored_name(),
        ' 露出了哀怨的神情',
      ]);
      era.println();
      await tachyon.say_and_wait('……真过分');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 蹲在地上，仿佛恳求一般仰视着高高翘起的肉棒',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '求你了，',
        callname,
        '……让我啾啵啾啵的……好好品尝……',
        callname,
        ' 的肉棒……❤️',
      ]);
      era.println();
      await era.printAndWait([
        '见到 ',
        you.get_colored_name(),
        ' 总算慢慢靠前了，',
        tachyon.get_colored_name(),
        ' 猴急的将鼻子贴近了肉棒，深深的猛闻了几下',
      ]);
      await era.printAndWait('不老实的手咕啾咕啾的抠弄着蜜穴，发出呻吟');
      await era.printAndWait(
        '在理性与感性都认可的这名雄性面前，身为雌性的自己只能跪在地上臣服',
      );
      era.println();
      await tachyon.say_and_wait('嘶……哈……嘶……');
      await tachyon.say_and_wait('肉棒……肉棒的味道');
      await tachyon.say_and_wait([
        '请……让我再多闻闻……',
        callname,
        ' 的……肉棒……',
      ]);
      await tachyon.say_and_wait('鼻腔里面……全都是……雄性的味道');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 握着满是先走汁的肉棒']);
      await era.printAndWait([
        '恶作剧的来回磨蹭着不知何时已经跪在自己面前的 ',
        tachyon.get_colored_name(),
        ' 的鼻尖',
      ]);
      await era.printAndWait([
        '仿佛在做标记般，将汁液和气味涂满了 ',
        tachyon.get_colored_name(),
        ' 的鼻子',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '过分……要是……闻到这种味道……不就真的……回不去了……',
      );
      era.println();
      await era.printAndWait('不喜欢的话，那就算了？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 作势要抽身而去，却看 ',
        tachyon.get_colored_name(),
        ' 亦步亦趋的跟随着，其中鼻子完全没离开过肉棒哪怕一厘米的距离',
      ]);
      era.println();
      await tachyon.say_and_wait('光是味道……就要去了……');
      era.println();
      await era.printAndWait('仿佛担心又一次的恶作剧');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 反过来用鼻尖不停刮蹭着 ',
        you.get_colored_name(),
        ' 的龟头尖端',
      ]);
      await era.printAndWait('仿佛要牢记这股味道一般，用力嗅着肉棒的臭味');
      era.println();
      await tachyon.say_and_wait('不行……受不了了……');
      await tachyon.say_and_wait('请让我含……求求，让我舔');
      era.println();
      await era.printAndWait('想要快一点舔到');
      await era.printAndWait('想要获得被允许吸吮肉棒的资格');
      await era.printAndWait('看着爱人的肉棒摆在自己眼前');
      await era.printAndWait([
        '享受着气味的 ',
        tachyon.get_colored_name(),
        ' 还是按耐不住，咽下口水',
      ]);
      era.println();
      await tachyon.say_and_wait('咕啾');
      await tachyon.say_and_wait('嗯啾噜噜噜……啾噜……啾咕……');
      era.println();
      await era.printAndWait([
        '还没得到许可，',
        tachyon.get_colored_name(),
        ' 就已经吮吸起了肉棒',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也松了口气，要是再继续下去，忍不住的就要换成 ',
        you.get_colored_name(),
        ' 了',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 大大张开嘴，一口气将肉棒吞至根部',
      ]);
      await era.printAndWait('不断上下吸弄，发出了下流的水声');
      era.println();
      await tachyon.say_and_wait('好吃……好美味……');
      await tachyon.say_and_wait(['肉棒……', callname, ' 臭臭的肉棒❤❤']);
      era.println();
      await era.printAndWait(['从根部到龟头，完整的包覆吸吮']);
      await era.printAndWait(
        '像涂唇膏一般，想毫无保留的将肉棒的味道蹭在自己口中',
      );
      era.println();
      await era.printAndWait('傍晚时分，大多数人已经回到家中或者宿舍的时间');
      await era.printAndWait(
        '实验室中，回荡着无比淫糜的水声，是故意发出的，还是已经拼命到没有功夫去在意声音了？',
      );
      await era.printAndWait([
        '对 ',
        you.get_colored_name(),
        ' 的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感',
      ]);
      await era.printAndWait(
        '一边服侍肉棒，一边摇晃的屁股也在不停摩擦着地板和手指，期望获得慰藉',
      );
      await era.printAndWait('但是……最美味的，果然还是口中的肉棒');
      await era.printAndWait([
        '带着爱意的服侍，无声的说明着 ',
        tachyon.get_colored_name(),
        ' 对眼前肉棒的痴迷',
      ]);
      await era.printAndWait([
        '倘若让',
        tachyon.sex,
        '现在发誓一辈子作为肉棒的奴隶而活，或许',
        tachyon.sex,
        '都会答应吧',
      ]);
      era.println();
      await era.printAndWait([
        '忽然，',
        you.get_colored_name(),
        ' 拍了拍 ',
        tachyon.get_colored_name(),
        ' 的头',
      ]);
      await era.printAndWait(['听话的', tachyon.sex, '马上察觉到了意思']);
      era.println();
      await tachyon.say_and_wait(
        '进来……请射进来……在我的嘴穴里……全部……喝下去❤❤',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '马上更贴近的含吮着 ',
        you.get_colored_name(),
        ' 的肉棒',
      ]);
      await era.printAndWait('终于，白浆在口中爆发');
      era.println();
      await tachyon.say_and_wait('啾……咕啾………噗哈');
      await tachyon.say_and_wait('哈啊……哈……嗯……啾……');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 慢慢咀嚼着射在口中的精液',
      ]);
      await era.printAndWait('故意发出咕啾的咀嚼声后，将精液全部喝了下去');
      await era.printAndWait('随即，为了使残留的精液能被一滴不剩的喝干');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 又一次含住了垂下的肉棒，不停啜吸着，打扫肉棒',
      ]);
      await era.printAndWait([
        '看见',
        tachyon.sex,
        '如此癡迷的模样，',
        you.get_colored_name(),
        ' 的下体不自觉的又硬了起来',
      ]);
      era.println();
      await tachyon.say_and_wait(['下次实验还要拜托你哦，', callname, ' ']);
      await tachyon.say_and_wait('……当然，还会有奖励的');
      await tachyon.say_and_wait('你不会拒绝吧……亲爱的❤');
      era.println();
      await era.printAndWait([
        '看着',
        tachyon.sex,
        '媚眼如丝的模样，',
        you.get_colored_name(),
        ' 选择再一次堵住那张不断对自己发号施令的小嘴',
      ]);
    };
    f.title = '实验的报酬 · 一';
    return f;
  })(),
  ero_start_reward2: (() => {
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '～今天的实验也辛苦了']);
      await tachyon.say_and_wait('那么……需要奖励吗❤️');
      await you.say_and_wait('来吧');
      era.println();
      await era.printAndWait('滋啾滋啾');
      await era.printAndWait('实验室裏满是下流的声响');
      era.println();
      await tachyon.say_and_wait([callname, '……', callname, '❤️']);
      await tachyon.say_and_wait('快点……填满我的骚穴❤️');
      await tachyon.say_and_wait(
        '好好调教这个……在实验途中就开始不停流水的淫穴',
      );
      await era.printAndWait('肉棒插入前就已经完全湿透的小穴将肉棒紧紧包裹');
      await era.printAndWait([
        '每一下顶弄爱液都会飞溅而出，桌面和地板都染上了 ',
        tachyon.get_colored_name(),
        ' 的腥臭穴汁',
      ]);
      era.println();
      await tachyon.say_and_wait('呜……好用力❤️');
      await tachyon.say_and_wait('稍微…稍微慢一点……❤️');
      await tachyon.say_and_wait('声音……啊嗯❤️');
      era.println();
      await era.printAndWait('都这样勾引了还希望自己能慢一点？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 用力拍打着 ',
        tachyon.get_colored_name(),
        ' 的屁股',
      ]);
      await era.printAndWait('不管不顾的加快了速度');
      era.println();
      await tachyon.say_and_wait([callname, '……', callname, '❤️']);
      await tachyon.say_and_wait('啊❤️嗯啊❤️啊❤️啊啊❤️');
      await tachyon.say_and_wait([callname, '……给我❤️给我更多❤️']);
      era.println();
      await era.printAndWait([
        '渐入佳境后，腰甚至脱离了 ',
        you.get_colored_name(),
        ' 的掌控，自行加快了速度',
      ]);
      await era.printAndWait([
        '如此主动的缠绕使 ',
        you.get_colored_name(),
        ' 的兴奋程度也更上层楼，渴望将眼前雌性的身体，任凭雄性本能操控着身体',
      ]);
      era.println();
      await tachyon.say_and_wait(['好棒❤️', callname, ' 的肉棒❤️好厉害❤️']);
      era.println();
      await era.printAndWait('肉体碰撞的声音更加响亮');
      await era.printAndWait('整个实验室中充斥着淫猥的气味及声音');
      era.println();
      await tachyon.say_and_wait('又……又更大了❤️');
      await tachyon.say_and_wait([
        '要射了吗……在，在里面出来❤️好想要……',
        callname,
        ' 的小宝宝❤️',
      ]);
      await tachyon.say_and_wait(['喜欢……最喜欢被 ', callname, ' 内射了❤️']);
      await tachyon.say_and_wait([
        '在小穴里面……尽情的出来……想生下 ',
        callname,
        ' 的孩子❤️想给 ',
        callname,
        ' 生一窝小豚鼠❤️',
      ]);
      era.println();
      await era.printAndWait([
        '听见 ',
        tachyon.get_colored_name(),
        ' 的话，',
        you.get_colored_name(),
        ' 更不管不顾的加快加深',
      ]);
      await era.printAndWait([
        '哪怕是',
        tachyon.uma_sex_title,
        '的身体都只能娓娓配合着 ',
        you.get_colored_name(),
        ' 的动作来回',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 捏住前面不停晃动的两点尖端，用力向下拉',
      ]);
      era.println();
      await tachyon.say_and_wait('齁喔喔喔喔喔喔❤️');
      await tachyon.say_and_wait('去，去了❤️要被扯着奶头去了❤️');
      era.println();
      await era.printAndWait('咚咕，嘟咕，咻噜噜噜❤️');
      await era.printAndWait('最后，最深入的插抽了几下后，精关彻底放开');
      await era.printAndWait([
        '白浆灌满了 ',
        tachyon.get_colored_name(),
        ' 的小穴',
      ]);
      await era.printAndWait([
        '被白浆灌入的瞬间，',
        tachyon.get_colored_name(),
        ' 也全身痉挛着达到了巅峰',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '好几天没能品尝到的……',
        callname,
        ' 的肉棒❤️欸嘿嘿❤️',
      ]);
      await tachyon.say_and_wait(['好棒……', callname, ' 的……好唔唔❤️']);
      era.println();
      await era.printAndWait([
        '自以为已经结束的 ',
        tachyon.get_colored_name(),
        '，感叹的话才说到一半',
      ]);
      await era.printAndWait([
        '便被 ',
        you.get_colored_name(),
        ' 的肉棒再度堵住了嘴',
      ]);
      era.println();
      await tachyon.say_and_wait('啾……啾啾❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 顺从的帮 ',
        you.get_colored_name(),
        ' 清理着肉棒',
      ]);
      await era.printAndWait([
        '满是自己淫汁和 ',
        callname,
        ' 精液的肉棒，对 ',
        tachyon.get_colored_name(),
        ' 而言现在哪怕将 ',
        callname,
        ' 的便当摆在面前，',
        tachyon.sex,
        '大概都会优先选择肉棒',
      ]);
      era.println();
      await tachyon.say_and_wait('下次实验……一样拜托你了❤️啾❤️啾啵❤️');
      await tachyon.say_and_wait('唔！唔啾❤️啾噜❤️');
      era.println();
      await era.printAndWait([
        '听见 ',
        tachyon.get_colored_name(),
        ' 变着法子说出的「下次再来做吧」，',
        you.get_colored_name(),
        ' 的肉棒又硬了起来',
      ]);
      await era.printAndWait([
        '勾引的眼前',
        tachyon.uma_sex_title,
        '再度露出雌性的表情',
      ]);
    };
    f.title = '实验的报酬 · 二';
    return f;
  })(),
  ero_start_reward3: (() => {
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([callname, '～今天的实验也辛苦了']);
      await tachyon.say_and_wait('那么……需要奖励吗❤️');
      await you.say_and_wait('来吧');
      await tachyon.print_and_wait('果然，不应该是这个洞口的吧？');
      await tachyon.print_and_wait('明明下面的骚穴也痒的不行');
      await tachyon.print_and_wait('为什么插的却是那种地方');
      await tachyon.print_and_wait('而且还是这种……这种姿势');
      era.println();
      await tachyon.print_and_wait([
        '紧紧的后穴，包裹着 ',
        callname,
        ' 的粗壮肉棒',
      ]);
      await tachyon.print_and_wait([
        '比起小穴，皱折更多的菊穴在给予 ',
        callname,
        ' 更多快感的同时，也给自己带来了小穴两倍的快感',
      ]);
      await tachyon.print_and_wait(
        '这点来讲，对于满足性欲的条件来说，或许确实比小穴更好用……但是……',
      );
      era.println();
      await tachyon.say_and_wait(
        '这种像小狗一样的姿势……再加上这个穴……这不就是真正的小狗吗❤️',
        true,
      );
      era.println();
      await tachyon.print_and_wait('但是……仔细想想似乎也不是不行❤️');
      await tachyon.print_and_wait([callname, ' 是自己专属的 ', callname]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 是 ',
        callname,
        ' 专属的小母狗',
      ]);
      await tachyon.print_and_wait(
        '这么一想，自己的身体仿佛马上就无缝代入角色了一般，开始高兴的摇晃着尾巴，讨着主人欢心',
      );
      era.drawLine();
      await era.printAndWait([
        '好像感觉到了身下人的胡思乱想，',
        you.get_colored_name(),
        ' 拍了 ',
        tachyon.get_colored_name(),
        ' 的屁股提醒',
        tachyon.sex,
        '专心',
      ]);
      await era.printAndWait([
        '但已经完全代入角色的 ',
        tachyon.get_colored_name(),
        ' 却更用力的摇晃起屁股，夹紧了自己的屁穴',
      ]);
      await era.printAndWait([
        '突如其来的攻击，使得 ',
        you.get_colored_name(),
        ' 一时精关失守',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 按住了 ',
        tachyon.get_colored_name(),
        ' 的腰，在屁穴里将积累了几天的精液全部排泄一空',
      ]);
      await era.printAndWait([
        '胯下的 ',
        tachyon.get_colored_name(),
        ' 在这个时候，也仿佛想将自己的幸福传达给主人的母狗一般',
      ]);
      await era.printAndWait('欢快的排出小便表露自己此时的心情');
      await era.printAndWait([
        '然而 ',
        you.get_colored_name(),
        ' 还没来得及做出表示，就迎来了第二个重量级的冲击',
      ]);
      era.println();
      await tachyon.say_and_wait('汪……汪汪❤️');
      await era.printAndWait([
        '看见 ',
        you.get_colored_name(),
        ' 脸上迷惑的表情后，',
        tachyon.get_colored_name(),
        ' 才仿佛忽然回过神自己都做了什么',
      ]);
      await era.printAndWait('脸颊瞬间通红');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……不是，我……没有……不是你想的那样……',
      ]);
      era.println();
      await era.printAndWait('虽然不知道发生了什么，但先装作无事发生吧');
    };
    f.title = '实验的报酬 · 三';
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
   */
  async ero_start_cuckold(tachyon, callname, t_call_c) {
    if (era.get('cflag:25:招募状态') === 1 && Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '……',
        callname,
        '，那个，不找 ',
        t_call_c,
        '……一起吗？',
      ]);
      await tachyon.say_and_wait('今天只想跟我……啊，这样啊。');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 不知道为什么，似乎有些失望的样子。',
      ]);
    } else {
      await tachyon.say_and_wait(['……对不起，', callname, '，对不起。']);
      era.println();
      await era.printAndWait([
        '不知道为什么，上床前 ',
        tachyon.get_colored_name(),
        ' 不停的在道歉着。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
   */
  async ero_start_cuckold_coffee(tachyon, callname, t_call_c) {
    await tachyon.say_and_wait([t_call_c, '，来']);
    await tachyon.say_and_wait([
      '没错，舔湿一点，这样等会 ',
      callname,
      ' 才好插进来',
    ]);
    await tachyon.say_and_wait('表现好的话，等会结束了再让你舔一次');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ero_end_cuckold_coffee(tachyon, callname) {
    await tachyon.say_and_wait([
      '把 ',
      callname,
      ' 的精液和爱液混入咖啡？这样会好喝吗？',
    ]);
    await tachyon.say_and_wait('还是说，你只是在品尝屈辱和败北的滋味而已？');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async cum_in_mouth_tr_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('啾❤️咕啾❤️啾噜❤️');
    era.println();
    await era.printAndWait([
      '射出的精液灌入了 ',
      tachyon.get_colored_name(),
      ' 的喉咙。',
    ]);
    await era.printAndWait([
      '但过多的射精量仍然超过了 ',
      tachyon.get_colored_name(),
      ' 一次所能喝下的量。',
    ]);
    await era.printAndWait([
      '白色的精液从嘴角流淌落在乳房上，',
      tachyon.get_colored_name(),
      ' 慌忙单手捧起胸肉，将滴落的精液再度揽回口中。',
    ]);
    era.println();
    await tachyon.say_and_wait('啾❤️啾噜❤️');
    await tachyon.say_and_wait('还有……');
    await tachyon.say_and_wait([
      '这些可都是 ',
      callname,
      ' 重要的因子❤️不能浪费啊❤️',
    ]);
    era.println();
    await era.printAndWait([
      '才舔完自己身上的，',
      tachyon.get_colored_name(),
      ' 又盯上了还处在余韵中的肉棒。',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '用力吸吮了一口，将剩余的精液从竿内吸吮出来。',
    ]);
    era.println();
    await tachyon.say_and_wait('这样……就干净了呢❤️');
    era.println();
    await era.printAndWait([
      '将收集到的精液聚集在口中，给你看清后，',
      tachyon.get_colored_name(),
      ' 才慢悠悠的将白浆喝下。',
    ]);
    await era.printAndWait([
      '喉咙色情的上下滚动，仿佛要让 ',
      you.get_colored_name(),
      ' 看清吞咽的全过程一般。',
    ]);
    era.println();
    await tachyon.say_and_wait('哈啊……又空了呢❤️不多射点，进来吗❤️');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async cum_in_throat_force(tachyon, you) {
    await tachyon.say_and_wait('嗯呜呜呜❤️嗯唔❤️唔咕❤️');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 用力按住了 ',
      tachyon.get_colored_name(),
      ' 的头。',
    ]);
    await era.printAndWait([
      '将龟头死死顶进 ',
      tachyon.get_colored_name(),
      ' 的喉咙深处开始射精。',
    ]);
    await era.printAndWait([
      '直到射精结束 ',
      you.get_colored_name(),
      ' 也依然用肉棒堵着，好确保自己的精液深深浸入到 ',
      tachyon.get_colored_name(),
      ' 胃道的每个角落。',
    ]);
    era.println();
    await era.printAndWait([
      '似乎是因为缺氧，在肉棒抽出后 ',
      tachyon.get_colored_name(),
      ' 的表情看上去有些呆滞。',
    ]);
    await era.printAndWait(
      '但依然下意识的将嘴边的白色浆液和弯曲毛发吞入口中……',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async cum_in_throat(tachyon, you, callname) {
    await tachyon.say_and_wait('嗯……咕嘟……咕噜……');
    era.println();
    if (Math.random() < 0.5) {
      await era.printAndWait('仿佛等这一刻等了许久。');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 一口接一口，欣喜的将射出的白浆全数喝了下去。',
      ]);
      era.println();
      await tachyon.say_and_wait('噗哈……');
      era.println();
      await era.printAndWait('张开的口舌中，却还有一点白丝残留。');
      await era.printAndWait([
        '只见 ',
        tachyon.get_colored_name(),
        ' 就这么张着嘴，用舌头将口内的精液全数聚集在一起。',
      ]);
      await era.printAndWait('然后再次咽下。');
      era.println();
      await tachyon.say_and_wait('多谢款待❤️');
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 面前伸出舌头，展示着自己榨出的大量精液。',
      ]);
      await era.printAndWait([
        '那总是自信自傲的脸庞，被白浊液体玷污的模样，煽动着 ',
        you.get_colored_name(),
        ' 内心的欲望。',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '这就是，',
        callname,
        ' 的因子呢……要是用在实验的话……',
      ]);
      era.println();
      await era.printAndWait('虽然这么说着，但在口中把玩了一会后……');
      era.println();
      await tachyon.say_and_wait('咕啾……咕啾……噗哈❤️');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 对着 ',
        you.get_colored_name(),
        ' 张开了已经空无一物的小口。',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '通通喝下去了呢……这样只好，再来一次了不是吗❤️',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async cum_in_tit(tachyon, you, callname) {
    await tachyon.say_and_wait('好浓……❤️');
    await tachyon.say_and_wait([
      '全部都涂在脸上……满满的 ',
      callname,
      ' 的味道❤️',
    ]);
    era.println();
    await era.printAndWait('浓浓的浆液顺着脸庞流到胸部上。');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 先将脸庞上沾满的精液擦拭干净聚集在手上。',
    ]);
    await era.printAndWait('却好似不小心漏掉了胸部上的痕迹一般。');
    await era.printAndWait([
      '赤裸的乳肉上，满是 ',
      you.get_colored_name(),
      ' 射出的腥臭白浆。',
    ]);
    era.println();
    await tachyon.say_and_wait('哎呀……居然忘了呢❤️');
    era.println();
    await era.printAndWait([
      '看见 ',
      you.get_colored_name(),
      ' 的目光都被吸引在胸上。',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 才发出明显的，刻意且做作的惊呼。',
    ]);
    await era.printAndWait('将胸上的白浆层层抹去，放入口中。');
    era.println();
    await tachyon.say_and_wait('啾……啾噜❤️多谢款待❤️');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '吸了吸手指，张开嘴，露出已经干净的舌唇表示没有遗漏。',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async orgasm_non_penetrative(tachyon, callname) {
    await tachyon.say_and_wait('去了……要去了❤️');
    await tachyon.say_and_wait([
      '要变成 ',
      callname,
      ' 专属的小母狗了喔喔喔喔❤️',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async cum_in_missionary(tachyon, you) {
    await era.printAndWait([
      '将总是占据主动的 ',
      tachyon.get_colored_name(),
      ' 压在身下进行侵犯的行为，使 ',
      you.get_colored_name(),
      ' 的射精欲望越发高涨。',
    ]);
    era.println();
    await tachyon.say_and_wait('啊❤️啊嗯❤️豚鼠君❤️');
    await tachyon.say_and_wait('小穴……小穴里面❤️好舒服❤️');
    era.println();
    await you.say_and_wait('要出来了……');
    await era.printAndWait([you.get_colored_name(), ' 低吼一声']);
    await era.printAndWait('嘟咕❤️嘟咕❤️咕咻噜噜❤️');
    era.println();
    await era.printAndWait('随着肉棒的拔出，射在腔内的浓郁白浆缓缓流了出来……');
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async cum_in_back(tachyon) {
    await tachyon.say_and_wait('哈啊……嗯啊……喔……呜喔喔喔喔❤️');
    await tachyon.say_and_wait('像野兽一样被中出了喔喔喔喔❤️❤️❤️');
    await tachyon.say_and_wait(
      '要失去理智了❤️要变成脑袋里只有肉棒和精液的野兽了❤️❤️❤️',
    );
    era.println();
    await era.printAndWait('安产体型的屁股，充分起到了缓冲的作用。');
    await era.printAndWait('每当肉棒冲击子宫口，爱液便会喷涌而出。');
    await era.printAndWait('整个小穴一阵一阵的刺激着肉棒。');
    await era.printAndWait('不久后，龟头压着子宫口，将精液注入了子宫内部。');
    await era.printAndWait('biu～biu～biu～');
    await era.printAndWait('漫长的播种看来还需要一些时间完结。');
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async cum_in_anal_missionary(tachyon, you) {
    await tachyon.say_and_wait('去了……去了去了去了！');
    await tachyon.say_and_wait('用肛门，用屁穴去了喔喔喔喔喔❤️');
    if (tachyon.sex_code !== 1) {
      era.println();
      await era.printAndWait(
        '被用力抽插了几下后，空荡的小穴涌出了一股又一股的潮水。',
      );
      await era.printAndWait(
        '无论是喷溅在自己身上的，还是从穴内缓缓流出的，都汇聚到了两人正连接着的器官，继续作为抽插的润滑剂以供使用。',
      );
      era.println();
      await you.say_and_wait('真是方便的性处理用具啊，还自带润滑功能。');
      await era.printAndWait([
        '听见 ',
        you.get_colored_name(),
        ' 的玩笑话，',
        tachyon.get_colored_name(),
        ' 想用力的夹一下肉棒来表达不满，却发现完全脱力的身体连这点事都做不到，不仅如此，小穴在这样的挤压刺激下又浅浅的小高潮了一次。',
      ]);
    }
  },
  /**
   * 获得欢愉刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_pleasure(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            '唔……热热痒痒的……身体有点难受……是药的副作用吗？',
          );
        } else {
          await tachyon.say_and_wait('嗯……热热痒痒的……');
          await tachyon.say_and_wait(
            '不，没有不舒服……唔……试试看，多做点吧……感觉，有些不可思议……',
          );
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(
            '不行……明明只是激素作用……只是，身体正常反应……可是，可是……为什么……这么舒服……',
          );
        } else {
          await tachyon.say_and_wait(
            '等等……里面还没缓过来……要是，要是更舒服的话……咿！',
          );
          await tachyon.say_and_wait(
            '不行，明明知道不能继续下去，可是身体自己……脑袋……无法思考',
          );
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait([
            '已经……不能再思考了……好舒服……更多……还要更多，',
            callname,
            '……给我……我还要……',
          ]);
        } else {
          await tachyon.say_and_wait([callname, '❤️', callname, '❤️']);
          await tachyon.say_and_wait(
            '更多……给我更多……从里到外把我完全填满……❤️',
          );
          await tachyon.say_and_wait(
            '是你把我变成这样的……所以，还想要更多❤️让我聪明的脑袋再也无法思考肉体交合以外的东西❤️',
          );
        }
    }
  },
  /**
   * 获得同心刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_meek(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait(
            '偶尔放空思考，任人摆布……某种意义上或许也是种舒压的方法？',
            true,
          );
          await tachyon.say_and_wait([callname, '………………不对，我在想什么！']);
        } else {
          await tachyon.say_and_wait([
            '嗯❤️嗯啊❤️',
            callname,
            '❤️等等……停，停一下❤️',
          ]);
          await tachyon.say_and_wait('哈啊……哈啊……');
          await tachyon.say_and_wait(
            '明明……按我说的停下来了，为什么身体还是觉得有点奇怪呢……',
            true,
          );
          await tachyon.say_and_wait(
            [
              '仿佛……我在希望 ',
              callname,
              ' 能够无视我说的话……继续……把我弄到不省人事……………到底在想什么东西啊我！',
            ],
            true,
          );
        }
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 忽然疯狂的摇晃起头来',
        ]);
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait(['等等……', callname, '……不要那么……']);
          await tachyon.say_and_wait(`不，为什么更激烈了……！`);
          await tachyon.say_and_wait([
            '咕……明明只是 ',
            callname,
            '……明明应该听我的命令的……',
          ]);
          await tachyon.say_and_wait(
            '为什么……身体却觉得比之前更舒服了……难道我是什么被虐狂吗……',
            true,
          );
        } else {
          await tachyon.say_and_wait([
            '唔嗯……',
            callname,
            '，等一下……太用力……咿❤️',
          ]);
          await tachyon.say_and_wait('讨厌……………不，也没有……');
          await tachyon.say_and_wait('等！又忽然这么……嗯啊❤️❤️');
          await tachyon.say_and_wait(['都说住手了……', callname, ' 你啊，唉']);
          await tachyon.say_and_wait('明明……支配权应该在我手上的啊', true);
          await tachyon.say_and_wait('为什么，我却反过来……想被支配……', true);
          await tachyon.say_and_wait('不妙……真的不妙啊❤️', true);
        }
        break;
      case 3:
        await tachyon.say_and_wait(
          '放弃思考，完全成为某人的俘虏居然是这么舒服的事情……',
          true,
        );
        await tachyon.say_and_wait('啊啊……之前的自己到底在抵抗什么呢', true);
        await tachyon.say_and_wait([
          callname,
          '……不，主人……大人……给我，还想要更多……❤️',
        ]);
        await tachyon.say_and_wait(
          '没关系的……这只是……只是……增加情趣的玩法',
          true,
        );
        await tachyon.say_and_wait('结束之后就恢复正常了……对……所以……', true);
        await tachyon.say_and_wait('请再……给我更多命令吧……❤️');
    }
  },
  /**
   * 获得苦痛刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_pain(tachyon, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 75) {
          await tachyon.say_and_wait([
            '好痛！？居然对主人做出这种事来，',
            callname,
            ' 你在想什么！',
          ]);
        } else {
          await tachyon.say_and_wait([
            '好痛！？',
            callname,
            '……可以不要那么粗鲁吗？',
          ]);
        }
        break;
      case 2:
        if (love < 75) {
          await tachyon.say_and_wait('不要……住手！好痛……不要再弄了！');
        } else {
          await tachyon.say_and_wait([
            callname,
            '！？是，是我哪里做错了吗……为什么，为什么要这样对我……',
          ]);
        }
        break;
      case 3:
        if (love < 75) {
          await tachyon.say_and_wait(
            '好痛……好可怕……对不起……是我不好……是我不好……不要再弄了……好痛，好痛……',
          );
        } else {
          await tachyon.say_and_wait([
            '好痛……',
            callname,
            '……为什么……为什么要这样对我……我不理解……',
          ]);
          await tachyon.say_and_wait(
            '这就是爱吗？为什么要这样对待自己的爱人……我不懂啊……',
          );
        }
    }
  },
  /**
   * 获得羞耻刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   */
  async mark_shame(tachyon, callname, level) {
    switch (level) {
      case 1:
        await tachyon.say_and_wait('这种事……也太让人害羞了', true);
        await tachyon.say_and_wait(
          '平常心……平常心……当成实验就好，嗯，实验',
          true,
        );
        break;
      case 2:
        await tachyon.say_and_wait('不行了……已经无法用实验来蒙混过去了', true);
        await tachyon.say_and_wait(
          '即便是我，也是社会的一部分啊……也是会因为这种事而感到羞耻啊',
          true,
        );
        await tachyon.say_and_wait(
          '咕……但是……为什么会感到舒服啊……我的身体到底怎么了……',
          true,
        );
        break;
      case 3:
        await tachyon.say_and_wait('哈哈……啊哈哈……', true);
        await tachyon.say_and_wait(
          '就算身为疯狂科学家，没有在乎过他人的看法……我也从来没想过居然有一天自己会变成这样',
          true,
        );
        await tachyon.say_and_wait(
          '来吧，怎样都好了……已经，放弃思考了……',
          true,
        );
    }
  },
  /**
   * 获得反抗刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} level 欢愉刻印等级
   * @param {number} love 爱慕值
   */
  async mark_hate(tachyon, you, callname, level, love) {
    switch (level) {
      case 1:
        if (love < 50) {
          await tachyon.say_and_wait('………我的忍耐是有极限的。');
          await tachyon.say_and_wait(['不要挑战我的极限，', callname, '。']);
        } else {
          await tachyon.say_and_wait([callname, '……？']);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 愣着神，就仿佛被自己最亲密信赖的人甩了一巴掌一般。',
          ]);
          await era.printAndWait('比起愤怒，更多的是错愕和不敢置信。');
        }
        break;
      case 2:
        if (love < 50) {
          await tachyon.say_and_wait('我警告过你了。');
          await tachyon.say_and_wait('事不过三。');
        } else {
          await tachyon.say_and_wait([
            '为什么……',
            callname,
            '……是我哪里做错了吗？',
          ]);
          await tachyon.say_and_wait([
            '是我做错了吧……告诉我，',
            callname,
            '……',
          ]);
          await tachyon.say_and_wait(
            '不然的话……不然的话……我无法理解啊……为什么你要做出这种事来！',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 万番悲痛的看着 ',
            you.get_colored_name(),
            '，心中满是不解和怀疑。',
          ]);
          await era.printAndWait([
            '对 ',
            you.get_colored_name(),
            ' 的不解，对自己的怀疑。',
          ]);
        }
        break;
      case 3:
        if (love < 50) {
          await era.printAndWait([
            '瞬间，一股灼烧感通过 ',
            you.get_colored_name(),
            ' 的喉咙逆流而出。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 忍不住咳了几声，并惊恐的发现地上的液体带有几缕血丝。',
          ]);
          await tachyon.say_and_wait(['这是第三次了，', callname, '。']);
          await tachyon.say_and_wait(
            '你应该感谢……你自己在名义上是我的实验动物。',
          );
          await tachyon.say_and_wait(
            '而我的主张是不会浪费可利用的实验体，所以感谢你自己还有那么点利用价值吧……平常心……当成实验就好，嗯，实验。',
          );
          await tachyon.say_and_wait(
            '不过……我能保证就算当实验品，也绝对能让你生不如死。',
          );
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 的眼中带着厌恶及憎恶的情绪。',
          ]);
        } else {
          await tachyon.say_and_wait('啊啊……够了。');
          await tachyon.say_and_wait('已经够了。');
          await era.printAndWait('红色的百叶窗，彻底关上。');
        }
    }
  },
};
