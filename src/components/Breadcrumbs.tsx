import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { name: "Início", url: "/" }
    ];
    
    switch (location.pathname) {
      case "/servicos-ciberneticos":
        items.push({ name: "Serviços Cibernéticos", url: "/servicos-ciberneticos" });
        break;
      case "/investigacao-juridica": 
        items.push({ name: "Investigação Jurídica", url: "/investigacao-juridica" });
        break;
      default:
        break;
    }
    
    return items;
  };

  const breadcrumbs = getBreadcrumbs();
  
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-muted/50 py-3" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
              )}
              {index === 0 && <Home className="w-4 h-4 mr-2" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;