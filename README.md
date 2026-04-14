# Todo Card – HNG Stage 0

### The challenge

The goal of this project was to build a Todo Card UI component that:

* Displays task details clearly
* Handles dynamic data like time remaining
* Supports user interaction (checkbox, edit, delete)
* Meets accessibility and testing requirements

Key requirements:

* Priority: Low / Medium / High
* Status: Pending / Done
* Dynamic time remaining calculation
* Accessible checkbox (keyboard + screen reader)
* Proper use of `data-testid` for testing

---

### Screenshot


![alt text](<Screenshot 2026-04-15 002521.png>)


### Links

* Solution URL: (https://github.com/GodwinOkon112/HNG-todo-card)

* Live Site URL: https://hng-todo-card-ruddy.vercel.app/


## My process

### Built with

* HTML5: Semantic structure
* CSS3: Styling and layout
* JavaScript (Vanilla): Logic and interactivity
* Accessibility: `aria-*` attributes
* DOM Manipulation



### What I learned

This project helped me understand how to properly structure UI logic and interactions.

Key takeaways:

* State handling without frameworks:
  I learned how to manually manage UI state using JavaScript (e.g., checkbox toggling status).

* Date calculations:
  I implemented logic to calculate time remaining using:

  ```js
  const diff = dueDate - new Date();
  ```

* Conditional rendering logic:
  Displaying:

  * "Due in X days"
  * "Due tomorrow"
  * "Due today"
  * "Overdue"

* DOM manipulation:
  Updating UI dynamically:

  * Changing status text and color
  * Adding line-through on completion

* Accessibility matters:
  Making the checkbox usable via keyboard and screen readers


### Continued development

Things I plan to improve:

* Add real edit functionality (form or modal)
* Store todos using Local Storage
* Support multiple todo cards
* Improve UI/UX with animations
* Convert this into a React / Next.js component


### Useful resources

* MDN Web Docs: DOM manipulation and Date object
* JavaScript Date Guide
* Accessibility (ARIA) documentation


### AI Collaboration

AI helped me:

* Structure the JavaScript logic clearly
* Improve code readability and organization
* Generate a clean and professional README
* Understand better ways to handle UI state


## Author

* Name: Godwin Okon
* GitHub: https://github.com/GodwinOkon112/



## Acknowledgments

* HNG Internship program for the project structure
* Online documentation and resources that guided implementation
* AI tools that assisted with explanations and improvements

