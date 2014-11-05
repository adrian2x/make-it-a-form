var dragging = false;

    $(document).ready(function() {

        // initialize sortable
        (function initSortable() {
            $("#sortable").sortable({
                axis: "y",
                delay: 150,
                cursor: "move",
                opacity: 0.6,
                placeholder: 'ui-state-sorting',
                update: function(event, ui) {
                    if (dragging) {
                        markup = ui.item.data('markup');
                        $el = initializeComponent($(markup)).css("opacity", 0);
                        $el.insertBefore(ui.item).hide().animate({
                            height: 'toggle',
                            opacity: 1
                        }, 250);
                        ui.item.remove();
                        $('#sortable').find('.empty').hide();
                    }
                }
            });
        })();

        $("ul#sortable").disableSelection();

        $(".sidebar>ul li").draggable({
            helper: "clone",
            revert: "invalid",
            connectToSortable: "ul#sortable",
            start: function() {
                dragging = true;
            },
            stop: function() {
                dragging = false;
            }
        });

        // add tooltips
        $(".has-tooltip").tooltip({
            delay: {
                show: 600,
                hide: 100
            },
        });

        $("#generateIt").click(function() {
            var elements = [];
            $("#sortable").find(".component").each(function(el, val) {
                var head = $('<li class="component">');
                $(val).detach().children().each(function(key, value) {
                    value = $(value);
                    if (value.hasClass('editable')) {
                        var some = value.children('input');
                        var $helper = $('<h5>').text(some.val());

                        if (some.hasClass('help-block'))
                            $helper = $('<h6 class="help-block">').text(some.val());

                        if ($helper.text().length)
                            head.append($helper);
                    } else if (value.hasClass('form-group') || value.hasClass('input-group')) {
                        head.append(__init(value));
                    }
                });
                elements.push(head);
            });

            $('body').css('padding-top', '100px').children().remove().end().append($('<ul id="result" class="col-sm-6">').append(elements));
        });

    });