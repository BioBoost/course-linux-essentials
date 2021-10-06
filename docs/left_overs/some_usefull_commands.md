
Usefull commands to learn:

Shows some info about hardware
```bash
inxi -Fxxxz
```

Network mapping using `nmap`

Scan network and detect all hosts with their IP address:

```bash
# Requires sudo
sudo nmap -sn 10.0.0.0/24
```

Basic port scan

```bash
nmap 10.0.0.130
```

More aggressive port scan (also all ports)

```bash
nmap -p0- -v -A -T4 10.0.0.3
```

Use `nc` for setting up connection using UDP or TCP.



Some other useful commands

ssh-import-id-gh
dhcpdump