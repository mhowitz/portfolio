import Header from '../components/Header'

function PitViperB2B() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-8 text-white">
                <h2 className="text-5xl mb-4 text-pink-300 font-primary drop-shadow-x">Pit Viper B2B</h2>
                <p className="text-xl text-emerald-400 mb-6 drop-shadow-x">Custom Wholesale Platform</p>
                <div className="max-w-6xl space-y-8 mx-auto">
                    <div className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm">
                        <h3 className="text-3xl font-primary mb-4 text-emerald-400 drop-shadow-x">Project Overview</h3>
                        <p className="text-lg text-gray-300 mb-4 font-secondary">
                            Built and maintained a custom Shopify Plus B2B wholesale platform for Pit Viper, enabling streamlined bulk ordering
                            for retailers and distributors with custom pricing, approval workflows, and specialized features.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 font-secondary">
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Shopify Plus</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">React</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">TypeScript</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Checkout Extensions</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">NetSuite</span>
                            <span className="bg-emerald-400/20 px-3 py-1 rounded-full text-emerald-300 text-sm">Celigo</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-primary text-emerald-400 drop-shadow-x">Key Features & Development</h3>

                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Custom Checkout Extension: Ship Date Picker</h4>
                                    <p className="text-gray-300 mb-4 text-lg font-secondary">
                                        Developed a custom Shopify checkout extension using JSX and the Shopify API that allows wholesale customers
                                        to select preferred shipping dates during checkout. Integrated with order management workflows for fulfillment planning.
                                    </p>
                                    <p className="text-gray-400 text-sm font-secondary">
                                        This feature improved logistics coordination between Pit Viper and wholesale partners, reducing shipping errors
                                        and giving retailers better control over delivery timing for their inventory planning.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/90 rounded-lg p-4 overflow-auto border border-emerald-400/20">
                                        <pre className="text-emerald-300 text-sm font-mono">
                                            <code>{`//Check if the product is a prebook product
useEffect(() => {
    let foundMetafield = false;
    for (const cartLine of cartLines) {
      const variant = cartLine.merchandise;
      variant.id = String(variant.id.match(/(\\d+)$/)[0]);
      for (const metafieldEntry of appMetafields) {
        if (
            metafieldEntry.target.type === "variant" &&
            metafieldEntry.target.id === variant.id &&
            metafieldEntry.metafield.namespace === "custom" &&
            metafieldEntry.metafield.key === "prebook" &&
            metafieldEntry.metafield.value === "true"
        ) {
          foundMetafield = true;
          break;
        }
      }
      if (foundMetafield) {
        break;
      }
    }
    setIsPrebook(foundMetafield ? "true" : "false");
  }, [cartLines, appMetafields, isPrebook, themeSettings, heading]);

//return shopify checkout extension
return (isPrebook === 'true' ? (
      <s-box padding="base">
          <s-heading>Select a Prebook Ship Date Starting {prebookMonthElement}, {year}</s-heading>
          <s-box padding="base">
              <s-date-picker
                  value={heading}
                  defaultView={\`\${year}-\${month}\`}
                  onChange={handleChangeDate}
                  allow={\`\${heading}\--\`}
                  disallowDays="sunday"
              />
          </s-box>
      </s-box>
  ) : (
      <s-box padding="base">
          <s-heading>Select a date for delivery</s-heading>
          <s-box padding="base">
              <s-date-picker
                  value={selectedDate}
                  onChange={handleChangeDate}
                  disallow={\`--\${yesterday}\`}
                  disallowDays="sunday"
              />
          </s-box>
      </s-box>
  ));`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">Custom Theme Development</h4>
                                    <p className="text-gray-300 text-lg font-secondary mb-4">
                                        Built a specialized Shopify theme for the B2B storefront with bulk ordering capabilities, custom pricing displays
                                        for different customer tiers, and streamlined navigation optimized for wholesale purchasing patterns.
                                    </p>
                                    <p className="text-gray-400 text-sm font-secondary">
                                        The theme features include quick order forms, quanity selectors, and wholesale-specific product
                                        information like live inventory and SKU.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        <img src="/miami.png"
                                             alt="Website"
                                             className="w-full h-full object-cover rounded-lg"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800/70 p-6 rounded-lg backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <h4 className="text-3xl font-primary mb-4 text-pink-300 drop-shadow-x">App Integrations & Automation</h4>
                                    <p className="text-gray-300 mb-4 font-secondary text-lg">
                                        Integrated and configured multiple Shopify apps to enhance B2B functionality, including catalog importing and exporting, checkout customization, and an invoice generator.
                                        Connected the platform with NetSuite via Celigo for real-time inventory sync and order fulfillment.
                                    </p>
                                    <p className="text-gray-400 text-sm font-secondary">
                                        These integrations automated manual processes, reduced order errors, and provided seamless data flow between
                                        Shopify and the company's ERP system.
                                    </p>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
                                        <img src="/catalog-csv.png"
                                             alt="Catalog import and export"
                                             className="w-full h-full object-cover rounded-lg"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800/70 p-8 rounded-lg backdrop-blur-sm">
                        <h3 className="text-3xl font-primary mb-4 text-emerald-400 drop-shadow-x">Impact</h3>
                        <p className="text-lg text-gray-300 font-secondary">
                            Successfully launched and am maintaining a robust B2B platform that streamlined wholesale operations, improved order accuracy,
                            and provided retailers with a professional, efficient purchasing experience that matches Pit Viper's brand standards.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PitViperB2B
