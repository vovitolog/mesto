export class Section {
  constructor({items, renderer}, containerSelector){

    this._initialItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderInitialItems() {
    this._initialItems.forEach(item => this._renderer(item));
  }
  addItem(element) {
    this._container.append(element);
  }
}
