import maskTaxvat from "../handler/mask-taxvat.js";

export default class InputTaxvat extends HTMLInputElement {

  static get observedAttributes(){
    return ['maxlength']
  }

  constructor(){
    super();

    this.oninput = (evt) => {
      this.value = maskTaxvat(this.value);
      var errorMsg = ""
      
      /**
       * If there's a patternMismatch define
       * the classes to perent and current element
       * otherwise removes it
       */
      if(this.validity.patternMismatch){
        evt.target.parentNode.classList.add("on-error");
        evt.target.classList.add("on-error");
        var errorMsg = "Ops 😮, acho que o CPF está incompleto."
      } else {
        evt.target.parentNode.classList.remove("on-error");
        evt.target.classList.remove("on-error");
      }

      window.dispatchEvent(new CustomEvent("input:error", {
        detail: {
          el: this.getAttribute("is"),
          value:errorMsg
        }
      }));
    }

  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if (newVal != "14") {
      this.setAttribute('maxlength', '14');
    }
  }

}