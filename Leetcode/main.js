// Write text to the html page using the innerHTML property
function rewrite(ave) {
  const message = document.getElementById('message');
  message.innerHTML = `The average cubic meter weight for 'Air Conditioners' is ${ave} kg or ${ave * 1000} grams`;
}

// Fetch from API and calculate average weight
function fetchData(apiUrl, total, size, search) {
  // Termination Case
  if (apiUrl === null) {
    const ave = Math.round((total / size) * 10) / 10;
    rewrite(ave);
  }
  // Set counters
  let sum = total;
  let len = size;
  // Fetch data from API
  fetch(`http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com${apiUrl}`)
    .then((res) => res.json())
    .then((data) => {
      // Loop through object and get category
      for (let index = 0; index < data.objects.length; index += 1) {
        const { category } = data.objects[index];
        // Check for category, calculate and aggregate weight
        if (category === search) {
          const { width } = data.objects[index].size;
          const { length } = data.objects[index].size;
          const { height } = data.objects[index].size;
          sum += width * length * height * 10 ** -6 * 250;
          len += 1;
        }
      }
      // get closer to the base case and do some small work
      return fetchData(data.next, sum, len, search);
    });
}

// Listen for event
function init() {
  const clickMe = document.getElementById('clickme');
  // Initialize var
  const apiUrl = '/api/products/1';
  const total = 0;
  const size = 0;
  const search = 'Air Conditioners';
  // Call Function on click
  clickMe.onclick = fetchData(apiUrl, total, size, search);
}
