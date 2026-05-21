let currentIndex = 0;
const maxIndex = 3; // Set the maximum index based on the number of images/texts you have

function changeContent(direction) {
    currentIndex += direction;

    // Wrap around to the last element if currentIndex goes beyond maxIndex
    if (currentIndex > maxIndex) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    // Update image source, heading, and text based on currentIndex
    const ElementoImagem = document.getElementById('mainImage');
    const ElementoTitulo = document.getElementById('mainHeading');
    const ElementoTexto = document.getElementById('mainText');
    const ElementoLink = document.getElementById('mainLink');
    const ElementoTituloM = document.getElementById('titulominimizado');
    const ElementoTextoM = document.getElementById('paragrafominimizado');
    const ElementoLinkMM = document.getElementById('linkminimizado');
   
    // Example: Update image and text based on currentIndex
    if (currentIndex === 0) {

        ElementoImagem.src = 'images/1aimg.jpg';
        ElementoTitulo.innerText = 'Join the Movement to Reunite 1 Million Refugee Families';
        ElementoTexto.innerText = 'Together, we can reunite more mothers with their children, like Samira and Omer, and support other refugees seeking safety.';
        ElementoLink.innerText = 'MAKE AN END-OF-YEAR GIFT';
        ElementoTituloM.innerText = 'Join the Movement to Reunite 1 Million Refugee Families';
        ElementoTextoM.innerText = 'Together, we can reunite more mothers with their children, like Samira and Omer, and support other refugees seeking safety.';
        ElementoLinkMM.innerText = 'MAKE AN END-OF-YEAR GIFT';

    } else if (currentIndex === 1) {

        ElementoImagem.src = 'images/2aimg.jpg';
        ElementoTitulo.innerText = '5 Key Takeaways from the Global Refugee Forum';
        ElementoTexto.innerText = 'Read about RefugePoints many contributions to this weeks Global Refugee Forum, including four pledges in the areas most relevant to our programmatic work.';
        ElementoLink.innerText = 'Read More';
        ElementoTituloM.innerText = '5 Key Takeaways from the Global Refugee Forum';
        ElementoTextoM.innerText = 'Read about RefugePoints many contributions to this weeks Global Refugee Forum, including four pledges in the areas most relevant to our programmatic work.';
        ElementoLinkMM.innerText = 'Read More';

    } else if(currentIndex===2){
        ElementoImagem.src = 'images/3aimg.jpg';
        ElementoTitulo.innerText = 'Two New Milestones for RefugePoints Labor Mobility Program';
        ElementoTexto.innerText = 'Last month, a cohort of eleven refugees departed for Canada through the Economic Mobility Pathways Pilot (EMPP) to start new jobs as Continuing Care Assistants, following months of COVID-related delays.';
        ElementoLink.innerText = 'Read More';
        ElementoTituloM.innerText = 'Two New Milestones for RefugePoints Labor Mobility Program';
        ElementoTextoM.innerText = 'Last month, a cohort of eleven refugees departed for Canada through the Economic Mobility Pathways Pilot (EMPP) to start new jobs as Continuing Care Assistants, following months of COVID-related delays.';
        ElementoLinkMM.innerText = 'Read More';

    } else if (currentIndex===3){

        ElementoImagem.src = 'images/4aimg.jpg';
        ElementoTitulo.innerText = 'Creating Lasting Solutions for Refugees';
        ElementoTexto.innerText = 'RefugePoint was founded in 2005 to identify refugees who fall through the cracks of humanitarian aid. We focus on long-term solutions, including self-reliance, and resettlement and complementary pathways, that will enable refugees to lead healthy, dignified lives.';
        ElementoLink.innerText = 'Read More';
        ElementoTituloM.innerText = 'Creating Lasting Solutions for Refugees';
        ElementoTextoM.innerText = 'RefugePoint was founded in 2005 to identify refugees who fall through the cracks of humanitarian aid. We focus on long-term solutions, including self-reliance, and resettlement and complementary pathways, that will enable refugees to lead healthy, dignified lives.';
        ElementoLinkMM.innerText = 'Read More';
    }
}


//Sidebar------
function ShowSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function CloseSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
//Sidebar------

//Botão para o topo-----
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });

    scrollToTopBtn.addEventListener("click", function() {
      scrollToTop();
    });
  });
  
  function scrollToTop() {
    document.documentElement.scrollTop = 0; 
  }
//Botão para o topo-----

