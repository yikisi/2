const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async function (hook, __, event_object) {
  const kita = get_chara_talk(68),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:68:育成回合计时'),
    event_marks = new KitaEduMarks();
  let wait_flag = false;
  if (event_marks.beginning === 1) {
    add_event(event_hooks.week_start, event_object);
    await print_event_name(`${kita.name} 登场`, kita);
    await era.printAndWait(
      '时值新学期开始前的最后一天，正是春光明媚的好时候。',
    );
    await era.printAndWait(
      `而在特雷森，生涯的开始是在让人心情愉快的大晴天里的赛${kita.get_uma_sex_title()}们也显得十分快乐。`,
    );
    await era.printAndWait(
      `在这样美好的日子里，${me.name} 整理好着装，想好致辞，准备和担当迎接一起努力奔驰的三年。`,
    );
    await era.printAndWait(`而${kita.sex}的名字就是————`);
    await kita.say_and_wait('请多指教！训练员先生！');
    await era.printAndWait(
      `北部玄驹跟黑道似的起身向 ${me.name} 深深鞠躬，黑色的短发随着大幅度的动作摇晃起来。`,
    );
    await era.printAndWait(
      `这幅健康的样子让 ${me.name} 赞许的点了点头，结实的身体是结出胜利果实的基础，而努力的锻炼正是在这些基础上达成的。`,
    );
    await era.printAndWait(
      `仅仅是这样的身体，便足以让 ${
        me.name
      } 相信${kita.get_teen_sex_title()}的力量。`,
    );
    await era.printAndWait(
      '训练场在太阳的照耀下显得是那么耀眼，绿茵茵的草场跑道的香味让人兴奋起来。',
    );
    await era.printAndWait(
      `如何与青春期本格化的${kita.get_uma_sex_title()}相处？未来的训练和赛程计划？失败后又要如何面对自己的担当？那些就留给未来的自己去想吧！`,
    );
    await era.printAndWait(
      `现在的 ${me.name}，只需要现在跑道上看着 ${kita.name} 奔跑的样子，这就足够了！`,
    );
    await kita.say_and_wait(
      `那么训练员${me.get_adult_sex_title()}，我开始跑了哦！请您认认真真的看好了！`,
    );
    await era.printAndWait(
      `祭典般的赛${kita.get_uma_sex_title()}站在跑道上向 ${
        me.name
      } 挥了挥手，弯下腰，绷紧小小的身体，在 ${
        me.name
      } 面前毫无保留地迈开步伐奔跑起来。`,
    );
    await era.printAndWait(
      `于是那振奋人心的步子，那有如祭典般的热情，仿佛在清晨盛开的牵牛花般在 ${me.name} 面前绽放。`,
    );
    await era.printAndWait(`而 ${kita.name} 的故事，也由此开始了。`);
    era.println();
    wait_flag = get_attr_and_print_in_event(68, undefined, 120) || wait_flag;
  } else if (edu_weeks === 47 + 32 || edu_weeks === 95 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:68:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季合宿结束', kita);
    await era.printAndWait(
      `在足足一个月的合宿训练计划下，${kita.name} 的能力以肉眼可见的速度提升起来。`,
    );
    await era.printAndWait(
      `在精神的时候爆发起来的气势，在训练员的指导下获得的勇气，以及毫不懈怠的刻苦锻炼。`,
    );
    await era.printAndWait(
      `能够让赛${kita.get_uma_sex_title()}强大起来的要素，仿佛同水混和起来的面粉一样，肉眼可见地发酵，成型，散发着惊人的热量。`,
    );
    await era.printAndWait(
      `而随着夏季合宿即将落入尾声，${
        me.name
      } 也放了这团美味的小${kita.get_uma_sex_title()}休息时间。`,
    );
    await era.printAndWait(`让${kita.sex}好好休息一下吧。`);
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    wait_flag = get_attr_and_print_in_event(68, attr_change, 0) || wait_flag;
  } else if (edu_weeks === 95 + 10) {
    event_marks.senior_valentine++;
    await print_event_name('奖励', kita);
    await era.printAndWait(
      `在白色情人节这天清晨，为了给担当赠送礼物而早早来到训练员室。`,
    );
    await era.printAndWait(
      `虽然大概只是想要巧克力之类的甜食吧，不过 ${me.name} 还是询问起小北有什么想要的奖励。`,
    );
    await kita.say_and_wait(`奖励么？只是普通的巧克力……不，那个……奖励的话……`);
    await kita.say_and_wait(`可以用别的方式，奖励么？`);
    era.drawLine({ content: '夜' });
    await kita.say_and_wait(`训练员……在学园里这样的…不会被人看到的对吧…♡`);
    await era.printAndWait([
      '在夜晚特雷森学园的走廊里，',
      me.get_colored_name(),
      ' 和全裸的 ',
      kita.get_colored_name(),
      ' 进行着今天的约会，',
    ]);
    await era.printAndWait(
      `满是骚味的狗项圈紧紧地套在赛${kita.get_uma_sex_title()}雪白的颈上，而连接着项圈的狗链则被 ${
        me.name
      } 抓在手里。`,
    );
    await era.printAndWait(
      `粉嫩的小舌淫靡色气地垂落在口外，随着${kita.get_teen_sex_title()}粗重的喘息止不住的滴落着甜蜜的涎水。`,
    );
    await era.printAndWait(
      `往日里骄傲可爱的${kita.get_teen_sex_title()}，此时此刻正被黑色透光的纱布眼罩蒙住双眼，用脸蛋蹭着 ${
        me.name
      } 的裤脚。`,
    );
    if (kita.sex_code - 1) {
      await era.printAndWait(
        `在赛${kita.get_uma_sex_title()}胸前，一条丝带将两颗硕大粉嫩的乳头绑在一起，在乳房的重压下在地面上拖拽着摩擦。`,
      );
    }
    await kita.say_and_wait(
      `在学园里被训练员抓住狗链…简直就像宠物狗一样呢…哈啊…♡一想到要在走廊里…小腹深处…火辣辣的…好厉害…♡`,
    );
    await era.printAndWait(
      `如果被别人知道 ${me.name} 的担当是个喜欢露出自慰的变态的话，${me.name} 就一定会进监狱了吧。`,
    );
    await era.printAndWait(
      `${
        me.name
      } 拉紧狗链轻轻拉扯着项圈，而${kita.get_teen_sex_title()}则在发出一声闷哼后因为脖颈上的束缚而羞红了脸蛋，用脸蛋磨蹭着 ${
        me.name
      } 的鞋子欢快地摇起了尾巴。`,
    );
    await era.printAndWait(
      `没办法了呢……一边如此想着，${me.name} 牵着 ${kita.name} 走进了一旁的房间，`,
    );
    await era.printAndWait(
      `而后，一阵难以想象是 ${kita.name} 发出的放荡浪叫和拍打肉体的声音，毫不遮掩地从男厕所里喷溅出来。`,
    );
    begin_and_init_ero(0, 68);
    const part = kita.sex_code - 1 ? '阴道' : '阴茎';
    era.set('palam:68:受虐快感', era.get('tcvar:68:受虐快感上限'));
    era.set(`palam:68:${part}快感`, era.get(`tcvar:68:${part}快感上限`));
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(68, part_enum.anal),
      false,
    );
    end_ero_and_train(false);
    era.println();
    sys_like_chara(68, 0, 5, true, 5);
    await add_juel_out_of_train(
      68,
      ['受虐快感', '顺从', '羞耻'],
      [100, 100, 50],
    );
    wait_flag = true;
  } else if (edu_weeks === 95 + 48) {
    await print_event_name(`与 ${kita.name} 的酒吧生活`, kita);
    await era.printAndWait(`和 ${me.name} 的担当约好了，要在某处酒吧里见面。`);
    await era.printAndWait(
      `在同 ${kita.name} 共度了三年的时光后，${me.name}们 终于迎来了终局，或许这个月就会是和${kita.sex}共度的时光了吧。`,
    );
    await era.printAndWait(
      `带着这样忧伤的想法，${me.name} 推开地下酒吧挂着黑猫门牌的门走入其中。`,
    );
    await kita.say_and_wait(
      `啊，训练员${me.get_adult_sex_title()}……欢……欢迎光临～`,
    );
    await era.printAndWait(
      `推开门，空无一人的酒吧里，只有穿着校服的${kita.name}单独坐在吧台前。`,
    );
    await era.printAndWait(
      `${kita.get_teen_sex_title()}来回摇晃着空荡荡的酒杯，脸颊微微有些泛红，身旁却只是放着一瓶启封的汽水。`,
    );
    await kita.say_and_wait(
      `那个……哈哈……这间酒吧是妈妈的熟人在圣诞节要回老家，正好想找个安静的地方就借来了。`,
    );
    await kita.say_and_wait(
      `所以……酒水什么的是没有的哦，训练员${me.get_adult_sex_title()}～啊哈哈哈～`,
    );
    era.println();
    era.printButton(`「和小北在一起肯定不会喝酒啦……」`, 1);
    await era.input();
    await kita.say_and_wait(`说的是呢……`);
    await era.printAndWait(
      `坐在靠窗的位置用高脚杯喝着汽水，小北望着窗外寂寥的街景，看起来若有所思。`,
    );
    await era.printAndWait(
      `那黑色的马耳贴在冰凉的玻璃上，一下一下地轻轻拍打着……`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，喜欢这种安静的感觉么？`,
    );
    era.println();
    era.printButton(`「安静？」`, 1);
    await era.input();
    await kita.say_and_wait(
      `嗯，敲打着窗户的雪花，寂寥无人的街道，只有隐隐约约的风声。`,
    );
    await kita.say_and_wait(`这种感觉，小北我还挺期待的呢……`);
    await era.printAndWait(
      `一向活泼的 ${kita.name} 居然会喜欢这样的景象，有些意外呢。`,
    );
    await era.printAndWait(
      `${me.name} 尝试着和 ${kita.name} 一起靠在玻璃上，享受着圣诞夜的寂静和冰冷。`,
    );
    await era.printAndWait(`作为最后的几天，也不错呢。`);
    era.println();
    wait_flag = sys_like_chara(68, 0, 50) || wait_flag;
  } else if (edu_weeks === 144) {
    const love = era.get('love:68'),
      relation = era.get('relation:68:0');
    if (love === 100 && relation > 375) {
      await print_event_name('独属于你的黑色夕阳', kita);
      await era.printAndWait(
        `三年时光匆匆而过，${me.name} 和 ${kita.name} 迎来了即将分别的日子。`,
      );
      await kita.say_and_wait(
        `还有几天就要和您分开了呢，感觉，心里有点落寞啊。`,
      );
      await kita.say_and_wait(
        `毕竟训练员${me.get_adult_sex_title()}，过几个月就要迎来新的孩子，成为那孩子专属的训练员了吧。`,
      );
      await kita.say_and_wait(`嘿嘿，稍微有点讨厌啊……`);
      await era.printAndWait(
        `抱着自己放在训练员室里的书本和用品，${kita.get_teen_sex_title()}露出了有些落寞的表情。`,
      );
      await era.printAndWait(
        `并肩走在黄昏时分的寂静里，走廊里回荡着小北哒哒哒的脚步声，在空无一人的教室里回荡。`,
      );
      await era.printAndWait(
        `明明是不知道并肩走多少次的道路，今天却变得格外漫长。`,
      );
      await era.printAndWait(`毕竟，${kita.name} 已经预定了要回老家去了。`);
      await era.printAndWait(
        `虽然只是向年事已高的父亲报平安，并不是一定就不会回来，但是即使回到了特雷森，${kita.get_teen_sex_title()}也不一定会继续和你共事了。`,
      );
      await kita.say_and_wait(`我，喜欢训练员${me.get_adult_sex_title()}哦。`);
      await era.printAndWait(
        `转过拐角，${kita.get_teen_sex_title()}轻描淡写的说。`,
      );
      await era.printAndWait(
        `夕阳映照在小北孩子气的脸蛋上，将那温暖的笑容染上了和以往不同的颜色。`,
      );
      await kita.say_and_wait(
        `不如说最喜欢训练员${me.get_adult_sex_title()}你了，想要成为训练员${me.get_adult_sex_title()}的伴侣一直在一起呢。`,
      );
      await era.printAndWait(
        `这时，${me.name} 注意到小北脸上的绯红从不是温暖夕阳的映照，${kita.sex}那仔细打理过的黑发柔滑地垂下，甚至能够闻到些许香水的味道。`,
      );
      await era.printAndWait(
        `${kita.get_teen_sex_title()}露出羞涩的神情，那胆怯的声音一反往常的活泼，带着试探和讨好的声音，${
          kita.name
        } 问 ${me.name} 道：`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}，能一直喜欢我么？`,
      );
      await era.printAndWait(`哒，哒，哒。`);
      await era.printAndWait(
        `寂静的走廊里只听得到两人的脚步声，看来那泛着红晕的夕阳还没有消退的样子。`,
      );
      era.println();
      era.printButton('「小北」', 1);
      await era.input();
      await kita.say_and_wait(`是。`);
      era.println();
      era.printButton('「我也，一直以来都最喜欢了。」', 1);
      await era.input();
      await era.printAndWait(
        `于是，那脚步声戛然而止，而夕阳的心跳却愈发的怦怦跃动起来。`,
      );
    } else if (love >= 75 && relation > 225) {
      await print_event_name(`${kita.name} 的小小祭典`, kita);
      await era.printAndWait(
        `小${kita.get_uma_sex_title()}A「呜哇！小北${
          kita.sex_code - 1 ? '姐姐' : '哥哥'
        }来啦！快跑！」`,
      );
      await kita.say_and_wait(`站住站住！`);
      await era.printAndWait(
        `在小学的草操场上，${
          kita.name
        } 嘻嘻哈哈的的追着年幼的${kita.get_uma_sex_title()}跑来跑去打闹在一起。`,
      );
      await era.printAndWait(
        `这是以地方学校为目的开展的公益比赛座谈会，在 ${kita.name} 结束赛程之后，由特雷森推动的公益计划。`,
      );
      await era.printAndWait(
        `不仅会向偏远地区提供经费，同时也会努力发掘想要成为训练员和赛${kita.get_uma_sex_title()}的人。`,
      );
      await era.printAndWait(
        `而作为形象大使，去考察地方学园的人选，则是北部玄驹。`,
      );
      await era.printAndWait(
        `从籍籍无名到横空出世，这三年的时候可谓是北部剧场也不为过，而在民间积攒的人气则让小北有了能让他人避让三分的权利。`,
      );
      await era.printAndWait(
        `而除了工作之外，小北最喜欢的就是和孩子们开心的追逐奔跑着。`,
      );
      await era.printAndWait(
        `小北是很厉害的${kita.get_uma_sex_title()}，所以慢的孩子也会高兴，快的孩子也很高兴，老师们也能闲下来休息一下。`,
      );
      await kita.say_and_wait(
        `呼哇哇！嘿嘿～真是一群可爱的孩子们呢，训练员${me.get_adult_sex_title()}。`,
      );
      await era.printAndWait(
        `用毛巾擦着额头上的汗水，${kita.name} 笑眯眯地带着孩子们凑了过来。`,
      );
      await era.printAndWait(
        `似乎是看到外人有些兴奋，孩子们七嘴八舌地说着各自的话。`,
      );
      await era.printAndWait(
        `小马娘B「那个那个！训练员${me.get_adult_sex_title()}和小北${
          kita.sex_code - 1 ? '姐姐' : '哥哥'
        }在交往么！」`,
      );
      await era.printAndWait(`直到有个孩子这么说了为止……`);
      await kita.say_and_wait(`诶！？那个，这个……诶，在交往么？。`);
      await kita.say_and_wait(`这个，啊哈哈……怎么说呢……不太想说出来呢……`);
      await kita.say_and_wait(
        `但是，我和训练员${me.get_adult_sex_title()}每天都在一起，所以也算是交往？`,
      );
      await era.printAndWait(
        `轻轻抚摸着孩子们的脑袋，${kita.name} 露出了有些尴尬的微笑。`,
      );
      await era.printAndWait(
        `有些问题可不能回答啊……带着这样的想法，${me.name} 开始说起小北训练时候的故事，开始吸引孩子们的注意力了。`,
      );
    }
  }
  wait_flag && (await era.waitAnyKey());
};
