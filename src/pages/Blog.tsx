import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingCTA from "@/components/FloatingCTA";
import { blogPosts } from "@/data/blogPosts";
import { articleSchema, breadcrumbSchema } from "@/data/structuredData";
import { usePageTracking } from "@/hooks/usePageTracking";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Star, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  usePageTracking('Blog', 'Blog');

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const structuredData = [
    breadcrumbSchema([
      { name: "Início", url: "/" },
      { name: "Blog", url: "/blog" }
    ])
  ];

  const categories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <div className="min-h-screen">
      <SEO
        title="Blog | Detetive Particular Brasília DF - Artigos e Dicas de Investigação"
        description="Blog do Detetive Regis com artigos sobre investigação conjugal, localização de pessoas, preços de detetive particular e dicas profissionais em Brasília DF."
        keywords="blog detetive particular, artigos investigação, dicas detetive brasília, quanto custa detetive, como descobrir traição"
        canonical="/blog"
        structuredData={structuredData}
      />
      <Helmet>
        {blogPosts.map(post => (
          <script key={post.id} type="application/ld+json">
            {JSON.stringify(articleSchema(post.title, post.excerpt, post.datePublished, post.author))}
          </script>
        ))}
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-detective-navy via-detective-navy/95 to-detective-navy/90">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog Especializado
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Artigos e Dicas de</span>{" "}
            <span className="text-detective-gold">Investigação</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conteúdo profissional baseado em mais de 15 anos de experiência em investigação particular em Brasília DF.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-muted/50 py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <Badge key={cat} variant="outline" className="px-4 py-1.5 text-sm cursor-default border-detective-gold/30 text-detective-navy">
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">

          {/* Featured Post */}
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="block mb-16 group">
              <div className="bg-gradient-to-r from-detective-navy to-detective-navy/90 rounded-2xl p-1 shadow-2xl group-hover:shadow-detective-gold/20 transition-shadow duration-300">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="overflow-hidden aspect-video lg:aspect-auto">
                      <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-4 bg-detective-gold/20 text-detective-gold">
                        {featuredPost.category}
                      </Badge>
                      <h2 className="text-2xl lg:text-3xl font-bold text-detective-navy mb-4 leading-tight group-hover:text-detective-gold transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-professional-grey mb-6 text-lg leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 mb-6 text-sm text-professional-grey">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.datePublished).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <span className="inline-flex items-center text-detective-gold font-semibold group-hover:gap-3 gap-2 transition-all">
                        Ler Artigo Completo <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          <h2 className="text-2xl font-semibold text-detective-navy mb-8 text-center">
            Todos os Artigos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="overflow-hidden aspect-video">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-detective-gold/20 text-detective-gold text-xs">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-detective-navy group-hover:text-detective-gold transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-xs text-professional-grey">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.datePublished).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-professional-grey mb-4 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-detective-gold font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                      Ler artigo <ArrowRight className="w-3 h-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Blog;
