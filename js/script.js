"use script"
window.addEventListener("load", window)
function windowLoad() {
    const htmlBlock = localStorage.getItem('user-theme');
    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    }
    window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {
        !saveUserTheme ? changeTheme() : null;
    })
    const themeButton = document.querySelector('.page_theme');
    const resetButton = document.querySelector('page_reset');
    if (themeButton) {
        themeButton.addEventListener("click", function (e) {
            resetButton.classList.add('active');
            changeTheme(true);
        });
    }
    if (resetButton) {
        resetButton.addEventListener("click", function (e) {
            resetButton.classList.remove('active');
            localStorage.setItem('user-theme', '');
        });
    }
}