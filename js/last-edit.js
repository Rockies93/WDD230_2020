document.getElementById('last-edit').textContent = document.lastModified;

const options = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', options)

