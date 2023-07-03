// import pkg from "gulp";
// const { src, dest } = pkg;
// import * as sharpResponsive from "gulp-sharp-responsive";
// import * as imagemin from "gulp-imagemin";
const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");
const imagemin = require("gulp-imagemin");

const compressProjectImages = async () => {
  await src("img/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 700, format: "jpeg", rename: { suffix: "-700" } },
          { width: 1000, format: "jpeg", rename: { suffix: "-1000" } },
          { width: 1200, format: "jpeg", rename: { suffix: "-1200" } },
          { width: 1600, format: "jpeg", rename: { suffix: "-1600" } },
          { width: 2000, format: "jpeg", rename: { suffix: "-2000" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 700, format: "webp", rename: { suffix: "-700" } },
          { width: 1000, format: "webp", rename: { suffix: "-1000" } },
          { width: 1200, format: "webp", rename: { suffix: "-1200" } },
          { width: 1600, format: "webp", rename: { suffix: "-1600" } },
          { width: 2000, format: "webp", rename: { suffix: "-2000" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 700, format: "avif", rename: { suffix: "-700" } },
          { width: 1000, format: "avif", rename: { suffix: "-1000" } },
          { width: 1200, format: "avif", rename: { suffix: "-1200" } },
          { width: 1600, format: "avif", rename: { suffix: "-1600" } },
          { width: 2000, format: "avif", rename: { suffix: "-2000" } },
        ],
      })
    )
    .pipe(dest("img/compressed"));
  await src("img/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("img/compressed/"));
};
const compressPackagesImages = async () => {
  await src("img/packages/*.{png,jpg}")
    .pipe(
      sharpResponsive({
        formats: [
          // jpeg
          { width: 256, format: "jpeg", rename: { suffix: "-256" } },
          { width: 512, format: "jpeg", rename: { suffix: "-512" } },
          { width: 700, format: "jpeg", rename: { suffix: "-700" } },
          { width: 1000, format: "jpeg", rename: { suffix: "-1000" } },
          { width: 1200, format: "jpeg", rename: { suffix: "-1200" } },
          { width: 1600, format: "jpeg", rename: { suffix: "-1600" } },
          { width: 2000, format: "jpeg", rename: { suffix: "-2000" } },
          // webp
          { width: 256, format: "webp", rename: { suffix: "-256" } },
          { width: 512, format: "webp", rename: { suffix: "-512" } },
          { width: 700, format: "webp", rename: { suffix: "-700" } },
          { width: 1000, format: "webp", rename: { suffix: "-1000" } },
          { width: 1200, format: "webp", rename: { suffix: "-1200" } },
          { width: 1600, format: "webp", rename: { suffix: "-1600" } },
          { width: 2000, format: "webp", rename: { suffix: "-2000" } },
          // avif
          { width: 256, format: "avif", rename: { suffix: "-256" } },
          { width: 512, format: "avif", rename: { suffix: "-512" } },
          { width: 700, format: "avif", rename: { suffix: "-700" } },
          { width: 1000, format: "avif", rename: { suffix: "-1000" } },
          { width: 1200, format: "avif", rename: { suffix: "-1200" } },
          { width: 1600, format: "avif", rename: { suffix: "-1600" } },
          { width: 2000, format: "avif", rename: { suffix: "-2000" } },
        ],
      })
    )
    .pipe(dest("img/packages/compressed"));
  await src("img/packages/compressed/*.{webp,avif,jpg}")
    .pipe(imagemin())
    .pipe(dest("img/packages/compressed/"));
};

exports.compressProjectImages = compressProjectImages;
exports.compressPackagesImages = compressPackagesImages;
//   ,
//   compressPackagesImages,
// };
