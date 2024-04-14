const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.fans_letr = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(event_hooks.office_prepare, event_object);
      return true;
    }
    await print_event_name('粉丝来信', urara);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 与 ',
      me.get_colored_name(),
      ' 一同收拾着粉丝们的礼物，在大部分都是熟认之人的寄件中，夹着一个小小的信封。',
    ]);
    await era.printAndWait([
      '同往常一样，会认真对待每封来信的 ',
      urara.get_colored_name(),
      ' 也翻开了不起眼的它，随后便欣喜的睁大了眼睛……',
    ]);
    await urara.say_and_wait([
      callname,
      '！这好像是一位住在很远的地方的孩子的来信哦！',
    ]);
    await urara.say_and_wait(
      '『看到你不放弃的身影，我获得了勇气』……他这样写，总觉得有点不好意思呢！',
    );
    await urara.say_and_wait(
      '所以我觉得自己下次绝对会赢！到时这个孩子会更替我开心吗？',
    );

    era.printButton('「当然，能看到乌拉拉的胜利，他一定会开心的。」', 1);
    await era.input();

    await era.printAndWait([
      '面对 ',
      me.get_colored_name(),
      ' 肯定的回答，',
      urara.get_colored_name(),
      ' 笑着写起了回信。收到从远方寄来的鼓励，',
      urara.get_colored_name(),
      ' 也更有动力了。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, undefined, 30);
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };

  handlers.race_clothe = async (urara, me, callname, flags, event_object) => {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(event_hooks.office_prepare, event_object);
      return true;
    }
    await print_event_name('关于决胜服', urara);
    await era.printAndWait([
      '今天，',
      urara.get_colored_name(),
      ' 终于收到了前段时间因意外破损而被拿去修补的决胜服。',
    ]);
    await urara.say_and_wait(
      '嘿嘿～乌拉拉的决胜服终于回来了！我一直觉得能穿着决胜服参加比赛超帅呢──！',
    );
    await era.printAndWait([
      '抱着虽然朴素但从最初就陪伴着',
      urara.sex,
      '的第一件决胜服，',
      urara.get_colored_name(),
      ' 的心情明显变好了不少。',
    ]);
    await era.printAndWait([
      '话又说回来，决胜服的设计一般都是由',
      urara.get_uma_sex_title(),
      '们亲自参与完成的，所以每件决胜服的诞生都是独一无二的。',
    ]);
    await era.printAndWait([
      '可以说，不管外人如何评价美与丑，这些各具特色的衣物都有资格被称为「承载',
      urara.get_teen_sex_title(),
      '们梦想的盛装」。',
    ]);
    await era.printAndWait([
      '只是 ',
      urara.get_colored_name(),
      ' 为自己所构建出的「梦想最初的形状」，虽然很有',
      urara.sex,
      '的特点，但总觉得过于「随处可见」了……',
    ]);

    era.printButton(
      '「……说起来，我可以问一问，乌拉拉最初是怎么设计这套衣服的吗？」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '而面对 ',
      me.get_colored_name(),
      ' 试探般小心的问题，',
      urara.get_colored_name(),
      ' 则回以了一个大方的笑容。',
    ]);
    await urara.say_and_wait(
      '嗯？其实也没什么哦？这套衣服的设计，我只是参考了小时候第一次赛跑时穿的体操服！',
    );
    await urara.say_and_wait(
      '虽然完全赢不了，但爸爸妈妈都会称赞我，所以穿上这套衣服，会让乌拉拉感觉能够变强！',
    );
    await urara.say_and_wait(
      '而且在变强之后，乌拉拉还希望能够透过穿上这件衣服的心情，让大家变得开心！',
    );
    await era.printAndWait([
      '也是啊，因为 ',
      urara.get_colored_name(),
      ' 的梦想一直都这么简单朴素，所以决胜服也会如此。而且，「在变强之后」啊……',
    ]);
    await era.printAndWait([
      '怎么会想不到呢，拥有决胜服不代表能在生涯中有机会将它穿上，',
      urara.get_colored_name(),
      ' 也一样明白这个道理。',
    ]);
    await era.printAndWait([
      '看来就算还不成熟，',
      urara.get_colored_name(),
      ' 也在一开始就做好了相应的心理准备——',
    ]);

    urara.say(['对了，', callname, '！难得它补好了……今天我可以穿着它训练吗？']);
    era.printButton('「如果衣服又弄坏了就不好了。」（速度+20）', 1);
    era.printButton('「如果乌拉拉开心的话也不是不行。」（力量+20）', 2);
    const attr_change = new Array(5).fill(0);
    if ((await era.input()) === 1) {
      await urara.say_and_wait(
        '——也是呢，要是再弄坏了就不好了，既然是决胜服，就该好好珍惜才行。',
      );
      await urara.say_and_wait([
        '乌拉拉会赢下去的！所以 ',
        callname,
        '，在我能够穿上它的时间外，可以帮乌拉拉保管好它吗？',
      ]);
      await era.printAndWait([
        '带着期待穿上决胜服的心情，',
        urara.get_colored_name(),
        ' 叠好了自己的「梦想」，并笑着将它交到了 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      attr_change[attr_enum.speed] = 20;
    } else {
      await era.printAndWait([
        '面对 ',
        urara.get_colored_name(),
        ' 的满脸期待，',
        me.get_colored_name(),
        ' 最终是没能向小',
        urara.get_uma_sex_title(),
        '那灿烂的笑容提出反对意见。',
      ]);
      await urara.say_and_wait([
        '真的吗？谢谢 ',
        callname,
        '！我一定会很努力训练，让自己在以后的比赛也能继续穿上的！',
      ]);
      await era.printAndWait([
        '但等 ',
        urara.get_colored_name(),
        ' 心满意足后，',
        urara.sex,
        '却说着「下次穿上前要好好珍惜！」，并主动将决胜服的保管权交由了 ',
        me.get_colored_name(),
        '。',
      ]);
      attr_change[attr_enum.strength] = 20;
    }
    await era.printAndWait([
      '没错，训练员正是帮助选择奔跑的「',
      urara.sex,
      '们」把握梦想的职业，而 ',
      me.get_colored_name(),
      ' 也正是 ',
      urara.get_colored_name(),
      ' 所「信任」的训练员——',
    ]);
    await era.printAndWait([
      '一定要帮 ',
      urara.get_colored_name(),
      ' 跑到最后。感受着心中与小',
      urara.get_uma_sex_title(),
      '相遇时相似的鼓动，',
      me.get_colored_name(),
      ' 对着手中的决胜服坚定了决心。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
  };
};
