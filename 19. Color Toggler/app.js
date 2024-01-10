let toggler = document.getElementById("switch");

toggler.addEventListener("click", () => {
    //   if (toggler.checked === true) {
    //     document.body.style.backgroundColor = "black";
    //   } else {
    //     document.body.style.backgroundColor = "white";
    //   }
  
    toggler.checked === true
      ? (document.body.style.backgroundColor = "#111")
      : (document.body.style.backgroundColor = "white");
  });