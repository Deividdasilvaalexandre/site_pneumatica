document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todos os carrosséis da página
    const carouselContainers = document.querySelectorAll(".carousel-container");

    carouselContainers.forEach((container) => {

        const images = container.querySelectorAll(".carousel img");
        const prevBtn = container.querySelector(".prev-btn");
        const nextBtn = container.querySelector(".next-btn");

        // Encontra o texto que fica abaixo deste carrossel
        const textElement = container.parentElement.querySelector(".carousel-text");

        let currentIndex = 0;

        // Textos correspondentes às imagens
        const textos = Array.from(images).map((image) => {

            const nome = image.getAttribute("alt");

            if (nome.includes("Desligado")) {

                return getTextoDesligado(nome);

            } else if (nome.includes("Ligado")) {

                return getTextoLigado(nome);

            }

        });

        // Atualiza imagem e texto
        function updateCarousel(newIndex) {

            images[currentIndex].classList.remove("active");

            currentIndex = newIndex;

            images[currentIndex].classList.add("active");

            textElement.textContent = textos[currentIndex];
        }

        // Botão Avançar
        nextBtn.addEventListener("click", () => {

            const nextIndex =
                (currentIndex + 1) % images.length;

            updateCarousel(nextIndex);
        });

        // Botão Voltar
        prevBtn.addEventListener("click", () => {

            const prevIndex =
                (currentIndex - 1 + images.length) % images.length;

            updateCarousel(prevIndex);
        });

        // Garante que o primeiro texto apareça ao carregar a página
        textElement.textContent = textos[0];
    });


    // =========================================================
    // TEXTOS DAS IMAGENS
    // =========================================================

    function getTextoDesligado(nome) {

        const numero = nome.match(/\d+/)[0];

        const textos = {

            "1":
                "A válvula de comando encontra-se em repouso mantida por mola. A via de alimentação de ar comprimido fica bloqueada na entrada da válvula e a câmara do cilindro está ligada ao escape. A haste do cilindro de simples ação permanece totalmente recuada.",

            "2":
                "A válvula de sinal pneumático não está acionada, portanto não há pressão na linha de pilotagem. A válvula de potência permanece bloqueada e a haste do cilindro de simples ação fica recuada devido à mola interna.",

            "3":
                "O circuito está sem acionamento de entrada. Não há pressão mantida no cilindro e a haste do atuador encontra-se totalmente recuada.",

            "4":
                "Em estado de repouso, não há sinal de pressão na linha principal. A câmara do cilindro está despressurizada através da porta de escape rápido, mantendo a haste do cilindro recuada.",

            "5":
                "O circuito encontra-se sem sinal de comando ativo. O ar comprimido fica bloqueado nas válvulas manuais e no elemento lógico E. A haste do cilindro de dupla ação permanece totalmente recuada.",

            "6":
                "Com a alavanca em posição de descanso, a válvula encontra-se na posição inicial e a haste do cilindro permanece recuada.",

            "7":
                "Em estado de repouso, a alavanca está na posição inicial e a alimentação não pressuriza a câmara de avanço, mantendo a haste do cilindro totalmente recuada.",

            "8":
                "Nenhuma válvula de sinal está sendo pressionada. A válvula de potência permanece em sua posição de repouso, mantendo a haste do cilindro recuada.",

            "9":
                "Ambas as válvulas de comando estão em repouso. Não há sinal entrando nas portas laterais da válvula alternadora OU, mantendo o cilindro despressurizado e a haste recuada.",

            "10":
                "O circuito aguarda o pulso inicial de partida. A válvula direcional principal mantém o cilindro na posição inicial, deixando a haste recuada.",

            "11":
                "O circuito encontra-se despressurizado nas linhas de comando. A válvula principal de potência encontra-se na posição de repouso, mantendo a haste do cilindro de dupla ação recuada.",

            "12":
                "Sem sinal nas válvulas de controle, o sistema permanece estático. A câmara de avanço está em exaustão e a haste do cilindro fica recuada.",

            "13":
                "O circuito está em estado de espera. A linha de tempo ou contrapressão ainda não atingiu o nível de disparo e a haste do cilindro permanece totalmente recuada."

        };

        return textos[numero];
    }


    function getTextoLigado(nome) {

        const numero = nome.match(/\d+/)[0];

        const textos = {

            "1":
                "O operador pressiona o botão da válvula 3/2 vias, comutando a posição interna das vias. O ar comprimido flui para a câmara traseira do cilindro, vencendo a resistência da mola interna e provocando o avanço completo da haste.",

            "2":
                "Ao acionar o botão de sinal, o ar comprimido atravessa a válvula piloto e chega ao atuador pneumático da válvula de potência. Esta comuta, liberando o fluxo para o cilindro, resultando no avanço da haste.",

            "3":
                "Ao acionar a válvula de comando, o ar passa através da válvula reguladora de fluxo ajustada. A vazão controlada enche a câmara do cilindro gradualmente, resultando no avanço suave e regulado da haste.",

            "4":
                "O acionamento da válvula manual envia pressão de ar, fechando o escape rápido e direcionando o fluxo para a câmara do cilindro, o que gera o avanço da haste.",

            "5":
                "Ao acionar os dois botões de comando ao mesmo tempo, o ar comprimido atravessa a válvula lógica E e envia um sinal piloto para a válvula direcional principal. Esta comuta e direciona a pressão para a câmara traseira do atuador, promovendo o avanço completo da haste.",

            "6":
                "Ao comutar manualmente a alavanca da válvula, as vias internas alteram a passagem de ar, injetando pressão diretamente na câmara traseira. Esse fluxo empurra o êmbolo e causa o avanço da haste do cilindro.",

            "7":
                "O operador aciona e trava a alavanca na posição de trabalho. A válvula comuta, direcionando o ar pressurizado para a câmara traseira do cilindro de dupla ação, provocando o avanço da haste.",

            "8":
                "Ao pressionar o botão de comando, a via do piloto pneumático é pressurizada. O sinal pneumático comuta a válvula principal de potência, que direciona o fluxo de ar para a câmara traseira do cilindro, promovendo o avanço da haste.",

            "9":
                "Ao acionar qualquer um dos dois botões de comando, a pressão entra em um dos lados da válvula alternadora, permitindo que o sinal siga para a válvula de potência. O resultado é o avanço completo da haste do cilindro.",

            "10":
                "O botão de partida é acionado, enviando sinal de piloto para a válvula principal. O cilindro avança até o final do curso, onde a haste toca fisicamente o rolete de fim de curso, provocando a comutação da fase seguinte.",

            "11":
                "Ao acionar o elemento de comando com retenção, o ar flui pela linha do piloto, comutando a válvula direcional principal. A câmara traseira é pressurizada e a haste avança totalmente.",

            "12":
                "Ao acionar o botão de partida, o ar passa pela válvula reguladora de fluxo ajustada, restringindo a passagem de ar e promovendo um avanço suave e controlado da haste do cilindro.",

            "13":
                "O comando manual inicia o fluxo de ar para o circuito de controle. Após o processamento da pressão e do tempo necessário, o sinal do piloto comuta a válvula, promovendo o avanço completo da haste do cilindro."

        };

        return textos[numero];
    }

});