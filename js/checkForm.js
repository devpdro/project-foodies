function verificarFormulario() {
  var password = document.getElementById("password_login").value;
  var email = document.getElementById("email_login").value;

  if (password === "" || email === "") {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Por favor, preencha todos os campos.",
    });
    return false;
  }

  if (password.length < 3 || email.length < 6) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "O email deve ter no mínimo 7 caracteres e a senha deve ter no mínimo 4 caracteres.",
    });
    return false;
  }

  if (password.length > 50 || email.length > 100) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "O email deve ter no máximo 100 caracteres e a senha deve ter no máximo 50 caracteres.",
    });
    return false;
  }

  Swal.fire({
    icon: "success",
    title: "Sucesso!",
    text: "Login feito com sucesso",
    showConfirmButton: false,
    timer: 2000, // Fechar automaticamente após 2 segundos
  }).then(function () {
    document.getElementById("form").submit(); // Enviar o formulário após o alerta
  });

  return false; // Impede o envio padrão do formulário
}
