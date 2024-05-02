const era = require('#/era-electron');

const sys_call_check = require('#/system/script/sys-call-check');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const check_stages = require('#/data/event/check-stages');
const event_hooks = require('#/data/event/event-hooks');
const chara_talk = get_chara_talk(400);

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean>>} */
const handlers = {};

handlers[event_hooks.select] = function () {
  const love = era.get('love:400'),
    chara_talk = get_chara_talk(400),
    buffer = [];
  if (love === 100) {
    buffer.push([
      [
        `训练员${get_chara_talk(
          0,
        ).get_adult_sex_title()}，请务必看着我的身姿，将它印刻在你的大脑之中，永远的。也请永远不要离开我。`,
      ],
      `${chara_talk.name}向你张开了双手，似乎想要拥抱你。`,
    ]);
  } else if (love >= 75) {
    buffer.push([
      [
        '下次能再稍微来早一点点吗？我想早点见到你，这样也可以让我们的训练更有效果。',
      ],
      `${chara_talk.name}微红的脸颊撇了过去，不敢看着你的眼睛。`,
    ]);
  } else if (love >= 50) {
    buffer.push([
      ['能再靠近一点吗？不，只是想要看看我选择的训练员到底有多优秀而已。'],
      `${chara_talk.name}的目光不再离开你。`,
    ]);
  } else {
    buffer.push(
      [
        ['作为训练员，你来的时间还算合理，至少你没有迟到。'],
        `${chara_talk.name}点点头，似乎是在表达对你的认可`,
      ],
      [
        ['来的刚刚好，训练员，今天要如何安排。'],
        `${chara_talk.name}看起来饶有兴味。`,
      ],
    );
  }
  const entry = get_random_entry(buffer);
  entry[0].forEach((e) => chara_talk.say(e));
  era.print(entry[1]);
};

handlers[event_hooks.good_morning] = function () {
  const love = era.get('love:400'),
    chara_talk = get_chara_talk(400),
    buffer = [];
  if (era.get('base:400:体力') < era.get('maxbase:400:体力') / 3) {
    buffer.push([
      [
        '我并不觉得这是什么明智的想法，我也必须向你声明，我们之间是平等的关系，我希望你能记住你的职责。',
      ],
      `${chara_talk.name}看起来并不非常情愿听从你的指令。`,
    ]);
    if (love > 50) {
      buffer.push([
        ['如果你确定要这样的话......我明白了，我会尽我的全力跟上你的想法的。'],
        `${chara_talk.name}思考了一下，答应了你的要求。`,
      ]);
    }
  } else {
    buffer.push(
      [[`今天的天气看起来不错，如果有什么安排的话还是乘早开始吧。`]],
      [[`你是我变强的必要存在，所以没有必要顾虑我的想法。`]],
      [
        [
          `有点怀念茶座的咖啡了......为什么要这样看着我，${chara_talk.sex}泡的咖啡确实很好喝。`,
        ],
      ],
      [
        [
          `最近学校附近新开的料理店味道不错，如果训练能够取得足够的效果的话，我带你一起去尝尝怎么样？`,
        ],
        `${chara_talk.name}摸了摸自己的肚子，似乎还在回味料理的味道。`,
      ],
      [
        [
          '爱丽速子的药剂怎么样？很多时候它确实能够帮助你解决问题，但是副作用或者说附带出现的问题，你有信心能够解决吗？',
        ],
      ],
      [
        [
          `你问我的目标是什么？我想赢，站在赛${chara_talk.get_uma_sex_title()}的战场上一路赢下去，仅此而已。`,
        ],
      ],
      [
        [
          `是骏川小姐啊......${chara_talk.sex}是一个很强......不，没什么，忘了吧。`,
        ],
        `${chara_talk.name}摇了摇头，选择将话题转移。`,
      ],
    );
    if (love === 100) {
      buffer.push(
        [
          [
            `为什么呢？我们明明只是训练员与担当的关系......`,
            `为什么我的视线已然无法离开你了呢。`,
          ],
          `虽然${chara_talk.name}看起来是在小小声的自言自语，但是你还是听到了这句话。`,
        ],
        [
          ['能帮我按摩一下脚吗？这应该也是作为训练员的职责之一吧.......'],
          `${chara_talk.name}脱下了自己的鞋子，将被袜子包裹的小脚伸了出来，`,
          `虽然嘴上只是说着希望你帮${chara_talk.sex}按摩脚，但是${chara_talk.sex}闭上了眼睛似乎打算任由你做什么都好。`,
        ],
      );
    } else if (love >= 90) {
      buffer.push(
        [
          [
            `如果没有额外的训练计划的话.....`,
            '今天就和我一起去吃饭吧，不用担心时间问题，大不了我抱着你跑回来而已。',
          ],
          `${chara_talk.name}比划了一下，${chara_talk.sex}似乎并不像是在开玩笑的样子。`,
        ],
        [
          [
            `抱歉，有点累了，所以能扶我一下吗？果然还是你身上的味道最能让我安心了。`,
          ],
          `${chara_talk.name}顺势依靠在你的怀里面，似乎充分的的享受着你的气味。`,
        ],
      );
    } else if (love >= 75) {
      buffer.push(
        [
          [
            `今天训练结束要不要和我一起喝点什么，放心吧我请客，`,
            `我知道有一家很不错的咖啡馆，就当是给你的额外酬劳怎么样？`,
          ],
        ],
        [
          [
            '能陪我去书店吗？今天好像有的新一期的杂志和漫画，我想去找个人陪我一起去买。',
          ],
        ],
      );
    }
  }
  const entry = get_random_entry(buffer);
  entry[0].forEach((e) => chara_talk.say(e));
  entry[1] && era.print(entry[1]);
};

