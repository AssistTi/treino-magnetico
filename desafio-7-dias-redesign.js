/* Novo design para o Desafio 7 Dias Magnéticos */
(function(){
 function init(){
  const section=document.querySelector('#desafio-7-dias');
  if(!section||section.dataset.redesign==='1')return;
  section.dataset.redesign='1';
  section.innerHTML=`
    <div class="tm7-layout">
      <div class="tm7-copy">
        <span class="tm7-eyebrow"><span class="tm7-dot"></span> COLOQUE EM PRÁTICA</span>
        <h2>7 dias para começar a <em>treinar diferente.</em></h2>
        <p class="tm7-intro">Conhecimento faz diferença quando vira atitude. O desafio do guia ajuda você a levar mais foco, presença e intenção para seus treinos, um dia de cada vez.</p>
        <div class="tm7-steps">
          <div class="tm7-step"><span class="tm7-symbol">◎</span><div><strong>Mais consciência</strong><p>Perceba sua execução e preste atenção em cada movimento.</p></div></div>
          <div class="tm7-step"><span class="tm7-symbol">✧</span><div><strong>Preparação mental</strong><p>Use respiração e visualização para entrar no treino com intenção.</p></div></div>
          <div class="tm7-step"><span class="tm7-symbol">↗</span><div><strong>Acompanhe sua evolução</strong><p>Registre o que fez e reconheça seu progresso ao longo dos dias.</p></div></div>
        </div>
      </div>
      <div class="tm7-visual" aria-label="Representação do desafio de sete dias">
        <div class="tm7-visual-top"><span>SEU DESAFIO</span><span>7 DIAS</span></div>
        <div class="tm7-visual-head"><span class="tm7-small">UM DIA DE CADA VEZ</span><strong>Pequenas ações.<br><i>Uma nova atitude.</i></strong></div>
        <div class="tm7-days">
          <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span>
        </div>
        <div class="tm7-visual-bottom"><span class="tm7-line"></span> PRESENÇA · INTENÇÃO · CONSTÂNCIA</div>
      </div>
    </div>`;
  if(!document.querySelector('#tm7-redesign-style')){
    const style=document.createElement('style');style.id='tm7-redesign-style';
    style.textContent=`
      #desafio-7-dias{background:#f6f0fa!important;color:#21112d!important;padding:clamp(70px,8vw,115px) 22px!important;overflow:hidden}
      #desafio-7-dias .tm7-layout{width:min(1120px,100%);margin:auto;display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);align-items:center;gap:clamp(32px,6vw,85px)}
      #desafio-7-dias .tm7-copy{text-align:left;min-width:0}
      #desafio-7-dias .tm7-eyebrow{display:inline-flex;align-items:center;gap:10px;font:750 11px/1.3 system-ui,sans-serif;letter-spacing:.18em;color:#8234c4}
      #desafio-7-dias .tm7-dot{height:8px;width:8px;background:#a64be3;border-radius:50%;box-shadow:0 0 0 5px #a64be31c}
      #desafio-7-dias h2{font-size:clamp(35px,4.5vw,60px)!important;line-height:1.08!important;letter-spacing:-.045em!important;margin:22px 0!important;max-width:650px;text-wrap:balance;color:#21112d!important}
      #desafio-7-dias h2 em{font-style:normal;color:#8734c8}
      #desafio-7-dias .tm7-intro{font-size:clamp(15px,1.5vw,18px);line-height:1.75;color:#65536e;max-width:570px;margin:0 0 32px}
      #desafio-7-dias .tm7-steps{display:grid;gap:12px}
      #desafio-7-dias .tm7-step{display:flex;gap:16px;align-items:flex-start;padding:15px 16px;border-radius:15px;background:#fff;border:1px solid #e7dcec;box-shadow:0 7px 20px #35134e08;transition:transform .75s cubic-bezier(.16,1,.3,1),box-shadow .75s cubic-bezier(.16,1,.3,1)}
      #desafio-7-dias .tm7-step:hover{transform:translateY(-4px);box-shadow:0 14px 30px #35134e12}
      #desafio-7-dias .tm7-symbol{display:grid;place-items:center;flex:0 0 39px;width:39px;height:39px;background:#f2e5fb;color:#8c38c8;border-radius:12px;font-size:23px}
      #desafio-7-dias .tm7-step strong{display:block;font-size:15px;color:#2b1936;margin:0 0 4px}
      #desafio-7-dias .tm7-step p{font-size:13px;line-height:1.55;color:#75667d;margin:0}
      #desafio-7-dias .tm7-visual{min-width:0;border-radius:25px;background:radial-gradient(circle at 75% 20%,#6c2a91 0%,transparent 42%),linear-gradient(145deg,#29113c,#140a20 85%);padding:clamp(25px,3.5vw,42px);color:white;box-shadow:0 25px 65px #2c103b28;min-height:410px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
      #desafio-7-dias .tm7-visual:before{content:'';position:absolute;inset:0;border:1px solid #ffffff20;border-radius:inherit;pointer-events:none}
      #desafio-7-dias .tm7-visual-top{display:flex;justify-content:space-between;gap:15px;font:750 11px system-ui;letter-spacing:.13em;color:#d5b3eb}
      #desafio-7-dias .tm7-visual-top span:last-child{color:#e9d2ff}
      #desafio-7-dias .tm7-visual-head{margin:50px 0 40px}
      #desafio-7-dias .tm7-small{font:650 11px system-ui;letter-spacing:.17em;color:#c78bf0;display:block;margin-bottom:18px}
      #desafio-7-dias .tm7-visual-head strong{font-size:clamp(27px,3vw,43px);line-height:1.15;letter-spacing:-.04em;color:#fff}
      #desafio-7-dias .tm7-visual-head i{font-style:normal;color:#dba7ff}
      #desafio-7-dias .tm7-days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px;margin-bottom:22px}
      #desafio-7-dias .tm7-days span{display:grid;place-items:center;aspect-ratio:1;border-radius:9px;border:1px solid #ffffff3a;color:#ead6f8;font:700 clamp(10px,1vw,13px) system-ui}
      #desafio-7-dias .tm7-days span:first-child{background:#aa4ae7;border-color:#aa4ae7;color:#fff}
      #desafio-7-dias .tm7-visual-bottom{font:600 10px system-ui;letter-spacing:.08em;color:#bca0d1;display:flex;align-items:center;gap:10px}
      #desafio-7-dias .tm7-line{width:24px;height:1px;background:#ae7ed1}
      @media(max-width:850px){#desafio-7-dias .tm7-layout{grid-template-columns:1fr;gap:30px;max-width:620px}#desafio-7-dias .tm7-visual{min-height:320px}#desafio-7-dias .tm7-visual-head{margin:35px 0}}
      @media(max-width:480px){#desafio-7-dias{padding:65px 18px!important}#desafio-7-dias h2{font-size:clamp(32px,9vw,42px)!important}#desafio-7-dias .tm7-visual{padding:24px;min-height:300px;border-radius:19px}#desafio-7-dias .tm7-step{padding:13px}#desafio-7-dias .tm7-visual-head strong{font-size:30px}#desafio-7-dias .tm7-days{gap:4px}#desafio-7-dias .tm7-days span{border-radius:6px}}
      @media(prefers-reduced-motion:reduce){#desafio-7-dias .tm7-step{transition:none}}
    `;
    document.head.appendChild(style);
  }
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();