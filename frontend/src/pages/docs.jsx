import { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dashboardOverview from '../assets/dashboard-overview.png';
import exportDiagram from '../assets/export-flow.jpg';

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openSections, setOpenSections] = useState(['getting-started']);

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      items: [
        { id: 'dashboard-tour', title: 'Dashboard Tour' },
        { id: 'create-project', title: 'Creating a New Project' },
        { id: 'interface-basics', title: 'Interface Basics' }
      ]
    },
    {
      id: 'building',
      title: 'Building Your Site',
      items: [
        { id: 'drag-drop', title: 'Drag & Drop Components' },
        { id: 'styling', title: 'Styling Elements' },
        { id: 'responsive-design', title: 'Responsive Design' },
        { id: 'templates', title: 'Using Templates' }
      ]
    },
    {
      id: 'exporting',
      title: 'Export & Deployment',
      items: [
        { id: 'export-html', title: 'Export HTML/CSS' },
        { id: 'export-react', title: 'Export React Components' },
        { id: 'deployment', title: 'Deployment Guide' }
      ]
    }
  ];

  const dashboardFeatures = [
    {
      title: "Toolbar",
      description: "Access design tools, undo/redo, and preview options",
      image: dashboardOverview
    },
    {
      title: "Components Panel",
      description: "Drag & drop elements onto your canvas",
      image: dashboardOverview
    },
    {
      title: "Layers Manager",
      description: "Organize and manage page elements",
      image: dashboardOverview
    }
  ];

  const exportSteps = [
    {
      title: "1. Prepare for Export",
      content: "Click the export button in the top toolbar"
    },
    {
      title: "2. Choose Format",
      content: "Select between static files, React components, or other frameworks"
    },
    {
      title: "3. Download & Use",
      content: "Integrate exported code into your development environment"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Website Builder Documentation</h1>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <nav className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Guides</h2>
            {categories.map((category) => (
              <div key={category.id} className="mb-4">
                <div className="font-medium text-gray-700 mb-2">{category.title}</div>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Dashboard Overview */}
            <section id="dashboard-tour" className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Dashboard Tour</h2>
              <Slider {...settings} className="mb-8">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="relative h-96">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Key Shortcuts</h3>
                  <ul className="space-y-1 text-sm">
                    <li>⌘ + S: Save project</li>
                    <li>⌘ + Z: Undo</li>
                    <li>⌘ + Shift + Z: Redo</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Quick Actions</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Right-click elements for context menu</li>
                    <li>Double-click to edit text</li>
                    <li>Drag borders to resize</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Preview Modes</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Desktop, Tablet & Mobile views</li>
                    <li>Dark mode simulator</li>
                    <li>Interaction preview</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Export Guide */}
            <section id="export-html" className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Exporting Your Project</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  {exportSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 border rounded-lg hover:border-blue-200 transition-colors"
                    >
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.content}</p>
                    </motion.div>
                  ))}
                </div>
                <img 
                  src={exportDiagram} 
                  alt="Export process diagram" 
                  className="w-full h-64 object-contain"
                />
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">Export Options</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">Static Files</h4>
                    <code className="text-sm bg-white p-2 rounded">
                      my-project/
                      ├── index.html
                      ├── styles/
                      └── assets/
                    </code>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">React Components</h4>
                    <code className="text-sm bg-white p-2 rounded">
                      import HeroSection from './components/Hero';
                    </code>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium mb-2">Direct Deployment</h4>
                    <p className="text-sm">One-click deploy to:</p>
                    <ul className="text-sm list-disc pl-4">
                      <li>Vercel</li>
                      <li>Netlify</li>
                      <li>AWS Amplify</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Template Usage */}
            <section id="templates" className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Working with Templates</h2>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-3">Template Features</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Pre-built page layouts
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Save custom templates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Marketplace integration
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Template versioning
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-800 p-4 flex justify-between">
                  <div className="text-white">Template Customization</div>
                  <div className="flex space-x-2">
                    <button className="text-white">HTML</button>
                    <button className="text-white">CSS</button>
                    <button className="text-white">JS</button>
                  </div>
                </div>
                <pre className="p-4 bg-gray-900 text-gray-100 overflow-x-auto">
                  {`<div class="template-container">
  <!-- Drag & drop components here -->
  <header data-editable="true">
    <nav>...</nav>
  </header>
  <main data-template-section="true">
    <!-- Content blocks -->
  </main>
</div>`}
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;