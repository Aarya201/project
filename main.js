function next() {
    nameone = document.getElementById('player_1_name_input').value;
    localStorage.setItem("Player_1", nameone);
    nametwo = document.getElementById('player_2_name_input').value;
    localStorage.setItem("Player_2", nametwo);
    window.location= "index2.html";
}   