import React from 'react';

const AddGoalsComponent = ({onSubmit})=>{
    let textInput= React.createRef();

    let handleSubmit=(event)=>{
        event.preventDefault();
        //console.log(textInput.current.value);
        onSubmit(textInput.current.value);
    }
    return (
        
        <div>
            <form onSubmit={
                handleSubmit
            } >
                <input ref={textInput} type="text" name="text"/>
                <button type="submit"> Add Goal </button>
            </form>
        </div>
    )
}

export default AddGoalsComponent;