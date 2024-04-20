/* fullscreen */
var elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

// Simple Small DataBase.
var buidingDB = [{
  name: "S01",
  area: 290,
  available: false,
  owner: "Burger King"
}, {
  name: "S02",
  area: 290,
  available: true,
  owner: "Available"
}, {
  name: "S03",
  area: 290,
  available: false,
  owner: "Dnakin Dounuts"
}, {
  name: "S04",
  area: 290,
  available: false,
  owner: "KUDU"
}, {
  name: "S05",
  area: 290,
  available: true,
  owner: "Available"
}, {
  name: "S06",
  area: 290,
  available: true,
  owner: "Available"
}, {
  name: "S07",
  area: 290,
  available: true,
  owner: "Available"
}, {
  name: "S08",
  area: 290,
  available: false,
  owner: "Rajihy Bank"
}, {
  name: "S09",
  area: 290,
  available: false,
  owner: "Rajihy Bank"
}, {
  name: "S10",
  area: 290,
  available: false,
  owner: "Rajihy Bank"
}, {
  name: "S11",
  area: 290,
  available: true,
  owner: "Available"
}, {
  name: "S12",
  area: 290,
  available: true,
  owner: "Available"
}, {
  name: "S13",
  area: 290,
  available: false,
  owner: "Steak House"
}, {
  name: "S14",
  area: 290,
  available: false,
  owner: "Steak House"
}, {
  name: "S15",
  area: 290,
  available: false,
  owner: "Steak House"
}];

// Starting Point.
// page no.
var currentPage = "start";
var targetPage = "main";

// main page preparation
clikkingHandler();

// logo listner
// document.getElementById("logo").addEventListener("click", mainPageFunc);

function mainPageFunc() {
  if (currentPage == "main") {
    targetPage = "building";
  } else {
    targetPage = "main";
  }
  // currentPage = "main";
  clikkingHandler();
}

function infoPageFunc() {
  targetPage = "building";
  // currentPage = "";
  clikkingHandler();
}

function pricingPageFunc() {
  targetPage = "pricing";
  // currentPage = "";
  clikkingHandler();
}

function contactPageFunc() {
  targetPage = "contact";
  // currentPage = "";
  clikkingHandler();
}

function photoPageFunc() {
  targetPage = "photo";
  // currentPage = "";
  clikkingHandler();
}

function clikkingHandler() {
  // if (currentPage == targetPage) {
  //   return;
  // };
  switch (targetPage) {

    case "main":
      // hiding info..
      document.getElementById("BuildingMass").classList.add("hidden");
      // Hiding Pricing..
      document.getElementById("pricing").classList.add("hidden");
      // Hiding Contacts..
      document.getElementById("contact").classList.add("hidden");
      // Hiding photo..
      document.getElementById("photo").classList.add("hidden");
      // scaling logo to center and full size
      var logoSVG = document.getElementById("logo");
      TweenMax.to(logoSVG, 2, {
        top: "10%",
        left: "10%",
        width: "80%",
        height: "70%",
        ease: Bounce.easeOut
      });
      // hiding building mass..
      var BuildingMass = document.getElementById("BuildingMass");
      TweenMax.to(BuildingMass, .5, {
        opacity: 0
      });
      currentPage = "main";
      targetPage = "";
      break;

    case "building":
      // hiding info..
      document.getElementById("BuildingMass").classList.remove("hidden");
      // Hiding Pricing..
      document.getElementById("pricing").classList.add("hidden");
      // Hiding Contacts..
      document.getElementById("contact").classList.add("hidden");
      // Hiding photo..
      document.getElementById("photo").classList.add("hidden");
      // scaling logo to center and full size
      var logoSVG = document.getElementById("logo");
      TweenMax.to(logoSVG, 2, {
        top: "2%",
        left: "73.5%",
        width: "22.5%",
        height: "21.5%",
        ease: Bounce.easeOut
      });
      // showing building mass..
      var BuildingMass = document.getElementById("BuildingMass");
      TweenMax.to(BuildingMass, 2.5, {
        opacity: 0.7
      });
      currentPage = "building";
      targetPage = "";
      break;

    case "contact":
      // hiding info..
      document.getElementById("BuildingMass").classList.add("hidden");
      // Hiding Pricing..
      document.getElementById("pricing").classList.add("hidden");
      // Showing Contacts..
      document.getElementById("contact").classList.remove("hidden");
      // Hiding photo..
      document.getElementById("photo").classList.add("hidden");
      // scaling logo to center and full size
      var logoSVG = document.getElementById("logo");
      TweenMax.to(logoSVG, 2, {
        top: "2%",
        left: "73.5%",
        width: "22.5%",
        height: "21.5%",
      });
      // hiding building mass..
      var BuildingMass = document.getElementById("BuildingMass");
      TweenMax.to(BuildingMass, .5, { opacity: 0 });
      currentPage = "contact";
      targetPage = "";
      break;

    case "pricing":
      // hiding info..
      document.getElementById("BuildingMass").classList.add("hidden");
      // Showing Pricing..
      document.getElementById("pricing").classList.remove("hidden");
      // Hiding Contacts..
      document.getElementById("contact").classList.add("hidden");
      // Hiding photo..
      document.getElementById("photo").classList.add("hidden");
      // scaling logo to center and full size
      var logoSVG = document.getElementById("logo");
      TweenMax.to(logoSVG, 2, {
        top: "2%",
        left: "73.5%",
        width: "22.5%",
        height: "21.5%",
      });
      // hiding building mass..
      var BuildingMass = document.getElementById("BuildingMass");
      TweenMax.to(BuildingMass, .5, {
        opacity: 0
      });
      currentPage = "pricing";
      targetPage = "";
      break;

    case "photo":
      // hiding info..
      document.getElementById("BuildingMass").classList.add("hidden");
      // Hiding Pricing..
      document.getElementById("pricing").classList.add("hidden");
      // Hiding Contacts..
      document.getElementById("contact").classList.add("hidden");
      // showing photo..
      document.getElementById("photo").classList.remove("hidden");
      // scaling logo to center and full size
      var logoSVG = document.getElementById("logo");
      TweenMax.to(logoSVG, 2, {
        top: "2%",
        left: "73.5%",
        width: "22.5%",
        height: "21.5%",
      });
      // hiding building mass..
      var BuildingMass = document.getElementById("BuildingMass");
      TweenMax.to(BuildingMass, .5, {
        opacity: 0
      });
      currentPage = "photo";
      targetPage = "";
      break;
  };
  // console.log("Now in:" + currentPage);
  // console.log("Going to:" + targetPage);
};
// var textPaths = document.querySelectorAll("svg > path")[1];
// TweenMax.fromTo(textPaths, 3, { opacity: 0 }, { opacity: 1 });
// TweenMax.to("S15", 2, { left: 10, delay: 2 });
// TweenMax.to(textPaths, 2, { width: 600, top: 90, left: -1250, ease: Power2.easeInOut, delay: 4 });

