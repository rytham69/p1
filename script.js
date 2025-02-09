// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotation:360,
//     backgroundColor:"red",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true,    
// })
// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotation:360,
//     backgroundColor:"#eee",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat:-1,
//     yoyo:true,
// })
var tl=gsap.timeline()
tl.from("h2",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.3,
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:0.3,
})
tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0,
})
