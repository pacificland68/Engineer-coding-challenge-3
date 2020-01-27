import {Form, Row, Col, Container} from 'react-bootstrap'
import React from "react";
import axios from 'axios';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class HomeView extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            results: [],
            name: [],
            id: []
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
        var r = []
        var rn = []
        var ri = []
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=6aaf32f1d12ae102cb4ee6849f3d5ac0&language=en-US&page=1")
            .then( data => {
                console.log(data)
                data.data.results.map(d => {
                    // var ran = parseInt(Math.random()*(19+1),10);
                    // console.log(d.poster_path)
                    r.push(d.poster_path)
                    rn.push(d.title)
                    ri.push(d.id)
                })
                this.setState({
                    results: r,
                    name: rn,
                    id: ri
                })
            })
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        {
                            console.log(this.state.results)
                        }
                        <Col md={3}>
                        <a href={"/DetailView/"+this.state.id[0]}><img
                            width={200}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[0]}
                        /></a><br/>{this.state.name[0]}
                        </Col>
                        <Col md={{ span: 3, offset: 1.5 }}>
                        <a href={"/DetailView/"+this.state.id[1]}><img
                            width={150}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[1]}
                        /></a><br/>{this.state.name[1]}
                        </Col>
                        <Col md={{ span: 3, offset: 4.5 }}>
                        <a href={"/DetailView/"+this.state.id[2]}><img
                            width={200}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[2]}
                        /></a><br/>{this.state.name[2]}
                        </Col>
                        <Col md={{ span: 3, offset: 7.5 }}>
                        <a href={"/DetailView/"+this.state.id[3]}><img
                            width={150}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[3]}
                        /></a><br/>{this.state.name[3]}
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop: "50px"}} md={{ span: 3, offset: 1.5 }}>
                        <a href={"/DetailView/"+this.state.id[4]}><img
                            width={150}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[4]}
                        /></a><br/>{this.state.name[4]}
                        </Col>
                        <Col md={{ span: 3, offset: 4.5 }}>
                        <a href={"/DetailView/"+this.state.id[5]}><img
                            width={200}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[5]}
                        /></a><br/>{this.state.name[5]}
                        </Col>
                        <Col style={{marginTop: "50px"}} md={{ span: 3, offset: 7.5 }}>
                        <a href={"/DetailView/"+this.state.id[6]}><img
                            width={150}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[6]}
                        /></a><br/>{this.state.name[6]}
                        </Col>
                        <Col md={{ span: 3, offset: 7.5 }}>
                        <a href={"/DetailView/"+this.state.id[7]}><img
                            width={200}
                            alt="logo"
                            src={"https://image.tmdb.org/t/p/original"+this.state.results[7]}
                        /></a><br/>{this.state.name[7]}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomeView