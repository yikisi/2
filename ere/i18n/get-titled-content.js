function get_titled_content(dict, key, ...args) {
  if (!dict) {
    return {};
  }
  const desc = key + '_desc';
  if (dict[key] && dict[desc]) {
    const ret = { content: dict[key], title: dict[desc] };
    for (const k in ret) {
      if (typeof ret[k] === 'function') {
        ret[k] = ret[k](...args);
      }
    }
    return ret;
  }
}

module.exports = get_titled_content;
