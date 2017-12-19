/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const Router = {
  initialRoute: null,
  navigator: null,
  // navigate() {},
  goBack() {},
  pages: {},
  register(name, component) {
    if (name in Router.pages) {
      // wait for YellowBox
      setTimeout(() => {
        console.warn(`[Router] Page name '${name}' has been registered.`);
      });
    }
    Router.pages[name] = component;
  },
  open(name) {
    Router.navigate(name);
  },
  back(name) {
    Router.goBack(name);
  },
};

export default Router;

