# Week 5 – WordPress Child Themes

## Learning Activities & Resources

This week I learned how to create a **WordPress child theme** based on the **Twenty Twenty-Four** parent theme. The purpose of the practical was to customise my existing **InternPilot** website without directly modifying the parent theme files.

I created a child theme by creating the required `style.css` and `functions.php` files. I learned how to specify the parent theme using the `Template: twentytwentyfour` field and how to enqueue the child stylesheet using PHP.

After activating the child theme, I customised the website by editing only the child theme stylesheet. The visible customisations included:

- Changing the website background colour.
- Styling the header and navigation bar.
- Customising the site title.
- Changing the heading colours.
- Adding navigation hover effects.
- Styling buttons with rounded corners and shadows.
- Adding rounded corners and shadows to images.
- Customising the footer colours.

During the practical, I also experienced an issue where the homepage layout looked different after activating the child theme. Through troubleshooting, I learned that a child theme controls the website's appearance through CSS, while page layouts are controlled by WordPress templates and Site Editor customisations. This helped me better understand the relationship between styling and templates in WordPress.

### Resources Used

- WordPress Developer Documentation – Child Themes  
  https://developer.wordpress.org/themes/advanced-topics/child-themes/

- WordPress Support Documentation  
  https://wordpress.org/support/

---

## Estimated Hours of Explicit Learning Activity

Approximately **5 hours**.

---

## Content Insights

The most important concept I learned this week was how **WordPress child themes** allow developers to customise a website while keeping the parent theme unchanged. This approach protects customisations when the parent theme is updated and follows WordPress development best practices.

I also learned the difference between **CSS** and **WordPress templates**. CSS controls the visual appearance of the website, such as colours, fonts, buttons, and spacing, while templates determine the page structure and layout. Understanding this difference helped me troubleshoot layout issues more effectively during the practical.

Creating a child theme also improved my understanding of WordPress theme development. Instead of modifying the original Twenty Twenty-Four theme, I was able to keep all customisations separate, making the website easier to maintain and update in the future.

---

## Career / Employability / Learning Insights

Learning how to create a child theme is an important skill for WordPress developers because it allows websites to be customised safely without affecting the original theme. This approach is widely used in industry to simplify maintenance and ensure that future theme updates do not overwrite custom code.

This practical also strengthened my problem-solving skills. While troubleshooting the child theme, I learned to distinguish between styling issues and template-related issues, which improved my confidence in debugging WordPress websites. These skills will be valuable when developing or maintaining professional WordPress websites in future projects.
