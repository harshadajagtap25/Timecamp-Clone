const getLocalData = (key) => {
  if (key) {
    const data = localStorage.getItem(key);
    return data;
  }
};

const setdata = (key, value) => {
  if (key) {
    let data = localStorage.setItem(key, value);
  }
};

export { getLocalData, setdata };
