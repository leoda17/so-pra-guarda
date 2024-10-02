import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/leoda17/Base_Json/refs/heads/main/GraficoPizza.json'; // URL do JSON
    const res = await fetch(url);
    const dados = await res.json();
    
    // Extrai os esportes e suas porcentagens
    const esporte = Object.keys(dados);
    const porcentagem = Object.values(dados);

    const data = [
        {
            labels: esporte,
            values: porcentagem,
            type: 'pie',
            marker: {
                colors: esporte.map(() => pegarCss('--roxo-claro')) // Cores dos setores
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCss('--rosa-claro'),
        paper_bgcolor: pegarCss('--rosa-claro'),
        title: {
            text: 'Os Esportes Mais Praticados',
            font: {
                color: pegarCss('--roxo-claro'),
                family: pegarCss('--fonte-titulo'),
                size: 50
            }
        }
    };

    // Cria e anexa o gráfico ao DOM
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    
    // Plota o gráfico
    Plotly.newPlot(grafico, data, layout);
}

// Chama a função para criar o gráfico
criarGraficoPizza();
