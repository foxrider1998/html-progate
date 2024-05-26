// Cetak "Hello World" ke console
console.log("Hello World");

// Cetak "Ninja Ken" ke console
console.log("Ninja Ken");

// Ubah baris di bawah menjadi komentar
// console.log("Ubah baris ini menjadi komentar");

// ###################################
// Cetak hasil 5 tambah 3
console.log(5 + 3);

// Cetak hasil 20 kurang 8
console.log(20 - 8);

// Cetak string "4 + 5"
console.log("4 + 5");




// Cetak hasil 8 kali 4 di console.
console.log(8 * 4);

// Cetak hasil 24 bagi 4 di console.
console.log(24 / 4);

// Cetak sisa setelah membagi 7 dengan 2 di console.
console.log(7 % 2);




// Cetak kombinasi dari string "Guru " dan "Domba"
console.log("Guru " + "Domba");

// Cetak kombinasi dari "20" dan "15" (dan jadikan sebagai string)
console.log("20"+"15");





// Deklarasikan nama variable dengan nilai string "Ninja Ken"
let name = "Ninja Ken";

// Cetakan nilai nama variable
console.log(name);


// Deklarasikan variable length
let length=5;

// Cetak nilai variable length
console.log(length);

// Gunakan variable length untuk mencetak hasil area lingkaran
console.log(3*length*length);




// let name = "Ninja Ken";
console.log(name);
name = "Birdie";
console.log(name);





let number = 7;
console.log(number);

// Tambahkan 3 ke nilai variable number
number+=3;

console.log(number);

// Bagi nilai variable number dengan 2
number= number/2;

console.log(number);





// Deklarasikan constant language
const  language= "Prancis";

// Cetak nilai constant language
console.log(language);

// Gunakan constant language untuk mencetak "Saya bisa berbicara bahasa ____"
console.log("Saya bisa berbicara bahasa "+language);








// const name = "Ninja Ken";
const age = 14;

// Cetak string "Nama saya adalah ____"
console.log("Nama saya adalah "+ name);



// Cetak string "Hari ini saya berusia ____ tahun"

console.log("Hari ini saya berusia "+age+" tahun ");





// const name = "Ninja Ken";
// const age = 14;

// Cetak string "Nama saya adalah ____"
console.log(`Nama saya adalah ${name}`);



// Cetak string "Hari ini saya berusia ____ tahun"

console.log(`Hari ini saya berusia ${age} tahun`);

     






const level = 12;

// Tambahkan pernyataan if dengan kondisi: level > 10
if (level>10) {
  console.log("Level Anda lebih tinggi dari 10");
}



// const age = 24;

// Cetak hasil dari age >= 18
console.log(age >= 18);

// Cetak hasil dari age < 18
console.log(age < 18);

/* Ketika nilai dari age lebih besar atau sama dengan 18
dan cetak "Saya berusia lebih dari 18 tahun" */
if (age >= 18) {
    console.log("Saya berusia lebih dari 18 tahun");
}





const password = "ninjaken";

// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if (password === "ninjaken") {
    console.log("Berhasil log in");
}

// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if (password !== "ninjaken") {
    console.log("Password salah");
}






// const age = 17;

// Ketika kondisi tidak terpenuhi, cetak "Saya berusia di bawah 18 tahun"
if (age >= 18) {
  console.log("Saya berusia diatas 18 tahun");
} else  {
  
  console.log("Saya berusia dibawah 18 tahun");
}




// const age = 17;



/* Ketika age lebih besar atau sama dengan 10, cetak:
"Saya berusia di bawah 18 tahun, namun di atas 9 tahun" */
if (age >= 18) {
  console.log("Saya di atas 18 tahun");
}else if (age >= 10) {
  console.log("Saya berusia di bawah 18 tahun, namun di atas 9 tahun");
} else {
  console.log("saya dibawah 10 tahun");
}



// const age = 24;

/* Tambahkan pernyataan if dengan kondisi untuk "jika constant age sama dengan atau lebih besar dari 20 dan kurang dari 30".
Di statement if, cetak string 
Saya di usia 20-an tahun */
if (age >= 20 && age < 30) {
  console.log("Saya di usia 20-an tahun");
}





const rank = 2;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;


}




// const rank = 2;



switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;
  case 2:
    console.log("Anda meraih medali perak!");
    break;
  case 3:
    console.log("Anda meraih medali perunggu!");
    break;
  default:
    console.log("Semoga sukses dikesempatan berikutnya");
      break;
}




// Untuk mem-print angka dari 1 hingga 100 menggunakan loop for di JavaScript, Anda bisa mengikuti langkah-langkah yang sudah dijelaskan. Berikut adalah skrip lengkapnya:

