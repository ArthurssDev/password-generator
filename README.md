# 🔐 Gerador de Senhas (com Entropia!)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://github.com/ArthurssDev/password-generator)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/ArthurssDev/password-generator)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/ArthurssDev/password-generator)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://gerador-senha-gold.vercel.app/)

> Chega de usar `senha123` ou a data de nascimento do cachorro. Este é um gerador de senhas direto ao ponto que cria combinações realmente seguras e, o grande diferencial: **calcula a entropia** da senha gerada. 

Ou seja, a aplicação não apenas cospe uma string aleatória, mas te mostra matematicamente o quão difícil ela é de ser quebrada via força bruta.

---

## 🌐 Demo Ao Vivo

Não quer baixar o código agora pra ver como ficou? Testa a aplicação rodando direto na Vercel:
👉 **[Acessar o Gerador de Senhas Online](https://gerador-senha-gold.vercel.app/)**

---

## ⚡ O que tem de bom aqui?

- **Customização Total:** Você escolhe a receita. Dá pra incluir Letras Maiúsculas, Minúsculas, Números e/ou Símbolos.
- **Termômetro de Entropia:** Feedback visual e matemático da força da sua senha (baseado no tamanho do conjunto de caracteres e no comprimento da senha).
- **Copia e Cola:** Um clique e a senha já está na sua área de transferência, pronta pra uso.
- **Leve e rápido:** Zero dependências. Nada de esperar 10 minutos rodando `npm install`.

---

## 🛠️ Tecnologias e Conceitos Aplicados

* **HTML5:** Estruturação semântica da interface, controle de inputs (checkboxes e sliders).
* **CSS3:** * Estilização responsiva.
  * Customização visual dos elementos de formulário.
  * Feedback visual dinâmico dependendo da força da senha.
* **JavaScript (Vanilla):**
  * Manipulação do DOM em tempo real.
  * Algoritmos de aleatoriedade para garantir senhas não previsíveis (`Math.random` / `Crypto.getRandomValues`).
  * Cálculo matemático de entropia (tamanho do *pool* de caracteres vs comprimento da senha).
  * Consumo da Clipboard API (`navigator.clipboard.writeText`) para a funcionalidade de copiar com um clique.

---

## 🚀 Como rodar na sua máquina

Mais fácil que quebrar senha fraca. Saca só:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/ArthurssDev/password-generator.git](https://github.com/ArthurssDev/password-generator.git)