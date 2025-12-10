// Skills data - same as the React component
const javaSkills = [
    {
        name: 'Core Java',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        note: 'OOP concepts, multithreading & memory management'
    },
    {
        name: 'Java 8/11/17/21/25',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        note: 'Streams, lambda expressions & functional programming'
    },
    {
        name: 'REST APIs',
        logoPath: 'https://img.icons8.com/?size=100&id=55497&format=png&color=000000',
        note: 'Designing scalable & stateless API services'
    },
    {
        name: 'JSON',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
        note: 'Data exchange format for APIs & integrations'
    },
    {
        name: 'XML',
        logoPath: 'https://img.icons8.com/arcade/64/xml.png',
        note: 'Structured markup for data and configs'
    },
    {
        name: 'SOAP',
        logoPath: 'https://www.svgrepo.com/show/374072/soap.svg',
        note: 'Legacy enterprise web services integration'
    },
    {
        name: 'JAX-RS',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        note: 'Java API for RESTful web services'
    },
    {
        name: 'HTML',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        note: 'Semantic structure for web applications'
    },
    {
        name: 'CSS',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        note: 'Responsive UI & modern layouts'
    },
    {
        name: 'JavaScript',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        note: 'Dynamic, interactive & event-driven frontends'
    },
    {
        name: 'Spring',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        note: 'Dependency injection & enterprise application framework'
    },
    {
        name: 'Spring Boot',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        note: 'Rapid development with embedded servers & auto-config'
    },
    {
        name: 'Spring Batch',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        note: 'Batch processing & job scheduling for large datasets'
    },
     {
        name: 'IBM-MQ',
        logoPath: '/resource/IBM-MQ.png',
        note: 'Asynchronous messaging & integration middleware'
    },
    {
        name: 'Hibernate',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
        note: 'ORM for database interaction & lazy loading'
    },
    {
        name: 'Microservices',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        note: 'Distributed systems & independently deployable services'
    },
    {
        name: 'Spring Security',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        note: 'Authentication, authorization & OAuth2 integration'
    },
    {
        name: 'Oracle 19c',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
        note: 'PL/SQL, indexing & enterprise-grade database management'
    },
    {
        name: 'MySQL',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        note: 'Relational database with indexing & joins'
    },
    {
        name: 'JBoss EAP 7.3',
        logoPath: 'https://www.vectorlogo.zone/logos/redhat/redhat-icon.svg',
        note: 'Enterprise-grade Java EE application server'
    },
    {
        name: 'WebLogic',
        logoPath: 'https://img.icons8.com/?size=100&id=38298&format=png&color=000000',
        note: 'Oracle middleware for enterprise deployments'
    },
    {
        name: 'WebSphere',
        logoPath: 'https://img.icons8.com/?size=100&id=31754&format=png&color=000000',
        note: 'IBM enterprise-grade application server'
    },
    {
        name: 'Apache Tomcat',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
        note: 'Lightweight servlet container & app server'
    },
    {
        name: 'Git',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        note: 'Version control & collaborative workflows'
    },
    {
        name: 'GitHub',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        note: 'Cloud-hosted Git repositories & CI/CD actions'
    },
    {
        name: 'GitLab',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        note: 'Git hosting with built-in CI/CD pipelines'
    },
    {
        name: 'TortoiseGit',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        note: 'Windows shell interface for Git operations'
    },
    {
        name: 'Jenkins',
        logoPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        note: 'Automation server for CI/CD pipelines'
    }
];


function createSkillId(name) {
    return `skill-${name.replace(/\s+/g, '-').toLowerCase()}`;
}

// Skill card creation function
function createSkillCard(skill, index) {
    const skillId = createSkillId(skill.name);
    return `
        <div class="skill-card" role="article" aria-labelledby="${skillId}" data-skill-index="${index}">
            <div class="skill-card__logo-container">
                <img 
                    class="skill-card__logo" 
                    src="" 
                    alt="${skill.name} logo" 
                    loading="lazy"
                    data-src="${skill.logoPath}"
                >
                <div class="skill-card__logo-fallback">
                    ${skill.name.charAt(0).toUpperCase()}
                </div>
            </div>
            <div class="skill-card__content">
                <h3 id="${skillId}" class="skill-card__name">
                    ${skill.name}
                </h3>
                <p class="skill-card__note">${skill.note}</p>
            </div>
        </div>
    `;
}

// Intersection Observer for lazy loading
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const img = card.querySelector('.skill-card__logo');
                const fallback = card.querySelector('.skill-card__logo-fallback');
                
                if (img && img.dataset.src) {
                    img.src = img.dataset.src;
                    
                    img.onload = function() {
                        img.classList.add('skill-card__logo--loaded');
                    };
                    
                    img.onerror = function() {
                        img.style.display = 'none';
                        fallback.style.display = 'flex';
                    };
                    
                    // Remove data-src to prevent reloading
                    delete img.dataset.src;
                }
                
                // Stop observing this card
                imageObserver.unobserve(card);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Observe all skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        imageObserver.observe(card);
    });
}

// Skills grid renderer
function renderSkillsGrid(skills, containerId = 'skills-grid') {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Generate HTML for all skills
    const skillsHTML = skills.map((skill, index) => createSkillCard(skill, index)).join('');
    container.innerHTML = skillsHTML;

    // Setup lazy loading after DOM is updated
    setTimeout(() => {
        setupLazyLoading();
    }, 0);
}

// Initialize the skills grid when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderSkillsGrid(javaSkills);
});

// Export functions for potential external use
window.SkillsGrid = {
    render: renderSkillsGrid,
    javaSkills: javaSkills,
    utils: {
        createSkillId,
        createSkillCard
    }
};