// 声明文件

// 使用第三方库的时候，要引入对应的代码类型补全
// 如引入jquery，createdjs,
// 使用 $.ajax，new CreateJS.Stage，就会提示没有ajax和stage属性，因为ts根本就不知道这两是什么玩意
// 通过declare声明补全类型，声明的文件一般以d.ts规范，一看就知道是个声明文件而不是普通的ts文件
// 在tsconfig.json的include里包含d.ts文件，这样相当于全局声明了，任意地方就可以直接用了，不用再引入，（.vue这样的文件除外）
declare let $: any; // 声明值
declare type CreateJS = any; // 声明类型
declare type LabelValueOptions = {
    label: string;
    value: any;
    [key: string]: string | number | boolean;
};
