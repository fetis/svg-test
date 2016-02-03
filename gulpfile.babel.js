import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

gulp.task('svg-css', () => {
  return gulp.src('./node_modules/evil-icons/assets/icons/*.svg')
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
})