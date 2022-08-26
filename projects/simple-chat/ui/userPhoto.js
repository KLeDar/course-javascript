export default class UserPhoto {
  constructor(element, onUpload) {
    this.element = element;
    this.onUpload = onUpload;

    this.element.addEventListener('dragover', (e) => {
      if (e.dataTransfer.items.length && e.dataTransfer.items[0].kind === 'file') {
        e.preventDefault();
      }
    });

    document
      .querySelector('[data-role=user-photo-input]')
      .addEventListener('change', (e) => {
        const input = document.querySelector('[data-role=user-photo-input]');
        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        console.log(reader.result);
        reader.addEventListener('load', () => this.onUpload(reader.result));
        e.preventDefault();
        input.value = null;
      });

    this.element.addEventListener('drop', (e) => {
      const file = e.dataTransfer.items[0].getAsFile();
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener('load', () => this.onUpload(reader.result));
      e.preventDefault();
    });
  }

  set(photo) {
    this.element.style.backgroundImage = `url(${photo})`;
    document.querySelector(
      '[data-role=user-photo]'
    ).style.backgroundImage = `url(${photo})`;
  }
}
