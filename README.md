# Soul Gastrobar Taubaté

Site do Soul Gastrobar: bar de música com palco para banda, drinks autorais e cozinha de bar.
Av. Independência, 427, Vila Jaboticabeira, Taubaté/SP.

## Como atualizar os shows

Tudo fica em `js/agenda.js`.

```js
window.SOUL_AGENDA = [
  { data: "2026-11-21", hora: "19:30", atracao: "Old Is Cool", estilo: "Rock", foto: "img/bandas/old-is-cool.jpg" }
];
```

- `data` no formato AAAA-MM-DD e `hora` no formato HH:MM.
- `foto` (opcional): coloque a imagem da banda em `img/bandas/`.
- `video` (opcional): vídeo curto, sem som, em `video/`, por exemplo `video/banda.mp4`.
- `ingresso` (opcional): link do Sympla. O botão do show vira "Comprar ingresso".
- O próximo show aparece no topo do site com a foto ou o vídeo da banda e o nome dela.
- Shows com data passada somem sozinhos. A agenda mostra os 3 próximos.

## Como trocar as fotos da galeria

Também em `js/agenda.js`, na lista `SOUL_GALERIA`. Cada foto tem um `quadro` de 1 a 5;
o quadro 1 é o grande, reservado para a banda no palco.

## Reservas

Os botões de reservar abrem um pop-up que monta a mensagem e abre o WhatsApp da casa,
(12) 99188-5259. O site não guarda nenhum dado.

## Hospedagem

Os arquivos ficam na raiz do domínio. O `.htaccess` força HTTPS e aplica os cabeçalhos
de segurança (CSP liberando só o Google Fonts).
