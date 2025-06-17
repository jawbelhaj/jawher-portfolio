// PUBLIC ACCESS (No Authentication Required)
export const publicRoutes = [
  "/", // ✅ Homepage - Anyone can view
  "/about", // ✅ About section - Public
  "/projects", // ✅ Projects - Public showcase
  "/skills", // ✅ Skills - Open access
  "/experience", // ✅ Experience - Public
  "/certifications", // ✅ Certifications - Public
  "/contact", // ✅ Contact form - Anyone can use
]

// PRIVATE ACCESS (JWT Authentication Required)
export const privateRoutes = [
  "/dashboard", // 🔒 Your admin dashboard
  "/admin", // 🔒 Admin panel
  "/api/admin/*", // 🔒 Admin API endpoints
  "/client-portal/*", // 🔒 Enterprise client features
  "/analytics/admin", // 🔒 Private analytics
]

// ENTERPRISE CLIENT ACCESS (When You Get Clients)
export const enterpriseRoutes = [
  "/client/dashboard", // 🏢 Client-specific dashboard
  "/client/projects", // 🏢 Client project management
  "/client/reports", // 🏢 Client reports
  "/api/client/*", // 🏢 Client API endpoints
]
