const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalFucking = require('#/event/ero/common/normal/fucking');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function common_continue_fucking_kitaru(attacker, defender) {
  if (era.get(`tcvar:${defender.id}:接近高潮`)) {
    await defender.say_and_wait('哈❤️啊啊～');
    await defender.print_and_wait([
      defender.get_colored_name(),
      ' 的身体破廉耻的在 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
    ]);
    await defender.print_and_wait(
      '以往元气十足的脸上此时只剩下被情欲完全支配的阿嘿颜，粉唇也大张成惊人的O型，支离破碎的表白不停地从口中流出。',
    );
    if (era.get('love:56') > 75) {
      await defender.say_and_wait([
        '喜欢 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '……最喜欢 ',
        attacker.get_colored_actual_name(),
        '❤️',
      ]);
    } else {
      await defender.say_and_wait(['肉棒……喜欢……坏，要坏掉了❤️']);
    }
    await defender.print_and_wait([
      '可能对白兴大人还是有一些羞愧吧，但这份羞愧很快就被当成燃料，用来鼓动着身体用更加下流的扭动去迎合肉棒。',
    ]);
    await defender.say_and_wait(
      [
        '变得更粗鲁了呢，',
        sys_get_colored_callname(defender.id, attacker.id),
        '。',
      ],
      true,
    );

    await defender.say_and_wait(
      '还有那能让身为兼具占卜师和巫女这二重神秘身份的自己堕落成发情母马的，如涌泉般层层叠叠的快感。',
      true,
    );
    await defender.say_and_wait(
      '不……或许简单的预言什么的，大概还是能做到吧？像是自己很快就要高潮的事实。',
      true,
    );
    await defender.say_and_wait('去了……快要……去了……');
    await defender.say_and_wait('唔呃嗯嗯嗯嗯嗯❤️❤️❤️……');
  } else {
    await defender.print_and_wait([
      '大概是带着些抖M要素的自己早就期望着被训练员这样支配吧？',
    ]);
    await defender.say_and_wait(['啊哈……❤️哈呼哈……']);
    await defender.print_and_wait([
      '收紧的穴肉则又被无情的撑开，接踵而来的快感已经让平时能记住复杂祷词的脑袋一片空白了。',
    ]);
    await defender.say_and_wait(['哈……哈……哈❤️']);
    await defender.print_and_wait([
      '巫女圣洁的俏脸在肉棒大人的进攻下又露出了谄媚的笑容。',
    ]);
    await defender.say_and_wait(['肉棒……大人？'], true);
    await defender.say_and_wait(['这么叫……白兴大人一定会怪罪的吧？'], true);
    await defender.print_and_wait([
      '但发情栗毛马娘巫女散发着下流气味的湿漉漉发热身体还是诚实的往 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 那靠的更近了一点，',
    ]);
    await defender.say_and_wait(['就算，被当成飞机杯使用也没关系的……']);
    await defender.print_and_wait([
      '破廉耻的说出了这样的话语，毕竟，比起不知道什么时候会降下来的神罚，果然还是现在能让自己晕乎乎的快感更重要一点。',
    ]);
  }
}

