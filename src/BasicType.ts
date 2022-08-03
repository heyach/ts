type NSB = string | number | boolean

interface Person {
    name: string;
    age: number;
    info: string;
    [key: string]: any; // 可以有任意键值对
}

// 基础类型
export default function () {
    let name: string = "tom";
    let age: number = 18;
    let sex: boolean = false;

    // undefined和null是所有类型的子类型，可以赋值给任意类型的变量，常用的是在变量设初始值的时候，没有类型约束的时候，一个对象我们经常也用空字符串初始化，这样就不行了
    // type User = string | number | null | undefined 像这里就不用定义user为null和undefined类型的
    let u: undefined = undefined
    let n: null = null
    name = undefined
    
    let s: symbol = Symbol("m")
    console.log(name, age, sex, u, n, s);

    // 数组重点 string[] 和 Array<string>
    // 常用的数组结构有纯类型数组[1,2,3,4]
    let singleArr: number[] = [1, 2, 3, 4]
    // 混合类型数组[1, 'str', 2, true]，如果只写一种类型肯定是不行的，要都定义进去(number | string | boolean)[]
    // 但是这样写又很长，特别是这种类型常用的时候，所以定义一个type NSB
    let complexArr: NSB[] = [1, 'str', 2, true]
    // 另一种写法，完全是写法区别，含义一样
    let complexArr2: Array<NSB> = [1, 'sre', 2, false]

    // 但是，更更常见的是对象数组，[{ a: 1, b: 2}, { a: 2, b: 3}]
    // 首先要定义好里面的对象类型, 如Person
    let objArray: Array<Person> = [{name: 'xx', age: 1, info: 'xxx'}]
    let objArray2: Person[] = [{name: 'xx', age: 1, info: 'xxx'}]

    // 对象
    let p: Person = {
        name: "tom",
        age: 18,
        info: "i am a p",
        other: "other info"
    }
    console.log(singleArr, complexArr, objArray, p);
}
