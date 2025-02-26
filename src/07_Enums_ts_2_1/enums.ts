enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500,
  }
  
  function showHtmlError(): void {
    const randomNumber = Math.floor(Math.random() * 6); // Zufällige Zahl zwischen 0 und 5
      switch (randomNumber) {
      case 0:
        console.log(`Fehler: ${HtmlError.OK} (OK)`);
        break;
      case 1:
        console.log(`Fehler: ${HtmlError.OK} (OK)`);
        break;
      case 2:
        console.log(`Fehler: ${HtmlError.OK} (OK)`);
        break;
      case 3:
        console.log(`Fehler: ${HtmlError.Redirect} (Redirect)`);
        break;
      case 4:
        console.log(`Fehler: ${HtmlError.BadRequest} (Bad Request)`);
        break;
      case 5:
        console.log(`Fehler: ${HtmlError.InternalServerError} (Internal Server Error)`);
        break;
      }}
      showHtmlError();