AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type: "string", default: "#ring1"}
    },
    init:function(){
        var duration = 10
        var timerE1 = document.getElementById("timer")
        this.startTimer(duration, timerE1)
    },
    update:function(){
        this.collided(this.data.elementId)
    },

    startTimer:function(duration, timerE1){
        var minutes
        var seconds
        setInterval(()=> {
            if(duration>=0){
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)

                if(minutes<10){
                    minutes = "0" + minutes
                }
                if(seconds<10){
                    seconds = "0" + seconds
                }
                timerE1.setAttribute("text",{
                    value:minutes + ":" + seconds
                })
                duration -= 1
            }
            else{
                this.gameOver()
            }
        }, 1000);
    },

    collided:function(elementId){
        var element = document.querySelector(elementId)
        //console.log(element)
        element.addEventListener("collide", (e) => {
            if(elementId.includes("#ring")){
                console.log("ring collided")
                element.setAttribute("visible", false)
                this.updateScore()
                this.updateTarget()
            }
            if(elementId.includes("#bird")){
                console.log("bird collided")
                element.setAttribute("visible", false)
            }
           
        })
    },
    gameOver: function(){
        var element = document.getElementById("over");
        var plane = document.getElementById("plane");
        element.setAttribute("visible", true);
        plane.setAttribute("dynamic-body",{
            mass: 1,
        });
    },

    updateScore: function(){
        var element = document.querySelector('#score')
        var count = element.getAttribute("text").value
        var currentScore = parseInt(count)
        currentScore += 5
        element.setAttribute("text", {
            value: currentScore
        })
    },
    updateTarget: function(){
        var element = document.querySelector('#target')
        var count = element.getAttribute("text").value
        var currentScore = parseInt(count)
        currentScore -= 1
        element.setAttribute("text", {
            value: currentScore
        })
    },
});

