const era = require('#/era-electron');

const have_baby = require('#/system/ero/sub/sys-have-baby');
const auto_update_ero_skills = require('#/system/ero/sys-auto-update');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const sys_rape_in_sleeping = require('#/system/ero/sys-rape-in-sleeping');
const check_inmon = require('#/system/next-week/check-inmon');
const check_new_activities = require('#/system/next-week/check-new-activities');
const randomly_interact = require('#/system/next-week/randomly-interact');
const reset_status = require('#/system/next-week/reset-status');
const {
  sys_change_lust,
  sys_change_pressure,
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const filter_chara = require('#/system/sys-filter-chara');
const { reset_chara } = require('#/system/sys-init-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const { run_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const morning_sex = require('#/event/others/morning-sex');
const punish_pregnant_slave = require('#/event/others/punish-pregnant-slave');
const { remove_special_events } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry, sort_list } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { money_color } = require('#/data/color-const');
const { trainer_salary } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const {
  baby_limit,
  birth_percent,
  lust_border,
} = require('#/data/ero/orgasm-const');
const { part_enum, part_talents } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const BasementOwners = require('#/data/event/basement-owners');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const { ero_hooks } = require('#/data/event/ero-hooks');
const GrandLives = require('#/data/event/grand-lives');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_breast_cup,
  get_talent_bust_size,
  get_trainer_title,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { max_chara_id } = require('#/data/other-const');
const { pressure_border } = require('#/data/train-const');

async function sys_next_week() {
  const me = get_chara_talk(0),
    punish_level = era.get('flag:惩戒力度'),
    team_dict = { 0: 1 },
    your_race = era.get('cflag:0:种族');
  let in_team_list = filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).filter((e) => e);
  let temp;
  era.set('status:0:沉睡', 1);
  era.set('status:0:熬夜', era.set('status:0:摸鱼', 0));
  era.set('cflag:0:子宫内精液', 0);
  era.set('cflag:0:肠道内精液', 0);
  era.set('cflag:0:腹中精液', 0);
  era.get('status:0:马语者') && era.add('status:0:马语者', -1);
  era.get('flag:强奸抵抗') === '' && era.set('flag:强奸抵抗', 1);
  randomly_interact(in_team_list);
  const basement_cd =
    era.get('flag:地下室冷却') > 0 && era.add('flag:地下室冷却', -1) > 0;
  // 极端事件判定
  if (check_pregnant_unprotect(0)) {
    const basement_owners = new BasementOwners();
    /** @type {{chara_id:number,prison:boolean,[supporter]:number}[]} */
    let act_list = [];
    let prepared_list;
    if (
      (temp = era.get('flag:床伴')) > 0 &&
      era.get(`base:${temp}:体力`) &&
      era.get(`base:${temp}:精力`) &&
      sys_check_awake(temp)
    ) {
      prepared_list = [temp];
    } else if (era.get('flag:当前位置') === location_enum.basement) {
      prepared_list = basement_owners.get();
    } else {
      prepared_list = in_team_list.filter(
        (chara_id) => chara_id !== temp && sys_check_awake(chara_id),
      );
    }
    prepared_list.filter(check_pregnant_unprotect).forEach((chara_id) => {
      if (
        basement_owners.get(0) === chara_id ||
        get_custom_check(chara_id).is_prison()
      ) {
        act_list.push({
          chara_id,
          prison:
            (!era.get('item:透明棉被') || Math.random() < 0.5) &&
            !basement_cd &&
            era.get('flag:当前位置') !== location_enum.basement,
        });
      } else if (get_custom_check(chara_id).is_rape_in_sleeping()) {
        act_list.push({ chara_id, prison: false });
      }
    });
    let tmp = era.get('cflag:0:模版角色');
    if (
      !act_list.length &&
      punish_level >= 2 &&
      get_custom_check(
        (tmp = get_random_entry(
          filter_chara('cflag', '招募状态', recruit_flags.no).filter(
            (e) =>
              e !== tmp &&
              e < max_chara_id &&
              era.get(`cflag:${e}:成长阶段`) >= 2,
          ),
        )),
      ).is_rape_in_sleeping()
    ) {
      act_list.push({
        chara_id: tmp,
        prison: false,
      });
    }
    tmp = true;
    act_list = sort_list(act_list, Math.random).filter(
      (e) => tmp && (tmp = !e.prison) !== undefined,
    );
    // 睡奸归并
    const final_act_list = [];
    tmp = -1;
    for (const act of act_list) {
      if (
        final_act_list[tmp] &&
        final_act_list[tmp].prison === act.prison &&
        era.get(`relation:${final_act_list[tmp].chara_id}:${act.chara_id}`) >
          375 &&
        era.get(`relation:${act.chara_id}:${final_act_list[tmp].chara_id}`) > 75
      ) {
        final_act_list[tmp].supporter = act.chara_id;
        tmp = final_act_list.length;
        continue;
      }
      final_act_list.push(act);
      tmp = final_act_list.length - 1;
    }
    if (final_act_list.length > 0 && era.get('item:马跳S家庭装')) {
      era.set('status:0:马跳S', 1);
    }
    for (const act of final_act_list) {
      if (act.prison) {
        await run_custom_ero(act.chara_id, ero_hooks.prison);
      } else {
        await sys_rape_in_sleeping(act.chara_id, act.supporter);
      }
      if (
        era.get('flag:床伴') ||
        era.get('flag:当前位置') === location_enum.basement
      ) {
        break;
      }
    }
  }
  in_team_list.forEach((chara_id) => {
    team_dict[chara_id] = 1;
    if (era.get('flag:性技自主学习') && sys_check_awake(chara_id)) {
      auto_update_ero_skills(chara_id);
    }
    if (era.get(`talent:${chara_id}:病娇`) === 2) {
      const life_event_marks = LifeEventMarks.get_marks(chara_id);
      if (era.get(`relation:${chara_id}:0`) > 525) {
        if (--life_event_marks.yandere === 0) {
          era.set(`talent:${chara_id}:病娇`, 1);
          era.print([
            get_chara_talk(chara_id).get_colored_name(),
            ' 重新变得温和起来……',
          ]);
        }
      } else {
        life_event_marks.yandere = Math.min(life_event_marks.yandere + 1, 8);
      }
    }
  });

  await punish_pregnant_slave();

  // 新回合开始
  let cur_year = era.get('flag:当前年'),
    cur_month = era.get('flag:当前月'),
    cur_week = era.get('flag:当前周');
  cur_week++;
  const cur_round = era.add('flag:当前回合数', 1),
    base_salary = trainer_salary[get_trainer_title().substring(0, 2)],
    salary = !your_race * base_salary * (1 + (cur_month === 12));
  const billings = sys_get_billings()
    .map((e, i) => {
      if (e.timer < 0) {
        e.repay = base_salary / 4;
      }
      if (e.timer !== 0) {
        const money = sys_change_money(e.repay, -1);
        if (i > 0 && e.creditor === 0 && money > 0) {
          // 人类训练员有工资拿；马娘训练员？自己跑比赛去！
          era.print([
            '收到了学园发放的训练员工资 ',
            { color: money_color, content: money.toLocaleString() },
            ' 马币',
          ]);
        }
        if (e.timer > 0) {
          e.timer--;
        }
      }
      return e;
    })
    .filter((e, i) => i === 0 || e.timer !== 0);
  if (cur_week === 4) {
    billings.push({
      creditor: cur_month === 12 ? -1 : 0,
      repay: salary,
      timer: 1,
    });
  }
  era.set('flag:账单', billings);
  if (cur_week === 5) {
    cur_week = 1;
    cur_month++;
    // 季节判定只在换月的时候考虑
    if (cur_month === 5) {
      era.set('flag:季节', 1);
    } else if (cur_month === 11) {
      era.set('flag:季节', 0);
    }
  }
  if (cur_month === 13) {
    cur_month = 1;
    cur_year++;
    new GrandLives().shift();
  }
  era.set('flag:当前年', cur_year);
  era.set('flag:当前月', cur_month);
  era.set('flag:当前周', cur_week);
  sys_change_fame(era.get('flag:回合声望惩罚'));
  // 新回合开始
  const all_characters = era.getAddedCharacters(),
    out_race_list = [],
    race_punish = await reset_status(
      all_characters,
      team_dict,
      out_race_list,
      me,
      cur_round,
    );
  let hentai_punish = 0,
    hentai_reward = 0,
    hentai_marks = [false, false];

  // 在新回合开始时删除所有节日事件
  const removed_specials = remove_special_events();
  for (const chara_id of in_team_list) {
    if (chara_id) {
      const relation_punish =
        (removed_specials[chara_id] || 0) +
        (era.get(`love:${chara_id}`) >= 60) *
          era.get(`cflag:${chara_id}:节日事件标记`);
      if (relation_punish) {
        era.print([
          '因为 ',
          me.get_colored_name(),
          ' 的忽视，',
          get_chara_talk(chara_id).get_colored_name(),
          ' ',
          relation_punish > 2 ? '无比' : '感到',
          '失望……',
        ]);
        sys_like_chara(chara_id, 0, -50 * relation_punish);
        await era.waitAnyKey();
      }
    }
  }
  for (const chara_id of all_characters) {
    if (chara_id === 9017) {
      continue;
    }
    const birth_month = era.get(`cflag:${chara_id}:出生月份`),
      birth_week = Math.min(
        Math.floor((era.get(`cflag:${chara_id}:出生日期`) + 6) / 7),
        4,
      );
    let growth_stage = era.get(`cflag:${chara_id}:成长阶段`);
    const race = era.get(`cflag:${chara_id}:种族`);

    era.get(`status:${chara_id}:生日`) && era.set(`status:${chara_id}:生日`, 0);
    if (birth_week === cur_week && birth_month === cur_month) {
      era.set(`status:${chara_id}:生日`, 1);
      if (growth_stage < 4) {
        growth_stage = era.add(`cflag:${chara_id}:成长阶段`, 1);
        if (growth_stage === 1) {
          if (era.get(`talent:${chara_id}:阴毛成长`)) {
            era.set(`talent:${chara_id}:茎核类型`, get_random_value(0, 2));
          } else {
            era.set(`talent:${chara_id}:茎核类型`, 0);
          }
          if (era.get(`talent:${chara_id}:乳头类型`) !== 2) {
            era.set(`talent:${chara_id}:乳头类型`, get_random_value(0, 1));
          }
          await get_custom_daily(chara_id).growth(0);
        } else if (growth_stage === 2) {
          await get_custom_daily(chara_id).growth(1);
        }
      }
    }
    if (
      chara_id > 0 &&
      chara_id < 1000 &&
      growth_stage >= 2 &&
      cur_month < 4 &&
      era.get(`cflag:${chara_id}:育成回合计时`) === 'x'
    ) {
      reset_chara(chara_id);
      await get_custom_daily(chara_id).growth(2);
    }

    const is_pregnant_slave =
        CharaInmon.get(chara_id).slave === slavery_enum.pregnant,
      is_always_special = is_pregnant_slave;
    let pregnant_stage = era.get(`cflag:${chara_id}:妊娠阶段`);
    const life_marks = LifeEventMarks.get_marks(chara_id);
    if (pregnant_stage >> pregnant_stage_enum.embryo) {
      sys_change_lust(chara_id, lust_border.itch / 40);
      const timer = era.add(
        `cflag:${chara_id}:妊娠回合计时`,
        1 + is_pregnant_slave,
      );
      const pregnant_times = era.get(`exp:${chara_id}:生产次数`);
      era.add(
        `base:${chara_id}:体重偏差`,
        get_random_value(50 + timer * 5, 150 + timer * 10),
      );
      const life_marks = LifeEventMarks.get_marks(chara_id);
      if (
        life_marks.report &&
        (era.get(`mark:${chara_id}:淫纹`) === 3 || timer >= 4)
      ) {
        sys_change_pressure(
          chara_id,
          500 * (1 + (era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48)),
        );
        life_marks.report = 0;
        const father_id = life_marks.sperm;
        await run_custom_ero(
          chara_id || father_id,
          ero_hooks.report_pregnant_between_weeks,
          {
            father_id,
            mother_id: chara_id,
          },
        );
      } else if (timer < 13) {
        // 1-12周孕早期
        sys_change_pressure(chara_id, get_random_value(200, 300));
      } else if (timer < 28) {
        // 13-29周安定期，可以做爱了
        pregnant_stage = era.set(
          `cflag:${chara_id}:妊娠阶段`,
          1 << pregnant_stage_enum.fetal,
        );
        timer >= 20 && (life_marks.waist_buff = 15);
      } else if (timer < 36) {
        // 28-35周孕晚期，开始泌乳
        sys_change_pressure(chara_id, get_random_value(50, 150));
        pregnant_stage = era.set(
          `cflag:${chara_id}:妊娠阶段`,
          1 << pregnant_stage_enum.late,
        );
        if (!era.get(`talent:${chara_id}:泌乳`)) {
          era.set(`talent:${chara_id}:泌乳`, 1);
          era.add(`cflag:${chara_id}:胸围`, 1);
          life_marks.breast_buff = 3;
        }
        timer >= 30 && (life_marks.waist_buff = 30);
      } else {
        sys_change_pressure(chara_id, get_random_value(100, 200));
        // 37周以后概率生，最晚42周
        // 现实是40周，这里为了游戏性折叠了
        pregnant_stage = era.set(
          `cflag:${chara_id}:妊娠阶段`,
          1 << pregnant_stage_enum.pre_birth,
        );
        if (timer >= 36) {
          if (era.get(`talent:${chara_id}:泌乳`) === 1) {
            life_marks.breast_buff = 5;
          }
          if (life_marks.waist_buff < 40) {
            !pregnant_times && era.add(`cflag:${chara_id}:臀围`, 1);
            life_marks.waist_buff = 40;
          }
        }
        // 孩子只能在中央特雷森出生
        // 不然会涉及好几个回合的产妇无法移动问题！
        if (
          !era.get(`cflag:${chara_id}:位置`) &&
          (timer >= 42 || Math.random() < birth_percent[timer - 36])
        ) {
          // 出生
          // 头两胎在生产后+2cm
          pregnant_times < 2 && era.add(`cflag:${chara_id}:臀围`, 2);
          life_marks.waist_buff = 8;
          pregnant_stage = era.set(
            `cflag:${chara_id}:妊娠阶段`,
            1 << pregnant_stage_enum.resume,
          );
          era.set(
            `cflag:${chara_id}:妊娠回合计时`,
            era.get(`cflag:${chara_id}:种族`) ? 4 : 12,
          );
          // 一年即48周内会泌乳
          // 本回合会马上进行判定，所以+1
          era.get(`talent:${chara_id}:泌乳`) === 1 &&
            era.set(`cflag:${chara_id}:泌乳回合计时`, 48 + 1);
          await have_baby(chara_id);
          if (chara_id) {
            if (
              era.get(`cflag:${chara_id}:招募状态`) === recruit_flags.yes &&
              growth_stage >= 2 &&
              era.get(`cflag:${chara_id}:育成回合计时`) < 3 * 48
            ) {
              hentai_punish += 100;
              hentai_marks[1] = true;
            }
          } else if (punish_level === 3) {
            hentai_reward += 100;
          } else if (race) {
            hentai_punish += 100;
            hentai_marks[1] = true;
          } else {
            hentai_punish += 50;
            hentai_marks[0] = true;
          }
          era.add(`base:${chara_id}:体重偏差`, -4000);
        }
      }
    } else if (pregnant_stage === 1 << pregnant_stage_enum.resume) {
      sys_change_lust(chara_id, lust_border.itch / 20);
      const timer = era.add(`cflag:${chara_id}:妊娠回合计时`, -1);
      life_marks.waist_buff -= 2;
      if (timer === 0) {
        pregnant_stage = era.set(
          `cflag:${chara_id}:妊娠阶段`,
          1 << pregnant_stage_enum.no,
        );
        era.set(`cflag:${chara_id}:月经周`, ((cur_week + 1) % 4) + 1);
        if (is_pregnant_slave) {
          era.set('status:0:排卵期', 1);
        }
      }
    }

    if (growth_stage >= 2) {
      era.set(
        `talent:${chara_id}:乳房尺寸`,
        get_talent_bust_size(get_breast_cup(chara_id, true)),
      );
    }

    let special_month = era.get(`status:${chara_id}:发情`),
      special_body = era.get(`status:${chara_id}:排卵期`);
    if (growth_stage >= 4 && race && !is_always_special) {
      // 发情期为出生月的下一个月
      const _special_month = (birth_month % 12) + 1;
      // 第二年开始计算发情期，限定本格期，发情期内无经期
      // 安定期继续发情
      if (cur_month === _special_month && (pregnant_stage & 0b1010) > 0) {
        if (!era.get(`status:${chara_id}:发情`)) {
          special_month = era.set(`status:${chara_id}:发情`, 1);
        }
      } else if (era.get(`status:${chara_id}:发情`)) {
        special_month = era.set(`status:${chara_id}:发情`, 0);
      }
    }

    // 只有性成熟且有浦西才需要算经期和排卵期
    // 注意虽然成长期就性成熟了，但是开发者保护在本格期才会怀孕
    // 一个月四个星期，假设生日在第二周，则四周分别为：排卵期 出生周 经期 无
    if (
      growth_stage >= 1 &&
      era.get(`cflag:${chara_id}:性别`) - 1 &&
      !is_pregnant_slave
    ) {
      // 经期为出生周的下一周（简单计算）
      let special_week =
        era.get(`cflag:${chara_id}:月经周`) ||
        era.set(`cflag:${chara_id}:月经周`, (birth_week % 4) + 1);
      // 成长期以上计算经期和排卵期
      // 非发情期且未怀孕时计算经期
      if (
        cur_week === special_week &&
        pregnant_stage === 1 << pregnant_stage_enum.no &&
        !era.get(`status:${chara_id}:发情`)
      ) {
        era.set(`status:${chara_id}:经期`, 1);
      } else {
        era.set(`status:${chara_id}:经期`, 0);
      }
      // 经期再下一周（出生周上一周）排卵期
      special_week = ((special_week + 1) % 4) + 1;
      // 排卵期只和怀孕有冲突
      if (
        cur_week === special_week &&
        pregnant_stage === 1 << pregnant_stage_enum.no &&
        // 生育次数检查
        era.get(`exp:${chara_id}:生产次数`) < baby_limit
      ) {
        special_body = era.set(`status:${chara_id}:排卵期`, 1);
      } else {
        special_body = era.set(`status:${chara_id}:排卵期`, 0);
      }
    }
    if (growth_stage >= 1 && era.get(`cflag:${chara_id}:性别`) - 1) {
      // 泌乳的相关判定
      let milk_timer = era.get(`cflag:${chara_id}:泌乳回合计时`);
      if (milk_timer) {
        const milk_status = era.get(`talent:${chara_id}:泌乳`);
        if (milk_status === 1) {
          milk_timer = era.add(`cflag:${chara_id}:泌乳回合计时`, -1);
          // 20周、25周、30周、35周减一次胸围
          if (
            28 === milk_timer ||
            23 === milk_timer ||
            18 === milk_timer ||
            13 === milk_timer
          ) {
            life_marks.breast_buff--;
          }
          // 40周后概率停奶，泌乳时间越长概率越高；孕育泌乳在孕育结束后消除胸围奖励
          if (milk_timer < 8 && Math.random() < Math.pow(2, -milk_timer)) {
            life_marks.breast_buff = 0;
            era.set(`cflag:${chara_id}:泌乳回合计时`, 0);
            era.set(`talent:${chara_id}:泌乳`, 0);
          }
        } else if (milk_status === 3) {
          // 母乳体质直接停止计时
          era.set(`cflag:${chara_id}:泌乳回合计时`, 0);
        }
      }
    }
    if (growth_stage >= 1) {
      const body_hair_talent = era.get(`talent:${chara_id}:腋毛成长`),
        sex_hair_talent = era.get(`talent:${chara_id}:阴毛成长`);
      let body_hair = era.get(`cflag:${chara_id}:腋毛`),
        sex_hair = era.get(`cflag:${chara_id}:阴毛`);
      body_hair = era.set(
        `cflag:${chara_id}:腋毛`,
        Math.min(body_hair + body_hair_talent, 4 + (body_hair_talent === 2)),
      );
      sex_hair = era.set(
        `cflag:${chara_id}:阴毛`,
        Math.min(sex_hair + sex_hair_talent, 4 + (sex_hair_talent === 2)),
      );
      if (
        !era.get(`status:${chara_id}:马跳S`) &&
        (!chara_id || !era.get(`status:${chara_id}:沉睡`))
      ) {
        switch (era.get(`talent:${chara_id}:洁净重视`)) {
          case 0:
            body_hair > 3 && (body_hair = era.set(`cflag:${chara_id}:腋毛`, 0));
            sex_hair > 3 && (sex_hair = era.set(`cflag:${chara_id}:阴毛`, 2));
            break;
          case -1:
            body_hair > 2 && (body_hair = era.set(`cflag:${chara_id}:腋毛`, 0));
            sex_hair > 3 && (sex_hair = era.set(`cflag:${chara_id}:阴毛`, 1));
        }
      }

      const pressure = era.get(`base:${chara_id}:压力`);
      if (pressure === pressure_border.limit) {
        sys_change_lust(chara_id, -lust_border.itch / 2);
      } else if (pressure >= pressure_border.depression) {
        sys_change_lust(chara_id, -lust_border.itch / 4);
      } else if (pressure >= pressure_border.apprehension) {
        sys_change_lust(chara_id, lust_border.itch / 30);
      } else if (pressure >= pressure_border) {
        sys_change_lust(chara_id, lust_border.itch / 25);
      }

      if (special_month) {
        sys_change_lust(chara_id, lust_border.itch / 15);
        if (special_body) {
          sys_change_lust(chara_id, lust_border.itch / 60);
        }
      }

      const tmp_parts = [
        part_enum.mouth,
        part_enum.breast,
        part_enum.body,
        part_enum.anal,
      ];
      switch (era.get(`cflag:${chara_id}:性别`)) {
        case 0:
          tmp_parts.push(part_enum.clitoris);
          tmp_parts.push(part_enum.virgin);
          break;
        case 1:
          tmp_parts.push(part_enum.penis);
          break;
        case 10:
          tmp_parts.push(part_enum.penis);
          tmp_parts.push(part_enum.virgin);
      }
      sys_change_lust(
        chara_id,
        (tmp_parts.filter(
          (e) => era.get(`talent:${chara_id}:${part_talents[e]}`) === 2,
        ).length *
          lust_border.itch) /
          40,
      );
    }
    const edu_marks = EduEventMarks.get_marks(chara_id);
    edu_marks._r_e_check = 2;
    get_custom_check(chara_id).check_next_week();
    edu_marks._r_e_check = 0;
  }

  if (race_punish) {
    const buffer = [];
    out_race_list.forEach((e) => {
      buffer.push(get_chara_talk(e).get_colored_name(), '，');
    });
    buffer.length && buffer.splice(buffer.length - 1, 1);
    era.print([
      '因为 ',
      ...buffer,
      ' 的避战行为，社会对 ',
      me.get_colored_name(),
      ' 的评价降低了！',
    ]);
    sys_change_fame(-race_punish);
  }
  if (hentai_reward) {
    era.print([me.get_colored_name(), ' 履行了职责，作为孕袋的评价上升了……']);
    era.add('flag:当前声望', hentai_reward);
  }
  if (hentai_punish) {
    if (punish_level === 3) {
      era.print([
        '让马娘主人怀孕的 ',
        me.get_colored_name(),
        ' 因为孕袋失格，受到了特雷森的处罚！',
      ]);
      era.add('flag:当前马币', -hentai_punish);
    } else {
      if (hentai_marks[0]) {
        era.print([
          '因为现役训练员的私生子丑闻，社会对 ',
          me.get_colored_name(),
          ' 的评价降低了！',
        ]);
      }
      if (hentai_marks[1]) {
        era.print([
          '因为现役马娘的私生子丑闻，社会对 ',
          me.get_colored_name(),
          ' 的评价降低了！',
        ]);
      }
      sys_change_fame(-hentai_punish);
      era.set('flag:变态行为', 1);
    }
  }
  await check_new_activities(cur_round, in_team_list);
  await check_inmon(in_team_list);

  // 床伴
  in_team_list = in_team_list.filter(
    (e) =>
      era.get(`cflag:${e}:招募状态`) === recruit_flags.yes &&
      era.get('cflag:0:位置') === era.get(`cflag:${e}:位置`) &&
      (get_custom_mec(e).is_able_to_be_selected() ||
        (era.get(`cflag:${e}:妊娠阶段`) & 0b100001) > 0),
  );
  if (!era.get('flag:当前互动角色') && in_team_list.length) {
    temp = era.get('flag:床伴');
    era.set(
      'flag:当前互动角色',
      (era.get(`cflag:${temp}:招募状态`) === recruit_flags.yes && temp) ||
        get_random_entry(
          in_team_list.filter((e) => sys_reg_race(e).curr.week === cur_round),
        ) ||
        get_random_entry(
          in_team_list.filter(
            (e) =>
              era.get(`cflag:${e}:育成回合计时`) < 3 * 48 &&
              (era.get(`cflag:${e}:妊娠阶段`) & 0b100001) === 0,
          ),
        ) ||
        get_random_entry(
          in_team_list.filter(
            (e) => era.get(`cflag:${e}:育成回合计时`) < 3 * 48,
          ),
        ) ||
        get_random_entry(
          in_team_list.filter((e) => era.get(`cflag:${e}:成长阶段`) >= 1),
        ) ||
        0,
    );
  }
  await morning_sex();
  era.set('flag:床伴', 0);
  era.set('flag:随机种子', (era.get('flag:随机种子') * 9301 + 49297) % 233280);
}

module.exports = sys_next_week;
