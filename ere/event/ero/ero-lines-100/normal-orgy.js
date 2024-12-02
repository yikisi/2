const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalOrgy = require('#/event/ero/common-lines/normal/orgy');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = class extends EroNormalOrgy {
  async ask_double_blow_job(attacker, defender, supporter, hook) {
    if (attacker.id !== 0 || defender.id !== 100) {
      return await super.ask_double_blow_job(
        attacker,
        defender,
        supporter,
        hook,
      );
    }
    const message = [];
    if (hook.arg) {
      message.push(
        async () => {
          await attacker.print_and_wait([
            '在被要求口交后，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 随即一面笑着、一面将脸贴到了肉棒前。',
          ]);
          await defender.say_and_wait([
            '嗯……真是拿 ',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 没办法呢～那 ',
            sys_get_colored_callname(defender.id, supporter.id),
            '，一起来『接吻』吧～',
          ]);
          await attacker.print_and_wait([
            '说罢，在 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的组织下，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 与 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 的粉唇从两侧向棒身亲吻，随后在亲吻的同时探出了香舌，向四周滑动——',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            '在被要求口交后，在 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 还没来得及反应的时候，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 便迅速将龟头吞入了自己的口中。',
          ]);
          await defender.say_and_wait([
            '哎嘿嘿……对不起了 ',
            sys_get_colored_callname(defender.id, supporter.id),
            '，我可不会让出来的哦？',
          ]);
          await attacker.print_and_wait([
            '一面说着，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的舌头已伸向了冠区，下身被惊得一阵酥软。',
          ]);
          await attacker.print_and_wait([
            '见木已成舟，虽然嘴上仍有些怨言，',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 也只好在一侧，伸出舌头侍奉着棒身……',
          ]);
        },
        async () => {
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            ' 的缺点在冠状区哦？……对，就是这样，',
            sys_get_colored_callname(defender.id, supporter.id),
            '，干得很好呢～',
          ]);
          await attacker.print_and_wait([
            '一面伸出香舌在棒身上下舔吮的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            '，一面教导着在另一边吞吮着龟头的 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '。',
          ]);
          await defender.say_and_wait([
            '加油哦，',
            sys_get_colored_callname(defender.id, supporter.id),
            '。',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 的话，喜欢吞的更深一点呢……',
          ]);
          await attacker.print_and_wait([
            '似是为了安抚情绪，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 抚摸着 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 的头。而在抚摸的同时，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 也在悄悄地用力，尽可能的让 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 吞到更深处……',
          ]);
        },
      );
    } else {
      message.push(
        async () => {
          await defender.say_and_wait('唔姆唔姆……库库……哈……');
          await attacker.print_and_wait([
            '在肉棒的两侧，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 与 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 不停地舔吮着棒身。',
          ]);
          await attacker.print_and_wait([
            '不仅仅是被侍奉的自己，偶尔触碰到的舌尖也让侍奉者的两人更加兴奋。',
          ]);
          await defender.say_and_wait([
            '呐，',
            sys_get_colored_callname(defender.id, supporter.id),
            '，要一起『放松』下吗？',
          ]);
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 眨了眨眼、露出了暗示的微笑，',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 倒是羞红了脸。',
          ]);
          await attacker.print_and_wait(
            '很快，两人的舌尖便划过冠区，共同含住了半边的龟头。一边侍奉着肉棒，一边让在双方舌尖互相让唾液交错……',
          );
        },
        async () => {
          await defender.say_and_wait('咕姆姆……噗、啪……咕哈……');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 如同猛兽进食般凶猛地吞咽着口中的巨物，一遍遍用自己的唾液在肉棒上标记着自己的记号。',
          ]);
          await attacker.print_and_wait([
            '伴随着一次又一次的吞咽，',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 的地盘正被一步一步侵蚀。而为了不被彻底赶到阴囊的位置，被激起了斗争心的 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            '，为了争夺肉棒，也加快了舔吮的速度。',
          ]);
          await attacker.print_and_wait('一时之间，筹光交错……');
        },
        async () => {
          await supporter.say_and_wait('唔……唔！！！');
          await attacker.print_and_wait([
            '伴随着 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的协助，',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 已经吞下了自己的整根肉棒了。',
          ]);
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 轻轻地摸着 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 的头，帮助者',
            supporter.sex,
            '慢慢在吞咽下整个肉棒的情况下慢慢的利用喉道来侍奉。',
          ]);
          await attacker.print_and_wait([
            '而另一边，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 俯下身子，来到了肉棒的根处。',
          ]);
          await defender.say_and_wait([
            '那么……要加油哦，',
            sys_get_colored_callname(defender.id, attacker.id),
            '～',
          ]);
          await attacker.print_and_wait([
            '说罢，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 将脸凑了上去，张口了小嘴、朝着根部轻轻地咬上了一口——',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  }

  async double_blow_job(attacker, defender, supporter, hook) {
    await this.ask_double_blow_job(defender, attacker, supporter, hook);
  }

  async double_suck_nipple(attacker, defender, supporter, hook) {
    if (attacker.id !== 0 || defender.id !== 100 || defender.sex_code === 1) {
      return await super.double_suck_nipple(
        attacker,
        defender,
        supporter,
        hook,
      );
    }
    const message = [];
    if (hook.arg) {
      message.push(
        async () => {
          await defender.say_and_wait([
            '哎嘿嘿……',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 跟 ',
            sys_get_colored_callname(defender.id, supporter.id),
            ' 就像孩子一样呢～',
          ]);
          await attacker.print_and_wait([
            '粉染的脸颊上，露出的依旧是温和的笑容。',
          ]);
          await attacker.print_and_wait([
            '抚着 ',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 与 ',
            sys_get_colored_callname(defender.id, supporter.id),
            ' 的头，奇锐骏满脸宠爱地望着眼前的孩子。',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            '……兴许是吸吮粉嫩的乳首太过用力的缘故，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 嘟起了嘴、朝向我的脑袋上轻轻地敲了三下。',
          ]);
          await defender.say_and_wait([
            '不要一个人喝完嘛……要给 ',
            sys_get_colored_callname(defender.id, supporter.id),
            ' 留一点才行哦。',
          ]);
          await attacker.print_and_wait('绯染的脸颊上，满载着粉色的爱意。');
        },
      );
    } else {
      message.push(
        async () => {
          await defender.say_and_wait([
            '嗯～不用那么心急的啦，我的胸部一直都在这里的哦～',
          ]);
          await attacker.print_and_wait([
            '抚摸着眼前正吸吮自己乳首的二人，',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的眼神中闪过了一丝慈爱之心。',
          ]);
          await defender.say_and_wait([
            '不过，别光顾着吸胸部哦？别忘了还有其他的事情要做呢～',
          ]);
          await attacker.print_and_wait(
            '如是说着，伴随着手指的草弄，却不知是何人粉嫩的下身开始闪烁起晶莹的水花——',
          );
        },
        async () => {
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            ' 看起来喝的很美味的样子。太好了呢，',
            sys_get_colored_callname(defender.id, supporter.id),
            '～',
          ]);
          await attacker.print_and_wait([
            '抚着胸前我的头，',
            sys_get_colored_callname(supporter.id, defender.id),
            ' 向 ',
            sys_get_colored_callname(attacker.id, supporter.id),
            ' 莞尔一笑。',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  }
};
