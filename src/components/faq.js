import { faqData } from "../data/faqData.js";

export function faq() {
    let itemsHTML = '';

    for (let i = 0; i < faqData.length; i++) {
        const faq = faqData[i];
        itemsHTML += `
            <div class="accordion-item ${i ? '' : 'expand'}">
                <button class="accordion-title">
                    ${faq.question}
                    <i class="fa fa-angle-down"></i>
                </button>
                <p class="accordion-content">${faq.answer}</p>
            </div>`;
    }

    return `
        <section class="container bg-grey">
            <div class="row">
                <div class="col-12 col-lg-5 section-texts">
                    <div class="section-tag">FAQ's</div>
                    <h2 class="section-title">Frequently Best Asked Question?</h2>
                    <p class="section-desc">That's why we've compiled a list of frequently asked questions to help make the process as smooth as possible for you.</p>
                    <a href="#">Have any questions</a>
                </div>
                <div class="col-12 col-lg-6 m-lg-1 accordion">${itemsHTML}</div>
            </div>
        </section>`;
}
    const accordionItemsDOM = document.querySelectorAll('.accordion-item');
    let activeIndex = 0;

    for (let i = 0; i < accordionItemsDOM.length; i++) {
        const itemDOM = accordionItemsDOM[i];
        itemDOM
            .querySelector('.accordion-title')
            .addEventListener('click', () => {
                if (activeIndex === i) {
                    itemDOM.classList.toggle('expand');
                } else {
                    accordionItemsDOM[activeIndex].classList.remove('expand');
                    activeIndex = i;
                    itemDOM.classList.add('expand');
                }
            });
}
