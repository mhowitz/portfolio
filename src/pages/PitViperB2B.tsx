import Header from '../components/Header'

function PitViperB2B() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-8 text-white">
                <h2 className="text-5xl mb-4 text-pink-200 font-primary">Pit Viper B2B</h2>
                <p className="text-xl text-emerald-400 mb-6">Custom Wholesale Platform</p>

                <div className="max-w-6xl space-y-8">
                    {/* Overview */}
                    <div className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm">
                        <h3 className="text-3xl font-primary mb-4 text-emerald-400">Project Overview</h3>
                        <p className="text-lg text-gray-300 mb-4">
                            Built and maintained a custom Shopify Plus B2B wholesale platform for Pit Viper, enabling streamlined bulk ordering
                            for retailers and distributors with custom pricing, approval workflows, and specialized features.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">React</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">TypeScript</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Checkout Extensions</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">NetSuite</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Celigo</span>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-primary text-emerald-400">Key Features & Development</h3>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Custom Checkout Extension: Ship Date Picker</h4>
                                    <p className="text-gray-300 mb-3">
                                        Developed a custom Shopify checkout extension using React and TypeScript that allows wholesale customers
                                        to select preferred shipping dates during checkout. Integrated with order management workflows for fulfillment planning.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        This feature improved logistics coordination between Pit Viper and wholesale partners, reducing shipping errors
                                        and giving retailers better control over delivery timing for their inventory planning.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-b2b-datepicker.gif" alt="Date Picker Checkout Extension" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Custom Theme Development</h4>
                                    <p className="text-gray-300 mb-3">
                                        Built a specialized Shopify theme for the B2B storefront with bulk ordering capabilities, custom pricing displays
                                        for different customer tiers, and streamlined navigation optimized for wholesale purchasing patterns.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        The theme features include quick order forms, minimum order quantity enforcement, and wholesale-specific product
                                        information like case quantities and bulk pricing breakdowns.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-b2b-theme.png" alt="B2B Theme" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">App Integrations & Automation</h4>
                                    <p className="text-gray-300 mb-3">
                                        Integrated and configured multiple Shopify apps to enhance B2B functionality, including customer approval workflows,
                                        tiered pricing structures, and automated order processing. Connected the platform with NetSuite via Celigo for
                                        real-time inventory sync and order fulfillment.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        These integrations automated manual processes, reduced order errors, and provided seamless data flow between
                                        Shopify and the company's ERP system.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-b2b-integrations.png" alt="App Integrations" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Account Management & Customer Portal</h4>
                                    <p className="text-gray-300 mb-3">
                                        Developed custom account pages for wholesale customers with order history, invoice access, credit limit tracking,
                                        and reorder functionality. Built intuitive dashboards showing key metrics and account status.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        These features empowered wholesale partners to self-service, reducing support overhead while improving
                                        the overall B2B purchasing experience.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-b2b-account.png" alt="Customer Portal" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm">
                        <h3 className="text-3xl font-primary mb-4 text-emerald-400">Impact</h3>
                        <p className="text-lg text-gray-300">
                            Successfully launched and maintained a robust B2B platform that streamlined wholesale operations, improved order accuracy,
                            and provided retailers with a professional, efficient purchasing experience that matched Pit Viper's brand standards.
                        </p>
                    </div>

                    {/* How to add images */}
                    <div className="mt-8 p-4 bg-emerald-400/10 rounded-lg border border-emerald-400/30">
                        <p className="text-sm text-emerald-300">
                            💡 <strong>To add screenshots/GIFs:</strong> Place your images in the <code className="bg-gray-900 px-2 py-1 rounded">public/</code> folder
                            (e.g., <code className="bg-gray-900 px-2 py-1 rounded">public/pitviper-b2b-datepicker.png</code>) and uncomment the img tags in the code.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PitViperB2B
