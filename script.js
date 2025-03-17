document.addEventListener('DOMContentLoaded', () => {
    // Handle multiple carousels
    document.querySelectorAll('.carousel').forEach(carousel => {
        let currentIndex = 0;
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = imagesContainer.querySelectorAll('.carousel-item');
        const totalImages = images.length;

        if (totalImages === 0) return;

        const updateCarousel = () => {
            const offset = -currentIndex * 100;
            imagesContainer.style.transform = `translateX(${offset}%)`;

            // Update dots' active state
            const dots = carousel.querySelectorAll('.carousel-indicators .dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
                updateCarousel();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            });
        }

        // Dot navigation functionality
        const dotsContainer = carousel.querySelector('.carousel-indicators');
        if (dotsContainer) {
            dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
            });
        }

        updateCarousel();
    });

    // Scoped functionality for services carousel
    document.querySelectorAll('.service-carousel').forEach(serviceCarousel => {
        let currentIndex = 0;
        const imagesContainer = serviceCarousel.querySelector('.service-carousel-images');
        const images = imagesContainer.querySelectorAll('.service-carousel-item');
        const totalImages = images.length;

        if (totalImages === 0) return;

        const updateServiceCarousel = () => {
            const offset = -currentIndex * 100;
            imagesContainer.style.transform = `translateX(${offset}%)`;
        };

        const prevButton = serviceCarousel.querySelector('.service-carousel-button.prev');
        const nextButton = serviceCarousel.querySelector('.service-carousel-button.next');

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
                updateServiceCarousel();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
                updateServiceCarousel();
            });
        }

        updateServiceCarousel();
    });

    // Accordion Functionality
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const panel = header.nextElementSibling;

            accordionItem.classList.toggle('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-panel').style.display = 'none';
                }
            });

            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });

    // Contact Page Enhancements
    if (document.querySelector('.contact')) {
        const eventDateInput = document.getElementById('event-date');
        if (eventDateInput) {
            $(eventDateInput).datepicker({
                dateFormat: "mm/dd/yy",
                changeMonth: true,
                changeYear: true,
                yearRange: "2023:2033",
                showAnim: "fadeIn"
            });
        }

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert("Thank you for reaching out! We'll get back to you soon.");
                contactForm.reset();
            });
        }

        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                e.target.value = e.target.value
                    .replace(/[^\d]/g, '')
                    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            });
        }

        // Highlight active radio buttons for services and packages
        const serviceRadios = document.querySelectorAll('#services-options input[type="radio"]');
        const packageRadios = document.querySelectorAll('#packages-options input[type="radio"]');

        serviceRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                serviceRadios.forEach(r => r.parentElement.classList.remove('active'));
                radio.parentElement.classList.add('active');
            });
        });

        packageRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                packageRadios.forEach(r => r.parentElement.classList.remove('active'));
                radio.parentElement.classList.add('active');
            });
        });
    }

    // Highlight the active navigation tab
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
