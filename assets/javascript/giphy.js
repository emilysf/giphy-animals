var shows = ["Friends", "Full House", "Seinfeld", "Breaking Bad", "Grey's Anatomy", "South Park", "How I Met Your Mother", "Modern Family"];

//this section calls the info from giphy and displays the gifs
function displayInfo(){

	var show = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response){

		console.log(response)
		var results = response.data;

		for(var i = 0; i < 10; i++){

			if (results[i].rating == "r" || results[i].rating == "pg-13"){

			}
			else {
				var showDiv = $('<div class="gifView">');
				var p = $('<p>').text('Rating: ' + results[i].rating);

				var showImage = $('<img>');
				showImage.attr('src', results[i].images.fixed_height_still.url);
				showImage.attr('data-still', results[i].images.fixed_height_still.url);
                showImage.attr('data-animate', results[i].images.fixed_height.url);
                showImage.attr('data-state', 'still');
                showImage.addClass('showGif');

				showDiv.append(p)
				showDiv.append(showImage)
				showDiv.prepend(p)
				showDiv.prepend(showImage)

				$('#gifs').prepend(showDiv);
			}
		}
	});
}

//this section makes it possible to pause and play gifs
$('#gifs').on('click', '.showGif', function(){

	var state = $(this).attr('data-state');

	if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

//this section displays the buttons from show array
function renderButtons(){

	$('#viewButtons').empty();

	for(var i = 0; i < shows.length; i++){

		var s = $('<button>')
		s.addClass('btn btn-primary');
		s.addClass('show');
		s.attr('data-name', shows[i]);
		s.text(shows[i]);
		$('#viewButtons').append(s);

	}
}

//this section makes it possible to add a new button
$('#add').on('click', function(){

	var show = $('#input-show').val().trim();
	shows.push(show);
	renderButtons();
	return false;

})

$(document).on('click', '.show', displayInfo);

renderButtons();