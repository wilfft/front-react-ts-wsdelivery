## Front end do aplicativo WS-DELIVERY

#### Desenvolvido em React e Typescript

Bibliotecas utilizadas:

- axios para requisiçoes na api, 
- leaflet para mapas, 
- tostify para notificaçoes, 
- react select para carregamento dinamico de nome das ruas  

### Algumas alterações precisam ser feitas para estar 100% funcionado, como aceitar um endereço escrito pelo usuário, caso a api do leaflet falhe.
### Incluir quantidade aos produtos adicionados no pedido

#### Para startar a aplicação: 

> - ##### npm install
>
> - ##### npm start



### PÁGINAS 

#### INICIO: botão para fazer pedido

#### PRODUTOS: os produtos podem ser selecionados e deselecionados, o valor é calculado automaticamente, no final da página é mostrado um mapa e um campo para inserir o endereço de entrega.

#### REALIZAR PEDIDO:  ao clicar, o pedido é enviado para a api do backend e acionada ao banco, podendo ser acessada pelo aplicativo mobile



##### Você pode encontrar essa aplicaçao rodando diretamente no link  

##### https://ws-delivery-web.netlify.app/ordens  

##### obs, a pagina de produtos pode demorar alguns segundos para carregar devido ao inicio lento do backend que está hospedado na Heroku.

----------------------



##### Repositório do Back end, feito em Java e Spring boot https://github.com/wilfft/api-spring-wsdelivery

##### Repositório do mobile, feito em React Native https://github.com/wilfft/front-mobile-reactnative-ts-wsdelivery


SCREEN SHOTS
![image](https://user-images.githubusercontent.com/68745408/110032079-817ae700-7d16-11eb-9ecb-3c035cc60896.png)

------------

![image](https://user-images.githubusercontent.com/68745408/110032151-9192c680-7d16-11eb-829e-813f0e857891.png)

------------

![image](https://user-images.githubusercontent.com/68745408/110032404-dc144300-7d16-11eb-9e69-8955e90db259.png)

