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
        path: '/about-this-course/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
      },
      {
        title: 'Introductory',   // required
        path: '/a-introductory/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/a-introductory/01-introduction-to-linux/',
          '/a-introductory/02-start-using-linux/',
          '/a-introductory/03-the-command-line/',
          '/a-introductory/04-getting-help/',
          '/a-introductory/05-package-managers/',
        ]
      },
      {
        title: 'The Linux Filesystem',   // required
        path: '/b-the-filesystem/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/b-the-filesystem/01-the-filesystem/',
          '/b-the-filesystem/02-ownership-and-permissions/',
          '/b-the-filesystem/03-locating-things/',
        ]
      },
      {
        title: 'Making Linux Your Own',   // required
        path: '/c-making-linux-your-own/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/c-making-linux-your-own/01-making-linux-your-own/',
        ]
      },
      {
        title: 'Command Line Hacking',   // required
        path: '/d-command-line/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/d-command-line/01-chaining-and-redirection/',
          // '/11-text-manipulation/',
        ]
      },
      {
        title: 'Servers and Services',   // required
        path: '/e-services/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/e-services/01-remote-access/',
        ]
      },
      {
        title: 'Scripting Things',   // required
        path: '/g-scripting/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/g-scripting/01-basic-shell-scripting/',
          '/g-scripting/02-cron-jobs/',
          '/g-scripting/03-systemd/',
        ]
      },
      {
        title: 'Security',   // required
        path: '/h-security/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
        ]
      },
      // Not sure about how to call this chapter. Or maybe should be split up.
      {
        title: 'Guides',
        path: '/x-guides/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/x-guides/01-linux-on-the-rpi/',
          '/x-guides/02-linux-as-a-vm/',
        ]
      },
      {
        title: 'References',
        path: '/z-references/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/z-references/01-crazy-command-list/',
        ]
      },
      {
        title: 'Online Tools',
        // path: '/z-references/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['http://bashrcgenerator.com', '.bashrc PS1 generator'],
          ['https://explainshell.com', 'explainshell.com'],
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
      selector: 'img',      // default: '.content img'
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
    ['container', {
      type: 'output',
      defaultTitle: 'Output',
    }],
    ['container', {
      type: 'definition',
      defaultTitle: 'Definition',
    }],
    ['container', {
      type: 'kata',
      defaultTitle: 'Code Kata',
    }],
    ['container', {
      type: 'question',
      defaultTitle: 'Question',
    }],
    ['container', {
      type: 'insight',
      defaultTitle: 'Key Insight',
    }],
  ],
}