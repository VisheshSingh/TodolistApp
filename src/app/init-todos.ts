export class Init{
  load(){
    if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
      console.log('no todos found creating...');
      var todos = [
          { text: 'Pick up kids at school'},
          { text: 'Meeting with Boss'},
          { text: 'Dinner with Amara'}
        ];

        localStorage.setItem('todos', JSON.stringify(todos));
        return
      } else {
        console.log('found todos');
      }
    }
  }
