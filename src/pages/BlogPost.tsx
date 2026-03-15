import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts } from "@/data/blogPosts";
import { articleSchema, breadcrumbSchema } from "@/data/structuredData";
import { usePageTracking } from "@/hooks/usePageTracking";
import { trackWhatsAppClick } from "@/utils/analytics";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, MessageCircle, Share2, BookOpen } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  usePageTracking(post?.title || 'Blog Post', 'Blog');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  const structuredData = [
    articleSchema(post.title, post.excerpt, post.datePublished, post.author),
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` }
    ])
  ];

  const handleWhatsAppClick = () => {
    const message = `Olá! Li o artigo "${post.title}" e gostaria de mais informações.`;
    const waUrl = `https://wa.me/5561982844543?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick(`Blog - ${post.title}`);
    window.open(waUrl, '_blank');
  };

  // Convert markdown-like content to HTML sections
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      
      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="text-2xl md:text-3xl font-bold text-detective-navy mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={i} className="text-xl md:text-2xl font-semibold text-detective-navy mt-8 mb-3">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('#### ')) {
        return <h4 key={i} className="text-lg font-semibold text-detective-navy mt-6 mb-2">{trimmed.replace('#### ', '')}</h4>;
      }
      if (trimmed.startsWith('---')) {
        return <hr key={i} className="my-8 border-border" />;
      }
      if (trimmed.startsWith('| ') && trimmed.endsWith('|')) {
        // Simple table row rendering
        const cells = trimmed.split('|').filter(c => c.trim());
        if (cells.every(c => c.trim().match(/^[-]+$/))) return null; // separator row
        const isHeader = i > 0 && content.split('\n')[i + 1]?.trim().match(/^\|[\s-|]+\|$/);
        return (
          <div key={i} className={`grid gap-4 py-2 px-4 ${isHeader ? 'font-semibold bg-muted/50 rounded-t-lg' : 'border-b border-border'}`} style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}>
            {cells.map((cell, ci) => (
              <span key={ci} className="text-sm text-professional-grey">{cell.trim()}</span>
            ))}
          </div>
        );
      }
      if (trimmed.startsWith('- ✅') || trimmed.startsWith('- ❌')) {
        return <p key={i} className="ml-4 my-1 text-professional-grey">{trimmed.replace('- ', '')}</p>;
      }
      if (trimmed.startsWith('- **')) {
        const match = trimmed.match(/- \*\*(.+?)\*\*(.*)$/);
        if (match) {
          return <p key={i} className="ml-4 my-1 text-professional-grey"><strong className="text-detective-navy">{match[1]}</strong>{match[2]}</p>;
        }
      }
      if (trimmed.startsWith('- ')) {
        return <li key={i} className="ml-6 my-1 text-professional-grey list-disc">{trimmed.replace('- ', '')}</li>;
      }
      if (trimmed.match(/^\d+\. /)) {
        return <li key={i} className="ml-6 my-1 text-professional-grey list-decimal">{trimmed.replace(/^\d+\. /, '')}</li>;
      }
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return <p key={i} className="font-semibold text-detective-navy mt-4 mb-2">{trimmed.replace(/\*\*/g, '')}</p>;
      }
      if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
        return <p key={i} className="text-sm italic text-professional-grey mt-2">{trimmed.replace(/\*/g, '')}</p>;
      }
      if (trimmed.startsWith('**')) {
        const parts = trimmed.split('**');
        return (
          <p key={i} className="my-2 text-professional-grey leading-relaxed">
            {parts.map((part, pi) => pi % 2 === 1 ? <strong key={pi} className="text-detective-navy">{part}</strong> : part)}
          </p>
        );
      }
      return <p key={i} className="my-2 text-professional-grey leading-relaxed">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.seoKeywords}
        canonical={`/blog/${post.slug}`}
        structuredData={structuredData}
      />
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 py-3 pt-20" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Início</Link></li>
            <li className="text-muted-foreground">/</li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            <li className="text-muted-foreground">/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">{post.title}</li>
          </ol>
        </div>
      </nav>

      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Header */}
          <header className="mb-10">
            <Badge className="mb-4 bg-detective-gold/20 text-detective-gold">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-detective-navy mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-professional-grey mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-professional-grey border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-detective-gold" />
                <span>Detetive {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-detective-gold" />
                {new Date(post.datePublished).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-detective-gold" />
                {post.readTime} de leitura
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 bg-muted rounded-full text-sm text-professional-grey">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-detective-navy to-detective-navy/90 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Precisa de Ajuda Profissional?</h3>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Fale com o Detetive Regis para uma consulta sigilosa e gratuita sobre o seu caso.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp (61) 98284-4543
            </Button>
          </div>

          {/* Navigation */}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {prevPost && (
              <Link to={`/blog/${prevPost.slug}`} className="group p-4 border border-border rounded-xl hover:border-detective-gold/50 transition-colors">
                <div className="flex items-center gap-2 text-sm text-professional-grey mb-1">
                  <ArrowLeft className="w-3 h-3" /> Artigo anterior
                </div>
                <p className="text-detective-navy font-medium group-hover:text-detective-gold transition-colors text-sm">{prevPost.title}</p>
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="group p-4 border border-border rounded-xl hover:border-detective-gold/50 transition-colors md:text-right md:ml-auto">
                <div className="flex items-center justify-end gap-2 text-sm text-professional-grey mb-1">
                  Próximo artigo <ArrowRight className="w-3 h-3" />
                </div>
                <p className="text-detective-navy font-medium group-hover:text-detective-gold transition-colors text-sm">{nextPost.title}</p>
              </Link>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-detective-navy mb-6">Artigos Relacionados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(rp => (
                  <Link key={rp.id} to={`/blog/${rp.slug}`} className="group p-4 border border-border rounded-xl hover:border-detective-gold/50 hover:shadow-lg transition-all">
                    <Badge className="mb-2 bg-detective-gold/20 text-detective-gold text-xs">{rp.category}</Badge>
                    <h4 className="font-semibold text-detective-navy group-hover:text-detective-gold transition-colors text-sm mb-2">{rp.title}</h4>
                    <p className="text-xs text-professional-grey">{rp.readTime} de leitura</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPost;
