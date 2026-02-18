# Transcritor-de-Videos-privados-
#  Transcritor de Estudos Pro - Midnight Edition

Este projeto é uma extensão de acessibilidade desenvolvida para transformar áudio de aulas em tempo real em texto formatado, focado especialmente em estudantes  que possuem TDAH e Dislexia.

##  Por que eu construí isso?

Como estudante de Engenharia de Software e pessoa com dificuldade de ver aula, eu sentia muita dificuldade em acompanhar aulas densas de programação (como Java e Estrutura de Dados). O texto corrido e a falta de destaque visual me confundiam muito. 

Este projeto nasceu da necessidade de:
- Reduzir a carga cognitiva: Evitar que o estudante se perca em "blocos" de texto.
- Focar no que importa: Destacar automaticamente termos técnicos de programação.
- Gestão de Tempo: Um cronômetro integrado para ajudar no hiperfoco e controle do tempo de estudo.

##  Tecnologias Utilizadas

- **JavaScript (ES6+):** Lógica de transcrição e manipulação de DOM.
- **Web Speech API:** Para o reconhecimento de voz em tempo real.
- **HTML5 & CSS3:** Estrutura e estilização avançada com gradientes e temas Dark.
- **Chrome Extension API (Manifest V3):** Estrutura moderna de extensões do Google Chrome.

##  Diferenciais de Acessibilidade

- **Tema Midnight (Monokai):** Fundo escuro profundo para reduzir o cansaço visual.
- **Tipografia Adaptada:** Espaçamento generoso entre linhas e letras para facilitar a leitura por pessoas disléxicas.
- **Destaque de Código:** Palavras-chave de linguagens como Java são coloridas automaticamente (estilo VS Code).
- **Parágrafos Automáticos:** O sistema detecta pausas e quebra o texto em blocos menores, evitando a confusão mental.

##  Como Instalar e Usar (Com Cabo Virtual)

Para usar este transcritor com vídeos (YouTube, Alura, Cod3r), siga estes passos:

1. **Baixe o Código:** Clone este repositório ou baixe o arquivo .zip e extraia.
2. **Instale a Extensão:**
   - Vá para `chrome://extensions/`.
   - Ative o "Modo do desenvolvedor".
   - Clique em "Carregar sem compactação" e selecione a pasta do projeto.
3. **Configure o Áudio:**
   - Instale um **Cabo de Áudio Virtual** (como o VB-Cable).
   - Nas configurações de som do Windows, defina a **Saída** como *CABLE Input*.
   - No navegador, defina o **Microfone** (nas configurações do site/extensão) como *CABLE Output*.
4. **Dê o Play:** Inicie o vídeo da aula e clique em **"Ouvir Aula"** no transcritor!

---
Desenvolvido com café, calma e dedicação por **Giovanna DuarteZ**.
