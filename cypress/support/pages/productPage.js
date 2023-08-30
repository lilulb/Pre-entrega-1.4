export class ProductPage {
    agregarProducto1() {
        cy.contains('Black T-Shirt').siblings('#blacktshirt').click();    
    };
    agregarProducto2() {
        cy.contains('White Pants').siblings('#whitepants').click();
    };
}