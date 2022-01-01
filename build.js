const path = require("path");
const { build } = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

const environment = process.env.NODE_ENV ?? "development";
const isDev = environment === "development";

const doWatch = process.env.WATCH === "true" || false;

console.log("bundle...");
console.log(`isDev: ${isDev}`);

const options = {
  target: "es2015",
  platform: "browser",
  entryPoints: [path.resolve(__dirname, "src/index.tsx")],
  outdir: "dest",
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  platform: "browser",
  treeShaking: true,
  plugins: [sassPlugin({ sourceMap: isDev })],
  watch: doWatch && {
    onRebuild(err, result) {
      console.log(JSON.stringify(err?.errors));
      console.log(JSON.stringify(result?.warnings));
    },
  },
};

build(options)
  .then(() => {
    console.log(`${new Date().toLocaleString()}: completed`);
  })
  .catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
