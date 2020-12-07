export const createLocalStorageWrapper = <T>(key: string) => {
  const saveState = (state: T) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.warn(`Failed to save state to local storage: ${error.message}`);
    }
  };

  const loadState = (): T | undefined => {
    try {
      const serializedState = localStorage.getItem(key);
      if (null === serializedState) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.warn(`Failed to load state from local storage: ${error.message}`);
      return undefined;
    }
  };

  return { saveState, loadState };
};
