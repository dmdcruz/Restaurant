function createAbout() {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Us';

    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'No Restaurante, acreditamos que a gastronomia é uma forma de arte que desperta todos os sentidos. Desde a nossa inauguração, temos nos dedicado a proporcionar uma experiência culinária única, onde a inovação é o ingrediente principal. Nosso cardápio foi cuidadosamente elaborado para celebrar a riqueza dos sabores e a qualidade dos ingredientes frescos. Cada prato é uma criação única, pensada para oferecer uma explosão de sabores e texturas que surpreendem e encantam. Da entrada à sobremesa, cada detalhe é uma homenagem à tradição culinária italiana, com um toque contemporâneo que reflete nossa paixão pela inovação. O ambiente acolhedor e sofisticado do Restaurante foi projetado para que cada refeição seja uma experiência inesquecível. Nossa equipe é composta por profissionais altamente qualificados e dedicados, prontos para atender com excelência e tornar sua visita memorável. Convidamos você a descobrir a magia da nossa cozinha e a saborear pratos que vão desde a Bruschetta de Tomate e Manjericão, passando pelo sofisticado Risotto de Cogumelos Selvagens, até a tradicional sobremesa Tiramisu Clássico. Cada escolha é uma viagem sensorial, pensada para satisfazer os paladares mais exigentes. No Restaurante, não oferecemos apenas refeições, mas momentos especiais que você vai querer repetir. Venha nos visitar e permita-se explorar o mundo de sabores que criamos para você.'

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutParagraph);

    return aboutSection;

}

function loadAbout() {
    const content = document.getElementById('content');
    content.textContent = "";
    content.appendChild(createAbout());
}

export default loadAbout