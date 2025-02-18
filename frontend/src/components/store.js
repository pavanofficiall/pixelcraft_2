import { create } from 'zustand';

export const useStore = create(set => ({
  components: [],
  selected: null,
  history: [],
  currentHistoryIndex: -1,
  
  addComponent: (component) => set(state => ({
    components: [...state.components, component],
    history: [...state.history.slice(0, state.currentHistoryIndex + 1), 
      { components: state.components, selected: state.selected }],
    currentHistoryIndex: state.currentHistoryIndex + 1
  })),

  updateComponent: (id, updates) => set(state => ({
    components: state.components.map(comp => 
      comp.id === id ? { ...comp, ...updates } : comp
    ),
    history: [...state.history.slice(0, state.currentHistoryIndex + 1), 
      { components: state.components, selected: state.selected }],
    currentHistoryIndex: state.currentHistoryIndex + 1
  })),

  selectComponent: (id) => set({ selected: id }),
  
  undo: () => set(state => {
    if (state.currentHistoryIndex <= 0) return state;
    const newIndex = state.currentHistoryIndex - 1;
    return {
      components: state.history[newIndex].components,
      selected: state.history[newIndex].selected,
      currentHistoryIndex: newIndex
    };
  }),

  redo: () => set(state => {
    if (state.currentHistoryIndex >= state.history.length - 1) return state;
    const newIndex = state.currentHistoryIndex + 1;
    return {
      components: state.history[newIndex].components,
      selected: state.history[newIndex].selected,
      currentHistoryIndex: newIndex
    };
  })
}));