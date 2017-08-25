export default [
  {
    whatTodo: 'todo 1',
    children: [
      {
        whatTodo: 'todo 1.1',
      }, {
        whatTodo: 'todo 1.2',
        children: [
          {
            whatTodo: 'todo 1.2.1'
          }, {
            whatTodo: 'todo 1.2.2'
          }
        ]
      }
    ]
  }, {
    whatTodo: 'todo 2',
    children: [
      {
        whatTodo: 'todo 2.1'
      }, {
        whatTodo: 'todo 2.2'
      }, {
        whatTodo: 'todo 2.3'
      }
    ]
  }, {
    whatTodo: 'todo 3'
}];
