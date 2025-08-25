document.addEventListener('DOMContentLoaded', async () => {

    // --- 1. DYNAMICALLY LOAD HEADER AND FOOTER ---
    const loadComponent = async (url, elementId) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load ${url}: ${response.statusText}`);
            const data = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            }
        } catch (error) {
            console.error(`Error loading component: ${error}`);
        }
    };

    // Use await to ensure header and footer are loaded before other scripts run
    await loadComponent('components/header.html', 'header-placeholder');
    await loadComponent('components/footer.html', 'footer-placeholder');


    // --- 2. INITIALIZE THEME SWITCHER (RUNS ON ALL PAGES) ---
    const initializeThemeSwitcher = () => {
        const themeSwitcherLinks = document.querySelectorAll('.theme-dropdown .dropdown-item');
        if (themeSwitcherLinks.length === 0) return; // Guard clause if header hasn't loaded

        const htmlElement = document.documentElement;
        
        const applyTheme = (theme) => {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('multiToolTheme', theme);
        };

        const savedTheme = localStorage.getItem('multiToolTheme') || 'default';
        applyTheme(savedTheme);

        themeSwitcherLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = e.target.getAttribute('data-theme');
                applyTheme(theme);
            });
        });
    };

    initializeThemeSwitcher();


    // --- 3. HOMEPAGE SPECIFIC LOGIC ---
    // Check if we are on the homepage by looking for the #toolsAccordion element
    const accordionContainer = document.getElementById('toolsAccordion');
    if (accordionContainer) {
        
        // --- 3.1. POPULATE TOOLS FROM tools-db.js ---
        const populateTools = () => {
            let allToolsHtml = '';
            let totalTools = 0;
            let categoryIndex = 0;

            for (const categoryName in toolsData) {
                const category = toolsData[categoryName];
                totalTools += category.tools.length;
                const isFirstCategory = categoryIndex === 0;

                const toolsHtml = category.tools.map(tool => `
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 tool-item" data-name="${tool.name}">
                        <a href="${tool.url}" class="tool-card">
                            <i class="bi ${tool.icon} tool-icon"></i>
                            <span class="tool-name">${tool.name}</span>
                        </a>
                    </div>
                `).join('');

                allToolsHtml += `
                    <div class="accordion-item" data-category="${categoryName}">
                        <h2 class="accordion-header">
                            <button class="accordion-button ${!isFirstCategory ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${categoryIndex}" aria-expanded="${isFirstCategory}" aria-controls="collapse-${categoryIndex}">
                                <i class="bi ${category.icon} me-3"></i> ${categoryName}
                            </button>
                        </h2>
                        <div id="collapse-${categoryIndex}" class="accordion-collapse collapse ${isFirstCategory ? 'show' : ''}" data-bs-parent="#toolsAccordion">
                            <div class="accordion-body">
                                <div class="row g-4">${toolsHtml}</div>
                            </div>
                        </div>
                    </div>
                `;
                categoryIndex++;
            }
            
            accordionContainer.innerHTML = allToolsHtml;
            return totalTools;
        };

        const totalToolsCount = populateTools();

        // --- 3.2. INITIALIZE SEARCH AND COUNTERS ---
        const initializeHomePageLogic = () => {
            // Update tool counters
            const heroCounter = document.getElementById('tool-count-hero');
            const footerCounter = document.getElementById('tool-count-footer');
            if (heroCounter) heroCounter.textContent = totalToolsCount;
            if (footerCounter) footerCounter.textContent = totalToolsCount;

            // Search functionality
            const searchInput = document.getElementById('search-input');
            const allToolItems = document.querySelectorAll('.tool-item');
            const allAccordionItems = document.querySelectorAll('.accordion-item');

            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();

                allToolItems.forEach(tool => {
                    const toolName = tool.getAttribute('data-name').toLowerCase();
                    // The parent element of the <a> is the column div itself
                    tool.style.display = toolName.includes(searchTerm) ? 'block' : 'none';
                });
                
                allAccordionItems.forEach(category => {
                    const visibleTools = category.querySelectorAll('.tool-item[style*="display: block"]');
                    category.style.display = visibleTools.length > 0 ? 'block' : 'none';
                });
            });
        };

        initializeHomePageLogic();
    }
});