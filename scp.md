# Secure Copy Protocol

📅 15/02/2024

The command you provided is used for securely copying files between a local and a remote host using the SCP (Secure Copy Protocol). Here's how you can use it:

1. Open a terminal or command prompt on your local machine.
2. Use the `scp` command followed by the options and arguments.
3. Specify the source and destination of the files you want to copy.

For example, if you want to copy a directory named "folder" from your local machine to a remote server with the IP address "123.45.67.89" and port 22188, you would run:

```bash
scp -P 22188 -r folder user@123.45.67.89:/path/to/destination
```

Here:
- `-P 22188` specifies the port number (22188 in this case).
- `-r` is used to recursively copy directories and their contents.
- `folder` is the name of the directory you want to copy.
- `user` is your username on the remote server.
- `123.45.67.89` is the IP address of the remote server.
- `:/path/to/destination` is the destination directory on the remote server.

Make sure to replace "user" with your actual username and provide the correct path to the destination directory on the remote server. Also, ensure that you have the necessary permissions to access the remote server and write to the destination directory.


In Git Bash, you need to use Unix-style paths, not Windows-style paths. The equivalent Unix-style path for `C:\tasks\kms-admin-frontend\build` would be `/c/tasks/kms-admin-frontend/build`.

So, in Git Bash, the command would look like:

```bash
scp -P 22188 -r /c/tasks/kms-admin-frontend/build user@123.45.67.89:/path/to/destination
```

Make sure to replace `user`, `123.45.67.89`, and `/path/to/destination` with the appropriate values for your setup.