// Definisi Variable: Definisikan variabel number dan beri nilai awal 1.
// Kondisi: Tentukan kondisi loop agar terus berlanjut selama number kurang dari atau sama dengan 100.
// Update Variable: Tambahkan 1 ke variabel number di setiap iterasi.
// Berikut adalah kode lengkap untuk file script.js:

// javascript
// Salin kode
for (let number = 1; number <= 100; number++) {
  console.log(number);
}
// Penjelasan:

// let number = 1: Mendefinisikan variabel number dengan nilai awal 1.
// number <= 100: Kondisi loop for yang akan memastikan loop berjalan selama nilai number kurang dari atau sama dengan 100.
// number++: Increment operator yang menambah nilai number sebanyak 1 di setiap iterasi loop.
// Kode di atas akan mencetak angka dari 1 hingga 100 di konsol. Anda dapat menjalankan kode ini di lingkungan JavaScript seperti browser atau Node.js untuk melihat hasilnya.


for (let number = 1; number <= 100; number++) {
  // Gunakan statement if untuk mencetak string "Kelipatan 3" ketika nilai angka adalah kelipatan 3
  if (number % 3 === 0) {
    console.log("Kelipatan 3");
  } else {
    console.log(number);
  }
}
// Penjelasan:

// let number = 1: Mendefinisikan variabel number dengan nilai awal 1.
// number <= 100: Kondisi loop for yang akan memastikan loop berjalan selama nilai number kurang dari atau sama dengan 100.
// number++: Increment operator yang menambah nilai number sebanyak 1 di setiap iterasi loop.
// if (number % 3 === 0): Memeriksa apakah number adalah kelipatan 3 dengan menggunakan operator modulus (%). Jika number habis dibagi 3, maka number % 3 akan bernilai 0.
// console.log("Kelipatan 3"): Mencetak pesan "Kelipatan 3" ke konsol jika kondisi if terpenuhi.
// else { console.log(number) }: Mencetak nilai number ke konsol jika kondisi if tidak terpenuhi.
// Dengan kode ini, Anda akan melihat angka dari 1 hingga 100 di konsol, dan untuk setiap angka yang merupakan kelipatan 3, akan dicetak pesan "Kelipatan 3" alih-alih angka tersebut.


// Definisikan constant animals dan berikan array dengan 3 string
const animals = ["anjing", "kucing", "domba"];

// Cetak nilai constant animals di console
console.log(animals);
// Penjelasan:

// const animals = ["anjing", "kucing", "domba"];: Mendefinisikan konstanta animals dan memberikan array yang berisi tiga string sebagai nilainya.
// console.log(animals);: Mencetak nilai dari konstanta animals ke konsol.




// Definisikan constant animals dan berikan array dengan 3 string
const animals = ["anjing", "kucing", "domba"];

// Ambil elemen array pertama (index 0) dan cetak di console
console.log(animals[0]); // anjing

// Ambil elemen array ketiga (index 2) dan cetak di console
console.log(animals[2]); // domba
// Penjelasan:

// animals[0]: Mengakses elemen pertama dari array animals. Indeks array di JavaScript dimulai dari 0, jadi elemen pertama memiliki indeks 0.
// console.log(animals[0]);: Mencetak elemen pertama, yaitu "anjing", ke konsol.
// animals[2]: Mengakses elemen ketiga dari array animals. Indeks 2 mengacu pada elemen ketiga dalam array.
// console.log(animals[2]);: Mencetak elemen ketiga, yaitu "domba", ke konsol.





// const animals = ["anjing", "kucing", "domba"];

// Ganti elemen ketiga dari array menjadi "kelinci"
animals[2] = "kelinci";

// Cetak elemen ketiga dari constant animals ke console
console.log(animals[2]);
// Penjelasan:

// animals[2] = "kelinci";: Mengubah elemen ketiga dari array animals (dengan indeks 2) menjadi string "kelinci".
// console.log(animals[2]);: Mencetak elemen ketiga dari array animals yang telah diperbarui ke konsol.




// Buat loop for untuk mencetak semua nilai di array
for (let i = 0; i < 3; i++) {
  // Gunakan constant animals dan variable i untuk mengakses dan mencetak element array
  console.log(animals[i]);
}
// Penjelasan:

// let i = 0: Mendefinisikan variabel i dengan nilai awal 0.
// i < 3: Kondisi loop for yang akan memastikan loop berjalan selama nilai i kurang dari 3.
// i++: Increment operator yang menambah nilai i sebanyak 1 di setiap iterasi loop.
// console.log(animals[i]);: Mengakses dan mencetak elemen array animals berdasarkan indeks i.





const animals = ["anjing", "kucing", "domba", "kelinci", "monyet", "harimau", "beruang", "gajah"];

// Gunakan property length untuk mencetak jumlah elemen di array
console.log(animals.length); // Ini akan mencetak jumlah elemen dalam array

