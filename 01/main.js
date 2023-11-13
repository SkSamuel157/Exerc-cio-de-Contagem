     //Inicializa a contagem
     let contador = 0;
     
     // Função para atualizar o contador
     function atualizarContador() {
         contador++;
         document.getElementById('contador').textContent = contador;
     }
     // Atuliza o contador a cada segundo
     setInterval(atualizarContador, 1000);
