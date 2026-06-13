const gasURL =
'https://script.google.com/macros/s/AKfycbwQ6glGhTUZvY0lwoI5ISlaWPnuojB2A3amX12-H0Ji4vaNnoK4jsQqML5-mXd4IHxPSw/exec';

const form = document.getElementById('formDaftar');

form.addEventListener('submit', submitForm);

function submitForm(event) {

  event.preventDefault();

  const btn = document.getElementById('btnSubmit');
  const statusPesan = document.getElementById('statusPesan');

  const dataForm = {
    jenisLayanan:
      document.getElementById('jenisLayanan').value,

    namaLengkap:
      document.getElementById('namaLengkap').value,

    noWA:
      document.getElementById('noWA').value,

    alamat:
      document.getElementById('alamat').value
  };

  btn.innerHTML = 'Mengirim...';
  btn.disabled = true;

  fetch(gasURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataForm)
  })
  .then(response => response.json())
  .then(result => {

    btn.innerHTML = 'Kirim Pendaftaran';
    btn.disabled = false;

    if (result.status === 'success') {

      statusPesan.innerHTML =
        'Pendaftaran berhasil dikirim!';

      statusPesan.style.color = 'green';

      form.reset();

    } else {

      statusPesan.innerHTML =
        'Terjadi kesalahan sistem.';

      statusPesan.style.color = 'red';
    }

  })
  .catch(error => {

    btn.innerHTML = 'Kirim Pendaftaran';
    btn.disabled = false;

    statusPesan.innerHTML =
      'Gagal terhubung ke server.';

    statusPesan.style.color = 'red';

    console.error(error);

  });
}

function openModal(type){

  const modal =
    document.getElementById("modalPaket");

  const body =
    document.getElementById("modalBody");

  if(type === "umroh"){

    body.innerHTML = `
      <h2>Paket Umroh Reguler</h2>

      <ul>
        <li>Tiket PP</li>
        <li>Hotel Bintang 4</li>
        <li>Visa Umroh</li>
        <li>Makan 3x Sehari</li>
      </ul>
    `;
  }

  if(type === "haji"){

    body.innerHTML = `
      <h2>Paket Haji Khusus</h2>

      <ul>
        <li>Manasik</li>
        <li>Pendamping</li>
        <li>Hotel</li>
        <li>Transportasi</li>
      </ul>
    `;
  }

  modal.style.display = "block";
}

function closeModal(){
  document.getElementById("modalPaket")
    .style.display = "none";
}

document
.getElementById("formDaftar")
.addEventListener("submit", function(e){

  e.preventDefault();

  const layanan =
    document.getElementById("jenisLayanan").value;

  const nama =
    document.getElementById("namaLengkap").value;

  const wa =
    document.getElementById("noWA").value;

  const alamat =
    document.getElementById("alamat").value;

  const pesan =
`Assalamu'alaikum Admin Nurul Haq Travel

Nama : ${nama}
Layanan : ${layanan}
No WA : ${wa}
Alamat : ${alamat}`;

  window.open(
    `https://wa.me/6281317139740?text=${encodeURIComponent(pesan)}`
  );
});

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

  const update = ()=>{

    const target =
      +counter.dataset.target;

    const current =
      +counter.innerText;

    const increment =
      target / 50;

    if(current < target){

      counter.innerText =
        Math.ceil(current + increment);

      setTimeout(update,30);

    }else{

      counter.innerText =
        target + "+";
    }
  };

  update();
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqItems.forEach(faq => {
      if(faq !== item){
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");

  });

});

function pilihPaket(namaPaket){

document.getElementById("paket").value = namaPaket;

document
.getElementById("daftar")
.scrollIntoView({
    behavior:'smooth'
});

}