document.addEventListener("DOMContentLoaded", function() {
    const pages = [
        "cats.html", "flag.html", "dogs.html", "lists.html", 
        "anchors.html", "text.html", "text2.html", "catss.html", 
        "cats1.html", "music.html", "public.html", "multi.html", 
        "versktka.html", "table.html", "baikal.html", "valaam.html", 
        "rabota.html", "kurs.html", "fashion.html", "work.html", 
        "frame.html", "setka.html", "teext.html", "proekt1.html", 
        "proekt2.html", "24_5.html", "i25.html", "26.html", "27.html"
    ];

    let currentPath = window.location.pathname;
    let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    if (currentPage === "" || currentPage === "index.html") return;

    let currentIndex = pages.indexOf(currentPage);
    if (currentIndex === -1) return; // Если страницы нет в списке, ничего не делаем

    let prevLink = "";
    let nextLink = "";

    if (currentIndex > 0) {
        prevLink = `<a href="${pages[currentIndex - 1]}" style="margin-right:15px; color:#0066cc; text-decoration: none;">&larr; Предыдущая работа</a>`;
    } else {
        prevLink = `<span style="margin-right:15px; color:#999;">&larr; Предыдущая работа</span>`;
    }

    if (currentIndex < pages.length - 1) {
        nextLink = `<a href="${pages[currentIndex + 1]}" style="text-decoration:none; color:#0066cc;">Следующая работа &rarr;</a>`;
    } else {
        nextLink = `<span style="color:#999;">Следующая работа &rarr;</span>`;
    }

    const navHTML = `
    <div style="background: rgb(240, 244, 248); padding: 10px 15px; margin-bottom: 15px; border-bottom: 1px solid rgb(204, 204, 204); font-family: Arial, sans-serif; font-size: 14px;">
        ${prevLink}
        <a href="index.html" style="margin-right:15px; font-weight:bold; text-decoration: none; color:#222;">На главную</a> 
        ${nextLink}
    </div>
    <div style="padding: 20px 15px; margin-bottom: 20px;">
        <a href="index.html" style="color: purple; text-decoration: underline;">Назад</a>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
