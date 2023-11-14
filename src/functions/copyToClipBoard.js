export async function copyToClipBoard(e) {
  if ("clipboard" in navigator) {
    e.preventDefault();
    await navigator.clipboard.writeText(e.target.value);
  }
}
