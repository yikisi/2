const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

module.exports = async function () {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  if (!edu_marks.church && Math.random() < 0.1) {
    edu_marks.church++;
    await print_event_name('神明捕捉行动', tachyon);
    await era.printAndWait([
      '今天，',
      me.get_colored_name(),
      ' 与 ',
      tachyon.get_colored_name(),
      ' 一起前往神社时……',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '！还不快点！要是让『神明大人』等急了就不好了！',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 兴奋的跑上神社阶梯回头喊道',
    ]);
    await era.printAndWait([
      '姑且不论以人类之身追上',
      tachyon.uma_sex_title,
      '的可能性，除了物理上的不可能外，',
    ]);
    await era.printAndWait([
      '在精神上 ',
      me.get_colored_name(),
      ' 也死命的想要拒绝接下来的行为，但在爱马的任性要求下，',
      me.get_colored_name(),
      ' 依然只能露出苦笑勉强跟上',
    ]);
    era.println();
    await era.printAndWait('事情的起因……说来复杂，却也简单');
    await era.printAndWait('一言以蔽之');
    era.println();
    await tachyon.say_and_wait([
      callname,
      '，你知道的吧，我一向是不相信什么灵魂鬼神的存在的',
    ]);
    await tachyon.say_and_wait(
      '但是，在未经确认前便加以否认这也不符合研究者应有的态度',
    );
    await me.say_and_wait('嗯嗯');
    await tachyon.say_and_wait('但是要如何验证呢，从以前其实就一直有种说法');
    await tachyon.say_and_wait('所谓的鬼神，其实就是自然界游离的能量团而已');
    await tachyon.say_and_wait(
      '虽然这样的说法有失偏颇，但确实能够以此为基础去进行验证',
    );
    await me.say_and_wait('嗯嗯');
    era.println();
    await tachyon.say_and_wait(
      '所以，如此如此这般这般，我们去神社捕捉神明吧！',
    );
    await me.say_and_wait('嗯……嗯？');
    era.println();
    await era.printAndWait(
      '如果说真的有这么一种一般人类无法感知无法察觉的东西存在，',
    );
    await era.printAndWait('那他的存在本身必然也需要能量');
    await era.printAndWait(
      '因此初步选择能够探测到不正常的能量消耗地方为探测基准，',
    );
    await era.printAndWait('但都市内乱七八糟的干扰太多');
    await era.printAndWait(
      '相比之下，要想探查的话最好当然就是地处偏远的神社了',
    );
    await era.printAndWait(
      '除此之外，既然称之为神，那么能量的等级必然也跟一般的鬼魂不同，',
    );
    await era.printAndWait(
      '要是连在神社都补捉不到所谓神明，那么基本就可以认定这种东西是不可能存在的………',
    );
    era.println();
    await era.printAndWait('总而言之，大致上就是出于如此不敬的原因');
    await era.printAndWait([
      me.get_couple_title(),
      ' 今日来到了偏远地方无人经过的神社',
    ]);
    await me.say_and_wait(
      '南无三，还请三女神大人有大量，别计较这种小事情了，万分拜托，阿弥陀佛，阿门',
      true,
    );
    era.println();
    await era.printAndWait([
      '带着万分不情愿的心情，',
      me.get_colored_name(),
      ' 总算爬上了神社',
    ]);
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 的以死相逼的恳求下，',
      tachyon.get_colored_name(),
      ' 心不甘情不愿的答应了在开始使用',
      tachyon.sex,
      '手上那莫名其妙的能量探测器之前先参拜一次表示敬意',
    ]);
    era.println();
    await era.printAndWait([
      '于是 ',
      me.get_couple_title(),
      ' 双手合十，朝着神社敬拜……',
    ]);
    await tachyon.say_and_wait('好啦！那么废话不多说就让我们开始……');
    era.println();
    await era.printAndWait([
      '参拜完的瞬间，',
      tachyon.get_colored_name(),
      ' 便拿起了',
      tachyon.sex,
      '放在一旁的能量探测器对准了神社的方向开始探测',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 只能苦笑着站在一旁祈祷神明大人有大量不要跟小孩子计较了',
    ]);
    era.println();
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '嗯嗯……嗯嗯……！等一下！',
        callname,
        '！你过来看，这里好像有………',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 听见 ',
        tachyon.get_colored_name(),
        ' 的呼喊声急忙跑了过去，却发现',
        tachyon.sex,
        '在探测到某个地方后就忽然不动了',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 连忙上去拍',
        tachyon.sex,
        '的肩膀确认是否没事，',
        tachyon.sex,
        '却忽然将 ',
        me.get_colored_name(),
        ' 扑倒在地',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '将 ',
        me.get_colored_name(),
        ' 的双手按倒在地，',
        me.get_colored_name(),
        ' 面朝天，看着压在自己身上的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的眼神冷酷，但在冷酷之下彷佛又藏着一丝狂热',
      ]);
      await era.printAndWait('像是捕捉到猎物，正要开始进食的猫科动物一般');
      era.println();
      await me.say_and_wait(
        [
          '这下真的遭天谴了吗……不是，为什么受天谴的是我不是',
          tachyon.sex,
          '啊！？',
        ],
        true,
      );
      era.println();
      await era.printAndWait('万般话语也陷入了无力的无奈');
      await era.printAndWait([
        me.get_colored_name(),
        ' 只能眼睁睁看着',
        tachyon.sex,
        '的下一步动作',
      ]);
      era.println();
      await era.printAndWait([
        '在确认 ',
        me.get_colored_name(),
        ' 已经失去反抗的意志后，',
        tachyon.sex,
        '松开了一只手，解开 ',
        me.get_colored_name(),
        ' 的衬衫上衣',
      ]);
      era.println();
      await me.say_and_wait('啊啊，这样要训练员失格了啊', true);
      await era.printAndWait([
        tachyon.sex,
        '拉开了 ',
        me.get_colored_name(),
        ' 的上衣，然后……',
      ]);
      era.println();
      await tachyon.say_and_wait('喵～～～');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '发出了小猫一般的叫声，像猫一样钻进 ',
        me.get_colored_name(),
        ' 的怀中，发出舒服的咕噜声',
      ]);
      await era.printAndWait([
        '当然，即便动作再像猫，依然改变不了',
        tachyon.sex,
        '的身体是',
        tachyon.uma_sex_title,
        '身体的事实',
      ]);
      await era.printAndWait([
        '虽然想象小猫一样钻进衬衫，但就 ',
        me.get_colored_name(),
        ' 所看见的，',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '的行为不过是在解开上衣后便躺在 ',
        me.get_colored_name(),
        ' 赤裸的胸板上磨蹭',
      ]);
      era.println();
      await tachyon.say_and_wait('喵～～喵呜～喵');
      era.println();
      await era.printAndWait([
        '似乎对这样的接触有些不满意，',
        tachyon.sex,
        '换了个方式，拉起了 ',
        me.get_colored_name(),
        ' 的双手，使 ',
        me.get_colored_name(),
        ' 的双手重迭在',
        tachyon.sex,
        '的肚子上',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 想趁机起身，但察觉到 ',
        me.get_colored_name(),
        ' 的动作后用力压下的重量使 ',
        me.get_colored_name(),
        ' 再次无法动弹',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 只能继续任由',
        tachyon.sex,
        '将 ',
        me.get_colored_name(),
        ' 的手摆成了拥抱的姿势',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '在固定完 ',
        me.get_colored_name(),
        ' 手的姿势后，便翻了个身，脸颊平贴在 ',
        me.get_colored_name(),
        ' 的胸膛上，发出了满足的声音',
      ]);
      era.printButton('「……速子？」', 1);
      await era.input();
      await era.printAndWait([
        '这只小猫没有做出回答，渐渐的，',
        tachyon.sex,
        '的呼吸趋于平缓，然后……',
      ]);
      era.println();
      await tachyon.say_and_wait('zzz……喵……zzz……');
      era.println();
      await era.printAndWait([
        '就这么躺在 ',
        me.get_colored_name(),
        ' 的胸膛上睡着了',
      ]);
      await era.printAndWait([
        '现在的 ',
        me.get_colored_name(),
        ' 倒是能够将',
        tachyon.sex,
        '挣脱，但……',
      ]);
      era.println();
      await era.printAndWait([
        '现在 ',
        tachyon.get_colored_name(),
        ' 的模样明显的很不正常',
      ]);
      await era.printAndWait('但是无论如何，前面都被折腾成这样了');
      await era.printAndWait(
        '睡着的现在，让自己稍稍收点补偿应该，也没关系吧？',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 轻轻松开了抱住',
        tachyon.sex,
        '的臂弯，将一只手伸向了上方…………',
      ]);
      era.println();
      await era.printAndWait([
        '好软，好舒服……原来如此，这就是',
        tachyon.uma_sex_title,
        '的………',
      ]);
      era.println();
      await era.printAndWait('耳朵啊');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 轻轻抚摸着这只小猫的头，不时搓揉头顶上垂下的耳朵，柔软却富有弹性的毛茸茸触感使 ',
        me.get_colored_name(),
        ' 忍不住一摸再摸',
      ]);
      era.println();
      await tachyon.say_and_wait('喵呀……咕噜……喵喵');
      era.println();
      await era.printAndWait([
        '梦中的小猫也发出了可爱的声音，彷佛在鼓励着 ',
        me.get_colored_name(),
        ' 继续动作',
      ]);
      await era.printAndWait('不妙啊……这种软绵绵的触感……要沦陷了………');
      era.println();
      await era.printAndWait([
        '不知不觉，',
        me.get_colored_name(),
        ' 也陷入了梦乡…………',
      ]);
      era.drawLine();
      await tachyon.say_and_wait('啊啊啊啊啊！！！我的仪器啊啊啊啊啊！！！');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着发出悲鸣的 ',
        tachyon.get_colored_name(),
        '，露出苦笑',
      ]);
      await era.printAndWait([
        '先前不知道发生了什么事，',
        me.get_couple_title(),
        ' 忽然就在神社里昏过去了，再次醒来时 ',
        tachyon.get_colored_name(),
        ' 发现',
        tachyon.sex,
        '花了大钱（貌似）买的仪器就这么不动了',
      ]);
      await era.printAndWait(
        '奇怪的是，两人的记忆都只停留在参拜的瞬间，参拜后发生了什么竟然一点印象都没有，',
      );
      await era.printAndWait([
        '不过不知为何，',
        me.get_colored_name(),
        ' 感觉身体一阵舒畅，彷佛在昏迷前做了什么抒发压力的举动',
      ]);
      await era.printAndWait([
        '……',
        me.get_colored_name(),
        ' 忽然想起醒来时发现上衣扣子被全数解开的事情，在昏迷前到底发生了甚么呢',
      ]);
      await era.printAndWait('……果然，鬼神什么的还是多少信一些吧');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 带着 ',
        tachyon.get_colored_name(),
        ' 离开了神社',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着',
        tachyon.sex,
        '拿着探测器在神社内戳来戳去，也不知道这样到底有没有效',
      ]);
      era.drawLine();
      await tachyon.say_and_wait('…………果然，什么也没有啊');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 一脸失望的说道']);
      await era.printAndWait([
        me.get_colored_name(),
        ' 也不明白',
        tachyon.sex,
        '为什么会如此失望，证明了鬼神的不存在不应该是对',
        tachyon.sex,
        '而言的好事吗？',
      ]);
      await era.printAndWait([
        '在不明所以中，',
        me.get_couple_title(),
        ' 就这么下了山回去了',
      ]);
    }
    return;
  } else if (edu_marks.plan_b) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait('……神明啊');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 无趣的看着神社，不知道在想些什么',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('如果……神明，那我……');
        await era.printAndWait([tachyon.get_colored_name(), ' 喃喃自语着']);
      },
    );
  } else {
    buffer.push(
      async () => {
        await tachyon.say_and_wait(
          '我说神明什么的，真的存在吗？不，我知道三女神，但……说到底，三女神也就是掌握了更强悍能力的凡…',
        );
        await era.printAndWait([
          me.get_colored_name(),
          ' 连忙堵住了 ',
          tachyon.get_colored_name(),
          ' 的嘴。',
        ]);
      },
      () =>
        tachyon.say_and_wait([
          '喂喂，',
          callname,
          '，比起神明，我们还是快回去实验吧',
        ]),
      () =>
        tachyon.say_and_wait(
          '大吉还是大凶？无妨，那种事不是神明决定，而是我自己造就的',
        ),
    );
  }
  await get_random_entry(buffer)();
};