handlers[event_hooks.talk] = async function () {
  let talk_arr;
  switch (era.get('cflag:400:干劲')) {
    case -2:
      talk_arr = [
        '啊......我现在浑身都很不爽，所以有什么事情就赶快说。',
        `你最好说一点我喜欢听的东西，不然的话我不知道自己能不能忍住动手的欲望。`,
      ];
      break;
    case -1:
      talk_arr = [
        '唔......你刚刚在说什么？抱歉我有点提不起劲，所以能麻烦你再说一次吗？',
        '咳咳咳，茶座的咖啡喝太多了......感觉喉咙有点不对劲了。',
      ];
      break;
    case 0:
      talk_arr = [
        `我现在脑袋还算清醒，所以要是有预定计划或者日程的话就赶紧说吧。`,
        `又是这种稀疏平常的日子，要是这样的日子能够再少一点就好了。`,
      ];
      break;
    case 1:
      talk_arr = [
        '天气不错，我很喜欢，所以我希望你的训练能让我保持这样的心情',
        `再不开始训练的话我可就要提栏杆来发泄精力了哦，你说赔偿？当然是你赔啊！`,
      ];
      break;
    case 2:
      talk_arr = [
        '我今天可是活力十足啊，作为训练员你可不能浪费这种好机会对吧？',
        `今天的训练量可以翻倍，我的状态比你想象的要好得多，不要把我当场是那种娇生惯养的家伙，只要能赢训练量加多少都无所谓。`,
      ];
      break;
  }
  await get_chara_talk(400).say_and_wait(get_random_entry(talk_arr));
};

