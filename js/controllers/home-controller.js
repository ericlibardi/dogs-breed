import { show, mountList } from '../views/home-view.js';
import { getAnimals } from '../services/animal-service.js';

let pageLoad = 0;
let throttleTimer;

let animalList = [];

const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};

const handleInfiniteScroll = () => {
    throttle(() => {
        const endOfPage = window.innerHeight + window.pageYOffset + 80 >= document.body.offsetHeight;

        if (endOfPage) {
            pageLoad++;

            $(".spinner-grow").removeClass("invisible");

            loadCards(pageLoad);
        }
    }, 1000)
};


let loadCards = () => {
    getAnimals(function (data) {

        if (data === "") {
            window.removeEventListener("scroll", handleInfiniteScroll);
            return;
        }

        animalList.push(...data);

        console.log(animalList);
        mountList(data);

        $(".spinner-grow").addClass("invisible");

    }, pageLoad);
}

export function init() {

    show();

    loadCards();

    window.addEventListener("scroll", handleInfiniteScroll);
}