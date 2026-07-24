# Week 7 – PHP

## Learning Activities & Resources

This week I learned how to create a small dynamic website using PHP. I developed an original **Student Grade Calculator** that accepts a student’s name and subject marks, calculates the average, and displays the final grade.

I focused on understanding the main PHP features required for the practical, including `echo`, conditional statements, loops, functions with parameters, reusable page sections using `include`, and processing HTML forms with PHP.

As part of the practical, I also explored **The Advice Shop** example project provided by the subject. Although I built my own Student Grade Calculator instead of modifying The Advice Shop, reviewing its source code helped me understand how a larger PHP project is organised. I learned how reusable files such as `header.php` and `footer.php` are shared across multiple pages, how navigation is managed consistently, and how PHP and HTML work together to create dynamic web pages. Studying this project gave me a better understanding of good coding practices and project structure before applying similar ideas in my own application.

### Resources used

- The Advice Shop (JCU Example Project)  
  https://github.com/lindsaymarkward/theadviceshop

- PHP Manual – Language Reference  
  https://www.php.net/manual/en/langref.php

- PHP Manual – echo  
  https://www.php.net/manual/en/function.echo.php

- PHP Manual – Control Structures  
  https://www.php.net/manual/en/language.control-structures.php

- PHP Manual – Functions  
  https://www.php.net/manual/en/language.functions.php

- PHP Manual – include  
  https://www.php.net/manual/en/function.include.php

- W3Schools PHP Tutorial  
  https://www.w3schools.com/php/

---

## Estimated Hours of Explicit Learning Activity

Approximately **8 hours**.

---

## Content Insights

The most important concept I learned this week was how PHP can process user input and generate different HTML output depending on the data entered. In my Student Grade Calculator, the form collects the student’s name and marks for several subjects. PHP then calculates the average and uses conditional statements to decide whether the final grade is A, B, C, D, or F.

I learned that `echo` can output more than simple text. It can also generate headings, paragraphs, form elements, table rows, links, and other HTML. This helped me understand how PHP and HTML can work together to produce dynamic web pages.

I also practised three different types of repetition. I used a `foreach` loop to display subjects stored in an array, a `for` loop to process and validate subject marks, and a `while` loop to display the grade scale. Although these loops can sometimes produce similar results, each one is useful in different situations. A `foreach` loop is convenient when working through every value in an array, while a `for` loop is useful when the number of repetitions is known.

Functions helped make the project more organised. Instead of placing all the calculation logic inside one page, I created separate functions with parameters to calculate the average, determine the grade, validate marks, and produce a result message. This reduced repeated code and made the program easier to read and maintain.

Another useful concept was using `include` for shared website sections. The calculator page, results page, and subjects page all use the same `header.php` and `footer.php`. This means I only need to change the navigation or footer in one file instead of editing every page separately. This demonstrated how reusable components improve consistency and maintainability.

Reviewing **The Advice Shop** reinforced these concepts because it uses the same modular approach in a larger application. I observed how common page elements are reused across the website and how separating code into smaller files makes the project easier to manage. Comparing my own project with The Advice Shop helped me understand why modular design is considered a good software development practice.

---

## Career / Employability / Learning Insights

Before this practical, most of my PHP experience came from working with WordPress and Joomla, where much of the server-side processing was handled by the CMS. Building the Student Grade Calculator helped me understand more clearly what PHP is doing behind the interface, including receiving form data, processing values, making decisions, and generating a result page.

This practical also showed me why employers value basic programming fundamentals even when developers use frameworks or content management systems. Concepts such as conditional logic, loops, reusable functions, input validation, and modular files are not limited to PHP. The same ideas appear in many programming languages and backend development roles.

Reviewing **The Advice Shop** also gave me insight into how professional PHP applications are organised. Even though it is an educational example, it demonstrates software engineering practices such as reusable components, modular programming, and consistent project structure. These are skills that employers expect developers to understand because they make projects easier to maintain, extend, and collaborate on as teams grow.

I found that learning one PHP feature at a time and then applying it immediately was more effective than trying to write the whole website at once. I first tested the form, then added the average calculation, then the grade conditions, and finally the loops and shared header and footer. This made debugging easier because I could identify which section caused an error.

I also experienced a problem where the browser continued showing an older CSS design. I initially thought the new code was incorrect, but the issue was related to the file location and browser caching. This reminded me to check whether I am editing the correct file inside the MAMP `htdocs` folder before changing the code repeatedly. It also reinforced the value of testing files directly through the browser.

Overall, this practical increased my confidence with PHP because I created a complete working program rather than only reading examples. By combining what I learned from building my own Student Grade Calculator with ideas gained from studying **The Advice Shop**, I now have a better understanding of how PHP applications are designed, organised, and maintained. These experiences have given me a stronger foundation for developing more complex dynamic websites in future subjects and professional projects.
