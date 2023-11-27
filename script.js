function toggleMode() {
    const stylesheet = document.getElementById('stylesheet');
    const toggleButton = document.getElementById('toggle-mode-btn');
    const modeIcon = document.getElementById('mode-icon');

    if (stylesheet.href.includes('styles-light.css')) {
        stylesheet.href = 'styles-dark.css';
        modeIcon.src = 'Lightmode.png';
    } else {
        stylesheet.href = 'styles-light.css';
        modeIcon.src = 'Darkmode.png';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollToBottom() {
    document.body.scrollTop = document.body.scrollHeight;
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function search() {
    var searchTerm = document.getElementById("search").value;

    // Example: Search through the left, center, and right boxes
    var leftBoxContent = document.getElementById("left-box-content");
    var centerBoxContent = document.getElementById("center-box-content");
    var rightBoxContent = document.getElementById("right-box-content");

    // Search in left box
    var leftBoxText = leftBoxContent.innerText;
    if (leftBoxText.toLowerCase().includes(searchTerm.toLowerCase())) {
        highlightSearchTerm(leftBoxContent, searchTerm);
    }

    // Search in center box
    var centerBoxText = centerBoxContent.innerText;
    if (centerBoxText.toLowerCase().includes(searchTerm.toLowerCase())) {
        highlightSearchTerm(centerBoxContent, searchTerm);
    }

    // Search in right box
    var rightBoxText = rightBoxContent.innerText;
    if (rightBoxText.toLowerCase().includes(searchTerm.toLowerCase())) {
        highlightSearchTerm(rightBoxContent, searchTerm);
    }
}

function highlightSearchTerm(contentElement, searchTerm) {
    // Save the original content
    var originalContent = contentElement.innerHTML;

    // Create a temporary element to set the HTML content
    var tempElement = document.createElement('div');
    tempElement.innerHTML = originalContent;

    // Highlight the search term in the text content
    tempElement.innerHTML = tempElement.innerHTML.replace(
        new RegExp('(' + searchTerm + ')', 'gi'),
        '<span class="highlighted">$1</span>'
    );

    // Clear the original content and append the updated content
    contentElement.innerHTML = '';
    contentElement.appendChild(tempElement);
}

function downloadGame(platform) {
    // You can implement download logic based on the platform
    switch (platform) {
        case 'windows':
            // Implement Windows download logic
            break;
        case 'mac':
            // Implement Mac download logic
            break;
        case 'linux':
            // Implement Linux download logic
            break;
        case 'ios':
            // Implement iOS download logic
            break;
        default:
            console.error('Invalid platform');
    }
}

function validateForm(event) {
    event.preventDefault();

    // Get form inputs
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var cnpInput = document.getElementById('cnp');

    // Validate email
    if (!validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate phone number
    if (!validatePhoneNumber(phoneInput.value)) {
        alert('Please enter a valid phone number (10 digits).');
        return;
    }

    // Validate CNP
    if (!validateCNP(cnpInput.value)) {
        alert('Please enter a valid CNP (13 digits) and starts with 1,2,5 or 6.');
        return;
    }

    // If all validations pass, you can proceed with form submission or other actions
    alert('Form submitted successfully!');
}

function validateEmail(email) {
    // Use a regular expression to validate the email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
    // Use a regular expression to validate a 10-digit phone number
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function validateCNP(cnp) {
    // Use a regular expression to validate a 13-digit CNP starting with 1, 2, 5, or 6
    var cnpRegex = /^[1256]\d{12}$/;
    return cnpRegex.test(cnp);
}


