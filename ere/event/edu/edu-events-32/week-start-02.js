const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   */
  async function want_to_see(tachyon, me) {
    await me.say_and_wait('我想看见速子在赛场上奔跑的模样，');
    await me.say_and_wait([
      '想看见速子与其他',
      tachyon.get_uma_sex_title(),
      '在拼斗后最后赢下的样子',
    ]);
    await me.say_and_wait('想看速子站在Winning Live的中心C位闪烁的模样');
  }

  handlers[15] = async (tachyon, me, callname, flags, relation, love) => {
    await print_event_name('实验课题拟定', tachyon);
    await tachyon.say_and_wait('想要跑的比赛？');
    era.println();
    await era.printAndWait([
      '某旧理科准备室，或者说 ',
      tachyon.get_colored_name(),
      ' 的实验室内，',
      me.get_colored_name(),
      ' 坐在小沙发上对着在实验桌前的 ',
      tachyon.get_colored_name(),
      ' 点了点头',
    ]);
    await era.printAndWait([
      '虽然说这似乎是与',
      tachyon.get_uma_sex_title(),
      '签约的第一天就该问的事情，但当时的 ',
      me.get_colored_name(),
      ' 似乎太为 ',
      tachyon.get_colored_name(),
      ' 着迷而导致几乎完全忘了这回事',
    ]);
    await era.printAndWait([
      '无论如何，既然打算参加闪耀系列赛，赛程的规划就一定是必须的，在问出',
      tachyon.sex,
      '的选择后，才能更好的为',
      tachyon.sex,
      '安排训练的针对方向',
    ]);
    await era.printAndWait('不管是三冠路线还是后冠，又或者英里？');
    await era.printAndWait([
      '短距离……大概不行吧，虽然很抱歉但 ',
      tachyon.get_colored_name(),
      ' 应该是没有那方面适性的',
    ]);
    era.println();
    await tachyon.say_and_wait('……比赛？不感兴趣');
    await tachyon.say_and_wait(
      '说到底我的研究是为了自身的可能性，别人如何与我何干，比较强弱，那是小孩子的游戏罢了',
    );
    await era.printAndWait([
      '非常有 ',
      tachyon.get_colored_name(),
      ' 特征的回答',
    ]);
    await era.printAndWait([
      '说实话，',
      tachyon.sex,
      '会这样回答完全不令人意外',
    ]);
    await era.printAndWait('但是，身为训练员而言，还是有着应尽的责任在');
    await era.printAndWait([
      '而且……身为被',
      tachyon.sex,
      '所吸引了目光的粉丝，想要看见自己的偶像在更大的舞台之上绽放光芒，这不也是理所当然的吗？',
    ]);
    era.println();
    await era.printAndWait([
      '因此，',
      me.get_colored_name(),
      ' 整理好语言，开口说道',
    ]);
    era.println();
    if (love >= 50 && relation <= 225 && tachyon.sex_code - 1) {
      era.printButton(
        `「因为，你需要比赛，${tachyon.get_uma_sex_title()}需要比赛」`,
        1,
      );
      await era.input();
      await era.printAndWait('这不是猜测，也不是虚张声势，而是事实的陈述');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 需要比赛，作为',
        tachyon.sex,
        '实验的验证',
      ]);
      await era.printAndWait([
        tachyon.get_uma_sex_title(),
        '需要比赛，作为其斗争心的发泄',
      ]);
      await era.printAndWait([
        '能够一次满足两种所需，',
        tachyon.sex,
        '没有拒绝的理由',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……虽然明白你的意思，但你这说法是真不讨人喜欢啊',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 冷冷地看着 ',
        me.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait('看来，还是需要一剂猛的吗？这样的话……');
      era.println();
      await me.say_and_wait(
        '啊，要是速子是因为怕输所以才拒绝参赛的话，那我就能够理解了，',
      );
      await me.say_and_wait('毕竟事关速子的尊严，这届的孩子里也有很多强者，');
      await me.say_and_wait([
        '要是出现了实力上胜过速子的',
        tachyon.get_uma_sex_title(),
        '出现，说什么超越极限的速子不就像……',
      ]);
      era.println();
      await era.printAndWait('笑话一样');
      await era.printAndWait([
        '在看见双手一挥掏出十根试管，太阳穴青筋直冒的 ',
        tachyon.get_colored_name(),
        ' 后，',
        me.get_colored_name(),
        ' 不得不将后面想说出的话吞入腹中',
      ]);
      await tachyon.say_and_wait([
        callname,
        '，你这人……人不讨喜就算了，还喜欢说些主动讨打的话，是真不怕死啊',
      ]);
      await me.say_and_wait('呜呜呜呜……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 想开口辩解，却因为嘴被 ',
        tachyon.get_colored_name(),
        ' 用手捂住而说不出话来',
      ]);
      era.println();
      await tachyon.say_and_wait('让我想想……有了');
      era.println();
      await era.printAndWait([
        '似乎是觉得一直这样捂着有些麻烦，',
        tachyon.get_colored_name(),
        ' 灵光一闪',
      ]);
      await era.printAndWait([
        '同时，',
        me.get_colored_name(),
        ' 的脑中也忽然闪过一阵电流，彷佛在预告有什么不好的事情将要发生',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '缓缓拉起白大褂的下摆，此时 ',
        me.get_colored_name(),
        ' 心中的危险预感已经达到了巅峰，可就算想跑又能往哪里跑呢？',
      ]);
      await era.printAndWait([
        '更何况，从',
        tachyon.get_uma_sex_title(),
        '手中逃脱？',
        me.get_colored_name(),
        ' 虽然被 ',
        tachyon.get_colored_name(),
        ' 称为疯狂，但也不是弱智，不会妄想那种没有可能的事情',
      ]);
      era.println();
      await era.printAndWait('白大褂的下方，是反射着润光的黑色裤袜');
      await era.printAndWait(
        '从一大早开始，便将丰腴的臀部，纤细的美腿封藏于内的闷热裤袜，在经过了一天的窖藏，已经从里到外完全的入味完毕',
      );
      await era.printAndWait([
        '加上穿着这双裤袜的，还是一向生活邋遢的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 惊恐的摇着头，但一切已经来不及了',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '缓缓褪下裤袜，当裤袜从臀部褪下的瞬间，',
        me.get_colored_name(),
        ' 彷佛看见 ',
        tachyon.get_colored_name(),
        ' 的身体都因那翘臀的反弹而抖了一下',
      ]);
      await era.printAndWait([
        '裤袜缓缓脱到胯部，彷佛不希望酿造至今的味道从中散去一般，黑色的丝绸却还与',
        tachyon.get_child_sex_title(),
        '子双腿间那神奇的部位牵连着线————',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '今天不会没穿内裤吧？',
        me.get_colored_name(),
        ' 忽然想到，看这牵丝，大概真相不言自明',
      ]);
      await era.printAndWait(
        '彷佛舞台揭幕一般，接着将底下雪白的大腿肌肤露出，也象征着——惨绝人寰的悲剧即将开演',
      );
      era.println();
      await tachyon.say_and_wait(['来，', callname, '，张口～～']);
      era.printButton('「呜呜呜呜！！」', 1);
      await era.input();
      await era.printAndWait([
        '这样下去不行，在内心的驱使下，',
        me.get_colored_name(),
        ' 还是忍不住做出了徒劳的尝试',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 慌忙四肢着地的想逃出实验室，但也如预想的一般，只踏出去一步就被 ',
        tachyon.get_colored_name(),
        ' 以人类无法反应过来的速度坐在了背上',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '骑在 ',
        me.get_colored_name(),
        ' 的背上，用裤袜勒住了 ',
        me.get_colored_name(),
        ' 的嘴，就彷佛口球一般将 ',
        me.get_colored_name(),
        ' 固定住，被勒的受不了的 ',
        me.get_colored_name(),
        ' 张开了嘴，裤袜顺势卡住了 ',
        me.get_colored_name(),
        ' 的脸颊及嘴角',
      ]);
      await era.printAndWait([
        '瞬间，酸爽的臭味弥漫了 ',
        me.get_colored_name(),
        ' 的口中，濡湿的口感，以及淡淡来自胯下的骚臭味从 ',
        me.get_colored_name(),
        ' 的鼻腔侵入，被这猛烈的气味攻势突袭，导致 ',
        me.get_colored_name(),
        ' 不由得四肢发软跪倒在地',
      ]);
      era.println();
      await tachyon.say_and_wait('哼……稍微出了口恶气了，回到正题来吧。');
      await tachyon.say_and_wait('参加比赛当然是必须的，至于选择的赛事……');
      await tachyon.say_and_wait(
        '呵呵，那么就以三冠为目标吧，刚刚说成那样，要是敢拖了我的后腿小心剥了你的皮，没有异议吧？',
      );
      era.println();
      await era.printAndWait([
        '在被熏的失去意识前，',
        me.get_colored_name(),
        ' 的最后一个想法是：哪怕有意见也要 ',
        me.get_colored_name(),
        ' 让我说出口啊……',
      ]);
      return;
    } else if (
      love >= 50 &&
      relation > 225 &&
      tachyon.sex_code - 1 &&
      me.sex_code > 0
    ) {
      era.printButton('因为……', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 正想说出口，却被转过身来的 ',
        tachyon.get_colored_name(),
        ' 按住了嘴唇无法开口',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '站起身来，压住了坐在沙发上的 ',
        me.get_colored_name(),
        '，与 ',
        me.get_colored_name(),
        ' 四目相对的凝视着',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '我知道你想说什么，也知道于公于私我都有参加比赛的理由及必要性，但是……',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '转过身来，一屁股坐在 ',
        me.get_colored_name(),
        ' 的大腿上，拍了拍 ',
        me.get_colored_name(),
        ' 的大腿外侧',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '但我现在没有参加比赛的兴致，所以好好想想办法，说些话来讨好我吧，要是心情好了……说不定我就愿意参赛了呢？',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 露出苦笑，环抱住 ',
        tachyon.get_colored_name(),
        ' 的腰',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '十分自然的往里蹭了蹭，调整成最舒服的姿势',
      ]);
      era.println();
      await me.say_and_wait('速子最帅了');
      await me.say_and_wait('速子好可爱');
      await me.say_and_wait('速子好漂亮');
      await me.say_and_wait(['最厉害最强的', tachyon.get_uma_sex_title()]);
      await me.say_and_wait([
        '超光速的',
        tachyon.sex_code - 1 ? '公主' : '王子',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 不停在 ',
        tachyon.get_colored_name(),
        ' 耳边倾诉着称赞',
        tachyon.sex,
        '的话语',
      ]);
      await era.printAndWait([
        '而',
        tachyon.sex,
        '的耳朵也不停的晃着，显露出这些话的受用程度',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '露出了洋洋得意的表情，用力拍打 ',
        me.get_colored_name(),
        ' 的大腿示意继续',
      ]);
      era.println();
      await tachyon.say_and_wait('哼哼……再来，再来，多说点！');
      era.println();
      await era.printAndWait([
        '被拍的有些吃痛的 ',
        me.get_colored_name(),
        ' 心念一转，起了恶作剧的念头',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 将环抱的手放开，移到',
        tachyon.sex,
        '的大腿外侧',
      ]);
      era.println();
      await tachyon.say_and_wait(['……？', callname, '？']);
      era.printButton('「好想看速子在跑步时这对大屁股摇晃的模样啊」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        ' 用力一拍',
        tachyon.sex,
        '那丰满的臀部',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '全身颤了颤，那刚好合身紧贴的裤袜迭起了千层黑色浪花',
      ]);
      await me.say_and_wait(
        '好想在比赛结束后，在休息室里狠狠把速子的里面灌满白浆',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 的口气依然如先前夸赞时一般轻柔，话中的内容却是无比粗鄙的言语',
      ]);
      await era.printAndWait([
        '然而，不知是不是错觉，感觉 ',
        tachyon.get_colored_name(),
        ' 的耳朵反而更加挺直了',
      ]);
      era.println();
      await me.say_and_wait(
        '然后，用按摩棒把速子的里面堵住，就这么让速子上台去跳winning live',
      );
      await me.say_and_wait(
        '穿着表演服的速子就这么顶着腹部的突起站上舞台中央……',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 缓缓抚摸',
        tachyon.sex,
        '的肚子，想将话说完……',
      ]);
      await era.printAndWait([
        '然而，',
        me.get_colored_name(),
        ' 的手被握住了',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 转头看向了 ',
        me.get_colored_name(),
        '，不知不觉间，那暗红色的瞳孔已经变为了充满情欲的浅粉',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……说这种话来挑逗我……下场是什么你明白的吧……❤',
      ]);
      era.println();
      await era.printAndWait('啊啊，好像玩过头了呢');
      await era.printAndWait([
        '不知从何时开始，',
        tachyon.get_colored_name(),
        ' 的屁股靠着 ',
        me.get_colored_name(),
        ' 的下腹',
      ]);
      await era.printAndWait('不断的磨蹭着，彷佛在等待主人调教的小狗一般');
      era.println();
      await era.printAndWait([
        '虽然就这么开始做也不是不行……但一开始 ',
        me.get_colored_name(),
        ' 的目的是什么来着……？',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '比赛会参加的❤三冠❤目标就三冠吧❤好了……',
        callname,
        ' ❤快点❤来嘛❤',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 露出笑容，翻身将 ',
        tachyon.get_colored_name(),
        ' 压在身下',
      ]);
      await quick_into_sex(32);
    } else if (relation <= 225) {
      era.printButton('诱之以利', 1);
      await era.input();
      await me.say_and_wait(
        '要是参加比赛的话，比赛后的奖金不是可以用在实验上吗，这样研究经费的问题就解决了吧',
      );
      era.println();
      await era.printAndWait([
        '先诱之以利，对于 ',
        tachyon.get_colored_name(),
        ' 这样的研究者而言，谈论感情那也未免太过可笑，最好的办法就是在道理上说服对方',
      ]);
      await tachyon.say_and_wait([
        '驳回，',
        callname,
        '，我的研究副产物本身就能够用于卖钱，而为了这些比赛准备所浪费的时间在机会成本上来看已经远远大过于比赛奖金本身带来的益处了',
      ]);
      era.println();
      await me.say_and_wait(
        '但比赛吸引而来的粉丝呢，粉丝的消费能力也能提供不少的经费吧？',
      );
      era.println();
      await tachyon.say_and_wait(
        '你说的对，如果真的能够获得人气的话那么利益或许确实会大于研究本身可带来的利益……',
      );
      await tachyon.say_and_wait(
        '但是，那样的话花在所谓粉丝福利上的时间也需要更多，如Winning Live或是经营自己的社会形象等等，时间成本也会更加提升',
      );
      await tachyon.say_and_wait(
        '除此之外，你似乎忘了一件事，我需要钱，是用以作为实验经费，实验，才是我的根本目的，而非赚钱',
      );
      era.println();
      await me.say_and_wait(
        '……要是放弃参加比赛的话，那算是与特雷森学园建校方针相悖的行为…',
      );
      await me.say_and_wait(
        '虽说一般而言应该不会这么严重，但如果是前面就有过前科的速子……最坏的情况可能导致退学',
      );
      era.println();
      await era.printAndWait('诱之以利不行，那就威之以势');
      await era.printAndWait(
        '虽说这样吓唬人不大好，但不得不说这确实是有可能的走向……',
      );
      await era.printAndWait([
        '只是那名理事长大概是不会允许这种事发生的吧，但现在姑且还是能拿来吓唬一下 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        '但 ',
        tachyon.get_colored_name(),
        ' 的反应，就彷佛听见了什么好笑的笑话一般',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，你还记得我们第一次见面那时候吗？那时候我就已经被退学威胁过一次了，你真的认为我会在乎吗？',
      ]);
      era.println();
      await me.say_and_wait('！', true);
      await era.printAndWait('瞬间被点破了盲点');
      await era.printAndWait([
        '印象中，当时的自己听见可能退学的说法时就飞一般的去寻找 ',
        tachyon.get_colored_name(),
        ' 了',
      ]);
      await era.printAndWait([
        '但反过来呢？当时的',
        tachyon.sex,
        '，依然故我的在实验室里做着自己的实验',
      ]);
      await era.printAndWait(
        '从与自己签下契约时的态度来看，也不像是有替代方案的样子',
      );
      await era.printAndWait([
        '换句话说……',
        tachyon.sex,
        '是真的不在乎被退学与否的',
      ]);
      era.println();
      await era.printAndWait([
        '该怎么办……利诱不成，威逼也不成的',
        tachyon.sex,
        '，到底还有什么办法……',
      ]);
      era.printButton('放弃', 1);
      era.printButton('继续思考', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '束手无策，大概就是此时 ',
          me.get_colored_name(),
          ' 的状态吧',
        ]);
        await era.printAndWait([
          '已经毫无办法，对 ',
          tachyon.get_colored_name(),
          ' 而言，',
          tachyon.sex,
          '的所需都没有必要从比赛中获得',
        ]);
        await era.printAndWait([
          '这样的 ',
          me.get_colored_name(),
          '，也只能使出前面自己最不认为会被接受的办法了',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '那么，',
          callname,
          '，你还有什么说服我的办法吗？',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '饶有兴致的看着 ',
          me.get_colored_name(),
          '，下一秒脸上的兴趣却转为了吃惊',
        ]);
        await era.printAndWait(
          '原因也很简单，无论任何人，看见原本好端端在自己身前说话的人忽然跪坐在地，也一定会露出吃惊的表情吧',
        );
        era.println();
        era.printButton('「因为……想看」', 1);
        await era.input();
        await me.say_and_wait('我想看见速子在赛场上奔跑的模样');
        await me.say_and_wait([
          '想看见速子与其他',
          tachyon.get_uma_sex_title(),
          '在拼斗后最后赢下的样子',
        ]);
        await me.say_and_wait('想看速子站在Winning Live的中心C位闪烁的模样！');
        await era.printAndWait(
          '声音越说越强，人也越说越激动，到最后一句几乎是用喊的喊出来的',
        );
        await era.printAndWait([
          '最后的动之以情，发自内心把自己心中的话说出，希望能够被 ',
          tachyon.get_colored_name(),
          ' 听进去',
        ]);
        await era.printAndWait('虽说……一切大概只是自己的自作多情而已');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 战战兢兢的将头贴在地上，等待着对方的回答',
        ]);
        era.println();
        await tachyon.say_and_wait('………就为了这种事……下跪？');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 没有抬起头，只是继续跪在地上',
        ]);
        era.println();
        await tachyon.say_and_wait('我不在乎比赛，不在乎是否退学');
        await tachyon.say_and_wait([
          '说坦白讲，跟着这样的',
          tachyon.get_uma_sex_title(),
          '也只会造成困扰吧……',
        ]);
        await tachyon.say_and_wait(
          '如果我是你的话，我会选择在现在就因为协商不一提出负责合同的解除……结果你……',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '似乎想不到该怎么形容 ',
          me.get_colored_name(),
          ' 的行为，因此一时语顿',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…………你的脑袋到底在想什么，有这个必要吗？值得吗？',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 没有说话，只是抬起头来，看向',
          tachyon.sex,
        ]);
      } else {
        await era.printAndWait([
          '忽然，',
          me.get_colored_name(),
          ' 彷佛从',
          tachyon.sex,
          '的话语中得到了什么启发',
        ]);
        era.println();
        await era.printAndWait([
          '虽说 ',
          me.get_couple_title(),
          ' 认识的可能，大概，或许还没有那么久',
        ]);
        await era.printAndWait([
          '但根据 ',
          me.get_colored_name(),
          ' 对 ',
          tachyon.get_colored_name(),
          ' 这名',
          tachyon.get_uma_sex_title(),
          '的了解……',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '是不会浪费时间在毫无意义的事情上面的',
        ]);
        await era.printAndWait('没错，不会在毫无意义的事情上');
        await era.printAndWait('那么换句话说');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '肯花时间去做的事情，那必然是具有其意义在的',
        ]);
        await era.printAndWait('那么，问题1');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '，进入特雷森学园的理由是？',
        ]);
        era.println();
        await era.printAndWait([
          '如果真的没有必要，那么',
          tachyon.sex,
          '必然不会如此选择',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 能从进入特雷森学园获得的好处……',
        ]);
        await era.printAndWait([
          '这想都不用想，从',
          tachyon.sex,
          '的目标来看足以——寻找',
          tachyon.get_uma_sex_title(),
          '的可能性，超越可能性的界限',
        ]);
        await era.printAndWait([
          '既然如此，那就需要先研究透彻',
          tachyon.get_uma_sex_title(),
          '的一切才能谈及极限',
        ]);
        await era.printAndWait([
          '所以，拥有最多高质量的',
          tachyon.get_uma_sex_title(),
          '所聚集的特雷森学园绝对是最佳的研究场所，没有之一',
        ]);
        await era.printAndWait([
          '因此，被退学绝对不是',
          tachyon.sex,
          '说的那般可有可无',
        ]);
        era.println();
        await era.printAndWait('问题2');
        await era.printAndWait([
          '为什么 ',
          tachyon.get_colored_name(),
          ' 要以学生的身份进入学园',
        ]);
        era.println();
        await era.printAndWait([
          '特雷森学园除去学生也是有着各式各样的支持职位，也有非赛',
          tachyon.get_uma_sex_title(),
          '学科，如果说想避免这些麻烦为什么不从一开始就加入这些科系？',
        ]);
        era.println();
        await era.printAndWait([me.get_colored_name(), ' 彷佛捉住了什么灵感']);
        era.println();
        await era.printAndWait([
          '成为赛',
          tachyon.get_uma_sex_title(),
          '的原因，就是为了上场比赛',
        ]);
        await era.printAndWait([
          '如果不上场比赛的话，那么根本没有选择成为赛',
          tachyon.get_uma_sex_title(),
          '的必要',
        ]);
        await era.printAndWait([
          '到此，已经可以宣布 ',
          tachyon.get_colored_name(),
          ' 前面说的不想参加比赛什么……',
        ]);
        await era.printAndWait([
          '不知道，虽然不知道',
          tachyon.sex,
          '这么骗人的理由，但是',
        ]);
        await era.printAndWait('如果只是度过眼前这关，那也不需要知道那么多');
        era.println();
        era.printButton('「你在乎，因为实验需要验证」', 1);
        await era.input();
        await era.printAndWait('没有错');
        await era.printAndWait('这就是参加比赛的原因');
        await era.printAndWait('一切都是为了研究及最终的目的');
        era.println();
        await me.say_and_wait([
          '如果连其他',
          tachyon.get_uma_sex_title(),
          '，甚至同期都无法战胜，那还谈何超越速度极限？',
        ]);
        await me.say_and_wait([
          '虽然你我都有 ',
          tachyon.get_colored_name(),
          ' 能够战胜任何人的信心，但实验的验证依然是必须的',
        ]);
        era.println();
        await era.printAndWait('就好比1+1=2');
        await era.printAndWait(
          '即便所有人都知道这个答案的正确与否，还是需要存在验算及式子',
        );
        await era.printAndWait('这不是多余的步骤，而是研究的严谨性');
        await tachyon.say_and_wait('……说得好，但是，还有仿真赛呢？');
        await tachyon.say_and_wait(
          '哪怕并非比赛，我也能找到机会，与同期甚至更强的对手一较高下，也不用担心会找不到人',
        );
        await tachyon.say_and_wait(
          '如果说我真能表现出自己的强悍，那么沉浸于本能的那些凶兽是不会放过与我一决高下的机会的，不是吗？',
        );
        era.println();
        await era.printAndWait('听上去十分具有说服力的回答');
        await era.printAndWait([
          '即便是模拟赛，只要有机会能够与 ',
          tachyon.get_colored_name(),
          ' 这般强悍的',
          tachyon.get_uma_sex_title(),
          '一较高下，那么绝对不用担心对方不会拿出100%的实力来',
        ]);
        await era.printAndWait('但是……');
        era.println();
        era.printButton(
          `「你有见过，发挥出120%实力的${tachyon.get_uma_sex_title()}吗？」`,
          1,
        );
        await era.input();
        await tachyon.say_and_wait('…………哦？');
        await era.printAndWait('模拟赛所能表现出来的，从来就只是平常的实力');
        await era.printAndWait('要想超越极限，只有在真正的赛场上才有办法');
        await era.printAndWait('从古至今，那么多的赛场爆冷，不都是如此？');
        era.printButton(
          `「${tachyon.get_uma_sex_title()}的特性，便是只有在赛场上才能发挥出超越极限的实力」`,
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          '…………原来如此，这是你身为训练员的看法吗？除此之外呢？还有其他的理由吗？',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '依旧用着那种说不清道不明的玩味目光望着 ',
          me.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 不由得感到有些不自在',
        ]);
        await era.printAndWait([
          '但 ',
          me.get_colored_name(),
          ' 还是坚持，将埋藏在 ',
          me.get_colored_name(),
          ' 心中最深的理由说出',
        ]);
        era.println();
        era.printButton('「…………我想看」', 1);
        await era.input();
        await tachyon.say_and_wait('嗯？');
        await tachyon.say_and_wait('…………');
        await want_to_see(tachyon, me);
        era.println();
      }
      await era.printAndWait([
        tachyon.sex,
        '仔细端详了 ',
        me.get_colored_name(),
        ' 的神情，随后将目光停留在 ',
        me.get_colored_name(),
        ' 的眼睛，就如 ',
        me.get_couple_title(),
        ' 初次见面那时一般，凝视着 ',
        me.get_colored_name(),
        ' 的眼眸深处',
      ]);
      era.println();
      await tachyon.say_and_wait('…………呵呵，疯子配狂人吗？有意思，有意思！');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 有些忐忑不安的望着忽然开始大笑的',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '虽然不太明白',
        tachyon.sex,
        '的情绪为何变动如此剧烈，但看起来……事态似乎在朝着对 ',
        me.get_colored_name(),
        ' 有利的方向发展？',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '既然如此，为了实验动物的积极度，有时候适度的奖励也是必须的吧。',
      );
      await tachyon.say_and_wait(
        '我同意了，我会参加比赛的。那么既然决定了要跑，那就先简单拿下个经典三冠再说……',
      );
      await tachyon.say_and_wait(['你不会说做不到吧，', callname, '？']);
      era.println();
      await era.printAndWait(['但是，', tachyon.sex, '补充道']);
      era.println();
      await tachyon.say_and_wait([
        '作为代价……可千万别让我感到无趣了啊，',
        callname,
      ]);
    } else {
      era.printButton('「因为，我想看」', 1);
      await era.input();
      await tachyon.say_and_wait('……哈？');
      await want_to_see(tachyon, me);
      await era.printAndWait('以及，除此之外……');
      await era.printAndWait([me.get_colored_name(), ' 想了想，又补充说道']);
      era.println();
      await me.say_and_wait(
        '当然，要是，真的，如果万一的话，也想看看速子输掉比赛趴在地上不甘心的痛苦的样子！',
      );
      await tachyon.say_and_wait('！');
      era.println();
      era.printButton('（哎呀，激将生效了？）', 1);
      await era.input();
      await me.say_and_wait(
        '「不过，要是速子害怕输掉的话也不是不能理解，这样的话确实还是不参加的好……」',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 又故意瞄了 ',
        tachyon.get_colored_name(),
        ' 一眼，发现',
        tachyon.sex,
        '的态度有些不对，连忙闭上嘴，见好就收',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……居然敢把卡里古拉效应用在我身上，',
        callname,
        ' 你好大的胆子啊',
      ]);
      await me.say_and_wait('我没……咕噗！！？');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 想反驳，却被站起身来的 ',
        tachyon.get_colored_name(),
        ' 以重力加速度用力坐在了腹部上，使 ',
        me.get_colored_name(),
        ' 不由得发出彷佛青蛙被压扁的声音',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '哼……为了自己的一己之私，就想把天才的我的宝贵时间浪费在这种无聊的斗兽上吗？真是胆大妄为啊',
      ]);
      era.printButton('「我不是那个意思……」', 1);
      await era.input();
      await me.say_and_wait('再说，参加比赛也可以搜集到需要的实验数据不是吗……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 调整了下，将 ',
        me.get_colored_name(),
        ' 的姿势调整到了最适合',
        tachyon.sex,
        '舒服坐着的人肉靠椅的姿势',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 也很自然的将手抬起，放在',
        tachyon.sex,
        '的肩上为',
        tachyon.sex,
        '按摩',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '呼……真是帮大忙了，最近一直坐在实验桌前，全身酸痛的要命……',
      );
      await tachyon.say_and_wait('至于参加比赛……');
      await tachyon.say_and_wait('倒也不是不行，目标，就先订个三冠吧，');
      await tachyon.say_and_wait(
        '要是连同期中的第一都做不到，那确实没什么资格谈论极限……',
      );
      await tachyon.say_and_wait([
        '那么，',
        callname,
        '，你会尽心尽力辅佐我的吧？',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着',
        tachyon.sex,
        '疯狂的眼神，笑着说道',
      ]);
      era.printButton('「那是当然」', 1);
      await era.input();
    }
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 的目标决定了',
    ]);
  };
};
