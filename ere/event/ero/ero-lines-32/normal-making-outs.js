const era = require('#/era-electron');

const {
  check_erect,
  check_lubrication,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common-lines/normal/making-outs-final');

const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (defender.id !== 32 || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    await defender.say_and_wait('就这么喜欢胸部吗……❤️');
    era.println();
    await attacker.print_and_wait('眼前熟透的果实，随着双手的动作来回摇晃着。');
    await attacker.print_and_wait('软嫩的乳肉在灵巧的双手下变换出各种模样。');
    era.println();
    await defender.say_and_wait('啊……不要那样把头……');
    era.println();
    await attacker.print_and_wait('将头埋进胸间的山谷，深吸口气。');
    await attacker.print_and_wait('少女的芳香，以及马娘的发情臭混合在一起……');
    await attacker.print_and_wait('已经熟成的果实，可以准备开始品尝了。');
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        '手指插入的瞬间，爱液便仿佛找到了宣泄口一般从穴口涓涓流出。',
      );
      era.println();
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 真是好色啊。',
      ]);
      await attacker.say_and_wait('这里都这么湿了。');
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……那种事，不说出来也可以的吧……',
      ]);
    } else {
      await defender.say_and_wait('嗯……❤️');
      era.println();
      await attacker.print_and_wait(
        '手指仿佛放入了一片泥沼之中，湿润的沃土正等待开发。',
      );
      era.println();
      await defender.say_and_wait([
        '快点……快来嘛，',
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait('晶莹的爱液不断从密缝中滴落。');
      await attacker.print_and_wait([
        '屁股也不停的摇晃着，诱惑着 ',
        attacker.get_colored_name(),
        ' 对自己出手。',
      ]);
      await attacker.print_and_wait('看来已经完全做好交尾的准备了。');
    }
  }

  async prepare_virgin(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    if (era.get('mark:32:同心') <= 1) {
      await defender.say_and_wait('……过分……');
      era.println();
      await attacker.print_and_wait([
        '虽然羞红着脸，但没有拒绝就能看出 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的口是心非了吧？',
      ]);
      await attacker.print_and_wait('但是，只是这样也不太好玩……');
      await attacker.print_and_wait('要不，说些恳求的话吧？');
      era.println();
      await defender.say_and_wait('真是恶趣味的玩法啊……');
      await defender.say_and_wait([
        '请……为了让 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 专属的淫穴，能够为 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 服务……',
      ]);
      await defender.say_and_wait('尽情玩弄……我的骚穴吧❤️');
      era.println();
      await attacker.print_and_wait('明明是因为自己的要求才说出口……');
      await attacker.print_and_wait([
        '但看 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的反应，似乎也因为这样的淫语而兴奋起来了……',
      ]);
    } else {
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait('挂满了此时还在不断滴落的淫液。');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 张开了自己下体娇嫩的小嘴。',
      ]);
      await attacker.print_and_wait('等待着期待已久的某物进入……');
    }
  }

  async pet_anal(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.pet_anal(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '抹了抹 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 发情的穴汁作为润滑后，将手按在了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的屁穴前。',
    ]);
    if (era.get('abl:32:肛门耐性') >= 3) {
      await attacker.print_and_wait(
        '明明应该是出口的地方，却因按压自然的微微张开。',
      );
      await attacker.print_and_wait('屁股也不自觉的跟着按压的节奏摇晃起来。');
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '❤️那里不行❤️',
      ]);
      era.println();
      await attacker.print_and_wait(
        '明明是拒绝的话，但声音里传达出的却完全是继续的含义。',
      );
      await attacker.print_and_wait(
        '但不再更进一步，只是吊胃口般的继续轻轻按压着……',
      );
    } else {
      era.println();
      await defender.say_and_wait('等等！那个地方！');
      era.println();
      await attacker.print_and_wait([
        '装作没听到的轻轻用手指按压着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的屁穴。',
      ]);
      await attacker.print_and_wait('紧闭的入口不适应的发着抖。');
      await attacker.print_and_wait(
        '不过这样的青涩感，调教起来才更有价值不是吗？',
      );
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    if (era.get('abl:32:肛门耐性') >= 3) {
      await defender.say_and_wait('快点……快点惩罚这个下流发骚的淫荡屁穴吧❤️');
      era.println();
      await attacker.print_and_wait([
        '卖力将菊穴掰开的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，渴望的喊出淫荡的话语，迫不及待的恳求着肉棒的插入',
      ]);
      era.println();
      await defender.say_and_wait([
        '被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 开发的……随 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 喜好随意使用的屁穴……快点，快点插进来❤️',
      ]);
      await defender.say_and_wait([
        '用 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的大肉棒狠狠的……抽插❤️',
      ]);
      await defender.say_and_wait([
        '让我变成……只用屁穴就能不断高潮的淫乱',
        defender.get_uma_sex_title(),
        '❤️',
      ]);
      era.println();
      await attacker.print_and_wait([
        '好整以暇地看着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 发狂般不断渴求的模样，那颤抖的菊穴皱折，时不时还吹口气来看看 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 全身颤抖的反应。',
      ]);
      await attacker.print_and_wait([
        '一向强势的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 像这样恳求自己，那可是难得一见的事。',
      ]);
      await attacker.print_and_wait(
        '尤其恳求的还是这种只为了取乐，没有任何生育意义的行为。',
      );
      await attacker.print_and_wait([
        '不过，要小心别让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 真的发怒了……但果然还是再稍微享受一下吧……',
      ]);
    } else {
      await defender.say_and_wait([
        '……真的要这样吗，',
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await defender.say_and_wait('这个地方……插不进去的吧……绝对……');
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 听话的用手按住臀瓣，将屁穴完全张开。',
      ]);
      await attacker.print_and_wait('但脸上依旧可以看见恐惧的神情。');
      await attacker.print_and_wait(
        '也是，要是有人忽然说要将自己的排泄口当成性器官来用，那不管是谁肯定都会感到恐惧的吧。',
      );
      await attacker.print_and_wait('但是……');
      era.println();
      await attacker.print_and_wait('会很舒服的，放心吧。');
      await attacker.print_and_wait([
        '拍了拍 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的屁股做保证。',
      ]);
      await attacker.print_and_wait(
        '菊穴的皱折颤抖了一下，仿佛在回应自己的话语一般。',
      );
    }
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    await defender.say_and_wait('真是……拿你没办法啊……');
    await defender.say_and_wait('来吧……就像，要在我的嘴里留下你的印记一样……');
    await defender.say_and_wait(
      '尽情的，让我的食道，胃囊，全部都被你的因子所沾满❤️',
    );
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait([
      '看着自己认可的 ',
      attacker.get_phy_sex_title(),
      '，散发出了令自己发狂的气味。',
    ]);
    await defender.print_and_wait('提出了令自己发狂的请求。');
    era.println();
    await defender.say_and_wait('嗯……啊❤️');
    era.println();
    await defender.print_and_wait(
      '仿佛要将「只有我才能让你这么舒服」这一观念烙印在对方的脑海中一般……',
    );
    await defender.print_and_wait('不时含住唾液，发出淫糜的水声，卖力的吸吮。');
    await defender.print_and_wait(
      '不时深深吞入喉咙，享受着对方充满雄性气息的毛发搔弄自己鼻腔的感觉，享受生死大权被对方掌握的感觉。',
    );
    await defender.print_and_wait([
      '对 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的渴求，以及想要做出如此下贱行为的冲动————除此之外，自己那聪明的小脑袋再也塞不进其他任何东西了……',
    ]);
  }

  async force_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.force_blow_job(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '怎么？',
      sys_get_colored_callname(defender.id, attacker.id),
      '，不进来吗？',
    ]);
    await defender.say_and_wait('难道说，是害怕时间太短会被嘲笑？');
    await defender.say_and_wait(
      '没事，这种属于个体差异的问题我也能理……呜……嗯噗……噗啾……',
    );
    era.println();
    await attacker.print_and_wait([
      '受不了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的挑衅。',
    ]);
    await attacker.print_and_wait([
      '瞄准了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 聒噪的口穴，强行将肉棒塞入。',
    ]);
    await attacker.print_and_wait('粗暴的在湿润柔滑的口腔里不停前后戳插。');
    await attacker.print_and_wait('这张嘴……用来说话果然还是太可惜了啊……');
    await attacker.print_and_wait('还是肉穴更符合其价值。');
    if (
      era.get('talent:32:喜欢责骂') > 0 ||
      era.get('talent:32:喜欢痛苦') > 0
    ) {
      era.println();
      await attacker.print_and_wait('嗯？');
      await attacker.print_and_wait('不知不觉，除了自己任意抽插口穴的感受外。');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的嘴也开始配合动作，主动吸吮着给予快感。',
      ]);
      era.println();
      await defender.say_and_wait('再来……再多侵犯……我下贱的嘴穴……', true);
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 露出了恍惚的神情……',
      ]);
    }
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '明明是强硬的行为，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 却也主动配合的吸吮着。',
    ]);
    await attacker.print_and_wait('用舌头缠住了肉棒将其引导至喉咙深处。');
    await attacker.print_and_wait('脸上恍惚的表情一再刺激着施虐的欲望……');
  }

  async blow_job(attacker, defender, hook) {
    if (attacker.id !== 32) {
      return await super.blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait('肉棒噗嚕一下弹起。');
      await defender.print_and_wait([
        '从马眼里渗出的精臭味刺激着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的鼻腔。',
      ]);
      era.println();
      await attacker.say_and_wait('呵呵，弹了一下呢');
      await attacker.say_and_wait('豚鼠君……就这么期待我的嘴穴吗？');
      era.println();
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 仰视着 ',
        defender.get_colored_name(),
        ' 的脸庞，表情妩媚地说道。',
      ]);
      await defender.print_and_wait(
        '那百叶窗一般的狂气双眼，如今散发着魅惑的色气。',
      );
    } else if (
      era.get('tcvar:0:接近高潮') instanceof Array &&
      era.get('tcvar:0:接近高潮').indexOf(part_enum.penis) !== -1
    ) {
      await defender.print_and_wait(
        '凭借着舌头上的触感，感受到加快摆腰的速度。',
      );
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 加快了速度，脸庞反覆吞吐着肉杆，被肉棒顶起的脸颊给予龟头尖端更深一层的快感。',
      ]);
      await defender.print_and_wait('抽插与吸吮的双重快感使自己陷入极乐……');
      era.println();
      await attacker.say_and_wait('嗯……嗯啾……嗯啵……');
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的……通通……',
      ]);
    } else {
      await defender.print_and_wait(
        '娇小的口穴中，湿润柔滑的舌头不停在龟头上流转，给予集中的刺激快感。',
      );
      await defender.print_and_wait([
        '不停摆动着腰，让肉棒能够更深入感受到 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 给予的无上快感。',
      ]);
    }
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await defender.say_and_wait('真是……');
    await defender.say_and_wait('反正肯定是想射在我的脸上吧❤️');
    await defender.say_and_wait('可以哦……让我的脸，被豚鼠君臭臭的精液覆盖……');
    await defender.say_and_wait('好浓的味道❤️');
    await defender.say_and_wait('尽情的，射在我的身上吧❤️');
    if (era.get('tcvar:32:喜欢责骂') || era.get('tcvar:32:喜欢痛苦')) {
      await defender.say_and_wait('把我当成抹布一样，随意的擦拭也没关系❤️');
    }
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== 32 || !hook.arg) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    await defender.say_and_wait('真搞不懂，这种脂肪块到底有什么好……');
    await defender.say_and_wait('可以哦，来吧❤️');
    era.println();
    await attacker.print_and_wait([
      '被乳肉包裹住的肉棒，在 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 揉弄乳肉造成的摩擦下，逐渐变得更为硬挺。',
    ]);
    await attacker.print_and_wait('但只是这样……还不够……');
    era.println();
    await attacker.print_and_wait([
      '用双手抓住了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的乳房，用双手推挤着乳肉来夹紧肉茎。',
    ]);
    await attacker.print_and_wait([
      '彻底的将眼前的负责',
      defender.get_uma_sex_title(),
      '当成了性处理用具来使用……',
    ]);
  }

  async fuck_tit(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.fuck_tit(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait('啊，等……');
      era.println();
      await attacker.say_and_wait([
        '没理会 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的请求，对着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 挺拔的乳肉开始了猛烈的抽插。',
      ]);
      await attacker.print_and_wait([
        '过程中 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 仿佛完全化为了自己的性欲宣泄口一般，顺从地服从着。',
      ]);
      await attacker.print_and_wait([
        '将自己的负责',
        defender.get_uma_sex_title(),
        '当成工具使用的感觉使自己兴奋的不住颤抖……',
      ]);
    } else {
      await defender.say_and_wait('唔嗯……❤️');
      era.println();
      await attacker.print_and_wait(
        '先是把整个乳房托起摩擦挤压，然后噗呦一声让其恢复自然位置。',
      );
      await attacker.print_and_wait('接着是不管不顾，堪称暴力的抽插……');
    }
  }

  async tit_job(attacker, defender, hook) {
    if (attacker.id !== 32 || !hook.arg) {
      return await super.tit_job(attacker, defender, hook);
    }
    if (check_erect(0)) {
      await defender.print_and_wait([
        '用 ',
        attacker.get_colored_name(),
        ' 的乳肉将硬到生疼的肉棒包裹。',
      ]);
    }
    await defender.print_and_wait([
      attacker.get_colored_name(),
      ' 用手捧住自己的双乳。',
    ]);
    await defender.print_and_wait('乳穴大幅度的包裹搅弄着肉棒的茎身。');
    await defender.print_and_wait('溢出的先走汁润滑了乳穴的动作。');
    era.println();
    await attacker.say_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '……舒服吗？❤️',
    ]);
    era.println();
    await defender.print_and_wait('有什么回答的必要吗？');
    await defender.print_and_wait('不如说，还有比这更舒服的事吗？');
  }

  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 32 || !hook.arg) {
      return await super.tit_and_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 稍稍向上顶出，原本只是露出了个头的肉棒尖端瞬间抵在了自己的脖子。',
    ]);
    await attacker.print_and_wait(
      '从铃口滴落的先走汁，在肉棒不断的戳弄下沾满了自己的下巴到颈部，顺着滑落到胸前的乳穴，增添了几分润滑。',
    );
    await attacker.print_and_wait(
      '肉棒与乳房的淫荡摩擦声，混合着乳肉被击打的声响。',
    );
    await attacker.print_and_wait('渐渐室内的精臭也变得浓郁起来。');
    era.println();
    await attacker.say_and_wait('啾……啾啾……');
    era.println();
    await attacker.print_and_wait('口干……舌燥……');
    await attacker.print_and_wait('这么多的汁液，要是流下去的话……也太浪费了……');
    await attacker.print_and_wait('所以，亲吻含住也是理所当然的吧……');
    await attacker.print_and_wait(
      '随着龟头被唾液浸润，乳房动作也变得更加顺滑……',
    );
  }

  async ask_non_penetrative(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.ask_non_penetrative(attacker, defender, hook);
    }
    await defender.say_and_wait('呵呵，像猴子一样……');
    await defender.say_and_wait(
      '不，像这样只会不停扭腰的……不如说像小狗一样吧❤️',
    );
  }

  async non_penetrative(attacker, defender, hook) {
    return super.non_penetrative(defender, attacker, hook);
  }

  async self_finger_fuck(attacker, defender, hook) {
    if (defender.sex_code === 0) {
      return await super.self_finger_fuck(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.say_and_wait([
        '看吧……',
        sys_get_colored_callname(attacker.id, defender.id),
        '……',
      ]);
      await attacker.say_and_wait('我的小穴看起来怎么样❤️');
      era.println();
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 灵巧的手指来回玩弄着自己的小穴，为自己带来快感。',
      ]);
      await defender.print_and_wait(
        '双腿向两旁岔开，手指仿佛在勾引一般朝着穴内越进越深。',
      );
      await defender.print_and_wait([
        attacker.sex,
        '的指尖在光线下泛起光泽，从小穴内牵出一条淫媚的丝线。',
      ]);
      if (check_lubrication(32, part_enum.virgin) && defender.sex_code > 0) {
        era.println();
        await attacker.say_and_wait('已经准备好了……不插进来吗❤️');
        era.println();
        await defender.print_and_wait(
          '被爱液彻底浸透的下体，已经随时处于能够做爱的状态了……',
        );
      }
    } else {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '……❤️',
      ]);
      await attacker.say_and_wait('快点……插进来❤️');
      era.println();
      await defender.print_and_wait('速子主动掰开了臀瓣。');
      await defender.print_and_wait(
        '已经湿透的小穴和微微张吐着的屁穴被身前的雌性以近似臣服的姿态送上。',
      );
      await defender.print_and_wait('精神与肉体上的双重享受使肉棒更加硬朗。');
      if (check_lubrication(32, part_enum.virgin)) {
        era.println();
        await defender.print_and_wait('咕啵……');
        await defender.print_and_wait(
          '小穴发出濡湿的声音，被两根手指不断的撑开闭合。',
        );
        await defender.print_and_wait('色情的汁液从被张开的穴肉中缓缓流出……');
      }
    }
  }
};
