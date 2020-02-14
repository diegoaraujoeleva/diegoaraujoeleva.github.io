Chart.plugins.unregister(ChartDataLabels);
function obterDadosBarra() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoBarra(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/reacaoAvaliacao", true);
    xhttp.send();
  }

  function obterDadosBarraReacoes() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoBarraReacoes(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/reacaoQuestao", true);
    xhttp.send();
  }

  function obterDadosBarraPorAvaliacao() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoBarraPorAvaliacao(obj);
        //carregarGraficoMistoPorNota(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/reacaoAvaliacaoPorMateria", true);
    xhttp.send();
  }

  function obterDadosScatter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoScatter(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/alunosReacoes", true);
    xhttp.send();
  }

  function obterDadosGraficoLinhaEmoji() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoLinhaEmoji(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/emojiQuestoesAvaliacoes", true);
    xhttp.send();
  }

  function obterDadosPolar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoPolar(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/alunosReacoes", true);
    xhttp.send();
  }

  function obterNotasPorAvaliacao() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoMistoPorNota(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/notaPorAvaliacao", true);
    xhttp.send();
    
  }

  function obterMediaNotasPorReacao() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText) ;
        carregarGraficoBolha(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/mediaNotaPorReacao", true);
    xhttp.send();
  }

  function obterMediaNotasPorDificuldade() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText) ;
        carregarGraficoBolhaDificuldade(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/mediaNotaPorDificuldade", true);
    xhttp.send();
  }

  function obterDadosBarraHorizontal(params) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarGraficoBarraHorizontal(obj);
        carregarGraficoLinha(obj);
      }
    };
    xhttp.open("GET", "https://demo5124476.mockable.io/dificuldadeSimulado", true);
    xhttp.send();
  }

  

  function carregarGraficoLinhaEmoji(obj) {
    var listaLabels = [];

  for (let i = 0; i < obj[0].totalPorAvaliacao.length; i++) {
    listaLabels.push(obj[0].totalPorAvaliacao[i].avaliacao);
  }

    var ctx = document.getElementById("graficoLinhaEmoji");
    var myChart = new Chart(ctx, {
      type: 'line',
  data: {
    labels: listaLabels,
    datasets: [{ 
        data: obterArrayValores(obj[0].totalPorAvaliacao),
        label: obj[0].emoji,
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: obterArrayValores(obj[1].totalPorAvaliacao),
        label: obj[1].emoji,
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: obterArrayValores(obj[2].totalPorAvaliacao),
        label:obj[2].emoji,
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: obterArrayValores(obj[3].totalPorAvaliacao),
        label: obj[3].emoji,
        borderColor: "#000",
        fill: false
      },
      { 
        data: obterArrayValores(obj[4].totalPorAvaliacao),
        label: obj[4].emoji,
        borderColor: "red",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Reações da questão com o número de acertos'
    },
    legend:{
      display: true,
      labels:{
        fontSize: 25
      }
    },
    tooltips:{
      footerFontSize: 20
    }
  }

    });
    
  }
function carregarGraficoScatter(obj) {
  var ctx = document.getElementById("graficoScatter");
    var myChart = new Chart(ctx, {
      type: 'line',
  data: {
    labels: ["Questão 1 - Matemática", "Questão 2 - Matemática", "Questão 3 - Matemática", "Questão 1 - Física",
    "Questão 2 - Física", "Questão 3 - Física", "Questão 1 - Biologia", "Questão 2 - Biologia", "Questão 3 - Biologia"],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,483],
        label: "Fácil",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,135,209,347,142,370],
        label: "Média",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,475],
        label: "Difícil",
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Reações da questão com o número de acertos'
    }
  }
    });
}
  
  function carregarGraficoBolhaDificuldade(obj) {
    var ctx = document.getElementById("graficoBolhaDificuldade");
    ctx.height = 250;
    var myChart = new Chart(ctx, {
      type: 'bubble',
      data: {
        labels: "Dificuldade por Média de Notas",
        datasets: [
          {
            label: obj.mediaNotaDificuldade[0].dificuldade,
            backgroundColor: "rgba(67,178,86,0.2)",
            borderColor: "rgba(67,178,86,1)",
            data: [{
              x: obj.mediaNotaDificuldade[0].mediaNota,
              y: obj.mediaNotaDificuldade[0].total,
              r: 30
            }]
          }, {
            label: obj.mediaNotaDificuldade[1].dificuldade,
            backgroundColor: "rgba(219, 191, 77,0.2)",
            borderColor: "rgba(219, 191, 77,1)",
            data: [{
              x: obj.mediaNotaDificuldade[1].mediaNota,
              y: obj.mediaNotaDificuldade[1].total,
              r: 30
            }]
          }, {
            label: obj.mediaNotaDificuldade[2].dificuldade,
            backgroundColor: "rgba(220, 73, 50,0.2)",
            borderColor: "rgba(220, 73, 50, 1)",
            data: [{
              x: obj.mediaNotaDificuldade[2].mediaNota,
              y: obj.mediaNotaDificuldade[2].total,
              r: 30
            }]
          }
        ]
      },
    options: {
      title: {
        display: true,
        text: 'Dificuldade nas Provas e Notas',
        fontSize: 15
      },
      legend:{
        display: true,
        labels:{
          fontSize: 13
        }
      }, 
      scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Quantidade de Votos"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Nota Média Provas"
          }
        }]
      }
    }
    });
  }

 function carregarGraficoBolha(obj) {
   var ctx = document.getElementById("graficoBolha");
   ctx.height = 300;
   //console.log(obj.mediaNotaReacao[0].reacao);
   var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
      labels: "Média das Notas por Total de Reações ",
      datasets: [
        {
          label: obj.mediaNotaReacao[0].reacao,
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: obj.mediaNotaReacao[0].mediaNota,
            y: obj.mediaNotaReacao[0].total,
            r: 30
          }]
        }, {
          label: obj.mediaNotaReacao[1].reacao,
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: obj.mediaNotaReacao[1].mediaNota,
            y: obj.mediaNotaReacao[1].total,
            r: 30
          }]
        }, {
          label: obj.mediaNotaReacao[2].reacao,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: obj.mediaNotaReacao[2].mediaNota,
            y: obj.mediaNotaReacao[2].total,
            r: 30
          }]
        }, {
          label: obj.mediaNotaReacao[3].reacao,
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: obj.mediaNotaReacao[3].mediaNota,
            y: obj.mediaNotaReacao[3].total,
            r: 30
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Reações das Provas e Notas',
        fontSize: 15
      },
      legend:{
        display: true,
        labels:{
          fontSize: 13
        }
      }, 
      scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Quantidade de Votos"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Nota Média Provas"
          }
        }]
      }
    }
});
 }

  function carregarGraficoMistoPorNota(obj) {

    var listaAvaliacoes = [];
    for (let i = 0; i < obj[0].avaliacoes[0].totalAvaliacoes.length; i++) {
      listaAvaliacoes.push(obj[0].avaliacoes[0].totalAvaliacoes[i].materia);
    }

    var mediaGeral = [];

    for (let i = 0; i < obj[0].notasAvaliacoes.length; i++) {
      mediaGeral.push(obj[0].notasAvaliacoes[i].mediaGeral); 
    }

    var minhaNota = [];

    for (let i = 0; i < obj[0].notasAvaliacoes.length; i++) {
      minhaNota.push(obj[0].notasAvaliacoes[i].nota); 
    }

    var ctx = document.getElementById("graficoMistoPorNota");
    ctx.height = 250;
    var myChart =  new Chart(ctx, {
      type: 'bar',
        data: {
        labels: listaAvaliacoes,
        datasets: [
          {
            type: 'line',
            fill: false,
            label: "Média da nota geral",
            borderColor: "#3e95cd",
            data: mediaGeral
          },
          {
            type: 'line',
            fill: false,
            label: "Minha nota",
            borderColor: "black",
            data: minhaNota
          },
          {
            label: obj[0].avaliacoes[0].reacao,
            backgroundColor: "#41982B",
            data: obterArrayValores(obj[0].avaliacoes[0].totalAvaliacoes)
          }, {
            label:obj[0].avaliacoes[1].reacao,
            backgroundColor: "#657EB2",
            data: obterArrayValores(obj[0].avaliacoes[1].totalAvaliacoes)
          },
          {
            label: obj[0].avaliacoes[2].reacao,
            backgroundColor: "#CDA627",
            data: obterArrayValores(obj[0].avaliacoes[2].totalAvaliacoes)
          },
          {
            label: obj[0].avaliacoes[3].reacao,
            backgroundColor: "#DE332E",
            data: obterArrayValores(obj[0].avaliacoes[3].totalAvaliacoes)
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Reação por avaliação'
        }
      }
  });
  }

  function carregarGraficoBarraPorAvaliacao(obj) {

    var listaAvaliacoes = [];
    for (let i = 0; i < obj[0].totalAvaliacoes.length; i++) {
      listaAvaliacoes.push(obj[0].totalAvaliacoes[i].materia);
    }

    var ctx = document.getElementById("graficoBarraPorAvaliacao");
    ctx.height = 250;
    var myChart =  new Chart(ctx, {
      type: 'bar',
        data: {
        labels: listaAvaliacoes,
        datasets: [
          {
            label: obj[0].reacao,
            backgroundColor: "#41982B",
            data: obterArrayValores(obj[0].totalAvaliacoes),
            icons: ['\uf0c3', '\uf0e7', '\uf2dc'],
          }, {
            label:obj[1].reacao,
            backgroundColor: "#657EB2",
            data: obterArrayValores(obj[1].totalAvaliacoes)
          },
          {
            label: obj[2].reacao,
            backgroundColor: "#CDA627",
            data: obterArrayValores(obj[2].totalAvaliacoes)
          },
          {
            label: obj[3].reacao,
            backgroundColor: "#DE332E",
            data: obterArrayValores(obj[3].totalAvaliacoes)
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Reação por avaliação'
        }
      },
      plugins: {
        datalabels: {
          align: 'end',
          anchor: 'end',
          color: "#cc55aa",
          font: {
            family: 'FontAwesome',
            size: 20
          },
          formatter: function(value, context) {
            return context.dataset.icons[context.dataIndex];
          }
        }
      }
  });
  }

  function carregarGraficoBarraReacoes(obj) {
    var listaLabels = [];

    for (let index = 0; index <= obj.length; index++) {
        listaLabels.push(obj[0].totalReacoes[index].reacao);
    }
    console.log(listaLabels);
    var ctx = document.getElementById("graficoBarraReacoes");
    ctx.height = 230;
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: listaLabels,
        backgroundColor: [
            "rgb(153, 209, 96)"
          ],
        datasets: [
          {
            label: obj[0].materia,
            data: obterArrayValores(obj[0].totalReacoes),
            backgroundColor: [
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)"
              
            ],
            borderColor: [
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)"
            ],
            borderWidth: 1
          },
          {
            label: obj[1].materia,
            data: obterArrayValores(obj[1].totalReacoes),
            backgroundColor: [
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)"
              
            ],
            borderColor: [
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)"
            ],
            borderWidth: 1
          },
          {
            label: obj[2].materia,
            data: obterArrayValores(obj[2].totalReacoes),
            backgroundColor: [
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)"
            ],
            borderColor: [
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)"
            ],
            borderWidth: 1
          },
          {
            label: obj[3].materia,
            data: obterArrayValores(obj[3].totalReacoes),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)"
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }


