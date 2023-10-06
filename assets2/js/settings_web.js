// Firebase Realtime Database reference
const db = firebase.database();
const settingsRef = db.ref("settings_vscn_011023");

const address = document.querySelectorAll(".address_vscn");
const phone_number = document.querySelectorAll(".phone_number_vscn");
const phone1 = document.querySelector(".phone-1");
const phone2 = document.querySelector(".phone-2");
const email = document.querySelectorAll(".email_vscn");
const businessHours = document.querySelectorAll(".business-hours");
const linkWeb = document.querySelectorAll(".link-web");

settingsRef.once("value").then((snapshot) => {
  const settings = snapshot.val();
  console.log(snapshot.val());
  if (settings) {
    // Hiển thị thông tin cài đặt trong DOM
    if (address) {
      address.forEach(function(element) {
        element.innerHTML = settings.shopAddress;
      })
    }
    if (phone_number) {
      phone_number.forEach(function(element) {
        element.innerHTML = settings.phone1;
      })
    }
    if (email) {
      email.forEach(function (element) {
        element.innerHTML = settings.emailGara;
      });
    }
    if(linkWeb) {
      linkWeb.forEach(function(element) {
        element.innerHTML= settings.linkWeb
      })
    }
    if (phone1) {
      phone1.innerHTML = settings.phone1;
    }
    if (phone2) {
      phone2.innerHTML = settings.phone2;
    }
    if (businessHours) {
      businessHours.forEach(function(element) {
        element.innerHTML = settings.businessHours;
      })
    }
  }
});
