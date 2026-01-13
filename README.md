# Projeto AWS EC2 – Site Estático Simples

Este projeto consiste em um site estático simples hospedado em uma instância
EC2 da AWS. O objetivo é demonstrar o processo completo de provisionamento
de infraestrutura, configuração de servidor web e deploy de uma aplicação
utilizando boas práticas básicas de Cloud Computing.

## 📌 Objetivo do projeto
Demonstrar conhecimentos práticos em:
- AWS EC2
- Linux
- Servidor web Nginx
- Deploy manual via GitHub
- Conceitos básicos de rede e segurança (Security Groups)

## 🛠 Tecnologias utilizadas
- AWS EC2
- Amazon Linux 2023
- Nginx
- HTML5
- CSS3
- Git e GitHub

## 🚀 Passo a passo do deploy

### 1. Criação da instância EC2
- AMI: Amazon Linux 2023
- Tipo: t2.micro (Free Tier)
- Porta 22 (SSH) liberada para o IP local
- Porta 80 (HTTP) liberada para 0.0.0.0/0

### 2. Conexão via SSH
```bash
ssh -i sua-chave.pem ec2-user@IP_PUBLICO

