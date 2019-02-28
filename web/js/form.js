'use strict';

console.log('try js');


fetch('/index.php?r=site/js')
        .then(function (response) {
            console.log(response.status);
            response.json().then(
                (data) => {
                    console.log(data);
                    const select = document.querySelector('.select-form');
                    select.options[select.options.length] = new Option(data.js, Object.keys(data)[0]);
                }
            )
        })
        .catch(alert);









