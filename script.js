let div = document.getElementById('menudiv');

var notifaction = document.getElementById('notifiaction');

let txt = document.getElementById('textnoti2');

setTimeout(innertext , 22000)


setTimeout(none,24000)

function none() {
  // Tab to edit
  notifaction.style.display="none"
}


function innertext() {
  // Tab to edit
  
  txt.innerHTML="مطور الموقع مينا شحاتة"
}


setTimeout(greeting, 20000);
setTimeout(greeting3, 10000);

function greeting() {
  // Tab to edit
navigator.vibrate(500)
notifaction.style.display="block"

}

function greeting3() {
  // Tab to edit
  navigator.vibrate(500);
}

function exitfanction() {
  // Tab to edit
notifaction.style.display="none"
}

function menushow() {
  // Tab to edit
  navigator.vibrate(20)
  if (div.style.display == "none") {
    div.style.display="block"
  }
  else {
div.style.display="block"
  }


}


function exitclick() {
  // Tab to edit
  
navigator.vibrate(22)
  div.style.display="none"
divab.style.display="none"
}


function myfanction() {
  // Tab to edit
  return "&"
}


let divab = document.getElementById('aboutdivphone');


function ios1() {
  // Tab to edi
  if (divab.style.display="none") {
    divab.style.display="block"
  }
  else {
    divab.style.display="none"
  }
}




function closeabour() {
  // Tab to edit
  divab.style.display="none"
}


let na = document.getElementById('abouttext1');



na.innerHTML=""





if (navigator.getBattery) {
  navigator.getBattery().then(function(battery) {
    na.innerHTML= "Battery level is: " + battery.level * 100 + "%";
  });
} else {
  console.log("Battery API not supported.");
}






const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};




function multiply(num1, num2) {
  return num1 * num2;
}


let ma = document.getElementById('abouttext2');

ma.innerHTML = "your use : " + (getDeviceType());






function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  
  let abctext = document.getElementById('abouttext3');
  
  abctext.innerHTML="ip phone : " + (ip) ;
});


let onlin1 = navigator.onLine;


let abctext3 = document.getElementById('abouttext4');

abctext3.innerText="concted internet : " + onlin1;





var darkMode = false;

// انشاء دالة لتغيير الوضع المظلم
function dark() {
  
  // تبديل قيمة المتغير
  darkMode = !darkMode;
  // التحقق من قيمة المتغير
  if (darkMode) {
    // إذا كان الوضع المظلم مفعل، تغيير الأنماط
    document.body.style.backgroundColor = "#1E222D";
    document.body.style.color = "white";
    document.getElementById("button80").innerText = "الوضع المضيء";
  } else {
    // إذا كان الوضع المظلم معطل، تغيير الأنماط
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("button80").innerText = "الوضع المظلم";
  }
  

  
}


let divdark = document.getElementById('darkmode1');








function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
  setTimeout(changplac,2000);

setTimeout(changplac2,6000);

setTimeout(chang4,8000);


  function chang4() {
  document.getElementById("myInput").placeholder = "Download Gta Vice City";
  setTimeout(chang50,10000);
  
function chang50() {
  document.getElementById("myInput").placeholder = "type Your Text";
  
}
  
}


  function changplac2() {
  document.getElementById("myInput").placeholder = "Download Gta San Andress";
  
}



function changplac() {
  document.getElementById("myInput").placeholder = "Download Mine Craft Free";
}

  
  
}

function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDropdown");
  
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}














// تحقق من تفضيل الوضع المظلم في localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// تبديل الوضع المظلم وحفظ التفضيل في localStorage
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle('dark-mode');
  
  if (element.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
}



// منع التكبير والتصغير
document.addEventListener('wheel', function(e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// منع التكبير والتصغير باستخدام مفاتيح الاختصار
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.keyCode == 107 || e.keyCode == 109 || e.keyCode == 187 || e.keyCode == 189)) {
    e.preventDefault();
  }
});

