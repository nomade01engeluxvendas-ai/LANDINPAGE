const guides=[
{n:1,t:"Essa mudança vale para minha empresa?",s:"Entenda quem deve usar o Emissor Nacional e o que conferir antes de agir.",steps:["Confirme se sua empresa é ME ou EPP.","Verifique se é optante pelo Simples Nacional.","Confirme se presta serviços sujeitos à emissão de NFS-e.","Se houver exceção no município ou no seu enquadramento, valide antes de mudar sua rotina."],tip:"MEI já utiliza o padrão nacional para NFS-e de serviços."},
{n:2,t:"Como acessar o Emissor Nacional",s:"Caminho rápido para entrar no sistema de forma segura.",steps:["Acesse o portal oficial da NFS-e.","Clique em Acessar o sistema.","Escolha Gov.br ou certificado digital, conforme disponível.","Faça o login e confira se seus dados estão corretos."],tip:"Evite links recebidos por terceiros. Prefira digitar o endereço oficial."},
{n:3,t:"Como emitir sua primeira NFS-e",s:"Fluxo essencial da emissão, do acesso à confirmação.",steps:["Entre no Emissor Nacional e faça login.","Abra a opção Emitir NFS-e.","Preencha os dados do tomador.","Escolha o serviço e informe município/código aplicável.","Preencha valores e informações complementares.","Revise o resumo.","Confirme a emissão e salve o PDF."],tip:"Antes de emitir, confira cliente, serviço, valor e município."},
{n:4,t:"Checklist antes de emitir",s:"Conferência final para reduzir erros antes da confirmação.",steps:["Dados da empresa corretos e atualizados.","CPF/CNPJ e nome do cliente conferidos.","Serviço, código e município revisados.","Valor, descontos e retenções confirmados.","Documentos e informações complementares anexados/preenchidos quando aplicável.","Resumo final lido antes de clicar em Emitir."],tip:"Se algo estiver diferente do contrato ou cadastro, pare antes de emitir."},
{n:5,t:"Como preencher os dados do cliente",s:"Organize os dados do tomador e evite rejeições por cadastro.",steps:["Abra a área de dados do tomador.","Escolha Pessoa Física ou Pessoa Jurídica.","Informe CPF/CNPJ corretamente.","Preencha nome/razão social, inscrição quando exigida, e-mail e endereço quando necessários.","Revise antes de avançar."],tip:"Dados incorretos do tomador são uma causa frequente de problemas."},
{n:6,t:"Como escolher o serviço correto",s:"Localize o serviço e confira código, descrição e município.",steps:["Abra o campo de serviço prestado.","Pesquise pelo nome do serviço ou código CNAE/lista quando disponível.","Leia a descrição completa.","Confirme o município da prestação.","Se não encontrar, tente palavras semelhantes e valide o enquadramento."],tip:"Escolher serviço errado pode gerar tributação incorreta."},
{n:7,t:"Valores e informações da nota",s:"Preencha valor, descontos, retenções e dados complementares.",steps:["Informe o valor bruto do serviço.","Preencha descontos somente se houver.","Informe retenções apenas quando aplicáveis.","Confira o valor líquido calculado.","Preencha competência, data e descrição complementar quando necessário."],tip:"Os campos tributários podem variar conforme município e operação."},
{n:8,t:"Emiti a NFS-e. E agora?",s:"O que conferir, salvar e enviar após a emissão.",steps:["Confira a mensagem de emissão concluída.","Anote ou confirme o número da NFS-e.","Abra e confira o PDF.","Salve o arquivo com nome organizado.","Envie a nota ao cliente pelo canal adequado.","Registre a nota no seu controle mensal."],tip:"O PDF é seu comprovante operacional. Guarde-o em pasta organizada."},
{n:9,t:"Como consultar uma NFS-e emitida",s:"Encontre uma nota por período, número ou tomador.",steps:["Entre no Emissor Nacional.","Abra Consultar NFS-e.","Escolha os filtros de pesquisa.","Abra os detalhes da nota encontrada.","Baixe, compartilhe ou imprima quando necessário."],tip:"Use filtros simples primeiro; refine apenas se houver muitos resultados."},
{n:10,t:"Como baixar e guardar uma NFS-e",s:"Organização prática para localizar documentos depois.",steps:["Abra a nota desejada.","Clique em Baixar PDF.","Escolha uma pasta padronizada.","Organize por ano/mês e, se útil, por cliente.","Mantenha backup em nuvem ou outra mídia segura."],tip:"Um padrão simples de nome: NFS-e_NUMERO_CLIENTE_DATA.pdf."},
{n:11,t:"Emiti a nota errada. O que faço?",s:"Escolha entre substituição, cancelamento ou correção conforme o erro.",steps:["Identifique exatamente o erro.","Se o erro puder ser corrigido por substituição, use essa opção.","Se a nota não será mais usada e o cancelamento for permitido, cancele.","Se houver dúvida de prazo ou regra municipal, confirme antes de agir."],tip:"Não tente apagar o histórico. Operações fiscais precisam manter rastreabilidade."},
{n:12,t:"Como cancelar uma NFS-e",s:"Passo a passo para cancelar dentro das regras aplicáveis.",steps:["Consulte a nota no sistema.","Abra os detalhes.","Escolha Cancelar NFS-e.","Informe o motivo solicitado.","Confirme a operação.","Salve o comprovante de cancelamento."],tip:"Prazo e permissões de cancelamento podem variar."},
{n:13,t:"Como substituir uma NFS-e",s:"Corrija dados emitindo uma nova nota vinculada à original.",steps:["Confirme que o erro permite substituição.","Abra Consultar NFS-e e localize a nota.","Escolha Substituir NFS-e.","Corrija somente os dados necessários.","Emita a nova nota.","Confirme que a original ficou vinculada à substituta."],tip:"A substituição mantém o histórico e cria um novo documento."},
{n:14,t:"Cancelamento x substituição",s:"Decida qual operação usar conforme a situação.",steps:["Use substituição quando a prestação continua válida, mas há dado incorreto.","Use cancelamento quando a nota não será mais utilizada e a regra permitir.","Para erro de cliente, serviço ou valor, substituição costuma ser o caminho quando disponível.","Para nota emitida por engano, avalie cancelamento."],tip:"Sempre confirme prazo e regra aplicável ao seu caso."},
{n:15,t:"Deu erro no Emissor Nacional",s:"Diagnóstico rápido por categoria de problema.",steps:["Leia a mensagem de erro inteira.","Verifique internet e sessão.","Revise dados do tomador.","Confira serviço, município e tributação.","Revise valores e campos obrigatórios.","Se persistir, teste novamente depois e consulte suporte/documentação oficial."],tip:"Evite repetir a mesma tentativa sem corrigir o campo apontado."},
{n:16,t:"NFS-e rejeitada ou não concluída",s:"Como separar rejeição de instabilidade e corrigir.",steps:["Identifique a mensagem de rejeição.","Confira se há dado inválido do tomador.","Revise código/serviço permitido.","Confirme valor dentro das regras.","Se for erro de sistema, aguarde e tente novamente.","Só registre como emitida quando houver confirmação e número da nota."],tip:"Nota rejeitada não deve ser tratada como emissão concluída."},
{n:17,t:"Emissor Web x aplicativo",s:"Quando usar computador ou celular.",steps:["Prefira Web para emissão frequente e conferência detalhada.","Use o app quando precisar de mobilidade e consulta rápida.","Em ambos, acesse apenas canais oficiais.","Escolha o formato que reduz erros na sua rotina."],tip:"Para muitas notas, tela maior costuma facilitar conferência."},
{n:18,t:"O que muda na rotina da empresa?",s:"Visão operacional da padronização e do novo fluxo.",steps:["Centralize emissão no canal aplicável.","Padronize cadastro de clientes e serviços.","Defina onde PDFs serão arquivados.","Acompanhe cancelamentos e substituições.","Revise integração com sistema próprio/ERP se houver.","Treine quem emite notas."],tip:"Rotina padronizada reduz retrabalho e erro."},
{n:19,t:"Checklist da rotina NFS-e",s:"Um fluxo mensal simples para manter a casa em ordem.",steps:["Acesse o sistema com dados atualizados.","Emita e confira cada nota.","Consulte notas quando necessário.","Cancele ou substitua corretamente.","Acompanhe pendências e rejeições.","Organize PDFs e controles.","Faça revisão mensal antes de enviar documentos à contabilidade."],tip:"Use o controle do próprio app para acompanhar notas e pendências."},
{n:20,t:"Central rápida NFS-e",s:"Índice para chegar direto ao procedimento certo.",steps:["Preciso emitir → guia 3.","Preciso consultar → guia 9.","Preciso cancelar → guia 12.","Preciso substituir → guia 13.","Emiti errado → guia 11.","Deu erro → guias 15 e 16.","Dúvida Web x app → guia 17.","Rotina da empresa → guias 18 e 19."],tip:"Use a busca no topo para localizar qualquer assunto em segundos."}
];

