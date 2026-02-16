
export const About = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <section className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
                <p className="text-xl text-gray-600">
                    We are a passionate team dedicated to building high-quality software that makes a difference.
                </p>
            </section>

            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                        To provide developers and businesses with the tools they need to succeed in a digital-first world. We believe in simplicity, performance, and elegance.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="bg-gray-200 rounded-2xl h-64 w-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for an image */}
                    <span>Team Image Placeholder</span>
                </div>
            </section>
        </div>
    )
}
