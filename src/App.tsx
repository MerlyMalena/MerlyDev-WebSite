import { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { WatercolorBackground } from './components/WatercolorBackground';
import { Home } from './pages/Home';
import { BlogPage } from './pages/BlogPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { LoadingScreen } from './components/LoadingScreen';
import { PROJECTS_DATA } from './data/projects';
import { BLOGS_DATA } from './data/blogs';

function App() {
  const [loading, setLoading] = useState(true);
  const parseHash = (): { route: PageRoute; id: string | null } => {
    const raw = window.location.hash.replace(/^#\/?/, '');
    if (raw.startsWith('proyecto/')) {
      const id = raw.replace('proyecto/', '');
      return { route: 'proyecto-detalle', id };
    }
    if (raw.startsWith('articulo/')) {
      const id = raw.replace('articulo/', '');
      return { route: 'articulo-detalle', id };
    }
    if (raw === 'blog') return { route: 'blog', id: null };
    if (raw === 'proyectos') return { route: 'proyectos', id: null };
    if (raw === 'skills') return { route: 'skills', id: null };
    return { route: 'home', id: null };
  };

  const initialParsed = parseHash();
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(initialParsed.route);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    initialParsed.route === 'proyecto-detalle' ? initialParsed.id : null
  );
  const [selectedPostId, setSelectedPostId] = useState<string | null>(
    initialParsed.route === 'articulo-detalle' ? initialParsed.id : null
  );

  const navigate = (route: PageRoute, itemId?: string) => {
    setCurrentRoute(route);
    if (route === 'proyecto-detalle' && itemId) {
      setSelectedProjectId(itemId);
      window.location.hash = `/proyecto/${itemId}`;
    } else if (route === 'articulo-detalle' && itemId) {
      setSelectedPostId(itemId);
      window.location.hash = `/articulo/${itemId}`;
    } else if (route === 'home') {
      window.location.hash = '/';
    } else {
      window.location.hash = `/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentRoute !== 'home') {
      setCurrentRoute('home');
      window.location.hash = '/';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash();
      setCurrentRoute(parsed.route);
      if (parsed.route === 'proyecto-detalle' && parsed.id) {
        setSelectedProjectId(parsed.id);
      }
      if (parsed.route === 'articulo-detalle' && parsed.id) {
        setSelectedPostId(parsed.id);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen text-[#323e11] flex flex-col font-serif relative">
      {/* Loading Screen: Honeycomb cell with white background */}
      {loading && <LoadingScreen onLoaded={() => setLoading(false)} />}

      {/* Watercolor Meadow Landscape Background */}
      <WatercolorBackground />

      {/* Navbar with Page Links */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content: Home vs Dedicated Pages */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <Home
            onNavigateBlog={() => navigate('blog')}
            onNavigateProjects={() => navigate('proyectos')}
            onSelectProject={(id) => navigate('proyecto-detalle', id)}
            onSelectPost={(id) => navigate('articulo-detalle', id)}
          />
        )}
        {currentRoute === 'blog' && (
          <BlogPage
            onNavigateHome={() => navigate('home')}
            onSelectPost={(id) => navigate('articulo-detalle', id)}
          />
        )}
        {currentRoute === 'proyectos' && (
          <ProjectsPage
            onNavigateHome={() => navigate('home')}
            onSelectProject={(id) => navigate('proyecto-detalle', id)}
          />
        )}
        {currentRoute === 'skills' && (
          <SkillsPage onNavigateHome={() => navigate('home')} />
        )}
        {currentRoute === 'proyecto-detalle' && (
          <ProjectDetailPage
            projectId={selectedProjectId || PROJECTS_DATA[0].id}
            onBack={() => navigate('proyectos')}
            onSelectOtherProject={(id) => navigate('proyecto-detalle', id)}
          />
        )}
        {currentRoute === 'articulo-detalle' && (
          <BlogDetailPage
            postId={selectedPostId || BLOGS_DATA[0].id}
            onBack={() => navigate('blog')}
            onSelectOtherPost={(id) => navigate('articulo-detalle', id)}
          />
        )}
      </main>

      <Footer />

      {/* Permanent, Smooth Background Lo-Fi Player */}
      <AudioPlayer />
    </div>
  );
}

export default App;
