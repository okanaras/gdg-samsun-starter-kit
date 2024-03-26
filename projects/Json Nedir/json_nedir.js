/**
 * JSON => JavaScript Object Notation
 *
 * Web uzerinde veri alis-veris yapmak icin kullanilan veri formati
 *
 * Anahtar Kelime - Deger seklinde olusur
 *
 */

let person = {
  isim: "ali",
  soyad: "veli",
};

let info = {
  ad: "ali",
  soyad: "veli",
  yas: 25,
  adres: {
    sehir: "Istanbul",
    ulke: "Turkiye",
    postaCode: "34500",
  },
  hobiler: ["kitap", "film", "muzik"],
  egitim: [
    {
      derece: "onlisans",
      alan: " bilg prog",
      uni: "ist bilgi uni",
      mezuniyetYili: 2023,
    },
    {
      derece: "lise",
      alan: "anadolu",
      uni: "sabanci 50.yil",
      mezuniyetYili: 2020,
    },
  ],
  currentDate: 2024,
};

// seklinde de yazilabilinir
/*
let person1 = {
    'isim': 'ali',
    'soyad': 'veli'
};

let info1 =
{
    'ad': 'ali',
    'soyad': 'veli',
    'yas': 25,
    'adres': {
        'sehir': 'Istanbul',
        'ulke': 'Turkiye',
        'postaCode': '34500',
    },
    'hobiler': ['kitap', 'film', 'muzik'],
    'egitim': [
        {
            'derece': 'onlisans',
            'alan':' bilg prog',
            'uni': 'ist bilgi uni',
            'mezuniyetYili': 2023
        },
        {
            'derece': 'lise',
            'alan': 'anadolu',
            'uni': 'sabanci 50.yil',
            'mezuniyetYili': 2020
        },
    ],
    'currentDate': 2024
};
*/
