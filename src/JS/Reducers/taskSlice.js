import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      state.tasks[taskIndex] = { id, description, isDone };
    },
    
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      state.tasks[taskIndex].isDone = !state.tasks[taskIndex].isDone;
    },
  },
});

export const { addTask, editTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;
