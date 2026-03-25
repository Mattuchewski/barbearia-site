const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = form[0].value;
  const senha = form[1].value;

  if (email === "teste@gmail.com" && senha === "123") {
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuario", email);

    window.location.href = "agendamento.html";
  } else {
    alert("Login inválido");
  }
});