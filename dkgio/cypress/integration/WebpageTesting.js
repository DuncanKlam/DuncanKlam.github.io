describe('Splash Page', () => {
  it('checks splash page text and svg', () => {
    cy.visit('/')

    cy.contains('Welcome to the')

    cy.contains('PINEAPPLE LIBRARIES')

    cy.get('svg')
  })

  it('clicks the enter site button', () => {
    cy.visit('/')

    cy.get('.enter-site-button').click()

    cy.url().should('include', '/home')
  })
})

describe('Home Page', () => {
  it('checks home page text and svg', () => {
    cy.visit('/home')

    cy.contains('TPL')

    cy.contains('Pineapples')

    cy.contains('Home')

    cy.contains('About')

    cy.contains('Donate')

    cy.contains('Contact')

    cy.contains('Download')

    cy.get('svg')
  })

  it('clicks the logo to navigate to the splash page', () => {
    cy.visit('/home')

    cy.contains('TPL').click()

    cy.url().should('include', '/')
  })

  it('clicks the Pineapple button to navigate to the pineapples page', () => {
    cy.visit('/home')

    cy.contains('Pineapples').click()

    cy.url().should('include', '/pineapples')
  })

  it('clicks the Home button to navigate to the home page', () => {
    cy.visit('/home')

    cy.contains('Home').click()

    cy.url().should('include', '/home')
  })

  it('clicks the About button to navigate to the About page', () => {
    cy.visit('/home')

    cy.contains('About').click()

    cy.url().should('include', '/about')
  })

  it('clicks the Contact button to navigate to the Contact page', () => {
    cy.visit('/home')

    cy.contains('Contact').click()

    cy.url().should('include', '/contact')
  })
})