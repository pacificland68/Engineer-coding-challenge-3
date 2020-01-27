import React from 'react'
import { List } from 'antd';
import axios from 'axios'
import logo from '../images/logo.png'
import {Form, Row, Col} from 'react-bootstrap'
import {Button} from 'antd'
// import Circle_c from '../components/Circle_c'

// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }


var Circle = require('rc-progress').Circle;

class ListView extends React.Component{
    constructor(){
        super();
        this.state={
            overview:"",
            results:{},
            listData:[],
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        var name = this.props.match.params.name;
        const ldd = []
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6aaf32f1d12ae102cb4ee6849f3d5ac0&query=${name}`)
            // .then(response => response.json())
            .then(data => {
                
                console.log(data.data)

                data.data.results.map(d => {
                    var color=""
                    if(d.vote_average <= 4){
                        color = "#ff0000"
                    }else if(d.vote_average >4 && d.vote_average <=6){
                        color = "#E8E83A"
                    }else{
                        color = "#7CFC00"
                    }

                    ldd.push({
                        href: 'http://ant.design',
                        title: d.title,
                        // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        description: d.overview,
                        release_date: d.release_date,
                        image: "https://image.tmdb.org/t/p/original"+d.poster_path,
                        vote_average: d.vote_average,
                        percent: d.vote_average*10,
                        color: color,
                        id: d.id
                    })
                })

                this.setState({
                    results:data.data
                })
                
            })
            console.log(this.props.name)
            this.setState({
                listData: ldd,
                name: this.props.match.params.name
            })
    }

    render(){
        return(
            <div>
                <div style={{marginTop: "5%", marginRight: '10%', marginLeft: '10%'}}>
                    {/* <Row>
                        <Col sm={1}><a href="/"><img style={{width: 80, height: 80}} src={logo} alt="" /></a></Col>
                        <Col sm={10}><Form style={{width: "80%"}}>
                            <Form.Control name="name" value={this.state.name} onChange={this.handleChange} size="lg" type="text" placeholder="Searching for a movie" />
                        </Form></Col>
                        <Col sm={1}><Button variant="primary">
                        <a href={'/ListView/'+this.state.name}>Search</a>
                        </Button></Col>
                    </Row> */}
                    
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                        onChange: page => {
                            console.log(page);
                            
                        },
                        pageSize: 5,
                        }}
                        dataSource={this.state.listData}
                        footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                        }
                        
                        renderItem={item => (
                            
                        <List.Item
                            key={item.title}
                            // actions={[
                            // <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                            // <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                            // <IconText type="message" text="2" key="list-vertical-message" />,
                            // ]}
                            extra={
                            <img
                                width={175}
                                alt="logo"
                                src={item.image}
                            />
                            
                            }
                            
                        >
                            
                            <List.Item.Meta
                            // avatar={<Avatar src={item.avatar} />}
                            title={
                                
                                <div>
                                    <h4>{item.title}</h4><br/>{item.release_date}
                                    <Circle percent={item.percent} style={{width:"50px", marginLeft:"20px"}} strokeWidth="15" strokeColor={item.color} />
                                    
                                    {item.vote_average}
                                    
                                </div>
                            }
                            description={item.description}
                            />
                            <div><a href={"/DetailView/"+item.id}>more info</a></div>
                        </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default ListView