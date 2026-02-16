import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { TextArea } from "../ui/TextArea"

export const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add form submission logic here
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <Input 
                    id="name"
                    label="Name"
                    type="text"
                    placeholder="Your Name"
                    required
                />
            </div>
            <div>
                <Input 
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    required
                />
            </div>
            <div>
                <TextArea
                    id="message"
                    label="Message"
                    placeholder="How can we help?"
                    rows={4}
                    required
                />
            </div>
            <Button type="submit" className="w-full">
                Send Message
            </Button>
        </form>
    )
}
