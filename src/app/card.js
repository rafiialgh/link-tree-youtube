const Card = (props) => (
  <>
      <div
        className="flex w-72 relative z-10 mb-10 px-7 py-4 bg-gradient-to-r from-blue-900 to-blue-950 border border-gray-600 rounded-2xl truncate sm:mx-7">
        <a href={props.href} className="font-robotoMono text-sm max-w-full">{props.name}</a>
      </div>
  </>
)

export default Card