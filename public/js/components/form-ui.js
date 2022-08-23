export default class FormUI extends HTMLFormElement {
  constructor(){
    super();

    const shadowRoot = this.attachShadow({mode: "open"})
    shadowRoot.innerHTML = `
      <>
    `

  }
  connectedCallback(){

  }
}