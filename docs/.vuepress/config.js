const { containerPlugin } = require('@vuepress/plugin-container')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'Linux Essentials',
  description: 'Linux Essentials Course for VIVES University of Applied Sciences (Bachelor Degree)',

  theme: defaultTheme({
    logo: '/images/linux.png',
    navbar: [
      { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
      { text: 'Report Issue', link: 'https://github.com/BioBoost/course_linux_essentials/issues' },
      { text: 'Organization', link: 'https://github.com/vives-linux-essentials-2022-2023' }
    ],
    sidebar: [
      {
        text: 'About this Course',
        link: '/about-this-course/README.md',
      },
      {
        text: 'Introduction to Programming',
        children: [
          '/a-introductory/01-introduction-to-linux/README.md',
          '/a-introductory/02-start-using-linux/README.md',
          '/a-introductory/03-the-command-line/README.md',
          '/a-introductory/04-getting-help/README.md',
        ]
      },
      {
        text: 'Managing Linux Systems',
        children: [
          '/b-managing-linux-systems/01-package-managers/README.md',
          '/b-managing-linux-systems/02-users-and-groups/README.md',
        ]
      },
      {
        text: 'The Linux Filesystem',
        children: [
          '/c-the-filesystem/01-the-filesystem/README.md',
          '/c-the-filesystem/02-ownership-and-permissions/README.md',
          '/c-the-filesystem/03-locating-things/README.md',
        ]
      },
      {
        text: 'Making Linux Your Own',
        children: [
          '/d-making-linux-your-own/01-making-linux-your-own/README.md',
        ]
      },
      {
        text: 'Command Line Hacking',
        children: [
          '/e-command-line-hacking/01-chaining-and-redirection/README.md',
          ///11-text-manipulation
        ]
      },
      {
        text: 'Servers and Services',
        children: [
          '/f-services/01-remote-access/README.md',
          // '/f-services/02-docker-for-linux/README.md',
          //  // WebServer, NAS, Samba, ...
        ]
      },
      {
        text: 'Scripting',
        children: [
          '/g-scripting/01-basic-shell-scripting/README.md',
          '/g-scripting/02-cron-jobs/README.md',
          // /g-scripting/03-systemd
          // backups
        ]
      },
      {
        text: 'Security and Protection',
        children: [
          '/h-security-and-protection/01-uncomplicated-firewall/README.md',
          // Firewall
          // Backups (include creating tar archives and such)
          // OpenVPN
          // ...
        ]
      },
      {
        text: 'Guides',
        children: [
          '/x-guides/01-linux-on-the-rpi/README.md',
          '/x-guides/02-linux-as-a-vm/README.md',
          '/x-guides/03-wsl/README.md',
        ]
      },
      {
        text: 'References',
        children: [
          '/z-references/01-crazy-command-list/README.md',
        ]
      },
      {
        text: 'Online Tools',
        children: [
          { text: '.bashrc PS1 generator', link: 'https://bashrcgenerator.com' },
          { text: 'explainshell.com', link: 'https://explainshell.com' },
          { text: 'crontab guru', link: 'https://crontab.guru' },
        ]
      },
    ],
    sidebarDepth: 1,
    repo: 'BioBoost/course_linux_essentials',
    docsDir: 'docs',
    docsBranch: 'master'
  }),
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}
