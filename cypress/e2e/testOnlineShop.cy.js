/// <reference types="cypress"/>
import { HomePage } from "../support/pages/homePage";
import { LoginPage } from "../support/pages/loginPage";
import { ProductPage } from "../support/pages/productPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";


describe('Probar el Modulo To Do List De La Web de PushingIt', () => {
    const numero = Math.floor(Math.random() * 1000);
    let loginData
    let products
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const shoppingCartPage= new ShoppingCartPage();


before('Before', () => {
    cy.fixture('usuario.json').then(data => { loginData = data });
    cy.fixture('productos.json').then(prod => { products = prod });
    cy.visit('');
    });
    it('Debería comprobar nombre y precio en el carrito de compras', () => {
        cy.get('[id="user"]').type(`${loginData.username}${numero}`);
        cy.get('.password').type(loginData.password);
        cy.get('[value="Female"]').check({ force: true });
        cy.get('[name*="day"]').select("7");
        cy.get('[name^="month"]').select("August");
        cy.get('select[name=year]').select('1991');
        loginPage.clickloginButton();
        homePage.clickOnlineShopButton();
        
        productPage.agregarProducto1();
        cy.get('button[aria-label="Close"]').click();
        productPage.agregarProducto2();
        cy.get('button[aria-label="Close"]').click();
        cy.get('#goShoppingCart').click();

        shoppingCartPage.verificarproductos();
        shoppingCartPage.verificarprecio();
        
        cy.get('.css-15tuzzq').click();
        cy.get('.css-1g7ucpo #price b').should('have.text', '35');
    });
})