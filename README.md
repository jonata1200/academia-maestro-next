# Website da Academia de Música Maestro

Este é o repositório do site institucional da Academia de Música Maestro, uma plataforma digital moderna e otimizada para atrair novos alunos e apresentar os serviços da escola.

Originalmente desenvolvido com Vite e React, o projeto foi estrategicamente migrado para **Next.js (App Router)** para alavancar a Renderização no Lado do Servidor (SSR), garantindo máxima performance e uma otimização de SEO (Search Engine Optimization) de ponta, que é fundamental para um negócio local.

## 🚀 Acesso ao Site

**[Link para o site em produção]** (adicione o link aqui quando fizer o deploy)

## 📸 Screenshot

![Homepage da Academia Maestro](caminho/para/sua/imagem-screenshot.png)
*(Recomendação: tire um print da homepage e adicione à pasta `public` do seu projeto para exibir aqui)*

---

## ✨ Funcionalidades Principais

*   **Páginas Institucionais:** Home, Sobre Nós, Instrumentos e Contato.
*   **Design Responsivo:** Interface totalmente adaptável para desktops, tablets e celulares.
*   **Carrossel Interativo:** Na página de instrumentos, um carrossel dinâmico construído com a biblioteca Swiper.js.
*   **Mapas Integrados:** Mapas do Google Maps incorporados para fácil localização das unidades.
*   **Otimizado para SEO:**
    *   Uso de metadados dinâmicos (`title`, `description`) para cada página.
    *   Estrutura semântica de HTML5.
    *   Renderização no Lado do Servidor (SSR) para indexação rápida e eficiente pelos motores de busca.
*   **Integração com Google Analytics:** Monitoramento de tráfego implementado de forma otimizada com o componente `<Script>` do Next.js.
*   **Containerizado com Docker:** Pronto para um deploy consistente e escalável em qualquer ambiente.

---

## 🛠️ Tecnologias Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (com App Router)
*   **Biblioteca UI:** [React](https://react.dev/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilização:** CSS Padrão com uma arquitetura modular.
*   **Componentes Interativos:** [Swiper.js](https://swiperjs.com/) para carrosséis.
*   **Containerização:** [Docker](https://www.docker.com/)
*   **Linting:** ESLint
*   **Deploy:** Otimizado para plataformas como Vercel ou qualquer serviço que suporte containers Docker.

---

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos
*   Node.js (versão 20.x ou superior)
*   npm ou yarn

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/academia-maestro-next.git
    cd academia-maestro-next
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    *   Crie um arquivo chamado `.env.local` na raiz do projeto.
    *   Adicione sua chave do Google Analytics a ele:
        ```
        NEXT_PUBLIC_GA_ID=G-SUA-CHAVE-AQUI
        ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Acesse o projeto:**
    Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

---

## 🐳 Como Executar com Docker

O projeto está totalmente containerizado para um ambiente de produção.

1.  **Construa a imagem Docker:**
    Certifique-se de que o Docker Desktop esteja em execução. Na raiz do projeto, execute:
    ```bash
    docker build -t academia-maestro .
    ```

2.  **Execute o container:**
    Após a build ser concluída, inicie o container com o comando:
    ```bash
    docker run -p 3000:3000 academia-maestro
    ```

3.  **Acesse o projeto:**
    O site estará disponível em [http://localhost:3000](http://localhost:3000).

---

## 📚 Principais Aprendizados e Destaques

*   **Migração de Vite (CSR) para Next.js (SSR):** Compreensão prática dos benefícios da renderização no lado do servidor para SEO e performance (Core Web Vitals).
*   **Next.js App Router:** Utilização da nova estrutura de roteamento baseada em diretórios e layouts.
*   **Server Components vs. Client Components:** Domínio do uso da diretiva `"use client"` para componentes que necessitam de interatividade no navegador.
*   **Otimização com Componentes Next.js:** Uso dos componentes `<Link>`, `<Image>` (a ser implementado) e `<Script>` para melhorar a performance e seguir as melhores práticas.
*   **Docker Multi-stage Builds:** Criação de um `Dockerfile` otimizado que gera uma imagem de produção leve e segura, reduzindo o tamanho final de >1GB para <300MB.