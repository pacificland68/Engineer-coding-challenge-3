import React from 'react'
import axios from 'axios'
import {Row, Col} from 'antd'

var Circle = require('rc-progress').Circle;
const lan = require('iso-639-1')

class DetailView extends React.Component{
    constructor(){
        super();
        this.state={
            result: {},
            color : "",
            genres: []
        }
    }

    componentDidMount(){
        var id = this.props.match.params.id
        const genres = []
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6aaf32f1d12ae102cb4ee6849f3d5ac0`)
            .then(data => {
                data.data.genres.map(d=>{
                    genres.push(d.name)
                })
                console.log(data.data)
                this.setState({
                    result: data.data
                })
            })
            // console.log(this.state.result)
            var color=""
            if(this.state.result.vote_average <= 4){
                color = "#ff0000"
            }else if(this.state.result.vote_average >4 && this.state.result.vote_average <=6){
                color = "#E8E83A"
            }else{
                color = "#7CFC00"
            }
            
            this.setState({
                color: color,
                genres: genres
            })
    }

    render(){
        return(
            <div>
                <Row type="flex" justify="center">
                    <Col span={8}>
                        <img
                            width={400}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.result.poster_path}
                        />
                    </Col>
                    <Col span={8} style={{justifyContent: "center", textAlign: "left"}}>
                        <h3>{this.state.result.title+"("+this.state.result.release_date+")"}</h3>
                        <Circle percent={this.state.result.vote_average*10} style={{width:"50px", marginLeft:"20px", marginTop:"20px", marginBottom:"20px", marginRight:"20px"}} strokeWidth="15" strokeColor={this.state.color} />
                        {this.state.result.vote_average}
                        <h5>Overview</h5>
                        {this.state.result.overview}
                        <div style={{marginBottom: "40px"}}></div>
                        <h5>Genres</h5>
                        {
                            this.state.genres.map((d,i)=>{
                                return (
                                    <div key={i} style={{marginRight: "50px"}}>
                                        {d}
                                    </div>
                                )
                            })
                        }
                        <div style={{marginBottom: "40px"}}></div>
                        <h5>Duration</h5>
                        {
                            this.state.result.runtime
                        }min
                        <div style={{marginBottom: "40px"}}></div>
                        {/* <h5>Language</h5>
                        {
                            console.log(lan.getName('en'))
                        } */}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DetailView