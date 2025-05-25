
import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, Database, Globe, FileText } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">AmirHossein</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              AmirHossein
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-8 animate-slide-up">
              Full-Stack Developer & Python Specialist
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay">
              Crafting digital experiences with HTML, CSS, WordPress, and Python. 
              Passionate about clean code and innovative solutions.
            </p>
          </div>
          <div className="flex justify-center space-x-6 animate-fade-in-delay">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <a 
              href="#skills" 
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View Skills
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate programmer with expertise in web development and backend systems. 
                My journey in coding started with HTML and CSS, evolving into complex WordPress solutions 
                and powerful Python applications.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I believe in writing clean, efficient code that not only works but is maintainable 
                and scalable. Whether it's creating responsive websites or developing robust backend 
                systems, I bring creativity and technical excellence to every project.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-blue-300">
                  <Code className="w-5 h-5" />
                  <span>Clean Code Advocate</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Globe className="w-5 h-5" />
                  <span>Full-Stack Developer</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-white/90">
                  <li>• 5+ years of programming experience</li>
                  <li>• Expert in WordPress development</li>
                  <li>• Python automation specialist</li>
                  <li>• Responsive design enthusiast</li>
                  <li>• Always learning new technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* HTML Skill Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-orange-400 transition-all transform hover:scale-105 group">
              <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">HTML</h3>
              <p className="text-white/70 text-center mb-4">
                Semantic markup, accessibility, and modern HTML5 features
              </p>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-11/12"></div>
              </div>
              <p className="text-orange-400 text-center mt-2 font-semibold">95%</p>
            </div>

            {/* CSS Skill Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-blue-400 transition-all transform hover:scale-105 group">
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">CSS</h3>
              <p className="text-white/70 text-center mb-4">
                Advanced styling, animations, Flexbox, Grid, and responsive design
              </p>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-10/12"></div>
              </div>
              <p className="text-blue-400 text-center mt-2 font-semibold">90%</p>
            </div>

            {/* WordPress Skill Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-purple-400 transition-all transform hover:scale-105 group">
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">WordPress</h3>
              <p className="text-white/70 text-center mb-4">
                Custom themes, plugins, WooCommerce, and site optimization
              </p>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full w-9/12"></div>
              </div>
              <p className="text-purple-400 text-center mt-2 font-semibold">85%</p>
            </div>

            {/* Python Skill Card */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-green-400 transition-all transform hover:scale-105 group">
              <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-3">Python</h3>
              <p className="text-white/70 text-center mb-4">
                Web frameworks, automation, data analysis, and API development
              </p>
              <div className="bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-10/12"></div>
              </div>
              <p className="text-green-400 text-center mt-2 font-semibold">88%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white/80">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>amirhossein@example.com</span>
                </div>
                <div className="flex items-center space-x-4 text-white/80">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 AmirHossein. Built with passion and clean code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;