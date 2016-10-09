module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      js: {
        files: ['src/js/*.js','src/js/**/*.js'],
        tasks: ['eslint', 'concat:js']
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['concat:css']
      },
      templates: {
        files: ['src/html/partials/*.hbs'],
        tasks: ['handlebars']
      },
      images: {
        files: ['src/css/images/*'],
        tasks: ['copy:images']
      }
    },
    eslint: {
        options: {
          configFile: "conf/eslint.json",
          format: "table"
        },
        src: ['src/js/*.js','src/js/**/*.js']
    },
    concat: {
      js: {
        options: {
          separator: '/* ---------- end of file --------------- */'
        },
        files: {
          '../androidApp/www/js/app.js': [
            'src/lib/jquery-1.7.1.min.js',
            'src/lib/underscore-min.js',
            'src/lib/backbone-min.js',
            'src/lib/handlebars.min.js',
            'src/config/jqm-config.js',
            'src/lib/jquery.mobile-1.0.1.min.js',
            'src/html/precompiledTemplates.js',
            'src/js/*.js',
            'src/js/**/*.js'
          ]
        }
      },
      css:{
        files: {
          '../androidApp/www/css/app.css': [
            'lib/*.css',
            'src/css/*.css'
          ]
        }
      }
    },
    copy: {
      images: {
        files: [
          // includes files within path
          {expand: true, flatten: true, src: ['src/css/images/*'], dest: '../androidApp/www/css/images/', filter: 'isFile'},
        ]
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'AppTmplts'
        },
        files: {
          'src/html/precompiledTemplates.js' : [ 'src/html/partials/*.hbs']
        }
      }
    },
    shell: {
        run: 'cd ../androidApp && phonegap run android'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('default', ['handlebars', 'eslint', 'concat:js', 'concat:css', 'copy:images']);
  grunt.registerTask('run', ['shell:run']);
};