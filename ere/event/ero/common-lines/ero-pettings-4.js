/**
 * @file 调教地文 - 爱抚系4
 *
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_attacker,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.hair_fuck] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await attacker.say_and_wait('呜——');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 半蹲在地，看着面前那熟悉的人影，心里却不禁产生了些许恐惧。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 玩味地笑着，挺起腰胯，向 ',
        attacker.get_colored_name(),
        ' 逼近。',
      ]);
      await attacker.print_and_wait([
        '一个温热的棍状物体带着不容抗拒的意识挺向了的额头，',
        attacker.get_colored_name(),
        ' 吞了口唾沫，主动抬头相迎，小心地用手指带起自己的头发，缠住了刺来的长枪，开始作业。',
      ]);
    } else {
      await attacker.print_and_wait('沙沙……');
      await attacker.print_and_wait('手掌和头发反复揉搓着那东西。');
      await attacker.print_and_wait('这种触感……那东西……还在膨胀……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 感觉发梢痒痒的，呼吸也变得粗重起来。',
      ]);
    }
  };

  handlers[ero_hooks.ask_hair_fuck] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            '……？',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 带着夹杂了期待与害羞的神情微微抬首，头顶感受到了一个热热的，比其看上去要沉重（是心理原因吗？）的物体，如此近的距离，如此浓厚的荷尔蒙气息，将用来处理信息和思考的大脑全部搅乱。',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 蹲坐在 ',
            attacker.get_colored_name(),
            ' 胯下，面容不由自主地变得下流起来……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ` 不禁露出了微笑。伸出双手，轻轻放在${defender.sex}的两只耳旁，温柔地扶住头部……然后抽动起了自己的腰。`,
          ]);
          await attacker.print_and_wait([
            `下体在发间穿梭，将修建齐整的短发弄得凌乱不堪，清理出一片自己运动的路径。毛发和皮肤摩擦刺激使那关键部位的前端流出汁水，运动起来更为顺畅。液体从顶部划下，流到已经神志不清，娇喘着的${defender.get_phy_sex_title()}睫毛上，再向下滴落……`,
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 看着如此场景，感觉又硬了几分。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('你想……这么做？！');
          await attacker.print_and_wait([
            '坐在 ',
            attacker.get_colored_name(),
            ' 面前的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 以一种混杂了「变态啊」和「真拿你没辙」的语气说完，便叹了口气，轻甩了一下头，柔顺的秀发带着一股好闻的香气，撩上 ',
            attacker.get_colored_name(),
            ' 已经矗立在外的肉根，然后一停。',
          ]);
          await attacker.print_and_wait('该到自己了。');
          await attacker.print_and_wait([
            '将腰一挺，让自己的那玩意斜滑而下，到达颈侧，细密的头发和滑嫩的皮肤双重刺激让 ',
            attacker.get_colored_name(),
            ' 忍不住叹息一声。',
          ]);
          await attacker.print_and_wait([
            `${defender.sex}看 `,
            attacker.get_colored_name(),
            ' 这副模样，挑了挑眉，微微侧脖，抬起一只手轻摁在 ',
            attacker.get_colored_name(),
            ' 的那根东西上，三重受力把它夹在中间，多种感觉同时袭来，',
            attacker.get_colored_name(),
            ' 满足地呼出气来。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('呵呵……');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 似笑非笑地看着 ',
            attacker.get_colored_name(),
            '，',
            attacker.get_colored_name(),
            ` 不禁有点心虚，但还是用肢体语言请求${defender.sex}这么做。`,
          ]);
          await attacker.print_and_wait([
            `${defender.sex}似乎是故意晾了 `,
            attacker.get_colored_name(),
            ' 几秒钟，随后将双手盘向身后，捋起长长的秀发，猛地一扬——',
          ]);
          await attacker.print_and_wait([
            '万千青丝落在了 ',
            attacker.get_colored_name(),
            ' 的敏感之处上，凉凉的，痒痒地，',
            attacker.get_colored_name(),
            ' 丝丝地吸了一口气，不，还没完——',
          ]);
          await attacker.print_and_wait([
            `${defender.sex}掬着自己头发的手随之而到，十指合围，带发形成了一个卷，将 `,
            attacker.get_colored_name(),
            ' 的下体完全，细密地包裹住，随后开始撸动——',
          ]);
          await attacker.print_and_wait([
            '今次的刺激，对 ',
            attacker.get_colored_name(),
            ' 而言，或许太多了。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            '轻抚耳尖，并非感受其上绒毛在指尖的细腻，而是将其略弯，蹭到自己的宝贝上。',
          );
          await attacker.print_and_wait([
            '滑动，平时难以体验的身体毛发的刺激让 ',
            attacker.get_colored_name(),
            ' 性奋异常。',
          ]);
          await attacker.print_and_wait([
            `下面的${defender.get_phy_sex_title()}发出若有若无的喘息，更激起 `,
            attacker.get_colored_name(),
            ' 的欲望。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            `三个部位……三重触感……眼前的${defender.get_phy_sex_title()}主动为 `,
            attacker.get_colored_name(),
            ' 做出这种服务……',
          ]);
          await attacker.print_and_wait('天下没有比这更有感觉的事了。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 不禁微咧起嘴角，闭目享受。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait('如涓流而下的水幕，如柔转漫卷的轻纱。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 的那根东西，进了一个奇妙的穴中。',
          ]);
          await attacker.print_and_wait([
            '反复磨擦，',
            attacker.get_colored_name(),
            ' 不禁双腿一缩，有些许无色液体从肉根前端流出……',
          ]);
      }
    }
  };

  handlers[ero_hooks.force_hair_fuck] = async (attacker, defender, hook) => {
    if (hook.arg) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('欸……唔！');
          await attacker.print_and_wait([
            '突如其然地，',
            attacker.get_colored_name(),
            ` 扳着面前这个${defender.get_phy_sex_title()}的脸，然后把自己温热充血的家伙放在了${
              defender.sex
            }耳廓与头发的空隙间，轻晃${
              defender.sex
            }的脑袋同时加速腰部抽动。被夹在肌肤于毛发中间反复摩擦的肉根立刻兴奋起来，开始膨胀。`,
          ]);
          await attacker.print_and_wait([
            `${defender.sex}还没有明白是怎么回事，便被迫放弃了思考，因为自己接受和处理外界信息的部位已经变成了 `,
            attacker.get_colored_name(),
            ' 下体驰骋之处。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('哈啊，等，等下！');
          await attacker.print_and_wait([
            '看到 ',
            attacker.get_colored_name(),
            ` 的眼神，${defender.sex}仿佛知道接下来要发生什么，一手护在后脑，一手慌乱地摆着，不过，`,
            attacker.get_colored_name(),
            ' 才不管。',
          ]);
          await attacker.print_and_wait([
            `大踏步贴近，摁住${
              defender.sex
            }的肩，挺腰直进，把分身放入对${defender.get_phy_sex_title()}来说隐秘的后颈上，在顺滑光泽的发丝和光滑白嫩的皮肤间，快乐地滑动起来。`,
          ]);
          break;
        case 2:
          await defender.say_and_wait('好吧……如果你一定要的话', true);
          await attacker.print_and_wait([
            `一番对视，面前的${defender.get_phy_sex_title()}退缩了，`,
            attacker.get_colored_name(),
            ' 带着胜利者的姿态开始享用战利品。',
          ]);
          await attacker.print_and_wait([
            '伸出惯用手，',
            attacker.get_colored_name(),
            ` 玩弄起${
              defender.sex
            }秀丽且有淡淡香气的长发，坏笑一声，从中挑起一捧，粗暴地将${defender.get_phy_sex_title()}平日细心打理的东西缠在自己的那玩意上，同时轻轻地拉扯，让自己有一种别样的撸管快感。`,
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            '纵横于胯下雌性的私密之处，',
            attacker.get_colored_name(),
            ' 的肉根明显更加兴奋了。',
          ]);
          await attacker.print_and_wait([
            '被 ',
            attacker.get_colored_name(),
            ' 压在下方的那姑娘神情已难以辨别……羞红的脸和耳根倒可一窥她目前状态。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 舔了舔嘴角，磨蹭地更起劲了。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 在滑腻的肌肤上反复擦动……穿过轻抚分身的细丝发梢，享受肉体的美好感觉，以及精神上的征服满足。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            '平日被打理得整洁又柔顺的秀发被 ',
            attacker.get_colored_name(),
            ' 弄得乱起八糟。',
          ]);
          await attacker.print_and_wait([
            '阴毛和其中几根头发纠缠，将 ',
            attacker.get_colored_name(),
            ` 的雄性气息盖在${defender.sex}的气味之上。`,
          ]);
          await attacker.print_and_wait([
            '野蛮地运动着，野蛮地标记着……',
            attacker.get_colored_name(),
            ` 野蛮地拿${defender.sex}的珍贵之物发泄着性欲。`,
          ]);
      }
    }
  };
};
