# Busca links em arquivo markdown v.1.0.6

**Esta biblioteca se destina à procurar links em arquivos markdown, para uso em aplicações web.**
Na versão atual recebe uma string (em formato Markdown) e extrai todos os links encontrados. 

## Como instalar:

```shell

$  npm install getlinks-la

```

## Como utilizar:

```node

> const getLinksFromMd = require("getlinks-la");
> console.log(getLinksFromMd("`#Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et [dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. [foo](http://foo.com) Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;"))
> // returns [ { href: 'https://en.wiktionary.org/wiki/labore',
    text: 'labore' },
  { href: 'https://en.wiktionary.org/wiki/dolore',
    text: 'dolore' },
  { href: 'http://foo.com', text: 'foo' } ]

```

## Roadmap oficial do projeto

#### Versão 1.0.6 (released)
- Recebe uma string em formato Markdown
- Busca se existem links
- Retorna os links e textos encontrados dentro de um array de objetos
