// Inert stand-in for the character-talk factory. The real module pulls in the
// `.kojo` talk scripts, which plain Node cannot parse; the code paths under test
// only need a colored-name object for their (no-op) `era.print` calls.
module.exports = {
  get_chara_talk(cid) {
    return {
      id: cid,
      name: undefined,
      color: '#000000',
      actual_name: `chara${cid}`,
      get_colored_name() {
        return { color: '#000000', content: String(cid), fontWeight: 'bold' };
      },
    };
  },
  say_by_passer_by() {},
  say_by_passer_by_and_wait() {},
};
