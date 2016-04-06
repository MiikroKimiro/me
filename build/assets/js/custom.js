$(document).ready(function() {

    // Vertical centered modals ///////
    var modalVerticalCenterClass = ".modal";
    function centerModals($element) {
        var $modals;
        if ($element.length) {
            $modals = $element;
        } else {
            $modals = $(modalVerticalCenterClass + ':visible');
        }
        $modals.each( function(i) {
            var $clone = $(this).clone().css('display', 'block').appendTo('body');
            var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
            top = top > 0 ? top : 0;
            $clone.remove();
            $(this).find('.modal-content').css("margin-top", top);
        });
    }
    $(modalVerticalCenterClass).on('show.bs.modal', function(e) {
        centerModals($(this));
    });
    $(window).on('resize', centerModals);
    // Vertical centered modals END //////

    // Products modals show //////////////
    $('#iconOne').on('click',function (event) {
        $('#oneModal').modal({
            show: true,
            backdrop: true
        })
    })
    $('#iconAdalia').on('click',function (event) {
        $('#adaliaModal').modal({
            show: true,
            backdrop: true
        })
    })
    $('#iconDamia').on('click',function (event) {
        $('#damiaModal').modal('show')
    })
    $('#iconPolita').on('click',function (event) {
        $('#politaModal').modal('show')
    })
    // Products modals show END//////////////

    $('.carousel').carousel()


})