function carregarGraficoBarra(obj) {
    var listaLabels = [];

    for (let index = 0; index < obj.length; index++) {
        listaLabels.push(obj[0].totalReacoes[index].reacao);
    }
    var ctx = document.getElementById("graficoBarra");
    ctx.height = 230;
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: listaLabels,
        backgroundColor: [
            "rgb(153, 209, 96)"
          ],
        datasets: [
          {
            label: obj[0].materia,
            data: obterArrayValores(obj[0].totalReacoes),
            backgroundColor: [
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)"
              
            ],
            borderColor: [
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)",
              "rgb(153, 209, 96)"
            ],
            borderWidth: 1
          },
          {
            label: obj[1].materia,
            data: obterArrayValores(obj[1].totalReacoes),
            backgroundColor: [
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)",
              "rgb(54, 162, 235)"
            ],
            borderColor: [
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)",
                "rgb(54, 162, 235)"
            ],
            borderWidth: 1
          },
          {
            label: obj[2].materia,
            data: obterArrayValores(obj[2].totalReacoes),
            backgroundColor: [
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)"
            ],
            borderColor: [
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)",
              "rgb(255, 206, 86)"
            ],
            borderWidth: 1
          },
          {
            label: obj[3].materia,
            data: obterArrayValores(obj[3].totalReacoes),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)"
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  function obterDificuldade(obj) {
      var valorDificuldade =[];

      for (let index = 0; index < obj.length; index++) {
          const element = obj[index].total;
          valorDificuldade.push(element);
      }
      return valorDificuldade;
  }
  
  function obterTotalDificuldades(params) {
    var totalDificuldades = [];
    for (let i = 0; i < params.length; i++) {
      totalDificuldades.push(params[i].total);
    }
    return totalDificuldades;
  }
