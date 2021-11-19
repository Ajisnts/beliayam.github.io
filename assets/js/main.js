function myFunction() {
  // Declare variables
  var input, filter, ul, li, h5, i;
  input = document.getElementById('mySearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById('myMenu');
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h5 = li[i].getElementsByTagName('h5')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}
