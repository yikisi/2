/**
 * @file 黄金船 - 爱慕
 * @author 雞雞
 */
const era = require('#/era-electron');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} gold_shp 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `孽缘的开端在于 ${gold_shp.name} 的那次选拔赛。就是在那次比赛后，${gold_shp.sex}与 ${callname} 签下了契约成为能在赛事中正式登场的赛马娘。`,
      );
      era.println();
      await gold_shp.say_and_wait(
        '我到底是为什么会看上那家伙的，事到如今已经没有办法理解了。',
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} 站在夕阳下的游乐园滑梯上沉思着，${gold_shp.sex}把下巴挨到护栏，任由白银的发丝如瀑布滑落。${gold_shp.sex}让一旁游玩嬉闹的小孩们不断在视野内进出，心思却始终放在不在场的某个人上。`,
      );
      era.println();
      await gold_shp.print_and_wait([
        `打从一开始，${gold_shp.sex}就对自己的行为十分费解。一般的赛马娘与训练员间，都是由训练员一方主动招募选手。但与 ${callname} 签约的事与其说是被招募，`,
        {
          color: gold_color,
          content: `不如说是 ${gold_shp.name} 对那个人强买强卖。`,
        },
      ]);
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} 需要与一个训练员签订契约才能出赛，没错。`,
      );
      era.println();
      await gold_shp.print_and_wait(`${you.actual_name} 是一个训练员，没错。`);
      era.println();
      if (era.get('flag:当前声望') < 1000) {
        await gold_shp.print_and_wait(
          `${you.actual_name} 也许能帮助 ${gold_shp.name} 找到属于自己的伊甸园。`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${you.actual_name} 的实力很强，能帮助 ${gold_shp.name} 找到属于自己的伊甸园。`,
        );
      }
      era.println();
      if (era.get('exp:7:性爱次数') > 0) {
        await gold_shp.print_and_wait(
          `虽然是马后炮，但 ${you.actual_name} 确实能在床上为自己发烫的娇躯带来抚慰。`,
        );
        era.println();
      }
      await gold_shp.print_and_wait(
        '但——该死的，这不等同于自己的这趟黄金旅程非那家伙不可！',
      );
      era.println();
      await gold_shp.print_and_wait(
        '中央特雷森何其优秀，不论是赛马娘还是训练员都有太多优质选择！六叔训练员（也许太年老了）、奈濑训练员（也许太严肃了），还有桐生院训练员（也许太年轻了）都曾经是自己心中通向伊甸园之路的伙伴备选。',
      );
      era.println();
      await gold_shp.print_and_wait([
        '但——自己偏偏在看到那家伙的',
        {
          color: gold_color,
          content: '0.0000001秒中，就对双腿下达了命令。',
        },
      ]);

      era.printButton('「这是黄金星的天启吗……」（升级关系）', 1);
      era.printButton('「我到底是在干什么呢……」（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `这个借口，连 ${gold_shp.name} 自己都没能欺骗过去。${gold_shp.sex}闭上了双眼，但烙印在心中的身影挥之不去。${gold_shp.sex}用力摇头不去看那个人，脑袋却在强迫自己思考关于那个人的事。`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${gold_shp.sex}闭上了双眼，但烙印在心中的身影挥之不去。${gold_shp.sex}用力摇头不去看那个人，脑袋却在强迫自己思考关于那个人的事。`,
        );
      }
      era.println();
      await gold_shp.print_and_wait(
        `此刻，一半的 ${gold_shp.name} 在说服自己：也许这世上真的存在一见钟情，而阿船和阿训就是被爱神之箭直接命中的天生一对。`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `另一半的 ${gold_shp.name} 在唱反调：也许这一切都只是阿船和阿训关系良好的证明，无法证明什么。`,
      );
      era.println();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `终于，感性的 ${gold_shp.name} 占据了上风。${gold_shp.name} 的眼神从迷茫转为坚定，她挺起身子看向特雷森的方向。`,
        );
        era.println();
        await gold_shp.say_and_wait('不，这就是一见钟情啊。');
      } else {
        await gold_shp.print_and_wait(
          `终于，理性的 ${gold_shp.name} 占据了上风。但那股无法抑制的念头仍然像乌云投下的阴影一样徘徊在上空。连 ${gold_shp.name} 都无法轻易摆脱的这份苦恼，到底还要延续到什么时候？`,
        );
      }
      return [ret];
    };
    f.title = [{ color: gold_color, content: '感性与理性' }];
    return f;
  })(),
  '74-1': (() => {
    /**
     * @param {CharaTalk} gold_shp 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `某个夜里，${gold_shp.name} 以鼻子与上唇夹着一根铅笔半躺在软绵绵的宿舍床上。${gold_shp.sex}以两腿与强大的腰力让自己的核心躯干悬空，但脑袋仍然紧贴床垫。铅笔中木夹板与油漆混合的香气并没有影响${gold_shp.sex}脑筋转动的速度，此刻，世上万事万物都在 ${gold_shp.name} 的心中迅速地分析、分解、再重组。`,
      );
      era.println();
      await era.printAndWait('常温超导体到底有没有戏？没有。', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('恐龙到底是不是巨大鸡？是的。', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('百事还是可口？开水。', {
        color: gold_color,
      });
      era.println();
      await gold_shp.print_and_wait('……');
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name} 到底喜不喜欢 ${callname}？喜欢。`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `只见 ${gold_shp.name} 双腿一使劲便腾空而起，以脑袋与双手三点顶在床上呈倒立之势！${gold_shp.name} 的血液此刻源源不绝地朝向${gold_shp.sex}的大脑供给思考计策所须的能量——既然已经确定自己的心意，那么接下来要做的事就只有一个了……！`,
      );
      era.println();

      era.printButton('「制定计划，开始进攻！」（升级关系）', 1);
      era.printButton('「小心谨慎，从长计议！」（暂不升级）', 2);
      return [await era.input()];
    };
    f.title = [{ color: gold_color, content: '战术决策' }];
    return f;
  })(),
  '74-2-start': (() => {
    /**
     * @param {CharaTalk} gold_shp 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.say_and_wait(
        '黄金船雄心壮志、气吞天下，不论全球人类与马娘们如何防范，只要哪天黄金火山一爆发！大家都得有至少造成120亿马币财产损失的心理准备。',
      );
      era.println();
      await gold_shp.say_and_wait('但，哪怕英雄如黄金船也难过美人关……');
      era.println();
      await gold_shp.say_and_wait(
        '此刻的黄金船就坐在训练员办公桌上的一角，她的口里念念有词，恰好似是在以第三人称描述着这个场景。',
      );
      era.println();

      era.printButton(
        '「……你该不会是在为自己配旁白吧？而且连这句都要配音啊？」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        `${callname} 你好烦啊，能不能投入点？扮演一下嘛！黄金船有点生气地叫嚷着，她提起了拳头轻轻地敲打训练员。请投一个伤害骰。`,
      );
      era.println();

      era.printButton(
        '「不，是你突然进入TRPG模式了！我可是在正经工作呢。」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait([
        '呜呜呜，工作和陪可爱的负责',
        gold_shp.uma_sex_title,
        '玩哪个更重要哦～！',
      ]);
      era.println();
      await era.printAndWait(
        `${gold_shp.name} 不断摇晃着 ${you.name} 的椅子，让 ${you.name} 根本无法专心工作，${you.name} 只好无奈地离开岗位看看 ${gold_shp.name} 又要做什么恶作剧。`,
      );
      era.println();
      await era.printAndWait(
        `只见 ${gold_shp.name} 嘿嘿一个坏笑，便把 ${you.name} 扑倒到沙发上。`,
      );
    };
    f.title = [{ color: gold_color, content: '英雄船难过美人关' }];
    return f;
  })(),
  /**
   * @param {CharaTalk} gold_shp 黄金船
   * @param {CharaTalk} you 玩家
   * @param {string} callname 黄金船对玩家的称呼
   */
  async '74-2-end'(gold_shp, you, callname) {
    const ret = [];
    era.drawLine();
    await era.printAndWait(
      `这场激烈的马儿跳无疑是一场畅快淋漓的体验，原先清新的训练员室如今满布着精液与淫水的腥臭味。${you.name} 气喘吁吁地躺进 ${gold_shp.name} 的怀抱，吸入${gold_shp.sex}时刻散发的荷尔蒙，脑袋里一直在思考刚才到底发生了什么事。`,
    );
    era.println();
    await gold_shp.say_and_wait(
      `怎么样 ${callname}……究极美少女阿船的多汁小穴爽不？`,
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name} 脸带红晕得意地对 ${you.name} 笑道。`,
    );
    era.println();

    era.printButton('「你到底是什么时候变得这么下流的啊……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      '还不是你害的嘛……呼呼呼。天天像个骚货一样在本船面前又是露出锁骨又是摇晃屁股的，我忍你很久了！',
    );
    era.println();

    era.printButton('「变态……强奸犯……」', 1);
    await era.input();

    await gold_shp.say_and_wait('不论你怎么说，我们都已经是管鲍之交的关系啦！');
    era.println();
    await era.printAndWait(
      `${gold_shp.name} 的手臂挽住 ${you.name} 的脖子把你强行锁到她的胸前，少女的体香不禁令人意乱情迷。`,
    );
    era.println();
    await era.printAndWait(`良久，${gold_shp.sex} 开口了。`);
    era.println();
    await gold_shp.say_and_wait('所以说……我会负上责任的，那个……');
    await gold_shp.say_and_wait(`${callname}，跟我……跟我交往吧！`);
    era.println();

    era.printButton('「嗯，好啊。」（升级关系）', 1);
    era.printButton('「这个还是有点……」（暂不升级）', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait(
        `${you.name} 没有意料到的是 ${gold_shp.name} 露出了比 ${you.name} 更惊讶的表情。`,
      );
      era.println();
      await gold_shp.say_and_wait('尊嘟假嘟？我还以为你一定不会答应的！');
      await gold_shp.say_and_wait('……所以才选择了让生米煮成熟饭的计策。');
      era.println();

      era.printButton('小金船疑似是有点急了（笑）。你就那么不相信我？', 1);
      await era.input();

      await gold_shp.say_and_wait('这种事谁不急啊！还有笑是什么意思！');
      await gold_shp.say_and_wait('毕竟……我本来就不觉得会成功……');
      await gold_shp.say_and_wait(
        '我平常又麻烦、又不正经、又麻烦……总是控制不住自己的手，老是把你拖下水……',
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.sex} 说着说着便沉默了，${you.name} 从 ${gold_shp.sex} 急促的呼吸声中听出了 ${gold_shp.sex} 在强忍着不让自己哭出来。`,
      );
      era.println();
      await you.say_and_wait(
        '我是训练员，引导、关爱负责马娘就是我的使命。而你是我的负责马娘，这一点也永远都不会改变。',
      );
      await you.say_and_wait(
        '虽然现实上、社会上还会有很多很多的问题，但也许我的脑子早就已经被你搞得一塌糊涂了。',
      );
      await you.say_and_wait('现在的我只想继续和你一起疯下去。');
      await you.say_and_wait('所以你就给我做好觉悟吧——');
      era.printButton('「亲爱的♡」', 1);
      era.printButton('「雷普魔♡」', 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name} 与 ${gold_shp.name} 紧紧地相拥在一起。此刻，这张床上包容着 ${gold_shp.sex} 微微的抽泣声，以及一对新鲜出炉的小恋人。`,
      );
    } else {
      await era.printAndWait(
        `${gold_shp.name} 并没有像 ${you.name} 想像的一样开始闹脾气、打滚，而是落寞地挺起了身，胸前的双乳垂下。${gold_shp.sex}张开了嘴想要说什么，但齿缝里终究只挤出了：`,
      );
      era.println();
      await gold_shp.say_and_wait('嗯，我知道了。对不起。');
      era.println();
      await era.printAndWait(
        `${gold_shp.sex} 默默地离开床铺，把落到地上的衣服重新穿好。`,
      );
      era.println();

      era.printButton('「那个，阿船？」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 没有得到回应。那个人只是朝你鞠了一躬，便带上门离开了。`,
      );
    }
    return ret;
  },
  golden_ship_attack: (() => {
    /**
     * @param {CharaTalk} gold_shp 黄金船
     * @param {CharaTalk} you 玩家
     * @param {string} callname 黄金船对玩家的称呼
     */
    const f = async (gold_shp, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `伴随着从训练员室喇叭里播出的欢乐综艺节目音效，${gold_shp.name} 突然把 ${you.name} 请到了沙发上。`,
      );
      await era.printAndWait(`${gold_shp.sex}灵活地提起笔在白板上写下了：`);
      era.println();

      await era.printAndWait(`突击！${gold_shp.name} 的`, { align: 'center' });
      await era.printAndWait('超级残酷二选一测验！', { align: 'center' });
      await era.printAndWait('～你能存活下来吗？～', { align: 'center' });
      era.println();

      await era.printAndWait(
        `虽然十分突然，但 ${gold_shp.name} 突然想给 ${you.name} 来一场突然的心理测验。`,
      );
      await era.printAndWait(
        `由于事发突然，${you.name} 也没有突然拒绝的权利！请硬着头皮突然地接受吧！`,
      );

      era.printButton('「这是什么玩意啊？！」', 1);
      await era.input();

      await gold_shp.say_and_wait(
        `就是这样，我会把问题写在上面～${callname} 请看向白板哦～`,
      );
      await gold_shp.say_and_wait(
        '第一题十分经典！是每个人都会被问到过的题目！',
      );
      await gold_shp.say_and_wait(
        '你会选择【巧克力味的○○】还是【○○味的巧克力】？',
      );

      era.printButton('「巧克力味的○○……」', 1);
      era.printButton('「○○味的巧克力……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '哪怕是出题人的我也会【选择吃别的东西】！下一题！',
      );
      await gold_shp.say_and_wait('第二题！请看！');
      await gold_shp.say_and_wait(
        '你会选择【把马儿跳内容误发给家人】还是【把马儿跳内容误发给负责马娘】？',
      );

      era.printButton('「把马儿跳内容误发给家人……」', 1);
      era.printButton('「把马儿跳内容误发给负责马娘……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait('所谓若要人不知【除非己莫为】！下一题！');
      await gold_shp.say_and_wait('第三题开始要有点刁难了哦！');
      await gold_shp.say_and_wait(
        '和女友一起喝酒的时候，她想要找来第三人一起喝！',
      );
      await gold_shp.say_and_wait(
        '你会选择【找你的前女友】还是【找她的前男友】？',
      );

      era.printButton('「找你的前女友……」', 1);
      era.printButton('「找她的前男友……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait('总觉得【有点不爽】呢！下一题！');
      await gold_shp.say_and_wait('第四题！感觉有很多人都会做的事！');
      await gold_shp.say_and_wait('你是一队赛马娘队伍的领队！');
      await gold_shp.say_and_wait(
        '你会选择【随时都想跟队员马儿跳】还是【随时都有队员想跟你马儿跳】？',
      );

      era.printButton('「随时都想跟队员马儿跳……」', 1);
      era.printButton('「随时都有队员想跟你马儿跳……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '你可真是个大色鬼哈～但有时候还是【多带点耐性】比较好哦？',
      );
      await gold_shp.say_and_wait('第五题！攸关性命安危的事件发生了！');
      await gold_shp.say_and_wait(
        '哦不！你、你女友、你的好友三人被绑架了！绑匪很恶趣味地要求你杀死其中一人以换取你与剩下一人的性命！',
      );
      await gold_shp.say_and_wait(
        '你会选择【杀死与你生死相依的好兄弟】还是【杀死愿意为你牺牲的女朋友】？',
      );

      era.printButton('「杀死与你生死相依的好兄弟……」', 1);
      era.printButton('「杀死愿意为你牺牲的女朋友……」', 2);
      await era.input();

      await era.printAndWait(
        '……没有鼓声、没有奇异的调皮音乐、没有不知道哪来的罐头笑声。',
      );
      await era.printAndWait('一切都突然静止了。');
      await era.printAndWait(
        `${gold_shp.name} 的表情变得无比平静，${gold_shp.sex}的眼神失去了光彩，径直地钉在 ${you.name} 的脸上。`,
      );
      era.println();

      await gold_shp.say_and_wait(
        '这一道题目很重要，请您务必认真考虑过后再作答。',
      );
      era.println();

      era.printButton('「杀死与你生死相依的好兄弟……」', 1);
      era.printButton('「杀死愿意为你牺牲的女朋友……」', 2);
      await era.input();

      await gold_shp.say_and_wait(
        '这一道题目很重要，请您务必认真考虑过后再作答。',
      );
      era.println();

      await era.printAndWait(`${gold_shp.sex}是如此说的。`);
      const buffer = [
        {
          accelerator: 1,
          config: { disableWarning: true },
          content: '「杀死与你生死相依的好兄弟……」',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { disableWarning: true },
          content: '「杀死愿意为你牺牲的女朋友……」',
          type: 'button',
        },
      ];
      era.printInColRows(buffer);
      setTimeout(() => {
        if (ret.length < 5) {
          buffer.push({
            accelerator: 3,
            config: { disableWarning: true },
            content: '「哪个都不选……！」',
            type: 'button',
          });
          era.replaceInColRows(buffer);
        }
      }, 10000);
      ret.push(await era.input());
      era.println();

      await era.printAndWait(
        `${gold_shp.name} 又恢复到了平常的模样，笑嘻嘻地放起了音乐。`,
      );
      era.println();
      await gold_shp.say_and_wait(`呼呼～辛苦 ${callname} 啦～`);
      if (ret.at(-1) === 3) {
        await gold_shp.say_and_wait(
          `嗯～${callname} 真是个好孩子啊，虽然想跟负责赛马娘马儿跳果然还是有点那啥。`,
        );
        await gold_shp.say_and_wait(
          '……你说那是我出的题目？那你为什么不选第三个选项呢？',
        );
        await gold_shp.say_and_wait(
          '说起来要吃巧克力吗？放心，没加料，味道也很正常哦。',
        );
        era.println();
        await era.printAndWait([
          '你们在训练员室欢声笑语的风景，相信在将来也不会消失。',
        ]);
      } else {
        era.println();
        await era.printAndWait(
          `${gold_shp.sex} 如风一样到来，又如风一样离去，${you.name} 终究还是没问到心理测验的结果。`,
        );
      }
      era.println();
      if (ret[3] === 1) {
        era.print([
          gold_shp.get_colored_name(),
          ' 变得',
          { color: buff_colors[2], content: ' [喜欢责骂] ' },
          '与',
          { color: buff_colors[2], content: ' [喜欢痛苦] ' },
          '了！',
        ]);
      } else {
        era.print([
          gold_shp.get_colored_name(),
          ' 变得',
          { color: buff_colors[2], content: ' [抖S] ' },
          '了！',
        ]);
      }
      if (ret[1] === 2) {
        era.print([
          gold_shp.get_colored_name(),
          ' 现在有点',
          { color: buff_colors[2], content: ' [焦躁] ' },
          '！',
        ]);
      }
      return ret;
    };
    f.title = [
      {
        color: gold_color,
        content: '突击！黄金船的超级残酷二选一测验！～你能存活下来吗？～',
      },
    ];
    return f;
  })(),
};
