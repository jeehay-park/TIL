# Digital signatures

📅 23/01/2024

In the context of encryption, a signature refers to a piece of data that is generated from the content of a message and a secret key. The purpose of a signature is to provide a way to verify the authenticity and integrity of the message. Digital signatures are commonly used in cryptographic systems to ensure that a message has not been altered and that it was indeed created by the claimed sender.

Here's a basic overview of how digital signatures work:

1. **Message Digest (Hash):** A hash function is applied to the content of the message, creating a fixed-size string of characters, known as the message digest or hash value.

2. **Signing the Hash:** The sender's private key is then used to encrypt the hash value, creating the digital signature.

3. **Verification:** The recipient uses the sender's public key to decrypt the digital signature and obtain the original hash value. The recipient then independently calculates the hash of the received message. If the calculated hash matches the decrypted hash from the signature, the message is considered authentic and unaltered.

Digital signatures provide a way to verify the origin and integrity of a message without revealing the private key of the sender. They are a crucial component of many cryptographic protocols, including secure communication over the internet (such as in HTTPS) and digital documents (like digitally signed PDFs).


Yes, that's correct. In a typical scenario involving digital signatures, the sender usually sends both the original message and the digital signature to the receiver.

Here's a step-by-step explanation:

1. **Generate Hash:** The sender applies a hash function to the content of the message, creating a fixed-size hash value.

2. **Sign Hash:** The sender uses their private key to encrypt the hash value, creating the digital signature.

3. **Send Message and Signature:** The sender sends both the original message and the digital signature to the receiver.

4. **Verify Signature:** The receiver uses the sender's public key to decrypt the digital signature, obtaining the original hash value. The receiver then independently calculates the hash of the received message. If the calculated hash matches the decrypted hash from the signature, the message is considered authentic and unaltered.

By sending both the message and the signature, the receiver can verify the integrity and authenticity of the message. The encrypted signature provides a way for the receiver to confirm that the message has not been tampered with and that it indeed comes from the purported sender. This process helps ensure secure and trustworthy communication in various applications, such as email, digital documents, and online transactions.


A digital signature is a cryptographic technique used to verify the authenticity and integrity of a digital message, document, or data. It provides a way for the sender of a message to prove their identity and ensure that the content of the message has not been altered during transit.

Here's a simplified explanation of how digital signatures work:

1. **Key Pair Generation:**
   - The signer generates a pair of cryptographic keys: a private key and a corresponding public key. These keys are mathematically linked but computationally infeasible to derive one from the other.

2. **Signing:**
   - To sign a message, the sender uses their private key to perform a mathematical operation on a hash (a fixed-size representation of the message content). This produces a unique value known as the digital signature.

3. **Sending the Message and Signature:**
   - The sender sends both the original message and the digital signature to the recipient.

4. **Verification:**
   - The recipient uses the sender's public key to verify the digital signature. The public key is often made widely available, while the private key is kept secret.

5. **Validity Check:**
   - If the signature is valid, it confirms that the message was signed by the possessor of the private key (which corresponds to the public key used for verification). It also ensures that the message has not been altered since it was signed.

Digital signatures provide the following security assurances:

- **Authentication:** The recipient can verify the identity of the sender.
- **Integrity:** The recipient can ensure that the message has not been tampered with.
- **Non-repudiation:** The sender cannot deny having sent the message, as only their private key could have produced the signature.

In summary, digital signatures play a crucial role in ensuring the trustworthiness of digital communication by providing a secure way to verify the source and integrity of messages.


Certainly, let's break down the process of creating and verifying a digital signature with a simple example using Alice and Bob.

### Key Generation:

| **Alice**          | **Bob**            |
|--------------------|--------------------|
| Generate Private Key (Priv_A) |                    |
| Generate Public Key (Pub_A)  |                    |

### Signing:

| **Alice**          | **Bob**            |
|--------------------|--------------------|
|                    | Receive Public Key (Pub_A) |
| Create Message (e.g., "Hello, Bob!") |                    |
| Hash the Message (Hash_Msg) |                    |
| **Sign the Hash with Private Key** |                    |
|                    |                    |

### Sending Message and Signature:

