import Header from '../components/Header'

function PitViper() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-8 text-white">
                <h2 className="text-5xl mb-4 text-pink-300 font-primary drop-shadow-x">Pit Viper</h2>
                <a
                    href="https://pitviper.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-pink-300 text-2xl mb-6 inline-block text-secondary drop-shadow-x"
                >
                    Visit Site →
                </a>

                <div className="max-w-6xl space-y-8 mx-auto">
                    <div className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm">
                        <h3 className="text-3xl font-primary mb-4 text-emerald-400 drop-shadow-x">Role & Overview</h3>
                        <p className="text-lg text-gray-300 mb-4 text-secondary">
                            As the in-house Shopify developer for Pit Viper, I maintained and enhanced their custom Shopify Plus store,
                            implementing new features, integrating apps, and managing major website updates while ensuring a seamless customer experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 text-secondary">
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
                    <div className="space-y-6">
                        <h3 className="text-3xl font-primary text-emerald-400 drop-shadow-x">Key Projects & Features</h3>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Back In Stock & Coming Soon Flows</h4>
                                    <p className="text-gray-300 text-lg mb-4 text-secondary">
                                        Implemented custom Back in Stock notifications, Coming Soon product flows, and Loyalty Exclusive waitlists
                                        integrated with Klaviyo for automated email marketing.
                                    </p>
                                    <p className="text-gray-400 text-sm text-secondary">
                                        This system helped capture customer interest for out-of-stock items and drove significant pre-launch engagement
                                        for new product releases.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/90 rounded-lg p-4 overflow-auto border border-emerald-400/20">
                                        <pre className="text-emerald-300 text-sm font-mono">
                                            <code>{`// Back in Stock Klaviyo Integration
export const handleKlaviyoBIS = async (
  klaviyoAPIKey: string,
  variantID: number | string,
  email: string,
  emailList: string
) => {
  try {
    const url = \`https://a.klaviyo.com/client/back-in-stock-subscriptions/?company_id=\${klaviyoAPIKey}\`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/vnd.api+json',
        'revision': '2025-01-15',
        'content-type': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        data: {
          type: 'back-in-stock-subscription',
          attributes: {
            profile: {
              data: {
                type: 'profile',
                attributes: {
                  email: email
                }
              }
            },
            "channels": ["EMAIL"],
          },
          relationships: {
            variant: {
              data: {
                type: 'catalog-variant',
                id: \`$shopify:::$default:::\${variantID}\`
              }
            }
          }
        }
      })
    });
    if (!response.ok) {
      throw new Error(\`Response status: \${response.status}\`);
    }
  } catch (error) {
    console.error('Subscription failed:', error);
  }
  // Handle on submit click in Modal
    const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    handleKlaviyoBIS(klaviyoAPIKey, variantID, email, emailList)
    setEmail("");
    setSubmitMessage(true);
  }
}`}</code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Loyalty Program Integration</h4>
                                    <p className="text-gray-300 text-lg mb-4 font-secondary">
                                        Led the launch and migration of Pit Viper's loyalty program, starting with Yotpo and transitioning to Rivo.
                                        Custom-implemented app integrations across account pages, cart drawer, and product pages.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Built seamless UI components that matched the brand aesthetic while maximizing loyalty program visibility and engagement.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        <img src="/pitcoin3.png"
                                             alt="Pitcoin loyalty integration"
                                             className="w-full h-full object-cover rounded-lg"/>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Rebuy Smart Recommendations</h4>
                                    <p className="text-gray-300 mb-4 text-lg font-secondary">
                                        Implemented and optimized Rebuy for intelligent product recommendations and upsells. Customized data sources
                                        using customer behavior and product data to maximize AOV and conversion rates.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Configured strategic widget placements across the site, including cart, product pages, and post-purchase flows.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        <img src="/rebuy.png" alt="Rebuy Integration" className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Major Website Redesigns</h4>
                                    <p className="text-gray-300 mb-4 font-secondary text-lg">
                                        Managed two major website updates, collaborating with external agencies on requirements while ensuring seamless
                                        transitions. Handled metafield creation, product data migrations, code quality reviews, and post-launch optimizations.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        As the in-house developer, I ensured brand consistency, maintained existing integrations, and coordinated with
                                        stakeholders to minimize downtime during critical updates.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        <img src="/old-to-new.gif"
                                             alt="Website change"
                                             className="w-full h-full object-cover rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Continuous Development & Optimization</h4>
                                    <p className="text-gray-300 mb-4 text-lg font-secondary">
                                        Performed ongoing code updates, bug fixes, and feature enhancements to support daily operations and marketing initiatives.
                                        Maintained theme code quality, implemented A/B tests, and debugged issues using Chrome DevTools.
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Regularly collaborated with marketing, design, and operations teams to quickly implement new features and
                                        resolve issues during high-traffic product launches.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        <img src="/pv-old.png"
                                             alt="Website Old"
                                             className="w-full h-full object-cover rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PitViper
