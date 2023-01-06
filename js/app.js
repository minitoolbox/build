(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    };
})(jQuery);
//alert($.getUrlParam('page'))

$.getJSON("data/cases.json", function (data) {
    cases = data;

    for (i in cases) {
        $("#case-list").after(`
            <div class="case">
				<a href="${cases[i].url}">
					<img class="case-img" src="${cases[i].mdimg}">
				</a>
				<div class="case-name">${cases[i].name}</div>
				<div class="author">
					<img class="author-head" src="http://q2.qlogo.cn/headimg_dl?dst_uin=${cases[i].qq}&spec=100">
					<div class="author-info">
						<div class="author-name">${cases[i].authorName}</div>
						<div class="author-uid">${cases[i].authorUid}</div>
					</div>
				</div>
			</div>`);
    }
});
