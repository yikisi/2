const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  async 49(nature, me, callname) {
    if (
      (
        await i18n().kojo[this.id].love[49](
          nature,
          me,
          callname,
          sys_get_callname(this.id, this.id),
        )
      )['update'] === 1
    ) {
      begin_and_init_ero(60);
      // CFLAGNAME:5 = 阴道尺寸
      if (era.get('cflag:60:5')) {
        // PARAMNAME:5 = 阴道
        era.set('palam:60:5', era.get('tcvar:60:阴道快感上限'));
        await quick_make_love(
          new EroParticipant(60, part_enum.hand),
          new EroParticipant(60, part_enum.virgin),
          false,
        );
      } else {
        // PARAMNAME:3 = 阴茎
        era.set('palam:60:3', era.get('tcvar:60:阴茎快感上限'));
        await quick_make_love(
          new EroParticipant(60, part_enum.hand),
          new EroParticipant(60, part_enum.penis),
          false,
        );
      }
      end_ero_and_train();
      await sys_love_uma_in_event(60);
    } else {
      // CFLAGNAME:46 = 爱慕暂拒
      era.set('cflag:60:46', 49);
    }
  }

  async 74(nature, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      if (
        (await i18n().kojo[this.id].love['74-1'](nature, me, callname))[
          'update'
        ] === 1
      ) {
        add_event(event_hooks.back_school, event_object);
      } else {
        era.set('cflag:60:46', 74);
      }
    } else if (stage === event_hooks.back_school) {
      const cur_chara = era.get('flag:当前互动角色');
      if (cur_chara > 0 && cur_chara !== this.id) {
        add_event(stage, event_object);
        return;
      }
      if (
        (
          await i18n().kojo[this.id].love['74-2'](
            nature,
            me,
            callname,
            sys_get_colored_callname(this.id, 55),
          )
        )['update'] === 1
      ) {
        era.println();
        await sys_love_uma_in_event(60);
      } else {
        era.set('cflag:60:46', 74);
        await punish_rejecting_love(60);
      }
    }
  }

  async 89(nature, me) {
    await i18n().kojo[this.id].love[89](nature, me);
    await sys_love_uma_in_event(60);
  }
};
