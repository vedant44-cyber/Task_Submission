# Domain-specific tasks: Cybersecurity
## Task A - Extracting system calls from an executable
### The Tast has been perform in Ubuntu 22.04.4 LTS 

### Level 1:
To Extract the system calls made when the mkdir command is
executed on the command line<br>

```command
strace mkdir
```


 <img width="486" alt="image" src="https://github.com/vedant44-cyber/Task_Submission/assets/145666524/b51ea904-a6c3-4ad2-80b6-11ec62968b20">
<br>
<br>

### Level 2:
● Make a C/C++ file name test.cpp that prints.<br>
● Compile the C/C++ file into an executable named test.out
and extract its system calls.<br>
● Store the system calls in a file called test_syscalls.txt.<br>

step 1. Create the test.cpp file<br>
step 2.Compile the test.cpp file into an executable named test.out
```bash
g++ test.cpp -o test.out
```
step 3.Extract system calls
```bash
strace -o test_syscalls.txt ./test.out

```

<img width="784" alt="Screenshot 2024-06-27 at 3 08 50 PM" src="https://github.com/vedant44-cyber/Task_Submission/assets/145666524/855811bb-8518-41ea-82b3-a614c800104e">

### Level 3:

## The Bash Script to task is named as transfer_and_extract.sh
Guest :-192.168.16.222(ubuntu@benelux)<br>
host :-1992.168.16.100(yash@benelux)<br>


Save the given script to a file,  transfer_and_extract.sh, and run it with the following command:


```bash
bash transfer_and_extract.sh
```
<br>
Ensure that SSH key-based authentication is set up between the host and guest for passwordless access, or the script will prompt for passwords
<br>
I have used my ip address and local of directory <br>
edit the ip address and local as per your system in  transfer_and_extract.sh.

<img width="539" alt="Screenshot 2024-06-27 at 3 12 32 PM" src="https://github.com/vedant44-cyber/Task_Submission/assets/145666524/de0c0b1a-ddde-4f35-911b-d859388e73fd">
<br>
The System call retrieve from the guest machine<br>
