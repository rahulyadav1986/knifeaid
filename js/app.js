
$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .container',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});


let accordion = document.getElementsByClassName('accor');
for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(item){
        for(let i=0; i<accordion.length; i++){
            if(item !== accordion){
                accordion[i].classList.remove('active');
            }
        }
        this.classList.toggle('active');
    });
}

function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
 }