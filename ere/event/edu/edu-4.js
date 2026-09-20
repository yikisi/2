const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async week_start(maru, me, callname, hook, extra, ebj) {
    const edu_marks = new MaEduMarks();
    let wait = false;
    switch (ebj?.arg) {
      case 5:
        await print_event_name(this.#kojo.ws_5.title(maru), maru);
        await this.#kojo.ws_5(maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 24:
        await print_title_with_kojo(this.#kojo, 'ws_24', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [0, 20] });
        break;
      case 30:
        await print_title_with_kojo(
          this.#kojo,
          'ws_30',
          maru,
          get_chara_talk(17, chara_colors[17][1]),
          me,
          callname,
        );
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
        break;
      case 34:
        await print_title_with_kojo(this.#kojo, 'ws_34', maru, me);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 20] });
        break;
      case 47:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_47', maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 20], pt: 120 });
        break;
      case 47 + 1:
        era.set('cflag:4:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              maru,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [20] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { base: [200] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 100 });
        }
        break;
      case 47 + 5:
        if (
          await print_title_with_kojo(this.#kojo, 'ws_47_5', maru, me, callname)
        ) {
          edu_marks.wind--;
        } else {
          edu_marks.wind++;
        }
        wait = all_reward_in_event(this.id, { attr: [0, 20] });
        break;
      case 47 + 6:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_6',
          maru,
          get_chara_talk(46),
          get_chara_talk(301),
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
        break;
      case 47 + 7:
        if (
          (await print_title_with_kojo(this.#kojo, 'ws_47_7', maru, me))[0] ===
          1
        ) {
          edu_marks.wind++;
        } else {
          edu_marks.wind--;
        }
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 0, 20] });
        break;
      case 47 + 9:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_47_9', maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 0, 20] });
        break;
      case 47 + 12:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_47_12', maru, me, callname);
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:4:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(event_hooks.week_start, ebj);
          return false;
        }
        await print_title_with_kojo(this.#kojo, 'ws_47_29', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [20] });
        break;
      case 47 + 30:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:4:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(event_hooks.week_start, ebj);
          return false;
        }
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_47_30', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [20] });
        break;
      case 47 + 31:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:4:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(event_hooks.week_start, ebj);
          return false;
        }
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_31',
              maru,
              me,
              callname,
            )
          )[0] === 1
        ) {
          edu_marks.wind++;
          wait = all_reward_in_event(this.id, { attr: new Array(5).fill(20) });
        } else {
          edu_marks.broken_tears = 1;
          era.set('flag:强制BE', this.id);
        }
        break;
      case 47 + 40:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_47_40', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.intelligence]: 20 },
        });
        break;
      case 47 + 48:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_47_48', maru, me, callname);
        if (edu_marks.sister_annoyance > 0 && edu_marks.girls_blue === 2) {
          if (edu_marks.wind >= 15) {
            edu_marks.good_end_notify = 1;
          } else if (edu_marks.wind >= 10) {
            edu_marks.true_end_notify = 1;
          }
        }
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 20 },
        });
        break;
      case 95 + 6:
        era.set(`cflag:${this.id}:节日事件标记`, 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_6', maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 20] });
        break;
      case 95 + 14:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_14', maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
        break;
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:4:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(this.#kojo, 'ws_95_29', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 20 },
        });
        break;
      case 95 + 30:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:4:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_30', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 95 + 40:
        era.set(`cflag:${this.id}:节日事件标记`, 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_40', maru, me, callname);
        break;
      case 143 + 5:
        if (edu_marks.fall_heaven > 0) {
          await this.#kojo.fall_heaven(
            maru,
            get_chara_talk(302),
            get_chara_talk(340),
            get_chara_talk(341),
            get_chara_talk(342),
            me,
            callname,
          );
          await print_event_name(this.#kojo.fall_heaven.title, maru);
          await this.#kojo.fall_heaven_end();
        } else if (edu_marks.gentle_wind > 0) {
          await this.#kojo.gentle_wind(maru, me, callname);
          await print_event_name(this.#kojo.gentle_wind.title, maru);
          await this.#kojo.gentle_wind_end(maru, callname);
        } else if (edu_marks.girls_dream) {
          await this.#kojo.girls_dream(maru, me, callname);
          await print_event_name(this.#kojo.girls_dream.title, maru);
          await this.#kojo.girls_dream_end(maru, callname);
        }
        break;
      case 'memory':
      case 'teacher_sister':
        await print_title_with_kojo(this.#kojo, ebj.arg, maru, me, callname);
        break;
      case 'palace':
        return await super.week_start(maru, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }

  async week_end(maru, me, callname, hook, extra, ebj) {
    const edu_marks = new MaEduMarks();
    let ret;
    let wait = false;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(this.#kojo, ebj.arg, maru, me, callname);
        break;
      case 39:
        await print_title_with_kojo(this.#kojo, 'we_39', maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 0, 20] });
        break;
      case 41:
        await print_event_name(this.#kojo.we_41.title(maru), maru);
        await this.#kojo.we_41(maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [10, 0, 10] });
        break;
      // 47 + 12
      case 'sister_annoyance':
        await print_event_name(this.#kojo.sister_annoyance.title(maru), maru);
        await this.#kojo.sister_annoyance(maru, me, callname);
        edu_marks.wind--;
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 47 + 16:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'we_47_16',
              maru,
              get_chara_talk(301),
              me,
              callname,
            )
          )[0] === 1
        ) {
          edu_marks.wind++;
        } else {
          edu_marks.wind--;
        }
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 47 + 17:
        ret = await print_title_with_kojo(
          this.#kojo,
          'we_47_17',
          maru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: ret[0] === 1 ? [0, 20, 0, 20] : [20, 0, 20],
        });
        if (ret[1] === 1) {
          edu_marks.wind++;
        } else {
          edu_marks.wind--;
        }
        break;
      case 47 + 32:
        if (
          era.get('cflag:4:位置') !== era.get('cflag:0:位置') ||
          era.get('cflag:4:位置') !== location_enum.beach
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(this.#kojo, 'we_47_32', maru, me, callname);
        edu_marks.wind++;
        wait = all_reward_in_event(this.id, { attr: [0, 0, 10], pt: 120 });
        break;
      // 47 + 21
      case 'girls_blue':
        edu_marks.girls_blue++;
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'girls_blue_1',
              maru,
              me,
              callname,
            )
          )[0] <= 2
        ) {
          edu_marks.happiness_day = 1;
          era.set('flag:强制BE', this.id);
        }
        wait = all_reward_in_event(this.id, { pt: 120 });
        break;
      case 47 + 33:
        await print_title_with_kojo(this.#kojo, 'we_47_33', maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 47 + 34:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_34',
          maru,
          get_chara_talk(17, chara_colors[17][1]),
          me,
        );
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 47 + 37:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'we_47_37',
              maru,
              me,
              callname,
            )
          )[0] === 1
        ) {
          edu_marks.wind++;
        } else {
          edu_marks.wind--;
        }
        wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
        break;
      case 47 + 38:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_38',
          maru,
          get_chara_talk(301),
          get_chara_talk(302),
          me,
          callname,
        );
        edu_marks.wind++;
        era.set(`status:${this.id}:领域`, 1);
        edu_marks.mygo = 0;
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 95 + 9:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_9',
          maru,
          get_chara_talk(17, chara_colors[17][1]),
          me,
          callname,
        );
        edu_marks.wind++;
        break;
      case 95 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:4:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(this.#kojo, 'we_95_32', maru, me, callname);
        edu_marks.wind++;
        break;
      case 95 + 43:
        await print_title_with_kojo(this.#kojo, 'we_95_43', maru);
        edu_marks.wind++;
        break;
      case 95 + 48:
        era.set('cflag:4:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_48', maru, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          pt: 120,
        });
        break;
      case 'dream':
        await print_title_with_kojo(this.#kojo, ebj.arg, maru, me, callname);
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
    }
    wait && (await era.waitAnyKey());
  }

  async race_start(maru, me, callname, hook, extra) {
    const edu_weeks = era.get('cflag:4:育成回合计时');
    let _default = true;
    switch (extra.race) {
      case race_enum.begin_race:
        if (edu_weeks < 48) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'before_begin_race',
            maru,
            callname,
          );
        }
        break;
      case race_enum.asah_sta:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_asah_sta',
          maru,
          me,
          callname,
        );
        break;
      case race_enum.sprg_sta:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_sprg_sta',
          maru,
          me,
          callname,
        );
        break;
      case race_enum.sats_sho:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_sats_sho',
          maru,
          me,
          callname,
        );
        break;
      case race_enum.toky_yus:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_toky_yus',
          maru,
          me,
          callname,
        );
        break;
      case race_enum.radi_shi:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_radi_shi',
          maru,
          me,
          callname,
        );
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'before_arim_kin_c',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.sank_hai:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_sank_hai',
          maru,
          me,
          callname,
        );
        break;
      case race_enum.yasu_kin:
        if (edu_weeks > 96) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'before_yasu_kin_s',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'before_tenn_sho_s',
            maru,
            me,
            callname,
          );
        }
    }
    if (_default) {
      await print_title_with_kojo(this.#kojo, 'race_start', maru, me, callname);
    }
  }

  async race_end(maru, me, callname, hook, extra) {
    const edu_marks = new MaEduMarks();
    const edu_weeks = era.get('cflag:4:育成回合计时');
    let _default = true;
    switch (extra.race) {
      case race_enum.begin_race:
        if (edu_weeks < 48) {
          if (extra.rank === 1) {
            await print_title_with_kojo(
              this.#kojo,
              'begin_race_win',
              maru,
              me,
              callname,
            );
          } else {
            await print_title_with_kojo(
              this.#kojo,
              'begin_race_lose',
              maru,
              me,
            );
          }
        }
        break;
      case race_enum.asah_sta:
        if (extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(this.#kojo, 'asah_sta_win', maru, me);
        } else if (extra.rank <= 5) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'asah_sta_5',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.sprg_sta:
        if (extra.rank === 1) {
          _default = false;
          if (
            (
              await print_title_with_kojo(
                this.#kojo,
                'sprg_sta_win',
                maru,
                me,
                callname,
              )
            )[0] === 1
          ) {
            edu_marks.Self_contempt = 1;
            era.set('flag:强制BE', this.id);
          }
        }
        break;
      case race_enum.sats_sho:
        if (extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'sats_sho_win',
            maru,
            me,
            callname,
          );
        } else if (extra.rank <= 5) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'sats_sho_5',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.toky_yus:
        _default = false;
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              extra.rank === 1 ? 'toky_yus_win' : 'toky_yus_lose',
              maru,
              me,
              callname,
            )
          )[0] === 1
        ) {
          edu_marks.happiness_day = 1;
          era.set('flag:强制BE', this.id);
        }
        break;
      case race_enum.radi_shi:
        if (extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'radi_shi_win',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            extra.rank === 1 ? 'arim_kin_win_c' : 'arim_kin_lose_c',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.sank_hai:
        _default = false;
        if (extra.rank === 1) {
          await print_title_with_kojo(
            this.#kojo,
            'sank_hai_win',
            maru,
            get_chara_talk(17, chara_colors[17][1]),
            me,
          );
        } else {
          await print_title_with_kojo(this.#kojo, 'sank_hai_lose', maru);
        }
        break;
      case race_enum.yasu_kin:
        if (edu_weeks > 96 && extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'yasu_kin_win_s',
            maru,
            me,
            callname,
          );
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'tenn_sho_win_s',
            maru,
            get_chara_talk(340),
            get_chara_talk(341),
            get_chara_talk(342),
            me,
            callname,
          );
        }
    }
    if (_default) {
      let key;
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else if (extra.rank <= 10) {
        key = 'race_end_10';
      }
      if (key) {
        await print_title_with_kojo(this.#kojo, key, maru);
      } else {
        return await super.race_end(maru, me, callname, hook, extra);
      }
    }
  }

  train_success_content(maru, me, callname, hook, extra) {
    this.#kojo.get_ts_content(maru, di18n.n_attr[extra.train]);
  }

  async train_success_add(maru, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(this.#kojo, 'ts_add', maru, me, callname)
      )[0] === 1
    );
  }

  async train_fail(maru, me, callname, hook, extra) {
    era.println();
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    if (extra.train !== attr_enum.intelligence) {
      const key = extra.fumble ? 'train_fumble' : 'train_fail';
      const fail_again = Math.random() < extra.args.ratio.fail_again;
      const [ret] = await print_title_with_kojo(
        this.#kojo,
        key,
        maru,
        me,
        callname,
        fail_again,
      );
      if (ret === 1) {
        hook.arg = 0;
      } else if (fail_again) {
        hook.arg = -1;
      } else {
        hook.arg = 1;
      }
    }
  }

  async out_start(maru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg === 'feel_speed') {
      if (
        all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                ebj.arg,
                maru,
                me,
                callname,
              )
            )[0] === 1
              ? [10]
              : { [attr_enum.intelligence]: 10 },
        })
      ) {
        await era.waitAnyKey();
      }
      return true;
    }
  }

  async school_atrium(maru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg === 'current_trend') {
      if (
        all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                ebj.arg,
                maru,
                me,
                callname,
              )
            )[0] === 1
              ? [10]
              : [0, 0, 10],
        })
      ) {
        await era.waitAnyKey();
      }
      return true;
    }
  }

  async back_school(maru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait;
    switch (ebj?.arg) {
      case 'favourite_things':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                ebj.arg,
                maru,
                me,
                callname,
              )
            )[0] === 1
              ? [0, 0, 20]
              : [0, 20],
        });
        break;
      case 'find_love':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                ebj.arg,
                maru,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.intelligence]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
    }
    wait && (await era.waitAnyKey());
  }

  async out_church(maru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg === 95 + 1) {
      let wait = false;
      era.set(`cflag:${this.id}:节日事件标记`, 0);
      switch (
        (
          await print_title_with_kojo(this.#kojo, 'oc_95_1', maru, me, callname)
        )[0]
      ) {
        case 1:
          wait = all_reward_in_event(this.id, { base: [600] });
          break;
        case 2:
          wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
          break;
        case 3:
          wait = all_reward_in_event(this.id, { pt: 100 });
      }
      wait && (await era.waitAnyKey());
      return true;
    }
  }

  async school_rooftop(maru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, ebj);
      return;
    }
    const edu_marks = new MaEduMarks();
    let wait = false;
    switch (ebj?.arg) {
      // 47 + 22
      case 'girls_blue':
        edu_marks.girls_blue++;
        await print_title_with_kojo(
          this.#kojo,
          'girls_blue_2',
          maru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.intelligence]: 10 },
        });
        edu_marks.wind--;
        edu_marks.mygo = 1;
        break;
      case 'beautiful_winner':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                ebj.arg,
                maru,
                get_chara_talk(30),
                me,
              )
            )[0] === 1
              ? [0, 10]
              : { [attr_enum.intelligence]: 10 },
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async crazy_fan_end() {
    const edu_marks = new MaEduMarks(),
      maru = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0),
      me = get_chara_talk(0);
    if (edu_marks.Self_contempt === 1) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_Self_contempt',
        maru,
        me,
      );
    } else if (edu_marks.happiness_day === 1) {
      await this.#kojo.ne_happiness_day(maru, me);
      await print_event_name(this.#kojo.ne_happiness_day.title, maru);
    } else if (edu_marks.broken_tears === 1) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_broken_tears',
        maru,
        me,
        callname,
      );
    } else {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_crazy_fan',
        maru,
        me,
        callname,
      );
    }
  }
};
