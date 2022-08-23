import FormUI from "./components/form-ui.js";
import InputTel from "./components/input-number.js";

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
defineCustomElements("input-tel", InputTel, {extends: "input"})