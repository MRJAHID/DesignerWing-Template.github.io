console.clear();
import ImageCompare from "image-compare-viewer";

document.addEventListener("DOMContentLoaded", function () {
    var before_after = document.querySelectorAll('.before_after');

    // loop through all before and after modules
    for (var i = 0; i < before_after.length; i++) {
        var wrapper = before_after[i];
        var children = wrapper.children;

        // loop through child elements
        for (var e = 0; e < children.length; e++) {
            var child = children[e];

            // add event listener for mouse over
            if (child.classList.contains('img')) {
                child.addEventListener('mouseover', function () {
                    toggleFocus(this, true)
                });
                child.addEventListener('mouseout', function () {
                    toggleFocus(this, false)
                });
            }
        }
    }

    // var toggle = true for add, false for remove
    function toggleFocus(element, toggle) {
        var next = element.nextElementSibling;
        var prev = element.previousElementSibling;

        // add focus class to hovered element
        element.classList.toggle('focus', toggle);

        // add unfocus class to adjacent element
        if (next && next.classList.contains('img')) {
            next.classList.toggle('unfocus', toggle);
        }
        if (prev && prev.classList.contains('img')) {
            prev.classList.toggle('unfocus', toggle);
        }
    }
});


// Cliping path image
const clipImageContainer = document.querySelector('.clipimage_container');
const clipImageSlider = document.querySelector('.clipimg_slider');
clipImageSlider.addEventListener('input', (e) => {
    clipImageContainer.style.setProperty('--position', `${e.target.value}%`);
})

