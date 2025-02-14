document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
    <iframe 
        class="contact__iframe"
        frameborder="0" 
        scrolling="no" 
        marginheight="0"
        marginwith="0" 
        style="border:0;" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.0896985991382!2d-75.61358234988968!3d6.268696454798737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a3e3182add%3A0xf4b4009193b3a380!2sDep%C3%B3sito%20y%20Materiales%20La%20Virgen!5e0!3m2!1ses-419!2sco!4v1739563920230!5m2!1ses-419!2sco" 
    ></iframe>
  `;
  }, 500);
});
