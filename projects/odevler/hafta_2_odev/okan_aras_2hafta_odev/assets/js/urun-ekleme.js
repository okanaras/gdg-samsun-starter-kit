// jq deki .ready gibi sayfa hazir oldugunda

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("Page is ready!");

  let btnUrunEkle = document.getElementById("btnUrunEkle");

  let urunler = JSON.parse(localStorage.getItem("urunler"));

  if (urunler == null) {
    urunler = [];
  }

  listele(urunler);
  //   console.log(urunler);

  btnUrunEkle.addEventListener("click", function (e) {
    let urunAdi = document.getElementById("urunAdi").value.trim();
    // urunadi.value;
    // alert(urunAdi);

    let isAdded = urunler.includes(urunAdi);

    if (isAdded) {
      alert("bu urun daha once eklenmistir");
    } else {
      urunler.unshift(urunAdi);
      localStorage.setItem("urunler", JSON.stringify(urunler));
      listele(urunler);
    }
  });

  // urun listesi - listeleme
  function listele(urunler) {
    if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {
      /**
       * listede urun yoksa veya gelen liste array olup length 0 ise
       */

      let liElement = document.createElement("li");
      liElement.className = "list-group-item bg-warning text-white";
      liElement.textContent = "Henuz listede bir urun yok.";

      let urunListesi = document.getElementById("urunListesi");
      urunListesi.innerHTML = "";
      urunListesi.appendChild(liElement);
    } else {
      urunListesi.innerHTML = "";

      urunler.forEach(function (urun, index, array) {
        //   console.log(urun);
        //   console.log(index);
        //   console.log(array);

        let liElement = document.createElement("li");
        liElement.className = "list-group-item";
        liElement.textContent = urun;

        let iElement = document.createElement("i");
        iElement.className = "bi bi-trash float-end delete-product";
        iElement.id = index;

        urunListesi.appendChild(liElement);
        liElement.appendChild(iElement);
      });
    }
  }

  // urun listesi - filtreleme

  let searchInput = document.getElementById("search");

  searchInput.addEventListener("input", function (e) {
    let searchValue = this.value;

    let filterelenmisUrunler = urunler.filter(function (urun, index, array) {
      return urun.toLowerCase().includes(searchValue.toLowerCase());
    });

    listele(filterelenmisUrunler);
  });

  document.body.addEventListener("click", function (e) {
    // console.log(e);
    let element = e.target; // tiklanan elemneti temsil eder
    // // matches(selectors)
    // let elementIsDeleteIcon = element.matches(".delete-product");

    // // className.include(string)
    let elementIsDeleteIcon = element.className.includes("delete-product");
    if (elementIsDeleteIcon) {
      // eslesen elemente tiklanildiginda calisacak kodlar

      let silinecekUrunID = element.id;

      urunler.splice(silinecekUrunID, 1);

      listele(urunler);
      localStorage.setItem("urunler", JSON.stringify(urunler));
    }
  });

  /** */
});
