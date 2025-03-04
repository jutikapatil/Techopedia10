function requireNot(iStart, iEnd) {
  for (i = iStart; i <= iEnd; i++) {
    serialJSON["name" + i] = document
      .getElementById("name" + i)
      .removeAttribute("required");
    serialJSON["email" + i] = document
      .getElementById("email" + i)
      .removeAttribute("required");
    serialJSON["phone" + i] = document
      .getElementById("phone" + i)
      .removeAttribute("required");
    serialJSON["college" + i] = document
      .getElementById("college_name" + i)
      .removeAttribute("required");
    serialJSON["branch" + i] = document
      .getElementById("branch" + i)
      .removeAttribute("required");
    serialJSON["year" + i] = document
      .getElementById("year" + i)
      .removeAttribute("required");

    // serialJSON["year" + i] = document
    //   .getElementById(`FE${i}`)
    //   .removeAttribute("required");
  }
}
function requireYes(iStart, iEnd) {
  for (i = iStart; i <= iEnd; i++) {
    serialJSON["name" + i] = document
      .getElementById("name" + i)
      .setAttribute("required", "");
    serialJSON["email" + i] = document
      .getElementById("email" + i)
      .setAttribute("required", "");
    serialJSON["phone" + i] = document
      .getElementById("phone" + i)
      .setAttribute("required", "");
    serialJSON["college" + i] = document
      .getElementById("college_name" + i)
      .setAttribute("required", "");
    serialJSON["branch" + i] = document
      .getElementById("branch" + i)
      .setAttribute("required", "");
    serialJSON["year" + i] = document
      .getElementById("year" + i)
      .setAttribute("required", "");
    // serialJSON["year" + i] = document
    //   .getElementById(`FE${i}`)
    //   .setAttribute("required", "");
  }
}

let x;
document.getElementById("form2").style.display = "block";

document.getElementById("Team2Form").addEventListener("click", () => {
  document.getElementById("form2").style.display = "block";
  if (document.getElementById("squabble")) {
    requireYes(2, 3);
  } else if (
    document.getElementById("technopreneur") ||
    document.getElementById("nexus") ||
    document.getElementById("quantumBreak")
  ) {
    requireYes(2, 2);
    document.getElementById("team_name").setAttribute("required", "");
  }
});

document.getElementById("Team1Form").addEventListener("click", () => {
  document.getElementById("form2").style.display = "none";
  if (document.getElementById("squabble")) {
    requireNot(2, 3);
  } else if (
    document.getElementById("technopreneur") ||
    document.getElementById("nexus") ||
    document.getElementById("quantumBreak")
  ) {
    requireNot(2, 2);
    document.getElementById("team_name").removeAttribute("required");
  }
});