module.exports = class extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.missionary(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait('唔……可以的。');
      await attacker.print_and_wait([
        '两手环在了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的背后，像是不想让自己的通红脸颊被看到似的把头靠在了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肩膀上。',
      ]);
      await attacker.print_and_wait([
        '肉棒伴着淫靡的水声插入了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的小穴，于是她环抱在背后的双手便下意识的缩紧，连带着让那对匀称的双腿也在你背后猛地绷直，让肉棒径直捅入更深的地方。',
      ]);
      await defender.say_and_wait('呜呜！好烫……❤️');
      await attacker.print_and_wait([
        '就算对面把头侧着也没用，只是听着耳侧 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 漏出的可爱喘息声，一只因为滚烫肉棒的陡然快感而双眼翻白的栗毛马娘形象便清晰的浮现在脑海中。',
      ]);
      await defender.say_and_wait('……哈嗯❤️');
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['……这样趴着吗？']);
      await defender.print_and_wait([
        '按 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的指示如幼犬般趴在地面。',
      ]);
      await defender.print_and_wait([
        '唔……明明自己没有特意训练过，但就像是得到了莫名的神启一样，知道要把自己的圆润屁股抬到一个合适的高度，顺带懂事的让湿漉漉的马尾甩在一旁，露出下面的饥渴小穴。',
      ]);
      await defender.print_and_wait([
        '看不到……',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的脸',
      ]);
      await defender.print_and_wait(['但是……咕……兴奋起来了。']);
      await defender.say_and_wait('呃啊……');
      await defender.print_and_wait([
        '肉棒长驱直入，下身的肿胀和满足感被神经忠实的传递给大脑，让自己的嘴角勾起了幸福而痴痴的笑容。',
      ]);
      await defender.print_and_wait(['完，完全和小狗一样了呢。']);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async sitting(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '能感受到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的臀肉压在自己大腿上的，棉花糖般的触感。',
      ]);
      await attacker.print_and_wait([
        '胸前那两对白兔也随着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 抽插的动作一跳一跳的，硬邦邦的乳尖也是。',
      ]);
      await attacker.print_and_wait([
        '不止于此，这种体位的好处还可以清楚的看见，那对星星眼是如何慢慢变成爱心的。',
      ]);
      await defender.say_and_wait([
        '咕哈……',
        sys_get_colored_callname(defender.id, attacker.id),
        ' ❤️',
      ]);
      await attacker.print_and_wait([
        '小腹被肉棒顶出明显轮廓的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，露出了一个有些呆呆的可爱表情。',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async hug_sitting(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.hug_sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '配合着缓缓沉下身体，龟头充血着挺入了肉臀间，将臀肉尽数紧抵再推开……',
      ]);
      await defender.say_and_wait(['哈❤️啊啊～']);
      await defender.print_and_wait([
        '肉棒没有通知自己就直接顶了上来, 发情的濡湿小穴一下子像是要被顶穿般。',
      ]);
      await defender.say_and_wait('咕……呜❤️……哈啊……哈啊……❤️');
      await defender.print_and_wait([
        '自暴自弃般的将头靠在身后 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的胸膛上, 迎合着身后人的挺腰的动作。',
      ]);
      await defender.print_and_wait([
        '不过，这个姿势倒是不用担心自己露出的糟糕表情被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 看见什么的……',
      ]);
      await defender.print_and_wait([
        '但是自口中漏出的淫荡声音，因快感而绷直的马耳朵，还有缠在训练员腰上的懂事尾巴。',
      ]);
      await defender.print_and_wait([
        '就算身后那家伙再愚钝，也能猜到自己现在成了怎样糟糕的情况吧。',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async standing(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.standing(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '握着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 右脚的脚踝，把她的腿抬了起来，少女顿时摇摇欲坠，带着胸前的那对沉甸甸也一晃一晃的。',
      ]);
      await defender.say_and_wait(['唔哇……要在这个姿势下做吗？']);
      await attacker.print_and_wait([
        '凭借神乐时的训练，勉勉强强用单脚保持平衡的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 看着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 挺立起来的胯下之物。',
      ]);
      await defender.print_and_wait(['等一下……等下啊呃❤️！']);
      await attacker.print_and_wait([
        '马娘的柔韧性让 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 轻松地将那匀称的大腿压到了小穴旁，而后肉棒咕啾咕啾的插入了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的泥泞小穴。',
      ]);
      await attacker.print_and_wait([
        '随着淫靡又轻块的啪嗒水声响起，',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 开始训练起 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 有关单脚平衡的舞蹈技巧来。',
      ]);
    } else if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait(['哈～嗯哈～❤️']);
      await attacker.print_and_wait([
        '双眼失焦的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 环住了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的脖子，两只栗色的耳朵在头皮上卷紧，连那条搭在臂弯上的腿也打着颤。',
      ]);
      await attacker.print_and_wait([
        '这种体位得以让肉棒更好的捅入深处，小穴如求饶般亲吻着肉棒，每次抽送时，把头靠在肩膀上的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 就会随着节奏在耳边吐出软糯的呻吟。',
      ]);
      await defender.say_and_wait('太……快了❤命定之人……这样也太快了❤');
      await attacker.print_and_wait([
        '露出了有些惊慌表情的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 反倒是勾起了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的施虐欲，托着臀部让正不断求饶的马娘微微离地，而后又一次挺腰，破开最深层缠绕封锁的层叠膣肉，顶到巫女神圣的子宫颈上，摩擦，旋转。',
      ]);
      await defender.say_and_wait('去了～要去了～❤️');
    } else {
      await attacker.print_and_wait([
        '得益于那份身高差的缘故，被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 架着腿抽插的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，脚尖只能勉强的碰到地面。',
      ]);
      await defender.say_and_wait(['抱，抱紧我❤️。']);
      await attacker.print_and_wait([
        '在请求下搂紧了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的腰，奋力的抽送着，一突入到最深处、',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 就会因为腹底传来的冲击而娇媚的呻吟起来',
      ]);
      await defender.say_and_wait('嗯啊……哈啊啊啊……');
      await attacker.print_and_wait([
        '平日里充满元气的俏脸，此刻正布满着淫态。',
      ]);
      await attacker.print_and_wait([
        '架在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 臂弯上的腿止不住的颤抖着，黏腻的爱液不断地自交合处流下。',
      ]);
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.hug_standing(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '被摆成了这样困难的姿势, ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的下一步会怎么做呢？',
      ]);
      await defender.print_and_wait([
        '敏感的耳尖？翘起的臀瓣？又或是那对自己都认为下流的乳房？还是说……',
      ]);
      await defender.print_and_wait([
        '在下一秒双腿发软的自己就可能摔倒的现在，完全占卜不出来身后命定之人的行动呀……',
      ]);
      await defender.say_and_wait(['咿咿咿——呀❤️！']);
      await defender.print_and_wait([
        '来自 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的炽热肉棒噗嗤噗嗤地连根肏进了自己的小穴。',
      ]);
      await defender.print_and_wait([
        '连求饶都说不出口，早已认清现状的身体本能的弯曲腰部，让臀部进一步向 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的方向靠拢。',
      ]);
    } else if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait(['咿咿咿——呀❤️！']);
      await attacker.print_and_wait([
        '握着自己担当的双臂，不停耸动着腰，每次抽送，那摇晃的腰胯与那如同两颗蜜桃一般的臀肉就激烈撞在一起。',
      ]);
      await attacker.print_and_wait([
        '能跑出出色末脚的肉腿也站不稳般的痉挛着，带着十只软嫩的足趾也蜷曲起来，肉棒抽离时，爱液就会在那激烈交合之间拉出下流的银丝。',
      ]);
      await defender.say_and_wait('咕……唔哈……❤️');
      await attacker.print_and_wait([
        '可惜……看不见 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的脸，不过，光是听着口中漏出的声音，就能得知这家伙离高潮只差一步之遥的事实。',
      ]);
    } else {
      await defender.print_and_wait([
        '好……好深、身体里……',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的感觉……好棒',
      ]);
      await defender.print_and_wait([
        '微微蜷起的马耳中不断传来湿粘液体在腰胯与腿臀的缓慢撞击中沥沥淅淅的声音。',
      ]);
      await defender.print_and_wait([
        '被蹂躏的小腹中传来了令自己安心的充实感。',
      ]);
      await defender.print_and_wait(['稍稍快点也可以的……']);
      await defender.print_and_wait(['于是缠在命定之人腰上的尾巴便微微使劲。']);
      await defender.say_and_wait('唔诶？！！❤️哦哦……！❤️');
      await defender.print_and_wait([
        '快感如决堤般涌入大脑，就算想要喊着停下来也做不到，自食其果的自己只能靠在身后人的怀中被激烈的抽插着。',
      ]);
    }
  }

  async suspended_congress(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.suspended_congress(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['唔呀！']);
      await attacker.print_and_wait([
        '面前还沉浸在幻想中的酥麻身体被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 一下子抱了起来，突然的失衡让她向前搂住了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的躯干，肉感的亮晶晶双腿也顺势锁在了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的腰侧。',
      ]);
      await defender.say_and_wait(['呃哦哦哦❤️！']);
      await attacker.print_and_wait([
        '借着重力甩动自己担当的肉体，让硬邦邦的肉棒一口气齐根没入湿漉漉的肉穴，肉棒狠狠的撞击在了子宫口，沟壑和肉棒紧密的贴合在了一起，在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身下显出浅浅的隆起。',
      ]);
      await attacker.print_and_wait([
        '每当肉棒要抽离时，锁在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 腰侧的双腿也会挽留般的微微伸直，再伴随之后猛烈的插入变回原来的环绕。',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async hug_suspended_congress(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.hug_suspended_congress(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 掰开托起的双腿，还有以极为别扭的姿势环住他脖颈的双手。',
      ]);
      await defender.print_and_wait([
        '这种……像是给小孩把尿，还有可能下一秒就因为重心不稳而摔在地上的羞耻姿势……',
      ]);
      await defender.say_and_wait(['咕啾——❤️']);
      await defender.print_and_wait([
        '在肉棒插入的瞬间，自己便像是要飞出去一样，不受控制的弓起身子，可又因为重力，摇摇晃晃的落回了，以 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肉棒为支点的悬空椅子上.',
      ]);
      await defender.print_and_wait(['哈❤️……哈❤️这样的话。']);
      await defender.print_and_wait([
        '看不清 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的表情，但在失重和快感双重作用下的身体，已经将那个厉害肉棒的形状记得清清楚楚了。',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.virgin,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait(['要我自己来吗？']);
      await defender.say_and_wait(['唔……']);
      await defender.print_and_wait([
        '只是望着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 向上挑起的雄壮之物，自己便羞红了脸, 呼吸也变得急促了起来。',
      ]);
      await defender.print_and_wait(['一想到自己一会儿会骑在这上面……']);
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '？',
      ]);
      await defender.say_and_wait(['滋——唔？']);
      await defender.print_and_wait([
        '被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 催促之后才发现自己的嘴角流出了涎水。',
      ]);
      await defender.print_and_wait(['没想到自己会这么淫乱啊。']);
      await defender.print_and_wait([
        '一刻也不想等待，发颤的腰部便「咚」的落了下来，微笑地俯视着身下的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '，心领神会地用腰部做起祭礼的动作，让黏糊糊的穴肉带领着肉棒把小穴探了个遍。',
      ]);
      await defender.print_and_wait([
        '顺带着让自己好学的小穴又一次彻底地温习了一遍肉棒的形状。',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_stimulate_glans_by_virgin(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_stimulate_glans_by_virgin(
        attacker,
        defender,
        hook,
      );
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          hook.hook === ero_hooks.ask_stimulate_glans_by_virgin
            ? part_enum.virgin
            : part_enum.anal,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        '明明插在自己体内的肉棒还是那样硬邦邦的……',
      ]);
      await defender.print_and_wait([
        '但 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 却坏笑着的停了下来，拍了拍我的大腿。',
      ]);
      await defender.print_and_wait(['呜，训练员先生就这么喜欢欺负我吗？']);
      await defender.print_and_wait([
        '赌气拔出来……让呆在自己体内的坏家伙好好冷静一下什么的？',
      ]);
      await attacker.say_and_wait(['咕叽咕叽～']);
      await defender.print_and_wait([
        '腰部……自己的腰部怎么已经晃起来了？哈……哈啊……',
      ]);
      await defender.print_and_wait(['想要……']);
      await defender.print_and_wait([
        '赶紧催促着自己浑身发软的肌肉活动起来，命令它们配合自己侍奉起 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肉棒，毕竟，堵气拔出来什么的，可是绝对绝对的大凶啊！',
      ]);

      if (era.get(`cflag:${defender.id}:种族`)) {
        await defender.print_and_wait(
          '白花花的屁股在湿漉漉马尾巴的伴奏下翩翩起舞。',
        );
      }
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_stimulate_glans_by_anal(attacker, defender, hook) {
    return await this.ask_stimulate_glans_by_virgin(attacker, defender, hook);
  }

  async stimulate_g_spot(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.stimulate_g_spot(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '继续挺腰，让胯下的肉棒向蜜穴的更深处碾去，每当龟头掠过了一处略显粗糙的软肉之后，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 就支支吾吾地颤抖起来。',
      ]);
      await defender.say_and_wait(['咕啊❤️～啊啊']);
      await attacker.print_and_wait([
        '在马娘体内横冲的肉棒妖怪就这样发现了名叫 ',
        defender.get_colored_name(),
        ' 的巫女弱点',
      ]);
      await defender.say_and_wait(['噫啊啊啊❤️～']);
      await attacker.print_and_wait([
        '痉挛不止的，被淫水弄的亮晶晶的丰腴双腿，因快感而绷直的马尾与双耳，连眸中的星星眼也被冒着粉光的爱心所顶掉。',
      ]);
      await attacker.print_and_wait([
        '不言自明，面前算得上是现人神的家伙，现在已经堕落成了一只留着口水的发情母马。',
      ]);
      await attacker.print_and_wait([
        '每当肉棒撞到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的酥软子宫，半吐着香舌的她便会配合自己动作般的翘起臀部，放声娇吟起来。',
      ]);
    } else {
      await common_continue_fucking_kitaru(attacker, defender);
    }
  }

  async ask_fuck(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_fuck(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_fuck ? part_enum.virgin : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait(['想……']);
      await attacker.say_and_wait(['欸！']);
      await attacker.print_and_wait([
        '立即捂住了嘴，几乎自己都不敢相信身为神社巫女的自己能说出这样的话，简直……简直像是被不知道什么东西夺舍了一样。',
      ]);
      await attacker.print_and_wait([
        '回过神来，自己丰腴柔软的双腿已经自觉地分了开来，黏腻的穴瓣间拉起了浓厚的银线，入口处还正寂寞地一张一合。',
      ]);
      await attacker.print_and_wait([
        '唔……真是色情呢，自己的身体，但是，有着厉害肉棒的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 能理解的吧……',
      ]);
      await attacker.say_and_wait(['插进来吧……']);
      await attacker.print_and_wait([
        '用右手的食指和中指稍稍用力把反射着晶莹光辉的阴唇分开，将内部正叫渴的粉嫩穴肉向 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 展示出来，补上了名为祈求插入这一动作的最后一块碎片。',
      ]);
      await attacker.say_and_wait(['为了今日份的大吉……请插进来吧。']);
    } else {
      await common_continue_fucking_kitaru(defender, attacker);
    }
  }

  async cowgirl(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '双手放在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的胸膛上，居高临下的盯着他的脸。',
      ]);
      await attacker.print_and_wait(['有种自己占上风的感觉呢。']);
      await attacker.print_and_wait([
        '那么，接下来该怎么让身下这个总是喜欢欺负自己的家伙乖乖求饶呢？',
      ]);
      await attacker.print_and_wait(['左右？上下？还是转圈似的扭腰？或者……']);
      await attacker.say_and_wait(['咿呀！～❤️']);
      await attacker.print_and_wait([
        '趁着别人思考的时候突然动起来什么的，太犯规了呀！',
      ]);
      await attacker.print_and_wait([
        '不要动！呃❤️！明明……❤️咿呀～❤️我在上面❤️！',
      ]);
      await attacker.say_and_wait(['唔呃～好棒❤️！']);
      await attacker.print_and_wait(['失态的呻吟从张开的嘴中不断漏出。']);
    } else {
      await common_continue_fucking_kitaru(defender, attacker);
    }
  }

  async stimulate_glans_by_virgin(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.stimulate_glans_by_virgin(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '总是让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 单方面努力的话，感觉有些稍稍愧疚呢。',
      ]);
      await attacker.print_and_wait([
        '毕竟，两人三足的法则，就算是在做爱这一对于现役赛马娘和训练员来说是背德的行为也一样吧。',
      ]);
      await attacker.say_and_wait(['哈……❤️']);
      await attacker.print_and_wait([
        '在充血胀的硬邦邦肉棒下一次撞进来的时候试着深呼吸，「啾」的让缠人的小穴吮吸起顶到子宫颈的充血龟头。',
      ]);
      await attacker.say_and_wait(['呃啊啊啊啊……']);
      await attacker.print_and_wait([
        '正缠绞着灼热肉棒的穴内，传来了几乎要让自己瞬间昏过去的快感',
      ]);
      await attacker.print_and_wait([
        '肉棒跳的更厉害了呢，所以，我也算帮上忙了吧，',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
    } else if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await attacker.print_and_wait(['不妙不妙不妙……']);
      await attacker.print_and_wait([
        '本来只是想试着配合上 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 节奏的自己, 却颇为掉链子的忘了深处的穴肉会有多么的敏感。',
      ]);
      await attacker.print_and_wait([
        '似乎是察觉到了缠绞力度的放松，抵在了子宫口前的龟头对准前方挺起的软肉开始了蛮横无礼的冲刺。',
      ]);
      await attacker.print_and_wait([
        '方才还能时不时反攻几下肉棒的穴肉，被粗翘滚烫的肉棒完全碾开，粗大的龟头狠狠撞在了自己的子宫颈上。',
      ]);
      await attacker.print_and_wait(['去了……要去了……']);
    } else {
      await attacker.print_and_wait(['深呼吸……深呼吸……']);
      await attacker.print_and_wait([
        '想要尽力配合, 但自己都不知道有没有完整的做完一次动作, 只要塞在体内的肉棒稍稍抽动一下，被快感塞满的大脑就会一片空白, 从嘴里咿咿呀呀的吐出下流的呻吟。',
      ]);
      await attacker.print_and_wait([
        '不过，听着噗嗤噗嗤的下流声响，黏糊糊的小穴应该有好好的服侍 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的肉棒吧.',
      ]);
    }
  }

  async ask_stimulate_g_spot(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_stimulate_g_spot(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_stimulate_g_spot
            ? part_enum.virgin
            : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait(
        '能感受到自己穴内的性感带被肉棒蹭过时，让自己上瘾般的快感。',
      );
      await attacker.say_and_wait('所以……');
      await attacker.say_and_wait('拜托了……');
      await attacker.print_and_wait(
        `身为${attacker.get_uma_sex_title()}，这也太丢人了不是吗……`,
      );
      await attacker.print_and_wait([
        '但是完全没法忍耐住——留着口水在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 耳边轻喃着乞求快感。',
      ]);
      await attacker.print_and_wait('因为就是很想要啊——');
      await attacker.print_and_wait(
        '想要子宫的里面，被厉害地肉棒给，厉害地，粗暴地，用力地……',
      );
      await attacker.print_and_wait('「啾——的一下顶到最里面❤️');
      await attacker.print_and_wait('让身体「咻」地蜷起来——');
      await attacker.print_and_wait('变成世界上最舒服的小穴——');
      await attacker.print_and_wait(
        `所以拜托了……在那之后，就算之后被白兴大人怪罪也无所谓了`,
      );
    } else if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await common_continue_fucking_kitaru(defender, attacker);
    } else {
      await attacker.say_and_wait('慢，啊哈❤️，慢一点❤️～!');
      await attacker.print_and_wait(
        '尽管已经如此乞求了，肉棒依旧能用短促而精准地命中着自己的弱点，浑浊眼瞳在敏感带带来的快感下泛起几乎将橙色驱尽的粉红。',
      );
      await attacker.print_and_wait([
        '被驯化的完美贴合 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 形状的蜜穴，报恩般的而用柔和的收缩蠕动来取悦着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那根为自己的身体带来无尽快感的火热肉杆。',
      ]);
    }
  }

  async ask_stimulate_womb(attacker, defender, hook) {
    await this.ask_stimulate_g_spot(attacker, defender, hook);
  }
};
