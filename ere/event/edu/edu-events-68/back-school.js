const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kita
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kita, me, hook, event_object) => {
  const cur_chara = era.get('flag:当前互动角色');
  if (cur_chara > 0 && cur_chara !== 68) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg;
  if (event_arg !== 'kitasan_touch') {
    return;
  }
  await print_event_name('紧急开店 · 小北按摩！', kita);
  await kita.say_and_wait(`训练员${me.adult_sex_title}！欢迎光临小北按摩店！`);
  await era.printAndWait(
    `推开训练员室的门，${me.name} 看到穿着和服的 ${kita.name} 正跪在门后，而身后的训练员室的桌子则被铺上了一块白布。`,
  );
  await era.printAndWait(
    `这是在干什么啊……${
      me.name
    } 目瞪口呆的看着今天应该没有训练任务的${kita.teen_sex_title}。`,
  );
  await kita.say_and_wait(
    `嘿嘿嘿～为了感谢训练员${me.adult_sex_title}对人家的照顾，也是您最近身体总是嘎吱嘎吱的响。`,
  );
  await kita.say_and_wait(
    `所以……唔，是呢，今天的小北是为您提供临时按摩服务，让训练员${me.adult_sex_title}放松身体的按摩${
      kita.sex_code - 1 ? '女将' : '大将'
    }小北哦！`,
  );
  await era.printAndWait(
    '说着，小北将额头垂下紧紧贴地，三指并拢在额前，露出自己光滑而娇嫩的后背。',
  );
  await era.printAndWait(
    `${
      me.name
    } 这时才注意到小北穿的是一件近似肚兜的露背服，只要附身就能看到${kita.uma_sex_title}背后外溢的春光。`,
  );
  era.printButton('「不不不这再怎么说也不对劲吧……」', 1);
  era.printButton('「那么就麻烦小北了」', 2);
  const ret = await era.input();
  if (ret === 1) {
    await era.printAndWait(
      `${me.name} 后腿几步想要逃离，可是嘎嘣的一声脆响和脊椎的感觉让 ${me.name} 痛苦的垂下腰。`,
    );
    await era.printAndWait(
      `……不行了，只能接受小北的服务了……不然就算小北不放过 ${me.name}，这老腰也不会放过的……`,
    );
    await era.printAndWait(`${me.name} 重新转过身，踉跄着向小北走去。`);
    era.drawLine();
    await era.printAndWait(
      '尽管身体各处传来了嘎吱嘎吱的声响，但除了偶尔的疼痛之外只有舒服的感觉。',
    );
    await era.printAndWait(
      `疲惫的身体在小北的手指下变得轻松起来，那温柔而有力的按摩仿佛将身体都治愈了，不愧是小北……带着这样的感想，昏昏欲睡的 ${me.name} 就这么睡了过去。`,
    );
  } else {
    await era.printAndWait(
      `${kita.name} 对着训练员露出温婉的微笑，仿佛母狗般四足跪爬着引导 ${me.name} 脱下衣服，趴在拼接而成的桌子上。`,
    );
    await era.printAndWait(
      `这孩子到底是和谁学的啊……？${
        me.name
      } 露出疑惑的表情，感受着${kita.teen_sex_title}起身骑跨在 ${
        me.name
      } 后背上。`,
    );
    await era.printAndWait(
      `在等待了半分钟后，${kita.name} 纤细有力的手指在 ${me.name} 背后摁压起紧绷的地方。`,
    );
    await kita.say_and_wait(
      `训练员${me.adult_sex_title}的身体，好紧绷呢……您和${kita.uma_sex_title}不一样，身体要好好的修养哦。`,
    );
    await era.printAndWait(
      '尽管身体各处传来了嘎吱嘎吱的声响，但除了偶尔的疼痛之外只有舒服的感觉。',
    );
    await era.printAndWait(
      `疲惫的身体在小北的手指下变得轻松起来，那温柔而有力的按摩仿佛将身体都治愈了，不愧是小北……带着这样的感想，昏昏欲睡的 ${me.name} 就这么睡了过去。`,
    );
  }
  era.println();
  sys_like_chara(68, 0, 100) && (await era.waitAnyKey());
};