var parent = document.getElementById("BuildingMass");
/* Selects all childs of parent having <path> as the element */
var child = parent.querySelectorAll("g");

//     RGB
// rgb(97, 118, 139)    // blue gray
// rgb(147, 182, 222)   // light blue
// rgb(248, 249, 249)   // white
// rgb(220, 118, 51)    // orang
// rgb(131, 145, 146)   // gray
// rgb(52, 73, 94)      // dark blue

var lightColor = "rgb(131, 145, 146)";
var darkColor = "rgb(97, 118, 139)";

// child.forEach(changeFill);

// function changeFill(item, index, arr) {
//   arr[index].style.fill = lightColor;
// };


child.forEach(settingUp);

function settingUp(item, index, arr) {
  //coloring dark and light
  arr[index].firstElementChild.style.fill = lightColor
  // arr[index].style.fill = lightColor;
  // console.log(index);

  // if (index % 2 == 0) {
  //   arr[index].firstElementChild.style.fill = darkColor;
  //   arr[index - 1].style.fill = darkColor;
  //   console.log(index);
  //   console.log((index / 2) % 2 == 0);
  // }

  // x.addEventListener("click", RespondClick);
  // y.addEventListener("mouseover", RespondMouseOver);
  // y.addEventListener("mouseout", RespondMouseOut);
  // function RespondMouseOver() {
  //   document.getElementById("effect").innerHTML +=
  //     "MouseOver Event" + "<br>";
  // }

  //listner
  arr[index].addEventListener("mouseover", function () {
    // color change
    if (arr[index].firstElementChild.style.fill == darkColor) {
      arr[index].firstElementChild.style.fill = lightColor;
    } else {
      arr[index].firstElementChild.style.fill = darkColor;
    }

    // filling information
    document.getElementById("name").innerHTML = "Shop: ".concat(buidingDB[index].name);
    document.getElementById("area").innerHTML = "Area: ".concat(buidingDB[index].area);
    document.getElementById("available").innerHTML = "Available: ".concat(buidingDB[index].available);
    document.getElementById("owner").innerHTML = "Owner: ".concat(buidingDB[index].owner);

    // toggle dispaly
    var element = document.getElementById("info");
    element.classList.toggle("hidden");
  });

  arr[index].addEventListener("mouseout", function () {
    // color change
    if (arr[index].firstElementChild.style.fill == darkColor) {
      arr[index].firstElementChild.style.fill = lightColor;
    } else {
      arr[index].firstElementChild.style.fill = darkColor;
    }

    // toggle dispaly
    var element = document.getElementById("info");
    element.classList.toggle("hidden");
  });
};