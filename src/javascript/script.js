$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navITems = $('.nav-item');

    function fuja() {
        var botaoSim = document.getElementById('sim');
        
        // Obter as dimensões da janela visível
        var larguraJanela = window.innerWidth;
        var alturaJanela = window.innerHeight;
        
        // Obter o deslocamento de rolagem da página
        var scrollX = window.scrollX;
        var scrollY = window.scrollY;
    
        // Calcular as posições máximas, ajustando pela rolagem
        var maxX = larguraJanela - botaoSim.offsetWidth; // Limita a movimentação no eixo X
        var maxY = alturaJanela - botaoSim.offsetHeight; // Limita a movimentação no eixo Y
    
        // Gerar as novas posições aleatórias, considerando o scroll
        var aleatorioX = Math.floor(Math.random() * maxX) + scrollX;
        var aleatorioY = Math.floor(Math.random() * maxY) + scrollY;
    
        // Mover o botão para a nova posição
        botaoSim.style.left = aleatorioX + 'px';
        botaoSim.style.top = aleatorioY + 'px';
    }
    // Registra o evento para o botão "Sim"
    var botaoSim = document.getElementById('sim');
    botaoSim.addEventListener('mouseover', fuja);  // Quando o mouse passar sobre o botão 'Sim', ele se moverá

    // Evento para o botão "Não"
    var botaoNao = document.getElementById('nao');
    botaoNao.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o redirecionamento
        var imagem = document.querySelector('#fujao img'); // Seleciona a imagem
        imagem.src = 'src/images/pipipi.png'; // Altera o atributo src da imagem
    });

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;        

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 150;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition <= sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        });
        navITems.removeClass('active');
        $(navITems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%',
    })
});