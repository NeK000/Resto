// Helper to validate allowed characters: digits, comma, dot
function isValidInput(val) {
    return /^\d*[.,]?\d*$/.test(val.replace(/\s+/g, ''));
}

// Add input event listeners for validation and error messages
const inputIds = ['euro', 'bgn', 'price'];
const errorMessages = {
    euro: 'Моля, въведете валидно число!',
    bgn: 'Моля, въведете валидно число!',
    price: 'Моля, въведете валидно число!'
};
const calcBtn = document.getElementById('calcBtn');

function updateButtonAndErrors() {
    let allValid = true;
    inputIds.forEach(function(id) {
        const input = document.getElementById(id);
        const errorDiv = document.getElementById(id + '-error');
        if (!isValidInput(input.value)) {
            input.classList.add('invalid');
            if (errorDiv) errorDiv.textContent = errorMessages[id];
            allValid = false;
        } else {
            input.classList.remove('invalid');
            if (errorDiv) errorDiv.textContent = '';
        }
    });
    if (calcBtn) calcBtn.disabled = !allValid;
}

inputIds.forEach(function(id) {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('input', updateButtonAndErrors);
    }
});
// Initial check on page load
updateButtonAndErrors();
// Euro to BGN fixed rate
const EURO_TO_BGN = 1.95583;

function calculate() {
    const euroInput = document.getElementById('euro');
    const bgnInput = document.getElementById('bgn');
    const priceInput = document.getElementById('price');
    const resultDiv = document.getElementById('result');

    // Sanitize and normalize input: allow only digits, one comma or dot, and parse as float
    function normalize(val) {
        if (!val) return 0;
        // Remove spaces
        val = val.replace(/\s+/g, '');
        // Replace comma with dot
        val = val.replace(',', '.');
        // Remove invalid characters (anything except digits and dot)
        val = val.replace(/[^0-9.]/g, '');
        // Only keep the first dot if multiple
        const parts = val.split('.');
        if (parts.length > 2) {
            val = parts[0] + '.' + parts.slice(1).join('');
        }
        return parseFloat(val) || 0;
    }
    // Button is disabled if invalid, so no need to check again

    let euro = normalize(euroInput.value);
    let bgn = normalize(bgnInput.value);
    let price = normalize(priceInput.value);
    let euroFromBGN = 0;
    if (bgn > 0 ) {
        euroFromBGN = bgn / EURO_TO_BGN;
    }
    const totalEuro = euroFromBGN + euro;
    const change = totalEuro - price;

    // Build clearer result markup with classes that match CSS
    resultDiv.innerHTML = `
      <div class="result-row">
        <div class="result-label"><strong>Общо дадена сума:</strong></div>
        <div class="result-value"><span class="result-number">${totalEuro.toFixed(2)}</span><span class="result-unit">€</span></div>
      </div>
      <div class="result-row">
        <div class="result-label"><strong>Ресто:</strong></div>
        <div class="result-value"><span class="result-number">${change.toFixed(2)}</span><span class="result-unit">€</span></div>
      </div>
    `;
}
