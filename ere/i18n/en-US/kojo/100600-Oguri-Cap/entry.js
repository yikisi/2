module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100600-Oguri-Cap/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/100600-Oguri-Cap/rec-6.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/100600-Oguri-Cap/daily-6.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/en-US/kojo/100600-Oguri-Cap/edu-6.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/100600-Oguri-Cap/love-6.kojo');

  aim_desc = 'Top 3 in G1 races from January to June';

  cinderella = 'Cinderella';
  cinderella_desc =
    'At the start of each turn, stress automatically drops below Depressed and motivation automatically rises above Poor.';
  latecomer = 'Latecomer';
  latecomer_desc =
    'Training starts from the Classic year. Cannot enter the Classic Triple Crown (Satsuki Sho, Japanese Derby, Kikuka Sho).';
  transfer = (timer) => `Transfer Student (${timer})`;
  transfer_desc = (timer) => `Training effectiveness +100% for ${timer} turns.`;

  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' takes first!' },
      oguri,
      { color: oguri.color, content: ' takes first!' },
      oguri,
      { color: oguri.color, content: ' takes first!' },
      oguri,
      {
        color: oguri.color,
        content:
          ' takes first! Raising a right hand high, the winner is the super Umamusume ',
      },
      oguri,
      { color: oguri.color, content: '!' },
    ];
  }

  palace_race = 'Mock Japanese Derby';
};
