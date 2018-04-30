import React from 'react';
import {Grid,Row,Col,Button,InputGroup,FormControl,FormGroup,Form} from 'react-bootstrap';

const AddGoalsComponent = ({onSubmit})=>{
    let textInput= React.createRef();

    let handleSubmit=(event)=>{
        console.log("in handle submit");
        event.preventDefault();
        console.log(textInput.current.value);
        onSubmit(textInput.current.value);
    }
    return (
        
        <Row>
        <Col  xs={12} md={10} mdOffset={1} >

            <Form className="addGoalForm" inline onSubmit={
                handleSubmit
            } >
                <FormGroup className="addGoalForm">
                    <InputGroup className="inputGroup1">
                        <FormControl inputRef={textInput} type="text"/>
                        
                    </InputGroup>
                    <Button bsStyle="primary" type="submit"> Add Goal </Button>
                    
                </FormGroup>



            </Form>

        </Col>
        </Row>
        
        
    )
}

export default AddGoalsComponent;