handlers[event_hooks.office_gift] = async function () {
  switch (get_random_value(0, 1)) {
    case 0:
      await chara_talk.say_and_wait(
        `给我的礼物？.......谢谢，不过竟然给我送这样的礼物，难道你是在讨好我吗？`,
      );
      await era.printAndWait(
        `兴致勃勃的 ${chara_talk.name}，在看到是Ｓ〇ＧＡ游戏机之后立刻垂下了耳朵。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `礼物啊，我很少从其他人手里面收到这种东西呢，`,
      );
      await chara_talk.say_and_wait(
        `而且为什么......从你手中接过这个东西，我的心脏居然在激烈挑动呢？`,
      );
      break;
  }
};

handlers[event_hooks.out_church] = async function () {
  const chara_talk = get_chara_talk(400);
  await era.printAndWait(`今天，${chara_talk.name}与你一起前往神社进行祈福。`);
  await chara_talk.say_and_wait(`这种事情........真的能起效果吗？`);
  await era.printAndWait(
    `${chara_talk.name}将信将疑的洗了手完成了参拜，${chara_talk.sex}看向你问出了自己的问题。`,
  );
  era.printButton(`你的努力和我的努力都是我们取得成绩最坚实的基础，`, 1);
  await era.input();
  era.printButton(`但是除此之外，或许我们也需要一点点运气的帮助不是吗？`, 1);
  await era.input();
  era.printButton(`你就当成是心里安慰也可以。`, 1);
  await era.input();
  await chara_talk.say_and_wait(
    `这样啊........那我可就放心大胆的开始许愿了，毕竟拿了我的香油钱供奉，它们可不能不干事啊！`,
  );
  await era.printAndWait(
    `钱币落入纳奉箱的声音与${chara_talk.name}的话语一起响起，${chara_talk.sex}看起来选择了相信你的说法。`,
  );
  if (get_random_value(0, 1)) {
    await chara_talk.say_and_wait(
      `唔，居然真的有反应啊！喂喂喂，训练员君这可真是了不得的事情。`,
    );
    await era.printAndWait(
      `${chara_talk.name}有些惊讶，${chara_talk.sex}摸了摸自己的耳饰。`,
    );
    await chara_talk.say_and_wait(
      `不过既然连神明回应了我的愿望.......那我可更加没有不训练的理由了啊，咱们等会就回去训练吧！`,
    );
    await era.printAndWait(`${chara_talk.sex}兴冲冲的拉着你准备回去训练场了。`);
  } else {
    await chara_talk.say_and_wait(
      `嘁......看起来大家说的很灵验的神灵也不是什么万能的东西啊.....`,
    );
    await chara_talk.say_and_wait(
      `训练员君，我觉得我们应该提前回去喽，既然神明不愿意回答我的话，`,
    );
    await chara_talk.say_and_wait(
      `那就让祂好好看看我们根本就不需要祂的帮助也能做到吧。`,
    );
    await era.printAndWait(
      `这样说着，${chara_talk.name}烦躁的甩动着尾巴，看起来${chara_talk.sex}并没有自己说的那么平静，甚至看起来有些阴沉。`,
    );
    await era.printAndWait(
      `不知为何，你似乎也有些烦躁了起来，两个人一起离开了神社。`,
    );
  }
};

handlers[event_hooks.out_river] = async function (hook) {
  const ret = await select_action_around_river(),
    chara_talk = get_chara_talk(400),
    love = era.get('love:400'),
    buffer = [];
  let temp;
  hook.arg = !!ret;
  if (ret === 0) {
    await era.printAndWait(`和 ${chara_talk.name} 相约去钓鱼……`);
    switch (get_random_value(0, 2)) {
      case 0:
        await chara_talk.say_and_wait(
          `拖雷纳君，真的会有鱼咬钩吗？那么明显的陷阱它们居然也会上当吗？`,
        );
        await era.printAndWait(
          `${chara_talk.name}看着平静的水面泛起涟漪的表情有些可爱。`,
        );
        await era.printAndWait(
          `${chara_talk.sex}马上收敛表情全神贯注的看着自己的鱼竿，开始和水里面的鱼做斗争。`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `唔唔唔，真是个不错的活动啊，拖雷纳君的桶子怎么是空的呢？需要我分你一点吗？`,
        );
        await era.printAndWait(
          `${chara_talk.name}将咬钩的鱼从鱼钩上摘下，看向你的表情只有真诚，但是你感觉自己的内心似乎收到了些许的伤害。`,
        );
        break;
      case 2:
        await era.printAndWait(
          `${
            chara_talk.sex
          }恬静的看着平静小河平缓的水面的样子完全不像是平时那个风风火火我行我素的赛${chara_talk.get_uma_sex_title()}，`,
        );
        await era.printAndWait(
          `你将${chara_talk.sex}与平时截然不同的身子印在了脑海里面。`,
        );
    }
  } else {
    buffer.push(
      [
        [`河边的空气有些凉爽啊，下次晨跑的时候选这里怎么样？`],
        `${chara_talk.name}深呼吸感受着河边的微风。`,
      ],
      [
        [],
        `${chara_talk.name}默默的走在河边，不时回头看向走在身后的你，似乎在思考着什么。`,
      ],
    );
    if (love >= 75) {
      buffer.push([
        `${chara_talk.name}慢慢的靠近你，悄悄的却又不容拒绝的握住了你的手，十指相扣轻轻的用手指划在你的手背上画着图案。`,
      ]);
    }
    temp = get_random_entry(buffer);
    if (temp) {
      for (const e of temp[0]) {
        await chara_talk.say_and_wait(e);
      }
      await era.printAndWait(temp[1]);
    }
  }
};

handlers[event_hooks.out_shopping] = async function (hook) {
  const chara_talk = get_chara_talk(400),
    love = era.get('love:400'),
    buffer = [];
  let temp;
  hook.arg = await select_action_in_shopping_street();
  switch (hook.arg) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `你说这个游戏叫什么？舞力全开？那就试试吧，看起来挺有意思的......`,
          );
          await era.printAndWait(
            `最后${chara_talk.name}以分奴的方式刷新了街机的记录。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `拖雷纳君的反应好像还没有我好呢，看招看招！`,
          );
          await era.printAndWait(
            `操纵着屏幕里面的角色，${chara_talk.name}丝滑的一套连招将你操纵的角色打败，`,
          );
          await era.printAndWait(
            `然后对你露出了略带挑衅的笑容，看得出来${chara_talk.sex}真的很开心。`,
          );
          break;
      }
      break;
    case 1:
      await era.printAndWait(
        `与 ${chara_talk.name} 一同参加了商店街组织的抽奖活动……`,
      );
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `这种东西只不过商家赚钱的手段吧，要是次次都能中大奖的话他们早就该关门歇业了。`,
          );
          await era.printAndWait(
            `${chara_talk.name}一边说着一边看着自己手上作为奖品的玩偶。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `抽奖？如果你想要什么东西的话就把钱给我吧，我去找店员用合理的价格买下来好了。`,
          );
          await era.printAndWait(
            `虽然是这样说着，${chara_talk.name}还是选择了乖乖按下按钮等待结果产生。`,
          );
          break;
      }
      break;
    case 2:
      buffer.push(
        [
          [`一个人来这里唱歌还是怪可怜的，但是有你在的话反而就好很多了呢。`],
          `${chara_talk.name}拿起话筒，轻声唱了起来。`,
        ],
        [
          [
            `唔，歌单里面的歌尽是我没怎么听过呢，要不拖雷纳君你唱一首给我听一下怎么样？`,
            `噗哈哈哈，开玩笑的，我可是赛${chara_talk.get_uma_sex_title()}偶像啊，怎么可以不会唱歌呢？`,
          ],
        ],
      );
      if (love >= 75) {
        buffer.push([
          [`快和我一起唱！！就是这首！！我一直想找人和我一起唱的！`],
          `${chara_talk.name}强硬的将话筒塞给你，屏幕上播放的是一首男女对唱的情歌，歌曲结尾男女主角踏入婚姻殿堂过上了幸福的一生。`,
        ]);
      }
      temp = get_random_entry(buffer);
      for (const e of temp[0]) {
        await chara_talk.say_and_wait(e);
      }
      await era.printAndWait(temp[1]);
      break;
    case 3:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `灵异恐怖片？拖雷纳君不会是以为我会怕那些恶鬼之类的东西吧？`,
          );
          await era.printAndWait(
            `${chara_talk.name}胸有成竹的笑着看向自己手中的电影票。`,
          );
          await era.printAndWait(
            `事实也正是如${chara_talk.sex}所说的那样，${chara_talk.sex}心如止水的看完了一整部其实还算恐怖的电影，出场的时候${chara_talk.sex}挽住了你的手。`,
          );
          await chara_talk.say_and_wait(
            `这些东西和我在茶座那边见过的比起来那都是太过于浮夸了呢.......嘘，别问，刚刚我说的你都忘掉吧。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `这个片子是......啊，看起来应该会很有意思，拖雷纳君太懂担当的心思的话，我可不能当做视而不见呢。`,
          );
          await era.printAndWait(
            `${chara_talk.name}接过了电影票，你们一起看了一部很有意思的老科幻电影。`,
          );
          break;
      }
  }
  hook.arg = hook.arg <= 1;
};

handlers[event_hooks.out_station] = async function (hook) {
  hook.arg = await select_action_in_station(400);
  const chara_talk = get_chara_talk(400);
  switch (hook.arg) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `你要点咖啡吗？那记得帮我多加一点糖和牛奶，咖啡就是要甜的才好喝啊。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `要试试这个吗？你说什么我不能喝酒？放心啦只是制作过程中有用到酒而已，不会出问题的。`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `约会？和我？拖雷纳君你确定吗？比起这个我觉得我们在训练场约会然后约会内容就是训练怎么样？`,
          );
          await era.printAndWait(
            `${chara_talk.name}一脸的诧异，${chara_talk.sex}摸了摸自己的耳朵，确认自己听到的内容没有错。`,
          );
          await era.printAndWait(
            `但是在看到你坚定的表情之后，${chara_talk.sex}有些苦恼的叹了口气。`,
          );
          await chara_talk.say_and_wait(
            `好吧好吧，虽然但是......和我这样的${chara_talk.get_uma_sex_title()}约会是不会有意思的哦。`,
          );
          await era.printAndWait(
            `${chara_talk.name}虽然一直在推脱，但是你看出了${chara_talk.sex}眼神之中的期待。`,
          );
          era.printButton(
            `我希望你能和我一起出去玩，只要有你在的话就会很有意思。`,
            1,
          );
          await era.input();
          await chara_talk.say_and_wait(
            `什么....什么啊！！！说这样的话......难道你是什么擅长骗${chara_talk.get_uma_sex_title()}的花心萝卜吗？`,
          );
          await era.printAndWait(
            `${chara_talk.name}将羞红的脸颊别过去不敢直视你，但是还是牵住了你伸出来的手。`,
          );
          await era.printAndWait(`随后你们一起去游乐园玩了个爽。`);
          break;
        case 1:
          await chara_talk.say_and_wait(
            `约会吗？难道是什么真心话大冒险失败之后的惩罚游戏吗？`,
          );
          await era.printAndWait(
            `${chara_talk.name}将信将疑的看着你，随后叹了口气。`,
          );
          await chara_talk.say_and_wait(
            `不管是什么，比赛和训练才是最重要的不是吗？再说了和我这样阴沉的赛${chara_talk.get_uma_sex_title()}出去约会很没意思的哦。`,
          );
          await era.printAndWait(
            `一边说着，${chara_talk.name}却忍不住的偷偷看向你，似乎是在确定你到底是不是真心想要约${chara_talk.sex}出去玩。`,
          );
          await chara_talk.say_and_wait(
            `唔......既然是真的吗？我明白了......那我们就出发吧，让我来带路。`,
          );
          await era.printAndWait(
            `${chara_talk.name}看着你丝毫没有任何变化的表情似乎意识到了你的心意，`,
          );
          await era.printAndWait(`虽然脸上依旧是一副不耐烦的表情，`);
          await era.printAndWait(
            `但是${chara_talk.sex}牵住你的手的时候那种欢快的感觉被你察觉的一清二楚，然后${chara_talk.sex}就把你带到了书店一起看书。`,
          );
      }
      break;
    case 2:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `这里卖的衣服不太适合我，我一般都是去找专门的店订做衣服的，拖雷纳君要不要一起啊？可以记在我的账上。`,
          );
          await era.printAndWait(
            `${chara_talk.name}眯起眼睛微笑的看着你，你也不知道${chara_talk.sex}到底是不是真心的邀请你。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `啊，这里居然上新货了，拖雷纳君快过来，我一直都觉得我们可以换一下鞋子上的蹄铁了，还有新的负重和运动服诶。`,
          );
          await era.printAndWait(
            `${chara_talk.name}有些兴奋的看着器材店里面的货物。`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.school_atrium] = async function (hook) {
  hook.arg = await select_action_in_atrium(85);
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `其实我没什么好喊的.......算了，请帮助我在赛${chara_talk.get_uma_sex_title()}的道路上走的更远吧！！！`,
          );
          await era.printAndWait(
            `${chara_talk.sex}对着大大的枯树洞喊到，喊完了之后有些不好意思的看着你。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `你说要是三女神真的会在这里听这些东西的话，${chara_talk.sex}们会不会觉得烦恼呢？`,
          );
          await era.printAndWait(
            `${chara_talk.name}若有意思的看向枯树洞，似乎真的在思考这个可能性。`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 1)) {
        case 0:
          await chara_talk.say_and_wait(
            `学校里面你和我说去约会？拖雷纳君？！师生恋是明确被禁止的哦！！`,
          );
          await era.printAndWait(
            `${chara_talk.name}看起来并没有那个兴致，但是最后${chara_talk.sex}拉着你在学校的图书馆完成了‘约会’。`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `啊......学校里面啊.......那就去食堂怎么样？你请客。`,
          );
          await era.printAndWait(
            `虽然是这样说，但是${chara_talk.name}还是替你掏了这一餐的饭钱。`,
          );
          break;
      }
      break;
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  await era.printAndWait(`你和${chara_talk.name}在决定在天台吃便当`);
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `介意我和你互换一下菜吗？拖雷纳君的盒饭里面有我很喜欢的食材呢。`,
      );
      await era.printAndWait(
        `${chara_talk.name}将一大块肉塞到了你的便当盒里面，微笑着看向你。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(`拖雷纳君的便当是自己做的吗？真好呢，`);
      await chara_talk.say_and_wait(
        `家里面给我带的便当我每次都吃不完，太可惜了。所以一起来吃吧，浪费粮食可是大罪过。`,
      );
      await era.printAndWait(`${chara_talk.name}掏出了一个超大的豪华便当盒，`);
      await era.printAndWait(
        `不用看都知道里面丰富而美味的食材肯定超出了你的钱包的可承受范围，`,
      );
      await era.printAndWait(
        `，当然你也没有追问，平时${chara_talk.name}是怎么解决这份便当的。`,
      );
      break;
  }
};

