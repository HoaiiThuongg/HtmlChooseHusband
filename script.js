function chooseHDD(imageUrl) {
    document.getElementById('container').style.backgroundImage = `url('${imageUrl}')`;
}

function chayDi()
{
    const button = document.getElementById('buttonAXT');
            // Generate random positions
            const newTop = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
            const newLeft = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
            // Apply new positions
            button.style.top = newTop + 'px';
            button.style.left = newLeft + 'px';
}

document.getElementById('buttonAXT').addEventListener('mouseover', chayDi);