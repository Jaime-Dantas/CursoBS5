const head=document.head
const body=document.body

const estilo="<link href='https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN' crossorigin='anonymous'/>"
head.innerHTML+=estilo

const header=document.createElement("header")
header.setAttribute("class", "container my-5")

body.prepend(header)