handlers[event_hooks.office_cook] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `学做饭吗？我在家政课上倒是也学过一些东西，`,
      );
      await chara_talk.say_and_wait(
        `那么....请多多指教了，既然要学，那就要好好学才行，就好像是训练一样。`,
      );
      await era.printAndWait(`${chara_talk.name}一脸的严肃。`);
      break;
    case 1:
      await chara_talk.say_and_wait(
        `其实我不太会做饭哦，毕竟平时也没有接触过这些活动，`,
      );
      await chara_talk.say_and_wait(
        `但是既然是拖雷纳君提出来的，那我们就一起进步，好好学习吧。`,
      );
      break;
  }
};

handlers[event_hooks.office_study] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `指导学习什么的.......是需要我来指导拖雷纳的作业吗？`,
      );
      await chara_talk.say_and_wait(
        `开个玩笑啦，拖雷纳君愿意帮我知道学习，我很感激哦。`,
      );
      await era.printAndWait(`${chara_talk.name}伸了个懒腰，露出愉快的表情。`);
      break;
    case 1:
      await chara_talk.say_and_wait(
        `学习啊，我们家学习成绩不好的好像几乎没有哦，`,
      );
      await chara_talk.say_and_wait(
        `哦对了，要不拖雷纳君教我关于训练员的知识吧，`,
      );
      await chara_talk.say_and_wait(`说不定有一天我就可以自己训练我自己了哦！`);
      await era.printAndWait(
        `${chara_talk.name}的话让你幻视到了失业的悲惨未来。`,
      );
      break;
  }
};

