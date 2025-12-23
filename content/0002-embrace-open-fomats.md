---
title: "Embrace the Open Formats"
date: "2025-12-23"
tags: ["open-source", "web"]
image: "/blog/Crystalize.png"
---

This post is a tribute to major open formats that do not require specific software to be created or modified. The open nature of these formats allows various other open and free software to use them, making the internet a more harmonious and sustainable place. Proprietary formats tend to grow in complexity, making it difficult for third-party software to read or even reproduce them correctly. They are also often modified regardless of the community’s wishes, frequently having their protocols changed without any kind of warning, harming an entire ecosystem.

![cristalyzing the knowledge{.float-right}](/blog/Crystalize.png)

Open formats are extremely important because technology evolves aggressively and independently of operating systems. New technologies must be able to support old data and process this information. For that, a well-structured, publicly available syntax is essential so that important data is not lost.

This post is not focused on programming, but rather on the general user and how we often use these formats without even realizing their importance. Many of them you may already know, but there are also newer open formats that promise to greatly reduce future headaches when integrating systems and projects.

I am putting together this list in case you are not familiar with some of these formats and can make better decisions when saving files on your computer or smartphone. By using open formats, you have a greater chance of future compatibility, ensuring access to your information. The formats discussed here refer to formats that allow creation and editing; the respective extensions for publishing are mentioned in each case. File extensions that, despite being open, are supported by only a single piece of software will not be mentioned.

### **TXT**

The first and perhaps most basic of all formats, and probably one of the first contacts a person has with a computer to store notes. It is the most basic way to store information, taking up very little space and being readable with any text editor on any operating system. Created at the beginning of the computing era between the 1960s and 1970s, it is used to store text without formatting or any kind of styling.

### **CSV**

The comma-separated values format allows any application that uses spreadsheets to read it. It usually stores a single spreadsheet. Its first row describes the entire header, followed by all the data for each row sequentially, each represented as a single line. It is widely used due to its small size and its ability to store data in a minimally structured way, making it extensively used for data migration between different spreadsheet applications. Like TXT files, this format does not export styles or functions contained in fields, but rather exports raw data for possible processing in any application. This makes it possible to view the file’s contents using a simple basic text editor.

### **ODT**

The Open Document Text format emerged as a standard for formatted documents and can be opened in most text-editing software. It has all the standard features of text editors while requiring less disk space. It is the best option to avoid being locked into more popular closed formats without losing content. Internally, ODT files track changes, allow comments, and support versioning, making them ideal for collaborative work. When using an editor that supports ODT, you can export it to several other formats for sharing or publishing. It is the ideal replacement for DOC or DOCX formats, which, being closed, change constantly to make it difficult for third-party software to read and format them. When finalizing ODT files, it is common to publish them as EPUB or PDF.

### **PNG**

A format widely used in image management software, it does not use compression, which is why it is preferred when exporting an image for someone else to edit or for storing it for possible future changes. It includes an alpha channel, so PNG images can have transparency. PNG images store pixel data in order, without any type of compression, and do not support layers. As such, they are used to export individual elements of a scene rather than a full composition—this is something we will discuss later with the ORA format. When finalizing work and exporting it for web consumption, many people prefer lighter formats such as JPG when transparency is not needed, or even WEBP, created by Google, which allows minimal information loss while using only a fraction of the original file size.

### **GIF**

Still used on the web today, GIF is an image format that allows animation frames. Initially, the colors used in a GIF file are indexed, meaning it is not necessary to specify the color of each pixel in the animation. However, GIF files can grow absurdly large as the number of colors and frames increases. It is best suited for short animations at small resolutions. Nowadays, formats like WEBP are capable of rendering GIF-like animations at a fraction of the original size, though with some loss, and are therefore used mainly when exporting animations for consumption.

### **ZIP / GZIP**

