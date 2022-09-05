
function addData(chart) {
    chart.data.labels.push(document.getElementById("category").value);
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + randomColor;
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(document.getElementById("votes").value * 1);
        dataset.backgroundColor.push(color);
    });

    chart.update();
}
function changeTitle(chart){
    chart.options.title.text.pop();
        chart.options.title.text.push(document.getElementById("title").value);
        chart.update();
}
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                 
            ],
            
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        title:{
            text:['Your Chart'],
            display: true,
            
        }
    }
});

