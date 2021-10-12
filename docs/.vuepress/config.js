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
        ]
      },
      {
        title: 'Managing Linux Systems',   // required
        path: '/b-managing-linux-systems/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/b-managing-linux-systems/01-package-managers/',
          '/b-managing-linux-systems/02-users-and-groups/',
        ]
      },
      {
        title: 'The Linux Filesystem',   // required
        path: '/c-the-filesystem/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/c-the-filesystem/01-the-filesystem/',
          '/c-the-filesystem/02-ownership-and-permissions/',
          // '/c-the-filesystem/03-locating-things/',
        ]
      },
      // {
      //   title: 'Making Linux Your Own',   // required
      //   path: '/d-making-linux-your-own/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     '/d-making-linux-your-own/01-making-linux-your-own/',
      //   ]
      // },
      // {
      //   title: 'Command Line Hacking',   // required
      //   path: '/e-command-line-hacking/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     // TODO: '/e-command-line-hacking/01-chaining-and-redirection/',
      //     // '/11-text-manipulation/',
      //   ]
      // },
      // {
      //   title: 'Servers and Services',   // required
      //   path: '/f-services/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     // TODO: '/f-services/01-remote-access/',
      //     // WebServer, NAS, Samba, ...
      //     // Docker for Linux
      //   ]
      // },
      // {
      //   title: 'Scripting',   // required
      //   path: '/g-scripting/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     // TODO: '/g-scripting/01-basic-shell-scripting/',
      //     // TODO: '/g-scripting/02-cron-jobs/',
      //     // TODO: '/g-scripting/03-systemd/',
      //   ]
      // },
      // {
      //   title: 'Security and Protection',   // required
      //   path: '/h-security-and-protection/',      // optional, which should be a absolute path.
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //     // Firewall
      //     // Backups (include creating tar archives and such)
      //     // OpenVPN
      //     // ...
      //   ]
      // },
      // Not sure about how to call this chapter. Or maybe should be split up.
      {
        title: 'Guides',
        path: '/x-guides/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/x-guides/01-linux-on-the-rpi/',
          '/x-guides/02-linux-as-a-vm/',
          '/x-guides/03-wsl/',
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