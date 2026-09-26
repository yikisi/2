/**
 * @file 东海帝王 - 育成 - 断腿线
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ws_95_14_h: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(`临上台前，${you.name} 再度帮助帝王梳理着毛发。`);
      await era.printAndWait(
        `其实今天已经做了好几遍类似的动作，不过，你们都默契地没人点破，或许这也是梳理内心的方式。`,
      );
      await era.printAndWait(
        '踏入场中，面对着不远而来的众多粉丝，帝王又向往常一样展露出自信的模样，即兴的帝王舞步 · 改让现场气氛活跃至极。',
      );
      await era.printAndWait(
        `${you.name} 却悄然隐藏进幕布里，思考着即将到来的比赛。`,
      );
      await era.printAndWait(
        `帝王今日表现得越是出色，${you.name} 脑海中的警铃声便越大……`,
      );
    };
    f.title = title;
    return f;
  })(),
  bs_broken: (() => {
    const title = '折翼';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {TextContent} leg_hurt_notification 腿伤的提示信息
     */
    const f = async (teio, you, leg_hurt_notification) => {
      await era.printAndWait(
        `医生的存在就是为了救死扶伤，我心爱的人一定会好起来的——不错，人们站在病房的门口，往往就会这么想。可是，这种想法，到底有几分真实，几分自我安慰呢？如果能够挽救的话，那么即使有医生的存在，这个世界依然无法避免伤亡的出现，难道是因为医生不够活跃？不够尽心？不……或者只是因为自己运气不好罢了。`,
      );
      era.println();
      await era.printAndWait(
        `如此想着，${you.name} 不自觉拿惯用手扶了扶额，呆呆地望着面前穿着白色大褂的中年男人。他的嘴唇在翕动——说话？他有在说什么吗？闲置的手处传来毛发的触感，不，不似以往，精心打理的柔顺马尾仿佛受惊一般，从内部炸开，掌心处传来一阵瘙痒。${you.name} 有点想笑，这孩子，怎么跑个步把自己搞成这样，一会得好好——`,
      );
      await era.printAndWait(
        `${you.name} 转头，努力微笑着看向自家担当，随后看到了那双无神的双眸，将 ${you.name} 的思想吸回现实。`,
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '主治医生',
        `${teio.actual_name_with_title}，以及 ${
          you.actual_name_with_title
        }，${teio.sex}的训练员，我必须再次强调一遍，要做好此生放弃赛跑的准备。`,
      );
      era.println();
      await era.printAndWait(
        '——任何逃避的想法，终究抵挡不住现实的车轮。现实就在眼前，除了接受之外别无二选。',
      );
      era.println();
      await era.printAndWait(
        `${you.name} 看着主治医生拿出一根金属小杖，再度在屏幕显示的照片上指点起来。之前不愿接受而自主屏蔽的回忆与现在的影像重叠，${you.name} 完全知道他都说了些什么。「髌骨脱位」「习惯性骨折」「裂纹」「小腿」……不错，所有地方 ${you.name} 都知道，所有情况 ${you.name} 都清楚。`,
      );
      era.println();
      await era.printAndWait(
        `可是这种事情依然发生了。${you.name} 忍住了情绪，尽力将自己压在原地。`,
      );
      await era.printAndWait('马尾在动，似要抽离。');
      await you.say_and_wait(
        '对我感到失望了吗，也没关系，是我作为训练员的失职',
        true,
      );
      await era.printAndWait(
        `${you.name} 这么想着，主动将手往回缩了一点……但失败了。`,
      );
      era.println();
      await era.printAndWait(
        `一只与蕴含力量不相称的小手放在了 ${you.name} 的掌面上，接着是从下方握住的另一只。一阵温暖传来，而同时，${you.name} 又感觉到了一股轻颤，如孩童扯住亲密的人衣角一般，${teio.name} 拉着 ${you.name} 的手。${you.name} 长叹一声，回握住${teio.sex}，再未松开。`,
      );
      era.println();
      if (era.get('talent:3:身体素质') === 1) {
        era.print(['【', teio.get_colored_name(), ' 不再 [体壮] 了！】']);
      }
      if (era.get('talent:3:自信程度') !== 1) {
        era.print(['【', teio.get_colored_name(), ' 变得 [自卑] 了！】']);
      }
      if (era.get('talent:3:淫乱') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          ' 变得 ',
          {
            color: buff_colors[2],
            content: '[淫乱]',
          },
          ' 了！】',
        ]);
      }
      era.print(leg_hurt_notification);
    };
    f.title = title;
    return f;
  })(),
  ws_95_17_h: (() => {
    const title = '新闻发布会';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        ` ${you.name} 整理了一下领带，最后对着镜子打量了下自己。`,
      );
      await era.printAndWait('——唔，没什么好说的。');
      await era.printAndWait('也没什么好做的了。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看了眼手表，时间很紧，已经不能在说服自己找借口拖延了。',
      ]);
      await era.printAndWait('深呼吸，努力放松。');
      await era.printAndWait(` ${you.name} 走出了卫生间，走向了自己的毁灭。`);
      era.println();
      await era.printAndWait(
        `这次新闻发布会，${you.name} 没有带上帝王，对外界的说法是需要治疗静养，不过 ${you.name} 也觉得${teio.sex}这种状态出席只对${teio.sex}百害而无一利。坏消息是——这样一来，${you.name} 得自己承担所有了。`,
      );
      await era.printAndWait(
        `不过想必 ${you.name} 早有这种心理准备了，不是吗？`,
      );
      era.println();
      await era.printAndWait(
        `来到会场，在无数聚光灯和镜头前，应付牙尖嘴利的记者，${you.name} 用尽平生力气，争取沉稳，有理作答。浑身的汗已经湿透了内衫，不过总算是要熬过去了，感谢特雷森提供的培训，${you.name} 一边暗自心想，一边集中精力回答各种刁钻的提问。而真正要命的，也终于——`,
      );
      era.println();
      await era.printAndWait(
        `记者A「请问，我们听专家分析，东海帝王的伤势源自于${teio.sex}的独特跑法，那么您作为${teio.sex}的训练员，想必不会不清楚这个情况吧，也就是说，您在明知这个问题的情况下，仍然让${teio.sex}去上场而酿成如今的惨剧吗？」`,
      );
      era.println();
      await era.printAndWait('——来了。');
      await era.printAndWait('必须慎重。');
      await era.printAndWait(`这个回答或许关乎于 ${you.name} 的职业生涯。`);
      await era.printAndWait(`${you.name} 决定——`);
      era.printButton(
        `「并不十分清楚，是东海帝王向我要求出战的，我只不过是顺应了担当的想法」`,
        1,
      );
      era.printButton(`「我是${teio.sex}的训练员，一切责任由我承担。」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `人群窃窃私语了好一会才平静下来，${you.name} 知道他们会有什么反应，不过也不关心了。`,
        );
      } else {
        await era.printAndWait('一片哗然。');
        await era.printAndWait(
          '不过，说完这个爆炸一样的话语，剩下的也没什么好应付的了。',
        );
        await era.printAndWait('终于，熬到结束了。');
        await era.printAndWait(
          `聚光灯撤下，记者们和摄影师在提完问题后，慢慢散去，最终，舞台上只留 ${you.name} 一人，正当 ${you.name} 长出一口气准备离去时——`,
        );
        era.println();
        await era.printAndWait('粉丝A「为什么……」');
        era.println();
        await era.printAndWait(` ${you.name} 疑惑地抬起头。`);
        era.println();
        await era.printAndWait('粉丝B「可恶……」');
        era.println();
        await era.printAndWait(
          `两个没见过的人突然出现在室内，看来是人群散去之后溜进来的。`,
        );
        era.println();
        await era.printAndWait(`粉丝A「你毁了${teio.sex}！」`);
        era.println();
        await era.printAndWait(
          `粉丝B「就因为你自私，只追求成绩而毫不关心${teio.uma_sex_title}的态度，你让东海帝王变成了现在这个样子！」`,
        );
        era.println();
        await era.printAndWait(
          `粉丝A「然后你这声称是训练员的家伙……完全可以拍拍屁股走人！声称的负责只不过是在别人面前说几句话，鞠个躬道个歉，大不了避纪念风头后再找新的苗子签契约！而原先${teio.uma_sex_title}的一生可是就直接被毁掉了啊！」`,
        );
        era.println();
        await era.printAndWait(
          `两个人靠过来，怒气冲冲地瞪着 ${you.name}，${you.name} 与他们对视，却欲言又止。`,
        );
        await era.printAndWait(
          '他们的眼神中，充满的除了怒火和哀怨，还有一种空洞。',
        );
        await era.printAndWait('那是失去梦想的眼神。');
        await era.printAndWait(`——${you.name} 贩卖的是梦想。`);
        await era.printAndWait(`——${you.name} 杀死了给予我们梦想的人。`);
        await era.printAndWait('三双眼睛各自将情绪掩藏在心底，互相瞪视着。');
        era.printButton(`「我会负责的。」`, 1);
        await era.input();
        await you.say_and_wait(
          `等到${teio.sex}重新复出的那天……你们会看到，${teio.sex}还是帝王。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_17_h: (() => {
    const title = '依靠';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('雨夜，静寂无声。');
      await era.printAndWait(
        `${
          you.name
        } 一个人在宿舍内盯着电脑屏上的资料，有一搭没一搭地做着笔记，修改着担当${teio.uma_sex_title}下一阶段的训练计划。事实上，这件事情 ${
          you.name
        } 早已完成了，不知为何，${
          you.name
        } 又将工作磨到了深夜，是为了缓解心中的郁气吗？还是说，在用机械劳动来逃避现实？`,
      );
      await era.printAndWait(
        `敲击键盘的音量变得越来越烦躁，响声从耳膜涌进脑海，${you.name} 干脆啪地一声合上屏幕，双手轻揉太阳穴，闭上眼，深呼吸，长出一口气。`,
      );
      await era.printAndWait('……声音没有停。');
      await era.printAndWait(
        `${
          you.name
        } 愣了一下，然后快速跑到门口，瞥了一下猫眼便拉开房门。铃声余音回荡，大门敞开，深沉黑夜的最中央处，一位浑身湿漉的${teio.uma_sex_title}立于 ${
          you.name
        } 的面前。降水顺着雨衣滑落，一根长翘的白色刘海被水珠的重量压于鼻沿，又被轻轻撩起，随着${
          teio.sex
        }这抬兜帽的动作，${you.name} 看到了一双暗淡的蓝色双眸。`,
      );
      await era.printAndWait(
        `在这一刻，${you.name} 产生了一种没来由的确信——自己今晚仿佛就是一直在想着${teio.sex}，等着${teio.sex}。`,
      );
      await era.printAndWait(
        `伴随着心中的如释重负和一点恼怒，${you.name} 一言不发，侧身请${teio.sex}入屋。`,
      );
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}一言不发坐在沙发上，任由 ${
          you.name
        } 将热气腾腾的毛巾盖在头上抚弄。${
          you.name
        } 数次想开口说话，却只发出了嗫嚅的嘟囔声，只好作罢。一人一马陷入了诡异的沉默。`,
      );
      await era.printAndWait(
        `即使 ${
          you.name
        } 没有当过训练员，也可以一眼就可以看出${teio.uma_sex_title}${teio.teen_sex_title}正在崩溃的边缘。`,
      );
      await era.printAndWait(
        `${
          teio.sex
        }了无生气地坐在那里，双手合一，并非祈祷，而像是在寻求依赖般，把额头贴近双手。这位${teio.teen_sex_title}，仿佛困在一片寂静的黑暗中，拒绝所有的光线与声音，${
          you.name
        } 甚至不禁担心${teio.sex}是否切实存在于这里。`,
      );
      await era.printAndWait(`——唔，${teio.sex}确实在。`);
      await era.printAndWait(
        `腰间传来的触感将${teio.sex}的存在固定于现实，一根马尾悄悄地，小心地缠住了 ${you.name}，仿佛溺水的人抓紧唯一的救生索一般，紧紧环绕着 ${you.name} 的身子。`,
      );
      era.printButton('「帝王……」', 1);
      await era.input();
      await era.printAndWait(
        `没有声音。只有${teio.teen_sex_title}轻颤的身体仿佛在回应着 ${
          you.name
        }。`,
      );
      era.println();

      await you.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `从未见过${teio.teen_sex_title}这副样子。原本柔顺打着挺的毛发散乱不堪，双目无神黯淡，愈显瘦小的身形随着呼吸和脉搏起伏抖动。${
          you.name
        } 再次呼喊${
          teio.sex
        }的名字，声音比刚才稍大，同时控制着不要过响。这次有回应了。倏然。${
          teio.name
        }猛地抬起头正视 ${you.name}，像是在确认似的眨了眨眼睛。`,
      );
      await era.printAndWait('然后，飞扑而来。');
      await era.printAndWait(`小小的身体被 ${you.name} 抱入怀中。`);
      era.println();

      await teio.say_and_wait(`——`);
      era.println();

      await era.printAndWait(
        `没有呜咽。没有眼泪。但显然${teio.sex}正在抵抗着这股冲动。`,
      );
      await era.printAndWait(
        `一旦精神意志有丝毫的退让，${
          teio.sex
        }仅存的抵抗意识就会烟消云散吧。${teio.teen_sex_title}将会开始哭泣，无休无止地哭个不停吧。`,
      );
      await era.printAndWait(
        `那就意味着${teio.name}这个${teio.uma_sex_title}的崩溃。`,
      );
      await era.printAndWait(
        '以常理论，若感神伤，又何妨大哭一场。确是如此。眼泪有种伟大的功效，它可以冲刷烦恼，不管多大的痛苦都可以得到缓解。',
      );
      await era.printAndWait('流泪之后，人们可以获得再次面对现实的活力。');
      await era.printAndWait(
        `但是——对于名为${
          teio.name
        }的${teio.uma_sex_title}而言，现在这些亦是不能采取之举。`,
      );
      await era.printAndWait(
        `若在此处，倚靠与 ${you.name} 的身上哭泣，是否是一种逃避责任呢？`,
      );
      await era.printAndWait(
        `出道时便宣传三冠，立下无与伦比目标的${teio.uma_sex_title}，跌倒在了独创的，自认为最合适的，结合了自己天赋的跑法上。最后，又因为自己的任性，而让信赖的训练员（${
          you.name
        }）帮助自己承担了责任。如此情况，又何来脸面哭泣，在 ${
          you.name
        } 旁边发泄情绪，再度让 ${you.name} 来帮扶${teio.sex}呢？`,
      );
      await era.printAndWait(
        `也许此刻流下眼泪，逃避一切，对于${
          teio.name
        }来说才是幸福的吧。但如此一来，那个坚忍不拔，自信地在世人面前宣示存在的${teio.uma_sex_title}，便认输退场了。`,
      );
      await era.printAndWait(
        `所以${teio.teen_sex_title}只是靠在 ${
          you.name
        } 的怀里，咬着嘴唇，紧闭着眼睛，有些滑稽地颤抖着身体。`,
      );
      await era.printAndWait(
        ` ${you.name} 温柔地轻拂着${teio.uma_sex_title}的背部，试图让${
          teio.sex
        }平静下来。`,
      );
      await era.printAndWait(
        `温度在二人之间传递，原来蹭到 ${you.name} 身上，向一个小太阳般烘热 ${you.name} 身心的担当，如今反过来被 ${you.name} 温暖着。`,
      );
      era.println();
      await teio.say_and_wait('……训练员。');
      era.println();
      await era.printAndWait(
        `${you.name} 用手指习惯性地，慢慢地帮${teio.sex}梳理毛发，下意识嗯了一声作为回应。`,
      );
      era.println();
      await teio.say_and_wait('我……不知道该说什么，也不知道该怎么做了。');
      await era.printAndWait(` ${you.name} 沉默以对，手上的动作慢了下来。`);
      era.println();
      await teio.say_and_wait('我现在剩下的……只有你了。');
      era.println();
      await era.printAndWait(
        `引以为傲的双腿，背负着的梦想的双翼，全部从${teio.teen_sex_title}身上消失了。`,
      );
      era.println();
      await teio.say_and_wait('我想要，你的这份心力。');
      era.println();
      await you.say_and_wait('那种东西，我会给你的。');
      era.println();
      await teio.say_and_wait('那么……请你也收下我的。');
      era.println();
      await era.printAndWait(
        `一根幼细的手指小心地伸入 ${you.name} 的衣领，顺着锁骨下滑到胸口，${you.name} 感到皮肤一阵紧缩。`,
      );
      await era.printAndWait(`${you.name} 决定——`);
      era.printButton(`「推开${teio.sex}，起身。」`, 1);
      era.printButton('「点头。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} 扶住${teio.sex}的双肩，用肢体表达了自己的回答。随后叫了辆出租车，护送${teio.sex}回到学校，一路无言——或许也只是 ${you.name} 无法面对${teio.sex}的脸。`,
        );
      } else {
        await era.printAndWait(
          `犹豫。对于${teio.sex}所指的言外之意，${you.name} 感受到了自己单纯的喜悦。还有兴奋。`,
        );
        await era.printAndWait(
          `但是，可以将身体交给这份涌动吗。那真的可以救赎这位${teio.teen_sex_title}吗？`,
        );
        await era.printAndWait(
          `——话虽如此，${you.name} 不是已经决定把一切都交给${teio.sex}自己的决断了吗。`,
        );
        await era.printAndWait(
          `既然这个决断是${teio.sex}所下的。那 ${you.name} 该做的——只是尊重${teio.sex}的决断吧。`,
        );
        era.println();

        await you.say_and_wait('我可能不是那么温柔的人');
        era.println();

        await teio.say_and_wait('没关系的……我，唔！');
        era.println();
        await era.printAndWait(
          `${you.name} 抬起${teio.sex}的下巴，吻上${teio.sex}的唇。这与其说是礼节，不如说是为了稍微缓和${teio.sex}的情绪。`,
        );
        await era.printAndWait(
          `但是，这个举动却解放了 ${you.name} 内心深处潜伏着的东西。`,
        );
        await era.printAndWait(
          `火热柔软的触感让 ${
            you.name
          } 尝到了${teio.uma_sex_title}的滋味。不错，这是生来待人贪求的生物！那令人耽溺于其中的魅惑勾出了 ${
            you.name
          } 的情欲。`,
        );
        await era.printAndWait(
          `渴望将${teio.sex}压在身下，支配其身体的冲动——令人无法抗拒的波涛在这一刻翻腾，从心脏涌动到四肢末端。`,
        );
        await era.printAndWait('精神的一部分正在向野兽演变。');
        await era.printAndWait(
          `也许是感觉到了 ${you.name} 的变化，臂弯中的${
            teio.name
          }在颤抖。不加理会，${
            you.name
          } 继续着已经开始的动作——伸出舌头打开${teio.teen_sex_title}的唇，而后侵入。`,
        );
        await era.printAndWait(
          `从光滑的牙齿舔至富有弹力的齿龈。舌头卷起${teio.teen_sex_title}的上唇，舔舐其内侧。`,
        );
        await era.printAndWait(
          `很难说这是对待${teio.teen_sex_title}的正确做法。但是这么做的冲动难以抑制。`,
        );
        await era.printAndWait(
          `${teio.name}一定是吓坏了吧，但${teio.sex}很顺从。既不反抗，也不躲闪，温顺地把身体交给 ${you.name}。`,
        );
        await era.printAndWait(`这样的态度更加点燃了 ${you.name} 的兽性。`);
        await era.printAndWait(
          ` ${you.name} 将脸贴上去，与担当唇舌相触，体液在双方口中翻腾舔舐。口腔被无情侵入的小马战战兢兢却不肯认输地伸展柔舌，缠住了 ${you.name} 这个入侵者。`,
        );
        await era.printAndWait('血液在沸腾。大脑失去了思考的功能。');
        await era.printAndWait(
          `${teio.teen_sex_title}薄薄的舌头束手无策地被玩弄着。眼眸因为过度的暴虐而噙着泪珠——水珠滴落到了紧贴的唇瓣上，传递出遭受了意料之外的粗暴对待这一事实。`,
        );
        era.println();

        await era.printAndWait('——无比甘美。');
        await era.printAndWait(`${you.name} 内心深处发出了满足的咆哮声。`);
        await era.printAndWait(`不过是一匹${teio.sex_slave_title}而已。`);
        await era.printAndWait(
          `此念一出，${you.name} 原本就所剩无几的「师长风度」更是不知所踪。`,
        );
        await era.printAndWait(
          `嘴唇随着一定节奏吸吮着，啜饮着肉与肉的窄缝之间涌出的液体。阵阵淫靡之音响起。浑身脱力，被 ${
            you.name
          } 半托半抱在臂弯中的${teio.teen_sex_title}，身体一下子变得火热——大概是害羞的缘故吧。`,
        );
        await era.printAndWait(`这更加勾起了 ${you.name} 的情欲。`);
        await era.printAndWait(
          `${you.name} 继续霸占着口腔，直到${teio.name}口干舌燥。不，仍然不满足。`,
        );
        await era.printAndWait(
          `${
            you.name
          } 缠绕着${teio.teen_sex_title}的舌头，把它虏进自己的口中。轻咬，封住猎物的动作。`,
        );
        await era.printAndWait(
          `要怎样对待我。${teio.sex}蜷缩着僵硬身体向 ${you.name} 投来无声的疑问。`,
        );
        await era.printAndWait('——呵呵。');
        await era.printAndWait('这还用说吗？');
        await era.printAndWait(
          `冲动不会停止。也不可能停止。仿佛是为了做最后的修饰，${you.name} 用舌尖黏稠蹭上${teio.name}的舌头内侧——那片纤细柔嫩的领地。`,
        );
        era.println();

        await teio.say_and_wait(`——嗯啊！`);
        era.println();

        await era.printAndWait(
          `发觉连这出秘地都惨遭掠夺，${teio.teen_sex_title}心慌意乱。${
            teio.sex
          }束手无措，下意识想要挣脱出去，但 ${
            you.name
          } 将双臂用力一合，蕴含着不许反抗的意识，${
            teio.sex
          }便安静下来……双眸中映出惶恐、困惑，却又无法顾及这一切的神情。`,
        );
        await era.printAndWait(
          '往常有点一根筋和孩子气的担当，现在蜷缩成了一团吹弹可破的尤物。',
        );
        era.println();

        await you.say_and_wait('你也会有这种眼神啊！', true);
        era.println();

        await era.printAndWait(
          `内心的声音响起，如此强制性地征服一个${teio.uma_sex_title}让 ${
            you.name
          } 如痴如醉。${
            you.name
          } 忘我地吸吮着口中只属于自己的柔软。压榨着、剥削着${teio.sex}的体液。`,
        );
        await you.say_and_wait('就是你，害的我们变成了现在这副模样。', true);
        await you.say_and_wait(
          '就是你的任性，我的纵容导致了这副不堪的结局。',
          true,
        );
        await you.say_and_wait('所以，让我收回代价吧。', true);
        await era.printAndWait(
          `${teio.name}缠在 ${you.name} 背上的手无力地抚摸着。只不过是指尖在毫无抵抗地祈求饶恕。`,
        );
        await era.printAndWait('不去理睬。');
        await era.printAndWait(
          `突然间，${teio.teen_sex_title}战栗不已。肌肤顿时有如发烧症状般灼热。`,
        );
        await era.printAndWait(`一切都是在 ${you.name} 手中被强行挑起的反应。`);
        await era.printAndWait(`……达到高潮了吧。`);
        await era.printAndWait(
          `这个极其粗俗的字眼在 ${you.name} 心中低声响起。`,
        );
        await era.printAndWait(`继续，还远没有满足啊。`);
        await era.printAndWait(
          `${teio.name}也一定是这么想的。衣服还未全部褪下就被宣告停止，这一定不是${teio.sex}所希望的。`,
        );
        await era.printAndWait(
          `${teio.sex}说过希望 ${you.name} 这么做。${
            you.name
          } 现在做的，并非满足自己的性欲或者发泄自己的情绪，只是顺从${teio.teen_sex_title}的心意而已。`,
        );
        await era.printAndWait('既如此，就接着到下个环节吧。');
        await era.printAndWait(
          `${teio.teen_sex_title}的视线涣散而无法集中，${you.name} 在${
            teio.sex
          }的注视下，把双手伸向${teio.sex}的衣物。`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}的身体已经足够灼热，仿佛往日时光。`,
        );
        await you.say_and_wait(`${teio.name}——你果然是这样的女人！`, true);
        await era.printAndWait(
          `脑中被黑色物料所填满，${you.name} 咧开嘴，触碰着${teio.sex}的肌肤。伸出了舌头。一吻印上${teio.sex}的脖颈，吸吮着汗水。顺势舔舐皮肤，吸吮嫩肉——留下丑陋的痕迹。`,
        );
        era.println();
        await teio.say_and_wait('啊啊……');
        era.println();
        await era.printAndWait(
          `又受到一番小小的掠夺，${teio.teen_sex_title}似梦非梦地呻吟着。`,
        );
        await era.printAndWait(
          `平日那么骄傲固执，在赛场上飞扬的马儿——只不过是这样的${teio.phy_sex_title}罢了！`,
        );
        await era.printAndWait(
          `让 ${you.name} 吃了苦头的小东西，如今作为甜美细嫩的祭品羔羊摆在 ${you.name} 面前了！`,
        );
        await era.printAndWait(
          `就算 ${you.name} 按捺不住的内心一角有多么丑恶……难道${teio.sex}就对此没有一点责任吗！影子会出现在太阳照射之下，这难道不是真理吗！`,
        );
        await era.printAndWait(
          `${you.name} 用手在雪白的肌肤上游走。覆上并不算大的胸部隆起。`,
        );
        await era.printAndWait(
          '掌心覆于其上，轻轻挑弄。用手指肚抚上粉色的突起。',
        );
        await era.printAndWait(
          `${teio.teen_sex_title}似乎焦躁难耐，扭动起身体。这绝对在引诱 ${
            you.name
          }。${you.name} 想着，避开了${teio.teen_sex_title}的伤患处，蹭了蹭${
            teio.sex
          }尚未发育完全的翘臀，转而对其他部位上下其手，手中加力。毫无预警，开始残忍地蹂躏起尚且僵硬的小丘。`,
        );
        era.println();
        await teio.say_and_wait('呀……');
        era.println();
        await era.printAndWait(
          `${teio.name}轻声惊叫。这很自然。${teio.name}的身体还没有娴熟到可以应对这番待遇。`,
        );
        await era.printAndWait(
          `${you.name} 是明知，而故犯。正是渴求着这份悲痛，才这么做的。`,
        );
        await era.printAndWait(
          `所以才继续。彻头彻尾地粗暴揉捏着${teio.teen_sex_title}的第二私密部位。情欲高涨，胸部其上宛如附上了一层油亮，结合${
            teio.sex
          }恰到好处的尺寸，如同火候刚好的荷包蛋般诱人。`,
        );
        await era.printAndWait(
          `${you.name} 将嘴唇移向另一侧的隆起，吸吮，又留下了猥琐的痕迹。`,
        );
        await era.printAndWait(
          `${teio.name}楚楚可怜地看着 ${you.name}。瞬时，血脉贲张。`,
        );
        await era.printAndWait(
          `阴暗面在面对这个毫无抵抗的${teio.teen_sex_title}时极致发挥。`,
        );
        await era.printAndWait(
          `唔，一定是${teio.sex}刻意在撩动着 ${you.name} 的情热。真是头完美的小母兽。`,
        );
        await era.printAndWait('那么……该进入正题了。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async we_95_17_h_sex_end(teio, you) {
    era.printButton('「抱歉」', 1);
    await era.input();

    await teio.say_and_wait('唔唔——！');
    era.println();
    await era.printAndWait(
      `最后，${you.name} 无法自己了整整四个小时，实在有点过分了。`,
    );
    await era.printAndWait(
      `在 ${
        you.name
      } 不停的道歉和保证声中，小${teio.uma_sex_title}总算是接受了 ${
        you.name
      } 的歉意，躺在床上睡觉了。`,
    );
    await era.printAndWait(`${you.name} 便也洗漱然后合衣睡下。`);
    await era.printAndWait(
      `合眼之时，仿佛感到了什么东西靠过来，贴到了 ${you.name} 的身上。`,
    );
  },
  ws_95_19_h: (() => {
    const title = '交涉';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {boolean} abandon_disabled 是否已与帝王发生关系，若有则无法抛弃
     */
    const f = async (teio, you, abandon_disabled) => {
      await you.say_and_wait('这次又是什么……');
      await era.printAndWait(
        `${you.name} 盯着陌生的房间，犹豫了一下，还是敲了敲门，立刻，门就开了。${you.name} 走入其中。`,
      );
      era.println();
      await era.printAndWait(
        `当时春季天皇赏赛后，${you.name} 被学校管理层叫去单独开会，并且让 ${
          you.name
        } 去见一位已经退居二线的资深训练员前辈寻求指导，这位训练员在业界里很有名气，指导过无数名${teio.uma_sex_title}，当 ${
          you.name
        } 还在学生时代时，还曾有幸当过她一学期的学生。${
          you.name
        } 没有理由推脱这件事，便于今日来到了这里。`,
      );
      era.println();
      await era.printAndWait(
        `一位中年妇人端坐在椅子上等着 ${you.name}，桌上是一些资料，${you.name} 行礼后便坐下，顺势扫了一眼桌面，果不其然，是关于契约关系的表格。`,
      );
      era.println();
      await era.printAndWait(
        `中年妇人「你就是${you.actual_name}吧？我还对你有印象，现在已经成了个小有名气的训练员啊。」`,
      );
      era.println();
      await era.printAndWait(`${you.name} 点点头，算是回应。`);
      era.println();
      await era.printAndWait(
        `中年妇人「我今天来是受校方之托，跟你谈一些关于你，和你的担当${teio.uma_sex_title} ${
          teio.name
        } 的事情。」`,
      );
      era.println();
      await era.printAndWait(
        `听到${teio.sex}的名字，${you.name} 虽早有准备却仍不禁心下一沉，终于还是来了吗——${you.name} 心想。`,
      );
      era.println();
      await era.printAndWait(
        `中年妇人「我们就单刀直入吧——你是因为顺应了${teio.uma_sex_title}的想法才会导致今天的失利吧？错不在你。而事实上，对训练员而言，实现自己目标的机会也有很多，一次培育失败，你完全可以解除契约后再签订新的${teio.uma_sex_title}。我今天给你提供这个选择——与你的现担当解约吧，我保证你以后还能签约其他优秀的孩子，也保证你的原担当会得到我们最好的照顾。」`,
      );
      await era.printAndWait(
        `虽然 ${you.name} 早有会听到什么的心理准备，但仍不禁愕然。`,
      );
      era.println();
      await era.printAndWait(
        '中年妇人「你是有潜力的——浪费在这里着实可惜，不是吗？要为自己的前途而考虑啊。不要绑死在一棵树上。」',
      );
      era.println();
      await era.printAndWait(`${you.name} 的答复是——`);
      era.printButton('「我……同意您的看法。」', 1, {
        disabled: abandon_disabled,
      });
      era.print('【若选择此项，一切将无可挽回！请确认是否保存了存档！】', {
        offset: 1,
        width: 23,
        color: buff_colors[3],
      });
      era.printButton('「不。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} 默默在解约书上签下了自己的名字，浑浑噩噩地办理了手续，走出了房间，越走越快，${you.name} 的情绪已经无法稳定，终于，在路人的惊讶神色中，${you.name} 一边吼着，一边逃也似的奔向家中。`,
        );
        await era.printAndWait(
          `${you.name} 再也没有勇气去见 ${teio.name}，${teio.sex}和 ${you.name} 的人生，就此分别。`,
        );
      } else {
        await era.printAndWait(`${you.name} 听到自己的声音回荡在室内。`);
        era.println();
        await you.say_and_wait(
          `您说的非常正确……对于训练员而言，还有很多机会。为了自己的前途，不如及时放弃失败了的担当，另选${teio.sex}人……`,
        );
        era.println();
        await era.printAndWait(
          `中年妇人端坐在椅子上，眯起眼睛听着 ${you.name} 的回复。`,
        );
        era.println();
        await you.say_and_wait(
          '我知道，固执地执着于一个没有未来的学生，对我们两边而言都不是好事，并且我也理解职业上做出的妥协。',
        );
        era.println();
        await you.say_and_wait(
          '但是真的听到您说出这种话……又经我之口复述了一遍……这让我感到无法接受。',
        );
        era.println();
        era.printButton('「因此，我拒绝接受」', 1);
        await era.input();
        await you.say_and_wait(
          `特雷森的训练员制度，是对${teio.uma_sex_title}成长的帮扶不可缺少的部分。而训练员的任务，就是对自己的担当${teio.uma_sex_title}负起责任。`,
        );
        era.println();
        era.printButton(`我作为 ${teio.name} 的专属训练员，会做应行之事。`, 1);
        await era.input();
        await era.printAndWait('中年妇人「好孩子。」');
        await era.printAndWait('中年妇人笑了笑');
        await era.printAndWait(
          `她抬起手，把桌上的文件收好，接着又对 ${you.name} 微笑了一下。`,
        );
        era.println();
        await era.printAndWait(
          '中年妇人「这是一条险路，不过你选择了它，也令人赞赏。加油吧，我祝福你们——也会竭尽所能地给你们一些帮助。」',
        );
        era.println();
        await era.printAndWait(
          `${you.name} 被请出了房间，虽然不免有些云里雾里，不过 ${you.name} 的心底，还是坚定下了信念——帮助 ${teio.name} 实现${teio.sex}的梦想。`,
        );
        era.println();
        await era.printAndWait(
          `事后不知为何，关于 ${you.name} 的风言风语少了很多，特雷森方面也给了 ${you.name} 一些支持。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_20_h: (() => {
    const title = '回归';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('哈啊……');
      era.println();

      await teio.print_and_wait(
        `训练完后，${you.name} 临时被校方工作人员叫走了，帝王便一个人走回宿舍。${teio.sex}穿过校园的中庭时，不禁停下了脚步`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.uma_sex_title}的眼神捕捉到了角落里的一节空心树干——`,
      );
      era.println();

      await teio.print_and_wait(
        '从某种意义上说，这便是学园的垃圾桶，只不过，盛放的都是学园里人们的情绪和话语。',
      );
      era.println();

      await teio.print_and_wait(
        '在这里痛快大声发泄出自己的想法，已经成为一种风俗了。',
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      await teio.print_and_wait(`不知不觉，${teio.sex}已经站在了树洞前面。`);
      era.println();

      await teio.say_and_wait(`我……（想放弃）`);
      era.println();

      await teio.print_and_wait(
        '话到嘴边，却发觉吐出来是那么的难。是害怕说出来就等于自己承认了吗？自己承认了，就是无可挽回的现实？',
      );
      era.println();

      await teio.print_and_wait(
        '但现实就是现实，不是主观意愿拒绝就可以否定的。',
      );
      era.println();

      await teio.say_and_wait('我真的——');
      era.println();

      await era.printAndWait('（？）「你真的很不错啊，辛苦了。」');
      era.println();

      await teio.say_and_wait('？！训练员？');
      era.println();

      await era.printAndWait(
        `（？）「你的选择是正确的，自信点。你不是大功告成了吗，不是要迷途知返了吗？没关系，我会陪你的。」`,
      );
      era.println();

      await era.printAndWait('（？）「以后我们就尽情地——」');
      era.println();

      await teio.say_and_wait('你是谁？！');
      era.println();

      await era.printAndWait('（？）「认不出我了吗？帝王？」');
      era.println();

      await era.printAndWait(
        `（？）「昨天，还有再往前的一些日子，我不都这样跟你说过话吗？你已经做的够好了——是时候休息了。」`,
      );
      era.println();

      await era.printAndWait(
        `（？）「呵呵，没有什么遗憾吧，只要你一句话，我就会陪你一起，然后我们——」`,
      );
      era.println();

      await teio.say_and_wait('——吵死了。');
      era.println();

      await teio.say_and_wait('你根本不是我的训练员!');
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}情不自禁地大吼出声，眼前的幻象随之远去，但声音未停。脑海中，又有文字激昂。`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `（？）「不管别人说什么，这几年来的经历都是你的财富，也有不少人因为看过 ${you.name} 的奔跑而改变了人生。${you.name} 早就已经成为传说了！」`,
      ]);
      era.println();

      await teio.say_and_wait(`你在说些什么啊！！`);
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}握紧双拳，浑身发抖，奋力喊道`,
      );
      era.println();

      await teio.say_and_wait(
        '我从来没有成为过什么传说！我从来没有做完过任何一件事！我自己留下的遗憾根本数不完！说到底，不管是真正的我还是训练员，根本不可能讲出这种话！你只不过是尴尬和悲哀的自怜阴影！我不会接受这种安慰自己的借口的！说到底就是对复出之后无法出成绩的恐惧吧！我才不管！我就是想跑下去！我就是要登上殿堂，我会在其中得到更多的兴奋与快乐！',
      );
      era.println();

      await you.say_and_wait('帝王？');
      era.println();

      await teio.say_and_wait('你怎么还——嗯？');
      era.println();

      era.printButton('「呃，嗯，我刚刚回来，什么都没看见。」', 1);
      await era.input();

      await teio.say_and_wait('……哼。');
      era.println();

      await era.printAndWait(`一抹笑容绽放于 ${you.name} 担当的嘴角处。`);
      era.println();

      await teio.say_and_wait(
        `就算知道了，也无所谓吧。训练员，我刚刚说的那些话，可都是认真的。我们——继续前进吧。`,
      );
      era.println();

      era.printButton(
        `「与重获新生的无敌帝王${teio.adult_sex_title}同行，不胜荣幸。」`,
        1,
      );
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_h_s: (() => {
    const title = '再起';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} 亲自将担当送到赛场上，为${teio.sex}加油之后便坐回观众席旁。`,
      );
      await era.printAndWait('旁边空荡荡的。');
      await era.printAndWait(
        `${you.name} 叹了口气，那些发布会上出现的那几个帝王的粉丝，终究还是没到场。`,
      );
      await era.printAndWait(
        `不过也没关系，${you.name} 想着，只要帝王可以实现梦想就可以了。扭头，重新将视线集中于赛场上。`,
      );
      await era.printAndWait('不过，战况仿佛并非那么理想。');
      await era.printAndWait(
        `搅成一团的${teio.uma_sex_title}群，竞争激烈，帝王难以破开重围。`,
      );
      await era.printAndWait(`${you.name} 的手心里不知不觉充满了汗水。`);
      era.drawLine();
      await era.printAndWait('训练员A「——以上就是下一场比赛的出场选手。」');
      await era.printAndWait('路人A「好可惜哦……你又没能选上。」');
      await era.printAndWait('粉丝A「……啊哈哈，没关系，反正我打的很烂嘛。」');
      await era.printAndWait(
        '粉丝A（可恶……明明我也有很认真刻苦地，早起贪黑训练啊！）',
      );
      await era.printAndWait(`——${you.name} 所贩卖的是梦想。`);
      era.println();

      await era.printAndWait(
        '粉丝B「又挨骂了……明明就不是我的错啊，却又都怪到我的头上。」',
      );
      await era.printAndWait(
        '粉丝B「算了……还是打电动吧，就算是我也会有擅长的东西嘛，嘿嘿。」',
      );
      await era.printAndWait(
        `——${you.name} 所贩卖的是梦想，每个人都对这些东西若即若离，不肯承认自己需要它的同时又心驰神往。`,
      );
      era.println();

      await era.printAndWait('粉丝A「……啊啊」');
      await era.printAndWait('粉丝B「什么都没有……」');
      await era.printAndWait('——现在正是人们需要梦的时刻。');
      era.println();

      await era.printAndWait(
        '粉丝A「算了……干脆看看电视好了……今天，好像是日本杯吧……」',
      );
      await era.printAndWait('粉丝B「可恶……干脆打开电视看看赛马好了。」');
      await era.printAndWait(
        '——人们想听一切都很幸福，天道酬勤，努力会有回报，坚定信念能克服困难的故事。',
      );
      era.println();

      await era.printAndWait(`粉丝A「${teio.name}……？${teio.sex}真的去了？」`);
      await era.printAndWait(`粉丝B「${teio.sex}是……」`);
      await era.printAndWait(`——${you.name} 能写出这样的故事吗？`);
      era.drawLine();
      await era.printAndWait(`？？？「大${you.elder_sibling_sex_title}」`);
      era.println();
      await era.printAndWait(
        `${you.name} 回头看去，看到了一个女人拉着一个有点眼熟的女孩的手，向 ${you.name} 走来。`,
      );
      era.println();
      await era.printAndWait(
        `女孩「大${you.elder_sibling_sex_title}？还记得我吗？」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} 看了看，想起来了，这是当时 ${you.name} 和帝王初次碰面时见到的小孩子。互相打了打招呼，她们坐在 ${you.name} 一旁一起观赛。小女孩看上去很是兴奋，是第一次来这里吗？`,
      );
      era.println();
      await era.printAndWait(
        `女孩「大${
          you.elder_sibling_sex_title
        }，我一直想看一次帝王${teio.adult_sex_title}的比赛呢……只不过之前都没机会，这一次终于可以了！我考了班级第一，妈妈说当做奖励，带我来看。帝王小姐真的好帅气啊，${
          teio.sex
        } 一定能拿第一的对吧！」`,
      );
      era.println();
      await era.printAndWait(`${you.name} 看着${teio.sex}的脸，不由得笑了。`);
      era.printButton(`「是的，${teio.sex}一定能。」`, 1);
      await era.input();
      era.drawLine();
      await teio.say_and_wait('太糟了……', true);
      await era.printAndWait(
        `自己最擅长的先行跑法完全无法发挥优势，一群${teio.uma_sex_title}互相顶住道路，突破宛如天方夜谭。`,
      );
      await era.printAndWait('真的……能做到吗。');
      era.println();
      await teio.say_and_wait('我一定能！', true);
      era.println();
      await era.printAndWait(
        `奔跑着的${teio.uma_sex_title}聚集又散开，一个狭窄，不易被发掘的只有半马位大小的缝隙暴露出来——`,
      );
      era.println();
      await era.printAndWait(`解说「欸，那是——${teio.name}？！」`);
      era.println();
      await era.printAndWait(
        '小腿肌肉骤然放松，然后缩紧再放！大幅度抬起脚，不管扬起的灰尘与飞溅的泥土，发力！',
      );
      await era.printAndWait(`独属于${teio.sex}的梦幻步法。`);
      await era.printAndWait(`独属于${teio.sex}的舞步。`);
      await era.printAndWait('向所有人展现风采的——帝王舞步！');
      era.println();
      await era.printAndWait(
        `解说「这可能吗——如同梦幻中的景象，${teio.name}，冲了出来，${teio.sex}要奔向第一了——」`,
      );
      era.println();
      await era.printAndWait('刹那间，局面已定。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_h_s: (() => {
    const title = '奇迹复活（上）';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      era.printButton('「准备好了吗」', 1);
      await era.input();

      await teio.say_and_wait('我希望……我能够真的拥有这一切。');
      era.println();

      await teio.say_and_wait(
        '能在这个地方写下属于你我，以及所有支持我们的人们的，帝王的传说。',
      );
      era.println();

      await teio.say_and_wait(
        '我想……这是如同做梦一样的事情。但是光会做梦对于我们来说又有什么用呢？',
      );
      era.println();
      era.printButton(`「没什么用（笑），不过我们还是走到了这一步。」`, 1);
      await era.input();

      await teio.say_and_wait('是啊，我们即将得到这一切了。');
      era.println();

      era.printButton(`「好了，你看起来像是准备好了。」`, 1);
      await era.input();

      await teio.say_and_wait(
        '这一年来，我们失去了一切，只是抱着一点希望和执念不断地继续奔跑——',
      );
      era.println();

      era.printButton(
        '「正因如此，我们已经有了必需的东西，除了继续奔跑下去还有什么选择呢？」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${teio.teen_sex_title}嘴角翘起，抬头与 ${you.name} 对视——`,
      );
      if (era.get(`relation:3:0`) > 150) {
        await era.printAndWait(
          `${teio.sex}伸出双手，置于 ${you.name} 张开的掌心上，${
            you.name
          } 轻轻捏住担当的手，温热的触感传来，指尖感受到${teio.teen_sex_title}健康而有弹性的肌肤，还有下面跳动着的，有些加速的脉搏。`,
        );
        await era.printAndWait(
          ` ${you.name} 望向${
            teio.sex
          }如蓝宝石一般晶莹清澈的，${teio.teen_sex_title}的坚韧，信念，希冀，折射进 ${
            you.name
          } 的瞳孔。${you.name} 也笑了起来，却感觉，眼眶有些湿润。`,
        );
        era.println();

        era.printButton('「去吧，让你的名字响彻云霄。」', 1);
        await era.input();

        await teio.say_and_wait('一定。');
        era.println();

        await era.printAndWait(
          `踏地的足音回荡在小房间里，${teio.teen_sex_title}潇洒地一转身，挥了挥手，坚定地迈步向前。`,
        );
      } else {
        await era.printAndWait(`你们二人默契地伸出惯用手，松握成拳，相碰。`);
        await era.printAndWait(
          `小小躯体中蕴藏的力量，以及如太阳般的温暖从触碰的表面传来。你们看着对方，不禁都笑出了声。`,
        );
        era.println();

        era.printButton('「祝你武运昌隆」', 1);
        await era.input();

        await teio.say_and_wait('好好看着吧，我的奔跑。');
        await era.printAndWait(
          `${teio.sex}收回手臂，干净利落地一转身，走进阳光里。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_h_s: (() => {
    const title = '奇迹复活（下）';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('没问题的。');
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.teen_sex_title}化作一道炽焰流星，最大限度地狂放燃烧着自己的体能，奔跑在赛场上。`,
      );
      era.println();

      await teio.say_and_wait('能赢。');
      era.println();

      await era.printAndWait(
        `${you.name} 从专用观赛席上站起身来，眼神紧紧盯住那道模糊的红影——${you.name} 的担当正在拼劲自己的所有，榨干全身上下每根肌肉纤维做功，来完成这次比赛。`,
      );
      await era.printAndWait(`实现你们的梦想。`);
      era.println();

      await era.printAndWait(
        `蓝天白云，红日清风，最适宜的天气，然而 ${you.name} 却完全没有享受的心思，只管全身心投入到那个小小的身影上。`,
      );
      await era.printAndWait(`${you.name} 的担当，${teio.name}。`);
      await era.printAndWait(
        `世界仿佛从 ${you.name} 眼中远去，又重新聚焦于${teio.sex}的身上。一切声音都如噪点般模糊——等等。`,
      );
      era.println();

      await era.printAndWait(`解说「——${teio.name}选手好像——」`);
      era.println();

      await era.printAndWait('有什么不对。');
      era.println();

      await era.printAndWait(`${you.name} 抓紧栏杆，向前探身，拼命呐喊着。`);
      era.println();

      await era.printAndWait(`解说「——失速！是腿疾旧伤吗——」`);
      era.println();

      await teio.say_and_wait('哈……哈……');
      era.println();

      await teio.say_and_wait('身体……不听使唤了', true);
      era.println();

      await teio.say_and_wait('呼——吸——上不来气', true);
      era.println();

      await teio.say_and_wait('肋骨和肺叶心脏……火烧起来了。', true);
      era.println();

      await teio.say_and_wait('肢体……感受不到了', true);
      era.println();

      era.printButton('「——帝——王——」', 1);
      await era.input();

      await teio.say_and_wait('那人是谁……', true);
      era.println();

      await teio.say_and_wait(
        '声音……视线……好模糊……什么都想不起来了，就这样倒下……',
        true,
      );
      era.println();

      await era.printAndWait('躯干前倾，头部下坠。');
      era.println();

      await era.printAndWait('不，等等。');
      await era.printAndWait('不应该是这种结局。');
      era.println();

      await teio.say_and_wait('不对', true);
      era.println();

      await teio.say_and_wait('我这是在干什么——', true);
      era.println();

      era.printButton(`「${teio.name}！！！」`, 1);
      await era.input();

      await teio.say_and_wait('啊啊……');
      era.println();

      await era.printAndWait(`解说「——唉！${teio.name} 追上来了？」`);
      era.println();

      await teio.say_and_wait('我似乎想起来了。');
      era.println();

      await era.printAndWait(
        `沉重的双腿，火烧的肺，酸楚的手臂——痛苦回到了名为 ${
          teio.name
        } 的${teio.uma_sex_title}躯体中。`,
      );
      await era.printAndWait('但是，同样回归的，还有斗志和信念。');
      era.println();

      await teio.say_and_wait('我想起来了！');
      era.println();

      await era.printAndWait(
        `双脚与大地接触，摩擦，蹬地产生的反作用力推动已经苦痛难忍的身躯冲锋，身体倾斜，最大限度利用势能提供的正向加速度——`,
      );
      era.println();

      await era.printAndWait(
        `解说「现在的第一是——等等，那是，${teio.name} 冲上来了！是 ${teio.name}！」`,
      );
      era.println();

      await teio.say_and_wait('呼吸好痛苦', true);
      era.println();

      await teio.say_and_wait('可就算肺炸了也没有关系', true);
      era.println();

      await teio.say_and_wait('脚步好沉但还能动', true);
      era.println();

      await teio.say_and_wait('我……已经挫折了好多次', true);
      era.println();

      await teio.say_and_wait('那一次……还有那一次', true);
      era.println();

      await teio.say_and_wait('比任何人都挫折更多次', true);
      era.println();

      await teio.say_and_wait('比任何人都不甘心的是我', true);
      era.println();

      await teio.say_and_wait('比任何人都想赢的是我', true);
      era.println();

      await teio.say_and_wait('绝不退让', true);
      era.println();

      await teio.say_and_wait('一定是一定是', true);
      era.println();

      await teio.say_and_wait('一定是我！', true);
      era.println();

      await teio.say_and_wait('冲吧', true);
      era.println();

      await teio.say_and_wait('冲吧', true);
      era.println();

      await teio.say_and_wait('冲吧奔驰起来', true);
      era.println();

      await teio.say_and_wait('一决胜负吧！', true);
      era.println();

      await era.printAndWait(
        `解说「是 ${teio.name}！${teio.name} 追上来了！${teio.sex}和头马间的差距越来越小！」`,
      );
      era.println();

      await era.printAndWait('还剩不到200米');
      era.println();

      await era.printAndWait(
        `解说「时隔一年回到赛场的 ${teio.name} 能追上去吗？${
          teio.sex
        }超过去了——不，其他的${teio.uma_sex_title}正在紧紧黏在${
          teio.sex
        }的身旁，正在拼命追赶 ${teio.name}！」`,
      );
      era.println();

      await era.printAndWait(
        `解说「${teio.name} 在奋力追赶！而对手毫不相让——只差一个马位！」`,
      );
      era.println();

      await era.printAndWait(
        `解说「就差一点，就差一点！${teio.name} 却不能更近一步！」`,
      );
      era.println();

      await era.printAndWait(
        '解说「展现出菊花赏记录保持者的强大就是不让步！」',
      );
      era.println();

      await era.printAndWait(
        `解说「但是——${teio.name} 接近了！重回赛场的帝王把差距越缩越小！」`,
      );
      era.println();

      await era.printAndWait('100米\n最后的拉锯战');
      era.println();

      await era.printAndWait(
        `解说「已经和先头并排了吗？${teio.name}！究竟是新一代的霸主还是旧日的没落君王登上王座——」`,
      );
      era.println();

      await era.printAndWait(
        '整片草场，仿佛在颤抖起来。中山竞马场——它是不是也期待着有马纪念的赢家呢？',
      );
      era.println();

      await teio.say_and_wait('啊啊啊啊啊啊啊啊啊啊啊！');
      era.println();

      await era.printAndWait(`解说「是 ${teio.name}！」`);
      era.println();

      await era.printAndWait(
        `解说「${teio.name} 超越了吗？${
          teio.name
        } 稍稍领先，要展现德比赛${teio.uma_sex_title}的骨气了吗？！」`,
      );
      era.println();

      await era.printAndWait('解说「但是优势微弱啊，对手也咬住不放！」');
      era.println();

      await era.printAndWait('解说「是哪边，哪边？！」');
      era.println();

      await era.printAndWait(`赛${teio.uma_sex_title}「是我——」`);
      era.println();

      await teio.say_and_wait('——赢了——');
      era.println();

      await era.printAndWait('一抹赤虹，冲开终线。');
      era.println();

      await era.printAndWait('全场仿佛寂静了那么一瞬，然后是排山倒海的呼声。');
      await era.printAndWait(
        '沸腾的人群们的呐喊，响彻天空，一个名字回荡其中。',
      );
      era.println();

      await era.printAndWait(`观众「${teio.name}！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 1 / 3),
        fontSize: '1.125rem',
      });
      await era.printAndWait(`观众「${teio.name}！！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 2 / 3),
        fontSize: '1.25rem',
      });
      await era.printAndWait(`观众「${teio.name}！！！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.375rem',
      });
      era.println();

      await era.printAndWait(`解说「${teio.name}——奇迹复活！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      });
    };
    f.title = title;
    return f;
  })(),
  we_143_5_h: (() => {
    const title = '柳暗花明';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        ` ${you.name} 走在路上，有些汗湿的衬衫紧贴着 ${you.name} 的上身。`,
      );
      await era.printAndWait(
        `稍前面一点的是 ${you.name} 的担当，东海帝王。${teio.sex}捏着 ${
          you.name
        } 的手，用一个对于${teio.uma_sex_title}来说稍慢，但又比较锻炼 ${
          you.name
        } 的速度走着。你们的掌心贴在一起，偶尔轻摇。天边太阳的余晖落到额前，${
          you.name
        } 脚踏大理石打磨成的小道，仰头注视前方，看见有淡金色的光班从${
          teio.sex
        }白色的刘海上闪过。`,
      );
      await era.printAndWait(
        `来到一段阶梯前，${teio.sex}停步略歇，${you.name} 也随之站住，眺望起面前的景色。`,
      );
      await era.printAndWait(
        '黄昏之下，大地借用落日最后的光亮裹住自己，披上了一件布料，星星点点的金线溜过它凹凸不平的表面。并没有积雪反射光芒，只有刚出头的绿色嫩芽贪婪地吸取着能量。',
      );
      await era.printAndWait('春天要来了。');
      await era.printAndWait(`你们的梦，也结束了。`);
      await era.printAndWait('是时候说……');
      era.println();

      era.printButton('「这一刻已等了太久——我们都一样。」', 1);
      await era.input();

      await teio.say_and_wait('是啊');
      era.println();

      await teio.say_and_wait(
        '我还记得春天皇赏的时候，我感到害怕——并不是因为身体上的伤痛和疾病——而是想到最初的愿望或许要永远成为泡影。',
      );
      await teio.say_and_wait('而最糟糕的是……我的恐惧成真了。');
      era.println();

      await era.printAndWait(
        `面对残阳，${teio.teen_sex_title}张开双臂，舒展身体，缓缓道来。光线投射下来，将${
          teio.sex
        }的阴影打在 ${you.name} 的脸上。${you.name} 沉默，脑海里浮现出过往的种种，${
          teio.sex
        }跌入低谷，${teio.sex}迷茫，${teio.sex}坎坷，而 ${
          you.name
        } 眼看着这一切却又束手无策，唯有抱着一个幻想出的希望，咬紧牙关和${
          teio.sex
        }一起坚持下去。`,
      );
      await era.printAndWait('不妥协，不放弃。');
      era.println();

      await teio.say_and_wait(
        '但我——我们一起，坚持住了。现在，我的身边有你，有灯光，有人群，有梦想。',
      );
      era.println();

      await teio.say_and_wait('因为我们曾经笃信一件事——而现在它成真了。');
      era.println();

      era.printButton('「帝王」', 1);
      await era.input();

      await teio.say_and_wait('怎么？');
      era.println();

      era.printButton('「你……相信吗。」', 1);
      await era.input();

      await era.printAndWait(
        `${teio.uma_sex_title}没有立刻回应 ${
          you.name
        }，而是迎着夕阳低下头，而后轻摆着马尾，回眸一笑。`,
      );
      era.println();

      await teio.say_and_wait('一直以来，深信不疑。');
      era.println();

      await era.printAndWait(
        `随后，是${teio.sex}动人的笑声，${you.name} 不禁也随之而笑。二人携手，继续向前。`,
      );
      await era.printAndWait(`属于你们的故事，还将继续。`);
      era.println();
      if (era.get('talent:3:自信程度') === 1) {
        era.print([teio.get_colored_name(), ' 不再 [自卑] 了！']);
      }
      era.print([
        teio.get_colored_name(),
        ' 的 ',
        {
          color: buff_colors[3],
          content: '[腿伤]',
        },
        ' 痊愈了！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async ws_palace_h(teio) {
    await teio.say_and_wait('这是，属于我们的丰碑——');
  },
  op_rehabilitation: (() => {
    const title = '康复训练';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `木制的大桶里盛满温热的水，${you.name} 抓住爱马赤裸的双足，将其慢慢浸入水中。`,
      );
      await era.printAndWait(
        `对准穴道，捏捏抓抓。晶莹白润的腿脚被刺激，充血变红，${you.name} 埋头干着例行的公事。`,
      );
      await era.printAndWait(
        '和医生讨论出的一套帮助帝王恢复双腿的计划，每天都要严格执行，现在做的是每晚最后一步。',
      );
      await era.printAndWait(
        `看着${teio.teen_sex_title}外表完美的双腿，${
          you.name
        } 还是心疼了起来。内里的伤，恐怕很难痊愈了吧。`,
      );
      await era.printAndWait(
        '说到底，自己的努力，真的有意义吗，还是说只不过是对双方的心理安慰？',
      );
      era.println();

      await era.printAndWait(
        `${
          you.name
        } 想起医生私下跟自己说的一些类似病症的${teio.uma_sex_title}们，${
          teio.couple_title
        }无一例外没能再次康复，选择了退役。那么帝王……`,
      );
      era.println();

      await teio.say_and_wait('训练员。');
      era.println();

      await era.printAndWait(
        `比平常低声的话语音冲开升腾的热气，飘进 ${you.name} 的耳朵。`,
      );
      era.println();

      await teio.say_and_wait(
        `我……虽然我知道这个问题很蠢，但我还是想听到 ${you.name} 亲口告诉我……我们现在做的这些，真的有用吗？`,
      );

      era.printButton('低下头去（耐力&根性&智力+15）', 1);
      era.printButton(
        '「我们的信念一定会得到回应。」（速度&力量+15，好感+5，干劲上升）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 低下头去，不愿或者不敢搭话，只顾对',
          teio.uma_sex_title,
          '的腿部进行护理',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_dead: (() => {
    const title = 'DEAD ENDING';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} kita 犯人（以北黑的代表色暂定）
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} k_call_t 北部玄驹对东海帝王的称呼
     */
    const f = async (teio, kita, you, k_call_t) => {
      await era.printAndWait(
        '🎶You made one mistake, you got burned at the stake🎶',
        { align: 'center', isParagraph: true },
      );
      await era.printAndWait([
        teio.get_colored_name(),
        ' 收起雨伞，用伞钩扣住了挂架，顺便取下帽子，',
        teio.sex,
        '从衣柜下层拖出一个行李箱，拉到床边，坐在上面翘起了腿。',
      ]);
      await era.printAndWait(
        '把帽子斜戴在头上，遮住马耳，蓝色的眼眸前飘过阵阵烟尘，窗外的阳光穿透进来，给它们镀上了一层金粉。',
      );
      await era.printAndWait([
        '托着下巴，',
        teio.sex,
        '盯着 ',
        you.get_colored_name(),
        ' 的睡脸，阳光流过 ',
        you.get_colored_name(),
        ' 睫毛的间隙。目光扫过有规律起伏的鼻翼，稍稍发白的双唇，扣好的衣领。',
      ]);

      await era.printAndWait(
        "🎶You're finished, you're foolish, you failed🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      era.printButton('「早上好啊。」', 1);
      await era.input();

      await era.printAndWait([
        teio.get_colored_name(),
        ' 俯冲向前一把扼住了 ',
        you.get_colored_name(),
        ' 的喉咙，左膝盖压住了 ',
        you.get_colored_name(),
        ' 的右臂肘关节，右腿顶着胸口，最后拧紧了左手大拇指。',
      ]);
      await era.printAndWait([
        '微弯下腰，',
        teio.sex,
        '瞪着眼看向 ',
        you.get_colored_name(),
        ' 的一脸笑意。',
      ]);
      await you.say_and_wait('唔，我亲爱的担当想要早安吻吗——咳啊！');
      era.println();

      await era.printAndWait([
        teio.get_colored_name(),
        ' 双手发力，',
        you.get_colored_name(),
        ' 的五官同时抖了起来。',
      ]);

      await era.printAndWait(
        "🎵There's always a hope on this slippery slope🎵",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await you.say_and_wait('你，还没，额呜，吃早餐吧。');
      era.println();

      await era.printAndWait('扬起的嘴角不停抽搐，流下带着酒气的口水。');
      await era.printAndWait([
        teio.get_colored_name(),
        ' 眯起眼睛，右膝向下压去。',
        you.get_colored_name(),
        ' 的双手猛地一震，左手连续拍打了',
        teio.sex,
        '的手背好几下。',
      ]);
      await era.printAndWait([
        '拍了好一会，嘴角的高度开始降下，血丝包围了 ',
        you.get_colored_name(),
        ' 的眼珠。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 闭上双眼，呜咽一声，颤抖的食指在 ',
        teio.get_colored_name(),
        ' 的手背上慢慢地写了一个S。',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        ' 歪歪头，等O在手背写了一半，',
        teio.sex,
        '松开了喉咙上的手。',
        you.get_colored_name(),
        ' 咳嗽着，两手都瘫软下来。',
      ]);
      await you.say_and_wait('咳，咳咳呜，我的天啊，早餐可不能，额咳，晚吃。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 每咳一声，胸前就传来酸痛感。',
      ]);

      await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('嗯哼，可是你好像快十一点了才醒欸。');
      era.println();
      await you.say_and_wait(
        '对不起！我真心对不起，我不该在你不在的时候偷偷抽烟喝酒的。',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 一说完，又感到一双小手贴上了自己的脖子肉。',
        you.get_colored_name(),
        ' 双腿一震，瞪大了眼睛。',
      ]);
      era.println();
      await you.say_and_wait(
        '好好好我呸别别别！别再来了！真的别再来了！呼，我懂了。',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 深吸了口气，正视着 ',
        teio.get_colored_name(),
        ' 的蓝色瞳孔说：',
      ]);
      era.println();

      era.printButton('「我知错了，我后悔了！」', 1);
      await era.input();

      await era.printAndWait(
        '🎵To get back in that game and burn off your shame🎵',
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        teio.get_colored_name(),
        ' 盯住身下 ',
        you.get_colored_name(),
        ' 的脸，慢慢收回了手，双膝离开了 ',
        you.get_colored_name(),
        ' 的身体。看到自己的拇指还被拧着，',
        you.get_colored_name(),
        ' 挑起眉，说',
      ]);
      era.println();
      await you.say_and_wait('你总不能让我一边被你牵着一边单手给你作早餐吧？');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' 松开手，扶着脑袋上的帽子，轻轻后跳下了床。',
      ]);
      era.println();
      await teio.say_and_wait('我不饿。');
      era.println();
      await era.printAndWait([
        teio.sex,
        '走到窗边，歪着头倚在深色的窗帘上。',
        you.get_colored_name(),
        ' 揉了揉肘关节坐起来，抿着嘴说',
      ]);
      era.println();
      await you.say_and_wait('不饿身上带这个干什么？');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' 一回头，只见 ',
        you.get_colored_name(),
        ' 右手掌里放着一块包装好的小面包。',
        teio.sex,
        '收紧嘴角，向前走了一步，',
        you.get_colored_name(),
        ' 赶紧摆摆手。',
      ]);
      era.println();
      await you.say_and_wait(
        '放轻松我的好担当。记得下次拿了东西要趁热吃。还有，如果只是想和我一起共进饭食的话……早上你知道怎么弄醒我。',
      );
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' 一摸口袋，涨红了脸，轻踢了 ',
        you.get_colored_name(),
        ' 的屁股一脚。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 摸了摸屁股打开衣柜，解开睡衣扣子，取出一件不起眼的格子衬衫换上。',
      ]);
      await era.printAndWait([
        teio.sex,
        '盯着 ',
        you.get_colored_name(),
        ' 换完了衣服，和 ',
        you.get_colored_name(),
        ' 一同离开了房间。',
      ]);

      await era.printAndWait('🎶And dance with the big boys again🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        you.get_colored_name(),
        ' 一手铺好桌布，另一只手放下端着的一盘炒蛋和香肠，摆好自己的餐具，把餐巾平放在大腿上。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 喝了口新打的橙汁，在 ',
        teio.get_colored_name(),
        ' 的咀嚼声中进食。然后 ',
        you.get_colored_name(),
        ' 切开鸡蛋，叉起来送到 ',
        teio.get_colored_name(),
        ' 嘴边。',
      ]);
      era.println();
      await you.say_and_wait('尝尝味道够不够。');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        ' 一口吞下，一边嚼着一边切下一块肉，叉到 ',
        you.get_colored_name(),
        ' 面前。',
        you.get_colored_name(),
        ' 俯身咬住了叉子，把肉卷进嘴里。',
      ]);
      era.println();

      era.printButton('「嗯唔，你多吃点，对健康和发育有好处。」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 桌下的脚尖被',
        teio.uma_sex_title,
        '轻踩了一下。',
      ]);

      await era.printAndWait("🎶It's a strange, strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '距离你们相知相识，相伴，再到如今，过去多久了呢？或许已经有了三五年吧，不过你们两个似乎也没谁关心这些事情。',
      ]);
      era.println();
      await era.printAndWait([
        '毕竟，对于你们而言，有关特雷森，有关比赛，过去所有一切都已经结束了。',
      ]);
      era.println();
      await era.printAndWait([
        '二人生活之中，也会刻意回避这些话题——不过虽然',
        teio.sex,
        '对 ',
        you.get_colored_name(),
        ' 的称呼早已改成 ',
        you.get_colored_actual_name(),
        '，但是 ',
        you.get_colored_name(),
        ' 还是会下意识地称呼',
        teio.sex,
        '为自己的担当，似乎',
        teio.sex,
        '对此倒也没什么意见。',
      ]);
      era.println();
      await era.printAndWait([
        teio.sex,
        '腿伤之后，你们尽管做出了一些努力，但仍然未能挽救回',
        teio.sex,
        '的',
        teio.uma_sex_title,
        '生涯，就这样在复出后连续失利中草草退役了。',
      ]);
      await era.printAndWait('没有鲜花和掌声，用最低调的方式退出了整个系统。');
      await era.printAndWait([
        '为了照顾',
        teio.sex,
        '（或者只是舍不得',
        teio.sex,
        '），',
        you.get_colored_name(),
        ' 也申请了离职，在特雷森的帮助下和',
        teio.sex,
        '一起在一处僻静的村庄里安置了两个人的新家。',
      ]);

      await era.printAndWait('🎶Such a shame, shame, shame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('唔……刚刚好像有个东西忘了买。');
      era.println();
      await era.printAndWait([
        '早午饭用毕，',
        you.get_colored_name(),
        ' 和',
        teio.sex,
        '一起在厨房里清洗用具。',
        teio.sex,
        '收拾东西，踮起脚尖打开冰箱时，突然来了这样一句话。',
      ]);
      era.println();
      await you.say_and_wait('啊？那么我们一会一起再去一趟？');
      era.println();
      await teio.say_and_wait('唔——');
      era.println();
      await era.printAndWait([
        '突然间，一阵声响从屋里其他房间传来。你们对视一眼，然后',
        teio.sex,
        '便消失于门外。不到一分钟的时间，又重新回到 ',
        you.get_colored_name(),
        ' 的面前。',
      ]);
      era.println();
      await teio.say_and_wait('贮藏间的天花板好像漏水了，塌了一块下来。');
      era.println();

      era.printButton('「那一会我去修吧，正好你去买东西。」', 1);
      await era.input();

      await era.printAndWait([
        teio.sex,
        '迟疑了一下，看了看 ',
        you.get_colored_name(),
        '。',
      ]);
      era.println();

      era.printButton(
        '「不会有问题的，我办事，你放心。你个子不够高这上面帮不了什么忙，我自己一人也足够应付了，分工干活正好完事。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' 的前担当沉吟良久，最后还是点头同意了 ',
        you.get_colored_name(),
        ' 的想法。',
      ]);
      await era.printAndWait([
        teio.sex,
        '站在家门前，',
        you.get_colored_name(),
        ' 最后一次帮',
        teio.sex,
        '整理服饰，隐藏好尾巴和耳朵，满意地拍了拍手，随后浅浅一吻，道别，开门。',
      ]);
      await era.printAndWait([teio.sex, '走向外面的世界。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 关上房门，通过窗户目送',
        teio.sex,
        '的身影远去，舒了一口气，又拉上窗帘，转头去干活了。',
      ]);

      await era.printAndWait('🎶You got to carry the blame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '一刻钟左右，一阵门铃声打断了 ',
        you.get_colored_name(),
        ' 集中在锤子钉子木板上的注意力。',
      ]);
      await era.printAndWait([
        '一开始 ',
        you.get_colored_name(),
        ' 懒得理，不过门外的人显然很有毅力，接连不断地响声堪比对 ',
        you.get_colored_name(),
        ' 的耐力训练，最后 ',
        you.get_colored_name(),
        ' 还是支撑不住决定去门前看看，通过猫眼，',
        you.get_colored_name(),
        ' 看到了——',
      ]);
      await era.printAndWait('一双马耳。');
      await era.printAndWait('一双褐色的，小三角形的马耳。');

      await era.printAndWait('🎶In this strange game🎶', {
        align: 'center',
        isParagraph: true,
      });

      await you.say_and_wait(
        ['伪装暴露了？', teio.sex, '急着跑回家来？'],
        true,
      );
      await era.printAndWait([
        '着急的 ',
        you.get_colored_name(),
        ' 直接拉开了房门，随后而来的是——胸口处的剧痛。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 低下头，才发现一柄利刃巧妙地穿过肋骨缝隙，扎进了自己的心口。',
      ]);
      era.println();

      await you.say_and_wait('呃……');

      await era.printAndWait(
        "🎶You're out on a limb and you're trying to gеt in🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        '鲜红色的血液喷涌而出，带着 ',
        you.get_colored_name(),
        ' 的生命力一同流出体外。',
        you.get_colored_name(),
        ' 呆笨地眨眨眼，将凶手——一位似乎有点印象的',
        teio.uma_sex_title,
        '——映入瞳中。',
      ]);
      era.println();
      await kita.say_as_unknown_and_wait([
        '就是你……毁了 ',
        k_call_t,
        ' 的人生。',
      ]);
      await kita.say_as_unknown_and_wait([
        '因为一己私欲对',
        teio.sex,
        '的双腿情况视而不见，又乘虚而入装作',
        teio.sex,
        '唯一的心灵支柱什么的……这就是你该有的下场！',
      ]);
      await kita.say_as_unknown_and_wait([
        '不过 ',
        k_call_t,
        '……已经被你蒙蔽太深，不可能做什么了。只有让我这个粉丝来帮偶像解脱了！我终于等到这个机会了！',
      ]);

      await era.printAndWait("🎶It's a strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '啊啊，',
        kita.sex,
        '好像在义愤填膺地说着什么。',
      ]);
      await era.printAndWait([
        '不过 ',
        you.get_colored_name(),
        ' 已经没有办法处理这些信息了。',
      ]);
      await you.say_and_wait(
        '真可惜……没机会戒酒戒烟，让帝王高兴高兴了。',
        true,
      );
      await era.printAndWait([
        '带着最后的意识，',
        you.get_colored_name(),
        ' 堕入一片深沉的黑暗，永远闭上了眼。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async be_dead_end() {
    await era.printAndWait('Do you want to play this a strange game again?', {
      align: 'center',
      isParagraph: true,
    });
  },
  be_normal: (() => {
    const title = '无为而终';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        '与 ',
        teio.get_colored_name(),
        ' 解除契约后，为了避风头远离舆论，为了寻求平静，',
        you.get_colored_name(),
        ' 离开特雷森换了一个地方重新做起训练员的工作。然而，不知是什么原因，',
        you.get_colored_name(),
        ' 指导的',
        teio.uma_sex_title,
        '再也没有出过优异的成绩，',
        you.get_colored_name(),
        ' 的状态和能力也再没能回到和 ',
        teio.get_colored_name(),
        ' 搭档时的水准……',
        you.get_colored_name(),
        ' 的路，就这么简单地到头了，',
        you.get_colored_name(),
        ' 和 ',
        teio.get_colored_name(),
        ' 曾经的梦想，最终也没能实现。',
      ]);
      await era.printAndWait([
        '内心仿佛缺少了什么的 ',
        you.get_colored_name(),
        ' 重复着一成不变的生活，工作逐渐变成负担，',
        you.get_colored_name(),
        ' 开始把烟酒当作提神和安慰的良药，不知不觉地，',
        you.get_colored_name(),
        ' 已经淡忘了自己当初的理想，失去了干劲，碌碌无为地走完了 ',
        you.get_colored_name(),
        ' 的后半段职业生涯……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
