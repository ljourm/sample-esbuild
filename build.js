const { build } = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

const isDev = process.env.NODE_ENV === "development";

console.log("bundle...");
console.log(`isDev: ${isDev}`);

const options = {
  target: "es2015",
  platform: "browser",
  entryPoints: ["src/index.jsx"],
  outdir: "dest",
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  plugins: [sassPlugin({ sourceMap: isDev })],
  watch: {
    onRebuild(err, result) {
      console.log(JSON.stringify(err?.errors));
      console.log(JSON.stringify(result?.warnings));
    },
  },
};

build(options)
  .then(() => {
    console.log("===========================================");
    console.log(`${new Date().toLocaleString()}: watching...`);
  })
  .catch((err) => console.log(`Error: ${JSON.stringify(err)}`));

console.log("completed!!");
