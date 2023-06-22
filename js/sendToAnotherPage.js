function sendToAnotherPage() {
  var emailLogin = document.getElementById("email_login").value;
  var passwordLogin = document.getElementById("password_login").value;

  if (emailLogin === "" || passwordLogin === "") {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Por favor, preencha todos os campos antes de prosseguir.",
    });
  } else {
    window.location.href = "http://127.0.0.1:5500/projeto-food/index.html?#";
  } 
}
