# form-ui-ex
A semi functional form with Design System

## Challenge:
1. Create a form with three fields with mask on two of them (celular and CPF) :heavy_check_mark:
1. Only after the fulfillment of the fields the form can be submitted :heavy_check_mark:

*Read this in other language: [English](README.en.md), [Portuguese](/README.md).*


## Index

- [Server](#server)
- [Setup](#setup)
- [Pages](#pages)
- [Style](#style)
  - [Design System](#design-system)
  - [Stylus](#stylus)
  - [Typography](#typography)
  - [SVGs](#svgs)
- [Implementation](#implementation)
  - [Index](#index)
  - [Components](#components)
  - [Handlers](#handlers)

## Server

Located in the root of the project the [`app.js`](/app.js) file uses `Node` and `Express` to map the routes and static responses. 

## Setup

To run the application you need [`Node.js`](https://nodejs.org/en/) installed in your machine. After the install you can run `node app.js` to see the application. A success message should appear in the terminal:

```
Server de pé em http://localhost:3000
```

## Pages

The project uses only one `html` page located in [`public/index.html`](/public/index.html). There all the components and scripts give life to `form-ui`.

## Style

Form-ui uses components with the design based on a *Design System*.

#### Design System

Bellow is the project design and every component:

![Typography, Colors e Spacing](/public/media/DS-values.png)
***
![Elements and States](/public/media/DS-elements-state.png)
***
![Breakpoints](/public/media/DS-breaking-points.png)

#### Stylus

As a preprocessor it was used [Stylus](https://stylus-docs.netlify.app/). The final archive is build in `/public/css` and the source is in `/public/styl`.

The folders and files located in `/public/styl` were organized as follows:

1. The root has the source file - **[`main.styl`](/public/styl/main.styl)** responsible for getting the other files - the reset file - **[`reset.styl`](/public/styl/reset.styl)** responsible for resetting the elements - and the theme file - **[`theme.styl`](/public/styl/theme.styl)** responsible for styling the default elements of the project.
1. On the **`/components`** folder are located the components files that consist in elements with their own style unaware of the context.
1. As for the **`/variables`** folder are the *mixins* and *variables* used in the project.

To build the file [`main.css`](./public/css/main.css) just run `npm run css`.

#### Typography

The typo used in the project was [Montserrat](https://fonts.google.com/specimen/Montserrat) hosted by Google.
It is called on the [`index.html`](/public/index.html) file using `<link>` from [fonts.google.com](https://fonts.google.com/specimen/Montserrat).

#### Svgs

An logo was used on the project as an `svg` directly were it has to be on the `html`:

```
<div class="page-wrapper">
    <div class="content">
      <div class="heading-logo">
        <svg width="166" height="52" viewBox="0 0 166 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        ...  
        </svg>          
      </div>
    </div>
</div>
```


## Implementation

For the site to be dynamic it was used pure [Custom Elements](https://web.dev/custom-elements-v1/) without any framework.

#### Index

On the `index.html` the [`index.js`](./public/js/index.js) file is loaded as module:

```
<script defer type="module" src="./js/index.js"></script>
```

#### Componentes

Each dynamic element has its own file located in `public/js/components/`

* [ErrorMessages](/public/js/components/error-message.js)
* [FormUi](/public/js/components/form-ui.js)
* [InputEmail](/public/js/components/input-email.js)
* [InputNumber](/public/js/components/input-number.js)
* [InputTaxvat](/public/js/components/input-taxvat.js)

They are organized on the page as follows:

![Components](/public/media/Components.png)

#### Handlers

Handlers are available in `public/js/handler` and are responsible for masking the *Celular* and *Cpf* using *Regex*.

##### mask-taxvat

Responsible for returning a string that has no digits in the format of `123.456.789-01`:

```
const maskTaxvat = (val) => {
  val = val.replace(/\D/g,"");
  val = val.replace(/(\d{3})(\d)/,"$1.$2");
  val = val.replace(/(\d{3})(\d)/,"$1.$2");
  val = val.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return val;
}
```

##### mask-tel

Also responsible for returning a string that has no digits but in the format of `(xx) xxxxx-xxxx`:

```
const maskPhone = (val)=>{
  val = val.replace(/\D/g,"");
  val = val.replace(/^(\d{2})(\d)/,"($1) $2");
  val = val.replace(/(\d)(\d{4})$/,"$1-$2");
  return val;
}
```