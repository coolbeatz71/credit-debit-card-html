const { src, task, watch, series, dest } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

// Compile Sass & Inject Into Browser
task(
  "sass",
  series(function () {
    return src(["scss/*.scss"])
      .pipe(sass())
      .pipe(dest("style"))
      .pipe(browserSync.stream());
  }),
);

// Move JS Files to src/js
task(
  "js",
  series(function () {
    return src(["node_modules/jquery/dist/jquery.min.js", "script/*.js"])
      .pipe(dest("js"))
      .pipe(browserSync.stream());
  }),
);

// Watch Sass & Serve
task(
  "serve",
  series("sass", function () {
    browserSync.init({
      server: "./",
    });

    watch(["scss/*.scss"], series("sass"));
    watch("*.html").on("change", browserSync.reload);
    watch("script/*.js", series("js"));
  }),
);

task("default", series("js", "serve"));
