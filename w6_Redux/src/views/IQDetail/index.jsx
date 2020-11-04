import React from 'react'
import {Rate,Avatar,Divider,List} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import request from '@/utils/request';
import moment from 'moment';

import './style.scss';

class IQDetail extends React.Component{
    state = {
        data:{}
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        console.log('id=',id);

        const {data} = await request.get('/iq/'+id);
        console.log('data=',data);

        this.setState({
            data
        })
    }
    goto = (path)=>{
        this.props.history.push(path)
    }

    render(){
        console.log('IQDetail.props',this.props);
        const {data} = this.state;
        return (
            <div className="iq">
                <h1>{data.question}</h1>
                <div className="info">
                {
                    data.user ? 
                    <div onClick={this.goto.bind(this,'/iq?userid='+data.userid)}><Avatar size="small" icon={<UserOutlined />} src={data.user.avatar} />{data.user.username}</div>
                    :
                    null
                }
                <div>{data.hot}人浏览</div>
                <div className="mini-star">难度：<Rate disabled value={data.difficulty} /></div>
                {data.companyid ? <div onClick={()=>{
                    // 点击查看当前公司下所有面试题
                    this.goto('/iq?companyid='+data.companyid)
                }}>@{data.company.name}</div> : null}
                <div>添加时间：{moment(data.addtime).format('YYYY/MM/DD')}</div>
                </div>

                <Divider orientation="left" plain>
                    回复（{data.answer ? data.answer.length : 0}）
                </Divider>
                <List
                    itemLayout="horizontal"
                    dataSource={data.answer}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.user.username}
                                description={item.content}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }

}


export default IQDetail;