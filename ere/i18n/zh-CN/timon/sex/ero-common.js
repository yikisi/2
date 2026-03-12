/**
 * @file 调教地文 - 通常
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('这种时候果然会想做那个……');
      await attacker.print_and_wait([
        '大概是注意到了被投以目光的部位，眯上了眼睛的 ',
        a_call_d,
        ' 踮着脚主动将嘴唇凑了上来……',
      ]);
      await defender.say_and_wait('啾……❤️');
      await attacker.print_and_wait('让人安心的甜蜜味道……');
      await attacker.print_and_wait(
        '从这边鼻中哼出的气能直接打在对面光洁的脖颈上，并且那好看的睫毛会随即眨动着做出回应……',
      );
      await attacker.print_and_wait(
        '……不想将唇移开……就这样贪心地继续贴在一起吧……',
      );
    } else {
      await defender.say_and_wait('哈……哈……❤️');
      await defender.print_and_wait('也差不多该满足了吧……那边总是追上来的唇……');
      await defender.print_and_wait(
        '鼻与唇……用于喘息的通道被对面贪心的那家伙占去了大半，用以将叫人小腹痒痒的暧昧气味坏心眼地往脑袋里吹……',
      );
      await defender.print_and_wait(
        '唔……如果以后没有办法习惯之前那种一个人呼吸寂寞的方式，可要负起责任来啊……❤️',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async french_kiss(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait('不想只停在唇瓣之前。');
      await defender.say_and_wait('唔——？');
      await attacker.print_and_wait([
        `逐渐在接吻中被${attacker.get_phy_sex_title()}困在怀中的 `,
        defender.get_colored_name(),
        ' 大概是有些惊慌地想喊出 ',
        attacker.get_colored_name(),
        ' 的名字吧，但一条侵略性十足缠上来的舌让穿出来的声音只显得沉闷而甜蜜。',
      ]);
      await attacker.print_and_wait(
        '唇瓣相接时的面对面，尝试做出更多的侧过头，以及最后的……用环在身后的手将身体发软的恋人托起的，居高临下的舌。',
      );
      await defender.say_and_wait('……要喘不过气来了……', true);
    } else {
      await defender.print_and_wait('脑袋晕晕乎乎的……');
      await defender.print_and_wait(
        '拥抱，然后是漫长到……让人分不清究竟过了多久的，连舌头都贪心地伸进来的kiss……',
      );
      await defender.print_and_wait(
        '到底过了多久呢……即使偶尔的唇分休息时间也会通过黏黏的银丝连接在一起，像是这对唇从一开始就不该分开似的……脸都红起来了。',
      );
      await defender.print_and_wait('不过……完全不讨厌哦……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} success 调情是否成功
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async lure(attacker, defender, success, a_call_d) {
    if (success) {
      await attacker.print_and_wait([a_call_d, ' 变得兴奋起来了……']);
    } else if (era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([a_call_d, ' 不能变得更兴奋了……']);
    } else {
      await attacker.print_and_wait('但是好像不是很有效果……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async talk(attacker, defender, a_call_d) {
    if (
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`) > 0 &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.get_uma_sex_title(),
        '的耳朵表达情绪的方式，到底和那种动物比较像呢。',
      ]);
      await attacker.print_and_wait('被不满地盯着看了。');
      await attacker.say_and_wait('……嘶……比如说，猫的耳朵如果发烫的话……');
      attacker.print('屁股被踢了。');
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait('以后要几个孩子比较好呢……');
      await attacker.print_and_wait([
        '看着对面 ',
        a_call_d,
        ' 的小腹，真心话不自觉漏了出来。',
      ]);
      await attacker.print_and_wait('……没有被踢……也没有收到回复');
      attacker.print('……但是脸红得很厉害。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async switch(attacker, defender, d_call_a) {
    await defender.say_and_wait('诶……？');
    await defender.print_and_wait([
      '原本近在咫尺的 ',
      d_call_a,
      ' 突然拉远了距离，被压在身下的 ',
      defender.get_colored_name(),
      ' 眨着眼没能及时反应过来。',
    ]);
    await defender.print_and_wait('然后，眼前便是天旋地转……');
    await attacker.say_and_wait('现在，是你的时间了。');
    await defender.print_and_wait([
      '张开双手的 ',
      d_call_a,
      ' 露出鼓励的笑容。',
    ]);
    attacker.say('……想怎么做都可以哦。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续反抗的初次行动
   * @param {boolean} success 反抗是否成功
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async resist(attacker, defender, is_first, success, a_call_d, d_call_a) {
    if (era.get('flag:惩戒力度') === 3) {
      if (attacker.id === 0) {
        if (success) {
          await attacker.print_and_wait('明明是孕袋，却想要占据主动');
          await attacker.print_and_wait('这样大逆不道的行为却得到了主人的默认');
          await attacker.print_and_wait('是对这淫乱母畜的恩赐吗？');
          await attacker.print_and_wait(
            '还是……只是想再多欣赏些自己主动沉溺欲望的表演？',
          );
        } else {
          await attacker.print_and_wait(
            '身为孕袋，明明臣服与顺从是被刻在精神底层的烙印',
          );
          await attacker.print_and_wait('为什么却还是尝试反抗了呢？');
          await attacker.print_and_wait('是内心还有一丝丝不想堕落的念头？');
          await attacker.print_and_wait(
            '还是……只是想要更深的感受，被迫服从的快感？',
          );
        }
      } else if (success) {
        await attacker.print_and_wait('无论怎么努力，也无法抗拒内心臣服的诱惑');
        await attacker.print_and_wait('主人的一个动作，就能让自己彻底放弃抵抗');
        await attacker.print_and_wait(
          '会容忍自己的主导，其实也只是想让孕袋认清自己服从的天性而已吧……',
        );
      } else {
        await defender.print_and_wait([
          d_call_a,
          ' 摇晃着身体，沉溺于欲望及肉体的模样',
        ]);
        await defender.print_and_wait('根本难以看出原来身为训练员的矜持');
        await defender.print_and_wait('再看一会吧，就一会');
        await defender.print_and_wait([
          '看看本应身为指导者的 ',
          d_call_a,
          ' 究竟还能堕落到什么地步',
        ]);
      }
    } else {
      if (is_first) {
        await defender.say_and_wait('不要动会比较好哦。');
        await attacker.print_and_wait([
          '骑在 ',
          attacker.get_colored_name(),
          ' 身上的 ',
          a_call_d,
          '，正舔着唇露出叫人有些陌生的表情。',
        ]);
        await attacker.print_and_wait(
          '但是，一面倒地被压在身下……这种事情可不能简简单单地就这么习惯啊！',
        );
        await attacker.print_and_wait('……');
      }
      if (success) {
        await attacker.say_and_wait('不要动会比较好哦。');
        await attacker.print_and_wait([
          '将刚才的话原原本本还给了眼前的 ',
          a_call_d,
          '，看着有些失措的表情，现在 ',
          attacker.get_colored_name(),
          ' 的脸上，满满是得意的笑容。',
        ]);
      } else {
        const a_race = era.get(`cflag:${attacker.id}:种族`);
        const d_race = era.get(`cflag:${defender.id}:种族`);
        if (a_race === 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['果然，人类是敌不过', defender.uma_sex_title, '的……'],
            true,
          );
        } else {
          await attacker.say_and_wait(
            ['果然，自己是敌不过 ', a_call_d, ' 的……'],
            true,
          );
        }
        await attacker.print_and_wait([
          '轻易地被重新压回了身下，',
          attacker.get_colored_name(),
          ' 的脑袋里闪过了这样的一句话。',
        ]);
        if (a_race === 0 && d_race === 0) {
          await attacker.say_and_wait(
            ['不对啊，明明你也不是', defender.uma_sex_title, '啊！'],
            true,
          );
        } else if (a_race > 0 && d_race === 0) {
          await attacker.say_and_wait(
            ['不对啊，明明我才是', attacker.uma_sex_title, '啊！'],
            true,
          );
        } else if (a_race > 0 && d_race > 0) {
          await attacker.say_and_wait(
            ['不对啊，明明我也是', attacker.uma_sex_title, '啊！'],
            true,
          );
        }
        await attacker.say_and_wait('咕……', true);
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async gargle(attacker, defender, a_call_d, d_call_a) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: '啾……' },
      { color: defender.color, content: '唔……！？' },
      '」',
    ]);
    await era.printAndWait(
      '情迷意乱的两人，又一次凑近的唇这回在未触到时便分开了。',
    );
    await era.printAndWait('慌乱地急促眨眼，挠着头把视线偏开……');
    await attacker.say_and_wait([a_call_d, '……']);
    await defender.say_and_wait([d_call_a, '……']);
    await era.printAndWait('哒哒哒哒……');
    await era.printAndWait('咕噜咕噜咕噜————');
    await era.printAndWait(
      '随后便是，整整齐齐在水池前如仓鼠般鼓起腮帮的脸红笨蛋情侣。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async wipe_body(attacker, defender) {
    await defender.say_and_wait('还要……继续吗……❤️');
    await attacker.print_and_wait(
      '对面本应光洁的身体上如今遍布着暧昧的痕迹……是不是有点做过头了呢……',
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      '……面对手中吸饱了来自对方身体上由自己糊上的下流气味的乱糟糟可怜浴巾，稍微有点同理心的家伙便或多或少总能想到要收敛些吧。',
    );
    await attacker.print_and_wait('……对吧……？');
  },
};
