import maskPhone from "../handler/mask-tel.js";

export default class InputTel extends HTMLInputElement {

  static get observedAttributes(){
    return ['maxlength']
  }

  constructor(){
    super()

    this.oninput = (evt) => {
      this.value = maskPhone(this.value);
      var errorMsg = ""
      
      /**
       * If there's a patternMismatch define
       * the classes to perent and current element
       * otherwise removes it
       */
      if(this.validity.patternMismatch){
        evt.target.parentNode.classList.add("on-error");
        evt.target.classList.add("on-error");
        var errorMsg = "Humm, será que ta faltando algum número? 🤔"
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
    if (newVal != "15") {
      this.setAttribute('maxlength', '15');
    }
  }

}