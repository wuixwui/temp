const aside = document.querySelector('aside');
const noticeOpenBtn = aside.querySelector('.open');
const noticeContents = aside.querySelector('.side-container');
const noticeContent = aside.querySelectorAll('.side');

function noticeToggleHandler(e) {
  e.preventDefault();
  if (!noticeContents.classList.contains('closed')) {
    noticeContents.classList.add('closed');
  } else {
    noticeContents.classList.remove('closed');
  }
}

noticeOpenBtn.addEventListener('click', noticeToggleHandler);
