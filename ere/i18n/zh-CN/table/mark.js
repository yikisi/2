class I18nMark {
  n_pleasure = '欢愉';
  n_ero = '淫纹';
  n_meek = '同心';
  n_pain = '苦痛';
  n_shame = '羞耻';
  n_hate = '反抗';
  get name() {
    return [
      this.n_pleasure,
      this.n_ero,
      this.n_meek,
      this.n_pain,
      this.n_shame,
      this.n_hate,
    ];
  }

  a_pleasure = '欢';
  a_ero = '淫';
  a_meek = '顺';
  a_pain = '痛';
  a_shame = '耻';
  a_hate = '反';
  a_iron = '钢';
  get abbr() {
    return [
      this.a_pleasure,
      this.a_ero,
      this.a_meek,
      this.a_pain,
      this.a_shame,
      this.a_hate,
    ];
  }

  abbr_template = '[%NAME%%LEVEL%]';
}

module.exports = I18nMark;
