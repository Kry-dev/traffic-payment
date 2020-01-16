"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("copyScripts", () => {
    return gulp.src(paths.copyScripts.src)
        .pipe(gulp.dest(paths.copyScripts.dist))
        .pipe(debug({
            "title": "copyScripts"
        }));
});
