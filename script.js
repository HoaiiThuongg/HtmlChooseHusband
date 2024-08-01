const DzoGameButton = document.getElementById('gameChauAnh');
const DzoGameText = document.getElementById('messageChauAnh');
DzoGameButton.addEventListener('click', () => {
        DzoGameText.style.display = 'block';
});

const OutGameButton = document.getElementById('outGameButton');
const OutGameText = document.getElementById('messageChauAnh');
OutGameButton.addEventListener('click', () => {
        OutGameText.style.display = 'none';
});

function chooseTuyen(imageUrl) {
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

//document.getElementById('buttonHDD').addEventListener('mouseover', chayDi);