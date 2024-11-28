# How to edit MariaDB inside the Docker container

📅 28/02/2024

`docker ps`
- The output will show the running containers, and you should see your MariaDB container (myDatabase in your case).

`docker exec -it 5b904b43787c bash`
- Use `docker exec` to open a terminal inside the container. Replace 5b904b43787c with your container ID (if different):

`mariadb -u root -p`
- If the mariadb client is installed, this should prompt you for a password.

`Enter password:`
- Password Prompt:

`SHOW DATABASES;`
- Check the available databases

`USE your_database_name;`
- Select your database:

`DROP DATABASE IF EXISTS manufacture_v3_0_test;`
- This will remove the entire database and all its tables.

`CREATE DATABASE myDatabase;`
- Create a new database (if needed)

`DROP TABLE IF EXISTS your_table_name;`
- Drop the table:

`SHOW TABLES;`
- This will display a list of all the tables in the currently selected database.

```
MariaDB [manufacture_v3_0_test]> SHOW TABLES;
+---------------------------------+
| Tables_in_manufacture_v3_0_test |
+---------------------------------+
| code_enum                       |
| code_info                       |
| keyissue_config                 |
| machine                         |
| machine_device                  |
| profile_config                  |
| script_config                   |
| sn_rule                         |
+---------------------------------+
8 rows in set (0.000 sec)
```
`EXIT;`
- Exit the MariaDB Client

`exit`
- Exit the Docker Container



Here’s a summary of what you did and asked regarding MariaDB:

### Actions Taken:
1. **Accessed the MariaDB Docker Container**:
   - Used the `docker exec -it <container_id> bash` command to enter the running MariaDB Docker container.

2. **Entered the MariaDB Client**:
   - Logged into MariaDB using the `mariadb -u root -p` command and provided the root password to access the database server.

3. **Checked Available Databases**:
   - Ran `SHOW DATABASES;` to list all existing databases in the MariaDB server.

4. **Selected a Specific Database**:
   - Used the `USE <database_name>;` command to switch to a specific database (e.g., `manufacture_v3_0_test`).

5. **Listed Tables in the Database**:
   - Used `SHOW TABLES;` to see all the tables in the selected database.

6. **Dropped All Tables**:
   - Executed `DROP TABLE <table_name>;` for each table or used a script/command to drop all tables in the database.

7. **Created a New Database**:
   - Used the `CREATE DATABASE <new_database_name>;` command to create a new database.

### Questions You Asked:
1. How to access the MariaDB client inside a Docker container.
2. How to authenticate and log in as the root user.
3. How to view all databases and tables.
4. How to delete (drop) all tables in a database.
5. How to create a new database.
6. How to interpret prompts and error messages encountered during the process.





# EC2, WSL2, Hypervisor, Bare Metal Server

📅 15/02/2024

1. **EC2 (Elastic Compute Cloud)**: EC2 is a web service provided by Amazon Web Services (AWS) that allows users to rent virtual servers, known as instances, on the cloud. Users can choose from various instance types with different compute, memory, storage, and networking capacities, and they only pay for the resources they use.

2. **WSL2 (Windows Subsystem for Linux 2)**: WSL2 is a compatibility layer provided by Microsoft that allows users to run a Linux kernel directly on Windows 10 or Windows Server 2019. It enables developers to run Linux command-line tools and utilities natively on Windows without the need for a virtual machine.

3. **Hypervisor**: A hypervisor is a software layer that allows multiple operating systems (OS) to run on a single physical hardware platform simultaneously. It virtualizes the hardware resources of the underlying physical server and allocates them to virtual machines (VMs), each running its own OS. Examples of hypervisors include VMware ESXi, Microsoft Hyper-V, and KVM (Kernel-based Virtual Machine).

4. **Bare Metal Server**: A bare metal server, also known as a dedicated server, is a physical server that is solely dedicated to a single tenant or user. Unlike virtual servers, which run on a hypervisor and share physical hardware resources with other VMs, bare metal servers provide direct access to the underlying hardware without any virtualization overhead. They offer high performance, security, and flexibility, making them suitable for applications with specific resource requirements or compliance needs.

A firmware or software system that provides a virtual machine and allows it to operate directly on underlying hardware (instead of via emulation), but within specified constraints. 
Synonym: virtual machine monitor

In the context of computing, "bare metal" refers to the underlying physical hardware of a server without any additional software layers or abstractions, such as an operating system or virtualization software. 

When we say a server is a "bare metal server," it means that it is dedicated entirely to a single user or tenant, and there are no virtualization layers or hypervisors involved. Users have direct access to the server's hardware resources, including CPU, memory, storage, and networking, without any virtualization overhead.

"Bare metal" is used to contrast with virtualized environments, where multiple virtual machines (VMs) run on a single physical server using a hypervisor or virtualization layer to manage and allocate resources.

No, the Linux kernel and the shell are not the same. They are distinct components of a Linux operating system.

1. **Linux Kernel**: The Linux kernel is the core component of the Linux operating system. It is responsible for managing hardware resources such as the CPU, memory, storage devices, and input/output devices. The kernel provides essential services to the rest of the operating system and applications, including process management, memory management, device drivers, and system calls.

2. **Shell**: The shell is a command-line interface (CLI) program that provides users with an interactive way to interact with the operating system. It interprets user commands and executes them by communicating with the kernel. The shell allows users to run programs, manipulate files and directories, configure system settings, and perform various other tasks. Examples of shells in Linux include Bash (Bourne Again Shell), Zsh (Z Shell), and Fish (Friendly Interactive Shell).

In summary, the Linux kernel is the core component that manages hardware resources and provides essential services to the operating system, while the shell is a user interface that allows users to interact with the operating system and execute commands.


