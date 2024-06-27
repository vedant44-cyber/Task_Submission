# Bonus Task: Building a Simple Linux kernel Module

## 1) Environment Setup:<br>
  Running Linux system Ubuntu 22.04.4 LTS with necessary development tools and headers for kernel module development
  <br>
  

### 1) To Create the Kernel Module Source File<br>
 A file named uptime_report.c has been created<br>
![image](https://github.com/vedant44-cyber/Task_Submission/assets/145666524/d2bf8754-02e6-4cda-94bb-8a6efdf512f9)
<br>
<br>

### 2)To Create the Makefile<br>
A Makefile in the same directory has been Created 


![image](https://github.com/vedant44-cyber/Task_Submission/assets/145666524/9e9e4c97-6684-4b8c-bc25-2e29a9651e63)
<br>
<br>

### 3)Build the Kernel Module<br>
Run the  commands to compile the module:<br>
```command
make
```
This will produce a file named uptime_report.ko.
<br>
<br>

### 4) Load and Unload the Module<br>
To load the module :<br>
```command
sudo insmod uptime_report.ko
```
To unload the module :<br>
```command
sudo rmmod uptime_report.ko
```
<br>

To check the messages:<br>
```command
sudo dmesg | tail
```
![image](https://github.com/vedant44-cyber/Task_Submission/assets/145666524/947f79c9-7cf3-4a8f-89c5-fe81cb6ec002)






  
