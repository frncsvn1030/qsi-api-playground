// Sidebar Toggle Script
document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

// ---- Adaptive UI for mobile (initial) ------

// X close
document.getElementById('sidebarClose').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});

// Desktop sidebar default open, mobile closed
if (window.innerWidth < 768) {
    document.getElementById('sidebar').classList.remove('open');
}



// TEMPORARY: Sidebar item active state
document.querySelectorAll('.s-item').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Remove active class from all sidebar items
        document.querySelectorAll('.s-item').forEach(el => {
            el.classList.remove('active');
        });

        // Determine which element to activate
        let elementToActivate = this;
        if (!this.classList.contains('uk-accordion-title')) {
            // If not an accordion title, find the closest parent accordion title
            const accordionContent = this.closest('.uk-accordion-content');
            if (accordionContent) {
                const parentTitle = accordionContent.previousElementSibling;
                if (parentTitle && parentTitle.classList.contains('s-item')) {
                    elementToActivate = parentTitle;
                }
            }
        }

        // Activate the target element and all its parent accordion titles
        let currentElement = elementToActivate;
        while (currentElement) {
            if (currentElement.classList.contains('s-item')) {
                currentElement.classList.add('active');
            }

            const accordionContent = currentElement.closest('.uk-accordion-content');
            if (accordionContent) {
                const parentAccordionTitle = accordionContent.previousElementSibling;
                if (parentAccordionTitle && parentAccordionTitle.classList.contains('s-item')) {
                    parentAccordionTitle.classList.add('active');
                    currentElement = parentAccordionTitle;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    });
});

// TEMPORARY: Remove active class when accordion closes
document.querySelectorAll('[uk-accordion]').forEach(accordion => {
    UIkit.util.on(accordion, 'beforehide', function (e) {
        const title = e.target.querySelector('.uk-accordion-title');
        if (title && title.classList.contains('s-item')) {
            title.classList.remove('active');
        }
    });
});

