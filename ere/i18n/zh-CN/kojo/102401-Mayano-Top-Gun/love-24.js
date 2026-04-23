/**
 * @file 摩耶重炮 - 爱慕
 * @author 黑奴二号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {string} callname 摩耶重炮对玩家的称呼
   */
  async 24(maya, callname) {
    await maya.say_and_wait('Maya呢，从小就很向往着天空。');
    await maya.say_and_wait('在Maya小的时候，爸爸曾经带我飞上过天空。');
    await maya.say_and_wait('那时的景色，Maya一生也无法忘记吧。');
    await maya.say_and_wait(
      '『等你长大以后就能看到比这更美的风景哦』爸爸曾经这么说过。',
    );
    await maya.say_and_wait('然后Maya来到了特雷森。');
    await maya.say_and_wait('在赛场上的话，能否再次感受到那样的心情呢？');
    await maya.say_and_wait(`就这样，Maya与 ${callname} 相遇了。`);
    await maya.say_and_wait('体验到了很多全新的事物，感受到了很多全新的心情。');
    await maya.say_and_wait('所以……');
    await maya.say_and_wait('在Maya长大之前，可要一直陪着人家哦？');
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {string} callname 摩耶重炮对玩家的称呼
   */
  async 49(maya, callname) {
    await maya.print_and_wait(
      `某一天，${maya.name} 从不知名的渠道那里得到了神秘的书`,
    );
    await maya.say_and_wait(
      `这就是传说中只有大人才能看的书籍吗？只要看了这个，是不是Maya也能成为大人呢？`,
    );
    await maya.say_and_wait(`这是……`);
    await maya.say_and_wait(`啊哇哇哇哇哇……`);
    await maya.say_and_wait(`果……果然，这种事情对Maya来说还是太早了！`);
    await maya.print_and_wait(
      `尽管看到一半就因为过于刺激而放弃了，但书中的内容仍然给 ${maya.name} 留下了深刻的印象。`,
    );
    await maya.say_and_wait(`不过，如果是和 ${callname} 的话……？`);
    await maya.print_and_wait(
      `${maya.name} 是一个天才，无论是什么都能很快的学会————或许很快有人就要被迫意识到这一点了。`,
    );
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} luna 鲁铎象征
   * @param {CharaTalk} ag 气槽
   * @param {CharaTalk} you 玩家
   * @param {string} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} callname_18 气槽对玩家的称呼
   * @param {PrintedSpan} m_call_k 摩耶重炮对富士奇石的称呼
   * @param {PrintedSpan} m_call_a 摩耶重炮对气槽的称呼
   */
  async 74(maya, luna, ag, you, callname, callname_18, m_call_k, m_call_a) {
    await era.printAndWait([
      '某天。',
      you.get_colored_name(),
      ' 跟 ',
      maya.get_colored_name(),
      ' 一起被叫到学生会办公室，然后……',
    ]);
    await maya.say_and_wait('哇啊！你说人家被选为时装秀的来宾！？');
    await luna.say_and_wait(
      `是的，这也是学园的宣传活动之一。询问一般大众希望看到哪套决胜服──`,
    );
    await ag.say_and_wait(
      `而于『美丽梦想杯』登场的婚纱决胜服获得了第一名……你是婚纱决胜服的主人，所以就决定麻烦你了。`,
    );
    await maya.say_and_wait(
      '哇！人家也很喜欢当时那套服装～！咦？对了？这样一来──',
    );
    await ag.say_and_wait(
      `……当然，我也会参加。因为我也是拥有婚纱服装的${ag.uma_sex_title}。`,
    );
    await ag.say_and_wait(
      `此外……这项企划还有一个重点，走伸展台时要有伴行者领着你一起走。`,
    );
    await luna.say_and_wait(
      `可以公开募集，也可以用指定的。于期限前由来宾本人自由决定。`,
    );
    await maya.say_and_wait('伴行者……可以公开募集或指定啊？不过人家……');
    era.printButton('「你想怎么选？」', 1);
    await era.input();
    await maya.say_and_wait(`……${callname} 你觉得呢？`);
    await maya.say_and_wait([
      '公、公开募集的话，粉丝应该会很开心吧！但拜托很擅长带领的 ',
      m_call_k,
      ' 好像也不错？',
    ]);
    await maya.say_and_wait('不过……要是有人对我说『指定我吧！』的话……我就……');
    era.printButton('「嗯？」', 1);
    await era.input();
    await maya.say_and_wait('……真是的～！！为什么你就是不懂呢～！？');
    await maya.say_and_wait(
      '没关系，没关系……！既～然这样，我就来拟定作战计划！',
    );
    await era.printAndWait([
      maya.get_colored_name(),
      ' 似乎开始研拟某种作战计划。',
      you.get_colored_name(),
      ' 决定暂且旁观……',
    ]);
    await era.printAndWait(
      `后辈赛${maya.uma_sex_title}「重炮前辈！你决定选谁当伴行者呢？大家都很在意呢！」`,
    );
    await maya.say_and_wait('谢谢～！我得赶快找到自愿的人呢～～！……（偷瞄）。');
    await era.printAndWait(
      '粉丝「我很期待活动哦！如果公开募集伴行，我一定会报名的！」',
    );
    await maya.say_and_wait(
      '人家真受欢迎☆要是都没人自愿的话，干脆就公开募集吧～？……（偷瞄）。',
    );
    era.drawLine();
    await era.printAndWait(
      `但是过了好几天${maya.sex}都迟迟未决定伴行者人选。正当 ${you.name} 想着究竟是怎么回事时……`,
    );
    await ag.say_and_wait(
      `打扰了。我是来询问你的意见的……你应该知道我想问什么吧？`,
    );
    era.printButton('「是伴行者的事吧？」', 1);
    await era.input();
    await ag.say_and_wait(
      `我理解你的烦恼，但不能再一直等下去了。请尽快给我答复──`,
    );
    await maya.say_as_unknown_and_wait([
      '等一下～～！',
      callname,
      '，这是怎么回事！？',
    ]);
    era.printButton('「！？」', 1);
    await era.input();
    await maya.say_and_wait([
      '『尽快回答』有关『伴行者的事』……！？你要当 ',
      m_call_a,
      ' 的伴行者吗！？',
    ]);
    era.printButton('「咦？」', 1);
    await era.input();
    await maya.say_and_wait('人家……人家也，一直在等你自愿的说～！！');
    era.printButton('「什么！？」', 1);
    await era.input();
    await maya.say_and_wait(
      `因为人家的伙伴就是 ${callname} 嘛！但比起指名，由你自愿担任我会更高兴……`,
    );
    await maya.say_and_wait([
      '所以我一直在等你开口，没想到 ',
      m_call_a,
      ' 却指名了你！',
    ]);
    await ag.say_and_wait(`等一下！你在说什么？我的伴行者早已经有人选了。`);
    await maya.say_and_wait('咦！？……那、那你说的『伴行者』的『答复』是……？');
    era.printButton('「是在催促我们提出伴行者申请哦」', 1);
    await era.input();
    await maya.say_and_wait('……啊～～！原来是人家误会了！？太好了～～！');
    await maya.say_and_wait(
      '嘿……嘿嘿……我搞错了，抱歉。我还以为『欲擒故纵作战』失败了呢──',
    );
    era.printButton('「『欲擒故纵作战』？」', 1);
    await era.input();
    await maya.say_and_wait('……糟糕！');
    await maya.say_and_wait(
      '呜呜～～对啦！我想展现自己很受欢迎，让你焦急，催你主动说出想陪我去啦！',
    );
    await maya.say_and_wait(
      '人家希望训练员把我当成最特别的存在，希望对你来说我是最重要的……',
    );
    era.printButton('「可以再给我一次机会吗？」', 1);
    await era.input();
    await maya.say_and_wait('……真……真没办法……只有一次的话，……可以哦。');
    era.println();

    era.printButton(`「你当然是我最重要的人」（升级关系）`, 1);
    era.printButton(`「请让我与你伴行」（暂不升级）`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait(
        '……真、真的吗？人家最特别？人家最重要，最闪闪发光吗？',
      );
      era.printButton('「是的！」', 1);
      await era.input();
      await maya.say_and_wait(
        '耶嘿嘿……！虽然作战失败，但也得知了你的心意，结果还算满意！',
      );
      await maya.say_and_wait(
        '不过～～要做好心理准备哦？当天我要让你说出更～不得了的话哦☆',
      );
      era.printButton('「更不得了的话……！？」', 1);
      await era.input();
      await ag.say_and_wait([
        '唉……那我就用 ',
        callname_18,
        ' 的名字提出申请咯。可别因为那个『不得了的话』惹出麻烦啊。',
      ]);
    } else {
      await maya.say_and_wait('……好的！耶嘿嘿，我好开心。');
      await ag.say_and_wait([
        '那我就用 ',
        callname_18,
        ' 的名字提出申请咯。唉……活动当天可别惹麻烦哦。',
      ]);
      era.drawLine();
      await maya.say_and_wait(
        '嗯～～！终于要正式上场了～服装也准备好了！剩下的就是……',
      );
      era.printButton('「剩下心理准备呢」', 1);
      await era.input();
      await maya.say_and_wait(
        '是这样没错啦，但我胸口怦怦跳个不停呢！感觉永远无法做好万全准备～～不过……',
      );
      await maya.say_and_wait(
        '这代表人家就是这么幸福！……走展台时要拿出最棒的表现哦。',
      );
      await era.printAndWait(
        `${you.name} 和 ${maya.name}鼓足干劲，迈步踏上展台。`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} rice 米浴
   * @param {CharaTalk} you 玩家
   * @param {string} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} call_30 摩耶重炮对米浴的称呼
   * @param {string} self_call_30 米浴的自称
   * @param {PrintedSpan} r_call_m 米浴对摩耶重炮的称呼
   */
  async 89(maya, rice, you, callname, call_30, self_call_30, r_call_m) {
    await era.printAndWait(
      `${you.name} 与 ${maya.name} 受到招待，参加某场活动。说是这么说，那活动其实是……`,
    );
    await maya.say_and_wait(
      '阳光超级耀眼！举办婚礼活动的好日子☆我一定会让活动大获成功哟～！',
    );
    era.printButton('「你充满干劲呢」', 1);
    await era.input();
    await maya.say_and_wait(
      '因为人家被选上当模特儿嘛！真想快点换上婚纱，吸引大家的目光──',
    );
    await maya.say_and_wait('──咦？奇怪？在那边东张西望的不是……');
    await maya.say_and_wait([
      '果然是 ',
      call_30,
      '！太好了～！你该不会是来看这场活动的吧？',
    ]);
    await rice.say_and_wait(
      `呀……是、是的……因为结婚典礼能令人感到幸福……${self_call_30} 期待很久了。`,
    );
    await rice.say_and_wait(`所以便早点结束训练──`);
    await rice.say_and_wait(`呀啊！刚、刚刚响起轰隆轰隆声，……下、下雨了！？`);
    await era.printAndWait(
      `此时突然下起了雨。${you.name} 原本认为一定只是场阵雨，但是……`,
    );
    await era.printAndWait(
      '摄影工作人员「糟糕──还不放晴吗？是可以照常举行啦，可是都没什么客人了……还是暂且中止活动……」',
    );
    await maya.say_and_wait('唔～～～～～');
    await rice.say_and_wait(
      `对……对不起……对不起！会下雨一定是 ${self_call_30} 的错，对不起！`,
    );
    await rice.say_and_wait(`都怪 ${self_call_30} 跑来这里……！`);
    era.printButton('「不是你的错哦」', 1);
    await era.input();
    await maya.say_and_wait(
      '就是啊！而且活动也没有中止。雨水可掩盖不住人家的耀眼光芒！',
    );
    await maya.say_and_wait(
      '不对！应该说雨水会令我更加闪耀！你们两个就在那边看着吧☆',
    );
    await maya.say_and_wait(
      '叮咚──♪大家久等了☆就让人家的游行为活动揭开序幕～！',
    );
    await era.printAndWait(
      '女性粉丝「重炮好可爱～！唔唔……要是天气再好一点就好了……！」',
    );
    await maya.say_and_wait('雨水也是人家身上的饰品哦♪你们看！闪闪发光～☆');
    await era.printAndWait(
      '男性粉丝「……！！真的耶！在相机闪光灯的照耀之下，雨水变得像亮片一样……！」',
    );
    await maya.say_and_wait('对吧♪不过，接下来更有看头哦！……3……2……1──');
    await maya.say_and_wait('阳光现身──☆');
    await era.printAndWait('粉丝们「哇啊啊啊啊～～～！！」');
    await rice.say_and_wait([
      r_call_m,
      `，你好厉害……！大家都露出了笑容……就像被你施了魔法……！`,
    ]);
    await maya.say_and_wait(
      '嘿嘿，谢谢你☆以前爸爸曾教过我怎么分辨云的种类跟放晴的时机哦～',
    );
    await maya.say_and_wait('毕竟我家爸爸可是翱翔在天空中的飞行员嘛！嗯哼！');
    era.printButton('「所以你才能够利用雨来表演啊？」', 1);
    await era.input();
    await maya.say_and_wait(
      '没～错！不过，其实天气跟活动内容都不重要，最重要的是──',
    );
    await maya.say_and_wait('人家要成为大家的太阳！');
    await maya.say_and_wait(
      '穿上这套衣服时，我在心中发誓。要用我的闪耀光芒照得大家闪闪发光。',
    );
    await maya.say_and_wait(
      `因为这样才是我最向往的──成熟${maya.phy_sex_title}呀！`,
    );
    await rice.say_and_wait([
      '……！……那、那个，',
      r_call_m,
      ' 跟大家都在闪闪发光哦。',
    ]);
    await rice.say_and_wait(
      `看到你们这样，${self_call_30} 的内心也闪耀了起来，觉得自己要更加油。所以……谢谢你！`,
    );
    await maya.say_and_wait(
      '活动玩得真开心～！不过呢，接下来才是──人家的重头戏！烟火秀！',
    );
    await maya.say_and_wait(
      '……其实是想穿上那套最能闪闪发光的服装一起看烟火的。却被雨给弄脏了。',
    );
    await maya.say_and_wait(`攻陷 ${callname} 计划只好留到下次机会了☆`);
    era.println();

    era.printButton('「不管穿上什么衣服，重炮都是最闪耀的」（升级关系）', 1);
    era.printButton('「为了下次也能当上模特儿，继续努力吧！」（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('……！！');
      await maya.say_and_wait('人、人家……被攻陷了……人家被求婚了～～！');
      era.printButton('「我还没求婚哦！？」', 1);
      await era.input();
      await maya.say_and_wait(
        '不用害羞啦～！你的意思是我们要永远一起并肩奔跑，对吧？',
      );
      await maya.say_and_wait(
        '这下训练员的太阳永远都是Maya咯☆我是不会输的～！',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        ' 如此说着，露出了兴高采烈的笑容。',
      ]);
      await maya.say_and_wait('耶耶～☆谢谢大家的支持！人家很幸福～！');
      await maya.say_and_wait(
        `我发誓，接下来也会跟 ${callname} 一起带给大家闪耀光芒！`,
      );
      await maya.say_and_wait(`对吧！${callname}♪`);
      era.printButton('「！……当然，我也发誓！」', 1);
      await era.input();
      await era.printAndWait('听到两人的宣言，会场一片欢腾。');
    } else {
      await maya.say_and_wait(
        '好！别说下次，下下次也要当上模特儿。我要变得越来越适合这套服装，然后──',
      );
      era.printButton('「然后？」', 1);
      await era.input();
      await maya.say_and_wait(
        '然──然后……人家变得适合这套服装时，……那个……永远……跟人家……我是说──',
      );
      await maya.say_and_wait(
        '呀！？──哇、哇啊！是烟火！快、快看快看，训练员！',
      );
      await maya.say_and_wait(
        '……接下来──看、看完烟火了，回家吧！而且肚子也饿了……那个……',
      );
      await maya.say_and_wait(
        '……听我说！总有一天，我一定会提起勇气说完刚刚那段话的。',
      );
      await maya.say_and_wait('……等着人家哦！');
    }
    return ret;
  },
};
