const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const inline = require('gulp-inline')
const csso = require('gulp-csso')
const uglify = require('gulp-uglify-es').default
const connect = require('gulp-connect')
const ghPages = require('gulp-gh-pages')


gulp.task('copy', () =>
	gulp.src('./public/*.!(js|css)')
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist'))
)

gulp.task('html', () =>
	gulp.src('./public/index.html')
		.pipe(inline({
			base: './public',
			css: csso,
			js: () => uglify({ mangle: false }),
			disabledTypes: ['svg', 'img'],
		}))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(connect.reload())
		.pipe(gulp.dest('./dist'))
)

gulp.task('serve', () => {
	gulp.watch('./public/*.(html|css|js)', gulp.series('html'))
	gulp.watch('./public/*.!(html|css|js)', gulp.series('copy'))

	connect.server({
		root: [ './dist', './public' ],
		livereload: true,
		debug: true,
	})
})

gulp.task('gh-pages', () =>
	gulp.src('./dist/**/*')
		.pipe(ghPages({ branch: 'master' }))
)

gulp.task('default', gulp.series('copy', 'html'))
gulp.task('deploy', gulp.series('default', 'gh-pages'))
gulp.task('dev', gulp.series('default', 'serve'))
