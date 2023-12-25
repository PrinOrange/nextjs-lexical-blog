---
title: "Resource Lock in Concurrency"
time: "2023-04-15"
tags: ["OS"]
summary: "Analysis and usage scenarios of spin lock, optimistic lock, pessimistic lock, read-write lock, mutex lock and other concepts."
---

## Spin lock

### Concept

**Spin Lock** is a lock mechanism based on busy waiting. Its implementation idea is to check in a loop whether the status of the lock is available when acquiring the lock. If the lock is occupied, it will wait in a loop. , until the lock is released. A spin lock is a non-blocking lock because it does not block the thread like a mutex lock, but waits in a loop until the lock is acquired.
Spin locks are mainly used to protect critical sections because they can achieve efficient thread synchronization on multi-core CPUs. Especially when competition in critical sections is not fierce, spin locks can reduce the cost of thread context switching, thereby improving the performance of the program. performance.
The implementation of a spin lock is very simple. An integer variable is usually used to represent the status of the lock. When the lock is occupied, the value of the variable is 1, and when the lock is available, the value of the variable is 0. During the process of acquiring the lock, the thread will continuously check the lock status in a loop until it finds that the lock is available, then sets the lock status to 1 and returns success. When the lock is released, the thread resets the lock's status to 0, allowing other threads to acquire the lock.
It should be noted that although spin locks can reduce the cost of thread context switching, when competition in the critical section is fierce, the efficiency of spin locks will become worse because it will cause threads to be busy waiting, wasting CPU resources.

The spin lock will keep busy waiting when the resource is occupied, and continuously loop to check whether the resource is available until the resource is obtained. On multi-core CPUs, spin locks can be implemented using atomic operation instructions such as CAS (Compare And Swap) provided by the hardware, thereby avoiding lock competition and the overhead of thread context switching. On a single-core CPU, the efficiency of the spin lock may be relatively low because it will always occupy CPU resources, causing other threads to be unable to execute. Therefore, in practical applications, it is necessary to select an appropriate lock mechanism according to the specific situation.

Therefore, in practical applications, it is necessary to select an appropriate lock mechanism according to the specific situation.

### Usage

Spin lock is a lock mechanism based on busy waiting. It continuously checks whether the shared resource is occupied while waiting for the shared resource to be released. If the shared resource is already occupied, wait until the shared resource is released; if the shared resource is not occupied, lock and access the shared resource. Spin lock is suitable for the following scenarios:

1. Occupation of shared resources in a short period of time: When shared resources are occupied for a short period of time and the waiting time is short, using spin locks can avoid the overhead of threads entering sleep state and thread context switching, thereby improving program performance. .
2. The number of threads accessing shared resources is small: Spin locks are suitable for situations where the number of threads accessing shared resources is small, because when the number of threads accessing shared resources is large, the busy waiting of spin locks will consume a lot of CPU resources. , resulting in reduced program performance.
3. Hardware support: Spin locks require hardware support to implement busy waiting, so they are suitable for systems using multi-processors or multi-core processors. It should be noted that spin locks are not suitable for scenarios with long waiting times, because long busy waiting will consume a large amount of CPU resources, resulting in system performance degradation. In the case of long waiting time, other lock mechanisms should be used, such as mutual exclusion locks, read-write locks, etc.

## Read-write lock

### Concept

**Read-Write Lock**, also known as shared-exclusive lock, is a special lock mechanism that allows multiple threads to read shared resources at the same time, but only allows one thread to write to shared resources . Read-write locks can effectively improve the concurrency performance of the program, especially when read operations are more frequent than write operations, it can reduce lock competition and improve the concurrency performance of the program.
The implementation of read-write lock is very simple, usually using a counter and a mutex lock to represent the lock status. When a thread wants to read a shared resource, it will first try to acquire a read lock. If no thread currently holds a write lock, the read operation can continue. If a thread holds a write lock, the read operation must wait for the write lock to be released. When a thread wants to write to a shared resource, it will first try to obtain a write lock. If no thread currently holds a read lock or write lock, the write operation can continue. If a thread holds a read or write lock, the write operation must wait for all read and write locks to be released.
It should be noted that although read-write locks can improve the concurrency performance of the program, the advantages of read-write locks may be weakened when write operations are frequent. Because each write operation must wait for both the read lock and the write lock to be released, the read operation will also be blocked, affecting the performance of the program. Therefore, in practical applications, it is necessary to select an appropriate lock mechanism according to the specific situation.

### Usage

Read-write lock is a special lock mechanism that allows multiple threads to read shared resources at the same time, but when writing to shared resources, they must be mutually exclusive. Read-write locks are suitable for the following scenarios:

