const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const print_event_name = require('#/event/snippets/print-event-name');

const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');
const { race_enum, race_infos } = require('#/data/race/race-const');

const chara_colors = require('#/data/chara-colors')[7];

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,attr_change:number[],pt_change:number,skill_change:number[],motivation_change:number,relation_change:number,love_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const gold_ship = get_chara_talk(7),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:7:育成回合计时');
  if (extra_flag.rank === 1) {
    if (
      extra_flag.race === race_enum.begin_race &&
      edu_weeks < 48 &&
      extra_flag.rank === 1
    ) {
      // 新秀年出道战
      await print_event_name(
        [{ color: chara_colors[1], content: '迷走' }],
        gold_ship,
      );

      await era.printAndWait(
        `与比赛前带给 ${me.name} 的不安相反，${gold_ship.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await era.printAndWait(
        '接下来的比赛想必也值得期待，现在正是专心致志定下前进目标的时机。',
      );
      era.println();

      era.printButton('「辛苦你了！」', 1);
      await era.input();

      await era.printAndWait(
        `${gold_ship.name} 旋即高举双臂，说出了意味不明的大豆咒语，并且表示自己能有今天都是多亏了大豆中的蛋白质。`,
      );
      era.println();
      await gold_ship.say_and_wait(
        '今天也要认真地磨豆浆去了！豆啊豆啊豆啊豆——！',
      );
      era.println();

      extra_flag.attr_change = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
      extra_flag.pt_change = 30;
    } else if (extra_flag.race === race_enum.hope_sta) {
      // 新秀年希望锦标
      await print_event_name(
        [{ color: chara_colors[1], content: '通往伊甸园之路' }],
        gold_ship,
      );

      await era.printAndWait('平安无事地完赛了！');
      era.println();
      await era.printAndWait(
        '按这个样子，看来明年的经典赛上也能看到黄金船活跃的身影呢。',
      );
      era.println();

      era.printButton('「辛苦啦！」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '这下子连烤鳐鱼翅都会嫉妒我的香味呀——过来闻闻？',
      );
      era.println();
      await era.printAndWait(
        `只见大汗淋漓的 ${gold_ship.name} 靠近，让 ${me.name} 去闻自己身上的汗香……`,
      );
      era.println();
      await gold_ship.say_and_wait(
        '怎么样？继称霸陆地之后我连海洋都纳入囊中了呢～',
      );
      era.println();

      extra_flag.relation_change = 0;
      extra_flag.love_change = 0;

      era.printButton('「确实，真香啊……」', 1);
      era.printButton('「但这还是陆上的比赛啊……」', 2);
      if ((await era.input()) === 1) {
        extra_flag.love_change += 5;
      } else {
        extra_flag.relation_change += 10;
      }

      await era.printAndWait(
        `${gold_ship.name} 把 ${me.name} 推到选手通道的墙壁，又背靠在 ${me.name} 身上。${gold_ship.sex}放松身体的力气，就像随时都会倒下一样，（玩家名）只好……`,
      );
      era.println();

      era.printButton('（环抱黄金船的腰支撑）', 1);
      era.printButton('（把肩膀借给黄金船支撑）', 2);
      if ((await era.input()) === 1) {
        extra_flag.love_change += 5;
      } else {
        extra_flag.relation_change += 10;
      }

      await gold_ship.say_and_wait(
        `说起来，闪耀系列赛这样就全部播映完毕了吧。本${
          gold_ship.sex === '她' ? '小姐' : '大爷'
        }炽热的好胜心也无用武之地了啊……`,
      );
      era.println();

      era.printButton(
        '「不不不，你说啥呢。接下来才是重头戏的经典赛啊喂！」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `如此这般，${me.name} 与 ${gold_ship.name} 慢慢地回到休息室——`,
      );
      era.println();

      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else if (extra_flag.race === race_enum.sats_sho) {
      // 经典年皋月赏
      await print_event_name(
        [{ color: chara_colors[1], content: '四月之仇' }],
        gold_ship,
      );
      await gold_ship.say_and_wait('刹吔——！我为五月报仇了！');
      era.println();
      await era.printAndWait(
        `虽然不知道为什么，但${gold_ship.sex}对明明是在四月开办却叫皋月赏的皋月赏很有意见，如是者便和皋月赏扛起来了。`,
      );
      era.println();
      await gold_ship.say_and_wait('明年也要回来皋月赏这里为五月再报一次仇！');
      era.println();

      era.printButton('「皋月赏是经典赛，一人一生只能跑一次的啊！」', 1);
      await era.input();

      await era.printAndWait(
        `但在 ${me.name} 的话传出去前，${gold_ship.name} 已经跑远了。`,
      );
      era.println();

      extra_flag.attr_change = [0, 0, 3, 0, 0];
    } else if (extra_flag.race === race_enum.kiku_sho) {
      const flash = get_chara_talk(37);
      // 经典年菊花赏
      await print_event_name(
        [{ color: chara_colors[1], content: '前往伊甸园的提示' }],
        gold_ship,
      );
      await era.printAndWait(
        `与比赛前带给 ${me.name} 的不安相反，${gold_ship.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await era.printAndWait('以后的比赛也更让人期待了！');
      era.println();
      await gold_ship.say_and_wait('啊～跑完了跑完了～');
      era.println();
      await era.printAndWait(
        `${gold_ship.name} 摆出了脱力的姿态，长叹一口气。`,
      );
      era.println();
      await gold_ship.say_and_wait(
        '好，难得放松下来了，我们以后就去胜者舞台种菜吧。有我的天才之力一定能把胜者舞台变得无比有机的。',
      );
      era.println();

      era.printButton('「你给我等下。」', 1);
      await era.input();

      await era.printAndWait(
        `但是 ${gold_ship.name} 以一往无前的气势对 ${me.name} 充耳不闻，越走越远——`,
      );
      era.println();
      await flash.say_and_wait(`——那真是十分遗憾呢，${gold_ship.name} 同学。`);
      era.println();
      await era.printAndWait(
        `${gold_ship.name} 的耳朵一颤动，回头看向这边。那位认真又一丝不苟的赛马娘「${flash.name}」就挨在选手通道的墙壁上，脸上的表情似笑非笑。`,
      );
      era.println();
      await flash.say_and_wait('看来你的船锚已经变得迟钝了。');
      era.println();

      era.printButton(
        era.get('cflag:37:招募状态') === recruit_flags.yes
          ? `「是 ${sys_get_callname(0, 37)} 啊」`
          : `「啊，是 ${flash.name} 同学？」`,
        1,
      );
      await era.input();

      await flash.say_and_wait('我是受『那位大人』所托，向你传达口谕的。');
      await flash.say_and_wait(
        '但既然你要急流勇退的话，那么看来也没有必要了呢。',
      );
      era.println();

      era.printButton('「请问是什么口谕？」', 1);
      await era.input();

      await flash.say_and_wait('是通向你们正在追寻的『伊甸园』的提示。');
      await gold_ship.say_and_wait('你说什么——！竟然是伊甸园！');
      await gold_ship.say_and_wait('话说回来伊甸园是什么？');
      era.println();

      era.printButton('「反正不是碧桂园吧。」', 1);
      await era.input();

      await flash.say_and_wait('……伊甸园就是所谓，赛马娘的理想乡。');
      era.println();

      await era.printAndWait(
        `${me.name} 听见 ${flash.name} 还小声地嘟哝了一句「啥玩意儿」，但还是当没听见吧。`,
      );
      era.println();

      await gold_ship.say_and_wait('哦哦！就是那个在我梦里出现的东西嘛！');
      await gold_ship.say_and_wait('闪耀，快告诉我吧！');
      era.println();

      await era.printAndWait(`只见 ${flash.name} 轻轻一笑，摇摇头道。`);
      era.println();

      await flash.say_and_wait('看来你愿意从退休种田生活中复出了呢。');
      await flash.say_and_wait('不过这种重要的情报可没有那么容易就能得到。');
      await flash.say_and_wait(
        '要是想知道这个情报的话，『有马纪念』的舞台上与我一战吧？',
      );
      era.println();

      era.printButton('「只要在有马纪念上与你比赛就可以了吗？」', 1);
      await era.input();

      await flash.say_and_wait('没错，君无戏言！');
      era.println();

      await era.printAndWait(
        `虽然还是没能知道『那位大人』到底是谁——但至少阿船对比赛的原动力又回来了！谢谢你，${era.get(
          'callname:0:37',
        )}！`,
      );

      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
      const flash = get_chara_talk(37);
      // 经典年有马纪念
      await print_event_name(
        [{ color: chara_colors[1], content: '收集关键词吧' }],
        gold_ship,
      );
      await era.printAndWait(
        `与比赛前带给 ${me.name} 的不安相反，${gold_ship.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gold_ship.say_and_wait('好！丰收时刻啦！');
      era.println();

      era.printButton('「跑得好啊！」', 1);
      await era.input();

      await era.printAndWait(
        `${flash.name} 从旁走来，为 ${gold_ship.name} 鼓了鼓掌。`,
      );
      era.println();
      await flash.say_and_wait(`不愧是 ${gold_ship.name} 同学。`);
      await gold_ship.say_and_wait('哦！闪耀！');
      await flash.say_and_wait('你还记得我们有一个约定吧。');
      era.println();

      era.printButton('「是碧桂园的事吗？」', 1);
      await era.input();

      await flash.say_and_wait('……是伊甸园。');
      await flash.say_and_wait('这就是那位大人为你准备的线索。');
      era.println();
      await era.printAndWait(
        `${flash.name} 从口袋里掏出还有余温的信件，交给 ${gold_ship.name} 后便离开了，留下${me.name}们独处。`,
      );
      era.println();
      await gold_ship.say_and_wait('我来看看啊！');
      era.println();
      await gold_ship.say_and_wait('『伊甸园就在最深的海底……』');
      await gold_ship.say_and_wait('『要寻获伊甸园就必须要有四条线索……』');
      await gold_ship.say_and_wait(
        '『与众多强敌对战，从她们身上获得线索吧by秘传之书。』',
      );
      era.println();

      era.printButton('「只要不用坐用游戏摇杆操控的迷你潜艇下海就行……」', 1);
      await era.input();

      await gold_ship.say_and_wait('哼哼，真是让人越来越热血沸腾了啊！');
      await gold_ship.say_and_wait(
        '不过闪耀一直在说的『那位大人』到底是什么人呢……？',
      );
      era.println();

      await era.printAndWait(
        `不管怎么说，${gold_ship.name} 对比赛的热情更高涨了，这也未尝不是好事一桩！`,
      );

      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else if (extra_flag.race === race_enum.tenn_spr && edu_weeks >= 96) {
      const flash = get_chara_talk(37);
      // 资深年天皇赏春
      await print_event_name(
        [{ color: chara_colors[1], content: '关键词' }],
        gold_ship,
      );
      await era.printAndWait(
        `与比赛前带给 ${me.name} 的不安相反，${gold_ship.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gold_ship.say_and_wait('嗬！嗬！嗬！嗬！今天我是否也跑得很好呢？');
      await gold_ship.say_and_wait(
        `本 ${
          era.get('cflag:7:性别') - 1 ? '小姐' : '大爷'
        } 的美，就如徒手掰开海胆一样鲜美，嗬！嗬！嗬！嗬！`,
      );
      era.println();
      await era.printAndWait(
        `今天的 ${gold_ship.name} 转换风格，恰似一副ACGN大小姐的刻板印象合订本。`,
      );
      era.println();

      era.printButton('「完全不想闻到那种腥味。」', 1);
      await era.input();

      await flash.say_and_wait(`做得很好呢，${gold_ship.name} 同学。`);
      await flash.say_and_wait('那么，这就是约好的第一条线索，给。');
      await gold_ship.say_and_wait('这么快就跑掉了，跟上次完全不一样。');
      era.println();

      era.printButton('「大概已经腻了吧？看看写了什么。」', 1);
      await era.input();

      await gold_ship.say_and_wait('但上面只有一个字啊，『Shu』。');
      era.println();
      await era.printAndWait(
        `之前 ${flash.name} 给 ${me.name}们 的信上写着要收集前往伊甸园的四条线索，这个Shu字应该就是第一条了。`,
      );
      era.println();
      await gold_ship.say_and_wait(
        '好啊！有趣！那么我们就索性把四条线索全收集完吧！',
      );
      era.println();
      await era.printAndWait('黄金船对比赛的热情越来越高涨了！');

      new GoldShipEduMarks().keywords++;
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else if (extra_flag.race === race_enum.takz_kin && edu_weeks >= 96) {
      const flash = get_chara_talk(37),
        jordan = get_chara_talk(48);
      // 资深年宝塚纪念
      await print_event_name(
        [{ color: chara_colors[1], content: '关键词' }],
        gold_ship,
      );
      await era.printAndWait(
        `与比赛前带给 ${me.name} 的不安相反，${gold_ship.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gold_ship.say_and_wait(
        `哈哈哈！${jordan.name}！我赢了，第三部完！`,
      );
      era.println();
      await era.printAndWait(
        `比赛结束后，${gold_ship.name} 一派得意的模样向亦敌亦友的辣妹．${jordan.name} 炫耀着胜利。`,
      );
      era.println();
      await jordan.say_and_wait('咕——你给我记住！');
      await jordan.say_and_wait('还有，给我记住这个！');
      era.println();
      await era.printAndWait(
        `${jordan.name} 把一张纸条强行塞进 ${gold_ship.name} 手里后，便气鼓鼓地离开了。`,
      );
      era.println();

      era.printButton('「啊，又是伊甸园的线索？」', 1);
      await era.input();

      await gold_ship.say_and_wait('嗯……这次写的是an字。');
      await gold_ship.say_and_wait('完全搞不懂啊——！');
      era.println();
      await era.printAndWait(
        `不只 ${flash.name}，连 ${jordan.name} 都参与其中……在背后牵线的人物到底是何许人也？`,
      );

      const check =
        era.get('cflag:7:育成成绩')[47 + race_infos[race_enum.takz_kin].date];

      if (check && check.race === race_enum.takz_kin && check.rank === 1) {
        await era.printAndWait(
          `就在 ${me.name}们 想离开的时候，一旁的观众向 ${gold_ship.name} 挥手叫嚷。`,
        );
        era.println();
        await era.printAndWait('观众A「黄金船太厉害了！」');
        await era.printAndWait('观众B「恭喜二连霸！」');
        era.println();
        await era.printAndWait(`出于礼貌，${me.name}们 也向观众回敬。`);
        era.println();
        await gold_ship.say_and_wait('谢谢你们嘞！');
        era.println();

        era.printButton('「谢谢支持～」', 1);
        await era.input();

        await era.printAndWait(
          `只见 ${gold_ship.name} 回头看向 ${me.name} 问道。`,
        );
        era.println();
        await gold_ship.say_and_wait(
          `${sys_get_callname(7, 0)}，二连霸是什么意思？`,
        );
        era.println();

        era.printButton('「……你去年就赢过这个比赛了。」', 1);
        await era.input();

        await gold_ship.say_and_wait('尊嘟假嘟？那我岂不是超厉害的？');
        era.println();

        era.printButton('「确实超厉害的。」', 1);
        era.printButton('「厉害到可以名留青史！」', 2);
        const ret = await era.input();
        if (ret === 1) {
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.attr_change[attr_enum.strength] += 15;
          extra_flag.pt_change = 45;
          extra_flag.motivation_change = 1;
        } else if (Math.random() < 0.7) {
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.pt_change = 45;
          extra_flag.motivation_change = 1;
          // TODO 出闸难
          extra_flag.skill_change = [];
        } else {
          await gold_ship.say_and_wait(
            '啊～哈哈～果然本船我就是那种被称赞了就能好好发挥的孩子～',
          );
          await gold_ship.say_and_wait('以后也要记得多宠宠我哦～');
          extra_flag.attr_change = new Array(5).fill(8);
          extra_flag.pt_change = 55;
          extra_flag.motivation_change = 1;
          // TODO 爱娇
          extra_flag.skill_change = [];
        }
      } else {
        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 45;
      }
      new GoldShipEduMarks().keywords++;
    } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks >= 96) {
      const gordan = get_chara_talk(48);
      // 资深年天皇赏秋
      await print_event_name(
        [{ color: chara_colors[1], content: '关键词？' }],
        gold_ship,
      );
      await era.printAndWait(
        `与比赛前带给 ${me.name} 的不安相反，${gold_ship.name} 跑出了一场表现强而有力的比赛！`,
      );
      era.println();
      await gold_ship.say_and_wait('时而欢笑、时而流泪……峰回路转的旅程……');
      await gold_ship.say_and_wait(
        '这段旅程的一切都没有白费！因为我的手里已经掌握了胜利！',
      );
      await gordan.say_and_wait('可恶啊，又是输给你这家伙……！！咕……！！');
      await gordan.say_and_wait('今天只是马有失蹄，下次一定是我赢回来的！');
      await gold_ship.say_and_wait('好啊！我在终点吃着马卡龙等你！');
      await gordan.say_and_wait('哼！');
      era.println();
      await era.printAndWait(
        `就这样，${gordan.name} 又一次气鼓鼓地离开了，不过……`,
      );
      era.println();
      await gold_ship.say_and_wait('哦？她丢下来了什么东西的样子。');
      era.println();
      await era.printAndWait('是一张和之前一样的纸条，看来又是一条新的线索。');
      era.println();

      era.printButton('「真是不坦率的家伙啊。」', 1);
      await era.input();

      await gold_ship.say_and_wait('这次是……『izu』。');
      await gold_ship.say_and_wait('『Shu』、『an』、『izu』……');
      await gold_ship.say_and_wait('我还是没看懂啊——！');
      era.println();
      await era.printAndWait(
        '那位大人这次还是好好地留下了新的线索，能使唤学生做出这种事情，难不成是什么位高权重的人物？',
      );

      new GoldShipEduMarks().keywords++;
      extra_flag.attr_change = [3, 13, 3, 3, 3];
      extra_flag.pt_change = 45;
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
      const flash = get_chara_talk(37);
      const jordan = get_chara_talk(48);
      // 资深年有马纪念
      await print_event_name(
        [{ color: chara_colors[1], content: '最后的关键词' }],
        gold_ship,
      );
      await flash.say_and_wait('实在是……十分遗憾。');
      await jordan.say_and_wait('可恶，还以为今天一定能赢的……！');
      await gold_ship.say_and_wait(
        '谢谢你们，让我的火山爆发之心也达到了最炙热的温度！',
      );
      await flash.say_and_wait(`恭喜你，${gold_ship.name} 同学。`);
      await flash.say_and_wait('这次也是最后一次与你对决了呢。');
      await flash.say_and_wait('请收下这个吧。');
      era.println();
      await era.printAndWait(
        `${flash.name} 拿出来一张纸条，这就是通向伊甸园的最后一个线索了！`,
      );
      era.println();
      await gold_ship.say_and_wait('这是……！！');
      await flash.say_and_wait(
        '这个就是你所追寻的伊甸园……吗？虽然不是很明白，但请务必加油。',
      );
      await gold_ship.say_and_wait('谢谢你！');
      era.println();
      await era.printAndWait(
        `${flash.name}、${jordan.name}，这两位阿船生涯中的宿敌的身影在人群中渐渐远去……`,
      );
      era.println();
      await gold_ship.say_and_wait(`${sys_get_callname(7, 0)}，这就是……！`);
      era.println();

      era.printButton('「这就是最后了！」', 1);
      await era.input();

      await era.printAndWait('来揭晓这个最后的线索吧！');

      new GoldShipEduMarks().keywords++;
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else {
      await print_event_name(
        [{ color: chara_colors[1], content: '竞赛获胜！' }],
        gold_ship,
      );
      await gold_ship.say_and_wait(
        '怎么样啊！训练员有把我的热烈奔跑记在脑海里吗？！',
      );
      era.printButton('「太棒了！」', 1);
      era.printButton('「往更高的目标迈进吧！」', 2);
      if ((await era.input()) === 1) {
        await gold_ship.say_and_wait('果然？那还用说？');
      } else {
        await gold_ship.say_and_wait('好啊——！我要成为地核的中心！！');
      }
    }
  } else {
    throw new Error('unsupported!');
  }
};
