export default class FormUI extends HTMLFormElement {
  constructor(){
    super();

    const buttonAction = this.elements.action;

    this.onsubmit = (evt) => {
      evt.preventDefault();

      var { cel, cpf, email } = evt.currentTarget.elements;
      console.log({celular: cel.value,cpf: cpf.value,email: email.value});

    }

  }
  connectedCallback(){

  }
}