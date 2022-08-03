// 具有xy的坐标
interface Point {
    x: number,
    y: number
}

// 具有wh的尺寸
interface Size {
    w: number,
    h: number
}

// 有以下方法
interface Action {
    setActive(f: boolean): void,
    updatePosition(x: number, y: number),
    draw(ctx: CanvasRenderingContext2D),
    add: Function
}

// 还有自己独有的属性
interface ContainerInterface extends Point, Size, Action {
    active?: boolean
    destory: Function
}

// 参数只要这些
interface ContainerOption extends Point, Size {}

export default class Container implements ContainerInterface {
    x: number
    y: number
    h: number
    w: number
    active: boolean
    constructor(opt: ContainerOption) {
        this.x = opt.x
        this.y = opt.y
        this.w = opt.w
        this.h = opt.h
        this.active = false
    }
    setActive() {}
    updatePosition() {}
    draw() {}
    add() { console.log("add") }
    destory() {}
}