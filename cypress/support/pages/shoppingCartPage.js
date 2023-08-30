export class ShoppingCartPage {
    verificarproductos() {
        cy.get('p#productName[name="Black T-Shirt"]').should('exist');
        cy.get('p#productName[name="White Pants"]').should('exist');
    };

    verificarprecio() {
        cy.get('p#productName[name="White Pants"] ~ p#productPrice')
            .should('contain', '$20');
        
        cy.get('p#productName[name="Black T-Shirt"] ~ p#productPrice')
            .should('contain', '$15');
    };
}