const button = document.querySelector('button');
function randomCoordinates()
{
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const windowWidth=window.innerWidth;
    const windowHeight=window.innerHeight;
    const x=Math.random() * (windowWidth - buttonWidth)
    const y=Math.random() * (windowHeight - buttonHeight)
    button.style.left=x+'px'
    button.style.top = y+'px'
    button.style.position = 'absolute';
}


button.addEventListener('mouseover',()=>{
if (Math.random()<0.5)
{
    randomCoordinates()
}
})
button.addEventListener('click',()=>{
    randomCoordinates()
})