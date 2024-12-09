# Página de Login com Checkbox Personalizado

Este projeto oferece uma página de login simples, limpa e moderna, com um checkbox personalizado para a opção "Lembre-me", além de um recurso para alternar a visibilidade da senha.

## Funcionalidades

- **Design Responsivo**: A página se adapta a diferentes tamanhos de tela e dispositivos.
- **Checkbox Personalizado**: O checkbox "Lembre-me" é estilizado com um design personalizado, exibindo um marcador quando selecionado.
- **Alternar Senha**: O campo de senha permite aos usuários alternar entre visibilidade (mostrar/ocultar senha).
- **Fundo Bonito**: Uma imagem de fundo com posição fixa que se ajusta conforme o tamanho da tela.
- **Validação de Formulário**: O formulário de login inclui campos obrigatórios para email e senha.

## Estrutura

### HTML

O arquivo HTML contém a estrutura da página de login, incluindo:
- Um contêiner para a caixa de login (`login-container`).
- Um formulário com campos de entrada para email e senha.
- Um checkbox "Lembre-me" e um link "Esqueceu sua senha?".
- Um botão de login para enviar o formulário.

### CSS

Os estilos CSS são fornecidos para melhorar o design da página de login:
- Uma imagem de fundo (`bg.png`) para um design visualmente atraente.
- A caixa de login com fundo transparente, cantos arredondados e efeito de desfoque.
- Estilos personalizados para os campos de entrada de email e senha.
- Efeitos de hover no botão de login e no link "Esqueceu sua senha?".
- Design personalizado do checkbox com um marcador quando marcado.
- Flexbox para alinhamento de layout e responsividade.

### JavaScript

A funcionalidade em JavaScript (linkada como `script.js`) inclui:
- Alternância de visibilidade da senha (mostrar/ocultar).
- Fechar a caixa de login ao clicar no botão de fechar.

## Instalação

1. Clone o repositório:

``` git clone https://github.com/seunome/login-page.git ```
2. Navegue até a pasta do projeto:

``` cd login-page ```

3. Abra o arquivo ```index.html``` em um navegador:

``` open index.html ```

Ou abra diretamente clicando duas vezes no arquivo.

## Personalização

- Imagem de Fundo: Substitua a imagem de fundo ```(bg.png)``` na pasta assets/images por sua própria imagem.
- Estilos: Modifique o arquivo ```style.css``` para alterar cores, fontes ou adicionar novos estilos.
- Ícones: Os ícones de email e senha podem ser alterados atualizando o emoji no HTML ou substituindo por seu próprio ícone personalizado.

## Licença
Este projeto é open source e disponível sob a licença MIT.


