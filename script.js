const textos = {
  lua: `Ela é como a Lua…  
Linda, silenciosa e cheia de mistérios.  
Tem um brilho calmo, mas que entra nos olhos feito verdade.  
E mesmo quando está distante, eu ainda sinto sua luz em mim.

Ela é doce, calma,  
o jeito mais perfeito de ser feminino.  
Calma como a brisa do vento,  
linda como um campo de rosas.

O sorriso dela…  
É como um refrão da Cássia Eller —  
“Te amo, e não consigo mais viver sem ser pra você.”  
Cada vez que ela sorri, é como se o mundo ficasse mais leve.  
E quando fala, sua voz me acalma como canção de ninar.

Pequena por fora, imensa por dentro.  
Carrega uma força que não grita —  
ela sussurra…  
e mesmo assim, move tudo.

Tem dias que ela some, como a Lua minguante.  
Mas sei que volta, sempre volta.  
Porque o brilho dela não depende de aplauso.  
Ela é constante, mesmo quando ninguém vê.

E eu, que a olho como quem olha o céu...  
só sei dizer como Ney Matogrosso:  
“Ela é um animal, é fera demais.  
Ela é instinto, é força, é paz.”

Ela é o meu céu à noite.  
O reflexo da luz mais linda.  
Ela é minha Lua.  
E eu… sou só mais um Sol, rendido ao seu encanto.`,

  sol: `Ele é como o Sol…  
Quente, intenso, impossível de ignorar.  
Carrega uma energia que aquece até os corações mais distantes.  
Tem dias em que é brisa suave, outros em que é tempestade de sentimento —  
mas em todos, ele está lá… presente.

É meio doido, é verdade.  
Ri alto, pensa demais, vive no limite.  
Mas quando ama…  
ama com toda a força que tem.  
Sem medo, sem freio.

Ele é protetor por natureza.  
Fica de olho mesmo quando finge não estar.  
Se pudesse, colocaria o mundo inteiro sob sua luz,  
só pra ver a Lua brilhar mais tranquila.

É decidido —  
não porque sabe de tudo,  
mas porque sabe de uma coisa:  
ele quer ela.  
E quer todos os dias.

Ela é o pensamento que o acorda,  
a calma depois do caos,  
o motivo do seu sorriso bobo no meio do nada.

E ele, que um dia achou que poderia seguir só,  
agora gira ao redor de um só nome,  
uma só luz.

E mesmo sendo Sol,  
se sente pequeno perto da beleza dela.  
Mas é nela que encontra sentido,  
porque como ele mesmo diria:  
“tudo que penso... é ela.”`,

  eclipse: `Nós nos conhecemos do nada —  
como um instante roubado do tempo,  
uma surpresa do universo que ninguém esperava.

Ela, a Lua, com sua luz calma e doce,  
chegou silenciosa, cheia de mistérios e força sutil.  
Ele, o Sol, quente e intenso,  
meio doido, protetor e apaixonado desde o primeiro olhar.

E naquele encontro inesperado,  
como o céu que de repente abraça o dia e a noite,  
formamos o eclipse perfeito —  
um momento raro, onde tudo faz sentido.

Não havia espaço para erros,  
só para a dança lenta e natural do amor que nasce  
quando duas forças opostas se encontram e se completam.

Ela trouxe a calma que acalma,  
ele trouxe o fogo que aquece.  
Ela, a brisa suave e o campo de rosas,  
ele, a tempestade de sentimento e a luz incansável.

Juntos, descobrimos que a distância entre o dia e a noite não existe quando se olha com o coração.  
Que o brilho verdadeiro não precisa de plateia,  
e que o amor, quando é real, resiste até mesmo às fases mais difíceis.

Somos o encontro do sol e da lua,  
a união da força e da delicadeza,  
o eclipse que o universo pintou para ser perfeito.

E assim seguimos, lado a lado,  
quentes e calmos, loucos e serenos,  
sempre prontos para iluminar um ao outro,  
porque quando o sol encontra a lua…  
acontece amor.`
};

const textContainer = document.getElementById('text-content');
const btnLua = document.getElementById('btn-lua');
const btnSol = document.getElementById('btn-sol');
const btnEclipse = document.getElementById('btn-eclipse');

function clearActive() {
  btnLua.classList.remove('active');
  btnSol.classList.remove('active');
  btnEclipse.classList.remove('active');
}

btnLua.addEventListener('click', () => {
  textContainer.textContent = textos.lua;
  clearActive();
  btnLua.classList.add('active');
});

btnSol.addEventListener('click', () => {
  textContainer.textContent = textos.sol;
  clearActive();
  btnSol.classList.add('active');
});

btnEclipse.addEventListener('click', () => {
  textContainer.textContent = textos.eclipse;
  clearActive();
  btnEclipse.classList.add('active');
});
