/* eslint-disable no-undef */
describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado inicial de la app
    cy.visit('/')

    // 02. Act: Interactuar con la app (realizar acciones)
    cy.get('h1')
      .contains('Home') // 03. Assert: Verificar que la app se comporta como esperamos
  })
})