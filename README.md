# ga_project_2 - I Got News For Ya!
![supernova gif](https://i.imgur.com/7qE5zF6.gif)

# Description
I Got News For Ya! is to be a news aggregator with an emphasis on an extra tab for a current issue (i.e. COVID-19) where news on that subject will be gathered. Users will be presented with a general set of headlines and should have the opportunity to choose the source from whom they read. 

# Wireframe
![Mobile and Tablet Wireframe](https://i.imgur.com/teKW9Tf.jpg)
![Desktop Wireframe](https://i.imgur.com/BY7QRce.jpg)

# Component Hierarchy

- Page (Class)
  - Header (Class)
    - Subject Filter (Functional)
    - Source Filter (Functional)
  - Article List (Funtional)
    - Article Link (Functional)
      - Article (Functional)

# API

News API - https://newsapi.org/docs

# MVP

My P2 will be a working interactive React app with a thoroughly developed README. It will have at least 6 seperate rendered components and will use React Router to navigate between different parts. Functional and Class React components will be used appropriately and data will be taken from the News API. Global style sheets will be used along with CSS Grid. It will be designed responsively for mobile, tablet, and desktop. I will lint as appropriate and deploy via Surge. 5 Storybook Components will be created and used.

# Post MVP

Once I've hit MVP, I would like to add functionality by way of comments and like buttons. I will also set up tests in Jest. I would like to implement a toggled night mode with a blue filter.

# SWOT Analysis

# Code Showcase
I found a code snippet on filtering at the following website: https://levelup.gitconnected.com/filter-unique-in-javascript-226007247354
The "internet's answer" was what I went with. It goes as follows:

const unique = (x, i, a) => a.indexOf(x) == i;
myArray.filter(unique);

# Netlify Link
https://dazzling-wright-a379f7.netlify.com/