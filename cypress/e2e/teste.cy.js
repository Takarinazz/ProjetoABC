describe('Marcar Repositório como Favorito', () => {

    const baseUrl = 'https://localhost:44329';
  
    function acessarListaDeRepositorios() {
      cy.visit(baseUrl);
      cy.contains('Veja Outros Repositórios').click();
    }
  
    function buscarRepositorio(nome) {
      cy.get('#Result_Name').type(nome);
      cy.get('.btn').click();
    }
  
    function adicionarAosFavoritos(nomeRepositorio) {
      cy.contains('td', nomeRepositorio).parents('tr').contains('a', 'Detalhe').click({ force: true });
      cy.get('.btn').click();
    }
  
    function verificarFavoritos(mensagem) {
      cy.contains('Favoritos').click();
      cy.contains(mensagem);
    }
  
    it('Busca e adiciona um repositório aos favoritos', () => {
      acessarListaDeRepositorios();
      buscarRepositorio("java");
      adicionarAosFavoritos("java");
      verificarFavoritos('java');
    });
  });
  