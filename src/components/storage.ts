const storageMethod = {
    setValue(key: string, val: string) {
        localStorage.setItem(key, val);
    },
    getValue(key: string) {
        localStorage.getItem(key);
    },
};

export default storageMethod;