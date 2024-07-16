const era = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const call_recruit_event = require('#/system/script/sys-call-recruit');
const { get_image } = require('#/system/sys-calc-image');
const filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_page_header = require('#/page/components/page-header');

const GameGuides = require('#/event/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');

const { el_danger_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

async function print_rec_page() {
  era.set('flag:当前位置', location_enum.playground);
  const me = get_chara_talk(0);
  let event_chara_list, flag_recruit, flag_leave;

  const team_list = filter_chara('cflag', '招募状态', recruit_flags.yes);
  let today_list = gacha(
    filter_chara('cflag', '随机招募', 1).filter(
      (v) => !team_list.includes(v) && era.get(`cflag:${v}:成长阶段`) >= 2,
    ),
    5,
  );
  today_list.push(sys_get_star_premium_draw().chara);
  today_list = today_list
    .filter((e, i, l) => e && l.indexOf(e) === i)
    .sort((a, b) => a - b);
  await era.clear();
  print_page_header();
  era.drawLine();
  const vehicle = era.get('flag:单人载具');
  era.print([
    vehicle ? `${vehicle_verbs[vehicle]}着${vehicle_names[vehicle]}` : '',
    '抵达了训练场……',
  ]);
  await new GameGuides().recruit();
  flag_leave = await sys_get_random_event(event_hooks.recruit_start)();
  const flag_limit = sys_check_team_limit() >= 0;
  flag_recruit = !flag_leave;

  while (flag_recruit) {
    const buffer = [];
    buffer.push([{ type: 'divider' }]);
    const cur_recruit = era.get('flag:物色对象');
    today_list = today_list.filter((chara_id) =>
      era.get(`cflag:${chara_id}:随机招募`),
    );
    if (today_list.length) {
      if (cur_recruit && today_list.indexOf(cur_recruit) === -1) {
        buffer[0].push({
          content: [
            get_chara_talk(cur_recruit).get_colored_name(),
            ' 似乎不在训练场……',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        });
      } else if (flag_limit) {
        buffer[0].push({
          content: [
            me.get_colored_name(),
            ' 已经有一定数量的担当，其他马',
            era.get('flag:角色性别') === 1 ? '郎' : '娘',
            '不会同意 ',
            me.get_colored_name(),
            ' 的招募了……',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        });
      } else {
        buffer[0].push({
          content: [
            '在训练场内见到了几位马',
            era.get('flag:角色性别') === 1 ? '郎' : '娘',
            '，是谁吸引了 ',
            me.get_colored_name(),
            ' 的注意力呢？',
            { isBr: true },
            { isBr: true },
          ],
          type: 'text',
        });
      }
      buffer.push(
        ...today_list.map((chara_id) => {
          let flag_script;
          try {
            require(`#/event/rec/rec-${chara_id}`);
            flag_script = true;
          } catch (_) {
            flag_script = false;
          }
          return {
            columns: [
              {
                names: get_image(chara_id)
                  .map((e) => `${e}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
              {
                accelerator: chara_id,
                config: {
                  align: 'center',
                  buttonType: flag_script ? 'danger' : 'warning',
                  disabled:
                    flag_limit || (cur_recruit && cur_recruit !== chara_id),
                },
                content: era.get(`callname:${chara_id}:-1`),
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
        [
          {
            content: [
              { isBr: true },
              '* 招募按钮显示为',
              { color: el_danger_color, content: '红色' },
              '的角色有专属口上',
            ],
            type: 'text',
          },
        ],
      );
    } else {
      buffer[0].push({
        config: {
          align: 'center',
        },
        content: [
          '训练场没有引人注目的马',
          era.get('flag:角色性别') === 1 ? '郎' : '娘',
          '……',
        ],
        type: 'text',
      });
    }
    era.setHorizontalAlign('space-around');
    era.printInColRows(...buffer, [
      { type: 'divider' },
      { type: 'button', accelerator: 999, content: '直接离开' },
    ]);
    era.setHorizontalAlign('start');

    let ret = await era.input();

    if (ret === 999) {
      // 选择直接离开的时候触发需要选择离开才触发的招募事件
      // 队伍已经满了的情况下是不会触发事件的
      event_chara_list = filter_chara(
        'cflag',
        '招募状态',
        recruit_flags.success_on_leave,
      ).filter((chara_id) => today_list.includes(chara_id) && !flag_limit);
      if (event_chara_list.length) {
        era.drawLine();
        flag_leave = await call_recruit_event(
          get_random_entry(event_chara_list),
          event_hooks.recruit_end,
        );
      }
      flag_recruit = false;
    } else {
      era.drawLine();
      // 普通招募事件
      flag_leave = await call_recruit_event(ret, event_hooks.recruit);
      // 正常招募却没招募，说明招募没成功
      flag_recruit = era.get(`cflag:${ret}:招募状态`) <= 0 && !flag_leave;
    }
    if (flag_recruit) {
      await era.clear();
      print_page_header();
    }
  }
  if (!flag_leave) {
    era.drawLine();
    await era.printAndWait([me.get_colored_name(), ' 离开了训练场……']);
    await sys_get_random_event(event_hooks.recruit_end)();
  }
  await new GameGuides().recruit_end();
  era.set('flag:当前位置', location_enum.office);
}

module.exports = print_rec_page;
