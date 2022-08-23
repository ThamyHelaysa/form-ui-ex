import maskPhone from "../handler/mask-tel.js";

export default class InputTel extends HTMLInputElement {

  static get observedAttributes(){
    return ['maxlength']
  }

  constructor(){
    super()

    this.onkeyup = (evt) => {
      this.value = maskPhone(this.value);
    }

  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if (newVal != "15") {
      this.setAttribute('maxlength', '15');
    }
  }

}