📅 27/06/2023

# SSH
Secure Socket Shell is a network protocol that allows us to access and communicate with remote computers over an unsecured network.

### How does it work?
You put your letter in a box and secure it with a lock (only you have the key to the lock) and then send it to your friend.

Your friend doesn't have your key. So he adds another lock to the box and returns it to you.

You use your key to open the lock on your box and send it back to your friend with her lock locked in.

Finally, he unlocks the box using her key and reads the letter without anyone being able to intercept it.

The SSH protocol
uses a public-key cryptography approach and symmetric solid encryption and hashing techniques to transmit messages between client and server


📅 22/07/2024

**SSH (Secure Shell)** and **HTTPS (Hypertext Transfer Protocol Secure)** are both protocols used to secure communications, but they serve different purposes and operate in different contexts. Here's a comparison:

### SSH (Secure Shell)

- **Purpose**: SSH is primarily used for securely accessing and managing remote systems over a network. It provides a secure channel for logging into and executing commands on a remote server.
- **Common Uses**: 
  - Remote command-line access to servers.
  - Secure file transfers using tools like `scp` (secure copy) and `sftp` (secure file transfer protocol).
  - Tunneling and port forwarding.
- **Encryption**: SSH encrypts the entire session to ensure that any data transferred between the client and server is protected from eavesdropping.
- **Authentication**: SSH typically uses a combination of username/password or public/private key pairs for authentication.
- **Port**: By default, SSH operates on port 22.

### HTTPS (Hypertext Transfer Protocol Secure)

- **Purpose**: HTTPS is used for securely transmitting data over the web. It ensures that data sent between a web browser and a web server is encrypted and protected from tampering or interception.
- **Common Uses**: 
  - Secure web browsing.
  - Protection of sensitive data, such as login credentials, payment information, and personal data, during online transactions.
- **Encryption**: HTTPS uses SSL/TLS (Secure Sockets Layer / Transport Layer Security) to encrypt the communication between the client (usually a web browser) and the server.
- **Authentication**: HTTPS uses digital certificates issued by Certificate Authorities (CAs) to verify the authenticity of websites and encrypt the communication.
- **Port**: By default, HTTPS operates on port 443.

### Key Differences

1. **Functionality**:
   - **SSH** is mainly used for secure remote access and administration.
   - **HTTPS** is used for secure communication between web browsers and web servers.

2. **Protocols**:
   - **SSH** is a standalone protocol designed for secure shell access and file transfer.
   - **HTTPS** is an extension of HTTP, utilizing SSL/TLS to secure data transmitted over the web.

3. **Usage Context**:
   - **SSH** is used in scenarios like remote server management, secure shell access, and file transfers.
   - **HTTPS** is used in scenarios involving secure web browsing, online transactions, and protecting user data on websites.

In summary, while both SSH and HTTPS provide secure communication, they are designed for different purposes and operate in different contexts. SSH is used for secure remote access and file transfers, while HTTPS is used for securing web-based communications.