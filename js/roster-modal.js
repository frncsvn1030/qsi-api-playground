// ------------- TEMPORARY SCRIPT ONLY -------------
// (Just to show how the roster field should behave) 


// Adult sizes
const adultSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];
// Youth sizes
const youthSizes = ['YS', 'YM', 'YL', 'YXL'];

// Function to create button pills
function createPills(containerId, sizes) {
    const container = document.getElementById(containerId);
    sizes.forEach(size => {
        const pill = document.createElement('button');
        pill.className = 'pill';
        pill.textContent = size;
        pill.onclick = () => togglePill(pill);
        container.appendChild(pill);
    });
}

// Function to toggle pill selection
function togglePill(pill) {
    pill.classList.toggle('active');
}

// Function to update and close modal
function updateAndClose() {
    const selectedPills = document.querySelectorAll('.pill.active');
    let selectedSizes = Array.from(selectedPills).map(pill => pill.textContent);
    // Add custom sizes if entered
    const customInputs = document.querySelectorAll('.size-section input[type="text"]');
    const customAdult = customInputs[0] ? customInputs[0].value.trim() : '';
    if (customAdult) {
        selectedSizes.push(customAdult);
    }
    const customYouth = customInputs[1] ? customInputs[1].value.trim() : '';
    if (customYouth) {
        selectedSizes.push(customYouth);
    }
    const display = document.getElementById('rosterDisplay');
    const trigger = display.parentElement;
    if (selectedSizes.length > 0) {
        display.textContent = selectedSizes.join(', ');
        display.classList.remove('roster-placeholder');
        trigger.classList.add('has-value');
    } else {
        display.textContent = 'Select Rosters';
        display.classList.add('roster-placeholder');
        trigger.classList.remove('has-value');
    }
    // Close the modal
    UIkit.modal('#roster-modal').hide();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createPills('adultPills', adultSizes);
    createPills('youthPills', youthSizes);
});