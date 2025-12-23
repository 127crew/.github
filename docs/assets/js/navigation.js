/**
 * Global Navigation Configuration
 * Add new documentation pages here to update all pages automatically.
 */
const navigationConfig = {
    organization: {
        name: "127 CREW",
        logo: "https://i.postimg.cc/JhQbkGsX/127crew.png",
        links: [
            { label: "127crew.dev", url: "https://127crew.dev" },
            { label: "Community Forum", url: "https://forum.127crew.com" },
            { label: "GitHub", url: "https://github.com/127crew" }
        ]
    },
    documentation: [
        { label: "Project Template", url: "documentation-template.html" },
        { label: "Crew Package Manager", url: "cpm.html" },
        // Add more documents here: { label: "My Project", url: "my-project.html" }
    ]
};

function initNavigation() {
    const headerPlaceholder = document.getElementById('global-header');
    const sidebarPlaceholder = document.getElementById('global-sidebar');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <div class="nav-container">
                <a href="index.html" class="nav-logo">
                    <img src="${navigationConfig.organization.logo}" alt="${navigationConfig.organization.name} Logo">
                    <span>${navigationConfig.organization.name}</span>
                </a>
                <button class="menu-toggle" aria-label="Toggle Menu">☰</button>
                <div class="nav-menu">
                    <a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Docs Portal</a>
                    ${navigationConfig.organization.links.map(link => `
                        <a href="${link.url}">${link.label}</a>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (sidebarPlaceholder) {
        sidebarPlaceholder.innerHTML = `
            <div class="sidebar-content">
                <h4>Documentation</h4>
                <ul class="sidebar-nav">
                    <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">← Overview</a></li>
                    ${navigationConfig.documentation.map(doc => `
                        <li><a href="${doc.url}" class="${currentPath === doc.url ? 'active' : ''}">${doc.label}</a></li>
                    `).join('')}
                </ul>
                
                <h4 style="margin-top: 2rem;">Quick Links</h4>
                <ul class="sidebar-nav">
                    ${navigationConfig.organization.links.map(link => `
                        <li><a href="${link.url}">${link.label}</a></li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
}

document.addEventListener('DOMContentLoaded', initNavigation);
