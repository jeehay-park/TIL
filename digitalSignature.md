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


