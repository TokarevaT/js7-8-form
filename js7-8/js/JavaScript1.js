document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
})

$(function () {
    var form = '<div class="forms"></div>';

    $('body').append(form);

    var names = [
        { name: 'First Name', tooltip: "Please provide your firstname" },
        { name: 'Last Name', tooltip: "Please provide also your lastname" },
        { name: 'Address', tooltip: "Your home or work address" },
    ];

    $.each(names, function (index, value) {
        var div = '<div class="row">' +
                         '<div class="cols">' +
                             '<label class="name">' + value.name + '</label>' +
                             '<div class="text"><input type="text" tooltip="' + value.tooltip + '"/></div>' +
                          '</div>' +
                     '</div>';
        $('.forms').append(div);
    });


    $("input").hover(function () {
        $("span").remove();
        var tooltip = $(this).attr("tooltip");
        $(this).after($("<span> " + tooltip + "</span>"));
    }, function () {
        $("span").remove();
    });


    var button = ' <div>' +
        '<button>Show help</button>' +
        '</div>';
    $('.forms').after(button);

    $("button").click(function () {
        $('span').remove();
        $("input").each(function (index, value) {
            var tooltip = $(value).attr("tooltip");
            $(value).after($("<span> " + tooltip + "</span>"));
        });
    })
});


//$(function () {
//    $("button")
//      .text("Show help")
//      .click(function () {
//          tooltip("open");
//      })
//      .insertAfter("forms");
//})




