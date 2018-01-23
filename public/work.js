$(function () {
    let print = $('#hello')
    let info1 = $('#one')
    let info2 = $('#two')
    let info3 = $('#three')
    let info4 = $('#four')

    info1.click(function () {
        $.get('/r1',function (data) {
            let pq = data;

            print.empty();
            print.append("<p>"+pq+"</p>")

        })
    })


})