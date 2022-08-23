import mask from "../handler/mask-tel.js";

export default class InputTel extends HTMLInputElement {

  static get observedAttributes(){
    return ['maxlength']
  }

  constructor(){
    super()

    this.onkeyup = (evt) => {
      var val = this.value;
      this.value = mask(this.value);
    }

  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if (newVal != "15") {
      this.setAttribute('maxlength', '15');
    }
  }

}