export function jsonToQueryString(jsonData) {
    const keys = Object.keys(jsonData);
  
    const result = keys.map((key) => {
      return `${key}=${jsonData[key]}`
    }).join('&');
  
    return result
  }