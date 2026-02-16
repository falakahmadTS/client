import { ArrowRight, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="text-center space-y-8 py-10 lg:py-20">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                    Build something <span className="text-blue-600">amazing</span> today.
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    A professional starter template to kickstart your next big project. fast, responsive, and beautiful.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link to="/about" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                        Learn More
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Fast Performance", description: "Optimized for speed and efficiency." },
                    { title: "Responsive Design", description: "Looks great on any device, anywhere." },
                    { title: "Secure & Reliable", description: "Built with security best practices in mind." },
                ].map((feature, index) => (
                    <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
