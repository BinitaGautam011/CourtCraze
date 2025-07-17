document.addEventListener('DOMContentLoaded',()=> {
    const counters=document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target=parseFloat(counter.getAttribute('data-target'))
        const isDecimal=counter.hasAttribute('data-decimal')
        let count=0
        const increment=target/200;
        const updateCount=()=> {
            count +=increment;
            if(count<target){
                counter.textContent=isDecimal?count.toFixed(1):Math.floor(count)
                requestAnimationFrame(updateCount);
        }
        else {
     counter.textContent=isDecimal?target.toFixed(1):target.toLocaleString()+ '+';
             }
             };
        updateCount();
    })
})