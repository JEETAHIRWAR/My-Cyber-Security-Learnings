document.addEventListener("DOMContentLoaded", function () {

    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
        const mainSection = document.querySelector(".mainSection");
        const listgridView = document.querySelector(".listgridView");
        const checkbox = document.getElementById("checkbox");
        const search = document.querySelector(".search-input");
        const logo = document.querySelectorAll(".logo, name, .fa-hat-cowboy");
        const card = document.querySelectorAll(".card");
        const title = document.querySelectorAll(".title h3");
        const para = document.querySelectorAll(".para");
        const ul = document.querySelectorAll(".list ul li");
        const h4 = document.querySelectorAll("h4");
        const aCard = document.querySelectorAll(".aCard");
        const h2 = document.querySelectorAll("h2");
        const smallPara = document.querySelectorAll(".smallPara");
        const faRoad = document.querySelectorAll(".fa-road");
        const mainHeading = document.querySelectorAll(".mainHeading, h1, span");

        mainHeading.forEach(element => {
            element.classList.toggle("dark");
        });


        logo.forEach(logo => {
            logo.classList.toggle("dark");
        })


        faRoad.forEach(faRoad => {
            faRoad.classList.toggle("dark");
        })


        smallPara.forEach(smallPara => {
            smallPara.classList.toggle("dark");
        })


        h2.forEach(h2 => {
            h2.classList.toggle("dark");
        })


        aCard.forEach(aCard => {
            aCard.classList.toggle("dark");
        })


        h4.forEach(h4 => {
            h4.classList.toggle("dark");
        })

        ul.forEach(ul => {
            ul.classList.toggle("dark");
        })


        para.forEach(para => {
            para.classList.toggle("dark");
        })


        title.forEach(title => {
            title.classList.toggle("dark");
        })


        mainSection.classList.toggle("dark");
        listgridView.classList.toggle("dark");
        checkbox.classList.toggle("dark");
        search.classList.toggle("dark");
        document.body.classList.toggle("dark");

        for (let i = 0; i < card.length; i++) {
            card[i].classList.toggle("dark");
        }

    });



    const gridView = document.getElementById("gridView");
    gridView.addEventListener("click", () => {

        const squre = document.querySelector(".squre");
        squre.style.transform = "translateZ(40px)";


        const card = document.querySelectorAll(".card");
        const cards = document.querySelector(".cards");
        card.forEach(card => {
            card.classList.remove("cardD");
            cards.classList.remove("cardsS");
        });

        const statusElements = document.querySelectorAll(".status");
        const progressBarElements = document.querySelectorAll(".progressBar");
        const buttonElements = document.querySelectorAll(".button");

        statusElements.forEach(statusElement => {
            statusElement.classList.remove("statusS");
        });

        progressBarElements.forEach(progressBarElement => {
            progressBarElement.classList.remove("progressBarR");
        });

        buttonElements.forEach(buttonElement => {
            buttonElement.classList.remove("buttonN");
        });


    });


    const listView = document.getElementById("listView");
    listView.addEventListener("click", () => {

        const squre = document.querySelector(".squre");
        squre.style.transform = "translateX(-50px)";

        const card = document.querySelectorAll(".card");
        const cards = document.querySelector(".cards");
        card.forEach(card => {
            card.classList.toggle("cardD");
            cards.classList.toggle("cardsS");
            // status.classList.toggle("statusS");

        });

        const statusElements = document.querySelectorAll(".status");
        const progressBarElements = document.querySelectorAll(".progressBar");
        const buttonElements = document.querySelectorAll(".button");

        statusElements.forEach(statusElement => {
            statusElement.classList.toggle("statusS");
        });

        progressBarElements.forEach(progressBarElement => {
            progressBarElement.classList.toggle("progressBarR");
        });

        buttonElements.forEach(buttonElement => {
            buttonElement.classList.toggle("buttonN");
        });
    });



    // const buttons = document.querySelectorAll('.button[data-show]');
    // buttons.forEach(button => {
    //     button.addEventListener('click', function () {
    //         const target = button.getAttribute('data-show');
    //         // const target = this.getAttribute('data-show');
    //         const hide = this.getAttribute('data-hide');
    //         const container = document.querySelector(hide);
    //         fetch(`/${target}`)
    //             .then(response => response.text())
    //             .then(data => {
    //                 container.innerHTML = data;
    //                 container.style.display = 'block';
    //             })
    //             .catch(error => console.error('Error fetching content:', error));
    //     });
    // });







    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const progressBar = card.querySelector('.progress');
        const status = card.querySelector('.status p');
        const button = card.querySelector('.button');

        // Simulate progress completion (for demonstration purposes)
        const progress = Math.floor(Math.random() * 101); // Random progress between 0 and 100
        progressBar.style.width = `${progress}%`;

        // Update status and button text based on progress
        if (progress === 0) {
            status.textContent = 'Not Started';
            button.textContent = 'Begin';
        } else if (progress < 100) {
            status.innerHTML = `In Progress  <span>${progress}%</span>`;
            button.textContent = 'Resume';
        } else {
            status.textContent = 'Completed';
            button.textContent = 'Completed';
        }
    });
});


