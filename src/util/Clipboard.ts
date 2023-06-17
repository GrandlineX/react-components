export default async function copyToClipboard(
  textToCopy: string
): Promise<boolean> {
  // navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard api method'
    try {
      navigator.clipboard.writeText(textToCopy);
      return true;
    } catch (e) {
      return false;
    }
  }
  // text area method
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  // make the textarea out of viewport
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  // here the magic happens
  document.execCommand('copy');
  textArea.remove();
  return true;
}
