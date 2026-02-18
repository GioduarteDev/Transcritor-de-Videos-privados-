const btn = document.getElementById('btn-start');
const area = document.getElementById('area-texto');
const statusSom = document.getElementById('status-som');
const displayCronometro = document.getElementById('cronometro');

const reconhecimento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
reconhecimento.lang = 'pt-BR';
reconhecimento.continuous = true;
reconhecimento.interimResults = true;

let ouvindo = false;
let textoFinalAcumulado = '';
let contadorFrases = 0;
let tempoInicio;
let intervaloCronometro;

// Categorias para o destaque Monokai
const keywords = ['public', 'static', 'void', 'class', 'package', 'new', 'if', 'else', 'return', 'import'];
const functions = ['main', 'println', 'printf', 'Scanner', 'next', 'System', 'out'];
const tipos = ['String', 'int', 'double', 'boolean', 'variável', 'constante', 'Java', 'método', 'objeto'];

function atualizarCronometro() {
    const agora = new Date();
    const diff = new Date(agora - tempoInicio);
    const h = String(diff.getUTCHours()).padStart(2, '0');
    const m = String(diff.getUTCMinutes()).padStart(2, '0');
    const s = String(diff.getUTCSeconds()).padStart(2, '0');
    displayCronometro.innerText = `TEMPO DE AULA: ${h}:${m}:${s}`;
}

reconhecimento.onresult = (event) => {
    let textoTemporario = '';
    statusSom.classList.add('ativo');
    setTimeout(() => statusSom.classList.remove('ativo'), 500);

    for (let i = event.resultIndex; i < event.results.length; i++) {
        let fala = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
            fala = fala.trim();
            fala = fala.charAt(0).toUpperCase() + fala.slice(1);
            contadorFrases++;
            
            // Função de parágrafo: a cada 4 frases, cria um novo bloco para ajudar na dislexia
            let separador = contadorFrases % 4 === 0 ? '.\n\n' : '. ';
            textoFinalAcumulado += fala + separador;
        } else {
            textoTemporario = fala;
        }
    }
    
    let textoExibir = textoFinalAcumulado + textoTemporario;

    // Função de destaque: pinta as palavras conforme as categorias
    keywords.forEach(t => {
        const regex = new RegExp(`\\b${t}\\b`, 'gi');
        textoExibir = textoExibir.replace(regex, `<span class="keyword">${t}</span>`);
    });
    functions.forEach(t => {
        const regex = new RegExp(`\\b${t}\\b`, 'gi');
        textoExibir = textoExibir.replace(regex, `<span class="function">${t}</span>`);
    });
    tipos.forEach(t => {
        const regex = new RegExp(`\\b${t}\\b`, 'gi');
        textoExibir = textoExibir.replace(regex, `<span class="termo-tecnico">${t}</span>`);
    });

    area.innerHTML = textoExibir;
};

btn.onclick = () => {
    if (!ouvindo) {
        reconhecimento.start();
        tempoInicio = new Date();
        intervaloCronometro = setInterval(atualizarCronometro, 1000);
        btn.innerText = "🔴 OUVINDO... (PAUSAR)";
        btn.style.background = "red";
        ouvindo = true;
    } else {
        reconhecimento.stop();
        clearInterval(intervaloCronometro);
        btn.innerText = "INICIAR TRANSCRIÇÃO";
        btn.style.background = "#3b82f6";
        ouvindo = false;
    }
};

document.getElementById('btn-clear').onclick = () => {
    if(confirm("Deseja limpar toda a transcrição da aula?")) {
        textoFinalAcumulado = '';
        area.innerHTML = '';
        contadorFrases = 0;
        displayCronometro.innerText = "TEMPO DE AULA: 00:00:00";
    }
};

document.getElementById('btn-copy').onclick = () => {
    navigator.clipboard.writeText(area.innerText);
    alert("Texto copiado para o seu caderno de estudos!");
};

document.getElementById('btn-save').onclick = () => {
    const blob = new Blob([area.innerText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `aula_software_eng_${new Date().toLocaleDateString()}.txt`;
    a.click();
};