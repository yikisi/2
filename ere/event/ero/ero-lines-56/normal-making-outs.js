const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

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

module.exports = class extends EroNormalMakingOuts {
  async pet_ear(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.pet_ear(attacker, defender, hook);
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
        defender.uma_sex_title,
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
  }

  async pull_ear(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.pull_ear(attacker, defender, hook);
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
  }

  async pet_breast(attacker, defender, hook) {
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
    } else {
      return await super.pet_breast(attacker, defender, hook);
    }
  }

  async pet_nipple(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.pet_nipple(attacker, defender, hook);
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
      await attacker.print_and_wait(['那么再拉扯一下呢？']);
      await attacker.print_and_wait([
        '结果 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 触电般地仰起头来，支支吾吾地靠在了自己的身上',
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
        ' 的动作而扭动着身体，如同念着祷词般从口中吐出有节奏的快乐呻吟',
      ]);
    }
  }

  async finger_fuck(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.finger_fuck(attacker, defender, hook);
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
  }

  async blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.blow_job(attacker, defender, hook);
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
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_blow_job(attacker, defender, hook);
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
      await this.blow_job(defender, attacker, hook);
    } else {
      if (is_asking) {
        await defender.say_and_wait(['知道啦，知道啦。']);
        await attacker.print_and_wait(['有些心不在蔫的吞下了肉棒，']);
        await defender.say_and_wait(['……咕哇、咕噜、啾、呜！']);
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
      await this.blow_job(defender, attacker, hook);
    }
  }

  async force_blow_job(attacker, defender, hook) {
    await this.ask_blow_job(attacker, defender, hook);
  }

  async deep_blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.deep_blow_job(attacker, defender, hook);
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
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
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
        attacker.phy_sex_title,
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
  }

  async force_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.force_deep_blow_job(attacker, defender, hook);
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
        attacker.phy_sex_title,
        '再一次强硬地用手将面前的',
        defender.teen_sex_title,
        '固定在了自己的股间，直到自己满足之前。',
      ]);
    }
    await deep_blow_job_kitaru(defender, attacker, hook);
  }

  async hand_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.hand_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait([
        '那个，',
        sys_get_colored_callname(attacker.id, defender.id),
        '……我做的还行吧？',
      ]);
      await attacker.print_and_wait([
        '没听见回答，不过，见到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的腰微微挺起来了呀。',
      ]);
      await attacker.say_and_wait(['那我继续了……']);
      await attacker.print_and_wait([
        '用右手的小指和食指轻盈的环在肉棒上，缓慢的撸动着，时不时用另一只手指肚摩擦着龟头的缝隙，刮弄蹭动着发出让两人的身体都为之颤抖的湿粘摩擦声，直到两只手都被通红龟头滴落的透明先走汁弄的黏糊糊的。',
      ]);
      await attacker.say_and_wait(['唔……这样，就像参拜前的洗手一样。']);
      await attacker.print_and_wait([
        '被巫女侍奉着尽心的肉棒也滴出了更多的先走汁作为回应。',
      ]);
    } else {
      await attacker.print_and_wait([
        '用左手微微托起变得更加膨胀的肉竿，然后，在先前的服侍中已经变得黏糊糊的右手就直接罩上了变得晶莹的龟头。',
      ]);
      await attacker.print_and_wait([
        '在洗切塔罗牌时灵活无比的纤长五指像屈服了一般无力垂下，把白皙的柔软掌心牢牢地同狰狞的肉冠固定在了一起。',
      ]);
      await attacker.print_and_wait([
        '加快了手中套弄撸动的节奏，发觉身前男人的腰不由自主的挺的更高。',
      ]);
      await attacker.print_and_wait([
        '哈……',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 也很开心呢……',
      ]);
      await attacker.print_and_wait([
        '自己的小腹也一跳一跳的，所以，请赶紧射出来吧……',
      ]);
    }
  }

  async ask_hand_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_hand_job(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.hand,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        '盯着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那光是看见就能让自己的小腹一跳一跳的家伙，自觉的十指已经像平时受到神启一样有律的摆动起来。',
      ]);
      await defender.say_and_wait(['那个，想我用手做吗？']);
      await defender.print_and_wait([
        '不用说话也能占卜的到了，伸手安慰着青筋跳动的肉棒，直到它慢慢变成能把自己小穴撑开塑造成下流难堪的形状的怪物模样。',
      ]);
    }
    await this.hand_job(defender, attacker, hook);
  }

  async force_hand_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.force_hand_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '，摊开手',
      ]);
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 颇为强硬的将肉棒伸到了自己摊开的双手间，散发出来的浓厚气味光是嗅到就让脑子发热。',
      ]);
      await defender.print_and_wait([
        '应该做出点不情愿的表情吧？用这么强硬的态度命令自己？',
      ]);
      await defender.print_and_wait([
        '但，右手已经颇为虔诚的开始轻轻磨挲着肉冠上敏感的沟壑，左手则是连同鼓囊囊的种子袋一起，将 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的肉棒在柔软的掌心上托起。',
      ]);
    }
    await this.hand_job(defender, attacker, hook);
  }

  async hand_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.hand_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait(['肉棒变得更大了呢……']);
      await attacker.print_and_wait([
        '还有那股能把自己弄的乱糟糟，令人自己上瘾的气味也是……',
      ]);
      await attacker.print_and_wait([
        '稍稍把正握着竿身的双手向后移了一点，露出那挺硬的龟头，用自己的嘴唇轻轻衔住，让舌尖上的热气随着带有自己体温的呼吸飘向 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的肉根。',
      ]);
      await attacker.say_and_wait(['啾～']);
      await attacker.print_and_wait([
        '看来 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 很喜欢这样呢。',
      ]);
    } else {
      await attacker.say_and_wait(['呲溜呲溜——']);
      await defender.print_and_wait([
        '身下的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 稍稍将脸颊抬高了一些，在肉根的旁边舔舐着，舌尖用着力度，轻点着冠状沟和铃口。',
      ]);
      await defender.print_and_wait([
        '偶尔唇瓣不得不暂时离开时，等候了许久的双手会替补上空位，纤细的玉指竭尽所能地抚弄肉根，交替着带来快感。',
      ]);
    }
  }

  async ask_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_hand_and_blow_job(attacker, defender, hook);
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
      await attacker.say_and_wait(['试着舔一下。']);
      await defender.print_and_wait([
        '从 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那里得到了这样的指示，于是毫无怀疑的吐出的舌尖，卷起自马眼滴落的液体吞入腹中。',
      ]);
      await defender.print_and_wait([
        '哈，可以的吧，这样自己的舌头都被弄的黏糊糊的了……欸！还要再大胆一点吗？',
      ]);
      await defender.print_and_wait([
        '再用手调整了一下角度，然后像对待珍宝珠般用舌尖绕着龟头与冠状沟不断舔弄着。',
      ]);
    }
    await this.hand_and_blow_job(defender, attacker, hook);
  }

  async force_hand_and_blow_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.force_hand_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.say_and_wait(['给我同时用手和嘴，做的到吧？']);
      await defender.print_and_wait([
        '仰视着正居高临下 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 居高临下的视角里，不由自主的让双腿呈M字的大大张开，肉棒恰巧就在伸出舌尖就能触碰到的地方。',
      ]);
      await defender.print_and_wait([
        '呜，态度太恶劣了吧，暗自腹诽着，但抖M的自己已经开始小心地磨挲着肉棒上条条胀起的经络，同时用舌尖轻点起铃口。',
      ]);
      await defender.print_and_wait(['咕……当然，当然做的到。']);
    }
    await this.hand_and_blow_job(defender, attacker, hook);
  }

  async tit_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.tit_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '见着身前的担当把自己的肉棒整根塞入乳沟，然后尽力的挤压着那对平时隐藏在校服下硕大调皮的白兔。',
      ]);
      await attacker.say_and_wait([
        '嗯～嗯咻，呼、嗯～',
        defender.get_colored_name(),
        ' 感觉……还好吧？',
      ]);
      await defender.print_and_wait([
        '于是亲昵地拍了拍正侍奉着自己的少女，手掌在亮橙色的头发上来回蹭了蹭。',
      ]);
      await defender.print_and_wait(['嘶……感觉更卖力了呢。']);
    } else {
      await attacker.print_and_wait([
        '肉棒一跳一跳的，看来自己的侍奉是有效果的呢，不过，总是担心 ',
        defender.get_colored_name(),
        ' 会不舒服。',
      ]);
      await attacker.print_and_wait([
        '于是试着将自己的两颗已经挺立变硬的樱桃贴在肉棒上，让那对变得硬硬的乳粒给乳交的过程带来不一样的感觉。',
      ]);
      await attacker.print_and_wait([
        '乳尖在撞上变得更加滚烫的肉棒时，传来的电流感麻痹着大脑，胯间变得黏糊糊了呢。',
      ]);
      await attacker.print_and_wait([
        '哈……哈啊，这样子，看来自己也乐在其中呢。',
      ]);
    }
  }

  async ask_tit_job(attacker, defender, hook) {
    if (defender.id !== 56) {
      return await super.ask_tit_job(attacker, defender, hook);
    }
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait([
        '盯着自家占卜师胸前那对会随着动作而一晃一晃的圆润乳肉，挺立起来的乳尖周围露着健康的粉色。',
      ]);
      await attacker.print_and_wait(['如果让肉棒被那对奶子包裹的话。']);
      await defender.say_and_wait(['可以的～!']);
      await attacker.print_and_wait([
        '还没说出口便听见了自家担当熟悉的应答声，毕竟 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 就是这样善解人意的赛马娘。',
      ]);
    }
    await this.tit_job(defender, attacker, hook);
  }

  async tit_and_blow_job(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.tit_and_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        ' 一上一下活动着腰肢，让晶莹的先走汁均匀的涂满了正夹着肉棒的柔嫩沟壑，又被乳沟和肉棒叠加在一起的温度蒸发，弄的脑袋也晕乎乎的。',
      ]);
      await attacker.print_and_wait(['感觉……味道比平时还浓烈呀。']);
      await attacker.print_and_wait([
        '小心地调整位置，只露出还在不断滴落先走汁的龟头在自己的嘴前，微微身子微微前倾将其含入口中，舌头正好垫在冠状沟的位置。',
      ]);
      await attacker.print_and_wait([
        '啊……怎么都算不上美味吧，但是……还是会多吞下去一点的。',
      ]);
    } else {
      await attacker.say_and_wait(['吸溜吸溜……']);
      await attacker.print_and_wait([
        '滴落的咸腥液体没有浪费，被自己一滴不剩的吞入了腹中，而偶尔龟头从口中抽离时，粉舌也会伴随着跟上，在液体落入那对已经被弄的滑腻腻亮晶晶的欧派前赶着接住。',
      ]);
      await attacker.print_and_wait(['直到脑子里都被这股下流的气味充满。']);
      await attacker.print_and_wait([
        '毕竟……是 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 认可自己的奖励呢',
      ]);
    }
  }

  async ask_tit_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 从乳肉中冒出头的龟头有些没精打采的样子。',
      ]);
      await defender.print_and_wait('而且本人也很好懂地正合起掌拜托。');
    }
    await this.tit_and_blow_job(defender, attacker, hook);
  }

  async foot_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '～这样……感觉还行吗？',
      ]);
      await defender.print_and_wait([
        '眯起的橙色眼眸绽着些许狡黠，那双能跑出优秀末脚的双足踏在了 ',
        defender.get_colored_name(),
        ' 的肉棒上',
      ]);
      await defender.print_and_wait([
        '一脚抚弄龟头，一脚托起杆身，待到淅淅索索的足底摩擦让龟头预热的差不多之后，转而沿着胀红肉棒上根根暴起的粗筋，向感官不那么敏锐的末端探去。',
      ]);
      await attacker.say_and_wait(['……真热啊……像要融化一样……']);
      await defender.print_and_wait([
        '赛马娘们珍视的双足，就这么为了做爱时的情趣，被轻易的使用着，让龟头前端粘粘的先走汁，更多地更快地被生产出来',
      ]);
    } else {
      await attacker.print_and_wait([
        '大概是擅长差马跑法的自己，平时在赛场上时也要随时分心关注身边对手的缘故吧？',
      ]);
      await attacker.print_and_wait([
        '所以，在专心致志的用双足照料着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 肉棒的自己，还能有余裕注意到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的情况。',
      ]);
      await attacker.print_and_wait([
        '开始只是用足底脚掌夹住肉棒不住的套弄着，等听到 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的喘息声逐渐粗重起来，便又换个姿势继续刺激着肉棒的敏感点。',
      ]);
      await attacker.print_and_wait([
        '让柔软的足心踏着龟头，等到肉棒开始不住的抖动时，又坏坏的停下摩擦，转而曲起脚趾压在龟头上扣住。',
      ]);
      await attacker.say_and_wait(
        [
          '哈……这种能把 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 硬邦邦的肉棒踩在脚下的，莫名的优越感。',
        ],
        true,
      );
      await attacker.say_and_wait(
        ['……好奇怪，明明只是用脚在做，但心跳快得不行，身体也好热。'],
        true,
      );
    }
  }
};
