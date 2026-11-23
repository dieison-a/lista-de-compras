const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",
(evento) => {
  evento.preventDefault();
  const nomes = ["#um",
  "#dois",
  "#tres"].map((seletor) => document.querySelector(seletor).value.trim(),
  );
  const destaque = document.querySelector("#destaque").value.trim();
  const resultado = document.querySelector("#resultado");
  if (nomes.some((nome) => !nome) || new Set(nomes.map((nome) => nome.toLocaleLowerCase("pt-BR"))).size !== 3) {
    resultado.textContent = "Preencha três nomes diferentes.";
    return;
  }
  const posicao = nomes.findIndex((nome) => nome.toLocaleLowerCase("pt-BR") === destaque.toLocaleLowerCase("pt-BR"),
  );
  if (posicao > 0) {
    [nomes[0],
    nomes[posicao]] = [nomes[posicao],
    nomes[0]];
  }
  resultado.replaceChildren();
  nomes.forEach((nome,
  indice) => {
    const cartao = document.createElement("article");
    cartao.className = "cartao";
    const etiqueta = document.createElement("p");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = `${indice + 1}ª POSIÇÃO`;
    const participante = document.createElement("h2");
    participante.textContent = nome;
    cartao.append(etiqueta,
    participante);
    resultado.append(cartao);
  });
});
formulario.requestSubmit();



