
export function show() {

    $('#app').empty();
    
    let htmlPage =
    
        `<div>

            <video autoplay muted loop id="myVideo">
                <source src="../resources/dogsrunning.mp4" type="video/mp4">
            </video >

            <div class="content text-center" id="navbar-example2">
            <a href="#scrollspyHeading1">
            <button type="button" class="btn btn-outline-light my-4">Check out your favorite breeds</button>
            <a>
            </br>
            <a href="#scrollspyHeading1">
            <i class="fa-solid fa-arrow-down text-white mb-5" id="arrowCover"></i>
            </a>
            </div>

            </div>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true">

            <h1 class="text-center my-5" id="scrollspyHeading1">Breeds</h1>

            <div class="container-xl py-5" >

            <div class="d-inline-flex justify-content-around flex-wrap" id="cardSection"></div>

            </div>

            </div> 

            <div class="d-flex justify-content-center mb-3" id="loadIcon" >

            <div class="spinner-grow spinner-grow-sm mx-2" role="status"></div>
            <div class="spinner-grow spinner-grow-sm mx-2" role="status"></div>
            <div class="spinner-grow spinner-grow-sm mx-2" role="status"></div>

            </div>`;


    $('#app').append(htmlPage);

}

export function mountList(data) {
    data.forEach(dog => {

        console.log(dog);

        let htmlPage =
            `<div class="flip-card my-4">
            <div class="flip-card-inner">

                <div class="card flip-card-front text-center" style="width: 20vw; height: 17vw">
                    <img src=" ${dog.image.url} " class="card-img" alt="dogImage">
                    <div class="card-img-overlay d-flex justify-content-center align-items-end">
                        <h5 class="card-text bg-secondary text-white bg-opacity-75 p-2"> ${dog.name}</h5>
                    </div>
                </div>

                <div class="flip-card-back" >
                    <p> ${dog.bred_for} </p>
                    <p> ${dog.breed_group} </p>
                    <p> ${dog.height.metric} </p>
                    <p> ${dog.weight.metric} </p>
                    <p> ${dog.life_span} </p>
                    <p> ${dog.origin} </p>
                    <p> ${dog.temperament} </p>



                </div>

            <div>
        </div>`;

        $("#cardSection").append(htmlPage);

    }); 
}