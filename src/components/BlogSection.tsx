import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-detective-gold/20 text-detective-gold border-detective-gold/30">
            <TrendingUp className="w-4 h-4 mr-2" />
            Blog Especializado
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-detective-navy mb-6">
            Artigos de Autoridade em Investigação
          </h2>
          <p className="text-lg text-professional-grey max-w-3xl mx-auto">
            Conteúdo especializado baseado em mais de 15 anos de experiência prática 
            em investigação particular em Brasília DF.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`} className="block mb-16 group">
            <div className="bg-gradient-to-r from-detective-navy to-detective-navy/90 rounded-2xl p-1 shadow-2xl group-hover:shadow-detective-gold/20 transition-shadow">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-detective-navy/10 to-detective-gold/10 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Star className="w-16 h-16 text-detective-gold mx-auto mb-4" />
                      <span className="text-detective-navy font-bold text-lg">Artigo em Destaque</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-detective-gold/20 text-detective-gold">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-detective-navy mb-4 leading-tight group-hover:text-detective-gold transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-professional-grey mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-professional-grey">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.datePublished).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <span className="mt-4 inline-flex items-center text-detective-gold font-semibold group-hover:gap-3 gap-2 transition-all">
                      Ler Artigo Completo <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-detective-navy/5 to-detective-gold/10 p-6 flex items-center justify-center aspect-video">
                  <BookOpen className="w-12 h-12 text-detective-gold/50 group-hover:text-detective-gold transition-colors" />
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
                  <CardDescription className="text-professional-grey leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <span className="mt-4 inline-flex items-center text-detective-gold font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                    Ler artigo <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Ver todos */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-detective-navy text-white font-semibold rounded-lg hover:bg-detective-navy/90 transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Artigos ({blogPosts.length})
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
