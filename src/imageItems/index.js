import './index.css'

const ImageItems = props => {
  const {eachThumb, onThumbClick} = props
  const {id, thumbnailUrl} = eachThumb

  const onBtnclick = () => {
    onThumbClick(id)
  }

  return (
    <li className="thumb-items">
      <button className="thumb-btn" type="button" onClick={onBtnclick}>
        <img src={thumbnailUrl} alt="thumbnails" className="thumb-image" />
      </button>
    </li>
  )
}

export default ImageItems
