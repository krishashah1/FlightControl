AFRAME.registerComponent("birds",{
    init:function(){
        for(var i = 1; i < 50; i++){
            var birdid = `bird${i}`

            var posx = Math.random()*3000 + -1000
            var posy = Math.random()*2 + -1
            var posz = Math.random()*3000 + -1000
            var bird_position = {x: posx, y: posy, z: posz}
            this.createbirds(birdid, bird_position)
        }
    },
    createbirds: function(id, position){
        var terrain = document.getElementById("terrain");
        var birdE1 = document.createElement("a-entity");
        birdE1.setAttribute("id", id);
        birdE1.setAttribute("position", position);
        birdE1.setAttribute("gltf-model", "assets/models/flying_bird/scene.gltf")
        birdE1.setAttribute("scale", {x:500, y:500, z:500})
        birdE1.setAttribute("animation-mixer", {})
        birdE1.setAttribute("game-play", {
            elementId: `#${id}`
        })
        birdE1.setAttribute("static-body",{
            shape: "sphere",
            sphereRadius: 2,
        })
        terrain.appendChild(birdE1)
    },
});























