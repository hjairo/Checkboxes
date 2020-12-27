/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Checkboxes - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

const checkboxes = document.querySelectorAll('.options input');


/**
 * Event listener for checkboxes
 */
document.querySelector('.options').addEventListener('change', (e) => {

  const clicked = e.target;

  const clickedType = clicked.getAttribute('data-type');

  for (let i = 0; i < checkboxes.length; i++) {

    const checkboxType =  checkboxes[i].getAttribute('data-type');

    if (clickedType === checkboxType && clicked !== checkboxes[i]) {

        if (clicked.checked) {

          checkboxes[i].disabled = true;
        } else {
          checkboxes[i].disabled = false;
        }
    }
  };
});