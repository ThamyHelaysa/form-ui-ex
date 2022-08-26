import FormUI from "./components/form-ui.js";
import InputTel from "./components/input-number.js";
import InputTaxvat from "./components/input-taxvat.js";
import InputEmail from "./components/input-email.js";
import ErrorMessage from "./components/error-message.js";

/**
 * Define custom constructor
 * @param {String} str Element tag name
 * @param {CustomElementConstructor} el Element
 * @param {ElementDefinitionOptions | undefined} obj Element HTML type
 * @returns Define function
 */
 function defineCustomElements(str, el, obj){
  // Define elements after localStorage
  return obj ? customElements.define(`${str}`, el, obj) : customElements.define(`${str}`, el);
}

defineCustomElements("form-ui", FormUI, {extends: "form"});
defineCustomElements("input-tel", InputTel, {extends: "input"});
defineCustomElements("input-taxvat", InputTaxvat, {extends: "input"});
defineCustomElements("input-email", InputEmail, {extends: "input"});
defineCustomElements("error-message", ErrorMessage);

/**
 * Listen to custom validity event and
 * sets the value to the messsage element
 */
window.addEventListener("input:error", ({detail})=>{
  document.querySelector(`input[is='${detail.el}'] + error-message`).setAttribute("data-msg", `${detail.value}`);
});