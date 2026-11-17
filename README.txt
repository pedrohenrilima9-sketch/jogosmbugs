# Leilão de Futebol - Correção Definitiva de Sincronização Multiplayer

## Por que o bug acontecia e como foi resolvido:
- **Problema**: Quando o navegador trocava de `Sala.html` para `leilao.html`, o navegador destruía a conexão PeerJS do anfitrião antes de a nova página carregar, deixando os convidados desconectados.
- **Solução Definitiva**: O Lobby da Sala e a Tela do Leilão agora operam na **mesma sessão contínua** dentro de `Sala.html`. Quando o anfitrião clica em **Iniciar leilão**, o canal de conexão já está aberto e ativo: a tela alterna instantaneamente para todos os participantes ao mesmo tempo e os jogadores já aparecem sincronizados na hora!
