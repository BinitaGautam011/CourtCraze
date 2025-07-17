  function submitComment() {
    const input = document.getElementById('commentInput');
    const commentText = input.value.trim();

    if (commentText !== '') 
        {
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerText = commentText;
        alert("Commented Successfully")
        document.getElementById('commentsSection').appendChild(comment);
        input.value = ''; // clear the box
        } 
    else
        {
        alert('Please enter a comment!');
        }
}





//review 
// const slider = document.getElementById('reviewSlider');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentSlide = 0;
// const totalSlides = document.querySelectorAll('.review-card').length;

// nextBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide + 1) % totalSlides;
//   updateSlider();
// });

// prevBtn.addEventListener('click', () => {
//   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//   updateSlider();
// });

// function updateSlider() {
//   slider.style.transform = `translateX(-${currentSlide * 100}%)`;
// }             
