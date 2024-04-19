let div = document.getElementById('menudiv');

let notifiaction = document.getElementById('notifiaction');


const mytime = setTimeout(mygreeting, 6000);

function mygreeting() {
  // Tab to edit
notifiaction.style.display="block"
}

function exitfanction() {
  // Tab to edit
  notifiaction.style.display="none"
}


let textnoti = document.getElementById('textnoti2');


const mytime5 = setTimeout(textnoti1, 8000);


function textnoti1() {
  // Tab to edit
  
textnoti.innerHTML="مطور الموقع مينا شحاتة"
}


const closenoti = setTimeout(closenotifaction1, 10500);

function closenotifaction1() {
  // Tab to edit
  notifiaction.style.display="none"
  
}









function menushow() {
  // Tab to edit
  if (div.style.display == "none") {
    div.style.display="block"
  }
  else {
div.style.display="block"
  }


}


function exitclick() {
  // Tab to edit
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





// Check if a storage object exists for the website
if (typeof Storage !== "undefined") {
  // If it does, retrieve the current visitor count
  var visitorCount = localStorage.getItem("visitorCount") || 0;
  
  // Convert the count to an integer and increment it
  visitorCount = parseInt(visitorCount) + 1;
  
  // Store the new visitor count in local storage
  localStorage.setItem("visitorCount", visitorCount);
  
  // Display the new visitor count on the page
  document.getElementById("visitorCountDisplay").innerHTML = "Visitors: " + visitorCount;
} else {
  // If local storage is not supported, display an error message
  document.getElementById("visitorCountDisplay").innerHTML = "Error: local storage not supported";
}