function carregarGraficoBarraHorizontal(obj){

  var listaRedes = [];
  for (let i = 0; i < obj[0].totalRedes.length; i++) {
    const rede = obj[0].totalRedes[i].rede;
    listaRedes.push(rede);
  }
  //console.log(listaRedes);
  var ctx = document.getElementById("graficoBarraHorizontal");
  ctx.height = 450;
  var myChart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: "bar",
    data: {
      labels: listaRedes,
      datasets: [
        {
          label: obj[0].dificuldade,
          backgroundColor: "#3C91BC",
          data: obterTotalDificuldades(obj[0].totalRedes)
        }, {
          label: obj[1].dificuldade,
          backgroundColor: "#DB9E34",
          data: obterTotalDificuldades(obj[1].totalRedes)
        },
        {
          label: obj[2].dificuldade,
          backgroundColor: "#EB4533",
          data: obterTotalDificuldades(obj[2].totalRedes)
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      plugins : {
        datalabels: {
          color: 'black',
          anchor: 'end',
          align: 'end',
          clamp: true,
          labels:{
            title:{
              font: {
                weight : 'bold'
              }
            }
          }
        }
      }
    }
  });
   
}

function carregarGraficoLinha(obj){
  var listaRedes = [];
  for (let i = 0; i < obj[0].totalRedes.length; i++) {
    const rede = obj[0].totalRedes[i].rede;
    listaRedes.push(rede);
  }
  var ctx = document.getElementById("graficoLinha");
  ctx.height = 450;
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: listaRedes,
      datasets: [
        {
          label: obj[0].dificuldade,
          borderColor: "#3C91BC",
          data: obterTotalDificuldades(obj[0].totalRedes),
          fill : false
        }, {
          label: obj[1].dificuldade,
          borderColor: "#DB9E34",
          data: obterTotalDificuldades(obj[1].totalRedes),
          fill : false
        },
        {
          label: obj[2].dificuldade,
          borderColor: "#EB4533",
          data: obterTotalDificuldades(obj[2].totalRedes),
          fill : false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Dificuldade dos Simulados por Rede'
      }
    }
  });
}

