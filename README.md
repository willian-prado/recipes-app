## Projeto Recipes App

> Nono e último projeto do módulo de Front-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/)

**Contexto**

Em nosso último e mais desafiador projeto em grupo no módulo de Front-end, colocamos em prática todos os nossos conhecimentos sobre React, especialmente Context API e React Hooks. Além disso, treinamos a organização de um projeto em equipe com a metodologia Kanban. Inicialmente, desenvolvemos em grupo toda a organização geral do projeto, como estruturação de pastas e rotas. Posteriormente, os requisitos foram distribuídos entre os membros do grupo e desenvolvidos em paralelo. O desenvolvimento da aplicação foi acompanhado no aplicativo Trello.

**Objetivo do projeto**

Desenvolver um sistema que permite visualizar , buscar , filtrar , favoritar , compartilhar e acompanhar o processo de preparação de receitas e drinks . A base de dados serão 2 APIs distintas, uma para comidas  [TheMealDB](https://www.themealdb.com/) e outra para bebidas [TheCocktailDB](https://www.thecocktaildb.com/api.php).

**Principais habilidades desenvolvidas nesse trabalho**

  - Utilizar Context API para gerenciar o estado global
  - Utilizar o React Hook useState
  - Utilizar o React Hook useContext
  - Utilizar o React Hook useEffect
  - Criar Hooks customizados

**Tecnologias utilizadas**

- <a href="https://www.w3.org/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" title="HTML5" align="center" height="35"/> - HTML</a> 
- <a href="https://www.w3schools.com/css/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" title="CCS3" align="center" height="35"/> - CSS</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" align="center" height="30"/> - JavaScript</a>
- <a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" align="center" height="35"/> - React</a>
- <a href="https://reactrouter.com/docs/en/v6/getting-started/overview"><img src="https://reacttraining.com/images/blog/reach-react-router-future.png" title="React Router" align="center" height="30"/> - React Router</a>
- <a href="https://reactjs.org/"><img src="https://testing-library.com/img/octopus-128x128.png" title="React Testing Library" alt="react testing library" height="30" align="center"/> - React Testing Library</a>
- <a href="https://jestjs.io"><img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" title="Jest" align="center" height="30"/> - Jest</a>
- <a href="https://trello.com/"><img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png" title="Trello" height="30" align="center"/>  - Trello</a>

*Projeto desenvolvido em grupo com [Gustavo Mourão](https://github.com/Gustavo-Mourao), [Leonardo Ferreira](https://github.com/leo606), [Luiz Henrique](https://github.com/lzzhenrique) e [Milton Castro](https://github.com/castromilton07)*

---

### Rotas disponíveis na aplicação:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/comidas`;
* Tela principal de receitas de bebidas: `/bebidas`;
* Tela de detalhes de uma receita de comida: `/comidas/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/bebidas/{id-da-receita}`;
* Tela de receita em processo de comida: `/comidas/{id-da-receita}/in-progress`;
* Tela de receita em processo de bebida: `/bebidas/{id-da-receita}/in-progress`;
* Tela de explorar: `/explorar`;
* Tela de explorar comidas: `/explorar/comidas`;
* Tela de explorar bebidas: `/explorar/bebidas`;
* Tela de explorar comidas por ingrediente: `/explorar/comidas/ingredientes`;
* Tela de explorar bebidas por ingrediente: `/explorar/bebidas/ingredientes`;
* Tela de explorar comidas por local de origem: `/explorar/comidas/area`;
* Tela de perfil: `/perfil`;
* Tela de receitas feitas: `/receitas-feitas`;
* Tela de receitas favoritas: `/receitas-favoritas`.

### Lista de requisitos propostos pela Trybe:

#### Obrigatórios

#### `Testes unitários`

#### 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

#### `Tela de login`

#### 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login
#### 3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email
#### 4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha
#### 5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos
#### 6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken
#### 7 - Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão
#### 8 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

#### `Header`

#### 9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo
#### 10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo
#### 11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
#### 12 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la
#### 13 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo
#### 14 - Posicione a barra logo abaixo do header e implemente 3 radio buttons: Ingrediente, Nome e Primeira letra
#### 15 - Busque na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas
#### 16 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL
#### 17 - Mostre as receitas em cards caso mais de uma receita seja encontrada
#### 18 - Exiba um `alert` caso nenhuma receita seja encontrada

#### `Footer`

#### 19 - Implemente os elementos do menu inferior respeitando os atributos descritos no protótipo
#### 20 - Posicione o menu inferior de forma fixa e apresente 3 ícones: um para comidas, um para bebidas e outro para exploração
#### 21 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo
#### 22 - Redirecione a pessoa usuária para uma lista de cocktails ao clicar no ícone de bebidas
#### 23 - Redirecione a pessoa usuária para a tela de explorar ao clicar no ícone de exploração
#### 24 - Redirecione a pessoa usuárua para uma lista de comidas ao clicar no ícone de comidas

#### `Tela principal de receitas`

#### 25 - Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo
#### 26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card
#### 27 - Implemente os botões de categoria para serem utilizados como filtro
#### 28 - Implemente o filtro das receitas através da API ao clicar no filtro de categoria
#### 29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro
#### 30 - Implemente o filtro de categoria para que apenas um seja selecionado por vez
#### 31 - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias
#### 32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

#### `Tela de detalhes de uma receita`

#### 33 - Implemente os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo
#### 34 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL
#### 35 - Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações
#### 36 - Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa
#### 37 - Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`
#### 38 - Desenvolva um botão de nome "Iniciar Receita" que deve ficar fixo na parte de baixo da tela o tempo todo
#### 39 - Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Iniciar Receita" deve sumir
#### 40 - Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continuar Receita"
#### 41 - Redirecione a pessoa usuário caso o botão "Iniciar Receita" seja clicado, a rota deve mudar para a tela de receita em processo
#### 42 - Implemente um botão de compartilhar e um de favoritar a receita
#### 43 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer
#### 44 - Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário
#### 45 - Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa
#### 46 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

#### `Tela de receita em progresso`

#### 47 - Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidade e suas instruções
#### 48 - Desenvolva um checkbox para cada item da lista de ingredientes
#### 49 - Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista
#### 50 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita
#### 51 - Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui
#### 52 - Implemente a solução de maneira que o botão de finalizar receita só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)
#### 53 - Redirecione a pessoa usuária após clicar no botão "Finalizar receita", para a página de receitas feitas, cuja rota deve ser `/receitas-feitas`

#### `Tela de receitas feitas`

#### 54 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo
#### 55 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a area, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar
#### 56 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
#### 57 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
#### 58 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
#### 59 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

#### `Tela de receitas favoritas`

#### 60 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo
#### 61 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a area, um botão de compartilhar e um de "desfavoritar"
#### 62 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
#### 63 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
#### 64 - Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela
#### 65 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
#### 66 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

#### `Tela de explorar`

#### 67 - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo
#### 68 - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas
#### 69 - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas

#### `Tela de explorar bebidas ou comidas`

#### 70 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo
#### 71 - Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por local de origem e um para pegar uma receita aleatória
#### 72 - Redirecione a pessoa usuária ao clicar em "Por Ingredientes", para a tela de explorar por ingredientes
#### 73 - Redirecione a pessoa usuária ao clicar em "Por Local de Origem", a rota deve mudar para tela de explorar por local de origem
#### 74 - Redirecione a pessoa usuária ao clicar em "Me Surpreenda!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API

#### `Tela de explorar ingredientes`

#### 75 - Implemente os elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo
#### 76 - Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto
#### 77 -  Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido

#### `Tela de explorar por local de origem/area`

#### 78 - Implemente os elementos da tela de explorar por local de origem respeitando os atributos descritos no protótipo
#### 79 - Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown
#### 80 - Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro
#### 81 - Implemente a rota que deve ser apenas `/explorar/comidas/area`

#### `Tela de perfil`

#### 82 - Implemente os elementos da a tela de perfil respeitando os atributos descritos no protótipo
#### 83 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
#### 84 - Implemente 3 botões: um de nome "Receitas Feitas", um de nome "Receitas Favoritas" e um de nome "Sair"
#### 85 - Redirecione a pessoa usuária que, ao clicar no botão de "Receitas Favoritas", a rota deve mudar para a tela de receitas favoritas
#### 86 - Redirecione a pessoa usuária que, ao clicar no botão de "Receitas Feitas", a rota deve mudar para a tela de receitas feitas
#### 87 - Redirecione a pessoa usuária que, ao clicar no botão de "Sair", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login

---

[Ir para a lista de projetos](https://github.com/willian-prado/trybe-records)
