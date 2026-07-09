/**
 * @file 调教地文 - 通常
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { motion_enum, towards_enum } = require('#/data/ero/part-const');

module.exports = {
  /** 沟通系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} chara 当前视角角色
   * @param {boolean} is_attacker 当前视角角色是否是攻击者
   */
  async after_refused(chara, is_attacker = true) {
    if (is_attacker) {
      await chara.say_and_wait('果然不可以吗……');
      await chara.print_and_wait(
        '顺着气氛提出的下流请求，果然还是会有极限的……',
      );
      await chara.print_and_wait(
        '就这样，虽然身体还有些躁动，也只能这样结束了。',
      );
      await chara.print_and_wait('不过……');
    } else {
      await chara.print_and_wait('不要露出那种眼神……');
      await chara.print_and_wait('总不会以为什么请求这边都会乖乖答应吧！');
      await chara.print_and_wait('……真是');
    }
  },
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
        `逐渐在接吻中被${attacker.phy_sex_title}困在怀中的 `,
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
        defender.uma_sex_title,
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
   * @author 幽白書
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续反抗的初次行动
   * @param {boolean} success 反抗是否成功
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async resist(attacker, defender, is_first, success, a_call_d) {
    if (era.get('flag:惩戒力度') === 3) {
      // @author 幽白書
      if (attacker.id === 0) {
        // 孕袋反抗主人
        if (success) {
          // 反抗成功，孕袋主视角
          await attacker.print_and_wait('明明是孕袋，却想要占据主动');
          await attacker.print_and_wait('这样大逆不道的行为却得到了主人的默认');
          await attacker.print_and_wait('是对这淫乱母畜的恩赐吗？');
          await attacker.print_and_wait(
            '还是……只是想再多欣赏些自己主动沉溺欲望的表演？',
          );
        } else {
          // 反抗失败，孕袋主视角
          await attacker.print_and_wait(
            '身为孕袋，明明臣服与顺从是被刻在精神底层的烙印',
          );
          await attacker.print_and_wait('为什么却还是尝试反抗了呢？');
          await attacker.print_and_wait('是内心还有一丝丝不想堕落的念头？');
          await attacker.print_and_wait(
            '还是……只是想要更深的感受，被迫服从的快感？',
          );
        }
        // 主人反抗孕袋
      } else if (success) {
        // 反抗成功，孕袋主视角
        await defender.print_and_wait('无论怎么努力，也无法抗拒内心臣服的诱惑');
        await defender.print_and_wait('主人的一个动作，就能让自己彻底放弃抵抗');
        await defender.print_and_wait(
          '会容忍自己的主导，其实也只是想让孕袋认清自己服从的天性而已吧……',
        );
      } else {
        // 反抗失败，主人主视角
        await attacker.print_and_wait([
          a_call_d,
          ' 摇晃着身体，沉溺于欲望及肉体的模样',
        ]);
        await attacker.print_and_wait('根本难以看出原来身为训练员的矜持');
        await attacker.print_and_wait('再看一会吧，就一会');
        await attacker.print_and_wait([
          '看看本应身为指导者的 ',
          a_call_d,
          ' 究竟还能堕落到什么地步',
        ]);
      }
    } else {
      // @author O口口口口口
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
  /** 爱抚系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.uma_sex_title,
        '的耳朵，果然是会让人憧憬的东西啊，不论是将它视为作为肢体的延伸，作为表情的延伸，亦或是作为……敏感带的延伸……',
      ]);
      await attacker.print_and_wait([
        `只是用指尖蜻蜓点水似的轻柔触碰，`,
        attacker.get_colored_name(),
        ` 还没能细细感受那份按摩着指尖的细腻触感，那对尖尖长长的马耳朵便害羞地从 ${attacker.phy_sex_title} 的指间溜走了。`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait('请……再来摸一次吧，这次不会逃走了。');
      await attacker.print_and_wait(['怀里的 ', a_call_d, '，现在脸很红。']);
    } else {
      await attacker.print_and_wait('呼呼……');
      await attacker.print_and_wait(
        '掌中有了一对不会逃走的马耳朵，被细密的绒毛按摩着指腹…有种身与心都被疗愈了的感觉。',
      );
      await attacker.print_and_wait('这就是作为恋人的特权吗……');
      await attacker.print_and_wait('不过，现在有点好奇那里的状态……');
      await attacker.print_and_wait([
        '仿佛由看不清的丝线连在一处，',
        a_call_d,
        ' 的双腿随着',
        attacker.phy_sex_title,
        '被马耳朵黏住的手羞人地一颤一颤。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait('这样是不对的……');
    await attacker.print_and_wait('……这不是作为恋人应当做的事……');
    await attacker.print_and_wait('……不过');
    await attacker.print_and_wait([
      '不满足于单纯的温柔爱抚，被从下身涌起的支配欲所支配的',
      attacker.phy_sex_title,
      '，渐渐懂得了如何安全地增大指间的力道……',
    ]);
    await attacker.print_and_wait([
      '……这样便能叫身下的马耳朵',
      defender.phy_sex_title,
      '明白，自体内逐渐苏醒的，对着人类摇晃尾巴的血脉记忆究竟从何时何处而来……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast_from_back(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '完全没有为 ',
      a_call_d,
      ' 展现出的柔弱姿态感到一丝一毫的不忍或满足，不会简单感到满足的 ',
      attacker.get_colored_name(),
      ' 只是进一步将双手探到了那对顺应着让苹果坠下的力量向下凸显形状的美乳。',
    ]);
    await defender.say_and_wait('哈……');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' 连掌握着盈盈乳肉的五指都进一步发力，将那对属于 ',
      a_call_d,
      ' 自己的柔软任性地变成唯独自己所中意的形状。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast_first(attacker, defender, a_call_d) {
    if (era.get(`cflag:${defender.id}:成长阶段`) < 5) {
      await attacker.print_and_wait([
        defender.teen_sex_title,
        '的柔软……此刻落进了自己的掌心。',
      ]);
    } else {
      await attacker.print_and_wait('诱人的柔软……此刻落进了自己的掌心。');
    }
    await attacker.print_and_wait(
      '无法忍耐的指尖自己便动了起来，迫不及待地想让眼前的软肉印上指纹，变成更符合自己的形状。',
    );
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait([
      a_call_d,
      ' 的身体正随着自己的手指而摇晃，发出暧昧的声音……哈，不得不承认，这种感觉美妙到叫人不想停下来……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async pet_breast(attacker, defender, a_call_d, d_call_a) {
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait([
      '啊，就算是这边也差不多能感觉到了……眼前 ',
      a_call_d,
      ' 的身体，因自己的触碰而变得紧绷，也因自己的触碰而变得寂寞……',
    ]);
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait('但是，果然还是想再任性一会。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async pet_nipple(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait('很烫……');
      await attacker.print_and_wait(
        '虽然只是嵌在白皙乳肉上小小的肉粒，却正散发着了不起的热度',
      );
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '用手指绕着乳晕画圈，看着那粉色的小点在指肚的压迫下一点点肿胀，一点点立起，一点点拥有与手指向抗衡的坚挺硬度……',
      );
      await attacker.print_and_wait('……然后加大几分力度将它揉扁。');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait(
        defender.race > 0 ? '啊，被用尾巴教训了。' : '啊，被打了。',
      );
    } else {
      await attacker.print_and_wait('说不定能就这么挤出乳汁来……');
      await attacker.print_and_wait(
        '眼前被连续不断的爱抚弄得硬邦邦的下流乳头叫人忍不住这么想……',
      );
      await defender.say_and_wait('呀——');
      await attacker.print_and_wait([
        '趁着 ',
        a_call_d,
        ' 低着头喘息分神的功夫尝试着用手指将乳头向上提起……',
      ]);
      await attacker.print_and_wait('惊慌的样子很美味。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '将 ',
        a_call_d,
        ' 的双腿分开，这么直勾勾地盯着',
        defender.sex,
        '赤裸的下身……',
      ]);
      await attacker.print_and_wait(
        '已经没有回头的机会了……但自己却反而因此振奋……',
      );
      await attacker.print_and_wait(
        '用手指将那粉色小肉粒上覆着的包皮揉开，看着那敏感的阴蒂因暴露在空气上而从可爱的粉色逐渐变为更妖艳的充血赤色。',
      );
      await attacker.print_and_wait('……放心吧，会对它温柔一些的');
    } else {
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '啊啊，不知不觉就已经变成这种又红又肿的可怜样子了。',
      );
      await attacker.print_and_wait([
        '只是简单触碰加上一点点耐心，这小小的敏感肉突就会让 ',
        a_call_d,
        ' 的无暇身体放荡地动起来……',
      ]);
      await defender.say_and_wait('呀——');
      await attacker.print_and_wait('再看一次吧，最后一次。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async finger_fuck(attacker, defender) {
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait(
      '明明身体的反应还有些僵硬，小穴却毫不费劲地就把这根食指的指尖连着第一指节含入其中了……',
    );
    await attacker.print_and_wait('手指被热烈地吻着。');
    await attacker.print_and_wait(
      '向上勾，向下蹭，顺应着穴肉的蠕动，朝着两侧……',
    );
    await attacker.print_and_wait('哈……腿夹得这么紧的话，可就没法继续了哦。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async prepare_virgin_uma(attacker, defender) {
    await attacker.print_and_wait([
      '小心翼翼地探入两根手指，将敞露在自己面前，',
      defender.teen_sex_title,
      '合成一条细缝的窄窄肉穴翻弄开来。',
    ]);
    await attacker.print_and_wait('好美……');
    await defender.say_and_wait('别这么直勾勾地看着呀……');
    await attacker.print_and_wait('被狂乱地摇晃起来的尾巴这么抱怨了，但是……');
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait(
      '呼，能感受到随着手指拓开肉穴的程度渐渐变深，指缝间被蠕动的小穴从内部挤出的热气，吹出的迷人瘙痒感。',
    );
    await attacker.print_and_wait('再多加一根手指也没关系吧。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '想让',
        defender.sex,
        '变得更舒服，想让',
        defender.sex,
        '的小穴变得更柔软，想让这具漂亮的身体因为自己的动作而更忘情地扭动起来……',
      ]);
      await defender.say_and_wait('哈……哈……');
      await attacker.print_and_wait(
        '明明只是负责动动手指，但脑内暴走的欲念却叫人气喘吁吁。',
      );
      await attacker.print_and_wait('在哪呢……应该已经快到了才对……');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait([
        '比起周围的穴肉来说，那微微的凸起感叫手指不由自主地被吸了过去，进而便能感受到那微隆的穴肉所独特的炽热温度与湿黏的触感……而帮忙核对答案的，则是 ',
        a_call_d,
        ' 突然拱起的腰腹与夹紧了作案手臂的双腿。',
      ]);
      await attacker.print_and_wait('……找到了。');
    } else {
      await attacker.print_and_wait('挤压。');
      await attacker.print_and_wait('搓揉。');
      await attacker.print_and_wait('戳弄。');
      await attacker.print_and_wait('用钝厚的指甲去撩拨。');
      await attacker.print_and_wait([
        '在这双手尽兴之前，尽情地去教会面前不知什么时候已瘫软成泥的汗津津的 ',
        defender.get_colored_name(),
        '，为什么快乐能被称作是毒药吧。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async pet_anal(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('唔嗯——！？');
      await attacker.print_and_wait([
        '虽然稍迟了一些，面前的屁股',
        defender.adult_sex_title,
        '很明显察觉到了来自这边的意图，被来自',
        attacker.get_colored_name(),
        '的手指暧昧地凑近过来，用叫身体恰到好处能警惕起来的粗糙质感，沿着那小巧的穴口绕着圈。',
      ]);
      await attacker.print_and_wait([
        '而这「恰到好处」的警惕……便体现在 ',
        a_call_d,
        ' 不自觉向着手指讨好撅起的屁股……',
        defender.race > 0 ? '与那晕头转向的马尾巴了……' : '',
      ]);
    } else {
      await defender.print_and_wait('所以……到底是不是想要进攻那里呀……');
      await defender.print_and_wait([
        `是……错觉吗……`,
        d_call_a,
        `……好像格外中意这种欲擒故纵的节奏……`,
      ]);
      await defender.print_and_wait(
        '没法坚持着紧绷身体，自己被暧昧的爱抚感融化的屁股小穴，已经悄悄地松弛下来，变成了能吞下什么都不奇怪的性爱穴。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async prepare_anal(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      `用手掌感受着自面前翕动的穴中吐出的撩人热气，四根手指如桩般将极力想让叫人害羞的肉穴合拢，以逃开 ${attacker.phy_sex_title} 视线的臀肉固定住。`,
    );
    await attacker.print_and_wait(
      '唯独格外粗长的中指有另外的事做，如蝎尾般微曲着一点点凑近后穴，然后便是缓慢而坚决的插入。',
    );
    await attacker.print_and_wait('阻力感很强。');
    await attacker.print_and_wait([
      '自发地蠕动起的穴肉如有生命般喘着气推阻着 ',
      attacker.get_colored_name(),
      ` 的手指，明明并不如隔壁的小穴般是为了性爱而存在的淫肉，但如今面对着${attacker.phy_sex_title}的手指却积极到叫人意外。`,
    ]);
    await attacker.print_and_wait('在害怕吗……还是在喜悦着呢……？');
    await attacker.print_and_wait([
      '连喘息着的 ',
      a_call_d,
      ' 自己都弄不明白，那从害羞着蠕动起的后穴内传出，倏地爬上脊梁让身体发颤的电流，到底是意味着什么。',
    ]);
    await defender.say_and_wait(
      '又……往里面去了……第一个指节……已经全部都……',
      true,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          '作为训练员，将面前担当的双腿，用性的意味去观赏与抚摸……',
        );
        await attacker.print_and_wait(
          '只是把现在正在做的事，用克制的语言去描述，叫人身体发凉的背德感就已经随着寒战传遍了全身。',
        );
        await attacker.print_and_wait(
          '明明训练后为了确认状态，偶尔也会有上手抚摸的亲热动作吧……',
        );
        await attacker.print_and_wait(
          '但是很神奇的，现在脑袋里完全没法将这双腿与「比赛」联系在一起',
        );
      }
      await attacker.print_and_wait('现在的自己满脑袋想的都是……');
      await attacker.print_and_wait('被这双腿交错着缠上腰的话，一定感觉很棒。');
    } else {
      await attacker.print_and_wait('柔软而有弹性。');
      await attacker.print_and_wait('曲线优雅而纤长。');
      await attacker.print_and_wait(
        '有着能因为手指的爱抚而发起抖的绝佳敏感度。',
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('真浪费啊……');
        await attacker.print_and_wait('这样的双腿只是为了比赛而存在什么的……');
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_tail(attacker, defender) {
    await attacker.print_and_wait('相当新鲜的体验。');
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait([
        '毕竟是从',
        defender.uma_sex_title,
        '的尾椎底伸出，平时在那校服裙后如看得见的风般摇曳着的尾巴呀。',
      ]);
    }
    await attacker.print_and_wait(
      '哼着歌轻柔地抚摸着，手指沿着柔顺的尾巴毛逐渐上拨，将自己的双手被来自尾巴根私密气味尽情标记……',
    );
    await attacker.print_and_wait('啊……说起来……');
    await defender.say_and_wait('不许闻！', true);
    await attacker.print_and_wait(
      '像是被这么呵斥着，想要抬起的手被尾巴紧紧地缠上动弹不得。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pull_tail(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('哦哦～');
      await attacker.print_and_wait([
        '从身下的 ',
        a_call_d,
        ' 口中传出的荡漾的呻吟声是有毒的。',
      ]);
      await attacker.print_and_wait(
        `在了解了，可以通过拽弄尾巴让面前的${defender.uma_sex_title}变得温顺而听话后，从小腹内顶起的热气变得更加难以阻挡了。`,
      );
    } else {
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait(
        '只是稍稍地多用上一点力，屁股就会抬起来，但这时候松手的话，就会连腰都塌下去……',
      );
      await attacker.print_and_wait([
        '喂喂……真的知道自己正在',
        attacker.phy_sex_title,
        '的面前表演着怎样的动作吗，可怜的 ',
        a_call_d,
        '？',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('唔唔唔唔————');
      await attacker.print_and_wait(
        '没有不把它含入口中的理由吧，没有把眼前散发着下流雌性气味的充血小豆从保护中剥出后，让它孤零零地裸着发颤的理由吧。',
      );
      await attacker.print_and_wait([
        '所以 ',
        attacker.get_colored_name(),
        ' 深深地俯下身体，将头埋入了 ',
        a_call_d,
        ' 大大分开的双腿之间。',
      ]);
      await attacker.print_and_wait('应激着夹拢的大腿股间在发颤。');
      await attacker.print_and_wait('盘上这边腰的膝在发颤。');
      await attacker.print_and_wait('环在腰后的双足在发颤。');
      await attacker.print_and_wait('啊……为什么会突然变成这样呢……');
      await attacker.print_and_wait(
        '总不会是因为这粒正被舌舔得更加湿漉漉的小豆豆的关系吧。',
      );
    } else {
      await attacker.print_and_wait('用舌尖拨弄。');
      await attacker.print_and_wait('用吮吸使其立起。');
      await attacker.print_and_wait('轻轻地向它吹气。');
      await attacker.print_and_wait('稍微有些苦恼啊……');
      await attacker.print_and_wait([
        '不论用哪种方式对面前的阴蒂，怎样刺激都能让面前的 ',
        a_call_d,
        ' 一致地在欢愉中颤抖的话，不就没办法知道更中意哪一种了嘛。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('拜托了……');
      await defender.print_and_wait([
        '尽管还带着些羞怯，面前的 ',
        d_call_a,
        ' 却自己用双手帮着将那带着颤的双腿向这边分开',
      ]);
      await defender.say_and_wait('唔唔唔唔————');
      await defender.print_and_wait(
        '没有不把它含入口中的理由吧，没有把眼前散发着下流雌性气味的充血小豆从保护中剥出后，让它孤零零地裸着发颤的理由吧。',
      );
      await defender.print_and_wait([
        '所以 ',
        defender.get_colored_name(),
        ' 深深地俯下身体，将头埋入了 ',
        d_call_a,
        ' 大大分开的双腿之间。',
      ]);
      await defender.print_and_wait('应激着夹拢的大腿股间在发颤。');
      await defender.print_and_wait('盘上这边腰的膝在发颤。');
      await defender.print_and_wait('环在腰后的双足在发颤。');
      await defender.print_and_wait('啊……为什么会突然变成这样呢……');
      await defender.print_and_wait(
        '总不会是因为这粒正被舌舔得更加湿漉漉的小豆豆的关系吧。',
      );
    } else {
      await defender.print_and_wait('用舌尖拨弄。');
      await defender.print_and_wait('用吮吸使其立起。');
      await defender.print_and_wait('轻轻地向它吹气。');
      await defender.print_and_wait('稍微有些苦恼啊……');
      await defender.print_and_wait([
        '不论用哪种方式对面前的阴蒂，怎样刺激都能让面前的 ',
        d_call_a,
        ' 一致地在欢愉中颤抖的话，不就没办法知道更中意哪一种了嘛。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('拜托了哦～');
      await defender.print_and_wait([
        '主动张开双腿的 ',
        d_call_a,
        ' 期待地望向身下的 ',
        defender.get_colored_name(),
        '，用手帮着眼神游离的 ',
        defender.get_colored_name(),
        ' 低俯下头。',
      ]);
      await defender.say_and_wait('唔唔唔唔————');
      await defender.print_and_wait(
        '没有不把它含入口中的理由吧，没有把眼前散发着下流雌性气味的充血小豆从保护中剥出后，让它孤零零地裸着发颤的理由吧。',
      );
      await defender.print_and_wait([
        '所以 ',
        defender.get_colored_name(),
        ' 深深地俯下身体，将头埋入了 ',
        d_call_a,
        ' 大大分开的双腿之间。',
      ]);
      await attacker.say_and_wait('哈❤️');
      await defender.print_and_wait(
        '明明是提出不妙要求的一方，此刻却忘情地摇摆着身体……',
      );
      await defender.print_and_wait('应激着夹拢的大腿股间在发颤。');
      await defender.print_and_wait('盘上这边腰的膝在发颤。');
      await defender.print_and_wait('环在腰后的双足在发颤。');
      await defender.print_and_wait('啊……为什么会突然变成这样呢……');
      await defender.print_and_wait(
        '总不会是因为这粒正被舌舔得更加湿漉漉的小豆豆的关系吧。',
      );
    } else {
      await defender.print_and_wait('用舌尖拨弄。');
      await defender.print_and_wait('用吮吸使其立起。');
      await defender.print_and_wait('轻轻地向它吹气。');
      await defender.print_and_wait('稍微有些苦恼啊……');
      await defender.print_and_wait([
        '不论用哪种方式对面前的阴蒂，怎样刺激都能让面前的 ',
        d_call_a,
        ' 一致地在欢愉中颤抖的话，不就没办法知道更中意哪一种了嘛。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        '让人心跳加速的气味……从舌尖融化到全身的酸甜腥味……',
      );
      await attacker.print_and_wait(
        '在如今这以舌舐阴的暧昧连接姿势中，到底是哪一方先来了的呢……',
      );
      await attacker.print_and_wait('柔软与柔软间的对抗。');
      await attacker.print_and_wait(
        '如吹口哨的唇形般在穴道中被迫卷起向前缓缓前探的舌，与应对着温热的撩拨生涩地蠕动着对抗的穴……',
      );
      await attacker.print_and_wait('哪一边都有着不能轻易退缩的理由……');
    } else {
      await attacker.print_and_wait('差不多可以做些别的事了。');
      await attacker.print_and_wait(
        '已经不太能回忆起一开始是怎样合拢成一条窄缝的清纯形状，被不断迎上来的舌舔得从里到外湿漉漉的穴，如今已向外翻开着地微微颤动……',
      );
      await attacker.print_and_wait(
        '而那双本来紧紧夹在坏孩子腰间的双腿，也不知在哪一番后松解开来，只留下如芭蕾般高高踮起的足尖形状。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('哈……');
      await defender.print_and_wait([
        d_call_a,
        ' 正在自己面前用手指将粉嫩的穴瓣分开，那么，这边需要做些什么就一目了然了吧……',
      ]);
      await defender.print_and_wait(
        '让人心跳加速的气味……从舌尖融化到全身的酸甜腥味……',
      );
      await defender.print_and_wait(
        '在如今这以舌舐阴的暧昧连接姿势中，到底是哪一方先来了的呢……',
      );
      await defender.print_and_wait('柔软与柔软间的对抗。');
      await defender.print_and_wait(
        '如吹口哨的唇形般在穴道中被迫卷起向前缓缓前探的舌，与应对着温热的撩拨生涩地蠕动着对抗的穴……',
      );
      await defender.print_and_wait('哪一边都有着不能轻易退缩的理由……');
    } else {
      await defender.print_and_wait(
        '因为迟迟没有听见停下来的请求，这边的舌也就没有半途而废的理由。',
      );
      await defender.print_and_wait('不过……');
      await defender.print_and_wait('差不多可以做些别的事了。');
      await defender.print_and_wait(
        '已经不太能回忆起一开始是怎样合拢成一条窄缝的清纯形状，被不断迎上来的舌舔得从里到外湿漉漉的穴，如今已向外翻开着地微微颤动……',
      );
      await defender.print_and_wait(
        '而那双本来紧紧夹在坏孩子腰间的双腿，也不知在哪一番后松解开来，只留下如芭蕾般高高踮起的足尖形状。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('唔——');
      await defender.print_and_wait(
        '强硬地被压下了头，惊呼着想张开的唇随即迎上了张扬的小穴。',
      );
      await defender.print_and_wait(
        '让人心跳加速的气味……从舌尖融化到全身的酸甜腥味……',
      );
      await defender.print_and_wait(
        '在如今这以舌舐阴的暧昧连接姿势中，到底是哪一方先来了的呢……',
      );
      await defender.print_and_wait('柔软与柔软间的对抗。');
      await defender.print_and_wait(
        '如吹口哨的唇形般在穴道中被迫卷起向前缓缓前探的舌，与应对着温热的撩拨生涩地蠕动着对抗的穴……',
      );
      await defender.print_and_wait('哪一边都有着不能轻易退缩的理由……');
    } else {
      await attacker.say_and_wait('哈～');
      await defender.print_and_wait([
        '大约是心满意足了吧，像是痛饮了一大口凉啤酒瓣，',
        d_call_a,
        ' 吐出口畅快的气。',
      ]);
      await defender.print_and_wait('差不多可以做些别的事了。');
      await defender.print_and_wait(
        '已经不太能回忆起一开始是怎样合拢成一条窄缝的清纯形状，被不断迎上来的舌舔得从里到外湿漉漉的穴，如今已向外翻开着地微微颤动……',
      );
      await defender.print_and_wait(
        '而那双本来紧紧夹在坏孩子腰间的双腿，也不知在哪一番后松解开来，只留下如芭蕾般高高踮起的足尖形状。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(
        '眼前的样子，可真是叫人罪恶感油然而生啊……',
        true,
      );
      if (attacker.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait(
          '马娘与肉棒，这几乎没存在交集的两个词，此刻却黏糊糊地连接在了一起……',
        );
      }
      await attacker.print_and_wait(
        '自己的双唇被肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。',
      );
      await attacker.print_and_wait('蹲俯下的身体，开始颤抖起来了……为什么呢……');
      await attacker.print_and_wait('这样的事，果然有点奇怪……？');
    } else {
      await attacker.say_and_wait('呲溜呲溜～～');
      await attacker.print_and_wait('不知不觉变得熟练一些了……');
      await attacker.print_and_wait(
        '头仰起一些的话，就能把眼前的肉棒含入的更多……',
      );
      await attacker.print_and_wait(
        '用被压扁的舌头从侧面轻轻舔舐的话，就会舒服地颤动起来。',
      );
      await attacker.print_and_wait('如果活用起唇瓣的话……吸……');
      await attacker.print_and_wait(
        '咳咳……浓厚涌进来的羞人味道会让脑袋变得晕乎乎的……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('拜托了——');
      await defender.print_and_wait([
        '面前的 ',
        d_call_a,
        ` 突然说出了叫人脸红的话。`,
      ]);
      await defender.print_and_wait(
        '突然提出这种要求，就算被拒绝然后踢飞也请不要有怨言哦……',
      );
      await attacker.say_and_wait(
        '眼前的样子，可真是叫人罪恶感油然而生啊……',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          '马娘与肉棒，这几乎没存在交集的两个词，此刻却黏糊糊地连接在了一起……',
        );
      }
      await defender.print_and_wait(
        '自己的双唇被肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。',
      );
      await defender.print_and_wait('蹲俯下的身体，开始颤抖起来了……为什么呢……');
      await defender.print_and_wait('这样的事，果然有点奇怪……？');
    } else {
      await defender.print_and_wait('同样的要求一遍又一遍的说也太犯规了……');
      await defender.say_and_wait('呲溜呲溜～～');
      await defender.print_and_wait('不知不觉变得熟练一些了……');
      await defender.print_and_wait(
        '头仰起一些的话，就能把眼前的肉棒含入的更多……',
      );
      await defender.print_and_wait(
        '用被压扁的舌头从侧面轻轻舔舐的话，就会舒服地颤动起来。',
      );
      await defender.print_and_wait('如果活用起唇瓣的话……吸……');
      await defender.print_and_wait(
        '咳咳……浓厚涌进来的羞人味道会让脑袋变得晕乎乎的……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('把嘴张开。');
      await defender.print_and_wait(
        '挣扎的话说不定有用……虽然有这样想过，身体却一点点被那只手压低了下去……',
      );
      await defender.say_and_wait('唔……');
      await attacker.say_and_wait(
        '眼前的样子，可真是叫人罪恶感油然而生啊……',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          '马娘与肉棒，这几乎没存在交集的两个词，此刻却黏糊糊地连接在了一起……',
        );
      }
      await defender.print_and_wait(
        '自己的双唇被肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。',
      );
      await defender.print_and_wait('蹲俯下的身体，开始颤抖起来了……为什么呢……');
      await defender.print_and_wait('这样的事，果然有点奇怪……？');
    } else {
      await defender.say_and_wait('哈……', true);
      await defender.say_and_wait('还要……继续嘛……', true);
      await defender.say_and_wait('呲溜呲溜～～');
      await defender.print_and_wait('不知不觉变得熟练一些了……');
      await defender.print_and_wait(
        '头仰起一些的话，就能把眼前的肉棒含入的更多……',
      );
      await defender.print_and_wait(
        '用被压扁的舌头从侧面轻轻舔舐的话，就会舒服地颤动起来。',
      );
      await defender.print_and_wait('如果活用起唇瓣的话……吸……');
      await defender.print_and_wait(
        '咳咳……浓厚涌进来的羞人味道会让脑袋变得晕乎乎的……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async deep_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('这样做的话……');
      await attacker.say_and_wait('唔……');
      await attacker.print_and_wait('果然会有点难……不过……');
      await attacker.print_and_wait('更深地含进去了……');
      await attacker.say_and_wait(
        ['应该会很舒服吧……我的……', a_call_d, '❤️'],
        true,
      );
      await attacker.say_and_wait('呲溜呲溜……');
      await attacker.print_and_wait(
        '在场的两人中，已经至少有一个不具名的下流家伙偷跑着，能从这下流的体位中啾啾地榨取出让自己眉头舒展开的禁忌快感。',
      );
      await attacker.print_and_wait([
        '……于是，',
        attacker.get_colored_name(),
        ' 的这张小嘴从此刻起，被赋予了汲取营养外的另一重意义，沦陷为发出黏黏糊糊声音蠕动着缠上肉棒的下流性器官，这一点已经是来不及挽回的事实❤️',
      ]);
      await attacker.print_and_wait(
        '用喉咙的软肉迎上龟头，用灵巧的舌尖轻抚肉棒上充血的筋络，用不需要空气作为介质的紧致吮吸将柱身托起……',
      );
      await attacker.print_and_wait([
        '在学些什么，在记些什么，在变成些什么样子呀……此刻蹲俯在 ',
        a_call_d,
        ' 身下的 ',
        attacker.get_colored_name(),
        '。',
      ]);
    } else {
      if (defender.race > 0) {
        await attacker.print_and_wait([
          '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
          attacker.get_colored_name(),
          ' 在这方面出乎',
          a_call_d,
          '预料的有天赋。',
        ]);
        await attacker.print_and_wait([
          '用余光看着 ',
          a_call_d,
          ` 吸着气仰起头的姿势，没空哼歌的 `,
          attacker.get_colored_name(),
          ' 好懂地抖起了耳朵。',
        ]);
      }
      await attacker.say_and_wait('哈……哈……❤️');
      await attacker.print_and_wait('吞咽……');
      await attacker.print_and_wait([
        '为了获取必需的氧气，含着肉棒的 ',
        attacker.get_colored_name(),
        ' 大口吞咽着，把混杂肉棒气味…不，说是混杂着氧气的肉棒臭会更准确些吧。',
      ]);
      await attacker.print_and_wait([
        '先走汁与小嘴被塞满的 ',
        attacker.get_colored_name(),
        ' 无法自抑涌出的涎水在一次次口穴抽插中被捣弄成了容易拉出长丝的粘稠透明质地……',
      ]);
      await attacker.say_and_wait('唔……唔唔唔唔……');
      await attacker.print_and_wait(
        '嘛，就算这么做上再多次，最后总不会连如何开口说话都会忘记吧。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('还想要，更深一点……');
      await defender.print_and_wait([
        '贪心地呓语着，被索取快感的本能所支配的 ',
        d_call_a,
        ' 挺起了腰。',
      ]);
      await defender.print_and_wait('更深地含进去了……');
      await defender.print_and_wait('顶到，最里面了……');
      await defender.say_and_wait('呲溜呲溜……');
      await defender.print_and_wait(
        '在场的两人中，已经至少有一个不具名的下流家伙偷跑着，能从这下流的体位中啾啾地榨取出让自己眉头舒展开的禁忌快感。',
      );
      await defender.print_and_wait([
        '……于是，',
        defender.get_colored_name(),
        ' 的这张小嘴从此刻起，被赋予了汲取营养外的另一重意义，沦陷为发出黏黏糊糊声音蠕动着缠上肉棒的下流性器官，这一点已经是来不及挽回的事实❤️',
      ]);
      await defender.print_and_wait(
        '用喉咙的软肉迎上龟头，用灵巧的舌尖轻抚肉棒上充血的筋络，用不需要空气作为介质的紧致吮吸将柱身托起……',
      );
      await defender.print_and_wait([
        '在学些什么，在记些什么，在变成些什么样子呀……此刻蹲俯在 ',
        d_call_a,
        ' 身下的 ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
        defender.get_colored_name(),
        ' 在这方面出乎',
        attacker.phy_sex_title,
        '预料的有天赋。',
      ]);
      await defender.print_and_wait([
        '用余光看着 ',
        d_call_a,
        ' 吸着气仰起头的姿势，没空哼歌的 ',
        defender.get_colored_name(),
        ' 好懂地抖起了耳朵。',
      ]);
      await defender.print_and_wait('怎么样～');
      await defender.print_and_wait([
        '虽然那张小嘴此刻没有说话的空闲，但与自家的',
        defender.race > 0 ? '担当' : '伙伴',
        '正负距离接触的 ',
        d_call_a,
        ' 完全领会了那用舌尖勾勒在肉棒龟头上的邀功言语。',
      ]);
      await defender.say_and_wait('哈……哈……❤️');
      await defender.print_and_wait('吞咽……');
      await defender.print_and_wait([
        '为了获取必需的氧气，含着肉棒的 ',
        defender.get_colored_name(),
        ' 大口吞咽着，把混杂肉棒气味…不，说是混杂着氧气的肉棒臭会更准确些吧。',
      ]);
      await defender.print_and_wait([
        '先走汁与小嘴被塞满的 ',
        defender.get_colored_name(),
        ' 无法自抑涌出的涎水在一次次口穴抽插中被捣弄成了容易拉出长丝的粘稠透明质地……',
      ]);
      await defender.say_and_wait('唔……唔唔唔唔……');
      await defender.print_and_wait(
        '嘛，就算这么做上再多次，最后总不会连如何开口说话都会忘记吧。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('把头抬起来。');
      await defender.print_and_wait('更深地含进去了……');
      await defender.print_and_wait('依旧是，叫人难以听出温情的短促命令句。');
      await defender.print_and_wait([
        '但 ',
        defender.get_colored_name(),
        ' 的身体却难以抗拒地被其所支配着。',
      ]);
      await defender.say_and_wait('呲溜呲溜……');
      await defender.print_and_wait(
        '在场的两人中，已经至少有一个不具名的下流家伙偷跑着，能从这下流的体位中啾啾地榨取出让自己眉头舒展开的禁忌快感。',
      );
      await defender.print_and_wait([
        '……于是，',
        defender.get_colored_name(),
        ' 的这张小嘴从此刻起，被赋予了汲取营养外的另一重意义，沦陷为发出黏黏糊糊声音蠕动着缠上肉棒的下流性器官，这一点已经是来不及挽回的事实❤️',
      ]);
      await defender.print_and_wait(
        '用喉咙的软肉迎上龟头，用灵巧的舌尖轻抚肉棒上充血的筋络，用不需要空气作为介质的紧致吮吸将柱身托起……',
      );
      await defender.print_and_wait([
        '在学些什么，在记些什么，在变成些什么样子呀……此刻蹲俯在 ',
        d_call_a,
        ' 身下的 ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        '无言地催促着，',
        attacker.phy_sex_title,
        '再一次强硬地用手将面前的',
        defender.teen_sex_title,
        '固定在了自己的股间，直到自己满足之前。',
      ]);
      await defender.say_and_wait('哈……哈……❤️');
      await defender.print_and_wait('吞咽……');
      await defender.print_and_wait([
        '为了获取必需的氧气，含着肉棒的 ',
        defender.get_colored_name(),
        ' 大口吞咽着，把混杂肉棒气味…不，说是混杂着氧气的肉棒臭会更准确些吧。',
      ]);
      await defender.print_and_wait([
        '先走汁与小嘴被塞满的 ',
        defender.get_colored_name(),
        ' 无法自抑涌出的涎水在一次次口穴抽插中被捣弄成了容易拉出长丝的粘稠透明质地……',
      ]);
      await defender.say_and_wait('唔……唔唔唔唔……');
      await defender.print_and_wait(
        '嘛，就算这么做上再多次，最后总不会连如何开口说话都会忘记吧。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('唔——');
      await attacker.print_and_wait([
        '像是被那滚烫的温度所震惊，',
        attacker.get_colored_name(),
        ' 扶在肉棒上的手本能地向后一缩。随后才是，像是冬天将双足伸进被窝中般，一点点再度靠近。',
      ]);
      await attacker.print_and_wait(
        '明明是相当凶恶……会让女孩子的小腹一跳一跳的形状……',
      );
      await attacker.print_and_wait(
        '但是……被手指环握后，轻轻撸动就渗出先走汁在指间跳舞的样子……有点可爱呢。',
      );
      await attacker.say_and_wait('哈……哈……唔——');
      await attacker.print_and_wait('变得能听懂了……');
    } else {
      await attacker.print_and_wait('真的只需要这样就可以吗……');
      await attacker.print_and_wait([
        '被',
        attacker.child_sex_title,
        '的手捧起肉棒撸动就能满足……？',
      ]);
      await attacker.print_and_wait('……');
      await attacker.print_and_wait('真的……没有其他想要做的事吗……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('请来帮帮我吧……', true);
      await defender.print_and_wait([
        '尽管 ',
        d_call_a,
        ' 没有说出任何话，但 ',
        defender.get_colored_name(),
        ' 望着面前胀得通红的充血肉棒，已经开始预热着活动起的十指已经完全明白自己应做些什么。',
      ]);
      await defender.say_and_wait('唔——');
      await defender.print_and_wait([
        '像是被那滚烫的温度所震惊，',
        defender.get_colored_name(),
        ' 扶在肉棒上的手本能地向后一缩。随后才是，像是冬天将双足伸进被窝中般，一点点再度靠近。',
      ]);
      await defender.print_and_wait(
        '明明是相当凶恶……会让女孩子的小腹一跳一跳的形状……',
      );
      await defender.print_and_wait(
        '但是……被手指环握后，轻轻撸动就渗出先走汁在指间跳舞的样子……有点可爱呢。',
      );
      await defender.say_and_wait('哈……哈……唔——');
      await defender.print_and_wait('变得能听懂了……');
    } else {
      await defender.print_and_wait('真的只需要这样就可以吗……');
      await defender.print_and_wait([
        '被',
        defender.child_sex_title,
        '的手捧起肉棒撸动就能满足……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('真的……没有其他想要做的事吗……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('用手来做，可以的吧。');
      await defender.print_and_wait([
        `没有给出任何拒绝的空间，随着 `,
        d_call_a,
        ` 的话语已伸至 `,
        defender.get_colored_name(),
        ' 的面前，听话地主动伸出双手侍奉，与被那根垂落着下流汁液的肉棒蹭遍它所好奇的每一个角落，留给 ',
        defender.get_colored_name(),
        ' 的选项就只有这两项而已。',
      ]);
      await defender.say_and_wait('唔——');
      await defender.print_and_wait([
        '像是被那滚烫的温度所震惊，',
        defender.get_colored_name(),
        ' 扶在肉棒上的手本能地向后一缩。随后才是，像是冬天将双足伸进被窝中般，一点点再度靠近。',
      ]);
      await defender.print_and_wait(
        '明明是相当凶恶……会让女孩子的小腹一跳一跳的形状……',
      );
      await defender.print_and_wait(
        '但是……被手指环握后，轻轻撸动就渗出先走汁在指间跳舞的样子……有点可爱呢。',
      );
      await defender.say_and_wait('哈……哈……唔——');
      await defender.print_and_wait('变得能听懂了……');
    } else {
      await defender.print_and_wait('真的只需要这样就可以吗……');
      await defender.print_and_wait([
        '被',
        defender.child_sex_title,
        '的手捧起肉棒撸动就能满足……？',
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('真的……没有其他想要做的事吗……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('总觉得是');
      await attacker.print_and_wait('意外自然的动作呢……');
      await attacker.print_and_wait(
        '在双手扶起肉棒之后，脑袋就会不知不觉地凑过去。',
      );
      await attacker.print_and_wait('用指间的体温去暖化，搓开，然后……');
      await attacker.say_and_wait('啾～');
      await attacker.print_and_wait('超浓厚……');
    } else {
      await attacker.print_and_wait(
        '把肉棒拨弄到一边，然后侧过头去从上至下细细地舔舐，像是对待边角已融化滴落的雪糕。',
      );
      await attacker.say_and_wait('呲溜呲溜——');
      await attacker.print_and_wait([
        a_call_d,
        ` 的龟头变得亮晶晶的，上面泛着光的水渍到底是谁的错多一些呢……`,
      ]);
      await attacker.print_and_wait('变得完全……弄不明白了……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('想要被……含进去……？');
      await defender.print_and_wait('是……这样吗');
      era.println();
      await defender.print_and_wait('总觉得是');
      await defender.print_and_wait('意外自然的动作呢……');
      await defender.print_and_wait(
        '在双手扶起肉棒之后，脑袋就会不知不觉地凑过去。',
      );
      await defender.print_and_wait('用指间的体温去暖化，搓开，然后……');
      await defender.say_and_wait('啾～');
      await defender.print_and_wait('超浓厚……');
    } else {
      await defender.print_and_wait(
        '把肉棒拨弄到一边，然后侧过头去从上至下细细地舔舐，像是对待边角已融化滴落的雪糕。',
      );
      await defender.say_and_wait('呲溜呲溜——');
      await defender.print_and_wait([
        d_call_a,
        ' 的龟头变得亮晶晶的，上面泛着光的水渍到底是谁的错多一些呢……',
      ]);
      await defender.print_and_wait('变得完全……弄不明白了……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async force_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('不由自主地便变成了蹲姿。');
      await defender.print_and_wait(
        '有些不可思议……明明没有听见明确的要求，身体却完全明白接下来该做些什么。',
      );
      era.println();
      await defender.print_and_wait('总觉得是');
      await defender.print_and_wait('意外自然的动作呢……');
      await defender.print_and_wait(
        '在双手扶起肉棒之后，脑袋就会不知不觉地凑过去。',
      );
      await defender.print_and_wait('用指间的体温去暖化，搓开，然后……');
      await defender.say_and_wait('啾～');
      await defender.print_and_wait('超浓厚……');
    } else {
      await defender.print_and_wait(
        '把肉棒拨弄到一边，然后侧过头去从上至下细细地舔舐，像是对待边角已融化滴落的雪糕。',
      );
      await defender.say_and_wait('呲溜呲溜——');
      await defender.print_and_wait([
        d_call_a,
        ' 的龟头变得亮晶晶的，上面泛着光的水渍到底是谁的错多一些呢……',
      ]);
      await defender.print_and_wait('变得完全……弄不明白了……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('不觉得很棒吗。');
      await defender.print_and_wait([
        '这份 ',
        d_call_a,
        ' 俯低在自己身下，用手捧起独属于少女的柔软将滚烫的肉棒围起的姿态……',
      ]);
      await attacker.say_and_wait('唔……');
      await defender.print_and_wait(
        '好像有好好地传达到呢，从肉棒的龟头向上升腾起的，满载着爱欲的热腾腾白汽。',
      );
      await defender.print_and_wait([
        '用手帮着身下的 ',
        d_call_a,
        ' 抬起头来。',
      ]);
      await defender.print_and_wait('嗯，已经熏制成相当美味的表情了。');
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        '能感觉到，',
        a_call_d,
        ' 的腰在往后弓。',
      ]);
      if (attacker.race > 0) {
        await attacker.print_and_wait(
          '敏感的马耳朵正被从上方吐出的紊乱热气呼呼吹拂着。',
        );
      }
      await attacker.print_and_wait(
        '被柔软包裹着的肉棒也是，挺立成了能轻易叫小穴发颤的形状。',
      );
      await attacker.print_and_wait(
        '不知想到了什么，心咚咚地跳着。但是这也只是所谓的「盲人摸象」吧……',
      );
      await attacker.print_and_wait([
        '于是 ',
        attacker.get_colored_name(),
        ' 向上抬头。',
      ]);
      await attacker.print_and_wait('果然是，野兽一样的表情……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        '用热烈到能让面前 ',
        a_call_d,
        ' 的乳头发烫立起目光，拜托似的直勾勾盯着。',
      ]);
      await attacker.print_and_wait([
        '对面的 ',
        a_call_d,
        ' 果然招架不住败下阵来了好诶。',
      ]);
      await defender.say_and_wait('……');
      era.println();
      await attacker.print_and_wait('不觉得很棒吗。');
      await attacker.print_and_wait([
        '这份 ',
        a_call_d,
        ' 俯低在自己身下，用手捧起独属于少女的柔软将滚烫的肉棒围起的姿态……',
      ]);
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '好像有好好地传达到呢，从肉棒的龟头向上升腾起的，满载着爱欲的热腾腾白汽。',
      );
      await attacker.print_and_wait([
        '用手帮着身下的 ',
        a_call_d,
        ' 抬起头来。',
      ]);
      await attacker.print_and_wait('嗯，已经熏制成相当美味的表情了。');
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        '能感觉到，',
        d_call_a,
        ' 的腰在往后弓。',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          '敏感的马耳朵正被从上方吐出的紊乱热气呼呼吹拂着。',
        );
      }
      await defender.print_and_wait(
        '被柔软包裹着的肉棒也是，挺立成了能轻易叫小穴发颤的形状。',
      );
      await defender.print_and_wait(
        '不知想到了什么，心咚咚地跳着。但是这也只是所谓的「盲人摸象」吧……',
      );
      await defender.print_and_wait([
        '于是 ',
        defender.get_colored_name(),
        ' 向上抬头。',
      ]);
      await defender.print_and_wait('果然是，野兽一样的表情……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async fuck_tit(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        '迫不及待地摇晃起腰来，比起冷冰冰的空气，眼前 ',
        a_call_d,
        ' 的身上无疑有着更适合肉棒待的妙处。',
      ]);
      await attacker.print_and_wait('你明白的吧。');
      await attacker.print_and_wait(
        '不需要无谓的沟通，只是用眼神将不可动摇的指令传达。',
      );
      era.println();
      await attacker.print_and_wait('不觉得很棒吗。');
      await attacker.print_and_wait([
        '这份 ',
        a_call_d,
        ' 俯低在自己身下，用手捧起独属于少女的柔软将滚烫的肉棒围起的姿态……',
      ]);
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '好像有好好地传达到呢，从肉棒的龟头向上升腾起的，满载着爱欲的热腾腾白汽。',
      );
      await attacker.print_and_wait([
        '用手帮着身下的 ',
        a_call_d,
        ' 抬起头来。',
      ]);
      await attacker.print_and_wait('嗯，已经熏制成相当美味的表情了。');
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        '能感觉到，',
        d_call_a,
        ' 的腰在往后弓。',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          '敏感的马耳朵正被从上方吐出的紊乱热气呼呼吹拂着。',
        );
      }
      await defender.print_and_wait(
        '被柔软包裹着的肉棒也是，挺立成了能轻易叫小穴发颤的形状。',
      );
      await defender.print_and_wait(
        '不知想到了什么，心咚咚地跳着。但是这也只是所谓的「盲人摸象」吧……',
      );
      await defender.print_and_wait([
        '于是 ',
        defender.get_colored_name(),
        ' 向上抬头。',
      ]);
      await defender.print_and_wait('果然是，野兽一样的表情……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('真是的……就这么喜欢胸部吗……');
      await attacker.print_and_wait(
        '简直像是甜品上的奶油一样，挤在哪里都觉得美味……',
      );
      await attacker.say_and_wait('吸溜吸溜吸溜……');
      await attacker.print_and_wait([
        '乳肉被滴落在肉棒竿身上先走汁涂抹得滑腻腻亮晶晶的，但比起辛苦的欧派，最为滚烫而饱满的龟头却被 ',
        attacker.get_colored_name(),
        ' 用双手迎进了口中。',
      ]);
      await attacker.say_and_wait('唔……');
      await attacker.print_and_wait(
        '舌头开始不听使唤了，但只是感受到口上的龟头感到了一点点的寂寞，簇拥着乳头侍奉讨好肉棒的动作便没法停下……',
      );
    } else {
      await attacker.say_and_wait('吸溜吸溜……');
      await attacker.print_and_wait(
        '不管尝上多少遍，都很难觉得这称得上是所谓的美味……咸腥的同时下流的味道直窜进脑袋……',
      );
      await attacker.print_and_wait('但是……');
      await attacker.print_and_wait('但是…………');
      await attacker.print_and_wait('但是………………');
      await attacker.say_and_wait(
        ['为什么动作还没停下来呢……不论是我还是 ', a_call_d, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_tit_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        d_call_a,
        ' 从乳肉中冒出头的龟头有些没精打采的样子。',
      ]);
      await defender.print_and_wait('而且本人也很好懂地正合起掌拜托。');
      await defender.print_and_wait('真是的……就这么喜欢胸部吗……');
      await defender.print_and_wait(
        '简直像是甜品上的奶油一样，挤在哪里都觉得美味……',
      );
      await defender.say_and_wait('吸溜吸溜吸溜……');
      await defender.print_and_wait([
        '乳肉被滴落在肉棒竿身上先走汁涂抹得滑腻腻亮晶晶的，但比起辛苦的欧派，最为滚烫而饱满的龟头却被 ',
        defender.get_colored_name(),
        ' 用双手迎进了口中。',
      ]);
      await defender.say_and_wait('唔……');
      await defender.print_and_wait(
        '舌头开始不听使唤了，但只是感受到口上的龟头感到了一点点的寂寞，簇拥着乳头侍奉讨好肉棒的动作便没法停下……',
      );
    } else {
      await defender.say_and_wait('吸溜吸溜……');
      await defender.print_and_wait(
        '不管尝上多少遍，都很难觉得这称得上是所谓的美味……咸腥的同时下流的味道直窜进脑袋……',
      );
      await defender.print_and_wait('但是……');
      await defender.print_and_wait('但是…………');
      await defender.print_and_wait('但是………………');
      await defender.say_and_wait(
        ['为什么动作还没停下来呢……不论是我还是 ', d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async fuck_tit_and_mouth(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('什么……！？');
      await defender.print_and_wait(
        '似乎完全没有倾听这边意愿的打算，而只是粗暴地实现自己的所想。',
      );
      await defender.print_and_wait('真是的……就这么喜欢胸部吗……');
      await defender.print_and_wait(
        '简直像是甜品上的奶油一样，挤在哪里都觉得美味……',
      );
      await defender.say_and_wait('吸溜吸溜吸溜……');
      await defender.print_and_wait([
        '乳肉被滴落在肉棒竿身上先走汁涂抹得滑腻腻亮晶晶的，但比起辛苦的欧派，最为滚烫而饱满的龟头却被 ',
        defender.get_colored_name(),
        ' 用双手迎进了口中。',
      ]);
      await defender.say_and_wait('唔……');
      await defender.print_and_wait(
        '舌头开始不听使唤了，但只是感受到口上的龟头感到了一点点的寂寞，簇拥着乳头侍奉讨好肉棒的动作便没法停下……',
      );
    } else {
      await defender.say_and_wait('吸溜吸溜……');
      await defender.print_and_wait(
        '不管尝上多少遍，都很难觉得这称得上是所谓的美味……咸腥的同时下流的味道直窜进脑袋……',
      );
      await defender.print_and_wait('但是……');
      await defender.print_and_wait('但是…………');
      await defender.print_and_wait('但是………………');
      await defender.say_and_wait(
        ['为什么动作还没停下来呢……不论是我还是 ', d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * 吸乳头，同时也是喂奶的地文
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方，但如果是喂奶则是被动方
   * @param {CharaTalk} defender 被动方，但如果是喂奶则是主动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async suck_nipple(attacker, defender, a_call_d) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('啾——');
      await attacker.print_and_wait(
        '眼前的白腻与玫红本能地想要躲开，但舌头可不是这么容易就能满足的东西。',
      );
      await attacker.print_and_wait([
        defender.teen_sex_title,
        '的柔软左右闪躲，最终认命般的乖乖停留在了舌尖。',
      ]);
      await attacker.say_and_wait('吸——');
      await attacker.print_and_wait(
        '渐渐地，在舌尖兀自发着烫的红点有了硬挺的实感，于是小心用齿间将那肉粒衔住，咻地一吸——',
      );
      await defender.say_and_wait('唔——！');
      await attacker.print_and_wait([
        a_call_d,
        ' 身体的分量立刻沉甸甸地压了过来。',
      ]);
      await attacker.print_and_wait('大概是腿发软了吧。');
    } else {
      await attacker.print_and_wait('不会觉得很羞耻吗？');
      await attacker.print_and_wait([
        '被用膝枕侍奉着，将',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '能漏出奶汁的' : '白皙',
        '乳肉俯到自己面前。',
      ]);
      await attacker.print_and_wait(
        '而且大概是因为自己的错，那颜色分外妖艳的乳头已肿胀成方便吮吸的纤长形状……',
      );
      await attacker.print_and_wait('……所以真的不会为此而且羞耻吗？');
      await attacker.print_and_wait('完全不会。');
      await attacker.print_and_wait('舒服地眯起眼，张口衔住那嫣红的乳粒一吮。');
      if (era.get(`talent:${defender.id}:泌乳`) > 0) {
        await attacker.print_and_wait('「噗咻咻咻咻咻——」');
        await attacker.print_and_wait([
          `虽然看不见，但脑袋里已全是，那第一次流出乳汁时，从 `,
          a_call_d,
          ` 羞红的表情下，由白腻乳肉中喷射出的一条纤细却又连续，叫人的目光不由得追随上去的优美抛物线……`,
        ]);
        await attacker.print_and_wait('而且有点甜。');
      }
    }
  },
  /**
   * 咬乳头，同时也是请求咬乳头的地文
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方，但如果是请求咬乳头则是被动方
   * @param {CharaTalk} defender 被动方，但如果是请求咬乳头则是主动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      `在用齿间将硬邦邦的乳粒衔入口上的那一刻，怀中的 `,
      a_call_d,
      ` 身体一下子便僵硬了。`,
    ]);
    await attacker.print_and_wait('诶……是吗……');
    await attacker.print_and_wait([
      '轻轻地活用着牙齿，绕着敏感的乳头留下一圈参差的红痕……顺便让怀中的',
      defender.teen_sex_title,
      '身体不住地颤抖……',
    ]);
    await attacker.print_and_wait([
      '大概是明白了这边接下来的目标吧，在乳头被舌细细舔舐润滑的瞬间，',
      defender.get_colored_name(),
      ' 伸出双手搂进了 ',
      attacker.get_colored_name(),
      ' 的腰……',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('很可爱。');
    await attacker.print_and_wait([
      '不止在说怀里的 ',
      a_call_d,
      '，还有那留满了红肿痕迹的乳头。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_milk_and_hand_job(
    attacker,
    defender,
    is_first,
    a_call_d,
    d_call_a,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        '因为眼前全是 ',
        a_call_d,
        ' 白皙的肌肤与乳肉，很遗憾没能看清如今一定很美味的表情。',
      ]);
      await attacker.print_and_wait([
        '连在舌尖被挑逗着舞动的乳头都连带着感到一瞬间的索然无味，但 ',
        attacker.get_colored_name(),
        ' 随即便找到了新的投以注意力的方向。',
      ]);
      await attacker.print_and_wait('那么到底是怎样的表情呢。');
      await attacker.print_and_wait([
        '被吮吸',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '母乳' : '乳头',
        '的快感拖向下流彼端的失神与挣扎颜……为掌中跃动着的滚烫肉棒感到难以适从的羞涩颜……又或是，已经完全沉浸入其中的下流享受表情呢……',
      ]);
      await defender.say_and_wait('诶！？');
      await attacker.print_and_wait([
        '这注定是个没有答案的问题，不过 ',
        attacker.get_colored_name(),
        ' 被 ',
        a_call_d,
        ' 的指间艰难包裹住的肉棒却突然反常地高高挺起。',
      ]);
    } else {
      await defender.print_and_wait('不知道是否该为这样的自己感到高兴……');
      await defender.print_and_wait([
        '能通过被含着的',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? '漏奶' : '',
        '乳头旁，那舌头的动作依稀看见 ',
        d_call_a,
        ' 的表情。',
      ]);
      await defender.print_and_wait(
        '能通过掌中肉棒的烫手温度与胀起的筋络依稀在脑中描摹出肉棒现在的样子。',
      );
      await defender.print_and_wait('哈……请要负起责任来呀……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async milk_and_hand_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('很好懂的吧');
      await defender.print_and_wait(
        '在被邀请着躺进膝枕哺乳后，高高立起的股间。',
      );
      await defender.print_and_wait('很好懂的对吧……');
      await defender.print_and_wait([
        '因为眼前全是 ',
        d_call_a,
        ' 白皙的肌肤与乳肉，很遗憾没能看清如今一定很美味的表情。',
      ]);
      await defender.print_and_wait([
        '连在舌尖被挑逗着舞动的乳头都连带着感到一瞬间的索然无味，但 ',
        defender.get_colored_name(),
        ' 随即便找到了新的投以注意力的方向。',
      ]);
      await defender.print_and_wait('那么到底是怎样的表情呢。');
      await defender.print_and_wait([
        '被吮吸',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? '母乳' : '乳头',
        '的快感拖向下流彼端的失神与挣扎颜……为掌中跃动着的滚烫肉棒感到难以适从的羞涩颜……又或是，已经完全沉浸入其中的下流享受表情呢……',
      ]);
      await attacker.say_and_wait('诶！？');
      await defender.print_and_wait([
        '这注定是个没有答案的问题，不过 ',
        defender.get_colored_name(),
        ' 被 ',
        d_call_a,
        ' 的指间艰难包裹住的肉棒却突然反常地高高挺起。',
      ]);
    } else {
      await attacker.print_and_wait('不知道是否该为这样的自己感到高兴……');
      await attacker.print_and_wait([
        '能通过被含着的',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? '漏奶' : '',
        '乳头旁，那舌头的动作依稀看见 ',
        a_call_d,
        ' 的表情。',
      ]);
      await attacker.print_and_wait(
        '能通过掌中肉棒的烫手温度与胀起的筋络依稀在脑中描摹出肉棒现在的样子。',
      );
      await attacker.print_and_wait('哈……请要负起责任来呀……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('真的插进去了。');
      await defender.print_and_wait([
        '把肉棒……插入 ',
        d_call_a,
        ' 合拢的大腿肉之间。',
      ]);
      await defender.print_and_wait('很柔软，很温润，很棒，很棒，很棒……');
      await defender.print_and_wait('微微交错的双腿是在害羞吧……');
      await defender.print_and_wait(
        '不只是柔软，作为平时的成果，肉棒正被结实地支撑着。',
      );
      await defender.print_and_wait([
        '像是发情的猴子一样，',
        defender.get_colored_name(),
        ' 的肉棒狂热地在 ',
        d_call_a,
        ' 的股间前后蹭弄着。',
      ]);
    } else {
      await defender.print_and_wait('变得滑溜溜亮晶晶的。');
      await defender.print_and_wait('变得有些熟练。');
      await defender.print_and_wait('变得无法乖乖忍耐。');
      await defender.print_and_wait('变得……有些寂寞了吗……');
      await attacker.say_and_wait([a_call_d, '……']);
      await defender.print_and_wait('眼神也……湿漉漉的……');
      await defender.print_and_wait('双腿被这么使用果然会变成这样啊。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ['知道自己在说些什么吗……', d_call_a, '……'],
        true,
      );
      if (!attacker.id && defender.race > 0) {
        await defender.say_and_wait(
          `啊……啊……原来是这么看待的啊，自家担当的双腿。`,
          true,
        );
      }
      await attacker.print_and_wait('真的插进去了。');
      await attacker.print_and_wait([
        '把肉棒……插入 ',
        a_call_d,
        ' 合拢的大腿肉之间。',
      ]);
      await attacker.print_and_wait('很柔软，很温润，很棒，很棒，很棒……');
      await attacker.print_and_wait('微微交错的双腿是在害羞吧……');
      await attacker.print_and_wait(
        '不只是柔软，作为平时的成果，肉棒正被结实地支撑着。',
      );
      await attacker.print_and_wait([
        '像是发情的猴子一样，',
        attacker.get_colored_name(),
        ' 的肉棒狂热地在 ',
        a_call_d,
        ' 的股间前后蹭弄着。',
      ]);
    } else {
      await attacker.print_and_wait('变得滑溜溜亮晶晶的。');
      await attacker.print_and_wait('变得有些熟练。');
      await attacker.print_and_wait('变得无法乖乖忍耐。');
      await attacker.print_and_wait('变得……有些寂寞了吗……');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait('眼神也……湿漉漉的……');
      await attacker.print_and_wait('双腿被这么使用果然会变成这样啊。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first) {
      await era.printAndWait('黏黏糊糊的身体叠在了一起。');
      await era.printAndWait('唇抵上了穴，唇也抵上了肉棒。');
      await era.printAndWait('咸腥的汁液在二人的身体里转上了圈……像野兽一样');
      await era.printAndWait(
        '不知是哪一方先开始的，刻意地吸吮舔弄出呲溜呲溜的淫靡动静，叫另一方也有样学样的跟上。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: '呲溜呲溜' },
        { color: defender.color, content: '唔唔唔呲溜……' },
        '……」',
      ]);
      await era.printAndWait('彼此正依偎的身体正在发烫。');
      await era.printAndWait('烫到叫人意乱情迷……');
    } else {
      await era.printAndWait('原本清纯的一线穴瓣被舔舐成了绽开的松弛模样。');
      await era.printAndWait(
        '原本狰狞的充血肉棒因为那雀跃的小舌已被踱上了层可爱的亮光。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: '哈……' },
        { color: defender.color, content: '哈……' },
        '……」',
      ]);
      await era.printAndWait(
        '两具汗湿的身体抵在一起磨蹭着，贪恋着这难得的休战时刻……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async armpit_intercourse(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('差劲。');
      await defender.print_and_wait([
        '能从面前高抬起手的 ',
        d_call_a,
        ' 那害羞摇晃着的屁股中读出这样的抱怨。',
      ]);
      await defender.print_and_wait('不过这也是没办法的事。');
      await attacker.say_and_wait('唔——');
      await defender.print_and_wait([
        d_call_a,
        ' 的腋下，正被肉棒硕大的龟头清洗着。',
      ]);
      await defender.print_and_wait(
        '冒着热气的腋肉随着抽插泛出些绯色，似乎真变成了与性相关的色情器官……',
      );
      await defender.print_and_wait([
        '并没能完全将这视为理所应当的事，',
        defender.get_colored_name(),
        ' 的动作带着几分犹豫……',
      ]);
      await defender.print_and_wait([
        '……犹豫地用肉棒磨蹭抽插着正背对着自己的 ',
        d_call_a,
        ' 的腋下穴……',
      ]);
    } else {
      await attacker.print_and_wait('感觉……变得有些奇怪……');
      await attacker.print_and_wait('腋下，原来是用来做这种事的器官吗……');
      await attacker.print_and_wait('而且，原来能体会到这样的触感嘛……');
      await attacker.print_and_wait([
        '似乎被肉棒的侵染确实地改变着什么，满面绯红的 ',
        attacker.get_colored_name(),
        ' 不安地侍奉着已呲溜呲溜驾轻就熟的肉棒先生。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('诶？');
      await attacker.print_and_wait('能再说一遍吗……');
      await attacker.print_and_wait([
        '面前 ',
        a_call_d,
        ' 有些勉强的表情正无声地催促着，于是……',
      ]);
      await attacker.say_and_wait('请让我用肉棒蹭蹭腋下吧！');
      await defender.say_and_wait('……');
      await attacker.print_and_wait('差劲。');
      await attacker.print_and_wait([
        '能从面前高抬起手的 ',
        a_call_d,
        ' 那害羞摇晃着的屁股中读出这样的抱怨。',
      ]);
      await attacker.print_and_wait('不过这也是没办法的事。');
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait([
        a_call_d,
        ' 的腋下，正被肉棒硕大的龟头清洗着。',
      ]);
      await attacker.print_and_wait(
        '冒着热气的腋肉随着抽插泛出些绯色，似乎真变成了与性相关的色情器官……',
      );
      await attacker.print_and_wait([
        '并没能完全将这视为理所应当的事，',
        attacker.get_colored_name(),
        ' 的动作带着几分犹豫……',
      ]);
      await attacker.print_and_wait([
        '……犹豫地用肉棒磨蹭抽插着正背对着自己的 ',
        a_call_d,
        ' 的腋下穴……',
      ]);
    } else {
      await defender.print_and_wait('感觉……变得有些奇怪……');
      await defender.print_and_wait('腋下，原来是用来做这种事的器官吗……');
      await defender.print_and_wait('而且，原来能体会到这样的触感嘛……');
      await defender.print_and_wait([
        '似乎被肉棒的侵染确实地改变着什么，满面绯红的 ',
        defender.get_colored_name(),
        ' 不安地侍奉着已呲溜呲溜驾轻就熟的肉棒先生。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '被拽着仰起手臂的 ',
        a_call_d,
        '，此刻在想些什么呢…',
      ]);
      await attacker.print_and_wait('大概不会是什么好话吧……');
      await attacker.print_and_wait('差劲。');
      await attacker.print_and_wait([
        '能从面前高抬起手的 ',
        a_call_d,
        ' 那害羞摇晃着的屁股中读出这样的抱怨。',
      ]);
      await attacker.print_and_wait('不过这也是没办法的事。');
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait([
        a_call_d,
        ' 的腋下，正被肉棒硕大的龟头清洗着。',
      ]);
      await attacker.print_and_wait(
        '冒着热气的腋肉随着抽插泛出些绯色，似乎真变成了与性相关的色情器官……',
      );
      await attacker.print_and_wait([
        '并没能完全将这视为理所应当的事，',
        attacker.get_colored_name(),
        ' 的动作带着几分犹豫……',
      ]);
      await attacker.print_and_wait([
        '……犹豫地用肉棒磨蹭抽插着正背对着自己的 ',
        a_call_d,
        ' 的腋下穴……',
      ]);
    } else {
      await defender.print_and_wait('感觉……变得有些奇怪……');
      await defender.print_and_wait('腋下，原来是用来做这种事的器官吗……');
      await defender.print_and_wait('而且，原来能体会到这样的触感嘛……');
      await defender.print_and_wait([
        '似乎被肉棒的侵染确实地改变着什么，满面绯红的 ',
        defender.get_colored_name(),
        ' 不安地侍奉着已呲溜呲溜驾轻就熟的肉棒先生。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async foot_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('会露出笑容的吧。');
      await defender.print_and_wait([
        '当 ',
        attacker.get_colored_name(),
        ' ',
        defender.race > 0 ? '用那双赛场上飞驰的双足' : '',
        '踏上眼前的肉棒，发现那根坏家伙正兴奋地反而将足底托起时，肯定会露出笑容的吧。',
      ]);
      await defender.print_and_wait(
        '看见下流东西时厌恶而轻蔑的笑……对性癖奇怪的恋人露出的饶有兴致的包容的笑……天真无邪仅是对此感到有趣而笑……',
      );
      await defender.print_and_wait([
        '面前的 ',
        d_call_a,
        ' 属于哪一种呢…总之是能让肉棒更加兴奋起来的那一种吧。',
      ]);
    } else {
      await defender.print_and_wait('大概是察觉到了。');
      await defender.print_and_wait(
        '正侵犯着自己足底的这根肉棒不是脆弱的东西。',
      );
      await defender.print_and_wait([
        d_call_a,
        ' 踩踏肉棒的动作变得自然了许多。',
      ]);
      await defender.print_and_wait([
        '仿佛将 ',
        defender.get_colored_name(),
        ' 的肉棒踩在足底是什么与生俱来的天赋般。',
      ]);
      await defender.print_and_wait('嘶……');
      await defender.print_and_wait([
        '只是单纯地联想，',
        defender.get_colored_name(),
        ' 便又感到小腹热起来了。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('……果然？');
      await attacker.print_and_wait([
        '明明听见了出格的下流请求，面前的 ',
        a_call_d,
        ' 却露出了一份有所预料的余裕表情。',
      ]);
      await attacker.print_and_wait('原来……暴露的这么明显吗……');
      await attacker.print_and_wait('会露出笑容的吧。');
      await attacker.print_and_wait([
        '当 ',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? '用那双赛场上飞驰的双足' : '',
        '踏上眼前的肉棒，发现那根坏家伙正兴奋地反而将足底托起时，肯定会露出笑容的吧。',
      ]);
      await attacker.print_and_wait(
        '看见下流东西时厌恶而轻蔑的笑……对性癖奇怪的恋人露出的饶有兴致的包容的笑……天真无邪仅是对此感到有趣而笑……',
      );
      await attacker.print_and_wait([
        '面前的 ',
        a_call_d,
        ' 属于哪一种呢…总之是能让肉棒更加兴奋起来的那一种吧。',
      ]);
    } else {
      await attacker.print_and_wait('大概是察觉到了。');
      await attacker.print_and_wait(
        '正侵犯着自己足底的这根肉棒不是脆弱的东西。',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' 踩踏肉棒的动作变得自然了许多。',
      ]);
      await attacker.print_and_wait([
        '仿佛将 ',
        attacker.get_colored_name(),
        ' 的肉棒踩在足底是什么与生俱来的天赋般。',
      ]);
      await attacker.print_and_wait('嘶……');
      await attacker.print_and_wait([
        '只是单纯地联想，',
        attacker.get_colored_name(),
        ' 便又感到小腹热起来了。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '因为对这种要求感到不满，所以扭过脸去不看这边也很正常吧。',
      );
      await attacker.print_and_wait(
        '不过在这边的业界，踩的时候把头扭向另一边可是奖励哦。',
      );
      await attacker.print_and_wait('啊……看过来了……');
      await attacker.print_and_wait('会露出笑容的吧。');
      await attacker.print_and_wait([
        '当 ',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? '用那双赛场上飞驰的双足' : '',
        '踏上眼前的肉棒，发现那根坏家伙正兴奋地反而将足底托起时，肯定会露出笑容的吧。',
      ]);
      await attacker.print_and_wait(
        '看见下流东西时厌恶而轻蔑的笑……对性癖奇怪的恋人露出的饶有兴致的包容的笑……天真无邪仅是对此感到有趣而笑……',
      );
      await attacker.print_and_wait([
        '面前的 ',
        a_call_d,
        ' 属于哪一种呢…总之是能让肉棒更加兴奋起来的那一种吧。',
      ]);
    } else {
      await attacker.print_and_wait('大概是察觉到了。');
      await attacker.print_and_wait(
        '正侵犯着自己足底的这根肉棒不是脆弱的东西。',
      );
      await attacker.print_and_wait([
        a_call_d,
        ' 踩踏肉棒的动作变得自然了许多。',
      ]);
      await attacker.print_and_wait([
        '仿佛将 ',
        attacker.get_colored_name(),
        ' 的肉棒踩在足底是什么与生俱来的天赋般。',
      ]);
      await attacker.print_and_wait('嘶……');
      await attacker.print_and_wait([
        '只是单纯地联想，',
        attacker.get_colored_name(),
        ' 便又感到小腹热起来了。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async tail_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('灵活……');
      await defender.print_and_wait([
        '以提出要求的 ',
        defender.get_colored_name(),
        ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
      ]);
      await defender.print_and_wait('以这个角度看见的屁股也别有风味。');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          '隐约能嗅见的，长长的马尾巴不可避免沾染上的女孩子的味道，让 ',
          defender.get_colored_name(),
          ' 的肉棒前所未有的兴奋着。',
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        '……而大约是感受到了这份暴涨的热度，背过身的 ',
        d_call_a,
        ' 连泛红的耳朵的动作都变得可爱起来。',
      ]);
    } else {
      await defender.print_and_wait('动作正变得粗暴……或者说是熟练。');
      await defender.print_and_wait(
        '毕竟尾巴在被淫靡的汁液刷得黏糊糊之后，总能从这让毛发亮晶晶的保养品中领会到什么的。',
      );
      await defender.print_and_wait('比如这根肉棒喜欢的缠绕的力度。');
      await defender.print_and_wait('比如这根肉棒被搔到会发颤的位置。');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          '比如，尾巴下的小穴是否也需要更多……更激烈的……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async ask_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('唉……');
      await attacker.print_and_wait([
        '几乎能听见面前 ',
        a_call_d,
        ' 的长叹声。',
      ]);
      await attacker.print_and_wait('是不是有些过分了呢……');
      await attacker.print_and_wait([
        '似乎有在把持不住的自己进行反省，但此刻 ',
        attacker.get_colored_name(),
        ' 依旧直勾勾地看着面前的 ',
        a_call_d,
        '。',
      ]);
      await attacker.print_and_wait('灵活……');
      await attacker.print_and_wait([
        '以提出要求的 ',
        attacker.get_colored_name(),
        ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
      ]);
      await attacker.print_and_wait('以这个角度看见的屁股也别有风味。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          '隐约能嗅见的，长长的马尾巴不可避免沾染上的女孩子的味道，让 ',
          attacker.get_colored_name(),
          ' 的肉棒前所未有的兴奋着。',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……而大约是感受到了这份暴涨的热度，背过身的 ',
        a_call_d,
        ' 连泛红的耳朵的动作都变得可爱起来。',
      ]);
    } else {
      await attacker.print_and_wait('动作正变得粗暴……或者说是熟练。');
      await attacker.print_and_wait(
        '毕竟尾巴在被淫靡的汁液刷得黏糊糊之后，总能从这让毛发亮晶晶的保养品中领会到什么的。',
      );
      await attacker.print_and_wait('比如这根肉棒喜欢的缠绕的力度。');
      await attacker.print_and_wait('比如这根肉棒被搔到会发颤的位置。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          '比如，尾巴下的小穴是否也需要更多……更激烈的……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('意外的沉默？');
      await attacker.print_and_wait([
        '大约是对于 ',
        attacker.get_colored_name(),
        ' 下流的性癖已有了些心理预期，',
        a_call_d,
        ' 这次表现得意外的顺从。',
      ]);
      await attacker.print_and_wait('灵活……');
      await attacker.print_and_wait([
        '以提出要求的 ',
        attacker.get_colored_name(),
        ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
      ]);
      await attacker.print_and_wait('以这个角度看见的屁股也别有风味。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          '隐约能嗅见的，长长的马尾巴不可避免沾染上的女孩子的味道，让 ',
          attacker.get_colored_name(),
          ' 的肉棒前所未有的兴奋着。',
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '……而大约是感受到了这份暴涨的热度，背过身的 ',
        a_call_d,
        ' 连泛红的耳朵的动作都变得可爱起来。',
      ]);
    } else {
      await attacker.print_and_wait('动作正变得粗暴……或者说是熟练。');
      await attacker.print_and_wait(
        '毕竟尾巴在被淫靡的汁液刷得黏糊糊之后，总能从这让毛发亮晶晶的保养品中领会到什么的。',
      );
      await attacker.print_and_wait('比如这根肉棒喜欢的缠绕的力度。');
      await attacker.print_and_wait('比如这根肉棒被搔到会发颤的位置。');
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          '比如，尾巴下的小穴是否也需要更多……更激烈的……',
        );
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('呜——');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 半蹲在地，看着面前那熟悉的人影，心里却不禁产生了些许恐惧。',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' 玩味地笑着，挺起腰胯，向 ',
        attacker.get_colored_name(),
        ' 逼近。',
      ]);
      await attacker.print_and_wait([
        '一个温热的棍状物体带着不容抗拒的意识挺向了的额头，',
        attacker.get_colored_name(),
        ' 吞了口唾沫，主动抬头相迎，小心地用手指带起自己的头发，缠住了刺来的长枪，开始作业。',
      ]);
    } else {
      await attacker.print_and_wait('沙沙……');
      await attacker.print_and_wait('手掌和头发反复揉搓着那东西。');
      await attacker.print_and_wait('这种触感……那东西……还在膨胀……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 感觉发梢痒痒的，呼吸也变得粗重起来。',
      ]);
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async ask_hair_fuck(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([d_call_a, '……？']);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 带着夹杂了期待与害羞的神情微微抬首，头顶感受到了一个热热的，比其看上去要沉重（是心理原因吗？）的物体，如此近的距离，如此浓厚的荷尔蒙气息，将用来处理信息和思考的大脑全部搅乱。',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 蹲坐在 ',
            attacker.get_colored_name(),
            ' 胯下，面容不由自主地变得下流起来……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 不禁露出了微笑。伸出双手，轻轻放在',
            defender.sex,
            '的两只耳旁，温柔地扶住头部……然后抽动起了自己的腰。',
          ]);
          await attacker.print_and_wait([
            '下体在发间穿梭，将修建齐整的短发弄得凌乱不堪，清理出一片自己运动的路径。毛发和皮肤摩擦刺激使那关键部位的前端流出汁水，运动起来更为顺畅。液体从顶部划下，流到已经神志不清，娇喘着的',
            defender.phy_sex_title,
            '睫毛上，再向下滴落……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 看着如此场景，感觉又硬了几分。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('你想……这么做？！');
          await attacker.print_and_wait([
            '坐在 ',
            attacker.get_colored_name(),
            ' 面前的 ',
            a_call_d,
            ' 以一种混杂了「变态啊」和「真拿你没辙」的语气说完，便叹了口气，轻甩了一下头，柔顺的秀发带着一股好闻的香气，撩上 ',
            attacker.get_colored_name(),
            ' 已经矗立在外的肉根，然后一停。',
          ]);
          await attacker.print_and_wait('该到自己了。');
          await attacker.print_and_wait([
            '将腰一挺，让自己的那玩意斜滑而下，到达颈侧，细密的头发和滑嫩的皮肤双重刺激让 ',
            attacker.get_colored_name(),
            ' 忍不住叹息一声。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '看 ',
            attacker.get_colored_name(),
            ' 这副模样，挑了挑眉，微微侧脖，抬起一只手轻摁在 ',
            attacker.get_colored_name(),
            ' 的那根东西上，三重受力把它夹在中间，多种感觉同时袭来，',
            attacker.get_colored_name(),
            ' 满足地呼出气来。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('呵呵……');
          await attacker.print_and_wait([
            a_call_d,
            ' 似笑非笑地看着 ',
            attacker.get_colored_name(),
            '，',
            attacker.get_colored_name(),
            ' 不禁有点心虚，但还是用肢体语言请求',
            defender.sex,
            '这么做。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '似乎是故意晾了 ',
            attacker.get_colored_name(),
            ' 几秒钟，随后将双手盘向身后，捋起长长的秀发，猛地一扬——',
          ]);
          await attacker.print_and_wait([
            '万千青丝落在了 ',
            attacker.get_colored_name(),
            ' 的敏感之处上，凉凉的，痒痒地，',
            attacker.get_colored_name(),
            ' 丝丝地吸了一口气，不，还没完——',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '掬着自己头发的手随之而到，十指合围，带发形成了一个卷，将 ',
            attacker.get_colored_name(),
            ' 的下体完全，细密地包裹住，随后开始撸动——',
          ]);
          await attacker.print_and_wait([
            '今次的刺激，对 ',
            attacker.get_colored_name(),
            ' 而言，或许太多了。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            '轻抚耳尖，并非感受其上绒毛在指尖的细腻，而是将其略弯，蹭到自己的宝贝上。',
          );
          await attacker.print_and_wait([
            '滑动，平时难以体验的身体毛发的刺激让 ',
            attacker.get_colored_name(),
            ' 性奋异常。',
          ]);
          await attacker.print_and_wait([
            '下面的',
            defender.phy_sex_title,
            '发出若有若无的喘息，更激起 ',
            attacker.get_colored_name(),
            ' 的欲望。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            '三个部位……三重触感……眼前的',
            defender.phy_sex_title,
            '主动为 ',
            attacker.get_colored_name(),
            ' 做出这种服务……',
          ]);
          await attacker.print_and_wait('天下没有比这更有感觉的事了。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 不禁微咧起嘴角，闭目享受。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait('如涓流而下的水幕，如柔转漫卷的轻纱。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 的那根东西，进了一个奇妙的穴中。',
          ]);
          await attacker.print_and_wait([
            '反复磨擦，',
            attacker.get_colored_name(),
            ' 不禁双腿一缩，有些许无色液体从肉根前端流出……',
          ]);
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('欸……唔！');
          await attacker.print_and_wait([
            '突如其然地，',
            attacker.get_colored_name(),
            ' 扳着面前这个',
            defender.phy_sex_title,
            '的脸，然后把自己温热充血的家伙放在了',
            defender.sex,
            '耳廓与头发的空隙间，轻晃',
            defender.sex,
            '的脑袋同时加速腰部抽动。被夹在肌肤于毛发中间反复摩擦的肉根立刻兴奋起来，开始膨胀。',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '还没有明白是怎么回事，便被迫放弃了思考，因为自己接受和处理外界信息的部位已经变成了 ',
            attacker.get_colored_name(),
            ' 下体驰骋之处。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('哈啊，等，等下！');
          await attacker.print_and_wait([
            '看到 ',
            attacker.get_colored_name(),
            ' 的眼神，',
            defender.sex,
            '仿佛知道接下来要发生什么，一手护在后脑，一手慌乱地摆着，不过，',
            attacker.get_colored_name(),
            ' 才不管。',
          ]);
          await attacker.print_and_wait([
            '大踏步贴近，摁住',
            defender.sex,
            '的肩，挺腰直进，把分身放入对',
            defender.phy_sex_title,
            '来说隐秘的后颈上，在顺滑光泽的发丝和光滑白嫩的皮肤间，快乐地滑动起来。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('好吧……如果你一定要的话', true);
          await attacker.print_and_wait([
            '一番对视，面前的',
            defender.phy_sex_title,
            '退缩了，',
            attacker.get_colored_name(),
            ' 带着胜利者的姿态开始享用战利品。',
          ]);
          await attacker.print_and_wait([
            '伸出惯用手，',
            attacker.get_colored_name(),
            ' 玩弄起',
            defender.sex,
            '秀丽且有淡淡香气的长发，坏笑一声，从中挑起一捧，粗暴地将',
            defender.phy_sex_title,
            '平日细心打理的东西缠在自己的那玩意上，同时轻轻地拉扯，让自己有一种别样的撸管快感。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            '纵横于胯下 ',
            a_call_d,
            ' 的私密之处，',
            attacker.get_colored_name(),
            ' 的肉根明显更加兴奋了。',
          ]);
          await attacker.print_and_wait([
            '被 ',
            attacker.get_colored_name(),
            ' 压在下方的 ',
            a_call_d,
            ' 神情已难以辨别……羞红的脸和耳根倒可一窥',
            defender.sex,
            '目前状态。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 舔了舔嘴角，磨蹭地更起劲了。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 在滑腻的肌肤上反复擦动……穿过轻抚分身的细丝发梢，享受肉体的美好感觉，以及精神上的征服满足。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            '平日被打理得整洁又柔顺的秀发被 ',
            attacker.get_colored_name(),
            ' 弄得乱起八糟。',
          ]);
          await attacker.print_and_wait([
            '阴毛和其中几根头发纠缠，将 ',
            attacker.get_colored_name(),
            ' 的雄性气息盖在',
            defender.sex,
            '的气味之上。',
          ]);
          await attacker.print_and_wait([
            '野蛮地运动着，野蛮地标记着……',
            attacker.get_colored_name(),
            ' 野蛮地拿',
            defender.sex,
            '的珍贵之物发泄着性欲。',
          ]);
      }
    }
  },
  /** 性交系 */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async missionary(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('或许这就是……最能感受彼此体温的姿势了吧。');
    if (is_anal_sex) {
      await defender.say_and_wait(
        '但是，就连那种小穴的温度都想记住吗…❤️',
        true,
      );
    }
    await defender.print_and_wait([
      '所谓的正常位，或叫做传教士位，如果从交缠的二人身前的方向望去的话，就像是 ',
      d_call_a,
      ' 扑进怀中吸吮母乳的姿态般。',
    ]);
    await defender.print_and_wait([
      d_call_a,
      ' 的身体盖住了 ',
      defender.get_colored_name(),
      ' 的身体，硬邦邦的肉棒毫不容赦地插入小穴，让 ',
      defender.get_colored_name(),
      ' 修长纤细的紧致长腿以有些狼狈的姿势从 ',
      d_call_a,
      ' 腰的两侧伸出，僵硬地绷直足底朝天……',
    ]);
    await defender.print_and_wait('好烫……好烫……');
    await defender.print_and_wait('……好烫❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async doggy_style(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('像小狗一样……');
    await attacker.print_and_wait(
      '那双腿……那双前脚掌紧绷着踮起，膝盖弯曲着将湿漉漉的腰跨高高顶起的双腿……',
    );
    await attacker.print_and_wait(
      '在那之上，被支撑起的是……像小狗一样不自觉地摇晃着的屁股。',
    );
    await attacker.print_and_wait([
      '被以煽情的姿态骑在身下的',
      defender.race > 0 ? '马耳朵' : '',
      defender.adult_sex_title,
      '，身体的发颤根本停不下来，让人看见后便不禁想舔润干裂的嘴唇。作为肉棒的媚药，让身后低喘的 ',
      attacker.get_colored_name(),
      ' 简直要将蛋也塞进去。',
    ]);
    if (is_anal_sex) {
      await attacker.print_and_wait(
        '……诶，这样的话，不也就能用屁股把蛋挤出来了嘛',
      );
      await attacker.print_and_wait('简直像是在说什么冷笑话啊嘶。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_vagina 是否是性交
   */
  async sitting(attacker, defender, d_call_a, is_vagina = true) {
    await defender.print_and_wait('比预想中还要令人害羞……');
    await defender.print_and_wait([
      '在',
      is_vagina ? '小穴' : '屁穴',
      '被厉害地捣弄着的同时，被直勾勾地看着……❤️',
    ]);
    await defender.print_and_wait([
      '明明已经被使坏的肉棒弄得全身软绵绵没有力气了，沐浴在 ',
      d_call_a,
      ' 的目光中却还能强撑着把腰挺直。',
    ]);
    await defender.print_and_wait([
      '仍由那含着笑容的目光，在绯红的脸上……',
      defender.sex_code !== 1 ? '一晃一晃的柔软欧派上……' : '',
      '微微显出隆起肉棒痕迹的小腹上…不知足地来回打量着……',
    ]);
    await defender.print_and_wait('难道说还没满足吗——');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async hug_sitting(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('为了不被看着而选择的姿势。');
    await defender.print_and_wait('但是这不是还在被看着嘛——');
    await defender.print_and_wait([
      '后仰着用后撑的双手手支起身体，',
      defender.get_colored_name(),
      ' 不自觉地扭动正吞吐着肉棒的屁股。',
    ]);
    await defender.print_and_wait([
      '随后悲叹似的发现背后 ',
      attacker.get_colored_name(),
      ' 发烫的视线果然又聚在了那上面……于是唯独没有被 ',
      d_call_a,
      ' 看见的小脸上，已露出了一副快要融化的下流表情。',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait('不妙❤️为什么偏偏被肉棒欺负的是那里……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async standing(attacker, defender, a_call_d, is_anal_sex = false) {
    await attacker.print_and_wait('好像能达到……比其他的姿势更接近子宫的位置。');
    await attacker.print_and_wait([
      '不自觉地深吸了一口气，',
      attacker.get_colored_name(),
      ' 前倾身体，与一条美腿高抬过头顶的 ',
      a_call_d,
      ' 依偎在一起。',
    ]);
    await attacker.print_and_wait([
      '两颗鼓鼓的睾丸紧贴在了穴口，被肉棒形状撑起的小腹也被与 ',
      attacker.get_colored_name(),
      ' 的小腹紧紧相贴。',
    ]);
    await defender.say_and_wait('呼……吸……❤️');
    if (is_anal_sex) {
      await defender.say_and_wait('明明还……隔着一层小穴不是吗❤️', true);
      await defender.say_and_wait('为什么……❤️', true);
    }
    await attacker.print_and_wait(
      '过近的距离，让二人每一次牵动小腹的深呼吸，都成了这场性爱的佐料。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async hug_standing(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('腰很快就塌下去了。');
    await attacker.print_and_wait([
      '明明是',
      defender.race > 0 ? defender.uma_sex_title : '大人',
      '，却失去了独自凭双足站稳的能力，变成扶着什么撅起屁股才能勉强站起的狼狈样子。',
    ]);
    await attacker.print_and_wait(
      '被冲撞成了与比赛和训练完全无关的内八站姿，前脚掌承担着过多的身体重要几乎要陷进地里，变得轻飘飘的后脚掌却随着肉棒的抽插高高踮起。',
    );
    await attacker.print_and_wait([
      '像是自发地匍匐于肉棒的身下般，',
      is_anal_sex ? '屁穴' : '小穴',
      '的主人膝盖前探，因为软弱的内八姿势两边的膝盖在肉棒深深插入时几乎要顶在一起，让汗湿的身体更加地摇摇晃晃……',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait(
        '不该是这样的……但是，但是这样的姿势，配上正在被肉棒挤开的屁股穴……太不妙了……',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async suspended_congress(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('逃不掉……');
    await defender.print_and_wait('从进入这个姿势开始，就逃不掉了。');
    await defender.print_and_wait([
      '身体被高高抬起，由 ',
      d_call_a,
      ' 托着屁股架在肉棒上。',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        '羞涩的屁股穴被强硬地做成肉棒套……但还不止这样……',
      );
    }
    await defender.print_and_wait([
      '从 ',
      d_call_a,
      ' 腰侧岔开的双腿只有是否环住腰这一点点自由。而为了不让身体完全落在肉棒上，双手更是只有紧搂着 ',
      d_call_a,
      ' 这一个选择。',
    ]);
    await defender.print_and_wait([
      '会沿着 ',
      d_call_a,
      ' 的腰向下流吗……绝对……会的吧❤️',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async hug_suspended_congress(
    attacker,
    defender,
    d_call_a,
    is_anal_sex = false,
  ) {
    await defender.print_and_wait('逃不掉……');
    await defender.print_and_wait('从进入这个姿势开始，就逃不掉了。');
    await defender.print_and_wait([
      '身体被高高抬起，由 ',
      d_call_a,
      ' 托着屁股架在肉棒上。',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        '羞涩的屁股穴被强硬地做成肉棒套……但还不止这样……',
      );
    }
    await defender.print_and_wait([
      '从 ',
      d_call_a,
      ' 腰侧岔开的双腿只有是否环住腰这一点点自由。而为了不让身体完全落在肉棒上，双手更是只有紧搂着 ',
      d_call_a,
      ' 这一个选择。',
    ]);
    await defender.print_and_wait([
      '会沿着 ',
      d_call_a,
      ' 的腰向下流吗……绝对……会的吧❤️',
    ]);
    await defender.print_and_wait([
      '哈……偏偏现在还看不清 ',
      d_call_a,
      ' 的表情。',
    ]);
    await defender.print_and_wait([
      '神情在粗重的喘息中逐渐变得恍惚，背对着 ',
      d_call_a,
      ' 的 ',
      defender.get_colored_name(),
      ' 逐渐弓下了腰，将失控的表情藏在头发垂下的阴影中。',
    ]);
    await defender.say_and_wait('哈……❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   * @param {boolean} is_anal_sex 是否是肛交
   */
  async ask_cowgirl(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('吞进去了……');
    await defender.print_and_wait([
      '与平躺着的 ',
      d_call_a,
      ' 十指相扣，紧致又富有弹性的亮晶晶双腿向下深蹲，用穴口磨磨蹭蹭地寻找着含入肉棒硕大龟头的契机……',
    ]);
    await defender.print_and_wait([
      '要自己坐上去什么的……',
      d_call_a,
      ' 坏心眼……',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait('而且，还是用屁股小穴……', true);
    }
    await attacker.say_and_wait('腰也摇起来。');
    await defender.print_and_wait([
      '这次不需要等待 ',
      defender.get_colored_name(),
      ' 慢慢悠悠的动作了，只需要被含入紧致穴腔中的肉棒向着敏感的膣肉轻轻戳探，',
      defender.get_colored_name(),
      ' 无处可逃的腰便只能像是上了发条般无休止地在 ',
      d_call_a,
      ' 的面前舞动起来……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_stimulate_glans_by_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('啊……好累……');
    await defender.print_and_wait([
      '正咕啾咕啾把 ',
      defender.get_colored_name(),
      ' 宝贵的',
      is_vagina ? '小穴' : '屁穴',
      '捣弄得乱糟糟湿漉漉的肉棒突然停了下来。',
    ]);
    await defender.print_and_wait(
      '虽然嘴上喊着累，但股间的肉棒却诚实地硬邦邦。',
    );
    await attacker.say_and_wait('接下来就拜托了。');
    await defender.print_and_wait(
      '也有想要赌气着索性让坏心眼肉棒拔出去的想法，但只是呲溜一声让肉棒稍稍离开小穴一寸……身体就寂寞的不得了……',
    );
    await defender.print_and_wait([
      '于是，',
      defender.get_colored_name(),
      ' 扭起了腰。',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait(
        '白花花的屁股在湿漉漉马尾巴的伴奏下翩翩起舞。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('更深一些。');
    await defender.say_and_wait('牡蛎——');
    await attacker.print_and_wait([
      a_call_d,
      ' 几乎要被揉进 ',
      attacker.get_colored_name(),
      ' 的身体当中，不知足的 ',
      attacker.get_colored_name(),
      ' 即使突破了零的距离线也不会有丝毫的犹豫，胯下的肉棒随着挺起的腰硬邦邦地向前递去，让女孩子的唇，小穴，子宫都为它发出着迷的呻吟……',
    ]);
    await defender.say_and_wait('咕哦哦哦齁哦哦哦哦————❤️❤️');
    await attacker.print_and_wait(
      '所谓的G点就是这种东西，不管在这之前是什么样的女孩子，温柔也好开朗也好，被洋溢着雄臭味的硬邦邦肉棒将那处肉褶顶开就会一口气堕落成对性爱着迷的下流雌性。',
    );
    await attacker.print_and_wait(
      '姣好的身子在肉棒的冲撞下蜷成一团，喉咙里只剩下浑浊的淫声，唯独近在咫尺的子宫热得发烫。',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   */
  async stimulate_womb(attacker, defender, d_call_a) {
    await defender.print_and_wait('不用肉棒就能让小穴变舒服的魔法。');
    await defender.print_and_wait([
      d_call_a,
      ' 自信地笑着张开五指，让宽大的手掌覆在小腹上。',
    ]);
    await defender.print_and_wait('的确是很温暖的触感，但是……');
    await defender.say_and_wait('唔齁唔唔——');
    await defender.print_and_wait('不像样的声音突然漏出来了——');
    await defender.print_and_wait(['几乎要陷进去了……', d_call_a, ' 的手掌……']);
    await defender.print_and_wait('而像是对比般，子宫却砰砰地兴奋起来……');
    await defender.print_and_wait([
      '像是被 ',
      d_call_a,
      ' 的魔术手抓住了一样……❤️',
    ]);
    await defender.print_and_wait('……骗人的吧❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_fuck(attacker, defender, is_vagina = true) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await attacker.print_and_wait('真是丢人……');
    await attacker.print_and_wait('为了乞求快感，居然能做出这种事……');
    await attacker.say_and_wait('哈……❤️');
    await attacker.print_and_wait([
      '投降似的',
      (motion ^ towards) > 0 ? '分开大腿' : '把屁股高高抬起',
      '，用颤抖的手指把缩成一团的',
      is_vagina ? '阴唇' : '屁穴',
      '向外掰开，露出内里粉嫩的穴肉。',
    ]);
    await attacker.say_and_wait('请，插进来……');
    await attacker.say_and_wait('把肉棒……插进来——');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是否是性交
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('哈……');
    await attacker.print_and_wait([
      '这么近距离地看着……看着身下 ',
      a_call_d,
      ' 的脸……不就只能意识到自己是个多么糟糕的家伙了嘛❤️',
    ]);
    await attacker.print_and_wait([
      '自暴自弃地摇晃起身体，被背德感折服的 ',
      attacker.get_colored_name(),
      ' 身体泛着淡淡的粉色，正努力地侍奉着被',
      is_vagina ? '小穴' : '屁穴',
      '含入的肉棒。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是否是性交
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait('说实话……仅仅只是现在这样感觉就要升天了……');
    await attacker.print_and_wait([
      '乱七八糟的……不论是被奸着的',
      is_vagina ? '小穴' : '屁穴',
      '现状也好，还是舒服得一塌糊涂的身体也好……',
    ]);
    await attacker.print_and_wait([
      '而更加乱七八糟的……是好像还能做些什么的 ',
      attacker.get_colored_name(),
      ' 自己……',
    ]);
    await attacker.print_and_wait('哈……不止是高声喊牡蛎，而是深吸气的话……');
    await attacker.print_and_wait([
      '「啾」的一声缩紧了，虽然一秒钟都没能坚持到身体就痉挛着瘫软下去，但那一瞬间，',
      attacker.get_colored_name(),
      ' 的',
      is_vagina ? '小穴' : '屁穴',
      '深情地吻上了 ',
      a_call_d,
      ' 的龟头。',
    ]);
    await attacker.print_and_wait('哈……龟头一跳一跳的，应该是很高兴吧……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_stimulate_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('拜托……');
    await attacker.say_and_wait('拜托了……');
    if (attacker.race > 0 && attacker.id) {
      await attacker.print_and_wait([
        '身为',
        attacker.uma_sex_title,
        '，这也太丢人了不是吗……',
      ]);
    } else {
      await attacker.print_and_wait(
        '身为大人，身为训练员，这也太丢人了不是吗……',
      );
    }
    await attacker.print_and_wait('但是完全没法忍耐住——');
    await attacker.print_and_wait('因为就是很想要啊——');
    await attacker.print_and_wait(
      '想要子宫的里面，被厉害地肉棒给，厉害地，粗暴地，用力地……',
    );
    await attacker.print_and_wait('「啾——的一下顶到最里面❤️');
    await attacker.print_and_wait('让身体「咻」地蜷起来——');
    await attacker.print_and_wait([
      '变成世界上最舒服的',
      is_vagina ? '小穴' : '小穴和屁穴',
      '——',
    ]);
    await attacker.print_and_wait('所以拜托了……在那之后，不管想怎么做都可以❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 插入方
   * @param {CharaTalk} defender 被插方
   * @param {PrintedSpan} d_call_a 被插方对插入方的称呼
   */
  async continue_fucking(attacker, defender, d_call_a) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('哦哦哦哦哦哦————❤️');
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 的身体破廉耻的在 ',
        d_call_a,
        ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
      ]);
      await defender.print_and_wait(
        '但本人此刻却完全没有余裕去在意这些繁文缛节，黏糊糊的发丝卷成一绺歪垂在额前，小腹内传出躁动的砰砰跃动声，即使里面没有肉棒或是手指或是坏心眼的舌，在翕动着的小穴也能如藕般拉出绵长银丝，向外呼出热腾腾的蒸汽。',
      );
      await defender.say_and_wait('要去了……快要……去了……', true);
      await defender.say_and_wait('快点……快点……快点去啊❤️', true);
      await defender.print_and_wait([
        '先是无力，随后又是不情不愿得再次绷紧，连自己都不知道这具身体为什么要做出这样的动作，被 ',
        d_call_a,
        ' 逼迫玩弄到这种程度的身体大约只受着野性的支使。',
      ]);
      await defender.print_and_wait('会怎么样去呢，会什么时候被弄到去呢');
      await defender.print_and_wait(
        '一片空白的脑袋在停转又重启之后，变成了只能思考这种事情的废柴大脑。',
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait('……要……要来了吗❤️', true);
    } else {
      await defender.say_and_wait('哈……');
      await defender.print_and_wait(
        '本以为只是一次普通的呼吸，却从喉咙里挤出来让自己都吓了一跳的妖艳声音……❤️',
      );
      await defender.print_and_wait('有在好好享受着啊……身体……');
      await defender.print_and_wait('害羞……？抵抗……？');
      await defender.print_and_wait(
        '那种感情不知道什么时候起就已经随着漏出的呻吟声溜走了，现在……变得诚实的自己想要更多……更多更多❤️',
      );
      await defender.print_and_wait([
        '想更多地紧贴上 ',
        d_call_a,
        ' 的身体感受那份温度，想更多的，被 ',
        d_call_a,
        ' 教会更多下流的事情，想让这湿漉漉的发热身体能干脆地被玩弄成没法见人的害羞样子……',
      ]);
      await defender.say_and_wait(
        '……哈……因为没办法保证能说服之后的自己……',
        true,
      );
      await defender.say_and_wait('……所以，请好好地……抓紧时间❤️', true);
    }
  },
  /** 性虐系 */
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async insult(attacker, defender) {
    const buffer = [];
    if (era.get('tflag:强奸') === defender.id) {
      buffer.push(() => attacker.say_and_wait('人渣！强奸犯！去死吧！'));
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      buffer.push(() => attacker.say_and_wait('杂鱼～杂鱼～'));
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      buffer.push(() =>
        attacker.say_and_wait([
          '蠢货！废物',
          defender.sex_slave_title,
          '！欠操的变态！',
        ]),
      );
    }
    if (buffer.length === 0) {
      buffer.push(() =>
        attacker.say_and_wait([
          '就这么想被人辱骂吗，',
          defender.sex_slave_title,
          '？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 黑衣剑士-星爆气流斩准备就绪
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {PrintedSpan} d_call_a 被动方对主动方的称呼
   */
  async hit_face_by_penis(attacker, defender, a_call_d, d_call_a) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        '被 ',
        d_call_a,
        ' 住了头发，意识到了自己的力量完全不能与之抗衡，看着 ',
        d_call_a,
        ' 胯下的肉棒凶恶的抬头，',
        defender.get_colored_name(),
        ' 的内心有了不好的预感。',
      ]);
      await attacker.say_and_wait([a_call_d, '～要好好的记住我的气味哦～']);
      await defender.print_and_wait([
        '无法反抗，脸颊上感觉到了被拍打的触感，',
        d_call_a,
        ' 肉棒那凶恶的气味让 ',
        defender.get_colored_name(),
        ' 不自觉的想要屈服。',
      ]);
      await defender.print_and_wait([
        '脸上留下了 ',
        d_call_a,
        ' 肉棒的印记，',
        defender.get_colored_name(),
        ' 仰起脸，等待着下一记耳光的到来',
      ]);
    } else {
      await attacker.print_and_wait([
        '抓着 ',
        a_call_d,
        ' 的头发，',
        attacker.get_colored_name(),
        ' 强硬地将自己的肉棒凑到了',
        defender.sex,
        '的脸上，看着',
        defender.sex,
        '的脸被 ',
        attacker.get_colored_name(),
        ' 用肉棒戳弄的样子露出笑容。',
      ]);
      await defender.say_and_wait('唔唔唔！！！');
      await attacker.print_and_wait([
        '充满了雄性气味的肉棒吸引着 ',
        a_call_d,
        ' 的鼻子不停的抽动，',
        attacker.get_colored_name(),
        ' 抓着 ',
        a_call_d,
        ' 的头发开始甩动起了自己的腰，肉棒与 ',
        a_call_d,
        ' 光滑的脸颊碰撞发出了色情的声音，让 ',
        a_call_d,
        ' 的眼神也变得迷离了起来。',
      ]);
    }
  },
  /** 银趴系 */
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {string} a_penis 主动方肉棒尺寸
   */
  async ask_double_blow_job(attacker, defender, supporter, is_first, a_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 叉开腿，',
        a_penis,
        ' 的肉棒昂然挺立，',
        defender.get_colored_name(),
        ' 和 ',
        supporter.get_colored_name(),
        ' 在 ',
        attacker.get_colored_name(),
        ' 的示意下张开嘴巴凑上前去……',
      ]);
    } else {
      await attacker.print_and_wait([
        '在',
        attacker.get_colored_name(),
        ' 的示意下，',
        defender.get_colored_name(),
        ' 和 ',
        supporter.get_colored_name(),
        ' 用嘴巴交替侍奉着肉棒……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {string} d_penis 被动方肉棒尺寸
   * @param {string} s_penis 助手肉棒尺寸
   */
  async ask_double_fuck(
    attacker,
    defender,
    supporter,
    is_first,
    d_penis,
    s_penis,
  ) {
    const buffer = [];
    if (is_first) {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 张开大腿，向着 ',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 撑开小穴，看着二人挺立的肉棒舔着嘴唇',
          ]);
          await attacker.print_and_wait([
            '在 ',
            attacker.get_colored_name(),
            ' 赤裸裸的邀请下，',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 按捺不住，扑到 ',
            attacker.get_colored_name(),
            ' 身上交替抽插着那诱人的小穴……',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? ' 张开双腿' : ' 四肢着地',
            '摇晃着屁股，示意 ',
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 轮流用肉棒进入自己的深处。',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          if (d_penis === s_penis) {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' 被夹在 ',
              defender.get_colored_name(),
              ' 与 ',
              supporter.get_colored_name(),
              ' 中间，两根',
              d_penis,
              '的肉棒交替被 ',
              attacker.get_colored_name(),
              ' 淫荡的小穴吞没',
            ]);
          } else {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' 被夹在 ',
              defender.get_colored_name(),
              ' 与 ',
              supporter.get_colored_name(),
              ' 中间，两根',
              d_penis,
              '与',
              s_penis,
              '的肉棒交替被 ',
              attacker.get_colored_name(),
              ' 淫荡的小穴吞没',
            ]);
          }
          await attacker.print_and_wait([
            '淫液把三人的下体附近染得一片狼藉，不时传来 ',
            attacker.get_colored_name(),
            ' 的一阵娇声……',
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 与 ',
            supporter.get_colored_name(),
            ' 不一样的肉棒与各自的插入方式，',
          ]);
          await attacker.print_and_wait(
            '以及自己正在被两个人接连奸淫着的背德感，',
          );
          await attacker.print_and_wait([
            '让 ',
            attacker.get_colored_name(),
            ' 每次被插入都享受到了非比寻常的快感。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 以女上位让 ',
        defender.get_colored_name(),
        ' 深入自己的小穴，然后示意 ',
        supporter.get_colored_name(),
        ' 也插入自己的屁穴里……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一起不断进攻着 ',
        attacker.get_colored_name(),
        ' 的前后两穴，',
      ]);
      await attacker.print_and_wait(
        '双重的快感以及自己正在被两个人同时奸淫着的背德感，',
      );
      await attacker.print_and_wait([
        '让 ',
        attacker.get_colored_name(),
        ' 每次被插入都不由得放声呻吟起来……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} is_vagina 是否是性交
   */
  async ask_spit_roast(
    attacker,
    defender,
    supporter,
    is_first,
    is_vagina = true,
  ) {
    const part_name = is_vagina ? '小穴' : '屁穴';
    if (is_first) {
      const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
      const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        (motion ^ towards) > 0 ? ' 张开双腿' : ' 四肢着地',
        '摇晃着屁股，示意 ',
        defender.get_colored_name(),
        ' 插入自己的',
        part_name,
        '，又贪婪地把 ',
        supporter.get_colored_name(),
        ' 的肉棒含进口中……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一起不断进攻着 ',
        attacker.get_colored_name(),
        ' 的口穴和',
        part_name,
        '……',
      ]);
      await attacker.print_and_wait([
        '身下的快感与口中肉棒令人窒息的冲击感觉让 ',
        attacker.get_colored_name(),
        ' 的脑中已经只剩下肉棒了……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} d_has_penis 被动方是否拥有阴茎
   * @param {boolean} s_has_penis 助手是否拥有阴茎
   */
  async fuck_69(
    attacker,
    defender,
    supporter,
    is_first,
    d_has_penis,
    s_has_penis,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' 躺在床上与 ',
        supporter.get_colored_name(),
        ' 互相舔舐对方的 ',
        d_has_penis
          ? s_has_penis
            ? '肉棒'
            : '肉棒和小穴'
          : s_has_penis
            ? '小穴和肉棒'
            : '小穴',
        '，',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 将兴奋至鼓胀的肉棒迫不及待地插进了 ',
        defender.get_colored_name(),
        ' 的小穴里……',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' 小穴溅出的淫水打湿了 ',
        supporter.get_colored_name(),
        ' 卖力舔舐 ',
        attacker.get_colored_name(),
        ' 肉棒抽插处的脸，',
      ]);
      await attacker.print_and_wait([
        supporter.get_colored_name(),
        ' 也被 ',
        defender.get_colored_name(),
        ' 的嘴巴侍奉得娇喘连连……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 被 ',
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一把按住，',
      ]);
      await defender.print_and_wait([
        '二人丝毫不考虑 ',
        defender.get_colored_name(),
        ' 的感受。',
      ]);
      await defender.print_and_wait([
        '只管轮流把兴奋得高高挺起的肉棒插入 ',
        defender.get_colored_name(),
        ' 的小穴里用力抽插……',
      ]);
    } else {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 不断被 ',
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 的肉棒轮流侵犯着。',
      ]);
      await defender.print_and_wait('二人的其中一方稍微觉得累了就会换人接力，');
      await defender.print_and_wait([
        '唯独 ',
        defender.get_colored_name(),
        ' 被奸淫得汁液四溅的小穴几乎没有一息的空闲，',
      ]);
      await defender.print_and_wait('连意识都仿佛快要离自己而去了……');
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 被 ',
        attacker.get_colored_name(),
        ' 拉到身上插入小穴，',
      ]);
      await defender.print_and_wait([
        supporter.get_colored_name(),
        ' 也同时插入 ',
        defender.get_colored_name(),
        ' 的屁穴里……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一起不断进攻着 ',
        defender.get_colored_name(),
        ' 的前后两穴，',
      ]);
      await defender.print_and_wait(
        '双重的快感以及自己正在被两个人同时奸淫着的背德感，',
      );
      await defender.print_and_wait([
        '让 ',
        defender.get_colored_name(),
        ' 每次被插入都不由得放声呻吟起来……',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {boolean} is_vagina 是否是性交
   */
  async spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? '小穴' : '屁穴';
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 被 ',
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一把按住，',
      ]);
      await defender.print_and_wait([
        '二人丝毫不考虑 ',
        defender.get_colored_name(),
        ' 的感受。',
      ]);
      await defender.print_and_wait([
        '只管一前一后地把兴奋得高高挺起的肉棒插入 ',
        defender.get_colored_name(),
        ' 的',
        part_name,
        '和口穴里用力抽插……',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 一起不断进攻着 ',
        defender.get_colored_name(),
        ' 的',
        part_name,
        '和口穴，',
      ]);
      await defender.print_and_wait([
        '身下的快感与口中肉棒令人窒息的冲击感觉让 ',
        defender.get_colored_name(),
        ' 的脑中已经只剩下肉棒了……',
      ]);
    }
  },
  /** 道具系 */
  /**
   * @param {CharaTalk} chara 服药者
   * @param {number} item 道具 ID
   */
  async use_medicine(chara, item) {
    switch (item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (chara.sex_code === 0) {
          await era.printAndWait(
            [chara.get_colored_name(), ' 长出了 凶恶的巨根！'],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            ' 的肉棒更形健硕了！',
          ]);
        }
      // eslint-disable-next-line no-fallthrough
      case medicine_enum.uma_z:
        if (!era.get(`tcvar:${chara.id}:发情`)) {
          await era.printAndWait(
            [chara.get_colored_name(), ' 变得兴奋起来了'],
            { color: buff_colors[2] },
          );
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait(
          [chara.get_colored_name(), ' 的乳房开始流出乳汁……'],
          { color: buff_colors[2] },
        );
    }
  },
};
