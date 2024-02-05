# Issuing a certificate

📅 05/02/2024

In a PKE, one encrypts a message using the public key and decrypts using the private key. In a KEM, one uses the public key to create an “encapsulation” — giving a randomly chosen shared key — and one decrypts this “encapsulation” with the private key.

Kyber is a key-encapsulation mechanism (KEM) that was recently selected by NIST in its PQC standardization process; it is also the only scheme to be selected in the context of public-key encryption (PKE) and key establishment.

In the context of data encryption, PKE (Public Key Encryption) and KEM (Key Encapsulation Mechanism) are cryptographic concepts related to public-key cryptography.


1. **Public Key Encryption (PKE):**
   - **Overview:** Public Key Encryption is a type of asymmetric encryption where a pair of keys is used: a public key for encryption and a private key for decryption.
   - **How it works:** The public key is shared openly, allowing anyone to encrypt messages or data that only the owner of the corresponding private key can decrypt.
   - **Use cases:** PKE is commonly used for secure communication, digital signatures, and key exchange in various cryptographic protocols.

2. **Key Encapsulation Mechanism (KEM):**
   - **Overview:** Key Encapsulation Mechanism is a technique used in public-key cryptography to derive a shared secret key between two parties. It is often used in hybrid encryption schemes.
   - **How it works:** Instead of using public-key encryption directly to encrypt the data, KEM is employed to encapsulate a symmetric key. This symmetric key is then used for encrypting the actual data, providing a more efficient solution for bulk encryption.
   - **Use cases:** KEM is often used in combination with symmetric-key cryptography for secure and efficient data encryption.

**Hybrid Encryption:**
   - In practice, many systems use a hybrid approach that combines the strengths of both symmetric and asymmetric encryption. Here's a simplified process:
     1. The sender generates a random symmetric key for each message.
     2. The sender encrypts the message with the symmetric key (symmetric-key encryption).
     3. The sender encrypts the symmetric key with the recipient's public key (asymmetric-key encryption).
     4. The recipient decrypts the symmetric key with their private key.
     5. The recipient uses the decrypted symmetric key to decrypt the message.

This hybrid approach combines the efficiency of symmetric-key encryption for bulk data with the security benefits of asymmetric-key encryption for secure key exchange.


Dilithium, HAETAE, Kyber, and SMOUG are cryptographic algorithms designed for specific purposes within the field of post-quantum cryptography. Post-quantum cryptography is an area of research that focuses on developing cryptographic algorithms that would remain secure even in the presence of powerful quantum computers. Here's a brief overview of each:

1. **Dilithium:**
   - **Type:** Digital Signature Scheme.
   - **Description:** Dilithium is a lattice-based digital signature scheme. Lattice-based cryptography relies on the hardness of certain problems associated with lattices, and it is considered a promising candidate for post-quantum cryptography.

2. **HAETAE:**
   - **Type:** Digital Signature Scheme.
   - **Description:** HAETAE is another lattice-based digital signature scheme. Lattice-based cryptography is known for its resistance against attacks from both classical and quantum computers.

3. **Kyber:**
   - **Type:** Key Encapsulation Mechanism (KEM) and Digital Signature Scheme.
   - **Description:** Kyber is a family of cryptographic algorithms that includes both a key encapsulation mechanism (KEM) and a digital signature scheme. It is based on the Learning with Errors (LWE) problem, a common problem in lattice-based cryptography.

4. **SMOUG:**
   - **Type:** Digital Signature Scheme.
   - **Description:** SMOUG is a digital signature scheme that is part of the NIST Post-Quantum Cryptography Standardization project. It is designed to be secure in a post-quantum computing environment.

These algorithms are part of ongoing research and standardization efforts to replace current cryptographic algorithms (such as RSA and ECC) that may be vulnerable to attacks by quantum computers. The cryptographic community is actively exploring various approaches, and the NIST project plays a key role in evaluating and standardizing post-quantum cryptographic algorithms.


RSA and ECC (Elliptic Curve Cryptography) are considered vulnerable to attacks by quantum computers because these algorithms rely on mathematical problems (factoring and discrete logarithms, respectively) that can be efficiently solved by quantum algorithms, such as Shor's algorithm.

As for the post-quantum cryptographic algorithms like HAETAE, Dilithium, Kyber, and SMOUG, they are specifically designed to resist attacks from both classical and quantum computers. These algorithms are based on different mathematical problems, often related to lattice-based cryptography, code-based cryptography, hash-based cryptography, and other approaches that are believed to be secure against quantum algorithms.

AES (Advanced Encryption Standard) and ARIA (Advanced Encryption Standard Implementation) are symmetric-key encryption algorithms, meaning they use the same key for both encryption and decryption. While symmetric-key algorithms are generally considered secure against quantum attacks, they are more vulnerable to key exposure, and their security relies on the protection of the encryption keys.

In the context of post-quantum cryptography, the focus is primarily on public-key algorithms (asymmetric cryptography) since symmetric-key algorithms, like AES and ARIA, are already considered secure against quantum threats. It's important to note that the evaluation of cryptographic algorithms involves considering factors such as key size, algorithmic design, and resistance to various types of attacks, both classical and quantum. The field is dynamic, and ongoing research continues to shape the landscape of cryptographic standards.