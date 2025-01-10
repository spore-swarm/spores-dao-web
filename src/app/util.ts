export const handleRedirect = (_path?: string, target?: string) => {
  if (_path) {
    window.open(_path, target);
  }
};
