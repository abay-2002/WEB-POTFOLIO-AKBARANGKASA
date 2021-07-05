// contactmepopup
// wrapper/bungkus 
let bungkus = document.getElementById('bungkus');
// element
let contactMePopUpWrapper = document.createElement('div');
let dialogBox = document.createElement('div');
let span = document.createElement('span');
let confirmDialog = document.createElement('button');

contactMePopUpWrapper.setAttribute('id', 'contactMePopUpWrapper');
dialogBox.setAttribute('id','dialogBox');
confirmDialog.setAttribute('id','confirmDialog');
span.innerHTML = 'Pesan Terkirim';
confirmDialog.innerHTML = 'Ok';

contactMePopUpWrapper.appendChild(dialogBox);
dialogBox.appendChild(span);
dialogBox.appendChild(confirmDialog);

let kirim = document.getElementById('kirim');
kirim.addEventListener('click',function(){
	let nama = document.getElementById('nama');
	let email = document.getElementById('email');
	let handphone = document.getElementById('handphone');
	let pesan = document.getElementById('pesan');
	// value:
	let namaVal = nama.value;
	let emailVal = email.value;
	let handphoneVal = handphone.value;
	let pesanVal = pesan.value;
	if((namaVal == 0)||(emailVal == 0)||(handphoneVal == 0)||(pesanVal == 0)){
		alert('input data');
	}else{
		bungkus.appendChild(contactMePopUpWrapper);
		confirmDialog.addEventListener('click',function(){
			bungkus.removeChild(contactMePopUpWrapper);
		window.location.reload();
		});
	}
});