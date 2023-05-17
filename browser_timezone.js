define(['jquery'], ($) => {
    return {
        init: function(args) {
            var timestampElement = $("."+ args.className + '[timestamp]');
            timestampElement.each(function () {
                        var offset = new Date().getTimezoneOffset();
                        var epochTime = new Date(1970, 0, 1); // Epoch
                        if(offset < 0) {
                            offset = offset * 60 * (-1);
                        }
                        else {
                            offset = offset * 60;
                        }
                        var real_time = parseInt($(this).attr( "timestamp" )) + parseInt(offset);
                        epochTime.setSeconds(real_time);
                        var weekdayString = epochTime.toLocaleString([], { weekday: 'long'});
                        var dayString = epochTime.toLocaleString([], { day: 'numeric'});
                        var monthString = epochTime.toLocaleString([], { month: 'long'});
                        var yearString = epochTime.toLocaleString([], { year: 'numeric'});
                        var timeString = epochTime.toLocaleString([], { hour: '2-digit', minute: '2-digit'}).replace('at','');
                        $(this).text(weekdayString + ", " + dayString + " " + monthString + " " + yearString + ", " + timeString);
                }
            );
        }
    };
});