$(function() {
    /* CustomeJS */
    'use strict';

    /**************** Password Toggle **************/
    $(document).ready(function() {
        $("#Password").click(function() {
            $(this).toggleClass("la-eye la-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    });

    /**************** Custom Scroll **************/
    (function($) {
        $(document).ready(function() {
            $(".custom-scroll").mCustomScrollbar();
            $("body").mCustomScrollbar({
                scrollInertia: 1500
            });
            $('.dataTables_scrollBody').mCustomScrollbar({
                scrollInertia: 500
            });
        });
    })(jQuery);

    /**************** Start Theme Setting **************/
    ///////// Theme color choose function
    function ThemeSelection(theme_selection) {
        $("body")
            .removeClass("theme-light theme-dark")
            .addClass(theme_selection);
    }
    $(document).ready(function() {
        ///////// Open and Close button
        $("#settings-trigger").click(function() {
            $(".theme-setting-wrapper").toggleClass("open-theme-setting-wrapper");
            $("i", this).toggleClass("la la-cog la la-close");
        });

        ///////// Theme color choose
        $(".theme-radio input").click(function(e) {
            var theme_selection = $(this).val();
            ThemeSelection(theme_selection);
        });
    });
    /**************** End Theme Setting **************/

    /**************** Start Responsive Menu **************/
    $(document).ready(function() {
        $("#add-menu").click(function() {
            $("body").addClass("open-sidebar-menu");
            $(".br-sideleft").addClass("open-sidebar");
            $("body").mCustomScrollbar("disable");
        });
        $("#remove-menu").click(function() {
            $("body").removeClass("open-sidebar-menu");
            $(".br-sideleft").removeClass("open-sidebar");
            $("body").mCustomScrollbar("update");
        });
        $(".searchbar-toggle").click(function() {
            $("form.searchbar").toggleClass("open-searchbar");
            $(this).toggleClass("la la-search la la-close");
        });
    });
    /**************** End Responsive Menu **************/

    $(document).ready(function() {
        /**************** Tooltip **************/
        $('[data-toggle="tooltip"]').tooltip();

        /**************** Dropdown **************/
        $(".dropdown-toggle").dropdown();
    });

    /**************** Select Picker **************/
    $('select').selectpicker();

    /**************** Data Table **************/
    $('#datatable1').DataTable({
        paging: false,
        searching: false,
        info: false,
        scrollY: "400px",
        scrollCollapse: true,
        responsive: true
    });
    $('#datatable2 thead tr').clone(true).appendTo('#datatable2 thead');
    $('#datatable2 thead tr:eq(1) th:eq(0), #datatable2 thead tr:eq(1) th:eq(1)').each(function(i) {
        var title = $(this).text();
        $("#datatable2 thead tr:eq(1) th:eq(2)").text("");
        $(this).html('<input type="text" class="form-control bg-white" placeholder="Search ' + title + '" />');
        $('input', this).on('keyup change', function() {
            if (table.column(i).search() !== this.value) {
                table
                    .column(i)
                    .search(this.value)
                    .draw();
            }
        });
    });

    var table = $('#datatable2').DataTable({
        orderCellsTop: true,
        fixedHeader: true,
        paging: false,
        searching: false,
        info: false,
        scrollY: "340px",
        scrollCollapse: true,
        responsive: true
    });

    /**************** Tabs Process **************/
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href = $(e.target).attr('href');
        var $curr = $(".ms-process  a[href='" + href + "']").parent();

        $('.ms-process li').removeClass();

        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });

    /**************** Range Slider **************/
    $(document).ready(function() {
        $('.input-range').each(function() {
            var value = $(this).attr('data-slider-value');
            var separator = value.indexOf(',');
            if (separator !== -1) {
                value = value.split(',');
                value.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                value = parseFloat(value);
            }
            $(this).slider({
                formatter: function(value) {
                    return '$' + value;
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: value,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip')
            });
        });
    });



});