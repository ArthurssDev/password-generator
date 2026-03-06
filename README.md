Gerador de Senhas: Lógica Pura e Eficiência no Navegador
Este projeto foi desenvolvido para oferecer uma solução de segurança personalizada diretamente no navegador, sem a necessidade de bibliotecas externas ou processos de compilação. A ideia central foi aplicar conceitos avançados de Engenharia de Software, como Programação Orientada a Objetos (POO), em um ambiente de execução simples e direto.

O diferencial da lógica
Muitos geradores de senhas seguem padrões previsíveis. Nesta implementação, a segurança foi priorizada através de um sistema de "pool" de funções:

Aleatoriedade Real: O algoritmo não segue uma sequência fixa. Ele sorteia dinamicamente qual tipo de caractere (número, letra ou símbolo) será inserido em cada posição da senha, aumentando drasticamente a imprevisibilidade.

Construção Sob Medida: A senha é montada exatamente com o comprimento solicitado, utilizando métodos estáticos para garantir que o processamento seja rápido e consuma o mínimo de memória.

Experiência do Usuário (UX)
O foco não foi apenas o funcionamento interno, mas como o usuário interage com a ferramenta:

Interface Alinhada: Utilizei Flexbox no CSS para garantir que todos os controles e campos de seleção fiquem perfeitamente organizados e fáceis de ler, independentemente do dispositivo.

Cópia Inteligente: Através da Clipboard API, a senha gerada pode ser copiada para a área de transferência com um único toque. O sistema utiliza funções assíncronas para gerenciar a cópia e fornecer um feedback visual de confirmação ao usuário.

Tecnologias e Organização
O projeto utiliza apenas tecnologias nativas, o que facilita a leitura do código por outros desenvolvedores:

HTML5 e CSS3: Estrutura semântica e estilização moderna baseada em variáveis e design responsivo.

JavaScript Moderno (ES6+): O código é organizado em classes independentes. A GeradorSenha cuida da matemática e lógica, enquanto a GeradorSenhaUI gerencia a interação com a tela e os eventos do DOM.

Como visualizar o projeto
Por não utilizar ferramentas de build ou dependências de terceiros, o projeto é extremamente leve:

Faça o download ou clone o repositório.

Abra o arquivo index.html diretamente em qualquer navegador moderno.

Se preferir um ambiente mais controlado, pode utilizar a extensão Live Server no VS Code para rodar o projeto localmente.

Evolução técnica
Trabalhar neste projeto permitiu consolidar o uso de módulos nativos do JavaScript e a manipulação direta do DOM. A separação de responsabilidades entre as classes permite que novas funcionalidades — como um histórico de senhas geradas ou um medidor de força — sejam adicionadas no futuro sem a necessidade de reescrever a base do sistema.

Se você tiver sugestões sobre a lógica de sorteio ou quiser contribuir com melhorias na interface, sinta-se à vontade para abrir uma discussão no repositório.
