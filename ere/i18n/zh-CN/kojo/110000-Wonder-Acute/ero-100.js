/**
 * @file 奇锐骏 - 调教
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { vp_status_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async kiss(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(
        '点滴相遇的鼻尖，炽热的喘息划过对方的光滑的脖颈。',
      );
      await you.print_and_wait('好似要窒息一般炽热的爱意。');
      await acute.say_and_wait('唔……哈、哈……❤️');
      await you.print_and_wait('双手围在脑后，赤红的脸颊上充斥着欲望的色彩。');
      await you.print_and_wait('……看来还没能满足呢。');
    } else {
      await you.print_and_wait(
        '又一次接吻、又一次相拥，想要在对方的唇上留下自己的痕迹。',
      );
      await acute.say_and_wait(['……呐，你知道吗，', callname, '。']);
      await you.print_and_wait([
        '在一次短暂的分离后，',
        y_call_a,
        ' 幽幽地说着。',
      ]);
      await acute.say_and_wait('仅仅只是这种程度的话……是满足不了我的哦❤️');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async french_kiss(acute, you, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('自己的舌头在对方的口腔内探索。');
      await you.print_and_wait('再深一点，再往深一点。');
      await you.print_and_wait([
        '然而很快，便被 ',
        y_call_a,
        ' 的舌头所发现。',
      ]);
      await you.print_and_wait(
        '舌头被狠狠的压在对方口腔中，被奇锐骏小巧的舌头夹在下颚上不停地纠缠。',
      );
      await acute.say_and_wait('……❤️～');
      await you.print_and_wait([
        '睁开眼睛，看见的是 ',
        y_call_a,
        ' 眼内的笑意。',
      ]);
    } else {
      await you.print_and_wait([
        '牙齿的防线很快便被挑弄的舌头所攻陷了，',
        y_call_a,
        ' 长驱直入进了自己的口腔。',
      ]);
      await you.print_and_wait(
        '犹如被侵犯一般，藏在牙齿深处的舌头被上下挑弄纠缠。',
      );
      await you.print_and_wait(
        '口腔内的唾液也好似战利品般，被对方抢走，只留下对方的唾液进行强制的交换。',
      );
      await you.print_and_wait([
        '睁开眼睛，',
        y_call_a,
        ' 的媚眼依旧，环绕在自己脑后的两只手也越发的用力。',
      ]);
      await you.print_and_wait([
        '……完全没有在舌吻上战胜 ',
        y_call_a,
        ' 的自信。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async relax(acute, you, y_call_a, callname) {
    await acute.say_and_wait(['呼……', callname, '，要喝点水吗？']);
    await you.print_and_wait([
      '暂时的休息，',
      y_call_a,
      ' 在温柔地询问是否要补充水分。',
    ]);
    await you.print_and_wait([
      '额头下滴下小小汗珠、看向',
      acute.sex,
      '赤裸而白皙的身体。',
    ]);
    await you.print_and_wait('——心脏在左面砰砰跳。');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async lure(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      if (Math.random() < 0.5) {
        await you.print_and_wait([
          '指尖在 ',
          y_call_a,
          ' 的乳首处划着圈，想要看到 ',
          y_call_a,
          ' 因忍耐而发出呻吟的摸样。',
        ]);
        await you.print_and_wait([
          '然而，',
          y_call_a,
          ' 却握住了自己的手，朝向了下腹的子宫处。',
        ]);
        await acute.say_and_wait(['呐……', callname, '。这里……不可以吗？']);
        await you.print_and_wait([
          y_call_a,
          ' 抵着头仰望着自己，绯红的脸颊下传来的是魅诱的低吟——',
        ]);
      } else {
        await you.print_and_wait([
          '伸向 ',
          y_call_a,
          ' 用以诱惑的手指，很快便被',
          acute.sex,
          '的唇舌所吞没。',
        ]);
        await you.print_and_wait(
          '食指、拇指、中指、无名指、小拇指、手心、手背——挨个舔过、挨个吸吮，留下了唾液的痕迹。',
        );
        await you.print_and_wait([
          '但 ',
          y_call_a,
          ' 似乎还不满足，紧贴着手臂、伸出舌头舔弄着手腕的',
          acute.sex,
          '，如同发情的野兽般瞪大了双眼。',
        ]);
        await acute.say_and_wait([
          '哈、哈……腋下、',
          callname,
          ' 的气味……',
          callname,
          '，可以继续下去吗？',
        ]);
      }
    } else {
      await you.print_and_wait('似乎没什么效果……');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async talk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '真没想到，会跟 ',
        callname,
        ' 走到这一步呢……',
      ]);
      await you.print_and_wait([
        '十指在身前交叉，丝毫没有遮掩自己赤身裸体想法的 ',
        y_call_a,
        '，偏了偏头。',
      ]);
      await acute.say_and_wait('但既然要做的话……那就要尽兴才行哦。');
      if (acute.sex_code !== 1) {
        await you.print_and_wait([
          acute.sex,
          '温柔地笑着，随即将手放在了身后，粉嫩的乳首一览无余。',
        ]);
      }
    } else {
      await you.say_and_wait('要温柔一点吗？');
      await you.print_and_wait(['……', y_call_a, ' 低着头，没有反应。']);
      await you.say_and_wait('那要再强硬一点吗？');
      await you.print_and_wait(['……', y_call_a, ' 的尾巴摇晃了起来。']);
      await you.print_and_wait(
        '明明赤身裸体都不会感到害羞，但却在这种话题上不肯正面的回答问题呢。',
      );
      await you.print_and_wait(
        '感到一阵新奇，于是拍了拍丰满的肥臀。「噼啪」的回响，代表着回答——',
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async switch(acute, you, callname, y_call_a) {
    await acute.say_and_wait('唉？把主动权交给我吗？……唔——');
    await you.say_and_wait('不行吗？');
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['倒也不是不行啦……只不过呢，', callname, '……']);
      await acute.say_and_wait('接下来无论发生什么……都请坚持下去哦～？');
      await you.print_and_wait([
        '说罢，',
        acute.sex,
        '的双手伸向了胸口、趴伏在胸前。',
      ]);
      await you.print_and_wait(['……', y_call_a, ' 的双眼中，闪烁起赤色的光。']);
    } else {
      await acute.say_and_wait('倒也不是不行啦……');
      await you.print_and_wait([
        '一瞬间，',
        y_call_a,
        ' 的眼神中闪烁过一阵遗憾的神色——',
      ]);
      await acute.say_and_wait([
        '那么，',
        callname,
        '……感觉痛的话，要说出来哦～？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} success 是否能反抗成功
   */
  async resist(acute, you, callname, y_call_a, success) {
    await acute.say_and_wait(['呐，', callname, '，……不要反抗，比较好哦？']);
    await you.print_and_wait([
      '眼中闪烁着妖艳之光的 ',
      y_call_a,
      '，将自己扑倒在地。',
    ]);
    await acute.say_and_wait('不然的话……你可能会受伤的呢。');
    await you.print_and_wait([
      '双手被紧握住，',
      acute.sex,
      '的唇舌向脖颈伸来……',
    ]);
    era.println();
    if (success) {
      await you.print_and_wait('受伤？那种事怎样都好。');
      await you.print_and_wait([
        '抱着可能会让双手手腕脱臼的觉悟，强抬起身子，昂起头，吻向了 ',
        y_call_a,
        '。',
      ]);
      await acute.say_and_wait('唔！……❤️');
      await acute.say_and_wait('❤️～');
      await acute.say_and_wait(['……', callname, '，太狡猾了。']);
    } else {
      await you.print_and_wait('竭尽全力的挣扎，但一切都成为了徒劳。');
      await you.print_and_wait(
        '如同被巨兽盯上的猎物一般，越是挣扎，越是令其兴奋。',
      );
      await acute.say_and_wait(['哈❤️～我会温柔些的哦，', callname, '。']);
      await you.print_and_wait([
        '伴随着一阵炽热的吐息，',
        y_call_a,
        ' 在自己的脖颈上留下了痕迹……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async gargle(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '水池前，哗哗作响的水声刚刚盛满一杯，',
      y_call_a,
      ' 却在这时出现在了镜子里。',
    ]);
    await acute.say_and_wait('要清理干净一点哦～不然要是蛀牙了就不好了呢……');
    await you.print_and_wait([
      '一面说着，',
      acute.sex,
      '轻手熟路的从水池旁「变」出了一根牙刷。',
    ]);
    await acute.say_and_wait([
      '呐，要我来帮 ',
      callname,
      ' 刷牙吗？我刷牙刷的很干净的哦～',
    ]);
    await you.print_and_wait('……也没必要做得那么全套吧？');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async wipe_body(acute, you, callname, y_call_a) {
    await acute.say_and_wait('嘿咻、嘿咻……');
    await you.print_and_wait([
      '用着抹茶色的毛巾，',
      y_call_a,
      ' 认真地擦拭着身体。',
    ]);
    await acute.say_and_wait([
      '呼、呼……这样就干净了呢～呐，',
      callname,
      '，还有哪里需要打扫的吗？',
    ]);
    await you.print_and_wait(
      '……明明赤身裸体，却还是能看到喜欢打扫卫生的本性呢。',
    );
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_ear(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '抚摸着 ',
        y_call_a,
        ' 的耳朵……该怎么说呢，真是容易上瘾的手感。',
      ]);
      await you.print_and_wait(
        '顺着毛茸茸的外耳伸入柔软的内耳之中，用食指感受着中耳内各种小骨的构造。',
      );
      await you.print_and_wait(
        '……要是用这有半个手掌大的耳朵，包裹起性器官的话——',
      );
      await you.print_and_wait([
        '脑海中闪烁过一丝不雅的画面，手中 ',
        y_call_a,
        ' 的耳朵便瞬间警觉的「立」了起来。',
      ]);
      await acute.say_and_wait([
        callname,
        '……你刚刚是不是在想很不好的事情呐？',
      ]);
      await you.print_and_wait('……啊哈哈，被发现了呢。');
    } else {
      await acute.say_and_wait(['嗯❤️～', callname, ' 的手法，有点下流呢。']);
      await you.print_and_wait('下流吗？嗯……');
      await you.say_and_wait('那可以稍微舔一下吗？耳朵？');
      await acute.say_and_wait('不可以哦～');
      await you.print_and_wait('温柔的声音下，隐藏着的是不容侵犯的坚决。');
      await you.print_and_wait('……而且手被耳朵打了一巴掌，有点疼。');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async pull_ear(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        '对于',
        acute.uma_sex_title,
        '而言，耳朵是暴露在外的弱点。可为什么',
        acute.uma_sex_title,
        '天生会有这样的弱点呢？',
      ]);
      await you.print_and_wait('一定是为了给训练员牵耳执鞭用的吧？');
      await you.print_and_wait([
        '眼前，被拉扯着耳朵而流着眼泪的 ',
        y_call_a,
        '，依旧微笑地望着自己。',
      ]);
      await acute.say_and_wait([
        '呐，',
        callname,
        '，接下来要做什么吗？……拉扯尾巴？打耳光？还是说把我踩在脚下呢？',
      ]);
      await acute.say_and_wait(
        '不管是什么，我都能承受住哦～只要你能开心，那就比什么都好呢❤️～',
      );
      await you.print_and_wait('……心中涌现出了一股莫名的施虐心。');
    } else {
      await you.print_and_wait(['狠狠地用力拉扯着 ', y_call_a, ' 的耳朵。']);
      await you.print_and_wait([
        '对于',
        acute.uma_sex_title,
        '而言，耳朵作为暴露在外的弱点，被这样狠狠的拉扯，果然就连一向善于忍耐疼痛的 ',
        y_call_a,
        ' 都有些吃不消。',
      ]);
      await acute.say_and_wait([
        '轻一点、稍微轻一点哦，',
        callname,
        '……这样是很痛的呐……',
      ]);
      await you.print_and_wait([
        '即便看似一如既往，但 ',
        y_call_a,
        ' 的眼角却因扯耳的疼痛不自觉地流露出了泪水……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} is_huge_tit 奇锐骏是否是巨乳
   */
  async pet_breast(acute, you, callname, y_call_a, is_first, is_huge_tit) {
    if (is_first) {
      if (is_huge_tit) {
        await you.print_and_wait(
          '一只手已经无法包裹、从手指缝中渗出乳肉程度的大小。',
        );
      } else {
        await you.print_and_wait(
          '不算小、但也不算大，刚好能被手掌所包裹下的大小。',
        );
      }
      await you.print_and_wait(
        '柔软的触感，左右推弄就会在手掌中如水波般摇晃。\n',
      );
      await acute.say_and_wait(['呐……', callname, '，要捏捏看吗？❤️～']);
      await you.print_and_wait(
        '翡翠般的眼眸之下，隐藏着的是尽在掌中的自信、还是深不见底的欲望？',
      );
      await you.print_and_wait('……谁知道呢？只是手掌中充血的乳首热的发烫。');
    } else {
      await you.print_and_wait('揉捏揉捏……');
      await you.print_and_wait('如同团子般的触感，却远超团子的规格。');
      await you.print_and_wait('相较面团更是炽热也更是嫩弹。');
      await you.print_and_wait('明明不是点心，却大开了食欲。');
      await acute.say_and_wait('呐，那孩子的胸部，是不能吃的哦？❤️～');
      await you.print_and_wait('……又一次被看穿了心事。');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_nipple(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('摩擦摩擦……');
      await you.print_and_wait('充血的乳首意外的滚烫。');
      await you.print_and_wait('指尖传来了不可思议的触感。');
      await acute.say_and_wait('唔❤️');
      await you.print_and_wait([y_call_a, ' 咬着牙，忍耐着胸口传来的瘙痒。']);
      await you.print_and_wait(
        '如果继续开发，假以时日肯定能看到乳首盛放的日子吧。',
      );
      await you.print_and_wait('……在那之前，还想继续摩擦下去。');
    } else {
      await you.print_and_wait('捏住乳首，往上方提。');
      await you.print_and_wait(
        '就像是被握住了龙头一般，整个胸部都被牵着向上。',
      );
      await you.print_and_wait(
        '捏着乳首，随意地向四方摆动，胸部便在指尖下跃起了舞。',
      );
      await acute.say_and_wait([
        '唔❤️～',
        callname,
        '，不要……玩胸部呐❤️……很痒的呐❤️～',
      ]);
      await you.print_and_wait([
        '任由着乳首被操弄，只能咬着嘴唇，用手挡住了上脸的 ',
        y_call_a,
        '，发出着阵阵的呻吟。',
      ]);
      await you.print_and_wait([
        '……还想要更进一步，看到 ',
        y_call_a,
        ' 沉迷于肉欲中的表情。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_clitoris(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['红通通的，立的很直，']);
      await you.print_and_wait(['稍微拨弄一下，能左右晃得很久。']);
      await acute.say_and_wait(['嗯……可以不要一直看着吗？有点不好意思呢……']);
      await you.print_and_wait(['话虽如此，自己的指尖仍旧在上下滑弄着阴核。']);
      await you.print_and_wait(['……奇妙的触感，还想要再认真的研究一会儿——']);
    } else {
      await you.print_and_wait([
        '试图用力的压了一下，但很快便又更加红肿的弹了回来。',
      ]);
      await you.print_and_wait([
        '粉嫩嫩的，很漂亮。漂亮到想要用手机拍下来的程度……',
      ]);
      await acute.say_and_wait([callname, '，不可以哦～']);
      await you.print_and_wait(['被看穿了自己心事的 ', y_call_a, ' 拒绝。']);
      await you.print_and_wait(['……那就只好不情愿的捏一捏了。']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async finger_fuck(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['手指很轻松的就吞了进去。']);
      await you.print_and_wait(['上下搅动着，能够明显感受到穴内的蠕动。']);
      await acute.say_and_wait(['唔❤️～，嗯❤️～。']);
      await you.print_and_wait([
        y_call_a,
        ' 轻声地呻吟着，双腿不自主的夹在一起。',
      ]);
      await you.print_and_wait(['……还可以呻吟得再大声一些吗？']);
    } else {
      await you.print_and_wait(['中指插入了穴内，而拇指则拨弄着阴核。']);
      await you.print_and_wait(['很明显，', y_call_a, ' 的呻吟声变得更大了。']);
      await acute.say_and_wait(['啊❤️～、唔❤️～那里❤️～好厉害……']);
      await you.print_and_wait(['指尖感受到了一股暖流……似乎还能更进一步。']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async prepare_virgin(acute, you, callname) {
    await acute.say_and_wait(['唔……既然是 ', callname, ' 的命令的话……']);
    await you.print_and_wait(['左右两手主动翻弄着自己下体的细缝，']);
    await you.print_and_wait([
      '潮湿得粘液伴随着炽热的吐息一同随着大门而打开。',
    ]);
    await acute.say_and_wait(['被这样直勾勾的盯着……有点令人害羞呐～']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async stimulate_g_spot_by_finger(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait(['唔❤️～～～～～～～']);
      await you.print_and_wait([
        '找到了 ',
        y_call_a,
        ' 最敏感的地方，仅仅只是稍微的勾弄，就能感觉到穴内的蠕动。',
      ]);
      await you.print_and_wait([
        '舌头吐露在外，大口地喘息，每每玩弄G地，腰便如弓身般高高的翘起。',
      ]);
      await you.print_and_wait(['……已经是一副很放荡的表情了呢。']);
    } else {
      await you.print_and_wait(['只要触碰一下，就会感到一阵热浪在指尖回荡。']);
      await you.print_and_wait([
        '拔出来的时候，发现食指与中指间的粘液已经拉起了丝线。',
      ]);
      await you.say_and_wait([
        '呐……',
        y_call_a,
        '，女孩子的体内为什么会有这样的位置呢？',
      ]);
      await acute.say_and_wait(['哈、哈～❤️……', callname, '，太熟练了呐。']);
      await you.print_and_wait([
        '一面喘息着、一面呻吟着的 ',
        y_call_a,
        '，做出了答非所问的回答——',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '并没有难闻的气息，反倒是在精心清理之下显得格外的干净。',
      ]);
      await you.print_and_wait([
        '但即便如此，轻轻抚摸、也已使得尾巴因警觉而竖立。',
      ]);
      await acute.say_and_wait([
        '呐……',
        callname,
        '，虽然我觉得不会啦，但难不成，你对那里很感兴趣——噫❤️～！',
      ]);
      await you.print_and_wait([
        '话还没说完，食指便已伸入了其中，惊得 ',
        y_call_a,
        ' 因刺激而发出了尖鸣。',
      ]);
    } else {
      await acute.say_and_wait(['那里……我有清洁过啦。']);
      await you.print_and_wait([
        '似乎是察觉了什么，低着头刻意别开视线的 ',
        y_call_a,
        '，率先给出了回答。',
      ]);
      await you.print_and_wait([
        '那样真是再好不过了，于是手指长途无阻地伸向了',
        acute.sex,
        '的后穴。',
      ]);
      await you.print_and_wait([
        '一根手指、两根手指，一根指节、两根指节……每每更近一步，都能听到 ',
        y_call_a,
        ' 的尖鸣。',
      ]);
      await acute.say_and_wait(['哈……', callname, '，果然是变态呐。']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async prepare_anal(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '左后两手掰弄着自己的后庭，粉嫩的后穴里时不时发出着「噗、噗」的声音。',
    ]);
    await you.print_and_wait([
      '若是往哪散发着炽热的吐息的后穴里，吹入嘴中的空气的话……',
    ]);
    await acute.say_and_wait(['要是那样做了的话，明天就不给你吃嘎吱干了……']);
    await you.print_and_wait([
      '即便是那个 ',
      y_call_a,
      '，在主动掰弄自己后庭的情况下，也不会同意这么干吗……',
    ]);
    await you.print_and_wait(['……那就更令人想往那个洞穴里吹气了啊。']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_leg(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '纤细而又光滑的大腿，完全看不出因训练而粗壮的痕迹。',
      ]);
      await you.print_and_wait([
        '上下抚摸着的 ',
        y_call_a,
        ' 的腿部，不知为何想要发出「win～win～」的声音。',
      ]);
      await you.print_and_wait([
        '可正当要更进一步时，这两条白皙的美腿便如蟒蛇般缠上了腰身。',
      ]);
      await acute.say_and_wait([
        '呐，从刚刚开始就一直是 ',
        callname,
        ' 在摸呢……我也可以上手吗？',
      ]);
      await you.print_and_wait([
        '……遭了，完全想象不到在腰身被缠住之后，自己能够战胜 ',
        y_call_a,
        ' 的摸样。',
      ]);
    } else {
      await you.print_and_wait([
        '平滑的脚趾与脚底板，完全看不出长期奔跑的痕迹，真是奇怪。',
      ]);
      await you.print_and_wait([
        '倒也不是有什么特殊的癖好，但就是想把这样的脚放入自己的口中。',
      ]);
      await acute.say_and_wait(['会真菌感染的哦？']);
      await you.say_and_wait([
        '……',
        y_call_a,
        '，这么漂亮而且没有臭味的脚，才不会得啦。',
      ]);
      await acute.say_and_wait(['唉……是这样吗？']);
      await you.print_and_wait([
        '说罢，在另一头，',
        y_call_a,
        ' 毫无犹豫的抱住了 ',
        you.get_colored_name(),
        ' 的脚，也想放入口中。',
      ]);
      await you.say_and_wait(['……不不不，还是算了吧。']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_tail(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['四指插入尾巴的发根之处，向下梳弄。']);
      await you.print_and_wait([
        '极好的触感，即柔顺也没有分岔……看得出来是一直在用心保养。',
      ]);
      await you.print_and_wait([
        '……听说对于一些',
        acute.uma_sex_title,
        '而言，尾巴是触碰的禁忌、只要碰到了就会被攻击……也不知是真是假。',
      ]);
      await acute.say_and_wait(['是真的哦～']);
      await you.print_and_wait([
        '微笑着回答疑问，尾巴却做出了与嘴不同的回应，开心地左右晃动。',
      ]);
    } else {
      await you.print_and_wait(['对着尾巴的发梢探出鼻子，轻嗅着其中的气息。']);
      await you.print_and_wait([
        y_call_a,
        ' 的尾巴，有一股春雨下的泥土般的清新气息。',
      ]);
      await you.print_and_wait([
        '想要把整根脸都埋进尾巴，尽情的享受着 ',
        y_call_a,
        ' 的气味。',
      ]);
      await acute.say_and_wait(['呐……', callname, ' 的爱好真奇怪呢～']);
      await you.print_and_wait([
        '如是说着，',
        y_call_a,
        ' 的尾巴上下摇晃着，拂过脸颊，扫弄鼻尖……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async pull_tail(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await acute.print_and_wait([
        acute.uma_sex_title,
        '的尾巴，明明不是训练员专用的开关。',
      ]);
      await acute.print_and_wait([
        '可现在，不论是在哪里，只要拽动一下尾巴，自己的屁股就会不自觉的翘起。',
      ]);
      if (acute.sex_code !== 1) {
        await acute.say_and_wait(
          ['唔，我呀，好像变成了很便宜的女人了呐——'],
          true,
        );
        await acute.print_and_wait([
          '伴随着尾巴的疼痛而高高翘起的屁股左右晃动，迫不及待的下体也已垂涎欲滴。',
        ]);
        await acute.print_and_wait([
          '想要更近一步，被拽动着尾巴、拍打着屁股、被玩弄着阴户，被从上到下彻底得玩弄，沾染上 ',
          callname,
          ' 的味道，被玩弄到大脑一片空空。',
        ]);
        await acute.print_and_wait([
          '……有这样想法的',
          acute.uma_sex_title,
          '，一定不止自己一个吧？',
        ]);
      }
    } else {
      await you.print_and_wait(['用力拽动着 ', y_call_a, ' 的尾巴。']);
      await you.print_and_wait(['只要稍微用力，屁股就会高高的翘起。']);
      await you.print_and_wait([
        '明明是',
        acute.uma_sex_title,
        '的禁区，一被碰触就会被攻击的位置，',
      ]);
      await you.print_and_wait([
        '可用力拽动这灰栗色的尾巴时，却不见 ',
        y_call_a,
        ' 的反抗。',
      ]);
      await acute.say_and_wait(['唔……明天不给你吃嘎吱干了哦？']);
      await you.print_and_wait([
        '即便嘟起的嘴巴仍在小小的抗议，但高高翘起的屁股却已经自发的晃动。',
      ]);
      await you.print_and_wait(['……你一定很期待吧，', y_call_a, '？']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async cunnilingus(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '出人意料的粉嫩，散发着',
      acute.child_sex_title,
      '子特有的气息。',
    ]);
    await you.print_and_wait([
      '小小的舌头向上舔弄一口……很难描述那到底是什么样的味道。',
    ]);
    await acute.say_and_wait([callname, ' 的舌头哇……感觉好痒呢。']);
    await you.print_and_wait([
      '另一边，',
      y_call_a,
      ' 伸出了手，轻轻抚摸着埋首躬耕者的头。',
    ]);
    await you.print_and_wait([
      '……明明是调教的一方，但反而感到了被驯服的安心呢。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async suck_virgin(acute, you, y_call_a) {
    await you.print_and_wait([
      '强硬得掰开因应激而合拢的双腿，将这张嘴贴近',
      acute.child_sex_title,
      '所特有的器官。',
    ]);
    await you.print_and_wait([
      '大口的吞舔、大口的吹气。潮湿的关口随即夹杂起粘稠的液体。',
    ]);
    await acute.say_and_wait(['啊……哪里❤️、弱点……被碰到了呐❤️～']);
    await you.print_and_wait([
      '脑袋不由自主的向上昂起，抚摸头顶的双手也不似最初般轻松，而是环绕在脑后、轻轻地推动。',
    ]);
    await you.print_and_wait([
      '即便是 ',
      y_call_a,
      '，也有想要追寻更高层度的快感啊。',
    ]);
    await you.print_and_wait(['……如是想着，在暖流到来之前，又是舔弄的一口。']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_blow_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait(['蹲跪在地上、如同兔子般双腿大开。']);
      await you.print_and_wait(['仰着头，眼前的是背光的「根物」。']);
      await acute.say_and_wait(['啊啦啦……真是生猛呢。']);
      await you.print_and_wait([
        '听从着命令，',
        y_call_a,
        ' 将赤红的脸贴向肉棒。一面舔弄着肉棒的根部，一面用鼻子上下摆弄、贪婪得吸吮着「生猛」的气息。',
      ]);
      await acute.say_and_wait(['哈❤️……好新鲜的味道❤️～']);
      await you.print_and_wait([
        '对着睾丸深情地一个吻，很快便听到了水滴的声音……',
      ]);
    } else {
      await acute.say_and_wait([
        '竟然要做『肉棒清洁』什么的……',
        callname,
        ' 的爱好真奇特呢。',
      ]);
      await you.print_and_wait([
        '趴到肉棒的身前，用鼻子顶着顶端。一面嗅着气味，一面做着回答。',
      ]);
      await you.print_and_wait([
        '很快，舌头从粉唇中伸了出来，添向了冠沟，好似真的在做清洁一般、左右滑弄，转了一圈。',
      ]);
      await you.print_and_wait([
        '垢污随之在舌尖上汇聚，可 ',
        y_call_a,
        ' 却并不反感，而是眼神迷离的将垢污含在口中、咽了下去。',
      ]);
      await acute.say_and_wait([
        '好了，保养好了『枪头』，这样不管 ',
        callname,
        ' 要对谁『开疆扩土』，都没问题了哦～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' 微笑地说着，可',
        acute.sex,
        '的鼻子仍顶在肉棒上，丝毫没有松开的迹象……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async ask_deep_blow_job(acute, you, callname) {
    await acute.print_and_wait([
      '在听到深喉的要求后，浅浅咬了一口肉棒以示抗议。',
    ]);
    await acute.print_and_wait(['但并没有真心抗议，随即主动吞下了整根肉棒。']);
    await acute.print_and_wait([
      '上下吞咽着已深入咽喉的肉棒，如潜水训练般一次次保持着节奏的呼吸。',
    ]);
    await acute.print_and_wait([
      '鼻子里吸吮着肉棒传来的「阳气」，嘴角因吞咽而无意间拔下的阴毛的残余……',
    ]);
    await acute.say_and_wait(['啊……这个，搞不好能用作训练呢。'], true);
    await acute.print_and_wait([
      '脑海中闪过了在训练场上主动吞咽 ',
      callname,
      ' 肉棒的念头，随即却因为缺氧的恍惚而为之挥去。',
    ]);
    await acute.print_and_wait(['……已经蓄势待发了。']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_blow_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '「啪、啪」两声并不算响亮的声响，',
      y_call_a,
      ' 的脸颊上出现了肉棒所留下的印迹。',
    ]);
    await you.print_and_wait([
      '直挺挺的肉棒顶在 ',
      y_call_a,
      ' 的鼻子上，散发着足以令人头晕目眩的「阳气',
    ]);
    await acute.say_and_wait([
      '唔……真过分呐，',
      callname,
      '。竟然用肉棒打',
      acute.child_sex_title,
      '子的脸什么的……这样做，可是会被讨厌的呐？',
    ]);
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        '即便嘴上说是如此，',
        y_call_a,
        ' 那双盯着肉棒的眼睛却也已出卖了自己。',
      ]);
      await you.print_and_wait([
        acute.sex,
        '主动的摆正了位置，吞下龙头、上下舔弄——',
      ]);
      await acute.say_and_wait([
        '可不要❤️……对其他❤️、',
        acute.child_sex_title,
        '子❤️，这样做哦？',
      ]);
      await you.print_and_wait([
        '尾巴兴奋的左右摆弄，吞咽的动作也更加卖力。脸颊上肉棒所留下的印迹下，隐藏着是内心深处的渴望。',
      ]);
    } else {
      await you.print_and_wait(['……可现在的你，真的在乎这些吗？']);
      await you.print_and_wait([
        '抓着 ',
        y_call_a,
        ' 的头发，将肉棒向粉唇上桶去。并没有受到牙齿的阻碍，很轻松的就进入到了口腔之中。',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' 呜呜地说着什么，可怎么也听不清。温暖的口腔里，沉眠的舌头被迫起床侍奉着进入口腔的龙体——只要能感受这个，就足够了。',
      ]);
      await acute.say_and_wait(['唔❤️……咕噗噗❤️～']);
      await acute.say_and_wait(['被 ', callname, '，使用了❤️～'], true);
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async force_deep_blow_job(acute) {
    await acute.print_and_wait(['自己的抗议什么的，在快感面前已经不重要了。']);
    await acute.print_and_wait(['头发被抓住，肉棒被轻松地捅进了咽喉之中。']);
    await acute.print_and_wait([
      '上下的运动，舌头的摆弄、不时从肉棒的根处传来的呜呜声……应该会让人兴奋吧？',
    ]);
    await acute.print_and_wait([
      '为了防止窒息，尽力张开小嘴，在一次次抽插中寻求呼吸的机会。',
    ]);
    await acute.say_and_wait(
      ['被使用了、被使用了、被使用了、被使用了、被使用了❤️～'],
      true,
    );
    await acute.print_and_wait(['会感到讨厌吗？并没有……真奇怪。']);
    await acute.print_and_wait(['反而有一种……被使用的快感。']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '指尖在肉杆上滑动，每每滑到龙头之时，红肿的肉棒变回一跳一跳。',
    ]);
    await acute.say_and_wait(['嗯……看多了话，感觉莫名的有些可爱呢～']);
    await you.print_and_wait([
      '说罢轻轻的向肉棒吹了口气，伸出了右手温柔的套弄着肉身……',
    ]);
    await acute.say_and_wait(['呐，', callname, '，这样就足够了吗？']);
    await you.print_and_wait([
      '像是在对肉棒说话一般，',
      y_call_a,
      ' 眯着眼睛，',
    ]);
    await you.print_and_wait(['媚眼如丝地望着向手中的「根器」……']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async ask_hand_and_blow_job(acute, you, callname) {
    await acute.print_and_wait(['吞咽着龙头，肉杆便变得一涨一涨。']);
    await acute.print_and_wait([
      '顺着一涨一涨的青筋两只手交替往下滑，气息便变得愈发的浓郁。',
    ]);
    await acute.say_and_wait([
      '咕❤️～',
      callname,
      ' 的小训练员看起来已经迫不及待了呢——',
    ]);
    await acute.print_and_wait(['说着向着龙头亲了一口。']);
    await acute.say_and_wait([
      '啾❤️～～～加油哦，要是能射出来的话～我会尽力喝下去的哦❤️～',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '抓着 ',
      y_call_a,
      ' 的手，放在自己的肉棒前，上下撸动。',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' 并没有反抗，而是顺从地两手上下滑弄。然而一向包容的 ',
      y_call_a,
      '，却露出了意味深长的笑容。',
    ]);
    await acute.say_and_wait([callname, '……还真是容易满足呢❤️～']);
    await you.print_and_wait([
      '依旧平和地微笑望着自己，可这微笑却总能看出几分挑衅的意义。',
    ]);
    await you.print_and_wait(['……还想要对 ', y_call_a, ' 做更过分的事情。']);
    await you.print_and_wait([
      '这般的想法，伴随着被手指划过肉杆的下身，渐渐地开始膨胀——',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_hand_and_blow_job(acute, you, y_call_a) {
    await you.print_and_wait([
      '明明 ',
      y_call_a,
      ' 手还在肉杆上撸动，另一边却按着 ',
      y_call_a,
      ' 的头发，将龙头按入了口中。',
    ]);
    await you.print_and_wait([
      '……都是 ',
      y_call_a,
      ' 不好哦？都怪 ',
      y_call_a,
      ' 那么色情，都怪 ',
      y_call_a,
      ' 温柔，都怪 ',
      y_call_a,
      ' 诱惑我——',
    ]);
    await you.print_and_wait([
      '耳朵一抖一抖、继续用力按压着 ',
      y_call_a,
      ' 的头。',
    ]);
    await you.print_and_wait([
      '并没有遭到反抗，相反口中的龙头受到了舌头的欢迎，套弄着杆身的双手仍在执行着自己的使命。',
    ]);
    await acute.say_and_wait(['唔❤️～～～就像工具一样，被使用着❤️～'], true);
    await acute.say_and_wait(['要忘不掉这种快乐了❤️～～～'], true);
    await you.print_and_wait([y_call_a, ' 翡翠色的眼眸中，闪烁着桃色的迷离……']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {string} is_huge_tit 奇锐骏是否是巨乳
   */
  async ask_tit_job(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        '丰满着乳房包裹着赤桐的肉棒，光滑的龙头上倒映着 ',
        y_call_a,
        ' 温柔的脸庞。',
      ]);
      await acute.say_and_wait([
        '真没想到，有朝一日我的胸部也能包裹住 ',
        callname,
        ' 的肉棒呢～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' 温柔地笑着，一只手指轻轻地在龙头上划圈。',
      ]);
      await you.say_and_wait(['……差不多该开始了。']);
      await acute.say_and_wait(['好呐～']);
      await you.print_and_wait([
        '轻轻地点头回应，',
        y_call_a,
        ' 将两手放在了自己的胸旁，挤压着自己乳量。',
      ]);
      await acute.say_and_wait([
        '我的胸部，是因为 ',
        callname,
        ' 才变得那么大的啦～所以呐，请尽情的享用吧❤️～',
      ]);
    } else {
      await acute.print_and_wait([
        '小小的乳房，想要包裹住如红铜般的肉棒，在物理上还是太过艰难。',
      ]);
      await acute.print_and_wait([
        '如果太过勉强的话，只怕是会如同锉刀般给肉棒带来痛苦的体现吧。',
      ]);
      await acute.print_and_wait(['……但也并非完全做不到乳交。']);
      await acute.print_and_wait([
        '挤弄着胸部，让粉嫩的乳首贴合肉杆、让肉棒在柔软的乳房上下推弄。',
      ]);
      await acute.say_and_wait(['嘿咻、嘿咻～']);
      await acute.print_and_wait(['在乳首的抚摸下，肉棒正在一点点变大……']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async ask_tit_and_blow_job(acute, you) {
    await you.print_and_wait(['一面挤弄着乳肉，一面伸出着舌头，']);
    await you.print_and_wait([
      '就像被鱼饵引上的鱼儿般，舌头随着龙头的上下而晃动。',
    ]);
    await you.print_and_wait(['每当抵到嘴前时，舌头一定伸入了冠状沟。']);
    await acute.say_and_wait(['唔❤️……咕噗噗❤️～噗哈❤️～哈❤️～']);
    await you.print_and_wait([
      '明明表情看不出淫靡，却一再发出着',
      acute.child_sex_title,
      '子不应该发出的下流的声音。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {string} is_huge_tit 奇锐骏是否是巨乳
   */
  async fuck_tit(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        '恶狠狠地推倒 ',
        y_call_a,
        '，将肉棒插入在不断「训练下」变得丰满的胸部。',
      ]);
      await you.print_and_wait([
        '双手提着粉嫩的乳首，下身不停地在乳夹中穿插，尽情感受着胸部的柔软。',
      ]);
      await you.say_and_wait(
        ['……', y_call_a, ' 的胸部是因为我变大的，是我的，是我可以尽情享用的——'],
        true,
      );
      await acute.say_and_wait(['是啊，我的胸部，是 ', callname, ' 的呢……']);
      await you.print_and_wait([
        '涨红着脸，好似完全没有意识到自己正在被人强制乳交般的 ',
        y_call_a,
        '，仍在微笑。',
      ]);
      await acute.say_and_wait([
        '嗯❤️……所以说，不用那么心急。只要 ',
        callname,
        ' 想，我就会用胸部帮你做哦～。',
      ]);
      await you.print_and_wait([
        '明明自己乳首仍被人捏在手中，疼得眼角滴出了泪水的 ',
        y_call_a,
        ' 仍试图伸出右手来摸侵犯者的额头。',
      ]);
      await you.print_and_wait(['……想要，更进一步的、侵犯 ', y_call_a, '。']);
    } else {
      await you.print_and_wait(['想要恶狠狠地插入 ', y_call_a, ' 的胸部。']);
      await you.print_and_wait([
        '看着 ',
        y_call_a,
        ' 欲哭却无泪、厌恶又无奈，微笑但胆怯的表情。一边享受着这样的表情，一边在胸部恶狠狠的抽插。',
      ]);
      await you.print_and_wait([
        '可真当推倒了 ',
        y_call_a,
        '，肉棒摆在胸部面前时，却发现怎么也做不到。',
      ]);
      await you.print_and_wait([
        '一则是胸部实在太小，夹不住。一则是 ',
        y_call_a,
        ' 仍在微笑，没有丝毫惧色。',
      ]);
      await acute.say_and_wait([
        '虽然没办法夹住呐，但如果 ',
        callname,
        ' 很想要乳交的话，那就来插这里吧❤️～',
      ]);
      await you.print_and_wait([
        '说着，就像是指引方向一般。',
        y_call_a,
        ' 在自己的乳首前，比了个正好能为肉棒通过的心。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async fuck_tit_and_mouth(acute, you, y_call_a) {
    await you.print_and_wait(['提着乳头、抽插着胸部，仅仅如此还不够。']);
    await you.print_and_wait([
      '想要 ',
      y_call_a,
      ' 也露出淫靡的表情，想要破坏 ',
      y_call_a,
      ' 的笑容。',
    ]);
    await you.print_and_wait([
      '粗壮的肉棒恶狠狠的冲向了 ',
      y_call_a,
      ' 的微笑。',
    ]);
    await you.print_and_wait([
      '攻破大门，闯进口中，并没有遇上想象中的抵抗，反而迎接的是舌头与唾液的侍奉。',
    ]);
    await you.print_and_wait([
      '好像随遇而安、又好像早有预料，',
      y_call_a,
      ' 的眼中舒展出了笑容。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async suck_anal(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['唔……真没想到 ', callname, ' 有这种爱好呢……']);
      await you.print_and_wait([
        '果然这样的PLAY，就算是 ',
        y_call_a,
        ' 也不能接受吗……',
      ]);
      await you.print_and_wait([
        '……但即便嘴上并不情愿，但 ',
        y_call_a,
        ' 还是主动的跪在了你的身后。',
      ]);
      await acute.say_and_wait([
        '唔……这种事情，可不能对其他的',
        acute.child_sex_title,
        '子做哦？',
      ]);
      await you.print_and_wait([
        '一面埋怨着，',
        y_call_a,
        ' 一面伸出了舌头，在后庭处上下的翻弄——',
      ]);
    } else {
      await you.say_and_wait(['咕噗噗……唔❤️～楸～噗噗……']);
      await acute.print_and_wait([
        '握着我的后臀，',
        callname,
        ' 尽心尽力地舔弄着后庭。而伴随着 ',
        callname,
        ' 时不时得亲吻，快感就像电流一般刺激着大脑。',
      ]);
      await acute.print_and_wait(['……等一下，好像有点太过刺激了。']);
      await you.say_and_wait([
        '咕噗……呐，',
        y_call_a,
        '，既然都让我做这个了，那我可不会简单的放过你哦？啾❤️～～～',
      ]);
      await acute.print_and_wait([
        '看着面前的训练员逐渐因快感而失声，',
        callname,
        ' 也因兴奋而变得有些「湿润」。',
      ]);
      await acute.print_and_wait(['滴答滴答，不知是从谁身上所滴下的流水声。']);
      await acute.print_and_wait([
        '……似乎有点太低估 ',
        callname,
        ' 的「潜力」了。',
      ]);

      await you.say_and_wait(['嗯……呜呜，噗露露、咕·～']);
      await acute.print_and_wait([
        '趴在我的身后，',
        callname,
        ' 贪婪得鼓弄着唇舌——',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async suck_nipple(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        '仅仅只是提出了吸吮乳头，',
        y_call_a,
        ' 便主动将胸部捧了过来。',
      ]);
      await acute.say_and_wait([
        '要温柔些哦，',
        callname,
        '，不管对我也好，对其他的',
        acute.uma_sex_title,
        '也好～',
      ]);
      await you.print_and_wait([
        '不去在意那略带深意的对白，将脸凑上前，轻轻地吮上一口。',
      ]);
    } else {
      await you.print_and_wait([
        '赤红的乳尖因充血而坚挺，似乎早已迫不及待成为唇舌的俘虏。',
      ]);
      await acute.say_and_wait(['啊啦啦……并没有很期待啦。']);
      await you.print_and_wait(['然而将脸凑上前，轻轻地吮上一口。']);
      await acute.say_and_wait(['啊❤️～']);
      await you.print_and_wait(['伴随着的是触电般的呻吟。']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async bite_nipple(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '对着乳头轻轻地咬上那么一口，',
      y_call_a,
      ' 便敏感地发出了呻吟。',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '唔❤️……',
        callname,
        '，这么用力的话……嗯～乳头是会被咬掉了哦？',
      ]);
      await you.print_and_wait([
        '忍耐着敏感带来的骚动与痛意，',
        y_call_a,
        ' 仍在轻轻抚摸着胸前的我。',
      ]);
    } else {
      await you.print_and_wait([
        '似乎咬的有些太过火了，呻吟声中还夹杂着吃痛的声音。',
      ]);
      await acute.say_and_wait([
        '呼❤️……',
        callname,
        '，这样咬，可是不会有母乳喝的哦？',
      ]);
      await you.print_and_wait([
        '轻轻地敲了一下我的后脑，',
        y_call_a,
        ' 依旧温柔的将我迎在胸前。',
      ]);
      await you.print_and_wait(['分不清是真的吃痛，还是欲拒还羞。']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_milk_and_hand_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['一边吸胸部，一边摸那里吗……可以哦～']);
      await you.print_and_wait([
        '枕在 ',
        y_call_a,
        ' 的膝上，安心地吸吮着面前的乳房，另一边，粗壮的肉棒被 ',
        y_call_a,
        ' 温柔地抚摸。',
      ]);
      await acute.say_and_wait(['呀……看起来很舒服的样子呢～']);
      await you.print_and_wait([
        '看似温柔地声音下，悄悄地透过侧乳，看到的却是红着脸的 ',
        y_call_a,
        '、时不时向逐渐充血挺立的肉棒飘去的目光。',
      ]);
    } else {
      await you.print_and_wait([
        '侧枕在 ',
        y_call_a,
        ' 的膝上，贪婪地在 ',
        y_call_a,
        ' 的乳房上左右吸吮，留下自己的痕迹。',
      ]);
      await you.print_and_wait([
        '一面忍耐着胸口的敏感、尽力微笑着的 ',
        y_call_a,
        ' 在另一边向下体伸出了右手。',
      ]);
      await you.print_and_wait([
        '持、握、套、环、滑——在种种姿势的交合下，肉身很快便因充血而挺立。',
      ]);
      await acute.say_and_wait([
        '唔～要射了吗？可以哦～不用忍耐也是可以的哦～',
      ]);
      await you.print_and_wait([
        '身心感到了一阵轻松，但又因太过安心多少有些叛逆，于是在舔弄着口中的乳首之余，对面前的乳首稍稍用了一点力……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 奇锐骏对玩家的称呼
   * @param {PrintedSpan} callname 玩家对奇锐骏的称呼
   */
  async milk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        '枕在 ',
        y_call_a,
        ' 的膝上，如同幼儿般吸吮着充血的粉头中溢出的乳液，',
      ]);
      await you.print_and_wait([
        '稍稍有些涩味，但仍有着乳香的气息，品饮久了，喉咙中反倒有些甘甜。',
      ]);
      await acute.say_and_wait([
        '嗯……',
        callname,
        ' 那么喜欢的话，那么要不要每天早上在训练之前，专门寄出几瓶保存起来呢……',
      ]);
      await you.print_and_wait([
        '一面用双手挤着乳房为我授乳，一面却又侧着脑袋的 ',
        y_call_a,
        ' 烦恼了起来。',
      ]);
    } else {
      await you.print_and_wait([
        '让自己担当',
        acute.uma_sex_title,
        '为自己授乳，会感到羞耻吗？当然会。',
      ]);
      await acute.say_and_wait([
        '最近乳房溢出的乳液有些多呢……可以的话，',
        callname,
        '，可以帮我处理一下吗？',
      ]);
      await you.print_and_wait([
        '可既然是 ',
        y_call_a,
        ' 的请求，那自然也是训练员的职责，我因而得以心安的继续躺在 ',
        y_call_a,
        ' 的膝上，继续吸吮着粉头中溢出的乳液。',
      ]);
      await you.print_and_wait([
        '另一边，',
        y_call_a,
        ' 一面扶着膝前我的头，一面露出了慈祥的微笑……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_non_penetrative(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '挺立的肉杆从后方直入，夹在了 ',
        y_call_a,
        ' 的两腿之间。',
      ]);
      await you.print_and_wait([
        '贴合着杆身的阴唇，吐露出爱液，上下摆弄进行着侍奉。',
      ]);
      await acute.say_and_wait(['哎嘿嘿……', callname, ' 真是有够精神的呢～']);
      await you.print_and_wait([
        '一面用手掌抚摸着肉棒的棒头，一面扭动着腰臀上下侍奉着棒身……',
      ]);
      await you.print_and_wait(['……', y_call_a, ' 依旧是如此的温柔。']);
    } else {
      await you.print_and_wait([
        '肉杆紧贴着着阴唇来回着抽弄，面前',
        acute.teen_sex_title,
        '的身体时不时发出噗嗤噗嗤的声音。',
      ]);
      await acute.say_and_wait(['唔❤️……啊❤️～']);
      await you.print_and_wait([
        '被逗弄的有些过头了，每当 ',
        y_call_a,
        ' 呻吟，肉杆便随之感到了杆旁的热浪。',
      ]);
      await acute.say_and_wait(['唔❤️～子宫那里……有点痒呢～']);
      await you.print_and_wait([
        '轻抚着的自己的下腹，略有些迫不及待般，',
        y_call_a,
        ' 更为积极地向着肉棒扭动着腰臀。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async sixty_nine(acute, you, y_call_a) {
    await you.print_and_wait([
      '丰满多汁的南国蔬果大口舔弄，身下的 ',
      y_call_a,
      ' 却也不甘示弱。',
    ]);
    await you.print_and_wait([
      '两块肉体重叠在了一起，伸出舌头进行着各自的比拼。',
    ]);
    await acute.say_and_wait(['咕噗噗❤️～才不会输……咕噗❤️～']);
    await you.print_and_wait([
      '明明已经泛滥成了一片，',
      y_call_a,
      ' 却仍在另一头努力的侍奉。',
    ]);
    await you.print_and_wait([
      '是不想输吗？还是单纯的败给了情欲？或者说怎样都好——',
    ]);
    await you.print_and_wait([
      '……在满脸都被白污侵占前，才不会放过 ',
      y_call_a,
      '。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {PrintedSpan} call_minoru 奇锐骏对骏川的称呼
   */
  async ask_hair_fuck(acute, you, y_call_a, call_minoru) {
    await you.print_and_wait([
      '侧过头，飘飘的银色长发落于肉棒之上，抓住其中一缕，环着肉棒绕了三圈，好似要将其绑起来一般。',
    ]);
    await acute.say_and_wait([
      '嗯……要是射出来的话，我的头发一定会染上洗也洗不掉的肉棒的气味吧……',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' 说着，手中的动作缠着头发撸动肉棒的动作却没有停下。',
    ]);
    await acute.say_and_wait([
      '要是被 ',
      call_minoru,
      '……或者其他',
      acute.uma_sex_title,
      '发现了头发上的味道的话……会怎么样呢？',
    ]);
    await you.print_and_wait([
      '……不去想，什么也不敢去想。',
      y_call_a,
      ' 的指尖缠绕在肉棒上的发丝越来越多……',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_hair_fuck(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '抓过 ',
      y_call_a,
      ' 的头发，凌乱的扑在肉杆、一把握住。顺着银白色的头发狠狠的撸动。',
    ]);
    await you.print_and_wait([
      '另一手，按着 ',
      y_call_a,
      ' 的头，压在肉棒上，让',
      acute.sex,
      '眼睁睁地看着自己的头发被「使用」的这一幕。',
    ]);
    await you.print_and_wait([
      '……要给 ',
      y_call_a,
      ' 的身上的各种地方留下标记……头发也不例外。',
    ]);
    await acute.say_and_wait(['就连头发也要占有吗……', callname, ' 真贪心呢～']);
    await you.print_and_wait([
      '微笑得说着，无需旁人的助力，',
      y_call_a,
      ' 主动朝着肉棒低下了头顶。',
    ]);
    await you.print_and_wait([
      '就好像等待出嫁的',
      acute.teen_sex_title,
      '般，等待喷发的肉棒，在',
      acute.sex,
      '的头发上戴上纯白的无垢。',
    ]);
    await you.print_and_wait([
      '……在',
      acute.sex,
      '本就灰白的头发上，留下一生永存的标记。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' 配合地高高举起了手臂，将光滑的腋下展露在外。',
    ]);
    await you.print_and_wait(['肉棒很快便伸了过去，顺着腋窝，来回的蹭弄。']);
    await you.print_and_wait([
      '并没有被厌恶，反而是颇感兴趣的将视线放在了自己腋旁正在挪蹭的肉棒上。',
    ]);
    await acute.say_and_wait([
      '这就是 ',
      callname,
      ' 喜欢的玩法吗……感觉有些可爱呢～',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '强硬的抬起了 ',
      y_call_a,
      ' 的右臂，肿大的肉棒随之在腋下可以的抽动。',
    ]);
    await you.print_and_wait([
      '就像是刻意留下气味一般，肉棒在腋下肆意的扭动、剐蹭。',
    ]);
    await you.print_and_wait([
      '但 ',
      y_call_a,
      ' 却一如既往的并未表现出反感，反而是伸出鼻子，嗅了一嗅——',
    ]);
    await acute.say_and_wait(['啊，这股阳气，绝对是洗不掉的味道呢❤️～']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async ask_foot_job(acute, you, callname) {
    await you.print_and_wait(['光滑的脚底，完全看不出在赛场上奔驰的痕迹。']);
    await you.print_and_wait([
      '而现如今，脚掌却聚拢在了一起。灵活的脚趾上下把弄着赤红的肉身。',
    ]);
    await acute.say_and_wait(['嘿咻、嘿咻……上下摇晃的话，会更舒服吗？']);
    await you.print_and_wait([
      '指尖抓着肉肝，就像玩具一般上下摇晃。明明只是脚趾，在玩弄肉棒上却好像有着与生俱来的天赋一般。',
    ]);
    await acute.say_and_wait([
      '下次足交的时候要穿上连裤袜？嗯……真拿 ',
      callname,
      ' 没办法呢～',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async force_foot_job(acute, you, callname) {
    await you.print_and_wait(['握住穿着连裤袜的双足，强迫它们放在脚边搓弄。']);
    await you.print_and_wait([
      '明明并非是为交合所用的器官、明明是即将在下一场比赛中疾驰的双腿，明明隔着一层黑丝连裤袜。但安奈不住的兴奋，却使得双足间的肉棒愈发膨胀。',
    ]);
    await acute.say_and_wait(['啊啦啦……我知道你在想什么哦，', callname, '。']);
    await you.print_and_wait([
      '另一面，是好似在低声轻吟着「我就是为了你而穿上黑丝连裤袜」的微笑。',
    ]);
    await acute.say_and_wait([
      '下一场比赛啊……我想穿着这条连裤袜参加，可以嘛❤️～',
    ]);
    await you.print_and_wait([
      '……说出这种话后，连裤袜会变成什么样，谁也不知道哦？',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async ask_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '主动缠绕上肉棒的银灰色的尾巴，伴随着一阵抽动，很快尾巴上到处便是粘稠的液体。',
    ]);
    await acute.say_and_wait([
      '呐，',
      callname,
      '……差不多了呐？除了尾巴，其他地方也……',
    ]);
    await you.print_and_wait([
      '……不，还不够。还要更多……还要在尾巴上做上更多的标记。',
    ]);
    await you.print_and_wait([
      '插入 ',
      y_call_a,
      ' 的尾巴，再一次搅动。让 ',
      y_call_a,
      ' 的尾巴腌泡在更多的液体之中。',
    ]);
    await you.print_and_wait([
      '……要让所有人看一眼尾巴都能看出来，',
      y_call_a,
      ' 是我的东西才行。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async force_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '用手将 ',
      y_call_a,
      ' 的尾巴缠绕着肉棒，上下抽动，在',
      acute.sex,
      '的尾巴上再一次留下白色的液体。',
    ]);
    await you.print_and_wait([
      '放眼望去，整根银灰色的尾巴，就像是被浸泡在白色液体之中。',
    ]);
    await you.print_and_wait(['……但是还不够，还远远没有达到期望的程度。']);
    await acute.say_and_wait(['哈……真是拿 ', callname, ' 没有办法呢。']);
    await you.print_and_wait([
      '另一边，',
      y_call_a,
      ' 叹了口气，身体却不争气的滴下了液体。',
    ]);
    await acute.say_and_wait([
      '在下一场比赛结束前，我不会清洗尾巴啦……所以呢——',
    ]);
    await acute.say_and_wait(['除了尾巴以外，也看看其他地方呐❤️～？']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait('呐，进来吧❤️～');
      await you.print_and_wait([
        '眼前的',
        acute.teen_sex_title,
        '，张开了双臂、将眼前的人儿涌入怀中。',
      ]);
      await you.print_and_wait(
        '身下的肉棒，伴随着一声「啊」响，很轻松的就进入了穴中。',
      );
      await you.print_and_wait('一面感受着面前的宽臂，一面抚摸着下腹的凸起。');
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait('还有那撕裂着自己处女的阵阵痛意——');
        await acute.say_and_wait('这下，终于……');
        await acute.say_and_wait([
          '终于在我的全身都刻下自己的标记了呢，',
          callname,
          '～',
        ]);
      } else {
        await acute.say_and_wait([
          '啊……看起来，接下来我要被 ',
          callname,
          ' 彻底的侵犯了呢❤️～',
        ]);
      }
    } else {
      await you.print_and_wait('插入、插入、插入……不停地摇动下体。');
      await you.print_and_wait([
        '想要把更多的精华，注入 ',
        y_call_a,
        ' 的身体。',
      ]);
      await acute.say_and_wait('咕❤️……那里❤️好厉害❤️～');
      await you.print_and_wait([
        '明明 ',
        y_call_a,
        ' 正吐着舌头呻吟，却完全感受不到放荡的要素。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['这么大的肉棒，真的塞得进后庭吗？']);
      await you.print_and_wait([
        '正在烦恼着生理上是否合理，而 ',
        y_call_a,
        ' 却主动伸出双手张开了后庭。',
      ]);
      await acute.say_and_wait(['呐……进来吧～？']);
      await you.print_and_wait([
        '绯红的脸上莞尔一笑，主动地迎接着「异物」对后穴的侵入。',
      ]);
    } else if (era.get('exp:100:性交次数') > 0) {
      await acute.say_and_wait([
        '被侵犯了❤️不仅仅是小穴，就连屁股也被侵犯了呐❤️～',
      ]);
      await you.print_and_wait([
        '一只手在脸旁比了个V字，双眸向上看又伸出了舌头，',
        y_call_a,
        ' 露出了就像是扮鬼脸一般的表情。',
      ]);
      await acute.say_and_wait([
        '嗯？我在干什么？唔……我听说这样的姿势，能让 ',
        callname,
        ' 更兴奋来着呢～',
      ]);
      await you.print_and_wait([
        '一面说着，',
        y_call_a,
        ' 扭动着自己丰满的屁股……',
      ]);
      await acute.say_and_wait([
        '啊啦，能感觉身体里的变大了呢❤️～看来是真的有效呐～',
      ]);
    } else {
      await acute.say_and_wait(['啊❤️、唔❤️……噗噗、嗯❤️……']);
      await you.print_and_wait([
        '伴随着后穴的开拓，呻吟声不自觉地从 ',
        y_call_a,
        ' 的口中流出。',
      ]);
      await you.print_and_wait([
        '是喜欢这种后庭的玩法？还是单纯的忍受着这样的刺激？无论是哪个都好，重要的是，后庭内的肉棒正渐渐肿大——',
      ]);
      await acute.say_and_wait([
        '唔❤️……要射了吗？哈❤️……要射到后穴里？还是小穴里？还是说……',
      ]);
      await you.print_and_wait([
        '像是开玩笑般的，',
        y_call_a,
        ' 一只手在自己的嘴旁比了个「V」字。',
      ]);
      await acute.say_and_wait(['还是说，要射在我的嘴里呐？❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '银灰色的头发垂落在身后，白皙的后背与丰满的肥臀一览无余。',
      ]);
      await acute.say_and_wait([
        '这个体位完全看不见 ',
        callname,
        ' 呐……真讨厌呢～',
      ]);
      await you.print_and_wait([
        '将脸埋在身下的 ',
        y_call_a,
        '，发出了小小的抗议。',
      ]);
      await you.print_and_wait([
        '抗议自然无效，肿胀的肉棒，已经向那肥臀下的小穴所逼近——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await you.print_and_wait([
          y_call_a,
          ' 低吟了一声，双手用力抓着，缓解着身下的疼痛。',
        ]);
        await acute.say_and_wait([
          '没想到，自己珍藏了十几年的处女，在看不到的情况下就失去了呢。',
        ]);
        await acute.say_and_wait(['呐……', callname, '，要负起责任来哦？']);
      }
    } else {
      await you.print_and_wait(['就像小狗一样的、动物般的交合。']);
      await you.print_and_wait([
        '揉捏着 ',
        y_call_a,
        ' 的屁股，不断的将肉棒往小穴中抽送。',
      ]);
      await you.print_and_wait([
        '「啪！」朝着屁股用力的拍击，穴内的紧缚感便猛地变强。',
      ]);
      await acute.say_and_wait([
        '噗咕呼❤️……不够紧吗？明白了❤️……我会用力夹紧的❤️～噗噗❤️……',
      ]);
      await you.print_and_wait(['没有沟通，但却能通过这种方式进行交流。']);
      await you.print_and_wait([
        '……',
        y_call_a,
        '，果然很喜欢「这种」方式吗？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「啪、啪」，伴随着清脆的声响、',
        y_call_a,
        ' 白皙的肥臀上多出了两个赤红的印子。',
      ]);
      await you.print_and_wait([
        '就像是理解了在拍击肥臀所蕴藏的深意，',
        y_call_a,
        ' 的双手随即来到了后庭旁，张开了自己的后穴。',
      ]);
      await acute.say_and_wait(['啊❤️……噗❤️、哈❤️～～～']);
      await you.print_and_wait([
        '肉棒一点点的深入，背对着自己的 ',
        y_call_a,
        ' 便发出一点点的娇喘。',
      ]);
      await you.print_and_wait([
        '……明明正对着的时候还在假装矜持，可一旦背对着的时候，就暴露了本性吗？',
      ]);
    } else if (era.get('tcvar:100:接近高潮')) {
      await you.print_and_wait(['啪！啪！啪！啪！……']);
      await you.print_and_wait([
        '伴随着节奏拍击着 ',
        y_call_a,
        ' 的臀部，在一次次后庭的紧缩中迎来欢愉的高潮。',
      ]);
      await you.print_and_wait([
        '原本白嫩的肥臀如今已是一片红肿，即便只是轻轻敲打，也能迎来小穴的泛滥。',
      ]);
      await acute.say_and_wait(['哈❤️……不行❤️不行❤️……已经、不行了❤️。']);
      await you.print_and_wait([
        '在一次次快感之中逐渐放荡的 ',
        y_call_a,
        '，如今已经失去了往常的余裕，就像是在求饶一般，在一次次泛滥中重复着相似的话语。',
      ]);
      await you.print_and_wait([
        '在下体处弄得粘稠的手指伸向了 ',
        y_call_a,
        ' 的脸庞，放入',
        acute.sex,
        '的嘴中，被 ',
        y_call_a,
        ' 贪婪的吸吮、吞下。',
      ]);
      await acute.say_and_wait([callname, ' 的……手指❤️～']);
      await acute.say_and_wait(['我已经……是 ', callname, ' 的东西了❤️。']);
    } else {
      await you.print_and_wait([
        '每次抽插，都能感觉到 ',
        y_call_a,
        ' 的颤抖。',
      ]);
      await you.print_and_wait([
        '就像是刻意忍耐着娇喘一般，听不见放荡的娇喘，而只能隐隐听到「呜呜～」的声音。',
      ]);
      await you.print_and_wait(['「啪！～」']);
      await acute.say_and_wait(['啊❤️']);
      await you.print_and_wait([
        '而每当这个时候，只要一拍 ',
        y_call_a,
        ' 的屁股，后穴内就会为之一紧，就连空虚的小穴也会肉眼可见的湿润。',
      ]);
      await you.say_and_wait(['呐，', y_call_a, '……这还只是个开始哦？']);
      await acute.say_and_wait(['……❤️']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '面对面地，',
        y_call_a,
        ' 坐在了自己的大腿之上。',
      ]);
      await you.print_and_wait(['双手围在脖子上，两张脸离的很近很近。']);
      await acute.say_and_wait(['哎嘿嘿……这样做的话，感觉很让人害羞呢。']);
      await you.print_and_wait([
        '脸上渐渐被绯色所侵染，用膝盖立起了身体的 ',
        y_call_a,
        '，慢慢的在顶着小穴的肉棒上坐了下来……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await you.print_and_wait([
          y_call_a,
          ' 微微的皱了下眉头，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await you.say_and_wait(['……会很痛吗？']);
        await acute.say_and_wait(['嗯，稍微有一点点呢……']);
        await acute.say_and_wait([
          '不过呢……只要能看着 ',
          callname,
          '，不管是什么痛苦，一定都可以克服哦❤️～',
        ]);
        await you.print_and_wait([
          '扶着自己的脸，眼前的 ',
          y_call_a,
          ' 露出了温柔的笑容。',
        ]);
      }
    } else {
      await you.print_and_wait([
        '环绕着自己的脖颈，',
        y_call_a,
        ' 在身前扭动着腰姿。',
      ]);
      await acute.say_and_wait([
        '唔❤️……要再快一点吗？还是就这样？……嗯❤️～哪种对 ',
        callname,
        ' 更舒服呢？',
      ]);
      await you.print_and_wait([
        '明明是被侵犯的一方，但却比我还要主动。被小穴包裹着的肉棒，几乎被无微不至的「关照」。',
      ]);
      await you.print_and_wait([
        '……即便不去可以的抬弄着 ',
        y_call_a,
        ' 的屁股，',
        acute.sex,
        '也会自己上下抽动的吧？',
      ]);
      await acute.say_and_wait(['❤️～']);
      await you.print_and_wait([
        '满脸赤红的 ',
        y_call_a,
        ' 望着自己，满脸都是幸福。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '坐在自己的大腿上，',
        y_call_a,
        ' 靠在自己的怀中。',
      ]);
      await you.print_and_wait(['银灰色的发丝上散发着古朴却又淫靡的气息。']);
      await acute.say_and_wait(['呐，', callname, '，不能面对面做吗？']);
      await you.print_and_wait([
        '挺立的肉棒戳弄着小穴的大门，回绝了 ',
        y_call_a,
        ' 的抗议。',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await you.print_and_wait([
          y_call_a,
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await you.say_and_wait(['……会很痛吗？']);
        await acute.say_and_wait(['……很痛哦？']);
        await you.print_and_wait([y_call_a, ' 摸了摸湿润的眼角。']);
        await acute.say_and_wait(['所以啊……之后还是，面对面的做吧？']);
      }
    } else {
      await acute.say_and_wait(['啊❤️……噗❤️、哈❤️～～～']);
      await you.print_and_wait([
        '小声的呻吟，',
        y_call_a,
        ' 按着膝盖，上下抽送、轻轻地扭动着身体。',
      ]);
      await you.print_and_wait([
        '似乎是对不能面对面做的抗议？尾巴没精神的垂在了一旁。',
      ]);
      await you.print_and_wait([
        '这样可不行呢……伸出手，如同监工般拽动着 ',
        y_call_a,
        ' 的尾巴。转瞬间，穴内便迎来了一股热浪。',
      ]);
      await acute.say_and_wait(['唔❤️！？', callname, '，尾巴不行——']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['贴着墙壁，小腹几乎紧密的贴在一起。']);
      await you.print_and_wait([
        '被逼在墙角的 ',
        y_call_a,
        '，肉棒顶在',
        acute.sex,
        '那软糯的小穴上，左右摩擦着。',
      ]);
      await acute.say_and_wait(['啊哈哈……已经无路可走了呢。']);
      await you.print_and_wait([
        '说罢，完全没有一丝无奈痕迹的 ',
        y_call_a,
        '，微笑地抬起了自己的右腿——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await acute.say_and_wait([
          '处女被 ',
          callname,
          ' 夺走了呢～真是没办法啊～',
        ]);
        await you.print_and_wait([
          '却好似完全没有感觉到疼痛一般，',
          y_call_a,
          ' 微笑地说着。',
        ]);
        await you.say_and_wait(['……不痛吗？']);
        await acute.say_and_wait(['嗯……还好啦～']);
        await you.print_and_wait([
          y_call_a,
          ' 温柔的说着，话音刚落，便开始扭动起自己的腰身。',
        ]);
        await acute.say_and_wait(['倒是 ', callname, '……不动起来吗？']);
      }
    } else {
      await you.print_and_wait([
        '小腹紧紧的贴在一起，子宫口一次又一次受到冲击。',
      ]);
      await you.print_and_wait([
        '即便是那个温柔的 ',
        y_call_a,
        '，在无路可退的情况下，也显出了放荡的神情。',
      ]);
      await acute.say_and_wait(['哈❤️～唔❤️～不要看我这幅表情啦。']);
      await you.print_and_wait([
        '明明说的是不想被看到自己的表情，捂住的却是自己的眼睛。',
      ]);
      await you.print_and_wait(['这个位置，肉棒可以深深的抵着宫口。']);
      await you.print_and_wait([
        '……再不逃跑的话，',
        y_call_a,
        ' 的子宫可就要被肉棒攻陷了哦？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['靠着墙壁，肉棒穿插在小穴之上。']);
      await you.print_and_wait([
        '明明是被逼至了墙角，穴口却仍在肉杆上下的摩擦。',
      ]);
      await acute.say_and_wait(['背面吗……这个姿势又要被欺负了呢～']);
      await you.print_and_wait([
        '……说是被欺负，可明明尾巴已经开心的摆动了起来。',
      ]);
      await you.print_and_wait([
        '对于已经发情的',
        acute.uma_sex_title,
        '无需客气。按着 ',
        y_call_a,
        ' 的屁股，尽情的冲刺吧——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await you.print_and_wait([
          y_call_a,
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await acute.say_and_wait([
          '「见红」了呢……被 ',
          callname,
          ' 留下印记了啊。',
        ]);
        await you.print_and_wait([
          '看不见 ',
          y_call_a,
          ' 的表情，只能看到',
          acute.sex,
          '的耳朵在左右摇晃。',
        ]);
        await acute.say_and_wait(['这一次，是被欺负所以没办法啦……']);
        await acute.say_and_wait(['下次，一定要面对面卿卿我我的做哦？']);
      }
    } else {
      await acute.print_and_wait(['屁股上到处都是红色的印子。']);
      await acute.print_and_wait([
        '不仅被拍着屁股，就连尾巴也被 ',
        callname,
        ' 当做支撑点拽在了手中。',
      ]);
      await acute.print_and_wait([
        '每一次小穴里肉棒对子宫的挤压，都能让自己彻底明白自己正在被「侵犯」的事实。',
      ]);
      await acute.say_and_wait(['哈……被侵犯了、被侵犯了、被侵犯了❤️～']);
      await acute.print_and_wait([
        '明明是不可以的，但一想到自己正在被 ',
        callname,
        ' 侵犯，正在被拍着屁股、正在被拽着尾巴，心中就不由自主的为之激荡。',
      ]);
      await acute.say_and_wait(
        ['哈、哈……这样的表情，绝对不能被 ', callname, ' 看到呐❤️～'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '明明是在赛场上驰骋的',
        acute.uma_sex_title,
        '，可举起来时却一点也不重。',
      ]);
      await you.print_and_wait([
        '手指轻易地陷进了丰满的肥臀之中，明明只是一个屁股却格外的贪婪。',
      ]);
      await acute.say_and_wait(['哎呀呀……又是个完全没法逃跑的姿势呢～。']);
      await you.print_and_wait(['明明说着的是逃跑，但两腿却已经缠入了腰身。']);
      await you.print_and_wait(['正对着肉棒的小穴，也主动地开始吞纳——']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await you.print_and_wait([
          y_call_a,
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await you.say_and_wait(['……会很痛吗？']);
        await acute.say_and_wait(['不痛哦。']);
        await you.print_and_wait([y_call_a, ' 微笑的回答着。']);
        await acute.say_and_wait(['反正也逃不掉的，对吧❤️～？']);
      }
    } else {
      await acute.print_and_wait([
        '被 ',
        callname,
        ' 举着屁股抱在怀里，除了缠紧对方的腰身以外，自己什么都做不了。',
      ]);
      await acute.print_and_wait([
        '即便是想要稍稍的想要从肉棒中抽出身体放松一下，也会立刻被肉棒追上再一次扣响子宫的大门。',
      ]);
      await acute.say_and_wait(['这个姿势……真的好不妙。'], true);
      await acute.print_and_wait([
        '就像被当做自慰工具了一般，一边抱着屁股，一边来回抽插着小穴。',
      ]);
      await acute.print_and_wait([
        '子宫愈发的瘙痒，每次撞击穴中时吐出的香舌所夹带着呻吟声也越来越大。',
      ]);
      await acute.print_and_wait([
        '再这样下去，很快就会变成「放荡的',
        acute.child_sex_title,
        '子了吧」。',
      ]);
      await acute.say_and_wait(['啊❤️～', callname, '，不要看我的表情。']);
      await acute.say_and_wait(['我快……忍不住了❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fucked_suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['被 ', y_call_a, ' 抱着屁股面对面举了起来。']);
      await you.print_and_wait([
        '明明是在交合，但看起来却像是奶奶抱孙子一样的场景。',
      ]);
      await acute.say_and_wait(['很乖呢，', callname, '❤️～要慢慢插进来哦。']);
      await you.print_and_wait([
        '在 ',
        y_call_a,
        ' 的协助下，自己的肉棒正对着小穴，伴随着 ',
        y_call_a,
        ' 的动作，慢慢深入穴中……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await acute.say_and_wait([
          '处女被 ',
          callname,
          ' 夺走了呢～做得很好哦。',
        ]);
        await you.print_and_wait([
          '就像是完成了什么了不起的成就一般，',
          y_call_a,
          ' 微笑地说着。',
        ]);
        await you.print_and_wait(['……不痛吗？虽然很想要这样去问——']);
        await acute.say_and_wait([
          '接下来要动起来了，不舒服的话记得跟我说哦？火车要进山洞咯～',
        ]);
        await you.print_and_wait([
          '感觉 ',
          y_call_a,
          ' 完全是一副乐在其中的摸样。',
        ]);
      }
    } else {
      await you.print_and_wait([
        '抓着 ',
        y_call_a,
        ' 的乳头，就像寄生虫一样缠在 ',
        y_call_a,
        ' 的腰上。',
      ]);
      await you.print_and_wait([
        '肉棒一直在穴中抽插，但却并非是自己在主动挺动的腰身，而是正抱着自己屁股的 ',
        y_call_a,
        ' 在上下挥动。',
      ]);
      await acute.say_and_wait([
        '唔❤️啊❤️……可以在快一点吗？要多添煤，火车才能跑的更快……咕❤️～～～',
      ]);
      await you.print_and_wait([
        '手上的动作越来越快，那温柔的面色与其说是慈爱，倒不如说近乎于淫乱了。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {string} penis_color 玩家阴茎的颜色
   */
  async hug_suspended_congress(
    acute,
    you,
    callname,
    y_call_a,
    is_first,
    penis_color,
  ) {
    if (is_first) {
      await you.print_and_wait([
        '举着屁股，将背对着的 ',
        y_call_a,
        ' 高高举起。',
      ]);
      await you.print_and_wait([
        '整个身体都被托在手中，赤红的肉棒在不停摩擦着女阴。',
      ]);
      await acute.say_and_wait(['完全逃不了了呢……至少，至少是面对面的话……']);
      await you.print_and_wait([
        '怀中的 ',
        y_call_a,
        '，不知是兴奋还是恐惧地颤抖着。',
      ]);
      await you.print_and_wait([
        penis_color,
        '的肉棒，就在这一刻深入了小穴之中——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤红的鲜血从小穴处流出，滴答在身下。']);
        await you.print_and_wait([
          y_call_a,
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await acute.say_and_wait(['很痛哦，很痛哦，', callname, '……？']);
        await acute.say_and_wait(['所以啊……还是面对面做吧……']);
        await acute.say_and_wait(['好吗？']);
      }
    } else {
      await acute.print_and_wait([
        '子宫正发出着颤抖的警告，重力迫使着小穴重重的压在了 ',
        callname,
        ' 的肉棒之上，',
      ]);
      await acute.print_and_wait([
        '就像是被当做自慰工具了一样，被抱在怀中完全动不了。',
      ]);
      await acute.print_and_wait([
        '要是 ',
        y_call_a,
        ' 松开了正支撑的自己的双手，脚尚且够不到地面的 ',
        callname,
        '，肯定会被肉棒顶着子宫举起来吧。',
      ]);
      await acute.print_and_wait(['那样的话，毫无疑问会「坏掉」的。']);
      await acute.say_and_wait([
        '哈❤️……要掉下去了❤️、要坏掉了❤️、被，要被 ',
        callname,
        ' 用坏掉了❤️～',
      ]);
      await acute.print_and_wait([
        '环绕着训练员脖颈，被不断抽插而失声娇喘的人，不是那个温柔的 ',
        y_call_a,
        '，而只是一个被侵犯而感到欢愉的',
        acute.teen_sex_title,
        '。',
      ]);
      await acute.say_and_wait(['要坏掉了❤️～～～～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cowgirl(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「要自己动哦？」这样说了之后，',
        y_call_a,
        ' 便主动的爬到了自己的身上。',
      ]);
      await you.print_and_wait([
        '双腿夹在胯部的旁边，双手十指紧扣，湿润的小穴正顶着一柱擎天的赤红肉棒。',
      ]);
      await you.print_and_wait([
        '接下来，只要 ',
        y_call_a,
        ' 慢慢的放下腰身就好了。',
      ]);
      await acute.say_and_wait([
        '我毕竟也是',
        acute.uma_sex_title,
        '嘛，',
        callname,
        '，所以啊，在我满足之前，是不会停下来的哦。',
      ]);
      await acute.say_and_wait(['所以呐……准备好了吗？']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          '伴随着 ',
          y_call_a,
          ' 腰身的落下，赤红的鲜血从小穴处流出，滴答在身下。',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' 低吟了一声，嘴里不自主的发出了「呜呜」的声音。',
        ]);
        await you.say_and_wait(['……会很痛吗？']);
        await acute.say_and_wait([
          '嗯……现在还在关心我的 ',
          callname,
          ' 我很喜欢啦。',
        ]);
        await acute.say_and_wait([
          '不过呢……比起关心我，我觉得还是先关心一下自己比较好呐。',
        ]);
        await acute.say_and_wait([
          '准备好担负起让我『见红』的责任了嘛，',
          callname,
          '？',
        ]);
      }
    } else {
      await you.print_and_wait([
        '明明一直以来在做爱中都很弱气的 ',
        y_call_a,
        '，现在却好像转换了人格般，不停地摆弄着身体。',
      ]);
      await you.print_and_wait([
        '摇摆、扭动、抽插，小穴一次又一次的吞噬着肉棒，肉棒一次又一次的因穴压而变转着摸样。',
      ]);
      await you.print_and_wait([
        '而十指相扣的双手，被 ',
        y_call_a,
        ' 紧紧地抓住，连接下体的胯部，被两只脚深深的夹住。完全没有了逃跑的空间。',
      ]);
      await acute.say_and_wait(['呐……你知道吗，', callname, '。']);
      await you.print_and_wait([
        '仰望着 ',
        y_call_a,
        ' 的脸庞，绯润的脸蛋上夹杂着危险的气息。',
      ]);
      await acute.say_and_wait(['我一直……都在等着现在这个时候哦？']);
      await you.print_and_wait([
        '伴随着心灵之锁被解开的声音，在胯部上的 ',
        y_call_a,
        ' 开始舞动起了自己的身体……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async stimulate_g_spot(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait([
        '肉棒一再的抽插，子宫口被阵阵的撞击，湿润的穴内一次又一次迎来着潮顶。',
      ]);
      await acute.print_and_wait([
        'G点不断被撞击，就连自己也不由得吐出香舌，发出阵阵的娇喘。',
      ]);
      await acute.say_and_wait(['咕哦哦哦齁哦❤️～～～～']);
      await acute.print_and_wait([
        '明明是对于',
        acute.child_sex_title,
        '子来说是不可以发出的，下流、不成体统的声音，但却非常适合被蹂躏G点而发情的雌性。',
      ]);
      await acute.say_and_wait([
        '咕哦齁❤️～要去了、要去了，要去了啊❤️～～～～',
      ]);
    } else {
      await acute.say_and_wait([
        '噗咕❤️～要变成',
        acute.child_sex_title,
        '子了、变成雌性了❤️～',
      ]);
      await acute.say_and_wait([
        '要被 ',
        callname,
        ' 那根臭烘烘的、味道很重，每次训练完后都会翘起来的肉棒变成雌性了啊❤️～～～',
      ]);
      await you.say_and_wait(['……你在说什么呢，母畜！']);
      await acute.say_and_wait([
        '咕齁❤️～身体内的肉棒又变大了……被发现了❤️每次训练结束后，都会特别在意 ',
        callname,
        ' 小帐篷的事，被发现了❤️',
      ]);
      await acute.say_and_wait([
        '要被 ',
        callname,
        ' 的肉棒狠狠地教育啦❤️～～～',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async stimulate_large_intestine(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['唔❤️～～～～屁股、好舒服……']);
      await you.print_and_wait([
        '每次肉棒的递送，都能感到一阵火辣辣的痛觉与快感。',
      ]);
      await you.print_and_wait([
        '……明明是后庭，是不应该感受到舒服的器官才对。',
      ]);
      await acute.say_and_wait([
        '屁股……要被调教成 ',
        callname,
        ' 专用的后穴了呐……',
      ]);
    } else {
      await you.print_and_wait([
        '每次抽插后庭，',
        y_call_a,
        ' 的腰就会十分配合的起来。',
      ]);
      await you.print_and_wait([
        '每次蹂躏S状结肠后想要拔出时，都能感觉到强大的穴压恋恋不舍的试图留住肉棒。',
      ]);
      await you.say_and_wait(['……难道说，', y_call_a, ' 很喜欢这种玩法吗？']);
      await acute.say_and_wait(['咕呼❤️～我不知道你在说什么哦❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async stimulate_womb(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait(['炽热的子宫，隔着一层小腹被手掌所抚摸。']);
      await acute.print_and_wait([
        '而另一边，是正在后庭之中不断挤压子宫的肉棒。',
      ]);
      await acute.print_and_wait(['前后包夹、十面埋伏……']);
      await acute.print_and_wait([
        '明明是如同物品般被彻底的置入 ',
        callname,
        ' 的鼓掌之下，但却随之感到的是身为雌性的幸福。',
      ]);
      await acute.say_and_wait(['哈❤️已经，彻底逃不掉了～']);
    } else {
      await acute.print_and_wait([
        '一边是贪婪的吞咽着肉棒的后庭，另一边是湿润粘稠的小穴。',
      ]);
      await acute.print_and_wait([
        '不断的刺激子宫之下，粘液不断的从小穴上落下，如银河般垂落在地面上。',
      ]);
      await acute.print_and_wait([
        '不仅仅是小穴，就连另一张小嘴中生出的唾液，也不断的从不断呻吟的唇口中滑落。',
      ]);
      await acute.say_and_wait(['齁呼❤️……哈，小腹好热，好痒。❤️']);
      await acute.say_and_wait([
        '呐，',
        callname,
        ' 不要只光顾后穴……齁呼❤️……小穴也，插进来吧？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async insult(acute, you, callname, y_call_a) {
    const message = [
      async () => {
        await you.say_and_wait('喜欢被辱骂的变态！');
        await acute.say_and_wait('才没有喜欢哦？只是会有点小小的兴奋起来呢～');
        await you.print_and_wait([
          y_call_a,
          ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
        ]);
        await you.print_and_wait('……那不就是喜欢嘛！');
      },
      async () => {
        await you.say_and_wait('明明战斗力超强，却非要当诱受的抖M！');
        await acute.say_and_wait('战斗力超强？才没有那回事啦～');
        await you.print_and_wait([
          y_call_a,
          ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
        ]);
        await you.print_and_wait([
          '……我恐怕迟早有一天会看到 ',
          y_call_a,
          ' 参加拳王竞标赛。',
        ]);
      },
    ];
    if (you.sex_code > 0) {
      message.push(async () => {
        await you.say_and_wait('一插进去就不让我走的淫荡屁股！');
        await acute.say_and_wait([
          '嘿嘿～这里是淫荡屁股的 ',
          y_call_a,
          ' 哦～',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
        ]);
        await you.print_and_wait('……别把这当做称号啊！');
      });
    }
    if (acute.sex_code !== 1) {
      message.push(
        async () => {
          await you.say_and_wait('你这头淫乱的母猪！');
          await acute.say_and_wait('不是母猪，只是普通的马娘呐❤️～');
          await you.print_and_wait([
            y_call_a,
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await you.print_and_wait('……并没有否定「淫乱」这回事吗。');
        },
        async () => {
          await you.say_and_wait('擅自发情的雌畜！');
          await acute.say_and_wait('嗯……也不是会对所有人都发情的啦～');
          await you.print_and_wait([
            y_call_a,
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await you.print_and_wait('……倒是反驳一下雌畜这点啊。');
        },
        async () => {
          await you.say_and_wait(
            '看起来成熟稳重但肯定是在平常训练的时候就在想着涩涩事情的废物奶奶！',
          );
          await acute.say_and_wait(
            '唔姆……训练的时候我还是很专注的啦～只有在枯树洞里的时候才偶尔会有涩涩的念头呢～',
          );
          await you.print_and_wait([
            y_call_a,
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await you.print_and_wait([
            '……',
            y_call_a,
            ' 不为人知的一面被发现了！',
          ]);
        },
        async () => {
          await you.say_and_wait('好用的外卖小穴！');
          await acute.say_and_wait(
            '咕噜姆……外卖小穴？一直吃外卖对身体不好哦～',
          );
          await you.print_and_wait([
            y_call_a,
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await you.print_and_wait(
            '……至少这次是真的不知道「外卖小穴」是什么意思。',
          );
        },
        async () => {
          await you.say_and_wait('一拍屁股就会夹紧的废物小穴！');
          await acute.say_and_wait('嘛……毕竟太舒服啦，所以也没办法嘛～');
          await you.print_and_wait([
            y_call_a,
            ' 温和地笑着，似乎并不感觉自己受到了何种侮辱。',
          ]);
          await you.print_and_wait('……这是没办法的事情吗？');
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hit_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '手掌拍击在屁股上，丰满的肥臀在手中传来阵阵的波荡。',
      ]);
      await you.print_and_wait([
        '原本白皙的屁股如今已是通红一片，即便只是单纯的碰触，也能使一旁的小穴无意识的抽搐。',
      ]);
      await you.print_and_wait([
        '啪！又是一声拍击的声响，光洁的阴唇随之抽搐，晶莹的汁液与放浪的叫声一同滴出——',
      ]);
      await acute.say_and_wait([
        '齁呼呼～❤️不要❤️要变成只是被打屁股就会高潮的变态了❤️弱点被发现了❤️，要彻底变成雌性了～❤️',
      ]);
    } else {
      await you.print_and_wait(['明明已经红肿不堪了，屁股却仍是高高的翘起。']);
      await you.print_and_wait([
        '就好像还未满足一般，丰满的臀部特意朝向这边左右摇晃。',
      ]);
      await acute.say_and_wait(['呐❤️', callname, '，你还没有满足吧？']);
      await acute.say_and_wait([
        '我呐，看的出来，你平时背负着不少的压力呢……所以呐，尽情的把压力发泄在这里吧～❤️',
      ]);
      await acute.say_and_wait(['因为我的身体，是你的东西嘛❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async hit_anal_hard(acute, you, callname) {
    await acute.print_and_wait(['越是痛苦，就越是兴奋。']);
    await acute.print_and_wait([
      '明明臀部已经失去了知觉，但每次拍打之后，却仍能感到下体的震撼。',
    ]);
    await acute.print_and_wait([
      '就像是机械装置一般，每当拍击丰满的臀部，光滑的小穴就会滴落下淫靡的汁液。',
    ]);
    await acute.print_and_wait([
      '而趴伏在地面之上温和的五官，此刻却也被快感所破坏，一面两眼上翻，一面伸出舌头，伴随着拍击着节奏发出对应的呻吟。',
    ]);
    await acute.print_and_wait([
      '可在这呻吟中，却也夹杂着已然支零破碎的语句——',
    ]);
    await acute.say_and_wait(['齁～呼呼～', callname, '……好幸福❤️～']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hit_face_by_penis(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['顶在脸颊之上，那是散发着「阳气」的肉棒。']);
      await you.print_and_wait([
        y_call_a,
        ' 一动也不动，只是盯着肉棒，任由着它将耻垢与污物在自己的脸颊上涂抹。',
      ]);
      await acute.say_and_wait(['好精神的气味呢……这是要做什——']);
      await you.print_and_wait([
        '还没等 ',
        y_call_a,
        ' 说完，在脸颊上擦干净了的肉棒，径直给了 ',
        y_call_a,
        ' 一耳光。',
      ]);
      await you.print_and_wait([
        '脸部的疼痛，兴许给',
        acute.sex,
        '带来了些许的惊讶。但是很快，',
        y_call_a,
        ' 便从惊讶中解脱了出来，似乎明白了什么似的，露出了温和的微笑。',
      ]);
      await acute.say_and_wait(['原来如此……真是『精神』的肉棒呢❤️']);
    } else if (acute.sex_code !== 1) {
      await you.say_and_wait([
        '接下来要用肉棒打耳光，打到 ',
        y_call_a,
        ' 哭出来为止。',
      ]);
      await acute.print_and_wait(['朝向自己的肉棒，做出了如此的宣告。']);
      await acute.say_and_wait(['哭出来为止……吗？']);
      await acute.print_and_wait([
        '仅仅只是听到了这样的发言，下腹便传来一阵骚热，',
      ]);
      await acute.print_and_wait([
        '更不要说自己的脸颊被肉棒所擦拭、抽弄、打耳光之下，嗅觉已全然被阳气所占领的情况下了。',
      ]);
      await acute.say_and_wait(['在哭出来前，一直都会被肉棒抽耳光吗……'], true);
      await acute.say_and_wait(['糟糕……感觉完全，哭不出来呢❤️'], true);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} supporter 助手
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_s 奇锐骏对助手的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {PrintedSpan} y_call_s 玩家对助手的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_blow_job(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await you.print_and_wait([
            '在被要求口交后，',
            y_call_a,
            ' 随即一面笑着、一面将脸贴到了肉棒前。',
          ]);
          await acute.say_and_wait([
            '嗯……真是拿 ',
            callname,
            ' 没办法呢～那 ',
            call_s,
            '，一起来『接吻』吧～',
          ]);
          await you.print_and_wait([
            '说罢，在 ',
            y_call_a,
            ' 的组织下，',
            y_call_a,
            ' 与 ',
            y_call_s,
            ' 的粉唇从两侧向棒身亲吻，随后在亲吻的同时探出了香舌，向四周滑动——',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '在被要求口交后，在 ',
            y_call_s,
            ' 还没来得及反应的时候，',
            y_call_a,
            ' 便迅速将龟头吞入了自己的口中。',
          ]);
          await acute.say_and_wait([
            '哎嘿嘿……对不起了 ',
            call_s,
            '，我可不会让出来的哦？',
          ]);
          await you.print_and_wait([
            '一面说着，',
            y_call_a,
            ' 的舌头已伸向了冠区，下身被惊得一阵酥软。',
          ]);
          await you.print_and_wait([
            '见木已成舟，虽然嘴上仍有些怨言，',
            y_call_s,
            ' 也只好在一侧，伸出舌头侍奉着棒身……',
          ]);
        },
        async () => {
          await acute.say_and_wait([
            callname,
            ' 的缺点在冠状区哦？……对，就是这样，',
            call_s,
            '，干得很好呢～',
          ]);
          await you.print_and_wait([
            '一面伸出香舌在棒身上下舔吮的 ',
            y_call_a,
            '，一面教导着在另一边吞吮着龟头的 ',
            y_call_s,
            '。',
          ]);
          await acute.say_and_wait([
            '加油哦，',
            call_s,
            '。',
            callname,
            ' 的话，喜欢吞的更深一点呢……',
          ]);
          await you.print_and_wait([
            '似是为了安抚情绪，',
            y_call_a,
            ' 抚摸着 ',
            y_call_s,
            ' 的头。而在抚摸的同时，',
            y_call_a,
            ' 也在悄悄地用力，尽可能的让 ',
            y_call_s,
            ' 吞到更深处……',
          ]);
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait('唔姆唔姆……库库……哈……');
          await you.print_and_wait([
            '在肉棒的两侧，',
            y_call_a,
            ' 与 ',
            y_call_s,
            ' 不停地舔吮着棒身。',
          ]);
          await you.print_and_wait([
            '不仅仅是被侍奉的自己，偶尔触碰到的舌尖也让侍奉者的两人更加兴奋。',
          ]);
          await acute.say_and_wait(['呐，', call_s, '，要一起『放松』下吗？']);
          await you.print_and_wait([
            y_call_a,
            ' 眨了眨眼、露出了暗示的微笑，',
            y_call_s,
            ' 倒是羞红了脸。',
          ]);
          await you.print_and_wait(
            '很快，两人的舌尖便划过冠区，共同含住了半边的龟头。一边侍奉着肉棒，一边让在双方舌尖互相让唾液交错……',
          );
        },
        async () => {
          await acute.say_and_wait('咕姆姆……噗、啪……咕哈……');
          await you.print_and_wait([
            y_call_a,
            ' 如同猛兽进食般凶猛地吞咽着口中的巨物，一遍遍用自己的唾液在肉棒上标记着自己的记号。',
          ]);
          await you.print_and_wait([
            '伴随着一次又一次的吞咽，',
            y_call_s,
            ' 的地盘正被一步一步侵蚀。而为了不被彻底赶到阴囊的位置，被激起了斗争心的 ',
            y_call_s,
            '，为了争夺肉棒，也加快了舔吮的速度。',
          ]);
          await you.print_and_wait('一时之间，筹光交错……');
        },
        async () => {
          await supporter.say_and_wait('唔……唔！！！');
          await you.print_and_wait([
            '伴随着 ',
            y_call_a,
            ' 的协助，',
            y_call_s,
            ' 已经吞下了自己的整根肉棒了。',
          ]);
          await you.print_and_wait([
            y_call_a,
            ' 轻轻地摸着 ',
            y_call_s,
            ' 的头，帮助者',
            supporter.sex,
            '慢慢在吞咽下整个肉棒的情况下慢慢的利用喉道来侍奉。',
          ]);
          await you.print_and_wait([
            '而另一边，',
            y_call_a,
            ' 俯下身子，来到了肉棒的根处。',
          ]);
          await acute.say_and_wait(['那么……要加油哦，', callname, '～']);
          await you.print_and_wait([
            '说罢，',
            y_call_a,
            ' 将脸凑了上去，张口了小嘴、朝着根部轻轻地咬上了一口——',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} supporter 助手
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_s 奇锐骏对助手的称呼
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   * @param {PrintedSpan} y_call_s 玩家对助手的称呼
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_suck_nipple(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await acute.say_and_wait([
            '哎嘿嘿……',
            callname,
            ' 跟 ',
            call_s,
            ' 就像孩子一样呢～',
          ]);
          await you.print_and_wait(['粉染的脸颊上，露出的依旧是温和的笑容。']);
          await you.print_and_wait([
            '抚着 ',
            callname,
            ' 与 ',
            call_s,
            ' 的头，奇锐骏满脸宠爱地望着眼前的孩子。',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '……兴许是吸吮粉嫩的乳首太过用力的缘故，',
            y_call_a,
            ' 嘟起了嘴、朝向我的脑袋上轻轻地敲了三下。',
          ]);
          await acute.say_and_wait([
            '不要一个人喝完嘛……要给 ',
            call_s,
            ' 留一点才行哦。',
          ]);
          await you.print_and_wait('绯染的脸颊上，满载着粉色的爱意。');
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait([
            '嗯～不用那么心急的啦，我的胸部一直都在这里的哦～',
          ]);
          await you.print_and_wait([
            '抚摸着眼前正吸吮自己乳首的二人，',
            y_call_a,
            ' 的眼神中闪过了一丝慈爱之心。',
          ]);
          await acute.say_and_wait([
            '不过，别光顾着吸胸部哦？别忘了还有其他的事情要做呢～',
          ]);
          await you.print_and_wait(
            '如是说着，伴随着手指的草弄，却不知是何人粉嫩的下身开始闪烁起晶莹的水花——',
          );
        },
        async () => {
          await acute.say_and_wait([
            callname,
            ' 看起来喝的很美味的样子。太好了呢，',
            call_s,
            '～',
          ]);
          await you.print_and_wait([
            '抚着胸前我的头，',
            y_call_a,
            ' 向 ',
            y_call_s,
            ' 莞尔一笑。',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async sleep_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      '安详的躺握着的 ',
      y_call_a,
      '，小口小口的呼吸。',
    ]);
    await you.print_and_wait('粉嫩的嘴唇一张一合，似是在期待着什么。');
    await you.print_and_wait('靠近上去，悄悄地吻上那粉嫩的嘴唇——');
    await you.print_and_wait(
      '抬起头，那仍在一张一合的粉嫩的嘴唇已被自己的痕迹所标记。',
    );
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} y_call_a 玩家对奇锐骏的称呼
   */
  async sleep_french_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      '仅仅只是玷污粉唇并不能满足，还想要触碰 ',
      y_call_a,
      ' 的舌头。',
    ]);
    await you.print_and_wait(
      '伸入口腔内的斥候并未遭到牙齿的阻碍，反而很顺利的叩开了关门，来到了舌头的所在。',
    );
    await you.print_and_wait([
      '趁着 ',
      y_call_a,
      ' 仍在沉睡，来回的翻弄、纠缠，在深处留下自己的印迹。',
    ]);
    await you.print_and_wait('分开时，唾液的丝线连接着彼此的舌尖。');
    await you.print_and_wait(['——看啊，', y_call_a, '，我在舌吻上赢了你。']);
    await you.print_and_wait([
      '……虽然很想要这样大声的疾呼，但这却毕竟是不能告诉 ',
      y_call_a,
      ' 的事。',
    ]);
  },
};
