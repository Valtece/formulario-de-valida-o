function salvarDados() {
  var inputName = document.getElementById("inputNome").value;
  var inputEmail = document.getElementById("inputE-mail").value;

  var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (inputName === '' || inputEmail === '') {
    alert('Por favor, preencha todos os campos antes de continuar.')
  } else if (!emailFormat.test(inputEmail)) {
    alert('Por favor, insira um e-mail válido.');
  } else {
    visualizaçãoNome.textContent = inputName ;
    visualizaçãoEmail.textContent = inputEmail ;

    document.querySelector('.card-one').style.display = 'none';
    document.querySelector('.card-two').style.display = 'flex';

    document.querySelectorAll('.marking')[1].style.backgroundColor = '#342d61';
    document.querySelectorAll('.two')[0].style.backgroundColor = '#733ee4';
  }
}

  document.querySelector('.card-two .button').addEventListener('click', function() {
  const opcoesSelecionadas = document.querySelectorAll('.card-two .option.active');
  
  const listaOpcoes = document.getElementById('opcoesSelecionadas');

// Limpa a lista (caso já haja conteúdo)
listaOpcoes.innerHTML = '';

// Itera sobre as opções selecionadas e cria um novo item de lista para cada uma
opcoesSelecionadas.forEach(opcao => {
  const itemLista = document.createElement('li');
  itemLista.textContent = opcao.value; // Use 'opcao.textContent' se o conteúdo for texto visível
  listaOpcoes.appendChild(itemLista);
});

  if (opcoesSelecionadas.length > 0) {
    document.querySelector('.card-two').style.display = 'none';
    document.querySelector('.card-three').style.display = 'flex';

    document.querySelectorAll('.marking')[2].style.backgroundColor = '#342d61';
    document.querySelectorAll('.three')[0].style.backgroundColor = '#733ee4';
  }

})



const options = document.querySelectorAll('.option');
options.forEach(option => {
  option.addEventListener('click', () => {
    // Alternando a classe 'active' para mudar a cor
    option.classList.toggle('active');
  });
});

document.getElementById('continuarButton').addEventListener('click', function() {
  const inputNome = document.getElementById('inputNome').value.trim();
  const inputEmail = document.getElementById('inputEmail').value.trim();

  if (inputNome === '' || inputEmail === '') {
    alert('Por favor, preencha todos os campos antes de continuar.');
  } else {
    alert('Dados válidos! Você pode prosseguir.');
    // window.location.href = 'nova_pagina.html'; // Redirecionar para outra página
  }
});

document.getElementById('enviar').addEventListener('click', function() {
  document.querySelector('.card-three').style.display = 'none';
  document.querySelector('.card-four').style.display = 'flex';
})
