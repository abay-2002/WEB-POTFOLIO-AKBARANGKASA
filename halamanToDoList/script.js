// tombol submit judul
// containerHeader

// intinya apabila valuenya == 0 maka kasih alert
// --isi alertnya "masukan kegiatan (Ok)"
// apabila tidak 0 element == value.input
let ubahJudul = document.getElementById('ubahJudul');
ubahJudul.addEventListener('click',function(){
	let masukanJudul = document.getElementById('masukanJudul');
	valueMasukanJudul = masukanJudul.value;
	if(valueMasukanJudul == 0){
		// alert('masukan judul!');
		// popUpConfirm
		let popUpParent = document.querySelector('#popUpParent');	

		// popUpWrapper
		let popUpWrapper = document.createElement('div');
		popUpWrapper.setAttribute('id', 'popupWrapper');

		//popUpConfirm
		let popUpConfirm = document.createElement('div');
		popUpConfirm.setAttribute('id', 'popUpConfirm');

		//anak-anak popUpConfirm
		//p
		let pAnakPopUpConfirm = document.createElement('p');
		pAnakPopUpConfirm.innerHTML = 'Masukan Judul!';

		// button
		let buttonOk = document.createElement('button');
		buttonOk.setAttribute('id', 'ok');
		buttonOk.setAttribute('class', 'tombol');
		buttonOk.innerHTML = 'Ok';

		// let buttonCancel = document.createElement('button');
		// buttonCancel.setAttribute('id', 'cancel');
		// buttonCancel.setAttribute('class', 'tombol');
		// buttonCancel.innerHTML = 'Cancel';

		popUpParent.appendChild(popUpWrapper);
		popUpWrapper.appendChild(popUpConfirm);
		popUpConfirm.appendChild(pAnakPopUpConfirm);
		popUpConfirm.appendChild(buttonOk);
		// popUpConfirm.appendChild(buttonCancel);

		buttonOk.addEventListener('click',function(){
			popUpParent.removeChild(popUpWrapper);
		})

	}else{
		temaJudul.innerHTML = valueMasukanJudul;	
	}	
});
// penutup containerHeader
let temaKegiatan = document.getElementById('temaKegiatan');



// === PEMISAH ===

// intinya apabila valuenya == 0 maka kasih alert
// --isi alertnya "masukan kegiatan (Ok)"
// apabila tidak 0 element == value.input

// Apabila dblclick tampilkan alert(yakin hapus?)
// apabila ok removeChild dan removeChild pop-upnya
// apabila cancel removeChild pop-upnya saja

// button tambah kegiatan 
let tambahKegiatan = document.getElementById('tambahKegiatan');

tambahKegiatan.addEventListener('click',function(){
	// value masukan kegiatan
	let masukanKegiatan = document.getElementById('masukanKegiatan');
	valueMasukanKegiatan = masukanKegiatan.value;

	if(valueMasukanKegiatan == 0){
		// alert('masukan judul!');
		// popUpConfirm
		let popUpParent = document.querySelector('#popUpParent');	

		// popUpWrapper
		let popUpWrapper = document.createElement('div');
		popUpWrapper.setAttribute('id', 'popupWrapper');

		//popUpConfirm
		let popUpConfirm = document.createElement('div');
		popUpConfirm.setAttribute('id', 'popUpConfirm');

		//anak-anak popUpConfirm
		//p
		let pAnakPopUpConfirm = document.createElement('p');
		pAnakPopUpConfirm.innerHTML = 'Masukan Kegiatan!';

		// button
		let buttonOk = document.createElement('button');
		buttonOk.setAttribute('id', 'ok');
		buttonOk.setAttribute('class', 'tombol');
		buttonOk.innerHTML = 'Ok';

		// let buttonCancel = document.createElement('button');
		// buttonCancel.setAttribute('id', 'cancel');
		// buttonCancel.setAttribute('class', 'tombol');
		// buttonCancel.innerHTML = 'Cancel';

		popUpParent.appendChild(popUpWrapper);
		popUpWrapper.appendChild(popUpConfirm);
		popUpConfirm.appendChild(pAnakPopUpConfirm);
		popUpConfirm.appendChild(buttonOk);
		// popUpConfirm.appendChild(buttonCancel);

		buttonOk.addEventListener('click',function(){
			popUpParent.removeChild(popUpWrapper);
		})
	}else{
		// kegiatanWrapper
		let olParentLi = document.querySelector('#olParentLi');
		console.log(olParentLi);

		// element child ol yaitu li ini adalah kegiatan yang diinputkan oleh user
		let li = document.createElement('li');
		li.setAttribute('class', 'awalLi liStyle');

		// .pKegiatan
		let pKegiatan = document.createElement('p');
		pKegiatan.innerHTML = valueMasukanKegiatan;
		pKegiatan.setAttribute('class', 'pKegiatan');

		// .ceklisKegiatan
		let span = document.createElement('span');
		span.setAttribute('class', 'spanBefore');

		li.appendChild(pKegiatan);
		li.appendChild(span);

		olParentLi.appendChild(li);
		// eventgambar/img apabila diclick awalLi -> akhirLi
		li.addEventListener('click',function(){
			li.classList.toggle('akhirLi');
			span.classList.toggle('spanAfter');
		});

		// menghapus li
		li.addEventListener('dblclick',function(){
			// let tanya = confirm('yakin ingin hapus?');
			// popUpConfirm
			let popUpParent = document.querySelector('#popUpParent');	

			// popUpWrapper
			let popUpWrapper = document.createElement('div');
			popUpWrapper.setAttribute('id', 'popupWrapper');

			//popUpConfirm
			let popUpConfirm = document.createElement('div');
			popUpConfirm.setAttribute('id', 'popUpConfirm');

			//anak-anak popUpConfirm
			//p
			let pAnakPopUpConfirm = document.createElement('p');
			pAnakPopUpConfirm.innerHTML = 'Yakin ingin hapus?';

			// button
			let buttonOk = document.createElement('button');
			buttonOk.setAttribute('id', 'ok');
			buttonOk.setAttribute('class', 'tombol');
			buttonOk.innerHTML = 'Iya';

			let buttonCancel = document.createElement('button');
			buttonCancel.setAttribute('id', 'cancel');
			buttonCancel.setAttribute('class', 'tombol');
			buttonCancel.innerHTML = 'Batal';

			popUpParent.appendChild(popUpWrapper);
			popUpWrapper.appendChild(popUpConfirm);
			popUpConfirm.appendChild(pAnakPopUpConfirm);
			popUpConfirm.appendChild(buttonOk);
			popUpConfirm.appendChild(buttonCancel);
			
			buttonOk.addEventListener('click',function(){
				popUpParent.removeChild(popUpWrapper);
				olParentLi.removeChild(li);
			});
			buttonCancel.addEventListener('click',function(){
				popUpParent.removeChild(popUpWrapper);
			});
		});
	}
}); 







