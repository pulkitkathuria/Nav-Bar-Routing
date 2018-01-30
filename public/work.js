$(function () {
    var print = $('#hello')
    var info1 = $('#one')
    var info2 = $('#two')
    var info3 = $('#three')
    var info4 = $('#four')

    info1.click(function () {
        $.get('/r1',function (data) {
            var pq = data;

            print.empty();
            print.append("<p>"+pq+"</p>")

        })
    })


})