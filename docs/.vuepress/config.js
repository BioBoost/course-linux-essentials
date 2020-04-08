module.exports = {
  title: 'Linux Essentials',
  description: 'Linux Essentials Course for VIVES University of Applied Sciences (Bachelor Degree)',
  themeConfig: {
    nav: [
      {text: 'Toledo', link: 'https://toledo.kuleuven.be/portal'},
      {text: 'DevBit Courses', link: 'https://www.devbit.courses/'},
      {text: 'Report Issue', link: 'https://github.com/BioBoost/course_linux_essentials/issues'},
      {text: 'Challenges', link: 'https://github.com/BioBoost/challenges-linux-essential'}
    ],
    sidebar: [
      {
        title: 'About this Course',   // required
        // path: '/foo/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ''
        ]
      },
      {
        title: 'Getting Started with Linux',   // required
        // path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/01-introduction-to-linux/',
          '/02-start-using-linux/',
          '/03-the-command-line/',
          '/04-getting-help/',
        ]
      },
      {
        title: 'The Linux Filesystem',   // required
        // path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/05-the-filesystem/',
          '/06-ownership-and-permissions/',
          // '/07-locating-things/',
        ]
      },
      // {
      //   title: 'Command Line Hacking',   // required
      //   // path: '/foo/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     // '/08-making-linux-your-own/'
      //     // '/09-making-linux-your-own/'
      //     // '/10-command-chaining-and-redirection/',
      //     // '/11-text-manipulation/',
      //   ]
      // },
      // {
      //   title: 'Making Linux Your Own',   // required
      //   // path: '/foo/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     '/07_package_managers/',
      //     '/06-making-linux-your-own/',
      //   ]
      // },
      // {
      //   title: 'Automating Things',   // required
      //   // path: '/foo/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     '/11-basic-shell-scripting/',
      //     // Cron Jobs?
      //     // SystemD
      //   ]
      // },
      {
        title: 'Addenda',   // required
        // path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/addendum-01-linux-on-the-rpi/',
          '/addendum-10-crazy-command-list/',
        ]
      },
    ],
    sidebarDepth: 1,
    repo: 'BioBoost/course_linux_essentials.git',
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