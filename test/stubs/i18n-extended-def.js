function create_magic() {
  const target = function () {};
  const proxy = new Proxy(target, {
    apply: () => proxy,
    get(_target, prop) {
      if (prop === 'then') {
        return undefined;
      }
      if (prop === Symbol.toPrimitive) {
        return () => '';
      }
      if (prop === Symbol.iterator) {
        return function* () {};
      }
      if (prop === 'toString') {
        return () => '';
      }
      if (prop === 'valueOf') {
        return () => 0;
      }
      return proxy;
    },
  });
  return proxy;
}

module.exports = create_magic();
