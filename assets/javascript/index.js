$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        // if ($('#sidebar').hasClass('active')) {
        $('.iconDesactive').toggleClass('d-none');
        $('.iconActive').toggleClass('d-none');
        // }
    });


    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
            datasets: [{
                label: 'Receita',
                data: [10000, 12000, 14000, 13000, 15000, 16000, 18000, 20000, 22000],
                backgroundColor: '#DE8734',
                borderColor: '#DE8734',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // if(('#sidebar').hasClass){}
});
