document.addEventListener("DOMContentLoaded", function name(event) {
  console.log("page loaded");
  let yemekAdi = document.getElementById("yemekAdi");
  let yemekTarif = document.getElementById("yemekTarif");
  let yemekBaslik = document.getElementById("yemekBaslik");
  let tarifDetay = document.getElementById("tarifDetay");
  let urunListesi = document.getElementById("urunListesi");
  let icerikListesi = document.getElementById("icerikListesi");
  let searchInput = document.getElementById("search");
  let btnKaydet = document.getElementById("btnKaydet");

  let yemek = {
    yemekAdi: "",
    yemekTarif: "",
    icindekiler: [],
  };
  let icindekiler = [];

  let yemeklerList = JSON.parse(localStorage.getItem("yemeklerList"));
  if (yemeklerList == null) {
    yemeklerList = [];
  }

  let urunler = JSON.parse(localStorage.getItem("urunler"));
  if (urunler == null) {
    urunler = [];
  }
  urunListele(urunler);

  yemekAdi.addEventListener("input", function (e) {
    let name = this.value;
    if (name.length > 0) {
      yemekBaslik.textContent = name;
    } else {
      yemekBaslik.textContent = "Yemek Basligi";
    }

    yemek.yemekAdi = name;
  });

  yemekTarif.addEventListener("input", function (e) {
    let detay = this.value;

    if (detay.length > 0) {
      tarifDetay.textContent = detay;
    } else {
      tarifDetay.textContent = "Tarif Detayi";
    }

    yemek.yemekTarif = detay;
  });

  // urun listesi - filtreleme
  searchInput.addEventListener("input", function (e) {
    let searchValue = this.value;

    let filterelenmisUrunler = urunler.filter(function (urun, index, array) {
      return urun.toLowerCase().includes(searchValue.toLowerCase());
    });

    urunListele(filterelenmisUrunler);
  });

  // icerik listesine eleman gonderme
  document.body.addEventListener("click", function (e) {
    let element = e.target; // tiklanan elementi sec
    let elementIsProductAdd = element.className.includes("add-product");

    if (elementIsProductAdd) {
      let product = {
        id: element.id,
        miktar: "",
        name: urunler[element.id],
      };

      icindekiler.unshift(product);
      urunIcerikListele(icindekiler);

      yemek.icindekiler = icindekiler;

      let productID = elementIsProductAdd.id;
      urunler.splice(productID, 1);

      urunListele(urunler);
    }
  });

  // icerik listesindeki li silme
  document.body.addEventListener("click", function (e) {
    let element = e.target;
    let isElementDeleteContent = element.matches(".delete-product-content");

    if (isElementDeleteContent) {
      let productID = element.id;

      console.log(productID);

      let productName = element.parentElement.textContent;

      icindekiler.splice(productID, 1);
      urunIcerikListele(icindekiler);

      urunler.unshift(productName);
      urunListele(urunler);
    }
  });

  // kaydet butonuna basildigi zamanki events
  btnKaydet.addEventListener("click", function (e) {
    // alert("tikladin");
    icindekiler.forEach(function (val, key, arr) {
      let miktar = document.getElementById("miktar-" + val.id).value.trim();
      val.miktar = miktar;
    });

    yemeklerList.push(yemek);
    localStorage.setItem("yemeklerList", JSON.stringify(yemeklerList));
    window.location.reload(); // sayfayi yeniletmezsem ayni veri uzerine yaziyor
  });

  function urunListele(urunler) {
    if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {
      /**
       * listede urun yoksa veya gelen liste array olup length 0 ise
       */

      let liElement = document.createElement("li");
      liElement.className = "list-group-item bg-warning text-white";
      liElement.textContent = "Henuz listede bir urun yok.";

      urunListesi.innerHTML = "";
      urunListesi.appendChild(liElement);
    } else {
      urunListesi.innerHTML = "";

      urunler.forEach(function (urun, index, array) {
        // console.log(urun);
        // console.log(index);
        // console.log(array);

        let liElement = document.createElement("li");
        liElement.className = "list-group-item";
        liElement.textContent = urun;

        let iElement = document.createElement("i");
        iElement.className = "bi bi-plus-lg float-end add-product";
        iElement.id = index;

        urunListesi.appendChild(liElement);
        liElement.appendChild(iElement);
      });
    }
  }

  function urunIcerikListele(urunler) {
    if (urunler == null || (Array.isArray(urunler) && urunler.length < 1)) {
      /**
       * listede urun yoksa veya gelen liste array olup length 0 ise
       */

      let liElement = document.createElement("li");
      liElement.className = "list-group-item bg-warning text-white";
      liElement.textContent = "Henuz listede bir urun yok.";

      icerikListesi.innerHTML = "";
      icerikListesi.appendChild(liElement);
    } else {
      icerikListesi.innerHTML = "";

      urunler.forEach(function (urun, index, array) {
        let liElement = document.createElement("li");
        liElement.className = "d-flex justify-content-between";

        let spanElement = document.createElement("span");

        let iElement = document.createElement("i");
        iElement.className = "bi bi-trash delete-product-content me-1";

        let labelElement = document.createElement("label");
        labelElement.setAttribute("for", "miktar-" + urun.id);
        labelElement.textContent = urun.name;

        spanElement.appendChild(iElement);
        spanElement.appendChild(labelElement);

        let inputElement = document.createElement("input");
        inputElement.placeholder = "miktar";
        inputElement.className =
          "float-end border-0 border-bottom border-black";
        inputElement.id = "miktar-" + urun.id;

        liElement.appendChild(spanElement);
        liElement.appendChild(inputElement);
        icerikListesi.appendChild(liElement);
      });
    }
  }
});