| **Alice**          | **Bob**            |
|--------------------|--------------------|
| Send Message (e.g., "Hello, Bob!") |                    |
| Send Digital Signature |                    |

### Verification:

| **Alice**          | **Bob**            |
|--------------------|--------------------|
|                    | Receive Message       |
|                    | Receive Digital Signature |
| **Verify Signature with Public Key (Pub_A)** |                    |
| Compare Hash of Received Message |                    |
| If Match, **Signature is Valid**   |                    |

### Outcome:

- If the signature is valid, Bob can trust that the message was indeed sent by Alice, and the content has not been altered.
- If the signature is invalid, Bob knows that the message may be compromised or not sent by Alice.

This example illustrates the basic flow of digital signatures. Keep in mind that the actual cryptographic operations involve complex mathematics, and the strength of the system relies on the security of the underlying algorithms and key management practices.


In traditional public-key cryptography (such as RSA or ECC), digital signatures involve the use of asymmetric key pairs: a private key for signing and a corresponding public key for verification. However, some post-quantum cryptography (PQC) algorithms operate differently, and not all PQC algorithms follow the same principles as traditional ones.

Here's a simplified explanation of how some PQC signature schemes work:

1. **Key Generation:**
   - Alice generates a key pair, which may include a private key and a public key. The structure of the key pair depends on the specific PQC algorithm in use.

2. **Signing:**
   - Alice hashes the message she wants to sign using a secure hash function.
   - Using her private key and the hash, Alice generates a digital signature.

3. **Sending Message and Signature:**
   - Alice sends the original message and the digital signature to Bob.

4. **Verification:**
   - Bob receives the message and the signature.
   - Bob uses Alice's public key to verify the signature's authenticity.
   - If the verification is successful, Bob can trust that the message is from Alice and hasn't been tampered with.

5. **Outcome:**
   - If the verification is successful, Bob accepts the message as authentic.
   - If the verification fails, Bob rejects the message.

It's important to note that PQC algorithms, including those for signatures, come in various forms, and their structures can differ significantly from traditional public-key algorithms. Some PQC algorithms may use lattice-based cryptography, code-based cryptography, hash-based cryptography, or other mathematical structures.

The specific steps and algorithms involved would depend on the PQC algorithm you are using. Each algorithm has its unique approach to providing security against quantum attacks. For example, hash-based signatures, like XMSS or SPHINCS, are based on hash functions and Merkle trees, and they don't have the same concept of public/private key pairs as traditional asymmetric algorithms.


The process of obtaining the public key can vary based on the specific cryptographic algorithm and system being used. Generally, in public-key cryptography, a user's public key is typically made available in a public directory or through a trusted authority. Here's how it might work in different scenarios:

1. **Public Directory:**
   - Alice could publish her public key in a public directory or a key server.
   - Bob can search for Alice's public key using her identifier (e.g., email address or username) and retrieve it from the directory.

2. **Certificate Authorities (CAs):**
   - Alice might obtain a digital certificate from a trusted Certificate Authority (CA).
   - The digital certificate includes Alice's public key and is signed by the CA to verify its authenticity.
   - Bob can obtain Alice's public key by acquiring her digital certificate from the CA.

3. **Direct Exchange:**
   - Alice can directly provide her public key to Bob through a secure channel, such as in-person or through a trusted messaging system.
   - This method is more suitable for smaller, closed systems where direct communication is feasible.

4. **Web of Trust (for PGP/GPG):**
   - In systems like Pretty Good Privacy (PGP) or GNU Privacy Guard (GPG), users can sign each other's public keys to create a "web of trust."
   - If Bob trusts a third party who has signed Alice's key, he can use this trust relationship to obtain Alice's public key.

Remember that the specific method depends on the security infrastructure in place, the cryptographic system in use, and the trust model. For example, in some decentralized systems, users might exchange public keys directly, while in others, a centralized authority might manage and distribute public keys.


When we talk about "signing a key" in the context of cryptographic systems, particularly in the realm of public-key cryptography, it refers to the process of associating additional information with a public key to verify its authenticity and integrity. The purpose of signing a key is to establish trust in the claimed association between the key and its owner.

