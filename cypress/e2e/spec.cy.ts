describe('e2e for login page', () => {
  it('user enter the blank username and password', () => {
    cy.visit('http://localhost:3000')
    cy.get('button:contains("Login")').click()
    cy.contains('Username is required').should('be.visible')
    cy.contains('Password is required').should('be.visible')
  })

  it('user just enter the username and blank password', ()=> {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('admin123')
    cy.get('input[name="username"]').should('have.value', 'admin123')
    cy.contains('Password is required').should('be.visible')
  })

  it("enter valid username and password", () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('admin123')
    cy.get('input[name="password"]').type('admin321')
    cy.get('button:contains("Login")').click()
    cy.url().should('include', '/connection')
  })

  it('enter invalid username and password', async () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="username"]').type('admin123')
    cy.get('input[name="password"]').type('fffffff')
    cy.get('button:contains("Login")').click()
    cy.contains('Username or password is incorrect').should('be.visible')
  })
})