let mintCount = 704645;
const mint = document.getElementById("mint");
mint.style.color = "white"
mint.innerHTML = mintCount;

function updateMint() {
  mintCount += 8;
  mint.innerHTML = mintCount;
}
setInterval(updateMint, 6000);
