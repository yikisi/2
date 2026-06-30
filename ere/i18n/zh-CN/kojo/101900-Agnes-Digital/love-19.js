/**
 * @file 爱丽数码 - 爱慕
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  shine: (() => {
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait('呜呼呼，诶嘿嘿！');
      await era.printAndWait([
        '在训练室的 ',
        digital.get_colored_name(),
        ' 眯着眼，应该是在想象着',
        digital.uma_sex_title,
        '，发出来了可能会让人拿出手机报警的笑声，看起来十分高兴。',
      ]);
      await you.say_and_wait('怎么了？这么高兴？');
      await digital.say_and_wait('我在想接下来的应援活动怎么做啦！');
      await era.printAndWait([
        '然后 ',
        digital.get_colored_name(),
        ' 大肆地说了一堆推论，大体上就是应援可以为 ',
        digital.get_colored_name(),
        ' 带去力量，所以应援也算锻炼。',
      ]);
      await era.printAndWait('嗯？好像还挺有道理？');
      await you.say_and_wait('既然这么说的话，那我也一起去吧。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 决定也一起过去，也可以顺便了解一下 ',
        digital.get_colored_name(),
        '。',
      ]);
      await digital.say_and_wait(
        '诶？试试可以啦……不过，这是很发烧友向的哦？会很累的哦？',
      );
      era.drawLine();
      await era.printAndWait([digital.sex, '说的对。']);
      await digital.say_and_wait('来阪神赛马场真是太好了！！精彩的出道战！');
      await digital.say_and_wait([
        '第一名的',
        digital.uma_sex_title,
        '酱，可是继承累去年隐退的',
        digital.elder_sibling_sex_title,
        '的意志出道的呢！这种传承感，太燃啦哇！',
      ]);
      await era.printAndWait(['对于 ', you.get_colored_name(), ' 来说，']);
      await digital.say_and_wait(
        '互不相让的两人，中山赛马场的直线可是很短的哦！哇！',
      );
      await digital.say_and_wait(
        '呜呜……太精彩了，超越了适性和理论，源自内心的竞争，太棒了……',
      );
      await era.printAndWait('想要在一天之内，');
      await digital.say_and_wait(
        '大井赛马场的泥地赛道，相比起多为英里的其他赛道，是更容易看到精彩的差追的赛道……',
      );
      await digital.say_and_wait([
        '无视这个理论决定选择逃跑法的',
        digital.sex,
        '，虽然结果输了，但是开心地笑了',
      ]);
      await era.printAndWait('把日本的赛马场几乎逛个遍，');
      await digital.say_and_wait([
        '这次出场的那个芦毛',
        digital.uma_sex_title,
        '，前几次成绩一直都不算好，但是',
        digital.sex,
        '还斗志昂扬地站在那里啊！',
      ]);
      await era.printAndWait('还是有一点点……困难的。');
      await digital.say_and_wait([
        '感受到了吗？！',
        digital.uma_sex_title,
        '酱们的炙热！耀眼！震撼的连击！',
      ]);
      await era.printAndWait('感受到了，很浓，很劲啊！');
      await era.printAndWait(
        '跟着挥舞的双手，手臂不知何时失去知觉，鼓掌的双手，掌心也肿了起来，为赶线奔跑的双腿，也经历了一次磨难。',
      );
      await era.printAndWait([
        '再看旁边 ',
        digital.get_colored_name(),
        '，精气神十足，呼吸都不带喘的，',
        digital.sex,
        '……是不是天生就是干这个的？',
      ]);
      await digital.say_and_wait([
        '诶？',
        callname,
        ' 是比较累了吗？嗯呐，是我没注意分寸了，果然还是太过困难了吗……',
      ]);
      await era.printAndWait(
        '比赛结束后，观众也早已散去，找个位置坐着也是可以的。',
      );
      await digital.say_and_wait([
        '果然呐，',
        digital.uma_sex_title,
        '酱们的那股精气神，就是想看到',
        digital.couple_title,
        '朝气满满的样子啊。',
      ]);
      await era.printAndWait([
        '看着只剩下被',
        digital.uma_sex_title,
        '摧残过后的马场，',
        digital.get_colored_name(),
        ' 吐出了早就表露于面的心中之言。',
      ]);
      await era.printAndWait([
        '能把整个赛场都炒热气氛，连天都可以掀翻，这就是',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '双手挂满了各种应援场贩，',
        digital.get_colored_name(),
        ' 这一天可谓是收获满满。',
      ]);
      await digital.say_and_wait([
        '真的特别开心，没想到 ',
        callname,
        ' 居然能跟上我的步伐！你已经可以算进核心的粉丝了！不愧是同志啊！',
      ]);
      await era.printAndWait([
        '看着无比高兴的 ',
        digital.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 这一天的疲惫也随之而去。',
      ]);
      await era.printAndWait('只希望明天起来不会腰酸背痛。');
    };
    f.title = '闪现，应援活动！';
    return f;
  })(),
  univ: (() => {
    const title = '在宇宙中互相理解';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {string} self_call 爱丽数码的自称
     * @param {PrintedSpan} d_call_u 爱丽数码对春乌拉拉的称呼
     */
    const f = async (digital, you, callname, self_call, d_call_u) => {
      await digital.print_and_wait([
        digital.name,
        '，一个为了',
        digital.uma_sex_title,
        '酱而存在于世上的',
        digital.uma_sex_title,
        '，今天也在全力推活！',
      ]);
      await digital.print_and_wait([
        '诶呀诶呀，今天也要去圣地巡游，把之前',
        digital.uma_sex_title,
        '酱们创造的圣迹全都再仔细地研磨一下啊！',
      ]);
      await digital.say_and_wait([
        '哦吼吼，圣地巡礼的时候给 ',
        callname,
        ' 带点伴手礼吧。',
      ]);
      await you.say_as_unknown_and_wait([
        '虽然不太懂，但看起来你和 ',
        callname,
        ' 关系不错呢，和他一起去如何？',
      ]);
      await digital.say_and_wait([
        '什么，你说和 ',
        callname,
        ' 一起去圣地巡游？哦哦……哦哦哦哦！',
      ]);
      await digital.print_and_wait([
        '从来没设想过的道路，跟 ',
        callname,
        ' 一起？圣地巡游！',
      ]);
      await digital.print_and_wait(
        '这就像是组队荒野求生带上了贝尔格里尔斯啊！',
      );
      await digital.say_and_wait('非常感谢！我这就去邀请！');
      era.drawLine();
      await era.printAndWait([
        '真的是完全没想到，',
        digital.get_colored_name(),
        ' 会过来邀请 ',
        you.get_colored_name(),
        ' 一起圣地巡游。',
      ]);
      await era.printAndWait([
        '为了担当',
        digital.uma_sex_title,
        '，像上次一样，',
        you.get_colored_name(),
        ' 也做好了准备。',
      ]);
      await era.printAndWait([
        '按时间来到了约定的集合地点，从',
        digital.sex,
        '向 ',
        you.get_colored_name(),
        ' 挥手的情况下，看起来气志高涨。',
      ]);
      await era.printAndWait([
        '就跟平时一样，穿着一件粉色内衬配上灰色外套，按',
        digital.sex,
        '的性格感觉再印个「I Love UMA」都有可能。',
      ]);
      await digital.say_and_wait([
        '真没想到 ',
        callname,
        ' 你居然会来！我早就做好被拒绝的准备的……',
      ]);
      await you.say_and_wait('不不不，再怎么想也不会拒绝的吧。');
      await digital.say_and_wait('那，就开始吧！圣地巡礼！');
      await era.printAndWait('大手一挥，指向了通向电车的大路。');
      era.drawLine();
      await era.printAndWait(
        '来到了一个很普通的牧场，在栅栏内可以看到悠哉吃草的牛牛，这算圣地吗？',
      );
      await digital.say_and_wait([
        '不不不，',
        callname,
        '，可不仅要看它的表象啊！',
      ]);
      await era.printAndWait('颇有气势地指向了一片……草丛？');
      await era.printAndWait(
        '各种各样的杂草兴兴向荣，看起来牧场的主人没有怎么打理。',
      );
      await you.say_and_wait('镜花水月？什么时候！');
      await digital.say_and_wait('事实上我想指的是这个啦。');
      await era.printAndWait([
        '看到',
        digital.sex,
        '拿起的是——四叶草，还粘着露水。',
      ]);
      await digital.say_and_wait([
        '没错！有多少',
        digital.uma_sex_title,
        '把代表幸运的四叶草，送给了同伴，竞争对手？互相拼搏却又互相祝福，呜呜呜——',
      ]);
      await you.say_and_wait(
        '不不不，说起四叶草想起的不应该是神社吗？果然应该还得是下着雨的，淋着鸟居的神社……',
      );
      await era.printAndWait('把好像不存在的记忆说出了口？');
      await digital.say_and_wait('！居然！');
      await digital.say_and_wait([
        callname,
        '！你很懂嘛！果然！这种圣地就是要互相交流！',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        '那么下一站，就是这个，咋一看像平平无奇的公园，事实上——',
      );
      await digital.say_and_wait('是充满着力量的公园啊！');
      await era.printAndWait('力……力量？');
      await digital.say_and_wait([
        '对！无数的',
        digital.uma_sex_title,
        '来此聚会，来此歇息，还有，那个沙坑！',
      ]);
      await you.say_and_wait('哦哦哦？想起来了，是Team Gold曾经训练的沙坑吧？');
      await digital.say_and_wait('没错！就是……诶？你说……');
      await era.printAndWait('等一下，Team Gold是哪个队伍来着？');
      await you.say_and_wait([
        '先不，不管吧，你看下那个摊位，',
        d_call_u,
        ' 不是摆过吗？',
      ]);
      await digital.say_and_wait('哦哦哦哦哦！');
      era.drawLine();
      await digital.say_and_wait(
        '好味！好味！这就是王者拉面吗？！真够王者的！',
      );
      await era.printAndWait(
        '来到了一家深藏巷中的拉面馆，不管是外饰还是里面的装修，都特别有那种「深藏不漏」的感觉？',
      );
      await digital.say_and_wait(
        '还有超级超越的分量！征服了这个的拉面的，果然是王者啊！',
      );
      await you.say_and_wait(
        '相比起这个王者拉面，我其实更好奇所谓的秘密菜单……',
      );
      await you.say_as_passer_by_and_wait('店长', [
        '噢？',
        you.sex_code === 1 ? '小哥' : '小妹',
        '不错嘛！居然知道本店还有秘密菜单！',
      ]);
      await era.printAndWait([
        '一旁拿着漏子制作料理的店长听到，诧异地跟你们说了一句。',
      ]);
      await digital.say_and_wait('秘密菜单？为何？为何我不知道的？');
      await era.printAndWait([
        '本来正为征服了王者拉面而兴奋的 ',
        digital.get_colored_name(),
        '，听到此话，惊讶得毛都炸了。',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        '噫呀哈，加上刚才那个蜂蜜特饮店，全圣地巡礼，达成！',
      );
      await era.printAndWait(
        '从清晨接触第一缕阳光再到傍晚送走夕阳，真的是忙了一天啊。',
      );
      await you.say_and_wait('到处都转了一圈呢。');
      await digital.say_and_wait(
        '诶呀诶呀，这么长时间的应援活动真的是辛苦你了，如此勤勉，值得敬意！',
      );
      await era.printAndWait('诶呀诶呀，怎么还敬起礼来了。');
      await digital.say_and_wait('而且，诶嘿嘿，能圆满完成真的是太好了。');
      await digital.say_and_wait('实际上，最开始是想和以往一样一个人去的。');
      await digital.say_and_wait('但是……');
      await era.printAndWait([
        '然后就听到了',
        digital.sex,
        '的意外经历，在外面意外听到了路人',
        digital.uma_sex_title,
        '的建议，邀请 ',
        callname,
        ' 一起……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 发自内心地感谢了这位不知名的',
        digital.uma_sex_title,
        '，因此 ',
        you.get_colored_name(),
        ' 对 ',
        digital.get_colored_name(),
        ' 更加了解了。',
      ]);
      await digital.say_and_wait(
        '最幸运的是，实际实行起来，真的是非常！非常开心呢！',
      );
      await era.printAndWait('大展双手，真的是很开心啊。');
      await digital.say_and_wait(
        '太好了，明明是对你来说珍贵的假期，又没有提前和你计划，还以为你不会同意呢……',
      );
      await digital.say_and_wait('不过，这真的是一个重大发现！');
      await digital.say_and_wait([
        '我发现了，和 ',
        callname,
        ' 一起追推，一起推活的乐趣！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 以前因特殊爱好所少表露的真正的情绪，正逐渐向 ',
        you.get_colored_name(),
        ' 袒露。',
      ]);
      await digital.say_and_wait(
        '本来就没想过，在这个宇宙中能有这样和我一起进行应援活动的人……',
      );
      await you.say_and_wait('居然是宇宙级的吗？！');
      await digital.say_and_wait(
        '啊哈哈，事实上你也看到了，之前都是我一个人在进行应援活动，能听我这些界限发言，还有共感，真的是让我……很开心',
      );
      await era.printAndWait([
        '感觉，',
        digital.get_colored_name(),
        ' 的双眼正在闪闪发亮。',
      ]);
      await digital.say_and_wait([
        '太感动了！现在有什么想说的，就想赶紧对 ',
        callname,
        ' 说！',
      ]);
      await you.say_and_wait('可以哦，想说什么都可以。');
      await digital.say_and_wait('诶！真的什么都可以吗！');
      await digital.say_and_wait('真的可以吗？真的可以吗！说好了哦!');
      await digital.say_and_wait([self_call, ' 我要开始界限发言了哦！']);
      await digital.say_and_wait([
        '在第一眼在电视的大屏幕上看到',
        digital.uma_sex_title,
        '酱的身姿时我就明白如此激励眩眼的激情四射的',
        digital.sex_code === 1 ? '神明' : '女神',
        '们是我的一生向往啊随后我就坠入了深渊哦不是升华到了天堂每天都供奉',
        digital.uma_sex_title,
        '酱们为',
        digital.couple_title,
        '应援为',
        digital.couple_title,
        '喝彩为',
        digital.couple_title,
        '制作同人本向大家宣传',
        digital.uma_sex_title,
        '酱们的美好伟大然后得益于偶尔的赐福我终于处身于这万神殿可以和各位',
        digital.sex_code === 1 ? '神明' : '女神',
        '同处于一个世界哦不是我只是同呼吸一处空气的凡人而已但是',
        digital.couple_title,
        '也都不嫌弃我还让我进入不可侵犯的赛场上进行劲的比赛简直是高贵的却又不嫌污秽的所有全肯定的伟大的',
        digital.sex_code === 1 ? '神明' : '女神',
        '们说了这么多数码碳我想说的仅是',
        digital.uma_sex_title,
        '酱真的是太棒了！',
      ]);
      await era.printAndWait([
        '回旋，跳跃，低吟，高唱，',
        digital.get_colored_name(),
        ' 用了',
        digital.sex,
        '的毕生所能，将全部所想说的一切倾泻了出来。',
      ]);
      await era.printAndWait('如此纯度，值得敬佩。');
      await digital.say_and_wait(
        '咳咳咳，哈哈哈哈，说出来……真的……咳咳……是淋漓尽致啊……',
      );
      await era.printAndWait([
        '疯狂地呼吸，胸脯不断起伏，实在是太累了吧，',
        digital.get_colored_name(),
        ' 咳着咳着，一个踉跄，直接坐在了地面上。',
      ]);
      await digital.say_and_wait(['怎么样啊，', callname, '？嘿嘿……']);
      await era.printAndWait([
        '坐在地面上，还用手撑着，不过',
        digital.sex,
        '笑得很开心。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也靠在',
        digital.sex,
        '身边坐了下来，为',
        digital.sex,
        '支撑一下',
        digital.sex,
        '的体重。',
      ]);
      await you.say_and_wait(
        '很不错哦，听到这么有活力的界限发言，就连三女神都为之震撼呢。',
      );
      await digital.say_and_wait('嘿嘿嘿，这样吗……');
      await digital.say_and_wait('真的，是宇宙级呢……');
    };
    f.title = title;
    return f;
  })(),
  oshi: (() => {
    const title = '推';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} palmer 目白善信
     * @param {CharaTalk} helios 大拓太阳神
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} y_call_d 玩家对爱丽数码的称呼
     */
    const f = async (
      digital,
      teio,
      mcqueen,
      opera,
      doto,
      palmer,
      helios,
      taste,
      you,
      callname,
      y_call_d,
    ) => {
      teio.name = '看起来比较孩子气的' + teio.uma_sex_title;
      opera.name = '看起来毫不在意的' + opera.uma_sex_title;
      doto.name = '看起来很冒失的' + doto.uma_sex_title;
      mcqueen.name = '某个浅紫色芦毛' + mcqueen.uma_sex_title;
      palmer.name = '某个栗毛' + palmer.uma_sex_title;
      helios.name = '看起来像是染了蓝毛的' + helios.uma_sex_title;
      if (era.get('cflag:0:位置') !== location_enum.beach) {
        await taste.say_and_wait('合宿！对，就是，如此！');
        await era.printAndWait(
          '不得不说不愧是那个理事长吗，即使现在明明不是夏季合宿的时间段，却突然来这么一出。',
        );
      }
      await you.say_and_wait('合宿吗，倒也不错。');
      await era.printAndWait([
        '对于',
        digital.uma_sex_title,
        '来说并不只是旅游，也有着训练这一重要环节的活动，简直跟暑假作业异曲同工。',
      ]);
      await era.printAndWait([
        '幸好，大部分的',
        digital.uma_sex_title,
        '都是热爱训练的，',
        you.get_colored_name(),
        ' 的担当',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        '，',
        digital.sex,
        '也不例外。',
      ]);
      await era.printAndWait([
        '话说回来，',
        digital.get_colored_name(),
        ' 好像更多的是享受与推们同做一件事的行为，那',
        digital.sex,
        '到底喜欢的是不是训练本身呢。',
      ]);
      await era.printAndWait([
        '在到达地点前就这样想着各种无关的东西，随着轮子的转动，金黄与碧蓝的颜色覆盖住了绿色，',
        you.get_colored_name(),
        ' 来到了合宿地点。',
      ]);
      await era.printAndWait('哇哦，真不愧是特雷森，给到的条件还蛮不错的。');
      await era.printAndWait([
        '顺便环绕了下四周，各处都是穿着泳衣的',
        digital.uma_sex_title,
        '，',
        digital.get_colored_name(),
        ' 应该会尊得要死要活吧，先不说训练了，',
        digital.sex,
        '……能活下来吗？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '登登登，',
        digital.get_colored_name(),
        ' 出现了，穿着学校泳衣，也就是俗称死库水的那种泳衣，紧绷适度，是最为方便训练的装备。',
      ]);
      await era.printAndWait([
        '只见',
        digital.sex,
        '一抬头远望，将一尽美景收入眼中，然后一个疯狂大吸气……',
      ]);
      await digital.say_and_wait('蓝天……白云……吹拂着青春之风……');
      await digital.say_and_wait([
        '在这里的一切',
        digital.uma_sex_title,
        '酱！啊！感觉呼吸都是亵渎……',
      ]);
      await digital.say_and_wait('明明是如此不敬，却又无法忍受，吸……');
      await era.printAndWait([
        '看到了 ',
        you.get_colored_name(),
        '，吸到一半气咳了，是呛到了。',
      ]);
      await digital.say_and_wait(['咳咳咳，是 ', callname, ' 啊！']);
      await digital.say_and_wait('哇哇哇，开始训练吧！我早就准备好了！');
      await era.printAndWait([
        '大大地招手，看起来是一贯如此的 ',
        digital.get_colored_name(),
        '，不过好像不太对劲？',
      ]);
      await you.say_and_wait('难得来到这里，真不用先放松一下吗？');
      await era.printAndWait([
        '恰好，两个看起来关系很好的',
        digital.uma_sex_title,
        '路过。',
      ]);
      await palmer.say_and_wait('你看看你，把雪糕都粘脸上了！这下怎么能啊？');
      await helios.say_and_wait('诶嘿，要不就你帮我擦掉吧！');
      await era.printAndWait([
        '可谓是经典剧情，',
        digital.get_colored_name(),
        ' 眼睛瞄瞄，漏出了幸福的笑容。',
      ]);
      await helios.say_and_wait('今天晚上听说有夏日祭啊，去看吧！');
      await palmer.say_and_wait('等等，怎么就这样决定了啊！');
      await era.printAndWait([
        '摸了摸肚子，说着多谢款待的 ',
        digital.get_colored_name(),
        '，突然像变脸了般。',
      ]);
      await digital.say_and_wait([
        '嘿嘿……看到好东西了，不不不！嗯！',
        callname,
        '！要去训练了噢！',
      ]);
      await era.printAndWait([
        '捶了捶胸口，使劲使自己看起来很认真，',
        digital.get_colored_name(),
        ' 怎么了？',
      ]);
      await era.printAndWait([
        '看着',
        digital.sex,
        '那认真的眼神，',
        you.get_colored_name(),
        ' 也不好说什么，开始训练吧。',
      ]);
      era.drawLine();
      await era.printAndWait(
        '按下秒表，毕竟是在沙地上奔跑，跟草地及泥地都有不同，速度有所下降也属正常。',
      );
      await you.say_and_wait('休息一下吧。');
      await era.printAndWait([
        '递给',
        digital.sex,
        '水和毛巾，虽然是在海边，水随处可见，但汗水还是要擦的。',
      ]);
      await era.printAndWait([
        '接过毛巾，',
        digital.get_colored_name(),
        ' 正在擦的时候，眼睛又瞄到那边的海之家了。',
      ]);
      await doto.say_and_wait('对对对对不起！居然会把酱汁滴到你身上！');
      await opera.say_and_wait(
        '啊，我的光辉可不会因此般而暗淡，仅会因瑕疵而更耀眼！',
      );
      await era.printAndWait('嗯，很有特色的两人组，也挺大名鼎鼎的。');
      await digital.say_and_wait('咕溜咕溜……呜呜呜呜！');
      await era.printAndWait('发出了引擎发动的声音……？');
      await digital.say_and_wait([
        '啊！那么！',
        callname,
        '！我去训练啦，接着要去跑十个来回哟！',
      ]);
      await era.printAndWait('单手握拳高举，是不是太勉强了？');
      await era.printAndWait('要不这样吧。');
      await you.say_and_wait('我听说今晚附近有祭典，今晚一起去看下吗？');
      await digital.say_and_wait('哦……！不错呢，祭典，好好好！');
      await era.printAndWait(['希望能给', digital.sex, '放松一下。']);
      era.drawLine();
      await era.printAndWait(
        '悬挂于上方穿插而过的灯笼把地砖染上颜色，位于道路两边的铺位也呼应着点上了橘黄的灯光。',
      );
      await era.printAndWait([
        '虽说是来海边合宿的，但看起来也有不少的',
        digital.uma_sex_title,
        '也带来了和服，尽情地享受这次难得的祭典。',
      ]);
      await digital.say_and_wait([
        '哦咦哦咦，那么 ',
        callname,
        '，要从哪里逛起呢？',
      ]);
      await era.printAndWait(
        '一扫而过，苹果糖、稠鱼烧、巧克力条等小食，还有一些绘马、面具等的纪念品，当然还有打气球等游戏摊位。',
      );
      await era.printAndWait([
        '看着，',
        digital.get_colored_name(),
        ' 标记了一处地点。',
      ]);
      await era.printAndWait([
        '正有两名',
        digital.uma_sex_title,
        '穿着和服在捞金鱼。',
      ]);
      await era.printAndWait(
        '只见其中一位眼疾手快，把纸糊的勺子一扫而过，直接把一条金鱼捞了上来，不过，代价是……',
      );
      await teio.say_and_wait(
        '哈哈哈，捞金鱼可不是捞水啊，你看看，把衣服都弄湿了',
      );
      await mcqueen.say_and_wait('诶诶诶？！');
      await digital.say_and_wait('嘶……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 长呼一口气，然后……',
      ]);
      await digital.say_and_wait(
        '那么那么，要从哪家店开始逛呢？看着有好多不错的铺位啊！',
      );
      await era.printAndWait([
        '要是按照以前的话，',
        digital.sex,
        '绝对会眼睛发光地说个不停吧。',
      ]);
      await era.printAndWait('那，接下来应该……');
      await you.say_and_wait('我有一个想看的地方。');
      era.drawLine();
      await era.printAndWait('从热烈的祭典中脱身而出，来到了现在冷清的海边。');
      await era.printAndWait('后面是橘红，前面是蓝白。');
      await era.printAndWait('抹了抹并不存在的灰尘，直接在沙滩里坐了下来。');
      await era.printAndWait(
        '晚上的海滩说不上凉快，吹来的风又湿又潮，仅有屁股能感受到清凉。',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' 看着 ',
        you.get_colored_name(),
        '，也照样做了下来，就这样尴尬地看着月亮，看着海。',
      ]);
      await digital.say_and_wait([callname, ' 想做的事，就是坐在这里看海吗？']);
      await era.printAndWait('直接一点吧。');
      await you.say_and_wait([y_call_d, '，发生什么事了吗？']);
      await digital.say_and_wait('诶？并没有什么哦？');
      await era.printAndWait([
        '说这话时 ',
        digital.get_colored_name(),
        ' 都虚心地不自觉用手阻挡了心的交互。',
      ]);
      await you.say_and_wait('你在抑制自己想干的事情吗？');
      await era.printAndWait('不是这样的吧？');
      await digital.say_and_wait([
        '诶！没有哦，因为，我今天想做的事，就是和 ',
        callname,
        ' 一起做 ',
        callname,
        ' 想做的事啊！',
      ]);
      await you.say_and_wait('……为什么要这样？');
      await digital.say_and_wait([
        '因为……',
        callname,
        ' 都一直和我去参加应援活动了嘛……',
      ]);
      await era.printAndWait([
        '说着话的时候，',
        digital.get_colored_name(),
        ' 低着头，扭捏着。',
      ]);
      await digital.say_and_wait('还一直在听我的疯言乱语……');
      await era.printAndWait([
        '低着头，',
        digital.get_colored_name(),
        ' 眼睛瞄向了 ',
        you.get_colored_name(),
        '，脸也红红的。',
      ]);
      await digital.say_and_wait(
        '这样，应援活动也更有趣了，我也没想到每天能这么开心……',
      );
      await digital.say_and_wait([
        '已经回不到没有 ',
        callname,
        ' 独自推活的时候了哦！',
      ]);
      await era.printAndWait([
        '说着说着，',
        digital.get_colored_name(),
        ' 已经叉起了腰，似乎为有 ',
        you.get_colored_name(),
        ' 这样一名同志而感到自豪。',
      ]);
      await digital.say_and_wait(['也就是说，', callname, ' 也是重要的存在！']);
      await era.printAndWait([
        '把一切',
        digital.uma_sex_title,
        '放在心口上，也把 ',
        you.get_colored_name(),
        ' 放在了心口上。',
      ]);
      await digital.say_and_wait([
        '这么多赛',
        digital.uma_sex_title,
        '每天带着炙热的念想奔走着',
      ]);
      await digital.say_and_wait([
        '这个世界简直就是，大',
        digital.uma_sex_title,
        '酱尊死时代！',
      ]);
      await era.printAndWait([
        '漂亮地挥出手指，指向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await digital.say_and_wait([
        '无论是前后左右，都有闪闪发光的',
        digital.uma_sex_title,
        '酱！',
      ]);
      await digital.say_and_wait('不知道什么时候就会尊死，就像在战场一样');
      await digital.say_and_wait(
        '在这个战场一起奔跑，有时受到感动暴击，有时分享喜悦',
      );
      await digital.say_and_wait('这就是，战友啊！');
      era.drawLine();
      await digital.say_and_wait('但是，是不是我一直被支持？');
      await digital.say_and_wait('甘心于此是不是有点拥抱黑暗了？');
      await digital.say_and_wait([
        '所以啊，我想，我也想为 ',
        callname,
        ' 做点什么，',
        callname,
        ' 想做的事情，就让我来实现！',
      ]);
      await digital.say_and_wait('来吧来吧！会尽全力的哦！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 不是压抑自己喜欢的事这点令 ',
        you.get_colored_name(),
        ' 放松了，同时又为',
        digital.sex,
        '能替 ',
        you.get_colored_name(),
        ' 着想而感到高兴。',
      ]);
      await era.printAndWait([
        digital.sex,
        '一直带着对',
        digital.uma_sex_title,
        '不求回报的爱奔跑着。',
      ]);
      await era.printAndWait([
        '然后，',
        you.get_colored_name(),
        ' 想做的事情是什么呢？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 正是想要应援这个身影，才成为了',
        digital.sex,
        '的训练员，想要做的正是……',
      ]);
      await you.say_and_wait('想看到数码你朝气满满的样子。');
      await era.printAndWait([
        '想看着',
        digital.sex,
        '在应援时候全力以赴的样子，想看着',
        digital.sex,
        '在比赛时候无人可挡的样子，',
      ]);
      await era.printAndWait([
        '想看着',
        digital.sex,
        '在推',
        digital.uma_sex_title,
        '时候尊死的样子，想看着',
        digital.sex,
        '和 ',
        you.get_colored_name(),
        ' 讨论',
        digital.uma_sex_title,
        '时候滔滔不绝的样子。',
      ]);
      await era.printAndWait([
        '万言就归于一言，想看到',
        digital.sex,
        '开心的样子。',
      ]);
      await digital.say_and_wait('想看到我朝气……满满？');
      await digital.say_and_wait('和我对推的情感……是一样的？');
      await you.say_and_wait('对。');
      await era.printAndWait([
        '但是 ',
        digital.get_colored_name(),
        ' 啊，还是很不自信。',
      ]);
      await digital.say_and_wait('对我……吗，对给花当花盆，给主唱当伴舞的我？');
      await digital.say_and_wait('不，就是那个，为什么呢？虽然还是难以置信。');
      await digital.say_and_wait(
        '也……呜，有点开心，不如说，嗯，很光荣，或者说，有点难为情？',
      );
      await digital.say_and_wait('像是出了本的画师收到了感想的时候？');
      await era.printAndWait('可真是很恰当啊。');
      await digital.say_and_wait('也就是……是——');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 害羞得把脸都遮起来了，是——是什么啊，真有趣呐。',
      ]);
      await digital.say_and_wait('那个——');
      await digital.say_and_wait('继续推活！我可不会再有所顾虑了哦！');
      await era.printAndWait('终于啊——');
      await digital.say_and_wait('要全力地朝气满满了！');
      await era.printAndWait(['是认识的 ', digital.get_colored_name(), '。']);
      await digital.say_and_wait([
        '那那！就快去摄取',
        digital.uma_sex_title,
        '酱能量吧！',
      ]);
      await digital.say_and_wait('GOGOGO！');
      await era.printAndWait('跑起来吧！');
      await era.printAndWait(
        '蓝色的海洋虽美，但果然还是橘黄的灯光更适合这个节日。',
      );
      await era.printAndWait([
        '不是到这边无人的沙滩，而是和 ',
        digital.get_colored_name(),
        ' 一起在祭典里面尽情蹦跳！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = '经典湿身，不过是你';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} d_call_t 爱丽数码对爱丽速子的称呼
     * @param {PrintedSpan} t_call_d 爱丽速子对爱丽数码的称呼
     */
    const f = async (digital, tachyon, you, callname, d_call_t, t_call_d) => {
      await era.printAndWait(
        '作为训练员，除了平时指导训练的工作外，还是有一些其他的杂项工作的。',
      );
      await era.printAndWait([
        '虽然今天是',
        digital.uma_sex_title,
        '的休息日，但是今天 ',
        you.get_colored_name(),
        ' 还是来到了教学楼，来提交',
        digital.uma_sex_title,
        '预先参赛资料。',
      ]);
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 把事情办完，从办公室出去，却发现，窗外已经稀稀疏疏下起了雨。',
      ]);
      await era.printAndWait([
        '幸运的是，',
        you.get_colored_name(),
        ' 带了伞。',
      ]);
      await era.printAndWait([
        '正准备回去时，',
        you.get_colored_name(),
        ' 看到了一个站在走廊下的粉色身影。',
      ]);
      await era.printAndWait([
        '是 ',
        digital.get_colored_name(),
        '，马耳耷拉着，有点无精打采，看起来没带伞。感觉是在某些作品常会发生的一幕。',
      ]);
      await era.printAndWait([
        '但，让人疑惑的是，',
        you.get_colored_name(),
        ' 在不远处的雨中，看到了撑着伞的 ',
        tachyon.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait('不叫住速子吗？');
      await digital.say_and_wait(['……诶，你应该懂吧？', callname, '？']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 打了几个手势示意后。',
      ]);
      await era.printAndWait([
        '相处了这么久，',
        you.get_colored_name(),
        ' 也逐渐了解了 ',
        digital.get_colored_name(),
        ' 的性格，看起来',
        digital.sex,
        '是不想干扰到 ',
        tachyon.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait('好，懂力，那要不要和我撑一把伞回去。');
      await digital.say_and_wait('感谢！');
      await era.printAndWait([
        '所以，',
        you.get_colored_name(),
        ' 就撑着一把伞，伞下遮着 ',
        you.get_colored_name(),
        ' 和 ',
        digital.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '雨有点变大了，最大的问题是，风也变大了，而且还不定向。',
      );
      await era.printAndWait([
        '这就导致雨像有生命力一般，硬是往 ',
        you.get_colored_name(),
        ' 伞偏向相反的方向入手。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 尽力不让雨淋到 ',
        digital.get_colored_name(),
        '，把伞往 ',
        digital.get_colored_name(),
        ' 方向偏。',
      ]);
      await digital.say_and_wait([
        callname,
        '，虽然我淋雨是不好了，但是我觉得你的身体再怎么说也会比',
        digital.uma_sex_title,
        '弱一点吧？要是你感冒了那可不好！',
      ]);
      await era.printAndWait([
        '可以看得到 ',
        digital.get_colored_name(),
        ' 生气了，马耳都往后背了。',
      ]);
      await you.say_and_wait('这……感觉被伤到了。');
      await era.printAndWait([
        '缓和气氛，和 ',
        digital.get_colored_name(),
        ' 一路打着啊哈继续走。',
      ]);
      await era.printAndWait([
        '但是 ',
        you.get_colored_name(),
        ' 并没有退步，还是尽力遮着',
        digital.sex,
        '。',
      ]);
      await era.printAndWait([
        '很显然，嘴硬的结果就是，回到训练室 ',
        you.get_colored_name(),
        ' 衣服都湿了，幸好 ',
        digital.get_colored_name(),
        ' 没怎么被淋到。',
      ]);
      await digital.say_and_wait(['啊哈哈哈，', callname, ' 你给我先别动。']);
      await era.printAndWait([
        '不不不，这时 ',
        you.get_colored_name(),
        ' 意识到了，虽然担当',
        digital.uma_sex_title,
        '湿身很不妙，但在担当',
        digital.uma_sex_title,
        '前湿身，好像也不太妙。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' 拿起毛巾擦去了 ',
        you.get_colored_name(),
        ' 头上的水珠。',
      ]);
      await era.printAndWait(
        '把衣服脱了后又擦了身子，再拿一件干毛巾盖住身子，只能算是权宜之计。',
      );
      await you.say_and_wait('非常感谢，下面就让我自己来吧。');
      await era.printAndWait([
        '被这样擦身体，',
        you.get_colored_name(),
        ' 或多或少都有点不好意思，',
      ]);
      await era.printAndWait([
        '毕竟 ',
        you.get_colored_name(),
        ' 都是一个成年人。',
        digital.get_colored_name(),
        ' 低下了头，',
        you.get_colored_name(),
        ' 看不到',
        digital.sex,
        '的表情，只能从马耳判断，',
        digital.sex,
        '应该不是不高兴……',
      ]);
      await era.printAndWait('还好吧？');
      era.drawLine();
      await digital.say_and_wait(
        '呼呀，淋了雨洗过澡之后再躺进被窝里，保持良好的睡眠，才可以让明日更有精力的推活啊！',
      );
      await digital.print_and_wait([
        '同舍的 ',
        d_call_t,
        ' 好像还在研究室，虽然平时也一样。',
      ]);
      await digital.print_and_wait('额，好像忘记写日记了来着……');
      await digital.print_and_wait(
        '算了，就躺进去，回忆一下今天的推活，为明天做准备吧！',
      );
      await digital.print_and_wait([
        '嗯嗯，早上先是进行了在',
        digital.uma_sex_title,
        '酱跑过的草地里享福，中午在食堂摄入推活能量，下午……',
      ]);
      await digital.print_and_wait([
        '下午……是 ',
        callname,
        '……额是……白嫩嫩的肌肤，略有些许形状的腹肌，滴水的头发……',
      ]);
      await digital.print_and_wait('不是不是不是，数码，你在想什么啊！');
      await digital.print_and_wait([
        '感觉是很受',
        digital.uma_sex_title,
        '欢迎的类型……',
      ]);
      await digital.print_and_wait(
        '不不不，数码碳，让我们先用现有知识解读一下，数码碳，你不是看了很多同人本吗，还画了不少呢。',
      );
      await digital.print_and_wait('来来来，在里面找一下答案吧！');
      await digital.print_and_wait([
        '是 ',
        callname,
        ' 招揽',
        digital.uma_sex_title,
        '，然后发掘',
        digital.sex,
        '的才能的故事是吧！',
      ]);
      await digital.print_and_wait('然后，怎么样了来着？');
      await digital.print_and_wait(['是', digital.uma_sex_title, '酱察觉……']);
      await digital.print_and_wait('然后自家发电……');
      await digital.say_and_wait('不不不！我为什么会联系到这个，再怎么说也……');
      await tachyon.say_and_wait(['哦呀哦呀，', t_call_d, '，你在说什么呢？']);
      await digital.say_and_wait('噫————！');
      await digital.print_and_wait(['看起来 ', d_call_t, ' 回来得不是时候。']);
    };
    f.title = title;
    return f;
  })(),
  '74-first': (() => {
    const title = '记';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await digital.print_and_wait([
        '今天是让人期待无比初生牛犊的',
        digital.uma_sex_title,
        '酱选拔赛噢！再次感叹女神们的无尽潜力！',
      ]);
      await digital.print_and_wait([
        '然后……遇到了个奇怪的人！该说是遇到还是奇怪呢……看起来',
        you.sex,
        '是同好呢。',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '就在今天，数码碳我，终于解决到底是该跑草地还是泥地的问题啦！值得待会小小庆祝一下，不过现在还是先记录吧。',
      );
      await digital.print_and_wait([
        '就是之前那个人，',
        you.sex,
        '居然给出了一个完美的方案！真的是一语惊醒梦中人啊。',
      ]);
      await digital.print_and_wait([
        '最后，我同意了',
        you.sex,
        '的邀请，成为了',
        you.sex,
        '的担当',
        digital.uma_sex_title,
        '。',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '真的很意外，没想到 ',
        callname,
        ' 居然会和我一起去参加应援活动诶！',
      ]);
      await digital.print_and_wait(
        '我之前从来都没想过，居然能有一个人能跟上我的步伐！',
      );
      await digital.print_and_wait('然后，去了好多地方啊，再回想起来的话……');
      await digital.print_and_wait([
        '现在想想果然，到最后 ',
        callname,
        ' 的脸色也不太好看，看起来要累坏了。',
      ]);
      await digital.print_and_wait([
        '不过即使如此，',
        callname,
        ' 也值得「同志」这一称号！',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '然后，去了好多地方啊，又来了又来了，是圣地巡礼噢！……',
      );
      await digital.print_and_wait(
        '就是去到推们所去过的地方，对推们也有重要意义的地方，模仿推们行为的活动噢！',
      );
      await digital.print_and_wait([
        '我的天呐，',
        callname,
        ' 居然，答应了我的邀请，愿意和我一起折腾。',
      ]);
      await digital.print_and_wait(
        '这简直如同多佛海峡般的共鸣，心脏受损般的共振！',
      );
      await digital.print_and_wait([
        '还有啊还有啊，',
        callname,
        ' 居然知道了很多东西诶！有我完全没知道的推们的知识！果然，还是DD失格了吗……',
      ]);
      await digital.print_and_wait([
        '到了最后，对 ',
        callname,
        ' 进行了界限发言！真的没想到，在宇宙中居然还能有这样一个人肯听我的界限发言啊，感动得都不能自已了……',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '夏季合宿快要到了，到时候就可以看得到穿着泳衣的',
        digital.uma_sex_title,
        '酱们！',
      ]);
      await digital.print_and_wait([
        '在阳光的照耀下，比阳光更闪耀的是——',
        digital.uma_sex_title,
        '酱啊！',
      ]);
      await digital.print_and_wait('飞溅的西瓜，到底是哪位的手笔呢。');
      await digital.print_and_wait('极速的排球，到底会由哪位接住呢。');
      await digital.print_and_wait([
        '还有刨冰，海鲜，全都在为',
        digital.uma_sex_title,
        '酱们增色啊！',
      ]);
      await digital.print_and_wait(['到时候邀请 ', callname, ' 一起去玩吧！']);
      await digital.print_and_wait('……啊');
      await digital.print_and_wait([
        '（坐在笔记本前的粉色',
        digital.teen_sex_title,
        '，停下了笔）',
      ]);
      await digital.say_and_wait('我是不是，一直都考虑的是自己的……');
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '如果说，要是把自私与',
        digital.uma_sex_title,
        '放在天平上掂量，那么天平，肯定会倾向右边。',
      ]);
      await digital.print_and_wait([
        '如果，把',
        digital.uma_sex_title,
        '与 ',
        callname,
        ' 放在天平上掂量呢？',
      ]);
      await digital.print_and_wait(
        '虽然难以承认，但是数码我啊，从目前的行为看来，这个心中的天平都是倾向左边啊。',
      );
      await digital.print_and_wait([
        '所以，至少明天，在夏季合宿，为 ',
        callname,
        ' 做',
        you.sex,
        '想做的事情。',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait('该怎么写呢……');
      await digital.print_and_wait('事实上现在回忆起来，还是很害羞……');
      await digital.print_and_wait(
        '真的，数码碳我还是第一次知道，有这么一个人这么推我，而且还是那个，我的训练员。',
      );
      digital.print('——');
      await digital.print_and_wait('事实上，感觉从那天开始就很奇怪了……');
      await digital.print_and_wait([
        '看到 ',
        callname,
        ' 已经开始觉得坐立不安，该如何为好。',
      ]);
      await digital.print_and_wait(
        '我懂的，我大概懂的所以啊，是感受心的跳动，还是忽略它的述说？',
      );
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '我不得不坦白，我对 ',
        callname,
        ' 有了想法，对的，就是那种，那种爱情的想法。',
      ]);
      await digital.print_and_wait(
        '事实上啊，这么仔细一想，是不是有点不对劲？',
      );
      await digital.print_and_wait([
        '数码碳你想想啊，和 ',
        callname,
        ' 一起去出门推活，',
      ]);
      await digital.print_and_wait(
        '一起出门，一起看电影，一起逛庙会，在海滩述说感情……',
      );
      await digital.print_and_wait('不对吧？');
      await digital.print_and_wait('这不就是约会吗？！');
      await digital.print_and_wait('（虽然约会不仅是那个意思啦。）');
      await digital.print_and_wait([
        '难道事实上我早就已经和 ',
        callname,
        ' 交往了，但其实只是忘了而已吗？！',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '遭了遭了，昨天没记，今天回想起来才觉得万事不妙啊！',
      );
      await digital.print_and_wait('接下来该如何是好……');
      digital.print('……');
      era.println();
      await digital.print_and_wait('今天，');
      await digital.print_and_wait([
        '又和 ',
        callname,
        ' 一起去巡礼了，虽然',
        digital.uma_sex_title,
        '酱们还是依旧如此闪耀，',
      ]);
      await digital.print_and_wait([
        '但和 ',
        callname,
        ' 坐在一起，总会心神不宁地偷瞄 ',
        callname,
        '……',
      ]);
      await digital.print_and_wait([
        '现在回想起来，',
        you.sex,
        '还真是挺帅的啊，而且',
        you.sex,
        '那精神让我都为之敬佩！',
      ]);
      await digital.print_and_wait('……决定了。');
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '今天，与以往不同，我是在早上写下这篇日记的。',
      );
      await digital.print_and_wait(
        '数码，你能行的！额，不是，这样想起来，我没什么魅力啊？',
      );
      await digital.print_and_wait(
        '贫瘠的身体……可谓矮小的身体……就连平时行为，也像一个普普通通……',
      );
      await digital.print_and_wait('不是，更像一个变态啊！');
      await digital.print_and_wait([
        '说起',
        digital.uma_sex_title,
        '就滔滔不绝的，一遇到熟悉的话题就语速不断加快的，这不就是变态吗？',
      ]);
      await digital.print_and_wait([
        '不是，除了 ',
        callname,
        ' 之外，我真的不可能和其他人交往了吧？',
      ]);
      await digital.print_and_wait([
        '诶，能遇到 ',
        callname,
        ' 真的是幸运至极，这就是说，如果过了这村就没这店了！再也找不到这么能理解善待我的人了！',
      ]);
      await digital.print_and_wait('数码啊数码，你这时候就应该立刻行动！');
      await digital.print_and_wait(
        '错过了可能就得下半辈子都捂着枕头用被子盖着脑袋在哭嚎了吧？',
      );
      await digital.print_and_wait([
        callname,
        ' 也是喜欢我的吧？不然的话也不会和我一起去应援的吧？',
      ]);
      await digital.print_and_wait('好好好，成功率可不小呀！');
      await digital.print_and_wait('去去去，不要再等了！');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' 看了一下手机，按理说现在是 ',
        digital.get_colored_name(),
        ' 早就开始训练的时候了，虽然还未到正式训练的时间……',
      ]);
      await era.printAndWait([
        '不禁回想了一下最近 ',
        digital.get_colored_name(),
        ' 的行为，自从上次海滩那次谈话过后，',
        digital.get_colored_name(),
        ' 好像逐渐开始更加关注 ',
        you.get_colored_name(),
        ' 了。',
      ]);
      await era.printAndWait([
        '看起来',
        digital.sex,
        '除了应援',
        digital.uma_sex_title,
        '酱外，也有挺多心思啊。',
      ]);
      await era.printAndWait([
        '想着想着，',
        digital.get_colored_name(),
        ' 已经从远处跑过来了。',
      ]);
      await era.printAndWait('嗯？怎么脸看起来有点憋红？');
      await era.printAndWait(
        '该不会是受伤了所以才这样吧？今天也是比平时迟了一点。',
      );
      await you.say_and_wait('数码！快停下来！');
      await digital.say_and_wait('诶！');
      await era.printAndWait([
        '快步跑到因惊讶而停下的 ',
        digital.get_colored_name(),
        ' 跟前。',
      ]);
      await era.printAndWait([
        '蹲下仔细观察了 ',
        digital.get_colored_name(),
        ' 的腿部。',
      ]);
      await digital.say_and_wait(['那个……', callname, '？']);
      await era.printAndWait('嗯……至少看起来没有红肿……');
      await you.say_and_wait('是不是腿部受伤了？要不要去保健室？');
      await digital.say_and_wait('诶？');
      await era.printAndWait([
        '遭了，',
        digital.get_colored_name(),
        ' 好像还没意识到，看起来得先查看一下了。',
      ]);
      await era.printAndWait(
        '先检查一下膝盖，用左手扶住凸起外侧，用右手轻按里侧韧带，嗯，没有僵硬的感觉。',
      );
      await digital.say_and_wait('那个，我说……');
      await era.printAndWait(
        '然后是大腿，股二头肌和股直肌都处于很好的放松状态。',
      );
      await digital.say_and_wait('能不能先……停下？');
      await you.say_and_wait('这怎么能停！');
      await era.printAndWait('接着是小腿，小腿肌看起来状态完美。');
      await era.printAndWait(
        '最后是脚了，不过还得先脱鞋，这样直接脱的话如果有伤肯定会造成二次伤害……',
      );
      await digital.say_and_wait([callname, '！我没有问题啦！']);
      await you.say_and_wait('那为什么今天状态这么奇怪？');
      await era.printAndWait([
        '还处于半蹲的状态仰着头看着 ',
        digital.get_colored_name(),
        ' 的脸，看起来更发的红了。',
      ]);
      await digital.say_and_wait('那个啊……先！先去训练室再说明吧！');
      await you.say_and_wait('但是……');
      await digital.say_and_wait('……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 只是一言不发着盯着 ',
        you.get_colored_name(),
        '。',
      ]);
      era.drawLine();
      await you.say_and_wait('那，可以说明了吗？腿是没问题是吧？');
      await digital.say_and_wait('那个……先说明啊，腿是肯定没问题的。');
      await you.say_and_wait('……那是为什么……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' 低着头，玩弄着手指，只能一个一个字吐出来。',
      ]);
      await digital.say_and_wait('事实上……我……自从……诶……');
      await era.printAndWait([
        '说到一半，',
        digital.get_colored_name(),
        ' 又叹起了气。',
      ]);
      await you.say_and_wait('要不我先聊下吧。');
      await you.say_and_wait('这里也不好聊，我们就一起出去吧。');
      await digital.say_and_wait('……啊。');
      await era.printAndWait(
        '起身，打开训练室的门，去到训练场，爬上训练场的看台。',
      );
      await era.printAndWait([
        '赛道，早上的朝阳恰好是给勤奋训练的',
        digital.uma_sex_title,
        '最好的咖啡。',
      ]);
      await digital.say_and_wait(['那个，', callname, '？']);
      await you.say_and_wait('去下一个地方吧。');
      await digital.say_and_wait('啊？');
      await era.printAndWait([digital.get_colored_name(), ' 会跟上来的。']);
      await era.printAndWait('河边，正午照耀下的河流亮得晃眼。');
      await digital.say_and_wait([callname, '，你是不是想……']);
      await era.printAndWait('神社，下午斑驳树影恰好能遮住朝拜之地。');
      await digital.say_and_wait('……');
      await era.printAndWait('公园，趁太阳还没下班灯光就早早替班了。');
      await digital.say_and_wait('……');
      await era.printAndWait('海边，没有灯光的蓝色海岸只是由月光照明。');
      await digital.say_and_wait('……');
      await digital.say_and_wait('跟着走了一圈，感觉怎么着都无所谓了。');
      await you.say_and_wait('那就好。');
      await digital.say_and_wait([callname, '。']);
      await you.say_and_wait('嗯。');
      await digital.say_and_wait('我喜欢你。');
      era.print(['此刻，', you.get_colored_name(), ' 的选择：']);
      era.printButton('接受', 1);
      era.printButton('拒绝', 2);
      const ret = await era.input();
      await digital.print_and_wait([
        '真是狼狈啊，没想到表白都要由 ',
        callname,
        ' 来引导。',
      ]);
      if (ret === 1) {
        await digital.print_and_wait('不过，成功了。');
        await digital.print_and_wait('对，成功了。');
        await digital.print_and_wait(
          '本来应该是更欣喜才对的，不过现在的感觉更多的是……',
        );
        await digital.print_and_wait('一种洋溢的幸福感。');
      } else {
        await digital.print_and_wait('哈哈哈哈，结果，还是失败了。');
        await digital.print_and_wait([
          '不过，我懂了，我和 ',
          callname,
          ' 的关系并不仅是男女关系。',
        ]);
        await digital.print_and_wait('这其中有着更为复杂的情感所在……');
        await digital.print_and_wait(
          '想了很多，想写的很多，但是下不了笔……笔记本都被弄湿了……',
        );
        await digital.print_and_wait('还是觉得不甘啊……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-after': (() => {
    const title = '一次不行，那就来第二次，这不是理所当然的吗！';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     */
    const f = async (digital, you) => {
      await digital.print_and_wait(
        '数码呀数码，过了这么久了，我终于也从痛苦的深渊中挣扎出来了！',
      );
      await digital.print_and_wait(
        '不过，这么一想，果然！还是喜欢！还是喜欢得不得了！',
      );
      await digital.print_and_wait('所以，再来一次！这次数码你一定能成功的！');
      era.print(['再一次，', you.get_colored_name(), ' 的选择是：']);
      era.printButton('接受', 1);
      era.printButton('拒绝', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.print_and_wait('呜啊啊啊啊啊！成了！');
        await digital.print_and_wait('为什么？');
        await digital.print_and_wait('这不重要，成了才重要！');
      } else {
        await digital.print_and_wait('不是，这不对吧？');
        await digital.print_and_wait('唔啊啊啊啊，不行！');
        await digital.print_and_wait('就算是数码我，我也是有追求的！');
        await digital.print_and_wait('我一定要，拿下！');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-first': (() => {
    const title = '同居！果然还是会这样的吧？';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} mcqueen 目白麦昆
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} machan 真弓快车
     * @param {CharaTalk} tarumae 北港火山
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} y_call_d 玩家对爱丽数码的称呼
     * @param {string} child 玩家对孩子的称呼（孩子一定是马娘，所以也会受到游戏选项角色性别的影响）
     * @param {string} parent 玩家对孩子的关系
     */
    const f = async (
      digital,
      mcqueen,
      coffee,
      tachyon,
      machan,
      tarumae,
      you,
      callname,
      y_call_d,
      child,
      parent,
    ) => {
      await era.printAndWait(
        '如果说，每天结束繁忙的工作，回到家里，闻到了从厨房传来的香味，还能听到有人在哼歌，那一定是偶然被大卡车送走又被消除记忆了。',
      );
      await era.printAndWait([
        '所以说，到底是什么时候开始，',
        y_call_d,
        ' 拿到了钥匙，来到了 ',
        you.get_colored_name(),
        ' 的家呢？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 还很清晰地记得，是在一个夜晚，在一个海滩上，',
        y_call_d,
        ' 向 ',
        you.get_colored_name(),
        ' 表白，然后就是，顺理成章地，',
        y_call_d,
        ' 成为了 ',
        you.get_colored_name(),
        ' 的女朋友。',
      ]);
      await era.printAndWait('事实上……交往上，和平日上的行为也没啥区别……');
      await era.printAndWait('还是一样地，一起推活，一起圣地巡礼。');
      await era.printAndWait('接着呢？');
      await digital.say_and_wait('不行，这样不就没有区别了吗？！');
      await digital.say_and_wait('是我之前的猜想是正确的吗……不对！');
      await era.printAndWait([
        '嗯……然后为了做出改变，听说 ',
        y_call_d,
        ' 是参照了某些同人志，然后从 ',
        you.get_colored_name(),
        ' 的手上借来了钥匙。',
      ]);
      await era.printAndWait(
        '虽然是借走了，但在最开始几天还没有任何事情发生，想着，也许只是一时来兴吧，也把这件事放到了一边。',
      );
      await era.printAndWait([
        '所以当某天，',
        you.get_colored_name(),
        ' 拖着疲倦的身体，好不容易拿出钥匙插进锁孔，意识游荡时听到了除金属摩擦的声音时，还是有点被意外的。',
      ]);
      await era.printAndWait([
        '后来啊，',
        y_call_d,
        ' 来 ',
        you.get_colored_name(),
        ' 家也越来越频繁了。',
      ]);
      await era.printAndWait('原本家里单调的气息也逐渐混杂了另样的色彩。');
      await era.printAndWait([
        '不过，最令 ',
        you.get_colored_name(),
        ' 感到有些许奇怪并想笑的是，最开始占领 ',
        you.get_colored_name(),
        ' 房间的是……',
      ]);
      await era.printAndWait(['各种', digital.uma_sex_title, '周边。']);
      await era.printAndWait([
        '比如说 ',
        tachyon.get_colored_name(),
        ' 红茶杯、',
        coffee.get_colored_name(),
        ' 咖啡杯、',
        mcqueen.get_colored_name(),
        ' 鼠标垫、',
        machan.get_colored_name(),
        ' 玩偶……',
      ]);
      await era.printAndWait([
        '其中最让 ',
        you.get_colored_name(),
        ' 觉得神奇的是，甚至还有tomachop的玩偶，就是 ',
        tarumae.get_colored_name(),
        ' 所在的苫小牧的那个吉祥物！',
      ]);
      await era.printAndWait([
        '还有一天正当在家里看到 ',
        y_call_d,
        ' 搬着一个烘干机想要放到房间时，',
        you.get_colored_name(),
        ' 觉得这样下去可不行了！得出重拳！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 虽然有着很多世上认为最为珍贵的 ',
        y_call_d,
        ' 周边，比如一些胜利的旗帜，原型的玩偶等……但是基本不是在训练室就是在被官方保管。',
      ]);
      await era.printAndWait([
        '走走走！去超市，把 ',
        y_call_d,
        ' 的所有周边都买几份！',
      ]);
      await era.printAndWait('叫店员直接运到家门口！');
      await era.printAndWait([
        '满意地重新鉴赏一下 ',
        y_call_d,
        ' 在各项赛事的英姿。再把玩偶沙发放个，床上放个，电脑上放个，电视上放个……',
      ]);
      await era.printAndWait([
        '然后重新把自己之前一直珍藏的 ',
        y_call_d,
        ' 作品从隐秘的小角落摆到沙发旁……',
      ]);
      await era.printAndWait([
        '哈哈哈哈，完成了！现在就想看到 ',
        y_call_d,
        ' 的表情吖！',
      ]);
      await era.printAndWait('然而结果是——');
      await era.printAndWait([
        '这对 ',
        y_call_d,
        ' 的冲击力太大，',
        you.get_colored_name(),
        ' 只能眼睁睁地看着',
        digital.sex,
        '双脸越来越红最后沉闷一声倒在地上。',
      ]);
      await era.printAndWait(
        '除了这些相对有趣的故事外，平日的生活事实上更加平淡。',
      );
      await era.printAndWait(
        '平淡无奇，就像打开电饭煲后，看到的升腾起白雾的米饭。',
      );
      await era.printAndWait([
        '所以当 ',
        you.get_colored_name(),
        ' 和 ',
        y_call_d,
        ' 的孩子出生时，除了喜悦外，也会猛然发觉，原来已经这么久了啊。',
      ]);
      await era.printAndWait([
        '发现 ',
        digital.sex_code === 1 ? '自己' : y_call_d,
        ' 怀孕的记忆，也只是模糊而不可察，带着一丝暖流。',
      ]);
      await era.printAndWait([
        '最一开始',
        child,
        '就很让人省心，看到 ',
        y_call_d,
        '，看到各种',
        digital.uma_sex_title,
        '周边就会安定，只是偶尔会模仿 ',
        y_call_d,
        ' 发出奇怪的声音。',
      ]);
      await era.printAndWait([
        child,
        '很像 ',
        y_call_d,
        '，',
        digital.sex,
        '从小就很喜欢',
        digital.uma_sex_title,
        '，特别是喜欢坐在电视前看 ',
        y_call_d,
        ' 的Live。',
      ]);
      await era.printAndWait([
        '倒不如说是 ',
        you.get_colored_name(),
        ' 作为',
        parent,
        '所以经常播放 ',
        y_call_d,
        ' 的录像？',
      ]);
      await era.printAndWait([
        '而每次看到 ',
        you.get_colored_name(),
        ' 和',
        child,
        '在看录像时，',
        y_call_d,
        ' 最开始总是化身蒸汽机躲进房间里加湿，但到后来也会靠着 ',
        you.get_colored_name(),
        ' 抱着',
        child,
        '一起看了。',
      ]);
      await era.printAndWait([
        '不管怎样，',
        child,
        '在悉心照料下，健康地成长了。',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        '是成长得很快的，转眼间，',
        digital.sex,
        '就已经要进特雷森校园了。',
      ]);
      await era.printAndWait([
        '跟 ',
        y_call_d,
        ' 商量，',
        y_call_d,
        ' 觉得照',
        child,
        '那个喜欢',
        digital.uma_sex_title,
        '的样，让',
        digital.sex,
        '自己去参加开幕式感觉会大事不妙。',
      ]);
      await era.printAndWait([
        '不过还是决定，这件事还是',
        digital.sex,
        '自己去体会比较好。',
      ]);
      await era.printAndWait([
        '但是啊，送别前一晚，',
        y_call_d,
        ' 再次整理行李，企图再塞进更多的物资。',
      ]);
      await era.printAndWait([
        '明明家里离特雷森这么近，明明 ',
        you.get_colored_name(),
        ' 还是特雷森的训练员，明明',
        child,
        '随时都可以见到你们，但 ',
        you.get_colored_name(),
        ' 也在苦恼着是不是还缺必备物品。',
      ]);
      await era.printAndWait([y_call_d, ' 也笑了，说着这难道还是永别不成。']);
      await era.printAndWait([child, '倒是哭得很大声，让你们安慰了很久。']);
      await era.printAndWait([
        '不过，明天终会成为今天，现在是',
        digital.sex,
        '要上学的时候了。',
      ]);
      await era.printAndWait(
        '夜晚的雾气还未散去，远边的天际也只是微红，甚至连路灯都还亮着。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 跟 ',
        y_call_d,
        ' 拿着行李，跟',
        child,
        '来到楼下。',
      ]);
      await era.printAndWait([
        '虽然',
        child,
        '坚决要自己拿下去，但 ',
        you.get_colored_name(),
        ' 和 ',
        y_call_d,
        ' 却不肯松手。',
      ]);
      await era.printAndWait(['纠缠不过你们，', child, '也只能作罢。']);
      await era.printAndWait([
        '面前就是',
        digital.uma_sex_title,
        '专用道了，沿着这条路就可以很快到达特雷森，身为',
        digital.uma_sex_title,
        '，甚至不用叫出租车。',
      ]);
      await era.printAndWait([
        '把行李放下，虽然没多少，但对于 ',
        you.get_colored_name(),
        ' 来说还是挺累的，相比 ',
        y_call_d,
        '，就拿得多得多。',
      ]);
      await era.printAndWait([
        '诶呀，昨晚没睡好，还一大早起来搬东西，',
        you.get_colored_name(),
        ' 有点迷糊。',
      ]);
      await era.printAndWait([
        y_call_d,
        ' 关心地用身体支撑了一下 ',
        you.get_colored_name(),
        '，不过，看着',
        digital.sex,
        '的眼睛，',
        you.get_colored_name(),
        ' 知道',
        digital.sex,
        '也没睡好。',
      ]);
      await era.printAndWait([
        '怎么了？',
        you.get_colored_name(),
        ' 环视了一下，',
        child,
        '呢？',
      ]);
      await era.printAndWait(['哦哦哦！就在 ', y_call_d, ' 旁边呢。']);
      await era.printAndWait([
        child,
        '紧紧拥抱了 ',
        y_call_d,
        '，然后也紧紧拥抱了 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '很轻柔，得紧紧拥抱才能感受到',
        digital.sex,
        '的存在，还在成长期的',
        digital.sex,
        '也没多高，就像和 ',
        y_call_d,
        ' 一样。',
      ]);
      await you.say_as_passer_by_and_wait(child, '那么，我要走啦！再见！');
      await era.printAndWait(['挥着手，', child, '跑起来了。']);
      await era.printAndWait('诶！等等，行李还没拿呢！');
      await era.printAndWait([
        '焦急地想要 ',
        y_call_d,
        ' 追上去，结果却发现 ',
        y_call_d,
        ' 只是看着',
        child,
        '远处的方向。',
      ]);
      await era.printAndWait('等一下啊！怎么了？');
      await digital.say_and_wait([
        callname,
        ' 啊，既然',
        child,
        '就在特雷森，那直接给',
        digital.sex,
        '送过去不也挺方便吗？',
      ]);
      await you.say_and_wait([
        '不是，',
        y_call_d,
        '，',
        child,
        digital.sex,
        '！',
        digital.sex,
        '……',
      ]);
      await era.printAndWait(
        '就像是经常路过的路口，经常光顾的店铺，经常玩的游戏，突然说要封路了，要倒闭了，要关服了……',
      );
      await era.printAndWait([
        '明明以为会万年不变的，却突然消失的那种荒诞感，此刻却突然充满了 ',
        you.get_colored_name(),
        ' 的内心。',
      ]);
      await era.printAndWait(['再定睛一看，', child, '早已没了身影。']);
      await you.say_and_wait([y_call_d, '！这，这是怎么回事！这……这为什么……']);
      await digital.say_and_wait(
        '听说，是一个幻想，是一个疾病，或者是一个灵异现象……',
      );
      await digital.say_and_wait([
        '大众普遍认为，这是一个精神疾病……传播方式不明，范围仅在',
        digital.uma_sex_title,
        '及所接触人群……',
      ]);
      await era.printAndWait('那……那是为什么……创造出来只是为了分离吗？');
      await era.printAndWait([
        '正当恍惚间，',
        you.get_colored_name(),
        ' 发现，',
        y_call_d,
        ' 此刻却看着特雷森的方向，再也不说一句话。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 猛然意识到，',
        y_call_d,
        ' 和 ',
        you.get_colored_name(),
        ' 的感受是一样的。',
      ]);
      await era.printAndWait([
        '平日作为训练员，一直在支撑着 ',
        y_call_d,
        ' 的 ',
        you.get_colored_name(),
        '，在这一次，',
        digital.sex,
        '在支撑着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        digital.sex,
        '尽量以一种平和的语气，来冲淡 ',
        you.get_colored_name(),
        ' 的伤感。从背后抱着 ',
        y_call_d,
        '，才发现，',
        y_call_d,
        ' 在发抖。',
      ]);
      await era.printAndWait('本来就娇小的身体，显得更脆弱了。');
      await era.printAndWait('石头扔进了平静的湖面，掀起了巨浪。');
      await digital.say_and_wait('……呜呜呜……');
      await digital.say_and_wait('我……我早该知道的……');
      await digital.say_and_wait('事实上……我……数码碳……早就知道……');
      await digital.say_and_wait('当……意识到一段时间的记忆是那么模糊不清……');
      await digital.say_and_wait('当……注意到家里的育儿物资从没变少……');
      await digital.say_and_wait('当……翻到以前绘制的同人志……');
      await digital.say_and_wait('我那时候啊……就已经明白……');
      await digital.say_and_wait([
        '是我爱 ',
        callname,
        ' 太深……却又不敢……再继续深入……',
      ]);
      await digital.say_and_wait(['并且……', callname, ' 你也受到了影响……']);
      await digital.say_and_wait(['所以啊……', child, '诞生了……']);
      await digital.say_and_wait(['这就是', digital.sex, '的全部……']);
      await era.printAndWait([
        '在 ',
        y_call_d,
        ' 带着哽咽的话中，',
        you.get_colored_name(),
        ' 终于明白了，',
        child,
        '就是 ',
        y_call_d,
        ' 愿望的产物。',
      ]);
      await digital.say_and_wait([
        '只要……只要我们把刚才的事情忘记……那么，我们还能再见到',
        child,
        '……',
      ]);
      await digital.say_and_wait([
        '如果……我们记住，那么',
        child,
        '……就会……真的消失不见……',
      ]);
      await digital.say_and_wait(
        '呵呵呵……事实上，这不就是选择要不要面对现实吗……这根本不就是所谓的精神疾病吗……',
      );
      era.printButton('记住（升级关系）', 1);
      era.printButton('遗忘（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait('不对！');
        await you.say_and_wait([
          child,
          digital.sex,
          '并不是你的想象！',
          digital.sex,
          '是我们爱情的象征啊！',
        ]);
        await era.printAndWait([
          '正是在两人止步不前时，是',
          child,
          '拉起了 ',
          y_call_d,
          ' 和 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
        await you.say_and_wait([
          child,
          digital.sex,
          '提醒了我，是时候了，我们该更近一步了！',
        ]);
        await era.printAndWait([
          '转过 ',
          y_call_d,
          ' 的身子，',
          y_call_d,
          ' 本来已经逐渐停止流泪的眼睛再次湿润。',
        ]);
        await digital.say_and_wait('你的意思是说？');
        await you.say_and_wait([y_call_d, '，我们结婚吧。']);
        await digital.say_and_wait(
          '哈哈哈……这样看来，担心这个的我是真的傻呢……',
        );
        await era.printAndWait([
          y_call_d,
          ' 笑了，眼里的泪珠化作珍珠，是 ',
          you.get_colored_name(),
          ' 最为珍惜的事物。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 吻了上去。']);
        await era.printAndWait('咸的。');
        await era.printAndWait('想必是带有兴奋的泪水');
        await era.printAndWait('苦的。');
        await era.printAndWait('想必是带有委屈的泪水。');
        await era.printAndWait('……甜的。');
        await era.printAndWait('想必是……不再是泪水。');
        await era.printAndWait('舌头交融，身体相贴，双手交织。');
        await era.printAndWait(['再也没人能分开你们。']);
      } else {
        await era.printAndWait(
          '一切的事情就像是一场噩梦，但事实上什么都没有发生。',
        );
        await era.printAndWait([
          '你们的',
          child,
          '一切正常地入学了特雷森，',
          you.get_colored_name(),
          ' 作为',
          parent,
          '自然也成为了',
          child,
          '的训练员。',
        ]);
        await era.printAndWait([
          y_call_d,
          ' 作为',
          digital.sex_code === 1 ? '父亲' : '母亲',
          '，也经常和',
          child,
          '一并训练。',
        ]);
        await era.printAndWait(
          '一大一小（虽然大的也挺小）一并训练，真是一个珍奇的画面啊。',
        );
        await era.printAndWait([
          '为了',
          child,
          '的成长着想，',
          you.get_colored_name(),
          ' 是想让',
          digital.sex,
          '在特雷森留宿的。',
        ]);
        await era.printAndWait([
          '但是',
          digital.sex,
          '似乎还是比较挂念父母，纠缠不过，还是暂时让',
          digital.sex,
          '回家住好了。',
        ]);
        await era.printAndWait([
          '一切都很正常，除了',
          child,
          '好像也有点像初期的 ',
          y_call_d,
          ' 那样经常尊死，嗯……虽然 ',
          y_call_d,
          ' 现在也差不多。',
        ]);
        await era.delay(1000);
        era.println();
        await digital.say_and_wait('……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-after': (() => {
    const title = '终究是，梦幻的泡影';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {string} child 玩家对孩子的称呼（孩子一定是马娘，所以也会受到游戏选项角色性别的影响）
     */
    const f = async (digital, you, callname, child) => {
      await you.say_and_wait([
        '周末了，要不在忙碌的过程中看一下',
        child,
        '吧？',
      ]);
      await you.say_and_wait([
        '正来到了学生宿舍门口，想着打个电话给',
        child,
        '的，然后……',
      ]);
      await digital.say_and_wait(['诶？', callname, ' 你在这里干什么？']);
      era.printButton(`说什么呢，我在等${child}啊。`, 1);
      await era.input();
      await era.printAndWait([
        '听到这番话的 ',
        digital.get_colored_name(),
        '，不知为何，却低下了头。',
      ]);
      await digital.say_and_wait(
        ['……是，是时候了吗……要，再次告诉 ', callname, ' 真相吗……'],
        true,
      );
      await digital.print_and_wait('我该怎么办……');
      era.printButton('告诉（升级关系）', 1);
      era.printButton('不告诉（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.say_and_wait(
          '我……我本以为，再次的告知仅会带来……泪水——',
          true,
        );
        await digital.say_and_wait(
          ['不过，这种感觉……被 ', callname, ' 拥抱求婚的感觉……真的是太好了……'],
          true,
        );
      } else {
        await digital.say_and_wait([
          '算了，就这样吧，和 ',
          callname,
          ' 与',
          child,
          '的每一天，都十分快乐',
        ]);
        await digital.say_and_wait(
          '我希望，这样的每一天，都持续下去，请原谅我。',
          true,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '信';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} y_call_d 玩家对爱丽数码的称呼
     * @param {string} child 玩家对孩子的称呼（孩子一定是马娘，所以也会受到游戏选项角色性别的影响）
     */
    const f = async (digital, you, callname, y_call_d, child) => {
      await you.say_as_unknown_and_wait('听说数码老师的新刊要发售了噢');
      await you.say_as_unknown_and_wait(
        '诶？真的吗？隔了这么久，终于能看到新刊了吗？',
      );
      await you.say_as_unknown_and_wait('就在这下个月在东京的展子呢！');
      era.println();
      await era.printAndWait('所以说……到底是谁开始造的谣！');
      await era.printAndWait([
        '没过几天就在网上发酵，现在所有数码老师的粉丝都以为 ',
        y_call_d,
        ' 下个月会出新刊。',
      ]);
      await era.printAndWait([
        '而 ',
        y_call_d,
        ' 看到这些推文的时候，第一反应是……愧疚。',
      ]);
      await digital.say_and_wait(
        '仔细一想……我好像很久没出过新刊了……啊啊啊，真的是万分抱歉。',
      );
      await era.printAndWait('对着屏幕低下了头，为在屏幕外的粉丝道歉。');
      await era.printAndWait([
        '接着，',
        y_call_d,
        ' 转过身来，拉着 ',
        you.get_colored_name(),
        ' 的手，眼里冒着泪光，做出一副要哭出来的表情。',
      ]);
      await era.printAndWait([
        '诶，又是这样，',
        you.get_colored_name(),
        ' 心想。',
      ]);
      await era.printAndWait([
        '这代表着',
        digital.sex,
        '要开始闭关了，接下来的家务活什么的都由 ',
        you.get_colored_name(),
        ' 完成，做饭也是。',
      ]);
      await era.printAndWait('倒也不是很累，就是，在这些日子里，会缺乏一些……');
      await era.printAndWait([
        '来自 ',
        y_call_d,
        ' 的能量，不能吸食 ',
        y_call_d,
        ' 了，不能摸头发了，不能搓耳朵了，不能啃尾巴了……',
      ]);
      await digital.say_and_wait('拜托了！');
      await you.say_and_wait('我也不是不认识你。');
      await era.printAndWait('结果，还是答应了，这么说来，有过没答应过的吗？');
      era.drawLine();
      await era.printAndWait([
        '在打扫过程中，肩膀与背部的酸爽提醒 ',
        you.get_colored_name(),
        '，该锻炼了。',
      ]);
      await era.printAndWait(
        '扫地，拖地，本来想着能买一个洗地机器人，但是又意识到，展柜可清理不到。',
      );
      await era.printAndWait([
        '是的，',
        you.get_colored_name(),
        ' 家最难清理的地方，是展柜，很多的展柜，很多的周边。',
      ]);
      await era.printAndWait('诶，拿下鸡毛掸子简单清理下就好。');
      await era.printAndWait([
        '突然，白色的相片吸引了 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '让 ',
        you.get_colored_name(),
        ' 泛起温情的相片是 ',
        you.get_colored_name(),
        ' 与 ',
        y_call_d,
        ' 的结婚照。',
      ]);
      await era.printAndWait([
        '纯白的',
        digital.sex_code === 1 ? '西装' : '婚纱',
        '装饰起粉色的',
        digital.uma_sex_title,
        '，头顶上的红色蝴蝶结依然展示它的存在感，精致的颈部，让人引起呵护之心的手，还有，那含泪的灰蓝色双眼。',
      ]);
      await era.printAndWait([
        '明明感觉并没有过去多久，回想起来穿着',
        digital.sex_code === 1 ? '西装' : '婚纱',
        '的 ',
        y_call_d,
        ' 还在眼前，却又感觉度过了几年。',
      ]);
      await era.printAndWait([
        '不管怎样，看着这幅结婚照，让 ',
        you.get_colored_name(),
        ' 得到了不少能量补充。',
      ]);
      await era.printAndWait('要不就打扫一些携带着重要回忆的东西就好了。');
      await era.printAndWait([
        '推门走进收藏室，里面摆着几个巨大的全方位透明柜子，摆满了各种',
        digital.uma_sex_title,
        '的各种周边。',
      ]);
      await era.printAndWait([
        '这间房间本来是客房的，后面因为 ',
        y_call_d,
        ' 收集的东西多了起来，单独客厅里的展柜已经没位置了，还是单独将一个房间空出来放这些周边了。',
      ]);
      await era.printAndWait([
        '顺带一提，',
        you.get_colored_name(),
        ' 之前所收集的 ',
        y_call_d,
        ' 周边，在最里面的柜子里。',
      ]);
      await era.printAndWait([
        '诶，之前跟',
        digital.sex,
        '较劲不过来，说着「啊哇哇哇！不行不行，果然还是太羞耻了！」，还是放到了这里。',
      ]);
      await era.printAndWait([
        '来到摆着 ',
        y_call_d,
        ' 周边的柜子前，各种形态的 ',
        y_call_d,
        '，看着都能让 ',
        you.get_colored_name(),
        ' 会想到以前的场景。',
      ]);
      await era.printAndWait([
        '高举着应援棒流着口水的 ',
        y_call_d,
        '，想必也没其他',
        digital.uma_sex_title,
        '能有这种周边吧。',
      ]);
      await era.printAndWait([
        '看着看着，逐渐走到了柜子的尽头，然后，',
        you.get_colored_name(),
        ' 看到了——一堆行李。',
      ]);
      await era.printAndWait('这是……');
      await era.printAndWait([
        '想起来了，是',
        child,
        '的行李，',
        digital.sex,
        '的行李。',
      ]);
      era.drawLine();
      await digital.print_and_wait(
        '诶呀诶呀，终于，完成得差不多了，接下来就只剩下……哦哦哦……到吃饭的时候了啊。',
      );
      await digital.print_and_wait('今天的饭是什么呢～');
      await digital.print_and_wait('打开门看到的居然是摆满了一桌的菜？！');
      await digital.print_and_wait('今天是什么特别日子吗？数码我忙忘了吗？！');
      await digital.print_and_wait('不妙不妙，数码啊数码，你怎么能把……诶？');
      await you.say_and_wait([y_call_d, '，看这表情，是以为错过了什么吗？']);
      await digital.say_and_wait(
        '诶诶诶？是我的，我的错，忙着忙着忙忘掉了啊！数码我就应该升天去见到……',
      );
      await you.say_and_wait(
        '停停停停，稍等，是因为我找到了充满了各种回忆的这个——',
      );
      await digital.print_and_wait(['看到 ', callname, ' 拿起了一个……信封？']);
      await digital.say_and_wait(
        '在这年代，还能看到信真的是很稀奇啊，难道说是那种什么写给未来的信，还或者是什么幽灵的信……',
      );
      await you.say_and_wait('猜到了呢，不过或许不是你想的那样。');
      await digital.print_and_wait([
        '接过 ',
        callname,
        ' 递过来的信，还盖着印泥呢，上面的纹路正是我之前买的特雷森周边，看看落款是……',
      ]);
      await digital.print_and_wait([
        '哦哦哦哦！这还真是吓人啊，没想到，居然是',
        child,
        '的信啊。',
      ]);
      await digital.say_and_wait(
        '难道这是什么从那一边寄过来的信吗？！居然是真实存在的吗？！',
      );
      await digital.say_and_wait(
        '打开了会不会像什么那种恐怖游戏什么的，恶灵附体什么的！',
      );
      await you.say_and_wait('诶，这么说来，要不就打开试试？');
      await digital.say_and_wait(
        '不不不，总感觉要先开个光，把之前万圣节决胜服的那个符咒拿出来先……',
      );
      await digital.print_and_wait(
        '事实上，拿着信封，一直在说什么车轱辘话，手却像是脱力了般，连一封轻飘飘的信都拿不稳。',
      );
      await you.say_and_wait('……');
      await digital.print_and_wait([
        '看着 ',
        callname,
        '，',
        you.sex,
        '……',
        you.sex,
        '应该也是这样吧。',
      ]);
      await digital.print_and_wait([
        '靠着 ',
        callname,
        ' 坐下了，一个椅子挤一下。',
      ]);
      await digital.print_and_wait([
        you.sex,
        '伸过了手，抱紧了我……都能感受到',
        you.sex,
        '手掌心的冷汗。',
      ]);
      await digital.print_and_wait('打开吧。');
      await digital.print_and_wait('沙沙……是里面的纸摩擦的声音。');
      await digital.print_and_wait('揭开印泥，翻开信封，抽出里面折叠的信纸……');
      await digital.print_and_wait('翻开吧。');
      await digital.print_and_wait('翻开信纸，里面写着——');
      era.println();
      era.drawLine();
      await era.waitAnyKey();
      era.setOffset(8);
      era.setWidth(8);
      await era.printAndWait('爸爸妈妈：');
      await era.printAndWait('谢谢你们。', {
        align: 'center',
        isParagraph: true,
      });
      await era.printAndWait(['——你们的', child], { align: 'right' });
      era.drawLine();
      await era.waitAnyKey();
      era.setWidth(24);
      era.setOffset(0);
      era.println();
      await digital.say_and_wait('唔哈，什么嘛，果然啊，当然是写着这些的啊！');
      await you.say_and_wait('这不当然嘛！');
      await digital.say_and_wait(
        '唔噢噢噢，来来来，吃饭吧吃饭吧，好好地休息一下！',
      );
      await digital.print_and_wait([
        '热腾腾的美味佳肴，升起的薄雾，温暖的 ',
        callname,
        '，递到嘴里的嫩滑的汉堡肉。',
      ]);
      await digital.print_and_wait([
        '看着 ',
        callname,
        ' 夹着菜递过来时的笑容，当然是要好好享用。',
      ]);
      await digital.print_and_wait([
        '拍拍 ',
        callname,
        ' 的大腿，嗯，最近有在做家务活健身啊……',
      ]);
      await you.say_and_wait([y_call_d, '？现在？在这里？不打算吃完饭吗？']);
      await digital.say_and_wait(
        '无论是吃完前还是吃完后的结果都一样吧？不一样都是吃吗？咕嘿嘿……吸溜——',
      );
      await digital.print_and_wait('哇，感觉自己发出了很不妙的声音。');
      await digital.say_and_wait(
        '唔噢噢噢哦，对对对，就是现在，都一周了，我都忍到现在了！呜呜呜，你知道这一周我是怎么过来的吗！',
      );
      await digital.say_and_wait(
        '明明，明明数码我都画了一周同人志了，按照惯例，画完后都不是要庆祝一下吗？！',
      );
      await you.say_and_wait([
        '不不不，这是你的问题吧！还有，',
        y_call_d,
        ' 你画完了？',
      ]);
      await digital.say_and_wait(
        '……还，还有一些，但真就还有一些了！而且这重要吗？不应该是我更重要吗？',
      );
      await you.say_and_wait(
        '啊啊啊，你这一周不也把我冷落了！现在还想开吃是吧！待会还是我整理！',
      );
      await digital.print_and_wait('总……总感觉有些抱歉……不过……');
      await digital.say_and_wait('非常抱歉！麻烦你待会整理了！');
    };
    f.title = title;
    return f;
  })(),
};
