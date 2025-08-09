import { Mail, Phone, Linkedin, Globe, Github, Code, Folder, GraduationCap, Languages, Heart, Trophy, ExternalLink, MapPin,FileUser } from 'lucide-react';

export default function CVPage() {
  const skills = {
    Frontend: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
    Backend: ['Node.js', 'Prisma', 'REST APIs'],
    Database: ['PostgreSQL'],
    'Tools & Libraries': ['Git', 'GitHub', 'Axios', 'Zod', 'React Hook Form', 'Stripe Integration'],
    Other: ['Responsive Design', 'API Integration', 'Payment Gateways']
  };

  const projects = [
    {
      title: 'LMS Platform',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Zod', 'React Hook Form'],
      description: 'A complete Learning Management System with course creation, quizzes, user authentication, and secure payment processing using Stripe. Authentication system is protected with a cache-backed layer for session performance and extra security.',
      features: ['Course & Quiz Management', 'Secure Authentication', 'Stripe Payments', 'Progress Tracking'],
      link: 'https://lms-progect.vercel.app/',
      status: 'live',
      color: 'blue'
    },
    {
      title: 'Full Stack Todo App',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      description: 'A modern task management web app with full CRUD functionality and a clean, responsive UI.',
      features: ['CRUD Operations', 'Responsive Design', 'Modern UI'],
      status: 'request',
      color: 'green'
    },
    {
      title: 'Simple Todo App',
      tech: ['JavaScript', 'HTML', 'CSS'],
      description: 'A beginner-friendly project to manage daily tasks locally using browser storage.',
      features: ['Local Storage', 'Task Management', 'Clean Interface'],
      status: 'request',
      color: 'yellow'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#34;60&#34; height=&#34;60&#34; viewBox=&#34;0 0 60 60&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;%3E%3Cg fill=&#34;none&#34; fill-rule=&#34;evenodd&#34;%3E%3Cg fill=&#34;%239C92AC&#34; fill-opacity=&#34;0.05&#34;%3E%3Ccircle cx=&#34;30&#34; cy=&#34;30&#34; r=&#34;4&#34;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse leading-tight">
                  Khaled Emarah
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-200">Self-Taught Full Stack Developer</h2>
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                <p className="text-lg sm:text-xl leading-relaxed text-blue-100">
                  Specialized in <span className="text-cyan-300 font-bold">scalable web applications</span> using Next.js, Prisma, and PostgreSQL. 
                  Built multiple projects in <span className="text-pink-300 font-bold">under 2 years</span> without external tutors.
                </p>
              </div>
            </div>
            
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-cyan-300 text-center lg:text-left">Contact</h3>
              <div className="space-y-4">
                {[
                  { Icon: Phone, text: '+20 1552201424' },
                  { Icon: Mail, text: 'kmarahemarah@gmail.com', breakText: true },
                  { Icon: Linkedin, text: 'LinkedIn Profile' },
                  { Icon: Globe, text: 'lms-progect.vercel.app', breakText: true },
                  { Icon: Github, text: 'Available Upon Request' }
                ].map(({ Icon, text, breakText }, i) => (
                  <div key={i} className="flex items-start sm:items-center space-x-3 text-blue-100 hover:text-cyan-300 transition-all hover:translate-x-1 sm:hover:translate-x-2">
                    <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span className={`font-medium text-sm sm:text-base ${breakText ? 'break-all sm:break-normal' : ''}`}>{text}</span>
                  </div>
                ))}
                <a href="https://drive.usercontent.google.com/u/0/uc?id=1lzrwNTt0xqhJJG9QZERcg4TB84U3OuxC&export=download">
                 <div  className="flex items-start sm:items-center space-x-3 text-blue-100 hover:text-cyan-300 transition-all hover:translate-x-1 sm:hover:translate-x-2">
                 <FileUser className='w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0'/>
                    <span className={`font-medium text-sm sm:text-base `}>Download MY CV  </span>
                  </div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 sm:space-y-12">
        
        {/* Technical Skills */}
        <section className="group">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-8 py-6 sm:py-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white flex items-center justify-center sm:justify-start">
                <Code className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 mr-2 sm:mr-4" />
                Technical Skills
              </h2>
            </div>
            
            <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="group/skill">
                  <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:gap-6">
                    <div className="lg:w-48 flex-shrink-0 text-center lg:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover/skill:text-purple-600 transition-colors">{category}</h3>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                        {skillList.map((skill) => (
                          <span 
                            key={skill} 
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 sm:hover:scale-110 transition-all duration-300 "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="group">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 px-4 sm:px-8 py-6 sm:py-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white flex items-center justify-center sm:justify-start">
                <Folder className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 mr-2 sm:mr-4" />
                Featured Projects
              </h2>
            </div>
            
            <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
              {projects.map((project, index) => (
                <div key={project.title} className="relative group/project">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-xl sm:rounded-l-2xl opacity-0 group-hover/project:opacity-100 transition-opacity"></div>
                    
                    <div className="flex flex-col gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 group-hover/project:text-purple-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 sm:px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full text-xs sm:text-sm font-bold shadow-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-center sm:justify-start">
                        {project.status === 'live' ? (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                            Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold shadow-lg">
                            <Github className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                            On Request
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-medium text-center sm:text-left">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {project.features.map((feature) => (
                        <div key={feature} className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow text-center sm:text-left">
                          <p className="text-xs sm:text-sm font-bold text-indigo-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Education */}
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center justify-center sm:justify-start">
              <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-purple-600" />
              Education
            </h3>
            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border border-purple-200">
              <h4 className="font-semibold text-purple-900 text-center sm:text-left">Secondary School</h4>
              <p className="text-purple-700 text-sm mb-2 text-center sm:text-left">Third Year, Egypt</p>
              <p className="text-purple-600 text-xs text-center sm:text-left">Focused on software development through self-learning and hands-on projects</p>
            </div>
          </div>
  
          {/* Languages */}
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center justify-center sm:justify-start">
              <Languages className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-red-600" />
              Languages
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 sm:p-3 bg-red-50 rounded-lg border border-red-200">
                <span className="font-medium text-red-900 text-sm sm:text-base">Arabic</span>
                <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Native</span>
              </div>
              <div className="flex justify-between items-center p-2 sm:p-3 bg-red-50 rounded-lg border border-red-200">
                <span className="font-medium text-red-900 text-sm sm:text-base">English</span>
                <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">B1-B2</span>
              </div>
            </div>
          </div>
  
          {/* Interests */}
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center justify-center sm:justify-start">
              <Heart className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-pink-600" />
              Interests
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-pink-50 rounded-lg p-2 sm:p-3 border border-pink-200">
                <p className="text-pink-700 text-xs sm:text-sm font-medium text-center sm:text-left">🤖 AI-assisted Development</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-2 sm:p-3 border border-pink-200">
                <p className="text-pink-700 text-xs sm:text-sm font-medium text-center sm:text-left">🏗️ Web App Architecture</p>
              </div>
              <div className="bg-pink-50 rounded-lg p-2 sm:p-3 border border-pink-200">
                <p className="text-pink-700 text-xs sm:text-sm font-medium text-center sm:text-left">🧩 Problem-Solving</p>
              </div>
            </div>
          </div>
  
          {/* Key Stats */}
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/50 p-4 sm:p-6 hover:shadow-xl transition-all hover:scale-105">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center justify-center sm:justify-start">
              <Trophy className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-yellow-600" />
              Highlights
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-yellow-50 rounded-lg p-2 sm:p-3 border border-yellow-200">
                <p className="text-yellow-700 text-xs sm:text-sm font-medium text-center sm:text-left">⚡ Self-taught in &lt;2 years</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 sm:p-3 border border-yellow-200">
                <p className="text-yellow-700 text-xs sm:text-sm font-medium text-center sm:text-left">🚀 End-to-end solutions</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 sm:p-3 border border-yellow-200">
                <p className="text-yellow-700 text-xs sm:text-sm font-medium text-center sm:text-left">💳 Payment integration</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-center text-white mt-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-lg text-blue-200 mb-6">
            Portfolio: <span className="text-cyan-300 font-semibold">lms-progect.vercel.app</span> | 
            GitHub: <span className="text-cyan-300 font-semibold">Available Upon Request</span>
          </p>
          <p className="text-blue-300">
            Let's create innovative solutions that make a difference
          </p>
        </div>
      </main>
    </div>
    
  );
}