function generate() {
    const inputText = document.getElementById("inputtext").value; // Get the value of the input
    const qrImage = document.getElementById("imgqr");

    // Check if the input is empty
    if (inputText.trim() === "") {
      alert("Please enter a URL to generate a QR code.");
      return;
    }

    // Generate the QR code URL with string interpolation using backticks
    const apiurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;

    // Set the source of the image to the QR code URL
    qrImage.src = apiurl;
    qrImage.alt = "Generated QR Code";
  }