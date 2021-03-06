
const Mask = {
  apply(input, func) {
    setTimeout(() => {
      input.value = Mask[func](input.value);
    }, 10);
  },
  formatBRL(value) {
    value = value.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value / 100);
  },
};

const PhotosUpload = {
  uploadLimit: 6,

  handleFileInput(event) {
    const { files: fileList } = event.target;
    const { uploadLimit } = PhotosUpload;
    if (fileList.length > uploadLimit) {
      alert(`Envie no máximo ${uploadLimit} fotos`)
      event.preventDefault()
      return
    }

    Array.from(fileList).forEach( file => {

      const reader = new FileReader()

      reader.onload = () => {
        const image = new Image()
        image.src = String(reader.result)
        image.classList.add('image__max')

        const div = document.createElement('div')
        div.classList.add('photo')

        div.onclick = () => alert("click")
        div.appendChild(image)

        document.querySelector('#photos-preview').appendChild(div)
        
      }
      reader.readAsDataURL(file)
    })

  },
};
