const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/zh-CN/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/en-US/kojo/1000-Player/daily-0'));
  edu = proxy_kojo_js(require('#/i18n/en-US/kojo/1000-Player/edu-0'));
  ero = proxy_kojo_js(require('#/i18n/en-US/kojo/1000-Player/ero-0'));

  akuochi = 'Corruption';
  akuochi_desc = 'Just enjoy it.';

  b_l_time = 'Drowsy';
  b_l_time_desc =
    'Mentally drained and unfocused—could pass out at any moment!';

  b_l_stamina = 'Exhausted';
  b_l_stamina_desc =
    'Completely wiped out and barely holding on. Energy costs skyrocket!';

  pn_1 = 'Racing Mare';
  pn_1_desc =
    'Active Umamusume, but can only enter Senior-year races; no salary, race prize share +400%.';
  pn_2_desc =
    'Active sex slave, can only enter Senior-year races; no salary, race prize share +400%, gains fame from sexual service.';
  pn_3_desc =
    'Active breeding vessel, can only enter Senior-year races; no salary, race prize share +400%, gains fame from sex with Umamusume and giving birth, offspring race fame bonus +100%.';

  rape = 'Dirty Deeds Done Dirt Cheap';
  rape_desc = '"Dirty Deeds Done Dirt Cheap…" Go rape. Go ravage. Go conquer!';
};
