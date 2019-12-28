import { writable } from 'svelte/store'


  const createWritableStore = (key, startValue) => {
    const { subscribe, set } = writable(startValue);
    
    return {
      subscribe,
      set,
      useLocalStorage: () => {
        if (process.browser) {
          const json = localStorage.getItem(key);
          if (json) {
            set(JSON.parse(json));
          }
          
          subscribe(current => {
            localStorage.setItem(key, JSON.stringify(current));
          });
        }
      }
    };
  }

  export const linkDisplay = createWritableStore('linkDisplay', 'grid')

  export const theme = createWritableStore('theme', 'white')
