const { printAndWait, println, set } = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 达利阿拉伯 - 招募
 *
 * @author O口口口口口
 */
module.exports = {
  async run() {
    const god = get_chara_talk(340),
      me = get_chara_talk(0);
    await print_event_name('不再只是……「目光」', god);
    await printAndWait(
      '将单纯的比赛录像从欢呼声簇拥着的入场式与舞台的包围中剔出来。',
    );
    await printAndWait(
      '让被记录下的那几分钟进一步加速，让时间从终盘才开始继续流动。',
    );
    await printAndWait(
      '最后将视线聚焦的镜头，缩小到十多位选手中仅仅一人的双足，然后放大。',
    );
    await me.say_and_wait(
      '……果然又是完全不同的跑姿，共同点就只有末脚很惊人这一点……',
    );
    println();
    await god.say_as_unknown_and_wait(
      '因为这就是小马驹们的本能嘛，发力的习惯，足底的柔软性，身高，体重，把所有的所有，都在最后迎着风掷出去——',
    );
    println();
    await printAndWait('啊，也就是说……');
    await printAndWait('自然地顺着耳边的声音继续思考。');
    println();
    await god.say_as_unknown_and_wait(
      '也就是说，作为训练员的工作，要更在那之前。',
    );
    println();
    await printAndWait('变重了。');
    await printAndWait(
      '耳后那已让身体习以为常的声音，现在变作了实实在在的分量压在了肩上……',
    );
    await printAndWait(
      '想回过头，但打在脖颈间的温热吐息已经让身体在兴奋中僵直成了板结的一整块。',
    );
    await printAndWait(
      '不过，是红色的…在难以继续倾斜下去的眼底的尽头那里，是一簇……',
    );
    println();
    await god.say_and_wait(['又见面了呢～', sys_get_callname(340, 0), '～']);
    println();
    await printAndWait(
      '于是一下子就又陷进去了，陷进那像是猫，像是玉石，像是赛马娘，像是神明大人一样的目光里……',
    );
    set('flag:当前互动角色', 340);
    set('cflag:340:招募状态', recruit_flags.yes);
  },
};
