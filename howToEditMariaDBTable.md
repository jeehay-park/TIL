# How to Edit MariaDB Table at EC2

📅 5/11/2024

1. **Switched to root user:**  
   You changed to the root user on your EC2 instance for full access.

   ```
    [ec2-user@ip-172-31-9-138 ~]$ sudo su -
    Last login: Mon Nov  4 01:18:54 UTC 2024 on pts/1
    [root@ip-172-31-9-138 ~]# docker ps
   ```

2. **Accessed MariaDB Docker container:**  
   You used `docker exec -it myDatabase sh` to open a shell session inside your running MariaDB container named `myDatabase`.

3. **Logged into MariaDB within the container:**  
   Inside the container, you connected to MariaDB with:
   ```bash
   mariadb -u root -p
   ```
   After entering the root password, you accessed the MariaDB monitor.

4. **Switched to the database:**  
   You used:
   ```sql
   use manufacture_v3_0_test;
   ```
   This selected the `manufacture_v3_0_test` database.

5. **Listed tables in the database:**  
   You ran:
   ```sql
   SHOW TABLES;
   ```
   This displayed the tables available in the `manufacture_v3_0_test` database.

6. **Exited MariaDB monitor:**  
   By typing `exit`, you exited MariaDB and returned to the container’s shell.

7. **Exited the container shell:**  
   You returned to your main terminal by running `exit` again or pressing **Ctrl + D**.

This sequence allowed you to check and manage database tables inside your Docker-based MariaDB instance on AWS EC2. Let me know if you need any further guidance!


```
[root@ip-172-31-9-138 ~]# docker exec -it myDatabase sh
# which mariadb
/usr/bin/mariadb

# mariadb -u root -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 678
Server version: 11.5.2-MariaDB-ubu2404 mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> use manufacture_v3_0_test
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed


MariaDB [manufacture_v3_0_test]> SHOW TABLES;
+---------------------------------+
| Tables_in_manufacture_v3_0_test |
+---------------------------------+
| keyissue_config                 |
| machine                         |
| machine_device                  |
| profile_config                  |
| script_config                   |
| sn_rule                         |
+---------------------------------+
6 rows in set (0.000 sec)

MariaDB [manufacture_v3_0_test]> DROP TABLE keyissue_config;
Query OK, 0 rows affected (0.026 sec)

MariaDB [manufacture_v3_0_test]> DROP TABLE profile_config;
Query OK, 0 rows affected (0.009 sec)

MariaDB [manufacture_v3_0_test]> DROP TABLE script_config;
Query OK, 0 rows affected (0.011 sec)

MariaDB [manufacture_v3_0_test]> SHOW TABLES;
+---------------------------------+
| Tables_in_manufacture_v3_0_test |
+---------------------------------+
| machine                         |
| machine_device                  |
| sn_rule                         |
+---------------------------------+
3 rows in set (0.000 sec)

MariaDB [manufacture_v3_0_test]> exit
Bye

# exit
[root@ip-172-31-9-138 ~]

// after updating jar 
java -jar /var/www/backend/issuance-machine-server-0.1.0.jar
java -jar ./issuance-machine-server-0.1.0.jar

```
