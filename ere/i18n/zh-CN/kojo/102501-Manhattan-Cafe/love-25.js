/**
 * @file 曼城茶座 - 爱慕
 * @author Necroz
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async 49(coffee, you) {
    await coffee.print_and_wait([
      '某个夜晚，',
      coffee.get_colored_name(),
      ' 做了一个不寻常的梦。',
    ]);
    await coffee.print_and_wait([
      '梦中的自己……似乎正与 ',
      you.get_colored_actual_name(),
      ' 做着些难以言齿的事情……',
    ]);
    await coffee.print_and_wait([
      '不要擅自回想起来啊，',
      coffee.get_colored_name(),
      ' 的脸上不禁染上泛上羞红，双手划过微疼的小腹，钻进了睡衣内部。',
    ]);
    if (you.sex_code === 1) {
      await coffee.say_and_wait('训练员、先生……');
    } else {
      await coffee.say_and_wait('训练员、小姐……');
    }
    if (coffee.sex_code === 0) {
      await coffee.print_and_wait(
        '嘴里念叨着梦中人，中指与食指则不停地在阴蒂上画着圈，已然兴奋的乳头被幻想中的大手轻轻揉搓，变得红肿。',
      );
      await coffee.print_and_wait([
        '伴随着厚重的喘息声，',
        coffee.get_colored_name(),
        ' 达到了高潮。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async '74-1'(coffee, you, callname) {
    await coffee.print_and_wait([
      '在某日的午后，',
      coffee.get_colored_name(),
      ' 因为训练疲劳而倒下了，被送回了宿舍中休息。',
    ]);
    await coffee.print_and_wait([
      '面对空无一人的宿舍，',
      coffee.get_colored_name(),
      ' 突然感到了一丝孤独。',
    ]);
    await coffee.say_and_wait(['要是 ', callname, '，现在能陪在我身边的话……']);
    await coffee.print_and_wait([
      '不知是因为倒下后变得虚弱的缘故，亦或是此刻独处的状况，比平时更坦率的想法从 ',
      coffee.get_colored_name(),
      ' 嘴里说了出来，飘荡在无人的宿舍内。',
    ]);
    await coffee.print_and_wait('从什么时候开始，变得如此害怕孤身一人了呢……');
    await coffee.print_and_wait([
      '难以言说的感觉，但 ',
      coffee.get_colored_name(),
      ' 隐约察觉到了自己与 ',
      you.get_colored_actual_name(),
      ' 的关系有点超乎寻常。',
    ]);
    era.println();
    era.printButton(`「好想见到你，${callname}……」（升级关系）`, 1);
    era.printButton('「只是错觉罢了……」（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await coffee.print_and_wait([
        '闭上眼睛，渴求睡眠能够消除此刻的迷茫与孤寂，但 ',
        you.get_colored_actual_name(),
        ' 的面庞又如鬼魅般攀上了眼前的黑暗。',
      ]);
      await coffee.print_and_wait([
        '无法入睡，无法平静。仔细想来，自从与 ',
        you.get_colored_actual_name(),
        ' 相识以来，自己的心神便无时无刻不被其所占据。',
      ]);
      await coffee.say_and_wait(['我喜欢上，', callname, ' 了吗……']);
      await coffee.print_and_wait([
        '伴随话语落下，就如念头通达般，一股来自心间的暖意顿时充斥了 ',
        coffee.get_colored_name(),
        ' 全身。',
      ]);
      await coffee.print_and_wait([
        '与',
        you.sex,
        '相识以来，',
        you.sex,
        '诉说的一言一语、相伴的一时一刻，此刻都有了新的意义。',
      ]);
      if (era.get('cflag:25:育成回合计时') < 96) {
        await coffee.print_and_wait(
          '尽管还只是独自一人的诉说，这份已然明了的爱恋总有一天会开花结果。',
        );
        await coffee.print_and_wait('总有一天……');
        await era.printAndWait([
          '（',
          coffee.get_colored_name(),
          ' 大概会在进入资深级后再考虑这份感情吧……）',
        ]);
      } else {
        await coffee.print_and_wait('花开了……');
      }
    } else {
      await coffee.print_and_wait('只不过，是自己虚弱时的胡思乱想……');
      await coffee.print_and_wait([
        '强迫自己停止思考，',
        coffee.get_colored_name(),
        ' 慢慢潜入了梦的世界。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async '74-2'(coffee, you, callname) {
    await coffee.say_and_wait([callname, '，今晚有空吗……？']);
    await era.printAndWait([
      '某日，',
      coffee.get_colored_name(),
      ' 难得地主动向 ',
      you.get_colored_name(),
      ' 做出邀请。',
    ]);
    era.println();
    era.printButton('「嗯，有空，想做些什么吗。」（升级关系）', 1);
    era.printButton('「抱歉，今晚的话稍微有点……」（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '得到了肯定的回复后，',
        coffee.get_colored_name(),
        ' 犹豫了片刻。',
      ]);
      await coffee.say_and_wait(['有个地方……想让 ', callname, ' 一起来看看……']);
      era.drawLine();
      await era.printAndWait([
        '像个迷路的孩子似的被不知为何兴致勃勃的 ',
        coffee.get_colored_name(),
        ' 一路牵着走，在不知穿过了几条小巷、街道后，映入眼帘的是一家不起眼的小店。',
      ]);
      await era.printAndWait(
        '透过泛黄的玻璃橱窗，可以看到陈列着复古的餐具和各种各样的器具。',
      );
      era.printButton('「连倒咖啡的器具也有……这里是旧物店啊。」', 1);
      await era.input();
      await coffee.say_and_wait('嗯……是我偶然发现的，很有意思的地方……');
      await era.printAndWait([
        '跟随 ',
        coffee.get_colored_name(),
        ' 走进店内，这似乎是一个无人看守自助贩卖的小店，店内还算干净整洁，可以看出有人定期来打扫的痕迹。',
      ]);
      await coffee.say_and_wait('这里通常很少人光顾……我偶尔会来看看。');
      await era.printAndWait([
        '确实是会很对 ',
        coffee.get_colored_name(),
        ' 胃口的地方，设计新奇的咖啡杯、洛可可风格的咖啡壶，',
        you.get_colored_name(),
        ' 仿佛可以想象在无人的午后，这个黑色长发的 ',
        coffee.teen_sex_title,
        ' 一人漫步在货架之间，时而轻轻捧起仔细欣赏，时而微微弯腰停步驻目，阳光透过玻璃洒满整个小店，将一切涂上梦幻般的金黄。',
      ]);
      await coffee.say_and_wait([
        '……但像和 ',
        callname,
        ' 这样两人一起来，还是第一次……',
      ]);
      await era.printAndWait([
        '不知何时，',
        coffee.get_colored_name(),
        ' 已经来到了 ',
        you.get_colored_name(),
        ' 跟前，带着红晕的精致面庞几乎占据了大半个视野。',
      ]);
      await coffee.say_and_wait(['……', callname, '，我——']);
      await you.say_as_passer_by_and_wait('粉丝A', [
        '啊，真的是 ',
        coffee.get_colored_name(),
        '！快进来！',
      ]);
      await you.say_as_passer_by_and_wait(
        '粉丝B',
        '哇，离得好近！是在约会吗？',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的话语被突兀的声音打断，回头看去，两个认出了 ',
        coffee.get_colored_name(),
        ' 的粉丝进入了小店，他们的声音吸引了街上的行人，根据这个趋势，似乎会有更多人因此进来……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 也愣住了，面朝店门呆呆地站在原地。',
      ]);
      await you.say_as_passer_by_and_wait('粉丝A', '脸好红啊！');
      await you.say_as_passer_by_and_wait('粉丝B', [
        '是恋爱中',
        coffee.teen_sex_title,
        '的脸吗！',
      ]);
      era.printButton('「两位！现在是私人时间，请——」', 1);
      await era.input();
      await era.printAndWait([
        '没能等 ',
        you.get_colored_name(),
        ' 说完，',
        coffee.get_colored_name(),
        ' 突然猛地拉起了 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      era.printButton('「啊？！怎，怎么了茶座？」', 1);
      await era.input();
      await coffee.say_and_wait('……');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 没有回答 ',
        you.get_colored_name(),
        ' 的问题，无视了店里店外争相想和',
        coffee.sex,
        '搭话的粉丝，硬生生地拉着 ',
        you.get_colored_name(),
        ' 挤了出去。',
      ]);
      await era.printAndWait([
        '然后，',
        you.get_colored_name(),
        ' 就又像个迷路的孩子似的被 ',
        coffee.get_colored_name(),
        ' 拉着跑走了。',
      ]);
      era.drawLine();
      await era.printAndWait('最后到达的，是商店街一角的小巷。');
      await era.printAndWait(
        '商店街大部分的店都只在白天才营业，因此除了远处的几个居酒屋外，这里几乎没有人。',
      );
      era.printButton('「怎么了，茶座……」', 1);
      await era.input();
      await era.printAndWait([
        '从被拉着一路小跑的喘息中缓过来，身边的 ',
        coffee.get_colored_name(),
        ' 已经低头不语一段时间了。',
      ]);
      await coffee.say_and_wait('……都是你的错……');
      await era.printAndWait('片刻后，传来了略带颤抖的声音。');
      await coffee.say_and_wait('我明明很不起眼……谁都不会在意我的存在……');
      await coffee.say_and_wait('但我和你相遇了。');
      await coffee.say_and_wait('不知何时起，我的心就被你所吸引。');
      await coffee.say_and_wait('我的存在，就这样被你的存在所填满，变得臃肿。');
      era.println();
      await coffee.say_and_wait('我，原本一个人就能过得很好。');
      await coffee.say_and_wait('因为有朋友在。');
      era.println();
      await coffee.say_and_wait('然后，你来到了我的身边。');
      await coffee.say_and_wait('原本能够忍受的孤独，渐渐却变成了钻心的毒药。');
      era.println();
      await coffee.say_and_wait(
        '最后，就连鼓起勇气来，想与你两个人独处的空间……都被夺走了……',
      );
      await coffee.say_and_wait('我……到底该怎么办……');
      await era.printAndWait(
        '从察觉到爱意的那天起，一直埋藏在内心的思绪，在此刻宣泄而出。',
      );
      await era.printAndWait([
        '不仅仅是对 ',
        you.get_colored_actual_name(),
        ' 的恋慕，更是对自己从未感受过的、被周遭事物所侵占的愠怒与迷茫。',
      ]);
      await era.printAndWait('无助的泪从眼角一滴一滴滑下。');
      await era.printAndWait([
        '看着这样的 ',
        coffee.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 走上前去。',
      ]);
      era.printButton('「茶座。」', 1);
      await era.input();
      await coffee.say_and_wait('……嗯？');
      await era.printAndWait([
        '带着泛红的眼角，',
        coffee.get_colored_name(),
        ' 抬起头来看向 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton('「现在这里，只有我和茶座两个人……不会再逃跑了吧？」', 1);
      await era.input();
      await era.printAndWait([
        '被这么一说后，',
        coffee.get_colored_name(),
        ' 不自觉地往四处看了看，又很快意识到自己行为的不恰当而将视线重新集中，向 ',
        you.get_colored_name(),
        ' 点了点头。',
      ]);
      era.printButton(
        '「原来茶座你一直是这样想的吗……没能察觉到你的想法，确实是我的错。」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('啊……啊……！？');
      await era.printAndWait([
        '似乎此时才终于意识到自己刚才顺势说了些什么。在内心的小秘密被自己揭开后，',
        coffee.get_colored_name(),
        ' 只能用着「恋爱中',
        coffee.teen_sex_title,
        '的脸」，抬头仰望着 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}，我能问你几个问题吗。」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait('……好的。');
      era.printButton('「请问，和我在一起开心吗？」', 1);
      await era.input();
      await coffee.say_and_wait('……嗯。');
      era.printButton('「那么，和我在一起幸福吗？」', 1);
      await era.input();
      await coffee.say_and_wait('……幸福。');
      await era.printAndWait([
        '到了最后，像是做好了觉悟般，',
        you.get_colored_name(),
        ' 深吸了一口气。',
      ]);
      era.println();
      era.printButton(
        '「……我，可能会有点自以为是了，从一开始就依靠着你的帮助」',
        1,
      );
      era.printButton('「后来也在各种各样的事件中，也……」', 2);
      era.printButton('「但，能请你和这样的我交往吗？」', 3);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的表情，像是在仍未从梦中醒来，但从中微微流露出的色彩已经能够得到答案——',
      ]);
      await era.printAndWait('突然。');
      era.printButton('「哇？！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 的膝盖，受到了某种冲击而跪下。',
      ]);
      await coffee.say_and_wait('呀？！');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的背部，也受到了某种冲击而向前倾去。',
      ]);
      await era.printAndWait('就这样，两人的影子交错在一起。');
      await era.printAndWait([
        you.get_colored_name(),
        '&',
        coffee.get_colored_name(),
        '「……嗯……！？」',
      ]);
      await era.printAndWait('互相之间，嘴唇重叠。');
      await era.printAndWait([
        '过了十几秒后，',
        coffee.get_colored_name(),
        ' 的脸才从吓得僵住了的 ',
        you.get_colored_name(),
        ' 身上移开。',
      ]);
      await coffee.say_and_wait([
        '……朋友的恶作剧，真是……不过这也是我的答复，',
        callname,
        '……',
      ]);
      await era.printAndWait([
        '将 ',
        you.get_colored_name(),
        ' 嘴唇上垂下的丝线，用灼热的指尖拭去。',
      ]);
      await coffee.say_and_wait('有点自以为是……这样的话也说得出来啊……');
      await era.printAndWait([
        '轻声抱怨着，',
        coffee.get_colored_name(),
        ' 把身体靠在你的胸前。',
      ]);
      await coffee.say_and_wait('没错，你啊。');
      await coffee.say_and_wait('把我，一个人就能满足的我。');
      await coffee.say_and_wait('变得如此疯狂。');
      era.println();
      await coffee.say_and_wait('现在……就算说要逃跑……我也是不会允许的……');
      await era.printAndWait([
        '说着，',
        coffee.get_colored_name(),
        ' 用力地握紧 ',
        you.get_colored_name(),
        ' 的衣服。',
      ]);
      era.printButton('「……我不会逃的。」', 1);
      await era.input();
      await era.printAndWait(['与', coffee.sex, '相遇后，就没有了退路可言。']);
      await coffee.say_and_wait('那么……以后请多指教了。');
      await era.printAndWait('无人的小巷。');
      await era.printAndWait('现在，谁都不能进入，是只属于两人的空间。');
      await coffee.say_and_wait('……为了不被谁取走……要不要做个标记……？');
      era.printButton('「想做什么标记？」', 1);
      await era.input();
      await coffee.say_and_wait('……就像，这样……');
      await era.printAndWait('这一次不再是谁的恶作剧，而是两人自己的意志。');
      await era.printAndWait('双手绕在颈后，将脸缓缓靠近。');
      await coffee.say_and_wait('……不会再让任何人夺去了……');
      await era.printAndWait('如同咀嚼般，甘甜地亲吻着。');
      await era.printAndWait('再次沉浸在数十秒的，那愉悦的时光中。');
    } else {
      await era.printAndWait([
        '看着有些失落的 ',
        coffee.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 也只好与',
        coffee.sex,
        '做出了「下次一定」的约定。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async 89(coffee, you, callname) {
    await era.printAndWait([
      '某日，',
      you.get_colored_name(),
      ' 和 ',
      coffee.get_colored_name(),
      ' 如同往常一样在训练员室进行着每日的例常。',
    ]);
    await era.printAndWait([
      '突然鼻尖传来一股咖啡的香气，',
      coffee.get_colored_name(),
      ' 不知不觉间来到了身旁，坐在了腿上。',
    ]);
    era.printButton('「怎么了？」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 像是在酝酿着什么，没有回话，把头埋进了 ',
      you.get_colored_name(),
      ' 胸前蹭了蹭，白色的呆毛挠得脖子痒痒的。',
    ]);
    await era.printAndWait([
      '就这样过了一段时间，',
      coffee.get_colored_name(),
      ' 似乎是被什么东西戳了一下差点在 ',
      you.get_colored_name(),
      ' 怀里跳起来后，才抬起头，径直看着 ',
      you.get_colored_name(),
      '。',
    ]);
    await coffee.say_and_wait([
      callname,
      '，不，',
      you.get_colored_actual_name(),
      '……能和我结婚吗？',
    ]);
    era.printButton('「不行。」（升级关系）', 1);
    era.printButton('「对我们来说……有点太早了。」（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 直接了断的拒绝让怀中的 ',
        coffee.get_colored_name(),
        ' 愣了愣。',
      ]);
      await era.printAndWait([
        '没有在意 ',
        coffee.get_colored_name(),
        ' 的反应，',
        you.get_colored_name(),
        ' 快速地拉开了手边的抽屉，从中取出了早已准备多时的东西。',
      ]);
      era.printButton('「应该由我向你求婚才对。」', 1);
      await era.input();
      await era.printAndWait([
        '将手中的小盒子打开，展示给 ',
        coffee.get_colored_name(),
        ' 看。',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}，你愿意嫁给我吗？」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '戒指在灯光下闪闪发亮，',
        you.get_colored_name(),
        ' 期待着 ',
        coffee.get_colored_name(),
        ' 的回复。',
      ]);
      await coffee.say_and_wait('……真是个坏心眼的人。');
      await era.printAndWait([
        '「嘭」的一声，',
        coffee.get_colored_name(),
        ' 将 ',
        you.get_colored_name(),
        ' 连人带椅子推翻在地板上。',
      ]);
      await era.printAndWait([
        '没能等 ',
        you.get_colored_name(),
        ' 反应过来，',
        coffee.get_colored_name(),
        ' 便靠了过来，稍微有些用力地咬上 ',
        you.get_colored_name(),
        ' 的嘴唇。',
      ]);
      await era.printAndWait(
        '渗出的血与两人的唾液混合在一起，口腔内泛起了微甜的铁锈味。',
      );
      await coffee.say_and_wait(
        '……什么『由你向我求婚才对』啊……觉得自己很帅气吗？',
      );
      await era.printAndWait([
        '腥甜的吻结束后，',
        coffee.get_colored_name(),
        ' 不停歇地卷起了 ',
        you.get_colored_name(),
        ' 的袖子，在手臂上留下自己的咬痕。',
      ]);
      await era.printAndWait([
        '之后，脖子、锁骨也被 ',
        coffee.get_colored_name(),
        ' 不断地吮吸，留下了许多红色的印痕。',
      ]);
      await era.printAndWait([
        '被 ',
        coffee.get_colored_name(),
        ' 压在身下的 ',
        you.get_colored_name(),
        ' 沉默着，闭着眼睛任由 ',
        coffee.get_colored_name(),
        ' 发泄。',
      ]);
      await coffee.say_and_wait(
        '你是我的东西……你的立场……往后的日子里我会好好教育你的……',
      );
      era.printButton('「……我很期待。」', 1);
      await era.input();
      await era.printAndWait(
        '一旁没能派上用场的戒指倒映着两人的身影，记录着这特别的誓约。',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' 拒绝了 ',
        coffee.get_colored_name(),
        '，又马上小心翼翼的观察',
        coffee.sex,
        '的神色，生怕',
        coffee.sex,
        '的表情因为 ',
        you.get_colored_name(),
        ' 的拒绝而染上阴霾。',
      ]);
      await era.printAndWait([
        '但出乎 ',
        you.get_colored_name(),
        ' 意料的是，',
        coffee.get_colored_name(),
        ' 脸上并没有流露出什么失望或低落。',
      ]);
      await coffee.say_and_wait([
        '我，相信 ',
        you.get_colored_actual_name(),
        '……我会等到做好准备那一天的。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async 99(coffee, callname) {
    await coffee.say_and_wait('那个人，是……');
    await coffee.print_and_wait([
      '某日，在训练结束后，',
      coffee.get_colored_name(),
      ' 回到了训练员室打算取回遗漏的东西。',
    ]);
    await coffee.print_and_wait([
      '正准备敲门时，却传来了陌生',
      coffee.phy_sex_title,
      '的声音。',
    ]);
    await coffee.print_and_wait([
      '将耳朵轻轻贴在门前，',
      coffee.uma_sex_title,
      '强大的听力能将这种普通的门视作无物。',
    ]);
    await coffee.say_and_wait([
      '不认识的',
      coffee.phy_sex_title,
      '，正坐在 ',
      callname,
      ' 旁边，放松地聊着天……',
    ]);
    await coffee.print_and_wait('——自己的东西，要被夺走了。');
    await coffee.print_and_wait(
      '忍住了想要进去质问的冲动，深呼吸，然后继续仔细听，全然不顾若是有人路过该如何看待自己这幅奇怪的模样。',
    );
    era.drawLine();
    await coffee.say_and_wait([
      '结果只是 ',
      callname,
      ' 的后辈啊……而且还是我的粉丝……',
    ]);
    await coffee.print_and_wait([
      '像跟踪狂一样在门外偷听了15分钟后，',
      coffee.get_colored_name(),
      ' 终于松了一口气，又马上对自己的过度反应感到一丝尴尬。',
    ]);
    await coffee.print_and_wait('正准备转身离去时，突然被敲了敲脑袋。');
    await coffee.say_and_wait('……什么叫感情太沉重了啊，别老是突然敲我……');
    await coffee.print_and_wait([
      '——但只要一想到 ',
      callname,
      ' 也许有一天会离我而去……',
    ]);
    await coffee.print_and_wait('心脏仿佛被紧紧握住，胸口隐隐作痛。');
    await coffee.print_and_wait('只是想想就变成这样……');
    await coffee.say_and_wait([
      '该不会真是个',
      coffee.sex_code === 1 ? '重男' : '重女',
      '吧，我……',
    ]);
  },
};
