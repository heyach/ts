// 基础数据类型
// 常用的对象数组结构
import BasicType from "./BasicType"
BasicType()

// 类型断言
import TypeAssert from "./TypeAssert"
TypeAssert()

// 常量断言
import AsConst from "./AsConst"
AsConst()

// 组合类型
import Container from "./CombineType"
let c = new Container({
    x: 1,
    y: 1,
    w: 1,
    h: 1
})
c.add()

// 泛型
import { createArray, createArray2, createArray3, calcDistance, mergeObj, Queue } from "./Generics"
console.log(createArray(5, ''))
console.log(createArray(3, 0))
console.log("矩形距离原点" + calcDistance({x: 3, y: 4}))
console.log(mergeObj({a: 1, b: 2}, {b: 3}))
var d = createArray2(2, 18)
console.log(d)
console.log(createArray3(4, {x: 0, y: 0}))

let queue = new Queue<number>()
queue.push(1)
console.log(queue.data)
// queue.push("x") // error

// 内联注解
import { InlineType } from "./InlineType"
InlineType()