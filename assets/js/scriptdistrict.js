// script.js

document.addEventListener('DOMContentLoaded', function() {
    const districtSelect = document.getElementById('districtSelect');
    const hospitalSelect = document.getElementById('hospitalSelect');

    districtSelect.addEventListener('change', () => {
        const selectedDistrict = districtSelect.value;
        Array.from(hospitalSelect.options).forEach(option => {
            if (option.getAttribute('data-district') === selectedDistrict || option.getAttribute('data-district') === null) {
                option.style.display = 'block';
            } else {
                option.style.display = 'none';
            }
        });
    });

    // Trigger the change event to initially show hospitals for the default district.
    districtSelect.dispatchEvent(new Event('change'));
});
