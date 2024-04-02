document.addEventListener('DOMContentLoaded', function () {
    const scrollSections = document.querySelectorAll('.scroll-section');
    const body = document.body; // Get the body element
    const navbar = document.getElementById('navbar'); 


    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY; // Get the current scroll position
        const sectionHeight = 34 * 16; // 50rem converted to pixels (1rem = 16px)

        // Calculate which section the user is in based on scroll position
        const currentSectionIndex = Math.floor(scrollPosition / sectionHeight);

        // Set background color based on the current section index
        switch (currentSectionIndex) {
            case 0:
                body.style.backgroundColor = 'white'; // First section (index 0) has skyblue background
                navbar.style.backgroundColor = 'white';
                body.style.color = 'black'; 
                break;
            case 1:
                body.style.backgroundColor = '#D9F6FF'; // Second section (index 1) has red background
                navbar.style.backgroundColor = '#D9F6FF';
                body.style.color = 'black'; 
                break;
            case 2:
                body.style.backgroundColor = '#E7ECEF'; // Third section (index 2) has yellow background
                navbar.style.backgroundColor = '#E7ECEF';
                body.style.color = 'black'; 
                break;
            case 3:
                body.style.backgroundColor = '#618291'; // Third section (index 2) has yellow background
                navbar.style.backgroundColor = '#618291';
                body.style.color = 'white'; 
               
                break;
            case 4:
                body.style.backgroundColor = '#122B37'; // Third section (index 2) has yellow background
                navbar.style.backgroundColor = '#122B37';
                body.style.color = 'white'; 
                break;
            default:
                body.style.backgroundColor = '#ffffff'; // Default background color for other sections
                break;
        }

        // Loop through each section and apply background color based on the current section
        scrollSections.forEach((section, index) => {
            if (index === currentSectionIndex) {
                section.style.backgroundColor = body.style.backgroundColor;
            } else {
                section.style.backgroundColor = '#ffffff'; // Default background color for sections not in view
            }
        });
    });
});