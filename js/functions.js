function removeElement(element) {
    $(element).animate({ height: 0, opacity: 0}, 200, function() {
        $(this).remove();
        var $sortable = $('#sortable');
        if($sortable.children().length < 2) {
          $sortable.find('.empty').fadeIn(300);
        }
    });
};

function addToDesign(e) {
    var markup = $(e).data("markup");
    $e = initializeComponent($(markup));
    $e.appendTo($('#sortable')).show(300);
    $("#answer-question").css("opacity", "1");
};

function makeSpinedit($element) {
  return $element.find(".numeric-spinner").spinedit().parent();
};

function makeDatetimepicker($element) {
  return $element.find(".datetimepicker").datetimepicker().parent();
};

function makeDatepicker($element) {
  return $element.find(".datepicker").datetimepicker({ pickTime: false }).parent();
};

function makeTimepicker($element) {
  return $element.find(".timepicker").datetimepicker({ pickDate: false }).parent();
};

  function initializeComponent($e) {

    $e.css("margin-bottom", "4px !important");

    var modalTarget = $e.data("modal");
    $e = __init($e);

    var controls = '<div class="controls"><i class="fa fa-times" onclick="removeElement(this.parentNode.parentNode)"></i></div>';

    var fieldName = '<div class="editable"><input type="text" class="control-label" placeholder="Question"><i class="fa fa-times" onclick="removeElement(this.parentNode)"></i></div>';

    var helperText = '<div class="editable"><input class="help-block" type="text" placeholder="Hint"><i class="fa fa-times" onclick="removeElement(this.parentNode)"></i></div>';

    var wrap = '<li class="component"></li>';

    return $e.wrap(wrap).parent().prepend(fieldName).prepend(controls).append(helperText);
  };

function __init($e) {
    var initializeAs = $e.data("initialize");
    if(initializeAs)
      $e = window[initializeAs]($e);
    return $e;
}