function carregarGraficoDoughnut(obj) {

    var ctx = document.getElementById("graficoDoughnut");
    ctx.height = 250;
    var myPieChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: obterArrayReacoes(obj[0].totalReacoes),
        datasets: [
          {
            label: obj.prova,
            data: obterArrayValores(obj[0].totalReacoes),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
              "rgb(75, 192, 192)"
            ]
          }
        ]
      }
    });
  }

  function carregarGraficoPizza(obj) {
    
    var ctx = document.getElementById("graficoPizza");
    ctx.height = 250;
    var myPieChart = new Chart(ctx, {
      type: "pie",
      plugins: [ChartDataLabels],
      data: {
        labels: obterArrayReacoes(obj[0].totalReacoes),
        datasets: [
          {
            label: obj.prova,
            data: obterArrayValores(obj[0].totalReacoes),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 206, 86)",
              "rgb(75, 192, 192)"
            ]
          }
        ]
      },
      options:
      {
        plugins: {
          datalabels:{
            color: 'white',
            labels:{
              title:{
                font:{
                  weight: 'bold'
                }
              }
            }
          }
        }
      }
    });
  }

  function carregarRadar(obj) {

    
    var listaReacao = [];
    for (let index = 0; index < obj[0].totalReacoes.length; index++) {
        listaReacao.push(obj[0].totalReacoes[index].reacao);
    }


    var ctx = document.getElementById("graficoRadar");
    ctx.height = 500;
    var myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels:listaReacao,
            datasets: [
                {
                    label: obj[0].materia,
                    fill: true,
                    data: obterArrayValores(obj[0].totalReacoes),
                    backgroundColor:"rgba(255, 99, 132, 0.2)",
                    borderColor:"rgb(255, 99, 132)",
                    pointBackgroundColor:"rgb(255, 99, 132)",
                    pointBorderColor:"#fff",
                    pointHoverBackgroundColor:"#fff",
                    pointHoverBorderColor:"rgb(255, 99, 132)"
                },
                {
                    label: obj[1].materia,
                    fill: true,
                    data: obterArrayValores(obj[1].totalReacoes),
                    backgroundColor:"rgba(54, 162, 235, 0.2)",
                    borderColor:"rgb(54, 162, 235)",
                    pointBackgroundColor:"rgb(54, 162, 235)",
                    pointBorderColor:"#fff",
                    pointHoverBackgroundColor:"#fff",
                    pointHoverBorderColor:"rgb(54, 162, 235)"
                },
                {
                    label: obj[2].materia,
                    fill: true,
                    data: obterArrayValores(obj[2].totalReacoes),
                    backgroundColor:"rgba(153, 209, 96, 0.2)",
                    borderColor:"rgb(153, 209, 96)",
                    pointBackgroundColor:"rgb(153, 209, 96)",
                    pointBorderColor:"#fff",
                    pointHoverBackgroundColor:"#fff",
                    pointHoverBorderColor:"rgb(153, 209, 96)"
                },
                {
                    label: obj[3].materia,
                    fill: true,
                    data: obterArrayValores(obj[3].totalReacoes),
                    backgroundColor:"rgba(222, 222, 37, 0.2)",
                    borderColor:"rgb(222, 222, 37)",
                    pointBackgroundColor:"rgb(222, 222, 37)",
                    pointBorderColor:"#fff",
                    pointHoverBackgroundColor:"#fff",
                    pointHoverBorderColor:"rgb(222, 222, 37)"
                }
            ]
        },
        options: {"elements":{"line":{"tension":0,"borderWidth":3}}}
    });
      
  }

  function carregarGraficoPolar(obj) {
    var listaRecoes = [];

    for (let i = 0; i < obj.length; i++) {
      const element = obj[i].reacao;
      listaRecoes.push(element);
    }
  
    var ctx = document.getElementById("graficoPolar");
    ctx.height = 300;
    var myPolarChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: listaRecoes,
          datasets:[{
            data: obterAlunosReacoes(obj),
          backgroundColor:
          [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)"
        ]
      }]
      }
      });
  }

  function obterAlunosReacoes(params) {
    var lista =[];
    for (let i = 0; i < params.length; i++) {
      lista.push(params[i].total);
    }
    
    return lista;
  }

  function obterArrayValores(parametro) {
      var valores =[];
      for (let index = 0; index < parametro.length; index++) {
          valores.push(parametro[index].total);
      }
      return valores;
  }

  function obterArrayReacoes(parametro) {
    var listaReacao = [];
    for (let index = 0; index < obj[0].totalReacoes.length; index++) {
        listaReacao.push(obj[0].totalReacoes[index].reacao);
    }
    return listaReacao;
  }


 function obterDadosRadar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        obj = JSON.parse(this.responseText);
        carregarRadar(obj);
      }
    };

    xhttp.open("GET", "https://demo5124476.mockable.io/reacaoAvaliacao", true);
    xhttp.send();
  }

  