const container = document.querySelector(".container");
const qrInput = document.querySelector("#qr-form input");
const qrButton = document.querySelector("#qr-form button");
const qrImg = document.querySelector("#qr-image img");

qrButton.addEventListener("click", () => {
  gerarQrCode();
});

qrInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") gerarQrCode();
});

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        container.classList.remove("active");

    qrButton.innerHTML = "Gerar QR Code";
    }
})

function gerarQrCode() {
  if (!qrInput) return;

  const qrInputText = qrInput.value;

  qrButton.innerHTML = "Gerando QRCode...";

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputText}`;

  qrImg.addEventListener("load", () =>{

    container.classList.add("active");

    qrButton.innerHTML = "Código Gerado!";
  })
}
