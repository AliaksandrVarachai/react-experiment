import React from 'react';
import {render} from 'react-dom';

import data from './data';
import TodoList from './todoList/todoList';

console.log(data);

render(<TodoList list={data} />, document.getElementById('app-root'));



