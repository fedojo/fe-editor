export class Page {

    constructor(elementID) {
      console.log('Page init');
    	this.contentKeeper = document.getElementById(elementID);
        this.elementsCollection : {};
        this.HTMLStructure: '';
        this.JSONStructure: '';
    }

    init() {
      return 1;
    }

    addElement(elementString) {
      this.HTMLStructure += elementString;
    }

    removeElement(prefix) {

    }

    clearHTML() {
      this.HTMLStructure = '';
    }

    // TODO
    getJSONStructure() {

    }

    // TODO
    setJSONStructure() {

    }

    redraw() {
      this.contentKeeper.innerHTML = this.HTMLStructure;
    }

    getHTMLStructure() {
      return this.HTMLStructure;
    }

    addHTMLStructure(structure) {
      this.HTMLStructure += structure;
    }

    setHTMLStructure(structure) {
      this.HTMLStructure = structure;
    }

}
