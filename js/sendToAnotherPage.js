function sendToAnotherPage() {
  var emailLogin = document.getElementById("email_login").value;
  var passwordLogin = document.getElementById("password_login").value;

  if (emailLogin === "" || passwordLogin === "") {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Por favor, preencha todos os campos antes de prosseguir.",
    });
  } else if (emailLogin > 1 && passwordLogin > 1) {
    window.location.href = "http://127.0.0.1:5500/projeto-food/index.html";
  } 
}
