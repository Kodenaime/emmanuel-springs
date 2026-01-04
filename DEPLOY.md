# Deployment Guide for Hostinger

This guide explains how to deploy your Next.js application to Hostinger Web Hosting using the Static Export method.

## Prerequisites

- Access to your Hostinger Control Panel (hPanel).
- Ensure your project is built successfully locally.

## Step 1: Build the Project

Run the build command in your terminal:

```bash
npm run build
```

This will create an `out` folder in your project directory containing the static HTML, CSS, and JavaScript files.

## Step 2: Prepare for Upload

1.  Locate the `out` folder in your project root.
2.  **Zip the contents** of the `out` folder (select all files inside `out` -> Right-click -> Send to -> Compressed (zipped) folder). _Do not zip the `out` folder itself, zip the **contents** inside it._

## Step 3: Upload to Hostinger

1.  Log in to your **Hostinger hPanel**.
2.  Go to **Files > File Manager**.
3.  Navigate to the `public_html` directory of your text domain.
4.  **Delete** any default files (like `default.php`).
5.  Click the **Upload** icon (up arrow) and select your zipped file.
6.  Once uploaded, **Right-click** the zip file and select **Extract**.
7.  Extract files to the current directory (`.` or leave path empty).
8.  Verify that your `index.html` and other assets are now directly in `public_html`.
9.  You can now delete the zip file.

## Step 4: Verify

Visit your website URL. Your Next.js application should now be live!

## Troubleshooting

- **Images not showing?** Ensure `images: { unoptimized: true }` is in `next.config.ts`.
- **404 on refresh?** On standard web hosting, refreshing a page like `/about` might give a 404 because the server looks for a folder named `about`.
  - _Fix_: Next.js static export generates `about.html`.
  - You may need to configure `.htaccess` for clean URLs if you want to remove the `.html` extension, but usually, Next.js handles links correctly.
