interface Action {
    type: "ADD"
}

interface Event {
    type: "EVENT",
    // direction: ('down' | 'up' | 'right' | 'left')[]
    direction: ["left", "right", "up", "down"]
}

// 常量断言
export default function () {
    // 类型扩展
    // 当我们用let和const定义一个变量时，不指定类型
    let name = "tom" // name的类型会自动扩展为string
    const info = "hello" // 而const定义的变量由于不能再进行更改，会收窄为hello类型
    // info = 123 无法分配到 "info" ，因为它是常数。
    console.log(name, info)

    // 那么当我们期望一个字段的类型是字面量的时候，可以用const来声明，但是，对象的属性却可以类型扩展
    const action = {
        type: "ADD" // type是string类型
    }
    action.type = "REDUCE" // 可以重新赋值

    // 但是我们需要保证type不仅仅是string，还必须是ADD类型
    // 那么只能声明一个接口
    const action2: Action = {
        type: "ADD"
    }

    // 那么可不可以不声明这个接口呢，通过const断言
    let action3 = <const>{
        type: "REDUCE"
    }
    // 或者
    let action4 = {
        type: "SET_NAME"
    } as const
    // 这样，action4的type永远不能设为其他类型的值，我们完成了确定约束
    // action4 = {
    //     type: "xxx"
    // }
    // 不能将类型xxx赋值给类型SET_NAME
    console.log(action2, action3, action4)

    const action5 = {
        type: "SET_AGE"
    } as const
    // 用const定义的类型会自动加上readonly修饰符
    // readonly type: "SET_AGE"
    console.log(action5)

    // 字面量数组
    // 如果我们一个对象的某个属性是个数组，并且数据是确定的，比如方向
    const event = {
        type: "EVENT",
        direction: ["left", "right", "up", "down"]
    }    
    // event.direction只是普通的字符串数组，可以操作，比如加上ddd
    event.direction.push("ddd")
    // 那么这个字段就被污染了，因为原本我们期望方向只有这四个的
    // 当然我们可以通过什么接口来实现

    let event2: Event = {
        type: "EVENT",
        direction: ["left", "right", "up", "down"] // 少一个都不行
    }
    
    // 通过const断言，可以把字面量数组锁定为元祖
    let event3 = {
        type: "EVENT",
        direction: ["left", "right", "up", "down"]
    } as const
    // event3.direction.push("ddd")
    // evnet3.direction就相当于只读了，不能修改
    console.log(event2, event3.direction[3])
}