handlers[event_hooks.office_rest] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `抱歉，要休息的话，可以不拉上窗帘吗？我......有点怕黑。`,
      );
      await era.printAndWait(`${chara_talk.name}有些不好意思。`);
      break;
    case 1:
      await chara_talk.say_and_wait(`......`);
      await era.printAndWait(
        `${chara_talk.name}入睡之后的表情并不算平缓，仿佛是做了什么噩梦一样，`,
      );
      await era.printAndWait(
        `但是在摸到你袖子的一瞬间，${chara_talk.sex}牢牢的将袖子抓住，然后表情缓和了下来。`,
      );
      break;
  }
};

handlers[event_hooks.office_prepare] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `无需担忧，训练员......就像当初加入你的队伍时说的一样，只需要看着我将胜利带回给你就好了，看着我就好了！`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `要来了啊，我们一直以来的努力就要看到成果了呢......`,
      );
      await chara_talk.say_and_wait(
        `拖雷纳君，看着我吧，就好像是当初说的那样，选择我的你，会得到应有的荣耀。`,
      );
      break;
  }
};

handlers[event_hooks.office_game] = async function () {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      await chara_talk.say_and_wait(
        `比起街机厅的游戏机，还是这里的游戏更有意思哦。`,
      );
      await era.printAndWait(
        `${chara_talk.name}熟练的操控角色，作为担当来说${chara_talk.sex}和你的默契十足，这让你非常开心。`,
      );
      break;
    case 1:
      await chara_talk.say_and_wait(
        `唔，没有玩过的游戏呢......居然是光钻同学的家里面出品的游戏啊，看起来不得不尝试一下了呢。`,
      );
      await era.printAndWait(
        `${chara_talk.name}饶有兴味的看向屏幕里面出现的LOGO，拿起了手柄。`,
      );
      break;
  }
};

