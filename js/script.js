function sim() {
    document.getElementById('amor').classList.remove('hidden');
}

function nao() {
    let button = document.getElementById("nao");
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 500);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
