AFRAME.registerComponent("rings",{
    init:function(){
        for(var i = 1; i < 50; i++){
            var ringid = `ring${i}`

            var posx = Math.random()*3000 + -1000
            var posy = Math.random()*2 + -1
            var posz = Math.random()*3000 + -1000
            var ring_position = {x: posx, y: posy, z: posz}
            this.createRings(ringid, ring_position)
        }
    },
    createRings: function(id, position){
        var terrain = document.getElementById("terrain");
        var ringE1 = document.createElement("a-entity");
        ringE1.setAttribute("id", id);
        ringE1.setAttribute("position", position);
        ringE1.setAttribute("geometry", {
            primitive: "torus",
            radius: 12
        });
        ringE1.setAttribute("material",{
            color:"red",
        });
        
        ringE1.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2,
        })

        ringE1.setAttribute("game-play", {
            elementId: `#${id}`
        })
        terrain.appendChild(ringE1);
    },
});