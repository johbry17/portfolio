/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });

    // added to the original template
    // automatically update the year in the footer
    const yearElement = document.getElementById("copyright-year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // added to the original template
    // add event listener to the form submit button
    // to send a copy of the email to the user, if box is checked
    document.getElementById('sendCopy').addEventListener('change', function () {
        const form = document.getElementById('contactForm');
        let copyField = document.getElementById('sendCopyField');

        if (this.checked) {
            if (!copyField) {
                copyField = document.createElement('input');
                copyField.type = 'hidden';
                copyField.name = '_cc';
                copyField.id = 'sendCopyField';
                copyField.value = document.getElementById('email').value;
                form.appendChild(copyField);
            }
        } else if (copyField) {
            form.removeChild(copyField);
        }
    });
})