1. There are far more read operations than write operations: When there are far more read operations than write operations, read-write locks can be used to improve the concurrency performance of the program. Read-write locks allow multiple threads to read shared resources at the same time, thereby reducing mutual exclusion competition between threads and improving the concurrency performance of the program.
2. The reading operation of shared resources is time-consuming: When the reading operation of shared resources is time-consuming, read-write locks can be used to improve the performance of the program. Read-write locks allow multiple threads to read shared resources at the same time, thereby reducing mutual exclusion competition between threads and the cost of thread context switching, and improving program performance.
3. There are fewer write operations on shared resources: When there are fewer write operations on shared resources, read-write locks can be used to improve the concurrency performance of the program. Read-write locks must be mutually exclusive when writing to shared resources, but multiple threads are allowed to do so at the same time when reading shared resources, thereby reducing mutual exclusion competition between threads and improving the concurrency performance of the program. It should be noted that read-write locks are suitable for scenarios where there is more reading and less writing. When the ratio of read-write operations is close, the performance of read-write locks may not be as good as that of mutex locks. In addition, when using read-write locks, you need to pay attention to the lock granularity to avoid the lock granularity being too fine or too coarse, which will affect the performance of the program.

## Mutex lock

### Concept

**Mutex (Mutex)** is the most basic lock mechanism, which can ensure that only one thread can access shared resources at the same time. When using a mutex lock, when one thread acquires the lock, other threads must wait for this thread to release the lock before they can acquire the lock. This can avoid data competition and inconsistency problems caused by multiple threads modifying shared resources at the same time.
Mutex locks are usually implemented using two operations: lock and unlock. When a thread wants to access a shared resource, it needs to first try to acquire the lock. If no other thread currently holds the lock, the thread can obtain the lock and access the shared resource. If another thread holds the lock, that thread must wait for the lock to be released. After the access is complete, the thread needs to release the lock so that other threads can obtain the lock and access the shared resource.
It should be noted that although using a mutex lock can ensure that only one thread can access shared resources at the same time, frequent locking and unlocking will cause program performance to decrease, because locking and unlocking operations require the overhead of system calls and kernel switching. . Therefore, in practical applications, mutex locks need to be used with caution to avoid excessive lock competition and lock waiting.

### Usage

Mutex lock is a common lock mechanism that ensures that only one thread can access shared resources at the same time, thereby avoiding mutual exclusion competition between threads. Mutex locks are suitable for the following scenarios:

1. Occupation of shared resources in a short period of time: When shared resources are occupied for a short period of time and the waiting time is short, using a mutex lock can avoid the overhead of threads entering sleep state and thread context switching, thereby improving program performance. .
2. The number of threads accessing shared resources is small: Mutex locks are suitable for situations where the number of threads accessing shared resources is small, because when the number of threads accessing shared resources is large, competition for mutex locks will become fierce, resulting in The performance of the program decreases.
3. There is less code in the critical section: Mutex lock is suitable for situations where there is less code in the critical section, because when there is more code in the critical section, the competition for the mutex lock will become fierce, resulting in a decrease in program performance.
4. Strong demand for synchronization: Mutex lock is suitable for situations where synchronization demand is strong, because it can ensure that only one thread can access shared resources at the same time, thereby avoiding mutual exclusion competition and data conflicts between threads. It should be noted that when mutex locks are used in a multi-threaded environment, deadlocks and other problems may occur. Therefore, issues such as lock granularity and locking order need to be considered to avoid deadlocks and other problems. In addition, when using mutex locks, you need to pay attention to lock performance issues to avoid excessive use of mutex locks, which may lead to program performance degradation.

## Optimistic locking and pessimistic locking

Optimistic locking and pessimistic locking are two different locking mechanisms used to solve data competition problems when accessing shared resources concurrently.
**Pessimistic locking is a pessimistic idea. It believes that in a concurrent environment, shared resources can easily be modified by other threads. Therefore, a lock must be locked every time a shared resource is accessed to ensure that only one thread can access the shared resource at the same time. .** The representative of pessimistic lock is a mutex lock, which can ensure that only one thread can access shared resources at the same time. However, locking and unlocking are expensive, **and can easily lead to a decrease in program performance.**

Optimistic locking is an optimistic idea. **It believes that in a concurrent environment, shared resources are rarely modified by other threads. Therefore, each time a shared resource is accessed, it is not locked. Instead, the shared resource is read first** and Check the version number and other information of the shared resource before modifying it. If it has not been modified, modify it and update the version number and other information. Otherwise, give up the modification and try again. Optimistic locks are represented by operations such as lock-free programming and CAS (Compare And Swap), which can reduce lock competition and thread context switching overhead, and improve the concurrency performance of the program.
It should be noted that although optimistic locking can improve the concurrency performance of the program, when shared resources are modified frequently concurrently, the number of retries of the optimistic lock may increase, resulting in a decrease in program performance. Therefore, in practical applications, it is necessary to select an appropriate lock mechanism according to the specific situation.
