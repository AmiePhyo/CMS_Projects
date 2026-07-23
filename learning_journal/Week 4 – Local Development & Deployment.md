# Week 4 – Local Development & Deployment

## Learning Activities & Resources

This week I learned how to build a dynamic website using PHP and MySQL in a local development environment. I set up MAMP on macOS, connected PHP to a MySQL database using PDO, and used phpMyAdmin to manage the database. I also learned how CRUD (Create, Read, Update, Delete) operations work by developing an Internship Manager application.

**Resources used:**

- PHP Manual – PDO
  https://www.php.net/manual/en/book.pdo.php

- PHP Manual – PDO MySQL
  https://www.php.net/manual/en/ref.pdo-mysql.php

- MAMP Documentation
  https://www.mamp.info/en/documentation/

- phpMyAdmin Documentation
  https://docs.phpmyadmin.net/

- MySQL Documentation
  https://dev.mysql.com/doc/

- PHP CRUD Tutorial (YouTube)
  https://www.youtube.com/watch?v=NqP0-UkIQS4

---

## Estimated Hours of Explicit Learning Activity

Approximately **9 hours**.

---

## Content Insights

The most important concept I learned this week was the difference between a static website and a dynamic website. Unlike my previous CMS projects, this website stores information in a MySQL database instead of hardcoding it into HTML pages. PHP retrieves the data from the database whenever the page loads, allowing users to add, edit, and delete internship records without changing the source code. This separation between application logic and data makes the website more maintainable and scalable as the amount of information grows.

I also learned how the components of a local development environment work together. MAMP provides the Apache web server and MySQL database, PHP processes the server-side code, and phpMyAdmin allows the database to be managed through a graphical interface. Understanding how these technologies interact gave me a much clearer understanding of how dynamic web applications operate behind the scenes.

Another valuable lesson was learning how to troubleshoot configuration problems. Initially, my website could not connect to the database because I was editing a copy of the project outside MAMP's `htdocs` folder. After identifying the correct project location and updating the database connection settings, the website worked successfully. This experience showed me that development environment configuration is just as important as writing correct code.

---

## Career / Employability / Learning Insights

Developing this project gave me a much better understanding of backend web development compared with using a CMS alone. While WordPress and Joomla allow websites to be built quickly, creating a dynamic application using PHP and MySQL helped me understand how data is processed, stored, and retrieved on the server. This practical made concepts such as database connectivity and CRUD operations much clearer because I implemented them myself instead of relying on existing plugins.

While researching PHP and MySQL, I found that these technologies continue to appear in many web developer and full-stack developer job advertisements, particularly for maintaining business systems and content management platforms. Although many companies now use modern frameworks, employers still expect developers to understand databases and server-side programming fundamentals. Learning these core concepts will make it easier for me to adapt to other backend technologies in the future.

This week also changed the way I approach debugging. Instead of assuming my code was incorrect, I learned to check my environment and configuration step by step. Discovering that my project was running from the wrong folder taught me that small configuration mistakes can cause major problems. Solving the issue myself increased my confidence and reinforced the importance of debugging methodically rather than changing multiple things at once.
