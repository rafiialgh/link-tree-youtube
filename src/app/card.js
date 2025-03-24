const Card = (props) => (
  <>
      <div
        className="relative z-10 flex mb-10 w-72 ">
        {/* <a href={props.href} className="w-full px-4 py-4 mx-3 text-sm text-center truncate border border-gray-600 font-robotoMono bg-gradient-to-r from-blue-900 to-blue-950 rounded-2xl">{props.name}</a> */}
        <iframe  className="w-full " src={`https://www.youtube.com/embed/${props.href}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
  </>
)

export default Card