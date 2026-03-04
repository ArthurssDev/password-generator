class GeradorSenha {
    static rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    static randNumero() {
        const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        return numeros[GeradorSenha.rand(0, numeros.length)];
    }

    static randLetraMaiuscula() {
        const maiusculas = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        return maiusculas[GeradorSenha.rand(0, maiusculas.length)];
    }

    static randLetraMinuscula() {
        const minusculas = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        return minusculas[GeradorSenha.rand(0, minusculas.length)];
    }

    static randSimbolo() {
        const simbolos = [
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
            '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '/', '?'
        ];
        return simbolos[GeradorSenha.rand(0, simbolos.length)];
    }

    gerarSenha(caracteres = 8, numeros = false, maiusculas = false, minusculas = false, simbolos = false) {
        let senha = '';
        for (let i = 0; i < caracteres;) {
            if (numeros) { 
                senha += GeradorSenha.randNumero()
                i++;
                if (i === caracteres) continue;
            };

            if (maiusculas) { 
                senha += GeradorSenha.randLetraMaiuscula();
                i++;
                if (i === caracteres) continue;
            };

            if (minusculas) { 
                senha += GeradorSenha.randLetraMinuscula();
                i++;
                if (i === caracteres) continue;
            };

            if (simbolos) { 
                senha += GeradorSenha.randSimbolo();
                i++;
                if (i === caracteres) continue;
            };
        }
        return senha;
    }
}

class GeradorSenhaUI {
    constructor() {
        this.gerador = new GeradorSenha();

        this.resultado = document.querySelector('.resultado');

        this.quantidadeCaracteres = document.querySelector('.quantidade-caracteres');

        this.numeros = document.querySelector('.numeros');
        this.maiusculas = document.querySelector('.letras-maiusculas');
        this.minusculas = document.querySelector('.letras-minusculas');
        this.simbolos = document.querySelector('.simbolos');

        this.botaoGerar = document.querySelector('.gerar');

        this.eventos();
    }

    eventos() {
        this.cliqueBotaoGerar();
        this.cliqueCopiar();
    }

    capturarDados() {
        return [this.quantidadeCaracteres.value, this.numeros.checked, this.maiusculas.checked, this.minusculas.checked, this.simbolos.checked];
    }

    cliqueBotaoGerar() {
        this.botaoGerar.addEventListener('click', () => {
            const dados = this.capturarDados();
            if (dados[0] !== '' && dados.includes(true)) { // Validação de campos - Passou
                const senha = this.gerador.gerarSenha(dados[0], dados[1], dados[2], dados[3], dados[4])
                this.adicionarSenha(senha);
            } else {
                this.adicionarErro()
            }
        })
    }

    adicionarSenha(senha) {
        this.resultado.innerText = senha;
    }

    adicionarErro() {
        this.resultado.innerText = 'Selecione as opções';
    }

    cliqueCopiar() {
        this.resultado.addEventListener('click', async () => {
            const textoParaCopiar = this.resultado.innerText;

            if (!textoParaCopiar) return;

            try {
                await navigator.clipboard.writeText(textoParaCopiar);

                const originalText = this.resultado.innerText;
                this.resultado.innerText = 'Copiado!';
                this.resultado.style.color = 'green';

                setTimeout(() => {
                    this.resultado.innerText = originalText;
                    this.resultado.style.color = 'var(--primary-color)';
                }, 1000);

            } catch (err) {
                console.error('Falha ao copiar: ', err);
            }
        });
    }
}

const geradorUI = new GeradorSenhaUI();