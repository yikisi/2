/**
 * @file 卓芙 - 招募
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} treve 卓芙
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} may 佐岳五月/狄杜斯
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 卓芙对玩家的称呼
   */
  async rec(treve, taste, may, you, callname) {
    const ret = [];
    await era.printAndWait(
      `某个休息日，${you.name} 同时收到了 ${taste.name} 与巴黎特雷森学园官方的联络邮件。`,
    );
    await era.printAndWait('虽然内容不尽相同，但都表达了一个意思：');
    if (era.get('flag:当前声望') >= 1000) {
      await era.printAndWait(
        `短时间内接连取得国际一级赛优胜的 ${you.name}，已然是各国赛马界都无法忽视的存在。`,
      );
    }
    await era.printAndWait([
      '日前巴黎特雷森学园的院长就已经和 ',
      taste.get_colored_name(),
      ' 有过一番洽谈，其结果是——',
    ]);
    await era.printAndWait(
      `不久后将会挑选一批优秀的法国幼驹前来中央交流，${you.name} 被选为责任人负责双方的接洽工作。`,
    );
    await era.printAndWait([
      '理事长的青梅竹马——',
      may.get_colored_name(),
      ' 会全程给予 ',
      you.get_colored_name(),
      ' 协助。',
    ]);

    await era.printAndWait('要动身前往巴黎吗？');
    era.printButton('是', 1);
    era.printButton('否', 2);
    ret.push((ret['foreign'] = await era.input()));
    if (ret['foreign'] === 1) {
      await era.printAndWait(
        `${you.name} 拖着行李箱，背着双肩包从火车上下来，跟随着拥挤的人流走出车站。`,
      );
      await era.printAndWait(
        '四处看了看，接人的人和车到处都是，就是不知道巴黎特雷森的工作人员在哪里。',
      );
      await era.printAndWait(
        `${you.name} 有些后悔了，${may.name} 说要送 ${
          you.name
        }，被 ${you.name} 断然拒绝。`,
      );
      await era.printAndWait(
        '心想自己这个年纪了，以前也不是没出过远门，这点困难很容易克服。',
      );
      await era.printAndWait(
        '谁知道坐火车之前还要坐一趟客车，中午也没吃东西，光喝了水。',
      );
      await era.printAndWait('此时此刻，虽没有觉得饿，但是疲乏得很了。');
      await era.printAndWait(
        `${you.name} 走到了大太阳底下，一个一个地打量着大号遮阳伞。`,
      );
      era.println();
      await era.printAndWait(
        `终于，${you.name} 看到了巴黎特雷森学园接车点，几个遮阳伞并排立着。`,
      );
      await era.printAndWait('过了约莫两个半小时，车子终于停了下来。');
      await era.printAndWait('到地方了，见面地点是校长室。');
      await era.printAndWait(`交接完毕后，${you.name} 前往临时据点。`);
      await era.printAndWait(
        '巴黎特雷森不仅校区很大，里面的宿舍区，看上去只有几栋楼，实际也比中央的宿舍要大许多。',
      );
      await era.printAndWait('麻雀不小，五脏也俱全。');
      await era.printAndWait(
        '床的大小是双人的，一旁放有书桌衣柜，还有个阳台。',
      );
      await era.printAndWait(`${you.name} 的法国特雷森之旅正式开始了。`);
      era.drawLine();
      if (era.get('flag:当前声望') >= 1000) {
        await era.printAndWait(
          `${you.name} 作为训练员的职业生涯已经不短了。经过漫长的岁月的洗礼，${you.name} 也会想那微不足道的功绩其实也是谁都有可能能完成的。`,
        );
      }
      await era.printAndWait(
        '瑟瑟发抖地从椅子上站起来，拿起挂在房间角落里的大衣。仰望窗外，看到的是阴沉的天空。灰色的光线照射在寂寞的训练员室里。',
      );
      await era.printAndWait(
        '秋天快到了。没有外套的话，开始颤抖的这个身体似乎无法忍受。',
      );
      await era.printAndWait(
        `戴上挂在衣架上的中折帽，右手拿着信封出去。关门的瞬间，${you.name} 稍微长时间地凝视着这个房间。都是些没什么意义的东西。`,
      );
      await era.printAndWait(
        '在外面寻找最近的位置时，可以听到赛场上的欢呼声。',
      );
      await era.printAndWait(
        `${you.name} 想了想是不是发生了什么事，但是完全猜不出来。`,
      );
      await era.printAndWait('只好稍微追溯一下记忆。');
      era.printButton('「出道赛吗？」', 1);
      await era.input();
      await era.printAndWait(
        `为数众多的${treve.uma_sex_title}在实战性的比赛中彰显实力，接受发掘的机会。年轻的训练员们聚集在一起的那个地方。`,
      );
      await era.printAndWait(
        '一边朝着与运动场完全相反的方向走，一边想起了热衷于发掘的往事。',
      );
      await era.printAndWait('即使讨厌也能理解吧，自己不适合这个地方。');
      await era.printAndWait(
        `走在石板路上，和几个穿着体操服的${treve.uma_sex_title}们擦肩而过。`,
      );
      await era.printAndWait(
        `在这种情况下，又有什么刺激了 ${you.name} 的耳朵，是塞进口袋的手机的来电音。`,
      );
      await era.printAndWait(
        `也不确认对方是谁就接通，这是 ${you.name} 被信息左右的职业习惯。`,
      );
      await era.printAndWait('拿着的电话。');
      era.printButton('「你好。」', 1);
      await era.input();
      await taste.say_and_wait('歉 意！有点事想拜托你。');
      await era.printAndWait([
        taste.get_colored_name(),
        '，虽说是看似普通的学园理事长，但考虑到这样的组织与才能还有眼力，绝对是独一无二的存在。',
      ]);
      await era.printAndWait(
        `${you.name} 深深地叹了口气。和刚才安宁的感觉不同，用通俗易懂的力量，发出不愉快的那种。`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await taste.say_and_wait(
        `告 知！实际上，那边的${treve.uma_sex_title}里有个孩子虽然出道赛表现很好，但谁都没搭上话。实力很强，在比赛中好像也是第一名，所以为什么没被物色发掘，真是不可思议。`,
      );
      era.printButton('「因为被理事长内定了吧。」', 1);
      await era.input();
      await taste.say_and_wait(
        `冗 谈！这个……总之你有实力，我想能不能在你那里收留${treve.sex}。`,
      );
      await era.printAndWait('这个装嫩的家伙耳朵洞是通了好让空气变通畅吗。');
      await era.printAndWait(
        `为什么要把法国的${treve.uma_sex_title}托付给刚来这片土地的训练员呢。`,
      );
      await era.printAndWait(
        `${
          you.name
        } 的脸在别人看来应该明显地扭曲了，很吓人，${treve.uma_sex_title}们纷纷避开。`,
      );
      await era.printAndWait(
        `一边想着一边走路一边打电话，直到坐在路边的长椅上，和在对岸同样坐着的${treve.uma_sex_title}对视。`,
      );
      await era.printAndWait(
        `${you.name} 轻轻摇晃手里拿着的电话，栗毛的${treve.sex}对此点头。`,
      );
      await era.printAndWait(`总之，这样打电话也不会给 ${you.name} 添麻烦。`);
      era.printButton('「得看实力。」', 1);
      await era.input();
      await taste.say_and_wait(
        `赞 许！特别是脑袋聪明，很擅长比赛的展开。因为${treve.sex}冷静的表现不像新人，教官都很快没有能教${treve.sex}的东西了。`,
      );
      await era.printAndWait(
        `${
          you.name
        } 光听着就觉得是优秀的${treve.uma_sex_title}。那么没有被物色的话，就说明……`,
      );
      era.printButton('「性格有问题。」', 1);
      await era.input();
      await taste.say_and_wait('没 有！也很有自信。');
      era.printButton('「脚部不安。」', 1);
      await era.input();
      await taste.say_and_wait('健 康！一切都没有问题');
      era.printButton('「那为什么没有被物色发掘呢？」', 1);
      await era.input();
      await taste.say_and_wait('无 奈！我也想知道啊！');
      await era.printAndWait('从电话那头传来叹息声，看来真的很有自信。');
      await era.printAndWait(
        `被这么一说，${you.name} 很在意是什么样的${treve.uma_sex_title}。`,
      );
      await era.printAndWait('虽然基本会拒绝，但至少试着见次面吧。');
      await era.printAndWait(
        '即使自己不负责，也应该能向这个学园看起来正好的熟人介绍。',
      );

      era.printButton('「什么样的家伙？」', 1);
      await era.input();
      await taste.say_and_wait(
        `回 忆！嗯，是栗毛的${treve.uma_sex_title}。只是发色比较明亮，玫瑰金之类的感觉。`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 抬起头来，和刚才得到电话许可的',
        treve.uma_sex_title,
        '对视。',
      ]);
      await era.printAndWait('栗色，是明亮的发色。');
      era.printButton('「……其他的呢？」', 1);
      await era.input();
      await taste.say_and_wait('特 点！头发后面有两个小小的结。');
      await era.printAndWait(`${treve.sex}的两结头发被风吹得摇动。`);
      era.printButton('「……还有呢。」', 1);
      await era.input();
      await taste.say_and_wait(
        '补 充！耳饰的话，左边是白色的帽子和红色的丝带，这个比较有特色，所以很容易辨认吧。',
      );
      await era.printAndWait(
        '白色的帽子和红色的丝带也在摇曳，能清楚地看到画着深蓝色的线。',
      );
      await era.printAndWait(
        `尽管一直被盯着，那个栗毛的${treve.uma_sex_title}却泰然自若地看着 ${
          you.name
        }。`,
      );
      await era.printAndWait(`海蓝宝石的眼睛纹丝不动地朝向 ${you.name} 这边。`);
      await taste.say_and_wait(
        `如 何？那边的学校很大吧，现在进行出道赛的${treve.uma_sex_title}也多，可能很难找到。`,
      );
      era.printButton('「……不，我觉得很快就能找到。」', 1);
      await era.input();
      await taste.say_and_wait('好 极！能找到就好，再见。');
      await era.printAndWait(`然后 ${you.name} 和无机质的蜂鸣音一起挂断电话。`);
      await era.printAndWait(
        `慢慢地收好手机后，双手交叉，隔着石阶的人行道重新面对，面对面地坐在对面的${treve.sex}。`,
      );
      era.printButton('「不好意思——在这里做什么？」', 1);
      await era.input();
      await era.printAndWait(
        `那个${treve.uma_sex_title}用手捂着嘴，思量着回答。`,
      );
      await treve.say_as_unknown_and_wait(
        '嗯，虽然是赢了出道赛，但是哪个训练员都不愿意负责我。我现在在等某位大人物替我找的人……',
      );
      era.printButton('「是我。」', 1);
      await era.input();
      await treve.say_as_unknown_and_wait('咦？');
      era.printButton('「我就是那个白痴理事长叫来的训练员。」', 1);
      await era.input();
      await era.printAndWait(`${treve.sex}只在一瞬间，张着小嘴睁大了眼睛。`);
      await era.printAndWait(
        `被本地的训练员包围而来的是这样的外国人，可能会让${treve.sex}失望。`,
      );
      await era.printAndWait(
        `但是那似乎是杞人忧天，${treve.sex}站起来，向 ${you.name} 走来，伸出了右手。`,
      );
      await era.printAndWait(
        `然后微笑着的脸上没有任何杂质，${you.name} 知道这是被那种纯粹所燃烧的感觉。`,
      );
      await treve.say_and_wait(`我是 ${treve.name}，初次见面！`);
      era.printButton(`「……${you.actual_name}。中央特雷森的训练员。」`, 1);
      await era.input();
      await era.printAndWait(`双手挥过之后再次和${treve.sex}握手。`);
      era.printButton('「大体上听说了……没被物色发掘是真的吗？」', 1);
      await era.input();
      await treve.say_and_wait(
        '是真的。虽然有跟我打招呼的训练员，但谁也没有成为我的担当训练员。',
      );
      await era.printAndWait(
        `${you.name} 本来还抱有交流可能不畅的不安，但初次对话的感觉并没有特别的障碍。`,
      );
      era.printButton('「什么事？」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.name} 直视着 ${you.name} 的眼睛，毫不客气地回答。`,
      );
      await treve.say_and_wait('我想在凯旋门赏上获胜。');
      await era.printAndWait(
        `一句话，就能理解没有被任何训练员捡回去的原因，${you.name} 甚至想以手掩面。`,
      );
      await era.printAndWait(
        `${treve.sex}太纯洁了，恐怕最大的原因就是这种自我推销方式。`,
      );
      await era.printAndWait(
        `对于惊慌失措的 ${you.name}，${treve.name} 歪着头。`,
      );
      await treve.say_and_wait(
        '对了对了，大家都是这种感觉……但是，以凯旋门赏为目标有那么奇怪吗？',
      );
      era.printButton('「不是很奇怪。」', 1);
      await era.input();
      await era.printAndWait(
        `是做法不好。${you.name} 先和${treve.sex}坐到同一张长椅上，然后再面向对着 ${you.name} 看的 ${treve.name}。`,
      );
      era.printButton(`展开解释`, 1);
      await era.input();
      await you.say_and_wait(
        `听好了，凯旋门赏可以说是这个国家乃至全世界${treve.uma_sex_title}的目标。如果是以草地中距离为主战场的${treve.uma_sex_title}，最后到达的肯定是凯旋门赏。`,
      );
      await era.printAndWait(
        `当然，点头的${treve.sex}的素质还不确定，但如果能定下这样的目标，对草地中距离有相当的自信吧。`,
      );
      await era.printAndWait(
        `不过，光靠${treve.uma_sex_title}的实力是不够的。`,
      );
      era.printButton(`「但是——挑战凯旋门赏接近赌博。」`, 1);
      await era.input();
      await you.say_and_wait(
        `如果不收集各国的${treve.uma_sex_title}的数据，并特别设定为此而进行的训练，就等于不可能赢得那场比赛。没有人能把为此而付出的巨大努力花在刚刚赢得出道赛的${treve.uma_sex_title}身上。`,
      );
      await era.printAndWait(
        `训练员基本上会负责多名${treve.uma_sex_title}。众所周知，挑战凯旋门赏会大大降低团队的工作效率，甚至有训练员明确表示，为了提高平均成绩，不会参加国际比赛。`,
      );
      await era.printAndWait(
        `从一开始就以凯旋门赏为目标的 ${treve.name}，可以说是踩在了他们的雷区。`,
      );
      await treve.say_and_wait('……');
      await era.printAndWait('总之，初期目标太大是不行的。');
      await era.printAndWait(
        '比如说哪怕是想赢普通G1的话，被训练员录用也不难吧。',
      );
      await era.printAndWait(
        '如果说想在法国国内，或者经过英国和德国的比赛掌握实力，达到熟练的领域之后挑战凯旋门赏的话，部分人也不会摇头。',
      );
      await era.printAndWait(
        `${you.name} 一边想着太直率也是问题，一边继续说。`,
      );
      era.printButton('「我可以把你介绍给其他训练员……」（放弃招募）', 1);
      era.printButton('「你那么想赢凯旋门赏吗？」', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        await era.printAndWait(`${treve.name} 刚才的萎靡不振，就像假的一样。`);
        await era.printAndWait(`对 ${you.name} 那句话做出反应，眼睛闪闪发光。`);
        await treve.say_and_wait('绝对的！');
        await era.printAndWait(
          '这样的话，比起笨拙地隐藏目标，从一开始就以凯旋门赏为目标来表达本人的动机也是最好的。',
        );
        await era.printAndWait(`否定那个的是 ${you.name}。`);
        era.printButton(
          '「……嘛，要是能见到能以凯旋门赏为目标还有余裕的训练员就好了。」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${you.name} 刚要站起来，就被 ${treve.name} 焦急地抓住了大衣下摆。`,
        );
        era.printButton('「怎么了？」', 1);
        await era.input();
        await treve.say_and_wait('让你发掘我是……');
        await era.printAndWait('总觉得，想象到了湿透的小动物。');
        await era.printAndWait('正直有实力，志向也很高。');
        await era.printAndWait(
          `${treve.name} 在拼命思考，哪怕是在被拒绝到这种地步的时候。`,
        );
        await era.printAndWait(
          `${treve.sex}可能觉得 ${you.name} 是一艘救援船，但这艘泥船正在下沉。`,
        );
        await era.printAndWait(`应该还有其他训练员对${treve.sex}抱有期待。`);
        await era.printAndWait('就在这时，卓芙打了一个响指。');
        await treve.say_and_wait('来法国的话，你其实现在很闲吧？');
        era.printButton('「是啊。」', 1);
        await era.input();
        await era.printAndWait('这里暂且无视这种无礼的说法。');
        await treve.say_and_wait('但是巴黎特雷森有付指导支援金吧？');
        era.printButton('「……是的。」', 1);
        await era.input();
        await treve.say_and_wait('那么，请把这些全部给我！');
        await era.printAndWait(
          `伸出张开的双手的${treve.teen_sex_title}此时也无视了。`,
        );
        era.printButton('「拒绝。」', 1);
        await era.input();
        await treve.say_and_wait('为什么！');
        await era.printAndWait(
          `虽然想一步一步地走，但是被${treve.sex}把大衣拉得不能动了。`,
        );
        await era.printAndWait(
          `就这样被撕碎多年的朋友也不愿意，没办法只好转身，${treve.name} 又正面窥视了 ${you.name} 的眼睛。`,
        );
        await era.printAndWait('让人很难擅长的清澈的眼睛。');
        await treve.say_and_wait(
          `那么，我给你一个理由。如果负责能连霸凯旋门赏的${treve.uma_sex_title}的话，作为社会人的评价也会提高吧？`,
        );
        era.printButton('「那个自信是从哪里来的？」', 1);
        await era.input();
        await era.printAndWait(
          `话虽如此，实力由 ${taste.name} 和比赛的结果保证。`,
        );
        await era.printAndWait(`${you.name} 微微叹气，仰望天空。`);
        await era.printAndWait(
          '代替灰色的天花板，广阔的天空到处散落着乌云，只能从缝隙中窥视蓝天的气息。',
        );
        await era.printAndWait(
          `${treve.name} 依旧继续抬头看着 ${you.name}，${you.name}……`,
        );
        era.printButton('「还是另请高明吧。」（放弃招募）', 1);
        era.printButton(`握住那只使劲把 ${you.name} 拉向赛场的手。`, 2);
        ret.push((ret['select'] = await era.input()));
        if (ret['select'] === 2) {
          await era.printAndWait(
            `眼前的${treve.teen_sex_title}，眼神更加强烈地闪耀着。`,
          );
          await treve.say_and_wait('请多关照，训练员先生！');
          await era.printAndWait(
            `不顾 ${you.name} 的感受，${treve.name} 把 ${you.name} 往赛道拉去。`,
          );
          await treve.say_and_wait(
            '因为训练员先生还没见过我跑步呢。如果现在不马上看的话，什么都不会开始哦？',
          );
          await treve.say_and_wait('你看，俗话说趁热打火。');
          era.printButton('「趁热敲的不是火，而是铁啊。」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name} 的自信得到了确实实力的证明，这是在开始训练之后 ${you.name} 才明白的。`,
          );
          await era.printAndWait(
            `负责${treve.sex}的时候 ${you.name} 参照了过去的记录和诀窍。`,
          );
          await era.printAndWait(
            `而且，越是考虑如何根据至今为止的做法指导${treve.sex}，越能明白${treve.sex}的优秀实力。`,
          );
          await era.printAndWait(
            '能冷静地理解加速和最高出速的亮眼脚力，即使是最后直线也不显出疲态的耐久，以及自己临场制定战略的头脑。',
          );
          await era.printAndWait(
            `${treve.uma_sex_title}需要的东西都达到了极高的水平。`,
          );
          await era.printAndWait(
            `因为平衡很好，所以 ${you.name} 认为无论哪个脚质都能取得好的胜负。`,
          );
          await era.printAndWait('考虑到这双腿，应该是先行或者居中吧。');
          await treve.say_and_wait(
            '先行比较好，因为在集团前面比较容易跑出去。',
          );
          await era.printAndWait(
            `${treve.name} 一边瞥着在操场上奔跑的同学们，一边用毛巾擦汗。`,
          );
          await era.printAndWait(
            `身体足够强大，而且${treve.sex}还有一个和它相辅相成的武器。`,
          );
          await era.printAndWait(
            '下一场模拟赛就采取先行对策吧。不过要面对年长的对手……',
          );
          await treve.say_and_wait(['我会赢的，', callname, '。']);
          await era.printAndWait('正因为冷静地理解了自己的实力才有自信。');
          await era.printAndWait([
            '既不是过分的自尊也不是谦虚，客观地对待自己的精神状态也提高了 ',
            treve.get_colored_name(),
            ' 这个',
            treve.uma_sex_title,
            '的完成度。',
          ]);
          await era.printAndWait(
            `如果是蹩脚的训练员，就从这里着手，把${treve.sex}的才能搞砸了吧。`,
          );
          await era.printAndWait([
            '栗毛的',
            treve.uma_sex_title,
            '靠近想要结束练习的 ',
            you.get_colored_name(),
            '，告诉 ',
            you.get_colored_name(),
            ' 想再跑一圈。',
          ]);
          era.printButton('「可以，但为什么要做到这种程度？」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name} 是一张被夕阳照射的脸，像往常一样咯咯地笑。`,
          );
          await era.printAndWait(
            `${treve.sex}那仅存的稚嫩，似乎是天纵之才的象征。${treve.name} 有着与年轻成正比的强大。`,
          );
          await treve.say_and_wait(
            '家人和朋友，还有更多的人支持着我。所以，我想回应大家的期待！',
          );
          await era.printAndWait(`这样说着就跑走了的${treve.sex}的背变远了。`);
          await era.printAndWait([
            you.get_colored_name(),
            ' 一直用眼睛追着那个小小的身影，直到 ',
            treve.get_colored_name(),
            ' 转过弯道。',
          ]);
        }
      }
    }
    return ret;
  },
  rec_final: (() => {
    /**
     * @param {CharaTalk} treve
     * @param {CharaTalk} you
     */
    const f = async (treve, you) => {
      await era.printAndWait('校园里的树木被季节染上了颜色。');
      await era.printAndWait('淡黄色的回廊，透明的大玻璃，棱角分明的立面。');
      await era.printAndWait('现代风格的校园建筑，与湛蓝色的天空交相辉映。');
      await era.printAndWait(
        '银杏、松树，还有那中庭的枯树洞，一同沐浴在阳光之中。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' 换上了中央的校服，走在连接教学楼和训练员室的花园里。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 成为了 ',
        treve.get_colored_name(),
        ' 的专属训练员。',
      ]);
    };
    f.title = '未有前人曾踏足';
    return f;
  })(),
};
