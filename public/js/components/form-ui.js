export default class FormUI extends HTMLFormElement {
  constructor(){
    super();

    this.buttonAction = this.elements.action;
    
    this.onsubmit = (evt) => {
      evt.preventDefault();

      var { cel, cpf, email } = evt.currentTarget.elements;
      console.log({celular: cel.value,cpf: cpf.value,email: email.value});

    }

  }
  connectedCallback(){

    var  { cel, cpf, email } = this.elements
    var formInputs = [ cel, cpf, email ]
    formInputs.forEach((input)=>{
      input.addEventListener('keyup', (ev)=>{
        if(this.checkValidity()){
          this.buttonAction.removeAttribute("disabled");
        } else {
          this.buttonAction.setAttribute("disabled", "");
        }
      })
    })

  }

}