import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, updateImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = galleryDetails
  const thumbnailUrlClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickImage = () => {
    updateImage(id)
  }

  return (
    <li className="image_list">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailUrlClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
