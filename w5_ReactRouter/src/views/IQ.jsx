import React from 'react'
import {List,Pagination} from 'antd'
import request from '../utils/request'

// const url = require('url');
// console.log('url=',url);

class IQ extends React.Component{
    state = {
        size:10,
        page:1,
        total:0,
        params:{},
        datalist:[],
        loading:false,
    }
    async componentDidMount(){
        // 获取传入的参数: /iq?sort=addtime&userid=xxx&companyid=xx
        // const urlObj = url.parse(this.props.location.search,true)
        // console.log('search=',urlObj.query)
        const search = this.props.location.search.slice(1)
        const params = search.split('&').reduce((obj,item)=>{
            const arr = item.split('=');
            obj[arr[0]] = arr[1];
            return obj;
        },{});
        console.log('params',params);
        
        this.setState({
            params
        },()=>{
            this.getData()
        })


        // // 根据参数请求不同的数据
        // const {data} = await request.get('/iq',{
        //     sort:params[1],
        //     size:10
        // })

        // console.log('data=',data);

        // this.setState({
        //     total:data.total,
        //     size:data.size,
        //     page:data.page,
        //     datalist:data.result
        // })
    }
    
    componentDidUpdate(prevProps,prevState){
        const {page,size} = this.state;
        // 避免死循环
        if(page !== prevState.page || size !==prevState.size){
            this.getData()
        }
    }
    changePage = (page,size)=>{
        this.setState({
            page,
            size
        })
    }
    getData = async ()=>{
        const {size,page,params,datalist,loading} = this.state
        // 根据参数请求不同的数据
        if(!loading){
            this.setState({
                loading:true
            });
            const {data} = await request.get('/iq',{
                ...params,
                size,
                page,
            })
    
            console.log('data=',data);
    
            this.setState({
                total:data.total,
                size:data.size,
                page:data.page,
                datalist:data.result,
                loading:false
            })

        }
    }
    render(){
        console.log('IQ.props',this.props);
        const {datalist,total,page,size} = this.state;
        return (
            <div>
                
                <List
                    itemLayout="horizontal"
                    dataSource={datalist}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.question}
                                description={`${item.hot}浏览 • ${item.answer}回答`}
                            />
                        </List.Item>
                    )}
                />
                <Pagination current={page} pageSize={size} total={total}
                showTotal={(total)=><div>共<span style={{color:'#f00'}}>{total}</span>条</div>}
                onChange={this.changePage}
                />
            </div>
        )
    }

}


export default IQ;