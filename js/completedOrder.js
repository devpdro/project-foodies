function completedOrder() {
  Swal.fire({
    icon: "success",
    title: "Pedido(s) realizado!",
    text: "Agradecemos a sua preferência!, Entraremos em contato em breve para fornecer informações sobre o prazo de entrega.",
    showConfirmButton: false,
    timer: 4000,
  }).then(function () {
    document.getElementById("form").submit();
  });

  return false;
}
