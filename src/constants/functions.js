export function getRandomProfileImage() {
  const images = [
    'https://mui.com/static/images/avatar/3.jpg',
    'https://mui.com/static/images/avatar/4.jpg',
    'https://mui.com/static/images/avatar/7.jpg',
  ];
  return images[Math.floor(Math.random() * images.length)];
}
