/* eslint-disable no-undef */
describe('Loging in', function () {
  before(function () {
    cy.request('POST', 'http://localhost:3333/api/testing/reset')
    const admin = {
      firstName: 'norbert',
      lastName: 'nadir',
      email: 'norbert@zenika.com',
      password: 'norbert',
      phone: '0626262626',
      role: 'superadmin'
    }
    const student = {
      firstName: 'nattan',
      lastName: 'drake',
      email: 'nattan@zenika.com',
      password: 'nattan',
      phone: '0626262626',
      role: 'eleve'
    }
    cy.request('POST', 'http://localhost:3333/api/users/', admin)
    cy.request('POST', 'http://localhost:3333/api/users/', student)
  })
  it('front page can be opened', function () {
    cy.visit('http://localhost:3000')
    cy.contains('CONNEXION')
  })

  it('can show login form', function () {
    cy.visit('http://localhost:3000')
    cy.contains('CONNEXION')
      .click()
    cy.contains('Log In')
  })

  it('Log in as admin redirects to admin dashboard', function () {
    cy.visit('http://localhost:3000')
    cy.contains('CONNEXION')
      .click()
    cy.get('#login')
      .type('norbert@zenika.com')
    cy.get('#password')
      .type('norbert')
    cy.contains('Log In')
      .click()
    cy.contains('Promotions en cours')
  })

  it('Log in as student redirects to his personnalized content', function () {
    cy.visit('http://localhost:3000')
    cy.contains('CONNEXION')
      .click()
    cy.get('#login')
      .type('nattan@zenika.com')
    cy.get('#password')
      .type('nattan')
    cy.contains('Log In')
      .click()
    cy.contains('Accueil')
  })
})
