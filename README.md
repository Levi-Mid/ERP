# ERP RH & TI

## Sobre o projeto

Este projeto consiste no desenvolvimento de um sistema ERP Web voltado para a comunicação entre os setores de Recursos Humanos (RH) e Tecnologia da Informação (TI).

A ideia surgiu a partir da minha experiência profissional, onde observei que diversas informações precisam ser compartilhadas entre esses dois departamentos. Embora o cenário seja inspirado em situações reais, **todo o sistema está sendo desenvolvido para fins de estudo e todos os dados utilizados são fictícios**.

O principal objetivo deste projeto é colocar em prática os conhecimentos adquiridos durante o curso de Desenvolvimento de Sistemas, aplicando conceitos de desenvolvimento web, banco de dados, APIs, autenticação, controle de acesso e arquitetura de software.

---

# Objetivo

Criar um ambiente onde RH e TI possam consultar e gerenciar informações do mesmo colaborador, porém respeitando diferentes níveis de acesso.

Cada departamento visualizará apenas as informações necessárias para executar suas atividades.

---

# Perfis de Usuário

## RH

O setor de Recursos Humanos terá acesso completo aos dados do colaborador, incluindo informações cadastrais e administrativas.

Exemplos de informações:

* Nome
* Código do colaborador
* Cargo
* Endereço
* Telefone
* Pessoa Física ou Pessoa Jurídica
* Salário
* Histórico de alterações
* Informações cadastradas pelo TI

---

## TI

O setor de Tecnologia da Informação terá acesso somente às informações necessárias para provisionamento e administração dos recursos tecnológicos.

Exemplos de informações:

* Nome
* Código do colaborador
* Cargo
* E-mail corporativo
* Nome de usuário da plataforma
* Endereço IP do computador
* Endereço IP do telefone
* Número do aparelho celular
* Informações técnicas adicionadas pelo próprio TI

---

# Controle de Acesso

O sistema será baseado em permissões.

Cada usuário possuirá um perfil de acesso que determinará quais informações poderão ser:

* Visualizadas
* Editadas
* Criadas
* Excluídas

O RH terá acesso completo às informações do colaborador.

O TI visualizará apenas os dados necessários para suas atividades e poderá editar apenas os campos técnicos.

---

# Tecnologias (Planejamento)

Durante o desenvolvimento pretendo utilizar tecnologias como:

* React
* JavaScript
* HTML (JSX)
* CSS
* Node.js
* Express
* Banco de Dados SQL
* API REST
* Sistema de autenticação
* Controle de permissões por usuário
* Git
* GitHub

Esta lista poderá ser alterada conforme a evolução do projeto.

---

# Documentação do Desenvolvimento

Além do código-fonte, este repositório possuirá uma documentação detalhando todo o processo de desenvolvimento.

A intenção é registrar decisões tomadas durante o projeto, incluindo:

* Planejamento
* Modelagem do banco de dados
* Criação das APIs
* Estrutura das telas
* Problemas encontrados
* Soluções adotadas
* Melhorias futuras

O objetivo é que qualquer pessoa possa acompanhar a evolução do sistema desde sua concepção até sua versão final.

---

# ⚠ Aviso

Este projeto **não representa um sistema utilizado por nenhuma empresa**.

Embora tenha sido inspirado em experiências reais da minha rotina profissional, todas as informações, usuários, empresas, colaboradores e dados apresentados são totalmente fictícios e possuem finalidade exclusivamente educacional.

---

# 🚧 Status do Projeto

🟡 Em desenvolvimento

Novas funcionalidades serão adicionadas conforme o avanço dos estudos e do projeto.
