(function(){
const checkout='https://pay.kiwify.com.br/mlcDzUh?utm_id=97760_v0_s00_e0_tv4';
window.comprar=function(){window.location.href=checkout};
function init(){
 document.querySelectorAll('#checkout-notice').forEach(e=>e.hidden=true);
 const heading=[...document.querySelectorAll('h1,h2,h3')].find(e=>/Desafio 7 Dias Magnéticos/i.test(e.textContent));
 const section=document.getElementById('desafio-7-dias')||heading?.closest('section');
 if(!section||section.dataset.tmUpdated==='1')return;
 section.dataset.tmUpdated='1';
 section.id='desafio-7-dias';
 section.className='tm7new';
 section.innerHTML=`<div class="tm7wrap"><div class="tm7head"><span class="tm7eyebrow">✦ DA TEORIA PARA A PRÁTICA</span><h2>7 dias para sair do <em>automático.</em></h2><p>Não é sobre fazer mais. É sobre estar presente no que você já faz. Um desafio para começar a aplicar o conteúdo do guia nos seus treinos.</p></div><div class="tm7grid"><div class="tm7board"><div class="tm7top"><span>DESAFIO MAGNÉTICO</span><span class="tm7pill">07 DIAS</span></div><div class="tm7message">Um treino de cada vez.<br><em>Uma escolha consciente.</em></div><div class="tm7days"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span></div><div class="tm7foot">FOCO · PRESENÇA · CONSTÂNCIA</div></div><div class="tm7features"><article><b>01</b><div><h3>Entre no treino com intenção</h3><p>Use pequenos rituais e a respiração para se preparar antes de começar.</p></div></article><article><b>02</b><div><h3>Esteja presente em cada movimento</h3><p>Observe a execução e desenvolva mais atenção durante os exercícios.</p></div></article><article><b>03</b><div><h3>Perceba sua própria evolução</h3><p>Faça registros para acompanhar sua experiência e reconhecer pequenas conquistas.</p></div></article><p>O segredo não está só em ler o guia. Está em <strong>colocar em prática.</strong></p></div></div></div>`;
 const css=`
#desafio-7-dias.tm7new{background:#160d20!important;color:#faf5ff!important;padding:clamp(70px,8vw,110px) 20px!important;overflow:hidden}
.tm7new .tm7wrap{max-width:1140px;margin:auto}.tm7new .tm7head{text-align:center;max-width:790px;margin:0 auto 50px}
.tm7new .tm7eyebrow{color:#cf91ff;font:800 11px system-ui;letter-spacing:.19em}
.tm7new .tm7head h2{color:white!important;font-size:clamp(37px,5.2vw,68px)!important;line-height:1.08!important;letter-spacing:-.045em;margin:20px auto!important}
.tm7new .tm7head h2 em{color:#c981ff;font-style:normal}.tm7new .tm7head p{font-size:clamp(15px,1.7vw,19px);line-height:1.7;color:#d3c3df;max-width:670px;margin:auto}
.tm7new .tm7grid{display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(22px,4vw,54px);align-items:center}
.tm7new .tm7board{min-width:0;border:1px solid #8f59af70;background:radial-gradient(circle at 65% 25%,#67338a70,transparent 48%),linear-gradient(145deg,#372047,#23122f);border-radius:28px;padding:clamp(24px,3.4vw,42px);min-height:425px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 26px 60px #09030f75}
.tm7new .tm7top{display:flex;justify-content:space-between;gap:12px;align-items:center;color:#e3c8f5;font:800 11px system-ui;letter-spacing:.12em}
.tm7new .tm7pill{border:1px solid #d8a6f65e;border-radius:40px;padding:8px 12px;white-space:nowrap}
.tm7new .tm7message{font-size:clamp(26px,3.5vw,44px);line-height:1.16;letter-spacing:-.04em;font-weight:850;color:white;margin:38px 0}
.tm7new .tm7message em{font-style:normal;color:#d69aff}.tm7new .tm7days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}
.tm7new .tm7days span{border:1px solid #b88bd055;border-radius:10px;aspect-ratio:1;display:grid;place-items:center;color:#e9d9f3;font:800 clamp(11px,1.4vw,16px) system-ui}
.tm7new .tm7days span:first-child{background:#a64be7;border-color:#a64be7;color:white}
.tm7new .tm7foot{margin-top:22px;font:700 10px system-ui;letter-spacing:.1em;color:#d7b5eb}
.tm7new .tm7features{display:grid;gap:13px}.tm7new .tm7features article{display:flex;gap:18px;padding:21px 20px;background:#ffffff08;border:1px solid #b28ac02e;border-radius:17px;transition:transform .65s cubic-bezier(.16,1,.3,1)}
.tm7new .tm7features article:hover{transform:translateX(5px)}.tm7new .tm7features article>b{flex:0 0 43px;height:43px;display:grid;place-items:center;background:#b262e821;color:#d7a0ff;border-radius:13px;font:800 14px system-ui}
.tm7new .tm7features h3{font-size:17px;color:white;margin:0 0 6px}.tm7new .tm7features p{font-size:14px;line-height:1.6;color:#cbbbd6;margin:0}
.tm7new .tm7features>p{padding:12px 4px;font-size:15px;color:#d3c3df}.tm7new .tm7features>p strong{color:#e6baff}
@media(max-width:840px){.tm7new .tm7grid{grid-template-columns:1fr;max-width:640px;margin:auto}.tm7new .tm7board{min-height:340px}.tm7new .tm7head{margin-bottom:35px}}
@media(max-width:480px){#desafio-7-dias.tm7new{padding:65px 17px!important}.tm7new .tm7head h2{font-size:clamp(32px,9vw,42px)!important}.tm7new .tm7board{padding:22px;min-height:310px;border-radius:21px}.tm7new .tm7message{font-size:clamp(26px,7.5vw,34px);margin:30px 0}.tm7new .tm7days{gap:4px}.tm7new .tm7days span{border-radius:7px}.tm7new .tm7features article{padding:17px 15px;gap:12px}}
@media(prefers-reduced-motion:reduce){.tm7new .tm7features article{transition:none}}
`;
 const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();