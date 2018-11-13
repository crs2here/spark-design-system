const gulp = require('gulp');
const exec = require('child_process').exec;
const runSequence = require('run-sequence');

gulp.task('setup-spark-extras-card', (cb) => {
  runSequence('link-spark-extras-card', cb);
});

gulp.task('link-spark-extras-card', (cb) => {
  exec('cd packages/spark-extras-card && npm unlink && npm link', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
