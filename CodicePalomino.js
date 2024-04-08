const availableSizes = ['40', '41', '44'];
  
function checkAvailability(size) {
  if (availableSizes.includes(size)) {
    document.getElementById('availabilityMessage').innerText = `Taglia ${size} disponibile.`;
  } else {
    document.getElementById('availabilityMessage').innerText = `Taglia ${size} esaurita.`;
  }
}