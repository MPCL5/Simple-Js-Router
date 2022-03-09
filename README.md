## Description
I recently competed in [Digikala](https://www.digikala.com/) Front-End contest. I really interested in one of the challenges, A simple JS CSR (Client Side Rendering) router. I bring my solution here and think it is useful for ones who need just a simple router for their CSR web application.

## Features
- URL Params
- URL States
- 404 page support
- Compatible with `<a/>` tag
- Routing without refreshing window

## Usage
The main file is `clientRouter`. 
You have to import `initializeRouter` function form this file and pass your routes and container as first and second argument.
container is where your content will render and also should have HTMLElement type.
Your routes must be an object that the routes are keys and values are function that accept path variables as arguments and returns the content. <br />
For example: <br/>
```javascript
const routes = {
    "/": productList,
    "/product/:id": (id) => productPage(id),
    "/product/:id/comments/:ueser": (id, user) => productComments(id, user),
    "/about": aboutPage,
    404: notFoundPage,
};

const container = document.querySelector("#content");

initializeRouter(routes, container);
```
If you want to use anchor tags(`<a/>`) with routers functionality you have to pass route address in `data-href` attribute instead of `href`. <br />
For Example:
```html
<a data-href="/">Home</a>
```

## Packages
Nothing needed for deployment.
But for testing these packages are included:
- cypress
- start-server-and-test
- vite

## TODO
- [ ] Refactor to the modernest version of JS.
- [ ] Add more examples.
- [ ] Add capability for pushing custom state.
