#!/usr/bin/env bash

set -e

# ==========================================
# Root Directories
# ==========================================

mkdir -p "src/app"
mkdir -p "src/components"
mkdir -p "src/features"
mkdir -p "src/actions"
mkdir -p "src/lib"
mkdir -p "src/prisma"
mkdir -p "src/emails"
mkdir -p "src/hooks"
mkdir -p "src/types"
mkdir -p "src/validations"

# ==========================================
# Public Routes
# ==========================================

mkdir -p "src/app/(public)"
mkdir -p "src/app/(public)/about"
mkdir -p "src/app/(public)/products"
mkdir -p "src/app/(public)/products/[slug]"
mkdir -p "src/app/(public)/projects"
mkdir -p "src/app/(public)/contact"
mkdir -p "src/app/(public)/unauthorized"

# ==========================================
# Auth Routes
# ==========================================

mkdir -p "src/app/(auth)"
mkdir -p "src/app/(auth)/login"
mkdir -p "src/app/(auth)/register"
mkdir -p "src/app/(auth)/forgot-password"

# ==========================================
# User Dashboard
# ==========================================

mkdir -p "src/app/dashboard"
mkdir -p "src/app/dashboard/profile"
mkdir -p "src/app/dashboard/enquiries"
mkdir -p "src/app/dashboard/downloads"

# ==========================================
# Admin Routes
# ==========================================

mkdir -p "src/app/admin"

mkdir -p "src/app/admin/products"
mkdir -p "src/app/admin/products/create"
mkdir -p "src/app/admin/products/[id]"
mkdir -p "src/app/admin/products/[id]/edit"

mkdir -p "src/app/admin/categories"
mkdir -p "src/app/admin/categories/create"
mkdir -p "src/app/admin/categories/[id]"
mkdir -p "src/app/admin/categories/[id]/edit"

mkdir -p "src/app/admin/enquiries"
mkdir -p "src/app/admin/enquiries/[id]"

mkdir -p "src/app/admin/users"
mkdir -p "src/app/admin/users/[id]"

mkdir -p "src/app/admin/analytics"

# ==========================================
# API Routes
# ==========================================

mkdir -p "src/app/api"
mkdir -p "src/app/api/auth"
mkdir -p "src/app/api/auth/[...nextauth]"
mkdir -p "src/app/api/upload"
mkdir -p "src/app/api/webhook"

# ==========================================
# Components
# ==========================================

mkdir -p "src/components/common"
mkdir -p "src/components/forms"
mkdir -p "src/components/layout"
mkdir -p "src/components/products"
mkdir -p "src/components/dashboard"
mkdir -p "src/components/admin"
mkdir -p "src/components/cards"
mkdir -p "src/components/tables"
mkdir -p "src/components/ui"

# ==========================================
# Features
# ==========================================

mkdir -p "src/features/auth"
mkdir -p "src/features/products"
mkdir -p "src/features/enquiries"
mkdir -p "src/features/categories"
mkdir -p "src/features/users"
mkdir -p "src/features/dashboard"
mkdir -p "src/features/analytics"

# ==========================================
# Actions
# ==========================================

mkdir -p "src/actions/auth"
mkdir -p "src/actions/products"
mkdir -p "src/actions/enquiries"
mkdir -p "src/actions/categories"
mkdir -p "src/actions/users"

# ==========================================
# Root App Files
# ==========================================

touch "src/app/layout.tsx"
touch "src/app/not-found.tsx"
touch "src/app/sitemap.ts"
touch "src/app/robots.ts"

# ==========================================
# Public Pages
# ==========================================

touch "src/app/(public)/page.tsx"
touch "src/app/(public)/about/page.tsx"
touch "src/app/(public)/products/page.tsx"
touch "src/app/(public)/products/[slug]/page.tsx"
touch "src/app/(public)/projects/page.tsx"
touch "src/app/(public)/contact/page.tsx"
touch "src/app/(public)/unauthorized/page.tsx"

# ==========================================
# Auth Pages
# ==========================================

touch "src/app/(auth)/login/page.tsx"
touch "src/app/(auth)/register/page.tsx"
touch "src/app/(auth)/forgot-password/page.tsx"

# ==========================================
# Dashboard Pages
# ==========================================

touch "src/app/dashboard/page.tsx"
touch "src/app/dashboard/profile/page.tsx"
touch "src/app/dashboard/enquiries/page.tsx"
touch "src/app/dashboard/downloads/page.tsx"

# ==========================================
# Admin Pages
# ==========================================

touch "src/app/admin/page.tsx"

touch "src/app/admin/products/page.tsx"
touch "src/app/admin/products/create/page.tsx"
touch "src/app/admin/products/[id]/edit/page.tsx"

touch "src/app/admin/categories/page.tsx"
touch "src/app/admin/categories/create/page.tsx"
touch "src/app/admin/categories/[id]/edit/page.tsx"

touch "src/app/admin/enquiries/page.tsx"
touch "src/app/admin/enquiries/[id]/page.tsx"

touch "src/app/admin/users/page.tsx"
touch "src/app/admin/users/[id]/page.tsx"

touch "src/app/admin/analytics/page.tsx"

# ==========================================
# API Files
# ==========================================

touch "src/app/api/auth/[...nextauth]/route.ts"
touch "src/app/api/upload/route.ts"
touch "src/app/api/webhook/route.ts"

# ==========================================
# Lib Files
# ==========================================

touch "src/lib/auth.ts"
touch "src/lib/prisma.ts"
touch "src/lib/resend.ts"
touch "src/lib/upload.ts"
touch "src/lib/permissions.ts"
touch "src/lib/seo.ts"
touch "src/lib/whatsapp.ts"
touch "src/lib/utils.ts"

# ==========================================
# Prisma Files
# ==========================================

touch "src/prisma/schema.prisma"
touch "src/prisma/seed.ts"

# ==========================================
# Email Templates
# ==========================================

touch "src/emails/enquiry-confirmation.tsx"
touch "src/emails/admin-notification.tsx"
touch "src/emails/welcome.tsx"

# ==========================================
# Hooks
# ==========================================

touch "src/hooks/use-auth.ts"
touch "src/hooks/use-role.ts"
touch "src/hooks/use-mobile.ts"

# ==========================================
# Types
# ==========================================

touch "src/types/auth.ts"
touch "src/types/product.ts"
touch "src/types/enquiry.ts"
touch "src/types/category.ts"
touch "src/types/user.ts"

# ==========================================
# Validation Schemas
# ==========================================

touch "src/validations/auth.ts"
touch "src/validations/product.ts"
touch "src/validations/enquiry.ts"
touch "src/validations/category.ts"

# ==========================================
# Middleware
# ==========================================

touch "src/middleware.ts"

echo "✅ Industrial Automation Project Structure Created Successfully"