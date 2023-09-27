const deepCopy = (value: any):any => {
  if (value === null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    const newArray = [];
    for (let i = 0; i < value.length; i++) {
      newArray[i] = deepCopy(value[i]);
    }
    return newArray;
  }
  const newObj = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      newObj[key] = deepCopy(value[key]);
    }
  }
  return newObj;
};


export default deepCopy;