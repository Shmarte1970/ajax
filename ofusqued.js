eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    "m s{k(a,7,9,8,c,b){1.a=a;1.7=7;1.9=9;1.8=8;1.c=c;1.b=b}3(){5.6(`d g 18 U ${1.a}.`);5.6(`d g l ${1.7}7.`);5.6(`d g l ${1.9}9.`);5.6(`d g l T 8 I R ${1.8}.`);5.6(`¿d g Q P?${1.c?'Sí':'v'}.`);5.6(`d g M I O ${1.b}.`)}}m t u s{k(a,7,9,8,c,b,j){f(a,7,9,8,c,b);1.j=j}3(){f.3();5.6(`¿d xíw l j?${1.j?'Sí':'v'}.`);5.6(`--------------------------------------------------`)}}m o u s{k(a,7,9,8,c,b,p){f(a,7,9,8,c,b);1.p=p}3(){f.3();5.6(`¿d y L K V?${1.p}.`);5.6(`--------------------------------------------------`)}}m z u s{k(a,7,9,8,c,b,r){f(a,7,9,8,c,b);1.r=r}3(){f.3();5.6(`¿12 13 14 15?${1.r?'Sí':'v'}.`);5.6(`--------------------------------------------------`)}}h C=i t('17',4,2,'xíw',e,'q',n);C.3();h F=i t('J 16',2,2,'xíw',e,'q',n);F.3();h A=i o('11',0,2,'y',e,'E','10');A.3();h B=i o('o Z',0,2,'y',n,'E','W');B.3();h H=i z('Y X ',2,2,'G',e,'q',n);H.3();h D=i z('N',2,2,'G',e,'q',e);D.3();",
    62,
    71,
    "|this||mostrarInfo||console|log|extremidades|boca|ojos|nombre|respiracion|veneno|Este|false|super|animal|const|new|pelo|constructor|tiene|class|true|Pez|tipoAgua|pulmonar|puedeVolar|Animal|Mamifero|extends|No|fero|mam|pez|Ave|pezPirana|pezPiedra|mamiferoLobo|avePinguino|branquial|mamiferoLiebreSaltadora|pico|aveAguilaCalva|de|Libre|en|vide|respira|Pinguino|manera|venenoso|es|tipo||una|llamma|agua|salada|Clava|Aguila|Piedra|dulce|Pirana|Esta|ave|puede|volar|Saltadora|Lobo|se".split(
      "|"
    ),
    0,
    {}
  )
);
