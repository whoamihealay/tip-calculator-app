describe("tip", () => {
  it("user can calculate the tip total and total amount per person", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("spinbutton", {
      name: /your bill amount/i,
    }).type(100);
    cy.findByRole("button", {
      name: /10%/i,
    }).click();
    cy.findByRole("spinbutton", {
      name: /custom tip percent/i,
    }).type("{backspace}{backspace}25");
    cy.findByRole("spinbutton", {
      name: /how many people\?/i,
    }).type("{backspace}");
    cy.findByText(/can't be zero/i).should("be.visible");
    cy.findByRole("spinbutton", {
      name: /how many people\?/i,
    }).type("2");
    cy.findByRole("heading", { name: /tip amount per person/i }).should(
      "have.text",
      "$12.5"
    );
    cy.findByRole("heading", { name: /total amount per person/i }).should(
      "have.text",
      "$62.5"
    );
    cy.findByRole("button", { name: /reset/i }).click();
  });
});
