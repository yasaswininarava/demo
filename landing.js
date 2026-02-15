// Landing page — save guest info and redirect to menu
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });

  const form = document.getElementById("landingForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("guestName").value.trim();
    const tableNo = document.getElementById("tableNo").value;
    if (!name || !tableNo) return;

    sessionStorage.setItem("nolkeGuestName", name);
    sessionStorage.setItem("nolkeTableNo", tableNo);
    window.location.href = "menu.html";
  });
});
