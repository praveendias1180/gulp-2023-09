const gulp = require('gulp');

gulp.task('message', function (done) {
    console.log('Gulp Test');
    done();
})

gulp.task('test', async function () {
    console.log('Gulp Test');
})

const defaultTask = async () => {
    console.log('hello');
}

// exports.default = defaultTask;

gulp.task('default', async function () {
    console.log('Gulp Default');
})