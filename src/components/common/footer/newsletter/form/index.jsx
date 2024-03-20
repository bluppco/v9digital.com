// IMPORTS ATOMS
import GrayButton from "@/atoms/button/gray/jsx/index.jsx"

const NewsletterForm = () => {

    return(
        <div className="flex items-center pt-6">
            <input
                className="h-10 w-72 bg-transparent border-2 border-v9_light_gray px-4 text-sm text-v9_light_gray"
                name="email"
                placeholder="Email Address"
            />
            <GrayButton>Subscribe</GrayButton>
        </div>
    )

}

export default NewsletterForm
