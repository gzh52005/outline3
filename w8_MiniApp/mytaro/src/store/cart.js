import { observable } from 'mobx'

const initData = {
    goodslist:[{id:1,name:'goods1',price:998,qty:2}],
    add2cart(goods){
        this.goodslist.unshift(goods);
    },
    remove(id){
        this.goodslist = this.goodslist.filter(item=>item.id!=id)
    }
}

const cartStore = observable(initData);

export default cartStore