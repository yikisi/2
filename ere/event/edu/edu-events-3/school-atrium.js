const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const Edu3UntilRaceEnd = require('#/event/edu/edu-events-3/race-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu3UntilRaceEnd {
  async school_atrium(teio, me, callname, hook, extra_flag, event_object) {
    const love = era.get('love:3'),
      event_arg = event_object?.arg,
      event_marks = new TeioEduMarks();
    let wait_flag = false;
    if (event_arg === 95 + 20 && era.get('status:3:腿伤') > 0) {
      await print_event_name('回归', teio);
      await teio.say_and_wait('哈啊……');
      era.println();

      await teio.print_and_wait(
        `训练完后，${me.name} 临时被校方工作人员叫走了，帝王便一个人走回宿舍。${teio.sex}穿过校园的中庭时，不禁停下了脚步`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.get_uma_sex_title()}的眼神捕捉到了角落里的一节空心树干——`,
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
        `${teio.get_teen_sex_title()}情不自禁地大吼出声，眼前的幻象随之远去，但声音未停。脑海中，又有文字激昂。`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `（？）「不管别人说什么，这几年来的经历都是你的财富，也有不少人因为看过 ${me.name} 的奔跑而改变了人生。${me.name} 早就已经成为传说了！」`,
      ]);
      era.println();

      await teio.say_and_wait(`你在说些什么啊！！`);
      era.println();

      await teio.print_and_wait(
        `${teio.get_teen_sex_title()}握紧双拳，浑身发抖，奋力喊道`,
      );
      era.println();

      await teio.say_and_wait(
        '我从来没有成为过什么传说！我从来没有做完过任何一件事！我自己留下的遗憾根本数不完！说到底，不管是真正的我还是训练员，根本不可能讲出这种话！你只不过是尴尬和悲哀的自怜阴影！我不会接受这种安慰自己的借口的！说到底就是对复出之后无法出成绩的恐惧吧！我才不管！我就是想跑下去！我就是要登上殿堂，我会在其中得到更多的兴奋与快乐！',
      );
      era.println();

      await me.say_and_wait('帝王？');
      era.println();

      await teio.say_and_wait('你怎么还——嗯？');
      era.println();

      era.printButton('「呃，嗯，我刚刚回来，什么都没看见。」', 1);
      await era.input();

      await teio.say_and_wait('……哼。');
      era.println();

      await era.printAndWait(`一抹笑容绽放于 ${me.name} 担当的嘴角处。`);
      era.println();

      await teio.say_and_wait(
        `就算知道了，也无所谓吧。训练员，我刚刚说的那些话，可都是认真的。我们——继续前进吧。`,
      );
      era.println();

      era.printButton('「与重获新生的无敌帝王小姐同行，不胜荣幸。」', 1);
      await era.input();

      wait_flag = sys_like_chara(3, 0, 10, true, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(3, [0, 0, 0, 20, 15], 0, [150]) ||
        wait_flag;
      wait_flag && (await era.waitAnyKey());
      return false;
    } else if (event_arg === 95 + 25 && event_marks.spring_teio === 1) {
      if (era.get('flag:当前互动角色') !== 3) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('春之帝王', teio);
      await me.say_and_wait('真好啊……');
      era.println();
      await era.printAndWait(
        `训练刚刚结束，${
          me.name
        } 和担当一起慢悠悠地散步在回宿舍的路上。${teio.get_uma_sex_title()}${teio.get_adult_sex_title()}此时正甩了甩头，激烈运动导致头发散下，几滴汗珠飞射出来，隐约能看见全身蒸腾的热气。`,
      );
      await teio.say_and_wait('嗯？训练员？你说什么？');
      era.println();

      await era.printAndWait(
        `${me.name} 猛然发现自己一不小心看${teio.sex}看入迷了还说出了心里话，连忙找补。`,
      );
      era.println();

      era.printButton('「我是说，你最近的成绩真的太出色了。」', 1);
      await era.input();

      await teio.say_and_wait('嗯～哼？真的只是这样？');
      era.println();

      await era.printAndWait(
        `${me.name} 转过头去，不予回答，顺带悄悄地立起了衣领遮住充血的脸庞。`,
      );
      era.println();

      await era.printAndWait(
        `小${teio.get_uma_sex_title()}拿眼睛瞟了 ${
          me.name
        } 一眼，抿嘴笑了，然后又突然面色转沉。`,
      );
      era.println();

      await teio.say_and_wait('训练员……我们的旅途，还没有结束啊。');
      era.println();

      await era.printAndWait(
        `突如其来的问话让 ${me.name} 不禁回头，本想随便开开玩笑回复，但看到${teio.sex}脸上认真的神情，又哑然了。`,
      );
      await teio.say_and_wait(
        '我的过去的成绩，现在的荣耀，将来的目标，都会与你共享。所以，让我们一起，继续吧。',
      );
      await era.printAndWait(
        `${teio.get_teen_sex_title()}一丝不苟地，向 ${
          me.name
        } 吐露出了这段心声。`,
      );
      era.println();

      era.printButton('「当然」', 1);
      await era.input();

      await era.printAndWait(`${me.get_couple_title()} 一同，向目标位置走去——`);
      wait_flag = sys_like_chara(3, 0, 10, true, 1) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(3, [35, 0, 35, 0, 0], 0, [350]) ||
        wait_flag;
    } else if (event_arg === 47 + 5) {
      await print_event_name('所以，衣服是怎样啦！', teio);
      await era.printAndWait(
        '又是一个晴朗无云的日子——特雷森这边的天气可真好啊。',
      );
      await era.printAndWait(`${me.name} 走在校园的中庭里，享受着早春的气候。`);
      await era.printAndWait(
        `不过，今天并不是像那时一样只有 ${me.name} 一个人在这里散步。`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('总觉得气氛有点尴尬。');
      await era.printAndWait(
        `${
          me.name
        } 不由得用余光瞥了瞥旁边的小${teio.get_uma_sex_title()}，裸露在外的白色肌肤，私服下藏着粉色肩带的内衣……不，实在太刺激了，再看下去恐怕有伤师德。`,
      );
      await era.printAndWait(
        `何况${teio.sex}这身还是如同彩色沙滩服一般的童装，更是让 ${me.name} 平添了一番罪恶感。`,
      );
      await era.printAndWait(
        `如此可爱的${teio.get_uma_sex_title()}，是与 ${
          me.name
        } 签下担当契约的人……`,
      );
      era.println();

      await teio.say_and_wait('训练员？');
      era.println();

      era.printButton('「什么？」', 1);
      await era.input();
      await era.printAndWait(
        `元气的${teio.get_teen_sex_title()}声音响起，${
          me.name
        } 迅速清空大脑放平心态，试图用最平常的样子回复。`,
      );
      await era.printAndWait('并且把目光直直，正正地放在前方道路上。');
      era.println();

      await teio.say_and_wait('你……对我的私服有什么想法吗？');
      era.println();

      era.print(`${me.name} 你马上接道——`);
      era.printButton('「嗯……蛮孩子气的」（体力+150）', 1);
      era.printButton('「可爱……」（速度+20）', 2);
      era.printButton('「很帅气啊，帝王！」（力量+20）', 3);
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('唔嗯～我才不是小孩了！');
        era.println();

        await era.printAndWait(
          `${teio.sex}嘟起了嘴，仿佛有些闹别扭，不过更显得可爱了。`,
        );
        await era.printAndWait(` ${me.name} 与${teio.sex}默默地走了一段时间。`);
        era.println();
        wait_flag =
          get_attr_and_print_in_event(3, undefined, 0, [150]) || wait_flag;
      } else if (ret === 2) {
        await teio.say_and_wait('欸！');
        era.println();

        await era.printAndWait(
          ` ${me.name} 的担当叮咛一声，脸仿佛红了起来，${me.name} 顿时也感觉不好意思再看${teio.sex}，两人就这样默默的走了下去。`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(3, [20], 0) || wait_flag;
      } else {
        await teio.say_and_wait(
          `那还用说！${me.name} 果然明白帝王大人的帅气！`,
        );
        await era.printAndWait(
          `${teio.sex}看起来好像很开心。${me.name} 不禁也笑起来，跟${teio.sex}一起走了一会。`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(3, [0, 0, 20], 0) || wait_flag;
      }
    } else if (event_arg === 'the_days_together') {
      await print_event_name('与你一同前行的日子', teio);

      await era.printAndWait(
        `学校的中心，有一处喷泉，上端坐着三女神的雕塑。每天，有无数${teio.get_uma_sex_title()}或人类在这里默默祈祷，许下愿望。`,
      );
      await era.printAndWait(
        `${me.name} 盯着上面一张有些神似自己担当的脸，手指轻触口袋里的钱包，要不要许愿呢……`,
      );
      era.println();

      await teio.say_and_wait('训练员！');
      era.println();

      await era.printAndWait(
        `${me.name} 回过头，向担当招手示意，${teio.sex}却蹦蹦跳跳地前来，旁若无人地拉起了 ${me.name} 的手。`,
      );
      await era.printAndWait(
        `${me.name} 看着${teio.sex}的脸，不得不说……真的有点像。`,
      );
      era.println();

      await teio.say_and_wait('嗯哼～和我在一起，居然在想着别的孩子？');
      era.println();

      await era.printAndWait(
        `——不是孩子啊！${me.name} 本想这么说，看到担当的表情，决定还是识相地闭上嘴巴。`,
      );
      era.println();

      await teio.say_and_wait(
        `哼……那就小小惩罚一下 ${me.name} 这花心老师，${me.name} 刚刚是想许愿吧，许什么愿？`,
      );
      era.println();

      era.printButton('「今后也请多指教」（好感+10，全属性+5）', 1);
      if (love > 90) {
        era.printButton(
          '「我想，不，我会永远陪伴在你身边」（爱慕+1，干劲上升，随机两项属性+10）',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('根本不是愿望吗……这什么啊。');
        era.println();

        await era.printAndWait(`但 ${me.name} 确实没想好许愿的事。`);
        era.println();

        wait_flag = sys_like_chara(3, 0, 10) || wait_flag;
        wait_flag =
          get_attr_and_print_in_event(3, new Array(5).fill(5), 0) || wait_flag;
      } else {
        await teio.say_and_wait('……原谅你了，下不为例。');
        era.println();

        await era.printAndWait(
          `脸红到耳根的小${teio.get_uma_sex_title()}放开了 ${me.name} 的手。`,
        );
        await era.printAndWait(
          `一段时间后，等到 ${teio.name} 离去了，${me.name} 回到这里，咧嘴一笑，把钱包里的所有硬币都倒进池中，双手合十，首次认真地许了个愿。`,
        );
        era.println();

        const attr_change = new Array(5).fill(0);
        gacha(Object.values(attr_enum), 2).forEach(
          (e) => (attr_change[e] += 10),
        );
        wait_flag = sys_love_uma(3, 1) || wait_flag;
        wait_flag = sys_change_motivation(3, 1) || wait_flag;
        wait_flag = get_attr_and_print_in_event(3, attr_change, 0) || wait_flag;
      }
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};
