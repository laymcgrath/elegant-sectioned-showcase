
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamento e gestão de estoque.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800&h=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application'
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações push.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800&h=600',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile App'
    },
    {
      title: 'Portfolio Website',
      description: 'Site de portfólio responsivo com animações suaves e design moderno.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800&h=600',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Website'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard interativo para análise de dados com gráficos em tempo real e relatórios personalizados.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application'
    },
    {
      title: 'Social Media App',
      description: 'Aplicativo de mídia social com feed em tempo real, chat e compartilhamento de mídia.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800&h=600',
      technologies: ['React', 'Socket.io', 'Express', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application'
    },
    {
      title: 'Learning Platform',
      description: 'Plataforma de ensino online com sistema de cursos, quizzes e certificados.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=600',
      technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meu Portfólio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma seleção dos meus projetos mais recentes e impactantes, 
            demonstrando minhas habilidades e criatividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full hover:bg-slate-100 transition-colors"
                    title="Ver projeto"
                  >
                    <ExternalLink size={20} className="text-slate-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white rounded-full hover:bg-slate-100 transition-colors"
                    title="Ver código"
                  >
                    <Github size={20} className="text-slate-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-600 bg-slate-50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