const quick=[
["🧾","Emitir NFS-e","Passo a passo da emissão",3],
["🔎","Consultar nota","Encontre uma NFS-e emitida",9],
["❌","Cancelar","Veja quando e como cancelar",12],
["🔁","Substituir","Corrija uma nota mantendo histórico",13],
["⚠️","Resolver erro","Diagnóstico e rejeições",15],
["✅","Checklist","Confira antes de emitir",4]
];

const errors={
acesso:"Confira conexão, sessão e endereço oficial. Saia apenas se necessário, entre novamente pelo portal oficial e evite links de terceiros.",
tomador:"Revise CPF/CNPJ, nome/razão social, município, inscrição e demais campos exigidos. Um caractere incorreto pode impedir a emissão.",
servico:"Confirme serviço prestado, código aplicável, município e natureza da operação. Se houver dúvida tributária, valide antes de emitir.",
valores:"Confira valor do serviço, descontos, retenções e campos obrigatórios. Revise o resumo antes de uma nova tentativa.",
rejeicao:"Leia a mensagem completa, corrija o campo indicado e tente novamente. Só considere emitida quando houver confirmação e número da NFS-e.",
persistente:"Verifique conexão, atualize a página, tente outro horário e consulte documentação/suporte oficial. Não repita indefinidamente uma operação que continua retornando erro."
};

