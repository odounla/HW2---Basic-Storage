# HW2---Basic-Storage

Submit a pull request containing:
Document that contains:
(5 Points) Various approaches to storage management on your platform of choice
(5 Points) Pros AND cons of each approach for your project
App that demonstrates:
(5 Points) Store AND Load a media item locally (e.g. music, video, image)
(5 Points) Store AND Load user settings locally
Reminder that this is an individual assignment (although you're welcome to discuss it with your team members or classmates in general).  As always please submit your pull request.


Answer : 

1. Local Storage (On-Device Storage)

Overview:

Local storage refers to storing data directly on a user’s device, as opposed to a remote server or cloud-based storage. This approach is particularly well-suited for smaller data sets, such as user preferences, session data, or cached information, that don’t require cloud synchronization or need to be available offline. Local storage is generally fast and efficient for read/write operations, as it avoids network latency and can function without an internet connection. However, since it’s confined to the user’s device, it is subject to device storage limits and does not support cross-device synchronization unless paired with cloud-based solutions.

Use Cases:

	•	Storing user preferences like theme (dark/light mode), language settings, or customized interface settings.
	•	Caching data that needs to be available offline or for quick access without querying a server.
	•	Session management, where certain user data is temporarily stored on the device (for example, login state).

Characteristics:

	•	Limited size: Typically, local storage is designed for small datasets (e.g., key-value pairs) and comes with a storage limit, which varies depending on the platform and specific storage technology being used.
	•	Persistent: Data stored locally remains available across app restarts and reboots (unless explicitly cleared).
	•	No synchronization: Local storage is not inherently synchronized between multiple devices. For multi-device usage, it usually needs to be combined with cloud storage solutions.
	•	Security: Sensitive information stored locally may require encryption, as it can be more vulnerable to unauthorized access if not properly secured.

 React Native:
	•	AsyncStorage: AsyncStorage is a key-value storage system that allows developers to persist data across sessions in React Native apps. It’s ideal for storing smaller pieces of information such as tokens, preferences, or other app data. However, it is limited in size (typically 6MB on iOS, and Android may vary depending on implementation).
	•	MMKV: A newer, more efficient alternative to AsyncStorage, MMKV is optimized for performance, especially on Android. It provides faster read/write operations and supports structured data storage (such as objects) along with key-value pairs. MMKV is backed by Tencent and is designed for larger, more complex data structures than AsyncStorage.
Usage Example (AsyncStorage in React Native)

Android/iOS:
	•	SharedPreferences (Android): SharedPreferences is a lightweight key-value store used to persist data such as user settings and preferences. It is suitable for small, simple data that does not require a complex data model. It operates in a similar fashion to a dictionary, where values are stored against a key. The data remains persistent across app sessions unless explicitly cleared.

 UserDefaults (iOS): The iOS equivalent of SharedPreferences, UserDefaults is used for storing simple data types like strings, integers, and booleans. This system is frequently used for storing user settings or application state information that should persist across app launches.

 Web:
	•	localStorage: localStorage is a key-value storage system built into browsers, allowing developers to persist data across sessions. Data stored in localStorage has no expiration time and remains available even after the user closes and reopens the browser. It is typically limited to 5-10MB, depending on the browser.
	•	sessionStorage: Similar to localStorage, sessionStorage allows the storage of key-value data. However, data stored in sessionStorage is cleared when the page session ends (i.e., when the browser or tab is closed). This is ideal for temporary storage that only needs to exist during a user’s session.
Usage Example (localStorage in JavaScript).


2. Cloud Storage

Overview:

Cloud storage refers to the practice of storing digital data on remote servers that are managed and maintained by third-party providers. These servers are accessed over the internet (the “cloud”) rather than storing data on a local device or server. Cloud storage enables developers to store and manage larger files (such as images, videos, documents, etc.) in a scalable and secure way. Since the data is stored remotely, it is accessible from any device, ensuring that users can retrieve their data from multiple devices seamlessly. Cloud storage solutions are especially useful for handling large files, providing backup, enabling synchronization across devices, and scaling with growing user demands.

Popular Cloud Storage Platforms:

	•	Firebase Storage (by Google Cloud): Firebase Storage is a cloud-based solution specifically designed for handling large files like images, audio, and videos. It integrates well with Firebase’s other services, including its real-time database and user authentication. Firebase automatically scales storage as your user base grows and handles file uploading/downloading with security rules.
	•	AWS S3 (Amazon Web Services Simple Storage Service): AWS S3 is a highly scalable object storage service that can store any type of data (documents, images, videos, backups, etc.). It is designed for durability, with multiple copies of the data stored across data centers. AWS S3 also integrates with a wide range of AWS services and offers features like lifecycle policies, access control, and encryption.
	•	Google Cloud Storage: Similar to AWS S3, Google Cloud Storage is a powerful and scalable object storage service that allows you to store unstructured data. It provides global access, data redundancy, encryption, and flexible data management options. It also integrates easily with other Google Cloud services, making it ideal for large-scale applications.

Key Features:

	•	Accessibility Across Devices: Cloud storage enables data to be accessed from any device connected to the internet, ensuring cross-device compatibility. This makes it ideal for apps that require user data (such as profile images, videos, or documents) to be available on different devices.
	•	Scalability: Cloud storage solutions automatically scale to accommodate growing data. This means that as your user base increases or users upload larger amounts of data (like media files), the cloud storage can handle the growth without performance issues.
	•	Security: Cloud platforms offer built-in security features like encryption (both in transit and at rest), multi-factor authentication, and fine-grained access controls. These help to protect sensitive data while still ensuring that users can access it when needed.
	•	Redundancy and Backup: Cloud storage typically includes automatic redundancy, meaning that data is replicated across multiple data centers. This provides backup and ensures that the data remains available even in the event of hardware failure or other issues.

Example:

	•	Firebase Storage: If you’re developing a mobile app where users can upload and share images or videos, Firebase Storage is a good option. It simplifies the process of uploading and downloading media files and offers built-in integration with Firebase Authentication, making it easier to restrict access to files based on user permissions. Additionally, Firebase offers tools to compress and resize images automatically before uploading, which can optimize storage and improve performance.
	•	AWS S3: AWS S3 is suitable for apps that need to store a large number of files, such as a cloud-based file 
 
 
 3. Database Storage (Local or Remote)

Overview:

Databases are essential for storing structured data, which is organized into tables, rows, and columns. They allow for more complex querying and management of data compared to simple key-value storage. Database storage can be implemented in two ways: local databases for offline use or remote databases for cloud-based storage and syncing across devices. Local databases are stored on the user’s device, providing quick access to data without requiring an internet connection. Remote databases are hosted on cloud servers, enabling real-time data synchronization across multiple devices and users.

Key Features:

	•	Structured Data: Databases allow you to store and manage complex, structured data efficiently, with relationships between different types of data (e.g., users, posts, orders).
	•	Advanced Querying: Databases provide querying capabilities using languages like SQL, allowing you to retrieve specific data based on conditions, filter data, or join tables.
	•	Transactions: Many databases support transactions, which ensure that operations like adding, updating, or deleting data are executed in a reliable and consistent manner.
	•	Syncing Across Devices: With remote databases, you can synchronize data between multiple users and devices, ensuring that everyone has access to up-to-date information.
	•	Offline Capability: Local databases enable apps to store and manage data even when they are offline. This is ideal for mobile apps that need to function without constant connectivity.

Examples:

	•	Local Databases:
	•	SQLite: SQLite is a lightweight, self-contained database engine commonly used in mobile and embedded applications. It is a good choice for mobile apps that need to store structured data locally and operate offline. SQLite databases are stored as files on the user’s device, making them quick to access without needing an internet connection.
	•	Room (Android): Room is a persistence library built on top of SQLite, specifically designed for Android. It simplifies database management by offering an abstraction layer over SQLite, making it easier to query data, manage relationships between entities, and perform database migrations.
	•	Remote Databases:
	•	Firebase Firestore: Firestore is a NoSQL cloud-based database provided by Google Firebase. It is a real-time database that allows you to store and sync data across multiple users and devices, with changes reflected instantly. Firestore is ideal for applications that need real-time collaboration or instant updates, like chat apps or collaborative editing tools.
	•	MySQL: MySQL is a widely-used open-source relational database management system. It is ideal for storing structured data in tables and provides advanced querying and management capabilities using SQL. MySQL is a great choice for web and cloud applications that require complex data storage and querying.
	•	PostgreSQL: PostgreSQL is a powerful, open-source relational database system known for its robustness and extensibility. It supports both SQL and JSON for querying and storing structured and semi-structured data, making it suitable for a variety of use cases, from simple web apps to large-scale enterprise systems.
storage system or backup solution. For instance, if you’re building a video streaming platform, AWS S3 can store video files and serve them to users around the world with high availability and low latency. AWS offers options like S3 Glacier for long-term archival storage, which is cheaper than standard S3 storage.


4. File-Based Storage:

Overview:

File-based storage involves storing unstructured data, such as images, audio files, documents, or videos, either locally on the user’s device or uploading them to a server for remote access. Unlike databases, which handle structured data, file-based storage is primarily used for handling larger and unstructured files that don’t fit neatly into tables or key-value pairs.

In mobile apps, file-based storage is commonly used for media-heavy applications where users need to save and retrieve files, such as in photo or audio recording apps. Additionally, file-based storage can be combined with cloud services to enable users to upload, access, and share files across devices, making it suitable for scenarios like cloud drives, media libraries, or content-sharing applications.

Key Features:

	•	Unstructured Data: Best suited for storing large and unstructured data like images, audio files, or documents.
	•	File Access: The app can easily read from or write to the file system for local access or use cloud storage services for remote access.
	•	Cloud Integration: Files can be uploaded to cloud services for backup, sharing, or cross-device access.

Examples:

	•	Local File Storage:
	•	React Native (expo-file-system or react-native-fs): These libraries allow React Native apps to interact with the file system on both Android and iOS, providing methods to save, retrieve, and delete files locally on the device. This is suitable for apps that need offline access to media, such as photo or video editors, or apps that manage files like documents or audio recordings.
	•	Remote File Storage:
	•	Cloud Storage with AWS S3: Files can be uploaded to Amazon S3, a cloud-based file storage service. This allows users to access their files from any device and ensures that the data is backed up and available even if the user’s device is lost or damaged.
	•	Google Cloud Storage or Firebase Storage: Firebase provides a simple and scalable way to store and retrieve files in the cloud. This is ideal for apps that need to sync media across multiple devices or share files among users, such as social media or messaging apps.
