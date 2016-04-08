SystemJS.config({
  transpiler: 'plugin-babel',
  paths: {
    "github:*": "/jspm_packages/github/*",
    "npm:*": "/jspm_packages/npm/*"
  }
});