const checklistData=[
{title:"Antes de emitir",items:["Cadastro da empresa conferido","CPF/CNPJ do cliente conferido","Serviço e código revisados","Município da prestação conferido","Valor e descontos revisados","Retenções conferidas quando aplicáveis","Resumo final lido antes de emitir"]},
{title:"Depois de emitir",items:["Número da NFS-e anotado","PDF aberto e conferido","Arquivo salvo em pasta organizada","Nota enviada ao cliente","Nota registrada no controle mensal"]},
{title:"Fechamento do mês",items:["Notas emitidas conferidas","Cancelamentos conferidos","Substituições conferidas","Pendências/rejeições resolvidas","PDFs organizados","Valores revisados","Documentos separados para contabilidade"]},
{title:"Se der erro",items:["Mensagem de erro lida por completo","Dados do tomador revisados","Serviço/município revisados","Valores e campos obrigatórios revisados","Conexão/sessão verificadas","Tentativa repetida somente após ajuste"]}
];

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const money=v=>Number(v||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const store={
 get(k,d=[]){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},
 set(k,v){localStorage.setItem(k,JSON.stringify(v))}
};

function switchView(id){
 $$(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
 $$(".view").forEach(v=>v.classList.toggle("active",v.id===id));
 window.scrollTo({top:0,behavior:"smooth"});
}
$$(".tab").forEach(b=>b.onclick=()=>switchView(b.dataset.view));

function openGuide(n){
 const g=guides.find(x=>x.n===Number(n)); if(!g)return;
 $("#modalKicker").textContent=`MAPA ${String(g.n).padStart(2,"0")} DE 20`;
 $("#modalTitle").textContent=g.t;
 $("#modalSummary").textContent=g.s;
 $("#modalSteps").innerHTML=`<div class="steps">${g.steps.map(x=>`<div class="step">${x}</div>`).join("")}</div>`;
 $("#modalTip").innerHTML=`<strong>Dica rápida:</strong> ${g.tip}`;
 $("#guideModal").classList.remove("hidden");
}
$("#closeModal").onclick=()=>$("#guideModal").classList.add("hidden");
$("#guideModal").onclick=e=>{if(e.target.id==="guideModal")$("#guideModal").classList.add("hidden")};
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#guideModal").classList.add("hidden")});

$("#quickActions").innerHTML=quick.map(q=>`<button class="quick" data-guide="${q[3]}"><span class="icon">${q[0]}</span><strong>${q[1]}</strong><small>${q[2]}</small></button>`).join("");
$("#quickActions").onclick=e=>{const b=e.target.closest("[data-guide]");if(b)openGuide(b.dataset.guide)};
document.body.addEventListener("click",e=>{const b=e.target.closest("[data-open-guide]");if(b)openGuide(b.dataset.openGuide)});

function renderGuides(list=guides){
 $("#guideGrid").innerHTML=list.length?list.map(g=>`<article class="guide-card" data-guide="${g.n}"><div class="num">${String(g.n).padStart(2,"0")}</div><h3>${g.t}</h3><p>${g.s}</p></article>`).join(""):`<div class="empty">Nenhum guia encontrado.</div>`;
}
$("#guideGrid").onclick=e=>{const c=e.target.closest("[data-guide]");if(c)openGuide(c.dataset.guide)};
renderGuides();

$("#globalSearch").addEventListener("input",e=>{
 const q=e.target.value.trim().toLowerCase();
 if(!q){renderGuides();return}
 const found=guides.filter(g=>[g.t,g.s,g.tip,...g.steps].join(" ").toLowerCase().includes(q));
 renderGuides(found); switchView("guias");
});

$("#errorType").onchange=e=>$("#errorAdvice").textContent=errors[e.target.value]||"Selecione uma opção para ver a orientação.";

function renderNotes(){
 const notes=store.get("nfse_notes");
 $("#notesList").innerHTML=notes.length?notes.slice().reverse().map((n,i)=>{
  const realIndex=notes.length-1-i;
  return `<article class="record"><div><h4>NFS-e ${n.numero} • ${n.cliente}</h4><p>${n.data} • ${n.servico}</p><span class="badge ${n.status.toLowerCase()}">${n.status}</span>${n.obs?`<p>${n.obs}</p>`:""}<div class="record-actions"><button class="mini danger" data-del-note="${realIndex}">Excluir</button></div></div><div class="amount">${money(n.valor)}</div></article>`
 }).join(""):`<div class="empty">Nenhuma nota cadastrada ainda.</div>`;
 renderStats();
}
$("#noteForm").onsubmit=e=>{
 e.preventDefault(); const fd=new FormData(e.currentTarget); const note=Object.fromEntries(fd.entries());
 const notes=store.get("nfse_notes"); notes.push(note);store.set("nfse_notes",notes);e.currentTarget.reset();renderNotes();
};
$("#notesList").onclick=e=>{
 const b=e.target.closest("[data-del-note]");if(!b)return;
 const notes=store.get("nfse_notes");notes.splice(Number(b.dataset.delNote),1);store.set("nfse_notes",notes);renderNotes();
};

function renderClients(){
 const clients=store.get("nfse_clients");
 $("#clientsList").innerHTML=clients.length?clients.slice().reverse().map((c,i)=>{
  const idx=clients.length-1-i;
  return `<article class="record"><div><h4>${c.nome}</h4><p>${c.documento||"Sem documento"} • ${c.municipio||"Município não informado"}</p><p>${c.codigo?`Serviço: ${c.codigo} • `:""}${c.descricao||""}</p>${c.email?`<p>${c.email}</p>`:""}<div class="record-actions"><button class="mini danger" data-del-client="${idx}">Excluir</button></div></div><div class="amount">${c.valor?money(c.valor):""}</div></article>`
 }).join(""):`<div class="empty">Nenhum cliente cadastrado ainda.</div>`;
 renderStats();
}
$("#clientForm").onsubmit=e=>{
 e.preventDefault();const fd=new FormData(e.currentTarget);const c=Object.fromEntries(fd.entries());
 const clients=store.get("nfse_clients");clients.push(c);store.set("nfse_clients",clients);e.currentTarget.reset();renderClients();
};
$("#clientsList").onclick=e=>{
 const b=e.target.closest("[data-del-client]");if(!b)return;
 const clients=store.get("nfse_clients");clients.splice(Number(b.dataset.delClient),1);store.set("nfse_clients",clients);renderClients();
};

function renderStats(){
 const notes=store.get("nfse_notes"),clients=store.get("nfse_clients");
 $("#statNotas").textContent=notes.length;
 $("#statClientes").textContent=clients.length;
 $("#statValor").textContent=money(notes.filter(n=>n.status==="Emitida"||n.status==="Substituída").reduce((a,n)=>a+Number(n.valor||0),0));
 $("#statPendencias").textContent=notes.filter(n=>n.status==="Pendente").length;
}

function renderChecklists(){
 $("#checklistArea").innerHTML=checklistData.map((c,ci)=>`<article class="check-card"><h3>${c.title}</h3>${c.items.map((it,ii)=>{const key=`check_${ci}_${ii}`;const on=localStorage.getItem(key)==="1";return `<label class="check-row"><input type="checkbox" data-check="${key}" ${on?"checked":""}><span>${it}</span></label>`}).join("")}<button class="mini" data-reset="${ci}">Limpar checklist</button></article>`).join("");
}
$("#checklistArea").addEventListener("change",e=>{if(e.target.dataset.check)localStorage.setItem(e.target.dataset.check,e.target.checked?"1":"0")});
$("#checklistArea").addEventListener("click",e=>{
 const b=e.target.closest("[data-reset]");if(!b)return;
 checklistData[Number(b.dataset.reset)].items.forEach((_,ii)=>localStorage.removeItem(`check_${b.dataset.reset}_${ii}`));renderChecklists();
});

$("#exportCsv").onclick=()=>{
 const notes=store.get("nfse_notes");if(!notes.length)return alert("Não há notas para exportar.");
 const cols=["numero","data","cliente","servico","valor","status","obs"];
 const esc=v=>`"${String(v??"").replaceAll('"','""')}"`;
 const csv=[cols.join(","),...notes.map(n=>cols.map(c=>esc(n[c])).join(","))].join("\n");
 download(new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),"controle-nfse.csv");
};
$("#backupBtn").onclick=()=>{
 const data={version:1,exportedAt:new Date().toISOString(),notes:store.get("nfse_notes"),clients:store.get("nfse_clients")};
 download(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),"backup-central-nfse.json");
};
$("#restoreBtn").onclick=()=>$("#restoreInput").click();
$("#restoreInput").onchange=async e=>{
 const f=e.target.files[0];if(!f)return;
 try{const data=JSON.parse(await f.text());if(!Array.isArray(data.notes)||!Array.isArray(data.clients))throw new Error();
  store.set("nfse_notes",data.notes);store.set("nfse_clients",data.clients);renderNotes();renderClients();alert("Backup restaurado.");
 }catch{alert("Arquivo de backup inválido.");}
};
function download(blob,name){const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").classList.remove("hidden")});
$("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").classList.add("hidden")};

if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
renderNotes();renderClients();renderChecklists();renderStats();
