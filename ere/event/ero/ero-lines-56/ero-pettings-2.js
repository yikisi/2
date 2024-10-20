const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.hand_job] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.say_and_wait([
        '那个，',
        sys_get_colored_callname(attacker.id, defender.id),
        '……我做的还行吧？',
      ]);
      await attacker.print_and_wait([
        '没听见回答，不过，见到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的腰微微挺起来了呀。',
      ]);
      await attacker.say_and_wait(['那我继续了……']);
      await attacker.print_and_wait([
        '用右手的小指和食指轻盈的环在肉棒上，缓慢的撸动着，时不时用另一只手指肚摩擦着龟头的缝隙，刮弄蹭动着发出让两人的身体都为之颤抖的湿粘摩擦声，直到两只手都被通红龟头滴落的透明先走汁弄的黏糊糊的。',
      ]);
      await attacker.say_and_wait(['唔……这样，就像参拜前的洗手一样。']);
      await attacker.print_and_wait([
        '被巫女侍奉着尽心的肉棒也滴出了更多的先走汁作为回应。',
      ]);
    } else {
      await attacker.print_and_wait([
        '用左手微微托起变得更加膨胀的肉竿，然后，在先前的服侍中已经变得黏糊糊的右手就直接罩上了变得晶莹的龟头。',
      ]);
      await attacker.print_and_wait([
        '在洗切塔罗牌时灵活无比的纤长五指像屈服了一般无力垂下，把白皙的柔软掌心牢牢地同狰狞的肉冠固定在了一起。',
      ]);
      await attacker.print_and_wait([
        '加快了手中套弄撸动的节奏，发觉身前男人的腰不由自主的挺的更高。',
      ]);
      await attacker.print_and_wait([
        '哈……',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 也很开心呢……',
      ]);
      await attacker.print_and_wait([
        '自己的小腹也一跳一跳的，所以，请赶紧射出来吧……',
      ]);
    }
  };

  handlers[ero_hooks.ask_hand_job] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.hand,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        '盯着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那光是看见就能让自己的小腹一跳一跳的家伙，自觉的十指已经像平时受到神启一样有律的摆动起来。',
      ]);
      await defender.say_and_wait(['那个，想我用手做吗？']);
      await defender.print_and_wait([
        '不用说话也能占卜的到了，伸手安慰着青筋跳动的肉棒，直到它慢慢变成能把自己小穴撑开塑造成下流难堪的形状的怪物模样。',
      ]);
    }
    await handlers[ero_hooks.hand_job](defender, attacker, hook);
  };

  handlers[ero_hooks.force_hand_job] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '，摊开手',
      ]);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 颇为强硬的将肉棒伸到了自己摊开的双手间，散发出来的浓厚气味光是嗅到就让脑子发热。',
      ]);
      await defender.print_and_wait([
        '应该做出点不情愿的表情吧？用这么强硬的态度命令自己？',
      ]);
      await defender.print_and_wait([
        '但，右手已经颇为虔诚的开始轻轻磨挲着肉冠上敏感的沟壑，左手则是连同鼓囊囊的种子袋一起，将 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肉棒在柔软的掌心上托起。',
      ]);
    }
    await handlers[ero_hooks.hand_job](defender, attacker, hook);
  };

  handlers[ero_hooks.hand_and_blow_job] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      await attacker.print_and_wait(['肉棒变得更大了呢……']);
      await attacker.print_and_wait([
        '还有那股能把自己弄的乱糟糟，令人自己上瘾的气味也是……',
      ]);
      await attacker.print_and_wait([
        '稍稍把正握着竿身的双手向后移了一点，露出那挺硬的龟头，用自己的嘴唇轻轻衔住，让舌尖上的热气随着带有自己体温的呼吸飘向 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的肉根。',
      ]);
      await attacker.say_and_wait(['啾～']);
      await attacker.print_and_wait([
        '看来 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 很喜欢这样呢。',
      ]);
    } else {
      await attacker.say_and_wait(['呲溜呲溜——']);
      await defender.print_and_wait([
        '身下的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 稍稍将脸颊抬高了一些，在肉根的旁边舔舐着，舌尖用着力度，轻点着冠状沟和铃口。',
      ]);
      await defender.print_and_wait([
        '偶尔唇瓣不得不暂时离开时，等候了许久的双手会替补上空位，纤细的玉指竭尽所能地抚弄肉根，交替着带来快感。',
      ]);
    }
  };

  handlers[ero_hooks.ask_hand_and_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait(['试着舔一下。']);
      await defender.print_and_wait([
        '从 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那里得到了这样的指示，于是毫无怀疑的吐出的舌尖，卷起自马眼滴落的液体吞入腹中。',
      ]);
      await defender.print_and_wait([
        '哈，可以的吧，这样自己的舌头都被弄的黏糊糊的了……欸！还要再大胆一点吗？',
      ]);
      await defender.print_and_wait([
        '再用手调整了一下角度，然后像对待珍宝珠般用舌尖绕着龟头与冠状沟不断舔弄着。',
      ]);
    }
    await handlers[ero_hooks.hand_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.force_hand_and_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      await attacker.say_and_wait(['给我同时用手和嘴，做的到吧？']);
      await defender.print_and_wait([
        '仰视着正居高临下 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 居高临下的视角里，不由自主的让双腿呈M字的大大张开，肉棒恰巧就在伸出舌尖就能触碰到的地方。',
      ]);
      await defender.print_and_wait([
        '呜，态度太恶劣了吧，暗自腹诽着，但抖M的自己已经开始小心地磨挲着肉棒上条条胀起的经络，同时用舌尖轻点起铃口。',
      ]);
      await defender.print_and_wait(['咕……当然，当然做的到。']);
    }
    await handlers[ero_hooks.hand_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.tit_job] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '见着身前的担当把自己的肉棒整根塞入乳沟，然后尽力的挤压着那对平时隐藏在校服下硕大调皮的白兔。',
      ]);
      await attacker.say_and_wait([
        '嗯～嗯咻，呼、嗯～',
        defender.get_colored_name(),
        ' 感觉……还好吧？',
      ]);
      await defender.print_and_wait([
        '于是亲昵地拍了拍正侍奉着自己的少女，手掌在亮橙色的头发上来回蹭了蹭。',
      ]);
      await defender.print_and_wait(['嘶……感觉更卖力了呢。']);
    } else {
      await attacker.print_and_wait([
        '肉棒一跳一跳的，看来自己的侍奉是有效果的呢，不过，总是担心 ',
        defender.get_colored_name(),
        ' 会不舒服。',
      ]);
      await attacker.print_and_wait([
        '于是试着将自己的两颗已经挺立变硬的樱桃贴在肉棒上，让那对变得硬硬的乳粒给乳交的过程带来不一样的感觉。',
      ]);
      await attacker.print_and_wait([
        '乳尖在撞上变得更加滚烫的肉棒时，传来的电流感麻痹着大脑，胯间变得黏糊糊了呢。',
      ]);
      await attacker.print_and_wait([
        '哈……哈啊，这样子，看来自己也乐在其中呢。',
      ]);
    }
  };

  handlers[ero_hooks.ask_tit_job] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait([
        '盯着自家占卜师胸前那对会随着动作而一晃一晃的圆润乳肉，挺立起来的乳尖周围露着健康的粉色。',
      ]);
      await attacker.print_and_wait(['如果让肉棒被那对奶子包裹的话。']);
      await defender.say_and_wait(['可以的～!']);
      await attacker.print_and_wait([
        '还没说出口便听见了自家担当熟悉的应答声，毕竟 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 就是这样善解人意的赛马娘。',
      ]);
    }
    await handlers[ero_hooks.tit_job](defender, attacker, hook);
  };

  handlers[ero_hooks.tit_and_blow_job] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        ' 一上一下活动着腰肢，让晶莹的先走汁均匀的涂满了正夹着肉棒的柔嫩沟壑，又被乳沟和肉棒叠加在一起的温度蒸发，弄的脑袋也晕乎乎的。',
      ]);
      await attacker.print_and_wait(['感觉……味道比平时还浓烈呀。']);
      await attacker.print_and_wait([
        '小心地调整位置，只露出还在不断滴落先走汁的龟头在自己的嘴前，微微身子微微前倾将其含入口中，舌头正好垫在冠状沟的位置。',
      ]);
      await attacker.print_and_wait([
        '啊……怎么都算不上美味吧，但是……还是会多吞下去一点的。',
      ]);
    } else {
      await attacker.say_and_wait(['吸溜吸溜……']);
      await attacker.print_and_wait([
        '滴落的咸腥液体没有浪费，被自己一滴不剩的吞入了腹中，而偶尔龟头从口中抽离时，粉舌也会伴随着跟上，在液体落入那对已经被弄的滑腻腻亮晶晶的欧派前赶着接住。',
      ]);
      await attacker.print_and_wait(['直到脑子里都被这股下流的气味充满。']);
      await attacker.print_and_wait([
        '毕竟……是 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 认可自己的奖励呢',
      ]);
    }
  };

  handlers[ero_hooks.ask_tit_and_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 从乳肉中冒出头的龟头有些没精打采的样子。',
      ]);
      await defender.print_and_wait('而且本人也很好懂地正合起掌拜托。');
    }
    await handlers[ero_hooks.tit_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.foot_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '～这样……感觉还行吗？',
      ]);
      await defender.print_and_wait([
        '眯起的橙色眼眸绽着些许狡黠，那双能跑出优秀末脚的双足踏在了 ',
        defender.get_colored_name(),
        ' 的肉棒上',
      ]);
      await defender.print_and_wait([
        '一脚抚弄龟头，一脚托起杆身，待到淅淅索索的足底摩擦让龟头预热的差不多之后，转而沿着胀红肉棒上根根暴起的粗筋，向感官不那么敏锐的末端探去。',
      ]);
      await attacker.say_and_wait(['……真热啊……像要融化一样……']);
      await defender.print_and_wait([
        '赛马娘们珍视的双足，就这么为了做爱时的情趣，被轻易的使用着，让龟头前端粘粘的先走汁，更多地更快地被生产出来',
      ]);
    } else {
      await attacker.print_and_wait([
        '大概是擅长差马跑法的自己，平时在赛场上时也要随时分心关注身边对手的缘故吧？',
      ]);
      await attacker.print_and_wait([
        '所以，在专心致志的用双足照料着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 肉棒的自己，还能有余裕注意到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的情况。',
      ]);
      await attacker.print_and_wait([
        '开始只是用足底脚掌夹住肉棒不住的套弄着，等听到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的喘息声逐渐粗重起来，便又换个姿势继续刺激着肉棒的敏感点。',
      ]);
      await attacker.print_and_wait([
        '让柔软的足心踏着龟头，等到肉棒开始不住的抖动时，又坏坏的停下摩擦，转而曲起脚趾压在龟头上扣住。',
      ]);
      await attacker.say_and_wait(
        [
          '哈……这种能把 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 硬邦邦的肉棒踩在脚下的，莫名的优越感。',
        ],
        true,
      );
      await attacker.say_and_wait(
        ['……好奇怪，明明只是用脚在做，但心跳快得不行，身体也好热。'],
        true,
      );
    }
  };
};
