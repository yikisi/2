/**
 * @file 高尚骏逸 - 地下室
 *
 * @author 無奈
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const ask_release_agree = require('#/event/basement/base-events-89/ask-release-agree');
const flatter = require('#/event/basement/base-events-89/flatter');
const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

module.exports = class extends CustomizedBase {
  flatter = flatter;

  async battle_fail() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0),
      life_marks = new GrandLifeMarks();
    if (++life_marks.b_battle >= 10 && !life_marks.b_battle_fail) {
      life_marks.b_battle_fail = 1;
    }
    if (life_marks.b_battle <= 3) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 用铁丝划开自己的袖口，从衬衣的夹层中取出了满满一包药粉。',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 把手伸进莫名多出一个大洞的袖口，从衬衣的夹层中取出了一小包药粉。',
      ]);
    }
    await era.printAndWait([
      '在训练员会议上发放的「对',
      grand.get_uma_sex_title(),
      '用安眠药」样品，没想到真的有用到的一天。',
    ]);
    await era.printAndWait([
      '讲师说这个药还能让',
      grand.get_uma_sex_title(),
      '失去施暴时的记忆，便于回到正常的搭档关系。',
    ]);
    await era.printAndWait([
      '一边感叹着「真是个伟大的发明」，一边确认 ',
      grand.get_colored_name(),
      ' 寻找餐具的背影，',
      me.get_colored_name(),
      ' 偷偷将药粉混入料理之中。',
    ]);
    era.println();

    if (Math.random() < 0.1) {
      await me.say_and_wait(['啊……啊嚏！！']);
      era.println();

      await era.printAndWait([
        '然而就在 ',
        me.get_colored_name(),
        ' 拿出药粉的同时，一根 ',
        grand.get_colored_name(),
        ' 的毛发飘过你的鼻尖。',
      ]);
      await era.printAndWait([
        '刚刚吸鼻涕的时候不小心吸进去了一点……但还好这是「对',
        grand.get_uma_sex_title(),
        '用……」',
      ]);
    } else if (era.get('relation:89:0') >= 100) {
      await grand.say_and_wait(['那个……我、我来喂 ', callname, ' 吧。']);
      await grand.say_and_wait(['啊——啊～']);
      era.println();

      await era.printAndWait([
        '将食物递到 ',
        me.get_colored_name(),
        ' 嘴边的 ',
        grand.get_colored_name(),
        '，虽然是意料之外的事态，但无伤大雅。',
      ]);
      await era.printAndWait([
        '一想到这是「对',
        grand.get_uma_sex_title(),
        '用」的特效药，',
        me.get_colored_name(),
        ' 没有拒绝，而是顺从地张开了嘴巴。',
      ]);
    } else {
      await grand.say_and_wait(['我、我开动了……']);
      await me.say_and_wait(['我开动了。']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        ' 一边构思着让 ',
        grand.get_colored_name(),
        ' 失去行动能力后的计划，一边将一勺料理送入口中。',
      ]);
    }
    era.println();

    await me.say_and_wait(['……？']);
    await grand.say_and_wait(['诶……？', callname, '……？']);
    era.println();

    await era.printAndWait(['被吸入般的睡意席卷而来，思绪一步坠入深海。']);
    await era.printAndWait([
      '难道「对',
      grand.get_uma_sex_title(),
      '用」指的是「药效强到对',
      grand.get_uma_sex_title(),
      '也能生效」吗……？',
    ]);
    await era.printAndWait([
      '在内心问候着发明这种药品的人，',
      me.get_colored_name(),
      ' 瘫软的倒在 ',
      grand.get_colored_name(),
      ' 的怀中，无法抵抗地沉入了梦乡。',
    ]);
  }

  async battle_escape() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      '抱起',
      grand.get_child_sex_title(),
      '的身体放在床上，',
      me.get_colored_name(),
      ' 看着 ',
      grand.get_colored_name(),
      ' 天使般的睡脸，叹了口气。',
    ]);
    await era.printAndWait([
      '曾经的',
      grand.sex,
      '总是带着天使般的笑容，而改变这一切的人正是 ',
      me.get_colored_name(),
      ' 自己。',
    ]);
    await era.printAndWait([
      '厚重的铁门已经被推开，',
      grand.get_teen_sex_title(),
      '的一切努力即将付之一炬。',
    ]);
    era.println();

    await me.say_and_wait(['抱歉，', sys_get_colored_callname(0, 89), '。']);
    era.println();

    await era.printAndWait([
      '向 ',
      grand.get_colored_name(),
      ' 道歉后，',
      me.get_colored_name(),
      ' 转身准备离开，却被扯住了袖口。',
    ]);
    await era.printAndWait([
      '从被抓住的袖子那里，能感受到',
      grand.get_child_sex_title(),
      '的小手正不安地颤抖着。',
    ]);
    era.println();

    await grand.say_and_wait(['不要走……', callname, '……']);
    era.println();

    await era.printAndWait([
      '本应熟睡的小',
      grand.get_uma_sex_title(),
      '在梦中喊出了 ',
      me.get_colored_name(),
      ' 的名字。',
    ]);
    await era.printAndWait([grand.sex, '在做一个什么样的梦呢？']);
    await era.printAndWait([
      '梦里的 ',
      me.get_colored_name(),
      '，同样也会选择弃',
      grand.sex,
      '而去吗？',
    ]);
    era.println();

    await me.say_and_wait(['……']);
    era.println();

    await era.printAndWait(['没有时间在此停留了。']);
    await era.printAndWait([
      '如果再被 ',
      grand.get_colored_name(),
      ' 哭着挽留，',
      me.get_colored_name(),
      ' 不知道自己会做出什么样的决定。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 轻轻为熟睡的 ',
      grand.get_colored_name(),
      ' 盖好被子，转身离开了地下室。',
    ]);
  }

  async battle_prison() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      '看着在床上安睡的 ',
      grand.get_colored_name(),
      '，',
      me.get_colored_name(),
      ' 暗自庆幸准备了对',
      grand.get_uma_sex_title(),
      '用的安眠药。',
    ]);
    await era.printAndWait([
      '尽管称之为安眠药，但持续时间其实很短，效果在五分钟左右就会消失。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 连忙凑近锁孔，然而直到手中的铁丝弯曲到极限，铁门依旧不为所动。',
    ]);
    era.println();

    await me.say_and_wait(['啧，这该怎——']);
    era.println();

    await era.printAndWait(['无端地，后颈传来巨大的冲击。']);
    await era.printAndWait([
      '整个人直直摔向地面，却像是趴上羽绒被一般，意识朦胧地远去。',
    ]);
    era.println();

    await grand.say_and_wait(['……', callname, '，对不起……']);
    await grand.say_and_wait([
      '我也不喜欢这样，我也想做个好孩子，让喜欢上我。',
    ]);
    await grand.say_and_wait([
      '看到你痛苦的表情……我也会很难过，就像现在这样。',
    ]);
    era.println();

    await era.printAndWait([
      '一片模糊中，',
      me.get_colored_name(),
      ' 对上了帽沿下那双满是罪恶感的眼睛。',
    ]);
    era.println();

    await grand.say_and_wait([
      '我知道，',
      callname,
      ' 一定有很多事情需要负起责任，所以才想离开这里……',
    ]);
    await grand.say_and_wait([
      '所以说，让我来帮你暂时忘掉那些让你痛苦的事情吧——',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 的意识不断下沉，而 ',
      grand.get_colored_name(),
      ' 的声音越来越远……越来越近。',
    ]);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    new GrandLifeMarks().b_find_escape = 1;
    if (is_back && out_of_prison) {
      era.print(['在一次不经意的尝试中，铁丝似乎触动了锁内的某个部分。']);
      era.print([
        me.get_colored_name(),
        ' 握紧铁丝，用力一转，只感觉锁体内部传来了一阵顺畅的转动感。',
      ]);
      era.print([
        me.get_colored_name(),
        ' 在心中欢呼着推开铁门，来到了一条狭窄的通道，只要穿过这——',
      ]);
      era.println();

      grand.say(['……', me.get_colored_name(), ' 要去哪里？']);
      era.println();

      era.print(['肌肤发泡般的恶寒传遍全身，从脖子到后背都被冷汗打湿。']);
      era.print([
        '从通道另一端传来的声音微弱的几乎听不到，但其中的意思却强烈地传递过来。',
      ]);
      era.print([
        '步步逼近的',
        grand.get_uma_sex_title(),
        '并非在问 ',
        me.get_colored_name(),
        '，只是在了解一切的基础上进行『确认』而已。',
      ]);
      era.println();

      me.say(['这、这也是为了 ', sys_get_colored_callname(0, 89), '……']);
      era.println();

      if (era.get('exp:89:监禁次数') === 1) {
        grand.say(['如果你是真心为了我好……就不要用这句话来回答我啊。']);
        era.println();

        era.print([
          '被逼退回门内的 ',
          me.get_colored_name(),
          '，近在咫尺的爱马，一股不好的预感在心中弥漫开来。',
        ]);
        era.println();

        grand.say(['对我来说，', callname, ' 才是最重要的，是我的一切。']);
      } else {
        grand.say([callname, '……你打算用这种话来糊弄我吗……']);
        era.println();

        era.print([
          '被逼退回门内的 ',
          me.get_colored_name(),
          '，近在咫尺的爱马，一股不好的预感在心中弥漫开来。',
        ]);
        era.println();

        grand.say([
          '我……虽然不像 ',
          sys_get_colored_callname(89, 91),
          ' 那样聪明，但也不是会被轻易欺骗的傻瓜。',
        ]);
      }
      era.println();

      era.print(['咔哒——锁芯转动的冰冷声音在寂静的房间里回荡。']);
      era.print([
        '在这个不会再与外界产生任何接触的地方，',
        me.get_colored_name(),
        ' 认命般闭上了眼睛。',
      ]);
    } else {
      era.print(['咔嚓，咔嚓——']);
      era.println();

      me.say(['啧……']);
      era.println();

      era.print(['好不容易找到的一根铁丝断在了锁芯里。']);
      era.print([
        '无次数尝试中 ',
        me.get_colored_name(),
        ' 早已尝惯失败，但留下的碎片毫无疑问将成为试图逃离的证据。',
      ]);
      era.println();

      me.say(['这个……拔不出来啊……！']);
      era.println();

      era.print(['是什么时候开始出错了呢？']);
      era.print(['到底为什么会走到这一步呢？']);
      era.print([
        '脑海中，小',
        grand.get_uma_sex_title(),
        '那天使般的笑容如幻影般浮现。',
      ]);
      era.print(['如果可以的话，真想回到刚刚相遇的那一天……']);
      era.println();

      grand.say(['……', callname, '？']);
      era.println();

      era.print([
        '微弱又毫无起伏的声音定住了 ',
        me.get_colored_name(),
        ' 的动作，宣告一时兴起的越狱游戏到此结束。',
      ]);
      era.println();

      grand.say(['没关系的，', callname, '……']);
      era.println();

      era.print([
        me.get_colored_name(),
        ' 甚至不敢回头确认',
        grand.get_child_sex_title(),
        '的神情，只是任凭自己被拖回床笫之上。',
      ]);
      era.println();

      grand.say([
        '都是我的错……一定是因为我的爱还不够，才会让你产生离开的想法。',
      ]);
      grand.say(['所以说，必须让 ', callname, ' 更多的感受到我的心意才可以……']);
    }
  }

  ask_release_agree = ask_release_agree;

  async ask_release_reject() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0);
    if (era.get('exp:89:监禁次数') === 1) {
      if (++new GrandLifeMarks().b_ask_release <= 3) {
        await grand.say_and_wait(['不行——']);
        era.println();

        await era.printAndWait(['离开的请求换来的是欲言又止的拒绝。']);
        await era.printAndWait([
          '拒绝过后，',
          grand.get_teen_sex_title(),
          '立刻露出了满是罪恶感的表情。',
        ]);
        era.println();

        await grand.say_and_wait(['再给我一点时间……好吗……', callname, '……']);
        await grand.say_and_wait(['给我一个……让你重新喜欢上我的机会……']);
        era.println();

        await era.printAndWait([
          grand.get_colored_name(),
          ' 说着抱住了 ',
          me.get_colored_name(),
          '，将脸埋在 ',
          me.get_colored_name(),
          ' 的胸口。',
        ]);
        await era.printAndWait(['比起撒娇，力量更多传达着束缚的意味。']);
        await era.printAndWait([
          '不知道该作何反应的 ',
          me.get_colored_name(),
          '，静静地等待着小',
          grand.get_uma_sex_title(),
          '心满意足的那一刻。',
        ]);
      } else {
        await grand.say_and_wait(['不行——']);
        era.println();

        await era.printAndWait(['离开的请求换来的是斩钉截铁的拒绝。']);
        await era.printAndWait([
          '但拒绝过后，',
          grand.get_teen_sex_title(),
          '立刻露出了满是罪恶感的表情。',
        ]);
        era.println();

        await grand.say_and_wait(['我知道，都是我的错……']);
        await grand.say_and_wait([
          '但是，如果放你离开的话，我可能就再也见不到 ',
          callname,
          ' 了！',
        ]);
        era.println();

        await era.printAndWait([
          grand.get_colored_name(),
          ' 说着抱住了 ',
          me.get_colored_name(),
          '，将脸埋在 ',
          me.get_colored_name(),
          ' 的胸口。',
        ]);
        await era.printAndWait(['比起撒娇，力量更多传达着束缚的意味。']);
        era.println();

        await grand.say_and_wait([
          '那样不行……如果连远远看着你都不被允许的话，我不知道自己会变成什么样子……',
        ]);
        await grand.say_and_wait(['所以说……求你了，', callname, '……']);
        era.println();

        await era.printAndWait([
          '被 ',
          grand.get_colored_name(),
          ' 哭着挽留，但 ',
          me.get_colored_name(),
          ' 知道事情从来就没有过商量的余地。',
        ]);
        await era.printAndWait([
          '于是 ',
          me.get_colored_name(),
          ' 也回抱着',
          grand.sex,
          '，直到',
          grand.sex,
          '恢复冷静。',
        ]);
      }
    } else {
      await grand.say_and_wait(['不行。']);
      era.println();

      await era.printAndWait(['离开的请求换来了斩钉截铁的拒绝。']);
      await era.printAndWait([
        '看到',
        grand.get_teen_sex_title(),
        '不容争辩的表情，',
        me.get_colored_name(),
        ' 知道能做的事情已经非常有限了。',
      ]);
      era.println();

      await grand.say_and_wait(['我知道，', callname, ' 是个很聪明的人……']);
      await grand.say_and_wait([
        '如果离开这里……就一定不会再出现在我的视线之中了。',
      ]);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 说着抱住了 ',
        me.get_colored_name(),
        '，将脸埋在 ',
        me.get_colored_name(),
        ' 的胸口。',
      ]);
      await era.printAndWait(['比起撒娇，力量更多传达着束缚的意味。']);
      era.println();

      await grand.say_and_wait(['这一次，不会再让你离开我的视线了。']);
      await grand.say_and_wait([
        '……为了独占你，我也不知道自己会做出什么事情。',
      ]);
    }
  }

  handle_escape() {
    const life_marks = new GrandLifeMarks();
    life_marks.b_find_escape =
      life_marks.b_flatter =
      life_marks.b_ask_release =
      life_marks.b_battle =
      life_marks.b_strike =
      life_marks.b_battle_fail =
        0;
  }

  async strike_fail() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    new GrandLifeMarks().b_strike = 1;
    await grand.say_and_wait(['嘿咻…嘿咻……']);
    era.println();

    await era.printAndWait([
      '紧盯毫无防备地整理着房间的 ',
      grand.get_colored_name(),
      ' 的背影，',
      me.get_colored_name(),
      ' 万分紧张，瞄了一眼布下的陷阱。',
    ]);
    await era.printAndWait([
      '如果有人在餐桌边的椅子坐下，椅子散架的同时，其身后的衣柜将会倒下。',
    ]);
    await era.printAndWait([
      '这样一来，想必就算是',
      grand.get_uma_sex_title(),
      '也会暂时失去行动能力吧。',
    ]);
    era.println();

    await grand.say_and_wait([
      '像这样为 ',
      callname,
      ' 铺床，总觉得我们…像那个…家、家人一样呢…诶嘿嘿。',
    ]);
    era.println();

    await era.printAndWait(['只需要往前一点——']);
    era.println();

    await grand.say_and_wait([
      '我经常会一个人想象…想象我和 ',
      callname,
      ' 未来成为家人的样子。',
    ]);
    era.println();

    await era.printAndWait(['在那把凳子上坐下——']);
    era.println();

    await grand.say_and_wait([
      '不过从我监禁 ',
      callname,
      ' 的那一刻起，想象就不可能成为现实了吧…',
    ]);
    await grand.say_and_wait(['那个， ', callname, ' …我准备了料理——']);
    await me.say_and_wait(['——小心！！']);
    await grand.say_and_wait(['——啊！', callname, ' ！']);
    era.println();

    await era.printAndWait([
      '骨节的脆响与',
      grand.get_teen_sex_title(),
      '的呼喊声组成了尖锐的合鸣。',
    ]);
    await era.printAndWait([
      '推开了 ',
      grand.get_colored_name(),
      '，代替',
      grand.sex,
      '被砸在衣柜下面的 ',
      me.get_colored_name(),
      '，渐渐沉入了自己的意识深处。',
    ]);
  }

  async strike_success() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    await grand.say_and_wait([callname, '，我回…']);
    await grand.say_and_wait(['诶——唔唔！']);
    era.println();

    await era.printAndWait([
      '打开门后却没有看到 ',
      me.get_colored_name(),
      '，',
      grand.get_colored_name(),
      ' 一时愣在了原地。',
    ]);
    await era.printAndWait([
      '而躲在门后的 ',
      me.get_colored_name(),
      ' 看准时机，用被安眠药粉浸湿的布片捂住了 ',
      grand.get_colored_name(),
      ' 的口鼻。',
    ]);
    await era.printAndWait([
      '怀中的',
      grand.get_child_sex_title(),
      '没挣扎几下，很快就安静了下来。',
    ]);
    era.println();

    await me.say_and_wait(['唉……']);
    era.println();

    await era.printAndWait([
      '计划得逞的 ',
      me.get_colored_name(),
      ' 看了一眼自己撕下大半的衣袖，调整呼吸，叹了口气。',
    ]);
    await era.printAndWait([
      '虽然风险很大，但这的确是唯一一个不会对',
      grand.get_child_sex_title(),
      '的身体不会造成伤害的办法。',
    ]);

    await me.say_and_wait(['好好休息一下吧。']);
    era.println();

    await era.printAndWait([
      '留意到怀中的',
      grand.get_child_sex_title(),
      '脸上用淡妆遮掩的黑眼圈，是时候将',
      grand.sex,
      '从罪恶感中解放出来了。',
    ]);
    await era.printAndWait([
      '将 ',
      grand.get_colored_name(),
      ' 瘫软的身体安置在床上，',
      me.get_colored_name(),
      ' 写下一张字条，希望能够向她当面道歉。',
    ]);
    await era.printAndWait([
      '做完这一切后，',
      me.get_colored_name(),
      ' 用 ',
      grand.get_colored_name(),
      ' 口袋中的钥匙打开门，逃离了这所由爱铸造的监狱。',
    ]);
  }

  welcome() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    if (era.get('exp:89:监禁次数') === 1) {
      grand.say(['啊，', callname, '，你醒了。']);
      grand.say(['为什么……一副做错了事情的表情呢？']);
      era.println();

      era.print(['沉重，浑浊，灰色的沉默。']);
      era.print([
        '视线陷入那双蓝眸中的 ',
        me.get_colored_name(),
        '，在其中看到了因心虚而动摇的自己。',
      ]);
      era.println();

      grand.say([
        '我并不是想要责怪 ',
        callname,
        ' ，会变成这样……全都是我的错。',
      ]);
      grand.say(['一直以来，我太依赖 ', callname, ' 了……总是忍不住向你撒娇……']);
      grand.say([
        '因为不忍心看到最喜欢的 ',
        callname,
        ' 伤心的模样……所以一直在逃避。',
      ]);
      era.println();

      era.print([
        '将这一切尽收眼底的 ',
        grand.get_colored_name(),
        ' 伸出纤细的手掌，轻轻摩挲你的脸颊，重新开口。',
      ]);
      era.println();

      grand.say(['但是这一次……无论内心有多么痛苦，我都要努力，都要加油。']);
      grand.say(['不再依赖别人，不再哭泣，不再逃避。']);
      grand.say(['你的身体，气味，还有你的体温，我也一样喜欢。']);
      grand.say([callname, ' ，我爱你。']);
    } else {
      grand.say(['啊……！太好了， ', callname, ' ！你醒了！']);
      grand.say(['……身体……有什么不舒服的地方吗？']);
      grand.say(['因、因为不知道要用多少力气才好……被打晕过去，一定很痛吧……']);
      grand.say(['……这里是？']);
      era.println();

      era.print(['片刻的沉默。']);
      era.print([
        '在茫然无措间，',
        me.get_colored_name(),
        ' 的目光与 ',
        grand.get_colored_name(),
        ' 相撞。',
      ]);
      era.print(['那双粘稠无光的蓝眸中，分明渗透出了深深的歉意。']);
      era.println();

      grand.say(['对不起……我不能告诉 ', callname, '。']);
      grand.say([
        '……但、但是！我只是想和 ',
        callname,
        ' 说说话，不会做出伤害你的事情的……！',
      ]);
      grand.say(['所以说……', callname, '，请你待在这里，哪里都不要去。']);
    }
  }
};
