function removeElement(element) {
    $(element).animate({ height: 0, opacity: 0}, 200, function() {
        $(this).remove();
    });
};

    
function addToDesign(e) {
    var markup = $(e).data("markup");
    $e = initializeComponent($(markup));
    $e.click(function() {
      $panel = $(".properties-panel");
      if(!$panel.hasClass("properties-panel-visible")) {
        $(".properties-panel").toggleClass("properties-panel-visible");
        $(this).css("background-color", "aliceblue");
      }
    });
    $E.appendTo($('#sortable')).show("slow");
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

// initializes the dragged element as a component with controls
  function initializeComponent($e) {

    $e.css("margin-bottom", "4px !important");

    var initializeAs = $e.data("initialize");
    var modalTarget = $e.data("modal");

    if(initializeAs) {
      $e = window[initializeAs]($e);
    }

    var controls = '<div class="controls"><span class="glyphicon glyphicon-cog"></span><span class="glyphicon glyphicon-remove" onclick="removeElement(this.parentNode.parentNode)"></span></div>';

    var fieldName = '<div class="editable"><input type="text" class="control-label" placeholder="Question"><span class="glyphicon glyphicon-remove" onclick="removeElement(this.parentNode)"></span></div>';

    var helperText = '<div class="editable"><input class="help-block" type="text" placeholder="Hint"><span class="glyphicon glyphicon-remove" onclick="removeElement(this.parentNode)"></span></div>';

    var wrap = '<li class="component"></li>';

    return $e.wrap(wrap).parent().prepend(fieldName).prepend(controls).append(helperText);
  };