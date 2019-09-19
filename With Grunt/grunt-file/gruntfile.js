module.exports = function(grunt) {

    // Load plugins
    require("load-grunt-tasks")(grunt, {
        scope: "devDependencies"
    });

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                style: 'compressed',
                precision: 5
            },
            all: {
                files: {
                    '../build/assets/css/themestyle.css': '../assets/sass/themestyle.scss'
                }
            }
        },

        concat: {
            js: {
                src: ['../assets/scripts/jquery.min.js', '../assets/scripts/popper.min.js', '../assets/scripts/bootstrap-slider.min.js', '../assets/scripts/bootstrap.min.js', '../assets/scripts/bootstrap.bundle.min.js', '../assets/scripts/bootstrap-select.min.js', '../assets/scripts/bootstrap-tooltip-custom-class.js', '../assets/scripts/jquery.mCustomScrollbar.js', '../assets/scripts/Chart.min.js', '../assets/scripts/dashboard.js', '../assets/scripts/datatables.min.js', '../assets/scripts/ripple.min.js', '../assets/scripts/custome.js'],
                dest: '../build/assets/scripts/themescripts.js'
            },
            css: {
                src: ['../assets/css/animation.css','../assets/css/datatables.min.css', '../assets/css/line-awesome.min.css', '../assets/css/jquery.mCustomScrollbar.css', '../assets/css/bootstrap-select.min.css', '../assets/css/bootstrap.css', '../assets/css/bootstrap-slider.css'],
                dest: '../build/assets/css/style.css'
            }
        },

        uglify: {
            all: {
                files: {
                    '../build/assets/scripts/themescripts.min.js': '../build/assets/scripts/themescripts.js'
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '../build/assets/css/themestyle.min.css': '../build/assets/css/themestyle.css',
                    '../build/assets/css/style.min.css': '../build/assets/css/style.css'
                }
            }
        },

        imagemin: {
            dist: {
                options: {
                    progressive: true,
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: '../assets/image/',
                    src: ['**/*.{png,jpg,gif,svg,jpeg}'],
                    dest: '../build/assets/image/'
                }]
            }
        },

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '../statictemplate',
                    src: ['**/*.html', '*.html'],
                    dest: '../build/'
                }]
            }
        },

        watch: {
            css: {
                files: ['../assets/css/*.css'], // <== CHANGE HERE
                tasks: ['cssmin']
            },
            sass: {
                files: ['../assets/sass/*.scss'],   // <== CHANGE HERE
                tasks: ['sass']
            },
            html: {
                files: ['../statictemplate/*.html'], // <== CHANGE HERE
                tasks: ['htmlmin']
            },
            images: {
                files: ['../assets/image/*.{png,jpg,gif,svg,jpeg}'], // <== CHANGE HERE
                tasks: ['imagemin']
            },            
            scripts: {
                files: ['../assets/scripts/*.js'], // <== CHANGE HERE
                tasks: ['uglify']
            },
            gruntfile: {
                files: "gruntfile.js",
                options: {
                    spawn: false,
                    livereload: true,
                    reload: true
                }
            },
            options: {
                livereload: true,
            },
        },

        // Clean task
        clean: {
            css: {
                src: ["css/**/*.css"]
            },
            all: {
                src: ["index.html", "css/**/*.css"]
            }
        }
    });


    require("time-grunt")(grunt);
    // Default task(s).
    grunt.registerTask('default', [
        'clean:all',
        'sass',
        'concat',
        'uglify',
        'cssmin',
        'imagemin',
        'htmlmin',
        'watch'        
    ]);


}