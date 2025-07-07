$(document).ready(function () {
  const dropZone = $("#drop-zone");
  const imageInput = $("#imageInput");
  const preview = $("#preview");

  dropZone.on("click", function () {
    imageInput.click();
  });

  imageInput.on("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      preview.attr("src", URL.createObjectURL(file)).show();
    }
  });

  dropZone.on("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.addClass("dragover");
  });

  dropZone.on("dragleave", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.removeClass("dragover");
  });

  dropZone.on("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.removeClass("dragover");

    const file = e.originalEvent.dataTransfer.files[0];
    if (file) {
      imageInput[0].files = e.originalEvent.dataTransfer.files;
      preview.attr("src", URL.createObjectURL(file)).show();
    }
  });

  $("#uploadForm").on("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    console.log("Form Data:", formData.get("image"));

    $.ajax({
      url: "http://localhost:5000/upload",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (res) {
        alert("Image uploaded successfully!");
      },
      error: function () {
        alert("Upload failed. Try again.");
      },
    });
  });
});
