export default class ErrorMessage extends HTMLElement {

  static get observedAttributes(){
    return ["data-msg"]
  }

  constructor(){
    super()

    // Get data value
    const dataTmpl = this.getAttribute("data-tmpl");

    // Get Template
    const dataTemplate = document.getElementById(dataTmpl);

    const shadowRoot = this.attachShadow({mode:"open"});
    shadowRoot.innerHTML = `
      <div class="message-box">
      </div>
    `
    shadowRoot.append(dataTemplate.content.cloneNode(true));

  }

  /**
   * Sets shadowRoot with new msg
   * @param {String} msg Info message
   */
  renderMessage(msg){
    this.shadowRoot.children[0].innerHTML = `${msg}`
  }

  /**
   * Called when an observed attribute has been
   * added, removed, updated, or replaced.
   * @param {String} name Attribute name
   * @param {Any} oldValue Previous value
   * @param {any} newValue Current value
   */
   attributeChangedCallback(name, oldValue, newValue) {
    if (newValue || oldValue != null){
      this.renderMessage(newValue);
    }
   }

}