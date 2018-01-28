import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

// ES6 style
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <TodoList />
            </div>
        ); 
    }
}

//export default is used to export a single class, function or primitive from a script file.
export default App;