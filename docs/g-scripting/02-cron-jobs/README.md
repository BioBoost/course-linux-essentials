# Cron Jobs

Cron is a very useful tool for scheduling periodic tasks on any Unix-like operating system. Often these scheduled tasks are named **Cron Jobs**.

Some useful use-cases are:

* periodic system backups
* cleaning up temporary files
* removing or minimizing log files
* monitoring system resources such as CPU usage, disk space, ....
* running maintenance tasks
* ....

Basically each user can create cron jobs on a system with tasks specific for that user. The "system tasks" are scheduled separately by the root user.

## Crontab

To manage cron jobs, one can use the `crontab` (cron table) utility. `crontab`  is  the  program  used to install, deinstall or list the tables used to drive the `cron` daemon. Each user can have their own cron table.

The files of `crontab` can be found in `/var/spool/cron/crontabs`. However, they are not intended to be edited directly but rather managed via the crontab utility.

To **list** your current scheduled tasks, one can use the `-l` option:

```bash
crontab -l
```

::: output
<pre>
TODO - Add example here of crontab output
</pre>
:::

To edit the current user's cron jobs, use the `-e` option:

```bash
crontab -e
```