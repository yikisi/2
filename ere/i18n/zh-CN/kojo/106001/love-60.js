/**
 * @file 优秀素质 - 爱慕
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

module.exports = {
  async 49(nature, you, callname, self_call) {
    const ret = [];
    await nature.print_and_wait([
      '某个晚上，',
      nature.get_colored_name(),
      ' 逐渐察觉到了自己对 ',
      you.get_colored_actual_name(),
      ' 有点超乎关系的暧昧。',
    ]);
    await nature.print_and_wait([
      '回忆起和 ',
      you.sex,
      ' 在一起相处的时间，一股淡淡暖意便会在不经意间浮上心头。',
    ]);
    await nature.say_and_wait([callname, '……']);
    await nature.print_and_wait(
      '即使只是这样自言自语地呼唤对方，那人的面容也会清晰的浮现在眼前。',
    );
    await nature.print_and_wait(
      '但那到底是年少无知的情窦初开，抑或是日常相伴下产生的情感错觉？',
    );
    era.println();

    era.printButton(`「我好像，喜欢上 ${callname} 了……」（升级关系）`, 1);
    era.printButton(
      `「不会不会，${self_call}怎么会产生这种感情呢？」（暂不升级）`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '在灯光下，',
        nature.teen_sex_title,
        '一边把玩着自己所珍视的纸奖杯，一边不自觉的喃喃道。',
      ]);
      await nature.say_and_wait([
        '等下！，我刚才在说什么啊！弄得像个恋爱中的',
        nature.teen_sex_title,
        '一样！我才不是这种角色啦！',
      ]);
      await nature.print_and_wait([
        '虽然',
        nature.sex,
        '极力否定着自己的话语，但那颗情愫的种子，却早已悄无声息的发了芽……',
      ]);
      era.drawLine({ content: '不久之后……', position: 'left' });
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' 独自一人坐在自己房间的床上。原本就穿得单薄的',
        nature.sex,
        '把手搭在灰色短裤上，连同内衣裤一起脱了下来。',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '手里拿着一件T恤，来自于',
        nature.sex,
        '所倾慕之人。',
      ]);
      await nature.print_and_wait([
        nature.sex,
        '一边把T恤抵在鼻尖上，一边伸手去摸已经有些潮湿的私密处。时而摩擦穴口，有时用手指夹住突起，这种行为循序渐进着。',
      ]);
      nature.say(['训练员、', you.adult_sex_title, '，还要……更多……']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' 的手狂乱的刺激着',
        nature.sex,
        '那已经通红，滴着蜜汁的私处，一步步迈入下一个台阶。',
      ]);
      await nature.print_and_wait([
        '也许是觉得已经充分放松了，',
        nature.sex,
        '把手指伸进了更能获得快乐的地方。被吸进去的手指，与里面的墙壁摩擦，发出黏稠的声音。',
      ]);
      await nature.say_and_wait('嗯～～～～！！');
      await nature.print_and_wait([
        '很明显迎来了高潮的 ',
        nature.get_colored_name(),
        '，发出不成声的呻吟，喘着粗气。为了调整呼吸，',
        nature.sex,
        '稍稍停下手，开始活动手指。',
      ]);
      nature.say([
        callname,
        '、',
        callname,
        '……我在做这种下流的事，是因为想着 ',
        callname,
        '、才会变成这样的……',
      ]);
      await nature.print_and_wait([
        '在',
        nature.sex,
        '体内搅拌的手指加快了运动。每次都发出咕啾咕啾的淫猥的声音，',
        nature.sex,
        '也逐渐变得混乱了起来。',
      ]);
      nature.say(['我……我喜欢 ', callname, '，最喜欢了！所以、更激烈一点吧！']);
      nature.say(['要去了，要去了，', callname, '，我要去了～～～～！！']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' 仰起身子，腰抖个不停，喷出了潮水。潮水越过为了不弄脏床单而铺上的毛巾，将床单打了个浇湿。长时间的绝顶让',
        nature.sex,
        '浑身颤抖，在满足感的余韵中，',
        nature.sex,
        '沉沉的睡了过去。',
      ]);
    } else {
      await nature.print_and_wait([
        '觉得这大概是自己到了晚上的胡思乱想，',
        nature.get_colored_name(),
        ' 决定盖上被子，早早进入梦乡来摈弃这些杂念。',
      ]);
    }
    return ret;
  },
  async '74-1'(nature, you, callname) {
    const ret = [];
    await nature.print_and_wait([
      '某个晚上，',
      nature.get_colored_name(),
      ' 逐渐察觉到了自己对 ',
      you.get_colored_actual_name(),
      ' 的爱意。',
    ]);
    await nature.print_and_wait(
      '趴在窗口，望向一街之隔的依然灯火通明的训练员室，一股暖意渐渐包裹住了心头。',
    );
    await nature.print_and_wait([
      '想到 ',
      you.get_colored_actual_name(),
      ' 对自己无微不至的照顾，',
      nature.get_colored_name(),
      ' 似乎明白了自己心中这份感情的名字。',
    ]);
    era.println();

    era.printButton(`「我……喜欢 ${callname}！」（升级关系）`, 1);
    era.printButton(
      `「不不不不不，我们只是${nature.uma_sex_title}和担当训练员的关系罢了！人到了晚上果然喜欢多愁善感啊！还是早点睡吧！」（暂不升级）`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '声音虽然很微弱，但却透露出了',
        nature.teen_sex_title,
        '的坚定。',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '接受了自己内心的想法，也明白了自己渴望着什么，现在，只剩下最后一个问题……',
      ]);
    }
    return ret;
  },
  async '74-2'(nature, you, callname, call_55) {
    const ret = [];
    await nature.say_and_wait('啊～～～～');
    await nature.print_and_wait([
      '在训练员室里，',
      nature.get_colored_name(),
      ' 不知今天是第几次叹气',
    ]);
    await nature.print_and_wait(['原因就在', nature.sex, '手里的一张信纸上']);
    await nature.print_and_wait(
      '粉红色的信封上贴着爱心贴纸，谁看了都觉得这是一封情书',
    );
    await nature.print_and_wait([
      '这是今天早上一位不知道名字的',
      nature.uma_sex_title,
      '给',
      nature.sex,
      '的，',
      nature.sex,
      '这样说道：请交给',
      callname,
      '。',
    ]);
    await nature.print_and_wait([
      '既然被拜托了，就只能给',
      you.sex,
      '了。恋爱中的',
      nature.uma_sex_title,
      nature.child_sex_title,
      '子的心情，',
      nature.get_colored_name(),
      ' 自己也很清楚',
    ]);
    await nature.say_and_wait('但是……尽管如此', true);
    await nature.say_and_wait(
      '一想到训练员和那个孩子，万一进展顺利的话——',
      true,
    );
    await nature.say_and_wait(
      ['干脆扔掉吧…不，不，不可能的。但是我不想 ', callname, ' 被抢走啊…'],
      true,
    );
    await nature.print_and_wait([
      '红发',
      nature.teen_sex_title,
      '一遍又一遍地思考。拼命想要找出正确的解答方式，却求而不得',
    ]);
    nature.say(['啊～～～', callname, '……']);
    era.printButton('「什么呀，内恰，怎么了吗？」', 1);
    await era.input();
    nature.say(['啊，', callname, '，你听我说，其实是这样……']);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' 话刚说一半，突然意识到了什么，尖叫着跳到了一边。',
    ]);
    await nature.say_and_wait('啊啊啊啊啊啊啊？！');
    nature.say([
      callname[0],
      callname[0],
      callname[0],
      callname,
      '！你什么时候来的？！',
    ]);
    era.printButton('「就在刚才。嗯？那封信是……？」', 1);
    await era.input();
    await nature.say_and_wait(
      '事到如今想隐瞒也已经晚了。这么明显的设计，马上就会发现是情书……',
      true,
    );
    era.printButton('「好可爱的信纸啊，是寄来的粉丝信吗？」', 1);
    await era.input();
    await nature.say_and_wait('居然没有。', true);
    await nature.say_and_wait('不，这不是粉丝信……');
    era.printButton('「不是吗？那是什么信？」', 1);
    await era.input();
    await nature.print_and_wait([
      '没想到 ',
      you.get_colored_actual_name(),
      ' 会这样投来第二发直球提问，',
      nature.get_colored_name(),
      ' 不禁后悔自己刚刚为什么要下意识的否定，导致自己像这样无路可退',
    ]);
    await nature.say_and_wait('嗯，这是……');
    await nature.say_and_wait(['没想到会以这种形式交给', you.sex], true);
    await nature.print_and_wait([
      '这也是自作自受吗？虽然',
      nature.teen_sex_title,
      '这么想着，但还是下定了决心，把信交给了 ',
      callname,
      '。',
    ]);
    await nature.say_and_wait('那个……情书……');
    era.printButton('「啊？情书？啊，果然内恰很受欢迎啊。」', 1);
    await era.input();
    await nature.say_and_wait([
      '喂！男人会用这样的信纸写情书吗？是写给 ',
      callname,
      ' 的，给你的！',
    ]);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' 由于过于混乱，不由得粗暴地把信摔在了桌上。',
    ]);
    era.printButton('「给我的……情书？」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      ' 仔细地看着信纸，浮现在 ',
      you.get_colored_actual_name(),
      ' 脸上的笑容，让 ',
      nature.get_colored_name(),
      ' 心痛不已',
    ]);
    era.printButton('「谢谢，我太高兴了。」', 1);
    await era.input();
    await nature.say_and_wait('果然，收到这种东西会开心的吗？');
    era.printButton(
      `「如果能从可爱的${nature.uma_sex_title}${nature.child_sex_title}，最好是自己喜欢的${nature.uma_sex_title}${nature.child_sex_title}那里得到的话，我会很高兴的。」`,
      1,
    );
    await era.input();
    await nature.say_and_wait(
      [
        '喜欢的',
        nature.uma_sex_title,
        nature.child_sex_title,
        '……原来是这样啊',
      ],
      true,
    );
    await nature.say_and_wait(
      [
        callname,
        ' 喜欢的',
        nature.uma_sex_title,
        nature.child_sex_title,
        '给了',
        nature.sex,
        '一封情书。互相了解了对方的心意的两个人两情相悦……',
      ],
      true,
    );
    await nature.say_and_wait('原来我从一开始就没有胜算啊……', true);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' 胸口的疼痛已经到了极限，但还是拼命地继续对话……',
    ]);
    await nature.say_and_wait([
      '这样啊，',
      callname,
      '，你喜欢的',
      nature.uma_sex_title,
      nature.child_sex_title,
      '，',
      nature.sex,
      '也很可爱，不是很适合嘛？',
    ]);
    era.println();

    era.printButton('「嗯……？这封情书，不是内恰给我的吗？」（升级关系）', 1);
    era.printButton(
      '「要是有就好了呢。很可惜，我现在还没有那样的对象。」（暂不升级）',
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.say_and_wait('啊？');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' 的话语让 ',
        nature.get_colored_name(),
        ' 陷入了一阵混乱。',
      ]);
      await nature.say_and_wait([callname, '，觉得是我写的情书吗？'], true);
      await nature.say_and_wait([callname, '，为收到了情书而高兴吗？'], true);
      await nature.say_and_wait(
        [
          callname,
          ' 以为是喜欢的',
          nature.uma_sex_title,
          nature.child_sex_title,
          '寄来的情书，所以很高兴？',
        ],
        true,
      );
      await nature.say_and_wait(
        [
          '——也就是说，',
          callname,
          ' 喜欢的',
          nature.uma_sex_title,
          nature.child_sex_title,
          '是……',
        ],
        true,
      );
      await nature.print_and_wait([
        '好不容易理清了前后逻辑的 ',
        nature.get_colored_name(),
        ' 瞬间满面潮红。',
      ]);
      await nature.say_and_wait([
        '啊～！这么说来，',
        call_55,
        ' 找我有事啊～！对不起！',
        callname,
        '！我得去一下！今天晚上我回来做饭的，到时候见！',
      ]);
      await nature.print_and_wait([
        '打断了 ',
        you.get_colored_actual_name(),
        ' 的话，',
        nature.get_colored_name(),
        ' 飞也似的冲出了训练员室',
      ]);
      await nature.print_and_wait(
        '跑着跑着，在商店街停了下来，无精打采地坐了下来',
      );
      await nature.say_and_wait(
        '我是笨蛋吗？为什么要逃跑呢？只要接受不就好了吗？啊！我刚刚还说晚上要去做饭！',
      );
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' 懊恼地抓着头。按照这个流程，晚上再回去见 ',
        you.get_colored_actual_name(),
        ' 的话，相当于说已经准备好答复了……',
      ]);
      await nature.say_and_wait([
        '不，不要再回头了，向前走吧。要回报 ',
        callname,
        ' 给予我的一切。',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' 下定了决心…站起身来，转身向着文具店走去。',
      ]);
      await nature.print_and_wait(
        '这是为了购买能承载属于自己的那份心意的信纸。',
      );
      await nature.say_and_wait(
        '还有……以防万一，也换一下内衣吧……只，只是为了以防万一……',
      );
    } else {
      await nature.say_and_wait('诶？这样吗？');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' 给出的答案出乎 ',
        nature.get_colored_name(),
        ' 的意料，胸口的绞痛顿时缓解了不少。',
      ]);
      await nature.say_and_wait('这样啊……嘿嘿，那……还有机会呢。');
      era.printButton('「嗯？什么机会？」', 1);
      await era.input();
      await nature.say_and_wait('秘密！');
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' 换上一副俏皮的笑容，轻跳着离开了训练员室',
      ]);
      await nature.say_and_wait(
        '不过，这样的话，我也不能再悠哉悠哉下去了，再不行动的话……',
      );
    }
    return ret;
  },
  async 89(nature, you) {
    await nature.print_and_wait([
      '晚上，',
      nature.get_colored_name(),
      ' 从壁橱里拿出一个放了有些年头的饼干罐，珍重地放在桌子上。',
    ]);
    await nature.print_and_wait([
      '罐子里整整齐齐的堆叠着许多个折纸奖杯，每个奖杯都是和 ',
      you.get_colored_actual_name(),
      ' 的轨迹，每一个都是一次珍贵的回忆。不仅仅记录着一路走来的每一场比赛，还保存着二人一起度过的幸福时光。',
    ]);
    await nature.print_and_wait([
      '一想到这里面的收藏未来还会不断增加，一抹笑意便不自觉浮上了',
      nature.sex,
      '的俏脸。',
    ]);
  },
};
