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
		alert('input sudah berhasil');
	}
});