// Gunakan property length untuk mengubah kondisi di bawah
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
// Penjelasan:

// animals.length: Mengembalikan jumlah elemen dalam array animals. Dalam kasus ini, animals.length akan mengembalikan 8.
// console.log(animals.length);: Mencetak jumlah elemen dalam array ke konsol.
// for (let i = 0; i < animals.length; i++): Memperbarui kondisi loop for agar menggunakan panjang array animals untuk iterasi, sehingga loop mencetak semua elemen dalam array.






// Definisikan constant character dan berikan object dengan 2 elemen
const character = {
  name: "Ninja Ken",  // Properti pertama dengan nilai string
  age: 14            // Properti kedua dengan nilai integer
};

// Cetak nilai constant character di console
console.log(character);
// Penjelasan:

// const character = { ... }: Mendefinisikan konstanta character sebagai sebuah objek dengan dua properti.
// name: "Ninja Ken": Properti pertama dari objek character dengan nilai string "Ninja Ken".
// age: 14: Properti kedua dari objek character dengan nilai integer 14.
// console.log(character);: Mencetak nilai dari objek character ke konsol.




const character = {name: "Ninja Ken", age: 14};

// Cetak nilai properti name milik character
console.log(character.name);

// Ganti nilai age milik character ke 20
character.age = 20;

// Cetak constant character ke console
console.log(character);
// Penjelasan:

// console.log(character.name);: Mencetak nilai properti name dari objek character ke konsol. Ini akan mencetak "Ninja Ken".
// character.age = 20;: Mengubah nilai properti age dari objek character menjadi 20.
// console.log(character);: Mencetak objek character yang telah diperbarui ke konsol.




const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 1000}
];

// Cetak elemen pertama milik array characters
console.log(characters[0]);

// Cetak nilai milik properti name dari elemen array characters kedua
console.log(characters[1].name);




const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
];

// Selesaikan loop for dibawah
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // Tentukan nilai constant character
  const character = characters[i];
  
  // Print "Nama saya adalah ____"
  console.log(`Nama saya adalah ${character.name}`);
  
  // Print "Saya berusia ____ tahun"
  console.log(`Saya berusia ${character.age} tahun`);
  
}









const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  {name: "Birdie"}
  // Tambahkan element di bawah
  
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  console.log(`Saya berumur ${character.age} tahun`);
}











const characters = [
  {name: "Ninja Ken", age: 14},
  {name: "Guru Domba", age: 100},
  {name: "Baby Ninja Ben", age: 5},
  {name: "Birdie"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`Nama saya adalah ${character.name}`);
  
  // Tambahkan statement if untuk memeriksa apakah character.age adalah undefined
  if (character.age === undefined) {
    console.log("Umur saya rahasia!");
  } else {
    console.log(`Saya berumur ${character.age} tahun`);
  }
}






const cafe = {
  name: "Progate Cafe",
  businessHours: {
    // Tetapkan object yang sudah disediakan untuk businessHours
    opening: "10:00",
    closing: "20:00"
  },
};

// Cetak "Nama: ____"
console.log(`Nama: ${cafe.name}`);

// Cetak "Jam: Dari jam ____ sampai jam ____"
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);








const cafe = {
  name: "Progate Cafe",
  businessHours: {
    opening: "10:00",
    closing: "20:00"
  },
  // Tambahkan property menu dan berikan array yang sudah disediakan
  menu: ["Kopi", "Teh", "Kue Cokelat"]
};

console.log(`Nama: ${cafe.name}`);
console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("Menu Rekomendasi");

// Gunakan loop for untuk mencetak nilai array menu
for (let i = 0; i < cafe.menu.length; i++) {
  console.log(cafe.menu[i]);
}





const greet = function() {
  console.log("Halo!");
  console.log("Ayo belajar function!");
};

// Panggil function greet di bawah
greet();
//#endregion









// Definisikan constant hello dan berikan function untuk constant tersebut
const hello = function() {
  // Cetak "Halo!" dalam function
  console.log("Halo!");

  // Cetak "Saya ____", dengan nama Anda sebagai pengganti field kosong (____)
  console.log("Saya ChatGPT");
};

// Panggil function yang diberikan untuk constant hello
hello();






// Berikan arrow function untuk constant greet
const greet = () => {
  // Cetak "Halo!" dalam arrow function
  console.log("Halo!");
};

// Panggil function greet di bawah definisi
greet();







// Berikan arrow function untuk constant greet dengan parameter name
const greet = (name) => {
  // Cetak "Halo, ____" dengan nilai name
  console.log(`Halo, ${name}`);
};

// Panggil function greet dengan argument "Guru Domba"
greet("Guru Domba");









