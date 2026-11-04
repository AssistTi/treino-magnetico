/* Conteúdo editável via Pages CMS. Os dados vêm de content/site.json. */
(async function(){
  try {
    const response = await fetch('content/site.json', {cache:'no-store'});
    if(!response.ok) return;
    const d = await response.json();
    const headings = Array.from(document.querySelectorAll('h1,h2'));
    function heading(oldText,value){ if(!value) return; const el=headings.find(x=>x.textContent.trim().startsWith(oldText)); if(el) el.textContent=value; }
    heading('Você não precisa trocar de treino',d.titulo);
    heading('Você troca de treino, recomeça',d.titulo_problema);
    heading('Guia do Treino Magnético',d.titulo_guia);
    heading('Quem é a Bruna?',d.titulo_bruna);
    heading('Não é mais um treino.',d.titulo_oferta);
    const hero=document.querySelector('h1');
    if(hero&&d.subtitulo){const parent=hero.parentElement; const ps=Array.from(parent.querySelectorAll('p'));const target=ps.find(p=>p.textContent.includes('Talvez não seja sobre'));if(target) target.textContent=d.subtitulo;}
    if(d.preco){document.querySelectorAll('a,button').forEach(el=>{if(el.textContent.includes('29,90'))el.textContent=el.textContent.replace(/29,90/g,d.preco);});}
    if(d.link_compra){document.querySelectorAll('a.comprar,a.btn,a.quiz-cta').forEach(a=>{if(a.textContent.toUpperCase().includes('GUIA'))a.href=d.link_compra;});}
    if(d.texto_bruna){const sec=document.querySelector('.story-copy');if(sec){let p=sec.querySelector('p');if(p)p.textContent=d.texto_bruna;}}
    if(d.foto_bruna){const img=document.querySelector('.author img, .story-grid img');if(img)img.src=d.foto_bruna;}
    const testimonials=document.querySelector('.testimonial-section');
    if(testimonials){const entries=[d.depoimento_1,d.depoimento_2].filter(Boolean);const target=testimonials.querySelector('.container');if(target){target.querySelectorAll('[data-cms-testimonial]').forEach(n=>n.remove());entries.forEach(t=>{const p=document.createElement('p');p.setAttribute('data-cms-testimonial','');p.textContent='“'+t+'”';p.style.cssText='margin:1rem auto;max-width:650px;font-style:italic';target.appendChild(p);});}}
  } catch(err){console.warn('Conteúdo CMS indisponível',err);}
})();
