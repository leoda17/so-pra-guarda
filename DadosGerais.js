const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/dados.json';

async function visualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();
    
    const esporteMaisPraticado = Object.keys(dados)[0]; // Pega a chave do primeiro esporte
    const numeroDePessoas = dados[esporteMaisPraticado]; // Pega o número de votos
    const porcentagem = dados[esporteMaisPraticado].porcentagem; // Acesse a porcentagem corretamente

    console.log(esporteMaisPraticado);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `Em uma busca para descobrir os esportes mais praticados, foi feita uma série de pesquisas. O esporte mais praticado foi <span>${esporteMaisPraticado}</span> com um total de pessoas praticando de aproximadamente <span>${numeroDePessoas}</span> com uma porcentagem de <span>${porcentagem}%</span>`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

visualizarInformacoes();
