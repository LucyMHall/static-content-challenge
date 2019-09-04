# README for Static Content Challenge

## Task

Create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

## Initial Thoughts
  - How does the web application framework express work, including routing?
  - Can I use the query string from the URL to make finding the correct markdown folder to get index.md out of easier/ more automated, to allow for easier expansion of app?
  - How do you combine a markdown file into a specific element of a html file?
  - How can you do the above dynamically and non-permanently depending on the url query string?
  - How do you do capybara-like feature tests on a node.js app - jest only offers snapshot testing - is there a better way?
  - How do you test HTTP status codes?

## How I am ensuring high code quality
- using eslinter
-

## Testing

* [x] requests to valid URLs return a 200 HTTP status code
* [ ] requests to valid URLS return a body that contains the HTML generated from the relevant `index.md` markdown file
* [x] requests to URLs that do not match content folders return a 404 HTTP status code
