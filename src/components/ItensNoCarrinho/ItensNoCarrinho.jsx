import React from "react";

import "./ItensNoCarrinho.css";

const ItensNoCarrinho = () => {
    return (
        <div className="containerItensNoCarrinho">
            
            <div className="itensCarrinhoCompra">
                <h2> Carrinho de Compras </h2>

                <div className="itemCarrinhoCompra">
                    <div className="dadosJogoCarrinhoCompra">
                        <p className="nameGameCarrinhoCompra"> Sponge Bob: Battle for BikiniBottom </p>
                        <p className="platGameCarrinhoCompra"> Plataforma: PC </p>
                        
                        <p className="priceGameCarrinhoCompra"> R$ 299,00 </p>
                    </div>
                    
                    <img loading="lazy" src="src/assets/imagens/imagemJogoBob.png" alt="imagem do jogo que esta no carrinho de compra"></img>
                </div>
                
                <div className="itemCarrinhoCompra">
                    <div className="dadosJogoCarrinhoCompra">
                        <p className="nameGameCarrinhoCompra"> Death Stranding </p>
                        <p className="platGameCarrinhoCompra"> Plataforma: PC </p>

                        <p className="priceGameCarrinhoCompra"> R$ 299,00 </p>
                    </div>
                    
                    <img loading="lazy" src="src/assets/imagens/imagemJogoDeath.png" alt="imagem do jogo que esta no carrinho de compra"></img>
                </div>

                <div className="totalCarrinhoCompra">
                    <p> R$ 598,00 </p>
                    <p> Total </p>
                </div>
            </div>
        </div>
    );
};

export default ItensNoCarrinho;
