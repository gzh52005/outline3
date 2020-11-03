import React from 'react'

import { List, Col, Row, Button } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import request from '../utils/request'
import { withUser } from '../utils/hoc'

class Home extends React.Component {

    state = {
        newData: [],
        hotData: [],
        difData: [],
    }
    async componentDidMount() {
        // 发起ajax请求
        // fetch('http://120.76.247.5:2001/api/iq').then(res=>{
        //     // console.log('res=',res.json());
        //     return res.json()
        // }).then(res=>{
        //     console.log('res=',res);
        // })
        // 最新面试题
        const { data: newData } = await request('/iq', {
            total: false
        })

        // 热门面试题
        const { data: hotData } = await request('/iq', {
            total: false,
            sort: 'hot'
        })

        // 重点难点
        const { data: difData } = await request('/iq', {
            total: false,
            sort: 'difficulty'
        })

        console.log('newData=', newData);
        console.log('hotData=', hotData);
        console.log('difData=', difData);

        this.setState({
            hotData,
            newData,
            difData
        })

    }
    goto = (path)=> {
        this.props.history.push(path)
    }
    gotoDetail = (id,e)=>{
        // e.preventDefault();
        this.goto({
            pathname:'/iq/'+id, //动态路由
            search:'?id='+id,
            state:{ // 缺点：刷新后消失
                id
            }
        })
    }
    render() {
        console.log('Home.props', this.props);
        const { newData, hotData, difData } = this.state;
        return (
            <div>
                <Row>
                    <Col span={18}>
                        <h2>最新面试题</h2>
                    </Col>
                    <Col span={6} style={{ textAlign: 'right' }}>
                        <Button type="link" onClick={this.goto.bind(this,'/iq?sort=addtime')}>更多<RightOutlined/></Button>
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={newData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a onClick={this.gotoDetail.bind(this,item._id)}>{item.question}</a>}
                                description={`${item.hot}浏览 • ${item.answer}回答`}
                            />
                        </List.Item>
                    )}
                />
                <Row>
                    <Col span={18}>
                        <h2>热门面试题</h2>
                    </Col>
                    <Col span={6} style={{ textAlign: 'right' }}>
                        <Button type="link" onClick={this.goto.bind(this,'/iq?sort=hot')}>更多<RightOutlined/></Button>
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={hotData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a onClick={this.gotoDetail.bind(this,item._id)}>{item.question}</a>}
                                description={`${item.hot}浏览 • ${item.answer}回答`}
                            />
                        </List.Item>
                    )}
                />
                <Row>
                    <Col span={18}>
                        <h2>重难点面试题</h2>
                    </Col>
                    <Col span={6} style={{ textAlign: 'right' }}>
                        <Button type="link" onClick={this.goto.bind(this,'/iq?sort=difficulty')}>更多<RightOutlined/></Button>
                    </Col>
                </Row>
                <List
                    itemLayout="horizontal"
                    dataSource={difData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a onClick={this.gotoDetail.bind(this,item._id)}>{item.question}</a>}
                                description={`${item.hot}浏览 • ${item.answer}回答`}
                            />
                        </List.Item>
                    )}
                />

            </div>
        )
    }

}

Home = withUser(Home)

export default Home;