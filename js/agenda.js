// AGENDA DE SHOWS — o dono atualiza este arquivo (até o painel /admin ser aprovado).
// Cada show: data (AAAA-MM-DD), hora (HH:MM), atracao, estilo.
// Opcional: foto ("img/bandas/nome.jpg"), video ("video/nome.mp4", curto, sem som, até ~8 MB)
// e ingresso (link do Sympla).
// O próximo show aparece no topo do site com a foto ou o vídeo da banda e o nome dela.
// Shows com data passada somem sozinhos. A agenda mostra os 3 próximos.
window.SOUL_AGENDA = [
  { data: "2026-11-21", hora: "19:30", atracao: "Old Is Cool", estilo: "Rock", foto: "img/bandas/old-is-cool.jpg" }
];

// Foto ou vídeo usados no topo quando o próximo show ainda não tem os seus (ex.: uma foto da casa com banda no palco).
window.SOUL_PALCO_PADRAO = { foto: "", video: "" };

// GALERIA — fotos da casa. "quadro" diz onde a foto entra: 1 = quadro grande (banda no palco),
// 2 = drink no balcão, 3 = steak tartare, 4 = torresmo, 5 = bolovo. Quadro sem foto mostra a moldura com a legenda.
window.SOUL_GALERIA = [
  { quadro: 2, foto: "img/galeria/drink-balcao.jpg", legenda: "Drink sendo servido no balcão do Soul" },
  { quadro: 3, foto: "img/galeria/steak-tartare.jpg", legenda: "Steak tartare com torradas e Aperol Spritz, sobre o jogo americano do Soul" },
  { quadro: 4, foto: "img/galeria/torresmo.jpg", legenda: "Torresmo de rolo com gin tônica" },
  { quadro: 5, foto: "img/galeria/bolovo-chopp.jpg", legenda: "Bolovo de carne de panela com chopp na taça do Soul" }
];
