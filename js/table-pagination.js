const rowsPerPage = 10;
const rows = document.querySelectorAll('.table tbody tr');
const totalPages = Math.ceil(rows.length / rowsPerPage);
let currentPage = 1;

function showPage(page) {
    rows.forEach((row, index) => {
        row.style.display = (index >= (page - 1) * rowsPerPage && index < page * rowsPerPage) ? '' : 'none';
    });
    document.getElementById('page-info').textContent = `${page} / ${totalPages}`;
    document.getElementById('prev-btn').disabled = page === 1;
    document.getElementById('next-btn').disabled = page === totalPages;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

// Initial show
showPage(currentPage);
