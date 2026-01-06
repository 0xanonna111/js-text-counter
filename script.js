function countText() {
  const text = document.getElementById("text").value;

  document.getElementById("chars").innerText = text.length;

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  document.getElementById("words").innerText = words;
}
