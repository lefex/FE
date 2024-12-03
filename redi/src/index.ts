import { Injector } from "@wendellhu/redi";
import Editor from "./editor";
import Selection from "./selection";

const injector = new Injector([[Selection]]);


const editor = new Editor();

console.log(editor.getSelection());