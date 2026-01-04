// script.js
        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });

        // Simple Image Slider
        document.addEventListener('DOMContentLoaded', function () {
            const sliderImages = document.querySelectorAll('.slider-image');
            let currentImage = 0;

            function changeImage() {
                sliderImages.forEach(img => img.classList.remove('active'));
                sliderImages[currentImage].classList.add('active');
                currentImage = (currentImage + 1) % sliderImages.length;
            }

            // Initial display
            changeImage();

            // Set interval for slideshow
            const sliderInterval = setInterval(changeImage, 5000);

            // Pause slider on hover
            const slider = document.querySelector('.image-slider');
            slider.addEventListener('mouseenter', () => {
                clearInterval(sliderInterval);
            });

            slider.addEventListener('mouseleave', () => {
                setInterval(changeImage, 5000);
            });
        });

        // Disable Bootstrap's click behavior for dropdowns on desktop
        document.addEventListener('DOMContentLoaded', function () {
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

            // Only modify behavior for desktop
            if (window.innerWidth >= 992) {
                dropdownToggles.forEach(function (toggle) {
                    // Remove data-bs-toggle attribute to disable Bootstrap's click behavior
                    toggle.removeAttribute('data-bs-toggle');
                    toggle.setAttribute('data-hover', 'true');
                });
            }

            // Mobile behavior remains the same
            dropdownToggles.forEach(function (toggle) {
                toggle.addEventListener('click', function (e) {
                    if (window.innerWidth < 992) {
                        e.preventDefault();
                        const dropdownMenu = this.nextElementSibling;
                        const isOpen = dropdownMenu.classList.contains('show');

                        // Close all other dropdowns
                        document.querySelectorAll('.dropdown-menu').forEach(menu => {
                            if (menu !== dropdownMenu) {
                                menu.classList.remove('show');
                            }
                        });

                        // Toggle current dropdown
                        if (!isOpen) {
                            dropdownMenu.classList.add('show');
                        } else {
                            dropdownMenu.classList.remove('show');
                        }
                    }
                });
            });

            // Close dropdowns when clicking outside (mobile only)
            document.addEventListener('click', function (e) {
                if (window.innerWidth < 992) {
                    if (!e.target.matches('.dropdown-toggle')) {
                        document.querySelectorAll('.dropdown-menu').forEach(menu => {
                            menu.classList.remove('show');
                        });
                    }
                }
            });
        });

        // Prevent body scroll when navbar is open on mobile
        document.querySelector('.navbar-toggler').addEventListener('click', function () {
            if (window.innerWidth < 992) {
                document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
            }
        });
    