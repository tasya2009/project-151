AFRAME.registerComponent("log", {schema :{log :{type:"message", default: "Hi its Me!"}},
init: function(){
    this.data.log = this.data.log+0.01
    var pos = this.el.getAttribute("position")
    pos.x = this.data.log
    this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
}})