export default class InputEmail extends HTMLInputElement {
  constructor(){
    super()

    this.oninput = (evt) => {
      var errorMsg = ""
      
      if(this.validity.patternMismatch){
        evt.target.parentNode.classList.add("on-error");
        evt.target.classList.add("on-error");
        var errorMsg = "Haha, que email engraçado 🤭"
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
}