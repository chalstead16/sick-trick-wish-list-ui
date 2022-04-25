describe('STWL homepage flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'mock_get_data.json' })
    cy.visit('http://localhost:3000')
  })

  it('should see the title, form on load', () => {
    cy.contains('Sick Trick Wish List')
    cy.get('form')
    cy.get('.stance-input')
    cy.get('.name-input')
    cy.get('.obstacle-input')
    cy.get('.tutorial-input')
    cy.get('.submit-button')
  })

  it('should see 2 trick cards on load', () => {
    cy.get('.card').first()
      .contains('Regular')
      .contains('get1')
    cy.get('.card').first().contains('getexample.com')
  })
  
  it('should be able to add a new trick cards', () => {
    cy.get('.stance-input').select('Switch')
    cy.get('.name-input').type('post')
    cy.get('.obstacle-input').select('Pool')
    cy.get('.tutorial-input').type('examplepost.com')
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', { fixture: 'mock_post_data.json' })
    cy.get('.submit-button').click()
  })
})

