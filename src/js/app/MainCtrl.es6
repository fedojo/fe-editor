import { Page } from "app/Page";
import { Element } from "app/Element";
import { GridElements } from "	elements/GridElements";
import { initialHTML } from "app/helpers/initialhtml";
import { LSGet, LSSet } from "app/LocalStorage";


export class MainCtrl {
	constructor() {
		this.page = new Page('editorWrapper');

		this.$elementsList = document.getElementById("elementsList");
		this.$btnAddElement = document.getElementById("addElement");
		this.$btnGetJSON = document.getElementById("getJSON");
		this.$btnGetHTML = document.getElementById("getHTML");
		this.$btnClearHTML = document.getElementById("clearAll");
		this.$btnAddElements = document.getElementById("addElements");
		this.$btnLoadElements = document.getElementById("loadElements");
		this.$btnClearElements = document.getElementById("clearAll");
		this.$inputContent = document.getElementById("elementContent");

		this.$el = document.querySelector('div');

		this.listElements();
		this.bindEvents();
		this.initContent();
	}

	listElements() {
		for (var key in GridElements) {
			this.$elementsList.innerHTML += '<option value="'+key+'">'+GridElements[key].name+'</option>';
		}
	}

	initContent() {
		this.page.setHTMLStructure(LSGet('fedojo_editor_html'));
		this.page.redraw();
	}

	bindEvents() {
		this.$el.addEventListener("click", (function(event) { this.removeElement(event) }).bind(this));
		this.$btnAddElement.addEventListener("click", (event) => this.addElement());
		this.$btnAddElement.addEventListener("click", (event) => this.addElementRandomly());
		this.$btnGetJSON.addEventListener("click", (event) => this.getJSON());
		this.$btnGetHTML.addEventListener("click", (event) => this.getHTML());
		this.$btnLoadElements.addEventListener("click", (event) => this.loadElements());
		this.$btnClearElements.addEventListener("click", (event) => this.clearHTML());
	}

	showElementPrefs(e) {
		console.log('show prefs');
	}

	addElementsRandomly() {

	}


	loadElements() {
		this.page.addHTMLStructure(initialHTML);

		LSSet('fedojo_editor_html', this.page.getHTMLStructure());

		this.page.redraw();
	}

	removeElement(e) {

	}

	addElement(e) {
		let newElement = new Element(),
			option = this.$elementsList.value,
			tpl = elements[option].template,
			prefix = Date.now(),
			content = this.$inputContent.value ? this.$inputContent.value : 'Empty',
			el = newElement.createFromTpl(tpl, { prefix: prefix, content : content}); // get

		this.page.addElement(el);

		LSSet('fedojo_editor_html', this.page.getHTMLStructure());

		this.page.redraw();
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

	getHTML() {
		console.log(this.page.getHTMLStructure());
		return this.page.getHTMLStructure();
	}

	getJSON() {
		return "JSON";
	}

	generatePrefix() {
		let prefix = Date.now() / 1000;
		return prefix;
	}

	clearHTML() {
		this.page.clearHTML();
		LSSet('fedojoeditor_html', this.page.getHTMLStructure());
		this.page.redraw();
	}
}
