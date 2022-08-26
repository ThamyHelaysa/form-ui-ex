# form-ui-ex
Um formulário semi-funcional com um simples Design System.

## Desafio:
1. Criar um formulário com três campos com máscara em 2 deles (celular e CPF) :heavy_check_mark:
1. Somente após o preenchimento dos três campos o botão de "Próximo" poderá se tornar clicável :heavy_check_mark:

*Read this in other language: [English](README.en.md), [Portuguese](/README.md).*

## Índice

- [Servidor](#servidor)
- [Rodando](#rodando)
- [Páginas](#páginas)
- [Estilo](#estilo)
  - [Design System](#design-system)
  - [Stylus](#stylus)
  - [Fonte](#fonte)
  - [SVGs](#svgs)
- [Implementação](#implementação)
  - [Index](#index)
  - [Componentes](#componentes)
  - [Handlers](#handlers)

## Servidor

Localizado na raiz do projeto o arquivo [`app.js`](/app.js) utiliza o `Node` com o `Express` para o mapeamento de rotas e respostas estáticas. 

## Rodando

Para rodar o projeto basta ter instalado na máquina o [`Node.js`](https://nodejs.org/en/). Depois de instalado você poderá rodar `node app.js` para ver a aplicação rodando. Uma mensagem de sucesso deve aparecer no terminal:

```
Server de pé em http://localhost:3000
```

## Páginas

O projeto utiliza somente uma página `html` localizada em [`public/index.html`](/public/index.html). Lá todos os componentes e scripts dão vida ao `form-ui`.

## Estilo

O projeto foi montado com base em componentes préviamente desenhados com um *Design System*.

#### Design System

Abaixo está o design do projeto e cada componente:

![Tipografia, Cores e Espaçamento](/public/media/DS-values.png)
***
![Elementos e seus estados](/public/media/DS-elements-state.png)
***
![Breakpoints](/public/media/DS-breaking-points.png)

#### Stylus

Como pré-processador foi utilizado o [Stylus](https://stylus-docs.netlify.app/). O arquivo final gerado ficou em `/public/css` e o de origem em `/public/styl`.

As pastas e arquivos localizados em `/public/styl` ficaram organizados da seguinte maneira:

1. A raiz contém o arquivo de origem - **[`main.styl`](/public/styl/main.styl)** responsável por chamar os outros estilos - o arquivo reset - **[`reset.styl`](/public/styl/reset.styl)** responsável por redefinir os elementos - e o arquivo de tema - **[`theme.styl`](/public/styl/theme.styl)** reponsável por estilizar os elementos padrões do projeto.
1. Na pasta **`/components`** estão localizados os arquivos de componentes que consistem em elementos com estilo próprio independente do contexto.
1. Já em **`/variables`** estão os *mixins* e *variaveis* utilizados em todo o projeto.

Para gerar o arquivo [`main.css`](./public/css/main.css) basta rodar `npm run css`.

#### Fonte

Para a tipagem de todo o projeto foi utilizada a fonte [Montserrat](https://fonts.google.com/specimen/Montserrat) fornecida pelo Google.
A fonte é inserida no arquivo [`index.html`](/public/index.html) usando tags `<link>` diretamente do site [fonts.google.com](https://fonts.google.com/specimen/Montserrat).

#### Svgs

A logo do projeto foi implementada usando ícone `svg` diretamente aonde precisa estar no `html`:

```
<div class="page-wrapper">
    <div class="content">
      <div class="heading-logo">
        <svg width="166" height="52" viewBox="0 0 166 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        ...  
        </svg>          
      </div>
    </div>
</div>
```


## Implementação

Para o site ficar dinâmico foi adotado a utilização de [Custom Elements](https://web.dev/custom-elements-v1/) puros sem a utilização de framework.

#### Index

Na página `index.html` o arquivo [`index.js`](./public/js/index.js) é carregado como módulo:

```
<script defer type="module" src="./js/index.js"></script>
```

#### Componentes

Para cada elemento dinâmico foi criado um arquivo em `public/js/components/`

* [ErrorMessages](/public/js/components/error-message.js)
* [FormUi](/public/js/components/form-ui.js)
* [InputEmail](/public/js/components/input-email.js)
* [InputNumber](/public/js/components/input-number.js)
* [InputTaxvat](/public/js/components/input-taxvat.js)

Eles estão na página montados da seguinte forma:

![Components](/public/media/Components.png)

#### Handlers

Os arquivos handlers disponíveis em `public/js/handler` são responsáveis por implementar as máscaras nos campos de *Celular* e *Cpf* utilizando *Regex*.

##### mask-taxvat

Responsável por retornar uma string que não permite caracteres especiais e nem letras no formato `123.456.789-01`:

```
const maskTaxvat = (val) => {
  val = val.replace(/\D/g,"");
  val = val.replace(/(\d{3})(\d)/,"$1.$2");
  val = val.replace(/(\d{3})(\d)/,"$1.$2");
  val = val.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return val;
}
```

##### mask-tel

Também responsável por retornar uma string que não permite caracteres especiais e nem letras mas no formato `(xx) xxxxx-xxxx`:

```
const maskPhone = (val)=>{
  val = val.replace(/\D/g,"");
  val = val.replace(/^(\d{2})(\d)/,"($1) $2");
  val = val.replace(/(\d)(\d{4})$/,"$1-$2");
  return val;
}
```