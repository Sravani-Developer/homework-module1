(function renderPartners(){
    var list = document.getElementById('partners');
    if (!list) return;
    var partners = [
      { src: 'images/partners/partner-bustour.png',      alt: 'Partner Bus Tours' },
      { src: 'images/partners/partner-cabinrental.png',  alt: 'Partner Cabin Rental' },
      { src: 'images/partners/partner-campingadv.png',   alt: 'Partner Camping Adventure' },
      { src: 'images/partners/partner-collegetours.png', alt: 'Partner College Tours' },
      { src: 'images/partners/partner-rentalbike.png',   alt: 'Partner Bike Rentals' },
      { src: 'images/partners/partner-tourgroup.png',    alt: 'Partner Tour Group' }
    ];

    list.innerHTML = ''; 

    partners.forEach(function(p, idx){
      var li  = document.createElement('li');
      li.className = 'partner';
      var img = document.createElement('img');
      img.src = p.src;
      img.alt = p.alt;
      li.appendChild(img);
      list.appendChild(li);

      if (idx < partners.length - 1) {
        list.appendChild(document.createTextNode(' , '));
      }
    });
  })();

var code = '';
var getCode='';
var btnValue='';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';