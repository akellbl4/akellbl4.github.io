const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const inline = require('gulp-inline')
const csso = require('gulp-csso')
const rimraf = require('gulp-rimraf')
const uglify = require('gulp-uglify-es').default
const connect = require('gulp-connect')
const gulpMinifyCssNames = require('gulp-minify-cssnames')
const ghPages = require('gulp-gh-pages')

const SRC_DIR = './public'
const DEST_DIR = './dist'
const SRC_CWD = { cwd: SRC_DIR }
const DEST_CWD = { cwd: DEST_DIR }
const UGLIFY_OPTS = { mangle: false }
const HTMLMINIFY_OPTS = {
	collapseWhitespace: true,
	removeComments: true,
	sortAttributes: true,
}


// minify class names and copy to dest dir
gulp.task('minify-classnames', () =>
	gulp.src('*.{css,html,js}', SRC_CWD)
		.pipe(gulpMinifyCssNames({
			prefix: 'pm--',
			postfix: '',
		}))
		.pipe(gulp.dest(DEST_DIR))
)

// copy unprocessible files to dest dir
gulp.task('copy-other-files', () =>
	gulp.src(['*.!(html|js|css)', 'CNAME'], SRC_CWD)
		.pipe(connect.reload())
		.pipe(gulp.dest(DEST_DIR))
)

// minify and insert css and js to html
gulp.task('minify-html-inline', () =>
	gulp.src('index.html', DEST_CWD)
		.pipe(inline({
			base: DEST_DIR,
			css: csso,
			js: () => uglify(UGLIFY_OPTS),
			disabledTypes: ['svg', 'img'],
		}))
		.pipe(htmlmin(HTMLMINIFY_OPTS))
		.pipe(connect.reload())
		.pipe(gulp.dest(DEST_DIR))
)

// remove inlined css and js from dest dir
gulp.task('cleanup-build', () =>
	gulp.src('*.{js,css}', DEST_CWD)
		.pipe(rimraf())
)

gulp.task('serve', () => {
	gulp.watch('./public/*.(html|css|js)', gulp.series('minify-classnames', 'minify-html-inline', 'cleanup-build'))
	gulp.watch('./public/*.!(html|css|js)', gulp.series('copy-other-files'))

	connect.server({
		root: [ DEST_DIR, SRC_DIR ],
		livereload: true,
		debug: true,
	})
})

gulp.task('gh-pages', () =>
	gulp.src(`${DEST_DIR}/**/*`)
		.pipe(ghPages({ branch: 'master' }))
)

// build site to dest dir
gulp.task('default', gulp.series('minify-classnames', 'copy-other-files', 'minify-html-inline', 'cleanup-build'))
// build and deploy site
gulp.task('deploy', gulp.series('default', 'gh-pages'))
// dev env
gulp.task('dev', gulp.series('default', 'serve'))
