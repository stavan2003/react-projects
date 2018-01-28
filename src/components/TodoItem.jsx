import React from 'react';

// ES6 style
class TodoItem extends React.Component {
    render() {
        return 
            <li 
                style={{ textDecoration : this.props.done ? 'line-through' : 'none'}}
            >
                { this.props.name }
            </li>;    
    }
}

//export default is used to export a single class, function or primitive from a script file.
export default TodoItem;