import Selection, { SelectionIdentifier } from "./selection";

export default class Editor {
  @SelectionIdentifier private readonly _selection: Selection;
  constructor(
  ) {
    console.log('Editor initialized');
  }

  getSelection() {
    return this._selection.getSelection();
  }
}