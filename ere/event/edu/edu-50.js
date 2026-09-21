const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const CustomizedEdu = require('#/event/edu/edu-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { get_date_obj } = require('#/data/date-indicator');
const TaishinEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-50');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');
const global_achievement = require('#/system/global/sys-calc-achievement');

function fill_bw_in_dict(
  dict,
  { h = false, w = false } = { h: true, w: true },
) {
  if (h) {
    const hayahide = get_chara_talk(23);
    dict.HAYAHIDE = hayahide.name;
    dict.COLOR_23 = hayahide.color;
  }
  if (w) {
    const ticket = get_chara_talk(35);
    dict.TICKET = ticket.name;
    dict.COLOR_35 = ticket.color;
  }
  return dict;
}

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { uma: !0 });
  }

  async train_success(taishin, me, callname, hook, extra) {
    const edu_marks = new TaishinEduMarks();
    this.train_success_content(taishin, me, callname, hook, extra);
    era.println();
    if (
      !era.get(`status:${this.id}:摸鱼`) &&
      Math.random() < 0.2 * extra.stamina_ratio
    ) {
      if (sys_check_remote(this.id)) {
        hook.arg = true;
      } else {
        await era.waitAnyKey();
        hook.arg = await this.train_success_add(
          taishin,
          me,
          callname,
          hook,
          extra,
        );
        era.println();
      }
    } else if (
      extra.train !== attr_enum.intelligence &&
      !sys_check_remote(this.id) &&
      era.get(`love:${this.id}`) >= 75 &&
      era.get(`exp:${this.id}:性爱次数`) > era.get(`exp:${this.id}:睡奸次数`) &&
      era.get('flag:当前月') >= 6 &&
      era.get('flag:当前月') <= 8 &&
      !edu_marks.rainy
    ) {
      let wait;
      edu_marks.rainy = 1;
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'ts_rainy',
            taishin,
            generate_dictionary(this.id, { teen: !0 }),
          )
        )[0] === 1
      ) {
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 5),
        });
      } else {
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 20 },
        });
      }
      wait && (await era.waitAnyKey());
    }
  }

  async week_start(taishin, me, callname, hook, extra, ebj) {
    let wait = false;
    if (ebj?.arg === 'chasing') {
      await print_title_with_kojo(
        this.#kojo,
        'ws_chasing',
        taishin,
        generate_dictionary(this.id, { uma: !0, your_name: !0 }),
      );
      wait = all_reward_in_event(this.id, { relation: 10, skills: [200512] });
    } else if (ebj?.arg === 'dream_3_crowns') {
      await print_title_with_kojo(
        this.#kojo,
        'ws_dream_3_crowns',
        taishin,
        this.#dict,
      );
      wait = all_reward_in_event(this.id, {
        relation: 5,
        attr: base_attr_list.map(() => 5),
      });
    } else if (ebj?.arg === 'new_year_c') {
      era.set(`cflag:${this.id}:节日事件标记`, 0);
      switch (
        (
          await print_title_with_kojo(
            this.#kojo,
            'ws_new_year_c',
            taishin,
            fill_bw_in_dict(this.#dict, { w: true }),
          )
        )['select']
      ) {
        case 1:
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 10),
          });
          break;
        case 2:
          wait = all_reward_in_event(this.id, { base: [200] });
          break;
        case 3:
          wait = all_reward_in_event(this.id, { pt: 50 });
      }
    } else if (ebj?.arg === 'contestants') {
      wait = all_reward_in_event(this.id, {
        attr:
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_contestants',
              taishin,
              fill_bw_in_dict(this.#dict),
            )
          )[0] === 1
            ? { [attr_enum.strength]: 15 }
            : { [attr_enum.intelligence]: 15 },
      });
    } else if (ebj?.arg === 'summer_start_c') {
      if (this.summer_non_beach) {
        add_event(hook.hook, ebj);
        return;
      }
      await print_title_with_kojo(
        this.#kojo,
        'ws_summer_start_c',
        taishin,
        fill_bw_in_dict(this.#dict),
      );
      wait = all_reward_in_event(this.id, {
        attr: { [attr_enum.strength]: 10 },
      });
    } else if (ebj?.arg === 'choice') {
      const dict = this.#dict;
      const edu_marks = new TaishinEduMarks();
      new TaishinEduMarks().debuff = 1;
      const { choice } = await print_title_with_kojo(
        this.#kojo,
        'ws_choice',
        taishin,
        dict,
      );
      era.drawLine();
      if (choice === 1) {
        fill_bw_in_dict(dict, { w: true });
        await print_title_with_kojo(this.#kojo, 'hibernation', taishin, dict);
        all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => -5),
          motivation: -2,
          love: 5,
          relation: 25,
        });
      } else {
        await print_title_with_kojo(this.#kojo, 'broken_dream', taishin, dict);
        all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => -5),
          motivation: -2,
        });
        edu_marks.choice = 1;
        const reg = sys_reg_race(this.id).curr;
        if (reg.curr === race_enum.kiku_sho) {
          reg.curr = -1;
          reg.week = -1;
        }
      }
      sys_hurt_uma(this.id, 5);
      era.print(
        i18n().kojo[this.id].notify_debuff(taishin, {
          ...di18n.kojo.get_titled_content(this.id, 'debuff'),
          color: buff_colors[3],
        }),
      );
      wait = true;
    } else if (ebj?.arg === 'short_rest') {
      await print_title_with_kojo(
        this.#kojo,
        'ws_short_rest',
        taishin,
        this.#dict,
      );
    } else if (ebj?.arg === 'find_taishin') {
      const minoru = get_chara_talk(301);
      await print_title_with_kojo(this.#kojo, 'ws_find_taishin_5', taishin, {
        ...this.#dict,
        MINORU: minoru.name,
        COLOR_301: minoru.color,
        CALLNAME_301: sys_get_callname(301, 0),
      });
    } else if (ebj?.arg === 'letter') {
      await print_title_with_kojo(
        this.#kojo,
        'ws_letter',
        taishin,
        generate_dictionary(this.id, { call: !0, uma: !0 }),
      );
    } else if (ebj?.arg === 'christmas_c') {
      era.set(`cflag:${this.id}:节日事件标记`, 0);
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'ws_christmas_c',
            taishin,
            generate_dictionary(this.id, { uma: !0, teen: !0 }),
          )
        )[0] === 1
      ) {
        wait = all_reward_in_event(0, { base: [-5] });
        new TaishinEduMarks().hit++;
      } else {
        wait = all_reward_in_event(this.id, { relation: 25, love: 5 });
      }
    } else if (ebj?.arg === 'valentine_s') {
      era.set(`cflag:${this.id}:节日事件标记`, 0);
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'ws_valentine_s',
            taishin,
            generate_dictionary(this.id, { call: !0, teen: !0, uma: !0 }),
          )
        )['select'] === 1
      ) {
        wait = all_reward_in_event(this.id, { relation: 10, love: 5 });
        wait = all_reward_in_event(0, { base: [-5] }) || wait;
        if (++new TaishinEduMarks().hit) {
          global_achievement.c_taishin1 = 1;
        }
      } else {
        wait = all_reward_in_event(this.id, { relation: 20 });
      }
    } else if (ebj?.arg === 'halloween_s') {
      era.set(`cflag:${this.id}:节日事件标记`, 0);
      const creek = get_chara_talk(45);
      await print_title_with_kojo(
        this.#kojo,
        'ws_halloween_s',
        taishin,
        fill_bw_in_dict(
          {
            ...generate_dictionary(this.id, { teen: !0, uma: !0 }),
            CALLNAME_45: sys_get_callname(45, 0),
            CREEK: creek.name,
            COLOR_45: creek.color,
          },
          { w: !0 },
        ),
      );
      if (era.get('love:50') >= 50) {
        update_kiss_exp(get_date_obj(), 0, this.id);
      }
    } else if (ebj?.arg === 'pet_head') {
      await print_title_with_kojo(
        this.#kojo,
        'ws_pet_head',
        taishin,
        this.#dict,
      );
      wait = all_reward_in_event(this.id, { relation: 10, love: 2 });
    } else if (ebj?.arg === 'famous') {
      await print_title_with_kojo(this.#kojo, 'ws_famous', taishin, this.#dict);
      wait = all_reward_in_event(this.id, { relation: 10, love: 2 });
    } else {
      return await super.week_start(taishin, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }

  async week_end(taishin, me, callname, hook, extra, ebj) {
    let wait = false;
    if (ebj?.arg === 'disturbance') {
      await print_title_with_kojo(
        this.#kojo,
        'we_disturbance',
        taishin,
        fill_bw_in_dict(generate_dictionary(this.id)),
      );
      wait = all_reward_in_event(this.id, { attr: [5, 0, 5, 0, 5] });
    } else if (ebj?.arg === 'summer_end_c') {
      if (this.summer_non_beach) {
        add_event(hook.hook, ebj);
        return;
      }
      await print_title_with_kojo(
        this.#kojo,
        'we_summer_end_c',
        taishin,
        generate_dictionary(this.id),
      );
    } else if (ebj?.arg === 'carefree') {
      await print_title_with_kojo(
        this.#kojo,
        'we_carefree',
        taishin,
        fill_bw_in_dict(this.#dict, { h: true }),
      );
    } else if (ebj?.arg === 'frog') {
      await print_title_with_kojo(
        this.#kojo,
        'we_frog',
        taishin,
        generate_dictionary(this.id, { call: !0 }),
      );
    } else if (ebj?.arg === 'back_home') {
      const taste = get_chara_talk(302);
      const { trigger } = await print_title_with_kojo(
        this.#kojo,
        'we_back_home',
        taishin,
        { ...this.#dict, TASTE: taste.name, COLOR_302: taste.color },
      );
      if (trigger === 1) {
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.edu).set_arg('find_taishin'),
        );
        wait = all_reward_in_event(302, { relation: 5 });
      } else if (trigger === 2) {
        wait = all_reward_in_event(302, { relation: -5 });
      }
    } else if (
      ebj?.arg === 'find_taishin' &&
      era.get(`cflag:${this.id}:育成回合计时`) === 47 + 44
    ) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'we_find_taishin_1',
            taishin,
            generate_dictionary(this.id, { call: !0, your_name: !0, uma: !0 }),
          )
        )['come'] === 1
      ) {
        new TaishinEduMarks().find_taishin = 1;
        era.drawLine();
        await print_title_with_kojo(
          this.#kojo,
          'we_find_taishin_2',
          taishin,
          generate_dictionary(this.id, { call: !0, sir: !0, uma: !0 }),
        );
        all_reward_in_event(0, { base: [-5] });
        era.drawLine();
        await print_title_with_kojo(
          this.#kojo,
          'we_find_taishin_3',
          taishin,
          generate_dictionary(this.id, { call: !0, teen: !0, uma: !0 }),
        );
        all_reward_in_event(0, { base: [-5] });
        new TaishinEduMarks().hit += 2;
        if (era.get('love:50') >= 49) {
          era.drawLine();
          const { update } = await print_title_with_kojo(
            i18n().kojo[this.id].love,
            'we_find_taishin_4',
            taishin,
            generate_dictionary(this.id, { call: !0, teen: !0 }),
          );
          if (era.get('love:50') === 49) {
            if (update === 1) {
              update_kiss_exp(get_date_obj(), 0, this.id);
              await sys_love_uma_in_event(this.id);
            } else {
              era.set(`cflag:${this.id}:爱慕暂拒`, 49);
              await punish_rejecting_love(this.id);
            }
          }
        }
        era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
        new TaishinEduMarks().new_goal = 1;
        add_event(event_hooks.week_start, ebj);
      }
    } else if (ebj?.arg === 'christmas_s') {
      era.set(`cflag:${this.id}:节日事件标记`, 0);
      const dict = {
        ...this.#dict,
        friend: new TaishinEduMarks().choice > 0 || era.get('love:50') < 50,
      };
      await print_title_with_kojo(this.#kojo, 'we_christmas_s', taishin, dict);
      if (!dict.friend) {
        const cache = era.get('flag:当前位置');
        era.set('flag:当前位置', location_enum.love_hotel);
        await quick_into_sex(this.id);
        era.set('flag:当前位置', cache);
      }
    } else if (ebj?.arg === 'dinner') {
      const oguri = get_chara_talk(6);
      await print_title_with_kojo(
        this.#kojo,
        'we_dinner',
        taishin,
        fill_bw_in_dict({
          ...this.#dict,
          OGURI: oguri.name,
          COLOR_6: oguri.color,
          CALLNAME_6: sys_get_callname(6, 0),
          CALLNAME_35: sys_get_callname(35, 0),
        }),
      );
      wait = all_reward_in_event(this.id, { relation: 10, love: 2 });
    }
    wait && (await era.waitAnyKey());
  }

  async race_start(taishin, me, callname, hook, extra) {
    let key;
    let dict = this.#dict;
    if (extra.race === race_enum.begin_race) {
      if (era.get(`cflag:${this.id}:育成回合计时`) < 48) {
        key = 'before_begin_race';
      }
    } else if (extra.race === race_enum.sats_sho) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'before_sats_sho',
            taishin,
            dict,
          )
        )[0] === 1
      ) {
        extra.relation_change -= 10;
        extra.love_change = 1;
        extra.motivation_change = 2;
        EduEventMarks.get_marks(this.id).add('sats_sho');
      }
      return;
    } else if (extra.race === race_enum.toky_yus) {
      key = 'before_toky_yus';
      fill_bw_in_dict(dict, { h: true });
    } else if (extra.race === race_enum.kiku_sho) {
      key = 'before_kiku_sho';
    } else if (extra.race === race_enum.tenn_spr) {
      key = 'before_tenn_spr';
      fill_bw_in_dict(dict);
    } else if (extra.race === race_enum.tenn_sho) {
      if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
        key = 'before_tenn_sho_s';
      }
    } else if (extra.race === race_enum.arim_kin) {
      if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
        key = 'before_arim_kin_s';
      }
    }
    if (!key) {
      return await super.race_start(taishin, me, callname, hook, extra);
    }
    await print_title_with_kojo(this.#kojo, key, taishin, dict);
  }

  async race_end(taishin, me, callname, hook, extra) {
    let key;
    let dict = this.#dict;
    if (extra.race === race_enum.begin_race) {
      if (extra.rank === 1) {
        key = 'begin_race_win';
      }
    } else if (extra.race === race_enum.hope_sta) {
      if (extra.rank === 1) {
        key = 'hope_sta_win';
        extra.attr_change = base_attr_list.map(() => 3);
      }
    } else if (extra.race === race_enum.sats_sho) {
      dict.sats_sho = EduEventMarks.get_marks(this.id).get('sats_sho') > 0;
      EduEventMarks.get_marks(this.id).sub('sats_sho');
      fill_bw_in_dict(dict);
      if (extra.rank === 1) {
        const { select } = await print_title_with_kojo(
          this.#kojo,
          'sats_sho_win',
          taishin,
          dict,
        );
        let wait = all_reward_in_event(this.id, {
          base: base_attr_list.map(() => 7),
        });
        if (select === 1) {
          wait = all_reward_in_event(0, { base: [-5] }) || wait;
          new TaishinEduMarks().hit++;
        }
        wait && (await era.waitAnyKey());
        return;
      } else {
        key = 'sats_sho_lose';
        dict.CHARA_FULL = taishin.actual_name_with_title;
        extra.attr_change = base_attr_list.map(() => 3);
      }
    } else if (extra.race === race_enum.toky_yus) {
      if (extra.rank === 1) {
        key = 'toky_yus_win';
        extra.attr_change = base_attr_list.map(() => 7);
      } else if (
        extra.contestants.find((u) => u.index_chara === 35)?.rank?.curr === 1
      ) {
        key = 'toky_yus_ticket_win';
        extra.attr_change = base_attr_list.map(() => 3);
      } else if (
        extra.contestants.find((u) => u.index_chara === 35)?.rank?.curr !==
        void 0
      ) {
        key = 'toky_yus_all_lose';
        extra.attr_change = base_attr_list.map(() => 3);
      }
    } else if (extra.race === race_enum.kiku_sho) {
      if (extra.rank === 1) {
        const race_history = RaceHistory.get(this.id).get();
        if (
          check_aim_race(race_history, race_enum.sats_sho, 1, 1) &&
          check_aim_race(race_history, race_enum.toky_yus, 1, 1)
        ) {
          key = 'triple_crowns';
          extra.attr_change = base_attr_list.map(() => 10);
        } else {
          key = 'kiku_sho_win';
          fill_bw_in_dict(dict, { h: true });
        }
      } else if (
        extra.contestants.find((u) => u.index_chara === 23)?.rank?.curr === 1
      ) {
        key = 'kiku_sho_hayahide_win';
        fill_bw_in_dict(dict, { h: true });
      } else if (era.get('relation:50:0') < 300) {
        key = 'kiku_sho_lose';
      }
    } else if (extra.race === race_enum.tenn_spr) {
      if (extra.rank === 1) {
        key = 'tenn_spr_win';
        dict.CALLNAME = sys_get_callname(this.id, 0);
      } else if (
        extra.contestants.find((u) => u.index_chara === 23)?.rank?.curr === 1
      ) {
        key = 'tenn_spr_hayahide_win';
        fill_bw_in_dict(dict, { h: true });
      }
    } else if (extra.race === race_enum.tenn_sho) {
      if (era.get(`cflag:${this.id}:育成回合计时`) > 96 && extra.rank === 1) {
        key = 'tenn_sho_win_s';
        fill_bw_in_dict(dict, { w: !0 });
      }
    } else if (extra.race === race_enum.arim_kin) {
      if (era.get(`cflag:${this.id}:育成回合计时`) > 96 && extra.rank === 1) {
        key = 'arim_kin_win_s';
        dict = {
          ...dict,
          CALLNAME: sys_get_callname(this.id, 0),
          TEEN: taishin.teen_sex_title,
        };
        fill_bw_in_dict(dict);
      }
    }
    if (!key) {
      return await super.race_end(taishin, me, callname, hook, extra);
    }
    await print_title_with_kojo(this.#kojo, key, taishin, dict);
  }

  async out_start(taishin, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'new_year_s') {
      return;
    }
    let wait = false;
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'os_new_year_s',
          taishin,
          this.#dict,
        )
      )['pray']
    ) {
      case 1:
        sys_change_fame(50);
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 10),
        });
        break;
      case 3:
        new TaishinEduMarks().together = 1;
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async crazy_fan_end() {
    if (era.get('flag:强制BE') !== this.id) {
      return await super.crazy_fan_end();
    }
    const minoru = get_chara_talk(301);
    await print_title_with_kojo.ending(
      this.#kojo,
      'be_kiku_sho_lose',
      get_chara_talk(this.id),
      {
        ...generate_dictionary(this.id),
        MINORU: minoru.name,
        COLOR_301: minoru.color,
      },
    );
  }
};
