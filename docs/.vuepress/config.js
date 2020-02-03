module.exports = {
  title: 'Linux Essentials',
  description: 'Linux Essentials Course for VIVES University of Applied Sciences (Bachelor Degree)',
  themeConfig: {
    nav: [
      {text: 'Toledo', link: 'https://toledo.kuleuven.be/portal'},
      {text: 'DevBit Courses', link: 'https://www.devbit.courses/'},
      {text: 'Report Issue', link: 'https://www.devbit.courses/'},
    ],
    sidebar: {
      // fallback
      '/': [
        '',
        '/01-introduction-to-linux/',
        '/02-start-using-linux/',
        // '/03_the_command_line/',
        // '/04_getting_help/',
        // '/05_the_filesystem/',
        // '/06_ownership_and_permissions/',
        // '/07_package_managers/',
        // '/08_remote_access/',
        // '/10_linux_on_the_raspberry_pi/',
        // '/11_basic_shell_scripting/',
      ]
    },
    sidebarDepth: 1,
    repo: 'BioBoost/course_programming_from_base_to_ace',
    docsDir: 'docs',
    docsBranch: 'master',
    lastUpdated: 'Last Updated', // string | boolean
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
    ['container', {
      type: 'codeoutput',
      defaultTitle: 'Output',
    }]
  ],
}