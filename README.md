# Linux Essentials

[![Netlify Status](https://api.netlify.com/api/v1/badges/98253275-d374-47c3-ac28-833970eb61fc/deploy-status)](https://app.netlify.com/sites/linux-essentials/deploys)

Welcome to the draft version of this Linux Essentials Course for VIVES University of Applied Sciences in Bruges.

Comments and additions are more than welcome.

## Development

The static site is generated from markdown using VuePress.

Setup local dev server

```shell
yarn run docs:dev
```

## Students

You can add/pull changes from this repo using the following commands:

```bash
git remote add teacher git@github.com:BioBoost/course-linux-essentials.git
git pull teacher master
```

Make sure to commit your local changes before doing this.

## Teacher

Teacher edition of this course can be found at [https://github.com/BioBoost/course-linux-essentials-teacher](https://github.com/BioBoost/course-linux-essentials-teacher).

All solutions and demo's are available in `teacher.md` files inside `teacher` branches.

**Important:**

* Never merge `teacher` into `dev` or `master`.
* Never push `teacher` to `origin`

To make changes:

```bash
git remote add teacher git@github.com:BioBoost/course-linux-essentials-teacher.git
git checkout teacher
# ...
git push teacher teacher
```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
