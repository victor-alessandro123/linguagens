document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all language cards
    const languageCards = document.querySelectorAll('.language-card');
    
    languageCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add a subtle highlight effect when clicked
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(-5px)';
            }, 200);
        });

        // Add hover effect for better interactivity
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add a scroll-to-top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-top';
    document.body.appendChild(scrollButton);

    // Style the scroll button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #3498db;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 20px;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: background-color 0.3s;
        }
        .scroll-top:hover {
            background: #2980b9;
        }
    `;
    document.head.appendChild(style);

    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 