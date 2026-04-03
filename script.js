// PathMatch JavaScript

// Sample WSDIP courses data
const wsdipCourses = {
    business: [
        { title: "Accountancy", code: "DPACC", description: "Financial accounting, auditing, and business finance", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-accountancy/" },
        { title: "Airport Operations", code: "DPAOP", description: "Airport management, ground operations, and aviation services", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-airport-operations/" },
        { title: "Community Engagement & Development", code: "DPCED", description: "Community outreach, social programs, and development initiatives", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-community-engagement-development/" },
        { title: "Culinary Arts & Management", code: "DPCAM", description: "Culinary skills, kitchen management, and food service operations", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-culinary-arts-management/" },
        { title: "Customer Experience Management (Aviation Services)", code: "DPCEMAVI", description: "Aviation customer service, passenger experience, and airport services", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-customer-experience-management-aviation/" },
        { title: "Customer Experience Management (Cabin Services)", code: "DPCEMCBS", description: "Cabin crew services, in-flight customer care, and airline operations", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-customer-experience-management--cabin-services-/" },
        { title: "Customer Experience Management (Lifestyle & Consumer)", code: "DPCEMLSC", description: "Retail customer service, consumer relations, and lifestyle services", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-customer-experience-management-lifestyle-consumer/" },
        { title: "E-commerce & Retail", code: "DPECR", description: "Online retail, digital commerce, and retail management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-e-commerce-retail/" },
        { title: "Event Management", code: "DPEVM", description: "Event planning, coordination, and hospitality management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-event-management/" },
        { title: "Fitness Management", code: "DPFIM", description: "Fitness center operations, wellness programs, and health management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-fitness-management/" },
        { title: "Hotel & Restaurant Management", code: "DPHTR", description: "Hospitality operations, food service, and accommodation management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-hotel-restaurant-management/" },
        { title: "Human Resource Management", code: "DPHRM", description: "HR operations, talent management, and organizational development", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-human-resource-management/" },
        { title: "Lifestyle & Recreation Management", code: "DPLRM", description: "Recreation services, lifestyle programs, and leisure management" },
        { title: "Logistics & Supply Chain Management", code: "DPLSC", description: "Supply chain operations, logistics coordination, and inventory management" },
        { title: "Patient Management & Services", code: "DPPMS", description: "Healthcare administration, patient care coordination, and medical services", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-patient-management-services/" },
        { title: "Security Operations", code: "DPSCO", description: "Security management, risk assessment, and safety operations", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-security-operations/" },
        { title: "Tourism Management", code: "DPTMT", description: "Tourism operations, travel services, and destination management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-tourism-management/" }
    ],
    engineering: [
        { title: "Agriculture & Aquaculture Technology", code: "DPAAT", description: "Sustainable farming, aquaculture systems, and agricultural technology", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-agriculture-aquaculture-technology/" },
        { title: "Aircraft Cabin Engineering", code: "DPACE", description: "Aircraft interior systems, cabin safety, and passenger comfort engineering", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-aircraft-cabin-engineering/" },
        { title: "Aircraft Engine Maintenance", code: "DPAEM", description: "Aircraft engine repair, maintenance, and performance optimization", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-aircraft-engine-maintenance/" },
        { title: "Aircraft Maintenance Engineering", code: "DPAME", description: "Aircraft systems maintenance, inspection, and airworthiness certification", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-aircraft-maintenance-engineering/" },
        { title: "Arboriculture & Horticulture", code: "DPABH", description: "Tree care, landscape management, and horticultural practices", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-arboriculture-horticulture/" },
        { title: "Automation Engineering", code: "DPAEG", description: "Industrial automation, control systems, and robotics integration", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-automation-engineering/" },
        { title: "Chemical Process Technology", code: "DPCPT", description: "Chemical manufacturing processes, safety systems, and quality control", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-chemical-process-technology/" },
        { title: "Electrical Engineering", code: "DPEEG", description: "Power systems, electrical installations, and energy management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-electrical-engineering/" },
        { title: "Land Transport Engineering (Operations Management)", code: "DPLTEOPM", description: "Transport operations, fleet management, and logistics coordination", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-land-transport-engineering--operations-management-/" },
        { title: "Land Transport Engineering (Rail)", code: "DPLTERAIL", description: "Railway systems, train operations, and rail infrastructure", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-land-transport-engineering-rail/" },
        { title: "Land Transport Engineering (Vehicle)", code: "DPLTEVEH", description: "Vehicle systems, automotive technology, and maintenance", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-land-transport-engineering-vehicle/" },
        { title: "Marine & Offshore Engineering (Engineering Design)", code: "DPMOEED", description: "Marine vessel design, offshore structures, and naval architecture - Not offered in 2025 intake" },
        { title: "Marine & Offshore Engineering - Production (Repair & Maintenance)", code: "DPMOEPRM", description: "Ship repair, marine maintenance, and offshore equipment servicing", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-marine-offshore-engineering-production/" },
        { title: "Mechanical Systems Engineering", code: "DPMSE", description: "Mechanical design, manufacturing systems, and equipment maintenance", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-mechanical-systems-engineering/" },
        { title: "Microelectronics (Equipment)", code: "DPUENEQM", description: "Semiconductor equipment, cleanroom technology, and precision manufacturing", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-microelectronics-equipment/" },
        { title: "Microelectronics (Process)", code: "DPUENPCS", description: "Semiconductor fabrication, process control, and quality assurance", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-microelectronics-process/" },
        { title: "Port Automation Technology (For PSA employees only)", code: "DPPAT", description: "Port automation systems, container handling, and logistics technology", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-port-automation-technology/" },
        { title: "Security Systems Engineering", code: "DPSSE", description: "Security technology, surveillance systems, and access control", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-security-systems-engineering/" }
    ],
    'built-environment': [
        { title: "Architectural BIM & Design", code: "DPABD", description: "Building Information Modeling, architectural design, and construction documentation", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-architectural-bim-design/" },
        { title: "Facilities Management", code: "DPFMM", description: "Building operations, maintenance management, and facility optimization", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-facilities-management/" },
        { title: "Mechanical & Electrical Services Supervision", code: "DPMES", description: "MEP systems supervision, building services, and maintenance coordination", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-mechanical-electrical-services-supervision/" },
        { title: "Vertical Transportation", code: "DPVTT", description: "Elevator systems, escalator maintenance, and vertical transport technology", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-vertical-transportation/" }
    ],
    idt: [
        { title: "AI & Data Intelligence (AI)", code: "DPAIDAIE", description: "Artificial intelligence, machine learning, and intelligent systems development" },
        { title: "AI & Data Intelligence (Data Engineering)", code: "DPAIDDEN", description: "Data pipeline engineering, big data processing, and analytics infrastructure", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-ai-data-intelligence-data-engineering/" },
        { title: "Cloud Management & Operations (Cloud Operations)", code: "DPCMO", description: "Cloud platform management, deployment, and operational excellence", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-cloud-management-operations-cloud-operations/" },
        { title: "Cloud Management & Operations (Infrastructure Support)", code: "DPCMOIFS", description: "Cloud infrastructure support, monitoring, and maintenance", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-cloud-management-operations-infrastructure-support/" },
        { title: "Cyber Security & Forensics", code: "DPCSF", description: "Cybersecurity analysis, digital forensics, and threat investigation", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-cyber-security-forensics/" },
        { title: "Data Centre Infrastructure & Operation", code: "DPDIO", description: "Data center management, server operations, and infrastructure maintenance", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-data-centre-infrastructure-operation/" },
        { title: "Electronics & Computer Engineering (Applied Electronics & AI)", code: "DPECEAEA", description: "Electronics engineering with AI integration and smart systems", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-electronics-computer-engineering-applied-electronics-ai/" },
        { title: "Electronics & Computer Engineering (IoT & Data Engineering)", code: "DPECEIDE", description: "IoT systems, sensor networks, and data engineering solutions", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-electronics---computer-engineering-iot---data-engineering/" },
        { title: "IT System Integration", code: "DPISI", description: "System integration, enterprise solutions, and IT infrastructure", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-it-system-integration/" }
    ],
    'arts-design-media': [
        { title: "Media Communication & Digital Marketing", code: "DPMCD", description: "Digital media production, marketing communications, and content strategy", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-media-communication-digital-marketing/" }
    ],
    'health-science': [
        { title: "Nursing (In-service Enrolled Nurses only)", code: "DPNSG", description: "Advanced nursing practice, patient care, and healthcare management", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-nursing/" },
        { title: "Opticianry", code: "DPOPY", description: "Optical dispensing, vision care, and eyewear fitting", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-opticianry/" },
        { title: "Paramedicine", code: "DPPRM", description: "Emergency medical services, pre-hospital care, and patient transport", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-paramedicine/" },
        { title: "Rehabilitation Care", code: "DPREC", description: "Rehabilitation therapy, patient recovery, and therapeutic interventions", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-rehabilitation-care/" }
    ],
    'humanities-social': [
        { title: "Community Care Integration & Management", code: "DPCCM", description: "Community services coordination, social care management, and support programs", url: "https://www.ite.edu.sg/course-finder/work-study-diploma-in-community-care-integration---management/" }
    ]
};

// Sample feedback data
const feedbackData = [
    {
        name: "Sarah Chen",
        course: "AI & Machine Learning",
        feedback: "PathMatch helped me discover my passion for AI. The personalized recommendations were spot-on and led me to my dream career!"
    },
    {
        name: "Marcus Tan",
        course: "Cybersecurity Specialist", 
        feedback: "The career path matching was incredibly accurate. I'm now working as a security analyst at a top tech company."
    },
    {
        name: "Priya Sharma",
        course: "Digital Marketing",
        feedback: "I never thought I'd enjoy marketing until PathMatch showed me how it aligns with my personality type. Best decision ever!"
    },
    {
        name: "David Lim",
        course: "Cloud Computing",
        feedback: "The personalized career matching made all the difference. I found a career that truly fits who I am."
    },
    {
        name: "Emily Wong",
        course: "Data Analytics",
        feedback: "PathMatch's recommendations opened my eyes to opportunities I never considered. Now I'm a data scientist!"
    }
];

// Current carousel position
let currentCarouselIndex = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    initializeFeedbackCarousel();
    populateCareerPaths();
    enforceRiasecLink();
});

// Resolve target URL for a course: prefer explicit URL, otherwise fall back to ITE search
function getCourseUrl(course) {
    if (course && course.url) return course.url;
    const query = `Work-Study Diploma in ${course?.title || ''}`.trim();
    return `https://www.ite.edu.sg/search?q=${encodeURIComponent(query)}`;
}

// Build ITE site search URL for career paths for a specific course title
function getCareerPathSearchUrl(courseTitle) {
    const base = 'https://www.ite.edu.sg/search';
    const params = new URLSearchParams({
        scope: 'domain',
        cid: '09a942b8-65b7-48b7-8e8c-5cdc79024625',
        rurl: 'https://www.ite.edu.sg/current-full-time-students/progression/work-study-diploma/full-course-listing',
        q: `career paths ${courseTitle}`
    });
    return `${base}?${params.toString()}`;
}

// Ensure RIASEC button opens MySkillsFuture assessments page exactly
function enforceRiasecLink() {
    const riasecUrl = 'https://www.myskillsfuture.gov.sg/content/portal/en/assessment/landing.html';
    const links = Array.from(document.querySelectorAll('a.quiz-btn'));
    const riasecLink = links.find(a => a.textContent.trim().toLowerCase() === 'take riasec test');
    if (riasecLink) {
        riasecLink.setAttribute('href', riasecUrl);
        riasecLink.setAttribute('target', '_blank');
        riasecLink.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(riasecUrl, '_blank');
        }, true);
    }
}

// Populate career paths data
function populateCareerPaths() {
    const careerPathsData = {
        business: [
            { title: "Accountancy", paths: ["Financial accountant", "Auditor", "Business Finance"] },
            { title: "Airport Operations", paths: ["Airport manager", "Ground operator", "Aviation services"] },
            { title: "Community Engagement & Development", paths: ["Community coordinator", "Social programs", "Development initiatives"] },
            { title: "Culinary Arts & Management", paths: ["Chef", "Kitchen manager", "Food service operations"] }
        ],
        'built-environment': [
            { title: "Architectural BIM & Design", paths: ["BIM specialist", "Architectural designer", "Construction documentation"] },
            { title: "Facilities Management", paths: ["Facilities manager", "Building operations", "Maintenance coordinator"] },
            { title: "Mechanical & Electrical Services", paths: ["MEP supervisor", "Building services", "Maintenance coordination"] },
            { title: "Vertical Transportation", paths: ["Elevator technician", "Escalator maintenance", "Transport systems"] }
        ],
        idt: [
            { title: "AI & Data Intelligence (AI)", paths: ["AI specialist", "Machine learning engineer", "Data scientist"] },
            { title: "AI & Data Intelligence (Data Engineering)", paths: ["Data engineer", "Analytics specialist", "Big data processing"] },
            { title: "Cloud Management & Operations", paths: ["Cloud architect", "DevOps engineer", "Infrastructure specialist"] },
            { title: "Cyber Security & Forensics", paths: ["Security analyst", "Digital forensics", "Threat investigation"] }
        ],
        engineering: [
            { title: "Aircraft Maintenance Engineering", paths: ["Aircraft technician", "Maintenance engineer", "Aviation specialist"] },
            { title: "Automation Engineering", paths: ["Automation engineer", "Control systems", "Robotics integration"] },
            { title: "Electrical Engineering", paths: ["Electrical engineer", "Power systems", "Energy management"] },
            { title: "Mechanical Systems Engineering", paths: ["Mechanical engineer", "Manufacturing systems", "Equipment maintenance"] }
        ],
        'arts-design-media': [
            { title: "Media Communication & Digital Marketing", paths: ["Digital marketer", "Content creator", "Marketing communications"] }
        ],
        'health-science': [
            { title: "Nursing", paths: ["Registered nurse", "Patient care", "Healthcare management"] },
            { title: "Paramedicine", paths: ["Paramedic", "Emergency services", "Patient transport"] },
            { title: "Rehabilitation Care", paths: ["Rehabilitation therapist", "Patient recovery", "Therapeutic interventions"] }
        ],
        'humanities-social': [
            { title: "Community Care Integration & Management", paths: ["Community coordinator", "Social care manager", "Support programs"] }
        ]
    };
    
    Object.keys(careerPathsData).forEach(category => {
        const grid = document.getElementById(category + '-grid');
        if (grid) {
            grid.innerHTML = careerPathsData[category].map(course => `
                <div class="career-card">
                    <h3><a href="${getCareerPathSearchUrl(course.title)}" target="_blank" style="color: #dc2626; text-decoration: none;">${course.title}</a></h3>
                    <ul class="career-paths">
                        ${course.paths.map(path => `<li>${path}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }
    });
}

// Function to view course details in WSDIP page
function viewCourseDetails(category, courseTitle) {
    showPage('career');
    setTimeout(() => {
        showCategoryDetails(category);
    }, 100);
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Career category functions
function showCategoryDetails(category) {
    const wsdipGrid = document.querySelector('.wsdip-grid');
    const categoryDetails = document.getElementById('category-details');
    const categoryTitle = document.getElementById('category-title');
    const categoryCoursesDiv = document.getElementById('category-courses');
    
    // Hide category grid and show details
    wsdipGrid.style.display = 'none';
    categoryDetails.style.display = 'block';
    
    // Set category title
    const titles = {
        business: 'Business',
        engineering: 'Engineering',
        'built-environment': 'Built Environment',
        idt: 'Information & Digital Technology',
        'arts-design-media': 'Arts, Design & Media',
        'health-science': 'Health Science',
        'humanities-social': 'Humanities and Social Sciences'
    };
    categoryTitle.textContent = titles[category];
    
    // Populate courses
    const courses = wsdipCourses[category];
    if (courses) {
        categoryCoursesDiv.innerHTML = courses.map(course => {
            const targetUrl = getCourseUrl(course);
            return `
            <div class="course-card-detail" onclick="window.open('${targetUrl}','_blank')" style="cursor: pointer;">
                <div class="course-icon">📊</div>
                <div class="course-info">
                    <h3><a href="${targetUrl}" target="_blank" style="color:#000000; text-decoration:none;">${course.title}</a></h3>
                    <div class="course-code">${course.code}</div>
                    <div class="course-location">ITE COLLEGE CENTRAL</div>
                </div>
                <div class="course-duration">Duration: 30 Months</div>
            </div>
            `;
        }).join('');
    } else {
        categoryCoursesDiv.innerHTML = '<p style="color: rgba(220, 38, 38, 0.7);">Courses coming soon...</p>';
    }
}

function hideCategoryDetails() {
    const wsdipGrid = document.querySelector('.wsdip-grid');
    const categoryDetails = document.getElementById('category-details');
    
    wsdipGrid.style.display = 'grid';
    categoryDetails.style.display = 'none';
}

// Feedback carousel functions
function initializeFeedbackCarousel() {
    const carouselTrack = document.getElementById('carousel-track');
    
    // Duplicate items for seamless looping
    const duplicatedData = [...feedbackData, ...feedbackData];
    
    carouselTrack.innerHTML = duplicatedData.map(item => `
        <div class="carousel-item" style="min-width: 280px; margin-right: 20px; background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; text-align: center; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <div class="student-name" style="color: #000000; font-size: 16px; font-weight: 500; margin-bottom: 15px;">${item.name}</div>
            <div class="photo-icon" style="width: 80px; height: 80px; border-radius: 50%; background: #f0f0f0; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; font-size: 32px;">👤</div>
            <h4 style="color: #dc2626; font-size: 18px; font-weight: 400; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px;">${item.course}</h4>
            <p style="color: #666666; font-size: 14px; line-height: 1.6; font-weight: 300;">"${item.feedback}"</p>
        </div>
    `).join('');
}

function moveCarousel(direction) {
    const track = document.getElementById('carousel-track');
    const items = track.querySelectorAll('.carousel-item');
    const itemWidth = 440; // 400px width + 40px margin
    const originalLength = feedbackData.length;
    
    currentCarouselIndex += direction;
    
    // Seamless looping
    if (currentCarouselIndex >= originalLength) {
        currentCarouselIndex = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease';
        }, 50);
    } else if (currentCarouselIndex < 0) {
        currentCarouselIndex = originalLength - 1;
        track.style.transition = 'none';
        track.style.transform = `translateX(${-currentCarouselIndex * itemWidth}px)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease';
        }, 50);
    } else {
        const translateX = -currentCarouselIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }
}

// Auto-advance carousel
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Multi-step course finder variables
let currentStep = 1;
const totalSteps = 7;

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const percentage = (currentStep / totalSteps) * 100;
        progressBar.style.width = percentage + '%';
    }
}

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.classList.remove('active'));
    const targetStep = document.getElementById('step' + step);
    if (targetStep) {
        targetStep.classList.add('active');
        currentStep = step;
        updateProgress();
    }
}

function nextStep() {
    if (validateCurrentStep() && currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}

function validateCurrentStep() {
    switch(currentStep) {
        case 1:
            return validateStep1();
        case 2:
            return validateStep2();
        case 3:
            return validateStep3();
        case 4:
            return validateStep4();
        case 5:
            return validateStep5();
        case 6:
            return validateStep6();
        default:
            return true;
    }
}

function validateStep1() {
    const education = document.getElementById('education').value;
    
    if (!education) {
        alert('Please select your qualifications.');
        return false;
    }
    return true;
}

function validateStep2() {
    const mbti = document.getElementById('mbti').value;
    const riasecChecked = document.querySelectorAll('input[name="riasec"]:checked').length;
    
    if (!mbti) {
        alert('Please select your MBTI personality type.');
        return false;
    }
    if (riasecChecked === 0) {
        alert('Please select at least one RIASEC interest area.');
        return false;
    }
    return true;
}

function validateStep3() {
    const strengthsChecked = document.querySelectorAll('#step3 input[type="checkbox"]:checked').length;
    
    if (strengthsChecked < 3) {
        alert('Please select at least 3 strengths.');
        return false;
    }
    return true;
}

function validateStep4() {
    const motivation = document.querySelector('input[name="motivation"]:checked');
    const environment = document.querySelector('input[name="environment"]:checked');
    const workstyle = document.querySelector('input[name="workstyle"]:checked');
    
    if (!motivation) {
        alert('Please select what motivates you most in your career.');
        return false;
    }
    if (!environment) {
        alert('Please select your preferred work environment.');
        return false;
    }
    if (!workstyle) {
        alert('Please select how you prefer to work.');
        return false;
    }
    return true;
}

function validateStep5() {
    const goal = document.querySelector('input[name="goal"]:checked');
    const industries = document.querySelectorAll('#step5 input[type="checkbox"]:checked');
    
    if (!goal) {
        alert('Please select your primary career goal.');
        return false;
    }
    if (industries.length === 0) {
        alert('Please select at least one industry that interests you.');
        return false;
    }
    return true;
}

function validateStep6() {
    const experiencesInput = document.getElementById('experiences');
    if (!experiencesInput) {
        // Experiences field removed; nothing to validate on this step
        return true;
    }
    const experiences = experiencesInput.value.trim();
    if (!experiences) {
        alert('Please tell us about your relevant experiences, projects, or achievements.');
        return false;
    }
    return true;
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

function generateRecommendations() {
    if (validateStep6()) {
        const formData = collectFormData();
        showStep(7);
        const recommendations = analyzeAndRecommend(formData);
        displayRecommendations(recommendations);
    }
}

function collectFormData() {
    return {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        education: document.getElementById('education')?.value || '',
        strengths: Array.from(document.querySelectorAll('#step3 input[type="checkbox"]:checked')).map(cb => cb.value),
        technicalSkills: document.getElementById('technical-skills')?.value || '',
        motivation: document.querySelector('input[name="motivation"]:checked')?.value || '',
        environment: document.querySelector('input[name="environment"]:checked')?.value || '',
        workstyle: document.querySelector('input[name="workstyle"]:checked')?.value || '',
        goal: document.querySelector('input[name="goal"]:checked')?.value || '',
        industries: Array.from(document.querySelectorAll('#step5 input[type="checkbox"]:checked')).map(cb => cb.value),
        experiences: document.getElementById('experiences')?.value || '',
        additionalInfo: document.getElementById('additional-info')?.value || ''
    };
}

function analyzeAndRecommend(data) {
    // WSDIP course recommendations based on assessment
    const courses = [
        {
            name: "IT Application Development",
            code: "DPAIDAIE",
            matchScore: 97,
            whyFits: "Based on your analytical thinking and technical skills, this course perfectly aligns with your problem-solving abilities and interest in technology. Your MBTI type suggests you enjoy working with systems and creating solutions, which is exactly what application development offers.",
            description: "This comprehensive program covers software development, mobile app creation, and web application design. You'll learn programming languages, database management, and user interface design while working on real-world projects that prepare you for immediate employment in the tech industry.",
            careerPaths: ["Software Developer", "Mobile App Developer", "Web Developer", "Systems Analyst", "IT Consultant"],
            keySkills: ["Programming Languages", "Database Management", "UI/UX Design", "Software Testing", "Project Management"]
        },
        {
            name: "Cybersecurity & Forensics",
            code: "DPCSF", 
            matchScore: 94,
            whyFits: "Your attention to detail and analytical nature make you an ideal candidate for cybersecurity. Your preference for problem-solving and systematic thinking aligns perfectly with the investigative nature of digital forensics and security analysis.",
            description: "Intensive cybersecurity program focusing on threat detection, network security, and digital forensics. You'll learn to protect organizations from cyber threats, investigate security incidents, and implement robust security measures across various systems and networks.",
            careerPaths: ["Cybersecurity Analyst", "Digital Forensics Specialist", "Security Consultant", "Penetration Tester", "IT Security Manager"],
            keySkills: ["Network Security", "Digital Forensics", "Risk Assessment", "Incident Response", "Security Auditing"]
        },
        {
            name: "Cloud Management & Operations",
            code: "DPCMO",
            matchScore: 91,
            whyFits: "Your technical skills and interest in continuous learning make you well-suited for cloud computing. The dynamic nature of cloud technology matches your preference for growth and your ability to adapt to new technologies and methodologies.",
            description: "Comprehensive program covering cloud platform management, deployment strategies, and operational excellence. You'll learn to design, implement, and manage cloud infrastructure while ensuring optimal performance and security for modern applications.",
            careerPaths: ["Cloud Architect", "DevOps Engineer", "Cloud Operations Specialist", "Infrastructure Manager", "Cloud Consultant"],
            keySkills: ["Cloud Platforms", "DevOps Practices", "Infrastructure as Code", "Monitoring & Logging", "Automation Tools"]
        }
    ];

    // Simple scoring algorithm based on user inputs
    return courses.map(course => {
        let score = course.matchScore;
        
        // Adjust scores based on user preferences
        if (data.strengths.includes('Technical Skills') && (course.name.includes('IT') || course.name.includes('Cybersecurity') || course.name.includes('Cloud'))) score += 2;
        if (data.strengths.includes('Analytical Thinking') && (course.name.includes('IT') || course.name.includes('Cybersecurity'))) score += 3;
        if (data.strengths.includes('Problem Solving') && course.name.includes('IT')) score += 2;
        if (data.industries.includes('Technology')) score += 1;
        if (data.goal === 'Become a technical specialist in my field') score += 2;
        
        return { ...course, matchScore: Math.min(score, 98) };
    }).sort((a, b) => b.matchScore - a.matchScore);
}

function displayRecommendations(recommendations) {
    const container = document.getElementById('recommendations');
    if (!container) return;
    
    container.innerHTML = '';

    recommendations.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'recommendation-card';
        courseCard.innerHTML = `
            <div class="recommendation-header">
                <div class="recommendation-number">${index + 1}</div>
                <div class="recommendation-title">${course.name}</div>
                <div class="match-percentage">${course.matchScore}%</div>
            </div>
            <div class="recommendation-content">
                <div class="recommendation-left">
                    <div class="course-code">Course code: ${course.code}</div>
                    <div class="content-section">
                        <h3>Why this fits you:</h3>
                        <p>${course.whyFits}</p>
                    </div>
                    <div class="content-section">
                        <h3>Course Description</h3>
                        <p>${course.description}</p>
                    </div>
                </div>
                <div class="recommendation-right">
                    <div class="info-box">
                        <h4>Career path</h4>
                        <ul>
                            ${course.careerPaths.map(path => `<li>${path}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="info-box">
                        <h4>Key skills you'll learn</h4>
                        <ul>
                            ${course.keySkills.map(skill => `<li>${skill}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(courseCard);
    });
}

function startOver() {
    // Reset all form inputs
    document.querySelectorAll('input, select, textarea').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    showStep(1);
}

// Contact form submission
function submitContact(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    // Simulate form submission
    alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
    
    // Reset form
    event.target.reset();
}

// Mobile menu toggle (if needed)
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}