handlers[event_hooks.good_night] = async function (hook) {
  const check = sys_call_check(400, check_stages.want_make_love),
    me = get_chara_talk(0),
    chara_talk = get_chara_talk(400);
  era.print(`忙碌结束之后，${me.name} 将 ${chara_talk.name} 来到了宿舍门口。`);
  if (sys_check_awake(0) && sys_check_awake(400) && check) {
    chara_talk.say(`要一起进来吗？`);
    era.print(
      `${chara_talk.name}双腿摩擦着，你能够感觉到${chara_talk.sex}的呼吸正在逐渐加快，`,
    );
    era.print(
      `那双在赛场上风驰电掣的肉腿此刻正在不安分的缓缓靠向你。${chara_talk.sex}伸出手想要将你拉入${chara_talk.sex}的房间之中。`,
    );
    era.printButton('接受', 1);
    era.printButton('装傻', 2);
    hook.arg = (await era.input()) === 1;
    if (check === 2) {
      hook.arg = 2;
    }
  } else {
    chara_talk.say('这样就可以了哦，真的非常感谢您……');
    era.print(
      `${chara_talk.name}微微低头，开心的笑着，回到了${chara_talk.sex}的宿舍之中。`,
    );
  }
};

/**
 * 周日宁静的日常事件，id=400
 *
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
module.exports = {
  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(hook, extra_flag, event_object) {
    if (
      (event_object && hook.hook !== event_hooks.week_start) ||
      !handlers[hook.hook]
    ) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[hook.hook](hook, extra_flag));
  },
};
