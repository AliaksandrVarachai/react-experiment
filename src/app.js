import React from 'react';
import {render} from 'react-dom';

import data from './data';
import TodoList from './todoList/todoList';

render(<TodoList list={data} />, document.getElementById('app-root'));



