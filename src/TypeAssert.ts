// 类型断言
interface Person {
    name: string;
    age: number
    say: Function
}

export default function () {
    let ps: Array<Person> = [{
        name: "t",
        age: 1,
        say() {}
    }, {
        name: "t2",
        age: 20,
        say() {}
    }]
    // 我们认为从一个Person数组里筛选出来的元素也是一个Person类型或者是undefined，因此可以直接断言类型和做可选链兼容，ts3.7版本才支持可选链
    let p = (ps.find((item: Person) => item.age > 30) as Person)?.age
    let p2 = (<Person>ps.find((item: Person) => item.age > 10))?.age
    console.log(p, p2)

    // 声明一个变量的默认值时，比如user是一个Person，但开始的时候是空
    // let user: Person = {} 这样写就会缺少属性
    let user = <Person>{}
    // 后面user得到值了
    user.say = () => {}
    user.say()
}
