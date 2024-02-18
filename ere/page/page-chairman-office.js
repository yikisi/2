const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const print_page_header = require('#/page/components/page-header');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { vehicle_verbs, vehicle_names } = require('#/data/move-const');

async function page_chairman_office() {
  era.set('flag:当前位置', location_enum.chairman);
  await era.clear();
  print_page_header();
  era.drawLine();
  const chairman = get_chara_talk(302);
  const vehicle = era.get('equip:0:单人载具');
  era.print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了理事长办公室……',
  ]);
  era.drawLine();
  chairman.say(
    '告 知！对于还没有入队但是很有天赋的孩子，学院方面会允许已经做出成绩的训练员直接去指名教导对方，但是需要有能够服众的声望！',
  );
  chairman.say('注 意！即使这样指名了，也还请好好和对方从头相处吧！');
  const star_premium_draw = sys_get_star_premium_draw();
  const buffer = [];
  era
    .get('chara')
    .filter(
      (chara_id) =>
        chara_id &&
        (era.get(`cflag:${chara_id}:随机招募`) ||
          era.get(`staticcflag:${chara_id}:随机招募`)) &&
        era.get(`cflag:${chara_id}:招募状态`) !== recruit_flags.yes,
    )
    .forEach((chara_id) => {
      const color = get_chara_color(chara_id);
      buffer.push(
        {
          config: { color, width: 3 },
          content: era.get(`static:${chara_id}:name`),
          type: 'text',
        },
        {
          accelerator: chara_id,
          config: { disabled: star_premium_draw.chara === chara_id, width: 3 },
          content: '超得！',
          type: 'button',
        },
      );
    });
  era.printMultiColumns(buffer);
  const chara_id = await era.input();
  chairman.say([
    '抉 择！要让学院帮你接触 ',
    {
      content: era.get(`static:${chara_id}:name`),
      color: get_chara_color(chara_id),
      fontWeight: 'bold',
    },
    ' 同学吗？',
  ]);
  era.printButton('「超 得！！」', 1);
  era.printButton('「慢 着！！」', 2);
  if ((await era.input()) === 1) {
    sys_change_fame(-40 * star_premium_draw.time);
    star_premium_draw.chara = chara_id;
    await chairman.say_and_wait([
      '激 热！',
      get_chara_talk(chara_id).get_colored_name(),
      ' 同学最近将经常去训练场，好好把握！',
    ]);
  } else {
    await chairman.say_and_wait('愤 怒！想好了再来啊！');
  }
  era.set('flag:当前位置', location_enum.office);
}

module.exports = page_chairman_office;
