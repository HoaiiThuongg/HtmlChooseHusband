        const canvas = document.getElementById('gameCanvas');
        const context = canvas.getContext('2d');
        const startGameButton = document.getElementById('gameChauAnh');
        const outGameButton = document.getElementById('outGameButton');
        // Tạo thanh vợt và quả bóng
        const paddleWidth = 200, paddleHeight = 7, ballRadius = 30;
        let paddleX = (canvas.width - paddleHeight) / 2;
        let ballX , ballY ;
        let ballSpeedX, ballSpeedY ;

        const ballImage = new Image();
        ballImage.src = 'images/ChauAnh1.png';

        function resetBall() {
            ballX = canvas.width / 2;
            ballY = canvas.height / 2;
            ballSpeedX = 4;
            ballSpeedY = -4;
        }

        // Xử lý vẽ thanh vợt và quả bóng
        function drawEverything() { 
            // Vẽ nền
            context.fillStyle = 'black';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // Vẽ thanh vợt
            context.fillStyle = 'white';
            context.fillRect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);

            // Vẽ quả bóng
            drawCircularImage(context, ballImage, ballX, ballY, ballRadius);       
        }

        function drawCircularImage(ctx, img, x, y, radius) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            // Draw the image
            ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
            ctx.restore();
        }


        // Xử lý di chuyển quả bóng
        function moveEverything() {
            ballX += ballSpeedX;
            ballY += ballSpeedY;

            // Bật lại khi chạm tường trái hoặc phải
            if (ballX < ballRadius || ballX > canvas.width - ballRadius) {
                ballSpeedX = -ballSpeedX;
            }

            //Bật lại khi chạm thanh vợt
            if (ballY +ballRadius > canvas.height-paddleHeight &&
                ballX > paddleX && ballX < paddleX + paddleWidth) {
                ballSpeedY = -ballSpeedY;
            }

            if(ballY<ballRadius)
            {
                ballSpeedY=-ballSpeedY;
            }

            // Reset vị trí nếu bóng đi qua vạch dưới
            if (ballY +ballRadius > canvas.height) {
                resetBall()
            }
        }

        // Xử lý di chuyển thanh vợt theo chuột
        canvas.addEventListener('mousemove', function(evt) {
            const mousePos = calculateMousePos(evt);
            paddleX = mousePos.x - (paddleWidth / 2);
        });

        function calculateMousePos(evt) {
            const rect = canvas.getBoundingClientRect();
            const root = document.documentElement;
            const mouseX = evt.clientX - rect.left - root.scrollLeft;
            const mouseY = evt.clientY - rect.top - root.scrollTop;
            return {
                x: mouseX,
                y: mouseY
            };
        }

        let isPlaying = false;
        // Game loop
        function gameLoop() {
            if(isPlaying)
            {
                moveEverything();
                drawEverything();
                requestAnimationFrame(gameLoop);
            }      
        }

        ballImage.onload = function() {
            requestAnimationFrame(gameLoop);
            startGameButton.addEventListener('click', () => {
                startGameButton.style.display = 'none'; // Ẩn nút bắt đầu game
                canvas.style.display = 'block'; // Hiển thị canvas
                outGameButton.style.display = 'block';
                resetBall();
                isPlaying=true;
                gameLoop(); // Bắt đầu game loop
            });
    
            outGameButton.addEventListener('click',() =>{
                isPlaying=false;
                startGameButton.style.display = 'block';
                outGameButton.style.display = 'none';
                canvas.style.display = 'none';
            });

            resetBall();
        };