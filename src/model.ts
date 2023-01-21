export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

// type Actions = {
//   | { type: 'ADD_TODO'; payload: string }
//   | { type: 'REMOVE_TODO'; payload: number }
//   | { type: 'COMPLETED'; payload: number }
// }

// export const TodoReducer = (state: Todo[], action: Actions) => {

//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: Date.now(),
//           todo: action.payload,
//           isCompleted: false
//         }
//       ];
//     case 'REMOVE_TODO':
//       return state.filter(todo => todo.id !== action.payload);
//     case 'COMPLETED':
//       return state.map(todo => {
//         if (todo.id === action.payload) {
//           todo.isCompleted = !todo.isCompleted;
//         }
//         return todo;
//       }
//     default:
//       return state;
//   }
// }
