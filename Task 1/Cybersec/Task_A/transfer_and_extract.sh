#!/bin/bash

# Define variables for host and guest details
HOST_USER="yash"
HOST_IP="192.168.16.100"
GUEST_USER="ubuntu"
GUEST_IP="192.168.16.222"
PORT="2222"
FILE_NAME="test.cpp"
EXE_NAME="test.out"
SYSCALLS_FILE="test_syscalls.txt"

# Define paths
HOST_DESKTOP="/home/$HOST_USER/Desktop"
GUEST_DESKTOP="/home/$GUEST_USER/Desktop"

# Step 1: Send the C/C++ file from host to guest
scp -P $PORT $HOST_DESKTOP/$FILE_NAME $GUEST_USER@$GUEST_IP:$GUEST_DESKTOP

# Step 2: SSH into the guest machine to compile the file and extract system calls
ssh -p $PORT $GUEST_USER@$GUEST_IP << EOF
    cd $GUEST_DESKTOP
    g++ -o $EXE_NAME $FILE_NAME  # Compile the C++ file
    strace -o $SYSCALLS_FILE -c ./$EXE_NAME  # Extract system calls
EOF

# Step 3: Retrieve the system calls file from guest to host
scp -P $PORT $GUEST_USER@$GUEST_IP:$GUEST_DESKTOP/$SYSCALLS_FILE $HOST_DESKTOP

echo "System calls extracted and saved to $HOST_DESKTOP/$SYSCALLS_FILE"

