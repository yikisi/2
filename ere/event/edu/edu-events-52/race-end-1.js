const era = require('#/era-electron');

const {
  common_talk_with_in_urara,
  common_talk_with_in_urara_end,
  common_talk_with_urara_48,
} = require('#/event/edu/edu-events-52/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

const crazy_fans = require('#/data/event/crazy-fans');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 */
async function common1(urara, me, callname) {
  await era.input();

  await urara.say_and_wait(['好——！嗯？', callname, '，那边！']);

  era.printButton('「怎么了吗？」', 1);
  await era.input();

  await urara.say_and_wait('商店街的大家，都来了哦！');
  await era.printAndWait([
    '顺着 ',
    urara.get_colored_name(),
    ' 注视的方向看去，只见那些平时与小',
    urara.uma_sex_title,
    '交情深厚的商店街邻里全都到齐了。',
  ]);
}

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 */
async function common2(urara, me, callname) {
  await era.printAndWait([
    '被大家一同送来的祝福打了个措手不及，',
    me.get_colored_name(),
    ' 仿佛被吓到了般愣在原地。',
  ]);
  await era.printAndWait(
    '不，或许就是被吓到了也说不定。仔细想想，以前的时候有过被这样期待的经历吗？',
  );
  await era.printAndWait([
    '而马上就看出了 ',
    me.get_colored_name(),
    ' 的不知所措，',
    urara.get_colored_name(),
    ' 笑着拉住 ',
    me.get_colored_name(),
    ' 的手，开始为 ',
    me.get_colored_name(),
    ' 打气。',
  ]);
  await urara.say_and_wait([callname, '！趁这个机会也和大家说点什么吧！']);
}

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    if (era.get('cflag:52:育成回合计时') === 23) {
      if (extra_flag.rank === 1) {
        await print_event_name('第一次胜利！', urara);
        await in_urara.say_as_unknown_and_wait([
          '虽然还只是出道，但真是不容易啊，名为 ',
          urara.get_colored_actual_name(),
          ' 的小',
          urara.uma_sex_title,
          '，拿到了第一名——',
        ]);
        era.drawLine();
        await era.printAndWait([
          '看到 ',
          urara.get_colored_name(),
          ' 冲线的瞬间，',
          me.get_colored_name(),
          ' 立刻无视了身体的劳损站起来，冲向了赛场观众席的最前排。',
        ]);
        await era.printAndWait(
          '心中的石头落地，肌肉酸痛与一着确认前的紧张感也随着担当的接近一同散去了。',
        );
        await era.printAndWait([
          '随着紧绷的精神进入放松状态，想要对 ',
          urara.get_colored_name(),
          ' 狠狠揉搓一番的念头也从压抑中解放出来。',
        ]);
        await era.printAndWait([
          '就这样，没顾及旁人是否在看，在祝贺之余，',
          me.get_colored_name(),
          ' 也将手直接伸向了 ',
          urara.get_colored_name(),
          ' 柔软的小脸与耳朵。',
        ]);
        await era.printAndWait([
          '沾湿的体操服上散发着',
          urara.teen_sex_title,
          '的清香，但与初遇时不同，今天的香气中也伴随着胜利的花香。',
        ]);
        await era.printAndWait([
          '在 ',
          me.get_colored_name(),
          ' 的揉搓中，',
          urara.get_colored_name(),
          ' 也像小动物般伸出小手轻轻扒着 ',
          me.get_colored_name(),
          '，沾满汗水的娃娃脸挂起了一丝羞红。',
        ]);
        await era.printAndWait([
          '如果可以，',
          me.get_colored_name(),
          ' 恨不得现在把这个柔软的小可爱抱起来吸，但目前尚存的理智还是及时拉住了 ',
          me.get_colored_name(),
          '。',
        ]);
        await me.say_and_wait(
          '这果然还是累到了吗？说起来，为什么头有点晕……',
          true,
        );
        era.println();
        if (era.get('relation:52:0') > 150) {
          await urara.say_and_wait([
            '诶嘿嘿～',
            callname,
            '，先别揉了！很痒的！',
          ]);
          await era.printAndWait([
            '害羞地拿掉 ',
            me.get_colored_name(),
            ' 兴奋过头的双手，',
            urara.get_colored_name(),
            ' 激动地摇着尾巴，绽放的笑容中含着发自内心的喜悦。',
          ]);
          await urara.say_and_wait([
            '今天的我是第一名哦！第一次看到前面没有人在跑！站上优胜者区域也是第一次！',
          ]);
        } else {
          await urara.say_and_wait([callname, '！别这样啊！大家都在看着呢！']);
          await era.printAndWait([
            '难为情的嘟着小嘴拍掉 ',
            me.get_colored_name(),
            ' 还在乱揉的手，',
            urara.get_colored_name(),
            ' 带着羞意的脸上终于绽出了笑容。',
          ]);
          await urara.say_and_wait([
            '嘿嘿，但还是谢谢 ',
            callname,
            '！今天的我真的是第一名哦～！',
          ]);
        }
        era.println();
        era.printButton('「一着的感觉如何？前方的景色，很漂亮吧？」', 1);
        await era.input();

        await urara.say_and_wait(
          '嗯！比我想像中的还要开心好多！我还想再得到更多次第一名！',
        );
        await urara.say_and_wait(
          '以后我们也要参加更多比赛对吧？我还会继续加油的！',
        );
        await era.printAndWait([
          '看来 ',
          urara.get_colored_name(),
          ' 的胜负意识已经在觉醒了，只要继续下去，以后一定能遇见质变的契机。',
        ]);
        await era.printAndWait([
          '那样的话，除了场外的大家，',
          urara.sex,
          '也能在同他人的竞争中找到自己在赛场内想要追求的愿望吧。',
        ]);
        await era.printAndWait([
          '揉着不知为何有些麻木的太阳穴，',
          me.get_colored_name(),
          ' 继续调动着训练员方面的思考。',
        ]);
        await era.printAndWait(
          '今后为了继续增强实力，总之先尽量累积参赛经验以此当作目标之一或许也不错。',
        );

        era.printButton('「好！那接下来比赛就要多起来了，没问题吧？」', 1);
        await common1(urara, me, callname);
        await era.printAndWait(
          '商店街的人「乌拉拉向这边看过来了！各位，预备——！」',
        );
        await era.printAndWait('商店街的人们「乌拉拉！恭喜顺利出道！」');
        await era.printAndWait(
          '随着祝福声响成一片，商店街的居民们迎着风拉起了写着「乌拉拉，恭喜出道」的横幅布条。',
        );
        await era.printAndWait(
          '商店街的人「乌拉拉！不管是出道还是拿到第一都做得很棒哦！」',
        );
        await era.printAndWait(
          '商店街的人「以后也尽情去跑吧！我们也会一直支持你的！」',
        );
        await era.printAndWait([
          '尽管只是成功出道，但大家却欢喜到像在办祭典，即使明白各位对 ',
          urara.get_colored_name(),
          ' 的感情，',
          me.get_colored_name(),
          ' 还是被吓了一跳。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 偷偷抹掉了险些迷住眼睛的「汗水」，随后带着笑容向大家全力以赴地回应着。',
        ]);
        await urara.say_and_wait('谢谢大家！今后的我!会一直、一直跑下去哦！');
        await era.printAndWait('商店街的人们「哦！加油啊——！」');
        await era.printAndWait(
          '商店街的人「接下来乌拉拉的事情也交给你了！训练员也要加油哦！」',
        );
        await common2(urara, me, callname);

        era.printButton('「诶？啊？我吗？可是到底要……」', 1);
        await era.input();

        await urara.say_and_wait(
          '没关系的！只要把心里话用力喊出来就好了！加油哦！',
        );
        await era.printAndWait([
          '既然这样，就非得回应大家的期待不可了。在 ',
          urara.get_colored_name(),
          ' 亮闪闪的目光中，',
          me.get_colored_name(),
          ' 深吸了一口气——',
        ]);
        await era.printAndWait([
          '然而就连第一个字都没来得及说出口，因过于用力崩断了脑内最后的意识，',
          me.get_colored_name(),
          ' 闷头仰了过去。',
        ]);
        await urara.say_and_wait([
          '嗯？',
          callname,
          '，怎么了……诶？诶！',
          callname,
          '！',
          callname,
          '——',
        ]);
        await era.printAndWait([
          '怀揣着没能说出的感谢，在 ',
          urara.get_colored_name(),
          ' 与周围人的惊呼中，体力透支的 ',
          me.get_colored_name(),
          ' 又一次晕头转向地倒下了。',
        ]);
        await era.printAndWait([
          '可恶，明明是挺感人的画面来着，为啥啊？连自己都没忍住地，',
          me.get_colored_name(),
          ' 笑着闭上了眼……',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait('嘶……');
        await in_urara.say_as_unknown_and_wait('咳，那个……出道战辛苦了？');
        await in_urara.say_as_unknown_and_wait(
          '终究不是体力能解决的问题呢，以后您还是注意身体吧……',
        );
        extra_flag.relation_change = 50;
      } else {
        await print_event_name('继续前进！', urara);
        await in_urara.say_as_unknown_and_wait(
          '意料之中的事情还是发生了。别泄气，如果是您的话，下次应该可以……',
        );
        era.drawLine();
        await era.printAndWait([
          '看到 ',
          urara.get_colored_name(),
          ' 虽然没能拿下一着，但有着预期之内的进步，',
          me.get_colored_name(),
          ' 稍微松了口气，身上积压的劳累也轻了不少。',
        ]);
        await era.printAndWait(
          '大家的努力都能见到成效，即使万事开头难，这也算得上不错的开篇了。',
        );
        await era.printAndWait([
          '虽然头还是因长期紧绷导致有点疼，但跟 ',
          urara.get_colored_name(),
          ' 的出道比起来，这些也都无伤大雅。',
        ]);
        await era.printAndWait([
          '望着在赛道旁擦着汗的 ',
          urara.get_colored_name(),
          '，',
          me.get_colored_name(),
          ' 缓缓站起来绕过人群，走向了前排离 ',
          urara.get_colored_name(),
          ' 最近的位置。',
        ]);

        era.printButton('「辛苦了，出道的第一战，感觉如何？」', 1);
        await era.input();

        era.println();
        if (era.get('relation:52:0') > 150) {
          await era.printAndWait([
            '看到 ',
            me.get_colored_name(),
            ' 招手的身影，',
            urara.get_colored_name(),
            ' 打起精神，和往常一样笑着跑了过来。',
          ]);
          await urara.say_and_wait([
            '谢谢 ',
            callname,
            '！而且我没有很辛苦哦！因为奔跑还是很开心！',
          ]);
          await urara.say_and_wait(
            '不过，结果还是没得到第一名……但是我好好地跑到最后了！',
          );
          await era.printAndWait([
            '虽然声音藏不住落寞，但 ',
            urara.get_colored_name(),
            ' 还是在下一秒前驱散了自己的失落。',
          ]);
          await urara.say_and_wait([
            callname,
            '！只要以后能拿到第一的话，应该就可以参加更多比赛了吧？',
          ]);
        } else {
          await era.printAndWait([
            '看到 ',
            me.get_colored_name(),
            ' 的身影，',
            urara.get_colored_name(),
            ' 抹掉脸上咸咸的水珠，跑到了 ',
            me.get_colored_name(),
            ' 的身边。',
          ]);
          await urara.say_and_wait([
            '谢谢 ',
            callname,
            '，不过我没有很辛苦哦，而且奔跑还是很开心！',
          ]);
          await urara.say_and_wait(
            '只是……结果还是没得到第一名……但这次好好地跑到最后了！',
          );
          await era.printAndWait([
            '虽然声音藏不住落寞，但 ',
            urara.get_colored_name(),
            ' 还是在下一秒前找回了自己的笑容。',
          ]);
          await urara.say_and_wait(
            '我想要一直跑下去呢！所以现在出道了，以后应该可以拿到一着对吧？',
          );
        }
        era.println();
        await era.printAndWait([
          '看来 ',
          urara.get_colored_name(),
          ' 的胜负意识已经在觉醒了，只要继续下去，以后一定能遇见质变的契机。',
        ]);
        await era.printAndWait([
          '那样的话，除了场外的大家，',
          urara.sex,
          '也能在同他人的竞争中找到自己在赛场内想要追求的愿望吧。',
        ]);
        await era.printAndWait([
          '揉着还在隐隐作痛的太阳穴，',
          me.get_colored_name(),
          ' 继续调动着训练员方面的思考。',
        ]);
        await era.printAndWait(
          '不过首先为了之后能参加到更多比赛中去，果然还是尽快确保第一次胜利比较好。',
        );

        era.printButton('「好！那新一轮的特训就要开始了，没问题吧？」', 1);
        await common1(urara, me, callname);
        await era.printAndWait(
          '商店街的人「乌拉拉！就算没拿到第一也很厉害哦！」',
        );
        await era.printAndWait(
          '商店街的人「以后也尽情去跑吧！我们也会一直支持你的！」',
        );
        await era.printAndWait(
          '尽管只是成功出道，甚至没能拿到一着，但大家却欢喜到像在办祭典一般。',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' 偷偷抹掉了险些迷住眼睛的「汗水」，随后带着笑容向大家全力以赴地回应着。',
        ]);
        await urara.say_and_wait(
          '谢谢大家！下一次我一定会尽早拿到一着给大家看的！',
        );
        await era.printAndWait('商店街的人们「哦！加油啊——！」');
        await era.printAndWait(
          '商店街的人「训练员也辛苦了哦！谢谢你照顾小乌拉拉！」',
        );

        await common2(urara, me, callname);

        era.printButton('「啊？我吗？可是我也没有……」', 1);
        await era.input();

        await urara.say_and_wait([
          '没关系啦！下一次我们一定可以的，所以 ',
          callname,
          ' 现在把心里话喊出来吧！',
        ]);
        await era.printAndWait([
          '既然这样，就非得回应大家的期待不可了。在 ',
          urara.get_colored_name(),
          ' 亮闪闪的目光中，',
          me.get_colored_name(),
          ' 深吸了一口气——',
        ]);
        await era.printAndWait([
          '然而就连第一个字都没来得及说出口，因过于用力崩断了脑内最后的意识，',
          me.get_colored_name(),
          ' 闷头仰了过去。',
        ]);
        await urara.say_and_wait([
          '嗯？',
          callname,
          '，怎么了……诶？诶！',
          callname,
          '！',
          callname,
          '——',
        ]);
        await era.printAndWait([
          '怀揣着没能说出的感谢，在 ',
          urara.get_colored_name(),
          ' 与周围人的惊呼中，体力透支的 ',
          me.get_colored_name(),
          ' 一次晕头转向地倒下了……',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '唉，为了对付乌拉拉的出道，您也辛苦了。',
        );
        await in_urara.say_as_unknown_and_wait(
          '您还是尽量注意一下吧，不要等到乌拉拉还没拿到一着，训练员却垮掉了……',
        );
      }
    } else {
      if (extra_flag.rank === 1) {
        await print_event_name('终于，第一次的……', urara);
        await in_urara.say_as_unknown_and_wait(
          '无论如何，悬着的心，终于可以因为初次的胜利暂时放一放了。',
        );
        era.drawLine();
        await era.printAndWait([
          '随着 ',
          urara.get_colored_name(),
          ' 的第一个冲过终点板，',
          me.get_colored_name(),
          ' 也揉着僵硬的双肩站了起来。',
        ]);
        await era.printAndWait(
          '虽然身体依旧很疲惫，但与上次相比还是轻了许多，尤其是担当平安一着后更是变得一身轻松。',
        );
        await era.printAndWait([
          '至少这次绝对不会轻易累倒在别人面前了，看着从远处跑来的小小身影，',
          me.get_colored_name(),
          ' 向那抹粉色扬起了手。',
        ]);
        await era.printAndWait([
          '汗水沾湿的体操服散发着',
          urara.teen_sex_title,
          '的清香，看到 ',
          me.get_colored_name(),
          ' 的招呼，从另一侧跑来的小',
          urara.uma_sex_title,
          '带着胜利的笑容停在了 ',
          me.get_colored_name(),
          ' 的身前。',
        ]);
        await urara.say_and_wait([
          '呜哦——！第一名！',
          callname,
          '！我拿到第一名了——！',
        ]);
        await urara.say_and_wait(
          '啊，糟糕！我跑进优胜者区域了，应该不要紧吧……',
        );

        era.printButton('「不，冷静一点啊乌拉拉，你是第一名啊。」', 1);
        await era.input();

        era.println();
        if (era.get('relation:52:0') > 150) {
          await era.printAndWait([
            '伸手揉着小',
            urara.uma_sex_title,
            '的脸颊，',
            me.get_colored_name(),
            ' 笑着安抚着因为初次胜利而变得过于兴奋的担当。',
          ]);
          await era.printAndWait([
            '似乎是在享受着 ',
            me.get_colored_name(),
            ' 的抚摸，在 ',
            me.get_colored_name(),
            ' 的揉搓中逐渐安静下来的 ',
            urara.get_colored_name(),
            ' 也露出了享受的神情。',
          ]);
          await urara.say_and_wait(
            '啊，好像真是这样！乌拉拉已经不是以前的样子了～',
          );
          await urara.say_and_wait([
            '那 ',
            callname,
            ' 有看到吗？我刚才真的第一个冲个终点板了哦！',
          ]);
        } else {
          await era.printAndWait([
            '将毛巾与运动饮料递给气喘吁吁的小',
            urara.uma_sex_title,
            '，',
            me.get_colored_name(),
            ' 轻声提醒着还有些晕头转向的担当。',
          ]);
          await era.printAndWait([
            '拍拍脸颊接过水与毛巾，',
            urara.get_colored_name(),
            ' 终于对 ',
            me.get_colored_name(),
            ' 露出了心结落地的笑容。',
          ]);
          await urara.say_and_wait('啊，确实没错呢！这次的我好像真的赢了！');
          await urara.say_and_wait([
            '虽然很累，但是 ',
            callname,
            '，刚刚我真的第一个冲过去了吗？',
          ]);
        }

        era.printButton(
          '「当然了！而且不但我看见了，来看你的大家也看到了哦！」',
          1,
        );
        await era.input();

        await era.printAndWait([
          urara.get_colored_name(),
          ' 顺着 ',
          me.get_colored_name(),
          ' 所指的方向看去，遵照着各自的约定，商店街的各位再次拉起了应援的条幅。',
        ]);
        await era.printAndWait([
          '「乌拉拉，第一名恭喜」，明明尚未到来，坚信 ',
          urara.get_colored_name(),
          ' 会胜利的各位还是提早做出了这条横幅。',
        ]);
        await era.printAndWait([
          '伸手向一直支持着自己的人用力的挥手致意，',
          urara.get_colored_name(),
          ' 的笑容仿佛比以往更加闪耀了。',
        ]);
        await era.printAndWait([
          '尽管只是出道后的第一次胜利，但对 ',
          urara.get_colored_name(),
          ' 与支持着',
          urara.sex,
          '的大家来说这依旧是值得纪念的经历。',
        ]);
        await era.printAndWait([
          '目睹着眼前的一切，意识到事情终于走上正轨的 ',
          me.get_colored_name(),
          '，也终于可以闭上眼睛松口气了。',
        ]);
        await era.printAndWait([
          '回到选手通道内时，',
          urara.get_colored_name(),
          ' 依旧兴致勃勃的与 ',
          me.get_colored_name(),
          ' 讲着各种各样的「第一次」。',
        ]);

        era.printButton('「乌拉拉，站在最前面的『第一次』果然很棒吧？」', 1);
        await era.input();

        await urara.say_and_wait(
          '嗯！跑在最前面的时候，看到的景色意想不到的漂亮呢！',
        );
        await urara.say_and_wait(
          '领先的时候风真的很强哦！但是只要往前跑，风就仿佛会自己让开一样！',
        );
        await urara.say_and_wait(
          '还有……得到第一名果然很开心！大家的笑容也很开心！',
        );

        era.printButton('「那么再接再厉吧，为了下次的胜利。」', 1);
        await era.input();

        await urara.say_and_wait('嗯！我绝对要再拿到第一名的！');
        await urara.say_and_wait([
          callname,
          '！以后也这样一起，我们一定可以走得更远哦！',
        ]);
        await era.printAndWait([
          '牵起小担当伸出的邀请之手，',
          urara.get_colored_name(),
          ' 与 ',
          me.get_colored_name(),
          '，现在才刚刚开始。',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '就是这样，出道战辛苦了，我也稍微安心下来了。',
        );
        await in_urara.say_as_unknown_and_wait(
          '您觉得如何呢？那么准备好了吗，与乌拉拉一同的日子？',
        );
      } else {
        crazy_fans.push(52);
      }
    }
  };

  handlers[`${race_enum.arim_kin}_${47 + 48}`] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name(
      [
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '的身影',
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '的名字',
      ],
      urara,
    );
    await in_urara.print_and_wait('这个故事，要从哪说起呢？');
    await common_talk_with_in_urara(urara, me, in_urara);
    await in_urara.say_as_unknown_and_wait(
      '说完了自己的事，那么在最后临走前，再稍微说两句和乌拉拉的现状有关的事吧。',
    );
    if (extra_flag.rank === 1) {
      await in_urara.say_as_unknown_and_wait(
        '就像大家所祈愿的那样，您马上就能看到奇迹了呢，乌拉拉『最棒』的一着。',
      );
      await in_urara.say_as_unknown_and_wait(
        '或许一切有因有果，但在所有目瞪口呆的观众来说，这就是奇迹吧？',
      );
    } else if (extra_flag.rank <= 5) {
      await in_urara.say_as_unknown_and_wait(
        '其实离奇迹只差一步之遥哦？乌拉拉很努力，您的直觉也一直都很准呢。',
      );
      await in_urara.say_as_unknown_and_wait(
        '不过对于宠爱着乌拉拉的大家来说，这样的结果也足以落泪了吧。',
      );
    } else {
      await in_urara.say_as_unknown_and_wait(
        '和大多数人想得一样哦？不过大家都很开心，乌拉拉也很满足，这样就够了吧？',
      );
      await in_urara.say_as_unknown_and_wait(
        '只是在我看来，这次您做的未免太激进了点。',
      );
    }
    await common_talk_with_in_urara_end(urara, me, in_urara, callname, true);
    await era.printAndWait([
      '而一个踉跄站到阴影之外，不小心冲出了道口的 ',
      me.get_colored_name(),
      '，看到了正如另一个 ',
      in_urara.get_colored_name(),
      ' 所说的比赛的结局。',
    ]);
    await era.printAndWait([
      '站在还在呐喊欢呼的众人与飞舞的纸片构成的彩幕之外，从云层外探出的阳光此刻实在有些晃眼。',
    ]);
    await me.say_and_wait('三女神啊……', true);
    era.drawLine();
    await era.printAndWait([
      '从赛道外到后场的选手休息室中，连汗都顾不上擦，兴奋的 ',
      urara.get_colored_name(),
      ' 还在和 ',
      me.get_colored_name(),
      ' 说着比赛时的感想。',
    ]);
    if (extra_flag.rank === 1) {
      await era.printAndWait([
        '不过现在恐怕任谁都会激动地讨论比赛结果吧，毕竟「漂亮的赢下第一的」竟然是「',
        urara.get_colored_actual_name(),
        '」。',
      ]);
      await urara.say_and_wait(
        '就是这样！但是感觉赢得有点不真实呢，好像哪里怪怪的——',
      );
      await era.printAndWait([
        '这样说也没错，',
        urara.get_colored_name(),
        ' 今天何止跑得很精彩，简直是跟平时判若两人……虽然这么说',
        urara.sex,
        '好像有点可怜。',
      ]);

      era.printButton('「乌拉拉要再来一次吗？明年的有马纪念。」', 1);
      await era.input();

      await urara.say_and_wait('嗯！毕竟大家好像也没感觉到有多开心呢！');
      await era.printAndWait([
        '虽然这个，多半是太震撼了的原因吧。苦笑着用毛巾擦着 ',
        urara.get_colored_name(),
        ' 的笑脸，',
        me.get_colored_name(),
        ' 无奈地想到。',
      ]);
    } else if (extra_flag.rank <= 5) {
      await era.printAndWait([
        '不过现在恐怕任谁都会激动地讨论比赛结果吧，毕竟 ',
        urara.get_colored_name(),
        ' 的表现实在是过于意外了。',
      ]);
      await urara.say_and_wait(
        '呜——虽然大家都不说话，但当时真的只差一点点了！',
      );
      await era.printAndWait([
        '其实入着也很棒了，等到时候再看看赛程录像吧。这样想着，',
        me.get_colored_name(),
        ' 将毛巾和水递给 ',
        urara.get_colored_name(),
        '。',
      ]);

      era.printButton('「正因如此，也绝对不能这样就算了对吧？」', 1);
      await era.input();

      await urara.say_and_wait('嗯！我感觉到了哦！下次自己能赢的预感！');
      await era.printAndWait([
        '与斗志高昂的 ',
        urara.get_colored_name(),
        ' 碰了碰拳，',
        me.get_colored_name(),
        ' 的确从这其中感受到了两人间不可替代的默契。',
      ]);
    } else {
      await era.printAndWait([
        '看来是看到支持自己的大家都露出了笑容吧，现在的 ',
        urara.get_colored_name(),
        ' 就像在生日时收到礼物的孩子一样。',
      ]);
      await urara.say_and_wait(
        '但是呢……诶嘿嘿～是预料之内的结果呦？熟悉的感觉好像又回来……',
      );
      await era.printAndWait([
        '倒也不至于，只是有马对 ',
        urara.get_colored_name(),
        ' 来说各个方面都辛苦过头了。这样想着，',
        me.get_colored_name(),
        ' 笑着揉了揉小',
        urara.uma_sex_title,
        '的脸颊。',
      ]);

      era.printButton('「所以，资深级的……」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！明年我还要再试一次！我会让大家看到乌拉拉的成长的！',
      );
    }
    await common_talk_with_urara_48(urara, me, in_urara, callname, true);
  };
};
