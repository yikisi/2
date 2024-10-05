const era = require('#/era-electron');

const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_lure_success = require('#/event/ero/snippets/check-lure-success');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.kiss] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        '点滴相遇的鼻尖，炽热的喘息划过对方的光滑的脖颈。',
      );
      await attacker.print_and_wait('好似要窒息一般炽热的爱意。');
      await defender.say_and_wait('唔……哈、哈……❤️');
      await attacker.print_and_wait(
        '双手围在脑后，赤红的脸颊上充斥着欲望的色彩。',
      );
      await attacker.print_and_wait('……看来还没能满足呢。');
    } else {
      await attacker.print_and_wait(
        '又一次接吻、又一次相拥，想要在对方的唇上留下自己的痕迹。',
      );
      await defender.say_and_wait([
        '……呐，你知道吗，',
        sys_get_colored_callname(defender.id, attacker.id),
        '。',
      ]);
      await attacker.print_and_wait([
        '在一次短暂的分离后，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 幽幽地说着。',
      ]);
      await defender.say_and_wait('仅仅只是这种程度的话……是满足不了我的哦❤️');
    }
  };

  handlers[ero_hooks.french_kiss] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait('自己的舌头在对方的口腔内探索。');
      await attacker.print_and_wait('再深一点，再往深一点。');
      await attacker.print_and_wait([
        '然而很快，便被 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的舌头所发现。',
      ]);
      await attacker.print_and_wait(
        '舌头被狠狠的压在对方口腔中，被奇锐骏小巧的舌头夹在下颚上不停地纠缠。',
      );
      await defender.say_and_wait('……❤️～');
      await attacker.print_and_wait([
        '睁开眼睛，看见的是 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 眼内的笑意。',
      ]);
    } else {
      await attacker.print_and_wait([
        '牙齿的防线很快便被挑弄的舌头所攻陷了，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 长驱直入进了自己的口腔。',
      ]);
      await attacker.print_and_wait(
        '犹如被侵犯一般，藏在牙齿深处的舌头被上下挑弄纠缠。',
      );
      await attacker.print_and_wait(
        '口腔内的唾液也好似战利品般，被对方抢走，只留下对方的唾液进行强制的交换。',
      );
      await attacker.print_and_wait([
        '睁开眼睛，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的媚眼依旧，环绕在自己脑后的两只手也越发的用力。',
      ]);
      await attacker.print_and_wait([
        '……完全没有在舌吻上战胜 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的自信。',
      ]);
    }
  };

  handlers[ero_hooks.relax] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    await defender.say_and_wait([
      '呼……',
      sys_get_colored_callname(defender.id, attacker.id),
      '，要喝点水吗？',
    ]);
    await attacker.print_and_wait([
      '暂时的休息，',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 在温柔得询问是否要补充水分。',
    ]);
    await attacker.print_and_wait([
      '额头下滴下小小汗珠、看向',
      defender.sex,
      '赤裸而白皙的身体。',
    ]);
    await attacker.print_and_wait('——心脏在左面砰砰跳。');
  };

  handlers[ero_hooks.lure] = async (attacker, defender, hook) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    hook.arg = check_lure_success(attacker.id, defender.id);
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await attacker.print_and_wait([
          '指尖在 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 的乳首处划着圈，想要看到 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 因忍耐而发出呻吟的摸样。',
        ]);
        await attacker.print_and_wait([
          '然而，',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 却握住了自己的手，朝向了下腹的子宫处。',
        ]);
        await defender.say_and_wait([
          '呐……',
          sys_get_colored_callname(defender.id, attacker.id),
          '。这里……不可以吗？',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 抵着头仰望着自己，绯红的脸颊下传来的是魅诱的低吟——',
        ]);
      } else {
        await attacker.print_and_wait([
          '伸向 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 用以诱惑的手指，很快便被',
          defender.sex,
          '的唇舌所吞没。',
        ]);
        await attacker.print_and_wait(
          '食指、拇指、中指、无名指、小拇指、手心、手背——挨个舔过、挨个吸吮，留下了唾液的痕迹。',
        );
        await attacker.print_and_wait([
          '但 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 似乎还不满足，紧贴着手臂、伸出舌头舔弄着手腕的',
          defender.sex,
          '，如同发情的野兽般瞪大了双眼。',
        ]);
        await defender.say_and_wait([
          '哈、哈……腋下、',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 的气味……',
          sys_get_colored_callname(defender.id, attacker.id),
          '，可以继续下去吗？',
        ]);
      }
    } else {
      await attacker.print_and_wait('似乎没什么效果……');
    }
  };

  handlers[ero_hooks.talk] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    if (Math.random() < 0.5) {
      await defender.say_and_wait([
        '真没想到，会跟 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 走到这一步呢……',
      ]);
      await attacker.print_and_wait([
        '十指在身前交叉，丝毫没有遮掩自己赤身裸体想法的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，偏了偏头。',
      ]);
      await defender.say_and_wait('但既然要做的话……那就要尽兴才行哦。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          defender.sex,
          '温柔地笑着，随即将手放在了身后，粉嫩的乳首一览无余。',
        ]);
      }
    } else {
      await attacker.say_and_wait('要温柔一点吗？');
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 低着头，没有反应。',
      ]);
      await attacker.say_and_wait('那要再强硬一点吗？');
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的尾巴摇晃了起来。',
      ]);
      await attacker.print_and_wait(
        '明明赤身裸体都不会感到害羞，但却在这种话题上不肯正面的回答问题呢。',
      );
      await attacker.print_and_wait(
        '感到一阵新奇，于是拍了拍丰满的肥臀。「噼啪」的回响，代表着回答——',
      );
    }
  };

  handlers[ero_hooks.switch] = async (attacker, defender) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    await defender.say_and_wait('唉？把主动权交给我吗？……唔——');
    await attacker.say_and_wait('不行吗？');
    if (Math.random() < 0.5) {
      await defender.say_and_wait([
        '倒也不是不行啦……只不过呢，',
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await defender.say_and_wait('接下来无论发生什么……都请坚持下去哦～？');
      await attacker.print_and_wait([
        '说罢，',
        defender.sex,
        '的双手伸向了胸口、趴伏在胸前。',
      ]);
      await attacker.print_and_wait([
        '……',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的双眼中，闪烁起赤色的光。',
      ]);
    } else {
      await defender.say_and_wait('倒也不是不行啦……');
      await attacker.print_and_wait([
        '一瞬间，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的眼神中闪烁过一阵遗憾的神色——',
      ]);
      await defender.say_and_wait([
        '那么，',
        sys_get_colored_callname(defender.id, attacker.id),
        '……感觉痛的话，要说出来哦～？',
      ]);
    }
  };

  handlers[ero_hooks.resist] = async (attacker, defender, hook, extra_flag) => {
    if (defender.id !== 100) {
      throw new Error();
    }
    await defender.say_and_wait([
      '呐，',
      sys_get_colored_callname(defender.id, attacker.id),
      '，……不要反抗，比较好哦？',
    ]);
    await attacker.print_and_wait([
      '眼中闪烁着妖艳之光的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，将自己扑倒在地。',
    ]);
    await defender.say_and_wait('不然的话……你可能会受伤的呢。');
    await attacker.print_and_wait([
      '双手被紧握住，',
      defender.sex,
      '的唇舌向脖颈伸来……',
    ]);
    const ratio = sys_get_strength_ratio_in_fight(attacker.id, defender.id);
    era.logger.debug(`角色 100 逆推概率：${(ratio * 100).toFixed(2)}%`);
    era.println();
    if (
      (extra_flag.success = ratio >= 1 || (ratio > 0 && Math.random() < ratio))
    ) {
      await attacker.print_and_wait('受伤？那种事怎样都好。');
      await attacker.print_and_wait([
        '抱着可能会让双手手腕脱臼的觉悟，强抬起身子，昂起头，吻向了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
      await defender.say_and_wait('唔！……❤️');
      await defender.say_and_wait('❤️～');
      await defender.say_and_wait([
        '……',
        sys_get_colored_callname(defender.id, attacker.id),
        '，太狡猾了。',
      ]);
    } else {
      await attacker.print_and_wait('竭尽全力的挣扎，但一切都成为了徒劳。');
      await attacker.print_and_wait(
        '如同被巨兽盯上的猎物一般，越是挣扎，越是令其兴奋。',
      );
      await defender.say_and_wait([
        '哈❤️～我会温柔些的哦，',
        sys_get_colored_callname(defender.id, attacker.id),
        '。',
      ]);
      await attacker.print_and_wait([
        '伴随着一阵炽热的吐息，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 在自己的脖颈上留下了痕迹……',
      ]);
    }
  };

  handlers[ero_hooks.gargle] = async (attacker, defender) => {
    const { me, acute } =
      attacker.id === 0
        ? { me: attacker, acute: defender }
        : { me: defender, acute: attacker };
    await me.print_and_wait([
      '水池前，哗哗作响的水声刚刚盛满一杯，',
      sys_get_colored_callname(0, 100),
      ' 却在这时出现在了镜子里。',
    ]);
    await acute.say_and_wait('要清理干净一点哦～不然要是蛀牙了就不好了呢……');
    await me.print_and_wait([
      '一面说着，',
      acute.sex,
      ' 轻手熟路的从水池旁「变」出了一根牙刷。',
    ]);
    await acute.say_and_wait([
      '呐，要我来帮 ',
      sys_get_colored_callname(100, 0),
      ' 刷牙吗？我刷牙刷的很干净的哦～',
    ]);
    await me.print_and_wait('……也没必要做得那么全套吧？');
  };

  handlers[ero_hooks.wipe_body] = async (attacker, defender) => {
    const { me, acute } =
      attacker.id === 0
        ? { me: attacker, acute: defender }
        : { me: defender, acute: attacker };
    await acute.say_and_wait('嘿咻、嘿咻……');
    await me.print_and_wait([
      '用着抹茶色的毛巾，',
      sys_get_colored_callname(0, 100),
      ' 认真地擦拭着身体。',
    ]);
    await acute.say_and_wait([
      '呼、呼……这样就干净了呢～呐，',
      sys_get_colored_callname(100, 0),
      '，还有哪里需要打扫的吗？',
    ]);
    await me.print_and_wait(
      '……明明赤身裸体，却还是能看到喜欢打扫卫生的本性呢。',
    );
  };
};
