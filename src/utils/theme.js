export const getThemeLocal = () => {
  const localTheme = window.localStorage.getItem('theme') || "";
  return localTheme;
}

export const setThemeLocal = (mode) => {
  window.localStorage.setItem('theme', mode)
}
