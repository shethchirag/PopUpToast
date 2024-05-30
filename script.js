const showToast = document.querySelector(".show-toast");
const toastSide = document.querySelector(".toast-container");
const verticalPosition = document.querySelector("#verticall-position");
const horizontalPosition = document.querySelector("#horizontal-position");
const toastContainer = document.querySelector(".toast-container");
const toastMessage = document.querySelector(".toast-message");
const toastType = document.querySelector("#toast-type");
const duration = document.querySelector(".duration");
console.log(duration.value);

showToast.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = ` ${toastMessage.value} <span> ✕</span>`;
  if (toastType.value === "success") {
    toast.classList.add("success");
  } else if (toastType.value === "error") {
    toast.classList.add("error");
  } else if (toastType.value === "warning") {
    toast.classList.add("warning");
  } else if (toastType.value === "info") {
    toast.classList.add("info");
  }
  toastContainer.append(toast);

  if (verticalPosition.value === "bottom") {
    toastSide.classList.add("bottom");
  } else {
    toastSide.classList.remove("bottom");
  }
  if (horizontalPosition.value === "right") {
    toastSide.classList.add("right");
  } else {
    toastSide.classList.remove("right");
  }

  function removeToast() {
    toast.classList.add("go-left");
    setTimeout(() => {
      toast.remove();
    }, 100);
  }
  const closeButton = toast.querySelector("span");
  closeButton.addEventListener("click", () => {
    removeToast();
  });

  setTimeout(() => {
    removeToast();
  }, parseInt(duration.value) * 500);
});
