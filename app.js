// select element 
const sidebarBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// Event handler
sidebarBtn.addEventListener('click', function () {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // };

    // just one line code to do toggle
    sidebar.classList.toggle('show-sidebar');
});

// close btn event 
closeBtn.addEventListener('click', function () {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // } else {
    //     sidebar.classList.add('show-sidebar');
    // };
    // one line code
    sidebar.classList.toggle('show-sidebar');
})