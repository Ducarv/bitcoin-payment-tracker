#!/bin/bash

log_file="automation.log"
log() {
  echo "$(date +'%Y-%m-%d %H:%M:%S') - $1" >> "$log_file"
}

# Verifica se o comando foi passado como argumento
if [ -z "$1" ]; then
    echo "Please provide a command (start, stop, status)."
    exit 1
fi

command=$1
command=$(echo "$command" | tr '[:upper:]' '[:lower:]')

# Estrutura condicional para verificar qual comando foi digitado
case "$command" in
    start)
        log "Starting containers..."
        docker-compose up
        log "Containers started."
        ;;
    stop)
        log "Stopping containers..."
        docker-compose down
        log "Containers stopped."
        ;;
    status)
        log "Checking containers status..."
        docker-compose ps
        log "Status checked."
        ;;
    *)
        echo "Invalid command. Please use start, stop, or status."
        log "Invalid command: $command"
        ;;
esac