if (document.getElementById("squabble")) {
  document
    .getElementById("squabble")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 3;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.getElementById("year" + i).value;
        // serialJSON["year" + i] = document.querySelector(
        //   `input[name="year${i}"]:checked`
        // ).value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("squabble", serialJSON);
      return false;
    });
} else if (document.getElementById("inquisitive")) {
  document.getElementById("form2").style.display = "none";
  document.getElementById("Team2Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document.getElementById("Team1Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document
    .getElementById("inquisitive")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      for (i = 1; i <= 1; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.getElementById("year" + i).value;
        // serialJSON["year" + i] = document.querySelector(
        //   `input[name="year${i}"]:checked`
        // ).value;
      }
      serialJSON["slot"] = document.getElementById("slots").value;
      serialJSON["total"] = 1;
      // console.log(serialJSON);
      sendData("inquisitive", serialJSON);
      return false;
    });
} else if (document.getElementById("technopreneur")) {
  document
    .getElementById("technopreneur")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 2;
        serialJSON["teamName"] = document.getElementById("team_name").value;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.getElementById("year" + i).value;
        // serialJSON["year" + i] = document.querySelector(
        //   `input[name="year${i}"]:checked`
        // ).value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("technopreneur", serialJSON);
      return false;
    });
} else if (document.getElementById("nexus")) {
  document
    .getElementById("nexus")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 2;
        serialJSON["teamName"] = document.getElementById("team_name").value;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        // serialJSON["year" + i] = document.querySelector(
        //   `input[name="year${i}"]:checked`
        // ).value;
        serialJSON["year" + i] = document.getElementById("year" + i).value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("nexus", serialJSON);
      return false;
    });
} else if (document.getElementById("quantumBreak")) {
  document
    .getElementById("quantumBreak")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      if (document.getElementById("form2").style.display == "none") {
        x = 1;
      } else {
        x = 2;
        serialJSON["teamName"] = document.getElementById("team_name").value;
      }
      for (i = 1; i <= x; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        // serialJSON["year" + i] = document.querySelector(
        //   `input[name="year${i}"]:checked`
        // ).value;
        serialJSON["year" + i] = document.getElementById("year" + i).value;
      }
      serialJSON["total"] = x;
      // console.log(serialJSON);
      sendData("quantumBreak", serialJSON);
      return false;
    });
} else if (document.getElementById("labyrinth")) {
  document.getElementById("form2").style.display = "none";
  document.getElementById("Team2Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document.getElementById("Team1Form").addEventListener("click", () => {
    document.getElementById("form2").style.display = "none";
  });
  document
    .getElementById("labyrinth")
    .addEventListener("submit", (formresponse) => {
      document.getElementById("preloader").style.display = "block";
      formresponse.preventDefault();
      for (i = 1; i <= 2; i++) {
        serialJSON["name" + i] = document.getElementById("name" + i).value;
        serialJSON["email" + i] = document.getElementById("email" + i).value;
        serialJSON["phone" + i] = document.getElementById("phone" + i).value;
        serialJSON["college" + i] = document.getElementById(
          "college_name" + 1
        ).value;
        serialJSON["branch" + i] = document.getElementById("branch" + i).value;
        serialJSON["year" + i] = document.getElementById("year" + i).value;
        // serialJSON["year" + i] = document.querySelector(
        //   `input[name="year${i}"]:checked`
        // ).value;
      }
      // console.log(serialJSON);
      sendData("labyrinth", serialJSON);
      return false;
    });
}
let serialJSON = {};
function sendData(event) {
  serialJSON["event"] = event;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbytHHiEW5VkSzSjSRLChtI7qkGXny9yXpFkXzrYXSrVZ0G2Ks5DjAAAXfGOSGi4boLPKQ/exec",

    type: "POST",
    data: serialJSON,

    success: function (res) {
      // console.log(res.returnStatus, res);

      if (res.returnStatus == "Successfully Registered!😄") {
        if (document.getElementById("labyrinth")) {
          alert(res.returnStatus);
        } else {
          alert(
            "Successfully Registered! Please check your mails for further guidlines😄"
          );
        }
      } else {
        alert(res.returnStatus);
      }
      window.location.reload();
    },
    error: function (res) {
      // console.log(res);
      alert("Error!Refresh the page.");
    },
  });
}

window.onload = function () {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbytHHiEW5VkSzSjSRLChtI7qkGXny9yXpFkXzrYXSrVZ0G2Ks5DjAAAXfGOSGi4boLPKQ/exec",
    type: "GET",
    dataType: "json",

    success: function (res) {
      let pageSlot;
      if (document.getElementById("inquisitive")) {
        pageSlot = res.slotInqui;
      } else {
        return false;
      }

      let htmlSlot = document.getElementById("slots");
      let arraySlot = [];
      for (z = 1; z <= htmlSlot.length; z++) {
        if (htmlSlot.options[z]) {
          arraySlot.push(htmlSlot.options[z].innerHTML);
        }
      }
      var disableSlot = arraySlot.filter(function (n) {
        return pageSlot.indexOf(n) == -1;
      });
      for (i = 0; i < disableSlot.length; i++) {
        for (j = 0; j <= arraySlot.length; j++) {
          if (arraySlot[j] == disableSlot[i]) {
            document
              .getElementById("slots")
              .options[j + 1].setAttribute("disabled", "");
          }
        }
      }
    },
    error: function (res) {
      console.log(res);
      alert("There has been a error! please refresh the page and try again.");
    },
  });
};
