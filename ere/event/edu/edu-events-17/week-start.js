const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const Edu17UntilRaceStart = require('#/event/edu/edu-events-17/race-start');
const {
  handle_debuff,
  normal_end,
  transform,
} = require('#/event/edu/edu-events-17/snippets');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu17UntilRaceStart {
  async week_start(_chara, me, callname, hook, extra_flag, event_object) {
    const event_marks = new LunaEduMarks();
    let ret = event_marks.emperor * 100,
      allow_transform = true;
    const { luna, emperor } = ret
        ? {
            luna: 9017,
            emperor: 17,
          }
        : { luna: 17, emperor: 9017 },
      luna_talk = get_chara_talk(luna),
      emperor_talk = get_chara_talk(emperor),
      edu_weeks = era.get('cflag:17:育成回合计时');
    if (edu_weeks >= 144) {
      if (edu_weeks === 144 && !event_marks.good_end) {
        // 没跑有马或者没触发赛后事件，直接按NE计算
        normal_end(
          event_marks,
          !era.get(`status:${luna}:神经衰弱`) && era.get(`love:${luna}`) >= 90,
        );
      } else if (edu_weeks === 143 + 9) {
        const chara = luna === 17 ? luna_talk : emperor_talk;
        await CustomizedEdu.common_palace(chara, me);
        await CustomizedEdu.common_palace_relation(chara, me);
        era.println();
        await chara.say_and_wait(
          event_marks.good_end === 2
            ? '你喜欢什么样的天空？太阳还是月亮？做不出决定也无妨，无论你处在什么样的天空下，终有一日，我们都会相遇。嗯，这次，换我们去找你。'
            : ret
              ? '既然还能向前迈进，就没有停留于此处的必要！吾的天途永不停止，庆贺吧，弄臣！你将见证皇帝的伟业。作为奖赏，吾许诺你永世跟随和侍奉吾的荣耀……回答呢？'
              : '皇帝的故事已经终结，而我的使命还没有结束，让我们携手去那里吧，那个所有赛马娘都能幸福的未来。嗯……那个未来应该也包括我，所以……你会让我幸福的，对吧？',
        );
      }
      return;
    }
    if (event_marks.a_stones_throw === 1) {
      event_marks.a_stones_throw++;
      await print_event_name(
        [{ color: color_17[1], content: '一步之遥' }],
        luna_talk,
      );

      await era.printAndWait(
        `露娜是怎么变成皇帝的？${CharaTalk.me.name} 终于想起来了。`,
      );
      await era.printAndWait(
        '那是一个无谋的诡计，是一个初出茅庐的臭小子，对象征的未来之星发起的蛊惑。',
      );
      era.printButton('「既然痛恨暴虐，就让别人来做这些事情吧？」', 1);
      await era.input();
      await luna_talk.say_and_wait('别人……？');
      era.printButton(
        '「嗯，别人。就比如说——另一个人，我是说，另一个你。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${CharaTalk.me.name} 本意是想开个玩笑，疏导愁眉苦脸的露娜，但不知道为何，平日里调皮的孩子却听得相当认真。`,
      );
      await era.printAndWait(
        `在${luna_talk.sex}目光的催促下，${CharaTalk.me.name} 绞尽脑汁，继续荒唐的叙述。`,
      );
      era.printButton('「创造出一个和露娜不一样，好战暴虐的存在出来吧。」', 1);
      era.printButton('「建立在你的个性上，一个想象中的形象。」', 2);
      await era.input();
      await era.printAndWait(`${CharaTalk.me.name} 呼出一口气，突发奇想。`);
      await CharaTalk.me.say_and_wait('对了，就像【皇帝】一样！');
      await era.printAndWait(
        `露娜呆呆地望着 ${CharaTalk.me.name}，${CharaTalk.me.name} 为刚才脑海里闪现而过的想法欢欣鼓舞。`,
      );
      await era.printAndWait(
        `不、不要——${CharaTalk.me.name} 的灵魂在颤抖，${CharaTalk.me.name} 终于回想起来了。`,
      );
      await era.printAndWait(
        `皇帝，是 ${CharaTalk.me.name} 为露娜创造出来的牢笼。`,
      );
      era.printButton('「露娜做不到的事，就统统让皇帝来完成吧。」', 1);
      await era.input();
      await era.printAndWait(
        `不是那样的，那孩子的命运、${luna_talk.sex}背负的一切，怎么能这么轻描淡写地被概括？！`,
      );
      await CharaTalk.me.say_and_wait('这样，露娜就能轻易登上巅峰了吧！');
      await era.printAndWait('住口！快住口！不要再说了！！！');
      await era.printAndWait(
        `${CharaTalk.me.name} 想死死地掐住自己的脖颈，动作之间，${CharaTalk.me.name} 已从梦境中苏醒。`,
      );
      await era.printAndWait(`${CharaTalk.me.name} 被冷汗浸透了。`);
      await era.printAndWait(
        `那时的 ${CharaTalk.me.name}，不过是个自大的混蛋。自称四处怀才不遇，实际上，不过是学生的夸夸其谈。`,
      );
      await era.printAndWait(
        `遇到露娜时，${CharaTalk.me.name} 把脑海里藏着的那些从未见过天日的战略、见闻和幻想，以及 ${CharaTalk.me.name} 从露娜身上看出${luna_talk.sex}日后一定会成为大人物这些事，一股脑地说了出来。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 不知道那时的自己有多么失态，但露娜，在那时露出了释然的笑容。`,
      );
      await era.printAndWait('在月夜下，绽放的笑容。');
      await era.printAndWait(
        '那时，自己就下定决心，要为露娜赴汤蹈火，将自己的性命和智慧一同献出。',
      );
      await era.printAndWait(
        '回归正业也好，拼命学习也好，成为了鲁铎象征的训练员也好——',
      );
      await era.printAndWait('不是为了要让【皇帝】的威名远扬。');
      await era.printAndWait('一切都是为了露娜的笑容才对！');
      await era.printAndWait('但为什么，为什么会变成这样呢……');
      await era.printAndWait(`${CharaTalk.me.name} 捂住了头，深深地叹着气。`);
      era.drawLine();
    } else if (edu_weeks === 48) {
      // 经典年一月第一周
      await print_event_name('新年的抱负', luna_talk);

      await era.printAndWait(
        '在和露娜成为「共犯」后，不知不觉，就迎来了新的一年。',
      );
      await era.printAndWait(
        `无时无刻的战战兢兢与恐惧，让 ${CharaTalk.me.name} 夜夜难眠。`,
      );
      await era.printAndWait(
        `但似乎新年的寒冷的风一吹，${CharaTalk.me.name} 就稍微有了更多的勇气。`,
      );
      await era.printAndWait(
        `更别说，露娜正身着艳丽的华服，向 ${CharaTalk.me.name} 小步跑来。`,
      );
      await era.printAndWait(
        `${luna_talk.sex} 扑入了你的怀里，就像船驶入港湾。`,
      );
      await luna_talk.say_and_wait(
        '如果再继续下去，我恐怕要让皇帝替我代劳了。',
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 无奈地抚摸着${luna_talk.sex}的发丝，将细雪摘去。`,
      );
      await era.printAndWait(
        `看来，为了尽早和 ${CharaTalk.me.name} 独处，露娜来的路上连伞都没打。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 亲吻露娜的额头，作为回礼，${luna_talk.sex} 靠着 ${CharaTalk.me.name} 的肩膀。`,
      );
      await era.printAndWait('看着窗外，雪花飘摇。');
      await luna_talk.say_and_wait(
        '今年，终于要挑战经典三冠了，只有拿下这个，我才能……',
      );
      await era.printAndWait(
        `看着表情严肃的露娜，${CharaTalk.me.name} 深吸一口气，握住了 ${luna_talk.sex} 的手。`,
      );
      await era.printAndWait(
        `似乎是在表示，无论怎样，${CharaTalk.me.name} 都会在露娜的身边。`,
      );
      await era.printAndWait(
        `露娜抬头望着 ${CharaTalk.me.name}，眼中充满着幸福和希冀。`,
      );
      era.printButton('「希望你贤亮方正，永远做最好的选择。」', 1);
      era.printButton('「希望你十全健康，身心都要重视。」', 2);
      era.printButton('「希望皇帝武艺百般，活用所有的技巧。」', 3);
      ret = await era.input();
      await luna_talk.say_and_wait(
        '都是些幸福的、美好的愿望……那我也有一个愿望。',
      );
      await era.printAndWait(
        `露娜摩挲着 ${CharaTalk.me.name} 的脸庞，${CharaTalk.me.name} 能感觉到${luna_talk.sex}身体的热度，与灵魂中的渴望。`,
      );
      await luna_talk.say_and_wait(
        '希望你能长命百岁。这样，你才能永远陪在我身边。',
      );
      await era.printAndWait(`${CharaTalk.me.name} 哈哈大笑。`);
      await luna_talk.say_and_wait('还有，希望能看到更多的冷笑话。');
      await era.printAndWait(`${CharaTalk.me.name} 的笑声戛然而止。`);
      era.println();
      const attr_change = new Array(5).fill(0);
      let pt_change = 0;
      if (ret === 1) {
        attr_change[attr_enum.intelligence] = 40;
      } else if (ret === 2) {
        attr_change[attr_enum.endurance] = 40;
      } else {
        pt_change = 20;
      }
      allow_transform = false;
      ret = 0;
      era.println();
      get_attr_and_print_in_event(17, attr_change, pt_change);
      era.drawLine();
      era.set('cflag:17:节日事件标记', 0);
    } else if (edu_weeks === 47 + 29) {
      if (
        era.get('cflag:0:位置') !== location_enum.beach ||
        era.get('cflag:17:位置') !== era.get('cflag:0:位置')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      // 经典年夏合宿
      await print_event_name('夏季合宿', luna_talk);

      await era.printAndWait('明明是夏季合宿的时间——');
      await era.printAndWait(
        `${CharaTalk.me.name} 看着被赛马娘们团团围住的露娜，额头留下冷汗。`,
      );
      await era.printAndWait(
        '作为万众瞩目的学生会长，对学生们进行自主训练的指导、',
      );
      await era.printAndWait('帮助苦苦无法突破的学生，甚至亲身指教。');
      await era.printAndWait(
        `除此之外，在训练中，${luna_talk.sex}也格外努力。`,
      );
      await era.printAndWait(
        '甚至到了晚上，露娜还在帮助两个寮舍的舍长，安排任务。',
      );
      await luna_talk.say_and_wait('学园的问题，都是我的问题，无需在意。');
      await era.printAndWait(
        `随后，${luna_talk.sex}以身作则，早早的就回到寝室休息。`,
      );
      await era.printAndWait(
        `虽然是这样，${CharaTalk.me.name} 的手机却适时响起。`,
      );
      await luna_talk.say_and_wait('总感觉，你的目光就没离开过我身上。');
      await era.printAndWait(
        `看着露娜发来的短信，${CharaTalk.me.name} 莞尔一笑。`,
      );
      era.printButton('「你拨打的电话不在服务区，请稍后再拨。」', 1);
      era.printButton('「因为你太吸引我的目光了。」', 2);
      await era.input();
      await luna_talk.say_and_wait(
        '真是能说会道，但为了学园环境的清朗，请不要用于我之外的孩子身上',
      );
      await luna_talk.say_and_wait('对了');
      await luna_talk.say_and_wait('你一直这样！');
      await luna_talk.say_and_wait('在象征家就花言巧语，真亏你能活下来');
      await luna_talk.say_and_wait('不过，我得先睡了，明天早起去训练吧');
      await era.printAndWait(
        `${CharaTalk.me.name} 看着手机闪烁的消息，不知不觉睡了过去。`,
      );
      await era.printAndWait(
        `第二天一早，露娜似乎正准备去训练，但 ${CharaTalk.me.name} 拦下了${luna_talk.sex}。`,
      );
      await era.printAndWait(
        `从夏季合宿开始前，${luna_talk.sex}就已经紧锣密鼓地安排多项工作，训练也不落下。`,
      );
      await era.printAndWait(`疲劳是会累积的，${CharaTalk.me.name} 确信。`);
      era.printButton('「去吃顿大餐，变得更强壮吧。」', 1);
      era.printButton('「尝试偶尔推迟训练吧。」', 2);
      ret = await era.input();
      await era.printAndWait('露娜愣住了。');
      await luna_talk.say_and_wait('是在担心我吗？');
      await era.printAndWait(
        `${CharaTalk.me.name} 点点头。露娜趴在窗台，面朝大海和沙滩。`,
      );
      await era.printAndWait(
        `清晨的阳光铺满了${luna_talk.sex}的脸，你看不清${luna_talk.sex}的表情。`,
      );
      await luna_talk.say_and_wait('为了他人而努力，始终是一件美好的愿望。');
      await luna_talk.say_and_wait('虽说如此，我们还是得为了菊花赏而努力。');
      await luna_talk.say_and_wait(
        '但你的目光已经说明白了——『训练下去对身体有害』，是吧？',
      );
      await luna_talk.say_and_wait(
        '但德比之后，我越发坚定地认为，完成我们的理想需要非一般的努力。',
      );
      await luna_talk.say_and_wait(
        '你对我的保护，是不是太多了？难道我弱小到，会在这里被打倒吗？',
      );
      era.printButton('「……！」', 1);
      await era.input();
      await era.printAndWait(
        `看着局促的 ${CharaTalk.me.name}，露娜意识到了什么，抓住了 ${CharaTalk.me.name} 的手臂。`,
      );
      await luna_talk.say_and_wait('这样就好像是完全在拿你发泄了……');
      await era.printAndWait(
        `露娜像是在对 ${CharaTalk.me.name} 道歉，但 ${CharaTalk.me.name} 知道，${luna_talk.sex}并没有向你妥协。`,
      );
      await era.printAndWait(
        `${luna_talk.sex}的想法，已经确实传达到了 ${CharaTalk.me.name} 的心中。`,
      );
      await luna_talk.say_and_wait('今天我不会去训练的，你放心好了。');
      await era.printAndWait(`随后，露娜就离开了 ${CharaTalk.me.name} 身边。`);
      await era.printAndWait(
        `${CharaTalk.me.name} 没能挽留。${CharaTalk.me.name} 捂住胸，许久才回过神来，离开了空空荡荡的走廊。`,
      );
      await era.printAndWait(`这一整天，${CharaTalk.me.name} 都没能见到露娜。`);
      await era.printAndWait(
        `夜晚，${CharaTalk.me.name} 拿起手机，向露娜发出短信。`,
      );
      era.printButton('「我会一直陪在你身边的。」', 1);
      era.printButton('「露娜，我始终爱你。」', 2);
      await era.input();
      await era.printAndWait('虽然信息变为已读，但露娜迟迟没有发消息过来。');
      await era.printAndWait(
        `${CharaTalk.me.name} 苦苦等待，结果一整晚，露娜都没有回信。`,
      );
      const attr_change = new Array(5).fill(0);
      if (ret === 1) {
        attr_change[attr_enum.strength] = 10;
      } else if (ret === 2) {
        attr_change[attr_enum.toughness] = 10;
      }
      allow_transform = false;
      ret = 0;
      era.println();
      get_attr_and_print_in_event(17, attr_change, 0);
      era.drawLine();
    } else if (edu_weeks === 95 + 1) {
      ret = 0;
      allow_transform = false;
    } else if (edu_weeks === 95 + 4) {
      // 资深年一月四周
      await print_event_name('依偎向前', luna_talk);

      await era.printAndWait(
        `新的一年，${CharaTalk.me.name} 正冒着寒风赶往准备与露娜相会的地点。`,
      );
      await era.printAndWait(
        `但在路上，${CharaTalk.me.name} 却发现露娜正站在大门口，与一位看起来尚且稚嫩的学生交谈。`,
      );
      await era.printAndWait(
        '后者不断点头鞠躬，在郑重地感谢了露娜后就离开了。',
      );
      era.printButton('「露娜学姐。」', 1);
      era.printButton('「露娜姐姐？」', 2);
      ret = await era.input();
      await era.printAndWait(
        `听到 ${CharaTalk.me.name} 的揶揄，露娜的脸微微泛红，${luna_talk.sex}嗔怪地看着 ${CharaTalk.me.name}，但似乎也不抗拒这样称呼。`,
      );
      await luna_talk.say_and_wait(
        '是一位到现在才回来的孩子，她马上就要参加出道赛。',
      );
      await luna_talk.say_and_wait(
        '接近一月底才回到学园，恐怕你也会疑惑吧？大多数赛马娘会选择在秋季或冬季出道。',
      );
      await luna_talk.say_and_wait(
        '但在那之前，我们就会来到学园，和同龄人们一起学习，也一起竞争。',
      );
      await luna_talk.say_and_wait(
        '这是快乐的，但也不能保证这个过程没有心碎和疲惫。',
      );
      await era.printAndWait(
        `走到无人的地方，露娜的手臂碰着 ${CharaTalk.me.name} 的肩。${luna_talk.sex}似乎有这样的习惯，总是会不由自主地靠近你。`,
      );
      await luna_talk.say_and_wait(
        '经受不住残酷的赛事和训练，对自己失望时，在假期回到了温暖的家中……',
      );
      await luna_talk.say_and_wait('或许就会萌生放弃的想法。');
      await era.printAndWait(
        `${
          CharaTalk.me.name
        } 沉默地听露娜娓娓道来。说实话，站在 ${CharaTalk.me.get_couple_title()} 的立场——鲁铎象征的立场上，${
          CharaTalk.me.name
        } 无法说什么漂亮话。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 知道，很多赛马娘听到露娜将会参赛时，${luna_talk.sex}们的第一反应就是选择退赛。`,
      );
      era.printButton('「能直面现实和困境的，才是真正的勇者。」', 1);
      era.printButton('「或许我们应该给她们更多的帮助。」', 2);
      await era.input();
      await era.printAndWait(`露娜笑着看着 ${CharaTalk.me.name}。`);
      await luna_talk.say_and_wait(
        '我也想过逃避，不过似乎……我逃跑的目的地始终就在你这里。',
      );
      await era.printAndWait(
        `露娜靠在 ${CharaTalk.me.name} 的怀里，手指轻轻戳着 ${CharaTalk.me.name} 的胸膛。`,
      );
      await luna_talk.say_and_wait(
        `露娜${ret === 1 ? '学' : '姐'}姐也无路可逃了呢。`,
      );
      await era.printAndWait(`真是……`);
      await era.printAndWait(
        `${CharaTalk.me.name} 红着脸，欣然接受了露娜的小小报复。`,
      );
      const attr_change = new Array(5).fill(0);
      attr_change[attr_enum.toughness] = 5;
      era.println();
      get_attr_and_print_in_event(17, attr_change, 0);
      era.drawLine();
    } else if (edu_weeks === 95 + 14) {
      // 资深年四月二周
      await print_event_name(
        [{ color: color_17[1], content: '皇帝坠落' }],
        luna_talk,
      );
      await era.printAndWait('到四月份，万众瞩目的粉丝感谢祭就要开始了。');
      await era.printAndWait(
        `而尽管 ${CharaTalk.me.name} 颇有微词，但开幕式结束之后，会有一场模拟赛。`,
      );
      await era.printAndWait(
        `尽管是模拟赛，但就激烈程度来讲，一定与正式的比赛相差无几。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 知道，越是到了这个时候，${CharaTalk.me.name} 就越难平衡露娜的身体状态。`,
      );
      await era.printAndWait('一旦出现了问题……');
      await era.printAndWait(
        `可一想到夏日合宿时发生的事情，${CharaTalk.me.name} 又无法请求露娜推脱比赛。`,
      );
      await era.printAndWait(
        `到了模拟赛要开始时，露娜疲劳的状态让 ${CharaTalk.me.name} 眼角一跳。`,
      );
      await era.printAndWait(
        '不仅是训练，还有学生会的工作和活动的运营，为了今天，露娜身上的负担实在太重。',
      );
      await era.printAndWait('——休息一下吧。');
      await era.printAndWait(
        `${CharaTalk.me.name} 看着站在身边的露娜，话梗在喉头，最终化作一声叹息。`,
      );
      await luna_talk.say_and_wait('所有的人都在期待这场比赛。');
      await luna_talk.say_and_wait(
        '粉丝的欢呼、期待和祝愿，让已经退役了的前辈们也心潮澎湃。',
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 看向露娜，${luna_talk.sex}似乎若有所思。片刻后，${luna_talk.sex}看向了 ${CharaTalk.me.name}。`,
      );
      await luna_talk.say_and_wait('你也对我有所期待吗？');
      era.printButton('「无论何时！」', 1);
      era.printButton('「休息一下吧……」', 2);
      await era.input();
      await era.printAndWait(
        `听到 ${CharaTalk.me.name} 的回应，露娜深吸一口气，随后拍了拍 ${CharaTalk.me.name} 的肩膀。`,
      );
      await luna_talk.say_and_wait('我去去就回。');
      await era.printAndWait(
        `${CharaTalk.me.name} 僵在了原地，但 ${CharaTalk.me.name} 随后意识到，露娜是要以【现在】这个状态，走上赛场。`,
      );
      await era.printAndWait(
        `——结果，露娜陷入了苦战。或许是连日的疲劳让${luna_talk.sex}状态不佳。`,
      );
      await era.printAndWait(`观众们一片哗然。`);
      await era.printAndWait(`皇帝怎么会如此失态？这样的讨论持续了数周。`);
      if (era.get('status:17:精神损伤') < 4) {
        era.println();
        get_attr_and_print_in_event(17, [0, 0, 0, 0, 5], 0);
        await era.waitAnyKey();
      }
      event_marks.a_stones_throw++;
      event_marks.just_luna = 3 + 3 * (era.get('status:17:精神损伤') >= 4);
      era.drawLine();
      era.set('cflag:17:节日事件标记', 0);
    } else if (edu_weeks === 95 + 16) {
      // 资深年四月四周
      await print_event_name(
        [{ color: color_17[1], content: '乾坤一掷' }],
        luna_talk,
      );
      await era.printAndWait(
        `明天就是天皇赏春开始的日子了，但这段时间，${CharaTalk.me.name} 却发现无论如何，露娜都无法唤出【皇帝】。`,
      );
      era.printButton('「一直累积着的疲劳还是带来了后果。」', 1);
      era.printButton('「不要再勉强自己了！」', 2);
      await era.input();
      await era.printAndWait(
        `在学生会，${CharaTalk.me.name} 忧心忡忡地看着捂着额头的露娜。`,
      );
      await era.printAndWait(`${luna_talk.sex}发丝散乱，顶着重重的黑眼圈。`);
      era.printButton('「都是我的责任……！」', 1);
      era.printButton('「抱歉露娜，我……」', 2);
      await era.input();
      await luna_talk.say_and_wait('不，和你无关。');
      await era.printAndWait(
        `露娜抬起头看着 ${CharaTalk.me.name}，${luna_talk.sex}发丝散乱，顶着厚厚的黑眼圈，泪水从${luna_talk.sex}脸颊上滑落。`,
      );
      await luna_talk.say_and_wait(
        '为了梦想，我几乎是无谋般冲到了现在，是我的任性妄为被你卷了进来……',
      );
      await luna_talk.say_and_wait(
        '况且，你一次又一次地提醒我注意身体，是我把一切都搞砸了。',
      );
      await luna_talk.say_and_wait(
        '在失去了【皇帝】的情况下，我根本没办法让所有人都满意。',
      );
      await luna_talk.say_and_wait('抱歉，我不是强大的赛马娘……抱歉……抱歉……');
      await era.printAndWait(`在 ${CharaTalk.me.name} 面前，露娜嚎啕大哭。`);
      await era.printAndWait(
        `${CharaTalk.me.name} 迅速向前，紧紧地拥抱着露娜。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 感受着${luna_talk.sex}的脆弱，感受着${luna_talk.sex}的委屈。`,
      );
      await era.printAndWait(
        `同时，${CharaTalk.me.name} 却又有满腔的不满和心疼，想要向露娜诉说。`,
      );
      await era.printAndWait(
        '心疼，在于露娜的泪水；不满，在于露娜的妄自菲薄。',
      );
      await era.printAndWait(
        '就算在模拟赛上没有发挥好，露娜难道就不是被所有人敬仰的存在了吗？',
      );
      await era.printAndWait('不。不！！！');
      await era.printAndWait(`${CharaTalk.me.name} 咬着牙。`);
      await era.printAndWait(
        '那样努力，为特雷森、为所有赛马娘呕心沥血、鞠躬尽瘁的露娜，不应被人议论。',
      );
      await era.printAndWait(`${luna_talk.sex}理应问心无愧！`);
      await CharaTalk.me.say_and_wait(
        '我想，你误会了人们心目中【皇帝】的强大。',
      );
      await era.printAndWait(
        `在露娜哭累了之后，${CharaTalk.me.name}开口安慰。听到${CharaTalk.me.name}话中的鉴定，露娜的心微微一颤。`,
      );
      await CharaTalk.me.say_and_wait(
        '皇帝——鲁铎象征之所以吸引人，是因为在那个象征的旗帜下，每个人都能各司其职。',
      );
      await CharaTalk.me.say_and_wait('激励着所有人为之努力和奋斗。');
      await CharaTalk.me.say_and_wait(
        '至今为止，没有人比你更适合【皇帝】这个称号。你引领着我们，你带着我们不断向前！',
      );
      await CharaTalk.me.say_and_wait(
        '在向梦想拼搏的天途中，你已经成为了别人的梦想了。',
      );
      await CharaTalk.me.say_and_wait('所以，不要贬低自己，露娜——');
      await era.printAndWait(
        `${CharaTalk.me.name} 紧紧地抱住露娜，似乎想要给${luna_talk.sex}无限的力量。也像是，${CharaTalk.me.name} 想把生命中最重要的人揉进自己的灵魂。`,
      );
      await era.printAndWait(
        `良久后，露娜才抗议似的、轻轻挥起拳头，敲了敲 ${CharaTalk.me.name} 的肩膀。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 才意识到似乎太用力了。${CharaTalk.me.name} 赶忙放开手臂，却发现露娜没有离开，仍趴在 ${CharaTalk.me.name} 的胸膛上。`,
      );
      await luna_talk.say_and_wait('我还能继续向前吗？');
      era.printButton('「当然。」', 1);
      await era.input();
      await luna_talk.say_and_wait('你还会陪着我吗？');
      era.printButton('「哪怕万劫不复。」', 1);
      era.printButton('「永远。」', 2);
      await era.input();
      await era.printAndWait(`${CharaTalk.me.name} 听到了露娜浅浅的笑声。`);
      await CharaTalk.me.say_and_wait(
        '其实不止是我，学生会的大家、还有特雷森的学生们，都想帮你一把，哪怕只能做些微不足道的事情。',
      );
      await CharaTalk.me.say_and_wait('你的努力，一定会有成果的。');
      await luna_talk.say_and_wait('那我更不能在此停下脚步了。');
      await luna_talk.say_and_wait('我们的梦想，只存在于未来。');
      await era.printAndWait(
        `${CharaTalk.me.name} 从口袋里拿出手帕，为露娜轻轻擦去泪水。${CharaTalk.me.name} 发现，露娜眼中闪耀着的，已经不再是泪水。`,
      );
      await era.printAndWait(`而是乾坤一掷的意志。`);
      ret = 1;
      allow_transform = false;
      era.drawLine();
    }
    if (event_marks.just_luna > 0) {
      event_marks.just_luna--;
      ret = 0;
      allow_transform = false;
    }
    if (allow_transform) {
      ret = event_marks.want_emperor;
    }

    await print_event_name('日月交替', ret > 0 ? emperor_talk : luna_talk);
    if (ret > 0) {
      const talk_list = [
        '嗯……为了我们共同的愿望，我会忍受。',
        '……抱着我……我不想一个人面对……',
      ];
      if (era.get('status:17:精神损伤') > 0) {
        talk_list.push(`${CharaTalk.me.actual_name}，非这样做不可吗？`);
      }
      if (era.get(`status:${luna}:神经衰弱`) > 0) {
        talk_list.push('…………………………………………我是谁？');
      }
      await luna_talk.say_and_wait(get_random_entry(talk_list));
    } else {
      const talk_list = ['入梦之时……？', '大器必成，亦须磨砺。'];
      if (era.get(`status:${luna}:精神损伤`) > 0) {
        talk_list.push('梦醒时刻。');
      }
      if (era.get(`status:${luna}:神经衰弱`) > 0) {
        talk_list.push('向伊甸进发！');
      }
      await emperor_talk.say_and_wait(get_random_entry(talk_list));
    }
    let race_punish = false;
    const race_history = RaceHistory.get(17).get();

    switch (edu_weeks) {
      case race_infos[race_enum.sats_sho].date + 48: // 五月第一周 皋月赏惩罚
        race_punish = !check_aim_race(race_history, race_enum.sats_sho, 1, 1);
        break;
      case race_infos[race_enum.toky_yus].date + 48: // 六月第一周 日本德比惩罚
        race_punish = !check_aim_race(race_history, race_enum.toky_yus, 1, 1);
        break;
      case race_infos[race_enum.kiku_sho].date + 48: // 冬月第一周 菊花赏惩罚
        race_punish = !check_aim_race(race_history, race_enum.kiku_sho, 1, 1);
        break;
      case race_infos[race_enum.arim_kin].date + 48: // 新年第一周 有马纪念惩罚
        race_punish = !check_aim_race(race_history, race_enum.arim_kin, 1, 1);
        break;
      case race_infos[race_enum.tenn_spr].date + 96: // 五月第一周 天皇赏春惩罚
        race_punish = !check_aim_race(race_history, race_enum.tenn_spr, 2, 1);
        break;
      case race_infos[race_enum.japa_cup].date + 96: // 冬月第四周 日本杯惩罚
        race_punish = !check_aim_race(race_history, race_enum.japa_cup, 2, 1);
    }
    if (race_punish) {
      sys_like_chara(emperor, 0, -50);
    }
    const total_punish =
      (ret > 0 && ++event_marks.break_down % 7 === 0) + race_punish;
    if (total_punish > 0) {
      await handle_debuff(event_marks, luna, total_punish);
    }
    if (!ret !== !event_marks.emperor) {
      transform(event_marks);
    }
  }
};
