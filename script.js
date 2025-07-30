"use strict";
const emailInput = document.getElementById("emailInput");
const submitEmailBtn = document.getElementById("submitEmailBtn");
const personalInfoShow = document.querySelector(".personal-info-show");
const emailMessage = document.getElementById("emailMessage");
const toggleButtons = document.querySelectorAll(".view-toggle-btn");

//Hàm kiểm tra email
function isValidEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

submitEmailBtn.addEventListener("click", function () {
  const email = emailInput.value.trim(); // bỏ khoảng trắng

  if (isValidEmail(email)) {
    personalInfoShow.classList.remove("hidden");
    emailInput.style.display = "none"; // ẩn các nội dung của ô nhập liệu
    submitEmailBtn.style.display = "none";
    emailMessage.style.display = "none";
  } else {
    emailMessage.textContent =
      "Nội dung nhập không hợp lệ. Vui lòng nhập một địa chỉ email hợp lệ để xác thực.";
    emailMessage.style.color = "#f44336";
  }
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetCardId = this.dataset.target;
    const cardItem = document.getElementById(targetCardId);
    const cardContent = cardItem.querySelector(".card-content");
    cardContent.classList.toggle("expanded");
    cardItem.classList.toggle("expanded");
    if (cardContent.classList.contains("expanded")) {
      this.textContent = "Collapse ▲";
    } else {
      this.textContent = "View More ▼";
    }
  });
});
