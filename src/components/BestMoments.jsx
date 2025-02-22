import { testimonials } from "../constants"
const BestMoments = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            Best{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Moments
            </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        {/* <p>{testimonial.text}</p> */}
                        <div className="flex mt-2 mb-3 items-start">
                            <img className="w-full h-full mr-6 border border-neutral-100" src={testimonial.image} alt={testimonial.user} />
                            
                        </div>
                        <div>
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BestMoments