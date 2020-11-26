/**
 * Typescript -> JS
    * 类型校验：只在编译阶段校验
    * 类型推论: ts会根据复制的数据，推断出它数据类型
 */

// 类型校验
 let num:number = 100;
//  num = 'abc'; //报错

// 类型推论
var username = 'laoxie';
// username = 100; // 报错


// 联合类型
let index:number|string = 0
index = '1';

// 类型别名
type ns = number|string;
let idx:ns = 0;
let age:ns = 18;
let id:ns = 'abc';


// 对象类型：接口Interface
interface IGoods{
    // 只读属性
    readonly id:number|string;
    name:string;
    readonly price:number;
    imgurl:string;

    // 可选属性
    salePrice?:number;

    // 函数属性
    // getPrice();

    // 任意属性
    [propName: string]: any;
}
let goods:IGoods = {
    id:1,
    name:'huawei mate40 pro',
    price:5998,
    salePrice:998,
    imgurl:'img/mate40.png'
}

// goods.price = 9.8; // 报错：price为只读属性

let goods2:IGoods = {
    id:2,
    name:'xiaomi mi10 pro',
    price:3998,
    imgurl:'img/mi10.png',
    kucun:100,
    a:11,
    b:'dafda',
    getPrice(){

    }
}

// 数组类型
// 1.类型+[]
var arr1:number[] = [10,20,30];
// 2. 泛型
var arr2:Array<string> = ['laoxie','jingjing','xiaoxie'];
// 3. 接口
interface IKucun{
    red?:number,
    green?:number
}
interface IGoodsList{
    id:number|string;
    name:string;
    price:number;
    kucun?:IKucun
}
var goodslist:IGoodsList[] = [{
    id:1,
    name:'goods1',
    price:998,
    kucun:{
        red:10,
        green:20
    }
},{
    id:2,
    name:'goods2',
    price:1998
},{
    id:3,
    name:'goods3',
    price:2998
}]

// 元组：已知元素数量和类型的数组
let arr:[number,number,string] = [10,20,'h5']


// 函数类型：指定参数类型和返回值类型
// * 可选参数
// * 参数默认值
// * 没有返回值：void
// 1. 声明式定义函数
type dns = number|string;
interface IData{
    size?:dns;
    page:dns;
    [proName:string]:any;
}
interface IRData{
    code:number;
    data:string[];
    msg:string;
}
function request(url:string='/api/list',data?:IData):IRData{
    return {
        code:200,
        data:[],
        msg:'success'
    }
}

request('/api/class');

// 2. 赋值式定义函数
const getData:(url:string,page:number,size?:dns)=>void = function(url:string,page:number=1,size?:dns):void{
    
}

// 3. 泛型编程:定义时不知道参数类型，需要根据执行时传入的参数来确定
// 类型断言： as
function add<T>(a:T,b:T):T{
    return a + (b as any);
}
add(100,200);// 300
add('hello','jingjing');// hello jingjing