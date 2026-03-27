/**
 * @file 随机小事件
 * @author 牛蛙煲
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');

module.exports = {
  big_sale: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you 玩家
     * @param {string} uma 马娘 or 马郎
     * @param {boolean} disabled 并无担当在育成中，或持有马币少于10
     */
    const f = async (you, uma, disabled) => {
      await printAndWait('出行的路上路过了商店街……');
      await printAndWait('似乎有什么不一样？');
      await you.say_as_passer_by_and_wait(
        '果蔬店老板',
        '瞧一瞧看一看了啊，新鲜的水果蔬菜超低价大甩卖！',
      );
      await printAndWait([you.get_colored_name(), '颇感兴趣地凑过去看了看。']);
      await printAndWait(
        '果蔬店的货摊上摆满了各式水果蔬菜，看样子非常新鲜，品质也非常不错。',
      );
      await you.say_as_passer_by_and_wait(
        '果蔬店老板',
        '我家的水果蔬菜物美价廉，怎么样，要不要买一些呢？',
      );
      printButton(`购买胡萝卜（马币-10，育成中${uma}速度+20）`, 1, {
        disabled,
      });
      printButton(`购买大蒜（马币-10，育成中${uma}耐力+20）`, 2, { disabled });
      printButton(`购买土豆（马币-10，育成中${uma}力量+20）`, 3, { disabled });
      printButton(`购买辣椒（马币-10，育成中${uma}根性+20）`, 4, { disabled });
      printButton(`购买草莓（马币-10，育成中${uma}智力+20）`, 5, { disabled });
      printButton('囊中羞涩，告辞', 6);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的胡萝卜。',
          ]);
          await printAndWait([
            '好不容易把大包胡萝卜带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了象征速度的胡萝卜汉堡肉与胡萝卜汁。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 2:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的大蒜。',
          ]);
          await printAndWait([
            '好不容易把大包大蒜带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了耐力惊人的超大碗大蒜拉面。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的土豆。',
          ]);
          await printAndWait([
            '好不容易把大包土豆带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了充满力量感的土豆泥盖饭。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 4:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的辣椒。',
          ]);
          await printAndWait([
            '把辣椒带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了望之色变的超辣麻婆豆腐。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 5:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的草莓。',
          ]);
          await printAndWait([
            '好不容易把大包草莓带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了一看就很聪明的草莓冰激凌。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 6:
          if (!disabled) {
            await printAndWait([
              you.get_colored_name(),
              '想了想自家担当的饭量，悄悄地溜走了。',
            ]);
          } else {
            await printAndWait(['可惜没有需要用的。']);
            await printAndWait([
              you.get_colored_name(),
              ' 摇了摇头，转身走了。',
            ]);
          }
      }
      return [ret];
    };
    f.title = '商店街大甩卖';
    return f;
  })(),
  justice: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} tokino 骏川缰绳
     * @param {PrintedSpan} call_301 一般角色对骏川缰绳的称呼
     */
    const f = async (you, chara, tokino, call_301) => {
      chara.name = chara.sex_code === 1 ? '怪异的马郎' : '怪异的马娘';
      await printAndWait([
        you.get_colored_name(),
        '走在路上，突然间看到前方有一个正在被',
        chara.uma_sex_title,
        '追逐的训练员。',
      ]);
      await printAndWait([
        '这训练员看样子已经体力不支，随时都有可能会被身后的',
        chara.uma_sex_title,
        '追上。',
      ]);
      await printAndWait([
        '这时，训练员看到了',
        you.get_colored_name(),
        '，仿佛燃起了一丝希望那样向',
        you.get_colored_name(),
        '跑过来。',
      ]);
      await you.say_as_passer_by_and_wait(
        '陌生训练员',
        '拜托了，请帮帮我，我不想回到那个地方……那个地下室……',
      );
      await printAndWait([
        you.get_colored_name(),
        '看了看眼前绝望至极的陌生训练员和正在迅速接近的眼睛有些发红的',
        chara.uma_sex_title,
        '，选择',
      ]);
      printButton('帮助陌生训练员', 1);
      printButton(`帮助${chara.name}`, 2);
      printButton('装作没有看到', 3);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            '虽然不知道发生了什么，但是本着同事之间互帮互助的原则，',
            you.get_colored_name(),
            '有些犹豫地点了点头。',
          ]);
          await chara.say_and_wait(
            '请把我的训练员还给我好吗？我……还有些话要跟训练员说呢……',
          );
          await printAndWait([
            you.get_colored_name(),
            '看着眼前散发着满满危险气息的',
            chara.uma_sex_title,
            '，暗自吞咽了一口唾沫。',
          ]);
          await you.say_and_wait([
            '那个，有什么矛盾可以说出来慢慢解决，不然我可就给',
            call_301,
            '打电话了哦。',
          ]);
          await printAndWait([
            '尽管',
            you.get_colored_name(),
            '也两股战战，但',
            you.get_colored_name(),
            '下意识做出了最正确的选择——把',
            tokino.get_colored_name(),
            '搬了出来。',
          ]);
          await printAndWait([
            '果然，',
            you.get_colored_name(),
            '看到眼前',
            chara.uma_sex_title,
            '变得犹豫起来。',
          ]);
          await chara.say_and_wait(
            '训练员……你逃不掉的，下一次，你可就遇不到这么好的同事了呢……',
          );
          await printAndWait([
            '面前的',
            chara.uma_sex_title,
            '锐利的目光似乎能将',
            you.get_colored_name(),
            '刺穿一样，仿佛是能透过',
            you.get_colored_name(),
            '的身体看到',
            you.get_colored_name(),
            '身后的训练员。',
          ]);
          await printAndWait(['随后，', chara.sex, '竟然直接转身离去了。']);
          await printAndWait([
            you.get_colored_name(),
            '与身后的训练员同时松了口气。',
          ]);
          await you.say_as_passer_by_and_wait(
            '陌生训练员',
            '非常感谢您，这是我的一点点谢礼，请您收下……',
          );
          await printAndWait([
            '陌生的训练员掏出自己的钱包塞进',
            you.get_colored_name(),
            '手里，没等',
            you.get_colored_name(),
            '反应过来就匆匆走远了。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '本来还想问一下发生了什么，但看样子是没机会了。',
          ]);
          println();
          await printAndWait('获得了 100 马币！');
          break;
        case 2:
          await chara.say_and_wait(
            '请把我的训练员还给我好吗？我……还有些话要跟训练员说呢……',
          );
          await printAndWait([
            you.get_colored_name(),
            '看着眼前散发着满满危险气息的',
            chara.uma_sex_title,
            '，实在是提不起忤逆对方的心思。',
          ]);
          await you.say_and_wait('您二位请便，我先走一步了。');
          await printAndWait([
            '说完，',
            you.get_colored_name(),
            '便向旁边悄悄一挪，露出了身后的陌生训练员。',
          ]);
          await printAndWait([
            '举止怪异的',
            chara.uma_sex_title,
            '迅速便抓住了陌生训练员的胳膊，将其有些强硬地拉了过来。',
          ]);
          await chara.say_and_wait(
            '竟然敢偷偷逃跑……这么调皮的训练员，需要好好地『照顾』一下了……',
          );
          await printAndWait([
            you.get_colored_name(),
            '大气不敢出地看着',
            chara.uma_sex_title,
            '一边状若亲密地用脸颊蹭着训练员的手臂，一边拖着对方离去。',
          ]);
          await printAndWait([
            '突然，那',
            chara.uma_sex_title,
            '想起了什么似的，掏出一件东西向',
            you.get_colored_name(),
            '抛了过来。',
          ]);
          await printAndWait([you.get_colored_name(), '手忙脚乱地接住了。']);
          await chara.say_and_wait(
            '这位好心的训练员，请一定不要冷落您的担当哦？呵呵……',
          );
          await printAndWait([
            you.get_colored_name(),
            '目送着这两位的身影逐渐消失，惊魂未定。',
          ]);
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            '实在是没有勇气面对这过于诡异的状况，于是手忙脚乱掏出手机，装作在打电话，悄悄溜走了。',
          ]);
          await printAndWait([
            '直到怪异的',
            chara.uma_sex_title,
            '与陌生训练员消失在了',
            you.get_colored_name(),
            '的视野中，',
            you.get_colored_name(),
            '才渐渐放松下来。',
          ]);
          await printAndWait([
            '虽然',
            you.get_colored_name(),
            '明白，两不相帮本质上还是在帮助怪异的',
            chara.uma_sex_title,
            '。',
          ]);
          await printAndWait([
            '不过',
            you.get_colored_name(),
            '一整天都在想这件事，似乎反而比平时更清醒了一些。',
          ]);
      }
      if (get('exp:0:监禁次数') === 0) {
        await printAndWait([
          '之后，',
          you.get_colored_name(),
          '不经意间想到，自己是不是也会犯下同样的错误、走向同样的结局呢？',
        ]);
      }
      return [ret];
    };
    f.title = '路见不平';
    return f;
  })(),
};
