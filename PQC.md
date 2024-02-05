# PQC (Post-quantum cryptography)

📅 05/02/2024

Post-quantum cryptography is indeed a complex and evolving field. Signatures in cryptography refer to a mechanism that allows someone to sign a digital message and later prove that they were the signer. This is used to ensure the authenticity, integrity, and non-repudiation of the message.

In the context of post-quantum cryptography, the focus is on developing signature schemes that are secure against attacks from quantum computers. Traditional signature schemes, such as those based on RSA or ECC (Elliptic Curve Cryptography), are vulnerable to Shor's algorithm, which can efficiently factor large numbers and solve the discrete logarithm problem on which these schemes rely.

Post-quantum signature schemes aim to provide security in a quantum computing environment. Some examples of post-quantum signature schemes include:

1. **Dilithium:** A lattice-based digital signature scheme.
2. **HAETAE:** Another lattice-based signature scheme.
3. **Kyber:** A key encapsulation mechanism (KEM) that can be used for signatures.
4. **SMOUG:** A code-based signature scheme.

These schemes often rely on mathematical problems believed to be hard even for quantum computers, such as lattice-based problems, hash-based problems, or code-based problems. The goal is to ensure that even with the advent of powerful quantum computers, the security of digital signatures is maintained.

It's normal to feel overwhelmed by the terminology, and the choice of a signature scheme depends on factors like security requirements, efficiency, and the specific cryptographic assumptions. If you have more specific questions or need clarification on certain aspects, feel free to ask!

