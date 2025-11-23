import Header from '../components/Header'

function PitViper() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-8 text-white">
                <h2 className="text-5xl mb-4 text-pink-200 font-primary">Pit Viper</h2>
                <a
                    href="https://pitviper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-pink-200 text-xl mb-6 inline-block"
                >
                    Visit Site →
                </a>

                <div className="max-w-6xl space-y-8">
                    {/* Overview */}
                    <div className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm">
                        <h3 className="text-3xl font-primary mb-4 text-emerald-400">Role & Overview</h3>
                        <p className="text-lg text-gray-300 mb-4">
                            As the in-house Shopify developer for Pit Viper, I maintained and enhanced their custom Shopify Plus store,
                            implementing new features, integrating apps, and managing major website updates while ensuring a seamless customer experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">HTML</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">CSS</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">JavaScript</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Liquid</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">NetSuite</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Celigo</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Git</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">A/B Testing</span>
                        </div>
                    </div>

                    {/* Key Projects */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-primary text-emerald-400">Key Projects & Features</h3>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Back In Stock & Coming Soon Flows</h4>
                                    <p className="text-gray-300 mb-3">
                                        Implemented custom Back in Stock notifications, Coming Soon product flows, and Loyalty Exclusive waitlists
                                        integrated with Klaviyo for automated email marketing.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        This system helped capture customer interest for out-of-stock items and drove significant pre-launch engagement
                                        for new product releases.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-backinstock.png" alt="Back in Stock" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Loyalty Program Integration</h4>
                                    <p className="text-gray-300 mb-3">
                                        Led the launch and migration of Pit Viper's loyalty program, starting with Yotpo and transitioning to Rivo.
                                        Custom-implemented app integrations across account pages, cart drawer, and product pages.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Built seamless UI components that matched the brand aesthetic while maximizing loyalty program visibility and engagement.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-loyalty.gif" alt="Loyalty Program" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Rebuy Smart Recommendations</h4>
                                    <p className="text-gray-300 mb-3">
                                        Implemented and optimized Rebuy for intelligent product recommendations and upsells. Customized data sources
                                        using customer behavior and product data to maximize AOV and conversion rates.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Configured strategic widget placements across the site, including cart, product pages, and post-purchase flows.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-rebuy.png" alt="Rebuy Integration" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Major Website Redesigns</h4>
                                    <p className="text-gray-300 mb-3">
                                        Managed two major website updates, collaborating with external agencies on requirements while ensuring seamless
                                        transitions. Handled metafield creation, product data migrations, code quality reviews, and post-launch optimizations.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        As the in-house developer, I ensured brand consistency, maintained existing integrations, and coordinated with
                                        stakeholders to minimize downtime during critical updates.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-redesign.png" alt="Website Redesign" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-2/3">
                                    <h4 className="text-2xl font-primary mb-3 text-pink-200">Continuous Development & Optimization</h4>
                                    <p className="text-gray-300 mb-3">
                                        Performed ongoing code updates, bug fixes, and feature enhancements to support daily operations and marketing initiatives.
                                        Maintained theme code quality, implemented A/B tests, and debugged issues using Chrome DevTools.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Regularly collaborated with marketing, design, and operations teams to quickly implement new features and
                                        resolve issues during high-traffic product launches.
                                    </p>
                                </div>
                                <div className="md:w-1/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        {/* Add screenshot: <img src="/pitviper-features.gif" alt="Features" className="w-full h-full object-cover rounded-lg" /> */}
                                        <p className="text-gray-500 text-sm text-center px-4">Add screenshot/GIF here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How to add images */}
                    <div className="mt-8 p-4 bg-emerald-400/10 rounded-lg border border-emerald-400/30">
                        <p className="text-sm text-emerald-300">
                            💡 <strong>To add screenshots/GIFs:</strong> Place your images in the <code className="bg-gray-900 px-2 py-1 rounded">public/</code> folder
                            (e.g., <code className="bg-gray-900 px-2 py-1 rounded">public/pitviper-backinstock.png</code>) and uncomment the img tags in the code.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PitViper
