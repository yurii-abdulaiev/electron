module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'app/css/main.min.css': 'app/sass/main.scss'
        }
      }
    },
    watch: {
      files: ['app/sass/**/*.scss'],
      tasks: ['sass']
    }
  });

  // Default task(s).
  grunt.registerTask( 'default', ['sass'] );

};
