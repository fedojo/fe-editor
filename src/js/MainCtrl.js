class MainCtrl {
	constructor() {
		this.page = new Page('editorWrapper');

		this.$elementsList = document.getElementById("elementsList");
		this.$btnAddElement = document.getElementById("addElement");
		this.$btnGetJSON = document.getElementById("getJSON");
		this.$btnGetHTML = document.getElementById("getHTML");
		this.$btnAddElements = document.getElementById("addElements");

		this.$inputContent = document.getElementById("elementContent");

		this.$el = document.querySelector('div');

		for (var key in elements) {
			this.$elementsList.innerHTML += '<option value="'+key+'">'+elements[key].name+'</option>';
		}

		this.bindEvents();
	}

	bindEvents() {
		this.$el.addEventListener("click", (function(event) { this.removeElement(event) }).bind(this));
		this.$btnAddElement.addEventListener("click", (function(event) { this.addElement() }).bind(this));
		this.$btnAddElement.addEventListener("click", (function(event) { this.addElementsRandomly() }).bind(this));
		this.$btnGetJSON.addEventListener("click", (function(event) { this.getJSON() }).bind(this));
		this.$btnGetHTML.addEventListener("click", (function(event) { this.getHTML() }).bind(this));
	}

	addElementsRandomly() {

	}

	removeElement(e) {

	}

	addElement(e) {
		let newElement = new Element();
		newElement.createFromTpl(elements[this.$elementsList.value].template, '');

		// console.log();

		this.page.addElement(elements[this.$elementsList.value].template);
		this.page.redrawStructure();
	}

	showElementOptions() {
		console.log('Show element options');
	}

	setElementsHTML(html) {
		this.page.setHTMLStructure(html);
	}

	redraw() {
		this.page.redrawStructure();
	}

	getElementsHTML() {
		return this.page.getHTMLStructure();
	}

	getJSON() {
		return "JSON";
	}

	generatePrefix() {
		let prefix = Date.now() / 1000;
		return prefix;
	}
}
