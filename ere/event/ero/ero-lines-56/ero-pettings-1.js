const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

async function deep_blow_job_kitaru(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '脑袋上传来了被抚摸的感觉，来自 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的大手轻柔的按在蓬松的橙发上，似乎在鼓励一般的抚摸着，配着自己的动作，时不时的触碰一下已经耷拉下来的两只耳朵。',
    ]);
    await attacker.print_and_wait([
      '像是……呜不对……这种姿势，分明就是 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的宠物嘛，是被当成了小狐狸吗？',
    ]);
    await attacker.print_and_wait([
      '于是已经在肉棒的气味中被训练好的自己明白了来自主人的每一个指令。',
    ]);
    await attacker.print_and_wait([
      '像是在被拉着左耳时要抿紧双唇压迫肉棒，并用湿润的粉舌裹住敏感的龟头。',
    ]);
    await attacker.print_and_wait([
      '被扯着右耳时该左右扭动着脑袋，用脸颊内侧的软肉与嫩舌一同服侍着肉棒。',
    ]);
    await attacker.print_and_wait([
      '而当 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 短促的摸头时，则要吸紧肉棒前端让脸颊淫荡的凹陷下去，并用舌尖磨蹭着铃口。',
    ]);
    await attacker.say_and_wait(['呜咕——']);
    await attacker.print_and_wait([
      '腿发软似的开始打颤，小脑袋晕乎乎的加快了吞吐肉棒的动作。',
    ]);
  } else {
    await attacker.say_and_wait(['呜咕——']);
    await defender.print_and_wait([
      '双腿发软似的开始打颤，明明能跑长距离的身体也像是支撑不住了一样向前倾倒着，让那俏脸凑近着离肉棒的根部越来越近。',
    ]);
    await defender.print_and_wait([
      '微眯着那被肉棒的气味熏的睁不开的星星眼，在呼吸间自嘴角漏出带着淡淡肉棒腥味的口水，顺着伸直的雪颈滑落，挂在那对乳球上。',
    ]);
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '？',
    ]);
    await attacker.say_and_wait(['唔……唔唔唔唔……']);
    await defender.print_and_wait([
      '试探性的问了问身下人的状况，却只得到了支支吾吾的回应，小脸彻底埋在了',
      defender.get_colored_name(),
      '的胯下的阴毛丛中。',
    ]);
    await defender.print_and_wait([
      '嘛，既然没事，那就继续吧，将担当的脑袋牢牢地按在了自己胯下，然后不断的前后耸动着腰部，像是真的在抽插着 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的嘴穴一样，尽情的享受着用肉棒连同担当的小嘴喉咙一起侵犯的快感。',
    ]);
  }
}

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '平时因为惩罚的缘故，碰过很多次 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的耳朵了',
      ]);
      await attacker.print_and_wait([
        '不过并不是现在这样把 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那对，在',
        defender.get_uma_sex_title(),
        '中算的上长的马耳朵，以带着性的意味，肆意的揉捏，把玩。',
      ]);
      await defender.say_and_wait(['唔呀❤️……']);
      await attacker.print_and_wait([
        '栗色的马尾巴一下子绷得笔直，连舌尖也吐了出来，上下颤动着。',
      ]);
      await attacker.print_and_wait(['看来右边的耳朵会更敏感一些呢。']);
    } else {
      await defender.print_and_wait([
        '先是轻捏着耳廓的边缘，然后 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 直接把手指伸了进来。',
      ]);
      await defender.say_and_wait(['咿呀❤️!']);
      await defender.print_and_wait([
        '抚摸慢慢变成搓揉，手指还使坏般蹭着绒毛，暖呼呼的感觉不断的自耳朵传来。',
      ]);
      await defender.print_and_wait([
        '想要躲开，但背叛了自己的耳朵还是自觉的伸直了开来，被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 玩弄了个遍。',
      ]);
      await defender.print_and_wait(['好刺激，视线……视线逐渐变得雾蒙蒙的了……']);
      await defender.print_and_wait(['并拢的双腿间也变得黏糊糊的了。']);
    }
  };

  handlers[ero_hooks.pull_ear] = async (attacker, defender) => {
    if (defender.id !== 56) {
      throw new Error('unsupported hook!');
    }
    await attacker.print_and_wait(['如果扯一下的话……']);
    await attacker.print_and_wait([
      '本来只是打算比划一下，但在对上了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 同样期待的目光后，想象化为了现实',
    ]);
    await attacker.print_and_wait([
      '粗暴地，像是对待养殖场里的兔子一样，强迫',
      defender.sex,
      '仰起头来',
    ]);
    await attacker.print_and_wait([
      '敏感的耳朵根部在被 ',
      attacker.get_colored_name(),
      ' 揪起时向着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的大脑输送着被误认成快感的疼痛。',
    ]);
    await defender.say_and_wait(['唔呜呜❤️……呃❤️……']);
    await attacker.print_and_wait(['是不是玩的有些过了呢？']);
    await attacker.print_and_wait([
      '但一松开手，因拉扯而泛着樱桃红的栗色马耳朵就欢快地摇摆了起来，诉说着主人心情良好的事实。',
    ]);
  };

  handlers[ero_hooks.pet_breast] = async (attacker, defender, hook) => {
    const touched = era.get(`tcvar:${defender.id}:阴道接触部位`);
    if (attacker.id === 0) {
      if (touched.part === part_enum.penis && touched.owner === attacker.id) {
        await attacker.print_and_wait([
          '近乎粗鲁地揉捏起那对平时躲在衣服下的丰满乳球, 让那对因为汗液而光滑富有弹性的乳房完全按照自己的意思变换着形状，手指偶尔拂过那莓果般的乳头。',
        ]);
        await defender.say_and_wait(['呜……！❤️这里……！❤️❤️']);
        await attacker.print_and_wait([
          '被掌握了弱点的 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 发出了甜美闷声的同时反弓起了身子，最后嘤咛着软倒在怀里。',
        ]);
      } else if (hook.arg) {
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          ' 胸口的那对沉甸甸，此刻落入手中。',
        ]);
        await attacker.print_and_wait([
          '虽然平时隔着衣服看起来并不算十分巨大，但那不断传递到手心鼓鼓囊囊的触感，让自己进一步确定了，担当是有着隐藏巨乳的下流马娘。',
        ]);
        await defender.say_and_wait(['唔唔……❤️']);
        await attacker.print_and_wait([
          '噗呢噗呢的揉动着，享受着掌间乳肉那温热又水润的肉浪。',
        ]);
        await attacker.print_and_wait([
          '每当手指陷进柔软的时候，兴奋起来的 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 就会一颤一颤地反应着，自喉间漏出暧昧的呻吟。',
        ]);
      } else {
        await attacker.print_and_wait([
          '近乎完全湿润的黄玉色眸子，伴着鼻腔中发出的诱人呻吟声，看来 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 有着一对敏感的胸部呢。',
        ]);
        await attacker.print_and_wait(['要停下来吗？稍稍放慢了手中的动作']);
        await defender.say_and_wait(['哈啊❤️……欸……']);
        await defender.say_and_wait(['那个，可以继续的……']);
        await attacker.print_and_wait(['充满欲情地对自己说出了恳求的话语。']);
        await attacker.print_and_wait([
          '于是变本加厉地将这对柔软到几乎没有固定形状的乳球拉扯成了更符合自己心意的形状，让白花花的乳肉遍布掌印红痕……不知道欢爱结束后会不会留下痕迹呢？',
        ]);
        await defender.say_and_wait(['唔哈……❤️']);
      }
    } else if (defender.sex_code === 1) {
      await attacker.print_and_wait([
        '不知道自己该做些什么，于是在食指在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的胸部上画着圈。',
      ]);
      await attacker.print_and_wait(['被注意到了吗？']);
      await attacker.print_and_wait([
        '于是索性把脸靠在男人的胸膛上，撒娇般的蹭动着。',
      ]);
    }
  };

  handlers[ero_hooks.pet_nipple] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '只是碰到胸部就如此敏感的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 在被玩弄乳头时会怎么样呢？',
      ]);
      await attacker.print_and_wait([
        '直接伸手捏住了那对肿胀的不像样子的乳头, 像是把玩着驱魔用的豆子一样碾动着.',
      ]);
      await defender.say_and_wait(['啊～！……哈啊❤️、哈啊、嗯～❤️']);
      await attacker.print_and_wait([
        '自己担当的声音逐渐变得高昂起来, 脸上也露出了因为快感过载的痴态',
      ]);
      await attacker.print_and_wait(['那么再拉扯一下呢 ?']);
      await defender.say_and_wait([
        '结果 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 触电般的仰起头来 , 支支吾吾地靠在了自己的身上',
      ]);
    } else {
      await defender.say_and_wait(['……呀啊～❤️']);
      await attacker.print_and_wait([
        '使坏般地, 单单玩弄着自己担当的敏感乳头.',
      ]);
      await attacker.print_and_wait([
        '扭扭捏捏的乳头被大拇指和食指捏住, 像是把玩着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 决胜服上的念珠般左右拧动着，享受着那个硬邦邦，带着回弹的触感.',
      ]);
      await defender.say_and_wait(['……啊❤️～嗯、呜～呀❤️']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 就会因为 ',
        attacker.get_colored_name(),
        ' 的动作而扭动着身体 , 如同念着祷词般从口中吐出有节奏的快乐呻吟',
      ]);
    }
  };

  handlers[ero_hooks.finger_fuck] = async (attacker, defender) => {
    if (defender.id !== 56) {
      throw new Error();
    }
    await attacker.print_and_wait([
      '只是手指稍微划过，面前 ',
      defender.get_colored_name(),
      ' 的穴口便马上更湿了起来。',
    ]);
    await defender.say_and_wait(['呀啊……']);
    await attacker.print_and_wait(['自家巫女湿润娇艳的呻吟声在耳边回荡着。']);
    await attacker.print_and_wait([
      '先是食指，再是中指，时不时还勾起指尖，在有着褶皱感触的肉壁上用指尖不断刺激着。',
    ]);
    await defender.say_and_wait(['呼，呼呼，啊……命定之人……手指，好厉害']);
    await attacker.print_and_wait([
      '黏黏糊糊的小穴里，早已分不清是 ',
      attacker.get_colored_name(),
      ' 的手指在翻搅着穴肉，还是寻求着刺激的蜜肉在主动吮吸着手指',
    ]);
  };

  handlers[ero_hooks.blow_job] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '巫女要掌握乱七八糟的仪式啊，基础的类比学习是必要的能力，但是……没想过会用在这种地方。',
      ]);
      await attacker.print_and_wait([
        '想象成胡萝卜，用自己的舌尖轻触肉根，然后再缠绕上去舔舐，品尝着来自 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 雄性荷尔蒙的味道。',
      ]);
      await attacker.say_and_wait(['哈、呜、啾噜……']);
      await attacker.print_and_wait([
        ' 嘴巴在吞舔肉棒的过程中流露出淫浊而放浪的液体吸吮声。',
      ]);
    } else {
      await defender.say_and_wait(['学得很快呢。']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 望着正呲溜呲溜侍奉着坚挺的自己，拍了拍的脑袋以示夸奖。',
      ]);
      await attacker.print_and_wait(['嗯……呵呵、很舒服吧。']);
      await attacker.print_and_wait([
        '伸出淫靡的舌头一点点舔弄着马眼，或者把龟头含在口中用舌面轻压，甚至像小恶魔一样轻轻用牙齿来回刮蹭着 ',
        defender.get_colored_name(),
        ' 的敏感带。',
      ]);
      await attacker.print_and_wait([
        '每当 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 有所反应的时候，自己都会开心的笑出来。',
      ]);
    }
  };

  handlers[ero_hooks.ask_blow_job] = handlers[ero_hooks.force_blow_job] =
    async (attacker, defender, hook) => {
      if (defender.id !== 56) {
        throw new Error();
      }
      const is_asking = hook.hook === ero_hooks.ask_blow_job;
      if (hook.arg) {
        if (is_asking) {
          if (
            await ask_action(
              attacker.id,
              defender.id,
              part_enum.penis,
              part_enum.mouth,
            )
          ) {
            await after_refusing_by_defender(attacker, defender, hook);
            return;
          }
          await defender.say_and_wait(['用嘴吗？']);
          await defender.say_and_wait(['嗯，我会尽力的。']);
          await defender.print_and_wait([
            '跪坐在地上把头凑了过去，让呼出的吐息拍打肉棒上，看起来又变大了一点呢。',
          ]);
          await defender.print_and_wait(['然后……']);
          await defender.say_and_wait(['咕！']);
          await defender.print_and_wait([
            '一口气把阴茎吞入口中，参拜时用于念祷词的小嘴被肉棒塞得满满的，伴随着咕啾咕啾的声音开始给自己的 ',
            sys_get_colored_callname(defender.id, attacker.id),
            ' 口交。',
          ]);
        } else {
          await attacker.say_and_wait('把嘴张开。');
          await defender.print_and_wait(
            '挣扎的话说不定有用……虽然有这样想过，身体却一点点被那只手压低了下去……',
          );
          await defender.say_and_wait('唔……');
        }
        await handlers[ero_hooks.blow_job](defender, attacker, hook);
      } else {
        if (is_asking) {
          await defender.say_and_wait(['知道啦，知道啦。']);
          await attacker.print_and_wait(['有些心不在蔫的吞下了肉棒，']);
          await defender.say_and_wait([' ……咕哇、咕噜、啾、呜！']);
          await attacker.print_and_wait([
            '看来是没做好准备，试着吐出肉棒的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 用鼻子吐着气，一点点的让坚挺离开了口中。',
          ]);
          await attacker.print_and_wait([
            '不过从翕动着的鼻翼与摇晃的尾巴来看，应该是颇为享受的样子。',
          ]);
        } else {
          await defender.say_and_wait('哈……', true);
          await defender.say_and_wait('还要……继续嘛……', true);
        }
        await handlers[ero_hooks.blow_job](defender, attacker, hook);
      }
    };

  handlers[ero_hooks.deep_blow_job] = async (attacker, defender, hook) => {
    if (attacker.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.print_and_wait(['呼……这样喘气会有点费劲呢。']);
      await attacker.print_and_wait([
        '向后再仰了仰头，小舌用力的缩起，让肉棒得以挤进了自己的口中。',
      ]);
      await attacker.print_and_wait(['还是，没有到头吗？']);
      await attacker.print_and_wait([
        '直到闭上眼睛的自己察觉到了杂乱的毛发戳刺到鼻子的瘙痒感，还有那股愈发明显，莫名令自己沉醉的腥臭味。',
      ]);
      await attacker.print_and_wait([
        '头脑发白，这样，再深一点也没有关系的吧？',
      ]);
    } else {
      await attacker.say_and_wait(['咕唔—!']);
      await attacker.print_and_wait([
        '尽管那对星星瞳已经微微翻白，但喉咙仍不停地舒张收缩，用往日里除空气外绝不会有他物触及的喉肉勒紧，刺激着龟头。',
      ]);
      await attacker.say_and_wait(['唔～哧溜～唔—!']);
      await attacker.print_and_wait([
        '自贴在阴毛丛中的粉唇与肉棒的缝隙间漏出色情的吐息，翘起的栗色马尾邀功般的摆动了起来。',
      ]);
    }
    await deep_blow_job_kitaru(attacker, defender, hook);
  };

  handlers[ero_hooks.ask_deep_blow_job] = async (attacker, defender, hook) => {
    if (defender.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('还想要，更深一点……');
      await defender.print_and_wait([
        '贪心地呓语着，被索取快感的本能所支配的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 挺起了腰。',
      ]);
      await defender.print_and_wait('更深地含进去了……');
      await defender.print_and_wait('顶到，最里面了……');
    } else {
      await defender.print_and_wait([
        '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
        defender.get_colored_name(),
        ' 在这方面出乎',
        attacker.get_phy_sex_title(),
        '预料的有天赋。',
      ]);
      await defender.print_and_wait([
        '用余光看着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 吸着气仰起头的姿势，没空哼歌的 ',
        defender.get_colored_name(),
        ' 好懂地抖起了耳朵。',
      ]);
      await defender.print_and_wait('怎么样～');
      await defender.print_and_wait([
        '虽然那张小嘴此刻没有说话的空闲，但与自家的担当正负距离接触的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 完全领会了那用舌尖勾勒在肉棒龟头上的邀功言语。',
      ]);
    }
    await deep_blow_job_kitaru(defender, attacker, hook);
  };

  handlers[ero_hooks.force_deep_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (defender.id !== 56) {
      throw new Error();
    }
    if (hook.arg) {
      await attacker.say_and_wait('把头抬起来。');
      await defender.print_and_wait('更深地含进去了……');
      await defender.print_and_wait('依旧是，叫人难以听出温情的短促命令句。');
      await defender.print_and_wait([
        '但 ',
        defender.get_colored_name(),
        ' 的身体却难以抗拒地被其所支配着。',
      ]);
    } else {
      await defender.print_and_wait([
        '无言地催促着，',
        attacker.get_phy_sex_title(),
        '再一次强硬地用手将面前的',
        defender.get_teen_sex_title(),
        '固定在了自己的股间，直到自己满足之前。',
      ]);
    }
    await deep_blow_job_kitaru(defender, attacker, hook);
  };
};
