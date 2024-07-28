function chooseHDD(imageUrl) {
    document.getElementById('container').style.backgroundImage = `url('${imageUrl}')`;
}

let currentIndex = 2;

function chooseAXT(imageId)
{
    const img = document.getElementById(imageId);

    img.src = `images/anhTraiXau${currentIndex}.png`;

    // Tăng chỉ số hình ảnh lên 1
    currentIndex++;

    // Nếu chỉ số hình ảnh vượt quá 4, quay lại 1
    if (currentIndex > 4) {
        currentIndex = 1;
    }

    // Tạo số ngẫu nhiên từ 0 đến 3
    //const randomIndex = Math.floor(Math.random() * 4);

    // Đổi hình ảnh
    //img.src = `images/anhTraiXau${randomIndex + 1}.png`;
}

function chayDi()
{
    const button = document.getElementById('buttonHDD');
    button.style.position = 'absolute';
    // Generate random positions
    const newTop = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    // Apply new positions
    button.style.top = newTop + 'px';
    button.style.left = newLeft + 'px';
}

const thienLyOi = new Audio('music/thienLyOi.mp3');
function playJ97()
{
    thienLyOi.play();
}

document.getElementById('buttonHDD').addEventListener('mouseover', chayDi);