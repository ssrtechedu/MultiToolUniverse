/**
 * Main JavaScript file for the MultiTool Universe website.
 * This script handles:
 * 1. Dynamically loading the header and footer on all pages.
 * 2. Initializing the theme switcher with localStorage persistence.
 * 3. Populating the tool grid on the homepage from the tools-db.js data.
 * 4. Powering the live search functionality on the homepage.
 */
document.addEventListener('DOMContentLoaded', async () => {

    // --- 1. DYNAMICALLY LOAD HEADER AND FOOTER ---
    /**
     * Fetches and injects the content of a component (like a header or footer) into a placeholder element.
     * It uses the global 'baseURL' variable (defined in each HTML file's <head>) to construct the correct path,
     * ensuring it works both locally and on services like GitHub Pages.
     * @param {string} url - The root-relative path to the component (e.g., '/components/header.html').
     * @param {string} elementId - The ID of the placeholder div where the content will be injected.
     */
    const loadComponent = async (url, elementId) => {
        try {
            // This combines the base path of the site with the component path.
            // Example on GitHub Pages: "/MultiToolUniverse" + "/components/header.html"
            const response = await fetch(`${baseURL}${url}`); 
            
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.statusText} (URL: ${response.url})`);
            }
            
            const data = await response.text();
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            }
        } catch (error) {
            console.error(`Error loading component: ${error}`);
        }
    };

    // Use 'await' to ensure header and footer are fully loaded before the rest of the script runs.
    // This is crucial for the theme switcher, which needs the header buttons to exist.
    await loadComponent('/components/header.html', 'header-placeholder');
    await loadComponent('/components/footer.html', 'footer-placeholder');


    // --- 2. INITIALIZE THEME SWITCHER (RUNS ON ALL PAGES) ---
    /**
     * Sets up the theme switcher functionality. It reads the saved theme from localStorage
     * on page load and adds event listeners to the theme dropdown buttons.
     */
    const initializeThemeSwitcher = () => {
        const themeSwitcherLinks = document.querySelectorAll('.theme-dropdown .dropdown-item');
        // If the header hasn't loaded for some reason, exit gracefully.
        if (themeSwitcherLinks.length === 0) return;

        const htmlElement = document.documentElement;
        
        // Function to apply a theme and save it to localStorage.
        const applyTheme = (theme) => {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('multiToolTheme', theme);
        };

        // On page load, get the saved theme or default to 'default'.
        const savedTheme = localStorage.getItem('multiToolTheme') || 'default';
        applyTheme(savedTheme);

        // Add a click listener to each theme button in the dropdown.
        themeSwitcherLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = e.target.getAttribute('data-theme');
                applyTheme(theme);
            });
        });
    };

    // Run the theme switcher initialization now that the header is loaded.
    initializeThemeSwitcher();


    // --- 3. HOMEPAGE SPECIFIC LOGIC ---
    // We check for the existence of '#toolsAccordion' to ensure this code only runs on index.html.
    const accordionContainer = document.getElementById('toolsAccordion');
    if (accordionContainer) {
        
        /**
         * Populates the tool grid on the homepage by reading the `toolsData` object
         * from `tools-db.js` and generating the necessary HTML.
         * @returns {number} The total count of all tools.
         */
        const populateTools = () => {
            let allToolsHtml = '';
            let totalTools = 0;
            let categoryIndex = 0;

            for (const categoryName in toolsData) {
                const category = toolsData[categoryName];
                totalTools += category.tools.length;
                const isFirstCategory = categoryIndex === 0;

                // Generate the HTML for all tool cards within this category
                const toolsHtml = category.tools.map(tool => `
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 tool-item" data-name="${tool.name}">
                        <a href="${tool.url}" class="tool-card">
                            <i class="bi ${tool.icon} tool-icon"></i>
                            <span class="tool-name">${tool.name}</span>
                        </a>
                    </div>
                `).join('');

                // Generate the HTML for the entire accordion item (category header + tool cards)
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
            
            // Inject the complete HTML into the container once for better performance.
            accordionContainer.innerHTML = allToolsHtml;
            return totalTools;
        };

        // Run the population function and get the total count.
        const totalToolsCount = populateTools();

        /**
         * Initializes the homepage search functionality and updates tool counters.
         */
        const initializeHomePageLogic = () => {
            // Update tool counters in the hero section and footer.
            const heroCounter = document.getElementById('tool-count-hero');
            const footerCounter = document.getElementById('tool-count-footer');
            if (heroCounter) heroCounter.textContent = totalToolsCount;
            if (footerCounter) footerCounter.textContent = totalToolsCount;

            // Set up the live search event listener.
            const searchInput = document.getElementById('search-input');
            const allToolItems = document.querySelectorAll('.tool-item');
            const allAccordionItems = document.querySelectorAll('.accordion-item');

            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();

                // Show/hide individual tool cards based on the search term.
                allToolItems.forEach(tool => {
                    const toolName = tool.getAttribute('data-name').toLowerCase();
                    tool.style.display = toolName.includes(searchTerm) ? 'block' : 'none';
                });
                
                // Show/hide entire category sections if they have no visible tools.
                allAccordionItems.forEach(category => {
                    const visibleTools = category.querySelectorAll('.tool-item[style*="display: block"]');
                    category.style.display = visibleTools.length > 0 ? 'block' : 'none';
                });
            });
        };

        // Run the homepage-specific logic.
        initializeHomePageLogic();
    }
});
