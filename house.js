const canvas = document.getElementById('houseCanvas');
  const ctx = canvas.getContext('2d');

  // house body
  ctx.fillStyle = 'green';
  ctx.fillRect(100, 150, 200, 100);

  // Appclick roof
  ctx.beginPath();
  ctx.moveTo(100, 150); // left corner
  ctx.lineTo(200, 80);  // top
  ctx.lineTo(300, 150); // right
  ctx.closePath();
  ctx.fillStyle = 'black'; // dark red
  ctx.fill();

  // Reception
  ctx.fillStyle = '#654321'; // darker brown
  ctx.fillRect(180, 190, 40, 60);

  // Windows
  ctx.fillStyle = '#ADD8E6'; // light blue
  ctx.fillRect(120, 170, 30, 30); // left window
  ctx.fillRect(250, 170, 30, 30); // right window

  // Add window panes
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(135, 170);
  ctx.lineTo(135, 200);
  ctx.moveTo(120, 185);
  ctx.lineTo(150, 185);

  ctx.moveTo(265, 170);
  ctx.lineTo(265, 200);
  ctx.moveTo(250, 185);
  ctx.lineTo(280, 185);
  ctx.stroke();