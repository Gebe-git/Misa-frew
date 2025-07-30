#!/bin/bash

# Cores
NOCOLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
PURPLE='\033[1;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'

# Limpa a tela
clear

# Loop principal
while :
do
  echo "${GREEN}"
  echo "╔═══════════════════════════════════════════════╗"
  echo "║                                               ║"
  echo "║       💜 BEM-VINDO A MELHOR BOT MISAX-BOT 💜  ║"
  echo "║                                               ║"
  echo "╚═══════════════════════════════════════════════╝"
  
  echo "${YELLOW}             Desenvolvido por: GeBe Mods${NOCOLOR}"
  
  echo "${PURPLE}"
  echo "╔═══════════════════════╗"
  echo "║ 💜 Insta: @gebezkz    ║"
  echo "║ 💜 YouTube: @gebemodz ║"
  echo "╚═══════════════════════╝"

  echo "${WHITE}⏳ Iniciando o bot...${NOCOLOR}"
  echo ""

  node misa.js

  echo ""
  echo "${CYAN}🔄 Reiniciando misax-bot em 1 segundo...${NOCOLOR}"
  sleep 1
  clear
done