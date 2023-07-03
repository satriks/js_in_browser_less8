
if (!getCookie()){
    document.getElementById('subscribe-modal').classList.add('modal_active')
    document.querySelector('.modal__close').addEventListener('click', closeModal)
}

function getCookie(name ='closeAdd') {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function setCookies() {
    document.cookie = encodeURIComponent('closeAdd') + '=' + encodeURIComponent('true')
}

function closeModal() {
    document.getElementById('subscribe-modal').classList.remove('modal_active')
    setCookies()
}