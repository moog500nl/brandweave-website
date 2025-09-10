import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

interface BreadcrumbNavItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbNavItem[];
}

export const BreadcrumbNav = ({ items }: BreadcrumbNavProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from current path if items not provided
  const generateBreadcrumbs = (): BreadcrumbNavItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbNavItem[] = [{ label: "Home", href: "/" }];
    
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      if (segment === "blog") label = "Blog";
      if (segment === "about") label = "About";
      if (segment === "contact") label = "Contact";
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <>
              <BreadcrumbItem key={index}>
                {item.href ? (
                  <BreadcrumbLink asChild>
                    <Link to={item.href} className="flex items-center">
                      {index === 0 && <Home className="w-4 h-4 mr-1" />}
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="flex items-center">
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};