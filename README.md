# NiceRadius API
NiceRadius | Login Page MikroTik API.

Anda dapat membuat template login page MikroTik anda sendiri dan menambahkan beberapa fitur yang tersedia di NiceRadius.
Berikut adalah beberapa contoh penggunaan niceradius.js

Yang pertama anda harus menyesuaikan beberapa variable apiKey dan routerID pada file niceradius.js

Jika anda belum memilikinya, Silahkan daftar disini https://niceradius.com untuk mendapatkan apiKey anda.

```js
const apiKey = 'API_KEY_ANDA';
const routerID = 'ROUTER_ID';
```

Setelah anda menyesuaikan kedua variable tersebut, Anda harus menambahkan baris kode berikut kedalam tag body pada file HTML anda.

```html
<script type="text/javascript" src="jquery-3.7.1.js"></script>
<script type="text/javascript" src="niceradius.js"></script>
```

Mengambil data NAS :
```js
getData('preferences').then(result => {
  console.log(result);
});
```

Mengambil data pengumuman :
```js
getData('notice').then(result => {
  console.log(result);
});
```

Mengambil data gambar slide :
```js
getData('images').then(result => {
  console.log(result);
});
```

Mengambil daftar harga / profile voucher :
```js
getData('pricing').then(result => {
  console.log(result);
});
```

Mengambil daftar metode pembayaran yang tersedia :
```js
var product_id = 'ID PRODUK ANDA';
getPaymentMethod(product_id).then(result => {
  console.log(result);
});
```

Checkout Voucher & Create Invoice :
```js
var item_id = 'ID PRODUK ANDA';
const params = {
  "item_id" : item_id,
  "name" : 'NAMA CUSTOMER',
  "phone" : 'NOMOR TELEPON',
  "paymentMethod" : 'BR',
  "returnUrl" : "$(link-login-only)"
}

createInvoice(params).then(result => {
  console.log(result);
});
```

Mengambil riwayat transaksi :
```js
const params = {
  phone: "NOMOR TELEPON"
}
getInvoice(params).then(result => {
  console.log(result);
});
```
