class Page {
    constructor(elementID) {
      console.log('Page init');
      this.elementsCollection = {};
      this.HTMLStructure = '';
    	this.contentKeeper = document.getElementById(elementID);
    }

    loadStructure() {}

    addElement(elementString) {
    	this.contentKeeper.innerHTML += elementString;
    }

    removeElement() {}

    getJSONstructure() {}
    setJSONstructure() {}

    getHTMLstructure() {
      return this.HTMLStructure;
    }
    setHTMLstructure(structure) {
      this.HTMLStructure = structure;
    }

}
