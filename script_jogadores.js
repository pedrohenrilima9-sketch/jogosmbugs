const jogadores = [
  // ATACANTES (ATA)
  { nome: "Kylian Mbappé", posicao: "ATA", pernaBoa: "Direita", overall: 91 },
  { nome: "Erling Haaland", posicao: "ATA", pernaBoa: "Esquerda", overall: 91 },
  { nome: "Harry Kane", posicao: "ATA", pernaBoa: "Direita", overall: 90 },
  { nome: "Robert Lewandowski", posicao: "ATA", pernaBoa: "Direita", overall: 89 },
  { nome: "Lautaro Martínez", posicao: "ATA", pernaBoa: "Direita", overall: 89 },
  { nome: "Victor Osimhen", posicao: "ATA", pernaBoa: "Direita", overall: 88 },
  { nome: "Antoine Griezmann", posicao: "ATA", pernaBoa: "Esquerda", overall: 88 },
  { nome: "Julián Álvarez", posicao: "ATA", pernaBoa: "Direita", overall: 86 },
  { nome: "Alexander Isak", posicao: "ATA", pernaBoa: "Direita", overall: 86 },
  { nome: "Endrick", posicao: "ATA", pernaBoa: "Esquerda", overall: 82 },

  // PONTAS (PE / PD)
  { nome: "Vinícius Júnior", posicao: "PE", pernaBoa: "Direita", overall: 90 },
  { nome: "Mohamed Salah", posicao: "PD", pernaBoa: "Esquerda", overall: 90 },
  { nome: "Bukayo Saka", posicao: "PD", pernaBoa: "Esquerda", overall: 88 },
  { nome: "Phil Foden", posicao: "PD", pernaBoa: "Esquerda", overall: 88 },
  { nome: "Rafael Leão", posicao: "PE", pernaBoa: "Direita", overall: 87 },
  { nome: "Heung-Min Son", posicao: "PE", pernaBoa: "Ambidestro", overall: 87 },
  { nome: "Lamine Yamal", posicao: "PD", pernaBoa: "Esquerda", overall: 86 },
  { nome: "Rodrygo", posicao: "PD", pernaBoa: "Direita", overall: 86 },
  { nome: "Khvicha Kvaratskhelia", posicao: "PE", pernaBoa: "Ambidestro", overall: 86 },
  { nome: "Nico Williams", posicao: "PE", pernaBoa: "Direita", overall: 85 },

  // MEIAS (MC / MEI)
  { nome: "Jude Bellingham", posicao: "MEI", pernaBoa: "Direita", overall: 90 },
  { nome: "Kevin De Bruyne", posicao: "MEI", pernaBoa: "Ambidestro", overall: 90 },
  { nome: "Florian Wirtz", posicao: "MEI", pernaBoa: "Direita", overall: 88 },
  { nome: "Jamal Musiala", posicao: "MEI", pernaBoa: "Direita", overall: 88 },
  { nome: "Federico Valverde", posicao: "MC", pernaBoa: "Direita", overall: 88 },
  { nome: "Martin Ødegaard", posicao: "MEI", pernaBoa: "Esquerda", overall: 88 },
  { nome: "Bernardo Silva", posicao: "MEI", pernaBoa: "Esquerda", overall: 88 },
  { nome: "Pedri", posicao: "MC", pernaBoa: "Direita", overall: 87 },
  { nome: "Nicolò Barella", posicao: "MC", pernaBoa: "Direita", overall: 87 },
  { nome: "Alexis Mac Allister", posicao: "MC", pernaBoa: "Direita", overall: 87 },

  // VOLANTES (VOL)
  { nome: "Rodri", posicao: "VOL", pernaBoa: "Direita", overall: 91 },
  { nome: "Declan Rice", posicao: "VOL", pernaBoa: "Direita", overall: 87 },
  { nome: "Aurélien Tchouaméni", posicao: "VOL", pernaBoa: "Direita", overall: 86 },
  { nome: "Eduardo Camavinga", posicao: "VOL", pernaBoa: "Esquerda", overall: 85 },
  { nome: "Bruno Guimarães", posicao: "VOL", pernaBoa: "Direita", overall: 86 },
  { nome: "Hakan Çalhanoğlu", posicao: "VOL", pernaBoa: "Direita", overall: 86 },
  { nome: "Joshua Kimmich", posicao: "VOL", pernaBoa: "Direita", overall: 86 },
  { nome: "João Palhinha", posicao: "VOL", pernaBoa: "Direita", overall: 85 },

  // ZAGUEIROS (ZAG)
  { nome: "Virgil van Dijk", posicao: "ZAG", pernaBoa: "Direita", overall: 89 },
  { nome: "Rúben Dias", posicao: "ZAG", pernaBoa: "Direita", overall: 88 },
  { nome: "Antonio Rüdiger", posicao: "ZAG", pernaBoa: "Direita", overall: 88 },
  { nome: "William Saliba", posicao: "ZAG", pernaBoa: "Direita", overall: 88 },
  { nome: "Marquinhos", posicao: "ZAG", pernaBoa: "Direita", overall: 87 },
  { nome: "Alessandro Bastoni", posicao: "ZAG", pernaBoa: "Esquerda", overall: 87 },
  { nome: "Gabriel Magalhães", posicao: "ZAG", pernaBoa: "Esquerda", overall: 86 },
  { nome: "Éder Militão", posicao: "ZAG", pernaBoa: "Direita", overall: 86 },
  { nome: "Ronald Araújo", posicao: "ZAG", pernaBoa: "Direita", overall: 86 },
  { nome: "Joško Gvardiol", posicao: "ZAG", pernaBoa: "Esquerda", overall: 85 },

  // LATERAIS (LE / LD)
  { nome: "Theo Hernández", posicao: "LE", pernaBoa: "Esquerda", overall: 87 },
  { nome: "Achraf Hakimi", posicao: "LD", pernaBoa: "Direita", overall: 86 },
  { nome: "Dani Carvajal", posicao: "LD", pernaBoa: "Direita", overall: 86 },
  { nome: "Trent Alexander-Arnold", posicao: "LD", pernaBoa: "Direita", overall: 86 },
  { nome: "Alejandro Grimaldo", posicao: "LE", pernaBoa: "Esquerda", overall: 86 },
  { nome: "Federico Dimarco", posicao: "LE", pernaBoa: "Esquerda", overall: 85 },
  { nome: "Jules Koundé", posicao: "LD", pernaBoa: "Direita", overall: 85 },
  { nome: "Jeremie Frimpong", posicao: "LD", pernaBoa: "Direita", overall: 85 },
  { nome: "Alphonso Davies", posicao: "LE", pernaBoa: "Esquerda", overall: 84 },
  { nome: "Nuno Mendes", posicao: "LE", pernaBoa: "Esquerda", overall: 84 },

  // GOLEIROS (GOL)
  { nome: "Alisson Becker", posicao: "GOL", pernaBoa: "Direita", overall: 89 },
  { nome: "Thibaut Courtois", posicao: "GOL", pernaBoa: "Esquerda", overall: 89 },
  { nome: "Gianluigi Donnarumma", posicao: "GOL", pernaBoa: "Direita", overall: 89 },
  { nome: "Ederson", posicao: "GOL", pernaBoa: "Esquerda", overall: 88 },
  { nome: "Marc-André ter Stegen", posicao: "GOL", pernaBoa: "Direita", overall: 88 },
  { nome: "Jan Oblak", posicao: "GOL", pernaBoa: "Direita", overall: 88 },
  { nome: "Emiliano Martínez", posicao: "GOL", pernaBoa: "Direita", overall: 87 },
  { nome: "Mike Maignan", posicao: "GOL", pernaBoa: "Direita", overall: 87 }
];
