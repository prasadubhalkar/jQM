/**
 * Grunt file will define the development
 * related task
 * @param  {object} grunt the actual grunt object
 * @returns {undefined}
 */
module.exports = function(grunt) {
  grunt.initConfig({
    /**
     * watch task will run the following tasks
     * 1. watch javascript files and concat all files under mobile js
     * 2. watch css files and concat all file under mobile css
     * 3. watch for any html changes and create a template and will be added to js
     * 4. watch for images and copy them to css folder
     */
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
        tasks: ['handlebars', 'concat:js']
      },
      images: {
        files: ['src/css/images/*'],
        tasks: ['copy:images']
      }
    },

    /**
     * eslint task will assure code quality and watch for errors
     */
    eslint: {
        options: {
          configFile: "conf/eslint.json",
          format: "table"
        },
        src: ['src/js/*.js','src/js/**/*.js']
    },

    /**
     * concat will conact javascript and js files and dump under
     * mobile phones
     */
    concat: {
      js: {
        options: {
          separator: ';'
        },
        files: {
          '../app/www/js/app.js': [
            'src/lib/jquery.js',
            'src/config/jqm-config.js', //concat this file before the jQM mobile is loaded
            'src/lib/jquery.mobile-1.4.5.min.js',
            'src/lib/underscore-min.js',
            'src/lib/backbone-min.js',
            'src/lib/handlebars.min.js',
            'src/html/precompiledTemplates.js',
            'src/js/*.js',
            'src/js/constants/*.js',
            'src/js/models/*.js',
            'src/js/collections/*.js',
            'src/js/views/*.js'
          ]
        }
      },
      css:{
        files: {
          '../app/www/css/app.css': [
            'lib/*.css',
            'src/css/*.css'
          ]
        }
      }
    },

    /**
     * copy will copy all images under css folder
     */
    copy: {
      images: {
        files: [
          {
            expand: true,
            flatten: false,
            cwd: 'src/css',
            src: ['images/**'],
            dest: '../app/www/css/'
          }
        ]
      }
    },

    /**
     * handlebars pre-compiler task for handlebars template
     */
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

    /**
     * run the shell command which will call the phonegap command to
     * execute application under Android environment (device/virtual device)
     * check adb devices to check all devices configured for android
     */
    shell: {
        run: 'cd ../app && phonegap run android'
    }
  });

  /**
   * Import all the modules required to run the grunts task
   */
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks('grunt-shell');

  /**
   * Configure the tasks for grunt, default and mobile execution
   */
  grunt.registerTask('default', ['handlebars', 'eslint', 'concat:js', 'concat:css', 'copy:images']);
  grunt.registerTask('run', ['shell:run']);
};