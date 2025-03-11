// JavaScript code for interactive elements

// Create an iframe overlay when Project 1 is clicked
document.querySelector('.project-card:nth-child(1)').addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = '2000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://qnfncxx6.play.borogove.io/';
    iframe.style.width = '90%';
    iframe.style.height = '90%';
    iframe.style.border = 'none';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.background = '#ff69b4';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';

    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(iframe);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
});

// Create an iframe overlay when Project 3 is clicked
document.querySelector('.project-card:nth-child(3)').addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = '2000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const iframe = document.createElement('iframe');
    iframe.src = 'https://openprocessing.org/sketch/2560538';
    iframe.style.width = '90%';
    iframe.style.height = '90%';
    iframe.style.border = 'none';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.background = '#ff69b4';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';

    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(iframe);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
});

document.getElementById('project2-card').addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = '2000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const iframe = document.createElement('iframe');
    iframe.src = 'txtgen-main/index.html';
    iframe.style.width = '90%';
    iframe.style.height = '90%';
    iframe.style.border = 'none';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.background = '#ff69b4';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.style.borderRadius = '5px';

    closeButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(iframe);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
});
