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

  let urunler = JSON.parse(localStorage.getItem("urunler"));

  if (urunler == null) {
    urunler = [];
  }

  urunListele(urunler);

  let yemekListesi = JSON.parse(localStorage.getItem("yemek_listesi"));
  if (yemekListesi == null) {
    yemekListesi = [];
  }

  yemekAdi.addEventListener("input", function (e) {
    let name = this.value;
    if (name.length > 1) {
      yemekBaslik.textContent = name;
    } else {
      yemekBaslik.textContent = "Yemek Basligi";
    }

    yemek.yemekAdi = name;
  });

  yemekTarif.addEventListener("input", function (e) {
    let detay = this.value;

    if (detay.length > 1) {
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

  document.body.addEventListener("click", function (e) {
    let element = e.target; // tiklanan elementi sec

    let elementIsProductAdd = element.className.includes("add-product");
    let elementIsProductDelete = element.className.includes(
      "delete-product-content"
    );

    let urunAdi = false;

    if (
      elementIsProductAdd &&
      idExistsUrunler(element.id) &&
      (urunAdi = urunler[element.id]) &&
      !isNameExistsIcindekiler(urunAdi)
    ) {
      let product = {
        id: element.id,
        miktar: "",
        name: urunAdi,
      };

      icindekiler.unshift(product);

      urunIcerikListele(icindekiler);

      yemek.icindekiler = icindekiler;

      let parentLi = element.parentElement;
      parentLi.style.textDecoration = "line-through";

      element.style.pointerEvents = "none";
      element.style.opacity = "0.5";
    }

    if (
      elementIsProductDelete &&
      element.hasAttribute("data-id") &&
      (elementID = element.getAttribute("data-id")) &&
      idExistsUrunler(elementID) &&
      (urunAdi = urunler[elementID]) &&
      isNameExistsIcindekiler(urunAdi)
    ) {
      icindekiler = icindekiler.filter((product) => product.name !== urunAdi);
      urunIcerikListele(icindekiler);
      yemek.icindekiler = icindekiler;

      let iElement = document.getElementById(elementID);
      iElement.style.pointerEvents = "auto";
      iElement.style.opacity = "1";

      let parentLi = iElement.parentElement;
      parentLi.style.textDecoration = "none";
    }
  });

  icerikListesi.addEventListener("input", function (e) {
    let degisenElement = e.target;

    if (degisenElement.classList.contains("miktar")) {
      let miktarUrunID = degisenElement.getAttribute("data-id");
      console.log("degisti");
      icindekiler.find(function (item) {
        if (item.id == miktarUrunID) {
          item.miktar = degisenElement.value;
        }
      });
      console.log(icindekiler);
    }
  });

  btnKaydet.addEventListener("click", function (e) {
    if (!yemekBaslikKontrol()) {
      yemekListesi.push(yemek);
      localStorage.setItem("yemek_listesi", JSON.stringify(yemekListesi));

      Swal.fire({
        title: "Islem Basarili!",
        text: "Yemek Eklendi!",
        icon: "success",
        confirmButtonText: "Tamam",
      });
    } else {
      Swal.fire({
        title: "Yemek Eklenmedi!",
        text: "Daha once ayni isimle yemek eklendi!",
        icon: "warning",
        confirmButtonText: "Tamam",
      });
    }
  });

  function idExistsUrunler(id) {
    // true donerse urun var
    // false donerse urun yok
    return urunler[id] !== undefined;
  }

  function isNameExistsIcindekiler(name) {
    // icindekiler.find(function () {
    //   if ((item.name = name)) {
    //     return false;
    //   }
    //   return true;
    // });

    // console.log("icindekileri goster");
    // console.log(icindekiler.find((item) => item.name === name) !== undefined);

    return icindekiler.find((item) => item.name === name) !== undefined;
  }

  function yemekBaslikKontrol() {
    return (
      yemekListesi.find((item) => item.yemekAdi === yemek.yemekAdi) !==
      undefined
    );
  }

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
        //   console.log(urun);
        //   console.log(index);
        //   console.log(array);

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
        iElement.className = "bi bi-trash delete-product-content";
        iElement.setAttribute("data-id", urun.id);

        let labelElement = document.createElement("label");
        labelElement.setAttribute("for", "miktar-" + urun.id);
        labelElement.textContent = urun.name;

        spanElement.appendChild(iElement);
        spanElement.appendChild(labelElement);

        let inputElement = document.createElement("input");
        inputElement.placeholder = "miktar";
        inputElement.className =
          "float-end border-0 border-bottom border-black miktar";
        inputElement.id = "miktar-" + urun.id;
        inputElement.setAttribute("data-id", urun.id);

        liElement.appendChild(spanElement);
        liElement.appendChild(inputElement);
        icerikListesi.appendChild(liElement);
      });
    }
  }
});
