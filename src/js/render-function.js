export function createGalleryItem ({webformatURL, tags, downloads, imageSize, userImageURL}) {
return `<li class="gallery-item">
<div class="img-wrap">
<a href="${userImageURL}" target="blank"> <img src="${webformatURL}" alt="${tags}"/></a>
</div>

<ul class="gallery-item__contents-list">
<li class="img-content">
<h2>Downloads</h2>
<p>${downloads}</p>
</li>

<li class="img-content">
<h2>Tags</h2>
<p>${tags}</p>
</li>

<li class="img-content">
<h2>ImageSize</h2>
<p>${imageSize}</p>
</li>

</ul>
</li>`;
}
export function clearGallery(elem) {
  elem.innerHTML = '';
}
function renderGallery(galleryList, obj) {
  galleryList.insertAdjacentHTML('beforeend', obj);
}