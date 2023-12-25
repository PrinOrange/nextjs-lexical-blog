---
title: "Operating System Notes: Two Methods of Multiprocessor Scheduling"
time: "2022-12-05"
tags: ["OS"]
summary: "An introduction to two methods of multiprocessor scheduling is given: symmetric multiprocessing and asymmetric multiprocessing."
---

Two methods of multiprocessor scheduling

The first is **asymmetric multiprocessing (AMP).** The method is to have one processor handle the code for system activities (IO, scheduling decisions, etc.) in a processor cluster, and this processor becomes the main processor. Other processors execute user program code. This method is relatively simple, and because the main processor is only dedicated to processing system code, it can alleviate the need for data sharing.

The second type is **Symmetric multiprocessing (SMP).** It requires each processor to have self-scheduling function. And for the situation of ready queue and process execution, this method has two different implementation methods under subdivision.

First, each processor has a private ready queue for a process.

The second is to establish a common ready queue for all processes.

The above two approaches must ensure a premise, that is, you must be very careful when scheduling, implement a precise scheduling algorithm, check the ready queue, pop up a process and execute it before executing the process for each processor. If multiple processors want to access a common data area, it must be ensured that the process will not disappear from the queue. There will also be no situation where two processors execute the same process. Otherwise, processes may be missing or executed repeatedly, resulting in unpredictable errors.

Now operating systems, such as Linux, Windows, Mac OS, etc., all use the SMP method.

## Processor affinity

For operating systems that use the SMP method, processor affinity must be added to ensure the efficiency of the processor processing process. Because when a process is executed in the processor, a cache is usually established in the processor to use the data in the processor multiple times to reduce duplication of work and improve efficiency. But when the process migrates between different processors, To disable the cache in the original processor, rebuild the cache in the new processor. However, the cost and expense of doing so will increase dramatically, causing work efficiency to decrease. Therefore, the operating system should try its best to ensure that the process is only executed in one processor and avoid multiple migrations to different processors. This measure is called processor affinity. Simply put, make a process affinity to a processor.

However, there are two mandatory executions of affinity. One is **soft affinity**. The operating system tries its best to make the process be processed in one processor, but it cannot guarantee whether it will be migrated. The other is **hard affinity**, which forces a process to be processed only in one processor and does not allow migration between different processors. For example, the Linux system implements a hard affinity policy.

## Load balancing

For systems that use the SMP method, in a processor cluster, if the processors are unevenly idle, some processes can be extracted from the busy processors to idle processors to achieve overall work idleness. Busy balancing improves processor resource utilization. This is the load balancing strategy.

In the above, according to the allocation of ready queues, there are two methods of establishing a public ready queue and establishing a private ready queue for each processor. **Load balancing is usually not necessary if there is a public ready queue.** Because a process can be pulled from the public queue and allocated to an idle processor at any time. However, in most modern operating systems, private ready queues are established for different processors. It is necessary to use load balancing, regularly check the load of each processor, and migrate processes on overloaded processors to unloaded processors. middle. The migration of a process from an overloaded processor to an idle processor is called **push migration**. Pulling an idle processor from an overloaded processor into a process is called pull migration.

In fact, load balancing will eliminate the advantages brought by processor affinity due to process migration. Therefore, processor affinity and load balancing have certain opposing effects. This requires designing a better scheduling algorithm.

## Symmetric multithreading

Symmetric multi-threading technology is also known as **Hyper-Threading Technology (SMT)**. This is implemented in the hardware technology of the processor and does not belong to the operating system technology. The main idea is to logically divide a real physical processor into several logical processors, so that a physical processor is divided into functionally logically multiple processors, and each logical processor is responsible for its own process work. If the operating system can use divided logical processors to run processes, it can design specific scheduling algorithms to fully utilize processor resources and achieve greater performance.
