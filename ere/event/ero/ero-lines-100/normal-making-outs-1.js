const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');

const { get_breast_cup } = require('#/data/info-generator');

module.exports = class extends EroNormalMakingOuts {
  async pet_ear(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_ear(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '抚摸着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的耳朵……该怎么说呢，真是容易上瘾的手感。',
      ]);
      await attacker.print_and_wait(
        '顺着毛茸茸的外耳伸入柔软的内耳之中，用食指感受着中耳内各种小骨的构造。',
      );
      await attacker.print_and_wait(
        '……要是用这有半个手掌大的耳朵，包裹起性器官的话——',
      );
      await attacker.print_and_wait([
        '脑海中闪烁过一丝不雅的画面，手中 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的耳朵便瞬间警觉的「立」了起来。',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……你刚刚是不是在想很不好的事情呐？',
      ]);
      await attacker.print_and_wait('……啊哈哈，被发现了呢。');
    } else {
      await defender.say_and_wait([
        '嗯❤️～',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的手法，有点下流呢。',
      ]);
      await attacker.print_and_wait('下流吗？嗯……');
      await attacker.say_and_wait('那可以稍微舔一下吗？耳朵？');
      await defender.say_and_wait('不可以哦～');
      await attacker.print_and_wait('温柔的声音下，隐藏着的是不容侵犯的坚决。');
      await attacker.print_and_wait('……而且手被耳朵打了一巴掌，有点疼。');
    }
  }

  async pull_ear(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pull_ear(attacker, defender, hook);
    }
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await attacker.print_and_wait([
        '对于',
        defender.uma_sex_title,
        '而言，耳朵是暴露在外的弱点。可为什么',
        defender.uma_sex_title,
        '天生会有这样的弱点呢？',
      ]);
      await attacker.print_and_wait('一定是为了给训练员牵耳执鞭用的吧？');
      await attacker.print_and_wait([
        '眼前，被拉扯着耳朵而流着眼泪的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，依旧微笑地望着自己。',
      ]);
      await defender.say_and_wait([
        '呐，',
        sys_get_colored_callname(defender.id, attacker.id),
        '，接下来要做什么吗？……拉扯尾巴？打耳光？还是说把我踩在脚下呢？',
      ]);
      await defender.say_and_wait(
        '不管是什么，我都能承受住哦～只要你能开心，那就比什么都好呢❤️～',
      );
      await attacker.print_and_wait('……心中涌现出了一股莫名的施虐心。');
    } else {
      await attacker.print_and_wait([
        '狠狠地用力拉扯着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的耳朵。',
      ]);
      await attacker.print_and_wait([
        '对于',
        defender.uma_sex_title,
        '而言，耳朵作为暴露在外的弱点，被这样狠狠的拉扯，果然就连一向善于忍耐疼痛的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 都有些吃不消。',
      ]);
      await defender.say_and_wait([
        '轻一点、稍微轻一点哦，',
        sys_get_colored_callname(defender.id, attacker.id),
        '……这样是很痛的呐……',
      ]);
      await attacker.print_and_wait([
        '即便看似一如既往，但 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的眼角却因扯耳的疼痛不自觉地流露出了泪水……',
      ]);
    }
  }

  async pet_breast(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.pet_breast(attacker, defender, hook);
    }
    if (hook.arg) {
      if (get_breast_cup(100, true) >= 'C') {
        await attacker.print_and_wait(
          '一只手已经无法包裹、从手指缝中渗出乳肉程度的大小。',
        );
      } else {
        await attacker.print_and_wait(
          '不算小、但也不算大，刚好能被手掌所包裹下的大小。',
        );
      }
      await attacker.print_and_wait(
        '柔软的触感，左右推弄就会在手掌中如水波般摇晃。\n',
      );
      await defender.say_and_wait([
        '呐……',
        sys_get_colored_callname(defender.id, attacker.id),
        '，要捏捏看吗？❤️～',
      ]);
      await attacker.print_and_wait(
        '翡翠般的眼眸之下，隐藏着的是尽在掌中的自信、还是深不见底的欲望？',
      );
      await attacker.print_and_wait(
        '……谁知道呢？只是手掌中充血的乳首热的发烫。',
      );
    } else {
      await attacker.print_and_wait('揉捏揉捏……');
      await attacker.print_and_wait('如同团子般的触感，却远超团子的规格。');
      await attacker.print_and_wait('相较面团更是炽热也更是嫩弹。');
      await attacker.print_and_wait('明明不是点心，却大开了食欲。');
      await defender.say_and_wait('呐，那孩子的胸部，是不能吃的哦？❤️～');
      await attacker.print_and_wait('……又一次被看穿了心事。');
    }
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.id !== 100 || defender.sex_code === 1) {
      return await super.pet_nipple(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait('摩擦摩擦……');
      await attacker.print_and_wait('充血的乳首意外的滚烫。');
      await attacker.print_and_wait('指尖传来了不可思议的触感。');
      await defender.say_and_wait('唔❤️');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 咬着牙，忍耐着胸口传来的瘙痒。',
      ]);
      await attacker.print_and_wait(
        '如果继续开发，假以时日肯定能看到乳首盛放的日子吧。',
      );
      await attacker.print_and_wait('……在那之前，还想继续摩擦下去。');
    } else {
      await attacker.print_and_wait('捏住乳首，往上方提。');
      await attacker.print_and_wait(
        '就像是被握住了龙头一般，整个胸部都被牵着向上。',
      );
      await attacker.print_and_wait(
        '捏着乳首，随意地向四方摆动，胸部便在指尖下跃起了舞。',
      );
      await defender.say_and_wait([
        '唔❤️～',
        sys_get_colored_callname(defender.id, attacker.id),
        '，不要……玩胸部呐❤️……很痒的呐❤️～',
      ]);
      await attacker.print_and_wait([
        '任由着乳首被操弄，只能咬着嘴唇，用手挡住了上脸的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，发出着阵阵的呻吟。',
      ]);
      await attacker.print_and_wait([
        '……还想要更进一步，看到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 沉迷于肉欲中的表情。',
      ]);
    }
  }

  async pet_clitoris(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_clitoris(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['红通通的，立的很直，']);
      await attacker.print_and_wait(['稍微拨弄一下，能左右晃得很久。']);
      await defender.say_and_wait(['嗯……可以不要一直看着吗？有点不好意思呢……']);
      await attacker.print_and_wait([
        '话虽如此，自己的指尖仍旧在上下滑弄着阴核。',
      ]);
      await attacker.print_and_wait([
        '……奇妙的触感，还想要再认真的研究一会儿——',
      ]);
    } else {
      await attacker.print_and_wait([
        '试图用力的压了一下，但很快便又更加红肿的弹了回来。',
      ]);
      await attacker.print_and_wait([
        '粉嫩嫩的，很漂亮。漂亮到想要用手机拍下来的程度……',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '，不可以哦～',
      ]);
      await attacker.print_and_wait([
        '被看穿了自己心事的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 拒绝。',
      ]);
      await attacker.print_and_wait(['……那就只好不情愿的捏一捏了。']);
    }
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.finger_fuck(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['手指很轻松的就吞了进去。']);
      await attacker.print_and_wait(['上下搅动着，能够明显感受到穴内的蠕动。']);
      await defender.say_and_wait(['唔❤️～，嗯❤️～。']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 轻声地呻吟着，双腿不自主的夹在一起。',
      ]);
      await attacker.print_and_wait(['……还可以呻吟得再大声一些吗？']);
    } else {
      await attacker.print_and_wait(['中指插入了穴内，而拇指则拨弄着阴核。']);
      await attacker.print_and_wait([
        '很明显，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的呻吟声变得更大了。',
      ]);
      await defender.say_and_wait(['啊❤️～、唔❤️～那里❤️～好厉害……']);
      await attacker.print_and_wait([
        '指尖感受到了一股暖流……似乎还能更进一步。',
      ]);
    }
  }

  async prepare_virgin(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.prepare_virgin(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '唔……既然是 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的命令的话……',
    ]);
    await attacker.print_and_wait(['左右两手主动翻弄着自己下体的细缝，']);
    await attacker.print_and_wait([
      '潮湿得粘液伴随着炽热的吐息一同随着大门而打开。',
    ]);
    await defender.say_and_wait(['被这样直勾勾的盯着……有点令人害羞呐～']);
  }

  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.stimulate_g_spot_by_finger(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['唔❤️～～～～～～～']);
      await attacker.print_and_wait([
        '找到了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 最敏感的地方，仅仅只是稍微的勾弄，就能感觉到穴内的蠕动。',
      ]);
      await attacker.print_and_wait([
        '舌头吐露在外，大口地喘息，每每玩弄G地，腰便如弓身般高高的翘起。',
      ]);
      await attacker.print_and_wait(['……已经是一副很放荡的表情了呢。']);
    } else {
      await attacker.print_and_wait([
        '只要触碰一下，就会感到一阵热浪在指尖回荡。',
      ]);
      await attacker.print_and_wait([
        '拔出来的时候，发现食指与中指间的粘液已经拉起了丝线。',
      ]);
      await attacker.say_and_wait([
        '呐……',
        sys_get_colored_callname(attacker.id, defender.id),
        '，女孩子的体内为什么会有这样的位置呢？',
      ]);
      await defender.say_and_wait([
        '哈、哈～❤️……',
        sys_get_colored_callname(defender.id, attacker.id),
        '，太熟练了呐。',
      ]);
      await attacker.print_and_wait([
        '一面喘息着、一面呻吟着的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，做出了答非所问的回答——',
      ]);
    }
  }

  async pet_anal(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '并没有难闻的气息，反倒是在精心清理之下显得格外的干净。',
      ]);
      await attacker.print_and_wait([
        '但即便如此，轻轻抚摸、也已使得尾巴因警觉而竖立。',
      ]);
      await defender.say_and_wait([
        '呐……',
        sys_get_colored_callname(defender.id, attacker.id),
        '，虽然我觉得不会啦，但难不成，你对那里很感兴趣——噫❤️～！',
      ]);
      await attacker.print_and_wait([
        '话还没说完，食指便已伸入了其中，惊得 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 因刺激而发出了尖鸣。',
      ]);
    } else {
      await defender.say_and_wait(['那里……我有清洁过啦。']);
      await attacker.print_and_wait([
        '似乎是察觉了什么，低着头刻意别开视线的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，率先给出了回答。',
      ]);
      await attacker.print_and_wait([
        '那样真是再好不过了，于是手指长途无阻地伸向了',
        defender.sex,
        '的后穴。',
      ]);
      await attacker.print_and_wait([
        '一根手指、两根手指，一根指节、两根指节……每每更近一步，都能听到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的尖鸣。',
      ]);
      await defender.say_and_wait([
        '哈……',
        sys_get_colored_callname(defender.id, attacker.id),
        '，果然是变态呐。',
      ]);
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '左后两手掰弄着自己的后庭，粉嫩的后穴里时不时发出着「噗、噗」的声音。',
    ]);
    await attacker.print_and_wait([
      '若是往哪散发着炽热的吐息的后穴里，吹入嘴中的空气的话……',
    ]);
    await defender.say_and_wait(['要是那样做了的话，明天就不给你吃嘎吱干了……']);
    await attacker.print_and_wait([
      '即便是那个 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，在主动掰弄自己后庭的情况下，也不会同意这么干吗……',
    ]);
    await attacker.print_and_wait(['……那就更令人想往那个洞穴里吹气了啊。']);
  }

  async pet_leg(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_leg(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '纤细而又光滑的大腿，完全看不出因训练而粗壮的痕迹。',
      ]);
      await attacker.print_and_wait([
        '上下抚摸着的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的腿部，不知为何想要发出「win～win～」的声音。',
      ]);
      await attacker.print_and_wait([
        '可正当要更进一步时，这两条白皙的美腿便如蟒蛇般缠上了腰身。',
      ]);
      await defender.say_and_wait([
        '呐，从刚刚开始就一直是 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 在摸呢……我也可以上手吗？',
      ]);
      await attacker.print_and_wait([
        '……遭了，完全想象不到在腰身被缠住之后，自己能够战胜 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的摸样。',
      ]);
    } else {
      await attacker.print_and_wait([
        '平滑的脚趾与脚底板，完全看不出长期奔跑的痕迹，真是奇怪。',
      ]);
      await attacker.print_and_wait([
        '倒也不是有什么特殊的癖好，但就是想把这样的脚放入自己的口中。',
      ]);
      await defender.say_and_wait(['会真菌感染的哦？']);
      await attacker.say_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        '，这么漂亮而且没有臭味的脚，才不会得啦。',
      ]);
      await defender.say_and_wait(['唉……是这样吗？']);
      await attacker.print_and_wait([
        '说罢，在另一头，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 毫无犹豫的抱住了 ',
        attacker.get_colored_name(),
        ' 的脚，也想放入口中。',
      ]);
      await attacker.say_and_wait(['……不不不，还是算了吧。']);
    }
  }

  async pet_tail(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pet_tail(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['四指插入尾巴的发根之处，向下梳弄。']);
      await attacker.print_and_wait([
        '极好的触感，即柔顺也没有分岔……看得出来是一直在用心保养。',
      ]);
      await attacker.print_and_wait([
        '……听说对于一些',
        defender.uma_sex_title,
        '而言，尾巴是触碰的禁忌、只要碰到了就会被攻击……也不知是真是假。',
      ]);
      await defender.say_and_wait(['是真的哦～']);
      await attacker.print_and_wait([
        '微笑着回答疑问，尾巴却做出了与嘴不同的回应，开心地左右晃动。',
      ]);
    } else {
      await attacker.print_and_wait([
        '对着尾巴的发梢探出鼻子，轻嗅着其中的气息。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的尾巴，有一股春雨下的泥土般的清新气息。',
      ]);
      await attacker.print_and_wait([
        '想要把整根脸都埋进尾巴，尽情的享受着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的气味。',
      ]);
      await defender.say_and_wait([
        '呐……',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的爱好真奇怪呢～',
      ]);
      await attacker.print_and_wait([
        '如是说着，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的尾巴上下摇晃着，拂过脸颊，扫弄鼻尖……',
      ]);
    }
  }

  async pull_tail(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.pull_tail(attacker, defender, hook);
    }
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await defender.print_and_wait([
        defender.uma_sex_title,
        '的尾巴，明明不是训练员专用的开关。',
      ]);
      await defender.print_and_wait([
        '可现在，不论是在哪里，只要拽动一下尾巴，自己的屁股就会不自觉的翘起。',
      ]);
      if (defender.sex_code !== 1) {
        await defender.say_and_wait(
          ['唔，我呀，好像变成了很便宜的女人了呐——'],
          true,
        );
        await defender.print_and_wait([
          '伴随着尾巴的疼痛而高高翘起的屁股左右晃动，迫不及待的下体也已垂涎欲滴。',
        ]);
        await defender.print_and_wait([
          '想要更近一步，被拽动着尾巴、拍打着屁股、被玩弄着阴户，被从上到下彻底得玩弄，沾染上 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 的味道，被玩弄到大脑一片空空。',
        ]);
        await defender.print_and_wait([
          '……有这样想法的',
          defender.uma_sex_title,
          '，一定不止自己一个吧？',
        ]);
      }
    } else {
      await attacker.print_and_wait([
        '用力拽动着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的尾巴。',
      ]);
      await attacker.print_and_wait(['只要稍微用力，屁股就会高高的翘起。']);
      await attacker.print_and_wait([
        '明明是',
        defender.uma_sex_title,
        '的禁区，一被碰触就会被攻击的位置，',
      ]);
      await attacker.print_and_wait([
        '可用力拽动这灰栗色的尾巴时，却不见 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的反抗。',
      ]);
      await defender.say_and_wait(['唔……明天不给你吃嘎吱干了哦？']);
      await attacker.print_and_wait([
        '即便嘟起的嘴巴仍在小小的抗议，但高高翘起的屁股却已经自发的晃动。',
      ]);
      await attacker.print_and_wait([
        '……你一定很期待吧，',
        sys_get_colored_callname(attacker.id, defender.id),
        '？',
      ]);
    }
  }

  async cunnilingus(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.cunnilingus(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '出人意料的粉嫩，散发着',
      defender.child_sex_title,
      '子特有的气息。',
    ]);
    await attacker.print_and_wait([
      '小小的舌头向上舔弄一口……很难描述那到底是什么样的味道。',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的舌头哇……感觉好痒呢。',
    ]);
    await attacker.print_and_wait([
      '另一边，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 伸出了手，轻轻抚摸着埋首躬耕者的头。',
    ]);
    await attacker.print_and_wait([
      '……明明是调教的一方，但反而感到了被驯服的安心呢。',
    ]);
  }

  async suck_virgin(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.suck_virgin(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '强硬得掰开因应激而合拢的双腿，将这张嘴贴近',
      defender.child_sex_title,
      '所特有的器官。',
    ]);
    await attacker.print_and_wait([
      '大口的吞舔、大口的吹气。潮湿的关口随即夹杂起粘稠的液体。',
    ]);
    await defender.say_and_wait(['啊……哪里❤️、弱点……被碰到了呐❤️～']);
    await attacker.print_and_wait([
      '脑袋不由自主的向上昂起，抚摸头顶的双手也不似最初般轻松，而是环绕在脑后、轻轻地推动。',
    ]);
    await attacker.print_and_wait([
      '即便是 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，也有想要追寻更高层度的快感啊。',
    ]);
    await attacker.print_and_wait([
      '……如是想着，在暖流到来之前，又是舔弄的一口。',
    ]);
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    if (Math.random() < 0.5) {
      await attacker.print_and_wait(['蹲跪在地上、如同兔子般双腿大开。']);
      await attacker.print_and_wait(['仰着头，眼前的是背光的「根物」。']);
      await defender.say_and_wait(['啊啦啦……真是生猛呢。']);
      await attacker.print_and_wait([
        '听从着命令，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 将赤红的脸贴向肉棒。一面舔弄着肉棒的根部，一面用鼻子上下摆弄、贪婪得吸吮着「生猛」的气息。',
      ]);
      await defender.say_and_wait(['哈❤️……好新鲜的味道❤️～']);
      await attacker.print_and_wait([
        '对着睾丸深情地一个吻，很快便听到了水滴的声音……',
      ]);
    } else {
      await defender.say_and_wait([
        '竟然要做『肉棒清洁』什么的……',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的爱好真奇特呢。',
      ]);
      await attacker.print_and_wait([
        '趴到肉棒的身前，用鼻子顶着顶端。一面嗅着气味，一面做着回答。',
      ]);
      await attacker.print_and_wait([
        '很快，舌头从粉唇中伸了出来，添向了冠沟，好似真的在做清洁一般、左右滑弄，转了一圈。',
      ]);
      await attacker.print_and_wait([
        '垢污随之在舌尖上汇聚，可 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 却并不反感，而是眼神迷离的将垢污含在口中、咽了下去。',
      ]);
      await defender.say_and_wait([
        '好了，保养好了『枪头』，这样不管 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 要对谁『开疆扩土』，都没问题了哦～',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 微笑地说着，可',
        defender.sex,
        '的鼻子仍顶在肉棒上，丝毫没有松开的迹象……',
      ]);
    }
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait([
      '在听到深喉的要求后，浅浅咬了一口肉棒以示抗议。',
    ]);
    await defender.print_and_wait([
      '但并没有真心抗议，随即主动吞下了整根肉棒。',
    ]);
    await defender.print_and_wait([
      '上下吞咽着已深入咽喉的肉棒，如潜水训练般一次次保持着节奏的呼吸。',
    ]);
    await defender.print_and_wait([
      '鼻子里吸吮着肉棒传来的「阳气」，嘴角因吞咽而无意间拔下的阴毛的残余……',
    ]);
    await defender.say_and_wait(['啊……这个，搞不好能用作训练呢。'], true);
    await defender.print_and_wait([
      '脑海中闪过了在训练场上主动吞咽 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 肉棒的念头，随即却因为缺氧的恍惚而为之挥去。',
    ]);
    await defender.print_and_wait(['……已经蓄势待发了。']);
  }

  async force_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '「啪、啪」两声并不算响亮的声响，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的脸颊上出现了肉棒所留下的印迹。',
    ]);
    await attacker.print_and_wait([
      '直挺挺的肉棒顶在 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的鼻子上，散发着足以令人头晕目眩的「阳气',
    ]);
    await defender.say_and_wait([
      '唔……真过分呐，',
      sys_get_colored_callname(defender.id, attacker.id),
      '。竟然用肉棒打',
      defender.child_sex_title,
      '子的脸什么的……这样做，可是会被讨厌的呐？',
    ]);
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await attacker.print_and_wait([
        '即便嘴上说是如此，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那双盯着肉棒的眼睛却也已出卖了自己。',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '主动的摆正了位置，吞下龙头、上下舔弄——',
      ]);
      await defender.say_and_wait([
        '可不要❤️……对其他❤️、',
        defender.child_sex_title,
        '子❤️，这样做哦？',
      ]);
      await attacker.print_and_wait([
        '尾巴兴奋的左右摆弄，吞咽的动作也更加卖力。脸颊上肉棒所留下的印迹下，隐藏着是内心深处的渴望。',
      ]);
    } else {
      await attacker.print_and_wait(['……可现在的你，真的在乎这些吗？']);
      await attacker.print_and_wait([
        '抓着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的头发，将肉棒向粉唇上桶去。并没有受到牙齿的阻碍，很轻松的就进入到了口腔之中。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 呜呜地说着什么，可怎么也听不清。温暖的口腔里，沉眠的舌头被迫起床侍奉着进入口腔的龙体——只要能感受这个，就足够了。',
      ]);
      await defender.say_and_wait(['唔❤️……咕噗噗❤️～']);
      await defender.say_and_wait(
        [
          '被 ',
          sys_get_colored_callname(defender.id, attacker.id),
          '，使用了❤️～',
        ],
        true,
      );
    }
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_deep_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait([
      '自己的抗议什么的，在快感面前已经不重要了。',
    ]);
    await defender.print_and_wait(['头发被抓住，肉棒被轻松地捅进了咽喉之中。']);
    await defender.print_and_wait([
      '上下的运动，舌头的摆弄、不时从肉棒的根处传来的呜呜声……应该会让人兴奋吧？',
    ]);
    await defender.print_and_wait([
      '为了防止窒息，尽力张开小嘴，在一次次抽插中寻求呼吸的机会。',
    ]);
    await defender.say_and_wait(
      ['被使用了、被使用了、被使用了、被使用了、被使用了❤️～'],
      true,
    );
    await defender.print_and_wait(['会感到讨厌吗？并没有……真奇怪。']);
    await defender.print_and_wait(['反而有一种……被使用的快感。']);
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '指尖在肉杆上滑动，每每滑到龙头之时，红肿的肉棒变回一跳一跳。',
    ]);
    await defender.say_and_wait(['嗯……看多了话，感觉莫名的有些可爱呢～']);
    await attacker.print_and_wait([
      '说罢轻轻的向肉棒吹了口气，伸出了右手温柔的套弄着肉身……',
    ]);
    await defender.say_and_wait([
      '呐，',
      sys_get_colored_callname(defender.id, attacker.id),
      '，这样就足够了吗？',
    ]);
    await attacker.print_and_wait([
      '像是在对肉棒说话一般，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 眯着眼睛，',
    ]);
    await attacker.print_and_wait(['媚眼如丝地望着向手中的「根器」……']);
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
    }
    await defender.print_and_wait(['吞咽着龙头，肉杆便变得一涨一涨。']);
    await defender.print_and_wait([
      '顺着一涨一涨的青筋两只手交替往下滑，气息便变得愈发的浓郁。',
    ]);
    await defender.say_and_wait([
      '咕❤️～',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的小训练员看起来已经迫不及待了呢——',
    ]);
    await defender.print_and_wait(['说着向着龙头亲了一口。']);
    await defender.say_and_wait([
      '啾❤️～～～加油哦，要是能射出来的话～我会尽力喝下去的哦❤️～',
    ]);
  }

  async force_hand_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_hand_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '抓着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的手，放在自己的肉棒前，上下撸动。',
    ]);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 并没有反抗，而是顺从地两手上下滑弄。然而一向包容的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，却露出了意味深长的笑容。',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '……还真是容易满足呢❤️～',
    ]);
    await attacker.print_and_wait([
      '依旧平和地微笑望着自己，可这微笑却总能看出几分挑衅的意义。',
    ]);
    await attacker.print_and_wait([
      '……还想要对 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 做更过分的事情。',
    ]);
    await attacker.print_and_wait([
      '这般的想法，伴随着被手指划过肉杆的下身，渐渐地开始膨胀——',
    ]);
  }

  async force_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 100) {
      return await super.force_hand_and_blow_job(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '明明 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 手还在肉杆上撸动，另一边却按着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的头发，将龙头按入了口中。',
    ]);
    await attacker.print_and_wait([
      '……都是 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 不好哦？都怪 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 那么色情，都怪 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 温柔，都怪 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 诱惑我——',
    ]);
    await attacker.print_and_wait([
      '耳朵一抖一抖、继续用力按压着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的头。',
    ]);
    await attacker.print_and_wait([
      '并没有遭到反抗，相反口中的龙头受到了舌头的欢迎，套弄着杆身的双手仍在执行着自己的使命。',
    ]);
    await defender.say_and_wait(['唔❤️～～～就像工具一样，被使用着❤️～'], true);
    await defender.say_and_wait(['要忘不掉这种快乐了❤️～～～'], true);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      ' 翡翠色的眼眸中，闪烁着桃色的迷离……',
    ]);
  }
};
