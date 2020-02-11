const data = [
  {
    id: 'vishal-komal',
    name: 'Vishal&nbsp;&nbsp;&amp;&nbsp;&nbsp;Komal',
    statement: '',
    date: 'February, 2020',
    count: 20,
  },
  {
    id: 'naitik-viddhi',
    name: 'Naitik&nbsp;&nbsp;&amp;&nbsp;&nbsp;Viddhi',
    statement: '',
    date: 'April, 2019',
    count: 10,
  },
  {
    id: 'jasmi-meet',
    name: 'Jasmi&nbsp;&nbsp;&amp;&nbsp;&nbsp;Meet',
    statement: '',
    date: 'March, 2019',
    count: 7,
  },
];

$('#storyInModal').on('shown.bs.modal', function () {
  $('.slider')[0].slick.setPosition(0);
  $('.slider')[1].slick.setPosition(0);
});

function changeModalContent(value) {
  if ($('.slider-for').hasClass('slick-initialized')) {
    $('.slider-for').slick('destroy');
  }
  if ($('.slider-nav').hasClass('slick-initialized')) {
    $('.slider-nav').slick('destroy');
  }

  let htmldata = '';
  let htmlSmallData = '';
  for (let i = 0; i < data.find(portfolio => portfolio.id === value).count; i++) {
    htmldata += `
      <div class="story-large text-center mx-auto">
        <img class="mx-auto image" src="./assets/pre-wed/${value}/${i + 1}.JPG" />
      </div>
    `;
    htmlSmallData += `
      <div class="story-small text-center">
          <img class="mx-auto" src="./assets/pre-wed/${value}/${i + 1}.JPG" />
      </div>
    `;
  }
  $('#modal-large-contents').html(htmldata);
  $('#modal-small-contents').html(htmlSmallData);

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true
  });

}

function renderPortfolio() {
  let htmlData = '';

  for (let i=0; i<data.length; i++) {
    htmlData += `
      <div class="card">
        <div class="card-header" id="heading${i}">
          <div class="row story">
            <div class="story-cover col-12">
              <div class="story-cover-text">
                ${data[i].name}
              </div>
            </div>
            <div class="col-9 story-title"></div>
            <div class="col-3 story-date">
              ${data[i].date}
            </div>
            <div class="col-12 story-text">
              ${data[i].statement}
            </div>
          </div>
          <h2 class="mb-0 text-center">
            <button
              class="btn btn-outline-dark"
              onclick="changeModalContent('${data[i].id}')"
              type="button"
              data-toggle="collapse"
              data-target="#story${i}"
              aria-expanded="true"
              aria-controls="story${i}"
            >
              View
            </button>
          </h2>
        </div>

        <div
          id="story${i}"
          class="collapse"
          aria-labelledby="heading${i}"
          data-parent="#stories-accordion"
        >
          <div class="card-body text-center">
            <img class="collage" id="collage-${i}" src="assets/pre-wed/${data[i].id}/collage.JPG" />
          </div>
        </div>
      </div>
    `;
    
  }

  $('#stories-accordion').html(htmlData);

  for (let i=0; i<data.length; i++) {
    $(`#collage-${i}`).click(function () {
      $('#storyInModal').modal('show');
    });
  }
}

renderPortfolio();