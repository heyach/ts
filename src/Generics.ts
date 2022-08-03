// 泛型***
// 在定义以下成员的时候不指定类型，而在使用的时候再指定类型
// 类的实例成员
// 类的方法
// 函数参数
// 函数返回值

// 场景1，填充数组
// 函数的泛型，一般指参数类型和返回值类型
// 有时候我们需要创建一个指定长度的数组，并填充默认值，比如预期有一个person数组，每个人的年龄是number类型，默认为0，每个人的名字是string类型，默认为''
// 或者说我们要创建一个指定长度的对象数组，Array<Person>，如果value没有类型约束，数组就是一个any，那么在遍历数组调用person的方法时，就缺少类型了
export let createArray = function<T>(len: number, value: T): Array<T> {
    let res: Array<T> = [];
    for (let i = 0; i < len; i++) {
        res[i] = value;
    }
    return res;
}
// 解析
// 接受一个长度和默认值，返回一个全部都是默认值的数组
// let createArray = function<T>() {}
// function createArray<T> () {}
// 在函数名后用<T>声明一个泛型，接着在参数，返回类型和函数体里就可以使用这个泛型

// 泛型约束，在使用参数的的时候，由于不知道类型，就不能访问属性了，比如上面的value.length，所以我们希望泛型能进行一定的约束
// 通过extends来约束
interface Point {
    x: number,
    y: number
}
// 比如我们要计算一个元素距离原点的距离，任意类型的元素，圆形啊，矩形啊，但是他们都必须要有xy，不然哪来的距离
export let calcDistance = function<T extends Point>(elm: T): number {
    return Math.sqrt(Math.pow(elm.x, 2) + Math.pow(elm.y, 2))
}

// 进阶，多泛型和泛型相互约束，即参数之间有关联关系的时候，比如把一个子对象合并进大对象 {a: 1, b: 2} {b: 3} => {a: 1, b: 3}
// T extends U，说明T是完全满足U的类型的，即U有的T也一定有
export let mergeObj = function<T extends U, U>(target: T, source: U): T {
    for(let i in source) {
        target[i] = (<T>source)[i] // T和U不完全一样的，所以不能直接复制，但是我们可以断定U有的T一定有，所以直接进行断言
    }
    return target
}

// 泛型接口，在定义接口的时候使用泛型
interface CreateArrayFunc {
    <T>(len: number, value: T): Array<T>
}
export let createArray2: CreateArrayFunc = function(len, value) {
    let res = [];
    // let res: Array<typeof value> = []
    for (let i = 0; i < len; i++) {
        res[i] = value;
    }
    return res; // 这里res虽然显示是any，但是实际调用后，返回的数组的类型是跟参数一致的
}
// 我们重写了上面的创建数组函数，会发现函数声明和函数体里的T都不见了，因为提取到了接口，这种写法看上去更舒服，不然一个函数里又是T又是U，又是<>的看的晕，实现逻辑又不需要关心类型

// 泛型类
export class Queue<T> {
    public data: Array<T> = []
    push = (item: T) => this.data.push(item)
    pop = (): T | undefined => this.data.shift() // pop出去的可能是T或者undefined
}


// 泛型参数的默认类型
export let createArray3 = function<T = number>(len: number, value: T): Array<T> {
    let res: Array<T> = []
    for (let i = 0; i < len; i++) {
        res[i] = value;
    }
    return res
}