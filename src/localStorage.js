const STORAGE_KEY = 'tmdb-viewer';

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (error) {
    console.warn(`Failed to save state to local storage: ${error.message}`);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (null === serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn(`Failed to load state from local storage: ${error.message}`);
    return undefined;
  }
}