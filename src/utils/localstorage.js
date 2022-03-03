export const setLocalStorage = (name, val) => {
  localStorage.setItem(name, val)
}

export const getLocalStorage = (name) => {
  const val = localStorage.getItem(name)
  return val ? val : null
}

export const removeLocalStorage = (name) => {
  localStorage.removeItem(name)
}