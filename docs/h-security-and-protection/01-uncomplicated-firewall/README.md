# Uncomplicated FireWall

One of the many heralded aspects of Linux is its security. From the desktop to the server, you’ll find every tool you need to keep those machines locked down as tightly as possible. For the longest time, the security of Linux was in the hands of `iptables` (which works with the underlying `netfilter` system).

Although incredibly powerful, `iptables` is complicated - especially for newer users. To truly make the most out of that system, it may take weeks or months to get up to speed. Thankfully, a much simpler front end for `iptables` is ready to help get your system as secure as you need.

That front end is **Uncomplicated Firewall (UFW)**. UFW provides a much more user-friendly framework for managing `netfilter` and a command-line interface for working with the firewall.

::: warning Docker
If you are running Docker, by default Docker directly manipulates `iptables`. Any UFW rules that you specify do not apply to Docker containers.
:::

## Installing UFW

As with many tools and services on linux, it's a walk in the park to install `ufw`:

```bash
sudo apt install ufw
```

By default, UFW’s rulesets are blank so it is not enforcing any firewall rules - even when the daemon is running.

Start and enable UFW’s systemd unit:

```bash
sudo systemctl start ufw
sudo systemctl enable ufw
```

::: tip ufw command
The `ufw` command is not available for a normal user. You will need to prefix it using `sudo` or switch to the super user account using `sudo su`.
:::

## Managing Firewall Rules

### Default Rules

Most systems need a only a small number of ports open for incoming connections, and all remaining ports closed. To start with an easy basis of rules, the `ufw default` command can be used to set the default response for incoming and outgoing connections. To deny all incoming and allow all outgoing connections, run:

```bash
sudo ufw default allow outgoing
sudo ufw default deny incoming
```

When running `ufw status verbose` this will be shown at the top of the status output:

::: codeoutput
```
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), deny (routed)

....
```
:::

::: warning Default Deny
Configuring a default reject or deny rule can lock you out of your system unless explicit allow rules are in place. Ensure that you have configured allow rules for ssh and other critical services as per the section below before applying default deny or reject rules.
:::

### Specific Rules

Rules can be added in two ways: *By denoting the port number or by using the service name.*

The general syntax is:

```bash
sudo ufw allow|deny|reject <service_or_port>/<transport_protocol>
```

Where:

* `allow`: means that a connection can be established if a service is running on the indicated port of course.
* `deny`: means the packet is discarded, dropped to the floor, assigned to oblivion. No reply packet of any kind is sent.
* `reject`: means that for every packet received an ICMP port unreachable packet is sent to the source address. Of course this tells the remote host that your system is up and running and that you are running a firewall.
* `service` is the name of the service such as `http`, `https`, `ssh`, ...
* `port` is a port number
  * ssh: 22
  * http: 80
  * https: 443
  * ...
* `transport_protocol` is the transport protocol `tcp` or `udp`.

So for example to allow an incoming ssh connection on port `22` we have the following options to configure this as a rule:

```bash
sudo ufw allow ssh
sudo ufw allow 22
sudo ufw allow 22/tcp
```

You can always check the status of your `ufw` configuration using

```bash
sudo ufw status verbose
```

## Enabling the Firewall

With your chosen rules in place, your initial run of `ufw status` will probably output `Status: inactive`.

To enable UFW and enforce your firewall rules issue the enable command:

```bash
sudo ufw enable
```

Similarly, to disable UFW’s rules:

```bash
sudo ufw disable
```

This still leaves the UFW service running and enabled on reboots.

## Advanced Rules

Along with allowing or denying based solely on port, UFW also allows you to allow/block by IP addresses, subnets, and a IP address/subnet/port combinations.

To allow connections from a given IP address:

```bash
sudo ufw allow from <IP>
```

To allow connections from a specific subnet:

```bash
sudo ufw allow from <NETWORK>/<NETMASK>
```

To allow a specific IP address/port combination:

```bash
sudo ufw allow from <IP> to any port <PORT> proto <tcp/udp>
```

where the transport protocol is optional. All instances of `allow` can be changed to `deny` as needed.

## Deleting Rules

To remove a rule, add `delete` before the rule implementation.

If you no longer wished to allow HTTP traffic, you could run:

```bash
sudo ufw delete allow 80
```

Deleting also allows the use of service names:

```bash
sudo ufw delete allow http
```

## Logging

You can enable logging with the command:

```bash
sudo ufw logging on
```

Log levels can be set by running

```bash
sudo ufw logging low|medium|high
```

Selecting either `low`, `medium`, or `high` from the list. The default setting is `low`.

The log file is located at `/var/log/ufw.log`.

<!-- ## Docker and UFW

TODO: More info needed here ...

Docker creates its own `iptable` rules. For example if we publish a port on a container to the host port, it will automatically added to `iptables` as being accessible from the outside. -->
