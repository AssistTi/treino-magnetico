/* Ajustes de narrativa: identificação → desejo → aplicação. */
(function(){
function run(){
 const heads=[...document.querySelectorAll('h1,h2')];
 const find=t=>heads.find(e=>e.textContent.trim().startsWith(t));
 const hero=find('Você não precisa trocar');
 if(hero){
  hero.textContent='Você treina, se dedica… mas sente que ainda falta alguma coisa?';
  const lead=hero.parentElement.querySelector('.lead');
  if(lead)lead.textContent='Talvez não falte esforço. Talvez falte presença, intenção e confiança na forma como você treina. Descubra um novo jeito de se conectar com o seu treino.';
 }
 const pain=find('Você troca de treino');
 if(pain){
  pain.textContent='Você começa animada, mas acaba voltando ao mesmo lugar?';
  const p=pain.parentElement.querySelector('p');
  if(p)p.textContent='Você treina, tenta manter o ritmo, muda os exercícios e às vezes sente que está fazendo tudo no automático. A motivação vai embora e bate aquela sensação de ter que começar de novo.';
  const sec=pain.closest('section');
  if(sec&&!document.getElementById('desejo-magnetico')){
   const desire=document.createElement('section');
   desire.id='desejo-magnetico';
   desire.innerHTML='<div class="wrap tm-desire"><span class="eyebrow">IMAGINE TREINAR DE OUTRA FORMA</span><h2>E se você voltasse a confiar em si mesma?</h2><p class="tm-desire-lead">Não só pelo que vê no espelho, mas pela mulher que você está construindo a cada treino.</p><div class="tm-desire-grid"><article><span>01</span><h3>Mais presença</h3><p>Parar de apenas cumprir exercícios e começar a entender o que está fazendo.</p></article><article><span>02</span><h3>Mais confiança</h3><p>Sentir orgulho de cumprir o que prometeu a si mesma, um treino de cada vez.</p></article><article><span>03</span><h3>Mais constância</h3><p>Criar uma relação mais consciente com o treino, sem depender apenas da motivação.</p></article></div><p class="tm-desire-note">O guia é o começo. A mudança acontece quando você lê, aplica e leva essas práticas para a sua rotina.</p><a class="btn comprar" href="#oferta">QUERO COMEÇAR ESSA MUDANÇA →</a></div>';
   sec.after(desire);
  }
 }
 const guide=find('Guia do Treino Magnético');
 if(guide){const p=guide.parentElement.querySelector('p');if(p)p.textContent='Um guia prático para mulheres que querem sair do automático e treinar com mais consciência, intenção e constância. Você vai conhecer 10 práticas e um desafio de 7 dias para começar a aplicar esse novo olhar no treino.';}
 const offer=find('Não é mais um treino.');
 if(offer){offer.textContent='A mulher que você quer se tornar começa nas escolhas que faz hoje.';const p=offer.parentElement.querySelector('p');if(p)p.textContent='Leia, aplique e descubra como treinar com mais presença e intenção. O Guia do Treino Magnético reúne 10 práticas e um desafio de 7 dias para você começar.';}
 if(!document.getElementById('tm-desire-style')){
 const style=document.createElement('style');style.id='tm-desire-style';
 style.textContent='#desejo-magnetico{background:linear-gradient(155deg,#1c0d2a,#301542 65%,#160d21);color:#fff;padding:clamp(64px,9vw,115px) 20px;text-align:center}#desejo-magnetico .tm-desire{max-width:1050px;margin:auto}#desejo-magnetico h2{font-size:clamp(32px,5vw,58px);line-height:1.1;margin:20px auto;max-width:800px}#desejo-magnetico .tm-desire-lead{font-size:clamp(17px,2vw,22px);line-height:1.65;color:#e2d2ec;max-width:690px;margin:0 auto 36px}#desejo-magnetico .tm-desire-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:38px 0}#desejo-magnetico article{padding:28px 22px;border:1px solid #784c91;border-radius:20px;background:rgba(255,255,255,.045);text-align:left;transition:transform .65s cubic-bezier(.16,1,.3,1),background .65s}#desejo-magnetico article:hover{transform:translateY(-7px);background:rgba(255,255,255,.085)}#desejo-magnetico article span{color:#d49cff;font-weight:800}#desejo-magnetico article h3{font-size:23px;margin:14px 0}#desejo-magnetico article p{color:#d9c9e4;line-height:1.65}#desejo-magnetico .tm-desire-note{max-width:710px;margin:0 auto 30px;line-height:1.7;color:#e5d9ec}@media(max-width:700px){#desejo-magnetico .tm-desire-grid{grid-template-columns:1fr}#desejo-magnetico article{padding:23px}}@media(prefers-reduced-motion:reduce){#desejo-magnetico article{transition:none}}';
 document.head.appendChild(style);
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
