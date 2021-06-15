let idli = 50 ,  paraths = 20 , cheela = 20, upma = 40 ;
let idli_q = 0 , paraths_q = 0 , cheela_q = 0, upma_q = 0
let itemPrice1 = '', itemPrice2 = '' , itemPrice3 = '', itemPrice4 = ''

document.getElementById("name").addEventListener("keyup", function () {
  document.getElementById("cName").innerHTML = this.value;
});
document.getElementById("phone").addEventListener("keyup", function () {
  document.getElementById("cPhone").innerHTML = this.value;
});

document.getElementById('item1').addEventListener('keyup' , function () {
    if (this.value === 0 || this.value ==='') {
        itemPrice1 = ''
        idli_q = 0

        showBill()
    } else {
        
        idli_q = this.value
        itemPrice1 = ` 
        <tr>
        <td >Oats Idli </td>
        <td>Rs. 50</td>
        <td>${idli_q}</td>
        <td>${idli_q*idli}</td>
        </tr>`
        showBill()
    }
})
document.getElementById('item2').addEventListener('keyup' , function () {
    if (this.value === 0 || this.value ==='') {
        itemPrice2 = ''
        paraths_q = 0

        showBill()
    } else {
    paraths_q = this.value
    itemPrice2 = ` 
    <tr>
      <td >Dal ka Paratha</td>
      <td>Rs. 20</td>
      <td>${paraths_q}</td>
      <td>${paraths_q*paraths}</td>
    </tr>`
    showBill()
    }
})
document.getElementById('item3').addEventListener('keyup' , function () {
    if (this.value === 0 || this.value ==='') {
        itemPrice3 = ''
        cheela_q = 0

        showBill()
    } else {
    cheela_q = this.value
    itemPrice3 = ` 
    <tr>
      <td >Moong Dal Cheela</td>
      <td>Rs. 20</td>
      <td>${cheela_q}</td>
      <td>${cheela_q*cheela}</td>
    </tr>`
    showBill()
    }
})
document.getElementById('item4').addEventListener('keyup' , function () {
    if (this.value === 0 || this.value ==='') {
        itemPrice4 = ''
        upma_q = 0

        showBill()
    } else {
    upma_q = this.value
    itemPrice4 = ` 
    <tr>
      <td >Rawa Upma</td>
      <td>Rs. 40</td>
      <td>${upma_q}</td>
      <td>${upma_q*upma}</td>
    </tr>`
    showBill()
    }
})

function showBill() {
    document.getElementById("tBody").innerHTML = itemPrice1 + itemPrice2 + itemPrice3 + itemPrice4
    document.getElementById('total_price').innerHTML = idli_q*idli+paraths_q*paraths+cheela_q*cheela+upma_q*upma
}