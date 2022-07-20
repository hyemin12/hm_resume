const saveBtn = document.querySelector("#save-btn");

const element = document.querySelector("#root");
function savePdf() {
  html2pdf()
    .from(element)
    .set({
      margin: [10, 0, 9, 0],
      filename: "고혜민_이력서.pdf",
      html2canvas: { scale: 1 },
      jsPDF: {
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compressPDF: true,
      },
      pagebreak: { mode: "legacy" },
    })
    .save();
}

saveBtn.addEventListener("click", savePdf);
