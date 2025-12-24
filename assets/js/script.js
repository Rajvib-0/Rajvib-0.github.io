// assets/js/script.js - Complete version
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Create sidebar elements if they don't exist
    createSidebarElements();
    
    // Initialize sidebar functionality
    initSidebar();
    
    // Initialize folder toggles for material page
    initFolderToggles();
    
    // Initialize contact form
    initContactForm();
});

function createSidebarElements() {
    // Create sidebar toggle button
    if (!document.querySelector('.sidebar-toggle')) {
        const toggleBtn = document.createElement('div');
        toggleBtn.className = 'sidebar-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.insertBefore(toggleBtn, document.body.firstChild);
    }
    
    // Create overlay
    if (!document.querySelector('.overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }
}

function initSidebar() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.close-btn');
    
    // Show sidebar toggle if sidebar exists
    if (sidebarToggle && sidebar) {
        sidebarToggle.style.display = 'block';
        
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    } else {
        console.log('Sidebar elements not found');
    }
    
    // Close sidebar with close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close sidebar with overlay click
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close sidebar when clicking on links
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close sidebar with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function initFolderToggles() {
    // Make toggleFolder function available globally
    window.toggleFolder = function(folderId) {
        const folder = document.getElementById(folderId);
        if (folder) {
            folder.classList.toggle('active');
            
            // Rotate icon if present
            const folderHeader = folder.previousElementSibling;
            if (folderHeader && folderHeader.querySelector('i')) {
                const icon = folderHeader.querySelector('i');
                if (folder.classList.contains('active')) {
                    icon.style.transform = 'rotate(90deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        }
    }
    
    // Add click handlers to all folder headers
    const folderHeaders = document.querySelectorAll('.folder-header');
    folderHeaders.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const folderId = this.nextElementSibling.id;
            toggleFolder(folderId);
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simple validation
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Show success message
            alert(`Thank you ${formData.name}! Your message has been sent.\n\nFor a real website, you would need to set up Formspree or another email service.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Add some basic CSS via JavaScript if needed
function injectFallbackStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Fallback styles if CSS doesn't load */
        .sidebar-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            background: #2c3e50;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
            font-size: 1.2rem;
        }
        
        .sidebar {
            position: fixed;
            left: -280px;
            top: 0;
            width: 280px;
            height: 100%;
            background: #2c3e50;
            color: white;
            padding: 20px;
            z-index: 1001;
            transition: left 0.3s ease;
        }
        
        .sidebar.active {
            left: 0;
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            display: none;
        }
        
        .overlay.active {
            display: block;
        }
    `;
    document.head.appendChild(style);
}

// Inject fallback styles
injectFallbackStyles();
