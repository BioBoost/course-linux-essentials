<!-- Sille is normally teaching this in semester 5 -->

## Setting Up a WordPress

WordPress is a free and open-source content management system based on PHP & MySQL. It includes a plugin architecture and a template system. It is most associated with blogging but supports other types of web content including more traditional mailing lists and forums, media galleries, and online stores.

To setup a WordPress, two things are required:

* A database to store all the information (users, pages, configuration, ...)
* The WordPress application itself

Searching on DockerHub for `WordPress` and `MariaDB` (MySQL drop-in alternative) will result in two useful links:

* [https://hub.docker.com/_/wordpress](https://hub.docker.com/_/wordpress)
* [https://hub.docker.com/_/mariadb](https://hub.docker.com/_/mariadb)

Both docker images are official, well-maintained, used a lot and available for the ARM64 architecture.

### Creating a user-defined network

In terms of Docker, a bridge network uses a software bridge which allows containers connected to the same bridge network to communicate, while providing isolation from containers which are not connected to that bridge network. The Docker bridge driver automatically installs rules in the host machine so that containers on different bridge networks cannot communicate directly with each other.

Advantages compared to the default bridge:

* User-defined bridges provide better isolation and interoperability between containerized applications.
* User-defined bridges provide automatic DNS resolution between containers.
* Containers can be attached and detached from user-defined networks on the fly.
* Each user-defined network creates a configurable bridge.
* Only linked containers on the default bridge network share environment variables.

To create a user-defined network execute the command below. Make sure to pick a unique name - `wordpress-network`in the example below - for the network that identifies the actual setup.

```bash
docker network create --driver bridge wordpress-network
```

Checkout the results using `docker network ls`.

::: output
<pre>
NETWORK ID     NAME                            DRIVER    SCOPE
9042024f56b5   bridge                          bridge    local
0f06e3c868db   host                            host      local
20de5f12cf5a   none                            null      local
d37feac4e6bf   wordpress-network               bridge    local
</pre>

### Starting a MariaDB container

To start the database container, the following command can be executed:

```bash
docker run --detach --network <network> --name <container_name> --env MARIADB_USER=<username> --env MARIADB_PASSWORD=<secret_password> --env MARIADB_RANDOM_ROOT_PASSWORD=yes --env MARIADB_DATABASE=<db_name> mariadb:latest
```

This instructs docker to create a new container and give it a more recognizable name (instead of the auto-generated ones). It also configures the database password by supplying an environment variable using the `--env` option. The `--detach` option instructs docker to run the container in a detached state - in the background in other words. Output from the container is not shown in the current terminal but can only be accessed by using the `docker logs <container_id_or_name>` command.

::: warning Detached State
Do note that the detached state is especially useful when running daemonized processes inside the container. Running the `hello-world` image in a detached state will not have a lot of meaning. The output is not shown and the container is automatically exited after finishing the process. You can try it by executing `docker run --detach hello-world`. The only output that is shown in the container id. You can however check out the output by invoking the `docker logs <container_id_or_name>` command.
:::

So let's fill in the necessary information and run the container:

```bash
docker run --detach --network wordpress-network --name wordpress-db --env MARIADB_USER=wordpress --env MARIADB_PASSWORD=ewrhbiuqeygqw --env MARIADB_RANDOM_ROOT_PASSWORD=yes --env MARIADB_DATABASE=wordpress mariadb:latest
```

It is now possible to execute other commands in the terminal. The container will keep running in the background until it is stopped manually.

Executing a `docker ps` should show the container as up and running:

```bash
CONTAINER ID   IMAGE            COMMAND                  CREATED              STATUS              PORTS      NAMES
e47022417bd1   mariadb:latest   "docker-entrypoint.s…"   About a minute ago   Up About a minute   3306/tcp   wordpress-db
```

When inspecting the `wordpress-network` using `docker network inspect wordpress-network`, you should see that the `wordpress-db` container is connected:

```bash
[
  {
    "Name": "wordpress-network",
    ...
    "Containers": {
      "0a74b3caf9d7492673188663c5ce25c5a73a64be05a7a4ba7653fb87ce61137d": {
          "Name": "wordpress-db",
          "EndpointID": "bd3a4f29bc6c5835298b957986239fbe6ff847e63183b2f32739042cb0554e44",
          "MacAddress": "02:42:ac:12:00:02",
          "IPv4Address": "172.18.0.2/16",
          "IPv6Address": ""
      }
    }
    ...
  }
]
```

### Starting WordPress

Once the database is up and running, the WordPress application container can be started. For this we'll need to supply the name of the container running the database, `wordpress-db` in our case and the root password. Of course we will also need to attach the container to the `wordpress-network` network.

```bash
docker run --name my-wordpress --env WORDPRESS_DB_NAME=wordpress --env WORDPRESS_DB_HOST=wordpress-db --env WORDPRESS_DB_USER=wordpress --env WORDPRESS_DB_PASSWORD=ewrhbiuqeygqw --publish 8080:80 --detach --net=wordpress-network wordpress:latest
```

We also need to **publish the port** on which the WordPress is listening to the outside, so we can connect to it from outside the docker environment. For this we map the port of the internal process `80` to a port on our Raspberry Pi host, namely `8080`. All traffic to port `8080` of the Docker host will be forwarded to port `80` in the container.

::: warning latest
While the `latest` tag is perfectly fine for a nice example like this, in a production environment we would never use the `latest` tag as every time a container is created, the latest version is pulled and used. In production we always specify a version tag and only upgrade after testing a new version.
:::

### Surfing to the WordPress site

When you traverse to the WordPress website at port `8080` on the IP address of your Raspberry Pi, you should get the installer screen.

![WordPress Setup](./img/wordpress_installer.png)

Finish the setup wizard and enjoy your very own WordPress website.

## Interacting with Running Containers

The containers we created are running in the background and not interactive. We can check output generated by the processes by executing the `docker logs <container_id_or_name>` command.

For example for the `my-wordpress` container this would be `docker logs my-wordpress`. This will output the request already made to the webserver:

```bash
10.0.0.5 - - [10/Mar/2019:16:55:34 +0000] "GET /wp-content/themes/twentynineteen/print.css?ver=1.3 HTTP/1.1" 200 1566 "http://10.0.0.182:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
10.0.0.5 - - [10/Mar/2019:16:55:34 +0000] "GET /wp-content/themes/twentynineteen/style.css?ver=1.3 HTTP/1.1" 200 30317 "http://10.0.0.182:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
10.0.0.5 - - [10/Mar/2019:16:55:34 +0000] "GET /favicon.ico HTTP/1.1" 200 228 "http://10.0.0.182:8080/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
127.0.0.1 - - [10/Mar/2019:16:55:42 +0000] "OPTIONS * HTTP/1.0" 200 126 "-" "Apache/2.4.25 (Debian) PHP/7.2.15 (internal dummy connection)"
10.0.0.5 - - [10/Mar/2019:16:56:32 +0000] "POST /wp-admin/admin-ajax.php HTTP/1.1" 200 512 "http://10.0.0.182:8080/wp-admin/index.php" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36"
```

But what if you needed to check some other logs or something else in the container? In other words, how do we connect to a shell inside the container?

Basically we request docker to spawn a process inside an existing container. For example a `bash` shell:

```bash
docker exec -it my-wordpress bash
```

::: output
<pre>
root@6c920d212d16:/var/www/html#
</pre>
:::

The `exec` option allows us to run commands against already running containers. `-t` allocates a virtual terminal session within the container, so you can type stuff from your keyboard into the container process. This is commonly used with the option `-i`, which keeps STDIN open even if running in detached mode, because standard only STDOUT and STDERR are kept open.

### Running an Interactive Container

Some containers don't spawn daemons but spawn a shell by default. These can be used as a interactive system to work with, or as a base for new custom images. A popular base image is Alpine Linux.

Alpine Linux is a Linux distribution built around *musl libc* and *BusyBox*. The image is only 5 MB in size and has access to a package repository that is much more complete than other BusyBox based images. This makes Alpine Linux a great image base for utilities and even production applications. On top of that it is available as an ARM image. Because of this, many docker images created for the Raspberry Pi are based on the Alpine image.

:: tip musl libc
musl is a C standard library intended for operating systems based on the Linux kernel, released under the MIT License. musl is lightweight, fast, simple, free, and strives to be correct in the sense of standards-conformance and safety.
:::

Let us spin up a basic alpine image:

```bash
docker run -it --rm alpine:latest
```

::: output
<pre>
Unable to find image 'alpine:latest' locally
latest: Pulling from library/alpine
59bf1c3509f3: Pull complete 
Digest: sha256:21a3deaa0d32a8057914f36584b5288d2e5ecc984380bc0118285c70fa8c9300
Status: Downloaded newer image for alpine:latest
/ # 
</pre>
:::

This will start a container based on the latest alpine image. You will be presented with a shell where you can do your thing. Do take note that changes made in the container are not persisted.

Exiting the shell, will automatically stop the container (because its not running in detached mode) and remove the container (this is because of the `--rm` option).
