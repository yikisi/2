const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {number} relation
 * @param {number} love
 */
module.exports = async (tachyon, me, callname, relation, love) => {
  if (love >= 75) {
    await tachyon.say_and_wait('……没错，就是现在');
    await tachyon.say_and_wait('转！');
    era.println();
    await era.printAndWait([
      '相信着 ',
      tachyon.get_colored_name(),
      ' 的 ',
      me.get_colored_name(),
      ' 听见',
      tachyon.sex,
      '的话立马转动了滚轮',
    ]);
    await say_by_passer_by_and_wait('店主', '特等奖！温泉旅行券！');
    era.println();
    await era.printAndWait('商店街的大叔用力摇晃着铃铛');
    await era.printAndWait('宣布今天的最大奖已被抽出');
    era.println();
    await tachyon.say_and_wait('哦呀……温泉旅行券啊，看起来不错呢');
    era.println();
    await era.printAndWait('期限……到明年四月');
    await era.printAndWait('这样的话，等到URA总决赛结束正好是时间');
    era.printButton('「速子，要一起去吗？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '那当然，不如说除了我，还有什么其他人会跟你一起去吗？',
    );
    era.println();
    await era.printAndWait('真是不留情的话啊');
    era.println();
    await tachyon.say_and_wait(
      '开玩笑的，这张温泉券，就当作我给你三年以来的奖励吧……在突破了一切困难伤病之后迎来的……我们的happy ending',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 贴在 ',
      me.get_colored_name(),
      ' 耳边说道',
    ]);
    await era.printAndWait([
      '让人难以想象会是 ',
      tachyon.get_colored_name(),
      ' 说出的这些话使 ',
      me.get_colored_name(),
      ' 不由得惊讶的想抬起眼……',
    ]);
    era.println();
    await tachyon.say_and_wait('不要动');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 依旧贴在 ',
      me.get_colored_name(),
      ' 身旁，和 ',
      me.get_colored_name(),
      ' 一起，两人站在抽奖箱前亲昵的聊着',
    ]);
    await era.printAndWait('奇怪的是……为什么不肯离开抽奖箱……？');
    era.println();
    await tachyon.say_and_wait(['好了，我们走吧，', callname]);
    era.println();
    await era.printAndWait('欸');
    await era.printAndWait([
      '一直依偎在身旁的热度忽然消失，',
      me.get_colored_name(),
      ' 连忙跟上了 ',
      tachyon.get_colored_name(),
      ' 离开了商店街',
    ]);
    await era.printAndWait([
      '只看见走出商店街的 ',
      tachyon.get_colored_name(),
      ' 从左眼里取出了什么',
    ]);
    era.println();
    await tachyon.say_and_wait('呼，总算好点了');
    era.println();
    await era.printAndWait([
      '…………？',
      tachyon.get_colored_name(),
      ' 的眼睛……？',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 仔细盯着 ',
      tachyon.get_colored_name(),
      '，这才发现原本',
      tachyon.sex,
      '的红色渐层双眼，不知为何有一边看上去有那么一点点淡',
    ]);
    era.println();
    await me.say_and_wait('……美瞳？');
    era.println();
    await era.printAndWait([
      '难以想象 ',
      tachyon.get_colored_name(),
      ' 是会带这种东西的人',
    ]);
    era.println();
    await tachyon.say_and_wait('呵呵……这个啊，是神宫君和我合作研发的东西哦，');
    await tachyon.say_and_wait(
      '首先呢，我的药剂可以让这种美瞳具有透视非生物的能力，',
    );
    await tachyon.say_and_wait(
      '而神宫君可以根据看见的东西来分析其运动轨迹，本来是用在分析比赛跑者上',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 霹雳啪啦说了许多，让 ',
      me.get_colored_name(),
      ' 有些晕乎',
    ]);
    await era.printAndWait('不过……');

    era.printButton('「难道说……这就是透视眼镜？」', 1);
    await era.input();
    await tachyon.say_and_wait('嘛，差不多……不过，因为一些小瑕疵，');
    await tachyon.say_and_wait(
      '比如要是戴着这个的话，在习惯眼前改变的视线前可以说一步都走不了，',
    );
    await tachyon.say_and_wait(
      '随便乱用的话甚至可能会因过多的资讯量而使大脑陷入昏迷，',
    );
    await tachyon.say_and_wait(
      '所以我跟神宫君是打算把这东西封印的，呵呵，没想到居然能够在这里派上用场……',
    );
    era.println();
    await era.printAndWait('派上用场……？');
    await era.printAndWait('透视+轨迹分析………');
    await era.printAndWait('不能动所以站在福抽的抽奖箱面前……');
    await me.say_and_wait('啊');
    era.printButton('「刚刚的福抽！」', 1);
    era.printButton('「速子你……」', 2);
    await era.input();
    await tachyon.say_and_wait('嘘');
    era.println();
    await era.printAndWait([tachyon.sex, '把手放在唇前，比了个安静的手势']);
    era.println();
    await tachyon.say_and_wait('我不是说过吗？这是我送给你的礼物');
    era.println();
    await tachyon.say_and_wait('不是神明，也不是什么冥冥之中的运气');
    await tachyon.say_and_wait([
      '是我，',
      tachyon.get_colored_name(),
      ' 给我的爱人送上的新年贺礼',
    ]);
    await tachyon.say_and_wait([
      '新年快乐，',
      me.get_colored_actual_name(),
      ' 君',
    ]);
    era.println();
    await era.printAndWait(
      '以前提到新年，可能脑袋里会浮现出许许多多难忘的回忆',
    );
    await era.printAndWait(
      '诸如围炉、全家团圆、年夜饭或者电视上无聊的新春节目',
    );
    await era.printAndWait(
      '但从今天起，提起新年，脑袋里会浮现的第一印象便只有一个了',
    );
    await era.printAndWait([
      '在逐渐亮起的路灯下，如偷腥的小猫一般露出计谋得逞的微笑的',
      tachyon.sex,
    ]);
    era.println();
    await era.printAndWait('以及那个吻的滋味');
    await era.printAndWait([
      '那个吻的味道是甜蜜的滋味，比 ',
      tachyon.get_colored_name(),
      ' 的红茶还甜',
    ]);
    begin_and_init_ero(0, 32);
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    end_ero_and_train();
  } else {
    await say_by_passer_by_and_wait('店主', '特等奖！温泉旅行券！');
    era.println();
    await era.printAndWait('商店街的大叔用力摇晃着铃铛');
    await era.printAndWait('宣布今天的最大奖已被抽出');
    era.println();
    await era.printAndWait('抽到特等奖了！');
    await era.printAndWait('居然是双人的温泉旅行券');
    era.println();
    await tachyon.say_and_wait('哦呀……温泉旅行券啊，看起来不错呢');
    era.println();
    await era.printAndWait('期限……到明年四月');
    await era.printAndWait('这样的话，等到URA总决赛结束正好是时间');
    era.println();
    if (love >= 50) {
      era.printButton('「速子，一起去吧！」', 1);
      await era.input();
      await tachyon.say_and_wait('呼姆……一起去吗？');
      await tachyon.say_and_wait([
        callname,
        '，你是在理解一般『一起去温泉旅行』的人都是什么关系之后，对我提出的邀请吗？',
      ]);
      era.println();
      await era.printAndWait('一般一起去温泉旅行的人……');
      era.printButton('夫妻', 1);
      era.printButton('情侣', 2);
      era.printButton(
        `「……一般的${tachyon.get_uma_sex_title()}和训练员不是本来就会去吗？」`,
        3,
      );
      switch (await era.input()) {
        case 1:
          await era.printAndWait('一般来讲……新婚夫妻吧');
          await era.printAndWait('新婚旅行什么的很常去温泉旅行不是吗');
          await me.say_and_wait('……我和速子，新婚夫妻……？', true);
          break;
        case 2:
          await era.printAndWait('大概……是情侣吧');
          await era.printAndWait(
            '如果不是这么亲密的关系，一般也不会只有两人一起去温泉旅行吧',
          );
          await me.say_and_wait('我和速子……情侣吗？', true);
          break;
        case 3:
          await era.printAndWait([
            '……不，一般',
            tachyon.get_uma_sex_title(),
            '和训练员不是本来就很常去吗？',
          ]);
          await era.printAndWait([
            '每年四月都有很多前辈会和自己的负责',
            tachyon.get_uma_sex_title(),
            '去……而且似乎都是在商店街抽到的，真不可思议',
          ]);
          await era.printAndWait(
            '不过……果然只有两人去温泉旅行，还是会有些奇怪吧……？',
          );
          era.println();
          await tachyon.say_and_wait([
            '那么，你又希望和我在那时候变成什么关系呢？',
            callname,
            '……明年四月啊，呵呵，令人期待',
          ]);
          era.println();
          await me.say_and_wait('明年四月，自己与速子的关系吗……', true);
      }
    } else if (relation >= 225) {
      await tachyon.say_and_wait(
        '嗯……一起去吗？做为实验场所而言，确实是个不错的地方',
      );
      await tachyon.say_and_wait(
        '温泉旅馆就是那个吧，无论发生什么意外事件哪怕死了人都是很正常的地方',
      );
      await tachyon.say_and_wait('这样的话我做点无害的小实验应该也无伤大雅……');
      era.printButton('「不是的」', 1);
      await era.input();
      await era.printAndWait('不是作为实验或研究的场所');
      await era.printAndWait('而是在三年的两人三脚结束后两人的歇息');
      era.printButton('「无关训练，无关实验，只是纯粹的休息……不行吗？」', 1);
      await era.input();
      await tachyon.say_and_wait('……明年四月吗');
      await tachyon.say_and_wait('呵呵，那就当成对豚鼠的犒劳吧');
      await tachyon.say_and_wait(
        '明年四月，等到我们的梦想告一段落……要是到那时候，你依然跟在我的身旁的话，就一起去吧',
      );
      era.printButton('「嗯！」', 1);
      await era.input();
      await tachyon.say_and_wait('不过，既然给予了奖励……');
      await tachyon.say_and_wait('那么剩下的一年，你也要好好加油才行啊，');
      await tachyon.say_and_wait([
        '乖乖接受实验，每天给我做饭，还有 ',
        sys_get_colored_callname(32, 25),
        ' 想逃跑的时候要把',
        tachyon.sex,
        '抓回来给我实验……',
      ]);
      era.println();
      await era.printAndWait('等一下等一下！最后那个明显做不到吧！');
      era.println();
      await era.printAndWait([
        '在嬉笑中，',
        me.get_couple_title(),
        ' 回到了特雷森学园',
      ]);
      await era.printAndWait('明年四月啊……真令人期待');
    } else {
      await era.printAndWait([
        '不过……',
        tachyon.get_colored_name(),
        ' 会愿意和自己去吗？',
      ]);
      era.println();
      await tachyon.say_and_wait('URA总决赛结束温泉旅行吗……听起来不错呢');
      era.println();
      await era.printAndWait('哦？居然这么轻松就答应了吗？');
      await era.printAndWait('还以为会嫌麻烦拒绝呢');
      era.println();
      await tachyon.say_and_wait(
        '温泉旅馆就是那个吧，无论发生什么意外事件哪怕死了人都是很正常的地方，这样的话我做点无害的小实验应该也无伤大雅……',
      );
      era.println();
      await era.printAndWait('…………要不，现在把券还回去吧？');
    }
  }
};