Here's a brief explanation of how key signing works:

1. **Key Owner (Alice) Generates a Key Pair:**
   - Alice generates a key pair consisting of a public key and a private key.
   - The public key is shared with others, while the private key is kept secret.

2. **Another User (Bob) Wants to Trust Alice's Key:**
   - Bob wishes to use Alice's public key for secure communication.

3. **Certificate Authority (CA) or Trusted Party:**
   - In some scenarios, a Certificate Authority (CA) or another trusted party may be involved.
   - The CA verifies Alice's identity and signs her public key with its own private key, creating a digital certificate.

4. **Signing by Other Users (Web of Trust):**
   - In decentralized systems, like PGP (Pretty Good Privacy) or GPG (GNU Privacy Guard), users can sign each other's public keys.
   - If Bob trusts Carol and Carol has signed Alice's key, Bob can use this signature to establish trust in Alice's key.

5. **Verification of Signatures:**
   - When Bob receives Alice's public key, he can verify the signature using the public key of the party who signed it.
   - If the signature is valid, Bob can trust that the public key indeed belongs to Alice.

Signing a key helps to create a network of trust, where the trust in a key is extended based on the trustworthiness of the parties who have signed it. It's a mechanism to ensure that the public key is associated with the claimed identity and hasn't been tampered with.


# Key Encapsulation Mechanism (KEM)
Key Encapsulation Mechanism (KEM) is a cryptographic technique that provides a way to securely exchange secret keys over a public channel. It's often used in hybrid encryption schemes, combining the efficiency of symmetric key operations with the security of public-key cryptography.

Here's a simplified explanation of how KEM works:

