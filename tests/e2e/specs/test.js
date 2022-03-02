// https://docs.cypress.io/api/table-of-contents

describe('Verifica que en el home exista información del juego', () => {
  it('El usuario visita home', () => {
    cy.visit('/')
    cy.contains('h1', '¿En qué consiste el juego?')
  })
})
