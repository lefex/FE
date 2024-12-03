import { createIdentifier } from "@wendellhu/redi";

export interface ISelection {
  getSelection(): {
    index: number;
    length: number;
  }
}

export default class Selection implements ISelection {
  constructor() {
    console.log('Selection initialized');
  }

  getSelection(): { index: number; length: number; } {
    return {
      index: 0,
      length: 0
    }
  }
}

export const SelectionIdentifier = createIdentifier<ISelection>('Selection');
