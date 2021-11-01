# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [](https://github.com/fatimalvcruz/article-preview-challenge)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Native JavaScript


### What I learned

In this project I learned how important it is to define a good structure in HTML in the first place, as it can help you to apply the style more easily later. I used the mobile-first strategy and applied different styles to the classes, I also used the specific images for this size. After that I used media@ to change some classes and images and to make my project responsive. The size I used with @media was a minimum width of 972px.


```css 
@media all and (mind-width 972){}
```
I created a card structure in HTML and a header a body and footer for each elements of the card.

```html
  <div class="card">
```

In the mobile view, the structure is vertical, so the different elements are placed one on top of the other. I calculated the width of the card, and placed it in the center of the screen.
```css

.card {
    width: 88%;
    min-width: 330px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: white;
    position: relative;
    top: 75px;
    overflow: hidden;
   
}
```
For the footer I used inline-block, since there were different images placed online, and two images with a round background, so I used overflow: hidden;

```css
.card .footer .avatar-container {
    display: inline-block;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 25px;
    margin-right: 15px;
}
```
In desktop view, items are laid out horizontally, I used float to ubicated into the card. 
```css
 .card .card-header {
     width: 287px;
     float: left;
     margin-bottom: 0px; 
     position: relative; 
     margin-right: 45px;
}
```

The second footer is different and when is unfold it's located over the main footer, I use flex to set it up.

```css

.footer.active .footer2{  
    opacity: .9;
    display: flex;
    height: 60px;
    width: 270px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    margin-top: -148px;
    overflow: visible;
    position: relative;
    right: -169px;
}
```

To create the triangular shape below the footer, I created a new layer with: before.
```css
.footer.active .footer2:before {

    
    border: 25px solid hsl(217, 19%, 35%);
    content: '';
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    position: absolute;
    bottom: -44px;
    right: 100px;
    transform: rotate(360deg);
} 
```

For active the second footer I used native javascript  applying “for”  to cycle through all buttoms, then the function addEventListener with click event to active the toggle and this way show the second footter and to hide first.

```js
const button = document.querySelectorAll(".circle-icono");



for(i=0; i<button.length ; i++){
    button[i].addEventListener('click',()=> { 
    document.querySelector(".footer").classList.toggle("active"); 

    })
 }