// تحديث الصفحة كل 5 دقائق
setTimeout(function(){
   window.location.reload(1);
}, 30000);



function gtasa() {
  // Tab to edit
  window.scroll({
    top:270,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function minecraft() {
  // Tab to edit
  
  window.scroll({
    top:270,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function carpark() {
  // Tab to edit
  
  window.scroll({
    top:490,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function GoodPizza() {
  // Tab to edit
  window.scroll({
    top:490,
  })
document.getElementById("myDropdown").classList.toggle("show");
  
}


function instadrge() {
  // Tab to edit
  
  window.scroll({
    top:680,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function rebalrac() {
  // Tab to edit
  window.scroll({
    top:680,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function inshot() {
  // Tab to edit
  window.scroll({
    top:890,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function capcut() {
  // Tab to edit
  window.scroll({
    top:890,
  })
document.getElementById("myDropdown").classList.toggle("show");
  
}

function internetCaffe() {
  // Tab to edit
  window.scroll({
    top:1090,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function Roopy() {
  // Tab to edit
  window.scroll({
    top:1080,
  })
document.getElementById("myDropdown").classList.toggle("show");
}
function Cover() {
  // Tab to edit
  
  window.scroll({
    top:1250,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function Scary() {
  // Tab to edit
  window.scroll({
    top:1250,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function hitman() {
  // Tab to edit
  window.scroll({
    top:1450,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function Construction() {
  // Tab to edit
  
  window.scroll({
    top:1450,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function madskils() {
  // Tab to edit
  window.scroll({
    top:1650,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function sniper() {
  // Tab to ediwindow.scroll({
    window.scroll({
    top:1690,
  })
document.getElementById("myDropdown").classList.toggle("show");


}


function blades() {
  // Tab to edit
  
  window.scroll({
    top:1890,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function subway() {
  // Tab to edit
  window.scroll({
    top:1830,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function dancing() {
  // Tab to edit
  window.scroll({
    top:2050,
  })
document.getElementById("myDropdown").classList.toggle("show");
  
}



function viva() {
  // Tab to edit
  window.scroll({
    top:2050,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function kinemaster() {
  // Tab to edit
  window.scroll({
    top:2270,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function vn() {
  // Tab to edit
  window.scroll({
    top:2290,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function astora(param) {
  // Tab to edi
  window.scroll({
    top:2430,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function noor() {
  // Tab to edit
  window.scroll({
    top:2440,
  })
document.getElementById("myDropdown").classList.toggle("show");
  
}


function motioleap() {
  // Tab to edit
  window.scroll({
    top:2650,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function photorom() {
  // Tab to edit
  window.scroll({
    top:2650,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function remini() {
  // Tab to edit
  window.scroll({
    top:2890,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function Face() {
  // Tab to edit
  window.scroll({
    top:2890,
  })
document.getElementById("myDropdown").classList.toggle("show");
}



function gtavice() {
  // Tab to edit
  window.scroll({
    top:3100,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


function stick() {
  // Tab to edit
  window.scroll({
    top:3090,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function gta3() {
  // Tab to edit
  window.scroll({
    top:3300,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function gtali() {
  // Tab to edit
  window.scroll({
    top:3300,
  })
document.getElementById("myDropdown").classList.toggle("show");
}
function sonic() {
  // Tab to edit
  window.scroll({
    top:3420,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function Tom() {
  // Tab to edit
  window.scroll({
    top:3420,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function zombie() {
  // Tab to edit
  window.scroll({
    top:3640,
  })
document.getElementById("myDropdown").classList.toggle("show");
  
}
function angry() {
  // Tab to edit
  window.scroll({
    top:3890,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function Airco(){
  window.scroll({
    top:3900,
  })
document.getElementById("myDropdown").classList.toggle("show");
}

function temp() {
  // Tab to edit
  window.scroll({
    top:4100,
  })
document.getElementById("myDropdown").classList.toggle("show");
}


