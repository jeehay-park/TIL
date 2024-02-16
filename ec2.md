# EC2, WSL2, Hypervisor, Bare Metal Server

📅 15/02/2024

1. **EC2 (Elastic Compute Cloud)**: EC2 is a web service provided by Amazon Web Services (AWS) that allows users to rent virtual servers, known as instances, on the cloud. Users can choose from various instance types with different compute, memory, storage, and networking capacities, and they only pay for the resources they use.

2. **WSL2 (Windows Subsystem for Linux 2)**: WSL2 is a compatibility layer provided by Microsoft that allows users to run a Linux kernel directly on Windows 10 or Windows Server 2019. It enables developers to run Linux command-line tools and utilities natively on Windows without the need for a virtual machine.

3. **Hypervisor**: A hypervisor is a software layer that allows multiple operating systems (OS) to run on a single physical hardware platform simultaneously. It virtualizes the hardware resources of the underlying physical server and allocates them to virtual machines (VMs), each running its own OS. Examples of hypervisors include VMware ESXi, Microsoft Hyper-V, and KVM (Kernel-based Virtual Machine).

4. **Bare Metal Server**: A bare metal server, also known as a dedicated server, is a physical server that is solely dedicated to a single tenant or user. Unlike virtual servers, which run on a hypervisor and share physical hardware resources with other VMs, bare metal servers provide direct access to the underlying hardware without any virtualization overhead. They offer high performance, security, and flexibility, making them suitable for applications with specific resource requirements or compliance needs.

A firmware or software system that provides a virtual machine and allows it to operate directly on underlying hardware (instead of via emulation), but within specified constraints. 
Synonym: virtual machine monitor

In the context of computing, "bare metal" refers to the underlying physical hardware of a server without any additional software layers or abstractions, such as an operating system or virtualization software. 

When we say a server is a "bare metal server," it means that it is dedicated entirely to a single user or tenant, and there are no virtualization layers or hypervisors involved. Users have direct access to the server's hardware resources, including CPU, memory, storage, and networking, without any virtualization overhead.

"Bare metal" is used to contrast with virtualized environments, where multiple virtual machines (VMs) run on a single physical server using a hypervisor or virtualization layer to manage and allocate resources.

No, the Linux kernel and the shell are not the same. They are distinct components of a Linux operating system.

1. **Linux Kernel**: The Linux kernel is the core component of the Linux operating system. It is responsible for managing hardware resources such as the CPU, memory, storage devices, and input/output devices. The kernel provides essential services to the rest of the operating system and applications, including process management, memory management, device drivers, and system calls.

2. **Shell**: The shell is a command-line interface (CLI) program that provides users with an interactive way to interact with the operating system. It interprets user commands and executes them by communicating with the kernel. The shell allows users to run programs, manipulate files and directories, configure system settings, and perform various other tasks. Examples of shells in Linux include Bash (Bourne Again Shell), Zsh (Z Shell), and Fish (Friendly Interactive Shell).

In summary, the Linux kernel is the core component that manages hardware resources and provides essential services to the operating system, while the shell is a user interface that allows users to interact with the operating system and execute commands.


