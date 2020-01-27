import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import {Button} from 'antd'
import logo from '../images/logo.png'

class Layout extends React.Component{
    constructor(){
        super();
        this.state={
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div >
                <div style={{marginTop: "5%"}}>
                    <Row>
                        <Col sm={1}><a href="/"><img style={{width: 80, height: 80}} src={logo} alt="" /></a></Col>
                        <Col sm={10}><Form style={{width: "100%", justifyContent: "center", align: "middle"}}>
                            <Form.Control name="name" value={this.state.name} onChange={this.handleChange} size="lg" type="text" placeholder="Searching for a movie" />
                        </Form></Col>
                        <Col sm={1}><Button variant="primary">
                        <a href={'/ListView/'+this.state.name}>Search</a>
                        </Button></Col>
                    </Row>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout