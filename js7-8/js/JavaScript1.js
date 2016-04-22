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
        var tooltip = $(this).attr("tooltip");
      $(this).after($("<span> " + tooltip + "</span>"));
  }, function () {
      $(this).find("span:last").remove();
  });
});


var button = '<button></button>';
$('body').append(button);
$(function () {
    $("<button>")
      .text("Show help")
      .click(function () {
          tooltip("open");
      })
      .insertAfter("forms");
})




