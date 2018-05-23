import React, { Component } from 'react';



class TodoForm extends Component {

    constructor(){
        super();
        this.state = {
            title : '',
            responsible : '',
            description : '',
            priority : 'low'
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e){
        console.log(e.target.value , e.target.name);
        const {value,name} = e.target;
        this.setState({
            [name] : value
        })

        console.log(this.state);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("Sending form");
        this.props.onAddTodo(this.state);
    }


    render(){
        return(

            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                         tpye="text"
                         name="title"
                         onChange={this.handleInput}
                         className="form-control"
                         placeholder="Title"
                        
                        />
                    </div>
                    <div className="form-group">
                        <input
                            tpye="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}

                            />
                    </div>
                    <div className="form-group">
                        <input
                            tpye="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}

                            />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}
 >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button value="save" className="btn btn-primary">Save</button>
                    </div>


                
                </form>
            
            </div>
        )
    }


}

export default TodoForm;
