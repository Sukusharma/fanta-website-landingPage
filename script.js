var t = gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    
}})
t.to("#fanta",{
    top:"100%",
    left:"7%"
},'with fanta')

t.to("#png1",{
    top:"115%",
    left:"32%"
},'with fanta')
t.to("#png2",{
    width:"13%",
    top:"170%",
    right:"0%"
},'with fanta')
var t2 = gsap.timeline({scrollTrigger:{
    trigger:"#page3",
    start:"20% 95%",
    end:"50% 50%",
    scrub:true,
    markers:true,
}})
t2.from("#coke",{
    rotate:"120deg",

   
    
    

},'together')
t2.from("#grape",{
    rotate:"-120deg",

   
    
    

},'together')
t2.to("#fanta",{
    left:"33%",
    top:"200%",
    height:"80vh",
    rotate:"360deg",
    
},'together')
t2.to("#png2",{
    right:"3%",
    top:"270%",
    width:"13%"
    
},'together')
t2.to("#purple",{
    top:"210%",
    left:"3%",
    rotate:"15deg"
},'together')