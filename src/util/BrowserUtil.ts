// eslint-disable-next-line import/prefer-default-export
export function setBrowserURL(path: string, title: string) {
  window.document.title = title;
  if (window.history.replaceState) {
    // prevents browser from storing history with each change:
    window.history.replaceState({ pageTitle: title }, title, path);
  } else {
    window.history.pushState({ pageTitle: title }, title, path);
  }
}
