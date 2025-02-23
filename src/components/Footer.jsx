import { OurStoryLinks, TripsLink, Life } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">
          Our Story
          </h3>
          <ul className="space-y-2">
            {OurStoryLinks.map((link, index) =>(
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">
          Trips
          </h3>
          <ul className="space-y-2">
            {TripsLink.map((link, index) =>(
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">
          Life
          </h3>
          <ul className="space-y-2">
            {Life.map((link, index) =>(
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer