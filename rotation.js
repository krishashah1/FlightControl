AFRAME.registerComponent("terrain-rotation", {
    schema:{
        speedOfRotation:{type: "number", default: 0}
    },
    init:function(){
        window.addEventListener("keydown", (e)=>{
            //console.log(e)
            if(e.key === "ArrowRight"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.01
                }
            }
            if(e.key === "ArrowLeft"){
                if(this.data.speedOfRotation >-0.1){
                    this.data.speedOfRotation -= 0.01
                }
            }
        })
    },
    tick:function(){
        var terrain = this.el.getAttribute("rotation")
        terrain.y += this.data.speedOfRotation
        this.el.setAttribute("rotation",{
            x:terrain.x,
            y:terrain.y,
            z:terrain.z
        })
    }
})

AFRAME.registerComponent("plane-rotation",{
    schema:{
        planeOfRotation:{type: "number", default: 0},
        planeOfPosition:{type: "number", default: 0}
    },
    init:function(){
        window.addEventListener("keydown", (e)=>{
            this.data.planeOfRotation = this.el.getAttribute("rotation")
            this.data.planeOfPosition = this.el.getAttribute("position")
            var plr = this.data.planeOfRotation
            var plane = this.data.planeOfPosition
            if(e.key === "ArrowRight"){
                if(plr.x < 20){
                    plr.x += 0.5
                    this.el.setAttribute("rotation", plr)
                }
            }
            if(e.key === "ArrowLeft"){
                if(plr.x > -20){
                    plr.x -= 0.5
                    this.el.setAttribute("rotation", plr)
                } 
            }
            if(e.key === "ArrowUp"){
                if(plr.z < 20){
                    plr.z += 0.5
                    this.el.setAttribute("rotation", plr)
                }
                if(plane.y < 3){
                    plane.y += 0.02
                    this.el.setAttribute("position", plane)
                }
            }

            if(e.key === "ArrowDown"){
                if(plr.z > -20){
                    plr.z -= 0.5
                    this.el.setAttribute("rotation", plr)
                }
                if(plane.y > -3){
                    plane.y -= 0.02
                    this.el.setAttribute("position", plane)
                }
            }

        })
    }
})


