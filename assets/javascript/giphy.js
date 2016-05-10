var shows = ["Friends", "Full House", "Seinfeld", "Game of Thrones", "Breaking Bad", "Grey's Anatomy", "South Park", "How I Met Your Mother", "Modern Family", "24", "SNL"];

function createButtons(){
	$('#showButtons').empty();

	for(var i = 0; i < shows.length; i++){

		var s = $('<button>');

		s.addClass('show');
		s.attr('data-name', shows[i]);
		s.text(shows[i]);
		$('#showButtons').append(s);

	}
}

$('add').on('click', function(){
	var show = $('#show-input').val().trim();

	shows.push(show);

	createButtons();

	return false;
})

//$(document).on('click', '.show', displayShowInfo);

createButtons();