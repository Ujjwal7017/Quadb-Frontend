$(document).ready(function() {
    $.get('http://localhost:8000/api/data', function(data) {
        $('#data-body').empty();
        //Name like BTC , ETH etc
        $(".content1b").html(data[0]['name']);
        $(".content2b").html(data[1]['name']);
        $(".content3b").html(data[2]['name']);
        $(".content4b").html(data[3]['name']);
        $(".content5b").html(data[4]['name']);
        $(".content6b").html(data[5]['name']);
        $(".content7b").html(data[6]['name']);
        $(".content8b").html(data[7]['name']);
        $(".content9b").html(data[8]['name']);
        $(".content10b").html(data[9]['name']);


        //last Traded Price
        $(".content1c").html(data[0]['last']);
        $(".content2c").html(data[1]['last']);
        $(".content3c").html(data[2]['last']);
        $(".content4c").html(data[3]['last']);
        $(".content5c").html(data[4]['last']);
        $(".content6c").html(data[5]['last']);
        $(".content7c").html(data[6]['last']);
        $(".content8c").html(data[7]['last']);
        $(".content9c").html(data[8]['last']);
        $(".content10c").html(data[9]['last']);

        //Buy and Sell Price
        $(".content1d").html(data[0]['buy'] +"/"+ data[0]['sell'] );
        $(".content2d").html(data[1]['buy'] +"/"+ data[1]['sell'] );
        $(".content3d").html(data[2]['buy'] +"/"+ data[2]['sell'] );
        $(".content4d").html(data[3]['buy'] +"/"+ data[3]['sell'] );
        $(".content5d").html(data[4]['buy'] +"/"+ data[4]['sell'] );
        $(".content6d").html(data[5]['buy'] +"/"+ data[5]['sell'] );
        $(".content7d").html(data[6]['buy'] +"/"+ data[6]['sell'] );
        $(".content8d").html(data[7]['buy'] +"/"+ data[7]['sell'] );
        $(".content9d").html(data[8]['buy'] +"/"+ data[8]['sell'] );
        $(".content10d").html(data[9]['buy'] +"/"+ data[9]['sell'] );


        //Volume
        $(".content1e").html(data[0]['volume']);
        $(".content2e").html(data[1]['volume']);
        $(".content3e").html(data[2]['volume']);
        $(".content4e").html(data[3]['volume']);
        $(".content5e").html(data[4]['volume']);
        $(".content6e").html(data[5]['volume']);
        $(".content7e").html(data[6]['volume']);
        $(".content8e").html(data[7]['volume']);
        $(".content9e").html(data[8]['volume']);
        $(".content10e").html(data[9]['volume']);

        //Base Unit
        $(".content1f").html(data[0]['base_unit']);
        $(".content2f").html(data[1]['base_unit']);
        $(".content3f").html(data[2]['base_unit']);
        $(".content4f").html(data[3]['base_unit']);
        $(".content5f").html(data[4]['base_unit']);
        $(".content6f").html(data[5]['base_unit']);
        $(".content7f").html(data[6]['base_unit']);
        $(".content8f").html(data[7]['base_unit']);
        $(".content9f").html(data[8]['base_unit']);
        $(".content10f").html(data[9]['base_unit']);


    });

});


$(document).ready(function () {
    // Function to calculate minimum value from an array of numbers
    const getMin = (array) => Math.min(...array);

    // Function to calculate maximum value from an array of numbers
    const getMax = (array) => Math.max(...array);

    // Function to calculate average value from an array of numbers
    const getAverage = (array) => array.reduce((sum, value) => sum + value, 0) / array.length;

    // Function to format currency with commas
    const formatCurrency = (value) => new Intl.NumberFormat('en-IN').format(value);

    // Function to calculate the percentage change between two values
    const calculatePercentageChange = (currentValue, previousValue) => ((currentValue - previousValue) / previousValue) * 100;

    $.get('http://localhost:8000/api/data', function (data) {
        const lastPrices = data.map((item) => parseFloat(item.last.replace(/[^0-9.]/g, '')));

        // Calculate and display 5-minute percentage change
        const fiveMinChange = calculatePercentageChange(lastPrices[lastPrices.length - 1], lastPrices[lastPrices.length - 5]);
        $('.min').html(fiveMinChange.toFixed(2) + '%');

        // Calculate and display 1-hour percentage change
        const oneHourChange = calculatePercentageChange(lastPrices[lastPrices.length - 1], lastPrices[lastPrices.length - 60]);
        $('.hour').html('1 Hour: ' + oneHourChange.toFixed(2) + '%');

        // Calculate and display 1-day percentage change
        const oneDayChange = calculatePercentageChange(lastPrices[lastPrices.length - 1], lastPrices[lastPrices.length - 24 * 60]);
        $('.dayf').html('1 day: ' + oneDayChange.toFixed(2) + '%');

        // Calculate and display 7-day percentage change
        const sevenDayChange = calculatePercentageChange(lastPrices[lastPrices.length - 1], lastPrices[lastPrices.length - 7 * 24 * 60]);
        $('.dayl').html('7 day: ' + sevenDayChange.toFixed(2) + '%');

        // Display Best Price to Trade
        $('.avg').html(' ₹ ' + formatCurrency(getMax(lastPrices)));
    });
});

// Fetch data from the API every 5 seconds
setInterval(function () {
    $.get('http://localhost:8000/api/save', function (data) {});
}, 5000);


  
  










  



  
  

