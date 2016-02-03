import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

const files = './node_modules/evil-icons/assets/icons/*.svg';

gulp.task('svg-css', () => {
  return gulp.src(files)
    .pipe(svgSprite({
        shape: {
            transform: []
        },
        mode: {
            css: {
                dest: '',
                bust: false,
                render: {
                  css: {
                    example: true
                  }  ,
                  scss: {
                    example: true
                  }
                },
                example: true

            }
        }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('svg-defs', () => {
  return gulp.src(files)
    .pipe(svgSprite({
        shape: {
            transform: []
        },
        mode: {
            defs: {
                dest: '',
                bust: false,
                example: true
            }
        }
    }))
    .pipe(gulp.dest('dist'));
})