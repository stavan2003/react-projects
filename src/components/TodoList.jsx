import React from 'react';
import TodoItem from './TodoItem';

// ES6 style
class TodoList extends React.Component {
    render() {
        const items = [
            { name:"Item 1", done:false},
            { name:"Item 2", done:true},
            { name:"Item 3", done:false}
        ];
    
        return (
        <ul>
            { items.map(item => <TodoItem name={item.name} done={item.done}/> )}
        </ul>
        );    
    }
}

//export default is used to export a single class, function or primitive from a script file.
export default TodoList;