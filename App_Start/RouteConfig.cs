using System.Web.Mvc;
using System.Web.Routing;

namespace alberto.denatale
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute(
                name: "Default",
                url: "Content/{action}/{id}",
                defaults: new { controller = "Content", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Master",
                url: "{*url}",
                defaults: new { controller = "Content", action = "Index" }
            );
        }
    }
}
