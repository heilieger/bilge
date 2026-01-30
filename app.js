function menuGuncelle() {
    try {
        const simdi = new Date();
        const tarih = simdi.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        
        console.log("Sistem Tarihi:", tarih); // Konsola tarih yazar
        
        const tarihDiv = document.getElementById('tarih');
        const menuDiv = document.getElementById('menu-alani');

        if (!tarihDiv || !menuDiv) {
            console.error("HTML ID'leri bulunamadı!");
            return;
        }

        tarihDiv.innerText = tarih;
        
        const menu = menuVerisi[tarih];
        if (menu) {
            menuDiv.innerHTML = menu;
        } else {
            menuDiv.innerHTML = tarih + " tarihi için<br>menü bulunamadı.";
        }
    } catch (err) {
        document.getElementById('menu-alani').innerHTML = "JS Hatası: " + err.message;
    }
}
menuGuncelle();