// Berikan arrow function untuk constant add dengan parameter number1 dan number2
const add = (number1, number2) => {
  // Cetak hasil penambahan number1 dan number2 di console
  console.log(number1 + number2);
};

// Panggil function add dengan meneruskan 5 dan 7 sebagai argument
add(5, 7);







// Berikan arrow function untuk constant half dengan parameter number
const half = (number) => {
  // Bagi number dengan 2, lalu return hasilnya
  return number / 2;
};

// Teruskan nilai 130 sebagai argument ke function half, lalu tetapkan hasil sebagai constant result
const result = half(130);

// Cetak pesan "Separuh dari 130 adalah ____" di console, ganti field kosong dengan nilai result
console.log(`Separuh dari 130 adalah ${result}`);






const check = (number) => {
  // periksa apakah number adalah kelipatan dari 3 dan return hasilnya
  return number % 3 === 0;
};

// Panggil function check dalam kondisi statement if
if ( check(123) ) {
  console.log("Multiple of 3");
} else {
  console.log("Not a multiple of 3");
}






// Definisikan constant name dengan nilai string "Ninja Ken"
const name = "Ninja Ken";

// Berikan arrow function untuk constant introduce dengan parameter name
const introduce = (name) => {
  // Cetak "Saya ____" di console, ganti field kosong dengan nilai constant name
  console.log(`Saya ${name}`);
};

// Panggil function yang diberikan untuk constant introduce dengan meneruskan "Guru Domba" sebagai argument
introduce("Guru Domba");

// Di luar function, cetak nilai constant name di console
console.log(name);








const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum


// Cetak "Nilai maksimum adalah __"

// Deklarasikan getMax dengan arrow function
const getMax = (a, b, c) => {
  // Menggunakan Math.max untuk mendapatkan nilai maksimum dari a, b, dan c
  return Math.max(a, b, c);
};

// Dapatkan nilai maksimum dari number1, number2, number3 dengan menggunakan function getMax
const maximumValue = getMax(number1, number2, number3);

// Cetak "Nilai maksimum adalah ___" di console
console.log(`Nilai maksimum adalah ${maximumValue}`);












// Definisikan constant animal dan berikan object untuk constant tersebut
const animal = {
  // Atur property name dengan nilai "Leo"
  name: "Leo",
  // Atur property age dengan nilai 3
  age: 3,
  // Atur property greet dengan function yang mencetak "Halo"
  greet: () => {
    console.log("Halo");
  }
};

// Cetak nilai object animal
console.log(animal);

// Cetak property name dari constant animal
console.log(animal.name);

// Panggil function dalam property greet dari object animal
animal.greet();







// Definisikan class Animal
class Animal {

}







class Animal {
}

// Tetapkan instance class Animal ke constant animal


// Tampilkan nilai milik constant animal

// Definisikan constant animal dan buat instance baru dari class Animal
const animal = new Animal();

// Cetak nilai constant animal
console.log(animal);









// Definisikan class Animal dengan constructor
class Animal {
  // Constructor akan dipanggil saat membuat instance baru dari kelas Animal
  constructor() {
    // Di dalam constructor, cetak "Membuat instance baru"
    console.log("Membuat instance baru");
  }
}

// Buat instance baru dari class Animal
const animal = new Animal();








// Definisikan class Animal dengan constructor
class Animal {
  // Constructor akan dipanggil saat membuat instance baru dari kelas Animal
  constructor() {
    // Berikan string "Leo" untuk property name
    this.name = "Leo";
    // Berikan angka 3 untuk property age
    this.age = 3;
  }
}

// Buat instance baru dari class Animal
const animal = new Animal();

// Gunakan property name dari constant animal untuk mencetak "Nama: ____"
console.log(`Nama: ${animal.name}`);

// Gunakan property age dari constant animal untuk mencetak "Usia: __"
console.log(`Usia: ${animal.age}`);








class Animal {
  // Tambahkan argument「name」dan「age」
  constructor(name, age) {
    // Ganti nilai string "Leo" dengan nilai milik argument name
    this.name = name;
    
    // Ganti「3」dengan nilai milik argument age
    this.age = age;
  }
}

// Teruskan argument「"Mocha"」「8」ke constant animal di bawah
const animal = new Animal("Mocha", 8);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);









class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Tambahkan method greet
  greet() {
    console.log("Halo");
  }
}

const animal = new Animal("Leo", 3);

console.log(`Nama: ${animal.name}`);
console.log(`Usia: ${animal.age}`);

// Panggil method greet milik animal instance
animal.greet();








class Animal {
  constructor(nama, usia) {
    this.name = nama;
    this.age = usia;
  }
  
  greet() {
    console.log("Halo");
  }
  
  // Tambahkan method info
  info() {
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

const animal = new Animal("Leo", 3);
animal.greet();

// Panggil method info menggunakan constant animal
animal.info();
