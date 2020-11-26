/**
 * 在文件中定义的类型默认为全局类型，会有命名冲突的问题
 * 使用namespace命名空间解决名称冲突的问题
 */
declare namespace Global{
    export interface IGoods{
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
    
    interface IKucun{
        red?:number,
        green?:number
    }
    
    export interface IGoodsList{
        id:number|string;
        name:string;
        price:number;
        kucun?:IKucun
    }
    
    export type ns = number|string;

}