1. **Key Generation:**
   - Each party involved (let's say Alice and Bob) generates their own key pair.
     - **Public Key (PK)** and **Private Key (SK)**.

2. **Key Encapsulation:**
   - When Alice wants to send a secret key to Bob, she generates a random symmetric key (let's call it **K**).
   - Alice then uses Bob's public key (PK) to encapsulate (encrypt) the symmetric key.
   - The result is a ciphertext (C) containing the encapsulated key.

   ```
   C = Encapsulate(PK, K)
   ```

3. **Transmission of Encapsulated Key:**
   - Alice sends the ciphertext (encapsulated key) to Bob over the insecure channel.

4. **Key Decapsulation:**
   - Bob, being the intended recipient, uses his private key (SK) to decapsulate (decrypt) the symmetric key from the ciphertext.

   ```
   K = Decapsulate(SK, C)
   ```

5. **Shared Symmetric Key:**
   - Now, both Alice and Bob have the shared symmetric key (K) that was securely exchanged.

The use of KEM provides a way to establish a shared secret key between two parties without the need for direct key exchange. It combines the efficiency of symmetric key cryptography for data encryption with the security of public-key cryptography for secure key exchange.

In the context of Post-Quantum Cryptography (PQC), KEMs are designed to be secure against attacks by quantum computers. Algorithms like Kyber, NTRUEncrypt, and NewHope are examples of KEMs designed to resist quantum attacks.

In the context of Key Encapsulation Mechanism (KEM), the term "sign" typically refers to the process of producing a digital signature. Digital signatures are often used to authenticate the origin of a message and ensure its integrity. Here's a breakdown of how signing and digital signatures might work in the context of KEM:

1. **Key Generation:**
   - Each party generates its key pair: a public key (PK) and a private key (SK).

2. **Key Encapsulation:**
   - Suppose Alice wants to send a secret key (K) to Bob using a KEM.
   - Instead of signing the encapsulated key (asymmetrically), KEMs usually rely on encryption for key encapsulation.

   ```
   Encapsulate(PK_Bob, K) = Ciphertext (C)
   ```

3. **Digital Signature:**
   - If Alice wants to sign a message (perhaps the encapsulated key) to prove its authenticity, she would use her private key (SK_Alice) to produce a digital signature.

   ```
   Sign(SK_Alice, Message) = Digital Signature (Sig)
   ```

4. **Transmission of Encapsulated Key and Signature:**
   - Alice sends both the ciphertext (encapsulated key) and the digital signature to Bob.

5. **Key Decapsulation and Signature Verification:**
   - Bob receives the ciphertext and the digital signature.
   - Bob uses his private key (SK_Bob) to decapsulate the key:

     ```
     Decapsulate(SK_Bob, Ciphertext) = Shared Key (K)
     ```

   - Bob also uses Alice's public key (PK_Alice) to verify the digital signature:

     ```
     Verify(PK_Alice, Message, Sig)
     ```

   - If the signature is valid, Bob knows that the message (possibly the encapsulated key) is authentic and unchanged.

In summary, digital signatures are used in conjunction with key encapsulation to provide authentication and integrity verification. While key encapsulation focuses on securely exchanging symmetric keys, digital signatures add an extra layer of assurance regarding the authenticity and integrity of the exchanged information.


Certainly! Let's compare the signing and digital signature processes in the context of Public Key Infrastructure (PKI) and Key Encapsulation Mechanism (KEM).

### PKI (Public Key Infrastructure):

1. **Key Generation:**
   - Alice generates her key pair: public key (PK_Alice) and private key (SK_Alice).
   - Bob generates his key pair: public key (PK_Bob) and private key (SK_Bob).

2. **Digital Signature:**
   - If Alice wants to sign a message, she uses her private key (SK_Alice) to create a digital signature.

     ```
     Sign(SK_Alice, Message) = Digital Signature (Sig)
     ```

3. **Verification:**
   - Bob, who knows Alice's public key (PK_Alice), can verify the signature using the verification function.

     ```
     Verify(PK_Alice, Message, Sig)
     ```

### KEM (Key Encapsulation Mechanism):

1. **Key Generation:**
   - Alice generates her key pair: public key (PK_Alice) and private key (SK_Alice).
   - Bob generates his key pair: public key (PK_Bob) and private key (SK_Bob).

2. **Key Encapsulation:**
   - If Alice wants to send a secret key (K) to Bob, she uses Bob's public key (PK_Bob) to encapsulate the key.

     ```
     Encapsulate(PK_Bob, K) = Ciphertext (C)
     ```

3. **Digital Signature (Optional):**
   - If desired, Alice can sign the encapsulated key using her private key (SK_Alice).

     ```
     Sign(SK_Alice, Ciphertext) = Digital Signature (Sig)
     ```

4. **Verification:**
   - Bob, who knows Alice's public key (PK_Alice), can verify the optional signature.

     ```
     Verify(PK_Alice, Ciphertext, Sig)
     ```

In summary, PKI primarily focuses on digital signatures for authentication and integrity, while KEM focuses on encapsulating symmetric keys for secure exchange. The use of digital signatures in KEM is optional and depends on additional security and authenticity requirements in the key exchange process.


Yes, that's correct. Signing is a cryptographic operation that involves using the private key of the sender to generate a digital signature. The digital signature serves as a way to verify the authenticity and integrity of a message or data.

Here's a breakdown:

1. **Signing a Message:**
   - The sender (let's say Alice) takes a message (or a hash of the message) and applies a signing algorithm using her private key.
   - The result is a digital signature, which is unique to the combination of the message and Alice's private key.

   ```
   Sign(SK_Alice, Message) = Digital Signature (Sig)
   ```

2. **Verification:**
   - The recipient (let's say Bob), who has access to Alice's public key, can use the verification algorithm to check if the signature is valid.
   - If the verification succeeds, Bob can be confident that the message has been signed by someone with the corresponding private key (presumably Alice).

   ```
   Verify(PK_Alice, Message, Sig)
   ```

In summary, signing is a process where the sender uses their private key to create a unique signature, and the recipient can use the sender's public key to verify the authenticity and integrity of the signed message. It provides a way to ensure that the message has not been tampered with and that it indeed originated from the claimed sender.


In Key Encapsulation Mechanism (KEM), the secret key is used for a different purpose compared to digital signatures in public-key cryptography. Let me break down the process:

1. **Key Encapsulation:**
   - In KEM, the sender (let's say Alice) generates a random secret key (symmetric key) that will be used for encrypting the actual message.
   - The sender also generates a public-private key pair for a public-key encryption scheme. The public key is used by the recipient to encapsulate (encrypt) the symmetric key.

   ```
   Symmetric Key (K) = GenerateRandomKey()
   (PK_Alice, SK_Alice) = GenerateKeyPair()
   Encapsulate(PK_Bob, K) = Encapsulated Key (Ciphertext)
   ```

2. **Decapsulation:**
   - The recipient (let's say Bob) uses his private key to decapsulate (decrypt) the encapsulated key and obtain the symmetric key.

   ```
   K = Decapsulate(SK_Bob, Encapsulated Key)
   ```

3. **Symmetric Key Usage:**
   - With the symmetric key (K) now shared between Alice and Bob, they can use it for efficient and faster symmetric-key encryption and decryption of the actual message.

The use of a symmetric key in KEM is for the purpose of achieving the benefits of symmetric-key cryptography (speed and efficiency) while leveraging the security features of public-key cryptography for key exchange. The public-key encryption is used to securely transmit a symmetric key between parties, and once they share this symmetric key, they switch to symmetric-key cryptography for the actual data encryption.

In contrast, the digital signature process involves using the private key to sign a message, providing authentication and integrity without necessarily involving symmetric key encryption. The two mechanisms serve different cryptographic purposes.

In a typical Public Key Infrastructure (PKI) setup, the original message itself is not encrypted with the private key. Instead, digital signatures are used for authentication and integrity verification.

Here's a simplified explanation of how digital signatures work in PKI:

1. **Signing:**
   - The sender (let's say Alice) uses her private key to sign a hash of the original message. This creates a digital signature.

   ```
   Digital Signature = Sign(SK_Alice, Hash(Message))
   ```

   The hashing is a crucial step. Rather than signing the entire message, a hash function is applied to generate a fixed-size hash value, and it's the hash that gets signed.

2. **Verification:**
   - The recipient (let's say Bob) uses Alice's public key to verify the digital signature. This involves checking whether the decrypted signature matches the hash of the received message.

   ```
   IsVerified = Verify(PK_Alice, Digital Signature, Hash(Received Message))
   ```

   If the verification is successful, Bob knows that the message has not been tampered with and comes from the entity with the corresponding private key.

The original message itself remains unchanged and is not encrypted. The digital signature provides a means of ensuring the authenticity and integrity of the message. If confidentiality (encryption of the message content) is required, additional mechanisms such as symmetric-key encryption can be employed alongside digital signatures.

Certainly, let's clarify what the sender sends to the receiver in both Public Key Infrastructure (PKI) and Key Encapsulation Mechanism (KEM):

1. **Public Key Infrastructure (PKI):**
   - **Sender:** Alice (for example)
   - **Recipient:** Bob
   - **What is Sent:**
     - Alice wants to send an encrypted message to Bob.
     - She encrypts the message using Bob's public key (PK_Bob).
     - The ciphertext, the result of encrypting the message with Bob's public key, is sent to Bob.

   ```
   Ciphertext = Encrypt(Message, PK_Bob)
   ```

   - Bob, the recipient, can decrypt the message using his private key (SK_Bob).

   ```
   Message = Decrypt(Ciphertext, SK_Bob)
   ```

2. **Key Encapsulation Mechanism (KEM):**
   - **Sender:** Alice (for example)
   - **Recipient:** Bob
   - **What is Sent:**
     - Alice wants to send a symmetric key (K) to Bob securely.
     - She uses Bob's public key (PK_Bob) to encapsulate the symmetric key.
     - The encapsulated key (ciphertext) is sent to Bob.

   ```
   EncapsulatedKey = Encapsulate(PK_Bob, K)
   ```

   - Bob, the recipient, can decapsulate and retrieve the symmetric key using his private key (SK_Bob).

   ```
   K = Decapsulate(EncapsulatedKey, SK_Bob)
   ```

In summary:
- In PKI, the sender sends an encrypted message to the recipient using the recipient's public key.
- In KEM, the sender sends an encapsulated (encrypted) symmetric key to the recipient using the recipient's public key.

I hope this clears up the distinction between the two mechanisms. Let me know if you have further questions!


In the context of the Key Encapsulation Mechanism (KEM), the primary purpose is to securely transmit a symmetric key from the sender (Alice) to the recipient (Bob). The original message itself is not directly transmitted using KEM. Instead, the symmetric key (session key) is encapsulated, and this encapsulated key, along with a digital signature, is sent to the recipient.

Here's a breakdown of the steps in KEM:

1. **Encapsulation (Sender - Alice):**
   - Alice generates a symmetric key (K) that will be used for encrypting the actual message.
   - She encapsulates the symmetric key using Bob's public key (PK_Bob).

     ```
     EncapsulatedKey = Encapsulate(PK_Bob, K)
     ```

   - Alice signs the encapsulated key with her private key (SK_Alice) to create a digital signature.

     ```
     DigitalSignature = Sign(EncapsulatedKey, SK_Alice)
     ```

   - Alice sends both the encapsulated key and the digital signature to Bob.

2. **Decapsulation (Recipient - Bob):**
   - Bob receives the encapsulated key and the digital signature from Alice.
   - He verifies the digital signature using Alice's public key (PK_Alice).

     ```
     IsSignatureValid = Verify(EncapsulatedKey, DigitalSignature, PK_Alice)
     ```

   - If the signature is valid, Bob decapsulates the symmetric key.

     ```
     K = Decapsulate(EncapsulatedKey, SK_Bob)
     ```

   - Now, Bob has obtained the symmetric key (K) securely.

Once Bob has the symmetric key, he can use it to encrypt and decrypt the actual messages exchanged between him and Alice. The original message is encrypted using this shared symmetric key, providing confidentiality for the communication.

So, in KEM, the original message is not sent separately; it is encrypted using the symmetric key derived through the key encapsulation process. The focus of KEM is on establishing a secure shared key between the parties involved.


If a sender wants to send a message securely, they typically use a combination of asymmetric (public-key) and symmetric-key cryptography. Here's a common approach:

1. **Establish a Secure Channel:**
   - The sender (Alice) and the recipient (Bob) may use an asymmetric key exchange algorithm (like Diffie-Hellman) to establish a shared secret (symmetric key) over an insecure channel.

2. **Key Exchange:**
   - Alice and Bob each generate their key pairs (public key and private key).
   - They exchange public keys.
   - Using the exchanged public keys, each party can derive a shared secret (symmetric key) without exposing their private keys.

3. **Symmetric-Key Encryption (Message Encryption):**
   - Once they have a shared symmetric key, they use it for symmetric-key encryption and decryption.
   - Alice can use the shared symmetric key to encrypt the actual message.

     ```
     EncryptedMessage = Encrypt(Message, SharedSymmetricKey)
     ```

   - She sends the encrypted message to Bob.

4. **Symmetric-Key Decryption (Message Decryption):**
   - Bob, who shares the same symmetric key with Alice, can decrypt the message.

     ```
     DecryptedMessage = Decrypt(EncryptedMessage, SharedSymmetricKey)
     ```

This hybrid approach combines the efficiency of symmetric-key cryptography for message encryption with the secure key exchange provided by asymmetric-key cryptography. The asymmetric part is used for key exchange and establishing a secure communication channel, while the symmetric part is used for encrypting the actual messages.

This approach ensures both confidentiality (via symmetric-key encryption) and secure key exchange (via asymmetric-key cryptography).

Yes, you've captured the essence correctly. In the scenario described:

1. **PQC Sign (Public Key Cryptography for Digital Signatures):**
   - Used for certificate issuance and verification.
   - Ensures the authenticity and integrity of digital certificates.
   - Allows users to sign messages, data, or transactions, providing a non-repudiable way to prove the origin of the information.

2. **PQC KEM (Public Key Cryptography for Key Encapsulation Mechanism):**
   - Used for secure key exchange between users.
   - Enables the creation of a shared secret between users for symmetric encryption.
   - The shared secret derived from the key encapsulation process is used for protecting the confidentiality and integrity of data during communication sessions.

So, you have one aspect of public key cryptography (PQC Sign) ensuring the trustworthiness of certificates and digital signatures, and another aspect (PQC KEM) facilitating secure communication channels by exchanging secret keys for symmetric encryption between users. Both aspects contribute to the overall security of the system.


