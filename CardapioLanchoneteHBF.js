let cafe = 3.00;
let chantily = 1.50;
let suco = 6.20;
let sanduiche = 6.50;
let queijo = 2.00;
let salgado = 7.25;
let combo1 = 9.50;
let combo2 = 7.50;
let dinheiro = 0.05;
let credito = 0.03
let calcularValorDaCompra = 0;
let debito;
console.log("Cardapio da Lanchonete");
console.log("\n- Café - R$3,00\n- Chantily (Extra do Café) - R$1,50\n- Suco Natural - R$6,20\n- Sanduíche - R$6,50\n- Queijo (Extra do Sanduíche) - R$2,00\n- Salgado - R$7,25\n- 1 Suco e 1 Sanduíche - R$9,50\n- 1 Café e 1 Sanduíche - R$7,50");
if(cafe){
    calcularValorDaCompra = calcularValorDaCompra + cafe;
    cafe = true;
}
if(chantily){
    if(cafe=true){
        calcularValorDaCompra = calcularValorDaCompra+chantily;
    }
    else;{
console.log("Item extra não pode ser pedido sem o principal.");
    }
}
    if(suco){
        calcularValorDaCompra = calcularValorDaCompra + suco;
    }    
    if(sanduiche){
        calcularValorDaCompra = calcularValorDaCompra + sanduiche;
        sanduiche = true;
    }    
    if(chantily){
        if(sanduiche=true){
            calcularValorDaCompra = calcularValorDaCompra+queijo;
        }
        if(sanduiche=false){
    console.log("Item extra não pode ser pedido sem o principal.");
        }
    }    
    if(salgado){
        calcularValorDaCompra = calcularValorDaCompra + salgado;
    }    
    if(combo1){
        calcularValorDaCompra = calcularValorDaCompra + combo1;
    }    
    if(combo2){
        calcularValorDaCompra = calcularValorDaCompra + combo2;
    }  
/*if(dinheiro){
    calcularValorDaCompra = calcularValorDaCompra - calcularValorDaCompra*dinheiro;
}
if(debito){}
if(credito){
    calcularValorDaCompra + calcularValorDaCompra*credito;
}*/
console.log("\nO valor de sua compra foi - R$",calcularValorDaCompra);