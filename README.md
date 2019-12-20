# ZENIKA ACADEMY INTRANET

This website is developed to serve as an internal solution for Zenika Academy students and teachers accross the world (of Zenika).

## START PROJECT
Go into the client directory. Use npm run build and then npm run export to generate static files.
Take the static files from the newly created out directory and copy them to the server/static directory.
Then, from the server, run npm run start to start the server and serve the static files.

You can then access the app from localhost:3333 and all the api routes from localhost:3333/api/****

## TECHNOLOGIES
Designed with nextJS, you can find the pages in ./pages. They are composed of : 
- layouts (from ./layouts) which are made from global components
- specific components to personalize each page

## STYLING
Each component is with its own sass stylesheet.
Component names are kebab-cased to follow bootstrap's classes configuration
