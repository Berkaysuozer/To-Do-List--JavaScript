//KULLANICI YANLIŞ BİR DEĞER GİRDİĞİNDE ÇALIŞACAK ALERT FONKSİYONUMUZ.
const alertFunction = () => `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>BOŞ BİR DEĞER GİREMEZSİNİZ!</strong>
<button type="button" class="btn-primary" data-bs-dismiss="alert" aria-label="Close">❌</button>
</div>
`;
//KULLANICI BAŞARILI BİR GİRİŞ YAPTIĞINDA GÖSTERİLCEK TOAST MESSAGE
const success = () => `<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Başarıyla giriş yaptınız</strong>
<button type="button" class="btn btn-primary" data-bs-dismiss="alert" aria-label="Close">❌</button>
</div>
`;

const ALERTDOM = document.querySelector('#alert'); // QUERYSELECTOR İLE HTML DOSYAMIZ İÇERİSİNDEKİ ALERTİ  SEÇİYORUZ
const ulDOM = document.querySelector('#list');
const TODO = document.querySelector('#task');

//TODO ELEMENT EKLEME
const addItem = (todovalue) => {
	let liDOM = document.createElement('li'); // CREATEELEMENT METODU İLE YENİ BİR LİST İTEM OLUŞTURDUK.
	liDOM.innerHTML = todovalue; //LİST İTEMIMIZIN İÇERİSİNDE KULLANICIDAN ALDIĞIMIZ VERİYİ ATIYORUZ
	ulDOM.append(liDOM); // SON OLARAK UL'MİZİN İÇİNE BU DEĞERİ APPEND EDİYORUZ.
};

//EKLE BUTONUNA TIKLANDIĞINDA ÇALIŞACAK FONKSİYONUMUZ.
function newElement() {
	if (TODO.value === '' || TODO.value.replace(/^\s+|\s+$/g, '').length == 0) {
		//EĞER KULLANICI BİR DEĞER GİRMEZSE VEYA BOŞLUK DEĞERİ GİRERSE HATA VER
		ALERTDOM.innerHTML = alertFunction(); //HTML DOSYAMIZDAKİ ALERTİN İÇİNE ALERT FONKSİYONUMUZU GÖNDERDİK
	} else {
		ALERTDOM.innerHTML = success();
		addItem(TODO.value);
		TODO.value = '';
	}
}

// ÜSTÜNÜ ÇİZME
var list = document.querySelector('ul');
list.addEventListener(
	'click',
	function (ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	},
	false
);

//BERKAYSUOZER 21.04.2021

// 2.YOL BU YOL DAHA İYİ AMA KOMPLEX ŞUAN İÇİN ANLAMAKDA ZORLANIYORUM

//PROJENIN TAMAMI BURDA
/* var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement('SPAN');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = 'none';
	};
}

var list = document.querySelector('ul');
list.addEventListener(
	'click',
	function (ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	},
	false
);

function newElement() {
	var li = document.createElement('li');
	var inputValue = document.getElementById('task').value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '' || inputValue.replace(/^\s+|\s+$/g, '').length == 0) {
		$('.error').toast('show');
	} else {
		$('.success').toast('show');
		document.getElementById('list').appendChild(li);
	}
	document.getElementById('task').value = '';

	var span = document.createElement('SPAN');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		};
	}
}
 */
