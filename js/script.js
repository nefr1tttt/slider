let image = [...document.querySelectorAll('.slider-img__image')];
let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let timer; // Timer o'zgaruvchisi

let i = 0;
let stop

btnRight.addEventListener('click', () => {
    image[i].style.display = 'none';
    i++;
    if (i >= image.length) {
        i = 0;
    }
    image[i].style.display = 'block';
});

btnLeft.addEventListener('click', () => {
    image[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = image.length - 1;
    }
    image[i].style.display = 'block';
});

function imageTime() {
    stop = setTimeout(() => {
        imageTime()
        image[i].style.display = 'none'
        i++
        if (i >= image.length) {
            i = 0;
        }
        image[i].style.display = 'block'
    }, 2000);
}
imageTime()

  image[0].addEventListener('mouseover', () => {
    clearInterval(stop)
  })
  image[1].addEventListener('mouseover', () => {
    clearInterval(stop)
  })
  image[2].addEventListener('mouseover', () => {
    clearInterval(stop)
  })
  image[3].addEventListener('mouseover', () => {
    clearInterval(stop)
  })

  image[0].addEventListener('mouseout', () => {
    imageTime()
  })
  image[1].addEventListener('mouseout', () => {
    imageTime()
  })
  image[2].addEventListener('mouseout', () => {
    imageTime()
  })
  image[3].addEventListener('mouseout', () => {
    imageTime()
  })
  
