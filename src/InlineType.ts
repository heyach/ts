// 内联注解
export let InlineType = function() {
    // 可以通过内联注解任何内容，跟css的内联样式同理，简短或者非复用的内容就没必要再起个名字独立出去了
    // <span style="color: red"></span>
    // 有些类型也没必要再声明个接口，否则取个诡异的名字还是负收益
    let point: {
        x: number,
        y: number
    } = {
        x: 0,
        y: 0
    }

    let person: {
        name: string,
        age: number
    } = {
        name: "tom",
        age: 18
    }
    console.log(point, person)
}