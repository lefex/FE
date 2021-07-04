interface Box<Type> {
    content: Type;
}

function setContent<Type>(box: Box<Type>, content: Type) {
    box.content = content;
}

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

// 定义一个 Array 类
interface MyArray<Type> {
    length: number;
    pop(): Type | undefined;
    push(...items: Type[]): number;
}