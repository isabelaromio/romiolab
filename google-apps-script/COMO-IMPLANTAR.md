# Como colocar o painel no ar com dados compartilhados (Google Apps Script)

Essa versão guarda os dados numa Planilha Google em vez do navegador —
assim você e sua mãe acessam o mesmo link e veem as mesmas vendas, o
mesmo estoque etc. Não precisa de login no Claude, cartão de crédito
nem servidor pago: só uma conta Google (a sua, pra criar).

Leva uns 5 minutos, é só copiar e colar. Depois de pronto, você nunca
mais precisa repetir esses passos — só reabre o link.

## Passo a passo

1. Abra **[sheets.google.com](https://sheets.google.com)** e crie uma planilha em
   branco. Dê o nome de **"Romio Lab 3D - Dados"** (canto superior esquerdo).

2. No menu, vá em **Extensões → Apps Script**. Vai abrir uma aba nova com o
   editor de código.

3. Vai existir um arquivo chamado `Código.gs` (ou `Code.gs`) já aberto,
   com um `function myFunction() {}` de exemplo. **Apague tudo** e cole
   o conteúdo do arquivo [`Code.gs`](./Code.gs) deste repositório.

4. No painel esquerdo do editor, clique no **+** ao lado de "Arquivos" →
   **HTML**. Dê exatamente o nome **`Painel`** (sem `.html`, o próprio
   Apps Script completa). Apague o conteúdo padrão e cole o conteúdo do
   arquivo [`Painel.html`](./Painel.html) deste repositório.

5. Salve tudo (ícone de disquete ou `Ctrl+S`).

6. Clique no botão azul **Implantar → Nova implantação** (canto superior
   direito).

7. Em "Selecionar tipo", clique na engrenagem e escolha **App da Web**.

8. Configure:
   - **Executar como:** Eu (seu e-mail)
   - **Quem pode acessar:** *Qualquer pessoa* — assim sua mãe abre o link
     sem precisar fazer login em nada. Se preferir um pouco mais de
     privacidade, dá pra escolher "Qualquer pessoa com uma Conta Google"
     (aí quem abrir precisa estar logado em alguma conta Google, mas não
     precisa ser a sua).

9. Clique em **Implantar**. O Google vai pedir para autorizar — é o
   próprio Google confirmando que o script pode ler/escrever na sua
   planilha. Clique em **Autorizar acesso**, escolha sua conta, e se
   aparecer um aviso de "app não verificado" clique em **Avançado → Acessar
   Romio Lab 3D (não seguro)** — é normal para scripts pessoais, o aviso
   existe só porque o Google não revisou seu script individualmente.

10. Copie o **URL do app da Web** que aparece (algo como
    `https://script.google.com/macros/s/AKfycb.../exec`). Esse é o link
    que você manda pra sua mãe. Abra você mesma primeiro pra conferir
    que carrega certinho.

## Se você editar o código depois

Salvar o arquivo no editor **não** atualiza o link já publicado
sozinho. Pra publicar uma mudança: **Implantar → Gerenciar implantações**
→ clique no lápis (editar) → em "Versão" escolha **Nova versão** →
**Implantar**. O link continua o mesmo, só o conteúdo atualiza.

## O que muda no dia a dia

- **Dados compartilhados, não em tempo real.** As duas escrevem na
  mesma planilha, mas se estiverem com a página aberta ao mesmo tempo,
  uma não vê a mudança da outra até atualizar. Tem um botão de
  atualizar (ícone de setas circulares) do lado dos status das
  máquinas, no topo — clique nele quando quiser puxar o que a outra
  pessoa acabou de registrar.
- **Toda a lógica de cálculo é a mesma** do arquivo HTML original —
  só o jeito de guardar os dados mudou (da memória do navegador para a
  planilha).
- Quer ver os dados brutos, fazer backup ou editar algo na mão? Abra a
  planilha "Romio Lab 3D - Dados" direto — vai ter uma aba
  `KeyValueStore` com uma linha por tipo de dado (config, estoque,
  vendas, produção), cada uma guardando um bloco de texto JSON.

## Os outros arquivos do painel continuam valendo

- `painel-romio-lab-3d.html` (na raiz do repositório) é a versão
  autocontida original — cada pessoa que abrir tem seus próprios dados
  salvos só naquele navegador. Boa pra testar sozinha ou levar num
  pendrive.
- O link do Artifact publicado no Claude é privado e não serve pra
  compartilhar com quem não tem acesso à sua conta.

Essa pasta (`google-apps-script/`) é a única forma de dado
**compartilhado entre pessoas diferentes** sem depender do Claude.