The primary format when it comes to compressing files or folders. Created in 1989, it is still widely used today to reduce file size, whether for storage or sharing. It has several open and closed variants; its most popular open version, GZIP, is extensively used on the internet to compress blocks of code before they are sent to the browser that will consume the data. Many modern formats use compression when saving data to disk, adding a compression layer on top of the normal data/information layer.

### **XML**

Created by the World Wide Web Consortium in 1996. I mentioned that I would not talk about programming-related formats, but in this case it is necessary. XML data structures are widely used in many other formats and are also the standard for defining formatting structures. They were created to be readable by both humans and machines. The “X” stands for extensibility, meaning that if a data structure does not meet a given need, it can be expanded without much trouble. Some of the following formats use XML in part of their implementation or even entirely. So even if you do not work directly with XML files, this beloved format is part of your daily life and facilitates many background tasks on your computer. If you have used messaging services, configured an application, received a digital invoice, or exported your browser bookmarks to import them later, these structures likely used XML at some point.

### **SVG**

A vector image format based on XML, used to create graphics that can be freely resized without losing quality. It is very common on the web for icons, logos, illustrations, and charts, as it remains sharp at any size and can be edited and animated using CSS and JavaScript. Widely supported by browsers, editors, and tools, its content can be read by screen readers and indexed by search engines. If you need a diagram, chart, logo, or even an animation, SVG often meets that need.

### **KDBX**

A type of extensible database format commonly used for storing passwords, TOTP, and notes. Introduced by the KeePass software in 2008. It is not considered human-readable, but it is consumed by many password and TOTP management applications, many of which support encryption using keys or passwords. It is an essential format for ensuring user security on the web in an era where many services are hacked and user passwords are exposed. Having a password manager with encrypted data is essential to avoid exposure and account theft. The fact that KeePass created this format as an open standard is a major advantage.

### **MD (Markdown)**

Originally created by John Gruber and Aaron Swartz in 2004, Markdown is a format that has gained rapid adoption because it allows rich document formatting with minimal notation. With a simple look at a table of these notations, anyone can create a document according to the rules. Widely used by programmers, it gains more users every day thanks to applications such as `Obsidian`, which was used to write this post, for example. I consider this one of the most important formats today because it makes it easy to build richly formatted documents in a simple text editor, without consuming much space, and allowing them to be elegantly formatted later without losing content. The fact that it is easily readable and understandable even with the notation is another very positive aspect of this innovation.

### **Honorable Mentions**

#### **ORA**

Currently used by only a few illustration and image-editing applications. It adds layers and filters to image files. It was created as an alternative to popular but proprietary formats used by image-editing software. It allows a project edited in one open-source application to be modified in another and returned without information loss. It uses ZIP compression, contains structured XML information, and uses PNG to store data for each layer. Although it is not widely used yet, there is hope that it will be adopted in the future to eliminate dependence on formats like PSD, which are very heavy and not always rendered consistently across applications. Widespread use of the ORA format would give people more tool choices and prevent them from being locked into a single proprietary solution from one company.

#### **Mermaid**

Created by Knut Sveidqvist in 2014, initially as a JavaScript library. Because the Mermaid format uses simplified notation to build complex diagrams, it has seen rapid adoption across different fields. Documents focus more on the structure and relationships between diagram elements, leaving it up to the interface to decide how to render components. This allows users to spend more time focusing on relationships and less time adjusting diagrams to look harmonious on screen, since Mermaid’s rendering engine handles that automatically.

### **Conclusion**

Formats with these characteristics allow you to migrate between operating systems without losing the ability to edit your files. They give you more freedom to experiment with new tools that handle the same file types. They even allow you to create your own tool to handle a specific file type in the way you see fit. With more options, we have more freedom.

### **References**

[Self-Guarantee](https://stephango.com/self-guarantee) - Steph Ango's perspective on creating self-guaranteeing systems and data ownership.

[File over App](https://stephango.com/file-over-app) - Steph Ango's philosophy on prioritizing file formats over proprietary applications.

[My TODO.TXT Journey](https://www.al3rez.com/todo-txt-journey) - Personal exploration of using the TODO.TXT format for task management.