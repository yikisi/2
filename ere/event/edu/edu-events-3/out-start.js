const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 3) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg,
    teio = get_chara_talk(3),
    me = get_chara_talk(0);
  let wait_flag = false;
  if (event_arg === 'dance_or_kongfu') {
    await print_event_name('舞蹈……武道？这样能训练帝王舞步吗？', teio);

    await era.printAndWait(
      `木制的硬地板打上蜡，在这可以映上人影的平面上，一位${teio.get_uma_sex_title()}正穿着道服练习着抬腿和发力。`,
    );
    era.println();

    await me.say_and_wait('停，歇一下吧，感觉差不多了。');
    era.println();

    await era.printAndWait(
      `${me.name} 把一瓶自调的，比例刚好的生理盐水拧开盖子递给${teio.sex}。${teio.sex}接过，小口小口，按照一定速度吞咽下去。`,
    );
    era.println();

    await me.say_and_wait('啊……居然比想象中的有成果', true);
    era.println();

    await era.printAndWait(
      `${me.name} 家的担当不知道看了什么作品，突然跟 ${me.name} 说要试试练武，把功夫的技巧融会贯通到跑步上，特别是练习下盘的步法，希望能借此精进自己的帝王舞步。`,
    );
    era.println();

    await era.printAndWait(
      `${me.name} 拗不过${teio.sex}，只好让${teio.sex}试试，没想到还出乎意料地有成效。`,
    );
    era.println();

    await teio.say_and_wait('训练员，怎么说？');
    era.println();

    await era.printAndWait(`${me.name} 看着笑嘻嘻的担当，如此回复到——`);
    era.printButton(
      '「我觉得应该先哈——地这样，然后侂阿——」（力量&根性+20，技能点数+15）',
      1,
    );
    era.printButton(
      '「舞就是武……就是修炼以臻极境！」（速度+30，技能点数+15，体力+200）',
      2,
    );
    era.printButton(
      `「我想我们可以通过这种训练控制身体的协调性，唔，试一试改变重心位置以造成瞬间的加速度用于冲线刹那？」（速度+15，耐力+20，智力+30，技能点数+30）`,
      3,
    );
    const ret = await era.input();
    if (ret === 1) {
      wait_flag =
        get_attr_and_print_in_event(3, [0, 0, 20, 20, 0], 15) || wait_flag;
    } else if (ret === 2) {
      wait_flag =
        get_attr_and_print_in_event(3, [30], 15, JSON.parse('{"体力":200}')) ||
        wait_flag;
    } else {
      wait_flag =
        get_attr_and_print_in_event(3, [15, 20, 0, 0, 30], 30) || wait_flag;
    }
  } else if (event_arg === 'lets_go_together') {
    await print_event_name('一起走吧！', teio);

    await teio.say_and_wait('蜂蜜🎶～');
    era.println();

    await era.printAndWait(
      `身穿黄色连衣裙的小${teio.get_uma_sex_title()}迎着阳光，在前方蹦蹦跳跳的走着，发散着自己那过剩的活力，不过或许是为了照顾 ${
        me.name
      }，${teio.sex}始终没有离开 ${me.name} 的视野范围。`,
    );
    await era.printAndWait(
      `看着${teio.sex}这么活泼自在，${me.name} 也不由得笑了起来，紧跟上${teio.sex}的步伐。`,
    );
    await era.printAndWait(
      '不一会便到了一处人工溪水旁，看样子不是给一般游客的路——',
    );
    await era.printAndWait(
      `${me.name} 刚这么想着，自家担当的凉鞋已经踏在水里露出的石头上了。${teio.sex}向 ${me.name} 伸出一只手。`,
    );
    era.println();

    await teio.say_and_wait('一起来吧，训练员！');
    await era.printAndWait(`${me.name} 决定——`);
    era.printButton('点头（耐力+15）', 1);
    era.printButton('「不，还是守规矩吧」（根性+15）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${me.name} 也伸出了自己的手，握住了${teio.sex}，一股不符合体型的力道将 ${me.name} 拽了过去，二人踏水而行，愉快的体验。`,
      );
      await era.printAndWait('——如果没有被工作人员发现并教育的话就更好了。');
      era.println();
      wait_flag = get_attr_and_print_in_event(3, [0, 15], 0) || wait_flag;
    } else {
      await era.printAndWait(
        `小${teio.get_uma_sex_title()}看上去有点失望，不过还是退回到 ${
          me.name
        } 身边，与 ${me.name} 并肩同行在正路上走了。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(3, [0, 0, 0, 15], 0) || wait_flag;
    }
    wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
  } else if (event_arg === 'famous_in_famous') {
    await print_event_name('名人中的名人', teio);

    await me.say_and_wait('准备好了吗');
    era.println();

    await teio.say_and_wait('唔嗯。');
    era.println();

    await era.printAndWait(
      '耳朵掖进帽子，尾巴藏进裤子，带上墨镜和口罩，装扮好了。',
    );
    await era.printAndWait(
      `${me.name} 也穿上一件不起眼的衣服，把衣领竖起来随意遮了遮脸，再加一顶鸭舌帽，ok。`,
    );
    await era.printAndWait(
      `${me.get_couple_title()} 就像两个蹩脚的特工一样遮掩住了自己的身份，走上街头。`,
    );
    await era.printAndWait(
      `——完成三冠后，${teio.name} 的知名度越来越高了，当然，${
        me.name
      } 的知名度也随之水涨船高。现在如果不加以遮掩的话，${me.get_couple_title()} 往往出现在人流量大的地方就会被粉丝们团团包围，什么都干不成了。`,
    );
    await era.printAndWait(
      '所以，像这种前置工作，是必须的。但准备往往不能应付所有场面，比如——',
    );
    era.println();

    await era.printAndWait(
      `车轮与柏油路摩擦产生的难听刺啦声冲刺着 ${me.name} 的耳膜。`,
    );
    await era.printAndWait(`${me.name} 转头望去，时间仿佛在一瞬间变得缓慢。`);
    await era.printAndWait(
      '一个小孩摔倒在路上，由于身高原因没有被司机注意到，等他反应过来猛踩刹车之时——悔之晚矣。',
    );
    await era.printAndWait(`但是，${me.name} 身旁突然爆发出一阵劲风。`);
    await era.printAndWait(
      `被 ${
        me.name
      } 护在内测的${teio.get_uma_sex_title()}${teio.get_adult_sex_title()}，瞬间发劲，疾冲出去。`,
    );
    await era.printAndWait('司机仰背，把刹车踩到极限，绝望地闭上双眼。');
    await era.printAndWait('然后奇迹发生了。');
    await era.printAndWait(
      '呼的一声，就如魔术一般，孩子从路上消失，司机有惊无险地过了路。他睁开眼睛，还没反应过来发生了什么。',
    );
    era.println();

    await teio.say_and_wait('以后跟紧自己的家长，不要乱跑哦。');
    era.println();

    await era.printAndWait(
      `小孩「好的……谢谢${teio.get_uma_sex_title()}${
        teio.sex_code - 1 ? '姐姐' : '哥哥'
      }？」`,
    );
    era.println();

    await era.printAndWait(
      `${teio.get_uma_sex_title()}${teio.sex_code - 1 ? '姐姐' : '哥哥'}？！`,
    );
    era.println();

    await era.printAndWait(
      `${teio.name} 这才反应过来自己的帽子被带起的风吹掉了，马尾也在剧烈运动中跑了出来，${me.name} 赶忙帮${teio.sex}伪装，可惜为时已晚。`,
    );
    era.println();

    await era.printAndWait(`路人A「是 ${teio.name}！」`);
    era.println();

    await era.printAndWait('路人B「哇，传说中的帝王大人！」');
    era.println();

    await era.printAndWait(
      `路人C「看到了吗！${teio.sex}刚刚用帝王舞步救了那个孩子！」`,
    );
    era.println();

    await era.printAndWait(
      `众人的呼声一浪高过一浪，不少人闻讯而来向 ${me.get_couple_title()} 这边靠近。${me.get_couple_title()} 顿时觉得有些手脚无措。不过 ${
        me.name
      } 看了一眼帝王，${teio.get_teen_sex_title()}的脸红彤彤的，但也没有明确表示出反感——看来名声总是能让人，或${teio.get_uma_sex_title()}高兴的吧。`,
    );
    await era.printAndWait(
      `然后 ${me.name} 注意到${teio.sex}的耳朵转了一个角度，紧接着 ${me.name} 也听到了一些声音。`,
    );
    era.println();

    await era.printAndWait(
      `${teio.get_uma_sex_title()}A「唔，真帅气啊！我也想成为这样的${teio.get_uma_sex_title()}！」`,
    );
    era.println();

    await era.printAndWait(
      `${teio.get_uma_sex_title()}B「听说${
        teio.sex
      }的训练员很厉害，应该就是现在在${teio.sex}旁边的那个人。」`,
    );
    era.println();

    await era.printAndWait(
      `${teio.get_uma_sex_title()}C「真的吗？我也想找${
        me.sex
      }当我的专属训练员，我现在就要找${me.sex}签订契约！」`,
    );
    era.println();

    await era.printAndWait(
      `${teio.get_uma_sex_title()}D「${me.sex}的样貌和气质也好好啊，真想……」`,
    );
    era.println();

    await era.printAndWait(
      `额……这倒是意料之外的夸赞。不过，${me.name} 也欣然接受。`,
    );
    await era.printAndWait(
      `不过 ${me.name} 已不能去想后半句话的内容了，因为 ${me.name} 看到自家担当以玩味的表情看了过来。`,
    );
    era.println();

    await me.say_and_wait(`糟了……${teio.sex}什么时候学会这种东西的`, true);
    await era.printAndWait(
      `${me.name} 心叫不妙，但是${teio.sex}已经三步并作两步跨到 ${me.name} 身前，一把挽住 ${me.name} 的胳膊，说道`,
    );
    era.println();

    await teio.say_and_wait(
      `抱歉大家，我们还有事先行一步，感谢大家对我们的厚爱和支持，让我们等到赛场上再见吧。训～练～员～跟帝王${teio.get_adult_sex_title()}出发吧？`,
    );
    era.println();

    era.print(`${me.name} 顿感有些哭笑不得，只好回复——`);
    era.printButton('「侍于无敌的帝王大人身旁，是在下的使命」（智力+30）', 1);
    era.printButton(
      `「竭尽所能，我的${teio.get_adult_sex_title()}」（随机三项属性+15）`,
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      wait_flag =
        get_attr_and_print_in_event(3, [0, 0, 0, 0, 30], 10) || wait_flag;
    } else {
      const attr_change = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] += 15));
      wait_flag = get_attr_and_print_in_event(3, attr_change, 10) || wait_flag;
    }
    wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
  } else {
    return false;
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};
