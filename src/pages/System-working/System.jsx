import React from 'react'

function System() {
  return (
    <>
      <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">How Our System Works</h2>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Threat detection process" 
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Detection</h3>
                        <p className="text-gray-600">Our system scans digital channels for potential bomb threats using advanced algorithms.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Analysis</h3>
                        <p className="text-gray-600">Each threat is analyzed for credibility, origin, and potential risk level.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Verification</h3>
                        <p className="text-gray-600">Our team of experts verifies each threat to determine appropriate response.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start mb-2">
                      <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Action</h3>
                        <p className="text-gray-600">Law enforcement is notified of credible threats while hoaxes are documented for pattern analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default System