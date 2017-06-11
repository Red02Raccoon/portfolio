var imgParent = $(".career__pic"),
	close = $(".popup__img");

	imgParent.on("click", function() {
		var zoomImg = $(".popup__img");
		$(".popup").show(800);

		var imgUrl = $(this).find(".career__pic-item").attr("src");
		zoomImg.attr('src', imgUrl);
	});

	close.on("click", function(e) {
		e.preventDefault();
		$(".popup").hide(800);

	});

