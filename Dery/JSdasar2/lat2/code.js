$('#cari').on('click',function (){

        $.ajax({
        url: 'http://www.omdbapi.com/?apikey=8daec2df&s=' + $('#keyword').val(),

        success: results => {
            const film= results.Search;
            let card = '';
            film.forEach(f => {
                card += tampil(f);
            });
            $('#isi-film').html(card);

            $('.detail-button').on('click', function(){
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=8daec2df&i=' + $(this).data('id'),
                    success: f => {
                        console.log(f);
                        const filmDetail = tampilDetail(f); 
                    
                    $('.modal-body').html(filmDetail);

                    },
                    eror: (e) => {
                        console.log(e.responseText); }
                });
            });



        },
        eror: (e) => {
            console.log(e.responseText);
        }
    });
});




function tampil (f){
    return  `           
    <div class="col-md-4 my-3">
        <div class="card shadow p-2 mb-5 bg-body rounded">
        <img src="${f.Poster}" class="card-img-top">
            <div class="card-body">
                <div class="judul">
                    <h5 class="card-title">${f.Title}</h5>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">${f.Year}</h6>
                <a href="#" class="btn btn-primary detail-button" data-bs-toggle="modal" data-bs-target="#detail" data-id="${f.imdbID}">Detail</a>
            </div>
        </div>
    </div>`
}

function tampilDetail (f){
    return `            
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${f.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${f.Title} [${f.Year}]</h4></li>
                <li class="list-group-item"><strong>Imdb rating : </strong>${f.imdbRating}</li>
                <li class="list-group-item"><strong>Director : </strong>${f.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${f.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${f.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong>${f.Plot}</li>
            </ul>
        </div>      
    </div>
    </div>`
}