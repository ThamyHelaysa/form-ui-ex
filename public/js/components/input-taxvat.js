import maskTaxvat from "../handler/mask-taxvat.js";

export default class InputTaxvat extends HTMLInputElement {

  static get observedAttributes(){
    return ['maxlength']
  }

  constructor(){
    super();

    this.onkeyup = (evt) => {
      this.value = maskTaxvat(this.value);
    }

  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if (newVal != "14") {
      this.setAttribute('maxlength', '14');
    }
  }

}