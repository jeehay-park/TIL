# Error Response

📅 5/09/2023

```
console.log(err.response)

// response

// data : {
    error : {"error":{"code":"401 UNAUTHORIZED","message":"Unauthorized"}}
}

```

📅 14/09/2023
```
{
    "error": {
        "code": "409 CONFLICT",
        "message": "Connection is close. Cannot send anything"
    }
}

```

📅 20/09/2023
```
Mixed Content: The page at 'https://43.201.210.221/home' was loaded over HTTPS, but requested an insecure element 'https://43.201.210.221/ictk-logo.png'. This request was not upgraded to HTTPS because its URL's host is an IP address.

```

#### ❌ net::ERR_CERT_AUTHORITY_INVALID
```
POST https://43.201.210.221/kms/admin/public/login/challenge net::ERR_CERT_AUTHORITY_INVALID
```

The error message "net::ERR_CERT_AUTHORITY_INVALID" is a common error you might encounter in web browsers, and it indicates a problem with the SSL/TLS certificate of a website. Specifically, it means that the certificate presented by the website's server is not trusted by the browser because it was signed by an unrecognized or untrusted certificate authority (CA).

Here are some common reasons for this error:

1. **Self-Signed Certificate**: The website is using a self-signed certificate, which is not trusted by default by most browsers. Self-signed certificates are typically used for development or testing purposes.

2. **Expired Certificate**: The certificate has expired, and the browser no longer considers it valid.

3. **Misconfigured Certificate**: The certificate might be misconfigured or doesn't match the domain it's serving.

4. **Untrusted CA**: The certificate might be signed by a certificate authority that is not recognized by the browser. This can happen if the CA is not part of the browser's trusted CA store.

To resolve this error:

1. **Check Certificate Validity**: Ensure that the certificate being used is valid, not expired, and correctly configured for the domain it's serving.

2. **Use a Trusted CA**: For production websites, it's essential to use a certificate signed by a well-known and trusted certificate authority (CA). This ensures that visitors to your site won't encounter certificate errors.

3. **Install Custom CA**: If you're working with a self-signed certificate for development purposes, you can install the certificate as a trusted authority on your local machine. This will vary depending on your operating system and browser.

4. **Check Domain Configuration**: Ensure that the certificate matches the domain you're accessing. Sometimes, the error occurs because the certificate doesn't match the domain name.

Remember that while you can bypass this error for development purposes, it's essential to address it properly for production websites to ensure the security and trustworthiness of your site.


