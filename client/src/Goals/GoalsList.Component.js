import React from 'react';
import {Row,Col} from 'react-bootstrap';



class GoalsListComponent extends React.Component{
    

    constructor(props){
        super(props);
    }

    componentWillReceiveProps({ goals }) {

        this.setState({ goals });
       
        
    }

    updateGoalsView(){
        if(this.props.goals.length===0){
            this.goalsView = <h3>You have 0 goals.</h3>
        }
        else{
            this.goalsView= <ul>
            {this.props.goals.map((goal,index) => 
                         <li className="goalsList" key={index}>{goal.text}</li>
            )}
        </ul>
        }
    }
    
    

    

    componentDidMount(){
        
        this.props.fetchGoalsOnMount();

        
    }

    render(){
        this.updateGoalsView();
        return(
        <Row>
        <Col  xs={12} md={10} mdOffset={1} >
            {this.goalsView}
        </Col>
        </Row>    
    )
    }
}




export default GoalsListComponent;