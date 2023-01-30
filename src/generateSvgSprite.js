export const generateSvgSprite = () => {
  let cache = {};

  // with cash
  const importAll = (r) => {
    r.keys().forEach(key => cache[key] = r(key));
  };

  // without cash
  // const importAll = (r) => {
  //     r.keys().forEach(r);
  // };

  // eslint-disable-next-line no-undef
  importAll(require.context('./components/assets/icons', false, /\.svg$/));
};