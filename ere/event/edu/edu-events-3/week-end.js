const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const {
  get_skill_list,
  part_enum,
  part_names,
  touch_list,
} = require('#/data/ero/part-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const { get_filtered_talents } = require('#/data/info-generator');

module.exports = async function () {
  const teio = get_chara_talk(3),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:3:育成回合计时'),
    event_marks = new TeioEduMarks();
  if (edu_weeks === 95 + 17) {
    await print_event_name('依靠', teio);
    await era.printAndWait('雨夜，静寂无声。');
    await era.printAndWait(
      `${
        me.name
      } 一个人在宿舍内盯着电脑屏上的资料，有一搭没一搭地做着笔记，修改着担当${teio.get_uma_sex_title()}下一阶段的训练计划。事实上，这件事情 ${
        me.name
      } 早已完成了，不知为何，${
        me.name
      } 又将工作磨到了深夜，是为了缓解心中的郁气吗？还是说，在用机械劳动来逃避现实？`,
    );
    await era.printAndWait(
      `敲击键盘的音量变得越来越烦躁，响声从耳膜涌进脑海，${me.name} 干脆啪地一声合上屏幕，双手轻揉太阳穴，闭上眼，深呼吸，长出一口气。`,
    );
    await era.printAndWait('……声音没有停。');
    await era.printAndWait(
      `${
        me.name
      } 愣了一下，然后快速跑到门口，瞥了一下猫眼便拉开房门。铃声余音回荡，大门敞开，深沉黑夜的最中央处，一位浑身湿漉的${teio.get_uma_sex_title()}立于 ${
        me.name
      } 的面前。降水顺着雨衣滑落，一根长翘的白色刘海被水珠的重量压于鼻沿，又被轻轻撩起，随着${
        teio.sex
      }这抬兜帽的动作，${me.name} 看到了一双暗淡的蓝色双眸。`,
    );
    await era.printAndWait(
      `在这一刻，${me.name} 产生了一种没来由的确信——自己今晚仿佛就是一直在想着${teio.sex}，等着${teio.sex}。`,
    );
    await era.printAndWait(
      `伴随着心中的如释重负和一点恼怒，${me.name} 一言不发，侧身请${teio.sex}入屋。`,
    );
    era.println();
    await teio.say_and_wait('……');
    era.println();
    await era.printAndWait(
      `${teio.get_teen_sex_title()}一言不发坐在沙发上，任由 ${
        me.name
      } 将热气腾腾的毛巾盖在头上抚弄。${
        me.name
      } 数次想开口说话，却只发出了嗫嚅的嘟囔声，只好作罢。一人一马陷入了诡异的沉默。`,
    );
    await era.printAndWait(
      `即使 ${
        me.name
      } 没有当过训练员，也可以一眼就可以看出${teio.get_uma_sex_title()}${teio.get_teen_sex_title()}正在崩溃的边缘。`,
    );
    await era.printAndWait(
      `${
        teio.sex
      }了无生气地坐在那里，双手合一，并非祈祷，而像是在寻求依赖般，把额头贴近双手。这位${teio.get_teen_sex_title()}，仿佛困在一片寂静的黑暗中，拒绝所有的光线与声音，${
        me.name
      } 甚至不禁担心${teio.sex}是否切实存在于这里。`,
    );
    await era.printAndWait(`——唔，${teio.sex}确实在。`);
    await era.printAndWait(
      `腰间传来的触感将${teio.sex}的存在固定于现实，一根马尾悄悄地，小心地缠住了 ${me.name}，仿佛溺水的人抓紧唯一的救生索一般，紧紧环绕着 ${me.name} 的身子。`,
    );
    era.printButton('「帝王……」', 1);
    await era.input();
    await era.printAndWait(
      `没有声音。只有${teio.get_teen_sex_title()}轻颤的身体仿佛在回应着 ${
        me.name
      }。`,
    );
    era.println();

    await me.say_and_wait('……');
    era.println();

    await era.printAndWait(
      `从未见过${teio.get_teen_sex_title()}这副样子。原本柔顺打着挺的毛发散乱不堪，双目无神黯淡，愈显瘦小的身形随着呼吸和脉搏起伏抖动。${
        me.name
      } 再次呼喊${
        teio.sex
      }的名字，声音比刚才稍大，同时控制着不要过响。这次有回应了。倏然。${
        teio.name
      }猛地抬起头正视 ${me.name}，像是在确认似的眨了眨眼睛。`,
    );
    await era.printAndWait('然后，飞扑而来。');
    await era.printAndWait(`小小的身体被 ${me.name} 抱入怀中。`);
    era.println();

    await teio.say_and_wait(`——`);
    era.println();

    await era.printAndWait(
      `没有呜咽。没有眼泪。但显然${teio.sex}正在抵抗着这股冲动。`,
    );
    await era.printAndWait(
      `一旦精神意志有丝毫的退让，${
        teio.sex
      }仅存的抵抗意识就会烟消云散吧。${teio.get_teen_sex_title()}将会开始哭泣，无休无止地哭个不停吧。`,
    );
    await era.printAndWait(
      `那就意味着${teio.name}这个${teio.get_uma_sex_title()}的崩溃。`,
    );
    await era.printAndWait(
      '以常理论，若感神伤，又何妨大哭一场。确是如此。眼泪有种伟大的功效，它可以冲刷烦恼，不管多大的痛苦都可以得到缓解。',
    );
    await era.printAndWait('流泪之后，人们可以获得再次面对现实的活力。');
    await era.printAndWait(
      `但是——对于名为${
        teio.name
      }的${teio.get_uma_sex_title()}而言，现在这些亦是不能采取之举。`,
    );
    await era.printAndWait(
      `若在此处，倚靠与 ${me.name} 的身上哭泣，是否是一种逃避责任呢？`,
    );
    await era.printAndWait(
      `出道时便宣传三冠，立下无与伦比目标的${teio.get_uma_sex_title()}，跌倒在了独创的，自认为最合适的，结合了自己天赋的跑法上。最后，又因为自己的任性，而让信赖的训练员（${
        me.name
      }）帮助自己承担了责任。如此情况，又何来脸面哭泣，在 ${
        me.name
      } 旁边发泄情绪，再度让 ${me.name} 来帮扶${teio.sex}呢？`,
    );
    await era.printAndWait(
      `也许此刻流下眼泪，逃避一切，对于${
        teio.name
      }来说才是幸福的吧。但如此一来，那个坚忍不拔，自信地在世人面前宣示存在的${teio.get_uma_sex_title()}，便认输退场了。`,
    );
    await era.printAndWait(
      `所以${teio.get_teen_sex_title()}只是靠在 ${
        me.name
      } 的怀里，咬着嘴唇，紧闭着眼睛，有些滑稽地颤抖着身体。`,
    );
    await era.printAndWait(
      ` ${me.name} 温柔地轻拂着${teio.get_uma_sex_title()}的背部，试图让${
        teio.sex
      }平静下来。`,
    );
    await era.printAndWait(
      `温度在二人之间传递，原来蹭到 ${me.name} 身上，向一个小太阳般烘热 ${me.name} 身心的担当，如今反过来被 ${me.name} 温暖着。`,
    );
    era.println();
    await teio.say_and_wait('……训练员。');
    era.println();
    await era.printAndWait(
      `${me.name} 用手指习惯性地，慢慢地帮${teio.sex}梳理毛发，下意识嗯了一声作为回应。`,
    );
    era.println();
    await teio.say_and_wait('我……不知道该说什么，也不知道该怎么做了。');
    await era.printAndWait(` ${me.name} 沉默以对，手上的动作慢了下来。`);
    era.println();
    await teio.say_and_wait('我现在剩下的……只有你了。');
    era.println();
    await era.printAndWait(
      `引以为傲的双腿，背负着的梦想的双翼，全部从${teio.get_teen_sex_title()}身上消失了。`,
    );
    era.println();
    await teio.say_and_wait('我想要，你的这份心力。');
    era.println();
    await me.say_and_wait('那种东西，我会给你的。');
    era.println();
    await teio.say_and_wait('那么……请你也收下我的。');
    era.println();
    await era.printAndWait(
      `一根幼细的手指小心地伸入 ${me.name} 的衣领，顺着锁骨下滑到胸口，${me.name} 感到皮肤一阵紧缩。`,
    );
    await era.printAndWait(`${me.name} 决定——`);
    era.printButton(`「推开${teio.sex}，起身。」`, 1);
    era.printButton('「点头。」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${me.name} 扶住${teio.sex}的双肩，用肢体表达了自己的回答。随后叫了辆出粗车，护送${teio.sex}回到学校，一路无言——或许也只是 ${me.name} 无法面对${teio.sex}的脸。`,
      );
    } else {
      event_marks.abandon_disabled++;
      await era.printAndWait(
        `犹豫。对于${teio.sex}所指的言外之意，${me.name} 感受到了自己单纯的喜悦。还有兴奋。`,
      );
      await era.printAndWait(
        `但是，可以将身体交给这份涌动吗。那真的可以救赎这位${teio.get_teen_sex_title()}吗？`,
      );
      await era.printAndWait(
        `——话虽如此，${me.name} 不是已经决定把一切都交给${teio.sex}自己的决断了吗。`,
      );
      await era.printAndWait(
        `既然这个决断是${teio.sex}所下的。那 ${me.name} 该做的——只是尊重${teio.sex}的决断吧。`,
      );
      era.println();

      await me.say_and_wait('我可能不是那么温柔的人');
      era.println();

      await teio.say_and_wait('没关系的……我，唔！');
      era.println();
      await era.printAndWait(
        `${me.name} 抬起${teio.sex}的下巴，吻上${teio.sex}的唇。这与其说是礼节，不如说是为了稍微缓和${teio.sex}的情绪。`,
      );
      await era.printAndWait(
        `但是，这个举动却解放了 ${me.name} 内心深处潜伏着的东西。`,
      );
      await era.printAndWait(
        `火热柔软的触感让 ${
          me.name
        } 尝到了${teio.get_uma_sex_title()}的滋味。不错，这是生来待人贪求的生物！那令人耽溺于其中的魅惑勾出了 ${
          me.name
        } 的情欲。`,
      );
      await era.printAndWait(
        `渴望将${teio.sex}压在身下，支配其身体的冲动——令人无法抗拒的波涛在这一刻翻腾，从心脏涌动到四肢末端。`,
      );
      await era.printAndWait('精神的一部分正在向野兽演变。');
      await era.printAndWait(
        `也许是感觉到了 ${me.name} 的变化，臂弯中的${
          teio.name
        }在颤抖。不加理会，${
          me.name
        } 继续着已经开始的动作——伸出舌头打开${teio.get_teen_sex_title()}的唇，而后侵入。`,
      );
      await era.printAndWait(
        `从光滑的牙齿舔至富有弹力的齿龈。舌头卷起${teio.get_teen_sex_title()}的上唇，舔舐其内侧。`,
      );
      await era.printAndWait(
        `很难说这是对待${teio.get_teen_sex_title()}的正确做法。但是这么做的冲动难以抑制。`,
      );
      await era.printAndWait(
        `${teio.name}一定是吓坏了吧，但${teio.sex}很顺从。既不反抗，也不躲闪，温顺地把身体交给 ${me.name}。`,
      );
      await era.printAndWait(`这样的态度更加点燃了 ${me.name} 的兽性。`);
      await era.printAndWait(
        ` ${me.name} 将脸贴上去，与担当唇舌相触，体液在双方口中翻腾舔舐。口腔被无情侵入的小马战战兢兢却不肯认输地伸展柔舌，缠住了 ${me.name} 这个入侵者。`,
      );
      await era.printAndWait('血液在沸腾。大脑失去了思考的功能。');
      await era.printAndWait(
        `${teio.get_teen_sex_title()}薄薄的舌头束手无策地被玩弄着。眼眸因为过度的暴虐而噙着泪珠——水珠滴落到了紧贴的唇瓣上，传递出遭受了意料之外的粗暴对待这一事实。`,
      );
      era.println();

      await era.printAndWait('——无比甘美。');
      await era.printAndWait(`${me.name} 内心深处发出了满足的咆哮声。`);
      await era.printAndWait(`不过是一匹${teio.get_sex_slave_title()}而已。`);
      await era.printAndWait(
        `此念一出，${me.name} 原本就所剩无几的“师长风度”更是不知所踪。`,
      );
      await era.printAndWait(
        `嘴唇随着一定节奏吸吮着，啜饮着肉与肉的窄缝之间涌出的液体。阵阵淫靡之音响起。浑身脱力，被 ${
          me.name
        } 半托半抱在臂弯中的${teio.get_teen_sex_title()}，身体一下子变得火热——大概是害羞的缘故吧。`,
      );
      await era.printAndWait(`这更加勾起了 ${me.name} 的情欲。`);
      await era.printAndWait(
        `${me.name} 继续霸占着口腔，直到${teio.name}口干舌燥。不，仍然不满足。`,
      );
      await era.printAndWait(
        `${
          me.name
        } 缠绕着${teio.get_teen_sex_title()}的舌头，把它虏进自己的口中。轻咬，封住猎物的动作。`,
      );
      await era.printAndWait(
        `要怎样对待我。${teio.sex}蜷缩着僵硬身体向 ${me.name} 投来无声的疑问。`,
      );
      await era.printAndWait('——呵呵。');
      await era.printAndWait('这还用说吗？');
      await era.printAndWait(
        `冲动不会停止。也不可能停止。仿佛是为了做最后的修饰，${me.name} 用舌尖黏稠蹭上${teio.name}的舌头内侧——那片纤细柔嫩的领地。`,
      );
      era.println();

      await teio.say_and_wait(`——嗯啊！`);
      era.println();

      await era.printAndWait(
        `发觉连这出秘地都惨遭掠夺，${teio.get_teen_sex_title()}心慌意乱。${
          teio.sex
        }束手无措，下意识想要挣脱出去，但 ${
          me.name
        } 将双臂用力一合，蕴含着不许反抗的意识，${
          teio.sex
        }便安静下来……双眸中映出惶恐、困惑，却又无法顾及这一切的神情。`,
      );
      await era.printAndWait(
        '往常有点一根筋和孩子气的担当，现在蜷缩成了一团吹弹可破的尤物。',
      );
      era.println();

      await me.say_and_wait('你也会有这种眼神啊！', true);
      era.println();

      await era.printAndWait(
        `内心的声音响起，如此强制性地征服一个${teio.get_uma_sex_title()}让 ${
          me.name
        } 如痴如醉。${
          me.name
        } 忘我地吸吮着口中只属于自己的柔软。压榨着、剥削着${teio.sex}的体液。`,
      );
      await me.say_and_wait('就是你，害的我们变成了现在这副模样。', true);
      await me.say_and_wait(
        '就是你的任性，我的纵容导致了这副不堪的结局。',
        true,
      );
      await me.say_and_wait('所以，让我收回代价吧。', true);
      await era.printAndWait(
        `${teio.name}缠在 ${me.name} 背上的手无力地抚摸着。只不过是指尖在毫无抵抗地祈求饶恕。`,
      );
      await era.printAndWait('不去理睬。');
      await era.printAndWait(
        `突然间，${teio.get_teen_sex_title()}战栗不已。肌肤顿时有如发烧症状般灼热。`,
      );
      await era.printAndWait(`一切都是在 ${me.name} 手中被强行挑起的反应。`);
      await era.printAndWait(`……达到高潮了吧。`);
      await era.printAndWait(`这个极其粗俗的字眼在 ${me.name} 心中低声响起。`);
      await era.printAndWait(`继续，还远没有满足啊。`);
      await era.printAndWait(
        `${teio.name}也一定是这么想的。衣服还未全部褪下就被宣告停止，这一定不是${teio.sex}所希望的。`,
      );
      await era.printAndWait(
        `${teio.sex}说过希望 ${me.name} 这么做。${
          me.name
        } 现在做的，并非满足自己的性欲或者发泄自己的情绪，只是顺从${teio.get_teen_sex_title()}的心意而已。`,
      );
      await era.printAndWait('既如此，就接着到下个环节吧。');
      await era.printAndWait(
        `${teio.get_teen_sex_title()}的视线涣散而无法集中，${me.name} 在${
          teio.sex
        }的注视下，把双手伸向${teio.sex}的衣物。`,
      );
      await era.printAndWait(
        `${teio.get_teen_sex_title()}的身体已经足够灼热，仿佛往日时光。`,
      );
      await me.say_and_wait(`${teio.name}——你果然是这样的女人！`, true);
      await era.printAndWait(
        `脑中被黑色物料所填满，${me.name} 咧开嘴，触碰着${teio.sex}的肌肤。伸出了舌头。一吻印上${teio.sex}的脖颈，吸吮着汗水。顺势舔舐皮肤，吸吮嫩肉——留下丑陋的痕迹。`,
      );
      era.println();
      await teio.say_and_wait('啊啊……');
      era.println();
      await era.printAndWait(
        `又受到一番小小的掠夺，${teio.get_teen_sex_title()}似梦非梦地呻吟着。`,
      );
      await era.printAndWait(
        `平日那么骄傲固执，在赛场上飞扬的马儿——只不过是这样的${teio.get_phy_sex_title()}罢了！`,
      );
      await era.printAndWait(
        `让 ${me.name} 吃了苦头的小东西，如今作为甜美细嫩的祭品羔羊摆在 ${me.name} 面前了！`,
      );
      await era.printAndWait(
        `就算 ${me.name} 按捺不住的内心一角有多么丑恶……难道${teio.sex}就对此没有一点责任吗！影子会出现在太阳照射之下，这难道不是真理吗！`,
      );
      await era.printAndWait(
        `${me.name} 用手在雪白的肌肤上游走。覆上并不算大的胸部隆起。`,
      );
      await era.printAndWait(
        '掌心覆于其上，轻轻挑弄。用手指肚抚上粉色的突起。',
      );
      await era.printAndWait(
        `${teio.get_teen_sex_title()}似乎焦躁难耐，扭动起身体。这绝对在引诱 ${
          me.name
        }。${me.name} 想着，避开了${teio.get_teen_sex_title()}的伤患处，蹭了蹭${
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
        `${me.name} 是明知，而故犯。正是渴求着这份悲痛，才这么做的。`,
      );
      await era.printAndWait(
        `所以才继续。彻头彻尾地粗暴揉捏着${teio.get_teen_sex_title()}的第二私密部位。情欲高涨，胸部其上宛如附上了一层油亮，结合${
          teio.sex
        }恰到好处的尺寸，如同火候刚好的荷包蛋般诱人。`,
      );
      await era.printAndWait(
        `${me.name} 将嘴唇移向另一侧的隆起，吸吮，又留下了猥琐的痕迹。`,
      );
      await era.printAndWait(
        `${teio.name}楚楚可怜地看着 ${me.name}。瞬时，血脉贲张。`,
      );
      await era.printAndWait(
        `阴暗面在面对这个毫无抵抗的${teio.get_teen_sex_title()}时极致发挥。`,
      );
      await era.printAndWait(
        `唔，一定是${teio.sex}刻意在撩动着 ${me.name} 的情热。真是头完美的小母兽。`,
      );
      await era.printAndWait('那么……该进入正题了。');

      begin_and_init_ero(0, 3);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(3, part_enum.mouth),
        false,
      );
      if (era.get('cflag:3:性别') - 1) {
        era.set('palam:3:阴道快感', era.get('tcvar:3:阴道快感上限'));
      } else {
        era.set('palam:3:阴茎快感', era.get('tcvar:3:阴茎快感上限'));
      }
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(3, part_enum.breast),
        false,
      );
      await print_ero_page(3);
      end_ero_and_train();

      era.printButton('「抱歉」', 1);
      await era.input();

      await teio.say_and_wait('唔唔——！');
      era.println();
      await era.printAndWait(
        `最后，${me.name} 无法自己了整整四个小时，实在有点过分了。`,
      );
      await era.printAndWait(
        `在 ${
          me.name
        } 不停的道歉和保证声中，小${teio.get_uma_sex_title()}总算是接受了 ${
          me.name
        } 的歉意，躺在床上睡觉了。`,
      );
      await era.printAndWait(`${me.name} 便也洗漱然后合衣睡下。`);
      await era.printAndWait(
        `合眼之时，仿佛感到了什么东西靠过来，贴到了 ${me.name} 的身上。`,
      );
      get_skill_list(era.get('cflag:3:性别')).forEach((e) =>
        era.set(`abl:3:${e}`, Math.min(era.get(`abl:3:${e}`) + 1, 5)),
      );
      get_filtered_talents(teio.sex_code, 1000)
        .filter((talent_id) => era.get(`talent:3:${talent_id}`) < 1)
        .forEach((talent_id) => era.set(`talent:3:${talent_id}`, 1));
      touch_list
        .filter((e) => e !== part_enum.sadism)
        .forEach((e) =>
          era.set(
            `abl:3:${part_names[e]}掌握`,
            Math.min(era.get(`abl:3:${part_names[e]}掌握`) + 1, 5),
          ),
        );
      sys_like_chara(3, 0, 12, true, 1) && (await era.waitAnyKey());
    }
  } else if (edu_weeks === 143 + 5 && event_marks.good_end === 1) {
    event_marks.good_end++;
    await print_event_name('柳暗花明', teio);
    await era.printAndWait(
      ` ${me.name} 走在路上，有些汗湿的衬衫紧贴着 ${me.name} 的上身。`,
    );
    await era.printAndWait(
      `稍前面一点的是 ${me.name} 的担当，东海帝王。${teio.sex}捏着 ${
        me.name
      } 的手，用一个对于${teio.get_uma_sex_title()}来说稍慢，但又比较锻炼 ${
        me.name
      } 的速度走着。${me.get_couple_title()} 的掌心贴在一起，偶尔轻摇。天边太阳的余晖落到额前，${
        me.name
      } 脚踏大理石打磨成的小道，仰头注视前方，看见有淡金色的光班从${
        teio.sex
      }白色的刘海上闪过。`,
    );
    await era.printAndWait(
      `来到一段阶梯前，${teio.sex}停步略歇，${me.name} 也随之站住，眺望起面前的景色。`,
    );
    await era.printAndWait(
      '黄昏之下，大地借用落日最后的光亮裹住自己，披上了一件布料，星星点点的金线溜过它凹凸不平的表面。并没有积雪反射光芒，只有刚出头的绿色嫩芽贪婪地吸取着能量。',
    );
    await era.printAndWait('春天要来了。');
    await era.printAndWait(`${me.get_couple_title()} 的梦，也结束了。`);
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
      `面对残阳，${teio.get_teen_sex_title()}张开双臂，舒展身体，缓缓道来。光线投射下来，将${
        teio.sex
      }的阴影打在 ${me.name} 的脸上。${me.name} 沉默，脑海里浮现出过往的种种，${
        teio.sex
      }跌入低谷，${teio.sex}迷茫，${teio.sex}坎坷，而 ${
        me.name
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
      `${teio.get_uma_sex_title()}没有立刻回应 ${
        me.name
      }，而是迎着夕阳低下头，而后轻摆着马尾，回眸一笑。`,
    );
    era.println();

    await teio.say_and_wait('一直以来，深信不疑。');
    era.println();

    await era.printAndWait(
      `随后，是${teio.sex}动人的笑声，${me.name} 不禁也随之而笑。二人携手，继续向前。`,
    );
    await era.printAndWait(`属于 ${me.get_couple_title()} 的故事，还将继续。`);
    era.println();
    era.set('status:3:腿伤', 0);
    if (era.get('talent:3:自信程度') === 1) {
      era.set('talent:3:自信程度', 0);
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
    sys_like_chara(3, 0, 20, true, 2);
    await era.waitAnyKey();
  }
};
