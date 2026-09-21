const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');
const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const CustomizedEro = require('#/event/ero/ero-common');

const { i18n } = require('#/i18n/selector');

class TeioNormalCommunications extends EroNormalCommunications {
  async talk(attacker, defender, hook) {
    if (defender.id !== this.id || !era.get('status:3:腿伤')) {
      return await super.talk(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.talk_with_hurt(
      defender,
      attacker,
      sys_get_colored_callname(attacker.id, defender.id),
    );
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.lure(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.lure(
      defender,
      attacker,
      (hook.arg = EroNormalCommunications.check_lure_success(
        attacker.id,
        defender.id,
      )),
    );
  }

  async switch(attacker, defender) {
    if (defender.id !== this.id) {
      return await super.switch(attacker, defender);
    }
    await i18n().kojo[this.id].ero.switch(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }
}

class TeioNormalMakingOuts extends EroNormalMakingOuts {
  async pet_anal(attacker, defender, hook) {
    if (defender.id !== this.id || !hook.arg) {
      return await super.pet_anal(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.pet_anal(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.prepare_anal(defender, attacker);
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== this.id || !era.get('status:3:腿伤') || !hook.arg) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_foot_job_with_hurt(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async force_foot_job(attacker, defender, hook) {
    if (defender.id !== this.id || !era.get('status:3:腿伤') || !hook.arg) {
      return await super.force_foot_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_foot_job_with_hurt(
      defender,
      attacker,
      sys_get_colored_callname(defender.id, attacker.id),
    );
  }

  async ask_tail_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.ask_tail_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_tail_job(defender, attacker, hook.arg);
  }

  async force_tail_job(attacker, defender, hook) {
    if (defender.id !== this.id) {
      return await super.force_tail_job(attacker, defender, hook);
    }
    await i18n().kojo[this.id].ero.ask_tail_job(defender, attacker, hook.arg);
  }
}

class TeioNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, { communications: true, making_outs: true });
    this.communications = new TeioNormalCommunications(this);
    this.making_outs = new TeioNormalMakingOuts(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(cid) {
    super(cid, { normal: true });
    this.normal = new TeioNormalLines(this);
  }

  async report_pregnant_between_weeks(teio, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id !== 3) {
      return await super.report_pregnant_between_weeks(
        teio,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    await i18n().kojo[this.id].ero.preg_report(teio, me);
  }
};
