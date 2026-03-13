/**
 * @file 高尚骏逸 - 地下室
 * @author 無奈
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const ask_release_agree = require('#/event/basement/base-events-89/ask-release-agree');
const back_basement = require('#/event/basement/base-events-89/back-basement');
const find_escape = require('#/event/basement/base-events-89/find-escape');
const flatter = require('#/event/basement/base-events-89/flatter');
const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

module.exports = class extends CustomizedBase {
  ask_release_agree = ask_release_agree;

  async ask_release_reject() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0),
      life_marks = new GrandLifeMarks();
    if (era.get('exp:89:监禁次数') === 1 && life_marks.b_ask_release < 4) {
      if (++life_marks.b_ask_release <= 3) {
        await grand.say_and_wait(['不行——']);
        era.println();

        await era.printAndWait([
          '拒绝过后，欲言又止的',
          grand.teen_sex_title,
          '低下了头。',
        ]);
        era.println();

        await grand.say_and_wait(['再给我一点时间……拜托了……', callname, '……']);
        await grand.say_and_wait(['给我一个……让你重新喜欢上我的机会……']);
        era.println();

        await era.printAndWait([
          grand.get_colored_name(),
          ' 说着抱住了 ',
          me.get_colored_name(),
        ]);
        await era.printAndWait(['比起撒娇，力量更多传达着束缚的意味。']);
        await era.printAndWait([
          '不知道该作何反应的 ',
          me.get_colored_name(),
          '，静静地等待着小',
          grand.uma_sex_title,
          '心满意足的那一刻。',
        ]);
      } else {
        await grand.say_and_wait(['不行——']);
        era.println();

        await era.printAndWait([
          '拒绝过后，',
          grand.teen_sex_title,
          '的眼眶渐渐泛红。',
        ]);
        era.println();

        await grand.say_and_wait([
          '像这样把',
          callname,
          '监禁在这里…你一定很恨我吧……',
        ]);
        await grand.say_and_wait([
          '但是，如果放你离开，我可能就再也见不到 ',
          callname,
          ' 了啊……！',
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

        era.println();

        await grand.say_and_wait([
          '那样不行…如果连远远看着都不被允许，我不知道自己会变成什么样子……',
        ]);
        await grand.say_and_wait(['……求你了，', callname, '……不要丢下我……']);
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
          ' 回抱着',
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
        grand.teen_sex_title,
        '不容争辩的表情，',
        me.get_colored_name(),
        ' 知道，能做的事情已经非常有限了。',
      ]);
      era.println();

      await grand.say_and_wait(['我知道，', callname, ' 之后肯定会提高警惕……']);
      await grand.say_and_wait(['离开这里后……就很难再找到你了。']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 说着抱住了 ',
        me.get_colored_name(),
      ]);
      await era.printAndWait(['比起撒娇，力量更多传达着束缚的意味。']);
      era.println();

      await grand.say_and_wait(['这一次，不会让你离开我的视线了。']);
      await grand.say_and_wait(['……为了独占你，我不知道自己会做出什么事情。']);
    }
  }

  async ask_time(date, hours, minutes) {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89);
    await grand.say_and_wait('……！我……我现在就看……那、那个……');
    await grand.say_and_wait([
      '现在是',
      CustomizedBase.get_cur_time(hours, minutes),
      '……打乱了 ',
      callname,
      ' 的计划吧……对不起……',
    ]);
  }

  back_basement = back_basement;

  async battle_escape() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      '抱起',
      grand.child_sex_title,
      '的身体放在床上，',
      me.get_colored_name(),
      ' 看着 ',
      grand.get_colored_name(),
      ' 天使般的睡脸，叹了口气。',
    ]);
    await era.printAndWait([
      '曾几何时，',
      grand.sex,
      '总是带着天使般的笑容，而改变这一切的人正是 ',
      me.get_colored_name(),
      ' 自己。',
    ]);
    await era.printAndWait([
      '厚重的铁门已经被推开，',
      grand.teen_sex_title,
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
      grand.child_sex_title,
      '的小手正不安地颤抖着。',
    ]);
    era.println();

    await grand.say_and_wait(['不要走……', callname, '……']);
    era.println();

    await era.printAndWait([
      '本应熟睡的小',
      grand.uma_sex_title,
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
        ' 用铁丝划开自己的袖口，从衬衣的夹层中取出满满一包药粉。',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 把手伸进莫名多出一个大洞的袖口，从衬衣的夹层中取出一小包药粉。',
      ]);
    }
    await era.printAndWait([
      '在训练员会议上发放的「对',
      grand.uma_sex_title,
      '用安眠药」样品，没想到真的有用到的一天。',
    ]);
    await era.printAndWait([
      '讲师说这个药可以让',
      grand.uma_sex_title,
      '失去施暴时的记忆，以便回到正常的搭档关系。',
    ]);
    await era.printAndWait([
      '一边啧啧感叹「真是个伟大的发明」，一边确认 ',
      grand.get_colored_name(),
      ' 寻找餐具的背影，',
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
        '刚刚不小心吸进去了一点……但还好这是「对……',
        grand.uma_sex_title,
        '用……安……眠……」',
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
        grand.uma_sex_title,
        '用」的特效药，',
        me.get_colored_name(),
        ' 没有拒绝。',
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

    await era.printAndWait(['被吸入般的睡意袭来，思绪一步坠入深海。']);
    await era.printAndWait([
      '开什么玩笑……难道「对',
      grand.uma_sex_title,
      '用」指的是「药效强到对',
      grand.uma_sex_title,
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
      grand.uma_sex_title,
      '用的安眠药。',
    ]);
    await era.printAndWait([
      '尽管称之为安眠药，但持续时间其实很短，效果在五分钟左右就会消失。',
    ]);
    era.println();

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
      '我也不喜欢这样……我也想做个好孩子，让你喜欢上我。',
    ]);
    await grand.say_and_wait([
      '看到你痛苦的表情……我也会很难过，就像现在这样。',
    ]);
    era.println();

    await era.printAndWait([
      '模糊中，',
      me.get_colored_name(),
      ' 对上了那双满载愧疚的眼眸。',
    ]);
    era.println();

    await grand.say_and_wait([
      '一定是因为',
      callname,
      ' 有很多事情……想要负起责任……',
    ]);
    await grand.say_and_wait(['让我……帮你忘掉那些痛苦的事情吧————']);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 的意识不断下沉，而 ',
      grand.get_colored_name(),
      ' 的声音越来越远……越来越近。',
    ]);
  }

  find_escape = find_escape;

  first_time() {
    const me = get_chara_talk(0);
    era.print([
      '拍门声与求救声在狭小的空间中回响，得到冰冷的触感与沉默作为回应。',
    ]);
    era.print([
      '在这暗室中待得越久，时间概念愈发模糊，只留无数疑问盘旋于脑海。',
    ]);
    era.println();

    me.say(['咳咳……咳咳咳……']);
    era.println();

    era.print([
      '抑制住用嗓过度的咳嗽声，',
      me.get_colored_name(),
      ' 希望尽量保持冷静。',
    ]);
    era.print(['假设是受人绑架，正面冲突恐怕无法避免。']);
    era.print(['或许现在需要整理思绪，稍作休息。']);
  }

  flatter = flatter;

  get_basement_info(can_strike) {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      ret = [];
    if (can_strike) {
      ret.push(
        grand.get_colored_name(),
        ' 带着料理刚刚回到这里，餐桌正是为偷袭准备的陷阱……',
      );
    } else if (sys_check_awake(this.id)) {
      const relation = era.get(`relation:${this.id}:0`),
        love = era.get(`love:${this.id}`),
        relation_check = relation >= (era.get('flag:极端行为限制') || 1) * love,
        { b_s_level } = new GrandLifeMarks();
      if (love >= 85) {
        if (relation_check) {
          ret.push(
            grand.get_colored_name(),
            ' 用溢满愧疚的双眼偷偷望向 ',
            me.get_colored_name(),
            '，',
          );
        } else if (relation >= 0) {
          ret.push(
            grand.get_colored_name(),
            ' 的双手紧绞在一起，指关节因用力而泛白，',
          );
        } else {
          ret.push(
            grand.get_colored_name(),
            ' 空洞的双眼紧随 ',
            me.get_colored_name(),
            ' 的每个动作，',
          );
        }
      } else if (relation_check) {
        ret.push(grand.get_colored_name(), ' 不自觉地紧攥着裙摆，');
      } else {
        ret.push(grand.get_colored_name(), ' 自言自语说着道歉的话，');
      }
      if (b_s_level >= 4) {
        ret.push('愧疚与怀疑间，似乎后者更据上风。');
      } else if (b_s_level === 3) {
        ret.push('看来回忆成为了', grand.sex, '没有做出过激行为的理由。');
      } else {
        ret.push('正挣扎于 ', me.get_colored_name(), ' 的幸福与独占欲之间。');
      }
    } else {
      ret.push(
        grand.get_colored_name(),
        ' 呢喃着 ',
        me.get_colored_name(),
        ' 的名字睡在小床的一角，短发间布满了细密的汗珠。',
      );
    }
    return ret;
  }

  get_up() {
    const grand = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.print([
      grand.get_colored_name(),
      ' 呼喊着 ',
      me.get_colored_name(),
      ' 的名字于梦中惊醒，徬徨失措地搜寻着 ',
      me.get_colored_name(),
      ' 的身影。',
    ]);
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

  out() {
    const callname = sys_get_colored_callname(this.id, 0),
      grand = get_chara_talk(this.id);
    grand.say(['唔嗯……？好像……要到上课的时间了……']);
    era.println();

    era.print([
      '昏昏沉沉地抬起头，手机屏幕的荧光映出了',
      grand.teen_sex_title,
      '疲惫而苍白的面容。',
    ]);
    era.print([
      '对',
      grand.sex,
      '来说，想必无论心理还是生理上，都承受着相当大的压力吧。',
    ]);
    era.println();

    grand.say(['啊……谢谢你……还愿意关心我……', callname, '。']);
    grand.say(['不过……如果能让 ', callname, ' 回心转意，这种程度……没关系的……']);
  }

  async strike_fail() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    new GrandLifeMarks().b_strike = 1;
    await grand.say_and_wait(['嘿咻……嘿咻……']);
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
      '这样一来，想必',
      grand.uma_sex_title,
      '也会暂时失去行动能力吧。',
    ]);
    era.println();

    await grand.say_and_wait([
      '为 ',
      callname,
      ' 铺床，总觉得……像那个……家、家人一样……诶嘿嘿。',
    ]);
    era.println();

    await era.printAndWait(['只需要往前一点——']);
    era.println();

    await grand.say_and_wait([
      '我经常一个人想象……自己和 ',
      callname,
      ' 成为家人的样子。',
    ]);
    era.println();

    await era.printAndWait(['在那把凳子上坐下——']);
    era.println();

    await grand.say_and_wait([
      '不过从监禁 ',
      callname,
      ' 的那一刻起，想象已经不可能成为现实了吧……',
    ]);
    await grand.say_and_wait(['那个，', callname, '……我准备了料理——']);
    era.println();
    await me.say_and_wait(['——喂！！']);
    era.println();
    await grand.say_and_wait([
      '——啊！',
      callname.content[0],
      '、',
      callname,
      '！',
    ]);
    era.println();

    await era.printAndWait([
      '骨节的脆响与',
      grand.teen_sex_title,
      '的呼喊声组成尖锐的合鸣。',
    ]);
    await era.printAndWait([
      '推开了 ',
      grand.get_colored_name(),
      '，代替',
      grand.sex,
      '被砸在衣柜下面的 ',
      me.get_colored_name(),
      '，却莫名松了一口气。',
    ]);
  }

  async strike_success() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    await grand.say_and_wait([callname, '，我回……']);
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
      grand.child_sex_title,
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
      grand.child_sex_title,
      '的身体不会造成伤害的办法。',
    ]);
    era.println();

    await me.say_and_wait(['好好休息一下吧。']);
    era.println();

    await era.printAndWait([
      '留意到怀中的',
      grand.child_sex_title,
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
      era.print([
        '冰冷的环境唤醒了沉睡的意识，',
        me.get_colored_name(),
        ' 的眼中模糊的映出了陌生的天花板。',
      ]);
      era.print(['为寻找一丝熟悉感而游移的目光，捕捉到了一个小小的白色身影。']);
      era.println();
      grand.say(['啊……！太好了，', callname, '！你醒了！']);
      grand.say(['……身体……有什么不舒服的地方吗？']);
      grand.say(['因、因为不知道要用多少力气……被打晕过去，一定很痛吧……']);
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
      era.print(['粘稠无光的蓝眸中，渗透出深深的歉意。']);
      era.println();

      grand.say(['对不起……我不能告诉 ', callname, '。']);
      grand.say([
        '……但、但是！我只是想和 ',
        callname,
        ' 说说话，不会伤害你的……！',
      ]);
      grand.say(['所以说……', callname, '，请你待在这里，哪里都不要去。']);
    } else {
      era.print([
        me.get_colored_name(),
        ' 猛地睁开眼，熟悉的天花板意味着担心的事情已经成为现实。',
      ]);
      era.println();

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
        '，会变成这样……全都是我的错。',
      ]);
      grand.say(['一直以来，是我太依赖 ', callname, ' 了……总是向你撒娇……']);
      grand.say([
        '因为不忍心看到最喜欢的 ',
        callname,
        ' 伤心的模样……一直在逃避。',
      ]);
      era.println();

      era.print([
        '将这一切尽收眼底的 ',
        grand.get_colored_name(),
        ' 轻轻摩挲 ',
        me.get_colored_name(),
        ' 的脸颊，重新开口。',
      ]);
      era.println();

      grand.say(['但这一次……无论内心多么痛苦，我都要努力，都要加油。']);
      grand.say(['不再依赖别人，不再哭泣，不再逃避。']);
      grand.say(['你的身体，气味，你的体温，我也一样喜欢。']);
      grand.say([callname, '，我爱你。']);
    }
  }
};
