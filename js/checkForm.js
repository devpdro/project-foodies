function checkForm() {
  var nome = document.getElementById("nome_part").value;
  var yourRequest = document.getElementById("order_part").value;
  var yourNumber = document.getElementById("number_part").value;
  var howManyOrders = document.getElementById("howManyOrders_part").value;
  var address = document.getElementById("address_part").value;

  if (
    nome === "" ||
    yourRequest === "" ||
    yourNumber === "" ||
    howManyOrders === "" ||
    address === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Por favor, preencha todos os campos.",
    });
    return false;
  }

  if (nome.length < 2) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu nome deve ter no mínimo 2 caracteres",
    });
    return false;
  }

  if (yourRequest.length < 4) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu pedido deve ter no mínimo 4 caracteres",
    });
    return false;
  }

  if (yourNumber.length < 7) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu número deve ter no mínimo 7 caracteres",
    });
    return false;
  }

  if (howManyOrders.length < 1) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Quantos pedidos deve ter no mínimo 1 caracter",
    });
    return false;
  }

  if (address.length < 10) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu endereço deve ter no mínimo 10 caracteres",
    });
    return false;
  }

  if (nome.length > 44) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "O nome deve ter no máximo 44 caracteres",
    });
    return false;
  }

  if (yourRequest.length > 112) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu pedido(s) deve ter no máximo 112 caracteres",
    });
    return false;
  }

  if (yourNumber.length > 18) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu número deve ter no máximo 18 caracteres",
    });
    return false;
  }

  if (howManyOrders.length > 38) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Quantos pedidos deve ter no máximo 38 caracteres",
    });
    return false;
  }

  if (address.length > 92) {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Seu endereço deve ter no máximo 92 caracteres",
    });
    return false;
  }

  Swal.fire({
    icon: "success",
    title: "Pedido(s) realizado!",
    text: "Obrigado por fazer seu pedido conosco! Entraremos em contato em breve para fornecer informações sobre o prazo de entrega. Agradecemos a sua preferência!",
    showConfirmButton: false,
    timer: 4000,
  }).then(function () {
    document.getElementById("form").submit();
  });

  return false;
}
