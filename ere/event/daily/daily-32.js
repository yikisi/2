const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  init_ero,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

const { race_enum, race_infos } = require('#/data/race/race-const');
const { i18n } = require('#/i18n/selector');
const {
  sys_change_motivation,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  async week_start(_, extra_flag, ebj) {
    const tachyon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_colored_callname(this.id, 0);
    const love = era.get('love:32');
    const life_marks = new TachyonLifeMarks();
    let child;
    switch (ebj?.arg) {
      case 'cook01':
        await this.#kojo.ws_cook02(tachyon, me);
        break;
      case 'cook02':
        await this.#kojo.ws_cook03(tachyon, me, callname);
        break;
      case 'cook03':
        await this.#kojo.ws_cook04(tachyon, me, callname);
        era.println();
        sys_like_chara(32, 0, -600) && (await era.waitAnyKey());
        break;
      case 'cook11':
        await this.#kojo.ws_cook12(tachyon, me);
        break;
      case 'cook12':
        await this.#kojo.ws_cook13(tachyon, me, callname);
        break;
      case 'cook13':
        await this.#kojo.ws_cook14(
          tachyon,
          get_chara_talk(12),
          get_chara_talk(21),
          get_chara_talk(28),
          get_chara_talk(302),
          me,
          callname,
        );
        life_marks.l_cook = era.get('flag:当前回合数');
        break;
      case 'cook21':
        await this.#kojo.ws_cook22(tachyon, me, callname, life_marks.cook);
        break;
      case 'cook22':
        await this.#kojo.ws_cook23(tachyon, me, callname);
        life_marks.l_cook = era.get('flag:当前回合数');
        break;
      case 'hate':
        await this.#kojo.ws_hate(tachyon, me, callname);
        break;
      case 'p1':
        await print_title_with_kojo(this.#kojo, 'ws_punishment1', tachyon, me);
        break;
      case 'p2':
        await print_title_with_kojo(this.#kojo, 'ws_punishment2', tachyon, me);
        era.add('exp:0:阴茎高潮次数', 3);
        era.add('exp:0:射精量', 12);
        !get_penis_size(32) && era.set('status:32:弗隆P', 1);
        begin_and_init_ero(0, 32);
        set_palam_to_max(0, part_enum.penis);
        await quick_make_love(
          new EroParticipant(0, part_enum.mouth),
          new EroParticipant(32, part_enum.penis),
          false,
        );
        if (love < 75) {
          set_palam_to_max(32, part_enum.penis);
          set_palam_to_max(0, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(32, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
          set_palam_to_max(32, part_enum.penis);
          set_palam_to_max(0, part_enum.mouth);
          await quick_make_love(
            new EroParticipant(32, part_enum.penis),
            new EroParticipant(0, part_enum.mouth),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.foot),
            new EroParticipant(0, part_enum.body),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.hit),
            new EroParticipant(0, part_enum.body),
            false,
          );
        } else {
          await quick_make_love(
            new EroParticipant(32, part_enum.hit),
            new EroParticipant(0, part_enum.anal),
            false,
          );
          set_palam_to_max(32, part_enum.penis);
          set_palam_to_max(0, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(32, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
        }
        end_ero_and_train();
        get_custom_mec(32).set_callname();
        break;
      case 'p3':
        child = era
          .getAddedCharacters()
          .filter(
            (e) =>
              era.get(`cflag:${e}:父方角色`) +
                era.get(`cflag:${e}:母方角色`) ===
                32 && era.get(`cflag:${e}:成长阶段`) >= 2,
          );
        child = child.length > 0 && get_chara_talk(get_random_entry(child));
        await print_title_with_kojo(
          this.#kojo,
          'ws_punishment3',
          tachyon,
          child,
          me,
          sys_get_colored_callname(this.id, 5),
          sys_get_colored_callname(this.id, 9),
          sys_get_colored_callname(this.id, 25),
          sys_get_colored_callname(this.id, 36),
          sys_get_colored_callname(this.id, 94),
        );
        begin_and_init_ero(0, 32);
        await quick_make_love(
          new EroParticipant(32, part_enum.foot),
          new EroParticipant(0, part_enum.body),
          false,
        );
        await quick_make_love(
          new EroParticipant(32, part_enum.hit),
          new EroParticipant(0, part_enum.body),
          false,
        );
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          init_ero(25);
          await quick_make_love(
            new EroParticipant(25, part_enum.hit),
            new EroParticipant(0, part_enum.breast),
            false,
          );
          await quick_make_love(
            new EroParticipant(25, part_enum.mouth),
            new EroParticipant(0, part_enum.breast),
            false,
          );
        }
        if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
          !get_penis_size(94) && era.set('status:94:弗隆P', 1);
          init_ero(94);
          era.set('palam:94:阴茎快感', era.get('tcvar:94:阴茎快感上限'));
          await quick_make_love(
            new EroParticipant(94, part_enum.penis),
            new EroParticipant(0, part_enum.mouth),
            false,
          );
        }
        if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
          !get_penis_size(9) && era.set('status:9:弗隆P', 1);
          init_ero(9);
          era.set('palam:9:阴茎快感', era.get('tcvar:9:阴茎快感上限'));
          await quick_make_love(
            new EroParticipant(9, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
          era.set('palam:9:阴茎快感', era.get('tcvar:9:阴茎快感上限'));
          await quick_make_love(
            new EroParticipant(9, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
        }
        if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
          init_ero(5);
          await quick_make_love(
            new EroParticipant(5, part_enum.abuse),
            new EroParticipant(0, part_enum.masochism),
            false,
          );
        }
        if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
          !get_penis_size(36) && era.set('status:36:弗隆P', 1);
          init_ero(36);
          era.set('palam:36:阴茎快感', era.get('tcvar:36:阴茎快感上限'));
          await quick_make_love(
            new EroParticipant(36, part_enum.penis),
            new EroParticipant(0, part_enum.anal),
            false,
          );
        }

        if (child) {
          !get_penis_size(child.id) && era.set(`status:${child.id}:弗隆P`, 1);
          init_ero(child.id);
          era.set(
            `palam:${child.id}:阴茎快感`,
            era.get(`tcvar:${child.id}:阴茎快感上限`),
          );
          await quick_make_love(
            new EroParticipant(child.id, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
        }

        if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
          await quick_make_love(
            new EroParticipant(32, part_enum.foot),
            new EroParticipant(0, part_enum.body),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.hit),
            new EroParticipant(0, part_enum.body),
            false,
          );
        }

        !get_penis_size(32) && era.set('status:32:弗隆P', 1);
        if (love >= 75) {
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(0, part_enum.mouth),
            false,
          );
          set_palam_to_max(32, part_enum.penis);
          await quick_make_love(
            new EroParticipant(32, part_enum.penis),
            new EroParticipant(0, part_enum.virgin),
            false,
          );
        } else {
          era.set('palam:32:阴茎快感', era.get('tcvar:32:阴茎快感上限'));
          await quick_make_love(
            new EroParticipant(32, part_enum.penis),
            new EroParticipant(0, part_enum.mouth),
            false,
          );
        }
        era.setColor();
        end_ero_and_train();
        get_custom_mec(32).set_callname();
    }
  }

  select() {
    const life_marks = new TachyonLifeMarks();
    if (new TachyonEduMarks().plan_b && life_marks.b_escape) {
      life_marks.b_escape = 0;
      return super.select();
    }
    if (!sys_check_awake(32) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    this.#kojo.select_when_escape(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
    life_marks.b_escape = 0;
  }

  good_morning() {
    const tachyon = get_chara_talk(32),
      life_marks = new TachyonLifeMarks();
    if (life_marks.b_escape) {
      life_marks.b_escape = 0;
      return this.#kojo.select_when_escape(
        tachyon,
        sys_get_colored_callname(this.id, 0),
      );
    }
    this.#kojo.good_morning(tachyon);
  }

  async talk() {
    if (!sys_check_awake(32)) {
      return await super.talk();
    }
    const edu_marks = new TachyonEduMarks();
    const life_marks = new TachyonLifeMarks();
    const tachyon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_colored_callname(this.id, 0);
    const relation = era.get('relation:32:0');
    const love = era.get('love:32');
    if (edu_marks.tenn_spr > 0) {
      await this.#kojo.talk_tenn_spr(
        tachyon,
        me,
        race_infos[race_enum.tenn_spr].get_colored_name(),
      );
    } else if (relation > 225 && love < 50 && life_marks.talk_call < 3) {
      await this.#kojo.event_talk_callname(
        tachyon,
        me,
        callname,
        ++life_marks.talk_call,
      );
    } else if (relation > 375 && love < 50 && !edu_marks.black_tea) {
      edu_marks.black_tea = 1;
      await this.#kojo.event_talk_black_tea(tachyon, me, callname);
    } else if (relation > 375 && love < 50 && era.get('cflag:32:干劲') < 0) {
      await this.#kojo.talk_hizamakura(tachyon, me, callname);
      era.println();
      sys_change_pressure(32, -get_random_value(500, 1000));
      sys_change_motivation(32, 1) && (await era.waitAnyKey());
    } else if (
      relation > 150 &&
      (relation <= 225 || love >= 50) &&
      !edu_marks.drink
    ) {
      edu_marks.drink = 1;
      await this.#kojo.event_talk_drink(
        tachyon,
        me,
        callname,
        sys_get_colored_callname(0, 25),
      );
    } else {
      await this.#kojo.talk(
        tachyon,
        get_chara_talk(25),
        me,
        callname,
        sys_get_colored_callname(this.id, 9),
        sys_get_colored_callname(0, 20),
        sys_get_colored_callname(this.id, 25),
        relation,
        love,
        life_marks.talk++,
        life_marks.cook,
      );
    }
  }

  async office_cook(hook) {
    const edu_marks = new TachyonEduMarks();
    const life_marks = new TachyonLifeMarks();
    await this.#kojo.office_cook(
      get_chara_talk(this.id),
      get_chara_talk(25),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      life_marks.cook,
      edu_marks.plan_b > 0 && era.get('cflag:32:育成回合计时') <= 47 + 44,
    );
    if (era.get('relation:32:0') <= 150 && life_marks.cook === 0) {
      hook.override = true;
    } else {
      life_marks.cook++;
      life_marks.l_cook = era.get('flag:当前回合数');
    }
  }

  async office_study() {
    await this.#kojo.office_study(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_rest() {
    await this.#kojo.office_rest(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_prepare() {
    await this.#kojo.office_prepare(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_game() {
    await this.#kojo.office_game(get_chara_talk(this.id));
  }

  async school_atrium(hook) {
    hook.arg = 0;
    const tachyon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_colored_callname(this.id, 0);
    const edu_marks = new TachyonEduMarks();
    const plan_b =
      edu_marks.plan_b > 0 && era.get('cflag:32:育成回合计时') <= 47 + 44;
    if (!plan_b && !edu_marks.evil && Math.random() < 0.2) {
      edu_marks.evil = 1;
      return await this.#kojo.event_atrium_evil(tachyon, me, callname);
    }
    await this.#kojo.school_atrium(tachyon, me, callname, plan_b);
  }

  async school_rooftop(hook) {
    const tachyon = get_chara_talk(this.id);
    const coffee = get_chara_talk(25);
    const me = get_chara_talk(0);
    const callname = sys_get_colored_callname(this.id, 0);
    const relation = era.get('relation:32:0');
    const edu_marks = new TachyonEduMarks();
    const plan_b =
      edu_marks.plan_b > 0 && era.get('cflag:32:育成回合计时') <= 47 + 44;
    if (
      !edu_marks.roof_b &&
      plan_b &&
      era.get('relation:32:0') > 375 &&
      Math.random() < 1 / 4
    ) {
      edu_marks.roof_b = 1;
      await this.#kojo.event_rooftop_b(tachyon, coffee, me);
    } else if (
      !edu_marks.roof_a &&
      !edu_marks.plan_b &&
      relation > 375 &&
      Math.random() < 1 / 4
    ) {
      edu_marks.roof_a = 1;
      await this.#kojo.event_rooftop_a(tachyon, me, callname);
    } else {
      await this.#kojo.school_rooftop(tachyon, coffee, me, callname, plan_b);
    }
  }

  async o_r_fishing(tachyon, me, hook, extra) {
    await this.#kojo.o_r_fishing(
      tachyon,
      sys_get_colored_callname(this.id, 0),
      extra.jpy,
    );
  }

  async o_r_walking(tachyon, me) {
    const edu_marks = new TachyonEduMarks();
    if (!edu_marks.river && Math.random() < 0.5) {
      edu_marks.river = 1;
      await this.#kojo.event_river(
        tachyon,
        get_chara_talk(25),
        get_chara_talk(41),
        get_chara_talk(52),
        get_chara_talk(94),
        me,
        sys_get_colored_callname(this.id, 0),
      );
    } else {
      await this.#kojo.o_r_walking(
        tachyon,
        sys_get_colored_callname(this.id, 0),
        new TachyonLifeMarks().first > 0,
      );
    }
  }

  async o_s_arcade(tachyon, me, hook) {
    await this.#kojo.o_s_arcade(tachyon, sys_get_colored_callname(this.id, 0));
  }

  async o_s_drawing(tachyon, me, hook) {
    await this.#kojo.o_s_drawing(tachyon, sys_get_colored_callname(this.id, 0));
  }

  async o_s_ktv(tachyon, me, hook) {
    await this.#kojo.o_s_ktv(tachyon, sys_get_colored_callname(this.id, 0));
  }

  async o_s_movie(tachyon, me, hook) {
    await this.#kojo.o_s_movie(tachyon);
  }

  async o_s_restaurant(tachyon, me, hook) {
    await this.#kojo.o_s_restaurant(
      tachyon,
      me,
      sys_get_colored_callname(this.id, 0),
      new TachyonLifeMarks().cook,
    );
  }

  async o_s_dating(tachyon, me, hook) {
    const edu_marks = new TachyonEduMarks();
    if (era.get('love:32') >= 50 && !edu_marks.station) {
      edu_marks.station = 1;
      await print_title_with_kojo(this.#kojo, 'event_station', tachyon, me);
    } else {
      await this.#kojo.o_s_dating(
        tachyon,
        me,
        sys_get_colored_callname(this.id, 0),
      );
    }
  }

  async o_s_shopping(tachyon, me, hook) {
    await this.#kojo.o_s_shopping(
      tachyon,
      me,
      sys_get_colored_callname(this.id, 0),
    );
  }

  async out_church(hook) {
    const tachyon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_callname(this.id, 0);
    const edu_marks = new TachyonEduMarks();
    if (!edu_marks.church && Math.random() < 0.1) {
      edu_marks.church = 1;
      await print_title_with_kojo(
        this.#kojo,
        'event_church',
        tachyon,
        me,
        callname,
      );
    } else {
      await this.#kojo.out_church(tachyon, me, callname, edu_marks.plan_b > 0);
    }
  }

  async slave_end() {
    if (
      era.get('cflag:0:性别') !== 1 ||
      era.get(`cflag:${this.id}:性别`) !== 1
    ) {
      return await super.slave_end();
    }
    await print_title_with_kojo.ending(
      this.#kojo,
      'slave_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async end_talk(hentai) {
    await this.#kojo.end_talk(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      hentai,
      era.get(`cflag:${this.id}:育成回合计时`) >= 47 + 25,
      new TachyonEduMarks().plan_b > 0,
    );
  }
};
