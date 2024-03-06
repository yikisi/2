const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const chara_talk = new CharaTalk(19);

const me = get_chara_talk(0);

const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-19/week-start');

handlers[
  event_hooks.race_start
] = require('#/event/edu/edu-events-19/race-start');
handlers[event_hooks.week_end] = require('#/event/edu/edu-events-19/week-end');
handlers[event_hooks.race_end] = require('#/event/edu/edu-events-19/race-end');

handlers[event_hooks.out_start] = async (event_object) => {
  if (era.get('flag:当前互动角色') !== 19) {
    add_event(event_hooks.out_start, event_object);
    return;
  }
  const chara3_talk = get_chara_talk(3),
    chara15_talk = get_chara_talk(15),
    chara58_talk = get_chara_talk(58),
    chara59_talk = get_chara_talk(59),
    chara64_talk = get_chara_talk(64),
    chara65_talk = get_chara_talk(65),
    event_marks = new AgEduMarks();
  chara3_talk.name = '看起来比较孩子气的马娘';
  chara15_talk.name = '看起来毫不在意的马娘';
  chara58_talk.name = '看起来很冒失的马娘';
  chara59_talk.name = '看起来相对成熟的马娘';
  chara64_talk.name = '某个栗毛马娘';
  chara65_talk.name = '看起来像是染了蓝毛的马娘';
  if (event_marks.understand_universe === 1) {
    event_marks.understand_universe++;
    await print_event_name('在宇宙中互相理解', chara_talk);
    await era.printAndWait(
      `${
        chara_talk.name
      }，一个为了${chara_talk.get_uma_sex_title()}酱而存在于世上的${chara_talk.get_uma_sex_title()}，今天也在全力推活！`,
    );
    await era.printAndWait(
      `诶呀诶呀，今天也要去圣地巡游，把之前${chara_talk.get_uma_sex_title()}酱们创造的圣迹全都再仔细地研磨一下啊！`,
    );
    await chara_talk.say_and_wait(
      `哦吼吼，圣地巡礼的时候给训练员带点伴手礼吧。`,
    );
    await me.say_and_wait(
      `虽然不太懂，但看起来你和训练员关系不错呢，和他一起去如何？`,
    );
    await chara_talk.say_and_wait(
      `什么，你说和训练员一起去圣地巡游？哦哦……哦哦哦哦！`,
    );
    await era.printAndWait(`从来没设想过的道路，跟训练员一起？圣地巡游！`);
    await era.printAndWait(`这就像是组队荒野求生带上了贝尔格里尔斯啊！`);
    await chara_talk.say_and_wait(`非常感谢！我这就去邀请！`);
    era.drawLine();
    await era.printAndWait(`真的是完全没想到，数码会过来邀请你一起圣地巡游。`);
    await era.printAndWait(
      `为了担当${chara_talk.get_uma_sex_title()}，像上次一样，你也做好了准备。`,
    );
    await era.printAndWait(
      `按时间来到了约定的集合地点，从${chara_talk.sex}向你挥手的情况下，看起来气志高涨。`,
    );
    await era.printAndWait(
      `就跟平时一样，穿着一件粉色内衬配上灰色外套，按${chara_talk.sex}的性格感觉再印个「I Love UMA」都有可能。`,
    );
    await chara_talk.say_and_wait(
      `真没想到训练员你居然会来！我早就做好被拒绝的准备的……`,
    );
    await me.say_and_wait(`不不不，再怎么想也不会拒绝的吧。`);
    await chara_talk.say_and_wait(`那，就开始吧！圣地巡礼！`);
    await era.printAndWait(`大手一挥，指向了通向电车的大路。`);
    era.drawLine();
    await era.printAndWait(
      `来到了一个很普通的牧场，在栅栏内可以看到悠哉吃草的牛牛，这算圣地吗？`,
    );
    await chara_talk.say_and_wait(`那，就开始吧！圣地巡礼！`);
    await era.printAndWait(
      `来到了一个很普通的牧场，在栅栏内可以看到悠哉吃草的牛牛，这算圣地吗？`,
    );
    await chara_talk.say_and_wait(`不不不，训练员，可不仅要看它的表象啊！`);
    await era.printAndWait(`颇有气势地指向了一片……草丛？`);
    await era.printAndWait(
      `各种各样的杂草兴兴向荣，看起来牧场的主人没有怎么打理。`,
    );
    await me.say_and_wait(`镜花水月？什么时候！`);
    await chara_talk.say_and_wait(`事实上我想指的是这个啦。`);
    await era.printAndWait(
      `看到${chara_talk.sex}拿起的是——四叶草，还粘着露水。`,
    );
    await chara_talk.say_and_wait(
      `没错！有多少${chara_talk.get_uma_sex_title()}把代表幸运的四叶草，送给了同伴，竞争对手？互相拼搏却又互相祝福，呜呜呜——`,
    );
    await me.say_and_wait(
      `不不不，说起四叶草想起的不应该是神社吗？果然应该还得是下着雨的，淋着鸟居的神社……`,
    );
    await era.printAndWait(`把好像不存在的记忆说出了口？`);
    await chara_talk.say_and_wait(`！居然！`);
    await chara_talk.say_and_wait(
      `训练员！你很懂嘛！果然！这种圣地就是要互相交流！`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(
      `那么下一站，就是这个，咋一看像平平无奇的公园，事实上——`,
    );
    await chara_talk.say_and_wait(`是充满着力量的公园啊！`);
    await era.printAndWait(`力……力量？`);
    await chara_talk.say_and_wait(
      `对！无数的${chara_talk.get_uma_sex_title()}来此聚会，来此歇息，还有，那个沙坑！`,
    );
    await me.say_and_wait(`哦哦哦？想起来了，是team gold曾经训练的沙坑吧？`);
    await chara_talk.say_and_wait(`没错！就是……诶？你说……`);
    await era.printAndWait(`等一下，team gold是哪个队伍来着？`);
    await me.say_and_wait(`先不，不管吧，你看下那个摊位，乌拉拉不是摆过吗？`);
    await chara_talk.say_and_wait(`哦哦哦哦哦！`);
    era.drawLine();
    await chara_talk.say_and_wait(
      `好味！好味！这就是王者拉面吗？！真够王者的！`,
    );
    await era.printAndWait(
      `来到了一家深藏巷中的拉面馆，不管是外饰还是里面的装修，都特别有那种“深藏不漏”的感觉？`,
    );
    await chara_talk.say_and_wait(
      `还有超级超越的分量！征服了这个的拉面的，果然是王者啊！`,
    );
    await me.say_and_wait(`相比起这个王者拉面，我其实更好奇所谓的秘密菜单……`);
    await era.printAndWait(
      `店长「噢？小哥/小姐不错嘛！居然知道本店还有秘密菜单！」`,
    );
    await era.printAndWait(
      `一旁拿着漏子制作料理的店长听到，诧异地跟你们说了一句。`,
    );
    await chara_talk.say_and_wait(`秘密菜单？为何？为何我不知道的？`);
    await era.printAndWait(
      `本来正为征服了王者拉面而兴奋的数码，听到此话，惊讶得毛都炸了。`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(
      `噫呀哈，加上刚才那个蜂蜜特饮店，全圣地巡礼，达成！`,
    );
    await era.printAndWait(
      `从清晨接触第一缕阳光再到傍晚送走夕阳，真的是忙了一天啊。`,
    );
    await me.say_and_wait(`到处都转了一圈呢。`);
    await chara_talk.say_and_wait(
      `诶呀诶呀，这么长时间的应援活动真的是辛苦你了，如此勤勉，值得敬意！`,
    );
    await era.printAndWait(`诶呀诶呀，怎么还敬起礼来了。`);
    await chara_talk.say_and_wait(`而且，诶嘿嘿，能圆满完成真的是太好了。`);
    await chara_talk.say_and_wait(`实际上，最开始是想和以往一样一个人去的。`);
    await chara_talk.say_and_wait(`但是……`);
    await era.printAndWait(
      `然后就听到了${
        chara_talk.sex
      }的意外经历，在外面意外听到了路人${chara_talk.get_uma_sex_title()}的建议，邀请训练员一起……`,
    );
    await era.printAndWait(
      `你发自内心地感谢了这位不知名的${chara_talk.get_uma_sex_title()}，因此你对数码更加了解了。`,
    );
    await chara_talk.say_and_wait(
      `最幸运的是，实际实行起来，真的是非常！非常开心呢！`,
    );
    await era.printAndWait(`大展双手，真的是很开心啊。`);
    await chara_talk.say_and_wait(
      `太好了，明明是对你来说珍贵的假期，又没有提前和你计划，还以为你不会同意呢……`,
    );
    await chara_talk.say_and_wait(`不过，这真的是一个重大发现！`);
    await chara_talk.say_and_wait(
      `我发现了，和训练员一起追推，一起推活的乐趣！`,
    );
    await era.printAndWait(
      `数码以前因特殊爱好所少表露的真正的情绪，正逐渐向你袒露。`,
    );
    await chara_talk.say_and_wait(
      `本来就没想过，在这个宇宙中能有这样和我一起进行应援活动的人……`,
    );
    await me.say_and_wait(`居然是宇宙级的吗？！`);
    await chara_talk.say_and_wait(
      `啊哈哈，事实上你也看到了，之前都是我一个人在进行应援活动，能听我这些界限发言，还有共感，真的是让我……很开心`,
    );
    await era.printAndWait(`感觉，数码的双眼正在闪闪发亮。`);
    await chara_talk.say_and_wait(
      `太感动了！现在有什么想说的，就想赶紧对训练员说！`,
    );
    await me.say_and_wait(`可以哦，想说什么都可以。`);
    await chara_talk.say_and_wait(`诶！真的什么都可以吗！`);
    await chara_talk.say_and_wait(`真的可以吗？真的可以吗！说好了哦!`);
    await chara_talk.say_and_wait(`数码碳我要开始界限发言了哦！`);
    await chara_talk.say_and_wait(
      `在第一眼在电视的大屏幕上看到${chara_talk.get_uma_sex_title()}酱的身姿时我就明白如此激励眩眼的激情四射的女神们是我的一生向往啊随后我就坠入了深渊哦不是升华到了天堂每天都供奉${chara_talk.get_uma_sex_title()}酱们为${
        chara_talk.sex
      }们应援为${chara_talk.sex}们喝彩为${
        chara_talk.sex
      }们制作同人本向大家宣传${chara_talk.get_uma_sex_title()}酱们的美好伟大然后得益于偶尔的赐福我终于处身于这万神殿可以和各位女神同处于一个世界哦不是我只是同呼吸一处空气的凡人而已但是${
        chara_talk.sex
      }们也都不嫌弃我还让我进入不可侵犯的赛场上进行劲的比赛简直是高贵的却又不嫌污秽的所有全肯定的伟大的女神们说了这么多数码碳我想说的仅是${chara_talk.get_uma_sex_title()}酱真的是太棒了！`,
    );
    await era.printAndWait(
      `回旋，跳跃，低吟，高唱，数码用了${chara_talk.sex}的毕生所能，将全部所想说的一切倾泻了出来。`,
    );
    await era.printAndWait(`如此纯度，值得敬佩。`);
    await chara_talk.say_and_wait(
      `咳咳咳，哈哈哈哈，说出来……真的……咳咳……是淋漓尽致啊……`,
    );
    await era.printAndWait(
      `疯狂地呼吸，胸脯不断起伏，实在是太累了吧，数码咳着咳着，一个踉跄，直接坐在了地面上。`,
    );
    await chara_talk.say_and_wait(`怎么样啊，训练员？嘿嘿……`);
    await era.printAndWait(
      `坐在地面上，还用手撑着，不过${chara_talk.sex}笑得很开心。`,
    );
    await era.printAndWait(
      `你也靠在${chara_talk.sex}身边坐了下来，为${chara_talk.sex}支撑一下${chara_talk.sex}的体重。`,
    );
    await me.say_and_wait(
      `很不错哦，听到这么有活力的界限发言，就连三女神都为之震撼呢。`,
    );
    await chara_talk.say_and_wait(`嘿嘿嘿，这样吗……`);
    await chara_talk.say_and_wait(`真的，是宇宙级呢……`);
  } else if (event_marks.oshi === 1) {
    event_marks.oshi++;
    await print_event_name(`推`, chara_talk);
    const chara302_talk = get_chara_talk(302);
    await chara302_talk.say_and_wait(`合宿！对，就是，如此！`);
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await era.printAndWait(
        `不得不说不愧是那个理事长吗，即使现在明明不是夏季合宿的时间段，却突然来这么一出。`,
      );
    }
    await me.say_and_wait(`合宿吗，倒也不错。`);
    await era.printAndWait(
      `对于${chara_talk.get_uma_sex_title()}来说并不只是旅游，也有着训练这一重要环节的活动，简直跟暑假作业异曲同工。`,
    );
    await era.printAndWait(
      `幸好，大部分的${chara_talk.get_uma_sex_title()}都是热爱训练的，你的担当${chara_talk.get_uma_sex_title()}${
        chara_talk.name
      }，${chara_talk.sex}也不例外。`,
    );
    await era.printAndWait(
      `话说回来，数码好像更多的是享受与推们同做一件事的行为，那${chara_talk.sex}到底喜欢的是不是训练本身呢。`,
    );
    await era.printAndWait(
      `在到达地点前就这样想着各种无关的东西，随着轮子的转动，金黄与碧蓝的颜色覆盖住了绿色，你来到了合宿地点。`,
    );
    await era.printAndWait(`哇哦，真不愧是特雷森，给到的条件还蛮不错的。`);
    await era.printAndWait(
      `顺便环绕了下四周，各处都是穿着泳衣的${chara_talk.get_uma_sex_title()}，数码应该会尊得要死要活吧，先不说训练了，${
        chara_talk.sex
      }……能活下来吗？`,
    );
    era.drawLine();
    await era.printAndWait(
      `登登登，${chara_talk.name}出现了，穿着学校泳衣，也就是俗称死库水的那种泳衣，紧绷适度，是最为方便训练的装备。`,
    );
    await era.printAndWait(
      `只见${chara_talk.sex}一抬头远望，将一尽美景收入眼中，然后一个疯狂大吸气……`,
    );
    await chara_talk.say_and_wait(`蓝天……白云……吹拂着青春之风……`);
    await chara_talk.say_and_wait(
      `在这里的一切${chara_talk.get_uma_sex_title()}酱！啊！感觉呼吸都是亵渎……`,
    );
    await chara_talk.say_and_wait(`明明是如此不敬，却又无法忍受，吸……`);
    await era.printAndWait(`看到了你，吸到一半气咳了，是呛到了。`);
    await chara_talk.say_and_wait(`咳咳咳，是训练员啊！`);
    await chara_talk.say_and_wait(`哇哇哇，开始训练吧！我早就准备好了！`);
    await era.printAndWait(
      `大大地招手，看起来是一贯如此的数码，不过好像不太对劲？`,
    );
    await me.say_and_wait(`难得来到这里，真不用先放松一下吗？`);
    await era.printAndWait(
      `恰好，两个看起来关系很好的${chara_talk.get_uma_sex_title()}路过。`,
    );
    await chara64_talk.say_and_wait(
      `你看看你，把雪糕都粘脸上了！这下怎么能啊？`,
    );
    await chara65_talk.say_and_wait(`诶嘿，要不就你帮我擦掉吧！`);
    await era.printAndWait(`可谓是经典剧情，数码眼睛瞄瞄，漏出了幸福的笑容。`);
    await chara65_talk.say_and_wait(`今天晚上听说有夏日祭啊，去看吧！`);
    await chara64_talk.say_and_wait(`等等，怎么就这样决定了啊！`);
    await era.printAndWait(`摸了摸肚子，说着多谢款待的数码，突然像变脸了般。`);
    await chara_talk.say_and_wait(
      `嘿嘿……看到好东西了，不不不！嗯！训练员！要去训练了噢！`,
    );
    await era.printAndWait(`捶了捶胸口，使劲使自己看起来很认真，数码怎么了？`);
    await era.printAndWait(
      `看着${chara_talk.sex}那认真的眼神，你也不好说什么，开始训练吧。`,
    );
    era.drawLine();
    await era.printAndWait(
      `按下秒表，毕竟是在沙地上奔跑，跟草地及泥地都有不同，速度有所下降也属正常。`,
    );
    await me.say_and_wait(`休息一下吧。`);
    await era.printAndWait(
      `递给${chara_talk.sex}水和毛巾，虽然是在海边，水随处可见，但汗水还是要擦的。`,
    );
    await era.printAndWait(
      `接过毛巾，数码正在擦的时候，眼睛又瞄到那边的海之家了。`,
    );
    await chara58_talk.say_and_wait(`对对对对不起！居然会把酱汁滴到你身上！`);
    await chara15_talk.say_and_wait(
      `啊，我的光辉可不会因此般而暗淡，仅会因瑕疵而更耀眼！`,
    );
    await era.printAndWait(`嗯，很有特色的两人组，也挺大名鼎鼎的。`);
    await chara_talk.say_and_wait(`咕溜咕溜……呜呜呜呜！`);
    await era.printAndWait(`发出了引擎发动的声音……？`);
    await chara_talk.say_and_wait(
      `啊！那么！训练员！我去训练啦，接着要去跑十个来回哟！`,
    );
    await era.printAndWait(`单手握拳高举，是不是太勉强了？`);
    await era.printAndWait(`要不这样吧。`);
    await me.say_and_wait(`我听说今晚附近有祭典，今晚一起去看下吗？`);
    await chara_talk.say_and_wait(`哦……！不错呢，祭典，好好好！`);
    await era.printAndWait(`希望能给${chara_talk.sex}放松一下。`);
    era.drawLine();
    await era.printAndWait(
      `悬挂于上方穿插而过的灯笼把地砖染上颜色，位于道路两边的铺位也呼应着点上了橘黄的灯光。`,
    );
    await era.printAndWait(
      `虽说是来海边合宿的，但看起来也有不少的${chara_talk.get_uma_sex_title()}也带来了和服，尽情地享受这次难得的祭典。`,
    );
    await chara_talk.say_and_wait(`哦咦哦咦，那么训练员，要从哪里逛起呢？`);
    await era.printAndWait(
      `一扫而过，苹果糖、稠鱼烧、巧克力条等小食，还有一些绘马、面具等的纪念品，当然还有打气球等游戏摊位。`,
    );
    await era.printAndWait(`看着，数码标记了一处地点。`);
    await era.printAndWait(
      `正有两名${chara_talk.get_uma_sex_title()}穿着和服在捞金鱼。`,
    );
    await era.printAndWait(
      `只见其中一位眼疾手快，把纸糊的勺子一扫而过，直接把一条金鱼捞了上来，不过，代价是……`,
    );
    await chara3_talk.say_and_wait(
      `哈哈哈，捞金鱼可不是捞水啊，你看看，把衣服都弄湿了`,
    );
    await chara59_talk.say_and_wait(`诶诶诶？！`);
    await chara_talk.say_and_wait(`嘶……`);
    await era.printAndWait(`数码长呼一口气，然后……`);
    await chara_talk.say_and_wait(
      `那么那么，要从哪家店开始逛呢？看着有好多不错的铺位啊！`,
    );
    await era.printAndWait(
      `要是按照以前的话，${chara_talk.sex}绝对会眼睛发光地说个不停吧。`,
    );
    await era.printAndWait(`那，接下来应该……`);
    await me.say_and_wait(`我有一个想看的地方。`);
    era.drawLine();
    await era.printAndWait(`从热烈的祭典中脱身而出，来到了现在冷清的海边。`);
    await era.printAndWait(`后面是橘红，前面是蓝白。`);
    await era.printAndWait(`抹了抹并不存在的灰尘，直接在沙滩里坐了下来。`);
    await era.printAndWait(
      `晚上的海滩说不上凉快，吹来的风又湿又潮，仅有屁股能感受到清凉。`,
    );
    await era.printAndWait(
      `数码看着你，也照样做了下来，就这样尴尬地看着月亮，看着海。`,
    );
    await chara_talk.say_and_wait(`训练员想做的事，就是坐在这里看海吗？`);
    await era.printAndWait(`直接一点吧。`);
    await me.say_and_wait(`数码，发生什么事了吗？`);
    await chara_talk.say_and_wait(`诶？并没有什么哦？`);
    await era.printAndWait(`说这话时数码都虚心地不自觉用手阻挡了心的交互。`);
    await me.say_and_wait(`你在抑制自己想干的事情吗？`);
    await era.printAndWait(`不是这样的吧？`);
    await chara_talk.say_and_wait(
      `诶！没有哦，因为，我今天想做的事，就是和训练员一起做训练员想做的事啊！`,
    );
    await me.say_and_wait(`……为什么要这样？`);
    await chara_talk.say_and_wait(`因为……训练员都一直和我去参加应援活动了嘛……`);
    await era.printAndWait(`说着话的时候，数码低着头，扭捏着。`);
    await chara_talk.say_and_wait(`还一直在听我的疯言乱语……`);
    await era.printAndWait(`低着头，数码眼睛瞄向了你，脸也红红的。`);
    await chara_talk.say_and_wait(
      `这样，应援活动也更有趣了，我也没想到每天能这么开心……`,
    );
    await chara_talk.say_and_wait(`已经回不到没有训练员独自推活的时候了哦！`);
    await era.printAndWait(
      `说着说着，数码已经叉起了腰，似乎为有你这样一名同志而感到自豪。`,
    );
    await chara_talk.say_and_wait(`也就是说，训练员也是重要的存在！`);
    await era.printAndWait(
      `把一切${chara_talk.get_uma_sex_title()}放在心口上，也把你放在了心口上。`,
    );
    await chara_talk.say_and_wait(
      `这么多赛${chara_talk.get_uma_sex_title()}每天带着炙热的念想奔走着`,
    );
    await chara_talk.say_and_wait(
      `这个世界简直就是，大${chara_talk.get_uma_sex_title()}酱尊死时代！`,
    );
    await era.printAndWait(`漂亮地挥出手指，指向了你。`);
    await chara_talk.say_and_wait(
      `无论是前后左右，都有闪闪发光的${chara_talk.get_uma_sex_title()}酱！`,
    );
    await chara_talk.say_and_wait(`不知道什么时候就会尊死，就像在战场一样`);
    await chara_talk.say_and_wait(
      `在这个战场一起奔跑，有时受到感动暴击，有时分享喜悦`,
    );
    await chara_talk.say_and_wait(`这就是，战友啊！`);
    era.drawLine();
    await chara_talk.say_and_wait(`但是，是不是我一直被支持？`);
    await chara_talk.say_and_wait(`甘心于此是不是有点拥抱黑暗了？`);
    await chara_talk.say_and_wait(
      `所以啊，我想，我也想为训练员做点什么，训练员想做的事情，就让我来实现！`,
    );
    await chara_talk.say_and_wait(`来吧来吧！会尽全力的哦！`);
    await era.printAndWait(
      `数码不是压抑自己喜欢的事这点令你放松了，同时又为${chara_talk.sex}能替你着想而感到高兴。`,
    );
    await era.printAndWait(
      `${
        chara_talk.sex
      }一直带着对${chara_talk.get_uma_sex_title()}不求回报的爱奔跑着。`,
    );
    await era.printAndWait(`然后，你想做的事情是什么呢？`);
    await era.printAndWait(
      `你正是想要应援这个身影，才成为了${chara_talk.sex}的训练员，想要做的正是……`,
    );
    await me.say_and_wait(`想看到数码你朝气满满的样子。`);
    await era.printAndWait(
      `想看着${chara_talk.sex}在应援时候全力以赴的样子，想看着${chara_talk.sex}在比赛时候无人可挡的样子，`,
    );
    await era.printAndWait(
      `想看着${
        chara_talk.sex
      }在推${chara_talk.get_uma_sex_title()}时候尊死的样子，想看着${
        chara_talk.sex
      }和你讨论${chara_talk.get_uma_sex_title()}时候滔滔不绝的样子。`,
    );
    await era.printAndWait(
      `万言就归于一言，想看到${chara_talk.sex}开心的样子。`,
    );
    await chara_talk.say_and_wait(`想看到我朝气……满满？`);
    await chara_talk.say_and_wait(`和我对推的情感……是一样的？`);
    await me.say_and_wait(`对。`);
    await era.printAndWait(`但是数码啊，还是很不自信。`);
    await chara_talk.say_and_wait(`对我……吗，对给花当花盆，给主唱当伴舞的我？`);
    await chara_talk.say_and_wait(`不，就是那个，为什么呢？虽然还是难以置信。`);
    await chara_talk.say_and_wait(
      `也……呜，有点开心，不如说，嗯，很光荣，或者说，有点难为情？`,
    );
    await chara_talk.say_and_wait(`像是出了本的画师收到了感想的时候？`);
    await era.printAndWait(`可真是很恰当啊。`);
    await chara_talk.say_and_wait(`也就是……是——`);
    await era.printAndWait(
      `数码害羞得把脸都遮起来了，是——是什么啊，真有趣呐。`,
    );
    await chara_talk.say_and_wait(`那个——`);
    await chara_talk.say_and_wait(`继续推活！我可不会再有所顾虑了哦！`);
    await era.printAndWait(`终于啊——`);
    await chara_talk.say_and_wait(`要全力地朝气满满了！`);
    await era.printAndWait(`是认识的数码。`);
    await chara_talk.say_and_wait(
      `那那！就快去摄取${chara_talk.get_uma_sex_title()}酱能量吧！`,
    );
    await chara_talk.say_and_wait(`GOGOGO！`);
    await era.printAndWait(`跑起来吧！`);
    await era.printAndWait(
      `蓝色的海洋虽美，但果然还是橘黄的灯光更适合这个节日。`,
    );
    await era.printAndWait(
      `不是到这边无人的沙滩，而是和数码一起在祭典里面尽情蹦跳！`,
    );
  }
  return true;
};

handlers[event_hooks.out_river] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 19) {
    add_event(event_hooks.out_river, event_object);
    return;
  }
  const event_marks = new AgEduMarks(),
    chara20_talk = new CharaTalk(20);
  if (event_marks.catch_fish === 1) {
    event_marks.catch_fish++;
    await print_event_name('钓上大鱼了，不过鱼看起来不太友善', chara_talk);
    era.println();
    await era.printAndWait(
      `但你的担当${chara_talk.get_uma_sex_title()}${
        chara_talk.name
      }不太一样，相比起自己钓鱼，${chara_talk.sex}更喜欢看别人钓鱼，`,
    );
    await era.printAndWait(
      `不……应该是更喜欢看着${chara_talk.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `所以，真让${chara_talk.sex}坐在一个小板凳上，拿着钓竿，在河边静静等待上钩，就会比较难得了。`,
    );
    await chara_talk.say_and_wait(
      `原来如此……原来钓鱼是这样的吗，这种本应是休闲活动，怎么会如此地耗精力……`,
    );
    await chara_talk.say_and_wait(
      `在钓鱼时的其他${chara_talk.get_uma_sex_title()}到底是怎么想的呢……`,
    );
    await me.say_and_wait(
      `${chara_talk.sex}们更多的只是享受钓鱼这种活动吧，你看一下附近？`,
    );
    await chara_talk.say_and_wait(`诶？`);
    await era.printAndWait(
      `数码张望了一下四处，在对岸上正好也有一个${chara_talk.get_uma_sex_title()}正在钓鱼。`,
    );
    await era.printAndWait(`与其说是钓鱼，不如说是睡觉。`);
    await chara_talk.say_and_wait(
      `的确，我能感受到，${chara_talk.sex}目前正在处于极度的放松状态，`,
    );
    await chara_talk.say_and_wait(
      `呜哇，在钓鱼的${chara_talk.get_uma_sex_title()}，躺在无限静谧中，即使是鱼上钩也不能惊动${
        chara_talk.sex
      }分毫……`,
    );
    if (era.get('cflag:20:招募状态') === 1) {
      await chara20_talk.say_and_wait(
        `哦呀哦呀，没想到训练员今天有闲情跟数码碳出来钓鱼啊，哟吼吼，居然不是我一起哟……哭哭`,
      );

      await era.printAndWait('从背后传来了熟悉的声音，是sky啊。');
      await era.printAndWait(`sky拿起小手揉揉眼睛，流露出可怜的眼神。`);
      await era.printAndWait(
        `你不得不承认sky的这种演技特别厉害，如果不是你早就熟悉${chara_talk.sex}的诡计多端，或许你还真被骗了。`,
      );
      await chara_talk.say_and_wait(`哇哇哇！我不是故意的，我这就离开！`);
      await era.printAndWait(`数码特别慌张，摇晃着手要站起来。`);
      await era.printAndWait(
        '你不动声色地移到sky旁边，暗中猛掐了一下sky的后背，挺柔。',
      );
      await chara20_talk.say_and_wait(`诶！我只是开个玩笑啦，开个玩笑～`);
      await chara20_talk.say_and_wait(
        `那么，数码碳，要不要来我亲手教一下你啊，诶嘿！`,
      );
      await chara_talk.say_and_wait(`噫！`);
      await era.printAndWait(
        '没几秒，sky就迅速抓住了想要逃跑的数码，数码就像吃了石化术，被定住了身体。',
      );
      await chara20_talk.say_and_wait(`咕嘿！`);
      await era.printAndWait(
        `嘴角上扬一段弧度，sky本来可以说是娇小的双手首先握住了更为小巧的数码的左手。`,
      );
      await chara_talk.say_and_wait(`啊吧啊吧……`);
      await chara20_talk.say_and_wait(`来吧来吧，坐到凳子上嘛～`);
      await era.printAndWait(
        `一把把数码拽到了凳子边，把手搭到${chara_talk.sex}的肩膀上……`,
      );
      await era.printAndWait(
        `然后数码就像被施展了软化术一般，像一条毛毯一般，瘫坐在了凳子上。`,
      );
      await chara20_talk.say_and_wait(`来，抓住这个鱼竿，把鱼漂移动到那边去……`);
      await chara_talk.say_and_wait(`啊吧啊吧……`);
      await era.printAndWait(`看起来，数码的灵魂已经早就变成灰随风飘散了。`);
      era.drawLine({ content: '一段时间后' });
      await chara_talk.say_and_wait(`……！`);
      await chara_talk.say_and_wait(`呜诶……不行了，真不行了……`);
      await era.printAndWait(
        `脱力躺在泥土上的数码，看起来${chara_talk.sex}今天是真不行了。`,
      );
      await chara20_talk.say_and_wait(`啊哈，真是个有趣的人`);
      await era.printAndWait(
        `与数码正成对比，sky则是精神焕发，这难道是什么新型吸精术吗。`,
      );
      era.println();
      await chara20_talk.say_and_wait(`训练员哟！`);
      await era.printAndWait(
        `sky转向了你，刚刚本是大笑着的表情立刻收敛，只是看着你。`,
      );
      await chara20_talk.say_and_wait(
        `感觉如何？无论是你还是${chara_talk.sex}，感觉都要把我抛下了呢～`,
      );
      await era.printAndWait(`Sky${chara_talk.sex}只是想套个话，是吗？`);
      await chara20_talk.say_and_wait(
        `哦呀哦呀，训练员居然还会吃醋的吗？该吃醋的是我吧？`,
      );
      era.printButton(`对sky妥协`, 1);
      era.printButton(`该说正事了`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await me.say_and_wait(`好好好，既然如此，那么下次我就和你来钓鱼。`);
        await era.printAndWait(`姑且算先敷衍过去再说吧。`);
        await chara20_talk.say_and_wait(
          `诶嘿，那再帮我更新下装备吧～训练员的工资可不少吧？`,
        );
        await era.printAndWait(
          `sky把一只手摆到头顶，吐出粉嫩的舌头，让你不禁想起某个表情包。`,
        );
        await era.printAndWait(
          `伸展了一下腰骨，暗自回想了一下手机里马币的余额，更新装备应该没问题……吧？`,
        );
        await era.printAndWait(
          `sky也不客气，直接拿起一张小板凳，坐在你身边，靠在了你肩膀上。`,
        );
        await era.printAndWait(
          `侧眼，青色的毛丝因汗水略微浸湿，光滑的脖子上还带着些许露珠。`,
        );
        await era.printAndWait(
          `sky拿起手机拨动，看着商品从sky的手指处划过，瞄到里面的数字，你突然感到大事不妙。`,
        );
        await me.say_and_wait(`别，先停下，停下，等下。`);
        await chara20_talk.say_and_wait(`欸？不明明是你说的吗～`);
        await era.printAndWait(
          `看到价格，那些已经不止是高端产品了，差不多都是旗舰的价格了。`,
        );
        await era.printAndWait(
          `虽然训练员的工资不低，但这种东西也不是随便能买的。`,
        );
        await chara20_talk.say_and_wait(
          `好了好了，既然玩笑开过了，那闲聊到此为止！`,
        );
        await era.printAndWait(`把手机收起来，sky看起来要步入正题了。`);
        await chara20_talk.say_and_wait(`为数码碳找到奔跑的理由吧！哦哦哦！`);
        await era.printAndWait(
          `本来挺正经的，但在sky口中，真的是毫无气势的大喊……`,
        );
        await era.printAndWait(
          `瞄了眼数码，${chara_talk.sex}看起来还没回过魂来。`,
        );
        await era.printAndWait(
          `sky在用玩笑话传达目前你迫切需要做的事情……钓竿也也许是。`,
        );
        await era.printAndWait(
          `下次给${chara_talk.sex}买个礼物吧，这钓竿还是算了为好……`,
        );
      } else {
        await me.say_and_wait(`说正事吧，我了解你`);
        await era.printAndWait(`毕竟青云天空总是有${chara_talk.sex}的打算。`);
        await era.printAndWait(`一个转身，sky正对夕阳，背对着你。`);
        await chara20_talk.say_and_wait(`还记得小特吧？`);
        await me.say_and_wait(`这话说的，什么叫记不记得？`);
        await era.printAndWait(
          `是那次吧？忘记自己该做什么，有什么目标，如何去做。`,
        );
        await me.say_and_wait(`小特找到了，属于${chara_talk.sex}的温暖乡。`);
        await era.printAndWait(
          `这件事还传得挺火的，是很好的教育素材，幸好的是小特本人不在意。`,
        );
        await era.printAndWait(`憧憬本身，不能作为永远前行的目标。`);
        await era.printAndWait(
          `数码${chara_talk.sex}很快就会发现，${chara_talk.sex}会比其他人更强，${chara_talk.sex}会粉碎以前憧憬对象的梦想。`,
        );
        await me.say_and_wait(
          `我会带${chara_talk.sex}找到的，独属于${chara_talk.sex}的万神殿。`,
        );
        await chara20_talk.say_and_wait(`果然还是我的训练员啊！`);
        await me.say_and_wait(`嗯。`);
      }
    } else {
      await chara20_talk.say_and_wait(
        `哦呀哦呀，是数码碳啊，居然不是在岸边看着其他${chara_talk.get_uma_sex_title()}钓鱼吗？`,
      );
      await chara20_talk.say_and_wait(`还有……数码碳的训练员，出名的家伙哟～`);
      await era.printAndWait(
        '从背后传来一个懒洋洋的声音，这个声音，你有点熟悉。',
      );
      await chara_talk.say_and_wait(`sky？！`);
      await era.printAndWait(
        '惊得把数码拿在手里的鱼竿都掉了，砸出的水花都溅到了身上。',
      );
      await chara20_talk.say_and_wait(
        `哦？居然把鱼竿都弄掉了，sky我可是要生气了哦！`,
      );
      await chara_talk.say_and_wait(
        `不不不，这是我的不好，我的不好！我不应该来到这边和${chara_talk.get_uma_sex_title()}酱一起钓鱼的……`,
      );
      await chara20_talk.say_and_wait(
        `那么，数码碳，要不要来我亲手教一下你啊，诶嘿！`,
      );
      await chara_talk.say_and_wait(`噫！`);
      await era.printAndWait(
        '没几秒，sky就迅速抓住了想要逃跑的数码，数码就像吃了石化术，被定住了身体。',
      );
      await chara20_talk.say_and_wait(`咕嘿！`);
      await era.printAndWait(
        `嘴角上扬一段弧度，sky本来可以说是娇小的双手首先握住了更为小巧的数码的左手。`,
      );
      await chara_talk.say_and_wait(`啊吧啊吧……`);
      await chara20_talk.say_and_wait(`来吧来吧，坐到凳子上嘛～`);
      await era.printAndWait(
        `一把把数码拽到了凳子边，把手搭到${chara_talk.sex}的肩膀上……`,
      );
      await era.printAndWait(
        `然后数码就像被施展了软化术一般，像一条毛毯一般，瘫坐在了凳子上。`,
      );
      await chara20_talk.say_and_wait(`来，抓住这个鱼竿，把鱼漂移动到那边去……`);
      await chara_talk.say_and_wait(`啊吧啊吧……`);
      await era.printAndWait(`看起来，数码的灵魂已经早就变成灰随风飘散了。`);
      era.drawLine({ content: '一段时间后' });
      await chara_talk.say_and_wait(`……！`);
      await chara_talk.say_and_wait(`呜诶……不行了，真不行了……`);
      await era.printAndWait(
        `脱力躺在泥土上的数码，看起来${chara_talk.sex}今天是真不行了。`,
      );
      await chara20_talk.say_and_wait(`啊哈，真是个有趣的人`);
      await era.printAndWait(
        `与数码正成对比，sky则是精神焕发，这难道是什么新型吸精术吗。`,
      );
      era.println();
      await chara20_talk.say_and_wait(`${chara_talk.name}的训练员——`);
      await era.printAndWait(`sky将头转向你。`);
      await era.printAndWait(
        `诡计多端，这是世人……至少是${chara_talk.sex}的同学给予${chara_talk.sex}的评价。`,
      );
      await era.printAndWait(
        `你虽然没有过多认识青云天空，但也听闻过${chara_talk.sex}的名气……为了比赛不择手段……吗？`,
      );
      await era.printAndWait(
        `${chara_talk.name}，应该和${chara_talk.sex}的比赛是没有冲突的，那${chara_talk.sex}想在这里做什么？`,
      );
      era.println();
      era.printButton(`先聊一下吧`, 1);
      era.printButton(`尽量把数码早点带走`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await me.say_and_wait(`青云天空……我认识你。`);
        await chara20_talk.say_and_wait(`喵哈哈，看起来我的名气还挺大的呢～`);
        await era.printAndWait(
          `把手背到脑袋后去，sky看起来还对自身名气挺自豪的。`,
        );
        await me.say_and_wait(`坐下来聊一下吧，我想你应该对数码有想法。`);
        await chara20_talk.say_and_wait(
          `诶呀诶呀，我可不是什么女同哟，倒不如说我是那种bg的类型啦～`,
        );
        await era.printAndWait(`把话题转移，一贯的计谋。`);
        await me.say_and_wait(`……`);
        await chara20_talk.say_and_wait(
          `真想听我认真说？sky我或许会出乎你意料的想法纯粹呢？`,
        );
        await era.printAndWait(
          `看了一眼旁边的数码，${chara_talk.sex}还躺在岸边呈现出幸福的尊死状态。`,
        );
        await chara20_talk.say_and_wait(
          `数码碳${chara_talk.sex}还是太过纯真，还未了解到赛场上锱铢必较的那种氛围。`,
        );
        await chara20_talk.say_and_wait(
          `对的，就像小特在有一段时间一样，数码碳${chara_talk.sex}缺少上战场的理由。`,
        );
        await era.printAndWait(
          `上战场……赛场的理由，数码之前一直说是${chara_talk.get_uma_sex_title()}，${
            chara_talk.sex
          }……只想近距离观察${chara_talk.get_uma_sex_title()}的奔跑，至少目前为止是。`,
        );
        await me.say_and_wait(
          `${chara_talk.sex}会找到的，我会和${chara_talk.sex}一起找到那个理由。`,
        );
        await era.printAndWait(
          `在你说出这句话之前，sky一直用深邃的目光盯着你，听到这句话后，${chara_talk.sex}笑了。`,
        );
        await chara20_talk.say_and_wait(`啊哈哈，听到了有趣的回答呢！`);
        await era.printAndWait(
          `也许你的回答让${chara_talk.sex}满意了，也许是${chara_talk.sex}觉得也没必要说下去了。`,
        );
        await chara20_talk.say_and_wait(
          `那我不打扰你们了？sky我还得钓个鱼呢。`,
        );
        await era.printAndWait(
          `洒下太多热量的太阳已经由白转红，留下了你和数码在河边泥滩边。`,
        );
        await me.say_and_wait(`(带着数码回去吧……)`);
        await me.say_and_wait(`(怎么带呢……)`);
      } else {
        await me.say_and_wait(`青云天空，虽然我还想和你再聊一下，但是……`);
        await me.say_and_wait(
          `看起来数码一时半会儿还醒不来，也不早了，我得把${chara_talk.sex}带回去了。`,
        );
        await era.printAndWait(`sky看着你，然后打了个哈欠。`);
        await chara20_talk.say_and_wait(
          `你说的也对，虽然没能钓成鱼有点可惜了。`,
        );
        await era.printAndWait(
          `向${chara_talk.sex}再见，但正准备背起数码时候，你感到耳边传来了气息……`,
        );
        await chara20_talk.say_and_wait(
          `为${chara_talk.sex}找到比赛的理由吧……`,
        );
        await era.printAndWait(`你闭上眼，只能说声谢谢。`);
        era.drawLine({ content: '一段时间后' });
        await era.printAndWait(
          `数码异常的娇小，但你把${chara_talk.sex}背起来后才发现，${chara_talk.sex}的体重更显小了。`,
        );
        await era.printAndWait(
          `柔软的身体，鼻息……原来会有吗？呼在你脖子上，让你有点痒痒的。`,
        );
        await era.printAndWait(`回到之后数码狠狠地向你道歉了。`);
      }
    }
  }
  return true;
};

handlers[event_hooks.out_church] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 19) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const chara32_talk = get_chara_talk(32),
    chara46_talk = get_chara_talk(46),
    chara36_talk = get_chara_talk(36),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (edu_weeks === 95 + 1) {
    await print_event_name('新年参拜', chara_talk);
    await chara_talk.say_and_wait(
      `神啊！今年就不用什么周边了，请给我劲敌就好！`,
    );
    await era.printAndWait(
      `天呐！居然让数码说出这番话，${chara_talk.sex}受到了什么刺激？！`,
    );
    await me.say_and_wait(`数码？为什么突然说这个？`);
    await era.printAndWait(
      `数码告诉你，在之前一段时间，歌剧明白指出，数码，缺少劲敌。`,
    );
    await chara_talk.say_and_wait(
      `唔，就如之前好歌剧的说法，我目前还不够强大的原因是……`,
    );
    await era.printAndWait(`劲敌。`);
    await era.printAndWait(
      `数码缺少劲敌，作为一名训练员，你清楚竞争对手可以给${chara_talk.get_uma_sex_title()}带来多少动力和鼓舞。`,
    );
    await era.printAndWait(
      `但是数码的情况又过于特殊，${
        chara_talk.sex
      }所具备的那种特性，那种对${chara_talk.get_uma_sex_title()}纯粹的喜欢也能给${
        chara_talk.sex
      }带来与竞争对手相似的效果。`,
    );
    await era.printAndWait(`数码真的需要劲敌吗？`);
    await chara_talk.say_and_wait(
      `唔唔唔，以前因为不想过分干涉，所以别说什么劲敌了，数码在赛场上跟对手都没怎么交流，现在后果来了吗……`,
    );
    await era.printAndWait(
      `不过趁这次机会让数码跟其他${chara_talk.get_uma_sex_title()}交涉一下也挺好。`,
    );
    await me.say_and_wait(`那就去寻找劲敌吧！`);
    await era.printAndWait(`所以……`);
    await chara36_talk.say_and_wait(`哈？劲敌？早点歇吧。`);
    await chara_talk.say_and_wait(`等等的说！正好是同期，这不是恰好吗`);
    await chara36_talk.say_and_wait(
      `那个啊，数码，其他的我不好说，我觉得至少我不合适，就这样。`,
    );
    era.drawLine();
    await chara46_talk.say_and_wait(`诶？劲敌吗？感觉不太符合偶像的形象呢～`);
    await chara_talk.say_and_wait(
      `不不不，偶像里面，不都是有一个那种对手，然后在互相对决的过程中又互相帮助的感觉吗？`,
    );
    await chara46_talk.say_and_wait(
      `啊哈哈，飞鹰子好像只能做个${chara_talk.get_uma_sex_title()}小偶像呢，不适合那种……不过，十分感谢数码碳的邀请！`,
    );
    era.drawLine();
    await chara32_talk.say_and_wait(
      `哼哼……劲敌吗……但数码你作为一个研究对象，不对吧，不符合我的理念！`,
    );
    await chara_talk.say_and_wait(`……这样吗。`);
    await era.printAndWait(
      `被各种原因拒绝了几次的数码，即使是${chara_talk.sex}，耳朵都有点耷拉了。`,
    );
    await chara32_talk.say_and_wait(
      `不要这么消沉嘛，数码君，还有你，训练员君，你应该清楚的吧？能成为数码劲敌的人选。`,
    );
    await era.printAndWait(
      `用其独特的眼睛盯着你，爱丽速子抬了下下巴朝你示意。`,
    );
    await chara_talk.say_and_wait(
      `诶诶诶！训练员，你知道吗？能成为我劲敌的人选？`,
    );
    await me.say_and_wait(`的确如此。`);
    await chara_talk.say_and_wait(`那为什么不一开始就告诉我？`);
    await era.printAndWait(`数码急的都快要往你身上锤了。`);
    await chara32_talk.say_and_wait(
      `看起来，那人也有自己的打量，数码君，接下来就是无趣的解答了，再见。`,
    );
    await era.printAndWait(`速子看了下场面，很识趣地离开了现场。`);
    await me.say_and_wait(
      `事实上，一方面是在你开始找才知道的，另一方面，我也有想要去了解的地方……`,
    );
    await me.say_and_wait(`所以，最终我得出的结论就是：你的劲敌，就是大家！`);
    await chara_talk.say_and_wait(
      `大家……！也就是说DD箱推都可以吗？！等等，也就是之前的……`,
    );
    await era.printAndWait(
      `是的，是在看到今天数码在找的人才想到的，数码找的人既有擅长草地，也有擅长泥地的${chara_talk.get_uma_sex_title()}，就如一开始的那般……`,
    );
    await me.say_and_wait(`只选一个什么的，是做不到的。`);
    await me.say_and_wait(
      `无论选谁，都不会有像数码那般，可以在两种赛道上奔跑的选手，但是，如果是……`,
    );
    await chara_talk.say_and_wait(`大家……`);
    await me.say_and_wait(`对的。`);
    await chara_talk.say_and_wait(`哈哈哈哈，没想到，又是大家呢。`);
    await chara_talk.say_and_wait(
      `圣王的话，『和更多${chara_talk.get_uma_sex_title()}一起比赛』我一定能够达成！`,
    );
    await chara_talk.say_and_wait(
      `大家作为劲敌，这么一想，还挺贪心的……我可以从大家那里获得什么呢？`,
    );
    era.printButton(`养分`, 1);
    era.printButton(`友情力量`, 2);
    era.printButton(`多样性`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait(`要说的话，那就是养分吧`);
      await chara_talk.say_and_wait(
        `对的！${chara_talk.get_uma_sex_title()}酱们，各自的美味之处，每次都给予我元气！`,
      );
      await chara_talk.say_and_wait(
        `每天，都有新鲜的口粮！没有比这更好的燃料了！`,
      );
      await era.printAndWait(
        `在之后${chara_talk.get_uma_sex_title()}们一定会给数码带来更多的活力吧。`,
      );
      await era.printAndWait(
        [
          { content: `${chara_talk.name} 的 ` },
          ...sys_change_attr_and_print(19, '体力', 200),
        ],
        { isList: true },
      );
    } else if (ret === 2) {
      await me.say_and_wait(`没错，就是友情！POWER！`);
      await chara_talk.say_and_wait(
        `哦吼吼，只要每个${chara_talk.get_uma_sex_title()}酱们给我一点力量，我就是无敌的！`,
      );
      await chara_talk.say_and_wait(
        `哼哼，唔哈哈哈，只是想想，就已经感到全身充满了力量了！`,
      );
      await era.printAndWait(
        `与那个每人给一马币还是有点不一样的，数码肯定能从${chara_talk.get_uma_sex_title()}处得到力量，变得更强。`,
      );
      get_attr_and_print_in_event(19, [5, 5, 5, 5, 5], 0);
    } else {
      await me.say_and_wait(`多样性，没错吧！`);
      await chara_talk.say_and_wait(
        `当然！${chara_talk.get_uma_sex_title()}酱的奔跑，其多样性，不仅仅是平日所描定的跑法所能框定的！`,
      );
      await chara_talk.say_and_wait(
        `就像收集UMAMO图鉴那样，全部都记录下来吧！`,
      );
      await era.printAndWait(
        `是全收集类玩家吗，数码在这场游戏肯定能得到技能吧！`,
      );
      get_attr_and_print_in_event(19, [0, 0, 0, 0, 0], 30);
    }
  }
};

/**
 *
 * 爱丽数码的育成事件
 *
 * @author 片手虾好评发售中！
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
