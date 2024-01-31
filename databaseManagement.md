# MHA (Master High Availability), MMM (Multi-Master Replication Manager), and Galera Cluster 

📅 31/01/2024

1. **MHA (Master High Availability):**
   
   - **Concept:**
     MHA is a set of Perl tools that helps in managing MySQL replication for high availability. It's designed to automate the process of switching over to a slave MySQL server in the event of a failure in the master server. The goal is to minimize downtime and ensure high availability of the MySQL database.

   - **How it works:**
     - MHA monitors the MySQL replication topology and detects when the master server fails.
     - It promotes one of the slave servers to be the new master.
     - It updates the other slaves to start replicating from the new master.

   - **Key Components:**
     - **manager:** The main component that monitors the MySQL replication and performs failover.
     - **masterha_check_repl:** A tool to check replication health.
     - **masterha_check_ssh:** A tool to check SSH connectivity.

2. **MMM (Multi-Master Replication Manager):**

   - **Concept:**
     MMM is a set of scripts that helps manage MySQL multi-master replication setups. It aims to provide high availability and load balancing by allowing multiple MySQL servers to act as both master and slave simultaneously.

   - **How it works:**
     - MMM monitors the health of MySQL servers.
     - In case of a failure, it reconfigures the remaining servers to continue serving requests.
     - It can also balance read and write operations across multiple servers.

   - **Key Components:**
     - **mmm_mon:** Monitors the MySQL servers and performs failover if needed.
     - **mmm_control:** Controls the MMM setup and performs various management tasks.

3. **Galera Cluster:**

   - **Concept:**
     Galera Cluster is a synchronous multi-master cluster for MySQL, MariaDB, and Percona XtraDB databases. It enables synchronous replication, ensuring that data is consistent across all nodes in the cluster.

   - **How it works:**
     - Galera uses a technique known as multi-master synchronous replication, where each node in the cluster can accept both read and write queries.
     - Changes made on one node are replicated to all other nodes in the cluster in a synchronous manner.
     - In case of a node failure, the cluster continues to operate with the available nodes.

   - **Key Components:**
     - **Galera Replication:** Synchronous replication technology.
     - **Galera Arbitrator:** Helps in maintaining quorum in a two-node cluster.
     - **Galera Cluster Manager (galerad):** Manages the overall state of the cluster.

Each of these solutions addresses high availability in MySQL environments, but they have different architectures and approaches. MHA and MMM focus on failover scenarios, while Galera Cluster offers synchronous multi-master replication for distributed databases. The choice between them depends on specific requirements, such as the level of consistency, ease of management, and scalability needed for the database system.
