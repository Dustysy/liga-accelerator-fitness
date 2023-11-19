const videoContainer = document.querySelector('[data-video="parent"]');
const button = videoContainer.querySelector('[data-video="button"]');

const onVideoClick = () => {
  videoContainer.classList.add('is-active')
}

const showVideo = () => {
  button.addEventListener('click', onVideoClick);
}

export { showVideo };
