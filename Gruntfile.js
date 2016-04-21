module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'public/js/*'],
    },

    cssmin: {
      css: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: ['*.css', '!application.min.css'],
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
