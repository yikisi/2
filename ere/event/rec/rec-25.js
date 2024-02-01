const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');

const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 曼城茶座的招募事件，id=25
 *
 * @author Necroz
 */
module.exports = {
  /**
   * @param {number} stage
   * @param _
   * @param {EventObject} event_object
   */
  async run(stage, _, event_object) {
    const your_name = era.get('callname:0:-2'),
      chara_talk = new CharaTalk(25);
    const callname = sys_get_callname(25, 0);
    const event_marks = new EventMarks(0);
    let ret = 0;
    switch (stage) {
      case event_hooks.recruit:
        // 否则表示是在训练场直接招募的场合，招募会失败
        await era.printAndWait(
          `${your_name} 注意到了一位黑发的${chara_talk.get_uma_sex_title()}。`,
        );
        await era.printAndWait(
          `但当${your_name} 试图接近的时候，却找不到${chara_talk.sex}的身影了，仿佛${chara_talk.sex}从未存在一般。`,
        );
        await CharaTalk.me.say_and_wait(`是眼花了吗？还是回去休息一下吧`, true);
        era.set('cflag:25:招募状态', recruit_flags.success_on_leave);
        era.set('cflag:25:随机招募', 0);
        era.set('flag:物色对象', 25);
        event_marks.add(event_hooks.office_rest);
        add_event(
          event_hooks.office_rest,
          new EventObject(25, cb_enum.recruit),
        );
        return false;
      case event_hooks.office_rest:
        if (era.get('flag:当前互动角色')) {
          // 如果身边带着其他马娘，不触发
          // 把事件再塞回去，不然下次不触发了
          add_event(stage, event_object);
          return false;
        }
        await era.printAndWait(
          '福无双至，祸不单行。人倒霉起来总是这样的，不是吗？',
        );
        await era.printAndWait(
          `起了个大早前往训练场物色担当${chara_talk.get_uma_sex_title()}的你不出意料的一无所获，拖着疲惫的身体回到宿舍倒头就睡。醒来后，却摸遍全身也找不到自己的手机。`,
        );
        await era.printAndWait('回去找手机吧，还能怎么办呢。');
        await era.printAndWait(
          '来到训练场时天已经完全黑下去了，你本以为要花上好一会儿才能找到手机，却发现在不远处的草地上，有着细碎夺目的光点在闪烁。',
        );
        await era.printAndWait(
          '总有一种被引导的感觉——你抱着莫名的感觉走上前去，发现那正是你遗失的手机。',
        );
        era.printButton('运气……该说还不错？', 1);
        await era.input();
        await era.printAndWait('嗖————');
        await era.printAndWait(
          '没等你庆幸许久，不知什么事物带着一阵风从你肩旁擦过。环顾四周，借着清冷的月光，你却什么也没看到。',
        );
        era.printButton('这是……', 1);
        await era.input();
        await era.printAndWait(
          '你感觉到一股寒意从四肢向躯干袭来，寒意侵蚀过的部位变得逐渐僵硬。你想要移动，但手脚似乎被寒气所压制，身体就像是生锈的机器一般，难以动弹。尽管不断告诉自己不要胡思乱想，脑海里仍不自主地涌现出从各种地方听来的特雷森鬼怪传闻，这使你恐惧万分。',
        );
        await era.printAndWait('？？？：「那个……」');
        await era.printAndWait(
          `从背后传来的声音瞬间打碎了这种局面，在刹那间恢复行动能力的你连忙大口呼吸着新鲜空气。强忍着想要拔腿就跑的恐惧感转过头来，一个喘着气的似乎是刚跑完步停下的${chara_talk.get_uma_sex_title()}正在后面看着你。`,
        );
        await era.printAndWait(
          '？？？：「我看到你在这站了很久，担心是不是有什么问题……」',
        );
        await era.printAndWait(
          '站了很久？你借着月光看向手表，分针指针已经在表盘上旋转了四分之一圈还要多，居然已经过去了快20分钟了吗？',
        );
        await era.printAndWait(
          `？？？：「是朋友先发现的你……我正在和朋友跑步，在${chara_talk.sex}突然改变了方向后，才看到了你……」`,
        );
        await era.printAndWait(
          `不管怎么说，都是对方和${chara_talk.sex}的朋友帮了你。在表达了感谢后你说明了自己的身份和来意，并询问对方朋友的位置以向${chara_talk.sex}表达谢意。`,
        );
        await era.printAndWait('？？？：「朋友的话，不就在你身边吗……？」');
        await era.printAndWait(
          `眼前黑长直发及腰的纤细${chara_talk.get_uma_sex_title()}瞥了眼你身边的空地，歪了歪脑袋，此时你才发觉${
            chara_talk.sex
          }从刚才开始视线似乎就一直死死保持在自己身上，这种审视一般的态度令你感觉有点怪异。`,
        );
        await era.printAndWait(
          `黑发${chara_talk.get_uma_sex_title()}头上的白色呆毛随着${
            chara_talk.sex
          }的呼吸微微摇晃，你的心情也随之不断起伏。`,
        );
        await era.printAndWait(
          `在这种地方居然还有心思开玩笑，真是个奇怪的${chara_talk.get_uma_sex_title()}。`,
        );
        await era.printAndWait(
          '……真的是玩笑吗？亲身经历的灵异事件令你不由得远离了那块空地几步。',
        );
        era.printButton('……请问，这是什么玩笑吗？', 1);
        await era.input();
        await era.printAndWait(
          `？？？：「……才不是什么玩笑……而且，这位${callname}……」`,
        );
        await era.printAndWait(
          `${chara_talk.get_uma_sex_title()}逐渐向你走来，这时你才看清楚${
            chara_talk.sex
          }的样貌：在${chara_talk.get_uma_sex_title()}中也称得上美人的精致面孔；白皙得缺少血色的肌肤；从额间垂下的、将那精致面孔分割的黑色长发；而最让你印象深刻的，便是${
            chara_talk.sex
          }黯黄色的双眸。`,
        );
        await era.printAndWait(
          '？？？：「请马上和我一起离开这里，已经有东西盯上过你了，就在刚才……」',
        );
        await era.printAndWait(
          `${chara_talk.get_teen_sex_title()}的低语伴随着忽起的夜风传入你耳中，身边的黑暗隐约传来阵阵嬉笑，就算在此之后你与这位${chara_talk.get_uma_sex_title()}一同安全的离开了训练场，这个夜晚也已深深刻入了你的脑海中。`,
        );
        await era.printAndWait('***');
        await era.printAndWait(
          `自那晚后又过了几天，那位训练场上的黑发${chara_talk.get_uma_sex_title()}的身影和话语始终萦绕在你的脑海中，直到选拔赛开始后，你才在名单上第一次看到了${
            chara_talk.sex
          }的名字——【曼城茶座】。`,
        );
        await era.printAndWait(
          `匆匆赶到时曼城茶座的选拔赛已经结束了，虽然没能亲眼目睹，但在揭示板上名列前茅的名字也足以说明${chara_talk.sex}的实力。`,
        );
        await era.printAndWait(
          `穿过身边熙攘的人群，在赛后休息区，你看到了${chara_talk.sex}的身影。`,
        );
        await era.printAndWait('你该怎么办？：');
        era.println();
        era.printButton(
          '「那天晚上的经历使你感到恐惧，但好奇还是战胜了恐惧，你走上前去。」【尝试招募】',
          1,
        );
        era.printButton(
          '「那天晚上的经历是你一生的噩梦，恐惧还是使你停下了脚步，转身离开了。」【放弃招募】',
          2,
        );
        ret = await era.input();
        if (ret === 1) {
          await era.printAndWait(
            `${
              chara_talk.sex
            }的身影藏匿在同期的${chara_talk.get_uma_sex_title()}和前来招募的训练员之中，尽管在选拔赛最后名列前茅，却似乎没有人来招募${
              chara_talk.sex
            }的样子。`,
          );
          era.printButton('你好，曼城茶座同学，选拔赛成绩很不错，恭喜你。', 1);
          await era.input();
          await chara_talk.say_and_wait(`……非常感谢，那天的${callname}……`);
          await era.printAndWait(
            '曼城茶座也认出了你，但似乎对你前来交谈有点惊讶，呆呆地点了点头。',
          );
          era.printButton('虽然有点多管闲事，但没人来招募你吗？', 1);
          await era.input();
          await chara_talk.say_and_wait('……暂时，没有。');
          await era.printAndWait('两人就此陷入了沉默。');
          await era.printAndWait('你想起刚才查询过的有关曼城茶座的资料：');
          await era.printAndWait(
            `从别的${chara_talk.get_uma_sex_title()}和一些曾对${
              chara_talk.sex
            }感过兴趣的训练员口中可以得知，曼城茶座总是说着些奇怪的话，主要包含了一些没人知道的人或事，也经常有人看到${
              chara_talk.sex
            }像是在追逐着什么的身影。曾有一名经验丰富的训练员试过和${
              chara_talk.sex
            }接触，从那位训练员离开时紧皱的眉头可以看出并不顺利。于是，曼城茶座便被打上了问题儿童的标签，成为了训练员们都不太愿意接手的存在。`,
          );
          await era.printAndWait(
            `但你不这么认为，回想起那天晚上的经历还有${chara_talk.sex}口中的【朋友】，其中一定另有隐情。`,
          );
          await era.printAndWait('还是先换个话题吧。');
          era.printButton(
            '那天晚上的事，真的非常感谢，如果没有你的帮助的话，恐怕……',
            1,
          );
          await era.input();
          await era.printAndWait(
            '那天晚上在夜色的遮掩下你没有注意到，但曼城茶座似乎十分不擅长接受别人的感谢。你直白的感谢让曼城茶座愣了愣，身后的尾巴左右摇摆的节奏顿时一乱，过了好一会儿才向你作出回复。',
          );
          await chara_talk.say_and_wait(
            '只是顺手之举而已……比起这个，还是不要靠近我比较好……',
          );
          await era.printAndWait(`不要靠近${chara_talk.sex}，为什么？`);
          await era.printAndWait(
            '这下轮到你愣住了，嘴里为了延续话题而准备的语句因这个带着排斥感的回复硬生生咽了回去。',
          );
          await era.printAndWait(
            '没等你的疑问出口，曼城茶座在留下一句“抱歉”后便侧身离开了人群。',
          );
          await era.printAndWait(
            `看着${chara_talk.sex}独自离去的背影，你的疑问也随之转化为感叹。`,
          );
          era.printButton(
            `怎么回事，这个${chara_talk.get_uma_sex_title()}……`,
            1,
          );
          await era.input();
          await era.printAndWait(
            '你有点体会到了“问题儿童”四字在特雷森的含金量。',
          );
          await era.printAndWait('***');
          await era.printAndWait(
            `在曼城茶座离开后，你无心再关注选拔赛，在几位不错的${chara_talk.get_uma_sex_title()}进行交流无果后，先一步离开了特雷森。`,
          );
          await era.printAndWait(
            '伴着夕阳，你独自一人走在着忧愁的归家路上，脑子里装满的全是今天的各种郁闷，也因此你这时才注意到，就在刚才转过某个拐角之后，身边的世界已经发生了变化。',
          );
          era.printButton('不太对劲……', 1);
          await era.input();
          await era.printAndWait(
            '比以往更加昏黄的夕阳从身后照射着大地，身边熟悉的景色在这片暮色中如同老电影般给人以失真感，脚下的影子——',
          );
          await era.printAndWait('不对，影子不见了！');
          await era.printAndWait(
            '额间瞬时冒起冷汗，你一瘸一拐地走到路边的围墙旁并用背贴着墙壁来为有些发软的双腿提供支撑。',
          );
          await era.printAndWait(
            '向道路两旁望去，似乎没什么变化，还能看到远处的人影与特雷森，如果就这么拼尽全力跑回特雷森的话……',
          );
          await era.printAndWait(
            '想到就去做，你一不做二不休地向着特雷森的方向奔去。',
          );
          await era.printAndWait(
            '但结果并不如你想象般美好，不知道该不该感谢怪谈故事提供的经验，在看到眼前的第三个相同广告牌后，你不得不接受了遭遇鬼打墙的现实并退回了刚在待过的墙边。',
          );
          await era.printAndWait(
            '夕阳仍在不断下沉，身边的景象变得愈发怪异，早已倒闭的街边商铺内传出了丝丝细语，路旁的垃圾桶内正有黑色长发向外冒出，远处的特雷森也在这愈深的暮色中变得模糊且扭曲起来。',
          );
          await era.printAndWait('你感觉就要坚持不住了。');
          await chara_talk.say_and_wait('训练……生，能听……声音吗？');
          await era.printAndWait('是曼城茶座的声音。');
          await era.printAndWait(
            `虽然只与${chara_talk.sex}见过两次面，虽然模糊且断续，但你清楚的记得${chara_talk.sex}独特的低沉又带有一丝沙哑的声音。${chara_talk.sex}在哪？`,
          );
          await era.printAndWait('仿佛抓住了救命稻草一般，你抬头四处张望。');
          await chara_talk.say_and_wait(
            `${callname}，你已……另一个世界，我是借……朋友才能与你沟……`,
          );
          era.printButton('另一个世界……我已经死了吗？', 1);
          await era.input();
          await chara_talk.say_and_wait(
            `不……时间……落日前都有机会……${callname}，我无法直接帮到你……冷静……幻觉迷惑，它们也无法直接……找到应对的方法，就一定……`,
          );
          await era.printAndWait(
            '曼城茶座的声音渐渐消失了，但你也重新振作了起来。',
          );
          await era.printAndWait(
            '强打起精神尽可能的忽视身边的怪异情景，你思考着一切的开端——影子。',
          );
          await era.printAndWait(
            '对，影子，这是目前唯一发生在你身上的异变。你抬起手看了一眼，指缝间的阴影依旧存在，身上的衣褶也在光线的对比下十分明显，失去的只是从脚下蔓延出去的、全身的影子。',
          );
          await era.printAndWait('或者说，是代表着精神或灵魂意义上的“影子”？');
          await era.printAndWait(
            '结合曼城茶座口中“另一个世界”的描述，也许现在身处的正是某种鬼怪制造出的隔绝世界，而影子的消失便是此刻被其束缚的标志。',
          );
          await era.printAndWait(
            '既然已经整理好了头绪，接下来便是破局逃生的方法了，时间还剩……',
          );
          await era.printAndWait('远处，夕阳将近碰触地平线，只剩下几分钟了。');
          await era.printAndWait(
            '全身都能感受到心脏的剧烈跳动，肾上腺素也终于随着血液布满全身，你深呼吸了一口气，闭上了眼睛。',
          );
          await era.printAndWait(
            '如果说有光才有影的话，那么精神上影子消失了，是不是该闭上心灵的窗户呢。',
          );
          await era.printAndWait(
            '顺着记忆中的路线，你闭着眼睛快步向特雷森的方向走去。',
          );
          await era.printAndWait(
            `男人的怒骂声、女人的尖叫声、孩童的哭泣声、老人的悲叹声，种种声音糅杂成一根麻绳般钻进了你的耳中，你感受到了这片空间的恶意。`,
          );
          await era.printAndWait(
            '忍住想要睁开双眼以获得安全感的欲求，你加快了速度。',
          );
          await era.printAndWait(
            '结果出乎意料的顺利，这个怪异确实不能直接对你做什么。',
          );
          await era.printAndWait(
            '在耳边传来某种东西破碎的声音后一切归于清净，你睁开了眼睛。天已经黑了下去，一旁的行人奇怪地看了几眼在他们眼中这个一直站在路边发呆的怪人。',
          );
          await era.printAndWait('低头看去，影子老老实实地待在脚下。');
          await era.printAndWait('看来是结束了。');
          await chara_talk.say_and_wait(`欢迎回来，${callname}……`);
          await era.printAndWait('曼城茶座的声音从身后传来。');
          await era.printAndWait(
            `回头看去，${chara_talk.sex}手上拿着一个已经破裂开来的护身符，在离你不到两米的位置观察着你的状况。`,
          );
          era.printButton('又被你救了一次啊……', 1);
          await era.input();
          await era.printAndWait('曼城茶座摇了摇头。');
          await chara_talk.say_and_wait(
            `请不要对我这样说，是训练员先生你凭借自己的意志找到回来的方法的……不如说，我对${callname}你这次陷入危险也有责任……`,
          );
          await chara_talk.say_and_wait(
            `${callname}你，对他们的诱惑比我预想的还要大……我原本以为那天晚上是我把它们引来的，但……如果能早点发现的话，也许今天的事就不会发生了……`,
          );
          await era.printAndWait(
            `你能理解曼城茶座之前的意思了，以为问题出自${chara_talk.sex}自己身上而不想牵扯上别人，所以才让你不要靠近${chara_talk.sex}吗，真是个好孩子啊……`,
          );
          era.printButton('所以，之后我还会遇到类似的事件……对吗？', 1);
          await era.input();
          await chara_talk.say_and_wait('有可能……');
          await chara_talk.say_and_wait(
            '但，但是！我会继续帮助你的，所以，请不要……',
          );
          await era.printAndWait(
            '似乎是担心你会惊慌，曼城茶座连忙补充上后面一句。',
          );
          await era.printAndWait(
            `看着眼前突然变得有些急切的${chara_talk.get_uma_sex_title()}，你的心中却意外的没有多少对未来的恐惧。是这次成功脱险让你胆子变大了？还是对曼城茶座和${
              chara_talk.sex
            }口中的“朋友”有着莫名的信心？`,
          );
          await era.printAndWait(
            `总之，你想到了一种可能，并将其分享给了眼前的${chara_talk.get_teen_sex_title()}。`,
          );
          era.printButton('既然接受了你的照顾，那我也必须拿出对等的回报……', 1);
          await era.input();
          era.printButton(
            '我来当你的训练员，怎么样？别看我这样，在训练上我还是有几分心得的。',
            1,
          );
          await era.input();
          await era.printAndWait(
            `听到这一意料之外的招募请求后，曼城茶座惊讶地瞪大了眼睛，随后又突然意识到什么似的看向了一旁无人的角落。在一段时间的沉默后，${chara_talk.get_teen_sex_title()}做出了回复。`,
          );
          await chara_talk.say_and_wait(
            `那么，${callname}……你能帮我追上那孩子吗？追上我的……朋友？`,
          );
          await era.printAndWait('朋友，你有一次从曼城茶座口中听到了这个词。');
          await era.printAndWait(
            `亲身接受过灵异事件洗礼的你自然不会认为这是${chara_talk.sex}臆想出来的存在，更何况从${chara_talk.sex}口中你也得知，朋友是从危险中帮助过你两次的存在。`,
          );
          await era.printAndWait('那么，答案很明确了。');
          era.printButton(
            `尽管试试吧……！不管是朋友也好，还是其他强大的${chara_talk.get_uma_sex_title()}，我都会带着你去超越的！`,
            1,
          );
          await era.input();
          await chara_talk.say_and_wait(`……好的！那么请多关照，${callname}！`);
          await era.printAndWait(
            `曼城茶座向你伸出了手，${chara_talk.sex}第一次在你眼前露出了笑容，黯黄色的瞳眸也染上了光彩。`,
          );
          await era.printAndWait('咚——');
          await era.printAndWait(
            '当你也伸出手，与曼城茶座握手的一刹那，某种东西不轻不重地拍打在了你的肩上，让你不由得打了个踉跄。',
          );
          await era.printAndWait('——拜托你了。');
          await era.printAndWait(
            '尽管你没有听到任何人的声音，但从中却感受了这样的情感。',
          );
          await era.printAndWait(
            '这就是朋友吗？你四处张望，仍无法看到对方的身影。',
          );
          await era.printAndWait(
            `看来接下来要与${chara_talk.sex}度过一段奇妙的时光了。`,
          );
          await era.printAndWait('提示：招募曼城茶座成功了！');
          event_marks.sub(event_hooks.office_rest);
          era.set('cflag:25:招募状态', recruit_flags.yes);
          era.set('flag:物色对象', 0);
        } else {
          event_marks.sub(event_hooks.office_rest);
          era.set('flag:物色对象', 0);
          era.set('cflag:25:随机招募', 1);
        }
        return true;
    }
    return false;
  },
};
